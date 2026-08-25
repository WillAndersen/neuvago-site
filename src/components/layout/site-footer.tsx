
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, localizedHref, type Locale } from "@/i18n/routes";

const footerGroupsByLocale: Record<
  Locale,
  Array<{
    title: string;
    links: Array<{ href: string; label: string }>;
  }>
> = {
  en: [
    {
      title: "Explore",
      links: [
        { href: "/product", label: "Product" },
        { href: "/app", label: "App" },
        { href: "/how-it-works", label: "How it works" },
        { href: "/how-to-use", label: "How to use" },
      ],
    },
    {
      title: "Knowledge",
      links: [
        { href: "/learn", label: "Learning hub" },
        { href: "/glossary", label: "Glossary" },
        { href: "/conditions", label: "Conditions" },
        { href: "/research", label: "Research" },
        { href: "/learn/vagus-nerve", label: "Vagus nerve" },
        {
          href: "/learn/nervous-system-regulation",
          label: "Nervous system regulation",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/support", label: "Support" },
        { href: "/legal", label: "Legal / Compliance" },
        { href: "/legal/trust-safety", label: "Trust & Safety" },
      ],
    },
    {
      title: "Access",
      links: [
        { href: "/get-started", label: "Get started" },
        { href: "/login", label: "Sign in" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/legal/medical-disclaimer", label: "Medical Disclaimer" },
        { href: "/legal/intended-use", label: "Intended Use" },
        { href: "/legal/regulatory", label: "Regulatory Information" },
        { href: "/legal/privacy-policy", label: "Privacy Policy" },
        { href: "/legal/terms-of-service", label: "Terms of Service" },
      ],
    },
  ],
  no: [
    {
      title: "Utforsk",
      links: [
        { href: "/no/produkt", label: "Produkt" },
        { href: "/no/app", label: "App" },
        { href: "/no/slik-fungerer-det", label: "Slik fungerer det" },
      ],
    },
    {
      title: "Kunnskap",
      links: [
        { href: "/no/kunnskap", label: "Kunnskapssenter" },
        { href: "/no/ordliste", label: "Ordliste" },
        { href: "/no/tilstander", label: "Tilstander" },
        { href: "/no/forskning", label: "Forskning" },
        { href: "/no/kunnskap/vagusnerven", label: "Vagusnerven" },
        {
          href: "/no/kunnskap/regulering-av-nervesystemet",
          label: "Regulering av nervesystemet",
        },
      ],
    },
    {
      title: "Selskap",
      links: [
        { href: "/no/om-oss", label: "Om oss" },
        { href: "/no/support", label: "Support" },
        { href: "/no/juridisk", label: "Juridisk og samsvar" },
        { href: "/no/juridisk/tillit-og-sikkerhet", label: "Tillit og sikkerhet" },
      ],
    },
    {
      title: "Tilgang",
      links: [
        { href: "/get-started", label: "Kom i gang" },
        { href: "/login", label: "Logg inn" },
      ],
    },
    {
      title: "Juridisk",
      links: [
        {
          href: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
          label: "Medisinsk ansvarsfraskrivelse",
        },
        { href: "/no/juridisk/tiltenkt-bruk", label: "Tiltenkt bruk" },
        { href: "/no/juridisk/regulatorisk", label: "Regulatorisk informasjon" },
        { href: "/no/juridisk/personvern", label: "Personvern" },
        { href: "/no/juridisk/vilkar", label: "Vilkår" },
      ],
    },
  ],
};

const footerCopyByLocale: Record<
  Locale,
  {
    homeLabel: string;
    description: string;
    rights: string;
    privacy: string;
    terms: string;
    disclaimer: string;
  }
> = {
  en: {
    homeLabel: "Neuvago home",
    description:
      "Calm, thoughtful support for stress, sleep, recovery, and nervous system awareness.",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    disclaimer: "Medical Disclaimer",
  },
  no: {
    homeLabel: "Neuvago forside",
    description:
      "Rolig og gjennomtenkt støtte for stress, søvn, restitusjon og bevissthet rundt nervesystemet.",
    rights: "Alle rettigheter reservert.",
    privacy: "Personvern",
    terms: "Vilkår",
    disclaimer: "Medisinsk ansvarsfraskrivelse",
  },
};

export function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const footerGroups = footerGroupsByLocale[locale];
  const copy = footerCopyByLocale[locale];

  const homeHref = localizedHref("/", locale);
  const privacyHref = localizedHref("/legal/privacy-policy", locale);
  const termsHref = localizedHref("/legal/terms-of-service", locale);
  const disclaimerHref = localizedHref("/legal/medical-disclaimer", locale);
  const intendedUseHref = localizedHref("/legal/intended-use", locale);

  return (
    <footer className="border-t border-black/5 bg-[#f2eee8] text-[#1f1f1c]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Link
              href={homeHref}
              className="inline-block text-sm font-medium uppercase tracking-[0.32em] text-[#1f1f1c] transition hover:opacity-80"
              aria-label={copy.homeLabel}
            >
              Neuvago
            </Link>

            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              {copy.description}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerGroups.map((group) => (
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
              <p>© {new Date().getFullYear()} Neuvago. {copy.rights}</p>

              <div className="flex flex-wrap gap-4">
                <Link href={privacyHref} className="transition hover:text-[#1f1f1c]">
                  {copy.privacy}
                </Link>
                <Link href={termsHref} className="transition hover:text-[#1f1f1c]">
                  {copy.terms}
                </Link>
                <Link href={disclaimerHref} className="transition hover:text-[#1f1f1c]">
                  {copy.disclaimer}
                </Link>
              </div>
            </div>

            {locale === "no" ? (
              <p className="max-w-3xl leading-6">
                Neuvago er utviklet for generell velvære og pedagogisk støtte. Les{" "}
                <Link
                  href={intendedUseHref}
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#1f1f1c]"
                >
                  Tiltenkt bruk
                </Link>{" "}
                og{" "}
                <Link
                  href={disclaimerHref}
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#1f1f1c]"
                >
                  Medisinsk ansvarsfraskrivelse
                </Link>{" "}
                for viktig produkt- og kommunikasjonskontekst.
              </p>
            ) : (
              <p className="max-w-3xl leading-6">
                Neuvago is designed for general wellness and educational support.
                Please review{" "}
                <Link
                  href={intendedUseHref}
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#1f1f1c]"
                >
                  Intended Use
                </Link>{" "}
                and{" "}
                <Link
                  href={disclaimerHref}
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#1f1f1c]"
                >
                  Medical Disclaimer
                </Link>{" "}
                for important product and communication context.
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
