export const PAGE_SLUGS = {
  homepage: "homepage",
  product: "product",
  app: "app",
  howItWorks: "how-it-works",
  about: "about",
  support: "support",
} as const;

export type PageSlug = (typeof PAGE_SLUGS)[keyof typeof PAGE_SLUGS];
