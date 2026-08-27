"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname } from "@/i18n/locale-registry";
import { getSiteChromeConfig } from "@/i18n/site-chrome";

function stripHashAndQuery(href: string) {
  return href.split(/[?#]/, 1)[0] || "/";
}

function isActivePath(pathname: string, href: string) {
  const cleanHref = stripHashAndQuery(href);

  if (cleanHref === "/") return pathname === "/";
  return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const { header } = getSiteChromeConfig(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex min-w-0 shrink-0 items-center gap-3">
          <Link
            href={header.homeHref}
            className="shrink-0 text-sm font-medium uppercase tracking-[0.32em] text-[#1f1f1c] transition hover:opacity-80"
            aria-label={header.homeLabel}
          >
            Neuvago
          </Link>

          {header.badge ? (
            <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#6f6a62]">
              {header.badge}
            </span>
          ) : null}
        </div>

        {header.navItems.length > 0 ? (
          <nav
            className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
            aria-label={header.navLabel}
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
              {header.navItems.map((item) => {
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
        ) : (
          <div className="hidden flex-1 lg:block" aria-hidden="true" />
        )}

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          {header.login ? (
            <Link
              href={header.login.href}
              className="text-sm text-[#5f5a52] transition hover:text-[#1f1f1c]"
            >
              {header.login.label}
            </Link>
          ) : null}

          {header.cta ? (
            <Link
              href={header.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
            >
              {header.cta.label}
            </Link>
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-3 md:hidden">
          {header.login ? (
            <Link
              href={header.login.href}
              className="text-sm text-[#5f5a52] transition hover:text-[#1f1f1c]"
            >
              {header.login.label}
            </Link>
          ) : null}

          {header.cta ? (
            <Link
              href={header.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
            >
              {header.cta.mobileLabel ?? header.cta.label}
            </Link>
          ) : null}
        </div>
      </div>

      {header.navItems.length > 0 ? (
        <div className="border-t border-black/5 px-6 py-3 sm:px-8 lg:hidden">
          <nav aria-label={header.navLabel}>
            <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto pb-1">
              {header.navItems.map((item) => {
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
      ) : null}
    </header>
  );
}
