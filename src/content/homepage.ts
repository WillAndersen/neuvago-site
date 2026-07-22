export type HomepageCta = {
  label: string;
  href: string;
};

export type HomepageImage = {
  src: string;
  alt: string;
};

export type HomepageSectionVisibility = {
  visible: boolean;
};

export type HomepageCard = {
  title: string;
  description: string;
};

export type HomepageStep = {
  title: string;
  description: string;
  image?: HomepageImage;
};

export type HomepageQuote = {
  quote: string;
  name: string;
  role: string;
  image?: HomepageImage;
};

export type HomepageLinkCard = {
  title: string;
  description: string;
  href: string;
};

export type HomepageImageCard = {
  title: string;
  description?: string;
  image: HomepageImage;
};

export type HomepageFeatureItem = {
  title: string;
  description: string;
};

export type HomepageVisualPanel = {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  image?: HomepageImage;
};

const homepageHeroDesktop = {
  src: "/images/neuvago/launch/no-home-hero-desktop.webp",
  alt: "Neuvago device and guided app arranged together in a warm premium hero composition.",
} satisfies HomepageImage;

const homepageHeroMobile = {
  src: "/images/neuvago/launch/no-home-hero-mobile.webp",
  alt: "Neuvago device and guided app arranged together for the mobile homepage hero.",
} satisfies HomepageImage;

const productHeroDesktop = {
  src: "/images/neuvago/launch/product-hero-desktop.webp",
  alt: "Close-up of the Neuvago handheld device in a warm premium product composition.",
} satisfies HomepageImage;

const productHeroMobile = {
  src: "/images/neuvago/launch/product-hero-mobile.webp",
  alt: "Close-up of the Neuvago handheld device for mobile product layouts.",
} satisfies HomepageImage;

const appHeroDesktop = {
  src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
  alt: "Neuvago app showing a calm guided session beside the handheld device.",
} satisfies HomepageImage;

const appHeroMobile = {
  src: "/images/neuvago/launch/product-app-pairing-mobile.webp",
  alt: "Neuvago app guided session screen for mobile app layouts.",
} satisfies HomepageImage;

const howItWorksDesktop = {
  src: "/images/neuvago/launch/routine-evening-desktop.webp",
  alt: "Neuvago device, guided app, and simple routine cards explaining how the system works.",
} satisfies HomepageImage;

const howItWorksMobile = {
  src: "/images/neuvago/launch/routine-evening-mobile.webp",
  alt: "Neuvago device, guided app, and routine cards for mobile how-it-works layouts.",
} satisfies HomepageImage;

const researchEvidenceDesktop = {
  src: "/images/neuvago/research-hub-evidence-desktop.webp",
  alt: "Neuvago device beside abstract research cards and evidence visuals.",
} satisfies HomepageImage;

const morningResetDesktop = {
  src: "/images/neuvago/launch/product-lifestyle-card.webp",
  alt: "Neuvago device and guided app arranged in a calm morning reset routine.",
} satisfies HomepageImage;

const stressPauseDesktop = {
  src: "/images/neuvago/launch/product-detail-left-desktop.webp",
  alt: "Neuvago device and guided app arranged for a calm daytime pause routine.",
} satisfies HomepageImage;

const eveningWindDownDesktop = {
  src: "/images/neuvago/launch/routine-evening-desktop.webp",
  alt: "Neuvago device and guided app resting beside a warm evening wind-down routine.",
} satisfies HomepageImage;

const finalCtaDesktop = {
  src: "/images/neuvago/launch/final-cta-desktop.webp",
  alt: "Neuvago device and guided app shown softly on the right with open space for a call to action.",
} satisfies HomepageImage;

export const homepageContent = {
  hero: {
    visible: true,
    eyebrow: "Neuvago",
    title: "A calmer way to return.",
    description:
      "Neuvago combines a non-invasive vagus nerve stimulator with guided app sessions for short, repeatable nervous system regulation routines.",
    primaryCta: {
      label: "View product",
      href: "/product",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies HomepageCta,
    desktopImage: homepageHeroDesktop,
    mobileImage: homepageHeroMobile,
    proofLine: ["Non-invasive", "App-guided", "Research-informed"],
    mediaNote: "Video-ready hero slot. Uses a cinematic still until the ambient loop is ready.",
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
    desktopImage: HomepageImage;
    mobileImage: HomepageImage;
    proofLine: string[];
    mediaNote: string;
  },

  proofStrip: {
    visible: true,
    items: [
      "Non-invasive",
      "App-guided",
      "Research-informed",
      "Designed for daily routines",
    ],
  } satisfies HomepageSectionVisibility & {
    items: string[];
  },

  systemReveal: {
    visible: true,
    eyebrow: "The Neuvago system",
    title: "Device, guidance, and routine — designed to work as one.",
    description:
      "Neuvago is not just a device or just an app. It is a quiet system built around a physical starting point, guided sessions, and a rhythm you can return to in real life.",
    image: productHeroDesktop,
    items: [
      {
        eyebrow: "Device",
        title: "A calm physical anchor",
        description:
          "The handheld device gives the routine a tangible starting point — simple, considered, and easy to keep nearby.",
        href: "/product",
      },
      {
        eyebrow: "Guidance",
        title: "Sessions that make the next step clear",
        description:
          "The app gives structure to the moment: choose a session, follow the rhythm, and return without guessing.",
        href: "/app",
      },
      {
        eyebrow: "Routine",
        title: "Built for repeatability",
        description:
          "The value is not one intense session. It is a calmer pattern you can come back to over time.",
        href: "/how-it-works",
      },
    ] satisfies HomepageVisualPanel[],
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    items: HomepageVisualPanel[];
  },

  ritualSequence: {
    visible: true,
    eyebrow: "The ritual",
    title: "Simple enough to begin. Structured enough to return to.",
    description:
      "The experience is intentionally quiet: place the device, start a guided session, and let the app help turn the moment into a repeatable routine.",
    desktopImage: howItWorksDesktop,
    mobileImage: howItWorksMobile,
    steps: [
      {
        title: "Place",
        description:
          "Begin with a clear physical starting point and a calm setup that does not feel clinical.",
      },
      {
        title: "Start",
        description:
          "Choose a guided session in the app and follow a simple, contained rhythm.",
      },
      {
        title: "Return",
        description:
          "Use the same structure again over time, so regulation feels easier to come back to.",
      },
    ] satisfies HomepageStep[],
    cta: {
      label: "See how it works",
      href: "/how-it-works",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    desktopImage: HomepageImage;
    mobileImage: HomepageImage;
    steps: HomepageStep[];
    cta: HomepageCta;
  },

  appGuidance: {
    visible: true,
    eyebrow: "Guided by the app",
    title: "The app turns a session into something you can follow.",
    description:
      "Neuvago is designed to remove the uncertainty around what to do next. Sessions, pathways, and gentle progress cues help the experience feel guided rather than improvised.",
    image: appHeroDesktop,
    mobileImage: appHeroMobile,
    items: [
      {
        title: "Session guidance",
        description:
          "Choose a session for the moment — reset, unwind, or return to a calmer rhythm.",
      },
      {
        title: "A library that stays quiet",
        description:
          "Guidance is organized without turning the app into a noisy dashboard.",
      },
      {
        title: "Progress without pressure",
        description:
          "The goal is continuity, not performance. More rhythm, less intensity.",
      },
    ] satisfies HomepageCard[],
    cta: {
      label: "Explore the app",
      href: "/app",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    mobileImage: HomepageImage;
    items: HomepageCard[];
    cta: HomepageCta;
  },

  researchBoundary: {
    visible: true,
    eyebrow: "Research and boundaries",
    title: "Research-informed, not claim-driven.",
    description:
      "Neuvago sits within a broader research conversation around vagus nerve stimulation, autonomic regulation, HRV, stress, and recovery. The site separates research context from product claims, and keeps intended-use boundaries visible.",
    image: researchEvidenceDesktop,
    points: [
      {
        title: "What research can help explain",
        description:
          "The vagus nerve and autonomic regulation are relevant frameworks for understanding stress, recovery, and downshifting.",
      },
      {
        title: "What research does not prove",
        description:
          "Evidence from a field does not automatically become a claim about a specific wellness product or routine.",
      },
      {
        title: "How Neuvago stays responsible",
        description:
          "Neuvago is not positioned as a medical treatment, diagnostic tool, or replacement for professional care.",
      },
    ] satisfies HomepageCard[],
    primaryCta: {
      label: "Explore research",
      href: "/research",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "Review intended use",
      href: "/legal/intended-use",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    points: HomepageCard[];
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
  },

  everydayPathways: {
    visible: true,
    eyebrow: "Everyday pathways",
    title: "Three moments where a calmer routine can begin.",
    description:
      "Neuvago is designed for real life: a short reset before the day, a calmer pause during stress, or a gentler wind-down at night.",
    items: [
      {
        eyebrow: "Morning",
        title: "Morning reset",
        description:
          "Start with a short guided routine before the day becomes noisy.",
        href: "/app",
        image: morningResetDesktop,
      },
      {
        eyebrow: "Daytime",
        title: "Workday pause",
        description:
          "Create a calmer transition when stress feels like it is staying switched on.",
        href: "/conditions/stress",
        image: stressPauseDesktop,
      },
      {
        eyebrow: "Evening",
        title: "Evening wind-down",
        description:
          "Use a softer rhythm to help the body move toward rest and recovery.",
        href: "/conditions/sleep",
        image: eveningWindDownDesktop,
      },
    ] satisfies HomepageVisualPanel[],
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    items: HomepageVisualPanel[];
  },

  finalCta: {
    visible: true,
    title: "Build a calmer regulation routine.",
    description:
      "Explore how Neuvago brings together a non-invasive device, guided sessions, and research-informed education into one calm daily system.",
    primaryCta: {
      label: "View product",
      href: "/product",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies HomepageCta,
    signedInCta: {
      label: "Continue",
      href: "/continue",
    } satisfies HomepageCta,
    backgroundImage: finalCtaDesktop,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
    signedInCta: HomepageCta;
    backgroundImage: HomepageImage;
  },

  /**
   * Legacy homepage modules retained so older DB-backed content remains type-compatible.
   * P4.1 homepage rendering uses the premium modules above instead of these denser grids.
   */
  whatIsNeuvago: {
    visible: false,
    title: "One connected system for calmer daily regulation.",
    description:
      "Neuvago brings together a non-invasive device and a guided app experience so support feels clearer, more structured, and easier to return to over time.",
    bullets: [
      "One connected device + app system",
      "Guided sessions and routines for daily life",
      "Designed for stress, recovery, and evening wind-down",
    ],
    image: productHeroDesktop,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    bullets: string[];
    image: HomepageImage;
  },

  whyPeopleComeToNeuvago: {
    visible: false,
    title: "What people come to Neuvago for",
    description:
      "People rarely start with a technical goal. They usually want to feel less stuck in stress, wind down more easily, and build a steadier rhythm they can return to.",
    cards: [
      {
        title: "Feel less stuck in stress",
        description:
          "Support a gentler shift out of high activation and into a more settled state.",
      },
      {
        title: "Recover more easily",
        description:
          "Create more space to reset after demanding days and return to a steadier baseline.",
      },
      {
        title: "Wind down at night",
        description:
          "Support a calmer evening transition and a smoother path into rest.",
      },
      {
        title: "Build daily balance",
        description:
          "Create a more repeatable rhythm around regulation, support, and consistency.",
      },
    ] satisfies HomepageCard[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    cards: HomepageCard[];
  },

  appDeviceEcosystem: {
    visible: false,
    title: "Why the device and app work better together.",
    description:
      "Neuvago is designed as one connected system. The device creates a physical entry point, while the app adds guidance, structure, and continuity over time.",
    features: [
      {
        title: "The device creates the entry point",
        description:
          "A calm physical starting point that makes the experience feel tangible, grounded, and easier to begin.",
      },
      {
        title: "The app adds guidance and continuity",
        description:
          "Sessions, routines, and structure make it easier to know what to do next and easier to come back over time.",
      },
      {
        title: "Together, the system feels more complete",
        description:
          "The physical layer and the guided layer support each other to create a calmer, clearer, and more repeatable daily experience.",
      },
    ] satisfies HomepageFeatureItem[],
    image: appHeroDesktop,
    supportingImages: [appHeroDesktop, howItWorksDesktop],
    cta: {
      label: "Explore the app",
      href: "/app",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    features: HomepageFeatureItem[];
    image: HomepageImage;
    supportingImages: HomepageImage[];
    cta: HomepageCta;
  },

  howItWorks: {
    visible: false,
    title: "A simple way to understand how Neuvago works",
    description:
      "Think of Neuvago as a calm three-part rhythm: begin with the device, follow the guidance in the app, and return to it consistently over time.",
    steps: [
      {
        title: "Place the device",
        description:
          "Begin with the device as the physical starting point for the experience.",
        image: productHeroMobile,
      },
      {
        title: "Start a session in the app",
        description:
          "Use the app to choose guidance that fits the moment, whether you want calm, recovery, or evening wind-down.",
        image: appHeroMobile,
      },
      {
        title: "Return to it over time",
        description:
          "Repeat it in ways that fit real life so the system becomes easier to return to and more useful over time.",
        image: howItWorksMobile,
      },
    ] satisfies HomepageStep[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    steps: HomepageStep[];
  },

  whyNeuvago: {
    visible: false,
    title: "Why Neuvago feels different",
    description:
      "Neuvago is designed to feel gentler, calmer, and easier to live with. The aim is not intensity or complexity, but a more supportive and repeatable experience.",
    cards: [
      {
        title: "Gentle by design",
        description:
          "Built to feel calm and supportive rather than intense or overwhelming.",
      },
      {
        title: "Made for real routines",
        description:
          "Designed to fit naturally into daily life, not only ideal moments.",
      },
      {
        title: "Device and app together",
        description:
          "A connected experience that combines physical support with guided structure.",
      },
      {
        title: "Premium, calm experience",
        description:
          "Soft visual language, simple flows, and a more grounded way to engage.",
      },
      {
        title: "Built for consistency",
        description:
          "Designed to be something you can return to again and again, not just try once.",
      },
    ] satisfies HomepageCard[],
    detailImage: productHeroDesktop,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    cards: HomepageCard[];
    detailImage: HomepageImage;
  },

  trustResearch: {
    visible: false,
    title: "Grounded in research, made for everyday life",
    description:
      "Neuvago is built within a broader knowledge universe around nervous system regulation, vagus nerve stimulation, recovery, and stress physiology. You can explore the research layer if you want to go deeper.",
    links: [
      {
        title: "Vagus nerve stimulation",
        description:
          "Explore one of the central ideas behind Neuvago’s approach.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Heart rate variability",
        description:
          "Understand why HRV is often discussed in relation to regulation and recovery.",
        href: "/research/topics/heart-rate-variability",
      },
      {
        title: "Nervous system regulation",
        description:
          "Learn more about what regulation means in everyday life.",
        href: "/learn/nervous-system-regulation",
      },
      {
        title: "Stress physiology",
        description:
          "Explore how stress shows up in the body and why downregulation matters.",
        href: "/learn/why-your-body-feels-stuck-in-stress",
      },
    ] satisfies HomepageLinkCard[],
    primaryCta: {
      label: "Explore research",
      href: "/research",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "Visit Learn",
      href: "/learn",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    links: HomepageLinkCard[];
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
  },

  socialProof: {
    visible: false,
    title: "Designed for calmer routines",
    description:
      "This section can start as a soft placeholder in V1 and later be replaced with real testimonials, practitioner quotes, or early user feedback.",
    quotes: [
      {
        quote:
          "A calmer, more supportive way to return when the day feels activated.",
        name: "Placeholder",
        role: "Future user perspective",
      },
    ] satisfies HomepageQuote[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    quotes: HomepageQuote[];
  },

  inRealLife: {
    visible: false,
    title: "Neuvago in real life",
    description:
      "Neuvago is designed to fit into a slower, more intentional rhythm — whether you use it to reset during the day, recover after stress, or wind down in the evening.",
    images: [
      {
        title: "Evening wind-down",
        description: "A quiet evening routine with Neuvago nearby.",
        image: eveningWindDownDesktop,
      },
    ] satisfies HomepageImageCard[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    images: HomepageImageCard[];
  },

  featuredLearning: {
    visible: false,
    title: "Explore the ideas behind calmer regulation",
    description:
      "Go deeper into the language, concepts, and everyday patterns connected to stress, recovery, and nervous system balance.",
    items: [
      {
        title: "What is the vagus nerve?",
        description:
          "A practical introduction to one of the body’s most important communication pathways.",
        href: "/learn/vagus-nerve",
      },
      {
        title: "How to calm your nervous system",
        description:
          "Simple ways to think about downregulation in daily life.",
        href: "/learn/how-to-calm-your-nervous-system",
      },
      {
        title: "Signs of a dysregulated nervous system",
        description:
          "Common patterns people notice when stress starts to feel stuck in the body.",
        href: "/learn/signs-of-a-dysregulated-nervous-system",
      },
    ] satisfies HomepageLinkCard[],
    cta: {
      label: "Visit Learn",
      href: "/learn",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    items: HomepageLinkCard[];
    cta: HomepageCta;
  },

  conditionsOverview: {
    visible: false,
    title: "Explore common areas of concern",
    description:
      "Neuvago is being built within a broader knowledge universe that connects nervous system regulation to common real-life challenges.",
    items: [
      {
        title: "Stress",
        description:
          "Explore how stress builds in the body and why regulation matters.",
        href: "/conditions/stress",
      },
      {
        title: "Sleep",
        description:
          "Learn why winding down can feel difficult and how routines may help.",
        href: "/conditions/sleep",
      },
      {
        title: "Anxiety",
        description:
          "See how regulation, safety, and nervous system patterns can overlap.",
        href: "/conditions/anxiety",
      },
      {
        title: "Burnout",
        description:
          "Understand the role recovery and nervous system load can play over time.",
        href: "/conditions/burnout",
      },
    ] satisfies HomepageLinkCard[],
    cta: {
      label: "Explore conditions",
      href: "/conditions",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    items: HomepageLinkCard[];
    cta: HomepageCta;
  },
} as const;
