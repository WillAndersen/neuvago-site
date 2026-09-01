"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type ConversionTarget =
  | "how_it_works_click"
  | "product_click"
  | "buyer_guide_click"
  | "buyer_checklist_download"
  | "launch_access_click"
  | "shop_click"
  | "launch_signup_submit";

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
};

type ConversionContext = {
  sourcePath: string;
  destinationPath: string;
  linkText: string;
  sourceSection: string;
};

const BUYER_GUIDE_PATHS = new Set([
  "/learn/how-to-choose-a-vagus-nerve-stimulation-device",
  "/no/kunnskap/hvordan-velge-vagusnervestimulator",
]);

const BUYER_CHECKLIST_PATHS = new Set([
  "/downloads/neuvago-vns-device-buyer-checklist-en.pdf",
  "/downloads/neuvago-kjopersjekkliste-vns-enhet-no.pdf",
]);

const EXCLUDED_SOURCE_PREFIXES = [
  "/account",
  "/admin",
  "/continue",
  "/login",
  "/onboarding",
  "/open-app",
  "/signup",
  "/verify-email",
  "/no/tilstander/hverdagsuro",
];

function normalizePath(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

function cleanValue(value: string, maxLength = 100) {
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function slugValue(value: string) {
  return cleanValue(value, 120)
    .toLocaleLowerCase("en-US")
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function isTrackableSourcePath(pathname: string) {
  return !EXCLUDED_SOURCE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function localeFromPath(pathname: string) {
  if (pathname === "/no" || pathname.startsWith("/no/")) {
    return "nb-NO";
  }

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    return "de-DE";
  }

  return "en-US";
}

function pageGroupFromPath(pathname: string) {
  if (pathname === "/" || pathname === "/no" || pathname === "/de") {
    return "home";
  }

  if (pathname === "/shop") {
    return "shop";
  }

  if (pathname.includes("/how-it-works") || pathname.includes("/slik-fungerer-det")) {
    return "how_it_works";
  }

  if (pathname.includes("/product") || pathname.includes("/produkt")) {
    return "product";
  }

  if (BUYER_GUIDE_PATHS.has(pathname)) {
    return "buyer_guide";
  }

  if (pathname.startsWith("/learn") || pathname.startsWith("/no/kunnskap")) {
    return "learn";
  }

  if (pathname.startsWith("/research") || pathname.startsWith("/no/forskning")) {
    return "research";
  }

  if (pathname.startsWith("/conditions") || pathname.startsWith("/no/tilstander")) {
    return "conditions";
  }

  return "other";
}

function sourceSectionForElement(element: Element) {
  const explicit = element.closest<HTMLElement>("[data-conversion-placement]")
    ?.dataset.conversionPlacement;

  if (explicit) {
    return cleanValue(explicit);
  }

  if (element.closest("header")) {
    return "header";
  }

  if (element.closest("footer")) {
    return "footer";
  }

  const section = element.closest<HTMLElement>("section");

  if (section?.id) {
    return slugValue(section.id) || "main";
  }

  const heading = section?.querySelector("h1, h2, h3")?.textContent;

  return heading ? slugValue(heading) || "main" : "main";
}

function classifyLink(url: URL, linkText: string): ConversionTarget | null {
  if (url.origin !== window.location.origin) {
    return null;
  }

  const pathname = normalizePath(url.pathname);

  if (
    pathname === "/how-it-works" ||
    pathname === "/no/slik-fungerer-det"
  ) {
    return "how_it_works_click";
  }

  if (
    pathname === "/product" ||
    pathname === "/no/produkt" ||
    pathname === "/no/product"
  ) {
    return "product_click";
  }

  if (BUYER_GUIDE_PATHS.has(pathname)) {
    return "buyer_guide_click";
  }

  if (BUYER_CHECKLIST_PATHS.has(pathname)) {
    return "buyer_checklist_download";
  }

  if (pathname === "/shop") {
    return /launch|lansering|venteliste/i.test(linkText)
      ? "launch_access_click"
      : "shop_click";
  }

  return null;
}

function emitConversion(
  target: ConversionTarget,
  context: ConversionContext,
) {
  const eventName = `neuvago_${target}`;
  const sourcePath = normalizePath(context.sourcePath);
  const analytics = window as AnalyticsWindow;
  const parameters = {
    conversion_target: target,
    source_path: sourcePath,
    destination_path: cleanValue(context.destinationPath, 180),
    source_locale: localeFromPath(sourcePath),
    source_page_group: pageGroupFromPath(sourcePath),
    source_section: cleanValue(context.sourceSection),
    link_text: cleanValue(context.linkText),
  };

  if (typeof analytics.gtag === "function") {
    analytics.gtag("event", eventName, parameters);
  } else {
    analytics.dataLayer = analytics.dataLayer ?? [];
    analytics.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }

  window.dispatchEvent(
    new CustomEvent("neuvago:conversion", {
      detail: {
        eventName,
        ...parameters,
      },
    }),
  );
}

export function OrganicConversionTracker() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const sourcePath = normalizePath(pathname);

    if (!isTrackableSourcePath(sourcePath)) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor) {
        return;
      }

      const linkText = cleanValue(anchor.textContent ?? "");
      const url = new URL(anchor.href, window.location.href);
      const target = classifyLink(url, linkText);

      if (!target) {
        return;
      }

      emitConversion(target, {
        sourcePath,
        destinationPath: `${normalizePath(url.pathname)}${url.hash}`,
        linkText,
        sourceSection: sourceSectionForElement(anchor),
      });
    };

    const handleSubmit = (event: SubmitEvent) => {
      if (!(event.target instanceof HTMLFormElement)) {
        return;
      }

      const hasEmailField = Boolean(
        event.target.querySelector(
          'input[type="email"], input[name="email"]',
        ),
      );

      if (sourcePath !== "/shop" || !hasEmailField) {
        return;
      }

      emitConversion("launch_signup_submit", {
        sourcePath,
        destinationPath: "/api/launch-list",
        linkText: "launch signup form",
        sourceSection: "launch-signup-form",
      });
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, [pathname]);

  return null;
}
