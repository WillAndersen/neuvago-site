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
    | "background";
  label: string;
  notes?: string;
};

export const siteAssets = {
  hero: [
    {
      key: "hero-device-app-master",
      src: "/images/home/hero-device-app-master.png",
      alt: "Neuvago device and app shown together in a premium editorial composition.",
      category: "hero",
      label: "Hero device + app master",
      notes: "Primary wide hero visual for homepage and broad brand moments.",
    },
    {
      key: "hero-device-app-mobile",
      src: "/images/home/hero-device-app-mobile.png",
      alt: "Neuvago device and app shown together for mobile layouts.",
      category: "hero",
      label: "Hero device + app mobile",
      notes: "Mobile hero visual for homepage and broad brand moments.",
    },
  ] satisfies SiteAsset[],

  system: [
    {
      key: "device-phone-paired-editorial",
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together as one connected system.",
      category: "system",
      label: "Device + phone paired editorial",
      notes: "Best system image when a section specifically needs to show device and app together.",
    },
  ] satisfies SiteAsset[],

  product: [
    {
      key: "device-cutout-front-angle",
      src: "/images/home/device-cutout-front-angle.png",
      alt: "Front and angled view of the Neuvago device.",
      category: "product",
      label: "Device cutout front angle",
      notes: "Useful for product-led and practical how-it-works moments.",
    },
  ] satisfies SiteAsset[],

  app: [
    {
      key: "app-mockup-home",
      src: "/images/home/app-mockup-home.png",
      alt: "Neuvago app home screen mockup.",
      category: "app",
      label: "App mockup home",
      notes: "Good default app screen for app, product, and about sections.",
    },
    {
      key: "app-mockup-session",
      src: "/images/home/app-mockup-session.png",
      alt: "Neuvago app session screen mockup.",
      category: "app",
      label: "App mockup session",
      notes: "Best for guided sessions and app flow sections.",
    },
    {
      key: "app-mockup-progress",
      src: "/images/home/app-mockup-progress.png",
      alt: "Neuvago app progress screen mockup.",
      category: "app",
      label: "App mockup progress",
      notes: "Best for continuity, progress, and repetition sections.",
    },
    {
      key: "app-mockup-library",
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago app library screen mockup.",
      category: "app",
      label: "App mockup library",
      notes: "Useful for app content overview and library/discovery sections.",
    },
  ] satisfies SiteAsset[],

  lifestyle: [
    {
      key: "lifestyle-sofa-neuvago",
      src: "/images/home/lifestyle-sofa-neuvago.png",
      alt: "A calm real-life moment with Neuvago as part of a quiet routine.",
      category: "lifestyle",
      label: "Lifestyle sofa scene",
      notes: "Best for real-life, everyday use, and evening routine sections.",
    },
  ] satisfies SiteAsset[],

  detail: [
    {
      key: "device-close-detail-material",
      src: "/images/home/device-close-detail-material.png",
      alt: "Close-up details of the Neuvago device material and finish.",
      category: "detail",
      label: "Device close detail material",
      notes: "Best for design philosophy, product quality, and premium detail sections.",
    },
  ] satisfies SiteAsset[],

  background: [
    {
      key: "paired-background-soft",
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a warm premium background composition.",
      category: "background",
      label: "Paired background soft",
      notes: "Use sparingly for final CTA sections so core pages do not feel repetitive.",
    },
  ] satisfies SiteAsset[],
} as const;

export const allSiteAssets: SiteAsset[] = [
  ...siteAssets.hero,
  ...siteAssets.system,
  ...siteAssets.product,
  ...siteAssets.app,
  ...siteAssets.lifestyle,
  ...siteAssets.detail,
  ...siteAssets.background,
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