"use client";

import { useState, type ReactNode } from "react";

type ShopifyCheckoutButtonProps = {
  locale?: "en" | "no";
  quantity?: number;
  children?: ReactNode;
  className?: string;
  disabledLabel?: string;
  loadingLabel?: string;
};

const shopifyEnabled = process.env.NEXT_PUBLIC_SHOPIFY_ENABLED === "true";
const checkoutEnabled = process.env.NEXT_PUBLIC_CHECKOUT_ENABLED === "true";

const defaultClassName =
  "inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] disabled:cursor-not-allowed disabled:opacity-55";

export function ShopifyCheckoutButton({
  locale = "en",
  quantity = 1,
  children,
  className,
  disabledLabel,
  loadingLabel,
}: ShopifyCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const enabled = shopifyEnabled && checkoutEnabled;
  const label = children ?? (locale === "no" ? "Kjøp Neuvago" : "Buy Neuvago");
  const disabledText =
    disabledLabel ?? (locale === "no" ? "Kjøp åpner snart" : "Checkout opens soon");
  const loadingText =
    loadingLabel ?? (locale === "no" ? "Åpner checkout…" : "Opening checkout…");

  async function handleClick() {
    if (!enabled || isLoading) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/shopify/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity,
          locale,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !payload.ok || !payload.checkoutUrl) {
        throw new Error(payload.error ?? "Unable to start checkout.");
      }

      window.location.assign(payload.checkoutUrl);
    } catch (error) {
      const fallback =
        locale === "no"
          ? "Vi klarte ikke å åpne checkout akkurat nå."
          : "We could not open checkout right now.";

      setErrorMessage(error instanceof Error ? error.message : fallback);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        className={className ?? defaultClassName}
        onClick={handleClick}
        disabled={!enabled || isLoading}
      >
        {!enabled ? disabledText : isLoading ? loadingText : label}
      </button>

      {errorMessage ? (
        <p className="mt-3 text-sm leading-6 text-[#9a3f2f]" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
