import type { Metadata } from "next";

import {
  getEditorialEntity,
  type EditorialEntity,
} from "@/content/editorial/people";
import type { NorwegianConditionPage } from "@/content/conditions/no/types";
import {
  buildBreadcrumbStructuredData,
  toAbsoluteUrl,
} from "@/lib/seo/structured-data";

const SITE_URL = "https://neuvago.com";
const SITE_NAME = "Neuvago";
const LANGUAGE = "nb-NO";

function compactObject(data: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(data).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );
}

function buildEditorialEntityStructuredData(entity: EditorialEntity) {
  return compactObject({
    "@type": entity.schemaType,
    name: entity.name,
    url: entity.profilePath ? toAbsoluteUrl(entity.profilePath) : undefined,
    sameAs: entity.sameAs?.length ? entity.sameAs : undefined,
  });
}

export function buildNorwegianConditionMetadata(
  page: NorwegianConditionPage,
): Metadata {
  const languages = page.englishEquivalent
    ? {
        "nb-NO": page.path,
        "en-US": page.englishEquivalent,
        "x-default": page.englishEquivalent,
      }
    : {
        "nb-NO": page.path,
      };

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical: page.path,
      languages,
    },
    robots: {
      index: page.status === "published",
      follow: true,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: page.path,
      siteName: SITE_NAME,
      locale: "nb_NO",
      type: "article",
      publishedTime: `${page.publishedAt}T12:00:00.000Z`,
      modifiedTime: `${page.modifiedAt}T12:00:00.000Z`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
    },
  };
}

export function buildNorwegianConditionStructuredData(
  page: NorwegianConditionPage,
): Array<Record<string, unknown>> {
  const url = toAbsoluteUrl(page.path);
  const author = getEditorialEntity(page.authorId);
  const reviewer = getEditorialEntity(page.sourceReviewerId);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: page.title,
    description: page.description,
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
    headline: page.title,
    name: page.title,
    description: page.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    inLanguage: LANGUAGE,
    isAccessibleForFree: true,
    articleSection: "Tilstander",
    author: buildEditorialEntityStructuredData(author),
    editor: buildEditorialEntityStructuredData(reviewer),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: page.publishedAt,
    dateModified: page.modifiedAt,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
    citation: page.sources.map((source) => source.url),
  });

  const breadcrumbs = buildBreadcrumbStructuredData([
    { name: "Forside", path: "/no" },
    { name: "Tilstander", path: "/no/tilstander" },
    { name: page.title, path: page.path },
  ]);

  return [webPage, breadcrumbs, articleData];
}
