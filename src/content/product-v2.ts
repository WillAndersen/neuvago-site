export type ProductV2Cta = {
  label: string;
  href: string;
};

export type ProductV2Image = {
  src: string;
  alt: string;
};

export type ProductV2Card = {
  title: string;
  description: string;
};

export type ProductV2LinkCard = ProductV2Card & {
  href: string;
};

export type ProductV2Benefit = ProductV2Card & {
  label: string;
};

export type ProductV2FlowItem = ProductV2Card & {
  label: string;
};

export type ProductV2Accordion = {
  title: string;
  description: string;
  items: readonly string[];
  links?: readonly {
    label: string;
    href: string;
  }[];
};

export type ProductV2FaqItem = {
  question: string;
  answer: string;
};

/**
 * Central commerce state for the English Product page.
 *
 * Keep false until checkout, payment, price, delivery, returns and warranty
 * have been tested and approved together.
 */
const purchaseOpen: boolean = false;
const currentPrice: string | null = null;

const purchaseCta: ProductV2Cta = {
  label: purchaseOpen ? "Shop Neuvago" : "View purchase details",
  href: "#buy",
};

export const productV2Content = {
  hero: {
    eyebrow: "Neuvago",
    title: "A non-invasive vagus nerve stimulator designed for everyday use.",
    description:
      "Gentle vagus nerve stimulation designed for relaxation, evening wind-down and everyday recovery routines.",
    technologyDescription:
      "Neuvago uses adjustable electrical stimulation at the outer ear, providing a simple, non-invasive approach to vagus nerve stimulation.",
    primaryCta: purchaseCta,
    secondaryCta: {
      label: "How it works",
      href: "#how-it-works",
    } satisfies ProductV2Cta,
    desktopImage: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "Close-up of the Neuvago device and its physical controls.",
    } satisfies ProductV2Image,
    mobileImage: {
      src: "/images/neuvago/launch/product-hero-mobile.webp",
      alt: "Close-up of the Neuvago device for a mobile product layout.",
    } satisfies ProductV2Image,
    proofLine: [
      "Non-invasive",
      "Adjustable intensity",
      "Four stimulation modes",
    ],
  },

  benefits: {
    eyebrow: "Why Neuvago",
    title: "Designed for the way you want to feel.",
    description:
      "Neuvago is designed to fit into everyday wellness routines, offering a simple, repeatable practice for moments when you want to slow down.",
    image: {
      src: "/images/neuvago/launch/product-lifestyle-card.webp",
      alt: "Neuvago device in a calm home setting for an everyday wellness routine.",
    } satisfies ProductV2Image,
    items: [
      {
        label: "Sleep & wind-down",
        title: "Make space for a quieter evening.",
        description:
          "Designed for evening wind-down and sleep-supportive routines.",
      },
      {
        label: "Stress & calm",
        title: "Create a calmer pause.",
        description:
          "Fit a short routine into demanding or stressful moments.",
      },
      {
        label: "Recovery",
        title: "Build rest into the day.",
        description:
          "Use Neuvago within routines centred on rest and recovery.",
      },
      {
        label: "Relaxation & balance",
        title: "Find a steadier rhythm.",
        description:
          "Create a simple routine for slowing down and finding a calmer rhythm.",
      },
    ] satisfies ProductV2Benefit[],
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "How vagus nerve stimulation works.",
    description:
      "Neuvago uses non-invasive electrical stimulation at the outer ear. This auricular approach is associated with pathways connected to the vagus nerve, an important part of brain–body communication and the autonomic nervous system.",
    image: {
      src: "/images/neuvago/auricular-vns-education-desktop.webp",
      alt: "Neuvago device beside a clean illustration of the outer ear.",
    } satisfies ProductV2Image,
    flow: [
      {
        label: "01",
        title: "Outer ear",
        description:
          "The earpiece electrode is positioned at the outer ear according to the supplied instructions.",
      },
      {
        label: "02",
        title: "Auricular pathways",
        description:
          "Electrical stimulation is applied through an ear-based, non-invasive contact point.",
      },
      {
        label: "03",
        title: "Vagus nerve",
        description:
          "Auricular vagus nerve stimulation is studied in relation to pathways associated with the vagus nerve.",
      },
      {
        label: "04",
        title: "Autonomic nervous system",
        description:
          "The vagus nerve forms part of the wider system involved in brain–body communication and changing physiological states.",
      },
    ] satisfies ProductV2FlowItem[],
    primaryCta: {
      label: "Explore How it Works",
      href: "/how-it-works",
    } satisfies ProductV2Cta,
    secondaryCta: {
      label: "Learn about taVNS",
      href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    } satisfies ProductV2Cta,
  },

  modes: {
    eyebrow: "Four stimulation modes",
    title: "Different modes for different moments.",
    description:
      "Neuvago includes four named stimulation programmes. Detailed guidance for each mode will be available before purchasing opens.",
    items: ["Sleep", "Relax", "Meditation", "Relief"],
    cta: purchaseCta,
  },

  features: {
    eyebrow: "Product experience",
    title: "The Neuvago product experience.",
    description:
      "The most useful product features are the ones that make each routine clear, adjustable and easy to begin.",
    image: {
      src: "/images/neuvago/launch/product-detail-left-desktop.webp",
      alt: "Close product view of the Neuvago device and its physical controls.",
    } satisfies ProductV2Image,
    cards: [
      {
        title: "Adjustable intensity",
        description:
          "Increase or decrease the stimulation gradually to find a comfortable level in line with the supplied guidance.",
      },
      {
        title: "Simple controls",
        description:
          "Manage the session directly using the physical controls on the device.",
      },
      {
        title: "Four stimulation modes",
        description:
          "Choose from four named programmes designed for different routines and moments.",
      },
      {
        title: "Designed for comfort",
        description:
          "A non-invasive, ear-based format designed for simple everyday use.",
      },
    ] satisfies ProductV2Card[],
  },

  useSequence: {
    eyebrow: "Simple to use",
    title: "Position. Choose. Adjust. Begin.",
    description:
      "Use Neuvago in four simple steps. Follow the supplied Quick Start Guide for complete placement, conductive gel, session duration, care and safety information.",
    steps: [
      {
        title: "Position",
        description: "Position the earpiece as shown in the instructions.",
      },
      {
        title: "Choose",
        description: "Select one of the four named stimulation modes.",
      },
      {
        title: "Adjust",
        description:
          "Increase the intensity gradually to a comfortable level.",
      },
      {
        title: "Begin",
        description:
          "Start the session and follow the supplied product guidance.",
      },
    ] satisfies ProductV2Card[],
    cta: {
      label: "See complete use guidance",
      href: "/how-it-works",
    } satisfies ProductV2Cta,
  },

  research: {
    eyebrow: "Research",
    title: "Scientific context for an auricular approach.",
    description:
      "Neuvago uses an auricular, ear-based approach to non-invasive vagus nerve stimulation. The most closely related research category is transcutaneous auricular vagus nerve stimulation, or taVNS.",
    boundary:
      "Research on taVNS provides scientific context for the technology category. It is not clinical evidence for the Neuvago device itself.",
    links: [
      {
        title: "taVNS research",
        description:
          "Explore auricular stimulation, protocol variables, target engagement and interpretation.",
        href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
      },
      {
        title: "Autonomic regulation",
        description:
          "Learn how sympathetic and parasympathetic activity are studied within autonomic regulation.",
        href: "/research/topics/autonomic-regulation",
      },
      {
        title: "Safety and tolerability",
        description:
          "Review adverse-event, tolerability and responsible-use context across human research.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Scientific Studies Library",
        description:
          "Browse the complete collection of study summaries and foundational research.",
        href: "/research/studies",
      },
    ] satisfies ProductV2LinkCard[],
    primaryCta: {
      label: "Explore the Research",
      href: "/research",
    } satisfies ProductV2Cta,
    secondaryCta: {
      label: "Review intended use",
      href: "/legal/intended-use",
    } satisfies ProductV2Cta,
  },

  buyBox: {
    gallery: [
      {
        src: "/images/neuvago/launch/product-gallery-front.webp",
        alt: "Neuvago device viewed from the front.",
      },
      {
        src: "/images/neuvago/launch/product-gallery-angle.webp",
        alt: "Neuvago device viewed from an angle.",
      },
      {
        src: "/images/neuvago/launch/product-gallery-detail.webp",
        alt: "Close detail of the Neuvago device controls and finish.",
      },
    ] satisfies ProductV2Image[],
    eyebrow: "Purchase Neuvago",
    productName: "Neuvago",
    productDescription: "Non-invasive vagus nerve stimulator.",
    badge: "General wellness",
    price: currentPrice,
    purchaseOpen,
    purchaseTitle: purchaseOpen ? "Ready to order" : "Purchase details",
    launchStatus: purchaseOpen ? "Available" : "Prelaunch",
    purchaseDescription: purchaseOpen
      ? "Review the included items and continue to secure Shopify checkout."
      : "Checkout is not yet open. Confirmed price, availability, delivery, returns and warranty information will appear here before purchasing opens.",
    checkoutLabel: "Shop Neuvago",
    checkoutDisabledLabel: "Checkout opens soon",
    checkoutLoadingLabel: "Opening checkout…",
    prelaunchCta: {
      label: "How Neuvago works",
      href: "#how-it-works",
    } satisfies ProductV2Cta,
    intendedUseCta: {
      label: "Review intended use",
      href: "/legal/intended-use",
    } satisfies ProductV2Cta,
    includedItems: [
      "Neuvago device",
      "Earpiece",
      "Conductive gel",
      "Charging cable",
      "Quick Start Guide",
      "One year of Neuvago App access",
    ],
    trustLinks: [
      {
        label: "Terms",
        href: "/legal/terms-of-service",
      },
      {
        label: "Privacy",
        href: "/legal/privacy-policy",
      },
    ],
  },

  productDetails: {
    eyebrow: "Product details",
    title: "Details when you want them.",
    description:
      "Review device features, safety information and package contents.",
    accordions: [
      {
        title: "Device Features",
        description:
          "A concise overview of confirmed Neuvago device features.",
        items: [
          "Rechargeable handheld device",
          "Physical controls and on-device display",
          "Adjustable stimulation intensity",
          "Four named stimulation modes",
          "Charging cable included",
        ],
      },
      {
        title: "Safety & Suitability",
        description:
          "Review the supplied safety information before use.",
        items: [
          "Read the instructions, contraindications and warnings supplied with the product",
          "Use the earpiece and conductive gel only as described in the instructions",
          "Contact a qualified healthcare professional if you are uncertain whether the device is suitable for you",
        ],
        links: [
          {
            label: "Intended use",
            href: "/legal/intended-use",
          },
          {
            label: "Safety and tolerability research",
            href: "/research/topics/safety-and-tolerability",
          },
          {
            label: "Support",
            href: "/support",
          },
        ],
      },
      {
        title: "What’s Included",
        description:
          "The planned package contents for Neuvago.",
        items: [
          "Neuvago device",
          "Earpiece",
          "Conductive gel",
          "Charging cable",
          "Quick Start Guide",
          "One year of Neuvago App access",
        ],
      },
    ] satisfies ProductV2Accordion[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Practical answers before purchase.",
    description:
      "The most important questions about the device, its intended use, modes, package contents and research context.",
    items: [
      {
        question: "What is Neuvago?",
        answer:
          "Neuvago is a non-invasive vagus nerve stimulation device designed for general wellness and simple, repeatable everyday routines.",
      },
      {
        question: "What is Neuvago designed for?",
        answer:
          "Neuvago is designed for general wellness routines around relaxation, evening wind-down and recovery. It is not intended to diagnose, treat, cure or prevent disease.",
      },
      {
        question: "Where is stimulation applied?",
        answer:
          "Stimulation is applied through an earpiece electrode positioned at the outer ear according to the placement guidance supplied with the product.",
      },
      {
        question: "What are the four stimulation modes?",
        answer:
          "Neuvago includes four named modes: Sleep, Relax, Meditation and Relief. Detailed guidance for each mode will be available before purchasing opens.",
      },
      {
        question: "What is included with Neuvago?",
        answer:
          "The planned package includes the Neuvago device, earpiece, conductive gel, charging cable, Quick Start Guide and one year of Neuvago App access. Final package details will be confirmed before checkout opens.",
      },
      {
        question: "Is one year of the Neuvago App included?",
        answer:
          "Yes. Every Neuvago device includes one year of access to the Neuvago App. Activation, renewal, regional availability and pricing after the included period will be explained before purchase.",
      },
      {
        question: "What research exists on taVNS?",
        answer:
          "A growing research field is exploring transcutaneous auricular vagus nerve stimulation across areas including autonomic regulation, brain pathways, safety and tolerability. External taVNS research provides scientific context and is not clinical evidence for the Neuvago device itself.",
      },
      {
        question: "What safety information should I review?",
        answer:
          "Read the instructions, contraindications and safety information supplied with the product before use. Contact a qualified healthcare professional if you are uncertain whether the device is suitable for you.",
      },
    ] satisfies ProductV2FaqItem[],
  },

  finalCta: {
    eyebrow: "Neuvago",
    title: purchaseOpen ? "Shop Neuvago." : "Explore Neuvago.",
    description: purchaseOpen
      ? "Review the device, what is included and continue to secure checkout."
      : "Review what is included, how the device works and the purchase information available before checkout opens.",
    primaryCta: purchaseCta,
    secondaryCta: {
      label: "How it works",
      href: "#how-it-works",
    } satisfies ProductV2Cta,
    desktopImage: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "Neuvago device standing alone in a calm product setting.",
    } satisfies ProductV2Image,
    mobileImage: {
      src: "/images/neuvago/product-hero-mobile.webp",
      alt: "Close-up of the Neuvago device for the final mobile call to action.",
    } satisfies ProductV2Image,
  },
} as const;
