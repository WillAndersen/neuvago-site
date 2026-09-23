"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getAnalyticsRuntime, publicPath } from "@/lib/analytics/consent-runtime";

type ConversionTarget =
  | "how_it_works_click"
  | "product_click"
  | "buyer_guide_click"
  | "buyer_checklist_download"
  | "launch_access_click"
  | "shop_click"
  | "launch_signup_submit"
  | "launch_signup_success";

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

function normalizePath(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

function cleanValue(value: string, maxLength = 100) {
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function isTrackableSourcePath(pathname: string) { return publicPath(pathname) !== null; }
function sourceSectionForElement(element: Element) {
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  return "main";
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

  if (pathname === "/shop" || pathname === "/no/lansering") {
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
  return getAnalyticsRuntime()?.emit(target, context) ?? false;
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

    const savedForms = new WeakSet<HTMLFormElement>();
    const measuredAttempts = new WeakMap<HTMLFormElement, number>();

    const handleSubmit = (event: SubmitEvent) => {
      if (!(event.target instanceof HTMLFormElement)) {
        return;
      }

      const hasEmailField = Boolean(
        event.target.querySelector(
          'input[type="email"], input[name="email"]',
        ),
      );

      if (!["/shop", "/no/lansering"].includes(sourcePath) || !hasEmailField) {
        return;
      }

      const emitted = emitConversion("launch_signup_submit", {
        sourcePath,
        destinationPath: "/api/launch-list",
        linkText: "launch signup form",
        sourceSection: "launch-signup-form",
      });
      // No retrospective measurement of submissions begun without consent/readiness.
      const epoch = getAnalyticsRuntime()?.getEpoch();
      if (emitted && epoch !== undefined) measuredAttempts.set(event.target, epoch);
      else measuredAttempts.delete(event.target);
    };

    const handleSaved = (event: Event) => {
      const form = event.target;
      if (
        !(form instanceof HTMLFormElement) ||
        form.dataset.neuvagoLaunchForm !== "true" ||
        !["/shop", "/no/lansering"].includes(sourcePath) ||
        savedForms.has(form) ||
        measuredAttempts.get(form) !== getAnalyticsRuntime()?.getEpoch()
      ) return;
      savedForms.add(form);
      emitConversion("launch_signup_success", {
        sourcePath,
        destinationPath: "/api/launch-list",
        linkText: "launch signup form",
        sourceSection: "launch-signup-form",
      });
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("neuvago:launch-signup-saved", handleSaved);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("neuvago:launch-signup-saved", handleSaved);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, [pathname]);

  return null;
}
