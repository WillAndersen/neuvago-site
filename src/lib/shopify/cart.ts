import { getShopifyServerConfig } from "./env";
import { CART_CREATE_MUTATION } from "./queries";
import { shopifyStorefrontRequest } from "./storefront";
import {
  ShopifyError,
  type CartCreateResponse,
  type CreateNeuvagoCartInput,
  type CreateNeuvagoCartResult,
} from "./types";

function normalizeQuantity(value: number | undefined): number {
  if (!Number.isFinite(value) || typeof value !== "number") {
    return 1;
  }

  return Math.max(1, Math.min(10, Math.floor(value)));
}

export async function createNeuvagoCheckoutCart({
  quantity,
  locale = "en",
}: CreateNeuvagoCartInput = {}): Promise<CreateNeuvagoCartResult> {
  const config = getShopifyServerConfig();

  if (config.missing.length > 0 || !config.neuvagoVariantId) {
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

  const data = await shopifyStorefrontRequest<CartCreateResponse>({
    query: CART_CREATE_MUTATION,
    variables: {
      input: {
        lines: [
          {
            merchandiseId: config.neuvagoVariantId,
            quantity: normalizeQuantity(quantity),
          },
        ],
        attributes: [
          {
            key: "source",
            value: "neuvago-site",
          },
          {
            key: "site_locale",
            value: locale,
          },
        ],
      },
    },
  });

  const userErrors = data.cartCreate.userErrors;

  if (userErrors.length > 0) {
    throw new ShopifyError("Shopify could not create the checkout cart.", {
      status: 400,
      code: "SHOPIFY_USER_ERROR",
      details: userErrors,
    });
  }

  const cart = data.cartCreate.cart;

  if (!cart?.checkoutUrl) {
    throw new ShopifyError("Shopify did not return a checkout URL.", {
      status: 502,
      code: "SHOPIFY_CHECKOUT_URL_MISSING",
      details: data,
    });
  }

  return {
    cartId: cart.id,
    checkoutUrl: cart.checkoutUrl,
  };
}
