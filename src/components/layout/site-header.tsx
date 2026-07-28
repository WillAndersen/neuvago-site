
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, localizedHref, type Locale } from "@/i18n/routes";

const navItemsByLocale: Record<Locale, Array<{ href: string; label: string }>> = {
  en: [
    { href: "/product", label: "Product" },
    { href: "/app", label: "App" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/learn", label: "Learn" },
    { href: "/conditions", label: "Conditions" },
    { href: "/research", label: "Research" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
  ],
  no: [
    { href: "/no/produkt", label: "Produkt" },
    { href: "/no/app", label: "App" },
    { href: "/no/slik-fungerer-det", label: "Slik fungerer det" },
    { href: "/no/kunnskap", label: "Kunnskap" },
    { href: "/no/tilstander", label: "Tilstander" },
    { href: "/no/forskning", label: "Forskning" },
    { href: "/no/om-oss", label: "Om oss" },
    { href: "/no/support", label: "Support" },
  ],
};

function stripHash(href: string) {
  return href.split("#")[0] || "/";
}

function isActivePath(pathname: string, href: string) {
  const cleanHref = stripHash(href);

  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const navItems = navItemsByLocale[locale];

  const homeHref = localizedHref("/", locale);
  const loginLabel = locale === "no" ? "Logg inn" : "Sign in";
  const desktopCtaLabel = locale === "no" ? "Se produkt" : "View product";
  const mobileCtaLabel = locale === "no" ? "Produkt" : "Product";
  const productHref = localizedHref("/product#buy", locale);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex min-w-0 items-center">
          <Link
            href={homeHref}
            className="shrink-0 text-sm font-medium uppercase tracking-[0.32em] text-[#1f1f1c] transition hover:opacity-80"
            aria-label={locale === "no" ? "Neuvago forside" : "Neuvago home"}
          >
            Neuvago
          </Link>
        </div>

        <nav className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm transition ${
                      active
                        ? "text-[#1f1f1c]"
                        : "text-[#5f5a52] hover:text-[#1f1f1c]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="relative inline-flex items-center">
                      {item.label}
                      {active ? (
                        <span className="absolute -bottom-2 left-0 h-px w-full bg-[#1f1f1c]/70" />
                      ) : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm text-[#5f5a52] transition hover:text-[#1f1f1c]"
          >
            {loginLabel}
          </Link>

          <Link
            href={productHref}
            className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
          >
            {desktopCtaLabel}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/login"
            className="text-sm text-[#5f5a52] transition hover:text-[#1f1f1c]"
          >
            {loginLabel}
          </Link>

          <Link
            href={productHref}
            className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
          >
            {mobileCtaLabel}
          </Link>
        </div>
      </div>

      <div className="border-t border-black/5 px-6 py-3 sm:px-8 lg:hidden">
        <nav aria-label={locale === "no" ? "Primærnavigasjon mobil" : "Mobile primary navigation"}>
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto pb-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                    active
                      ? "border-black/10 bg-white text-[#1f1f1c]"
                      : "border-black/5 bg-white/50 text-[#5f5a52] hover:text-[#1f1f1c]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
