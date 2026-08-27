import { commerceContent } from "@/content/commerce";
import type { Locale } from "@/i18n/locale-registry";

export type ChromeLink = {
  href: string;
  label: string;
};

export type FooterNoticeSegment = string | ChromeLink;

export type SiteChromeConfig = {
  header: {
    homeHref: string;
    homeLabel: string;
    badge?: string;
    navLabel: string;
    navItems: readonly ChromeLink[];
    login?: ChromeLink;
    cta?: ChromeLink & { mobileLabel?: string };
  };
  footer: {
    homeHref: string;
    homeLabel: string;
    description: string;
    rights: string;
    groups: readonly {
      title: string;
      links: readonly ChromeLink[];
    }[];
    utilityLinks: readonly ChromeLink[];
    notice: readonly FooterNoticeSegment[];
  };
};

const siteChromeByLocale: Readonly<Record<Locale, SiteChromeConfig>> = {
  en: {
    header: {
      homeHref: "/",
      homeLabel: "Neuvago home",
      navLabel: "Primary navigation",
      navItems: [
        { href: "/product", label: "Product" },
        { href: "/app", label: "App" },
        { href: "/how-it-works", label: "How it works" },
        { href: "/learn", label: "Learn" },
        { href: "/conditions", label: "Conditions" },
        { href: "/research", label: "Research" },
        { href: "/about", label: "About" },
        { href: "/support", label: "Support" },
      ],
      login: { href: "/login", label: "Sign in" },
      cta: {
        href: commerceContent.shopHref,
        label: commerceContent.ctaLabel,
      },
    },
    footer: {
      homeHref: "/",
      homeLabel: "Neuvago home",
      description:
        "Calm, thoughtful support for stress, sleep, recovery, and nervous system awareness.",
      rights: "All rights reserved.",
      groups: [
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
      utilityLinks: [
        { href: "/legal/privacy-policy", label: "Privacy Policy" },
        { href: "/legal/terms-of-service", label: "Terms of Service" },
        { href: "/legal/medical-disclaimer", label: "Medical Disclaimer" },
      ],
      notice: [
        "Neuvago is designed for general wellness and educational support. Please review ",
        { href: "/legal/intended-use", label: "Intended Use" },
        " and ",
        { href: "/legal/medical-disclaimer", label: "Medical Disclaimer" },
        " for important product and communication context.",
      ],
    },
  },
  no: {
    header: {
      homeHref: "/no",
      homeLabel: "Neuvago forside",
      navLabel: "Primærnavigasjon",
      navItems: [
        { href: "/no/produkt", label: "Produkt" },
        { href: "/no/app", label: "App" },
        { href: "/no/slik-fungerer-det", label: "Slik fungerer det" },
        { href: "/no/kunnskap", label: "Kunnskap" },
        { href: "/no/tilstander", label: "Tilstander" },
        { href: "/no/forskning", label: "Forskning" },
        { href: "/no/om-oss", label: "Om oss" },
        { href: "/no/support", label: "Support" },
      ],
      login: { href: "/login", label: "Logg inn" },
      cta: {
        href: "/no/produkt#buy",
        label: "Se produkt",
        mobileLabel: "Produkt",
      },
    },
    footer: {
      homeHref: "/no",
      homeLabel: "Neuvago forside",
      description:
        "Rolig og gjennomtenkt støtte for stress, søvn, restitusjon og bevissthet rundt nervesystemet.",
      rights: "Alle rettigheter reservert.",
      groups: [
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
            {
              href: "/no/juridisk/tillit-og-sikkerhet",
              label: "Tillit og sikkerhet",
            },
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
            {
              href: "/no/juridisk/regulatorisk",
              label: "Regulatorisk informasjon",
            },
            { href: "/no/juridisk/personvern", label: "Personvern" },
            { href: "/no/juridisk/vilkar", label: "Vilkår" },
          ],
        },
      ],
      utilityLinks: [
        { href: "/no/juridisk/personvern", label: "Personvern" },
        { href: "/no/juridisk/vilkar", label: "Vilkår" },
        {
          href: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
          label: "Medisinsk ansvarsfraskrivelse",
        },
      ],
      notice: [
        "Neuvago er utviklet for generell velvære og pedagogisk støtte. Les ",
        { href: "/no/juridisk/tiltenkt-bruk", label: "Tiltenkt bruk" },
        " og ",
        {
          href: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
          label: "Medisinsk ansvarsfraskrivelse",
        },
        " for viktig produkt- og kommunikasjonskontekst.",
      ],
    },
  },
  de: {
    header: {
      homeHref: "/de",
      homeLabel: "Neuvago Deutschland",
      badge: "DE Vorschau",
      navLabel: "Primärnavigation",
      navItems: [],
      cta: {
        href: "/",
        label: "English website",
        mobileLabel: "English",
      },
    },
    footer: {
      homeHref: "/de",
      homeLabel: "Neuvago Deutschland",
      description:
        "Die deutsche Neuvago-Website wird derzeit sorgfältig vorbereitet.",
      rights: "Alle Rechte vorbehalten.",
      groups: [
        {
          title: "Deutschland",
          links: [{ href: "/de", label: "Deutsche Vorschau" }],
        },
        {
          title: "Global",
          links: [{ href: "/", label: "Website auf Englisch" }],
        },
      ],
      utilityLinks: [],
      notice: [
        "Diese Vorschau ist noch nicht für Verkauf oder Suchmaschinenindexierung freigegeben. Produkt-, Sicherheits-, Rechts- und Kaufinformationen werden vor der deutschen Veröffentlichung vollständig geprüft. Zur aktuellen globalen Website: ",
        { href: "/", label: "English website" },
        ".",
      ],
    },
  },
};

export function getSiteChromeConfig(locale: Locale): SiteChromeConfig {
  return siteChromeByLocale[locale];
}
