import { appV2Content } from "@/content/app-v2";
import {
  homepageContent,
  type HomepageCard,
  type HomepageCta,
  type HomepageFaqItem,
  type HomepageImage,
} from "@/content/homepage";
import { commerceContent } from "@/content/commerce";

export type Homepage03Link = {
  label: string;
  href: string;
};

const homeProductCta = {
  label: commerceContent.ctaLabel,
  href: commerceContent.shopHref,
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
      "Non-invasive vagus nerve stimulation designed to help you sleep better, feel calmer, manage everyday stress and support recovery.",
    description:
      "Neuvago gently stimulates the vagus nerve through the ear, supporting the body's natural shift toward calm, rest and recovery.",
    primaryCta: homeProductCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    },
    desktopImage: homepageHeroDesktop,
    mobileImage: homepageHeroMobile,
    proofLine: [
      "Non-invasive",
      "Drug-free",
      "Four stimulation modes",
    ],
    mediaNote:
      "Device-led Home hero using the current approved placeholder photography.",
  },

  featureBar: {
    visible: true,
    items: [
      "NON-INVASIVE",
      "DRUG-FREE",
      "FOUR STIMULATION MODES",
      "ADJUSTABLE INTENSITY",
    ],
  },

  benefits: {
    visible: true,
    eyebrow: "Why vagus nerve stimulation?",
    title:
      "Designed to support the way you sleep, respond to stress, focus and recover.",
    description:
      "Your nervous system influences how easily you shift between activation and rest. Neuvago offers a simple, non-invasive way to support these everyday regulatory processes.",
    image: lifestyleImage,
    items: [
      {
        title: "Better Sleep",
        description:
          "Support the transition from alertness to rest, helping create the conditions for deeper relaxation and better sleep quality.",
      },
      {
        title: "Stress & Calm",
        description:
          "Support a calmer response to everyday stress and help the nervous system shift toward a more regulated state.",
      },
      {
        title: "Focus & Mental Clarity",
        description:
          "Create a calmer internal state that can support attention, mental clarity and focused time.",
      },
      {
        title: "Recovery",
        description:
          "Support parasympathetic activity and the body's natural processes for rest, recovery and autonomic balance.",
      },
    ],
    researchBridge:
      "taVNS is being studied across areas including sleep, stress, cognitive performance, HRV and autonomic function.",
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
      "Choose between four dedicated stimulation modes designed for different moments and routines.",
    modes: ["Sleep", "Relax", "Meditation", "Relief"],
  },

  vagusNerve: {
    visible: true,
    eyebrow: "Why the vagus nerve matters",
    title:
      "A key pathway in how your body responds, recovers and resets.",
    description:
      "The vagus nerve is one of the body's main communication pathways between the brain and internal organs. As a major part of the parasympathetic nervous system, it plays an important role in the processes that help the body shift from activation toward rest, recovery and regulation.",
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
      "Vagus nerve stimulation has been studied for decades. Research on non-invasive approaches, including transcutaneous auricular vagus nerve stimulation (taVNS), spans areas such as sleep, stress, autonomic regulation, heart rate variability (HRV), safety and tolerability.",
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
          "Neuvago is a non-invasive vagus nerve stimulation device designed for general wellness and simple, repeatable everyday routines. It applies adjustable electrical stimulation through an earpiece electrode positioned at the outer ear. The device includes four named stimulation modes\u2014Sleep, Relax, Meditation and Relief\u2014and physical controls that allow the intensity to be adjusted directly on the unit.",
      },
      {
        question: "What can Neuvago be used for?",
        answer:
          "Neuvago is designed for general wellness routines centred on relaxation, evening wind-down, focused time and recovery. It can be incorporated into quiet moments when you want to slow down and create a more intentional routine around rest or everyday stress. Neuvago is not intended to diagnose, treat, cure or prevent disease.",
      },
      {
        question: "Where is the stimulation applied?",
        answer:
          "Stimulation is applied through an earpiece electrode positioned at the outer ear. Neuvago uses an auricular, or ear-based, approach to non-invasive vagus nerve stimulation. The earpiece should always be positioned and used according to the instructions supplied with the device, including the guidance for preparing the contact point and adjusting the stimulation intensity.",
      },
      {
        question: "What are the four stimulation modes?",
        answer:
          "Neuvago includes four named stimulation modes: Sleep, Relax, Meditation and Relief. They provide four dedicated programmes that can be selected directly on the device for different moments and routines. We do not describe specific physiological effects or technical differences between the modes beyond the information confirmed in the product documentation.",
      },
      {
        question: "What is included with Neuvago?",
        answer:
          "The Neuvago package includes the Neuvago device, earpiece, conductive gel, charging cable and Quick Start Guide. Every device also includes one year of access to the Neuvago App. The Product page provides the current package contents and purchase information in one place.",
      },
      {
        question: "Is one year of the Neuvago App included?",
        answer:
          "Yes. Every Neuvago device includes one year of access to the Neuvago App. The app provides Guided Sessions for Sleep, Stress, Focus and Recovery, together with Daily Check-In, Nervous System Score and progress tools. The app is a separate Neuvago product focused on practical tools for nervous system wellbeing and can also be explored through the dedicated App page.",
      },
      {
        question: "Is Neuvago a medical device?",
        answer:
          "Neuvago is presented as a general wellness product. It is not intended to diagnose, treat, cure or prevent disease, and it should not be used as a replacement for professional medical care. Always review the supplied safety information and seek appropriate professional advice if you are unsure whether the product is suitable for you.",
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
  mode: commerceContent.mode,
  isLive: commerceContent.isLive,
  primaryCta: homeProductCta,
} as const;
