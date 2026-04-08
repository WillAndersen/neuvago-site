"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { supabase } from "@/lib/supabase/client"

export default function ContinuePage() {
  const router = useRouter()

  useEffect(() => {
    let isMounted = true

    async function resolveDestination() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()

        if (!isMounted) return

        if (userError || !user) {
          router.replace("/login")
          return
        }

        const { data: profileRow, error: profileError } = await supabase
          .from("profiles")
          .select("primary_goal")
          .eq("id", user.id)
          .maybeSingle()

        if (!isMounted) return

        if (profileError || !profileRow?.primary_goal) {
          router.replace("/onboarding")
          return
        }

        const { data: preferencesRow } = await supabase
          .from("account_preferences")
          .select("preferred_start_surface")
          .eq("user_id", user.id)
          .maybeSingle()

        if (!isMounted) return

        if (preferencesRow?.preferred_start_surface === "open_app") {
          router.replace("/open-app")
          return
        }

        router.replace("/account")
      } catch {
        if (!isMounted) return
        router.replace("/account")
      }
    }

    void resolveDestination()

    return () => {
      isMounted = false
    }
  }, [router])

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
              Neuvago is checking your account and preferred starting point.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
