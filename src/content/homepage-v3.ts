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

export type Homepage03FaqItem = HomepageFaqItem & {
  answerLink?: Homepage03Link;
};

export type Homepage03Mode = {
  name: string;
  description: string;
};

const homeProductCta = {
  label: commerceContent.ctaLabel,
  href: commerceContent.shopHref,
} satisfies HomepageCta;

const appContentLaunchingSoon =
  !appV2Content.availability.professionalGuidance ||
  !appV2Content.availability.breathingTools;

const appItems: HomepageCard[] = [
  {
    title: "Guided Sessions",
    description:
      "Professionally guided sessions for Sleep, Stress, Focus and Recovery.",
  },
  {
    title: "Breathing Tools",
    description:
      "Guided and visual breathing practices for calm, sleep, focus, recovery and quick resets.",
  },
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
    modes: Homepage03Mode[];
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
    items: Homepage03FaqItem[];
    supportPrompt: string;
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
    modes: [
      {
        name: "Sleep",
        description:
          "For evening wind-down, rest and better sleep.",
      },
      {
        name: "Relax",
        description:
          "For everyday stress, relaxation and a calmer state.",
      },
      {
        name: "Meditation",
        description:
          "For meditation, calm focus and mental clarity.",
      },
      {
        name: "Relief",
        description:
          "For moments of tension and discomfort.",
      },
    ],
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
    description: appContentLaunchingSoon
      ? "Guided Sessions and Breathing Tools are launching soon. As part of Neuvago's broader focus on nervous system wellbeing, the Neuvago App will bring together professionally guided sessions and breathing practices for different needs and moments. Every Neuvago device includes one year of access to the Neuvago App."
      : "As part of Neuvago's broader focus on nervous system wellbeing, the Neuvago App brings together professionally guided sessions and breathing practices for different needs and moments. Every Neuvago device includes one year of access to the Neuvago App.",
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
          "Neuvago is a non-invasive vagus nerve stimulator designed to support better sleep, calmer responses to everyday stress, focus and recovery. It delivers gentle, adjustable electrical stimulation through an earpiece at the outer ear and offers four 20-minute modes for different needs and moments.",
      },
      {
        question: "What can Neuvago be used for?",
        answer:
          "Neuvago can be used as part of everyday routines for winding down before sleep, creating a calmer state, supporting focused time and making space for recovery. Research on transcutaneous auricular vagus nerve stimulation (taVNS) is also exploring areas including heart rate variability (HRV), headache and gut–brain function.",
        answerLink: {
          label: "Explore the Research",
          href: "/research",
        },
      },
      {
        question: "What does vagus nerve stimulation feel like?",
        answer:
          "Most Neuvago modes provide mild or very mild stimulation that feels like a light tingling or pricking sensation at the ear. The intensity is adjustable and should be increased gradually until the stimulation feels noticeable but comfortable. Relief uses slower, more distinct pulses and may therefore feel more pronounced than the other modes.",
      },
      {
        question: "What are the four stimulation modes?",
        answer:
          "Neuvago includes four stimulation modes: Sleep, Relax, Meditation and Relief. Sleep alternates between faster and slower stimulation rhythms and is designed for evening wind-down and sleep. Relax uses a gentle rhythmic pattern with four seconds of stimulation followed by four seconds of pause, designed for relaxation and everyday calm. Meditation uses the same four-seconds-on, four-seconds-off rhythm with a denser pulse pattern, designed for meditation, focus and concentration. Relief uses low-frequency, more distinct pulses for moments of tension and discomfort. Each mode runs for 20 minutes, and the stimulation intensity can be adjusted directly on the device.",
      },
      {
        question: "How long is a Neuvago session?",
        answer:
          "Each Neuvago mode runs for 20 minutes. Begin at a low intensity and increase it gradually until the stimulation feels noticeable but comfortable.",
      },
      {
        question: "What is included with Neuvago?",
        answer:
          "The Neuvago package includes the Neuvago device, a left earpiece, charging cable, felt case, User Manual, Quick Start Guide, spray bottle and conductive gel. One year of access to the Neuvago App is also included.",
      },
      {
        question: "Is one year of the Neuvago App included?",
        answer:
          "Yes. Every Neuvago device includes one year of access to the Neuvago App, with professionally guided sessions and breathing practices for Sleep, Stress, Focus and Recovery.",
      },
    ],
    supportPrompt: "Need more help?",
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
      "Explore non-invasive vagus nerve stimulation designed for sleep, stress, focus and recovery.",
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
