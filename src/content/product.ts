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
    eyebrow: "Neuvago device + app",
    title: "A calmer routine with device and app.",
    description:
      "Neuvago pairs a non-invasive VNS device with guided app sessions for short, repeatable wellness routines around stress, recovery, sleep preparation, and daily regulation.",
    primaryCta: {
      label: "View launch options",
      href: "#buy",
    } satisfies ProductCta,
    secondaryCta: {
      label: "See how it works",
      href: "/how-it-works",
    } satisfies ProductCta,
    desktopImage: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "Close-up of the Neuvago device materials and controls in a premium product composition.",
    } satisfies ProductImage,
    mobileImage: {
      src: "/images/neuvago/launch/product-lifestyle-card.webp",
      alt: "Front and angled view of the Neuvago device for mobile product hero layout.",
    } satisfies ProductImage,
    proofLine: ["Device + app", "Guided sessions", "Wellness boundaries"],
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
    title: "A physical anchor for a calmer regulation system",
    description:
      "At the center of Neuvago is a non-invasive vagus nerve stimulation device designed to feel calm, clear, and easy to live with. The app adds guidance, session structure, and continuity, while the product experience stays grounded in gentle daily wellness support rather than medical treatment claims.",
    bullets: [
      "A non-invasive vagus nerve stimulator designed for calmer daily support",
      "Made to feel premium, gentle, and easy to use",
      "Connected to an app that adds placement guidance, session rhythm, and continuity",
    ],
    image: {
      src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
      alt: "Neuvago device, guided app, and simple routine cards explaining the connected product system.",
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
    title: "Designed to feel clear before you buy.",
    description:
      "Neuvago is built as a connected device-and-app experience: calm to start, simple to understand, and clear about what it is — and what it is not.",
    cards: [
      {
        title: "Comfort before intensity",
        description:
          "Built to feel calm and supportive, not intense or hard to adjust.",
      },
      {
        title: "Made for real routines",
        description:
          "Designed for daily life, not only ideal moments.",
      },
      {
        title: "Device and app together",
        description:
          "A connected routine with a tactile device and guided app sessions.",
      },
      {
        title: "Premium, calm experience",
        description:
          "Soft visual language, simple flows, and a more grounded way to engage.",
      },
      {
        title: "Boundaries stay visible",
        description:
          "Intended use, safety guidance, and wellness boundaries stay close to the product.",
      },
    ] satisfies ProductCard[],
    detailImage: {
      src: "/images/neuvago/launch/product-lifestyle-card.webp",
      alt: "Neuvago device and app shown in a calm everyday product setting.",
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
      src: "/images/neuvago/launch/product-phone-app.webp",
      alt: "Neuvago support and guidance screen shown as the app layer that completes the product experience.",
    } satisfies ProductImage,
    supportingImages: [
      {
        src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
        alt: "Neuvago app home screen mockup.",
      },
      {
        src: "/images/neuvago/launch/product-app-pairing-mobile.webp",
        alt: "Neuvago app session screen mockup.",
      },
      {
        src: "/images/neuvago/launch/routine-evening-mobile.webp",
        alt: "Neuvago routine cards showing place device, start session, and return over time.",
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
    title: "Built for the moments you actually return to",
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
      src: "/images/neuvago/launch/product-detail-left-desktop.webp",
      alt: "Neuvago device and guided app arranged for a calm daytime pause routine.",
    } satisfies ProductImage,
    secondaryImage: {
      src: "/images/neuvago/launch/routine-evening-desktop.webp",
      alt: "Neuvago device and guided app resting beside a warm evening wind-down routine.",
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
      "You do not need a complicated protocol to understand the product. In practice, Neuvago is designed to feel simple: place the device comfortably, follow the guidance in the app, and return to it over time.",
    steps: [
      {
        title: "Place the device comfortably",
        description:
          "Begin with the device as the physical starting point, with comfort and clear placement guidance treated as part of the experience.",
        image: {
          src: "/images/neuvago/launch/product-lifestyle-card.webp",
          alt: "Front and angled view of the Neuvago device.",
        },
      },
      {
        title: "Start a guided session in the app",
        description:
          "Use the app to choose guidance that fits the moment, while keeping session length, rhythm, and intensity easy to understand.",
        image: {
          src: "/images/neuvago/launch/product-phone-app.webp",
          alt: "Neuvago device paired with the app on a smartphone.",
        },
      },
      {
        title: "Return to it over time",
        description:
          "Repeat it in ways that fit real life so the system becomes easier to return to and more useful over time.",
        image: {
          src: "/images/neuvago/launch/routine-evening-desktop.webp",
          alt: "Neuvago device and guided app in a warm evening routine.",
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
    title: "Research context, safety boundaries, and everyday use",
    description:
      "Neuvago is built within a broader knowledge universe around nervous system regulation, non-invasive vagus nerve stimulation, safety and tolerability, recovery, and stress physiology. You can explore the research layer if you want to go deeper, while product claims stay grounded in wellness support.",
    links: [
      {
        title: "Non-invasive VNS",
        description:
          "Understand the category Neuvago sits within: external stimulation, guidance, and clear wellness boundaries.",
        href: "/learn/non-invasive-vagus-nerve-stimulation",
      },
      {
        title: "Transcutaneous VNS",
        description:
          "Learn what tVNS means, how it relates to taVNS and non-invasive VNS, and why method details matter.",
        href: "/learn/transcutaneous-vagus-nerve-stimulation",
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
          "Review side effects, tolerability, contraindication awareness, and the safety research context behind responsible non-invasive VNS positioning.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Auricular VNS",
        description:
          "Learn how ear-based VNS, taVNS, comfort, placement, and responsible wellness language fit together.",
        href: "/learn/auricular-vagus-nerve-stimulation",
      },
      {
        title: "Intended use",
        description:
          "Review the product boundaries that explain what Neuvago is designed to support — and what it is not intended to diagnose, treat, cure, or replace.",
        href: "/legal/intended-use",
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
        question: "Is Neuvago a medical treatment?",
        answer:
          "No. Neuvago is positioned as a wellness product designed to support calmer daily regulation and guided routines. It is not described as a treatment, diagnostic tool, cure, or replacement for professional medical care.",
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
        question: "Is stronger stimulation always better?",
        answer:
          "No. The experience is intentionally designed around comfort, guidance, and consistency rather than chasing the strongest possible sensation.",
      },
      {
        question: "Who should ask a clinician before use?",
        answer:
          "People with implanted electronic devices, heart rhythm concerns, pregnancy-related questions, medical conditions, or active treatment plans should speak with a qualified clinician before using any stimulation product.",
      },
      {
        question: "Can I explore the knowledge side before going deeper?",
        answer:
          "Yes. You can move between the product, app, learn, conditions, research, intended-use, and safety pages depending on what you want to understand first.",
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
      label: "View product options",
      href: "#buy",
    } satisfies ProductCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies ProductCta,
    backgroundImage: {
      src: "/images/neuvago/launch/final-cta-desktop.webp",
      alt: "Neuvago device and guided app shown softly on the right with open space for a call to action.",
    } satisfies ProductImage,
  } satisfies ProductSectionVisibility & {
    title: string;
    description: string;
    primaryCta: ProductCta;
    secondaryCta: ProductCta;
    backgroundImage: ProductImage;
  },
} as const;
