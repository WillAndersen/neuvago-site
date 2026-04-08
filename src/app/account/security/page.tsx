"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useAccountProfile } from "@/hooks/useAccountProfile"
import { toDisplayName } from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

export default function AccountSecurityPage() {
  const router = useRouter()
  const { isLoading, isSignedIn, user, profile } = useAccountProfile()

  const [isCheckingVerification, setIsCheckingVerification] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)

  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

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

    let isMounted = true

    async function loadVerificationState() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!isMounted) return

        const verified = !!user?.email_confirmed_at || user?.confirmed_at != null
        setIsVerified(verified)
      } finally {
        if (isMounted) setIsCheckingVerification(false)
      }
    }

    void loadVerificationState()

    return () => {
      isMounted = false
    }
  }, [isLoading, isSignedIn, profile?.primaryGoal, router])

  async function handleSignOut() {
    if (isSigningOut) return

    setIsSigningOut(true)
    setErrorText(null)
    setSuccessText(null)

    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      router.replace("/login")
      router.refresh()
    } catch (error) {
      console.error("Sign out failed:", error)
      setErrorText("Could not sign out right now. Please try again.")
      setIsSigningOut(false)
    }
  }

  async function handleUpdatePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isUpdatingPassword) return

    setErrorText(null)
    setSuccessText(null)

    const trimmedPassword = newPassword.trim()
    const trimmedConfirmPassword = confirmPassword.trim()

    if (!trimmedPassword) {
      setErrorText("Please enter a new password.")
      return
    }

    if (trimmedPassword.length < 8) {
      setErrorText("Your new password must be at least 8 characters long.")
      return
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      setErrorText("The password confirmation does not match.")
      return
    }

    setIsUpdatingPassword(true)

    try {
      const { error } = await supabase.auth.updateUser({
        password: trimmedPassword,
      })

      if (error) throw error

      setSuccessText("Your password has been updated.")
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      console.error("Password update failed:", error)
      setErrorText(
        error instanceof Error
          ? error.message
          : "Could not update your password right now."
      )
    } finally {
      setIsUpdatingPassword(false)
    }
  }

  const displayFirstName = toDisplayName(
    profile?.firstName,
    user?.firstName,
    "there"
  )

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Security
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your security settings.
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
              Security
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Security for your account.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Welcome, {displayFirstName}. Keep the account layer safe, quiet,
              and easy to understand.
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
                  Security overview
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  A calm place for the essentials around account security.
                </h2>

                <div className="mt-8 space-y-6 text-[#5f5a52]">
                  <p className="text-base leading-8">
                    Security settings should feel reassuring, not overwhelming.
                    This page gives Neuvago a place for the most important
                    account-level security information and controls.
                  </p>

                  <p className="text-base leading-8">
                    For now, this includes your account email, verification
                    status, password update, and basic session actions.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-black/5 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)] sm:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Account email
                  </p>
                  <p className="mt-3 break-all text-sm leading-7 text-[#5f5a52]">
                    {user?.email || "No email found"}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-black/5 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Email verification
                  </p>
                  <p className="mt-3 text-lg font-medium text-[#1f1f1c]">
                    {isCheckingVerification
                      ? "Checking..."
                      : isVerified
                        ? "Verified"
                        : "Not verified"}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-black/5 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Password and sessions
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    Keep your account access current, with more session controls able to live here later.
                  </p>
                </div>
              </div>

              <form
                className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10"
                onSubmit={handleUpdatePassword}
              >
                <div className="mb-8">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Change password
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                    Update your password
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    Choose a new password for your Neuvago account.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="newPassword"
                      className="mb-2 block text-sm font-medium"
                    >
                      New password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      autoComplete="new-password"
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                      placeholder="Enter a new password"
                      className="w-full rounded-2xl border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm outline-none transition placeholder:text-[#8a847b] focus:border-black/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-medium"
                    >
                      Confirm new password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      placeholder="Confirm your new password"
                      className="w-full rounded-2xl border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm outline-none transition placeholder:text-[#8a847b] focus:border-black/20"
                    />
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
                      disabled={isUpdatingPassword}
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isUpdatingPassword ? "Updating..." : "Update password"}
                    </button>

                    <Link
                      href="/continue"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Quick actions
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/continue"
                    className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Continue
                  </Link>

                  <Link
                    href="/account/profile"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                  >
                    Edit profile
                  </Link>

                  <button
                    type="button"
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSigningOut ? "Signing out..." : "Sign out"}
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Security note
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Security should feel understandable and calm. This page gives
                  the account layer room to expand without becoming overwhelming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
