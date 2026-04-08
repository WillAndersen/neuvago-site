"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useAccountProfile } from "@/hooks/useAccountProfile"
import {
  toDisplayLabel,
  toDisplayName,
  toSubscriptionLabel,
} from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

type StartSurface = "account" | "open_app"

type PreferencesSummary = {
  emailUpdatesEnabled: boolean
  accountRemindersEnabled: boolean
  preferredStartSurface: StartSurface
}

type SessionRow = {
  id: string
  started_at: string | null
}

export default function AccountPage() {
  const router = useRouter()
  const { isLoading, isSignedIn, user, profile } = useAccountProfile()

  const [isSigningOut, setIsSigningOut] = useState(false)
  const [isCheckingVerification, setIsCheckingVerification] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [isLoadingPreferences, setIsLoadingPreferences] = useState(true)
  const [preferences, setPreferences] = useState<PreferencesSummary | null>(null)
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
    }
  }, [isLoading, isSignedIn, profile?.primaryGoal, router])

  useEffect(() => {
    let isMounted = true

    async function loadSecondaryState() {
      if (!user?.id) {
        if (isMounted) {
          setIsCheckingVerification(false)
          setIsLoadingPreferences(false)
          setIsLoadingActivity(false)
        }
        return
      }

      try {
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser()

        if (!isMounted) return

        const verified =
          !!authUser?.email_confirmed_at || authUser?.confirmed_at != null
        setIsVerified(verified)
      } finally {
        if (isMounted) setIsCheckingVerification(false)
      }

      try {
        const { data } = await supabase
          .from("account_preferences")
          .select(
            "email_updates_enabled, account_reminders_enabled, preferred_start_surface"
          )
          .eq("user_id", user.id)
          .maybeSingle()

        if (!isMounted) return

        if (data) {
          setPreferences({
            emailUpdatesEnabled: !!data.email_updates_enabled,
            accountRemindersEnabled: !!data.account_reminders_enabled,
            preferredStartSurface:
              data.preferred_start_surface === "open_app"
                ? "open_app"
                : "account",
          })
        } else {
          setPreferences({
            emailUpdatesEnabled: false,
            accountRemindersEnabled: false,
            preferredStartSurface: "account",
          })
        }
      } finally {
        if (isMounted) setIsLoadingPreferences(false)
      }

      try {
        const { data } = await supabase
          .from("sessions")
          .select("id, started_at")
          .eq("user_id", user.id)
          .order("started_at", { ascending: false })
          .limit(100)

        if (!isMounted) return

        setSessions((data ?? []) as SessionRow[])
      } finally {
        if (isMounted) setIsLoadingActivity(false)
      }
    }

    void loadSecondaryState()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  async function handleSignOut() {
    if (isSigningOut) return

    setIsSigningOut(true)
    setErrorText(null)

    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      router.replace("/login")
      router.refresh()
    } catch (error) {
      console.error("Sign out failed:", error)
      setErrorText("Could not sign out right now. Please try again.")
      setIsSigningOut(false)
    }
  }

  const displayFirstName = toDisplayName(profile?.firstName, user?.firstName)
  const displayPrimaryGoal = toDisplayLabel(profile?.primaryGoal)
  const displaySubscriptionStatus = toSubscriptionLabel(
    profile?.subscriptionStatus
  )
  const displayPreferredStart =
    preferences?.preferredStartSurface === "open_app"
      ? "Open app"
      : "Account home"

  const activitySummary = useMemo(() => {
    const now = new Date()
    const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000
    const thirtyDaysAgo = now.getTime() - 30 * 24 * 60 * 60 * 1000

    const validDates = sessions
      .map((session) => session.started_at)
      .filter((value): value is string => !!value)
      .map((value) => new Date(value))
      .filter((date) => !Number.isNaN(date.getTime()))

    const sessions7d = validDates.filter(
      (date) => date.getTime() >= sevenDaysAgo
    ).length

    const sessions30d = validDates.filter(
      (date) => date.getTime() >= thirtyDaysAgo
    ).length

    const latest = validDates.length > 0 ? validDates[0] : null

    return {
      sessions7d,
      sessions30d,
      latest,
    }
  }, [sessions])

  const latestActivityLabel = activitySummary.latest
    ? activitySummary.latest.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No recent session yet"

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Account
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your account.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago checks your session.
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
              Account home
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Welcome back, {displayFirstName}.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              A calm home for the personal side of your Neuvago experience,
              bringing together your profile, preferences, security, and app
              entry in one place.
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
                  Dashboard overview
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  A calmer control layer for your Neuvago account.
                </h2>

                <div className="mt-8 space-y-6 text-[#5f5a52]">
                  <p className="text-base leading-8">
                    This account home is meant to feel simple, not busy. It
                    gives you one clear place to keep your details aligned, see
                    the status of your account, and continue into the personal
                    side of the experience.
                  </p>

                  <p className="text-base leading-8">
                    Over time, this layer can grow into something more useful,
                    but it should always remain calm, legible, and easy to move
                    through.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[1.75rem] border border-black/5 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    First name
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {displayFirstName}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-black/5 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Primary goal
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {displayPrimaryGoal}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-black/5 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Subscription
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {displaySubscriptionStatus}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Profile and preferences
                  </p>

                  <div className="mt-6 space-y-5">
                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Preferred start surface
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {isLoadingPreferences ? "Checking..." : displayPreferredStart}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Email updates
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {preferences?.emailUpdatesEnabled ? "Enabled" : "Disabled"}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Account reminders
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {preferences?.accountRemindersEnabled ? "Enabled" : "Disabled"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/account/profile"
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Edit profile
                    </Link>

                    <Link
                      href="/account/preferences"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      Adjust preferences
                    </Link>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Security and access
                  </p>

                  <div className="mt-6 space-y-5">
                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Email
                      </p>
                      <p className="mt-2 break-all text-sm leading-7 text-[#5f5a52]">
                        {user?.email || "No email found"}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Verification status
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {isCheckingVerification
                          ? "Checking..."
                          : isVerified
                            ? "Verified"
                            : "Not verified"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/account/security"
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Security settings
                    </Link>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      disabled={isSigningOut}
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSigningOut ? "Signing out..." : "Sign out"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                      Recent activity
                    </p>
                  </div>

                  <Link
                    href="/account/activity"
                    className="inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                  >
                    View activity page
                  </Link>
                </div>

                {isLoadingActivity ? (
                  <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                    Loading recent activity...
                  </p>
                ) : (
                  <div className="mt-6 grid gap-5 sm:grid-cols-3">
                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Latest session
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {latestActivityLabel}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Last 7 days
                      </p>
                      <p className="mt-2 text-lg font-medium text-[#1f1f1c]">
                        {activitySummary.sessions7d}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Last 30 days
                      </p>
                      <p className="mt-2 text-lg font-medium text-[#1f1f1c]">
                        {activitySummary.sessions30d}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] border border-black/5 bg-[#efe9df] p-8 shadow-[0_14px_40px_rgba(0,0,0,0.03)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Continue your experience
                </p>

                {errorText ? (
                  <div className="mt-6 rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                    {errorText}
                  </div>
                ) : null}

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
                    href="/research"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                  >
                    Explore research
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Dashboard note
                </p>

                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  This account home is intentionally light. It should feel like a
                  calm dashboard, not a heavy control panel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
