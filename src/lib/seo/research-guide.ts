import type { Metadata } from "next";

import type { ResearchGuideContent } from "@/content/research-guides/types";
import { toAbsoluteUrl } from "@/lib/seo/structured-data";

export function buildResearchGuideMetadata(
  guide: ResearchGuideContent,
): Metadata {
  const languageAlternates = {
    "en-US": guide.locale === "en" ? guide.path : guide.counterpartPath,
    "nb-NO": guide.locale === "no" ? guide.path : guide.counterpartPath,
    "x-default": guide.defaultPath,
  };

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: {
      canonical: guide.path,
      languages: languageAlternates,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      url: guide.path,
      siteName: "Neuvago",
      locale: guide.openGraphLocale,
      type: "article",
      publishedTime: `${guide.publishedAt}T12:00:00.000Z`,
      modifiedTime: `${guide.modifiedAt}T12:00:00.000Z`,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seoTitle,
      description: guide.description,
    },
  };
}

function buildBreadcrumbs(guide: ResearchGuideContent) {
  const homeName = guide.locale === "no" ? "Forside" : "Home";
  const hubName = guide.locale === "no" ? "Forskning" : "Research";
  const homePath = guide.locale === "no" ? "/no" : "/";
  const hubPath = guide.locale === "no" ? "/no/forskning" : "/research";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeName,
        item: toAbsoluteUrl(homePath),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: hubName,
        item: toAbsoluteUrl(hubPath),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: toAbsoluteUrl(guide.path),
      },
    ],
  };
}

function buildWebPage(guide: ResearchGuideContent) {
  const url = toAbsoluteUrl(guide.path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: guide.seoTitle,
    description: guide.description,
    url,
    inLanguage: guide.languageTag,
    isPartOf: {
      "@type": "WebSite",
      name: "Neuvago",
      url: "https://neuvago.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Neuvago",
      url: "https://neuvago.com",
    },
  };
}

function buildArticle(guide: ResearchGuideContent) {
  const url = toAbsoluteUrl(guide.path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    name: guide.title,
    description: guide.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    inLanguage: guide.languageTag,
    isAccessibleForFree: true,
    articleSection:
      guide.locale === "no" ? "Forskningsforståelse" : "Research literacy",
    author: {
      "@type": "Person",
      name: guide.authorName,
    },
    reviewedBy: {
      "@type": "Organization",
      name: guide.reviewerName,
    },
    publisher: {
      "@type": "Organization",
      name: "Neuvago",
      url: "https://neuvago.com",
    },
    datePublished: guide.publishedAt,
    dateModified: guide.modifiedAt,
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords].join(", "),
    citation: guide.sources.map((source) => source.url),
  };
}

function buildFaq(guide: ResearchGuideContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function buildFrameworkList(guide: ResearchGuideContent) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: guide.framework.title,
    numberOfItems: guide.framework.items.length,
    itemListElement: guide.framework.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: `${item.question} ${item.whyItMatters}`,
    })),
  };
}

export function buildResearchGuideStructuredData(
  guide: ResearchGuideContent,
): Array<Record<string, unknown>> {
  return [
    buildWebPage(guide),
    buildBreadcrumbs(guide),
    buildArticle(guide),
    buildFaq(guide),
    buildFrameworkList(guide),
  ];
}
