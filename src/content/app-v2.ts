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

export type AppV2LinkCard = AppV2Card & {
  href: string;
};

export type AppV2FaqItem = {
  question: string;
  answer: string;
};

export const appV2Content = {
  hero: {
    eyebrow: "Neuvago App",
    title: "Guided tools for nervous system wellbeing.",
    description:
      "Explore guided sessions, daily check-ins, personal recommendations, and progress tools for sleep, stress, focus, and recovery. The app works independently and does not connect to or control the Neuvago device.",
    primaryCta: {
      label: "Create account",
      href: "/signup",
    } satisfies AppV2Cta,
    secondaryCta: {
      label: "Sign in",
      href: "/login",
    } satisfies AppV2Cta,
    images: [
      {
        src: "/images/home/app-mockup-library.png",
        alt: "Neuvago App library interface preview showing guided session categories.",
      },
      {
        src: "/images/home/app-mockup-progress.png",
        alt: "Neuvago App progress interface preview showing session history.",
      },
    ] satisfies AppV2Image[],
    proofLine: [
      "Independent from the device",
      "Guided and silent session modes",
      "Daily check-ins and progress",
    ],
    previewNote:
      "Interface previews. Final screens and feature availability may change before launch.",
  },

  quickValue: {
    eyebrow: "Inside the app",
    title: "Choose a tool based on the moment you are in.",
    description:
      "Explore guided sessions, check in with how the moment feels, receive relevant recommendations, and review your activity over time.",
    cards: [
      {
        title: "Guided sessions",
        description:
          "Browse sessions organised around sleep, stress, focus, and recovery.",
      },
      {
        title: "Daily Check-In",
        description:
          "Reflect on stress, how calm the body feels, energy, and sleep readiness.",
      },
      {
        title: "Personal recommendations",
        description:
          "Use your selected goal and recent check-in signals to find a relevant session category.",
      },
      {
        title: "Progress",
        description:
          "Review completed sessions, recent activity, category patterns, and check-in context.",
      },
    ] satisfies AppV2Card[],
  },

  guidedSessions: {
    eyebrow: "Guided Sessions",
    title: "Sessions for different needs and moments.",
    description:
      "Browse four clear session categories and choose guided or silent modes on supported sessions.",
    categories: [
      {
        title: "Sleep",
        description:
          "Sessions for evening wind-down, quieter transitions, and preparing for rest.",
      },
      {
        title: "Stress",
        description:
          "Sessions for slowing down and creating a calmer next step after demanding moments.",
      },
      {
        title: "Focus",
        description:
          "Sessions for settling into focused work without adding unnecessary pressure.",
      },
      {
        title: "Recovery",
        description:
          "Sessions for pausing, restoring a steadier rhythm, and making space after effort.",
      },
    ] satisfies AppV2Card[],
    image: {
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago App library interface preview with guided session choices.",
    } satisfies AppV2Image,
    note:
      "Sessions are organised into four clear categories. Guided and silent options are available on supported sessions.",
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
    eyebrow: "Breathing Tools",
    title: "Practical breathing practices for different moments.",
    description:
      "Breathing Tools are being prepared for launch, with visual cues and guided patterns for different needs and situations.",
    statusLabel: "Coming to the app",
    practices: [
      {
        title: "4-7-8 Breathing",
        description:
          "A paced pattern built around inhale, hold, and a longer exhale.",
      },
      {
        title: "Coherent Breathing",
        description:
          "A steady breathing rhythm designed for an even, unhurried pace.",
      },
      {
        title: "Physiological Sigh",
        description:
          "A guided pattern using two inhales followed by a longer exhale.",
      },
      {
        title: "Box Breathing",
        description:
          "A balanced four-part rhythm with equal phases.",
      },
      {
        title: "Extended Exhale",
        description:
          "A slower pattern that gives more time to the exhale.",
      },
      {
        title: "Humming Practice",
        description:
          "A guided practice that combines a comfortable exhale with humming.",
      },
    ] satisfies AppV2Card[],
    note:
      "The final exercise selection, visual cues, and availability may change before release.",
  },

  needs: {
    eyebrow: "Personal recommendations",
    title: "What do you need right now?",
    description:
      "Choose what best matches the moment, and the app can suggest a relevant session category. Recommendations help you navigate content. They are not medical assessments or diagnoses.",
    cards: [
      {
        title: "I feel overwhelmed",
        description:
          "Find a shorter calming session or a simple downshift.",
        direction: "Stress",
      },
      {
        title: "I need to focus",
        description:
          "Choose a focus session when your current state feels steady enough for clarity.",
        direction: "Focus",
      },
      {
        title: "I can’t switch off",
        description:
          "Explore a quieter transition or evening wind-down.",
        direction: "Sleep",
      },
      {
        title: "I want to sleep",
        description:
          "Find a sleep-supportive session for preparing for rest.",
        direction: "Sleep",
      },
      {
        title: "I need to recover",
        description:
          "Choose a more restorative session when energy feels lower.",
        direction: "Recovery",
      },
    ],
  },

  personalTools: {
    eyebrow: "Personal tools",
    title: "Notice patterns over time.",
    description:
      "Daily check-ins and progress views can help you reflect on how you feel and choose a relevant next step.",
    image: {
      src: "/images/home/app-mockup-progress.png",
      alt: "Neuvago App progress interface preview with recent session activity.",
    } satisfies AppV2Image,
    cards: [
      {
        title: "Daily Check-In",
        description:
          "Record how the moment feels across stress, calm in the body, energy, and sleep readiness. Recent responses can help shape session recommendations.",
      },
      {
        title: "Nervous System Score",
        description:
          "A personal app indicator intended to support reflection on your own state and patterns. It is not a medical or diagnostic measurement.",
      },
      {
        title: "Progress over time",
        description:
          "Review recent sessions, category patterns, completion, and check-in context over time.",
      },
    ] satisfies AppV2Card[],
    methodologyNote:
      "The Nervous System Score is intended as a personal reflection tool. More information about how it is calculated and interpreted will be available before launch.",
  },

  calmByDesign: {
    eyebrow: "Calm by design",
    title: "Clear choices, low visual noise.",
    description:
      "The interface is designed to keep navigation simple, make the next step understandable, and reduce unnecessary complexity.",
    cards: [
      {
        title: "Clear session categories",
        description:
          "Sleep, stress, focus, and recovery provide a simple starting point.",
      },
      {
        title: "Recommendations with context",
        description:
          "The app explains why a suggested category may fit the current check-in pattern.",
      },
      {
        title: "Guided or silent",
        description:
          "Sessions can offer guided and silent modes where those options are available.",
      },
      {
        title: "Web account access",
        description:
          "Create an account, sign in, browse sessions, and review progress through the web experience.",
      },
    ] satisfies AppV2Card[],
  },

  access: {
    eyebrow: "Access",
    title: "Use the app independently.",
    description:
      "A Neuvago device is not required to create an account or use the app experience. The app does not pair with, control, or receive data from the device.",
    primaryCta: {
      label: "Create account",
      href: "/signup",
    } satisfies AppV2Cta,
    secondaryCta: {
      label: "Sign in",
      href: "/login",
    } satisfies AppV2Cta,
    includedTitle: "One year included with Neuvago",
    includedDescription:
      "Every Neuvago device includes one year of access to the Neuvago App. The app works independently, and no pairing or technical connection is required.",
    includedNote:
      "Activation, renewal, regional availability, and pricing after the included period will be explained before purchase.",
    productCta: {
      label: "Explore the Neuvago device",
      href: "/product",
    } satisfies AppV2Cta,
    availabilityNote:
      "Create an account or sign in to use the current web experience. App Store and Google Play availability will be announced separately.",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Practical answers about the Neuvago App.",
    description:
      "Clear information about independent use, sessions, check-ins, breathing tools, access, and product boundaries.",
    items: [
      {
        question: "Do I need a Neuvago device to use the app?",
        answer:
          "No. The Neuvago App works independently and does not connect to or control the Neuvago device. You can create an account and use the app experience without buying the device.",
      },
      {
        question: "What does the current app experience include?",
        answer:
          "The app includes session categories for sleep, stress, focus, and recovery, along with daily check-ins, recommendations, session history, favourites, and progress views.",
      },
      {
        question: "What are Guided Sessions?",
        answer:
          "Guided Sessions are structured practices created for different needs and moments, including winding down, calmer transitions, focus, and recovery. Guided and silent modes are available on supported sessions.",
      },
      {
        question: "What are the Breathing Tools?",
        answer:
          "Breathing Tools are guided breathing practices with visual cues. They are currently being prepared for launch, and the final selection may change before release.",
      },
      {
        question: "What is the Daily Check-In?",
        answer:
          "The Daily Check-In records self-reported signals including stress, calm in the body, energy, and sleep readiness. Recent check-ins can help shape category recommendations.",
      },
      {
        question: "Is the Nervous System Score a medical measurement?",
        answer:
          "No. It is a personal reflection tool, not a diagnosis, biomarker, or medical measurement. More information about its calculation and interpretation will be available before launch.",
      },
      {
        question: "Is one year of app access included with the device?",
        answer:
          "Yes. Every Neuvago device includes one year of access to the Neuvago App. Activation, renewal, regional availability, and pricing after the included period will be explained before purchase.",
      },
      {
        question: "Where can I access the app today?",
        answer:
          "Create an account or sign in to use the current web experience. App Store and Google Play availability will be announced separately.",
      },
      {
        question: "Does the app receive data from the Neuvago device?",
        answer:
          "No. The app is not technically connected to the device and does not receive stimulation or usage data from it.",
      },
    ] satisfies AppV2FaqItem[],
  },

  finalCta: {
    eyebrow: "Neuvago App",
    title: "Find the right tool for the moment you’re in.",
    description:
      "Create an account to explore sessions, check-ins, recommendations, and progress tools for sleep, stress, focus, and recovery.",
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
      alt: "Neuvago App library interface preview.",
    } satisfies AppV2Image,
  },
} as const;
