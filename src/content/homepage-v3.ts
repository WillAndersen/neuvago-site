import { appV2Content } from "@/content/app-v2";
import {
  homepageContent,
  type HomepageCard,
  type HomepageCta,
  type HomepageFaqItem,
  type HomepageImage,
} from "@/content/homepage";
import { productV2Content } from "@/content/product-v2";

export type Homepage03Link = {
  label: string;
  href: string;
};

const purchaseOpen = productV2Content.buyBox.purchaseOpen;

const homeProductCta = {
  label: purchaseOpen ? "Shop Neuvago" : "See the Neuvago device",
  href: purchaseOpen ? "/product#buy" : "/product",
} satisfies HomepageCta;

const breathingToolsAvailable =
  appV2Content.availability.breathingTools;

const guidedSessionsDescription =
  "Guided sessions for Sleep, Stress, Focus and Recovery.";

const appItems: HomepageCard[] = [
  {
    title: "Guided Sessions",
    description: guidedSessionsDescription,
  },
  ...(breathingToolsAvailable
    ? [
        {
          title: "Breathing Tools",
          description:
            "Guided and visual breathing practices for calm, sleep, focus, recovery and brief reset moments.",
        },
      ]
    : [
        {
          title: "Personal Tools",
          description:
            "Daily Check-In, Nervous System Score and progress tools designed to help you notice patterns over time.",
        },
      ]),
];

const homepageHeroDesktop = {
  src: "/images/neuvago/product-hero-desktop.webp",
  alt: "Close-up of the Neuvago device in a calm product setting.",
} satisfies HomepageImage;

const homepageHeroMobile = {
  src: "/images/neuvago/launch/product-hero-mobile.webp",
  alt: "Close-up of the Neuvago device in a warm product setting.",
} satisfies HomepageImage;

const lifestyleImage = {
  src: "/images/neuvago/launch/product-lifestyle-card.webp",
  alt: "Neuvago device in a calm home setting.",
} satisfies HomepageImage;

const vagusImage = {
  src: "/images/neuvago/launch/product-detail-left-desktop.webp",
  alt: "Detailed view of the Neuvago device and its physical controls.",
} satisfies HomepageImage;

const researchImage = {
  src: "/images/neuvago/research-hub-evidence-desktop.webp",
  alt: "Neuvago device beside research notes and evidence visuals.",
} satisfies HomepageImage;

const appLibraryImage = {
  src: "/images/home/app-mockup-library.png",
  alt: "Neuvago App guided session library preview.",
} satisfies HomepageImage;

const appProgressImage = {
  src: "/images/home/app-mockup-progress.png",
  alt: "Neuvago App progress and reflection tools preview.",
} satisfies HomepageImage;

const finalCtaDesktop = {
  src: "/images/neuvago/product-hero-desktop.webp",
  alt: "Close-up of the Neuvago device.",
} satisfies HomepageImage;

const finalCtaMobile = {
  src: "/images/neuvago/product-hero-mobile.webp",
  alt: "Close-up of the Neuvago device for mobile layouts.",
} satisfies HomepageImage;

type Homepage03Content = {
  hero: typeof homepageContent.hero;
  featureBar: {
    visible: boolean;
    items: string[];
  };
  benefits: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    items: HomepageCard[];
    researchBridge: string;
    researchCta: HomepageCta;
  };
  stimulationModes: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    modes: string[];
  };
  vagusNerve: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    cta: HomepageCta;
  };
  research: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    cta: HomepageCta;
  };
  appGuidance: typeof homepageContent.appGuidance;
  learn: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    links: Homepage03Link[];
    cta: HomepageCta;
  };
  faq: {
    visible: boolean;
    title: string;
    items: HomepageFaqItem[];
    supportCta: HomepageCta;
  };
  finalCta: typeof homepageContent.finalCta;
};

export const homepage03Content = {
  hero: {
    visible: true,
    eyebrow: "Neuvago",
    title: "Designed for your nervous system.",
    productLine:
      "Non-invasive vagus nerve stimulation designed for sleep-supportive routines, calmer moments, focused time and recovery.",
    description:
      "Neuvago applies adjustable electrical stimulation at the outer ear, providing a simple, non-invasive approach to vagus nerve stimulation.",
    primaryCta: homeProductCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    },
    desktopImage: homepageHeroDesktop,
    mobileImage: homepageHeroMobile,
    proofLine: [
      "Non-invasive",
      "Ear-based",
      "Four stimulation modes",
    ],
    mediaNote:
      "Device-led Home hero using the current approved placeholder photography.",
  },

  featureBar: {
    visible: true,
    items: [
      "Non-invasive",
      "Ear-based",
      "Four stimulation modes",
      "Adjustable intensity",
    ],
  },

  benefits: {
    visible: true,
    eyebrow: "Why vagus nerve stimulation?",
    title:
      "Designed to support the way you sleep, respond to stress, focus and recover.",
    description:
      "Your nervous system influences how you move between activation and rest. Neuvago offers a simple, non-invasive routine for moments centred on wind-down, calm, focus and recovery.",
    image: lifestyleImage,
    items: [
      {
        title: "Sleep & Wind-down",
        description:
          "Support evening wind-down and create conditions for deeper relaxation.",
      },
      {
        title: "Stress & Calm",
        description:
          "Create a calmer pause during everyday stress and demanding moments.",
      },
      {
        title: "Focus & Mental Clarity",
        description:
          "A calmer internal state can provide a useful setting for focused time.",
      },
      {
        title: "Recovery",
        description:
          "Fit Neuvago into routines centred on rest and recovery.",
      },
    ],
    researchBridge:
      "taVNS is being studied across areas including sleep, autonomic regulation, HRV, brain pathways, safety and tolerability.",
    researchCta: {
      label: "Explore the Research",
      href: "/research",
    },
  },

  stimulationModes: {
    visible: true,
    eyebrow: "Four stimulation modes",
    title: "Four modes for different needs.",
    description:
      "Choose between four named stimulation programmes designed for different moments and routines.",
    modes: ["Sleep", "Relax", "Meditation", "Relief"],
  },

  vagusNerve: {
    visible: true,
    eyebrow: "Why the vagus nerve matters",
    title:
      "A key pathway in brain–body communication and autonomic regulation.",
    description:
      "The vagus nerve is one of the body's major communication pathways between the brain and internal organs. It forms an important part of the parasympathetic nervous system and is studied in relation to rest, recovery and changing physiological states.",
    image: vagusImage,
    cta: {
      label: "Learn about the vagus nerve",
      href: "/learn/vagus-nerve",
    },
  },

  research: {
    visible: true,
    eyebrow: "Research",
    title:
      "A growing body of research on vagus nerve stimulation.",
    description:
      "Vagus nerve stimulation has been studied for decades, and a growing body of research is exploring non-invasive approaches such as transcutaneous auricular vagus nerve stimulation, or taVNS, across areas including sleep, autonomic regulation, HRV, brain pathways, safety and tolerability.",
    image: researchImage,
    cta: {
      label: "Explore the Research",
      href: "/research",
    },
  },

  appGuidance: {
    visible: true,
    eyebrow: "Neuvago App",
    title: "More tools for sleep, stress, focus and recovery.",
    description: breathingToolsAvailable
      ? "As part of Neuvago's broader focus on nervous system wellbeing, the Neuvago App brings together guided sessions, breathing practices and practical tools for different needs and moments. Every Neuvago device includes one year of app access."
      : "As part of Neuvago's broader focus on nervous system wellbeing, the Neuvago App brings together guided sessions and practical tools for different needs and moments. Every Neuvago device includes one year of app access.",
    image: appLibraryImage,
    mobileImage: appProgressImage,
    items: appItems,
    cta: {
      label: "Explore the Neuvago App",
      href: "/app",
    },
  },

  learn: {
    visible: true,
    eyebrow: "Learn",
    title: "Understand your nervous system.",
    description:
      "Explore clear, science-informed guides to the vagus nerve, stress, sleep, recovery and the autonomic nervous system.",
    links: [
      {
        label: "Vagus nerve",
        href: "/learn/vagus-nerve",
      },
      {
        label: "Autonomic nervous system",
        href: "/learn/parasympathetic-nervous-system",
      },
      {
        label: "Nervous system regulation",
        href: "/learn/nervous-system-regulation",
      },
    ],
    cta: {
      label: "Explore Learn",
      href: "/learn",
    },
  },

  faq: {
    visible: true,
    title: "Frequently asked questions",
    items: [
      {
        question: "What is Neuvago?",
        answer:
          "Neuvago is a non-invasive vagus nerve stimulation device designed for general wellness and simple, repeatable everyday routines.",
      },
      {
        question: "What can Neuvago be used for?",
        answer:
          "Neuvago is designed for general wellness routines around relaxation, evening wind-down and recovery. It is not intended to diagnose, treat, cure or prevent disease.",
      },
      {
        question: "Where is the stimulation applied?",
        answer:
          "Stimulation is applied through an earpiece electrode positioned at the outer ear according to the instructions supplied with the device.",
      },
      {
        question: "What are the four stimulation modes?",
        answer:
          "Neuvago includes four named modes: Sleep, Relax, Meditation and Relief.",
      },
      {
        question: "What is included with Neuvago?",
        answer:
          "The package includes the Neuvago device, earpiece, conductive gel, charging cable, Quick Start Guide and one year of Neuvago App access.",
      },
      {
        question: "Is one year of the Neuvago App included?",
        answer:
          "Yes. Every Neuvago device includes one year of access to the Neuvago App.",
      },
      {
        question: "Is Neuvago a medical device?",
        answer:
          "Neuvago is presented as a general wellness product. It is not intended to diagnose, treat, cure or prevent disease, and it is not a replacement for professional medical care.",
      },
    ],
    supportCta: {
      label: "Visit Support",
      href: "/support",
    },
  },

  finalCta: {
    visible: true,
    eyebrow: "The Neuvago device",
    title: "Ready to make Neuvago part of your routine?",
    description:
      "Explore non-invasive vagus nerve stimulation designed for everyday routines around sleep, stress, focus and recovery.",
    primaryCta: homeProductCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    },
    signedInCta: {
      label: "Continue",
      href: "/continue",
    },
    backgroundImage: finalCtaDesktop,
    mobileImage: finalCtaMobile,
  },
} satisfies Homepage03Content;

export const homepage03Commerce = {
  purchaseOpen,
  primaryCta: homeProductCta,
} as const;
