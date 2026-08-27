import {
  getLocaleFromPathname,
  type Locale,
} from "@/i18n/locale-registry";

export { getLocaleFromPathname };
export type { Locale };

export const localizedRoutes = {
  home: { en: "/", no: "/no", de: "/de" },
  product: { en: "/product", no: "/no/produkt" },
  shop: { en: "/shop" },
  app: { en: "/app", no: "/no/app" },
  howItWorks: { en: "/how-it-works", no: "/no/slik-fungerer-det" },
  howToUse: { en: "/how-to-use" },
  learn: { en: "/learn", no: "/no/kunnskap" },
  glossary: { en: "/glossary", no: "/no/ordliste" },
  conditions: { en: "/conditions", no: "/no/tilstander" },
  research: { en: "/research", no: "/no/forskning" },
  about: { en: "/about", no: "/no/om-oss" },
  support: { en: "/support", no: "/no/support" },
  legal: { en: "/legal", no: "/no/juridisk" },
  intendedUse: {
    en: "/legal/intended-use",
    no: "/no/juridisk/tiltenkt-bruk",
  },
  medicalDisclaimer: {
    en: "/legal/medical-disclaimer",
    no: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
  },
  regulatory: {
    en: "/legal/regulatory",
    no: "/no/juridisk/regulatorisk",
  },
  ceCompliance: {
    en: "/legal/ce-compliance",
    no: "/no/juridisk/ce-samsvar",
  },
  fdaStatus: {
    en: "/legal/fda-status",
    no: "/no/juridisk/fda-status",
  },
  trustSafety: {
    en: "/legal/trust-safety",
    no: "/no/juridisk/tillit-og-sikkerhet",
  },
  privacyPolicy: {
    en: "/legal/privacy-policy",
    no: "/no/juridisk/personvern",
  },
  termsOfService: {
    en: "/legal/terms-of-service",
    no: "/no/juridisk/vilkar",
  },
  getStarted: { en: "/get-started" },
  login: { en: "/login" },
} as const satisfies Record<string, Partial<Record<Locale, string>>>;

export type LocalizedRouteId = keyof typeof localizedRoutes;

const routeIdByPath = new Map<string, LocalizedRouteId>();

for (const [routeId, variants] of Object.entries(localizedRoutes) as Array<
  [LocalizedRouteId, Partial<Record<Locale, string>>]
>) {
  for (const path of Object.values(variants)) {
    if (path) {
      routeIdByPath.set(path, routeId);
    }
  }
}

function splitInternalHref(href: string): { pathname: string; suffix: string } | null {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return null;
  }

  const suffixIndex = href.search(/[?#]/);

  if (suffixIndex === -1) {
    return { pathname: href, suffix: "" };
  }

  return {
    pathname: href.slice(0, suffixIndex) || "/",
    suffix: href.slice(suffixIndex),
  };
}

export function getLocalizedRoutePath(
  routeId: LocalizedRouteId,
  locale: Locale,
): string | undefined {
  const variants = localizedRoutes[routeId] as Partial<
    Record<Locale, string>
  >;

  return variants[locale];
}

export function getLocalizedRouteId(pathname: string): LocalizedRouteId | undefined {
  return routeIdByPath.get(pathname);
}

export function hasLocalizedRoute(
  routeId: LocalizedRouteId,
  locale: Locale,
): boolean {
  return Boolean(getLocalizedRoutePath(routeId, locale));
}

export function localizedHref(href: string, locale: Locale): string {
  const internalHref = splitInternalHref(href);

  if (!internalHref) {
    return href;
  }

  const routeId = getLocalizedRouteId(internalHref.pathname);

  if (!routeId) {
    return href;
  }

  const localizedPath = getLocalizedRoutePath(routeId, locale);

  if (!localizedPath) {
    return href;
  }

  return `${localizedPath}${internalHref.suffix}`;
}
