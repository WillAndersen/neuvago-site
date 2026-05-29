"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { label: "Today", href: "/account/today" },
  { label: "Sessions", href: "/account/sessions" },
  { label: "Library", href: "/account/library" },
  { label: "Progress", href: "/account/progress" },
  { label: "Profile", href: "/account/profile" },
  { label: "Security", href: "/account/security" },
]

export function AccountSubnav() {
  const pathname = usePathname()

  return (
    <div className="border-b border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap gap-3">
          {items.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`)

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
