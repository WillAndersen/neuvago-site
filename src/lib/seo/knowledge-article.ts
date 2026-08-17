import type { Metadata } from "next";

import {
  getEditorialEntity,
  type EditorialEntity,
} from "@/content/editorial/people";
import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";
import {
  buildBreadcrumbStructuredData,
  toAbsoluteUrl,
} from "@/lib/seo/structured-data";

const SITE_URL = "https://neuvago.com";
const SITE_NAME = "Neuvago";
const LANGUAGE = "nb-NO";

function compactObject(data: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined && value !== null)
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

export function buildNorwegianKnowledgeMetadata(
  article: NorwegianKnowledgeArticle
): Metadata {
  const languages = article.englishEquivalent
    ? {
        "nb-NO": article.path,
        "en-US": article.englishEquivalent,
        "x-default": article.englishEquivalent,
      }
    : {
        "nb-NO": article.path,
      };

  return {
    title: article.seoTitle,
    description: article.description,
    alternates: {
      canonical: article.path,
      languages,
    },
    robots: {
      index: article.status === "published",
      follow: true,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.description,
      url: article.path,
      siteName: SITE_NAME,
      locale: "nb_NO",
      type: "article",
      publishedTime: `${article.publishedAt}T12:00:00.000Z`,
      modifiedTime: `${article.modifiedAt}T12:00:00.000Z`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.description,
    },
  };
}

export function buildNorwegianKnowledgeArticleStructuredData(
  article: NorwegianKnowledgeArticle
): Array<Record<string, unknown>> {
  const url = toAbsoluteUrl(article.path);
  const author = getEditorialEntity(article.authorId);
  const reviewer = getEditorialEntity(article.sourceReviewerId);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: article.title,
    description: article.description,
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
    headline: article.title,
    name: article.title,
    description: article.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    inLanguage: LANGUAGE,
    isAccessibleForFree: true,
    articleSection: "Kunnskap",
    author: buildEditorialEntityStructuredData(author),
    editor: buildEditorialEntityStructuredData(reviewer),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords].join(", "),
    citation: article.sources.map((source) => source.url),
  });

  const breadcrumbs = buildBreadcrumbStructuredData([
    { name: "Forside", path: "/no" },
    { name: "Kunnskap", path: "/no/kunnskap" },
    { name: article.title, path: article.path },
  ]);

  return [webPage, breadcrumbs, articleData];
}

export function buildNorwegianKnowledgeHubStructuredData() {
  const path = "/no/kunnskap";
  const url = toAbsoluteUrl(path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      name: "Kunnskap om vagusnerven, regulering og VNS",
      description:
        "Norske, kildebaserte forklaringer om vagusnerven, VNS, tVNS, taVNS og nervesystemets regulering.",
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
      { name: "Kunnskap", path },
    ]),
  ];
}
