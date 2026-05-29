"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { useAccountProfile } from "@/hooks/useAccountProfile"
import { supabase } from "@/lib/supabase/client"

type StartSurface = "account" | "open_app"

export default function ContinuePage() {
  const router = useRouter()
  const account = useAccountProfile()

  const [isLoadingPreference, setIsLoadingPreference] = useState(true)
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function resolveDestination() {
      if (account.isLoading) return

      if (!account.isSignedIn || !account.user) {
        router.replace("/login")
        return
      }

      if (account.needsOnboarding) {
        router.replace("/onboarding")
        return
      }

      try {
        const { data, error } = await supabase
          .from("account_preferences")
          .select("preferred_start_surface")
          .eq("user_id", account.user.id)
          .maybeSingle()

        if (!isMounted) return
        if (error) throw error

        const preferredStartSurface: StartSurface =
          data?.preferred_start_surface === "open_app" ? "open_app" : "account"

        if (preferredStartSurface === "open_app") {
          router.replace("/open-app")
          return
        }

        router.replace("/account/today")
      } catch (err) {
        if (!isMounted) return

        setErrorText(
          err instanceof Error
            ? err.message
            : "Could not resolve your preferred start surface."
        )
        router.replace("/account/today")
      } finally {
        if (isMounted) setIsLoadingPreference(false)
      }
    }

    void resolveDestination()

    return () => {
      isMounted = false
    }
  }, [account.isLoading, account.isSignedIn, account.needsOnboarding, account.user, router])

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Continue
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Taking you to the right place.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Neuvago is checking your account, profile state, and preferred
              start surface.
            </p>

            {errorText ? (
              <p className="mt-6 text-sm leading-7 text-red-700">{errorText}</p>
            ) : null}

            {!account.isLoading && isLoadingPreference ? (
              <p className="mt-6 text-sm leading-7 text-[#7a756c]">
                Almost there.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  )
}
