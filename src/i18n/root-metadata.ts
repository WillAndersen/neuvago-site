import type { Metadata } from "next";

import {
  getLocaleDefinition,
  type Locale,
} from "@/i18n/locale-registry";

const SITE_URL = "https://neuvago.com";

const defaultImageByLocale: Record<
  Locale,
  { url: string; width: number; height: number; alt: string }
> = {
  en: {
    url: "/images/neuvago/launch/no-home-hero-desktop.webp",
    width: 1600,
    height: 900,
    alt: "Neuvago device and guided app",
  },
  no: {
    url: "/images/neuvago/launch/no-home-hero-desktop.webp",
    width: 1600,
    height: 900,
    alt: "Neuvago-enhet og veiledet app",
  },
  de: {
    url: "/images/neuvago/launch/no-home-hero-desktop.webp",
    width: 1600,
    height: 900,
    alt: "Neuvago-Gerät und begleitende App",
  },
};

const rootCopyByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    keywords?: readonly string[];
  }
> = {
  en: {
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "Neuvago combines a thoughtfully designed device, guided app experiences, and research-informed learning to support stress, sleep, recovery, and nervous system regulation.",
    openGraphTitle: "Neuvago | Calm support for stress, sleep, and recovery",
    openGraphDescription:
      "A calmer way to support stress, sleep, recovery, and nervous system regulation.",
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
  },
  no: {
    title: "Neuvago Norge | Ikke-invasiv VNS-enhet og app",
    description:
      "Neuvago kombinerer en gjennomtenkt enhet, veiledede appopplevelser og forskningsinformert innhold for roligere rutiner, restitusjon og daglig regulering.",
    openGraphTitle: "Neuvago Norge | Ikke-invasiv VNS-enhet og app",
    openGraphDescription:
      "En roligere måte å støtte daglige rutiner, restitusjon og regulering på.",
  },
  de: {
    title: "Neuvago Deutschland | Deutsche Website in Vorbereitung",
    description:
      "Die deutsche Neuvago-Website wird vorbereitet. Inhalte, Sicherheitsinformationen, rechtliche Angaben und Kaufinformationen werden vor der Veröffentlichung geprüft.",
    openGraphTitle: "Neuvago Deutschland | Deutsche Website in Vorbereitung",
    openGraphDescription:
      "Die deutsche Neuvago-Website wird derzeit sorgfältig vorbereitet.",
  },
};

export function buildRootMetadata(locale: Locale): Metadata {
  const definition = getLocaleDefinition(locale);
  const copy = rootCopyByLocale[locale];
  const image = defaultImageByLocale[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: copy.title,
      template: "%s",
    },
    description: copy.description,
    ...(copy.keywords ? { keywords: [...copy.keywords] } : {}),
    robots: definition.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      title: copy.openGraphTitle,
      description: copy.openGraphDescription,
      url: definition.pathPrefix || "/",
      siteName: "Neuvago",
      locale: definition.openGraphLocale,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.openGraphTitle,
      description: copy.openGraphDescription,
      images: [image.url],
    },
    other: {
      "content-language": definition.languageTag,
      "x-neuvago-locale-status": definition.status,
    },
  };
}
