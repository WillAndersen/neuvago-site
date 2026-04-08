"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { supabase } from "@/lib/supabase/client"

const RESEND_COOLDOWN_SECONDS = 60

function extractErrorMessage(err: unknown): string {
  if (typeof err === "string") return err

  if (err && typeof err === "object") {
    const maybeMessage = (err as { message?: unknown }).message
    if (typeof maybeMessage === "string" && maybeMessage.trim()) {
      return maybeMessage
    }
  }

  return "Something went wrong."
}

function normalizeAuthError(message: string) {
  const lower = message.toLowerCase()

  if (
    lower.includes("email rate limit exceeded") ||
    lower.includes("rate limit exceeded")
  ) {
    return "Too many email attempts were made in a short time. Please wait a little and try again."
  }

  if (lower.includes("unable to validate email address")) {
    return "Please make sure the email address is correct."
  }

  return message
}

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialEmail = useMemo(() => {
    return searchParams.get("email")?.trim() ?? ""
  }, [searchParams])

  const [email] = useState(initialEmail)
  const [countdown, setCountdown] = useState(RESEND_COOLDOWN_SECONDS)
  const [isChecking, setIsChecking] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [errorText, setErrorText] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    if (countdown <= 0) return

    const timer = setTimeout(() => {
      setCountdown((prev) => Math.max(0, prev - 1))
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown])

  async function handleContinue() {
    if (isChecking) return

    setIsChecking(true)
    setErrorText(null)
    setMessage(null)

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (error) throw error

      const isVerified = !!user?.email_confirmed_at || user?.confirmed_at != null

      if (!user || !isVerified) {
        setMessage("Your email is not verified yet. Open the link in your inbox, then try again.")
        return
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("primary_goal")
        .eq("id", user.id)
        .maybeSingle()

      if (profileError) {
        router.replace("/onboarding")
        router.refresh()
        return
      }

      if (!profile?.primary_goal) {
        router.replace("/onboarding")
        router.refresh()
        return
      }

      router.replace("/account")
      router.refresh()
    } catch (err) {
      setErrorText(normalizeAuthError(extractErrorMessage(err)))
    } finally {
      setIsChecking(false)
    }
  }

  async function handleResend() {
    if (isResending || countdown > 0) return

    setIsResending(true)
    setErrorText(null)
    setMessage(null)

    try {
      const safeEmail = email.trim().toLowerCase()

      if (!safeEmail) {
        throw new Error("Missing email address.")
      }

      const redirectTo =
        typeof window !== "undefined"
          ? `${window.location.origin}/account`
          : undefined

      const { error } = await supabase.auth.resend({
        type: "signup",
        email: safeEmail,
        options: {
          emailRedirectTo: redirectTo,
        },
      })

      if (error) throw error

      setMessage("A new verification email has been sent.")
      setCountdown(RESEND_COOLDOWN_SECONDS)
    } catch (err) {
      setErrorText(normalizeAuthError(extractErrorMessage(err)))
    } finally {
      setIsResending(false)
    }
  }

  const resendLabel =
    isResending
      ? "Resending..."
      : countdown > 0
        ? `Resend in ${countdown}s`
        : "Resend verification email"

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Verify email
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Check your inbox.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              One quick step before you can continue into the personal side of
              Neuvago.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/65 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                What happens next
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Verify your email to continue your setup.
              </h2>

              <div className="mt-8 space-y-6 text-[#5f5a52]">
                <p className="text-base leading-8">
                  We have sent a verification email to the address you used
                  during signup. Open that link, then return here and continue.
                </p>

                <p className="text-base leading-8">
                  Once verified, Neuvago will guide you to the right next step —
                  either into onboarding or directly into your account.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)] sm:col-span-2">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Email address
                </p>
                <p className="mt-3 break-all text-sm leading-7 text-[#5f5a52]">
                  {email || "No email address found"}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Step 1
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Open the verification email in your inbox and click the link.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Step 2
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Return here and continue into the right next step in your account journey.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/85 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                Continue
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                After you verify your email, come back and continue.
              </p>
            </div>

            <div className="space-y-4">
              {message ? (
                <div className="rounded-[1.25rem] border border-emerald-200/70 bg-emerald-50/80 px-4 py-3 text-sm leading-7 text-emerald-700">
                  {message}
                </div>
              ) : null}

              {errorText ? (
                <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                  {errorText}
                </div>
              ) : null}

              <button
                type="button"
                onClick={handleContinue}
                disabled={isChecking}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isChecking ? "Checking..." : "I’ve verified, continue"}
              </button>

              <button
                type="button"
                onClick={handleResend}
                disabled={isResending || countdown > 0}
                className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {resendLabel}
              </button>

              <Link
                href="/login"
                className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
              >
                Back to sign in
              </Link>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                Quick note
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                If you do not see the email, check spam or promotions and make sure
                you used the correct address.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
