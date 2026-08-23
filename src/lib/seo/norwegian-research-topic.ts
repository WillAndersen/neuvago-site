import type { Metadata } from "next";

import {
  getEditorialEntity,
  type EditorialEntity,
} from "@/content/editorial/people";
import type { NorwegianResearchTopic } from "@/content/research/no/types";
import {
  buildBreadcrumbStructuredData,
  toAbsoluteUrl,
} from "@/lib/seo/structured-data";

const SITE_URL = "https://neuvago.com";
const SITE_NAME = "Neuvago";
const LANGUAGE = "nb-NO";

function compactObject(
  data: Record<string, unknown>,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(data).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );
}

function buildEditorialEntityStructuredData(
  entity: EditorialEntity,
) {
  return compactObject({
    "@type": entity.schemaType,
    name: entity.name,
    url: entity.profilePath
      ? toAbsoluteUrl(entity.profilePath)
      : undefined,
    sameAs: entity.sameAs?.length ? entity.sameAs : undefined,
  });
}

export function buildNorwegianResearchTopicMetadata(
  topic: NorwegianResearchTopic,
): Metadata {
  const languages = topic.englishEquivalent
    ? {
        "nb-NO": topic.path,
        "en-US": topic.englishEquivalent,
        "x-default": topic.englishEquivalent,
      }
    : {
        "nb-NO": topic.path,
      };

  return {
    title: topic.seoTitle,
    description: topic.description,
    alternates: {
      canonical: topic.path,
      languages,
    },
    robots: {
      index: topic.status === "published",
      follow: true,
    },
    openGraph: {
      title: topic.seoTitle,
      description: topic.description,
      url: topic.path,
      siteName: SITE_NAME,
      locale: "nb_NO",
      type: "article",
      publishedTime: `${topic.publishedAt}T12:00:00.000Z`,
      modifiedTime: `${topic.modifiedAt}T12:00:00.000Z`,
    },
    twitter: {
      card: "summary_large_image",
      title: topic.seoTitle,
      description: topic.description,
    },
  };
}

export function buildNorwegianResearchTopicStructuredData(
  topic: NorwegianResearchTopic,
): Array<Record<string, unknown>> {
  const url = toAbsoluteUrl(topic.path);
  const author = getEditorialEntity(topic.authorId);
  const reviewer = getEditorialEntity(topic.sourceReviewerId);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: topic.title,
    description: topic.description,
    url,
    inLanguage: LANGUAGE,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const articleData = compactObject({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: topic.title,
    name: topic.title,
    description: topic.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    inLanguage: LANGUAGE,
    isAccessibleForFree: true,
    articleSection: "Forskning",
    author: buildEditorialEntityStructuredData(author),
    editor: buildEditorialEntityStructuredData(reviewer),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: topic.publishedAt,
    dateModified: topic.modifiedAt,
    keywords: [
      topic.primaryKeyword,
      ...topic.secondaryKeywords,
    ].join(", "),
    citation: topic.sources.map((source) => source.url),
  });

  const breadcrumbs = buildBreadcrumbStructuredData([
    { name: "Forside", path: "/no" },
    { name: "Forskning", path: "/no/forskning" },
    { name: topic.title, path: topic.path },
  ]);

  return [webPage, breadcrumbs, articleData];
}

export function buildNorwegianResearchHubStructuredData() {
  const path = "/no/forskning";
  const url = toAbsoluteUrl(path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      name: "Forskning på VNS, tVNS, taVNS og autonom regulering",
      description:
        "Norske forskningsoversikter om vagusnervestimulering, tVNS, taVNS, sikkerhet, HRV og ansvarlig tolkning.",
      url,
      inLanguage: LANGUAGE,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    buildBreadcrumbStructuredData([
      { name: "Forside", path: "/no" },
      { name: "Forskning", path },
    ]),
  ];
}
