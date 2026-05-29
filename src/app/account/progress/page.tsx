"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useRequireAccountAccess } from "@/hooks/useRequireAccountAccess"
import { toDisplayLabel, toDisplayName } from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

type SessionRow = {
  id: string
  protocol_id: string
  started_at: string | null
  completed_at: string | null
  completion_percent: number | null
  playback_position_seconds: number | null
  mode: string | null
}

type ProtocolRow = {
  id: string
  slug: string
  title: string
  subtitle: string | null
  category: string
  duration_seconds: number | null
}

type CheckinRow = {
  variant: string | null
  stress_score: number | null
  calm_body_score: number | null
  energy_score: number | null
  sleep_readiness_score: number | null
  created_at: string | null
}

type HydratedSession = {
  id: string
  protocolId: string
  protocolSlug: string
  title: string
  category: string | null
  durationSeconds: number | null
  startedAt: string | null
  completedAt: string | null
  completionPercent: number
  playbackPositionSeconds: number
  mode: string | null
}

function formatCategory(category?: string | null) {
  if (!category) return "Session"
  return category.charAt(0).toUpperCase() + category.slice(1)
}

function formatDuration(durationSeconds?: number | null) {
  if (!durationSeconds) return "—"
  return `${Math.floor(durationSeconds / 60)} min`
}

function formatSessionDate(value?: string | null) {
  if (!value) return "No session date"

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "No session date"

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function getLatestCheckinSummary(checkin: CheckinRow | null) {
  if (!checkin) {
    return {
      title: "No recent check-in yet",
      description:
        "As you use check-ins more, this progress layer will start to connect daily signals to the broader rhythm of your sessions.",
    }
  }

  const stress = checkin.stress_score ?? 0
  const calmBody = checkin.calm_body_score ?? 0
  const energy = checkin.energy_score ?? 0
  const sleepReadiness = checkin.sleep_readiness_score ?? 0
  const isEvening = checkin.variant === "evening"

  if (isEvening && sleepReadiness > 0 && sleepReadiness <= 2) {
    return {
      title: "Latest signal points toward evening support",
      description:
        "Your most recent check-in suggests that unwinding and sleep support may matter more than usual right now.",
    }
  }

  if (stress >= 4 || (calmBody > 0 && calmBody <= 2)) {
    return {
      title: "Latest signal suggests more load",
      description:
        "Your most recent check-in suggests that activation or nervous system load may still be elevated.",
    }
  }

  if (energy > 0 && energy <= 2) {
    return {
      title: "Latest signal suggests lower energy",
      description:
        "Your recent pattern may be asking more for recovery and steadier return than for intensity.",
    }
  }

  return {
    title: "Latest signal looks relatively steady",
    description:
      "Your most recent check-in suggests a more settled baseline, which can be a good foundation for calmer consistency.",
  }
}

export default function AccountProgressPage() {
  const { isLoading, user, profile } = useRequireAccountAccess()

  const [isLoadingData, setIsLoadingData] = useState(true)
  const [sessions, setSessions] = useState<HydratedSession[]>([])
  const [recentCheckins, setRecentCheckins] = useState<CheckinRow[]>([])
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadProgress() {
      if (!user?.id) {
        if (isMounted) setIsLoadingData(false)
        return
      }

      try {
        const [sessionsResult, checkinsResult] = await Promise.all([
          supabase
            .from("sessions")
            .select(
              "id, protocol_id, started_at, completed_at, completion_percent, playback_position_seconds, mode"
            )
            .eq("user_id", user.id)
            .order("started_at", { ascending: false })
            .limit(120),
          supabase
            .from("daily_checkins")
            .select(
              "variant, stress_score, calm_body_score, energy_score, sleep_readiness_score, created_at"
            )
            .eq("user_id", user.id)
            .order("created_at", { ascending: false })
            .limit(21),
        ])

        if (!isMounted) return

        if (sessionsResult.error) throw sessionsResult.error
        if (checkinsResult.error) throw checkinsResult.error

        const rawSessions = (sessionsResult.data ?? []) as SessionRow[]
        const protocolIds = Array.from(
          new Set(rawSessions.map((item) => item.protocol_id).filter(Boolean))
        )

        let protocolMap = new Map<string, ProtocolRow>()

        if (protocolIds.length > 0) {
          const protocolsResult = await supabase
            .from("protocols")
            .select("id, slug, title, subtitle, category, duration_seconds")
            .in("id", protocolIds)

          if (!isMounted) return
          if (protocolsResult.error) throw protocolsResult.error

          protocolMap = new Map(
            ((protocolsResult.data ?? []) as ProtocolRow[]).map((item) => [item.id, item])
          )
        }

        const hydratedSessions: HydratedSession[] = rawSessions.map((item) => {
          const protocol = protocolMap.get(item.protocol_id)

          return {
            id: item.id,
            protocolId: item.protocol_id,
            protocolSlug: protocol?.slug ?? item.protocol_id,
            title: protocol?.title ?? "Session",
            category: protocol?.category ?? null,
            durationSeconds: protocol?.duration_seconds ?? null,
            startedAt: item.started_at,
            completedAt: item.completed_at,
            completionPercent: item.completion_percent ?? 0,
            playbackPositionSeconds: item.playback_position_seconds ?? 0,
            mode: item.mode,
          }
        })

        setSessions(hydratedSessions)
        setRecentCheckins((checkinsResult.data ?? []) as CheckinRow[])
      } catch (err) {
        if (!isMounted) return

        setErrorText(
          err instanceof Error ? err.message : "Could not load your progress."
        )
      } finally {
        if (isMounted) setIsLoadingData(false)
      }
    }

    void loadProgress()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  const displayFirstName = toDisplayName(profile?.firstName, user?.firstName, "there")
  const displayGoal = toDisplayLabel(profile?.primaryGoal, "Not set yet")

  const summary = useMemo(() => {
    const now = Date.now()
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000
    const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000

    const validDates = sessions
      .map((session) => session.startedAt)
      .filter((value): value is string => !!value)
      .map((value) => new Date(value))
      .filter((date) => !Number.isNaN(date.getTime()))

    const sessionDates7d = validDates.filter((date) => date.getTime() >= sevenDaysAgo)
    const sessionDates30d = validDates.filter((date) => date.getTime() >= thirtyDaysAgo)

    const uniqueActiveDays7d = new Set(
      sessionDates7d.map((date) => date.toISOString().slice(0, 10))
    ).size

    const completedCount = sessions.filter(
      (session) => !!session.completedAt || session.completionPercent >= 100
    ).length

    const inProgressCount = sessions.filter(
      (session) =>
        !session.completedAt &&
        session.completionPercent > 0 &&
        session.completionPercent < 100
    ).length

    return {
      totalSessions: sessions.length,
      completedCount,
      inProgressCount,
      sessions7d: sessionDates7d.length,
      sessions30d: sessionDates30d.length,
      activeDays7d: uniqueActiveDays7d,
      completionRate:
        sessions.length > 0 ? Math.round((completedCount / sessions.length) * 100) : 0,
      latest:
        validDates.length > 0
          ? validDates[0].toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "No recent session yet",
    }
  }, [sessions])

  const categoryMix = useMemo(() => {
    const now = Date.now()
    const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000

    const counts = new Map<string, number>()

    sessions.forEach((session) => {
      if (!session.startedAt) return

      const date = new Date(session.startedAt)
      if (Number.isNaN(date.getTime()) || date.getTime() < thirtyDaysAgo) return

      const key = formatCategory(session.category)
      counts.set(key, (counts.get(key) ?? 0) + 1)
    })

    const entries = Array.from(counts.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count)

    const total = entries.reduce((sum, item) => sum + item.count, 0)

    return entries.slice(0, 4).map((item) => ({
      ...item,
      share: total > 0 ? Math.round((item.count / total) * 100) : 0,
    }))
  }, [sessions])

  const latestCheckin = recentCheckins[0] ?? null
  const latestCheckinSummary = useMemo(
    () => getLatestCheckinSummary(latestCheckin),
    [latestCheckin]
  )

  const recentSessions = sessions.slice(0, 8)

  if (isLoading || isLoadingData) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Progress
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your progress.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago loads your recent rhythm, sessions,
                and check-in signals.
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
              Progress
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A calmer view of how your rhythm is developing.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Welcome, {displayFirstName}. Progress here is meant to feel useful,
              readable, and grounded — more like a meaningful overview than a
              dense analytics panel.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Completed sessions
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {summary.completedCount}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  In progress
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {summary.inProgressCount}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Last 7 days
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {summary.sessions7d}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Last 30 days
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {summary.sessions30d}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Active days / 7d
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {summary.activeDays7d}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Completion rate
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {summary.completionRate}%
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Latest activity
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {summary.latest}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Category mix
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                How your recent usage is distributed
              </h2>

              {categoryMix.length === 0 ? (
                <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-6">
                  <p className="text-sm leading-7 text-[#5f5a52]">
                    Once you start using more sessions, this area will show which
                    categories are shaping your recent rhythm.
                  </p>
                </div>
              ) : (
                <div className="mt-8 space-y-5">
                  {categoryMix.map((item) => (
                    <div key={item.category}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          {item.category}
                        </p>
                        <p className="text-sm text-[#5f5a52]">
                          {item.count} session{item.count === 1 ? "" : "s"} · {item.share}%
                        </p>
                      </div>

                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#ede7dc]">
                        <div
                          className="h-full rounded-full bg-[#1f1f1c]"
                          style={{ width: `${item.share}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Recent sessions
              </p>

              {recentSessions.length === 0 ? (
                <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-6">
                  <p className="text-sm leading-7 text-[#5f5a52]">
                    No recent session history yet. As you use Neuvago more, this
                    layer will become more meaningful.
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {recentSessions.map((session) => (
                    <Link
                      key={session.id}
                      href={`/account/sessions/${session.protocolSlug}`}
                      className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5 transition hover:bg-white"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                          {formatCategory(session.category)}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                          {formatDuration(session.durationSeconds)}
                        </span>
                      </div>

                      <p className="mt-4 text-lg font-medium text-[#1f1f1c]">
                        {session.title}
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {formatSessionDate(session.startedAt)}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                        {!!session.completedAt || session.completionPercent >= 100
                          ? "Completed"
                          : session.completionPercent > 0
                          ? `${Math.round(session.completionPercent)}% complete`
                          : "Opened session"}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {errorText ? (
              <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                {errorText}
              </div>
            ) : null}
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Current context
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Primary goal
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {displayGoal}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Latest signal
                  </p>
                  <p className="mt-3 text-base font-medium text-[#1f1f1c]">
                    {latestCheckinSummary.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {latestCheckinSummary.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Progress role
              </p>

              <p className="mt-6 text-sm leading-7 text-[#5f5a52]">
                Progress on web is meant to help you read your rhythm over time,
                connect recent use with calmer continuity, and move more easily
                between sessions, library, and the broader Neuvago experience.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/account/today"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  Back to Today
                </Link>

                <Link
                  href="/account/sessions"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Open Sessions
                </Link>

                <Link
                  href="/open-app"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Open app bridge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
