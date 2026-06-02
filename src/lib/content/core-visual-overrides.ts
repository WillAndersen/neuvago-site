/**
 * Launch visual overrides for core public pages.
 *
 * Core pages are DB-first, so image changes in src/content/*.ts do not always
 * reach production when Supabase page_content exists. These lightweight
 * overrides keep the launch-critical image role map stable without changing
 * copy or CMS structure.
 */

type JsonObject = Record<string, unknown>;

type SiteImage = {
  src: string;
  alt: string;
};

const images = {
  deviceCutout: {
    src: "/images/home/device-cutout-front-angle.png",
    alt: "Front and angled view of the Neuvago device.",
  },
  deviceDetail: {
    src: "/images/home/device-close-detail-material.png",
    alt: "Close-up details of the Neuvago device material and finish.",
  },
  deviceAppSystem: {
    src: "/images/home/device-phone-paired-editorial.png",
    alt: "Neuvago device and app shown together as one connected system.",
  },
  appHome: {
    src: "/images/home/app-mockup-home.png",
    alt: "Neuvago app home screen mockup.",
  },
  appSession: {
    src: "/images/home/app-mockup-session.png",
    alt: "Neuvago app session screen mockup.",
  },
  appProgress: {
    src: "/images/home/app-mockup-progress.png",
    alt: "Neuvago app progress screen mockup.",
  },
  appLibrary: {
    src: "/images/home/app-mockup-library.png",
    alt: "Neuvago app library screen mockup.",
  },
  lifestyle: {
    src: "/images/home/lifestyle-sofa-neuvago.png",
    alt: "A calm real-life moment with Neuvago as part of a quiet routine.",
  },
} satisfies Record<string, SiteImage>;

const homepageVisualOverrides = {
  whatIsNeuvago: {
    image: images.deviceDetail,
  },
  appDeviceEcosystem: {
    image: images.appLibrary,
  },
  finalCta: {
    backgroundImage: images.lifestyle,
  },
} satisfies JsonObject;

const productVisualOverrides = {
  hero: {
    desktopImage: images.deviceDetail,
    mobileImage: images.deviceCutout,
  },
  whatIsNeuvago: {
    image: images.deviceCutout,
  },
  deviceAppTogether: {
    image: images.appLibrary,
  },
  howItFitsIntoLife: {
    secondaryImage: images.appSession,
  },
  finalCta: {
    backgroundImage: images.deviceDetail,
  },
} satisfies JsonObject;

const appVisualOverrides = {
  hero: {
    desktopImage: images.appHome,
    mobileImage: images.appSession,
  },
  whatItDoes: {
    image: images.appLibrary,
  },
  fitsIntoLife: {
    secondaryImage: images.appLibrary,
  },
  deviceTogether: {
    image: images.deviceCutout,
  },
  finalCta: {
    backgroundImage: images.appProgress,
  },
} satisfies JsonObject;

const howItWorksVisualOverrides = {
  hero: {
    desktopImage: images.deviceCutout,
    mobileImage: images.appSession,
  },
  systemAtAGlance: {
    image: images.deviceDetail,
  },
  dailyLife: {
    secondaryImage: images.appSession,
  },
  finalCta: {
    backgroundImage: images.appProgress,
  },
} satisfies JsonObject;

const supportVisualOverrides = {
  hero: {
    desktopImage: images.appLibrary,
    mobileImage: images.appLibrary,
  },
  finalCta: {
    backgroundImage: images.lifestyle,
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
