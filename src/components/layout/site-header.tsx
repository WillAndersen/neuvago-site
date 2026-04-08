"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { supabase } from "@/lib/supabase/client"
import { useAuthUser } from "@/hooks/useAuthUser"

const navItems = [
  { label: "Product", href: "/product" },
  { label: "App", href: "/app" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Research", href: "/research" },
  { label: "Conditions", href: "/conditions" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
]

export function SiteHeader() {
  const router = useRouter()
  const { isLoading, isSignedIn } = useAuthUser()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)

  async function handleSignOut() {
    if (isSigningOut) return

    setIsSigningOut(true)

    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      setMobileMenuOpen(false)
      router.replace("/login")
      router.refresh()
    } catch (error) {
      console.error("Sign out failed:", error)
      setIsSigningOut(false)
    }
  }

  const desktopUtility = isLoading ? null : isSignedIn ? (
    <>
      <Link
        href="/continue"
        className="text-sm font-medium text-[#5f5a52] transition hover:text-[#1f1f1c]"
      >
        Continue
      </Link>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="rounded-full bg-[#1f1f1c] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSigningOut ? "Signing out..." : "Sign out"}
      </button>
    </>
  ) : (
    <>
      <Link
        href="/login"
        className="text-sm font-medium text-[#5f5a52] transition hover:text-[#1f1f1c]"
      >
        Sign in
      </Link>

      <Link
        href="/get-started"
        className="rounded-full bg-[#1f1f1c] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
      >
        Get started
      </Link>
    </>
  )

  const mobileUtility = isLoading ? null : isSignedIn ? (
    <>
      <Link
        href="/continue"
        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
        onClick={() => setMobileMenuOpen(false)}
      >
        Continue
      </Link>

      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSigningOut ? "Signing out..." : "Sign out"}
      </button>
    </>
  ) : (
    <>
      <Link
        href="/login"
        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#faf8f5]"
        onClick={() => setMobileMenuOpen(false)}
      >
        Sign in
      </Link>

      <Link
        href="/get-started"
        className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
        onClick={() => setMobileMenuOpen(false)}
      >
        Get started
      </Link>
    </>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium uppercase tracking-[0.2em] text-[#1f1f1c]"
          onClick={() => setMobileMenuOpen(false)}
        >
          Neuvago
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#5f5a52] transition hover:text-[#1f1f1c]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">{desktopUtility}</div>

        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#1f1f1c] transition hover:bg-white md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-black/5 bg-[#f7f4ef] md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[1.25rem] px-4 py-3 text-sm text-[#5f5a52] transition hover:bg-[#f2eee8] hover:text-[#1f1f1c]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="my-4 border-t border-black/5" />

              <div className="grid gap-3">{mobileUtility}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
