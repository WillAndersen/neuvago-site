import Link from "next/link"

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
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium uppercase tracking-[0.2em] text-[#1f1f1c]"
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

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-[#5f5a52] transition hover:text-[#1f1f1c]"
          >
            Login
          </Link>

          <Link
            href="/shop"
            className="rounded-full bg-[#1f1f1c] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Shop
          </Link>
        </div>
      </div>
    </header>
  )
}