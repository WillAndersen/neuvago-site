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

export const homepageContent = {
  hero: {
    visible: true,
    eyebrow: "Neuvago",
    title: "Calmer days start with better nervous system regulation.",
    description:
      "Neuvago combines a non-invasive vagus nerve stimulation device with a guided app experience designed to support calmer routines around stress, recovery, sleep, and everyday nervous system balance.",
    primaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies HomepageCta,
    desktopImage: {
      src: "/images/home/hero-device-app-master.png",
      alt: "Neuvago device and app shown together in a warm editorial setting.",
    } satisfies HomepageImage,
    mobileImage: {
      src: "/images/home/hero-device-app-mobile.png",
      alt: "Neuvago device and app shown together for mobile hero layout.",
    } satisfies HomepageImage,
    proofLine: ["Non-invasive", "App-guided", "Built for daily use"],
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
    desktopImage: HomepageImage;
    mobileImage: HomepageImage;
    proofLine: string[];
  },

  proofStrip: {
    visible: true,
    items: [
      "Science-informed",
      "Non-invasive",
      "App-guided",
      "Designed for daily regulation",
      "Built around calm, not intensity",
    ],
  } satisfies HomepageSectionVisibility & {
    items: string[];
  },

  whatIsNeuvago: {
    visible: true,
    title: "One connected system for calmer daily regulation.",
    description:
      "Neuvago brings together a non-invasive device and a guided app experience so support feels clearer, more structured, and easier to return to over time.",
    bullets: [
      "One connected device + app system",
      "Guided sessions and routines for daily life",
      "Designed for stress, recovery, and evening wind-down",
    ],
    image: {
      src: "/images/home/device-close-detail-material.png",
      alt: "Close-up details of the Neuvago device material and finish.",
    } satisfies HomepageImage,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    bullets: string[];
    image: HomepageImage;
  },

  whyPeopleComeToNeuvago: {
    visible: true,
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
    visible: true,
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
    image: {
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago app library screen shown as the guided layer of the connected system.",
    } satisfies HomepageImage,
    supportingImages: [
      {
        src: "/images/home/app-mockup-home.png",
        alt: "Neuvago app home screen mockup.",
      },
      {
        src: "/images/home/app-mockup-session.png",
        alt: "Neuvago app session screen mockup.",
      },
      {
        src: "/images/home/app-mockup-progress.png",
        alt: "Neuvago app progress screen mockup.",
      },
      {
        src: "/images/home/app-mockup-library.png",
        alt: "Neuvago app library screen mockup.",
      },
    ] satisfies HomepageImage[],
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
    visible: true,
    title: "A simple way to understand how Neuvago works",
    description:
      "Think of Neuvago as a calm three-part rhythm: begin with the device, follow the guidance in the app, and return to it consistently over time.",
    steps: [
      {
        title: "Place the device",
        description:
          "Begin with the device as the physical starting point for the experience.",
        image: {
          src: "/images/home/device-cutout-front-angle.png",
          alt: "Front and angled view of the Neuvago device.",
        },
      },
      {
        title: "Start a session in the app",
        description:
          "Use the app to choose guidance that fits the moment, whether you want calm, recovery, or evening wind-down.",
        image: {
          src: "/images/home/app-mockup-session.png",
          alt: "Neuvago session screen shown on a smartphone.",
        },
      },
      {
        title: "Return to it over time",
        description:
          "Repeat it in ways that fit real life so the system becomes easier to return to and more useful over time.",
        image: {
          src: "/images/home/app-mockup-progress.png",
          alt: "Neuvago progress screen showing continued use over time.",
        },
      },
    ] satisfies HomepageStep[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    steps: HomepageStep[];
  },

  whyNeuvago: {
    visible: true,
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
    detailImage: {
      src: "/images/home/device-close-detail-material.png",
      alt: "Close-up details of the Neuvago device material and finish.",
    } satisfies HomepageImage,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    cards: HomepageCard[];
    detailImage: HomepageImage;
  },

  trustResearch: {
    visible: true,
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
          "A calmer, more supportive way to reset when the day feels too activated.",
        name: "Placeholder",
        role: "Future user perspective",
      },
      {
        quote:
          "Guided enough to feel structured, gentle enough to feel easy to return to.",
        name: "Placeholder",
        role: "Future user perspective",
      },
      {
        quote:
          "Built to feel grounded, premium, and realistic for everyday use.",
        name: "Placeholder",
        role: "Future practitioner or user perspective",
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
        title: "Calm product lifestyle",
        description:
          "A soft editorial device and app composition in a home setting.",
        image: {
          src: "/images/home/lifestyle-sofa-neuvago.png",
          alt: "Neuvago shown in a calm home setting for a warmer lifestyle moment.",
        },
      },
      {
        title: "Rest and wind-down",
        description:
          "A calm evening moment with Neuvago as part of a quiet routine.",
        image: {
          src: "/images/home/lifestyle-sofa-neuvago.png",
          alt: "Person resting on a sofa with the Neuvago device nearby.",
        },
      },
    ] satisfies HomepageImageCard[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    images: HomepageImageCard[];
  },

  featuredLearning: {
    visible: true,
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
    visible: true,
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

  finalCta: {
    visible: true,
    title: "Explore Neuvago for calmer daily regulation",
    description:
      "See how Neuvago brings together a calming device, guided sessions, and a more thoughtful way to support stress, recovery, and everyday balance.",
    primaryCta: {
      label: "Explore Neuvago",
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
    backgroundImage: {
      src: "/images/home/lifestyle-sofa-neuvago.png",
      alt: "A calm real-life moment with Neuvago as part of a quiet daily routine.",
    } satisfies HomepageImage,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
    signedInCta: HomepageCta;
    backgroundImage: HomepageImage;
  },
} as const;
