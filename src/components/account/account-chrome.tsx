"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function isImmersivePlayerRoute(pathname: string) {
  return pathname.startsWith("/account/session-player/")
}

export function AccountChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/account"

  if (isImmersivePlayerRoute(pathname)) {
    return <>{children}</>
  }

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f4ef]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <Link
            href="/account/today"
            className="text-sm font-medium uppercase tracking-[0.32em] text-[#1f1f1c] transition hover:opacity-80"
          >
            Neuvago
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/account/today"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              Today
            </Link>
            <Link
              href="/open-app"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              Open app
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              View site
            </Link>
          </div>
        </div>
      </div>

      {children}
    </>
  )
}
