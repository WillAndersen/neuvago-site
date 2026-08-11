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

export type HomepageFaqItem = {
  question: string;
  answer: string;
};

const homepageHeroDesktop = {
  src: "/images/neuvago/product-hero-desktop.webp",
  alt: "Close-up of the Neuvago device in a calm product setting.",
} satisfies HomepageImage;

const homepageHeroMobile = {
  src: "/images/neuvago/launch/product-hero-mobile.webp",
  alt: "Close-up of the Neuvago device in a warm product setting.",
} satisfies HomepageImage;

const productHeroDesktop = {
  src: "/images/neuvago/launch/product-hero-desktop.webp",
  alt: "Close-up of the Neuvago handheld device.",
} satisfies HomepageImage;

const productHeroMobile = {
  src: "/images/neuvago/launch/product-hero-mobile.webp",
  alt: "Close-up of the Neuvago handheld device for mobile layouts.",
} satisfies HomepageImage;

const productDetailDesktop = {
  src: "/images/neuvago/launch/product-detail-left-desktop.webp",
  alt: "Detailed view of the Neuvago device and its physical controls.",
} satisfies HomepageImage;

const appHeroDesktop = {
  src: "/images/neuvago/app-hero-desktop.webp",
  alt: "Neuvago App session screen shown beside the separate Neuvago device.",
} satisfies HomepageImage;

const appHeroMobile = {
  src: "/images/neuvago/app-hero-mobile.webp",
  alt: "Neuvago App session screen for mobile layouts.",
} satisfies HomepageImage;

const howItWorksDesktop = {
  src: "/images/neuvago/launch/routine-evening-desktop.webp",
  alt: "Neuvago device placed ready for an everyday routine.",
} satisfies HomepageImage;

const howItWorksMobile = {
  src: "/images/neuvago/launch/routine-evening-mobile.webp",
  alt: "Neuvago device placed ready for a routine in a home setting.",
} satisfies HomepageImage;

const researchEvidenceDesktop = {
  src: "/images/neuvago/research-hub-evidence-desktop.webp",
  alt: "Neuvago device beside research notes and evidence visuals.",
} satisfies HomepageImage;

const morningRoutineImage = {
  src: "/images/neuvago/launch/product-lifestyle-card.webp",
  alt: "Neuvago device in a calm morning home setting.",
} satisfies HomepageImage;

const daytimeRoutineImage = {
  src: "/images/neuvago/launch/product-detail-left-desktop.webp",
  alt: "Neuvago device ready for a short daytime routine.",
} satisfies HomepageImage;

const eveningRoutineImage = {
  src: "/images/neuvago/launch/routine-evening-desktop.webp",
  alt: "Neuvago device in a quiet evening home setting.",
} satisfies HomepageImage;

const finalCtaDesktop = {
  src: "/images/neuvago/product-hero-desktop.webp",
  alt: "Close-up of the Neuvago device.",
} satisfies HomepageImage;

const finalCtaMobile = {
  src: "/images/neuvago/product-hero-mobile.webp",
  alt: "Close-up of the Neuvago device for mobile layouts.",
} satisfies HomepageImage;

export const homepageContent = {
  hero: {
    visible: true,
    eyebrow: "Neuvago",
    title: "Designed for your nervous system.",
    productLine: "Non-invasive vagus nerve stimulation, designed for everyday use.",
    description:
      "Neuvago delivers adjustable electrical stimulation via an ear electrode positioned at the outer ear. The device works independently, with no app or Bluetooth connection required.",
    primaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies HomepageCta,
    desktopImage: homepageHeroDesktop,
    mobileImage: homepageHeroMobile,
    proofLine: [
      "Non-invasive stimulation",
      "Adjustable intensity",
      "No app required",
    ],
    mediaNote:
      "Device-only launch hero using existing product photography with no phone or app shown.",
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    productLine: string;
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
      "Non-invasive stimulation",
      "Ear-based application",
      "Adjustable intensity",
      "No app required",
    ],
  } satisfies HomepageSectionVisibility & {
    items: string[];
  },

  systemReveal: {
    visible: true,
    eyebrow: "The Neuvago device",
    title: "Vagus nerve stimulation, made simple.",
    description:
      "Neuvago is designed around clear controls, adjustable stimulation and straightforward daily use. The device operates independently, so you can use it without a phone, Bluetooth or an app.",
    image: productHeroDesktop,
    items: [
      {
        eyebrow: "Non-invasive",
        title: "Stimulation applied at the ear",
        description:
          "Electrical stimulation is delivered via an ear electrode. No implant or invasive procedure is involved.",
        href: "/how-it-works",
      },
      {
        eyebrow: "Adjustable",
        title: "Control the intensity on the device",
        description:
          "Increase or decrease the stimulation level using the physical controls and the instructions supplied with the device.",
        href: "/how-to-use",
      },
      {
        eyebrow: "Independent",
        title: "No app or Bluetooth required",
        description:
          "The device works on its own. The Neuvago App is separate and is not required to operate the device.",
        href: "/product",
      },
    ] satisfies HomepageVisualPanel[],
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    items: HomepageVisualPanel[];
  },

  vagusNerve: {
    visible: true,
    eyebrow: "Why the vagus nerve matters",
    title: "A major communication pathway between brain and body.",
    description:
      "The vagus nerve is part of the autonomic nervous system, which helps coordinate processes the body manages automatically. It is studied in connection with parasympathetic activity, recovery and the way the body responds to changing demands.",
    boundary:
      "Neuvago is a wellness device. It is not intended to diagnose, treat, cure or prevent disease.",
    image: productDetailDesktop,
    points: [
      {
        title: "Brain and body",
        description:
          "The vagus nerve carries signals between the brain and several areas of the body.",
      },
      {
        title: "Autonomic activity",
        description:
          "It forms part of the system involved in automatic functions and changing physiological states.",
      },
      {
        title: "A growing research field",
        description:
          "Vagus nerve stimulation is studied across different methods, populations and research outcomes.",
      },
    ] satisfies HomepageCard[],
    primaryCta: {
      label: "Learn about the vagus nerve",
      href: "/learn/vagus-nerve",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "Explore VNS research",
      href: "/research/topics/vagus-nerve-stimulation",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    boundary: string;
    image: HomepageImage;
    points: HomepageCard[];
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
  },

  ritualSequence: {
    visible: true,
    eyebrow: "How the device is used",
    title: "Three clear steps.",
    description:
      "Neuvago does not need to be paired with a phone. Follow the instructions supplied with the device and use the controls on the unit itself.",
    desktopImage: howItWorksDesktop,
    mobileImage: howItWorksMobile,
    steps: [
      {
        title: "Prepare",
        description:
          "Prepare the device and position the ear electrode as shown in the instructions for use.",
      },
      {
        title: "Adjust",
        description:
          "Switch on the device and increase the intensity gradually, following the supplied guidance.",
      },
      {
        title: "Complete the session",
        description:
          "Use the device for the recommended session duration, then switch it off and store it ready for next time.",
      },
    ] satisfies HomepageStep[],
    cta: {
      label: "See how Neuvago works",
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

  everydayPathways: {
    visible: true,
    eyebrow: "Made for everyday routines",
    title: "A device that can fit into real life.",
    description:
      "Neuvago is designed for short, repeatable sessions at times that suit your day. The device remains the same. The context is yours.",
    items: [
      {
        eyebrow: "Morning",
        title: "A clear start",
        description:
          "Use Neuvago as part of a quiet morning routine before the day gets busy.",
        href: "/product",
        image: morningRoutineImage,
      },
      {
        eyebrow: "Daytime",
        title: "A deliberate pause",
        description:
          "Set aside a short, uninterrupted moment when you want to step away from the pace of the day.",
        href: "/how-to-use",
        image: daytimeRoutineImage,
      },
      {
        eyebrow: "Evening",
        title: "A consistent routine",
        description:
          "Keep the device nearby and use it at a time that is easy to repeat.",
        href: "/how-it-works",
        image: eveningRoutineImage,
      },
    ] satisfies HomepageVisualPanel[],
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    items: HomepageVisualPanel[];
  },

  researchBoundary: {
    visible: true,
    eyebrow: "Research and responsibility",
    title: "Grounded in a growing field of research.",
    description:
      "Research on vagus nerve stimulation helps explain the broader field. It does not automatically establish what a specific wellness device will do for an individual.",
    image: researchEvidenceDesktop,
    points: [
      {
        title: "VNS and tVNS",
        description:
          "Explore research on implanted and non-invasive approaches, including auricular stimulation.",
      },
      {
        title: "Autonomic regulation",
        description:
          "Understand how sympathetic and parasympathetic activity, HRV and recovery are studied.",
      },
      {
        title: "Product boundaries",
        description:
          "Neuvago is not presented as a medical treatment, diagnostic tool or replacement for professional care.",
      },
    ] satisfies HomepageCard[],
    primaryCta: {
      label: "Explore research",
      href: "/research",
    } satisfies HomepageCta,
    secondaryCta: {
      label: "Read intended use",
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

  appGuidance: {
    visible: true,
    eyebrow: "A separate Neuvago product",
    title: "More ways to support your nervous system.",
    description:
      "The Neuvago App brings together guided sessions, breathing practices and simple tools for relaxation, focus, sleep and everyday routines.",
    independenceNote:
      "The app works independently from the Neuvago device. It does not connect to or control the device, and it can be used with or without stimulation.",
    image: appHeroDesktop,
    mobileImage: appHeroMobile,
    items: [
      {
        title: "Guided sessions",
        description:
          "Choose sessions organized around sleep, stress, focus and recovery.",
      },
      {
        title: "Breathing tools",
        description:
          "Follow guided breathing practices for different needs and situations.",
      },
      {
        title: "Use it your way",
        description:
          "Use the app on its own or alongside a separate Neuvago device session.",
      },
    ] satisfies HomepageCard[],
    cta: {
      label: "Explore the Neuvago App",
      href: "/app",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    independenceNote: string;
    image: HomepageImage;
    mobileImage: HomepageImage;
    items: HomepageCard[];
    cta: HomepageCta;
  },

  featuredLearning: {
    visible: true,
    eyebrow: "Learn",
    title: "Understand the nervous system.",
    description:
      "Explore clear guides to the vagus nerve, non-invasive VNS and the autonomic nervous system.",
    items: [
      {
        title: "What is the vagus nerve?",
        description:
          "A practical introduction to an important communication pathway between brain and body.",
        href: "/learn/vagus-nerve",
      },
      {
        title: "Non-invasive vagus nerve stimulation",
        description:
          "Learn how surface-based approaches differ from implanted VNS.",
        href: "/learn/non-invasive-vagus-nerve-stimulation",
      },
      {
        title: "The parasympathetic nervous system",
        description:
          "Understand the wider autonomic context in which vagal pathways are studied.",
        href: "/learn/parasympathetic-nervous-system",
      },
    ] satisfies HomepageLinkCard[],
    cta: {
      label: "Explore Learn",
      href: "/learn",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    items: HomepageLinkCard[];
    cta: HomepageCta;
  },

  faq: {
    visible: true,
    eyebrow: "Frequently asked questions",
    title: "Clear answers before you explore the product.",
    description:
      "The essentials about the Neuvago device, the separate app and the boundaries of use.",
    items: [
      {
        question: "What is Neuvago?",
        answer:
          "Neuvago is a non-invasive vagus nerve stimulation device designed for wellness use and everyday routines.",
      },
      {
        question: "Does the Neuvago device need the app?",
        answer:
          "No. The device works independently. The Neuvago App is a separate product and is not required to operate the device.",
      },
      {
        question: "Does the app connect to or control the device?",
        answer:
          "No. There is no Bluetooth connection or technical integration between the app and the device.",
      },
      {
        question: "Where is the stimulation applied?",
        answer:
          "Neuvago uses an ear electrode positioned according to the instructions supplied with the device.",
      },
      {
        question: "Is Neuvago a medical treatment?",
        answer:
          "No. Neuvago is not intended to diagnose, treat, cure or prevent disease. Review the intended use, safety information and instructions before use.",
      },
      {
        question: "Where can I learn more about use and safety?",
        answer:
          "Visit the Product, How It Works and Intended Use pages for current information. Detailed instructions are also supplied with the device.",
      },
    ] satisfies HomepageFaqItem[],
    cta: {
      label: "Visit Support",
      href: "/support",
    } satisfies HomepageCta,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    items: HomepageFaqItem[];
    cta: HomepageCta;
  },

  finalCta: {
    visible: true,
    eyebrow: "The Neuvago device",
    title: "Explore Neuvago.",
    description:
      "See what is included, review how the device works and find current purchase information on the Product page.",
    primaryCta: {
      label: "View the device",
      href: "/product#buy",
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
    mobileImage: finalCtaMobile,
  } satisfies HomepageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: HomepageCta;
    secondaryCta: HomepageCta;
    signedInCta: HomepageCta;
    backgroundImage: HomepageImage;
    mobileImage: HomepageImage;
  },

  /**
   * Legacy homepage modules remain type-compatible with older admin content.
   * They are not rendered by the current English HOME page.
   */
  whatIsNeuvago: {
    visible: false,
    title: "A non-invasive vagus nerve stimulation device.",
    description:
      "Neuvago is a physical wellness device with adjustable controls and ear-based application. It works independently from the separate Neuvago App.",
    bullets: [
      "Non-invasive ear-based stimulation",
      "Adjustable controls on the device",
      "No app or Bluetooth connection required",
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
    title: "Designed for simple everyday routines",
    description:
      "Neuvago is intended to make non-invasive stimulation straightforward to understand and repeat within a wellness routine.",
    cards: [
      {
        title: "Clear controls",
        description:
          "Physical controls make it possible to operate the device directly.",
      },
      {
        title: "Adjustable stimulation",
        description:
          "Intensity can be adjusted using the controls and supplied guidance.",
      },
      {
        title: "Independent use",
        description:
          "The device does not need a phone, account, app or Bluetooth connection.",
      },
      {
        title: "Repeatable routine",
        description:
          "The format is designed to be straightforward to return to.",
      },
    ] satisfies HomepageCard[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    cards: HomepageCard[];
  },

  appDeviceEcosystem: {
    visible: false,
    title: "Two separate ways to engage with Neuvago.",
    description:
      "The Neuvago device provides non-invasive stimulation. The Neuvago App offers guided sessions and breathing tools. They work independently and are not technically connected.",
    features: [
      {
        title: "The device",
        description:
          "A physical, non-invasive stimulation device operated through its own controls.",
      },
      {
        title: "The app",
        description:
          "A separate library of guided sessions, breathing practices and routine tools.",
      },
      {
        title: "Use either independently",
        description:
          "The app does not control the device, and the device does not require the app.",
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
      "Prepare the device, position the ear electrode and adjust the stimulation using the physical controls.",
    steps: [
      {
        title: "Prepare the device",
        description:
          "Follow the supplied instructions before beginning a session.",
        image: productHeroMobile,
      },
      {
        title: "Position the ear electrode",
        description:
          "Place the electrode at the specified ear location shown in the instructions.",
        image: productHeroMobile,
      },
      {
        title: "Adjust and complete the session",
        description:
          "Use the device controls and follow the recommended session guidance.",
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
    title: "Why Neuvago is straightforward to use",
    description:
      "The product is designed around a clear physical interface, adjustable stimulation and independent operation.",
    cards: [
      {
        title: "Non-invasive",
        description:
          "Stimulation is applied through an ear electrode rather than implanted hardware.",
      },
      {
        title: "Made for everyday routines",
        description:
          "The device is designed for short sessions that can fit into daily life.",
      },
      {
        title: "Works independently",
        description:
          "No app or Bluetooth connection is required to operate the device.",
      },
      {
        title: "Clear physical controls",
        description:
          "The device can be adjusted directly without relying on a phone.",
      },
      {
        title: "Built for repeat use",
        description:
          "The format is intended to be straightforward to understand and return to.",
      },
    ] satisfies HomepageCard[],
    detailImage: productDetailDesktop,
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    cards: HomepageCard[];
    detailImage: HomepageImage;
  },

  trustResearch: {
    visible: false,
    title: "Research context with clear boundaries",
    description:
      "Explore the broader literature on vagus nerve stimulation, autonomic regulation, HRV and related topics without treating every finding as a claim about Neuvago.",
    links: [
      {
        title: "Vagus nerve stimulation",
        description:
          "Explore the wider VNS research field and its different approaches.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Heart rate variability",
        description:
          "Understand why HRV appears in research on autonomic activity.",
        href: "/research/topics/heart-rate-variability",
      },
      {
        title: "Autonomic regulation",
        description:
          "Read about sympathetic and parasympathetic activity.",
        href: "/research/topics/autonomic-regulation",
      },
      {
        title: "Safety and tolerability",
        description:
          "Review how safety and adverse events are discussed in the research.",
        href: "/research/topics/safety-and-tolerability",
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
    title: "User feedback will be added when available",
    description:
      "Only real, permissioned testimonials or practitioner comments should be published here.",
    quotes: [] as HomepageQuote[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    quotes: HomepageQuote[];
  },

  inRealLife: {
    visible: false,
    title: "Neuvago in everyday settings",
    description:
      "Product photography can show where the device may fit into a routine without suggesting a guaranteed outcome.",
    images: [
      {
        title: "Evening routine",
        description: "The Neuvago device placed ready for use.",
        image: eveningRoutineImage,
      },
    ] satisfies HomepageImageCard[],
  } satisfies HomepageSectionVisibility & {
    title: string;
    description: string;
    images: HomepageImageCard[];
  },

  conditionsOverview: {
    visible: false,
    title: "Explore nervous system topics",
    description:
      "Learn how Neuvago discusses stress, sleep and recovery within clear wellness boundaries.",
    items: [
      {
        title: "Stress",
        description:
          "Explore educational context around stress and autonomic activity.",
        href: "/conditions/stress",
      },
      {
        title: "Sleep",
        description:
          "Read about routines, winding down and the limits of wellness language.",
        href: "/conditions/sleep",
      },
      {
        title: "Anxiety",
        description:
          "Review educational content and the distinction between wellbeing and treatment.",
        href: "/conditions/anxiety",
      },
      {
        title: "Burnout",
        description:
          "Explore general information about load, recovery and professional support.",
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
