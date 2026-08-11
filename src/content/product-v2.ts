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

export type ProductV2Step = ProductV2Card & {
  image: ProductV2Image;
};

export type ProductV2FaqItem = {
  question: string;
  answer: string;
};

export const productV2Content = {
  hero: {
    eyebrow: "Neuvago",
    title: "A non-invasive vagus nerve stimulator designed for everyday use.",
    description:
      "Neuvago delivers adjustable electrical stimulation via an earpiece positioned at the outer ear. Adjust the intensity directly on the device. No app or Bluetooth connection is required.",
    primaryCta: {
      label: "View purchase details",
      href: "#buy",
    } satisfies ProductV2Cta,
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
      "Works independently",
    ],
    panelTitle: "The device",
    panelText:
      "Physical controls, an on-device display, and ear-based application in one self-contained product.",
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
    eyebrow: "Launch product",
    productName: "Neuvago",
    productDescription:
      "A non-invasive vagus nerve stimulation device with physical controls and adjustable intensity.",
    badge: "Device",
    purchaseOpen: false,
    purchaseTitle: "Purchase information",
    launchStatus: "Prelaunch",
    purchaseDescription:
      "Purchasing is not open yet. Confirmed price, availability, delivery, return, and warranty details will be published here before checkout opens.",
    checkoutLabel: "Buy Neuvago",
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
    prelaunchNote:
      "Return to this page for confirmed purchase information before checkout is enabled.",
    includedItems: [
      "Neuvago device",
      "Earpiece",
      "Conductive gel",
      "Charging cable",
      "Quick Start Guide",
    ],
    reassuranceItems: [
      "No app, subscription, or Bluetooth connection required",
      "Intensity is adjusted directly on the device",
      "Safety and intended-use guidance are available before purchase",
    ],
    trustLinks: [
      {
        label: "Intended use",
        href: "/legal/intended-use",
      },
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

  howItWorks: {
    eyebrow: "How it works",
    title: "Electrical stimulation, applied at the outer ear.",
    description:
      "The earpiece is positioned on the outer ear as described in the instructions. Neuvago then delivers adjustable electrical stimulation through the contact point. The recommended placement is intended to access auricular nerve pathways associated with the vagus nerve.",
    secondaryDescription:
      "The vagus nerve forms part of the autonomic nervous system, an important communication network between the brain and body. Research into vagus nerve stimulation examines how this pathway relates to autonomic and parasympathetic activity.",
    image: {
      src: "/images/neuvago/auricular-vns-education-desktop.webp",
      alt: "Neuvago device beside an illustration of the outer ear.",
    } satisfies ProductV2Image,
    cards: [
      {
        title: "Position at the outer ear",
        description:
          "Use the earpiece at the placement described in the Quick Start Guide and user instructions.",
      },
      {
        title: "Adjust on the device",
        description:
          "Use the physical controls to increase or decrease the stimulation gradually.",
      },
      {
        title: "Understand the context",
        description:
          "The vagus nerve is part of the autonomic nervous system and is studied in relation to parasympathetic activity.",
      },
    ] satisfies ProductV2Card[],
    primaryCta: {
      label: "Learn how it works",
      href: "/how-it-works",
    } satisfies ProductV2Cta,
    secondaryCta: {
      label: "Review intended use",
      href: "/legal/intended-use",
    } satisfies ProductV2Cta,
  },

  features: {
    eyebrow: "Product features",
    title: "Clear controls. Adjustable use.",
    description:
      "The product story is simple: Neuvago is a self-contained stimulation device with direct physical controls and the practical elements needed for ear-based use.",
    image: {
      src: "/images/neuvago/launch/product-detail-left-desktop.webp",
      alt: "Neuvago device shown in a close product setting.",
    } satisfies ProductV2Image,
    cards: [
      {
        title: "Simple controls",
        description:
          "Turn the device on and manage the session using the physical buttons.",
      },
      {
        title: "Adjustable intensity",
        description:
          "Increase or decrease the stimulation gradually to find a comfortable level.",
      },
      {
        title: "On-device display",
        description:
          "View the active device information on the built-in screen.",
      },
      {
        title: "Rechargeable",
        description:
          "Charge the device using the charging cable included with the product.",
      },
      {
        title: "Ear-based application",
        description:
          "The earpiece enables non-invasive stimulation at the outer ear.",
      },
      {
        title: "Independent use",
        description:
          "The device does not require an app, subscription, pairing, or Bluetooth connection.",
      },
    ] satisfies ProductV2Card[],
  },

  everydayUse: {
    eyebrow: "Everyday routines",
    title: "Designed for different moments in your day.",
    description:
      "Neuvago can fit into a quiet pause, focused time, an evening wind-down, or time set aside for rest.",
    cards: [
      {
        title: "Calm pauses",
        description:
          "Include a short session in a quiet pause during a busy day.",
        image: {
          src: "/images/neuvago/launch/product-lifestyle-card.webp",
          alt: "Neuvago device placed beside a quiet daytime routine.",
        },
      },
      {
        title: "Focused time",
        description:
          "Use Neuvago during a calm, uninterrupted part of your routine.",
        image: {
          src: "/images/neuvago/launch/product-detail-left-desktop.webp",
          alt: "Neuvago device ready for use during a quiet focused moment.",
        },
      },
      {
        title: "Wind-down",
        description:
          "Include a session in an evening routine before rest.",
        image: {
          src: "/images/neuvago/launch/routine-evening-desktop.webp",
          alt: "Neuvago device in a warm evening setting.",
        },
      },
      {
        title: "Rest and recovery",
        description:
          "Add Neuvago to routines centred on rest and recovery time.",
        image: {
          src: "/images/neuvago/product-hero-desktop.webp",
          alt: "Neuvago device in a calm setting for time set aside for rest.",
        },
      },
    ] satisfies Array<ProductV2Card & { image: ProductV2Image }>,
  },

  useSequence: {
    eyebrow: "Using Neuvago",
    title: "Simple, repeatable use.",
    description:
      "Begin with three simple steps. Follow the supplied Quick Start Guide for complete placement, session use, care, and safety information.",
    steps: [
      {
        title: "Prepare the contact point",
        description:
          "Apply the conductive gel as described in the instructions to support contact between the earpiece and skin.",
        image: {
          src: "/images/neuvago/launch/product-gallery-detail.webp",
          alt: "Close detail of the Neuvago device before use.",
        },
      },
      {
        title: "Position the earpiece",
        description:
          "Place the earpiece on the specified area of the outer ear using the placement guidance supplied with the product.",
        image: {
          src: "/images/neuvago/auricular-vns-education-desktop.webp",
          alt: "Illustration of the outer ear beside the Neuvago device.",
        },
      },
      {
        title: "Adjust the intensity",
        description:
          "Turn on the device and increase the intensity gradually to a comfortable level, following the instructions provided.",
        image: {
          src: "/images/neuvago/launch/product-gallery-front.webp",
          alt: "Front view of the Neuvago device and its controls.",
        },
      },
    ] satisfies ProductV2Step[],
  },

  research: {
    eyebrow: "Research",
    title: "Grounded in a growing field of research.",
    description:
      "Vagus nerve stimulation is studied in relation to autonomic activity, parasympathetic signalling, safety, tolerability, and several areas of health and wellbeing. Research on the wider field provides scientific context. It does not automatically establish the effects of a specific product.",
    links: [
      {
        title: "Vagus nerve stimulation",
        description:
          "Explore the broader field of implanted, transcutaneous, and auricular vagus nerve stimulation.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Autonomic regulation",
        description:
          "Learn how sympathetic and parasympathetic activity form part of autonomic regulation.",
        href: "/research/topics/autonomic-regulation",
      },
      {
        title: "Safety and tolerability",
        description:
          "Review the research context around tolerability, side effects, and contraindication awareness.",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        title: "Intended use and boundaries",
        description:
          "See what Neuvago is intended for and what it is not intended to diagnose, treat, cure, or prevent.",
        href: "/legal/intended-use",
      },
    ] satisfies ProductV2LinkCard[],
    primaryCta: {
      label: "Explore research",
      href: "/research",
    } satisfies ProductV2Cta,
    secondaryCta: {
      label: "Visit Learn",
      href: "/learn",
    } satisfies ProductV2Cta,
  },

  included: {
    eyebrow: "Included with Neuvago",
    title: "What is included.",
    description:
      "Neuvago is planned to be supplied with the device and the practical items needed to begin. Final package contents will be confirmed before purchasing opens.",
    images: [
      {
        src: "/images/neuvago/launch/product-gallery-front.webp",
        alt: "Front view of the Neuvago device.",
      },
      {
        src: "/images/neuvago/launch/product-gallery-angle.webp",
        alt: "Angled view of the Neuvago device.",
      },
    ] satisfies ProductV2Image[],
    items: [
      {
        title: "Neuvago device",
        description:
          "The self-contained non-invasive stimulation device with physical controls and display.",
      },
      {
        title: "Earpiece",
        description:
          "The ear-based contact component used in the position described in the instructions.",
      },
      {
        title: "Conductive gel",
        description:
          "Gel intended to support reliable contact during use, applied according to the instructions.",
      },
      {
        title: "Charging cable",
        description:
          "The cable used to recharge the Neuvago device.",
      },
      {
        title: "Quick Start Guide",
        description:
          "Essential setup, placement, use, care, safety, and intended-use information.",
      },
    ] satisfies ProductV2Card[],
    launchNote:
      "Final package contents, price, availability, and delivery details will be confirmed before purchasing opens.",
    primaryCta: {
      label: "View purchase details",
      href: "#buy",
    } satisfies ProductV2Cta,
    secondaryCta: {
      label: "Review intended use",
      href: "/legal/intended-use",
    } satisfies ProductV2Cta,
  },

  productDetails: {
    eyebrow: "Product details",
    title: "The practical information that matters before purchase.",
    description:
      "Find the essential information on independent use, charging, contact, care, and safety before purchasing.",
    cards: [
      {
        title: "Works independently",
        description:
          "No app, account, subscription, device pairing, or Bluetooth connection is required.",
      },
      {
        title: "Charging",
        description:
          "The product is rechargeable and includes a charging cable.",
      },
      {
        title: "Gel and contact",
        description:
          "Use the conductive gel and earpiece according to the supplied instructions.",
      },
      {
        title: "Instructions and care",
        description:
          "Placement, session use, cleaning, storage, and safety guidance are provided in the product documentation.",
      },
    ] satisfies ProductV2Card[],
    rows: [
      {
        label: "App required",
        value: "No",
      },
      {
        label: "Bluetooth required",
        value: "No",
      },
      {
        label: "Intended use",
        value: "General wellness",
      },
      {
        label: "Safety guidance",
        value: "Provided before use",
      },
    ],
    safetyTitle: "Safety and suitability",
    safetyDescription:
      "Read the instructions, contraindications, and safety information supplied with the product before use. Contact a qualified healthcare professional if you are uncertain whether the device is suitable for you.",
    links: [
      {
        label: "Intended use",
        href: "/legal/intended-use",
      },
      {
        label: "Safety and tolerability",
        href: "/research/topics/safety-and-tolerability",
      },
      {
        label: "Support",
        href: "/support",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Practical answers before purchase.",
    description:
      "The most important questions about the device, independent use, package contents, and product boundaries.",
    items: [
      {
        question: "What is Neuvago?",
        answer:
          "Neuvago is a non-invasive vagus nerve stimulation device designed for simple, repeatable everyday use at the outer ear.",
      },
      {
        question: "Do I need the app?",
        answer:
          "No. The Neuvago device works independently and does not require the app. The Neuvago app is a separate collection of guided tools for nervous system wellbeing that can be used with or without the device.",
      },
      {
        question: "Does the app connect to or control the device?",
        answer:
          "No. The app does not connect to, pair with, or control the Neuvago device.",
      },
      {
        question: "Where is stimulation applied?",
        answer:
          "Stimulation is applied via an earpiece positioned on the outer ear according to the placement guidance supplied with the product.",
      },
      {
        question: "What is included with Neuvago?",
        answer:
          "The planned launch package includes the Neuvago device, earpiece, conductive gel, charging cable, and Quick Start Guide. Final package details will be confirmed before checkout opens.",
      },
      {
        question: "Is stronger stimulation always better?",
        answer:
          "No. Increase the intensity gradually and use a comfortable level in line with the supplied instructions. The strongest sensation is not the goal.",
      },
      {
        question: "What safety information should I review?",
        answer:
          "Read the instructions, contraindications, and safety information supplied with the product before use. Contact a qualified healthcare professional if you are uncertain whether the device is suitable for you.",
      },
      {
        question: "Is Neuvago a medical treatment?",
        answer:
          "No. Neuvago is positioned as a wellness product. It is not intended to diagnose, treat, cure, or prevent disease, and it is not a replacement for professional medical care.",
      },
      {
        question: "Where can I find the complete instructions?",
        answer:
          "The Quick Start Guide and user documentation provide the complete placement, use, care, safety, and intended-use information. Additional support is available through the Support page.",
      },
    ] satisfies ProductV2FaqItem[],
  },

  finalCta: {
    eyebrow: "Neuvago",
    title: "Explore Neuvago.",
    description:
      "Review what is included, how the device works, and the purchase information available before checkout opens.",
    primaryCta: {
      label: "View purchase details",
      href: "#buy",
    } satisfies ProductV2Cta,
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
