export type ShopifyServerConfig = {
  apiVersion: string;
  storeDomain: string | null;
  storefrontAccessToken: string | null;
  neuvagoVariantId: string | null;
  endpoint: string | null;
  missing: string[];
};

export type ShopifyPublicConfig = {
  shopifyEnabled: boolean;
  checkoutEnabled: boolean;
};

export function isEnabledEnv(value: string | undefined): boolean {
  return value === "true" || value === "1" || value === "yes";
}

export function normalizeShopifyStoreDomain(value: string | undefined): string | null {
  const raw = value?.trim();

  if (!raw) {
    return null;
  }

  return raw
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "")
    .replace(/\/$/, "")
    .trim();
}

export function getShopifyPublicConfig(): ShopifyPublicConfig {
  return {
    shopifyEnabled: isEnabledEnv(process.env.NEXT_PUBLIC_SHOPIFY_ENABLED),
    checkoutEnabled: isEnabledEnv(process.env.NEXT_PUBLIC_CHECKOUT_ENABLED),
  };
}

export function getShopifyServerConfig(): ShopifyServerConfig {
  const apiVersion = process.env.SHOPIFY_API_VERSION?.trim() || "2026-01";
  const storeDomain = normalizeShopifyStoreDomain(process.env.SHOPIFY_STORE_DOMAIN);
  const storefrontAccessToken =
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim() || null;
  const neuvagoVariantId = process.env.SHOPIFY_NEUVAGO_VARIANT_ID?.trim() || null;

  const missing: string[] = [];

  if (!storeDomain) {
    missing.push("SHOPIFY_STORE_DOMAIN");
  }

  if (!storefrontAccessToken) {
    missing.push("SHOPIFY_STOREFRONT_ACCESS_TOKEN");
  }

  if (!neuvagoVariantId) {
    missing.push("SHOPIFY_NEUVAGO_VARIANT_ID");
  }

  const endpoint = storeDomain
    ? "https://" + storeDomain + "/api/" + apiVersion + "/graphql.json"
    : null;

  return {
    apiVersion,
    storeDomain,
    storefrontAccessToken,
    neuvagoVariantId,
    endpoint,
    missing,
  };
}
