const SITE_URL = "https://neuvago.com";
const SITE_NAME = "Neuvago";
const SITE_LANGUAGE = "en-US";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

type WebPageInput = {
  title: string;
  description: string;
  path: string;
};

type ArticleInput = WebPageInput & {
  articleSection?: string;
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string | readonly string[];
  keywords?: readonly string[];
  schemaType?: "Article" | "ScholarlyArticle";
};

type ProductInput = {
  name: string;
  description: string;
  path: string;
  image?: string;
};

type PageWithBreadcrumbInput = WebPageInput & {
  breadcrumbs: readonly BreadcrumbItem[];
};

type AuthorityPageInput = ArticleInput & {
  breadcrumbs: readonly BreadcrumbItem[];
};

export function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path.startsWith("/") ? path : `/${path}`, SITE_URL).toString();
}

function buildPublisher(name = SITE_NAME) {
  return {
    "@type": "Organization",
    name,
    url: SITE_URL,
  };
}

function compactObject(data: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined && value !== null)
  );
}

export function buildOrganizationStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function buildWebSiteStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: SITE_LANGUAGE,
  };
}

export function buildWebPageStructuredData({ title, description, path }: WebPageInput): Record<string, unknown> {
  const url = toAbsoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    inLanguage: SITE_LANGUAGE,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: buildPublisher(),
  };
}

export function buildBreadcrumbStructuredData(items: readonly BreadcrumbItem[]): Record<string, unknown> {
  const itemListElement = items
    .filter((item) => item.name.trim().length > 0 && item.path.trim().length > 0)
    .map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function buildArticleStructuredData({
  title,
  description,
  path,
  articleSection,
  authorName = "Neuvago Editorial Team",
  datePublished,
  dateModified,
  image,
  keywords,
  schemaType = "Article",
}: ArticleInput): Record<string, unknown> {
  const url = toAbsoluteUrl(path);
  const imageValues = image
    ? typeof image === "string"
      ? [toAbsoluteUrl(image)]
      : image.map(toAbsoluteUrl)
    : undefined;

  return compactObject({
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${url}#article`,
    headline: title,
    name: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    inLanguage: SITE_LANGUAGE,
    isAccessibleForFree: true,
    articleSection,
    author: buildPublisher(authorName),
    publisher: buildPublisher(),
    datePublished,
    dateModified,
    image: imageValues,
    keywords: keywords && keywords.length > 0 ? keywords.join(", ") : undefined,
  });
}

export function buildPageWithBreadcrumbStructuredData({
  title,
  description,
  path,
  breadcrumbs,
}: PageWithBreadcrumbInput): Array<Record<string, unknown>> {
  return [
    buildWebPageStructuredData({ title, description, path }),
    buildBreadcrumbStructuredData(breadcrumbs),
  ];
}

export function buildAuthorityPageStructuredData({
  title,
  description,
  path,
  breadcrumbs,
  articleSection,
  authorName,
  datePublished,
  dateModified,
  image,
  keywords,
  schemaType,
}: AuthorityPageInput): Array<Record<string, unknown>> {
  return [
    buildWebPageStructuredData({ title, description, path }),
    buildBreadcrumbStructuredData(breadcrumbs),
    buildArticleStructuredData({
      title,
      description,
      path,
      articleSection,
      authorName,
      datePublished,
      dateModified,
      image,
      keywords,
      schemaType,
    }),
  ];
}

export function buildFAQStructuredData(items: readonly FaqItem[]): Record<string, unknown> | null {
  const mainEntity = items
    .filter((item) => item.question.trim().length > 0 && item.answer.trim().length > 0)
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));

  if (mainEntity.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export function buildProductStructuredData({ name, description, path, image }: ProductInput): Record<string, unknown> {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: toAbsoluteUrl(path),
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: "Wellness Device",
  };

  if (image) {
    data.image = [toAbsoluteUrl(image)];
  }

  return data;
}
