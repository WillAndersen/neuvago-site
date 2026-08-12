import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function isEnabled(value: string | undefined) {
  return value === "true" || value === "1" || value === "yes";
}

export async function GET() {
  const shopifyEnabled = isEnabled(process.env.NEXT_PUBLIC_SHOPIFY_ENABLED);
  const checkoutEnabled = isEnabled(process.env.NEXT_PUBLIC_CHECKOUT_ENABLED);

  const configured = Boolean(
    process.env.SHOPIFY_STORE_DOMAIN &&
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN &&
      process.env.SHOPIFY_NEUVAGO_VARIANT_ID,
  );

  return NextResponse.json(
    {
      ok: true,
      enabled: shopifyEnabled && checkoutEnabled && configured,
      shopifyEnabled,
      checkoutEnabled,
      configured,
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
