export type AppPageCta = {
  label: string;
  href: string;
};

export type AppPageImage = {
  src: string;
  alt: string;
};

export type AppPageSectionVisibility = {
  visible: boolean;
};

export type AppPageCard = {
  title: string;
  description: string;
};

export type AppPageFeatureItem = {
  title: string;
  description: string;
};

export type AppPageFaqItem = {
  question: string;
  answer: string;
};

export type AppPageLinkCard = {
  title: string;
  description: string;
  href: string;
};

export const appPageContent = {
  hero: {
    visible: true,
    eyebrow: "App",
    title: "A guided app designed to make calmer routines easier to return to.",
    description:
      "The Neuvago app adds guidance, structure, and continuity through sessions, calmer routines, and a softer daily rhythm that feels realistic in everyday life.",
    primaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies AppPageCta,
    secondaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies AppPageCta,
    desktopImage: {
      src: "/images/home/app-mockup-home.png",
      alt: "Neuvago app home screen shown in a calm premium interface.",
    } satisfies AppPageImage,
    mobileImage: {
      src: "/images/home/app-mockup-session.png",
      alt: "Neuvago app session screen shown in a calm guided-session interface.",
    } satisfies AppPageImage,
    proofLine: ["Guided", "Built for routines", "Easy to return to"],
  } satisfies AppPageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: AppPageCta;
    secondaryCta: AppPageCta;
    desktopImage: AppPageImage;
    mobileImage: AppPageImage;
    proofLine: string[];
  },

  whatItDoes: {
    visible: true,
    title: "What the app adds",
    description:
      "The app is what turns Neuvago from a standalone device into a guided system. It adds sessions, structure, and continuity so it feels easier to begin, easier to understand, and easier to return to over time.",
    bullets: [
      "Guides sessions for calm, recovery, and evening wind-down",
      "Helps build routines that feel realistic in everyday life",
      "Adds continuity so the experience feels easier to return to over time",
    ],
    image: {
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago app library screen showing guided content and routine options.",
    } satisfies AppPageImage,
  } satisfies AppPageSectionVisibility & {
    title: string;
    description: string;
    bullets: string[];
    image: AppPageImage;
  },

  calmByDesign: {
    visible: true,
    eyebrow: "Calm by design",
    title: "Designed to feel calm enough to return to.",
    description:
      "The Neuvago app is intentionally calm, simple, and grounded. That matters because a supportive interface makes routines easier to sustain without adding pressure or overload.",
    cards: [
      {
        title: "Clear guidance",
        description:
          "The app helps reduce friction by making the next step feel obvious and manageable.",
      },
      {
        title: "Soft visual language",
        description:
          "A calmer interface with simple hierarchy, warm tone, and less visual noise.",
      },
      {
        title: "Low-pressure structure",
        description:
          "Designed to support consistency without making the experience feel demanding.",
      },
      {
        title: "Easy to return to",
        description:
          "Built to feel realistic for everyday life rather than ideal conditions.",
      },
    ] satisfies AppPageCard[],
    detailImages: [
      {
        src: "/images/home/app-mockup-home.png",
        alt: "Neuvago app home screen mockup.",
      },
      {
        src: "/images/home/app-mockup-library.png",
        alt: "Neuvago app library screen mockup.",
      },
    ] satisfies AppPageImage[],
  } satisfies AppPageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    cards: AppPageCard[];
    detailImages: AppPageImage[];
  },

  sessionsRhythm: {
    visible: true,
    title: "Guidance, sessions, and rhythm",
    description:
      "The app is designed to do more than start a single session. It helps turn use into a calmer rhythm with guidance, repetition, and growing familiarity over time.",
    features: [
      {
        title: "Guided sessions",
        description:
          "Choose sessions designed for calm, regulation, recovery, or evening wind-down.",
      },
      {
        title: "Supportive routines",
        description:
          "Use the app as part of a rhythm that feels practical and realistic across the week.",
      },
      {
        title: "Return over time",
        description:
          "The experience is designed to feel easy to come back to rather than exhausting to maintain.",
      },
    ] satisfies AppPageFeatureItem[],
    supportingImages: [
      {
        src: "/images/home/app-mockup-session.png",
        alt: "Neuvago app session screen mockup.",
      },
      {
        src: "/images/home/app-mockup-home.png",
        alt: "Neuvago app home screen mockup.",
      },
      {
        src: "/images/home/app-mockup-progress.png",
        alt: "Neuvago app progress screen mockup.",
      },
    ] satisfies AppPageImage[],
    cta: {
      label: "See how it works",
      href: "/how-it-works",
    } satisfies AppPageCta,
  } satisfies AppPageSectionVisibility & {
    title: string;
    description: string;
    features: AppPageFeatureItem[];
    supportingImages: AppPageImage[];
    cta: AppPageCta;
  },

  fitsIntoLife: {
    visible: true,
    title: "How the app fits into the day",
    description:
      "The app is designed to support a calmer flow through the day — from a gentler start, to a reset during stress, to an easier evening wind-down.",
    cards: [
      {
        title: "Morning reset",
        description:
          "A softer start when you want a calmer and more grounded beginning to the day.",
      },
      {
        title: "Daytime pause",
        description:
          "A practical way to step out of stress and create a steadier moment in the middle of the day.",
      },
      {
        title: "Evening wind-down",
        description:
          "A calmer transition out of the day and into a more intentional rhythm before rest.",
      },
    ] satisfies AppPageCard[],
    image: {
      src: "/images/home/lifestyle-sofa-neuvago.png",
      alt: "A calm real-life moment with Neuvago as part of a quiet evening routine.",
    } satisfies AppPageImage,
    secondaryImage: {
      src: "/images/home/app-mockup-library.png",
      alt: "Neuvago app library screen showing available guided routines.",
    } satisfies AppPageImage,
  } satisfies AppPageSectionVisibility & {
    title: string;
    description: string;
    cards: AppPageCard[];
    image: AppPageImage;
    secondaryImage: AppPageImage;
  },

  progressWithoutPressure: {
    visible: true,
    title: "Continuity without pressure",
    description:
      "The app supports awareness and continuity without turning the experience into a performance system. The aim is steady return, not strain.",
    cards: [
      {
        title: "A calmer view of progress",
        description:
          "Progress is framed as return, rhythm, and consistency rather than constant performance.",
      },
      {
        title: "Supportive continuity",
        description:
          "The app helps you come back over time without making the experience feel heavy.",
      },
      {
        title: "Less pressure, more steadiness",
        description:
          "Built to encourage gentle repetition rather than stress-inducing optimization.",
      },
    ] satisfies AppPageCard[],
    image: {
      src: "/images/home/app-mockup-progress.png",
      alt: "Neuvago progress screen shown in a calm premium interface.",
    } satisfies AppPageImage,
  } satisfies AppPageSectionVisibility & {
    title: string;
    description: string;
    cards: AppPageCard[];
    image: AppPageImage;
  },

  deviceTogether: {
    visible: true,
    title: "The device makes the app experience more complete",
    description:
      "The app can guide the experience on its own, but it feels more grounded and complete when paired with the physical device. Together, they create one connected system.",
    features: [
      {
        title: "The app can stand on its own",
        description:
          "It already provides guidance, structure, and routines that make the experience useful by itself.",
      },
      {
        title: "The device adds a physical layer",
        description:
          "The physical product makes the guided experience feel more tangible, grounded, and complete.",
      },
      {
        title: "Together, the system feels stronger",
        description:
          "The app and device support each other to create a calmer, clearer, and more repeatable daily experience.",
      },
    ] satisfies AppPageFeatureItem[],
    image: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together as one connected system.",
    } satisfies AppPageImage,
    cta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies AppPageCta,
  } satisfies AppPageSectionVisibility & {
    title: string;
    description: string;
    features: AppPageFeatureItem[];
    image: AppPageImage;
    cta: AppPageCta;
  },

  faq: {
    visible: true,
    title: "Practical clarity",
    description:
      "A few simple answers to the questions people often have when they first explore the app experience.",
    items: [
      {
        question: "Is the app an important part of the Neuvago experience?",
        answer:
          "Yes. The app adds guidance, session structure, routines, and continuity, making the experience feel more complete and easier to return to.",
      },
      {
        question: "What kind of sessions does the app support?",
        answer:
          "The app is designed to support calm, regulation, recovery, and evening wind-down through a guided and structured experience.",
      },
      {
        question: "Is the app designed for daily use?",
        answer:
          "Yes. The experience is built to feel simple, repeatable, and realistic for everyday life.",
      },
      {
        question: "Is the app built around calm rather than pressure?",
        answer:
          "Yes. The aim is to create a supportive experience that feels grounded and manageable rather than demanding or overstimulating.",
      },
      {
        question: "Does the app replace the device?",
        answer:
          "The app is central to the experience, but it becomes even stronger when paired with the physical device as part of one connected system.",
      },
    ] satisfies AppPageFaqItem[],
  } satisfies AppPageSectionVisibility & {
    title: string;
    description: string;
    items: AppPageFaqItem[];
  },

  finalCta: {
    visible: true,
    title: "See how the app connects to the full Neuvago system",
    description:
      "Explore how the guided app layer works alongside the device and the broader daily routine around stress, recovery, and everyday balance.",
    primaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies AppPageCta,
    secondaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies AppPageCta,
    backgroundImage: {
      src: "/images/home/app-mockup-progress.png",
      alt: "Neuvago app progress screen showing continuity over time.",
    } satisfies AppPageImage,
  } satisfies AppPageSectionVisibility & {
    title: string;
    description: string;
    primaryCta: AppPageCta;
    secondaryCta: AppPageCta;
    backgroundImage: AppPageImage;
  },
} as const;
