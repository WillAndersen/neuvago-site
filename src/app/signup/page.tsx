"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

import { supabase } from "@/lib/supabase/client"

function extractErrorMessage(err: unknown): string {
  if (typeof err === "string") return err

  if (err && typeof err === "object") {
    const maybeMessage = (err as { message?: unknown }).message
    if (typeof maybeMessage === "string" && maybeMessage.trim()) {
      return maybeMessage
    }

    const maybeDescription = (err as { error_description?: unknown }).error_description
    if (typeof maybeDescription === "string" && maybeDescription.trim()) {
      return maybeDescription
    }
  }

  return "Something went wrong."
}

function normalizeAuthError(message: string) {
  const lower = message.toLowerCase()

  if (lower.includes("user already registered")) {
    return "An account with this email already exists. Try signing in instead."
  }

  if (lower.includes("password should be at least")) {
    return "Password must be at least 6 characters."
  }

  if (lower.includes("unable to validate email address")) {
    return "Please enter a valid email address."
  }

  if (
    lower.includes("email rate limit exceeded") ||
    lower.includes("rate limit exceeded")
  ) {
    return "Too many email attempts were made in a short time. Please wait a little and try again."
  }

  return message
}

export default function SignupPage() {
  const router = useRouter()

  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorText, setErrorText] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setErrorText(null)

    try {
      const trimmedName = firstName.trim()
      const safeEmail = email.trim().toLowerCase()

      if (!trimmedName) {
        throw new Error("Please enter your first name.")
      }

      if (!safeEmail) {
        throw new Error("Please enter your email.")
      }

      if (!password || password.length < 6) {
        throw new Error("Password must be at least 6 characters.")
      }

      const redirectTo =
        typeof window !== "undefined"
          ? `${window.location.origin}/account`
          : undefined

      const { error } = await supabase.auth.signUp({
        email: safeEmail,
        password,
        options: {
          emailRedirectTo: redirectTo,
          data: {
            first_name: trimmedName,
          },
        },
      })

      if (error) throw error

      router.push(`/verify-email?email=${encodeURIComponent(safeEmail)}`)
      router.refresh()
    } catch (err) {
      const rawMessage = extractErrorMessage(err)
      const friendlyMessage = normalizeAuthError(rawMessage)
      setErrorText(friendlyMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
              Create account
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              Begin your Neuvago experience.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Create your account to begin a calmer, more personal experience
              with nervous system support, recovery, and guided regulation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_460px] lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              Why create an account
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-4xl">
              A quiet starting point for the personal side of Neuvago.
            </h2>

            <div className="mt-8 space-y-6 text-[#5f5a52]">
              <p className="text-base leading-8">
                Your account creates a simple bridge into the Neuvago
                experience. It gives you a place to begin inside the app and
                creates the foundation for a more connected relationship with
                your routines, preferences, and future product ecosystem.
              </p>

              <p className="text-base leading-8">
                The goal is not to overwhelm you with setup. It is simply to
                create a calm entry point so the experience can become more
                personal over time.
              </p>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-6">
              <p className="text-sm leading-7 text-[#5f5a52]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                >
                  Sign in here
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#1f1f1c]">
                Create account
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                Create your account with the same Neuvago system used across the app experience.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#1f1f1c]"
                >
                  First name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Your first name"
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm text-[#1f1f1c] outline-none transition placeholder:text-[#8a847b] focus:border-black/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#1f1f1c]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm text-[#1f1f1c] outline-none transition placeholder:text-[#8a847b] focus:border-black/20"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#1f1f1c]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f4ef] px-4 py-3 text-sm text-[#1f1f1c] outline-none transition placeholder:text-[#8a847b] focus:border-black/20"
                />
              </div>

              {errorText ? (
                <div className="rounded-[1.25rem] border border-red-200/70 bg-red-50/80 px-4 py-3 text-sm leading-7 text-red-700">
                  {errorText}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="mt-5 text-xs leading-6 text-[#7a756c]">
              By creating an account, you agree to Neuvago’s{" "}
              <Link
                href="/legal/terms-of-service"
                className="underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/legal/privacy-policy"
                className="underline decoration-black/20 underline-offset-4 hover:decoration-black/50"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
