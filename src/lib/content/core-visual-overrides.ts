import { homepageContent } from "@/content/homepage";
import { productPageContent } from "@/content/product";
import { appPageContent } from "@/content/app";
import { howItWorksPageContent } from "@/content/how-it-works";
import { supportPageContent } from "@/content/support";

/**
 * Launch presentation overrides for core public pages.
 *
 * Core pages are DB-first, so content in Supabase can otherwise keep an older
 * template-era page live even after a premium redesign. In the P4 phase we lock
 * the public homepage/product/app/how-it-works/support presentation to the
 * curated local content until the database content is deliberately synced.
 *
 * P4.2 locked core media markers:
 * - /images/neuvago/homepage-master-hero-desktop.webp
 * - /images/neuvago/product-hero-desktop.webp
 * - /images/neuvago/app-hero-desktop.webp
 * - /images/neuvago/how-it-works-routine-desktop.webp
 * - /images/neuvago/support-guidance-desktop.webp
 *
 * P3.3 note:
 * - No body-placement legacy lifestyle image should appear on launch-critical
 *   product sections.
 * - Each core page should own a clearer image role so the new image bank does
 *   not feel like the same asset repeated across the site.
 */

type JsonObject = Record<string, unknown>;

const homepageVisualOverrides = homepageContent as unknown as JsonObject;

const productVisualOverrides = productPageContent as unknown as JsonObject;
const appVisualOverrides = appPageContent as unknown as JsonObject;
const howItWorksVisualOverrides = howItWorksPageContent as unknown as JsonObject;
const supportVisualOverrides = supportPageContent as unknown as JsonObject;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeJson(base: unknown, override: unknown): unknown {
  if (!isJsonObject(base) || !isJsonObject(override)) {
    return override;
  }

  const merged: JsonObject = { ...base };

  for (const [key, value] of Object.entries(override)) {
    merged[key] = key in merged ? mergeJson(merged[key], value) : value;
  }

  return merged;
}

function applyVisualOverrides<T>(content: T, overrides: JsonObject): T {
  return mergeJson(content, overrides) as T;
}

export function applyHomepageVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, homepageVisualOverrides);
}

export function applyProductVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, productVisualOverrides);
}

export function applyAppVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, appVisualOverrides);
}

export function applyHowItWorksVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, howItWorksVisualOverrides);
}

export function applySupportVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, supportVisualOverrides);
}
