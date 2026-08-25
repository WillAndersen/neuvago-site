import { commerceContent } from "@/content/commerce";

export type HowItWorksV2Cta = {
  label: string;
  href: string;
};

export type HowItWorksV2Image = {
  src: string;
  alt: string;
};

export type HowItWorksV2MechanismStep = {
  id: string;
  label: string;
  description: string;
};

export type HowItWorksV2Area = {
  id: string;
  label: string;
  description: string;
};

export type HowItWorksV2Mode = {
  id: "sleep" | "relax" | "meditation" | "relief";
  name: string;
  description?: string;
};

export type HowItWorksV2Fact = {
  id: string;
  label: string;
};

export type HowItWorksV2Content = {
  hero: {
    visible: boolean;
    eyebrow: string;
    title: string;
    mainIntroduction: string;
    benefitStatement: string;
    primaryCta: HowItWorksV2Cta;
    secondaryCta: HowItWorksV2Cta;
    quickFacts: string[];
    desktopImage: HowItWorksV2Image;
    mobileImage: HowItWorksV2Image;
  };
  mechanism: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    steps: HowItWorksV2MechanismStep[];
  };
  whyItMatters: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    productConnection: string;
    areas: HowItWorksV2Area[];
    researchBridge: {
      title: string;
      description: string;
      cta: HowItWorksV2Cta;
    };
  };
  modes: {
    visible: boolean;
    title: string;
    description?: string;
    items: HowItWorksV2Mode[];
  };
  whatToExpect: {
    visible: boolean;
    title: string;
    description?: string;
    facts: HowItWorksV2Fact[];
  };
  research: {
    visible: boolean;
    title: string;
    description?: string;
    cta?: HowItWorksV2Cta;
    image: HowItWorksV2Image;
  };
  finalCta: {
    visible: boolean;
    title: string;
    description?: string;
    primaryCta?: HowItWorksV2Cta;
    secondaryCta?: HowItWorksV2Cta;
    image: HowItWorksV2Image;
  };
};

const howItWorksHeroPrimaryCta = {
  label: commerceContent.ctaLabel,
  href: commerceContent.shopHref,
} satisfies HowItWorksV2Cta;

export const howItWorksV2Content = {
  hero: {
    visible: true,
    eyebrow: "HOW IT WORKS",
    title: "How Neuvago stimulates the vagus nerve.",
    mainIntroduction:
      "Neuvago delivers gentle, adjustable electrical impulses through an earpiece at the outer ear to stimulate the auricular branch of the vagus nerve. These sensory signals travel toward the brainstem, where vagal information is relayed into wider networks involved in autonomic regulation and brain–body communication.",
    benefitStatement:
      "A non-invasive approach designed to support better sleep, calmer responses to everyday stress, focused time and recovery.",
    primaryCta: howItWorksHeroPrimaryCta,
    secondaryCta: {
      label: "Explore the Product",
      href: "/product",
    } satisfies HowItWorksV2Cta,
    quickFacts: [
      "FOUR STIMULATION MODES",
      "20-MINUTE SESSIONS",
      "30 INTENSITY LEVELS",
    ],
    desktopImage: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "Neuvago vagus nerve stimulation device.",
    },
    mobileImage: {
      src: "/images/neuvago/product-hero-mobile.webp",
      alt: "Neuvago vagus nerve stimulation device.",
    },
  },
  mechanism: {
    visible: true,
    eyebrow: "THE PATHWAY",
    title: "From the outer ear to wider autonomic networks.",
    description:
      "Neuvago stimulates the auricular branch of the vagus nerve through the outer ear. The sequence below shows how sensory signals travel toward the brainstem and onward into wider autonomic networks.",
    steps: [
      {
        id: "outer-ear",
        label: "Outer ear",
        description:
          "The earpiece applies gentle, adjustable electrical impulses at the outer ear.",
      },
      {
        id: "vagus-nerve",
        label: "Vagus nerve",
        description:
          "The impulses stimulate the auricular branch of the vagus nerve, which carries sensory information from parts of the outer ear.",
      },
      {
        id: "brainstem",
        label: "Brainstem",
        description:
          "The signals travel toward the brainstem, where vagal sensory information is received and relayed.",
      },
      {
        id: "autonomic-networks",
        label: "Autonomic networks",
        description:
          "From the brainstem, vagal pathways connect with wider networks involved in brain–body communication and the body's shift between activation, rest and recovery.",
      },
    ],
  },
  whyItMatters: {
    visible: true,
    eyebrow: "WHY IT MATTERS",
    title: "Why the vagus nerve matters.",
    description:
      "The vagus nerve is a major pathway within the parasympathetic nervous system. It carries signals between the brain and body and contributes to the processes that help us respond to demand, settle toward rest and recover.",
    productConnection:
      "Neuvago is designed to support these everyday regulatory processes through non-invasive, ear-based vagus nerve stimulation.",
    areas: [
      {
        id: "better-sleep",
        label: "Sleep & Rest",
        description:
          "Moving from alertness toward rest is part of the body's natural preparation for sleep.",
      },
      {
        id: "stress-calm",
        label: "Stress Response",
        description:
          "Autonomic regulation influences how the body responds to everyday demands and how it settles afterwards.",
      },
      {
        id: "focus-mental-clarity",
        label: "Focus & Mental Clarity",
        description:
          "A calmer internal state can create better conditions for attention, concentration and clear thinking.",
      },
      {
        id: "recovery",
        label: "Recovery & Balance",
        description:
          "Parasympathetic processes support rest, restoration and the return toward balance after physical or mental demand.",
      },
    ],
    researchBridge: {
      title: "Go deeper into the science.",
      description:
        "Explore research on transcutaneous auricular vagus nerve stimulation (taVNS), including sleep, stress, autonomic function, HRV, brain pathways, safety and tolerability.",
      cta: {
        label: "Explore Research",
        href: "/research",
      },
    },
  },
  modes: {
    visible: true,
    title: "Four modes. Four distinct stimulation patterns.",
    items: [
      { id: "sleep", name: "Sleep" },
      { id: "relax", name: "Relax" },
      { id: "meditation", name: "Meditation" },
      { id: "relief", name: "Relief" },
    ],
  },
  whatToExpect: {
    visible: true,
    title: "What to expect from a Neuvago session.",
    facts: [
      { id: "duration", label: "20-minute sessions" },
      { id: "intensity", label: "30 intensity levels" },
      {
        id: "stimulation",
        label: "Mild, adjustable stimulation",
      },
    ],
  },
  research: {
    visible: true,
    title: "A growing field of research.",
    image: {
      src: "/images/neuvago/research-hub-evidence-desktop.webp",
      alt: "",
    },
  },
  finalCta: {
    visible: true,
    title: "Ready to experience Neuvago?",
    image: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "",
    },
  },
} satisfies HowItWorksV2Content;
