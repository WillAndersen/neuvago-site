"use client"

import Link from "next/link"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { useRequireAccountAccess } from "@/hooks/useRequireAccountAccess"
import { updateAccountSessionProgress } from "@/lib/account/session-playback"
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

type SessionRow = {
  id: string
  protocol_id: string
  started_at: string | null
  completed_at: string | null
  completion_percent: number | null
  playback_position_seconds: number | null
  mode: string | null
}

type PlayerActionState = "idle" | "ending" | "completing"

function formatCategory(category?: string | null) {
  if (!category) return "Session"
  return category.charAt(0).toUpperCase() + category.slice(1)
}

function formatDuration(durationSeconds?: number | null) {
  if (!durationSeconds) return "—"
  return `${Math.floor(durationSeconds / 60)} min`
}

function formatClock(totalSeconds: number) {
  const safe = Math.max(0, Math.round(totalSeconds))
  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

function getGuidance(progressPercent: number) {
  if (progressPercent < 20) {
    return "Start by settling in and letting the session become the only thing you need to do right now."
  }

  if (progressPercent < 60) {
    return "Stay with the rhythm at an easy pace and let the session do more of the work."
  }

  if (progressPercent < 90) {
    return "You are in the steadier middle of the session now. Let it keep softening."
  }

  return "Let the final part of the session land calmly before you move on."
}

export default function AccountSessionPlayerPage() {
  const router = useRouter()
  const params = useParams<{ slug: string | string[] }>()
  const searchParams = useSearchParams()
  const { isLoading, user } = useRequireAccountAccess()

  const slugValue = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const sessionId = searchParams.get("sessionId") ?? ""

  const [isLoadingData, setIsLoadingData] = useState(true)
  const [protocol, setProtocol] = useState<ProtocolRow | null>(null)
  const [session, setSession] = useState<SessionRow | null>(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(300)
  const [isRunning, setIsRunning] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isPersisting, setIsPersisting] = useState(false)
  const [actionState, setActionState] = useState<PlayerActionState>("idle")
  const [errorText, setErrorText] = useState<string | null>(null)

  const lastAutoSavedBucketRef = useRef<number>(-1)
  const completionTriggeredRef = useRef(false)
  const saveChainRef = useRef<Promise<void>>(Promise.resolve())

  useEffect(() => {
    let isMounted = true

    async function loadPlayer() {
      if (!user?.id || !slugValue || !sessionId) {
        if (isMounted) {
          setErrorText("No web session is ready yet. Start from session details first.")
          setIsLoadingData(false)
        }
        return
      }

      try {
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

        const sessionResult = await supabase
          .from("sessions")
          .select(
            "id, protocol_id, started_at, completed_at, completion_percent, playback_position_seconds, mode"
          )
          .eq("id", sessionId)
          .eq("user_id", user.id)
          .eq("protocol_id", loadedProtocol.id)
          .single()

        if (sessionResult.error) throw sessionResult.error
        if (!isMounted) return

        const loadedSession = sessionResult.data as SessionRow
        const durationSeconds = loadedProtocol.duration_seconds ?? 300
        const derivedElapsed =
          loadedSession.playback_position_seconds && loadedSession.playback_position_seconds > 0
            ? loadedSession.playback_position_seconds
            : loadedSession.completion_percent && loadedSession.completion_percent > 0
            ? Math.round((loadedSession.completion_percent / 100) * durationSeconds)
            : 0

        setProtocol(loadedProtocol)
        setSession(loadedSession)
        setTotalSeconds(durationSeconds)
        setElapsedSeconds(Math.max(0, Math.min(durationSeconds, derivedElapsed)))
        setIsCompleted(
          !!loadedSession.completed_at || (loadedSession.completion_percent ?? 0) >= 100
        )
      } catch (err) {
        if (!isMounted) return

        setErrorText(
          err instanceof Error
            ? err.message
            : "Could not load the web player right now."
        )
      } finally {
        if (isMounted) setIsLoadingData(false)
      }
    }

    void loadPlayer()

    return () => {
      isMounted = false
    }
  }, [user?.id, slugValue, sessionId])

  const progressPercent = useMemo(() => {
    if (!totalSeconds) return 0
    return Math.max(0, Math.min(100, Math.round((elapsedSeconds / totalSeconds) * 100)))
  }, [elapsedSeconds, totalSeconds])

  const remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds)
  const currentMode = session?.mode === "silent" ? "silent" : "guided"

  const persistProgress = useCallback(
    async ({
      completed = false,
      elapsedOverride,
    }: {
      completed?: boolean
      elapsedOverride?: number
    } = {}) => {
      if (!session?.id || !user?.id || !totalSeconds) return

      const safeElapsed = Math.max(
        0,
        Math.min(totalSeconds, Math.round(elapsedOverride ?? elapsedSeconds))
      )

      saveChainRef.current = saveChainRef.current
        .catch(() => undefined)
        .then(async () => {
          setIsPersisting(true)
          setErrorText(null)

          try {
            await updateAccountSessionProgress({
              userId: user.id,
              sessionId: session.id,
              completionPercent: completed
                ? 100
                : Math.max(
                    0,
                    Math.min(100, Math.round((safeElapsed / totalSeconds) * 100))
                  ),
              playbackPositionSeconds: completed ? 0 : safeElapsed,
              completed,
            })

            setSession((prev) =>
              prev
                ? {
                    ...prev,
                    completion_percent: completed
                      ? 100
                      : Math.max(
                          0,
                          Math.min(100, Math.round((safeElapsed / totalSeconds) * 100))
                        ),
                    playback_position_seconds: completed ? 0 : safeElapsed,
                    completed_at: completed
                      ? new Date().toISOString()
                      : prev.completed_at,
                  }
                : prev
            )
          } catch (err) {
            setErrorText(
              err instanceof Error
                ? err.message
                : "Could not save session progress right now."
            )
            throw err
          } finally {
            setIsPersisting(false)
          }
        })

      return saveChainRef.current
    },
    [elapsedSeconds, session?.id, totalSeconds, user?.id]
  )

  useEffect(() => {
    if (!isRunning || isCompleted || !protocol || !session) return

    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => Math.min(totalSeconds, prev + 1))
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [isRunning, isCompleted, protocol, session, totalSeconds])

  useEffect(() => {
    if (!session || isCompleted || !isRunning) return
    if (elapsedSeconds <= 0) return

    const bucket = Math.floor(elapsedSeconds / 15)
    if (bucket !== lastAutoSavedBucketRef.current) {
      lastAutoSavedBucketRef.current = bucket
      void persistProgress({ elapsedOverride: elapsedSeconds })
    }
  }, [elapsedSeconds, isCompleted, isRunning, persistProgress, session])

  useEffect(() => {
    if (isCompleted || completionTriggeredRef.current) return
    if (!session || !protocol) return
    if (elapsedSeconds < totalSeconds) return

    completionTriggeredRef.current = true

    void (async () => {
      setIsRunning(false)
      setActionState("completing")

      try {
        await persistProgress({ completed: true, elapsedOverride: totalSeconds })
        setIsCompleted(true)
      } finally {
        setActionState("idle")
      }
    })()
  }, [elapsedSeconds, isCompleted, persistProgress, protocol, session, totalSeconds])

  useEffect(() => {
    function handleVisibilityChange() {
      if (document.hidden && isRunning) {
        setIsRunning(false)
        void persistProgress({ elapsedOverride: elapsedSeconds })
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [elapsedSeconds, isRunning, persistProgress])

  async function handlePauseResume() {
    if (isCompleted || actionState !== "idle") return

    if (isRunning) {
      setIsRunning(false)
      await persistProgress({ elapsedOverride: elapsedSeconds })
      return
    }

    setIsRunning(true)
  }

  async function handleEndForNow() {
    if (actionState !== "idle") return

    setActionState("ending")
    setIsRunning(false)

    try {
      await persistProgress({ elapsedOverride: elapsedSeconds })
      router.replace(`/account/sessions/${slugValue}`)
    } catch {
      setActionState("idle")
    }
  }

  async function handleCompleteNow() {
    if (actionState !== "idle") return

    setActionState("completing")
    setIsRunning(false)

    try {
      await persistProgress({ completed: true, elapsedOverride: totalSeconds })
      setIsCompleted(true)
    } catch {
      setActionState("idle")
    }
  }

  if (isLoading || isLoadingData) {
    return (
      <main className="min-h-screen bg-[#efe7dc] text-[#1f1f1c]">
        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Web session player
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Preparing your session.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Just a moment while Neuvago loads this session into desktop playback.
            </p>
          </div>
        </section>
      </main>
    )
  }

  if (!protocol || !session) {
    return (
      <main className="min-h-screen bg-[#efe7dc] text-[#1f1f1c]">
        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Web session player
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              This web session is not ready.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              {errorText ?? "Start from the session detail page first."}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/account/sessions"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
              >
                Back to sessions
              </Link>

              <Link
                href="/account/today"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to today
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (isCompleted) {
    return (
      <main className="min-h-screen bg-[#efe7dc] text-[#1f1f1c]">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Session complete
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {protocol.title} is complete.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Your progress has been saved. Use Today, Sessions, or Progress to
                decide what should come next.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/account/today"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  Back to today
                </Link>

                <Link
                  href="/account/progress"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  View progress
                </Link>

                <Link
                  href="/account/sessions"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  More sessions
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Session summary
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Session
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {protocol.title}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Category
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {formatCategory(protocol.category)}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Duration
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {formatDuration(protocol.duration_seconds)}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Mode
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {currentMode === "silent" ? "Silent" : "Guided"}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Saved to progress
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  This session has been marked complete and is now available in
                  Today, Sessions, and Progress.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#efe7dc] text-[#1f1f1c]">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                {formatCategory(protocol.category)}
              </span>
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                {formatDuration(protocol.duration_seconds)}
              </span>
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                {currentMode === "silent" ? "Silent mode" : "Guided mode"}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {protocol.title}
            </h1>

            {protocol.subtitle ? (
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                {protocol.subtitle}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/account/sessions/${protocol.slug}`}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              Session details
            </Link>

            <Link
              href="/account/today"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              Today
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              Active session
            </p>

            <div className="mt-10 text-center">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8a847b]">
                Time remaining
              </p>
              <p className="mt-4 text-6xl font-semibold tracking-[-0.05em] sm:text-7xl">
                {formatClock(remainingSeconds)}
              </p>
              <p className="mt-4 text-base leading-8 text-[#5f5a52]">
                {getGuidance(progressPercent)}
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between text-sm text-[#7a756c]">
                <span>{progressPercent}% complete</span>
                <span>{formatClock(elapsedSeconds)} elapsed</span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#e5ddd0]">
                <div
                  className="h-full rounded-full bg-[#1f1f1c]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Duration
                </p>
                <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                  {formatDuration(protocol.duration_seconds)}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Mode
                </p>
                <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                  {currentMode === "silent" ? "Silent" : "Guided"}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Sync state
                </p>
                <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                  {isPersisting ? "Saving…" : "Ready"}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => void handlePauseResume()}
                disabled={actionState !== "idle"}
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isRunning
                  ? "Pause session"
                  : elapsedSeconds > 0
                    ? "Resume session"
                    : "Start session"}
              </button>

              <button
                type="button"
                onClick={() => void handleCompleteNow()}
                disabled={actionState !== "idle"}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {actionState === "completing" ? "Completing…" : "Complete now"}
              </button>

              <button
                type="button"
                onClick={() => void handleEndForNow()}
                disabled={actionState !== "idle"}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {actionState === "ending" ? "Saving and returning…" : "End for now"}
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Web player MVP
              </p>

              <p className="mt-6 text-sm leading-7 text-[#5f5a52]">
                This first desktop playback version is intentionally simple:
                timer-first, calmer, and focused on real session continuity.
                Progress saves during playback and completion writes back to your
                session history.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Notes
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-sm leading-7 text-[#5f5a52]">
                    Pause or end the session if you want to be sure the latest
                    playback position is written before leaving the page.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-sm leading-7 text-[#5f5a52]">
                    A fuller web player with richer guidance and deeper parity
                    can come next. This version is about making desktop use real.
                  </p>
                </div>
              </div>
            </div>

            {errorText ? (
              <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                {errorText}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  )
}
