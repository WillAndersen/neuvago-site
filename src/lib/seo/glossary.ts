import type { Metadata } from "next";

import type {
  GlossaryLocale,
  GlossaryTerm,
  GlossaryTermPair,
} from "@/content/glossary/types";

const SITE_URL = "https://neuvago.com";
const SITE_NAME = "Neuvago";

const hubConfig = {
  en: {
    path: "/glossary",
    pairPath: "/no/ordliste",
    language: "en-US",
    locale: "en_US",
    title: "Glossary | VNS, Nervous System and Research Terms | Neuvago",
    description:
      "Clear definitions of VNS, stimulation protocols, safety, study design, evidence certainty, ear anatomy, autonomic regulation, HRV, and related terms.",
    name: "Neuvago glossary of VNS and nervous system terms",
    breadcrumbHome: "Home",
    breadcrumbHub: "Glossary",
  },
  no: {
    path: "/no/ordliste",
    pairPath: "/glossary",
    language: "nb-NO",
    locale: "nb_NO",
    title: "Ordliste | VNS, nervesystem og forskningsbegreper | Neuvago",
    description:
      "Tydelige definisjoner av VNS, stimuleringsprotokoller, sikkerhet, studiedesign, evidenssikkerhet, øreanatomi, autonom regulering, HRV og relaterte begreper.",
    name: "Neuvago-ordliste for VNS og nervesystemet",
    breadcrumbHome: "Forside",
    breadcrumbHub: "Ordliste",
  },
} as const;

function absolute(path: string) {
  return new URL(path, SITE_URL).toString();
}

function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
  };
}

function breadcrumbs(
  locale: GlossaryLocale,
  term?: GlossaryTerm,
): Record<string, unknown> {
  const config = hubConfig[locale];
  const items: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: config.breadcrumbHome,
      item: absolute(locale === "en" ? "/" : "/no"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: config.breadcrumbHub,
      item: absolute(config.path),
    },
  ];

  if (term) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: term.term,
      item: absolute(term.path),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function buildGlossaryHubMetadata(locale: GlossaryLocale): Metadata {
  const config = hubConfig[locale];
  const isEnglish = locale === "en";

  return {
    title: config.title,
    description: config.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: config.path,
      languages: {
        "en-US": isEnglish ? config.path : config.pairPath,
        "nb-NO": isEnglish ? config.pairPath : config.path,
        "x-default": "/glossary",
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.path,
      siteName: SITE_NAME,
      locale: config.locale,
      alternateLocale: [isEnglish ? "nb_NO" : "en_US"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
    },
  };
}

export function buildGlossaryTermMetadata(
  term: GlossaryTerm,
  pair: GlossaryTermPair,
): Metadata {
  const language = term.locale === "en" ? "en-US" : "nb-NO";
  const locale = term.locale === "en" ? "en_US" : "nb_NO";

  return {
    title: term.seoTitle,
    description: term.description,
    robots: { index: true, follow: true },
    keywords: [term.term, ...(term.termCode ? [term.termCode] : []), ...term.aliases],
    alternates: {
      canonical: term.path,
      languages: {
        "en-US": pair.english.path,
        "nb-NO": pair.norwegian.path,
        "x-default": pair.english.path,
      },
    },
    openGraph: {
      title: term.seoTitle,
      description: term.description,
      url: term.path,
      siteName: SITE_NAME,
      locale,
      alternateLocale: [term.locale === "en" ? "nb_NO" : "en_US"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: term.seoTitle,
      description: term.description,
    },
    other: {
      "content-language": language,
    },
  };
}

export function buildGlossaryHubStructuredData(
  locale: GlossaryLocale,
  terms: readonly GlossaryTerm[],
): readonly Record<string, unknown>[] {
  const config = hubConfig[locale];
  const url = absolute(config.path);
  const termSetId = `${url}#defined-term-set`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      name: config.name,
      description: config.description,
      url,
      inLanguage: config.language,
      datePublished: "2026-08-25",
      dateModified: "2026-08-25",
      mainEntity: { "@id": termSetId },
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "@id": termSetId,
      name: config.name,
      description: config.description,
      url,
      inLanguage: config.language,
      hasDefinedTerm: terms.map((term) => ({
        "@type": "DefinedTerm",
        "@id": `${absolute(term.path)}#defined-term`,
        name: term.term,
        url: absolute(term.path),
      })),
    },
    breadcrumbs(locale),
    organization(),
  ];
}

export function buildGlossaryTermStructuredData(
  term: GlossaryTerm,
): readonly Record<string, unknown>[] {
  const config = hubConfig[term.locale];
  const url = absolute(term.path);
  const hubUrl = absolute(config.path);
  const termId = `${url}#defined-term`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: term.seoTitle,
      description: term.description,
      url,
      inLanguage: config.language,
      datePublished: term.publishedAt,
      dateModified: term.modifiedAt,
      mainEntity: { "@id": termId },
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": termId,
      name: term.term,
      description: term.shortDefinition,
      url,
      inLanguage: config.language,
      ...(term.termCode ? { termCode: term.termCode } : {}),
      ...(term.aliases.length > 0 ? { alternateName: term.aliases } : {}),
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        "@id": `${hubUrl}#defined-term-set`,
        name: config.name,
        url: hubUrl,
      },
    },
    breadcrumbs(term.locale, term),
    organization(),
  ];
}
