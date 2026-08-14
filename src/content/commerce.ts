export type CommerceMode = "launch" | "live";

const configuredMode =
  process.env.NEXT_PUBLIC_COMMERCE_MODE?.trim().toLowerCase();

const mode: CommerceMode =
  configuredMode === "live" ? "live" : "launch";

export const launchConsentVersion =
  "launch-availability-en-v1-2026-08-14";

export const commerceContent = {
  mode,
  isLive: mode === "live",
  shopHref: "/shop",
  ctaLabel:
    mode === "live" ? "Shop Neuvago" : "Get launch access",
  launch: {
    eyebrow: "Neuvago launch",
    title: "Neuvago is almost ready.",
    description:
      "Join the launch list to be among the first to know when Neuvago becomes available for purchase.",
    confirmation:
      "You're on the list. We'll let you know when Neuvago becomes available.",
    consentLabel:
      "I agree to receive Neuvago launch and availability updates by email. I can unsubscribe at any time.",
  },
} as const;
