import { getShopifyServerConfig } from "./env";
import { ShopifyError, type ShopifyGraphQLError } from "./types";

type ShopifyStorefrontRequestOptions = {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
};

type ShopifyStorefrontResponse<TData> = {
  data?: TData;
  errors?: ShopifyGraphQLError[];
};

export async function shopifyStorefrontRequest<TData>({
  query,
  variables,
  cache = "no-store",
}: ShopifyStorefrontRequestOptions): Promise<TData> {
  const config = getShopifyServerConfig();

  if (config.missing.length > 0 || !config.endpoint || !config.storefrontAccessToken) {
    throw new ShopifyError(
      "Shopify configuration is incomplete.",
      {
        status: 500,
        code: "SHOPIFY_CONFIG_MISSING",
        details: {
          missing: config.missing,
        },
      },
    );
  }

  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.storefrontAccessToken,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache,
  });

  let payload: ShopifyStorefrontResponse<TData> | null = null;

  try {
    payload = (await response.json()) as ShopifyStorefrontResponse<TData>;
  } catch {
    throw new ShopifyError("Shopify returned an invalid response.", {
      status: 502,
      code: "SHOPIFY_INVALID_RESPONSE",
    });
  }

  if (!response.ok) {
    throw new ShopifyError("Shopify Storefront request failed.", {
      status: response.status,
      code: "SHOPIFY_HTTP_ERROR",
      details: payload,
    });
  }

  if (payload.errors?.length) {
    throw new ShopifyError("Shopify Storefront GraphQL request failed.", {
      status: 502,
      code: "SHOPIFY_GRAPHQL_ERROR",
      details: payload.errors,
    });
  }

  if (!payload.data) {
    throw new ShopifyError("Shopify Storefront response did not include data.", {
      status: 502,
      code: "SHOPIFY_EMPTY_DATA",
    });
  }

  return payload.data;
}
