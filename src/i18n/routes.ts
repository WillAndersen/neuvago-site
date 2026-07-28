
export const locales = ["en", "no"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = "en" satisfies Locale;

export const localeConfig = {
  en: {
    label: "International",
    pathPrefix: "",
    lang: "en-US",
    ogLocale: "en_US",
    market: "INTL",
    currency: "USD",
  },
  no: {
    label: "Norge",
    pathPrefix: "/no",
    lang: "nb-NO",
    ogLocale: "nb_NO",
    market: "NO",
    currency: "NOK",
  },
} as const;

export const noPathMap: Record<string, string> = {
  "/": "/no",
  "/product": "/no/produkt",
  "/app": "/no/app",
  "/how-it-works": "/no/slik-fungerer-det",
  "/learn": "/no/kunnskap",
  "/conditions": "/no/tilstander",
  "/research": "/no/forskning",
  "/about": "/no/om-oss",
  "/support": "/no/support",
  "/legal": "/no/juridisk",
  "/legal/intended-use": "/no/juridisk/tiltenkt-bruk",
  "/legal/medical-disclaimer": "/no/juridisk/medisinsk-ansvarsfraskrivelse",
  "/legal/privacy-policy": "/no/juridisk/personvern",
  "/legal/terms-of-service": "/no/juridisk/vilkar",
  "/legal/regulatory": "/no/juridisk/regulatorisk",
  "/legal/trust-safety": "/no/juridisk/tillit-og-sikkerhet",
  "/legal/ce-compliance": "/no/juridisk/ce-samsvar",
  "/legal/fda-status": "/no/juridisk/fda-status",
};

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (pathname === "/no" || pathname?.startsWith("/no/")) {
    return "no";
  }

  return defaultLocale;
}

function splitHref(href: string) {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return { path: href, hash: "" };
  }

  return {
    path: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex),
  };
}

export function localizedHref(href: string, locale: Locale): string {
  if (
    locale === defaultLocale ||
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const { path, hash } = splitHref(href);

  if (locale === "no") {
    return `${noPathMap[path] ?? path}${hash}`;
  }

  return href;
}
