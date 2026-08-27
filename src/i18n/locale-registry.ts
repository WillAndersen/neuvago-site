export type Locale = "en" | "no" | "de";

export type LocalePublicationStatus = "published" | "draft";

export type LocaleDefinition = {
  key: Locale;
  languageTag: "en-US" | "nb-NO" | "de-DE";
  htmlLang: "en" | "nb" | "de";
  openGraphLocale: "en_US" | "nb_NO" | "de_DE";
  market: "GLOBAL" | "NO" | "DE";
  pathPrefix: "" | "/no" | "/de";
  status: LocalePublicationStatus;
  indexable: boolean;
  sitemap: boolean;
  languageSwitcher: boolean;
};

export const localeOrder: readonly Locale[] = ["en", "no", "de"];

export const localeRegistry: Readonly<Record<Locale, LocaleDefinition>> = {
  en: {
    key: "en",
    languageTag: "en-US",
    htmlLang: "en",
    openGraphLocale: "en_US",
    market: "GLOBAL",
    pathPrefix: "",
    status: "published",
    indexable: true,
    sitemap: true,
    languageSwitcher: true,
  },
  no: {
    key: "no",
    languageTag: "nb-NO",
    htmlLang: "nb",
    openGraphLocale: "nb_NO",
    market: "NO",
    pathPrefix: "/no",
    status: "published",
    indexable: true,
    sitemap: true,
    languageSwitcher: true,
  },
  de: {
    key: "de",
    languageTag: "de-DE",
    htmlLang: "de",
    openGraphLocale: "de_DE",
    market: "DE",
    pathPrefix: "/de",
    status: "draft",
    indexable: false,
    sitemap: false,
    languageSwitcher: false,
  },
};

export function getLocaleDefinition(locale: Locale): LocaleDefinition {
  return localeRegistry[locale];
}

export function getLocaleFromPathname(pathname: string): Locale {
  const cleanPathname = (pathname.split(/[?#]/, 1)[0] || "/").replace(/\/{2,}/g, "/");

  if (cleanPathname === "/de" || cleanPathname.startsWith("/de/")) {
    return "de";
  }

  if (cleanPathname === "/no" || cleanPathname.startsWith("/no/")) {
    return "no";
  }

  return "en";
}

export function isLocalePublished(locale: Locale): boolean {
  return localeRegistry[locale].status === "published";
}

export function isLocaleIndexable(locale: Locale): boolean {
  return localeRegistry[locale].indexable;
}
