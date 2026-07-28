from pathlib import Path

ROOT = Path.cwd()


def write_file(relative_path: str, content: str) -> None:
    path = ROOT / relative_path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.rstrip() + "\n", encoding="utf-8")
    print(f"Wrote {relative_path}")


def replace_once(relative_path: str, old: str, new: str) -> bool:
    path = ROOT / relative_path
    if not path.exists():
        print(f"Skipping missing file: {relative_path}")
        return False

    source = path.read_text(encoding="utf-8")
    if old not in source:
        print(f"Pattern not found in {relative_path}")
        return False

    path.write_text(source.replace(old, new, 1), encoding="utf-8")
    print(f"Updated {relative_path}")
    return True


def ensure_contains(relative_path: str, snippet: str) -> None:
    path = ROOT / relative_path
    if not path.exists():
        print(f"Skipping missing file: {relative_path}")
        return

    source = path.read_text(encoding="utf-8")
    if snippet in source:
        return

    path.write_text(source.rstrip() + "\n" + snippet.rstrip() + "\n", encoding="utf-8")
    print(f"Updated {relative_path}")


write_file("src/i18n/routes.ts", """
export const locales = ["en", "no"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = "en" satisfies Locale;

export const localeConfig = {
  en: {
    label: "International",
    pathPrefix: "",
    lang: "en-US",
    ogLocale: "en_US",
    market: "INTL",
    currency: "USD",
  },
  no: {
    label: "Norge",
    pathPrefix: "/no",
    lang: "nb-NO",
    ogLocale: "nb_NO",
    market: "NO",
    currency: "NOK",
  },
} as const;

export const noPathMap: Record<string, string> = {
  "/": "/no",
  "/product": "/no/produkt",
  "/app": "/no/app",
  "/how-it-works": "/no/slik-fungerer-det",
  "/learn": "/no/kunnskap",
  "/conditions": "/no/tilstander",
  "/research": "/no/forskning",
  "/about": "/no/om-oss",
  "/support": "/no/support",
  "/legal": "/no/juridisk",
  "/legal/intended-use": "/no/juridisk/tiltenkt-bruk",
  "/legal/medical-disclaimer": "/no/juridisk/medisinsk-ansvarsfraskrivelse",
  "/legal/privacy-policy": "/no/juridisk/personvern",
  "/legal/terms-of-service": "/no/juridisk/vilkar",
  "/legal/regulatory": "/no/juridisk/regulatorisk",
  "/legal/trust-safety": "/no/juridisk/tillit-og-sikkerhet",
  "/legal/ce-compliance": "/no/juridisk/ce-samsvar",
  "/legal/fda-status": "/no/juridisk/fda-status",
};

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (pathname === "/no" || pathname?.startsWith("/no/")) {
    return "no";
  }

  return defaultLocale;
}

function splitHref(href: string) {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return { path: href, hash: "" };
  }

  return {
    path: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex),
  };
}

export function localizedHref(href: string, locale: Locale): string {
  if (
    locale === defaultLocale ||
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const { path, hash } = splitHref(href);

  if (locale === "no") {
    return `${noPathMap[path] ?? path}${hash}`;
  }

  return href;
}
""")

write_file("middleware.ts", """
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { pathname } = request.nextUrl;

  const locale = pathname === "/no" || pathname.startsWith("/no/") ? "no" : "en";
  requestHeaders.set("x-neuvago-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
""")

write_file("src/app/layout.tsx", """
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

import { AppChrome } from "@/components/layout/app-chrome";

import "./globals.css";

const defaultOgImage = {
  url: "/images/neuvago/launch/no-home-hero-desktop.webp",
  width: 1600,
  height: 900,
  alt: "Neuvago device and guided app",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neuvago.com"),
  title: {
    default: "Neuvago | Calm support for stress, sleep, and recovery",
    template: "%s",
  },
  description:
    "Neuvago combines a thoughtfully designed device, guided app experiences, and research-informed learning to support stress, sleep, recovery, and nervous system regulation.",
  keywords: [
    "Neuvago",
    "vagus nerve",
    "nervous system regulation",
    "vagal tone",
    "stress support",
    "sleep support",
    "recovery",
    "calm technology",
  ],
  openGraph: {
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "A calmer way to support stress, sleep, recovery, and nervous system regulation.",
    url: "https://neuvago.com",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "A calmer way to support stress, sleep, recovery, and nervous system regulation.",
    images: [defaultOgImage.url],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-neuvago-locale");
  const htmlLang = locale === "no" ? "nb" : "en";

  return (
    <html lang={htmlLang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f4ef] text-[#1f1f1c] antialiased`}
      >
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
""")

write_file("src/components/layout/site-header.tsx", """
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
""")

write_file("src/components/layout/site-footer.tsx", """
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
      ],
    },
    {
      title: "Knowledge",
      links: [
        { href: "/learn", label: "Learning hub" },
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
        { href: "/no/tilstander", label: "Tilstander" },
        { href: "/no/forskning", label: "Forskning" },
        { href: "/learn/vagus-nerve", label: "Vagusnerven" },
        {
          href: "/learn/nervous-system-regulation",
          label: "Regulering av nervesystemet",
        },
      ],
    },
    {
      title: "Selskap",
      links: [
        { href: "/no/om-oss", label: "Om oss" },
        { href: "/no/support", label: "Support" },
        { href: "/no/juridisk", label: "Juridisk / Compliance" },
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
""")

write_file("src/components/product/ProductLaunchBuyBox.tsx", """
import Image from "next/image";
import Link from "next/link";

type ProductLaunchGalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProductLaunchBuyBoxCopy = {
  galleryImages: readonly [ProductLaunchGalleryImage, ...ProductLaunchGalleryImage[]];
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  purchaseTitle: string;
  launchStatus: string;
  purchaseDescription: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  includedItems: readonly string[];
  reassuranceItems: readonly string[];
};

const defaultCopy = {
  galleryImages: [
    {
      src: "/images/neuvago/launch/product-gallery-front.webp",
      alt: "Neuvago device shown from the front on a calm neutral background.",
      label: "Front view",
    },
    {
      src: "/images/neuvago/launch/product-gallery-angle.webp",
      alt: "Neuvago device shown from an angled view to reveal its shape and finish.",
      label: "Angled view",
    },
    {
      src: "/images/neuvago/launch/product-gallery-detail.webp",
      alt: "Close detail of the Neuvago device material and premium finish.",
      label: "Material detail",
    },
  ],
  eyebrow: "Launch product",
  title: "Neuvago",
  description:
    "A premium non-invasive vagus nerve stimulator paired with guided app sessions for short, repeatable regulation routines.",
  badge: "Device + app",
  purchaseTitle: "Purchase options",
  launchStatus: "Preparing launch",
  purchaseDescription:
    "Price, availability, and checkout options will appear here as soon as purchasing opens.",
  primaryCta: {
    label: "Get launch updates",
    href: "/get-started",
  },
  secondaryCta: {
    label: "Review intended use",
    href: "/legal/intended-use",
  },
  includedItems: [
    "Neuvago device",
    "Guided app experience",
    "Quick-start guidance",
    "Safety and intended-use information",
  ],
  reassuranceItems: [
    "Non-invasive wellness support",
    "Designed for short daily routines",
    "Clear safety and claim boundaries",
  ],
} satisfies ProductLaunchBuyBoxCopy;

function GalleryImage({
  src,
  alt,
  size = "large",
}: {
  src: string;
  alt: string;
  size?: "large" | "small";
}) {
  const containerClassName =
    size === "large"
      ? "flex items-center justify-center p-6 sm:p-8"
      : "flex items-center justify-center p-5";

  const imageFrameClassName =
    size === "large"
      ? "relative aspect-square w-full max-w-[25rem]"
      : "relative aspect-square w-full max-w-[14rem]";

  const imageSizes =
    size === "large"
      ? "(max-width: 640px) 74vw, (max-width: 1024px) 420px, 420px"
      : "(max-width: 640px) 38vw, 220px";

  return (
    <div className={containerClassName}>
      <div className={imageFrameClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes={imageSizes}
        />
      </div>
    </div>
  );
}

export function ProductLaunchBuyBox({
  copy = defaultCopy,
}: {
  copy?: ProductLaunchBuyBoxCopy;
}) {
  const [mainImage, ...secondaryImages] = copy.galleryImages;

  return (
    <section id="buy" className="scroll-mt-28 bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[88rem] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.94fr_0.82fr] lg:items-start lg:gap-10 lg:px-12 lg:py-20">
        <div className="order-2 grid gap-4 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.09)]">
            <GalleryImage src={mainImage.src} alt={mainImage.alt} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {secondaryImages.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-[1.55rem] border border-black/5 bg-[#fbf8f2] shadow-[0_16px_56px_rgba(31,31,28,0.06)]"
              >
                <GalleryImage src={image.src} alt={image.alt} size="small" />
                <div className="border-t border-black/5 px-4 py-3">
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-[#8a7f72]">
                    {image.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside
          id="shopify-buy-box"
          aria-labelledby="product-buy-heading"
          className="order-1 rounded-[2.15rem] border border-black/5 bg-[#fbf8f2]/90 p-6 shadow-[0_26px_95px_rgba(31,31,28,0.1)] backdrop-blur sm:p-8 lg:sticky lg:top-24 lg:order-2"
        >
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {copy.eyebrow}
          </p>

          <div className="mt-5 border-b border-black/8 pb-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2
                  id="product-buy-heading"
                  className="text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl"
                >
                  {copy.title}
                </h2>
                <p className="mt-3 max-w-md text-base leading-7 text-[#5f5a52]">
                  {copy.description}
                </p>
              </div>

              <div className="inline-flex shrink-0 items-center rounded-full border border-black/8 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#6f675d]">
                {copy.badge}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-[1.7rem] border border-black/6 bg-[#f2eee8]/72 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-[#292824]">
                {copy.purchaseTitle}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8a7f72]">
                {copy.launchStatus}
              </p>
            </div>

            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
              {copy.purchaseDescription}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={copy.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28]"
              >
                {copy.primaryCta.label}
              </Link>
              <Link
                href={copy.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                {copy.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {copy.includedItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.15rem] border border-black/6 bg-white/58 px-4 py-3 text-sm font-medium text-[#38342f]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-7 space-y-3 border-t border-black/8 pt-6">
            {copy.reassuranceItems.map((item) => (
              <p key={item} className="flex gap-3 text-sm leading-6 text-[#5f5a52]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1f1f1c]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
""")

write_file("src/content/no/homepage.ts", """
import { homepageContent } from "@/content/homepage";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const homepageContentNo = {
  ...homepageContent,
  hero: {
    ...homepageContent.hero,
    eyebrow: "Neuvago",
    title: "En roligere måte å vende tilbake på.",
    description:
      "Neuvago kombinerer en ikke-invasiv vagusnervestimulator med veiledede appøkter for korte, gjentakbare rutiner som støtter regulering av nervesystemet.",
    primaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    proofLine: ["Ikke-invasiv", "App-veiledet", "Forankret i forskning"],
    mediaNote:
      "Hero-felt klart for video. Bruker et rolig stillbilde frem til ambient video er klar.",
  },

  proofStrip: {
    ...homepageContent.proofStrip,
    items: [
      "Ikke-invasiv",
      "App-veiledet",
      "Forankret i forskning",
      "Laget for daglige rutiner",
    ],
  },

  systemReveal: {
    ...homepageContent.systemReveal,
    eyebrow: "Neuvago-systemet",
    title: "Enhet, veiledning og rutine — laget for å fungere som ett.",
    description:
      "Neuvago er ikke bare en enhet eller bare en app. Det er et rolig system bygget rundt et fysisk startpunkt, veiledede økter og en rytme du kan vende tilbake til i hverdagen.",
    image: {
      ...homepageContent.systemReveal.image,
      alt: "Neuvago-enheten vist i en varm og premium produktkomposisjon.",
    },
    items: [
      {
        eyebrow: "Enhet",
        title: "Et rolig fysisk anker",
        description:
          "Den håndholdte enheten gir rutinen et tydelig startpunkt — enkel, gjennomtenkt og lett å ha i nærheten.",
        href: no("/product"),
      },
      {
        eyebrow: "Veiledning",
        title: "Økter som gjør neste steg tydelig",
        description:
          "Appen gir struktur i øyeblikket: velg en økt, følg rytmen og kom tilbake uten å måtte gjette.",
        href: no("/app"),
      },
      {
        eyebrow: "Rutine",
        title: "Bygget for gjentakelse",
        description:
          "Verdien ligger ikke i én intens økt, men i et roligere mønster du kan komme tilbake til over tid.",
        href: no("/how-it-works"),
      },
    ],
  },

  ritualSequence: {
    ...homepageContent.ritualSequence,
    eyebrow: "Rutinen",
    title: "Enkel nok til å begynne. Strukturert nok til å vende tilbake til.",
    description:
      "Opplevelsen er bevisst rolig: plasser enheten, start en veiledet økt og la appen gjøre øyeblikket til en gjentakbar rutine.",
    steps: [
      {
        title: "Plasser",
        description:
          "Start med et tydelig fysisk utgangspunkt og et rolig oppsett som ikke føles klinisk.",
      },
      {
        title: "Start",
        description:
          "Velg en veiledet økt i appen og følg en enkel, avgrenset rytme.",
      },
      {
        title: "Vend tilbake",
        description:
          "Bruk samme struktur igjen over tid, slik at regulering blir lettere å komme tilbake til.",
      },
    ],
    cta: {
      label: "Se hvordan det fungerer",
      href: no("/how-it-works"),
    },
  },

  appGuidance: {
    ...homepageContent.appGuidance,
    eyebrow: "Veiledet av appen",
    title: "Appen gjør en økt til noe du kan følge.",
    description:
      "Neuvago er laget for å fjerne usikkerheten rundt hva du skal gjøre videre. Økter, forløp og rolige fremdriftssignaler gjør opplevelsen veiledet heller enn improvisert.",
    items: [
      {
        title: "Veiledede økter",
        description:
          "Velg en økt som passer øyeblikket — reset, nedtrapping eller en roligere rytme.",
      },
      {
        title: "Et bibliotek som holder seg rolig",
        description:
          "Veiledningen er organisert uten at appen føles som et støyende dashboard.",
      },
      {
        title: "Fremdrift uten press",
        description:
          "Målet er kontinuitet, ikke prestasjon. Mer rytme, mindre intensitet.",
      },
    ],
    cta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },

  researchBoundary: {
    ...homepageContent.researchBoundary,
    eyebrow: "Forskning og tydelige grenser",
    title: "Forankret i forskning, ikke drevet av påstander.",
    description:
      "Neuvago står i en bredere forskningssamtale om vagusnervestimulering, autonom regulering, HRV, stress og restitusjon. Nettstedet skiller forskningskontekst fra produktpåstander og holder tiltenkt bruk synlig.",
    points: [
      {
        title: "Hva forskning kan bidra til å forklare",
        description:
          "Vagusnerven og autonom regulering er relevante rammer for å forstå stress, restitusjon og nedregulering.",
      },
      {
        title: "Hva forskning ikke beviser",
        description:
          "Dokumentasjon fra et forskningsfelt blir ikke automatisk en påstand om et bestemt velværeprodukt eller en bestemt rutine.",
      },
      {
        title: "Slik holder Neuvago seg ansvarlig",
        description:
          "Neuvago posisjoneres ikke som medisinsk behandling, diagnostisk verktøy eller erstatning for profesjonell oppfølging.",
      },
    ],
    primaryCta: {
      label: "Utforsk forskning",
      href: no("/research"),
    },
    secondaryCta: {
      label: "Se tiltenkt bruk",
      href: no("/legal/intended-use"),
    },
  },

  everydayPathways: {
    ...homepageContent.everydayPathways,
    eyebrow: "Hverdagsøyeblikk",
    title: "Tre øyeblikk der en roligere rutine kan begynne.",
    description:
      "Neuvago er laget for hverdagen: en kort reset før dagen, en roligere pause under stress eller en mykere nedtrapping om kvelden.",
    items: [
      {
        eyebrow: "Morgen",
        title: "Morgenreset",
        description:
          "Start med en kort veiledet rutine før dagen blir for travel.",
        href: no("/app"),
        image: homepageContent.everydayPathways.items[0].image,
      },
      {
        eyebrow: "Dag",
        title: "Pause i arbeidsdagen",
        description:
          "Skap en roligere overgang når stresset føles som om det står på for lenge.",
        href: no("/conditions"),
        image: homepageContent.everydayPathways.items[1].image,
      },
      {
        eyebrow: "Kveld",
        title: "Kveldsnedtrapping",
        description:
          "Bruk en mykere rytme for å hjelpe kroppen over mot hvile og restitusjon.",
        href: no("/conditions"),
        image: homepageContent.everydayPathways.items[2].image,
      },
    ],
  },

  finalCta: {
    ...homepageContent.finalCta,
    title: "Bygg en roligere reguleringsrutine.",
    description:
      "Se hvordan Neuvago kombinerer en ikke-invasiv enhet, veiledede økter og forskningsinformert kunnskap i ett rolig daglig system.",
    primaryCta: {
      label: "Se Neuvago",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    signedInCta: {
      label: "Fortsett",
      href: "/continue",
    },
  },
} as unknown as typeof homepageContent;
""")

write_file("src/content/no/product.ts", """
import { productPageContent } from "@/content/product";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const productPageContentNo = {
  ...productPageContent,
  hero: {
    ...productPageContent.hero,
    eyebrow: "Produkt",
    title: "En ikke-invasiv vagusnervestimulator, veiledet av appen.",
    description:
      "Neuvago kombinerer en premium håndholdt enhet med veiledede appøkter for korte, gjentakbare reguleringsrutiner — med tydelige velværegrenser og et forskningsinformert sikkerhetslag.",
    primaryCta: {
      label: "Se produktvalg",
      href: "#buy",
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    proofLine: ["Ikke-invasiv VNS", "App-veiledede økter", "Tydelige velværegrenser"],
  },

  whatIsNeuvago: {
    ...productPageContent.whatIsNeuvago,
    title: "Et fysisk anker for et roligere reguleringssystem",
    description:
      "I sentrum av Neuvago står en ikke-invasiv vagusnervestimulator laget for å føles rolig, tydelig og enkel å leve med. Appen tilfører veiledning, øktstruktur og kontinuitet, mens produktopplevelsen holder seg forankret i skånsom daglig velværestøtte heller enn medisinske behandlingspåstander.",
    bullets: [
      "En ikke-invasiv vagusnervestimulator laget for roligere daglig støtte",
      "Utformet for å føles premium, skånsom og enkel å bruke",
      "Koblet til en app som gir plasseringsveiledning, øktrytme og kontinuitet",
    ],
  },

  whyItFeelsDifferent: {
    ...productPageContent.whyItFeelsDifferent,
    eyebrow: "Hvorfor den føles annerledes",
    title: "Utformet for å føles skånsommere, tydeligere og enklere å leve med.",
    description:
      "Fra formfaktor til flyt er Neuvago bygget for å føles støttende, ikke overveldende. Målet er ikke intensitet, selveksperimentering eller kompliserte protokoller, men en roligere enhet-og-app-opplevelse som passer naturlig inn i hverdagen.",
    cards: [
      {
        title: "Komfort før intensitet",
        description:
          "Bygget for å føles rolig og støttende heller enn intens, overstimulerende eller vanskelig å justere.",
      },
      {
        title: "Laget for ekte rutiner",
        description: "Utformet for å passe inn i hverdagen, ikke bare i perfekte øyeblikk.",
      },
      {
        title: "Enhet og app sammen",
        description:
          "En sammenkoblet opplevelse som kombinerer den fysiske vagusnervestimulatoren med veiledet øktstruktur.",
      },
      {
        title: "Premium og rolig opplevelse",
        description:
          "Mykt visuelt språk, enkle flyter og en mer jordet måte å bruke produktet på.",
      },
      {
        title: "Grensene er synlige",
        description:
          "Forskningskontekst, tiltenkt bruk og sikkerhetsveiledning holdes tett på, slik at produktet ikke fremstår mer klinisk enn det er.",
      },
    ],
  },

  deviceAppTogether: {
    ...productPageContent.deviceAppTogether,
    title: "Appen fullfører produktopplevelsen",
    description:
      "Enheten kan stå på egne ben som et fysisk startpunkt, men appen gjør hele systemet tydeligere og enklere å vende tilbake til gjennom økter, rutiner og kontinuitet over tid.",
    features: [
      {
        title: "Enheten gir opplevelsen et fysisk sentrum",
        description: "Et rolig og håndfast inngangspunkt som føles mer jordet enn innhold alene.",
      },
      {
        title: "Appen tilfører struktur og veiledning",
        description:
          "Økter og rutiner gjør det enklere å vite hva du skal gjøre videre og enklere å holde kontinuitet.",
      },
      {
        title: "Sammen føles systemet mer komplett",
        description:
          "Enheten og appen støtter hverandre og skaper en tydeligere, roligere og mer premium daglig opplevelse.",
      },
    ],
    cta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },

  howItFitsIntoLife: {
    ...productPageContent.howItFitsIntoLife,
    title: "Bygget for øyeblikkene du faktisk vender tilbake til",
    description:
      "Verdien av produktet ligger ikke bare i hva det er, men i hvor naturlig det kan passe inn i roligere daglige rutiner — enten du ønsker en mykere start, en pause under stress eller en mer bevisst nedtrapping om kvelden.",
    cards: [
      {
        title: "Morgenreset",
        description: "Start dagen med et roligere inngangspunkt og litt mer stødighet.",
      },
      {
        title: "Restitusjon i løpet av dagen",
        description:
          "Bruk Neuvago som en stille pause når stress eller aktivering begynner å bygge seg opp.",
      },
      {
        title: "Kveldsnedtrapping",
        description: "Støtt en mykere overgang ut av dagen og inn i hvile.",
      },
    ],
  },

  howToUse: {
    ...productPageContent.howToUse,
    title: "En enkel rutine i tre steg",
    description:
      "Du trenger ingen komplisert protokoll for å forstå produktet. I praksis er Neuvago laget for å føles enkelt: plasser enheten komfortabelt, følg veiledningen i appen og vend tilbake til rutinen over tid.",
    steps: [
      {
        ...productPageContent.howToUse.steps[0],
        title: "Plasser enheten komfortabelt",
        description:
          "Start med enheten som det fysiske utgangspunktet, der komfort og tydelig plasseringsveiledning er en del av opplevelsen.",
      },
      {
        ...productPageContent.howToUse.steps[1],
        title: "Start en veiledet økt i appen",
        description:
          "Bruk appen til å velge veiledning som passer øyeblikket, samtidig som øktlengde, rytme og intensitet holdes lett å forstå.",
      },
      {
        ...productPageContent.howToUse.steps[2],
        title: "Vend tilbake til den over tid",
        description:
          "Gjenta på måter som passer hverdagen, slik at systemet blir enklere å vende tilbake til og mer nyttig over tid.",
      },
    ],
  },

  trustBridge: {
    ...productPageContent.trustBridge,
    title: "Forskningskontekst, sikkerhetsgrenser og daglig bruk",
    description:
      "Neuvago er bygget innenfor en bredere kunnskapsverden om regulering av nervesystemet, ikke-invasiv vagusnervestimulering, sikkerhet og tolerabilitet, restitusjon og stressfysiologi. Du kan utforske forskningslaget dersom du vil gå dypere, mens produktpåstandene holder seg forankret i velværestøtte.",
    links: [
      {
        title: "Ikke-invasiv VNS",
        description:
          "Forstå kategorien Neuvago hører hjemme i: ekstern stimulering, veiledning og tydelige velværegrenser.",
        href: "/learn/non-invasive-vagus-nerve-stimulation",
      },
      {
        title: "Transkutan VNS",
        description:
          "Lær hva tVNS betyr, hvordan det relaterer til taVNS og ikke-invasiv VNS, og hvorfor metodedetaljer betyr noe.",
        href: "/learn/transcutaneous-vagus-nerve-stimulation",
      },
      {
        title: "VNS-forskning",
        description:
          "Utforsk det bredere forskningsfeltet rundt implantert, aurikulær og ikke-invasiv vagusnervestimulering.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Sikkerhet og tolerabilitet",
        description:
          "Se bivirkninger, tolerabilitet, kontraindikasjoner og sikkerhetskontekst bak ansvarlig posisjonering av ikke-invasiv VNS.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Aurikulær VNS",
        description:
          "Lær hvordan ørebasert VNS, taVNS, komfort, plassering og ansvarlig velværespråk henger sammen.",
        href: "/learn/auricular-vagus-nerve-stimulation",
      },
      {
        title: "Tiltenkt bruk",
        description:
          "Se produktgrensene som forklarer hva Neuvago er laget for å støtte — og hva det ikke er ment å diagnostisere, behandle, kurere eller erstatte.",
        href: no("/legal/intended-use"),
      },
    ],
    primaryCta: {
      label: "Utforsk forskning",
      href: no("/research"),
    },
    secondaryCta: {
      label: "Gå til kunnskap",
      href: no("/learn"),
    },
  },

  faq: {
    ...productPageContent.faq,
    title: "Praktisk avklaring",
    description:
      "Noen enkle svar på spørsmål mange har når de først utforsker Neuvago.",
    items: [
      {
        question: "Er Neuvago en medisinsk behandling?",
        answer:
          "Nei. Neuvago posisjoneres som et velværeprodukt laget for å støtte roligere daglig regulering og veiledede rutiner. Det beskrives ikke som behandling, diagnostisk verktøy, kur eller erstatning for profesjonell medisinsk oppfølging.",
      },
      {
        question: "Trenger jeg appen?",
        answer:
          "Appen er en sentral del av opplevelsen fordi den tilfører veiledning, øktstruktur og kontinuitet over tid.",
      },
      {
        question: "Er Neuvago laget for daglig bruk?",
        answer:
          "Ja. Neuvago er laget for å føles enkel, gjentakbar og realistisk å vende tilbake til som en del av hverdagen.",
      },
      {
        question: "Er sterkere stimulering alltid bedre?",
        answer:
          "Nei. Opplevelsen er bevisst bygget rundt komfort, veiledning og konsistens heller enn å jage sterkest mulig følelse.",
      },
      {
        question: "Hvem bør snakke med helsepersonell før bruk?",
        answer:
          "Personer med implanterte elektroniske enheter, spørsmål knyttet til hjerterytme, graviditet, medisinske tilstander eller aktive behandlingsløp bør snakke med kvalifisert helsepersonell før de bruker et stimuleringsprodukt.",
      },
      {
        question: "Kan jeg utforske kunnskapssiden før jeg går videre?",
        answer:
          "Ja. Du kan bevege deg mellom produkt, app, kunnskap, tilstander, forskning, tiltenkt bruk og sikkerhetssider avhengig av hva du vil forstå først.",
      },
    ],
  },

  finalCta: {
    ...productPageContent.finalCta,
    title: "Se hvordan hele Neuvago-systemet fungerer",
    description:
      "Utforsk hvordan enheten, appen og en roligere daglig rutine passer sammen — og gå videre til hele slik-fungerer-det-opplevelsen eller den veiledede appdelen.",
    primaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    secondaryCta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },
} as unknown as typeof productPageContent;
""")

write_file("src/content/no/product-buy-box.ts", """
import type { ProductLaunchBuyBoxCopy } from "@/components/product/ProductLaunchBuyBox";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const productLaunchBuyBoxNo = {
  galleryImages: [
    {
      src: "/images/neuvago/launch/product-gallery-front.webp",
      alt: "Neuvago-enheten vist forfra mot en rolig, nøytral bakgrunn.",
      label: "Forfra",
    },
    {
      src: "/images/neuvago/launch/product-gallery-angle.webp",
      alt: "Neuvago-enheten vist fra vinkel for å vise form og finish.",
      label: "Vinkel",
    },
    {
      src: "/images/neuvago/launch/product-gallery-detail.webp",
      alt: "Nærbilde av materialet og finishen på Neuvago-enheten.",
      label: "Materialdetalj",
    },
  ],
  eyebrow: "Lanseringsprodukt",
  title: "Neuvago",
  description:
    "En premium ikke-invasiv vagusnervestimulator kombinert med veiledede appøkter for korte, gjentakbare reguleringsrutiner.",
  badge: "Enhet + app",
  purchaseTitle: "Kjøpsvalg",
  launchStatus: "Lansering forberedes",
  purchaseDescription:
    "Pris, tilgjengelighet og betalingsvalg vises her så snart kjøp åpner.",
  primaryCta: {
    label: "Få lanseringsoppdateringer",
    href: "/get-started",
  },
  secondaryCta: {
    label: "Se tiltenkt bruk",
    href: no("/legal/intended-use"),
  },
  includedItems: [
    "Neuvago-enhet",
    "Veiledet appopplevelse",
    "Hurtigstart-veiledning",
    "Sikkerhet og tiltenkt bruk",
  ],
  reassuranceItems: [
    "Ikke-invasiv velværestøtte",
    "Laget for korte daglige rutiner",
    "Tydelige sikkerhets- og påstandsgrenser",
  ],
} satisfies ProductLaunchBuyBoxCopy;
""")

write_file("src/app/no/page.tsx", """
import type { Metadata } from "next";
import { homepageContentNo } from "@/content/no/homepage";
import {
  HomeHero,
  HomeProofStrip,
  HomeSystemReveal,
  HomeRoutineSequence,
  HomeAppGuidance,
  HomeResearchBoundary,
  HomeEverydayPathways,
  HomeFinalCta,
} from "@/components/home";
import {
  buildOrganizationStructuredData,
  buildWebPageStructuredData,
  buildWebSiteStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Norge | Ikke-invasiv vagusnervestimulator og app",
  description:
    "Neuvago kombinerer en ikke-invasiv vagusnervestimulator med veiledede appøkter for korte, gjentakbare rutiner som støtter regulering av nervesystemet.",
  alternates: {
    canonical: "/no",
    languages: {
      "en-US": "/",
      "nb-NO": "/no",
    },
  },
  openGraph: {
    title: "Neuvago Norge | Ikke-invasiv vagusnervestimulator og app",
    description:
      "Et rolig, app-veiledet reguleringssystem bygget rundt en ikke-invasiv vagusnervestimulator og korte daglige rutiner.",
    url: "/no",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Norge | Ikke-invasiv vagusnervestimulator og app",
    description:
      "Et rolig, app-veiledet reguleringssystem bygget rundt en ikke-invasiv vagusnervestimulator og korte daglige rutiner.",
  },
};

export default function NorwayHomePage() {
  const content = homepageContentNo;

  const structuredData = [
    buildOrganizationStructuredData(),
    buildWebSiteStructuredData(),
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/no",
    }),
  ];

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`no-home-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <HomeHero content={content.hero} /> : null}

      {content.proofStrip.visible ? (
        <HomeProofStrip content={content.proofStrip} />
      ) : null}

      {content.systemReveal.visible ? (
        <HomeSystemReveal content={content.systemReveal} />
      ) : null}

      {content.ritualSequence.visible ? (
        <HomeRoutineSequence content={content.ritualSequence} />
      ) : null}

      {content.appGuidance.visible ? (
        <HomeAppGuidance content={content.appGuidance} />
      ) : null}

      {content.researchBoundary.visible ? (
        <HomeResearchBoundary content={content.researchBoundary} />
      ) : null}

      {content.everydayPathways.visible ? (
        <HomeEverydayPathways content={content.everydayPathways} />
      ) : null}

      {content.finalCta.visible ? (
        <HomeFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
""")

write_file("src/app/no/produkt/page.tsx", """
import type { Metadata } from "next";
import { productPageContentNo } from "@/content/no/product";
import { productLaunchBuyBoxNo } from "@/content/no/product-buy-box";
import {
  ProductHero,
  ProductLaunchBuyBox,
  ProductWhatIsNeuvago,
  ProductWhyItFeelsDifferent,
  ProductDeviceAppTogether,
  ProductHowItFitsIntoLife,
  ProductHowToUse,
  ProductTrustBridge,
  ProductFaq,
  ProductFinalCta,
} from "@/components/product";
import {
  buildFAQStructuredData,
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Produkt | Ikke-invasiv VNS-enhet og app",
  description:
    "Møt Neuvago: en premium ikke-invasiv vagusnervestimulator og app for veiledede rutiner, tydelige sikkerhetsgrenser og roligere daglig reguleringsstøtte.",
  alternates: {
    canonical: "/no/produkt",
    languages: {
      "en-US": "/product",
      "nb-NO": "/no/produkt",
    },
  },
  openGraph: {
    title: "Neuvago Produkt | Ikke-invasiv VNS-enhet og app",
    description:
      "Møt Neuvago: en premium ikke-invasiv vagusnervestimulator og app for veiledede rutiner, tydelige sikkerhetsgrenser og roligere daglig reguleringsstøtte.",
    url: "/no/produkt",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Produkt | Ikke-invasiv VNS-enhet og app",
    description:
      "Møt Neuvago: en premium ikke-invasiv vagusnervestimulator og app for veiledede rutiner, tydelige sikkerhetsgrenser og roligere daglig reguleringsstøtte.",
  },
};

export default function NorwayProductPage() {
  const content = productPageContentNo;

  const structuredData: Array<Record<string, unknown>> = buildPageWithBreadcrumbStructuredData({
    title: content.hero.title,
    description: content.hero.description,
    path: "/no/produkt",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Produkt", path: "/no/produkt" },
    ],
  });

  const faqStructuredData = content.faq.visible
    ? buildFAQStructuredData(content.faq.items)
    : null;

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`no-product-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <ProductHero content={content.hero} /> : null}

      <ProductLaunchBuyBox copy={productLaunchBuyBoxNo} />

      {content.whatIsNeuvago.visible ? (
        <ProductWhatIsNeuvago content={content.whatIsNeuvago} />
      ) : null}

      {content.whyItFeelsDifferent.visible ? (
        <ProductWhyItFeelsDifferent content={content.whyItFeelsDifferent} />
      ) : null}

      {content.howItFitsIntoLife.visible ? (
        <ProductHowItFitsIntoLife content={content.howItFitsIntoLife} />
      ) : null}

      {content.deviceAppTogether.visible ? (
        <ProductDeviceAppTogether content={content.deviceAppTogether} />
      ) : null}

      {content.howToUse.visible ? (
        <ProductHowToUse content={content.howToUse} />
      ) : null}

      {content.trustBridge.visible ? (
        <ProductTrustBridge content={content.trustBridge} />
      ) : null}

      {content.faq.visible ? <ProductFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <ProductFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
""")


def redirect_page(target: str) -> str:
    return f'''import {{ redirect }} from "next/navigation";

export default function RedirectPage() {{
  redirect("{target}");
}}
'''

write_file("src/app/no/product/page.tsx", redirect_page("/no/produkt"))

for file_path, target in [
    ("src/app/no/app/page.tsx", "/app"),
    ("src/app/no/slik-fungerer-det/page.tsx", "/how-it-works"),
    ("src/app/no/kunnskap/page.tsx", "/learn"),
    ("src/app/no/tilstander/page.tsx", "/conditions"),
    ("src/app/no/forskning/page.tsx", "/research"),
    ("src/app/no/om-oss/page.tsx", "/about"),
    ("src/app/no/support/page.tsx", "/support"),
    ("src/app/no/juridisk/page.tsx", "/legal"),
    ("src/app/no/juridisk/tiltenkt-bruk/page.tsx", "/legal/intended-use"),
    ("src/app/no/juridisk/medisinsk-ansvarsfraskrivelse/page.tsx", "/legal/medical-disclaimer"),
    ("src/app/no/juridisk/personvern/page.tsx", "/legal/privacy-policy"),
    ("src/app/no/juridisk/vilkar/page.tsx", "/legal/terms-of-service"),
    ("src/app/no/juridisk/regulatorisk/page.tsx", "/legal/regulatory"),
    ("src/app/no/juridisk/tillit-og-sikkerhet/page.tsx", "/legal/trust-safety"),
    ("src/app/no/juridisk/ce-samsvar/page.tsx", "/legal/ce-compliance"),
    ("src/app/no/juridisk/fda-status/page.tsx", "/legal/fda-status"),
]:
    write_file(file_path, redirect_page(target))

ensure_contains(
    "src/components/product/index.ts",
    'export { ProductLaunchBuyBox } from "./ProductLaunchBuyBox";',
)

replace_once(
    "src/app/sitemap.ts",
    '  { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: SEO_LAUNCH_REVIEW_DATE },\n  { path: "/product", changeFrequency: "weekly", priority: 0.92, lastModified: SEO_LAUNCH_REVIEW_DATE },',
    '  { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: SEO_LAUNCH_REVIEW_DATE },\n  { path: "/no", changeFrequency: "weekly", priority: 0.96, lastModified: SEO_LAUNCH_REVIEW_DATE },\n  { path: "/product", changeFrequency: "weekly", priority: 0.92, lastModified: SEO_LAUNCH_REVIEW_DATE },\n  { path: "/no/produkt", changeFrequency: "weekly", priority: 0.9, lastModified: SEO_LAUNCH_REVIEW_DATE },',
)

screenshot_script = ROOT / "scripts/capture-screenshots.mjs"
if screenshot_script.exists():
    source = screenshot_script.read_text(encoding="utf-8")
    route_start = source.find("const routes = [")
    viewports_start = source.find("const viewports = ")
    if route_start != -1 and viewports_start != -1:
        route_block = '''const routes = [
  { name: "home", path: "/" },
  { name: "product", path: "/product" },
  { name: "product-buy", path: "/product#buy", selector: "#buy", viewportOnly: true },
  { name: "no-home", path: "/no" },
  { name: "no-product", path: "/no/produkt" },
  { name: "no-product-buy", path: "/no/produkt#buy", selector: "#buy", viewportOnly: true },
  { name: "app", path: "/app" },
  { name: "how-it-works", path: "/how-it-works" },
];

'''
        screenshot_script.write_text(
            source[:route_start] + route_block + source[viewports_start:],
            encoding="utf-8",
        )
        print("Updated scripts/capture-screenshots.mjs")
    else:
        print("Could not update screenshot routes automatically")

print("Done. Added Norway locale foundation, /no, and /no/produkt.")
