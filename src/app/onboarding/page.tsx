"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

import { supabase } from "@/lib/supabase/client"

const GOALS = [
  { value: "stress", label: "Stress" },
  { value: "sleep", label: "Sleep" },
  { value: "recovery", label: "Recovery" },
  { value: "focus", label: "Focus" },
] as const

type GoalValue = (typeof GOALS)[number]["value"]

export default function OnboardingPage() {
  const router = useRouter()

  const [isHydrating, setIsHydrating] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [primaryGoal, setPrimaryGoal] = useState<GoalValue>("stress")
  const [errorText, setErrorText] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function hydrate() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()

        if (userError) throw userError
        if (!user) {
          router.replace("/login")
          return
        }

        const metadataFirstName =
          typeof user.user_metadata?.first_name === "string"
            ? user.user_metadata.first_name
            : ""

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("first_name, primary_goal")
          .eq("id", user.id)
          .maybeSingle()

        if (profileError) throw profileError
        if (!isMounted) return

        if (profile?.primary_goal) {
          router.replace("/account")
          return
        }

        if (profile?.first_name) {
          setFirstName(profile.first_name)
        } else if (metadataFirstName) {
          setFirstName(metadataFirstName)
        }

        if (
          profile?.primary_goal &&
          ["stress", "sleep", "recovery", "focus"].includes(profile.primary_goal)
        ) {
          setPrimaryGoal(profile.primary_goal as GoalValue)
        }
      } catch (err) {
        if (!isMounted) return
        setErrorText(
          err instanceof Error ? err.message : "Could not load onboarding."
        )
      } finally {
        if (isMounted) setIsHydrating(false)
      }
    }

    void hydrate()

    return () => {
      isMounted = false
    }
  }, [router])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSaving || isHydrating) return

    const trimmedName = firstName.trim()

    if (!trimmedName) {
      setErrorText("Please enter your first name.")
      return
    }

    setIsSaving(true)
    setErrorText(null)

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError) throw userError
      if (!user) throw new Error("No signed-in user found.")

      const { error } = await supabase.from("profiles").upsert(
        {
          id: user.id,
          first_name: trimmedName,
          primary_goal: primaryGoal,
          subscription_status: "free",
        },
        { onConflict: "id" }
      )

      if (error) throw error

      router.replace("/account")
      router.refresh()
    } catch (err) {
      setErrorText(
        err instanceof Error ? err.message : "Could not complete onboarding."
      )
    } finally {
      setIsSaving(false)
    }
  }

  const currentGoalLabel =
    GOALS.find((goal) => goal.value === primaryGoal)?.label ?? "Stress"

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Onboarding
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A calmer start to your Neuvago experience.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Just a few simple details so the experience can feel more personal
              and more coherent from the start.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/65 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Why this matters
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                A small amount of context makes the experience more useful.
              </h2>

              <div className="mt-8 space-y-6 text-[#5f5a52]">
                <p className="text-base leading-8">
                  Neuvago is designed to feel calm and personal. A first name and
                  a simple primary goal help shape the account layer in a more
                  useful way.
                </p>

                <p className="text-base leading-8">
                  You can always change this later. For now, we just want enough
                  information to make the bridge between web and app feel coherent.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  First name
                </p>
                <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                  {firstName || "Not set yet"}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Current goal
                </p>
                <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                  {currentGoalLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                Complete your profile
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                This matches the same basic profile structure used in the app.
              </p>
            </div>

            {isHydrating ? (
              <div className="rounded-[1.25rem] border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm text-[#5f5a52]">
                Preparing your setup...
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Your first name"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm outline-none transition placeholder:text-[#8a847b] focus:border-black/20"
                  />
                </div>

                <div>
                  <p className="mb-3 block text-sm font-medium">
                    What matters most right now?
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {GOALS.map((goal) => {
                      const active = primaryGoal === goal.value

                      return (
                        <button
                          key={goal.value}
                          type="button"
                          onClick={() => setPrimaryGoal(goal.value)}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                            active
                              ? "bg-[#1f1f1c] text-white"
                              : "border border-black/10 bg-[#f7f4ef] text-[#1f1f1c] hover:bg-white"
                          }`}
                        >
                          {goal.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {errorText ? (
                  <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                    {errorText}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving ? "Saving..." : "Continue"}
                </button>
              </form>
            )}

            <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                Onboarding note
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                This is only meant to capture the essentials. The experience
                should feel calm and easy from the start.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
