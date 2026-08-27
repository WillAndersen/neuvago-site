"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname } from "@/i18n/locale-registry";
import {
  getSiteChromeConfig,
  type FooterNoticeSegment,
} from "@/i18n/site-chrome";

function renderNoticeSegment(segment: FooterNoticeSegment, index: number) {
  if (typeof segment === "string") {
    return <span key={`text-${index}`}>{segment}</span>;
  }

  return (
    <Link
      key={`${segment.href}-${index}`}
      href={segment.href}
      className="underline decoration-black/20 underline-offset-4 transition hover:text-[#1f1f1c]"
    >
      {segment.label}
    </Link>
  );
}

export function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const { footer } = getSiteChromeConfig(locale);
  const groupGridClass =
    footer.groups.length >= 4
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : "sm:grid-cols-2 lg:grid-cols-2";

  return (
    <footer className="border-t border-black/5 bg-[#f2eee8] text-[#1f1f1c]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Link
              href={footer.homeHref}
              className="inline-block text-sm font-medium uppercase tracking-[0.32em] text-[#1f1f1c] transition hover:opacity-80"
              aria-label={footer.homeLabel}
            >
              Neuvago
            </Link>

            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              {footer.description}
            </p>
          </div>

          <div className={`grid gap-10 ${groupGridClass}`}>
            {footer.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-[#5f5a52] transition hover:text-[#1f1f1c]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-black/5 pt-6">
          <div className="flex flex-col gap-4 text-sm text-[#7a756c]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Neuvago. {footer.rights}
              </p>

              {footer.utilityLinks.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                  {footer.utilityLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition hover:text-[#1f1f1c]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <p className="max-w-3xl leading-6">
              {footer.notice.map(renderNoticeSegment)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
