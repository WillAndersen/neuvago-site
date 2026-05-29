"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useRequireAccountAccess } from "@/hooks/useRequireAccountAccess"
import {
  toDisplayLabel,
  toSubscriptionLabel,
} from "@/lib/account/formatters"
import { startAccountSession } from "@/lib/account/session-playback"
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

type TodayCheckinRow = {
  variant: string | null
  stress_score: number | null
  calm_body_score: number | null
  energy_score: number | null
  sleep_readiness_score: number | null
  created_at: string | null
}

type SessionRow = {
  id: string
  started_at: string | null
  completed_at: string | null
  completion_percent: number | null
  playback_position_seconds: number | null
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

function getFitSummary(args: {
  category?: string | null
  primaryGoal: string | null | undefined
  checkin: TodayCheckinRow | null
}) {
  const { category, primaryGoal, checkin } = args
  const stress = checkin?.stress_score ?? 0
  const calmBody = checkin?.calm_body_score ?? 0
  const energy = checkin?.energy_score ?? 0
  const sleepReadiness = checkin?.sleep_readiness_score ?? 0
  const isEvening = checkin?.variant === "evening"

  if (category === "sleep") {
    return "This session fits best when unwinding, sleep support, or a softer evening transition feels most relevant right now."
  }

  if (category === "recovery") {
    return "This session fits best when energy is lower, recovery matters more than intensity, or the body needs steadier return."
  }

  if (category === "focus") {
    return "This session fits best when clarity matters, but you still want to stay grounded rather than overstimulated."
  }

  if (stress >= 4 || (calmBody > 0 && calmBody <= 2)) {
    return "This session fits especially well when activation is higher and the body feels harder to settle."
  }

  if (primaryGoal === "sleep" || isEvening || (sleepReadiness > 0 && sleepReadiness <= 2)) {
    return "Even if this is not a sleep session, it can still help create a calmer baseline for the rest of the day or evening."
  }

  if (primaryGoal === "recovery" || (energy > 0 && energy <= 2)) {
    return "This session can be a useful way to support recovery when energy is limited and a steadier pace matters more."
  }

  return "This session works as a calmer next step when you want support without making the experience feel heavier or more demanding."
}

function getExpectationBullets(category?: string | null) {
  if (category === "sleep") {
    return [
      "a gentler evening transition",
      "less inner activation before rest",
      "an easier route into unwinding",
    ]
  }

  if (category === "recovery") {
    return [
      "a steadier sense of return",
      "less accumulated load",
      "more space for recovery-focused rhythm",
    ]
  }

  if (category === "focus") {
    return [
      "clearer attention without extra pressure",
      "a steadier baseline before focused work",
      "more grounded momentum through the day",
    ]
  }

  return [
    "a calmer body state",
    "less carried activation",
    "an easier downshift into steadier rhythm",
  ]
}

function isLockedProtocol(
  protocol: Pick<ProtocolRow, "is_premium">,
  subscriptionStatus: "free" | "premium" | null | undefined
) {
  return protocol.is_premium && subscriptionStatus !== "premium"
}

export default function AccountSessionDetailPage() {
  const params = useParams<{ slug: string | string[] }>()
  const slugValue = Array.isArray(params.slug) ? params.slug[0] : params.slug

  const router = useRouter()
  const { isLoading, user, profile } = useRequireAccountAccess()

  const [isLoadingData, setIsLoadingData] = useState(true)
  const [protocol, setProtocol] = useState<ProtocolRow | null>(null)
  const [todayCheckin, setTodayCheckin] = useState<TodayCheckinRow | null>(null)
  const [recentSessions, setRecentSessions] = useState<SessionRow[]>([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [isFavoriteBusy, setIsFavoriteBusy] = useState(false)
  const [isWebActionBusy, setIsWebActionBusy] = useState(false)
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadDetail() {
      if (!user?.id || !slugValue) {
        if (isMounted) setIsLoadingData(false)
        return
      }

      try {
        const today = new Date().toISOString().slice(0, 10)

        const protocolResult = await supabase
          .from("protocols")
          .select(
            "id, slug, title, subtitle, category, duration_seconds, description, guided_available, silent_available, is_premium"
          )
          .eq("slug", slugValue)
          .eq("is_active", true)
          .single()

        if (protocolResult.error) throw protocolResult.error
        if (!isMounted) return

        const loadedProtocol = protocolResult.data as ProtocolRow
        setProtocol(loadedProtocol)

        const [checkinResult, favoritesResult, sessionsResult] = await Promise.all([
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
            .from("favorite_protocols")
            .select("protocol_id")
            .eq("user_id", user.id)
            .eq("protocol_id", loadedProtocol.id)
            .maybeSingle(),
          supabase
            .from("sessions")
            .select(
              "id, started_at, completed_at, completion_percent, playback_position_seconds, mode"
            )
            .eq("user_id", user.id)
            .eq("protocol_id", loadedProtocol.id)
            .order("started_at", { ascending: false })
            .limit(8),
        ])

        if (!isMounted) return

        if (checkinResult.error) throw checkinResult.error
        if (favoritesResult.error) throw favoritesResult.error
        if (sessionsResult.error) throw sessionsResult.error

        setTodayCheckin((checkinResult.data ?? null) as TodayCheckinRow | null)
        setIsFavorite(!!favoritesResult.data)
        setRecentSessions((sessionsResult.data ?? []) as SessionRow[])
      } catch (err) {
        if (!isMounted) return

        setErrorText(
          err instanceof Error
            ? err.message
            : "Could not load this session right now."
        )
      } finally {
        if (isMounted) setIsLoadingData(false)
      }
    }

    void loadDetail()

    return () => {
      isMounted = false
    }
  }, [user?.id, slugValue])

  const isLocked = useMemo(() => {
    if (!protocol) return false
    return isLockedProtocol(protocol, profile?.subscriptionStatus)
  }, [protocol, profile?.subscriptionStatus])

  const continueSession = useMemo(() => {
    return (
      recentSessions.find(
        (session) =>
          !session.completed_at &&
          (session.completion_percent ?? 0) > 0 &&
          (session.completion_percent ?? 0) < 100
      ) ?? null
    )
  }, [recentSessions])

  const latestCompleted = useMemo(() => {
    return (
      recentSessions.find(
        (session) =>
          !!session.completed_at || (session.completion_percent ?? 0) >= 100
      ) ?? null
    )
  }, [recentSessions])

  const fitSummary = useMemo(
    () =>
      getFitSummary({
        category: protocol?.category,
        primaryGoal: profile?.primaryGoal,
        checkin: todayCheckin,
      }),
    [protocol?.category, profile?.primaryGoal, todayCheckin]
  )

  const expectationBullets = useMemo(
    () => getExpectationBullets(protocol?.category),
    [protocol?.category]
  )

  const defaultMode = useMemo(() => {
    if (!protocol) return "guided"
    return protocol.guided_available ? "guided" : "silent"
  }, [protocol])

  async function handleToggleFavorite() {
    if (!protocol || isFavoriteBusy) return

    const next = !isFavorite
    setIsFavoriteBusy(true)
    setIsFavorite(next)

    try {
      if (next) {
        const { error } = await supabase.from("favorite_protocols").insert({
          user_id: user?.id,
          protocol_id: protocol.id,
        })

        if (error) throw error
      } else {
        const { error } = await supabase
          .from("favorite_protocols")
          .delete()
          .eq("user_id", user?.id)
          .eq("protocol_id", protocol.id)

        if (error) throw error
      }
    } catch (err) {
      setIsFavorite(!next)
      setErrorText(
        err instanceof Error
          ? err.message
          : "Could not update favorite status right now."
      )
    } finally {
      setIsFavoriteBusy(false)
    }
  }

  async function handleStartOnWeb() {
    if (!protocol || !user?.id || isLocked || isWebActionBusy) return

    setIsWebActionBusy(true)
    setErrorText(null)

    try {
      const result = await startAccountSession({
        userId: user.id,
        protocolSlug: protocol.slug,
        source: "sessions",
        mode: defaultMode,
        ambientSound: null,
        voiceEnabled: defaultMode === "guided",
      })

      router.replace(`/account/session-player/${protocol.slug}?sessionId=${result.sessionId}`)
    } catch (err) {
      setErrorText(
        err instanceof Error
          ? err.message
          : "Could not start this session on web right now."
      )
    } finally {
      setIsWebActionBusy(false)
    }
  }

  function handleContinueOnWeb() {
    if (!protocol || !continueSession) return
    router.replace(`/account/session-player/${protocol.slug}?sessionId=${continueSession.id}`)
  }

  if (isLoading || isLoadingData) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Session details
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing this session.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago loads this session and your current context.
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (!protocol) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Session details
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                This session could not be found.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                It may have been removed or is not active right now.
              </p>

              <div className="mt-8">
                <Link
                  href="/account/sessions"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  Back to sessions
                </Link>
              </div>
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Session details
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#f3efe8] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                {formatCategory(protocol.category)}
              </span>
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                {formatDuration(protocol.duration_seconds)}
              </span>
              {protocol.is_premium ? (
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                  Premium
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {protocol.title}
            </h1>

            {protocol.subtitle ? (
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                {protocol.subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Why this session may fit
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                A calmer route into {formatCategory(protocol.category).toLowerCase()} support
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
                {fitSummary}
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Current account context
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Primary goal: {toDisplayLabel(profile?.primaryGoal, "Not set yet")} ·
                  Subscription: {toSubscriptionLabel(profile?.subscriptionStatus)}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Session actions
              </p>

              {isLocked ? (
                <>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    This session is part of Premium
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
                    Your current plan does not include this session yet. Upgrade
                    when you want access to the broader premium session layer.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/account/profile"
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                    >
                      View plan
                    </Link>

                    <Link
                      href="/account/sessions"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                    >
                      Back to sessions
                    </Link>
                  </div>
                </>
              ) : continueSession ? (
                <>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    Continue where you left off
                  </h2>

                  <p className="mt-6 text-base leading-8 text-[#5f5a52]">
                    Your latest in-progress session is already underway. Continue
                    on web for the new desktop playback MVP, or continue through the app.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Progress
                      </p>
                      <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                        {Math.round(continueSession.completion_percent ?? 0)}%
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Position
                      </p>
                      <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                        {Math.round(continueSession.playback_position_seconds ?? 0)}s
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Started
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                        {formatSessionDate(continueSession.started_at)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={handleContinueOnWeb}
                      disabled={isWebActionBusy}
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isWebActionBusy ? "Opening web player…" : "Continue on web"}
                    </button>

                    <Link
                      href="/open-app"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                    >
                      Continue in app
                    </Link>

                    <Link
                      href="/account/sessions"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                    >
                      Back to sessions
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    Start this session
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
                    You can now start this session on web with the first desktop
                    playback MVP, or continue using the app bridge if that fits better.
                  </p>

                  <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Web playback mode
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                      Web playback starts in{" "}
                      <span className="font-medium text-[#1f1f1c]">
                        {defaultMode === "guided" ? "guided" : "silent"}
                      </span>{" "}
                      mode by default for this session.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => void handleStartOnWeb()}
                      disabled={isWebActionBusy}
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isWebActionBusy ? "Preparing web player…" : "Start on web"}
                    </button>

                    <Link
                      href="/open-app"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                    >
                      Start in app
                    </Link>

                    <Link
                      href="/account/sessions"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                    >
                      Back to sessions
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                What to expect
              </p>

              <div className="mt-6 space-y-4">
                {expectationBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5"
                  >
                    <p className="text-sm leading-7 text-[#5f5a52]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {latestCompleted ? (
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Most recent completed use
                </p>

                <p className="mt-4 text-base leading-8 text-[#5f5a52]">
                  Latest completion: {formatSessionDate(latestCompleted.started_at)}
                </p>
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
                Quick routes
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => void handleToggleFavorite()}
                  disabled={isFavoriteBusy}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isFavorite ? "Remove favorite" : "Save as favorite"}
                </button>

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
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Session modes
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Guided mode
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {protocol.guided_available
                      ? "Available for this session."
                      : "Not available for this session."}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Silent mode
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {protocol.silent_available
                      ? "Available for this session."
                      : "Not available for this session."}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Web playback
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    The desktop player now supports timer-based playback,
                    progress saving, resume, and completion as the first web MVP.
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
