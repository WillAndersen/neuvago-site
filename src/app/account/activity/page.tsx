"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useAccountProfile } from "@/hooks/useAccountProfile"
import { toDisplayName } from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

type SessionRow = {
  id: string
  started_at: string | null
  protocol_id?: string | null
}

function formatSessionDate(value: string | null) {
  if (!value) return "Unknown date"

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "Unknown date"

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function AccountActivityPage() {
  const router = useRouter()
  const { isLoading, isSignedIn, user, profile } = useAccountProfile()

  const [isLoadingActivity, setIsLoadingActivity] = useState(true)
  const [sessions, setSessions] = useState<SessionRow[]>([])
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    if (isLoading) return

    if (!isSignedIn) {
      router.replace("/login")
      return
    }

    if (isSignedIn && !profile?.primaryGoal) {
      router.replace("/onboarding")
      return
    }
  }, [isLoading, isSignedIn, profile?.primaryGoal, router])

  useEffect(() => {
    let isMounted = true

    async function loadSessions() {
      if (!user?.id) {
        if (isMounted) setIsLoadingActivity(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from("sessions")
          .select("id, started_at, protocol_id")
          .eq("user_id", user.id)
          .order("started_at", { ascending: false })
          .limit(100)

        if (error) throw error
        if (!isMounted) return

        setSessions((data ?? []) as SessionRow[])
      } catch (err) {
        if (!isMounted) return
        setErrorText(
          err instanceof Error ? err.message : "Could not load your activity."
        )
      } finally {
        if (isMounted) setIsLoadingActivity(false)
      }
    }

    void loadSessions()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  const summary = useMemo(() => {
    const now = new Date()
    const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000
    const thirtyDaysAgo = now.getTime() - 30 * 24 * 60 * 60 * 1000

    const validDates = sessions
      .map((session) => session.started_at)
      .filter((value): value is string => !!value)
      .map((value) => new Date(value))
      .filter((date) => !Number.isNaN(date.getTime()))

    return {
      total: sessions.length,
      sessions7d: validDates.filter((date) => date.getTime() >= sevenDaysAgo).length,
      sessions30d: validDates.filter((date) => date.getTime() >= thirtyDaysAgo).length,
      latest: validDates.length > 0 ? validDates[0] : null,
    }
  }, [sessions])

  const displayFirstName = toDisplayName(profile?.firstName, user?.firstName, "there")
  const latestLabel = summary.latest
    ? summary.latest.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No recent session yet"

  if (isLoading || isLoadingActivity) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Activity
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your activity.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago loads your recent sessions.
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Activity
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Recent activity for your account.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Welcome, {displayFirstName}. This page gives you a calmer overview
              of recent session activity across your account.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Activity overview
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  A simple view of your recent rhythm.
                </h2>

                <div className="mt-8 space-y-6 text-[#5f5a52]">
                  <p className="text-base leading-8">
                    This page is not meant to feel like a dense analytics panel.
                    It is simply a quieter place to see recent session activity
                    and continuity over time.
                  </p>

                  <p className="text-base leading-8">
                    As the Neuvago system grows, this activity layer can become
                    more informative while still staying calm and legible.
                  </p>
                </div>
              </div>

              {errorText ? (
                <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                  {errorText}
                </div>
              ) : null}

              <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Session history
                </p>

                {sessions.length === 0 ? (
                  <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-6">
                    <p className="text-sm leading-7 text-[#5f5a52]">
                      No recent session activity yet. Once you begin using the app
                      experience more, activity can appear here.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4">
                    {sessions.slice(0, 12).map((session, index) => (
                      <div
                        key={session.id}
                        className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5"
                      >
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                          Session {index + 1}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                          {formatSessionDate(session.started_at)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Activity summary
                </p>

                <div className="mt-6 space-y-5">
                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Latest session
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                      {latestLabel}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Total sessions loaded
                    </p>
                    <p className="mt-2 text-lg font-medium text-[#1f1f1c]">
                      {summary.total}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Last 7 days
                    </p>
                    <p className="mt-2 text-lg font-medium text-[#1f1f1c]">
                      {summary.sessions7d}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Last 30 days
                    </p>
                    <p className="mt-2 text-lg font-medium text-[#1f1f1c]">
                      {summary.sessions30d}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-[#efe9df] p-8 shadow-[0_14px_40px_rgba(0,0,0,0.03)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Quick actions
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/continue"
                    className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Continue
                  </Link>

                  <Link
                    href="/open-app"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                  >
                    Open app bridge
                  </Link>

                  <Link
                    href="/account"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                  >
                    Back to account
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Activity note
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  This activity view is designed to stay readable and supportive,
                  rather than overly analytical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
