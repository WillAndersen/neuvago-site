export type ConditionsV2Link = {
  label: string;
  href: string;
};

export type ConditionsV2ConditionItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type ConditionsV2Image = {
  src: string;
  alt: string;
};

export type ConditionsV2Content = {
  hero: {
    visible: boolean;
    eyebrow: string;
    title: string;
    introduction: string;
    supportingCopy: string;
    primaryCta: ConditionsV2Link;
  };
  featured: {
    visible: boolean;
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: readonly ConditionsV2ConditionItem[];
  };
  more: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
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
    eyebrow: "CONDITIONS",
    title: "Explore conditions through the nervous system.",
    introduction:
      "Browse clear, science-informed articles on sleep problems, stress, anxiety, burnout, migraine and headache, gut–brain function, depression and mood, chronic pain and related concerns.",
    supportingCopy:
      "Each article begins with the condition or concern itself, then explores the relevant nervous system, vagus nerve and research context in clear, accessible language.",
    primaryCta: {
      label: "Browse conditions",
      href: "#featured-conditions",
    },
  },
  featured: {
    visible: true,
    id: "featured-conditions",
    eyebrow: "FEATURED CONDITIONS",
    title: "Start with a condition or concern.",
    description:
      "Explore science-informed articles that begin with the condition itself, then examine the relevant nervous system, vagus nerve and research context.",
    items: [
      {
        id: "stress",
        title: "Stress",
        description:
          "Explore how prolonged stress can affect autonomic regulation, sleep, recovery and the body's ability to settle after demanding moments.",
        href: "/conditions/stress",
      },
      {
        id: "sleep",
        title: "Sleep",
        description:
          "Understand how nervous system activation and stress can affect winding down, sleep quality and the ability to return to sleep.",
        href: "/conditions/sleep",
      },
      {
        id: "anxiety",
        title: "Anxiety",
        description:
          "Explore how anxiety can overlap with autonomic arousal, vigilance, physical sensations, breathing and sleep.",
        href: "/conditions/anxiety",
      },
      {
        id: "migraine-headache",
        title: "Migraine & Headache",
        description:
          "Learn about the complex neurological pathways involved in migraine and headache, and why vagus nerve stimulation is being studied in this field.",
        href: "/conditions/migraine-and-headache",
      },
      {
        id: "gut-brain-digestion",
        title: "Gut–Brain & Digestion",
        description:
          "Explore how the gut and brain communicate through neural, immune and hormonal pathways, including the vagus nerve, and what research is examining in digestive symptoms.",
        href: "/conditions/gut-brain-and-digestion",
      },
    ],
  },
  more: {
    visible: true,
    eyebrow: "MORE CONDITIONS",
    title: "Continue exploring important conditions.",
    description:
      "Explore how prolonged demand, mood, pain, sleep, recovery and nervous system regulation can intersect over time.",
    items: [
      {
        id: "burnout",
        title: "Burnout",
        description:
          "Understand how prolonged demand, exhaustion, disrupted sleep and reduced recovery can overlap over time.",
        href: "/conditions/burnout",
      },
      {
        id: "depression-mood",
        title: "Depression & Mood",
        description:
          "Explore how mood, stress systems, sleep and brain–body regulation are studied together.",
        href: "/conditions/depression-and-mood",
      },
      {
        id: "chronic-pain",
        title: "Chronic Pain",
        description:
          "Learn how pain, stress, sleep and autonomic regulation can interact and reinforce one another over time.",
        href: "/conditions/chronic-pain",
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
