export type SiteAsset = {
  key: string;
  src: string;
  alt: string;
  category:
    | "hero"
    | "product"
    | "app"
    | "lifestyle"
    | "detail"
    | "system"
    | "background"
    | "research"
    | "condition"
    | "education";
  label: string;
  notes?: string;
};

export const siteAssets = {
  hero: [
    {
      key: "homepage-master-hero-desktop",
      src: "/images/neuvago/launch/no-home-hero-desktop.webp",
      alt: "Neuvago device and guided app arranged together in a warm premium hero composition.",
      category: "hero",
      label: "Homepage master hero desktop",
      notes: "Primary homepage desktop hero with broad brand/system positioning.",
    },
    {
      key: "homepage-master-hero-mobile",
      src: "/images/neuvago/launch/no-home-hero-mobile.webp",
      alt: "Neuvago device and guided app arranged together for the mobile homepage hero.",
      category: "hero",
      label: "Homepage master hero mobile",
      notes: "Primary homepage mobile hero crop.",
    },
  ] satisfies SiteAsset[],

  product: [
    {
      key: "product-hero-desktop",
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "Close-up of the Neuvago handheld device in a warm premium product composition.",
      category: "product",
      label: "Product hero desktop",
      notes: "Primary product-led hero image for desktop layouts.",
    },
    {
      key: "product-hero-mobile",
      src: "/images/neuvago/launch/product-hero-mobile.webp",
      alt: "Close-up of the Neuvago handheld device for mobile product layouts.",
      category: "product",
      label: "Product hero mobile",
      notes: "Mobile crop for the product hero.",
    },
  ] satisfies SiteAsset[],

  app: [
    {
      key: "app-hero-desktop",
      src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
      alt: "Neuvago app showing a calm guided session beside the handheld device.",
      category: "app",
      label: "App hero desktop",
      notes: "Primary app-led hero image for desktop layouts.",
    },
    {
      key: "app-hero-mobile",
      src: "/images/neuvago/launch/product-app-pairing-mobile.webp",
      alt: "Neuvago app guided session screen for mobile app layouts.",
      category: "app",
      label: "App hero mobile",
      notes: "Mobile crop for the app hero.",
    },
    {
      key: "morning-reset-desktop",
      src: "/images/neuvago/morning-reset-desktop.webp",
      alt: "Neuvago device and guided app arranged in a calm morning reset routine.",
      category: "lifestyle",
      label: "Morning reset desktop",
      notes: "Morning routine image for app, homepage, or stress context.",
    },
    {
      key: "morning-reset-mobile",
      src: "/images/neuvago/morning-reset-mobile.webp",
      alt: "Neuvago morning reset routine with device and guided app for mobile layouts.",
      category: "lifestyle",
      label: "Morning reset mobile",
      notes: "Mobile crop for morning routine image.",
    },
  ] satisfies SiteAsset[],

  system: [
    {
      key: "how-it-works-routine-desktop",
      src: "/images/neuvago/launch/routine-evening-desktop.webp",
      alt: "Neuvago device, guided app, and simple routine cards explaining how the system works.",
      category: "system",
      label: "How it works routine desktop",
      notes: "Primary practical routine image for how-it-works desktop layouts.",
    },
    {
      key: "how-it-works-routine-mobile",
      src: "/images/neuvago/launch/routine-evening-mobile.webp",
      alt: "Neuvago device, guided app, and routine cards for mobile how-it-works layouts.",
      category: "system",
      label: "How it works routine mobile",
      notes: "Mobile crop for how-it-works hero.",
    },
    {
      key: "support-guidance-desktop",
      src: "/images/neuvago/support-guidance-desktop.webp",
      alt: "Neuvago app support and guidance screen beside the handheld device in a calm setting.",
      category: "system",
      label: "Support guidance desktop",
      notes: "Primary support-page hero image.",
    },
    {
      key: "support-guidance-mobile",
      src: "/images/neuvago/support-guidance-mobile.webp",
      alt: "Neuvago support and guidance app screen for mobile support layouts.",
      category: "system",
      label: "Support guidance mobile",
      notes: "Mobile crop for support-page hero image.",
    },
  ] satisfies SiteAsset[],

  lifestyle: [
    {
      key: "evening-wind-down-desktop",
      src: "/images/neuvago/launch/routine-evening-desktop.webp",
      alt: "Neuvago device and guided app resting beside a warm evening wind-down routine.",
      category: "lifestyle",
      label: "Evening wind-down desktop",
      notes: "Sleep and evening routine image for condition and app contexts.",
    },
    {
      key: "evening-wind-down-mobile",
      src: "/images/neuvago/launch/routine-evening-mobile.webp",
      alt: "Neuvago evening wind-down routine with device and guided app for mobile layouts.",
      category: "lifestyle",
      label: "Evening wind-down mobile",
      notes: "Mobile crop for evening wind-down image.",
    },
    {
      key: "stress-daytime-pause-desktop",
      src: "/images/neuvago/stress-daytime-pause-desktop.webp",
      alt: "Neuvago device and guided app arranged for a calm daytime pause routine.",
      category: "condition",
      label: "Stress daytime pause desktop",
      notes: "Condition image for stress and daytime reset contexts.",
    },
    {
      key: "stress-daytime-pause-mobile",
      src: "/images/neuvago/stress-daytime-pause-mobile.webp",
      alt: "Neuvago daytime pause routine with device and guided app for mobile layouts.",
      category: "condition",
      label: "Stress daytime pause mobile",
      notes: "Mobile crop for stress condition image.",
    },
  ] satisfies SiteAsset[],

  research: [
    {
      key: "research-hub-evidence-desktop",
      src: "/images/neuvago/research-hub-evidence-desktop.webp",
      alt: "Neuvago device beside abstract research cards and evidence visuals.",
      category: "research",
      label: "Research hub evidence desktop",
      notes: "Primary research hub and evidence-overview image.",
    },
    {
      key: "research-hub-evidence-mobile",
      src: "/images/neuvago/research-hub-evidence-mobile.webp",
      alt: "Neuvago research cards and device for mobile research layouts.",
      category: "research",
      label: "Research hub evidence mobile",
      notes: "Mobile crop for research hub image.",
    },
    {
      key: "safety-tolerability-desktop",
      src: "/images/neuvago/safety-tolerability-desktop.webp",
      alt: "Neuvago device beside an abstract safety and tolerability checklist card.",
      category: "research",
      label: "Safety tolerability desktop",
      notes: "Research image for safety and tolerability pages.",
    },
    {
      key: "safety-tolerability-mobile",
      src: "/images/neuvago/safety-tolerability-mobile.webp",
      alt: "Neuvago safety and tolerability checklist visual for mobile layouts.",
      category: "research",
      label: "Safety tolerability mobile",
      notes: "Mobile crop for safety image.",
    },
    {
      key: "autonomic-regulation-desktop",
      src: "/images/neuvago/autonomic-regulation-desktop.webp",
      alt: "Neuvago device beside abstract rhythm and regulation research cards.",
      category: "research",
      label: "Autonomic regulation desktop",
      notes: "Research image for autonomic regulation content.",
    },
    {
      key: "autonomic-regulation-mobile",
      src: "/images/neuvago/autonomic-regulation-mobile.webp",
      alt: "Abstract autonomic regulation research visual with Neuvago device for mobile layouts.",
      category: "research",
      label: "Autonomic regulation mobile",
      notes: "Mobile crop for autonomic regulation image.",
    },
    {
      key: "hrv-rhythm-desktop",
      src: "/images/neuvago/hrv-rhythm-desktop.webp",
      alt: "Neuvago device beside abstract rhythm cards for heart rate variability research.",
      category: "research",
      label: "HRV rhythm desktop",
      notes: "Research image for HRV and rhythm pages.",
    },
    {
      key: "hrv-rhythm-mobile",
      src: "/images/neuvago/hrv-rhythm-mobile.webp",
      alt: "Heart rate variability rhythm cards with Neuvago device for mobile layouts.",
      category: "research",
      label: "HRV rhythm mobile",
      notes: "Mobile crop for HRV image.",
    },
  ] satisfies SiteAsset[],

  education: [
    {
      key: "auricular-vns-education-desktop",
      src: "/images/neuvago/auricular-vns-education-desktop.webp",
      alt: "Neuvago device beside an abstract ear-based auricular VNS education card.",
      category: "education",
      label: "Auricular VNS education desktop",
      notes: "Education image for auricular VNS / taVNS guide pages.",
    },
    {
      key: "auricular-vns-education-mobile",
      src: "/images/neuvago/auricular-vns-education-mobile.webp",
      alt: "Auricular VNS education visual with Neuvago device for mobile layouts.",
      category: "education",
      label: "Auricular VNS education mobile",
      notes: "Mobile crop for auricular VNS education image.",
    },
    {
      key: "transcutaneous-vns-education-desktop",
      src: "/images/neuvago/transcutaneous-vns-education-desktop.webp",
      alt: "Neuvago device beside abstract transcutaneous VNS method cards.",
      category: "education",
      label: "Transcutaneous VNS education desktop",
      notes: "Education image for transcutaneous VNS / tVNS guide pages.",
    },
    {
      key: "transcutaneous-vns-education-mobile",
      src: "/images/neuvago/transcutaneous-vns-education-mobile.webp",
      alt: "Transcutaneous VNS education visual with Neuvago device for mobile layouts.",
      category: "education",
      label: "Transcutaneous VNS education mobile",
      notes: "Mobile crop for transcutaneous VNS education image.",
    },
  ] satisfies SiteAsset[],

  background: [
    {
      key: "final-cta-desktop",
      src: "/images/neuvago/launch/final-cta-desktop.webp",
      alt: "Neuvago device and guided app shown softly on the right with open space for a call to action.",
      category: "background",
      label: "Final CTA desktop",
      notes: "Wide image for final CTA backgrounds on core pages.",
    },
    {
      key: "final-cta-mobile",
      src: "/images/neuvago/launch/final-cta-mobile.webp",
      alt: "Neuvago device and guided app in a soft final call-to-action composition for mobile layouts.",
      category: "background",
      label: "Final CTA mobile",
      notes: "Mobile crop for final CTA sections.",
    },
  ] satisfies SiteAsset[],

  legacy: [
    {
      key: "legacy-hero-device-app-master",
      src: "/images/home/hero-device-app-master.png",
      alt: "Legacy Neuvago device and app hero composition.",
      category: "hero",
      label: "Legacy hero device + app master",
      notes: "Legacy asset kept only for backwards compatibility with older DB content.",
    },
    {
      key: "legacy-app-mockup-session",
      src: "/images/home/app-mockup-session.png",
      alt: "Legacy Neuvago app session screen mockup.",
      category: "app",
      label: "Legacy app mockup session",
      notes: "Legacy asset kept for supporting app mockup sections.",
    },
  ] satisfies SiteAsset[],
} as const;

export const allSiteAssets: SiteAsset[] = [
  ...siteAssets.hero,
  ...siteAssets.product,
  ...siteAssets.app,
  ...siteAssets.system,
  ...siteAssets.lifestyle,
  ...siteAssets.research,
  ...siteAssets.education,
  ...siteAssets.background,
  ...siteAssets.legacy,
];

export const siteAssetMap = Object.fromEntries(
  allSiteAssets.map((asset) => [asset.key, asset])
) as Record<string, SiteAsset>;

export function getSiteAssetByKey(key: string) {
  return siteAssetMap[key] ?? null;
}

export function getSiteAssetKeyBySrc(src: string) {
  const asset = allSiteAssets.find((item) => item.src === src);
  return asset?.key ?? "";
}
