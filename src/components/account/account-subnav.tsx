"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { label: "Account home", href: "/account" },
  { label: "Activity", href: "/account/activity" },
  { label: "Profile", href: "/account/profile" },
  { label: "Preferences", href: "/account/preferences" },
  { label: "Security", href: "/account/security" },
  { label: "Open app", href: "/open-app" },
]

export function AccountSubnav() {
  const pathname = usePathname()

  return (
    <div className="border-b border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap gap-3">
          {items.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#1f1f1c] text-white"
                    : "border border-black/10 bg-white/70 text-[#1f1f1c] hover:bg-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
