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

  if (
    lower.includes("email not confirmed") ||
    lower.includes("email_not_confirmed")
  ) {
    return "Your email is not verified yet. Please open the link in your inbox before signing in."
  }

  if (lower.includes("invalid login credentials")) {
    return "Incorrect email or password."
  }

  if (
    lower.includes("email rate limit exceeded") ||
    lower.includes("rate limit exceeded")
  ) {
    return "Too many email attempts were made in a short time. Please wait a little and try again."
  }

  if (lower.includes("unable to validate email address")) {
    return "Please enter a valid email address."
  }

  return message
}

export default function LoginPage() {
  const router = useRouter()

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
      const safeEmail = email.trim().toLowerCase()

      if (!safeEmail) {
        throw new Error("Please enter your email.")
      }

      if (!password || password.length < 6) {
        throw new Error("Password must be at least 6 characters.")
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: safeEmail,
        password,
      })

      if (error) throw error
      if (!data.user) throw new Error("Could not complete sign in.")

      const { data: profile } = await supabase
        .from("profiles")
        .select("primary_goal")
        .eq("id", data.user.id)
        .maybeSingle()

      if (!profile?.primary_goal) {
        router.push("/onboarding")
        router.refresh()
        return
      }

      router.push("/account")
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
              Sign in
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              Welcome back to Neuvago.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              Sign in to continue your Neuvago experience and return to the
              personal side of calm, recovery, and nervous system support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_440px] lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
              Your account
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-4xl">
              A simple way back into your experience.
            </h2>

            <div className="mt-8 space-y-6 text-[#5f5a52]">
              <p className="text-base leading-8">
                Your Neuvago account is the bridge into the more personal side
                of the experience. Over time, it can connect your guided app
                journey, account settings, and future product ecosystem.
              </p>

              <p className="text-base leading-8">
                For now, this sign-in layer is designed to stay calm and
                uncomplicated. It is simply here to help you continue where your
                relationship with Neuvago becomes yours.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  New here?
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Create an account to begin your Neuvago experience.
                </p>
                <Link
                  href="/signup"
                  className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                >
                  Create account
                </Link>
              </div>

              <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Need context?
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Explore how the app fits into the wider Neuvago experience.
                </p>
                <Link
                  href="/get-started"
                  className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                >
                  Visit get started
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#1f1f1c]">
                Sign in
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                Sign in with the same account you use for Neuvago.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
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
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#1f1f1c]"
                  >
                    Password
                  </label>
                  <Link
                    href="/support"
                    className="text-xs font-medium text-[#5f5a52] underline decoration-black/15 underline-offset-4 hover:text-[#1f1f1c]"
                  >
                    Need help?
                  </Link>
                </div>

                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
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
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
              <p className="text-sm leading-7 text-[#5f5a52]">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                >
                  Create one here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Continue exploring
              </p>
              <p className="mt-3 text-base leading-8 text-[#5f5a52]">
                You can also continue through the public Neuvago site before
                signing in.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Explore the app
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Visit research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
