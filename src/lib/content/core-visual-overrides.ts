import { homepageContent } from "@/content/homepage";

/**
 * Launch visual overrides for core public pages.
 *
 * Core pages are DB-first, so image changes in src/content/*.ts do not always
 * reach production when Supabase page_content exists. These lightweight
 * overrides keep the launch-critical image role map stable without changing
 * copy or CMS structure.
 *
 * P3.3 note:
 * - No body-placement legacy lifestyle image should appear on launch-critical
 *   product sections.
 * - Each core page should own a clearer image role so the new image bank does
 *   not feel like the same asset repeated across the site.
 */

type JsonObject = Record<string, unknown>;

type SiteImage = {
  src: string;
  alt: string;
};

const images = {
  homepageHeroDesktop: {
    src: "/images/neuvago/homepage-master-hero-desktop.webp",
    alt: "Neuvago device and guided app arranged together in a warm premium hero composition.",
  },
  homepageHeroMobile: {
    src: "/images/neuvago/homepage-master-hero-mobile.webp",
    alt: "Neuvago device and guided app arranged together for the mobile homepage hero.",
  },
  productHeroDesktop: {
    src: "/images/neuvago/product-hero-desktop.webp",
    alt: "Close-up of the Neuvago handheld device in a warm premium product composition.",
  },
  productHeroMobile: {
    src: "/images/neuvago/product-hero-mobile.webp",
    alt: "Close-up of the Neuvago handheld device for mobile product layouts.",
  },
  appHeroDesktop: {
    src: "/images/neuvago/app-hero-desktop.webp",
    alt: "Neuvago app showing a calm guided session beside the handheld device.",
  },
  appHeroMobile: {
    src: "/images/neuvago/app-hero-mobile.webp",
    alt: "Neuvago app guided session screen for mobile app layouts.",
  },
  howItWorksDesktop: {
    src: "/images/neuvago/how-it-works-routine-desktop.webp",
    alt: "Neuvago device, guided app, and simple routine cards explaining how the system works.",
  },
  howItWorksMobile: {
    src: "/images/neuvago/how-it-works-routine-mobile.webp",
    alt: "Neuvago device, guided app, and routine cards for mobile how-it-works layouts.",
  },
  supportDesktop: {
    src: "/images/neuvago/support-guidance-desktop.webp",
    alt: "Neuvago app support and guidance screen beside the handheld device in a calm setting.",
  },
  supportMobile: {
    src: "/images/neuvago/support-guidance-mobile.webp",
    alt: "Neuvago support and guidance app screen for mobile support layouts.",
  },
  finalCtaDesktop: {
    src: "/images/neuvago/final-cta-desktop.webp",
    alt: "Neuvago device and guided app shown softly on the right with open space for a call to action.",
  },
  morningReset: {
    src: "/images/neuvago/morning-reset-desktop.webp",
    alt: "Neuvago device and guided app arranged in a calm morning reset routine.",
  },
  eveningWindDown: {
    src: "/images/neuvago/evening-wind-down-desktop.webp",
    alt: "Neuvago device and guided app resting beside a warm evening wind-down routine.",
  },
  stressPause: {
    src: "/images/neuvago/stress-daytime-pause-desktop.webp",
    alt: "Neuvago device and guided app arranged for a calm daytime pause routine.",
  },
  researchEvidence: {
    src: "/images/neuvago/research-hub-evidence-desktop.webp",
    alt: "Neuvago device beside abstract research cards and evidence visuals.",
  },
} satisfies Record<string, SiteImage>;

const homepageVisualOverrides = homepageContent as unknown as JsonObject;

const productVisualOverrides = {
  hero: {
    desktopImage: images.productHeroDesktop,
    mobileImage: images.productHeroMobile,
  },
  whatIsNeuvago: {
    image: images.howItWorksDesktop,
  },
  whyItFeelsDifferent: {
    detailImage: images.productHeroMobile,
  },
  deviceAppTogether: {
    image: images.supportDesktop,
    supportingImages: [images.appHeroDesktop, images.howItWorksDesktop],
  },
  howItFitsIntoLife: {
    image: images.stressPause,
    secondaryImage: images.eveningWindDown,
  },
  howToUse: {
    steps: [
      {
        title: "Place the device comfortably",
        description:
          "Begin with the device as the physical starting point, with comfort and clear placement guidance treated as part of the experience.",
        image: images.productHeroMobile,
      },
      {
        title: "Start a guided session in the app",
        description:
          "Use the app to choose guidance that fits the moment, while keeping session length, rhythm, and intensity easy to understand.",
        image: images.appHeroMobile,
      },
      {
        title: "Return to it over time",
        description:
          "Repeat it in ways that fit real life so the system becomes easier to return to and more useful over time.",
        image: images.howItWorksMobile,
      },
    ],
  },
  finalCta: {
    backgroundImage: images.finalCtaDesktop,
  },
} satisfies JsonObject;

const appVisualOverrides = {
  hero: {
    desktopImage: images.appHeroDesktop,
    mobileImage: images.appHeroMobile,
  },
  whatItDoes: {
    image: images.appHeroDesktop,
  },
  sessionsRhythm: {
    supportingImages: [
      images.morningReset,
      images.eveningWindDown,
      images.supportDesktop,
    ],
  },
  fitsIntoLife: {
    image: images.morningReset,
    secondaryImage: images.eveningWindDown,
  },
  deviceTogether: {
    image: images.productHeroDesktop,
  },
  finalCta: {
    backgroundImage: images.finalCtaDesktop,
  },
} satisfies JsonObject;

const howItWorksVisualOverrides = {
  hero: {
    desktopImage: images.howItWorksDesktop,
    mobileImage: images.howItWorksMobile,
  },
  systemAtAGlance: {
    image: images.howItWorksDesktop,
  },
  steps: {
    items: [
      {
        title: "Place the device comfortably",
        description:
          "Begin with the device as the physical starting point for the experience. Placement, contact, and comfort are part of the routine, not afterthoughts.",
        image: images.productHeroMobile,
      },
      {
        title: "Follow the guidance in the app",
        description:
          "Use the app to choose guidance that fits the moment, while session length, rhythm, and intensity stay easy to understand.",
        image: images.appHeroMobile,
      },
      {
        title: "Return over time",
        description:
          "Repeat it in ways that fit real life so the system becomes more familiar, more comfortable, and easier to return to over time.",
        image: images.howItWorksMobile,
      },
    ],
  },
  appAdds: {
    supportingImages: [images.supportDesktop, images.appHeroDesktop, images.morningReset],
  },
  dailyLife: {
    image: images.stressPause,
    secondaryImage: images.eveningWindDown,
  },
  finalCta: {
    backgroundImage: images.finalCtaDesktop,
  },
} satisfies JsonObject;

const supportVisualOverrides = {
  hero: {
    desktopImage: images.supportDesktop,
    mobileImage: images.supportMobile,
  },
  finalCta: {
    backgroundImage: images.finalCtaDesktop,
  },
} satisfies JsonObject;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeJson(base: unknown, override: unknown): unknown {
  if (!isJsonObject(base) || !isJsonObject(override)) {
    return override;
  }

  const merged: JsonObject = { ...base };

  for (const [key, value] of Object.entries(override)) {
    merged[key] = key in merged ? mergeJson(merged[key], value) : value;
  }

  return merged;
}

function applyVisualOverrides<T>(content: T, overrides: JsonObject): T {
  return mergeJson(content, overrides) as T;
}

export function applyHomepageVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, homepageVisualOverrides);
}

export function applyProductVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, productVisualOverrides);
}

export function applyAppVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, appVisualOverrides);
}

export function applyHowItWorksVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, howItWorksVisualOverrides);
}

export function applySupportVisualOverrides<T>(content: T): T {
  return applyVisualOverrides(content, supportVisualOverrides);
}
