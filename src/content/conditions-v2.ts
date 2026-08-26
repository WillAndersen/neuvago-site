export type ConditionsV2Link = {
  label: string;
  href: string;
};

export type ConditionsV2ConditionItem = {
  id: string;
  title: string;
  href?: string;
};

export type ConditionsV2Image = {
  src: string;
  alt: string;
};

export type ConditionsV2Content = {
  hero: {
    visible: boolean;
    title: string;
    description?: string;
    primaryCta: ConditionsV2Link;
  };
  featured: {
    visible: boolean;
    id: string;
    title: string;
    description?: string;
    items: readonly ConditionsV2ConditionItem[];
  };
  more: {
    visible: boolean;
    title: string;
    description?: string;
    items: readonly ConditionsV2ConditionItem[];
  };
  researchBridge: {
    visible: boolean;
    title: string;
    description?: string;
    cta: ConditionsV2Link;
  };
  finalCta: {
    visible: boolean;
    title: string;
    description?: string;
    primaryCta?: ConditionsV2Link;
    secondaryCta?: ConditionsV2Link;
    image: ConditionsV2Image;
  };
};

export const conditionsV2Content = {
  hero: {
    visible: true,
    title: "Explore conditions through the nervous system.",
    primaryCta: {
      label: "Browse conditions",
      href: "#featured-conditions",
    },
  },
  featured: {
    visible: true,
    id: "featured-conditions",
    title: "Start with the conditions people explore most.",
    items: [
      {
        id: "stress",
        title: "Stress",
        href: "/conditions/stress",
      },
      {
        id: "sleep",
        title: "Sleep",
        href: "/conditions/sleep",
      },
      {
        id: "anxiety",
        title: "Anxiety",
        href: "/conditions/anxiety",
      },
      {
        id: "migraine-headache",
        title: "Migraine & Headache",
      },
    ],
  },
  more: {
    visible: true,
    title: "Explore more conditions.",
    items: [
      {
        id: "burnout",
        title: "Burnout",
        href: "/conditions/burnout",
      },
      {
        id: "gut-brain-digestion",
        title: "Gut–Brain & Digestion",
      },
      {
        id: "depression-mood",
        title: "Depression & Mood",
      },
      {
        id: "chronic-pain",
        title: "Chronic Pain",
      },
    ],
  },
  researchBridge: {
    visible: true,
    title: "Explore what the research says.",
    cta: {
      label: "Explore Research",
      href: "/research",
    },
  },
  finalCta: {
    visible: true,
    title: "Explore Neuvago.",
    image: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "",
    },
  },
} as const satisfies ConditionsV2Content;
