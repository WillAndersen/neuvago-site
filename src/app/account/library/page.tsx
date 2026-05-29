"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useRequireAccountAccess } from "@/hooks/useRequireAccountAccess"
import { toDisplayName, toSubscriptionLabel } from "@/lib/account/formatters"
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

type SessionRow = {
  protocol_id: string
  started_at: string | null
}

function formatCategory(category?: string | null) {
  if (!category) return "Session"
  return category.charAt(0).toUpperCase() + category.slice(1)
}

function formatDuration(durationSeconds?: number | null) {
  if (!durationSeconds) return "—"
  return `${Math.floor(durationSeconds / 60)} min`
}

function isLockedProtocol(
  protocol: Pick<ProtocolRow, "is_premium">,
  subscriptionStatus: "free" | "premium" | null | undefined
) {
  return protocol.is_premium && subscriptionStatus !== "premium"
}

export default function AccountLibraryPage() {
  const { isLoading, user, profile } = useRequireAccountAccess()

  const [isLoadingData, setIsLoadingData] = useState(true)
  const [protocols, setProtocols] = useState<ProtocolRow[]>([])
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])
  const [recentProtocolIds, setRecentProtocolIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadLibrary() {
      if (!user?.id) {
        if (isMounted) setIsLoadingData(false)
        return
      }

      try {
        const [protocolsResult, favoritesResult, sessionsResult] = await Promise.all([
          supabase
            .from("protocols")
            .select(
              "id, slug, title, subtitle, category, duration_seconds, description, guided_available, silent_available, is_premium"
            )
            .eq("is_active", true)
            .order("title", { ascending: true }),
          supabase
            .from("favorite_protocols")
            .select("protocol_id")
            .eq("user_id", user.id),
          supabase
            .from("sessions")
            .select("protocol_id, started_at")
            .eq("user_id", user.id)
            .order("started_at", { ascending: false })
            .limit(80),
        ])

        if (!isMounted) return

        if (protocolsResult.error) throw protocolsResult.error
        if (favoritesResult.error) throw favoritesResult.error
        if (sessionsResult.error) throw sessionsResult.error

        const loadedProtocols = (protocolsResult.data ?? []) as ProtocolRow[]
        const favorites = (favoritesResult.data ?? []) as FavoriteRow[]
        const recentSessions = (sessionsResult.data ?? []) as SessionRow[]

        const recentIds = Array.from(
          new Set(recentSessions.map((item) => item.protocol_id).filter(Boolean))
        )

        setProtocols(loadedProtocols)
        setFavoriteIds(favorites.map((item) => item.protocol_id))
        setRecentProtocolIds(recentIds)
      } catch (err) {
        if (!isMounted) return

        setErrorText(
          err instanceof Error
            ? err.message
            : "Could not load the library right now."
        )
      } finally {
        if (isMounted) setIsLoadingData(false)
      }
    }

    void loadLibrary()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  const displayFirstName = toDisplayName(profile?.firstName, user?.firstName, "there")
  const displaySubscription = toSubscriptionLabel(profile?.subscriptionStatus)

  const categories = useMemo(() => {
    return Array.from(new Set(protocols.map((item) => item.category).filter(Boolean))).sort()
  }, [protocols])

  const filteredProtocols = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return [...protocols]
      .filter((protocol) => {
        if (selectedCategory !== "all" && protocol.category !== selectedCategory) {
          return false
        }

        if (!query) return true

        const haystack = [
          protocol.title,
          protocol.subtitle ?? "",
          protocol.description ?? "",
          protocol.category,
        ]
          .join(" ")
          .toLowerCase()

        return haystack.includes(query)
      })
      .sort((a, b) => {
        const aFavorite = favoriteIds.includes(a.id) ? 1 : 0
        const bFavorite = favoriteIds.includes(b.id) ? 1 : 0
        if (aFavorite !== bFavorite) return bFavorite - aFavorite

        const aRecent = recentProtocolIds.includes(a.id) ? 1 : 0
        const bRecent = recentProtocolIds.includes(b.id) ? 1 : 0
        if (aRecent !== bRecent) return bRecent - aRecent

        const aUnlocked = isLockedProtocol(a, profile?.subscriptionStatus) ? 0 : 1
        const bUnlocked = isLockedProtocol(b, profile?.subscriptionStatus) ? 0 : 1
        if (aUnlocked !== bUnlocked) return bUnlocked - aUnlocked

        return a.title.localeCompare(b.title)
      })
  }, [
    protocols,
    selectedCategory,
    searchQuery,
    favoriteIds,
    recentProtocolIds,
    profile?.subscriptionStatus,
  ])

  const stats = useMemo(() => {
    return {
      total: protocols.length,
      favorites: favoriteIds.length,
      categories: categories.length,
      recent: recentProtocolIds.length,
    }
  }, [protocols.length, favoriteIds.length, categories.length, recentProtocolIds.length])

  if (isLoading || isLoadingData) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Library
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your library.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago loads your session library, favorites,
                and recent use.
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
              Library
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A calmer desktop entry into your session library.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Welcome, {displayFirstName}. Browse the broader Neuvago session
              universe with a quieter desktop surface for choosing, reviewing,
              saving favorites, and finding what fits today.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Library controls
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    Search and filter the broader session layer
                  </h2>
                </div>

                <Link
                  href="/account/sessions"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Go to sessions
                </Link>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto]">
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search sessions, categories, or descriptions"
                  className="w-full rounded-[1.25rem] border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm text-[#1f1f1c] outline-none transition placeholder:text-[#8a847b] focus:border-black/20 focus:bg-white"
                />

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                  className="inline-flex items-center justify-center rounded-[1.25rem] border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Reset
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedCategory === "all"
                      ? "bg-[#1f1f1c] text-white"
                      : "border border-black/10 bg-white/60 text-[#1f1f1c] hover:bg-white"
                  }`}
                >
                  All
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                      selectedCategory === category
                        ? "bg-[#1f1f1c] text-white"
                        : "border border-black/10 bg-white/60 text-[#1f1f1c] hover:bg-white"
                    }`}
                  >
                    {formatCategory(category)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Sessions
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {stats.total}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Favorites
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {stats.favorites}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Categories
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {stats.categories}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Recently used
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#1f1f1c]">
                  {stats.recent}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Session library
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    Browse sessions across the full library
                  </h2>
                </div>

                <p className="text-sm leading-7 text-[#5f5a52]">
                  {filteredProtocols.length} result
                  {filteredProtocols.length === 1 ? "" : "s"}
                </p>
              </div>

              {filteredProtocols.length === 0 ? (
                <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-6">
                  <p className="text-sm leading-7 text-[#5f5a52]">
                    No sessions matched your current search or category filter.
                  </p>
                </div>
              ) : (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {filteredProtocols.map((protocol) => {
                    const isFavorite = favoriteIds.includes(protocol.id)
                    const isRecent = recentProtocolIds.includes(protocol.id)
                    const isLocked = isLockedProtocol(
                      protocol,
                      profile?.subscriptionStatus
                    )

                    return (
                      <Link
                        key={protocol.id}
                        href={`/account/sessions/${protocol.slug}`}
                        className="rounded-[1.75rem] border border-black/5 bg-[#f7f4ef] p-6 transition hover:bg-white"
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
                          {isRecent ? (
                            <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                              Recent
                            </span>
                          ) : null}
                          {isLocked ? (
                            <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                              Premium
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-5 text-xl font-medium text-[#1f1f1c]">
                          {protocol.title}
                        </p>

                        {protocol.subtitle ? (
                          <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                            {protocol.subtitle}
                          </p>
                        ) : null}

                        {protocol.description ? (
                          <p className="mt-3 text-sm leading-7 text-[#5f5a52] line-clamp-3">
                            {protocol.description}
                          </p>
                        ) : null}

                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          {protocol.guided_available ? (
                            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                              Guided
                            </span>
                          ) : null}
                          {protocol.silent_available ? (
                            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#6f6a61]">
                              Silent
                            </span>
                          ) : null}
                        </div>
                      </Link>
                    )
                  })}
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
                Library role
              </p>

              <p className="mt-6 text-sm leading-7 text-[#5f5a52]">
                The library is the calmer browse layer of logged-in web: a place
                to search, compare, review, and save sessions before moving into
                details or continuing through the app.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Account context
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Plan
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {displaySubscription}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Favorite behavior
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    Save favorites from session detail pages to shape a calmer
                    desktop library over time.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/account/sessions"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2a2a27]"
                >
                  Go to sessions
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
