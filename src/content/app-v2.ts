export type AppV2Cta = {
  label: string;
  href: string;
};

export type AppV2Image = {
  src: string;
  alt: string;
};

export type AppV2Card = {
  title: string;
  description: string;
};

export type AppV2SessionCategory = AppV2Card & {
  label: string;
};

export type AppV2BreathingExample = AppV2Card & {
  outcome: string;
};

export type AppV2Need = AppV2Card & {
  label: string;
};

export type AppV2FaqItem = {
  question: string;
  answer: string;
};

export type AppV2Availability = {
  webAccess: boolean;
  guidedSessions: boolean;
  professionalGuidance: boolean;
  breathingTools: boolean;
  dailyCheckIn: boolean;
  nervousSystemScore: boolean;
  progress: boolean;
  appStore: boolean;
  googlePlay: boolean;
};

/**
 * Public feature availability for the English APP page.
 *
 * Only features marked true may be presented as available.
 * Do not replace false values with "coming soon" or prototype copy.
 */
const availability: AppV2Availability = {
  webAccess: true,
  guidedSessions: true,
  professionalGuidance: false,
  breathingTools: false,
  dailyCheckIn: true,
  nervousSystemScore: true,
  progress: true,
  appStore: false,
  googlePlay: false,
};

const guidedSessionCategories: AppV2SessionCategory[] = [
  {
    label: "Sleep",
    title: "Wind down and prepare for rest.",
    description:
      "Sessions for winding down, quieting the mind and preparing for or returning to sleep.",
  },
  {
    label: "Stress",
    title: "Settle after demanding moments.",
    description:
      "Sessions for slowing down, releasing tension and settling after demanding moments.",
  },
  {
    label: "Focus",
    title: "Create space for calm concentration.",
    description:
      "Sessions for clearing mental noise, getting into focus and maintaining attention.",
  },
  {
    label: "Recovery",
    title: "Pause, reset and make space to recover.",
    description:
      "Sessions for pausing, resetting and making space for recovery after periods of stress or demand.",
  },
];

const breathingExamples: AppV2BreathingExample[] = [
  {
    title: "4-7-8 Breathing",
    outcome: "Calm & Sleep",
    description:
      "A paced breathing practice intended for calming and evening routines.",
  },
  {
    title: "Coherent Breathing",
    outcome: "Steady Rhythm",
    description:
      "A balanced breathing pattern built around a slow, even rhythm.",
  },
  {
    title: "Physiological Sigh",
    outcome: "Quick Reset",
    description:
      "A short breathing practice designed for brief reset moments.",
  },
];

const needs: AppV2Need[] = availability.breathingTools
  ? [
      {
        label: "I feel overwhelmed",
        title: "Find a short calming session or breathing practice.",
        description:
          "Start with a short option designed for a demanding moment.",
      },
      {
        label: "I need to focus",
        title:
          "Choose a focus session or breathing practice for calm concentration.",
        description:
          "Move toward a clear, intentional period of attention.",
      },
      {
        label: "I can’t switch off",
        title: "Choose a session designed to quiet the mind.",
        description:
          "Find a calmer transition into an evening or rest routine.",
      },
      {
        label: "I want to sleep",
        title: "Explore sleep sessions and calming breathing practices.",
        description:
          "Choose content organised around rest and evening wind-down.",
      },
      {
        label: "I need to recover",
        title: "Choose a recovery or reset session.",
        description:
          "Pause after periods of stress, activity or demand.",
      },
    ]
  : [
      {
        label: "I feel overwhelmed",
        title: "Find a short calming session.",
        description:
          "Start with a short option designed for a demanding moment.",
      },
      {
        label: "I need to focus",
        title: "Choose a focus session for calm concentration.",
        description:
          "Move toward a clear, intentional period of attention.",
      },
      {
        label: "I can’t switch off",
        title: "Choose a session designed to quiet the mind.",
        description:
          "Find a calmer transition into an evening or rest routine.",
      },
      {
        label: "I want to sleep",
        title: "Explore sessions organised around sleep and wind-down.",
        description:
          "Choose content designed for rest and evening transitions.",
      },
      {
        label: "I need to recover",
        title: "Choose a recovery or reset session.",
        description:
          "Pause after periods of stress, activity or demand.",
      },
    ];

const appFeatureSummary = availability.breathingTools
  ? "guided sessions, breathing practices, Daily Check-In, Nervous System Score and progress tools"
  : "guided sessions, Daily Check-In, Nervous System Score and progress tools";

const faqItems: AppV2FaqItem[] = [
  {
    question: "What does the Neuvago App include?",
    answer: `The Neuvago App includes ${appFeatureSummary} for sleep, stress, focus, recovery and everyday nervous system wellbeing.`,
  },
  {
    question: "What are Guided Sessions?",
    answer:
      "Guided Sessions are structured practices created for different needs and moments, including sleep, stress, focus and recovery.",
  },
  ...(availability.breathingTools
    ? [
        {
          question: "What are Breathing Tools?",
          answer:
            "Breathing Tools combine guided or visual breathing patterns with simple practices for calming, sleep, focus and brief reset moments.",
        },
      ]
    : []),
  {
    question: "What is the Daily Check-In?",
    answer:
      "The Daily Check-In helps you reflect on stress, calm, energy and sleep readiness and use that reflection to navigate relevant content.",
  },
  {
    question: "What is the Nervous System Score?",
    answer:
      "The Nervous System Score is a personal reflection indicator based on your own reported state over time. It is not a medical measurement or diagnosis.",
  },
  {
    question: "Is one year of app access included with Neuvago?",
    answer:
      "Yes. Every Neuvago device includes one year of access to the Neuvago App.",
  },
  {
    question: "Can I use the Neuvago App without a Neuvago device?",
    answer: "Yes.",
  },
];

export const appV2Content = {
  availability,

  hero: {
    eyebrow: "Neuvago App",
    title: "Guided tools for nervous system wellbeing.",
    description:
      "Guided sessions and practical tools for sleep, stress, focus, recovery and everyday nervous system wellbeing.",
    brandConnection:
      "Neuvago is built around a broader approach to nervous system and brain–body wellbeing. The app extends that approach with practical digital tools for different needs and moments.",
    primaryCta: {
      label: "Create account",
      href: "/signup",
    } satisfies AppV2Cta,
    secondaryCta: {
      label: "Sign in",
      href: "/login",
    } satisfies AppV2Cta,
    primaryImage: {
      src: "/images/home/app-mockup-progress.png",
      alt: "Neuvago App progress interface.",
    } satisfies AppV2Image,
    secondaryImage: {
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago App guided session library interface.",
    } satisfies AppV2Image,
    proofLine: [
      "Guided Sessions",
      "Daily Check-In",
      "Progress tools",
    ],
  },

  guidedSessions: {
    eyebrow: "Guided Sessions",
    title: "Sessions for different needs and moments.",
    description:
      "Guided sessions created for different needs and moments, organised into four clear categories.",
    image: {
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago App guided session library.",
    } satisfies AppV2Image,
    categories: guidedSessionCategories,
    primaryCta: {
      label: "Create account",
      href: "/signup",
    } satisfies AppV2Cta,
    secondaryCta: {
      label: "Sign in",
      href: "/login",
    } satisfies AppV2Cta,
  },

  breathingTools: {
    visible: availability.breathingTools,
    eyebrow: "Breathing Tools",
    title: "Breathing practices for different needs and moments.",
    description:
      "Selected examples from a broader library of guided and visual breathing practices.",
    examples: breathingExamples,
    closingLine: "Explore more breathing practices in the app.",
    primaryCta: {
      label: "Create account",
      href: "/signup",
    } satisfies AppV2Cta,
  },

  needs: {
    eyebrow: "Personal recommendations",
    title: "What do you need right now?",
    description:
      "Start with the moment you are in and choose a direction that feels relevant.",
    items: needs,
    boundary:
      "Recommendations help you navigate content. They are not medical assessments or diagnoses.",
  },

  personalTools: {
    eyebrow: "Personal tools",
    title: "Notice patterns over time.",
    description:
      "Use simple reflection and activity tools to notice your own patterns and return to relevant content.",
    image: {
      src: "/images/home/app-mockup-progress.png",
      alt: "Neuvago App progress and reflection interface.",
    } satisfies AppV2Image,
    items: [
      {
        title: "Daily Check-In",
        description:
          "Reflect on stress, calm, energy and sleep readiness.",
      },
      {
        title: "Nervous System Score",
        description:
          "A personal reflection indicator designed to help you notice patterns in your own reported state over time. It is not a medical measurement or diagnosis.",
      },
      {
        title: "Progress",
        description:
          "Review completed sessions, activity and patterns over time.",
      },
    ] satisfies AppV2Card[],
  },

  included: {
    eyebrow: "Included with Neuvago",
    title: "One year included with Neuvago.",
    description: availability.breathingTools
      ? "Every Neuvago device includes one year of access to the Neuvago App, giving you guided sessions, breathing practices and practical tools for sleep, stress, focus and recovery."
      : "Every Neuvago device includes one year of access to the Neuvago App, giving you guided sessions and practical tools for sleep, stress, focus and recovery.",
    primaryCta: {
      label: "View purchase details",
      href: "/product#buy",
    } satisfies AppV2Cta,
    secondaryCta: {
      label: "Create account",
      href: "/signup",
    } satisfies AppV2Cta,
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions about the app experience.",
    description:
      "A concise overview of the content, reflection tools and access included with Neuvago.",
    items: faqItems,
  },

  finalCta: {
    eyebrow: "Neuvago App",
    title: "Find the right tool for the moment you’re in.",
    description: availability.breathingTools
      ? "Explore guided sessions, breathing practices and practical tools for sleep, stress, focus and recovery."
      : "Explore guided sessions and practical tools for sleep, stress, focus and recovery.",
    primaryCta: {
      label: "Create account",
      href: "/signup",
    } satisfies AppV2Cta,
    secondaryCta: {
      label: "Sign in",
      href: "/login",
    } satisfies AppV2Cta,
    image: {
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago App session library.",
    } satisfies AppV2Image,
  },
} as const;
