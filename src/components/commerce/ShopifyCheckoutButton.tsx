"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

type Locale = "en" | "no";

type CheckoutStatus = {
  ok: boolean;
  enabled: boolean;
  shopifyEnabled?: boolean;
  checkoutEnabled?: boolean;
  configured?: boolean;
};

type ShopifyCheckoutButtonProps = {
  children: ReactNode;
  locale?: Locale;
  quantity?: number;
  disabledLabel?: string;
  loadingLabel?: string;
  className?: string;
};

function getDefaultDisabledLabel(locale: Locale) {
  return locale === "no" ? "Kjøp åpner snart" : "Checkout opens soon";
}

function getDefaultLoadingLabel(locale: Locale) {
  return locale === "no" ? "Åpner betaling…" : "Opening checkout…";
}

function getDefaultCheckingLabel(locale: Locale) {
  return locale === "no" ? "Sjekker kjøp…" : "Checking checkout…";
}

function getDefaultError(locale: Locale) {
  return locale === "no"
    ? "Kunne ikke åpne checkout akkurat nå."
    : "Could not open checkout right now.";
}

export function ShopifyCheckoutButton({
  children,
  locale = "en",
  quantity = 1,
  disabledLabel,
  loadingLabel,
  className,
}: ShopifyCheckoutButtonProps) {
  const [status, setStatus] = useState<CheckoutStatus | null>(null);
  const [statusError, setStatusError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadStatus() {
      try {
        const response = await fetch("/api/shopify/status", {
          method: "GET",
          cache: "no-store",
        });

        const json = (await response.json()) as CheckoutStatus;

        if (!cancelled) {
          setStatus(json);
          setStatusError(false);
        }
      } catch {
        if (!cancelled) {
          setStatus(null);
          setStatusError(true);
        }
      }
    }

    loadStatus();

    return () => {
      cancelled = true;
    };
  }, []);

  const isChecking = status === null && !statusError;
  const isEnabled = Boolean(status?.enabled);
  const isDisabled = isChecking || !isEnabled || isLoading;

  const label = useMemo(() => {
    if (isLoading) return loadingLabel ?? getDefaultLoadingLabel(locale);
    if (isChecking) return getDefaultCheckingLabel(locale);
    if (!isEnabled) return disabledLabel ?? getDefaultDisabledLabel(locale);
    return children;
  }, [
    children,
    disabledLabel,
    isChecking,
    isEnabled,
    isLoading,
    loadingLabel,
    locale,
  ]);

  async function handleClick() {
    if (isDisabled) return;

    setIsLoading(true);
    setError(null);

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

      const json = await response.json();

      if (!response.ok || !json.ok || !json.checkoutUrl) {
        throw new Error(json.error || getDefaultError(locale));
      }

      window.location.assign(json.checkoutUrl);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : getDefaultError(locale),
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-2">
      <button
        type="button"
        className={className}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={handleClick}
      >
        {label}
      </button>

      {error ? (
        <p className="text-sm leading-6 text-[#9a3f2f]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
