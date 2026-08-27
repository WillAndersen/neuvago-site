import type { Metadata } from "next";

import {
  getLocaleDefinition,
  type Locale,
} from "@/i18n/locale-registry";
import {
  getPublishedAlternateOpenGraphLocales,
  getPublishedLanguageAlternates,
  isPageVariantIndexable,
  requireRoutablePageVariant,
} from "@/i18n/page-registry";

export type LocalizedMetadataImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type BuildLocalizedPageMetadataInput = {
  pageId: string;
  locale: Locale;
  title: string;
  description: string;
  keywords?: Metadata["keywords"];
  image?: LocalizedMetadataImage;
};

export function buildLocalizedPageMetadata({
  pageId,
  locale,
  title,
  description,
  keywords,
  image,
}: BuildLocalizedPageMetadataInput): Metadata {
  const definition = getLocaleDefinition(locale);
  const variant = requireRoutablePageVariant(pageId, locale);
  const indexable = isPageVariantIndexable(pageId, locale);
  const languages = indexable
    ? getPublishedLanguageAlternates(pageId)
    : undefined;
  const alternateLocale = indexable
    ? getPublishedAlternateOpenGraphLocales(pageId, locale)
    : [];

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: variant.path,
      ...(languages && Object.keys(languages).length > 0 ? { languages } : {}),
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      title,
      description,
      url: variant.path,
      siteName: "Neuvago",
      locale: definition.openGraphLocale,
      ...(alternateLocale.length > 0
        ? { alternateLocale: [...alternateLocale] }
        : {}),
      type: "website",
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
    other: {
      "content-language": definition.languageTag,
      "x-neuvago-page-id": pageId,
      "x-neuvago-translation-status": variant.status,
    },
  };
}
