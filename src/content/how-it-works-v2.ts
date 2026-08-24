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
  description?: string;
};

export type HowItWorksV2Area = {
  id: string;
  label: string;
  description?: string;
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
    title: string;
    description?: string;
    primaryCta?: HowItWorksV2Cta;
    secondaryCta?: HowItWorksV2Cta;
    desktopImage: HowItWorksV2Image;
    mobileImage: HowItWorksV2Image;
  };
  mechanism: {
    visible: boolean;
    title: string;
    description?: string;
    steps: HowItWorksV2MechanismStep[];
  };
  whyItMatters: {
    visible: boolean;
    title: string;
    description?: string;
    areas: HowItWorksV2Area[];
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

export const howItWorksV2Content = {
  hero: {
    visible: true,
    title: "How Neuvago stimulates the vagus nerve.",
    desktopImage: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "",
    },
    mobileImage: {
      src: "/images/neuvago/product-hero-mobile.webp",
      alt: "",
    },
  },
  mechanism: {
    visible: true,
    title: "From the outer ear to wider autonomic networks.",
    steps: [
      { id: "outer-ear", label: "Outer ear" },
      { id: "vagus-nerve", label: "Vagus nerve" },
      { id: "brainstem", label: "Brainstem" },
      { id: "autonomic-networks", label: "Autonomic networks" },
    ],
  },
  whyItMatters: {
    visible: true,
    title: "Why vagus nerve stimulation matters.",
    areas: [
      { id: "better-sleep", label: "Better Sleep" },
      { id: "stress-calm", label: "Stress & Calm" },
      {
        id: "focus-mental-clarity",
        label: "Focus & Mental Clarity",
      },
      { id: "recovery", label: "Recovery" },
    ],
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
