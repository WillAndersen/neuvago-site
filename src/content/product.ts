export type ProductCta = {
  label: string;
  href: string;
};

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductSectionVisibility = {
  visible: boolean;
};

export type ProductCard = {
  title: string;
  description: string;
};

export type ProductStep = {
  title: string;
  description: string;
  image?: ProductImage;
};

export type ProductLinkCard = {
  title: string;
  description: string;
  href: string;
};

export type ProductFaqItem = {
  question: string;
  answer: string;
};

export type ProductFeatureItem = {
  title: string;
  description: string;
};

export type ProductImageCard = {
  title: string;
  description?: string;
  image: ProductImage;
};

export const productPageContent = {
  hero: {
    visible: true,
    eyebrow: "Product",
    title: "A non-invasive vagus nerve stimulator designed for calmer daily regulation.",
    description:
      "Neuvago pairs a premium non-invasive vagus nerve stimulator with a guided app experience designed to support calmer routines around stress, recovery, sleep, and everyday nervous system balance.",
    primaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies ProductCta,
    secondaryCta: {
      label: "Explore the app",
      href: "/app",
    } satisfies ProductCta,
    desktopImage: {
      src: "/images/home/hero-device-app-master.png",
      alt: "Neuvago device and app shown together in a premium editorial composition.",
    } satisfies ProductImage,
    mobileImage: {
      src: "/images/home/hero-device-app-mobile.png",
      alt: "Neuvago device and app shown together for mobile product hero layout.",
    } satisfies ProductImage,
    proofLine: ["Non-invasive", "Premium by design", "Built for daily use"],
  } satisfies ProductSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: ProductCta;
    secondaryCta: ProductCta;
    desktopImage: ProductImage;
    mobileImage: ProductImage;
    proofLine: string[];
  },

  whatIsNeuvago: {
    visible: true,
    title: "A premium device at the center of a connected system",
    description:
      "At the center of Neuvago is a non-invasive device designed to feel calm, clear, and easy to live with. The app adds guidance and continuity, but the product starts with a physical experience that feels simple to begin and simple to return to.",
    bullets: [
      "A non-invasive device designed for calmer daily support",
      "Made to feel premium, gentle, and easy to use",
      "Connected to an app that adds guidance and continuity",
    ],
    image: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app displayed together as one connected system.",
    } satisfies ProductImage,
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    bullets: string[];
    image: ProductImage;
  },

  whyItFeelsDifferent: {
    visible: true,
    eyebrow: "Why it feels different",
    title: "Designed to feel gentler, calmer, and easier to live with.",
    description:
      "From form factor to flow, Neuvago is built to feel supportive rather than overwhelming. The goal is not intensity or complexity, but a calmer physical product experience that fits naturally into everyday life.",
    cards: [
      {
        title: "Gentle by design",
        description:
          "Built to feel calm and supportive rather than intense or overstimulating.",
      },
      {
        title: "Made for real routines",
        description:
          "Designed to fit daily life, not only ideal moments.",
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
          "Designed to be something you can return to over time, not just try once.",
      },
    ] satisfies ProductCard[],
    detailImage: {
      src: "/images/home/device-close-detail-material.png",
      alt: "Close-up details of the Neuvago device material and finish.",
    } satisfies ProductImage,
  } satisfies ProductSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    cards: ProductCard[];
    detailImage: ProductImage;
  },

  deviceAppTogether: {
    visible: true,
    title: "The app completes the product experience",
    description:
      "The device can stand on its own as a physical starting point, but the app makes the overall system clearer and easier to return to through sessions, routines, and continuity over time.",
    features: [
      {
        title: "The device gives the experience a physical center",
        description:
          "A calm, tangible entry point that feels more grounded than content alone.",
      },
      {
        title: "The app adds structure and guidance",
        description:
          "Sessions and routines make it easier to know what to do next and easier to stay consistent.",
      },
      {
        title: "Together, the system feels more complete",
        description:
          "The device and app support each other to create a clearer, calmer, and more premium daily experience.",
      },
    ] satisfies ProductFeatureItem[],
    image: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and phone shown together in a warm premium composition.",
    } satisfies ProductImage,
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
    ] satisfies ProductImage[],
    cta: {
      label: "Explore the app",
      href: "/app",
    } satisfies ProductCta,
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    features: ProductFeatureItem[];
    image: ProductImage;
    supportingImages: ProductImage[];
    cta: ProductCta;
  },

  howItFitsIntoLife: {
    visible: true,
    title: "How the product fits into real life",
    description:
      "The value of the product is not only what it is, but how naturally it can fit into calmer daily routines — whether you want a gentler start, a pause during stress, or a more intentional evening wind-down.",
    cards: [
      {
        title: "Morning reset",
        description:
          "Start the day with a calmer entry point and a little more steadiness.",
      },
      {
        title: "Daytime recovery",
        description:
          "Use Neuvago as a quiet pause when stress or activation starts to build.",
      },
      {
        title: "Evening wind-down",
        description:
          "Support a smoother transition out of the day and into rest.",
      },
    ] satisfies ProductCard[],
    image: {
      src: "/images/home/lifestyle-sofa-neuvago.png",
      alt: "A calm real-life moment with Neuvago as part of a quiet routine.",
    } satisfies ProductImage,
    secondaryImage: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a calm product lifestyle setting.",
    } satisfies ProductImage,
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    cards: ProductCard[];
    image: ProductImage;
    secondaryImage: ProductImage;
  },

  howToUse: {
    visible: true,
    title: "A simple three-step routine",
    description:
      "You do not need a complicated protocol to understand the product. In practice, Neuvago is designed to feel simple: start with the device, follow the guidance in the app, and return to it over time.",
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
    ] satisfies ProductStep[],
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    steps: ProductStep[];
  },

  trustBridge: {
    visible: true,
    title: "Grounded in research, made for everyday life",
    description:
      "Neuvago is built within a broader knowledge universe around nervous system regulation, vagus nerve stimulation, recovery, and stress physiology. You can explore the research layer if you want to go deeper.",
    links: [
      {
        title: "Non-invasive VNS",
        description:
          "Understand the category Neuvago sits within: external stimulation, guidance, and clear wellness boundaries.",
        href: "/learn/non-invasive-vagus-nerve-stimulation",
      },
      {
        title: "VNS research",
        description:
          "Explore the broader research topic around implanted, auricular, and non-invasive vagus nerve stimulation.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Safety and tolerability",
        description:
          "Review the safety and tolerability research context behind responsible non-invasive VNS positioning.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Auricular VNS",
        description:
          "Learn how ear-based VNS, taVNS, comfort, placement, and responsible wellness language fit together.",
        href: "/learn/auricular-vagus-nerve-stimulation",
      },
    ] satisfies ProductLinkCard[],
    primaryCta: {
      label: "Explore research",
      href: "/research",
    } satisfies ProductCta,
    secondaryCta: {
      label: "Visit Learn",
      href: "/learn",
    } satisfies ProductCta,
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    links: ProductLinkCard[];
    primaryCta: ProductCta;
    secondaryCta: ProductCta;
  },

  faq: {
    visible: true,
    title: "Practical clarity",
    description:
      "A few simple answers to the questions people often have when they first explore Neuvago.",
    items: [
      {
        question: "Is Neuvago a medical device?",
        answer:
          "Neuvago is positioned as a wellness product designed to support calmer daily regulation and guided routines.",
      },
      {
        question: "Do I need the app?",
        answer:
          "The app is a central part of the experience because it adds guidance, session structure, and continuity over time.",
      },
      {
        question: "Is Neuvago designed for daily use?",
        answer:
          "Yes. Neuvago is designed to feel simple, repeatable, and realistic to return to as part of everyday life.",
      },
      {
        question: "Is this built around intensity or overstimulation?",
        answer:
          "No. The experience is intentionally designed to feel gentle, calm, and supportive rather than overwhelming.",
      },
      {
        question: "Can I explore the knowledge side before going deeper?",
        answer:
          "Yes. You can move between the product, app, learn, conditions, and research layers depending on what you want to understand first.",
      },
    ] satisfies ProductFaqItem[],
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    items: ProductFaqItem[];
  },

  finalCta: {
    visible: true,
    title: "See how the full Neuvago system works",
    description:
      "Explore how the device, app, and calmer daily routine fit together — then continue into the full how-it-works experience or the guided app layer.",
    primaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies ProductCta,
    secondaryCta: {
      label: "Explore the app",
      href: "/app",
    } satisfies ProductCta,
    backgroundImage: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a premium warm setting.",
    } satisfies ProductImage,
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    primaryCta: ProductCta;
    secondaryCta: ProductCta;
    backgroundImage: ProductImage;
  },
} as const;
