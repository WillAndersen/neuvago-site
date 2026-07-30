import { NextResponse } from "next/server";

import { createNeuvagoCheckoutCart } from "@/lib/shopify/cart";
import { getShopifyPublicConfig } from "@/lib/shopify/env";
import { ShopifyError } from "@/lib/shopify/types";

export const runtime = "nodejs";

type CartRequestBody = {
  quantity?: unknown;
  locale?: unknown;
};

function normalizeLocale(value: unknown): "en" | "no" {
  return value === "no" ? "no" : "en";
}

function normalizeQuantity(value: unknown): number {
  if (typeof value !== "number") {
    return 1;
  }

  return Math.max(1, Math.min(10, Math.floor(value)));
}

export async function GET() {
  const config = getShopifyPublicConfig();

  return NextResponse.json({
    ok: true,
    shopifyEnabled: config.shopifyEnabled,
    checkoutEnabled: config.checkoutEnabled,
  });
}

export async function POST(request: Request) {
  const config = getShopifyPublicConfig();

  if (!config.shopifyEnabled || !config.checkoutEnabled) {
    return NextResponse.json(
      {
        ok: false,
        error: "Checkout is not enabled yet.",
      },
      {
        status: 503,
      },
    );
  }

  let body: CartRequestBody = {};

  try {
    body = (await request.json()) as CartRequestBody;
  } catch {
    body = {};
  }

  try {
    const result = await createNeuvagoCheckoutCart({
      quantity: normalizeQuantity(body.quantity),
      locale: normalizeLocale(body.locale),
    });

    return NextResponse.json({
      ok: true,
      cartId: result.cartId,
      checkoutUrl: result.checkoutUrl,
    });
  } catch (error) {
    if (error instanceof ShopifyError) {
      console.error("Shopify checkout error", {
        code: error.code,
        details: error.details,
      });

      return NextResponse.json(
        {
          ok: false,
          error:
            error.code === "SHOPIFY_CONFIG_MISSING"
              ? "Checkout is not configured yet."
              : "Unable to start checkout.",
        },
        {
          status: error.status,
        },
      );
    }

    console.error("Unexpected checkout error", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to start checkout.",
      },
      {
        status: 500,
      },
    );
  }
}
