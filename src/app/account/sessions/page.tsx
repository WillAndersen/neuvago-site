"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useRequireAccountAccess } from "@/hooks/useRequireAccountAccess"
import { toDisplayLabel, toDisplayName } from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

type ProtocolRow = {
  id: string
  slug: string
  title: string
  subtitle: string | null
  category: string
  duration_seconds: number | null
  description: string | null
  guided_available: boolean
  silent_available: boolean
  is_premium: boolean
}

type FavoriteRow = {
  protocol_id: string
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
  mode: string | null
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

function isLockedProtocol(
  protocol: Pick<ProtocolRow, "is_premium">,
  subscriptionStatus: "free" | "premium" | null | undefined
) {
  return protocol.is_premium && subscriptionStatus !== "premium"
}

function getRecommendedCategory(args: {
  primaryGoal: string | null | undefined
  checkin: TodayCheckinRow | null
}) {
  const { primaryGoal, checkin } = args

  const stress = checkin?.stress_score ?? 0
  const calmBody = checkin?.calm_body_score ?? 0
  const energy = checkin?.energy_score ?? 0
  const sleepReadiness = checkin?.sleep_readiness_score ?? 0
  const isEvening = checkin?.variant === "evening"

  if (isEvening || primaryGoal === "sleep" || (sleepReadiness > 0 && sleepReadiness <= 2)) {
    return "sleep"
  }

  if (primaryGoal === "recovery" || (energy > 0 && energy <= 2)) {
    return "recovery"
  }

  if (primaryGoal === "focus" && stress <= 2 && calmBody >= 3) {
    return "focus"
  }

  return "stress"
}

function getRecommendationCopy(args: {
  category: string
  checkin: TodayCheckinRow | null
  primaryGoal: string | null | undefined
}) {
  const { category, checkin, primaryGoal } = args
  const stress = checkin?.stress_score ?? 0
  const calmBody = checkin?.calm_body_score ?? 0
  const energy = checkin?.energy_score ?? 0
  const sleepReadiness = checkin?.sleep_readiness_score ?? 0
  const isEvening = checkin?.variant === "evening"

  if (category === "sleep") {
    return {
      title: "Sleep-supportive next step",
      description:
        "A calmer route for evenings, low sleep readiness, or moments when unwinding feels harder than it should.",
      rationale:
        isEvening || primaryGoal === "sleep" || sleepReadiness <= 2
          ? "This direction fits best when your current signal points toward winding down and helping the body settle."
          : "A sleep-supportive direction can still be a useful next step when the system needs a softer landing.",
    }
  }

  if (category === "recovery") {
    return {
      title: "Recovery-forward next step",
      description:
        "A steadier route when energy is lower and the body may need restoration more than stimulation.",
      rationale:
        primaryGoal === "recovery" || (energy > 0 && energy <= 2)
          ? "This direction fits best when lower energy or a recovery goal is the strongest signal."
          : "A recovery-focused session can be the clearest place to begin when your system needs more return than effort.",
    }
  }

  if (category === "focus") {
    return {
      title: "Calm-focus next step",
      description:
        "A clearer route when your baseline seems steady enough to support grounded focus without adding pressure.",
      rationale:
        primaryGoal === "focus" && stress <= 2 && calmBody >= 3
          ? "This direction fits best when focus is your goal and your current state looks steady enough to support it."
          : "A calm-focus direction works best when clarity matters, but the body still benefits from staying regulated.",
    }
  }

  return {
    title: "Calming next step",
    description:
      "A reliable route when activation, stress, or nervous system load feels like the main pattern right now.",
    rationale:
      stress >= 4 || (calmBody > 0 && calmBody <= 2)
        ? "This direction fits best when the body feels more loaded, activated, or harder to bring back down."
        : "A calmer reset is often the strongest place to begin when the right next step is not fully obvious yet.",
  }
}

function pickRecommendedProtocol(args: {
  protocols: ProtocolRow[]
  preferredCategory: string
  subscriptionStatus: "free" | "premium" | null | undefined
}) {
  const { protocols, preferredCategory, subscriptionStatus } = args

  const inCategory = protocols.filter((item) => item.category === preferredCategory)
  const unlockedInCategory = inCategory.find(
    (item) => !isLockedProtocol(item, subscriptionStatus)
  )

  if (unlockedInCategory) return unlockedInCategory
  if (inCategory.length > 0) return inCategory[0]

  const unlockedFallback = protocols.find(
    (item) => !isLockedProtocol(item, subscriptionStatus)
  )

  return unlockedFallback ?? protocols[0] ?? null
}

function getSuggestedProtocols(args: {
  protocols: ProtocolRow[]
  preferredCategory: string
  favoriteIds: string[]
  subscriptionStatus: "free" | "premium" | null | undefined
  recommendedId: string | null
}) {
  const { protocols, preferredCategory, favoriteIds, subscriptionStatus, recommendedId } =
    args

  return [...protocols]
    .filter((item) => item.id !== recommendedId)
    .sort((a, b) => {
      const aFavorite = favoriteIds.includes(a.id) ? 1 : 0
      const bFavorite = favoriteIds.includes(b.id) ? 1 : 0
      if (aFavorite !== bFavorite) return bFavorite - aFavorite

      const aCategory = a.category === preferredCategory ? 1 : 0
      const bCategory = b.category === preferredCategory ? 1 : 0
      if (aCategory !== bCategory) return bCategory - aCategory

      const aUnlocked = isLockedProtocol(a, subscriptionStatus) ? 0 : 1
      const bUnlocked = isLockedProtocol(b, subscriptionStatus) ? 0 : 1
      if (aUnlocked !== bUnlocked) return bUnlocked - aUnlocked

      return a.title.localeCompare(b.title)
    })
    .slice(0, 8)
}

export default function AccountSessionsPage() {
  const { isLoading, user, profile } = useRequireAccountAccess()

  const [isLoadingData, setIsLoadingData] = useState(true)
  const [protocols, setProtocols] = useState<ProtocolRow[]>([])
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])
  const [todayCheckin, setTodayCheckin] = useState<TodayCheckinRow | null>(null)
  const [recentSessions, setRecentSessions] = useState<HydratedSession[]>([])
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadSessions() {
      if (!user?.id) {
        if (isMounted) setIsLoadingData(false)
        return
      }

      try {
        const today = new Date().toISOString().slice(0, 10)

        const [protocolsResult, favoritesResult, checkinResult, sessionsResult] =
          await Promise.all([
            supabase
              .from("protocols")
              .select(
                "id, slug, title, subtitle, category, duration_seconds, description, guided_available, silent_available, is_premium"
              )
              .eq("is_active", true)
              .order("sort_order", { ascending: true }),
            supabase
              .from("favorite_protocols")
              .select("protocol_id")
              .eq("user_id", user.id),
            supabase
              .from("daily_checkins")
              .select(
                "variant, stress_score, calm_body_score, energy_score, sleep_readiness_score, created_at"
              )
              .eq("user_id", user.id)
              .gte("created_at", `${today}T00:00:00.000Z`)
              .lt("created_at", `${today}T23:59:59.999Z`)
              .order("created_at", { ascending: false })
              .limit(1)
              .maybeSingle(),
            supabase
              .from("sessions")
              .select(
                "id, protocol_id, started_at, completed_at, completion_percent, playback_position_seconds, mode"
              )
              .eq("user_id", user.id)
              .order("started_at", { ascending: false })
              .limit(16),
          ])

        if (!isMounted) return

        if (protocolsResult.error) throw protocolsResult.error
        if (favoritesResult.error) throw favoritesResult.error
        if (checkinResult.error) throw checkinResult.error
        if (sessionsResult.error) throw sessionsResult.error

        const loadedProtocols = (protocolsResult.data ?? []) as ProtocolRow[]
        const favorites = (favoritesResult.data ?? []) as FavoriteRow[]
        const rawSessions = (sessionsResult.data ?? []) as RawSessionRow[]

        const protocolMap = new Map(loadedProtocols.map((item) => [item.id, item]))

        const hydrated: HydratedSession[] = rawSessions.map((item) => {
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

        setProtocols(loadedProtocols)
        setFavoriteIds(favorites.map((item) => item.protocol_id))
        setTodayCheckin((checkinResult.data ?? null) as TodayCheckinRow | null)
        setRecentSessions(hydrated)
      } catch (err) {
        if (!isMounted) return

        setErrorText(
          err instanceof Error
            ? err.message
            : "Could not load your session space right now."
        )
      } finally {
        if (isMounted) setIsLoadingData(false)
      }
    }

    void loadSessions()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  const displayFirstName = toDisplayName(profile?.firstName, user?.firstName, "there")
  const displayGoal = toDisplayLabel(profile?.primaryGoal, "Stress")
  const preferredCategory = useMemo(
    () => getRecommendedCategory({ primaryGoal: profile?.primaryGoal, checkin: todayCheckin }),
    [profile?.primaryGoal, todayCheckin]
  )

  const recommendationCopy = useMemo(
    () =>
      getRecommendationCopy({
        category: preferredCategory,
        checkin: todayCheckin,
        primaryGoal: profile?.primaryGoal,
      }),
    [preferredCategory, todayCheckin, profile?.primaryGoal]
  )

  const recommendedProtocol = useMemo(
    () =>
      pickRecommendedProtocol({
        protocols,
        preferredCategory,
        subscriptionStatus: profile?.subscriptionStatus,
      }),
    [protocols, preferredCategory, profile?.subscriptionStatus]
  )

  const continueSession = useMemo(() => {
    return (
      recentSessions.find(
        (session) =>
          !session.completedAt &&
          session.completionPercent > 0 &&
          session.completionPercent < 100
      ) ?? null
    )
  }, [recentSessions])

  const recentCompleted = useMemo(() => {
    return recentSessions.filter(
      (session) => !!session.completedAt || session.completionPercent >= 100
    )
  }, [recentSessions])

  const suggestedProtocols = useMemo(
    () =>
      getSuggestedProtocols({
        protocols,
        preferredCategory,
        favoriteIds,
        subscriptionStatus: profile?.subscriptionStatus,
        recommendedId: recommendedProtocol?.id ?? null,
      }),
    [
      protocols,
      preferredCategory,
      favoriteIds,
      profile?.subscriptionStatus,
      recommendedProtocol?.id,
    ]
  )

  if (isLoading || isLoadingData) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Sessions
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your session space.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago loads recommendations, recent sessions,
                and your broader session library.
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
              Sessions
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Choose the next session that fits today.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Welcome, {displayFirstName}. This is the desktop companion for
              calmer session choice, session continuity, and browsing the broader
              Neuvago session layer around {displayGoal.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            {recommendedProtocol ? (
              <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Recommended next session
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#f3efe8] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                    {formatCategory(recommendedProtocol.category)}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                    {formatDuration(recommendedProtocol.duration_seconds)}
                  </span>
                  {recommendedProtocol.is_premium ? (
                    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                      Premium
                    </span>
                  ) : null}
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {recommendedProtocol.title}
                </h2>

                {recommendedProtocol.subtitle ? (
                  <p className="mt-4 text-base leading-8 text-[#5f5a52]">
                    {recommendedProtocol.subtitle}
                  </p>
                ) : null}

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
                  {recommendationCopy.description}
                </p>

                <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Why this fits today
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {recommendationCopy.rationale}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={`/account/sessions/${recommendedProtocol.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                  >
                    Open session details
                  </Link>

                  <Link
                    href="/open-app"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                  >
                    Open app bridge
                  </Link>
                </div>
              </div>
            ) : (
              <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Recommended next session
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  No active protocol library yet
                </h2>

                <p className="mt-6 text-base leading-8 text-[#5f5a52]">
                  We could not load any active sessions from the protocol library
                  right now.
                </p>
              </div>
            )}

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Continue
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
                      to stay here, or continue in the app if that fits better.
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
                ) : (
                  <>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                      Nothing in progress right now
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      Once you start using sessions more regularly, this area will
                      help you continue where you left off with less friction.
                    </p>
                  </>
                )}
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Recent rhythm
                </p>

                {recentCompleted.length > 0 ? (
                  <>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                      {recentCompleted[0].title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      Latest completed session ·{" "}
                      {formatSessionDate(recentCompleted[0].startedAt)}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      This session was completed recently. Open the details if you want
                      to review it or start again from a calmer place.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/account/sessions/${recentCompleted[0].protocolSlug}`}
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
                      Build your first rhythm
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                      As you start using Neuvago more, progress and recent rhythm
                      become much more meaningful here.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Suggested next options
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    Browse sessions that fit the broader pattern
                  </h2>
                </div>

                <Link
                  href="/account/library"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Go to library
                </Link>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {suggestedProtocols.map((protocol) => {
                  const isFavorite = favoriteIds.includes(protocol.id)
                  const isLocked = isLockedProtocol(
                    protocol,
                    profile?.subscriptionStatus
                  )

                  return (
                    <Link
                      key={protocol.id}
                      href={`/account/sessions/${protocol.slug}`}
                      className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5 transition hover:bg-white"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                          {formatCategory(protocol.category)}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                          {formatDuration(protocol.duration_seconds)}
                        </span>
                        {isFavorite ? (
                          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                            Favorite
                          </span>
                        ) : null}
                        {isLocked ? (
                          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                            Premium
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-4 text-lg font-medium text-[#1f1f1c]">
                        {protocol.title}
                      </p>

                      {protocol.subtitle ? (
                        <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                          {protocol.subtitle}
                        </p>
                      ) : null}
                    </Link>
                  )
                })}
              </div>
            </div>

            {recentSessions.length > 0 ? (
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Recent sessions
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {recentSessions.slice(0, 4).map((session) => (
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
              </div>
            ) : null}

            {errorText ? (
              <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                {errorText}
              </div>
            ) : null}
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Today signal
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Current focus
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {displayGoal}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Recommended category
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {formatCategory(preferredCategory)}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Check-in signal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {todayCheckin
                      ? "A recent check-in is helping shape what looks like the calmest next step."
                      : "No check-in yet today. Recommendations lean more on your profile goal and calmer defaults."}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Desktop role
              </p>

              <p className="mt-6 text-sm leading-7 text-[#5f5a52]">
                Web is now the calmer orchestration layer for choosing,
                reviewing, and continuing sessions. Active playback can still
                flow through the app while we build the fuller desktop session
                layer.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/open-app"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  Open app bridge
                </Link>

                <Link
                  href="/account/progress"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  View progress
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
