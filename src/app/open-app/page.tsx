"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { AccountSubnav } from "@/components/account/account-subnav"
import { useAccountProfile } from "@/hooks/useAccountProfile"
import {
  toDisplayLabel,
  toDisplayName,
  toSubscriptionLabel,
} from "@/lib/account/formatters"
import { supabase } from "@/lib/supabase/client"

type StartSurface = "account" | "open_app"

function detectMobileDevice() {
  if (typeof window === "undefined") return false

  const ua = window.navigator.userAgent || ""
  return /Android|iPhone|iPad|iPod|Mobile/i.test(ua)
}

function detectPlatform() {
  if (typeof window === "undefined") return "unknown"

  const ua = window.navigator.userAgent || ""

  if (/iPhone|iPad|iPod/i.test(ua)) return "ios"
  if (/Android/i.test(ua)) return "android"
  return "other"
}

const IOS_APP_STORE_URL = "#"
const ANDROID_PLAY_STORE_URL = "#"

export default function OpenAppPage() {
  const { isLoading, isSignedIn, user, profile } = useAccountProfile()

  const [preferredStartSurface, setPreferredStartSurface] =
    useState<StartSurface>("account")
  const [isLoadingPreferences, setIsLoadingPreferences] = useState(true)

  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const [platform, setPlatform] = useState<"ios" | "android" | "other" | "unknown">("unknown")
  const [hasCheckedDevice, setHasCheckedDevice] = useState(false)

  const [isLaunchingApp, setIsLaunchingApp] = useState(false)
  const [launchMessage, setLaunchMessage] = useState<string | null>(null)
  const [showFallbackLinks, setShowFallbackLinks] = useState(false)

  useEffect(() => {
    setIsMobileDevice(detectMobileDevice())
    setPlatform(detectPlatform())
    setHasCheckedDevice(true)
  }, [])

  useEffect(() => {
    let isMounted = true

    async function loadPreferences() {
      if (!user?.id) {
        if (isMounted) setIsLoadingPreferences(false)
        return
      }

      try {
        const { data } = await supabase
          .from("account_preferences")
          .select("preferred_start_surface")
          .eq("user_id", user.id)
          .maybeSingle()

        if (!isMounted) return

        if (
          data?.preferred_start_surface === "account" ||
          data?.preferred_start_surface === "open_app"
        ) {
          setPreferredStartSurface(data.preferred_start_surface)
        } else {
          setPreferredStartSurface("account")
        }
      } finally {
        if (isMounted) setIsLoadingPreferences(false)
      }
    }

    void loadPreferences()

    return () => {
      isMounted = false
    }
  }, [user?.id])

  const displayFirstName = toDisplayName(
    profile?.firstName,
    user?.firstName,
    "there"
  )
  const displayGoal = toDisplayLabel(profile?.primaryGoal)
  const displaySubscription = toSubscriptionLabel(profile?.subscriptionStatus)

  const preferredStartLabel =
    preferredStartSurface === "account" ? "Account home" : "Open app"

  const preferredStartHref =
    preferredStartSurface === "open_app" ? "/open-app" : "/account"

  const preferredStartButtonLabel =
    preferredStartSurface === "open_app"
      ? "Continue from app bridge"
      : "Continue to account"

  const mobileAppUrl = useMemo(() => {
    return "neuvago://"
  }, [])

  const storeUrl =
    platform === "ios"
      ? IOS_APP_STORE_URL
      : platform === "android"
        ? ANDROID_PLAY_STORE_URL
        : "#"

  const storeLabel =
    platform === "ios"
      ? "Open in App Store"
      : platform === "android"
        ? "Open in Google Play"
        : "View app store options later"

  async function handleOpenMobileApp() {
    if (isLaunchingApp) return

    setIsLaunchingApp(true)
    setLaunchMessage("Trying to open the Neuvago app...")
    setShowFallbackLinks(false)

    const start = Date.now()

    try {
      window.location.href = mobileAppUrl

      window.setTimeout(() => {
        const elapsed = Date.now() - start

        if (elapsed < 1800) {
          setLaunchMessage(
            "If the app did not open automatically, you can use the fallback options below."
          )
          setShowFallbackLinks(true)
        }
        setIsLaunchingApp(false)
      }, 1400)
    } catch {
      setLaunchMessage(
        "We could not open the app automatically. You can use the fallback options below."
      )
      setShowFallbackLinks(true)
      setIsLaunchingApp(false)
    }
  }

  if (isLoading || !hasCheckedDevice) {
    return (
      <main className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
        <section className="border-b border-black/5 bg-[#f7f4ef]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#6f6a61]">
                Open app
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Preparing your app bridge.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
                Just a moment while Neuvago checks your account and device.
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
              Open app
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Continue your Neuvago experience.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
              A calm bridge between your account and the more personal side of
              the Neuvago journey.
            </p>
          </div>
        </div>
      </section>

      <AccountSubnav />

      <section className="bg-[#f2eee8]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-12 lg:py-24">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/75 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                Launch overview
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Choose the calmest next step for your experience.
              </h2>

              <div className="mt-8 space-y-6 text-[#5f5a52]">
                <p className="text-base leading-8">
                  This page is designed as a simple launch point. It helps you
                  move naturally between your account, profile, and the wider
                  app-facing side of Neuvago.
                </p>

                <p className="text-base leading-8">
                  The experience should adapt to context. On mobile, it makes
                  sense to try opening the app. On desktop, it makes more sense
                  to continue on the web.
                </p>
              </div>
            </div>

            {isMobileDevice ? (
              <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Mobile app handoff
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  Open the Neuvago app on your device.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] md:text-base">
                  If the Neuvago mobile app is already installed, we can try to
                  open it directly. If it is not installed or your device does not
                  respond, you can continue on the web instead.
                </p>

                {launchMessage ? (
                  <div className="mt-6 rounded-[1.25rem] border border-black/5 bg-[#f7f4ef] px-4 py-3 text-sm leading-7 text-[#5f5a52]">
                    {launchMessage}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={handleOpenMobileApp}
                    disabled={isLaunchingApp}
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLaunchingApp ? "Opening app..." : "Open mobile app"}
                  </button>

                  <Link
                    href="/continue"
                    className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                  >
                    Continue on the web
                  </Link>
                </div>

                {showFallbackLinks ? (
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={mobileAppUrl}
                      className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      Try app link again
                    </a>

                    <a
                      href={storeUrl}
                      className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      {storeLabel}
                    </a>

                    <Link
                      href="/account"
                      className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      Go to account
                    </Link>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                  Desktop web continuation
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                  Continue on the web from here.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] md:text-base">
                  Since you are on a desktop device, the most natural next step
                  is to continue through your account, profile, or preferred
                  web entry point.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/continue"
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Continue
                  </Link>

                  <Link
                    href={preferredStartHref}
                    className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                  >
                    {preferredStartButtonLabel}
                  </Link>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                    Mobile note
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                    To launch the mobile app directly, open this page from your
                    phone once the app is available.
                  </p>
                </div>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Continue
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  Use your preferred entry
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Neuvago can remember where you prefer to begin on the web side
                  of the experience.
                </p>
                <Link
                  href="/continue"
                  className="mt-5 inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                >
                  Use Continue
                </Link>
              </div>

              <div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                  Preferences
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  Adjust how you begin
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Update your preferred start surface if you want a different
                  default web entry point.
                </p>
                <Link
                  href="/account/preferences"
                  className="mt-5 inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/50"
                >
                  Adjust preferences
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] sm:p-10">
              {isSignedIn ? (
                <>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Account summary
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                    Welcome back, {displayFirstName}.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    Your account is active and ready to continue.
                  </p>

                  <div className="mt-6 space-y-5">
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
                        Primary goal
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {displayGoal}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Subscription
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {displaySubscription}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-black/5 bg-[#f7f4ef] p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                        Preferred start surface
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                        {isLoadingPreferences ? "Checking..." : preferredStartLabel}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="/continue"
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Continue
                    </Link>

                    <Link
                      href={preferredStartHref}
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      {preferredStartButtonLabel}
                    </Link>

                    <Link
                      href="/account/preferences"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      Adjust preferences
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    Next step
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                    Choose your next step
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    Sign in if you already have an account, or create one to begin.
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="/login"
                      className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Sign in
                    </Link>

                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      Create account
                    </Link>

                    <Link
                      href="/get-started"
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
                    >
                      Visit get started
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a847b]">
                Bridge note
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                This page is designed to become a stronger launch point over time,
                while staying calm and easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
