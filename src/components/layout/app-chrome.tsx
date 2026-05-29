"use client"

import { usePathname } from "next/navigation"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

function shouldHidePublicChrome(pathname: string) {
  const chromeFreePrefixes = ["/account", "/continue", "/open-app", "/onboarding"]

  return chromeFreePrefixes.some((prefix) =>
    pathname === prefix || pathname.startsWith(`${prefix}/`)
  )
}

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/"

  if (shouldHidePublicChrome(pathname)) {
    return <>{children}</>
  }

  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
