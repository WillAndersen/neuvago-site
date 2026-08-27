import { generatedDePageRegistry } from "@/i18n/page-registry.generated";
import {
  getLocaleDefinition,
  type Locale,
} from "@/i18n/locale-registry";

export type PagePriority = "P0" | "P1";
export type PageVariantStatus = "published" | "draft" | "planned";
export type PageVariantRole = "source" | "reference" | "target";

export type PageRegistryVariant = {
  readonly path: string;
  readonly status: PageVariantStatus;
  readonly routeAvailable: boolean;
  readonly role: PageVariantRole;
  readonly pathStatus?: string;
};

export type PageRegistryEntry = {
  readonly pageId: string;
  readonly priority: PagePriority;
  readonly launchBlocking: boolean;
  readonly category: string;
  readonly title: string;
  readonly sourceLocale: Locale;
  readonly variants: Readonly<Partial<Record<Locale, PageRegistryVariant>>>;
};

export const pageRegistry: readonly PageRegistryEntry[] =
  generatedDePageRegistry;

const pageById = new Map(pageRegistry.map((page) => [page.pageId, page]));

export function getPageRegistryEntry(
  pageId: string,
): PageRegistryEntry | undefined {
  return pageById.get(pageId);
}

export function getPageVariant(
  pageId: string,
  locale: Locale,
): PageRegistryVariant | undefined {
  return getPageRegistryEntry(pageId)?.variants[locale];
}

export function requireRoutablePageVariant(
  pageId: string,
  locale: Locale,
): PageRegistryVariant {
  const variant = getPageVariant(pageId, locale);

  if (!variant || !variant.routeAvailable) {
    throw new Error(`No routable ${locale} variant registered for ${pageId}`);
  }

  return variant;
}

export function isPageVariantIndexable(
  pageId: string,
  locale: Locale,
): boolean {
  const variant = getPageVariant(pageId, locale);
  const localeDefinition = getLocaleDefinition(locale);

  return Boolean(
    variant?.routeAvailable &&
      variant.status === "published" &&
      localeDefinition.status === "published" &&
      localeDefinition.indexable,
  );
}

function isPublishedRoutableVariant(
  locale: Locale,
  variant: PageRegistryVariant | undefined,
): variant is PageRegistryVariant {
  const localeDefinition = getLocaleDefinition(locale);

  return Boolean(
    variant?.routeAvailable &&
      variant.status === "published" &&
      localeDefinition.status === "published" &&
      localeDefinition.indexable,
  );
}

export function getPublishedLanguageAlternates(
  pageId: string,
): Readonly<Record<string, string>> {
  const page = getPageRegistryEntry(pageId);

  if (!page) {
    return {};
  }

  const languages: Record<string, string> = {};
  let xDefaultPath: string | undefined;

  for (const locale of ["en", "no", "de"] as const) {
    const variant = page.variants[locale];

    if (!isPublishedRoutableVariant(locale, variant)) {
      continue;
    }

    const definition = getLocaleDefinition(locale);
    languages[definition.languageTag] = variant.path;

    if (locale === "en") {
      xDefaultPath = variant.path;
    } else if (!xDefaultPath && locale === page.sourceLocale) {
      xDefaultPath = variant.path;
    } else if (!xDefaultPath) {
      xDefaultPath = variant.path;
    }
  }

  if (xDefaultPath) {
    languages["x-default"] = xDefaultPath;
  }

  return languages;
}

export function getPublishedAlternateOpenGraphLocales(
  pageId: string,
  currentLocale: Locale,
): readonly string[] {
  const page = getPageRegistryEntry(pageId);

  if (!page) {
    return [];
  }

  const alternateLocales: string[] = [];

  for (const locale of ["en", "no", "de"] as const) {
    if (locale === currentLocale) {
      continue;
    }

    const variant = page.variants[locale];

    if (isPublishedRoutableVariant(locale, variant)) {
      alternateLocales.push(getLocaleDefinition(locale).openGraphLocale);
    }
  }

  return alternateLocales;
}

export function findPageByVariantPath(
  pathname: string,
): { page: PageRegistryEntry; locale: Locale; variant: PageRegistryVariant } | undefined {
  for (const page of pageRegistry) {
    for (const locale of ["en", "no", "de"] as const) {
      const variant = page.variants[locale];

      if (variant?.path === pathname) {
        return { page, locale, variant };
      }
    }
  }

  return undefined;
}
