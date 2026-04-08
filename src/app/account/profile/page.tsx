"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useAccountProfile } from "@/hooks/useAccountProfile"
import { toSubscriptionLabel } from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

const GOALS = [
  { value: "stress", label: "Stress" },
  { value: "sleep", label: "Sleep" },
  { value: "recovery", label: "Recovery" },
  { value: "focus", label: "Focus" },
] as const

type GoalValue = (typeof GOALS)[number]["value"]

export default function AccountProfilePage() {
  const router = useRouter()
  const { isLoading, isSignedIn, user, profile } = useAccountProfile()

  const [isSaving, setIsSaving] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [primaryGoal, setPrimaryGoal] = useState<GoalValue>("stress")
  const [errorText, setErrorText] = useState<string | null>(null)
  const [successText, setSuccessText] = useState<string | null>(null)

  useEffect(() => {
    if (isLoading) return

    if (!isSignedIn || !user) {
      router.replace("/login")
      return
    }

    if (profile?.firstName) {
      setFirstName(profile.firstName)
    } else if (user.firstName) {
      setFirstName(user.firstName)
    }

    if (
      profile?.primaryGoal &&
      ["stress", "sleep", "recovery", "focus"].includes(profile.primaryGoal)
    ) {
      setPrimaryGoal(profile.primaryGoal as GoalValue)
    }
  }, [isLoading, isSignedIn, user, profile, router])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSaving || !user) return

    const trimmedName = firstName.trim()

    if (!trimmedName) {
      setErrorText("Please enter your first name.")
      setSuccessText(null)
      return
    }

    setIsSaving(true)
    setErrorText(null)
    setSuccessText(null)

    try {
      const { error } = await supabase.from("profiles").upsert(
        {
          id: user.id,
          first_name: trimmedName,
          primary_goal: primaryGoal,
          subscription_status: profile?.subscriptionStatus ?? "free",
        },
        { onConflict: "id" }
      )

      if (error) throw error

      setSuccessText("Your profile has been updated.")
      router.refresh()
    } catch (err) {
      setErrorText(
        err instanceof Error ? err.message : "Could not save your profile."
      )
      setSuccessText(null)
    } finally {
      setIsSaving(false)
    }
  }

  const displaySubscriptionStatus = toSubscriptionLabel(profile?.subscriptionStatus)

  const currentGoalLabel =
    GOALS.find((goal) => goal.value === primaryGoal)?.label ?? "Stress"

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Profile
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your profile.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago loads your account details.
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
              Account profile
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your personal details.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Keep the account layer simple, current, and calm. This profile helps
              Neuvago feel more coherent across the website and app experience.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/65 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Profile overview
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                A quieter way to manage your account.
              </h2>

              <div className="mt-8 space-y-6 text-[#5f5a52]">
                <p className="text-base leading-8">
                  This profile is intentionally simple. It keeps the essentials aligned
                  so your Neuvago account feels personal, clear, and consistent.
                </p>

                <p className="text-base leading-8">
                  For now, the most important details are your first name and the
                  primary goal shaping your experience.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Current name
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

              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)] sm:col-span-2">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Account email
                </p>
                <p className="mt-3 break-all text-sm leading-7 text-[#5f5a52]">
                  {user?.email || "No email found"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                Edit profile
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                Update the details that shape your Neuvago account.
              </p>
            </div>

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
                  Primary goal
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

              <div className="grid gap-4 sm:grid-cols-2">
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
                    Subscription
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                    {displaySubscriptionStatus}
                  </p>
                </div>
              </div>

              {successText ? (
                <div className="rounded-[1.25rem] border border-emerald-200/70 bg-emerald-50/80 px-4 py-3 text-sm leading-7 text-emerald-700">
                  {successText}
                </div>
              ) : null}

              {errorText ? (
                <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                  {errorText}
                </div>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSaving ? "Saving..." : "Save changes"}
                </button>

                <Link
                  href="/account"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                >
                  Back to account
                </Link>
              </div>
            </form>

            <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                Account note
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                More settings can be added later, but Neuvago should keep this layer
                quiet and easy to use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
