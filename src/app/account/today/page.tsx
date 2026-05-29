"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useRequireAccountAccess } from "@/hooks/useRequireAccountAccess"
import {
  toDisplayLabel,
  toDisplayName,
  toSubscriptionLabel,
} from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

type StartSurface = "account" | "open_app"

type PreferencesSummary = {
  preferredStartSurface: StartSurface
}

type TodayCheckinRow = {
  variant: string | null
  stress_score: number | null
  calm_body_score: number | null
  energy_score: number | null
  sleep_readiness_score: number | null
  created_at: string | null
}

type RawSessionRow = {
  id: string
  protocol_id: string
  started_at: string | null
  completed_at: string | null
  completion_percent: number | null
  playback_position_seconds: number | null
}

type ProtocolRow = {
  id: string
  slug: string
  title: string
  category: string
  duration_seconds: number | null
}

type RecentSession = {
  id: string
  protocolSlug: string
  title: string
  category: string | null
  durationSeconds: number | null
  startedAt: string | null
  completedAt: string | null
  completionPercent: number
  playbackPositionSeconds: number
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

function getTodayState(checkin: TodayCheckinRow | null) {
  if (!checkin) {
    return {
      title: "No recent check-in yet",
      description:
        "Open the app when you want a more personal daily signal and a stronger read on what may fit best today.",
    }
  }

  const stress = checkin.stress_score ?? 0
  const calmBody = checkin.calm_body_score ?? 0
  const energy = checkin.energy_score ?? 0
  const sleepReadiness = checkin.sleep_readiness_score ?? 0
  const isEvening = checkin.variant === "evening"

  if (isEvening && sleepReadiness > 0 && sleepReadiness <= 2) {
    return {
      title: "Sleep support may matter more tonight",
      description:
        "Your most recent signals suggest that winding down and helping the body settle may be the strongest direction right now.",
    }
  }

  if (stress >= 4 || (calmBody > 0 && calmBody <= 2)) {
    return {
      title: "Your system may be carrying more load today",
      description:
        "A calmer reset may be the most useful next step when activation feels elevated or the body is harder to bring back down.",
    }
  }

  if (energy > 0 && energy <= 2) {
    return {
      title: "Energy looks lower today",
      description:
        "A more restorative or supportive direction may fit better than anything intense when energy is limited.",
    }
  }

  if (stress > 0 && stress <= 2 && calmBody >= 4) {
    return {
      title: "Today looks relatively steady",
      description:
        "This can be a good moment to reinforce calm, clarity, and a routine that feels easy to return to.",
    }
  }

  return {
    title: "Today holds a mixed signal",
    description:
      "A shorter, calmer direction is often the best place to begin when the body feels neither fully settled nor clearly overloaded.",
  }
}

function getRecommendedSession(args: {
  primaryGoal: string | null | undefined
  checkin: TodayCheckinRow | null
}) {
  const { primaryGoal, checkin } = args
  const stress = checkin?.stress_score ?? 0
  const calmBody = checkin?.calm_body_score ?? 0
  const energy = checkin?.energy_score ?? 0
  const sleepReadiness = checkin?.sleep_readiness_score ?? 0
  const isEvening = checkin?.variant === "evening"

  if (isEvening || primaryGoal === "sleep" || sleepReadiness > 0 && sleepReadiness <= 2) {
    return {
      title: "Evening wind-down",
      category: "sleep",
      duration: "5–8 min",
      description:
        "A softer next step for evenings when unwinding feels harder than it should and the body needs a gentler transition toward rest.",
      rationale: "Strong fit when sleep support, evening activation, or low sleep readiness is the main signal.",
      primaryHref: "/account/sessions",
      primaryLabel: "Choose a sleep-supportive session",
    }
  }

  if (primaryGoal === "recovery" || (energy > 0 && energy <= 2)) {
    return {
      title: "Recovery reset",
      category: "recovery",
      duration: "6–10 min",
      description:
        "A more restorative direction for moments when energy is lower and the goal is to come back more steadily rather than do more.",
      rationale: "Strong fit when recovery, lower energy, or return after stress is the main need.",
      primaryHref: "/account/sessions",
      primaryLabel: "Choose a recovery session",
    }
  }

  if (primaryGoal === "focus" && stress <= 2 && calmBody >= 3) {
    return {
      title: "Calm focus support",
      category: "focus",
      duration: "4–6 min",
      description:
        "A steadier route when the goal is clarity and grounded focus without adding more pressure or intensity.",
      rationale: "Strong fit when your baseline seems steady enough to support clearer focus.",
      primaryHref: "/account/sessions",
      primaryLabel: "Choose a focus session",
    }
  }

  return {
    title: "Calmer downshift",
    category: "stress",
    duration: "6–8 min",
    description:
      "A reliable starting point when the body feels loaded, activated, or simply harder to settle than usual.",
    rationale: "Strong fit when stress, activation, or nervous system load seems like the main pattern right now.",
    primaryHref: "/account/sessions",
    primaryLabel: "Choose a calming session",
  }
}

export default function AccountTodayPage() {
  const { isLoading, user, profile } = useRequireAccountAccess()

  const [isLoadingToday, setIsLoadingToday] = useState(true)
  const [preferences, setPreferences] = useState<PreferencesSummary | null>(null)
  const [todayCheckin, setTodayCheckin] = useState<TodayCheckinRow | null>(null)
  const [recentSessions, setRecentSessions] = useState<RecentSession[]>([])
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadToday() {
      if (!user?.id) {
        if (isMounted) setIsLoadingToday(false)
        return
      }

      try {
        const preferencesPromise = supabase
          .from("account_preferences")
          .select("preferred_start_surface")
          .eq("user_id", user.id)
          .maybeSingle()

        const today = new Date().toISOString().slice(0, 10)

        const checkinPromise = supabase
          .from("daily_checkins")
          .select(
            "variant, stress_score, calm_body_score, energy_score, sleep_readiness_score, created_at"
          )
          .eq("user_id", user.id)
          .gte("created_at", `${today}T00:00:00.000Z`)
          .lt("created_at", `${today}T23:59:59.999Z`)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle()

        const sessionsPromise = supabase
          .from("sessions")
          .select(
            "id, protocol_id, started_at, completed_at, completion_percent, playback_position_seconds"
          )
          .eq("user_id", user.id)
          .order("started_at", { ascending: false })
          .limit(12)

        const [preferencesResult, checkinResult, sessionsResult] =
          await Promise.all([preferencesPromise, checkinPromise, sessionsPromise])

        if (!isMounted) return

        if (preferencesResult.error) throw preferencesResult.error
        if (checkinResult.error) throw checkinResult.error
        if (sessionsResult.error) throw sessionsResult.error

        setPreferences({
          preferredStartSurface:
            preferencesResult.data?.preferred_start_surface === "open_app"
              ? "open_app"
              : "account",
        })

        setTodayCheckin((checkinResult.data ?? null) as TodayCheckinRow | null)

        const sessionRows = (sessionsResult.data ?? []) as RawSessionRow[]
        const protocolIds = Array.from(
          new Set(sessionRows.map((item) => item.protocol_id).filter(Boolean))
        )

        let protocolMap = new Map<string, ProtocolRow>()

        if (protocolIds.length > 0) {
          const protocolsResult = await supabase
            .from("protocols")
            .select("id, slug, title, category, duration_seconds")
            .in("id", protocolIds)

          if (!isMounted) return
          if (protocolsResult.error) throw protocolsResult.error

          protocolMap = new Map(
            ((protocolsResult.data ?? []) as ProtocolRow[]).map((item) => [item.id, item])
          )
        }

        const hydratedSessions: RecentSession[] = sessionRows.map((item) => {
          const protocol = protocolMap.get(item.protocol_id)

          return {
            id: item.id,
            protocolSlug: protocol?.slug ?? item.protocol_id,
            title: protocol?.title ?? "Session",
            category: protocol?.category ?? null,
            durationSeconds: protocol?.duration_seconds ?? null,
            startedAt: item.started_at,
            completedAt: item.completed_at,
            completionPercent: item.completion_percent ?? 0,
            playbackPositionSeconds: item.playback_position_seconds ?? 0,
          }
        })

        setRecentSessions(hydratedSessions)
      } catch (err) {
        if (!isMounted) return

        setErrorText(
          err instanceof Error
            ? err.message
            : "Could not load your daily Neuvago view."
        )
      } finally {
        if (isMounted) setIsLoadingToday(false)
      }
    }

    void loadToday()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  const displayFirstName = toDisplayName(profile?.firstName, user?.firstName, "there")
  const displayPrimaryGoal = toDisplayLabel(profile?.primaryGoal, "Not set yet")
  const displaySubscription = toSubscriptionLabel(profile?.subscriptionStatus)
  const preferredStartLabel =
    preferences?.preferredStartSurface === "open_app" ? "Open app" : "Today"

  const todayState = useMemo(() => getTodayState(todayCheckin), [todayCheckin])

  const recommendation = useMemo(
    () =>
      getRecommendedSession({
        primaryGoal: profile?.primaryGoal,
        checkin: todayCheckin,
      }),
    [profile?.primaryGoal, todayCheckin]
  )

  const continueSession = useMemo(() => {
    return (
      recentSessions.find((session) => {
        return (
          session.completionPercent > 0 &&
          session.completionPercent < 100 &&
          !session.completedAt
        )
      }) ?? null
    )
  }, [recentSessions])

  const latestCompletedSession = useMemo(() => {
    return (
      recentSessions.find((session) => {
        return !!session.completedAt || session.completionPercent >= 100
      }) ?? null
    )
  }, [recentSessions])

  const summary = useMemo(() => {
    const now = Date.now()
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000
    const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000

    const validDates = recentSessions
      .map((session) => session.startedAt)
      .filter((value): value is string => !!value)
      .map((value) => new Date(value))
      .filter((date) => !Number.isNaN(date.getTime()))

    return {
      sessions7d: validDates.filter((date) => date.getTime() >= sevenDaysAgo).length,
      sessions30d: validDates.filter(
        (date) => date.getTime() >= thirtyDaysAgo
      ).length,
      latest: validDates.length > 0 ? validDates[0] : null,
    }
  }, [recentSessions])

  const latestActivityLabel = summary.latest
    ? summary.latest.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No recent session yet"

  if (isLoading || isLoadingToday) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Today
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your daily view.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago loads your recent rhythm, account
                state, and next step.
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
              Today
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Welcome back, {displayFirstName}.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              A calmer desktop home for what to do next, what today looks like,
              and how your Neuvago rhythm is developing over time.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Today state
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {todayState.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
                {todayState.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/open-app"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  Open app bridge
                </Link>

                <Link
                  href="/account/progress"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  View progress
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Recommended next session
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-[#f3efe8] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                  {formatCategory(recommendation.category)}
                </span>
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                  {recommendation.duration}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {recommendation.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
                {recommendation.description}
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Why this fits today
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {recommendation.rationale}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={recommendation.primaryHref}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  {recommendation.primaryLabel}
                </Link>

                <Link
                  href="/account/library"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Browse library
                </Link>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Continue where you left off
                </p>

                {continueSession ? (
                  <>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                      {continueSession.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      {formatCategory(continueSession.category)} ·{" "}
                      {formatDuration(continueSession.durationSeconds)} ·{" "}
                      {Math.round(continueSession.completionPercent)}% complete
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      A session is already in progress. Continue on web if you want
                      to stay in the desktop flow, or continue in the app if that fits better.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/account/session-player/${continueSession.protocolSlug}?sessionId=${continueSession.id}`}
                        className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                      >
                        Continue on web
                      </Link>

                      <Link
                        href="/open-app"
                        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                      >
                        Continue in app
                      </Link>
                    </div>
                  </>
                ) : latestCompletedSession ? (
                  <>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                      {latestCompletedSession.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      Latest completed session ·{" "}
                      {formatSessionDate(latestCompletedSession.startedAt)}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      This session was completed recently. Open the details if you want
                      to review it or start again from a calmer place.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/account/sessions/${latestCompletedSession.protocolSlug}`}
                        className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                      >
                        View details
                      </Link>

                      <Link
                        href="/account/progress"
                        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                      >
                        View progress
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                      No session in progress yet
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      Once you start using Neuvago more, this space will help you
                      continue more smoothly across your daily rhythm.
                    </p>

                    <div className="mt-6">
                      <Link
                        href="/account/sessions"
                        className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                      >
                        Start with sessions
                      </Link>
                    </div>
                  </>
                )}
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Your account snapshot
                </p>

                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Plan: {displaySubscription} · Start surface: {preferredStartLabel}
                </p>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Primary goal
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                      {displayPrimaryGoal}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Recent rhythm
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                          Last 7 days
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-[#1f1f1c]">
                          {summary.sessions7d}
                        </p>
                      </div>

                      <div>
                        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                          Last 30 days
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-[#1f1f1c]">
                          {summary.sessions30d}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Recent activity
              </p>

              {recentSessions.length === 0 ? (
                <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-6">
                  <p className="text-sm leading-7 text-[#5f5a52]">
                    No recent session activity yet. As you start using Neuvago
                    more, this desktop home will become more personal and more
                    useful.
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {recentSessions.slice(0, 4).map((session) => (
                    <div
                      key={session.id}
                      className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5"
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
                    </div>
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
                Quick actions
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/account/sessions"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  Go to sessions
                </Link>

                <Link
                  href="/account/library"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Browse library
                </Link>

                <Link
                  href="/account/progress"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  View progress
                </Link>

                <Link
                  href="/open-app"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Open app bridge
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Today at a glance
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Latest activity
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {latestActivityLabel}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Current desktop role
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    Web is now the calmer companion for choosing, reviewing, and
                    continuing your experience — while active session playback
                    can still flow through the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
