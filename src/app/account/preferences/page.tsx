"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useAccountProfile } from "@/hooks/useAccountProfile"
import { toDisplayName } from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

type StartSurface = "account" | "open_app"

type PreferencesRow = {
  email_updates_enabled: boolean
  account_reminders_enabled: boolean
  preferred_start_surface: StartSurface
}

export default function AccountPreferencesPage() {
  const router = useRouter()
  const { isLoading, isSignedIn, user, profile } = useAccountProfile()

  const [isHydratingPrefs, setIsHydratingPrefs] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const [emailUpdatesEnabled, setEmailUpdatesEnabled] = useState(false)
  const [accountRemindersEnabled, setAccountRemindersEnabled] = useState(false)
  const [preferredStartSurface, setPreferredStartSurface] =
    useState<StartSurface>("account")

  const [errorText, setErrorText] = useState<string | null>(null)
  const [successText, setSuccessText] = useState<string | null>(null)

  useEffect(() => {
    if (isLoading) return

    if (!isSignedIn) {
      router.replace("/login")
      return
    }

    if (isSignedIn && !profile?.primaryGoal) {
      router.replace("/onboarding")
      return
    }
  }, [isLoading, isSignedIn, profile?.primaryGoal, router])

  useEffect(() => {
    let isMounted = true

    async function loadPreferences() {
      if (!user?.id) return

      try {
        const { data, error } = await supabase
          .from("account_preferences")
          .select(
            "email_updates_enabled, account_reminders_enabled, preferred_start_surface"
          )
          .eq("user_id", user.id)
          .maybeSingle()

        if (error) throw error
        if (!isMounted) return

        if (data) {
          const row = data as PreferencesRow
          setEmailUpdatesEnabled(row.email_updates_enabled)
          setAccountRemindersEnabled(row.account_reminders_enabled)
          setPreferredStartSurface(row.preferred_start_surface)
        } else {
          setEmailUpdatesEnabled(false)
          setAccountRemindersEnabled(false)
          setPreferredStartSurface("account")
        }
      } catch (err) {
        if (!isMounted) return
        setErrorText(
          err instanceof Error
            ? err.message
            : "Could not load your preferences."
        )
      } finally {
        if (isMounted) setIsHydratingPrefs(false)
      }
    }

    void loadPreferences()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSaving || !user?.id) return

    setIsSaving(true)
    setErrorText(null)
    setSuccessText(null)

    try {
      const { error } = await supabase.from("account_preferences").upsert(
        {
          user_id: user.id,
          email_updates_enabled: emailUpdatesEnabled,
          account_reminders_enabled: accountRemindersEnabled,
          preferred_start_surface: preferredStartSurface,
        },
        { onConflict: "user_id" }
      )

      if (error) throw error

      setSuccessText("Your preferences have been updated.")
      router.refresh()
    } catch (err) {
      setErrorText(
        err instanceof Error
          ? err.message
          : "Could not save your preferences."
      )
      setSuccessText(null)
    } finally {
      setIsSaving(false)
    }
  }

  const displayFirstName = toDisplayName(
    profile?.firstName,
    user?.firstName,
    "there"
  )

  if (isLoading || isHydratingPrefs) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Preferences
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your preferences.
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
              Preferences
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Preferences for your account.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Welcome, {displayFirstName}. This is where the quieter
              account-level choices can live over time.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Preferences overview
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  A quiet settings layer around your account.
                </h2>

                <div className="mt-8 space-y-6 text-[#5f5a52]">
                  <p className="text-base leading-8">
                    This area is for account-level preferences that should stay
                    light, practical, and easy to understand.
                  </p>

                  <p className="text-base leading-8">
                    It gives Neuvago room to grow carefully without turning the
                    account experience into a heavy control panel.
                  </p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Communication
                  </p>

                  <div className="mt-6 space-y-5">
                    <label className="flex cursor-pointer items-start gap-4 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <input
                        type="checkbox"
                        checked={emailUpdatesEnabled}
                        onChange={(event) => setEmailUpdatesEnabled(event.target.checked)}
                        className="mt-1 h-4 w-4 accent-[#1f1f1c]"
                      />
                      <div>
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Email updates
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                          Receive occasional product, research, or experience updates from Neuvago.
                        </p>
                      </div>
                    </label>

                    <label className="flex cursor-pointer items-start gap-4 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <input
                        type="checkbox"
                        checked={accountRemindersEnabled}
                        onChange={(event) =>
                          setAccountRemindersEnabled(event.target.checked)
                        }
                        className="mt-1 h-4 w-4 accent-[#1f1f1c]"
                      />
                      <div>
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Account reminders
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                          Allow lighter account-level reminders when this layer grows over time.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Experience preference
                  </p>

                  <div className="mt-6 space-y-4">
                    <button
                      type="button"
                      onClick={() => setPreferredStartSurface("account")}
                      className={`flex w-full items-start rounded-[1.5rem] border p-5 text-left transition ${
                        preferredStartSurface === "account"
                          ? "border-black/10 bg-[#1f1f1c] text-white"
                          : "border-black/5 bg-[#f7f4ef] text-[#1f1f1c] hover:bg-white"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium">Start from account</p>
                        <p
                          className={`mt-2 text-sm leading-7 ${
                            preferredStartSurface === "account"
                              ? "text-white/80"
                              : "text-[#5f5a52]"
                          }`}
                        >
                          Use account home as the quieter starting point for your web-based Neuvago experience.
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreferredStartSurface("open_app")}
                      className={`flex w-full items-start rounded-[1.5rem] border p-5 text-left transition ${
                        preferredStartSurface === "open_app"
                          ? "border-black/10 bg-[#1f1f1c] text-white"
                          : "border-black/5 bg-[#f7f4ef] text-[#1f1f1c] hover:bg-white"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium">Start from app bridge</p>
                        <p
                          className={`mt-2 text-sm leading-7 ${
                            preferredStartSurface === "open_app"
                              ? "text-white/80"
                              : "text-[#5f5a52]"
                          }`}
                        >
                          Use the app bridge as the more natural web entry into the personal Neuvago layer.
                        </p>
                      </div>
                    </button>
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
                    {isSaving ? "Saving..." : "Save preferences"}
                  </button>

                  <Link
                    href="/continue"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                  >
                    Continue
                  </Link>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Current preference summary
                </p>

                <div className="mt-6 space-y-5">
                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Email updates
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                      {emailUpdatesEnabled ? "Enabled" : "Disabled"}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Account reminders
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                      {accountRemindersEnabled ? "Enabled" : "Disabled"}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                      Preferred start surface
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                      {preferredStartSurface === "account" ? "Account home" : "Open app"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Preferences note
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  These settings should remain light and understandable. The
                  account layer should feel calm even as it grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
