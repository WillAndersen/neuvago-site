export type SupportPageCta = {
  label: string;
  href: string;
};

export type SupportPageImage = {
  src: string;
  alt: string;
};

export type SupportPageSectionVisibility = {
  visible: boolean;
};

export type SupportPageCard = {
  title: string;
  description: string;
};

export type SupportPageLinkCard = {
  title: string;
  description: string;
  href: string;
};

export type SupportPageFaqItem = {
  question: string;
  answer: string;
};

export const supportPageContent = {
  hero: {
    visible: true,
    eyebrow: "Support",
    title: "Clear, calm help for exploring and using Neuvago.",
    description:
      "Support should feel simple. This page helps you find the right place to start, understand the system more clearly, and move forward without unnecessary friction.",
    primaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies SupportPageCta,
    secondaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies SupportPageCta,
    desktopImage: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a calm support-page hero composition.",
    } satisfies SupportPageImage,
    mobileImage: {
      src: "/images/home/hero-device-app-mobile.png",
      alt: "Neuvago device and app shown together for mobile support hero layout.",
    } satisfies SupportPageImage,
    proofLine: ["Clear guidance", "Practical help", "Built to reduce friction"],
  } satisfies SupportPageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: SupportPageCta;
    secondaryCta: SupportPageCta;
    desktopImage: SupportPageImage;
    mobileImage: SupportPageImage;
    proofLine: string[];
  },

  howWeCanHelp: {
    visible: true,
    title: "How we can help",
    description:
      "Support can mean different things depending on where you are. You might want to understand the product, understand the app, find practical clarity, or go deeper into the knowledge layer.",
    cards: [
      {
        title: "Product support",
        description:
          "Understand what Neuvago is, how it is positioned, and how the device fits into the overall experience.",
      },
      {
        title: "App support",
        description:
          "See how the app guides sessions, supports routines, and adds continuity over time.",
      },
      {
        title: "Practical guidance",
        description:
          "Get simpler answers about how Neuvago is intended to be used in everyday life.",
      },
      {
        title: "Learn and research",
        description:
          "Explore the broader knowledge layer if you want more context and background.",
      },
    ] satisfies SupportPageCard[],
  } satisfies SupportPageSectionVisibility & {
    title: string;
    description: string;
    cards: SupportPageCard[];
  },

  startHere: {
    visible: true,
    title: "Start with the right place",
    description:
      "The easiest kind of support is often being guided to the right page first. These are the best places to start depending on what you want to understand.",
    links: [
      {
        title: "Explore the product",
        description:
          "Start here if you want to understand what Neuvago is and why it feels different.",
        href: "/product",
      },
      {
        title: "Explore the app",
        description:
          "Start here if you want to understand the guided app experience more clearly.",
        href: "/app",
      },
      {
        title: "How it works",
        description:
          "Start here if you want a practical overview of how the whole system fits together.",
        href: "/how-it-works",
      },
      {
        title: "Learn and research",
        description:
          "Start here if you want a broader knowledge layer around regulation, stress, and recovery.",
        href: "/learn",
      },
    ] satisfies SupportPageLinkCard[],
  } satisfies SupportPageSectionVisibility & {
    title: string;
    description: string;
    links: SupportPageLinkCard[];
  },

  supportTopics: {
    visible: true,
    title: "Practical support topics",
    description:
      "These are some of the most useful areas to explore when you want clearer guidance or background information.",
    links: [
      {
        title: "Understanding the product",
        description:
          "Get a clearer picture of the device, the system, and the overall Neuvago experience.",
        href: "/product",
      },
      {
        title: "Understanding the app",
        description:
          "See how the app supports sessions, guidance, and continuity over time.",
        href: "/app",
      },
      {
        title: "Daily use and routines",
        description:
          "Learn more about how Neuvago fits into calmer everyday rhythms.",
        href: "/how-it-works",
      },
      {
        title: "Calm design and philosophy",
        description:
          "Explore the brand thinking behind the visual and experiential choices.",
        href: "/about",
      },
      {
        title: "Legal and intended use",
        description:
          "Read the legal, intended use, and compliance information if you need practical clarity.",
        href: "/legal",
      },
      {
        title: "Trust and safety",
        description:
          "Explore the safety-minded and trust-related framework around Neuvago.",
        href: "/legal/trust-safety",
      },
    ] satisfies SupportPageLinkCard[],
  } satisfies SupportPageSectionVisibility & {
    title: string;
    description: string;
    links: SupportPageLinkCard[];
  },

  philosophy: {
    visible: true,
    title: "A calmer support philosophy",
    description:
      "Support should feel like the rest of the Neuvago experience: clearer, calmer, and easier to navigate without adding more noise.",
    cards: [
      {
        title: "Clarity first",
        description:
          "We want it to be easy to understand where to start and where to go next.",
      },
      {
        title: "Calm guidance",
        description:
          "Support should reduce friction, not overwhelm you with unnecessary complexity.",
      },
      {
        title: "Practical help",
        description:
          "The goal is not just more information, but more useful direction in the moment.",
      },
    ] satisfies SupportPageCard[],
    image: {
      src: "/images/home/device-close-detail-material.png",
      alt: "Close-up of Neuvago device material and finish used as a subtle support philosophy visual.",
    } satisfies SupportPageImage,
  } satisfies SupportPageSectionVisibility & {
    title: string;
    description: string;
    cards: SupportPageCard[];
    image: SupportPageImage;
  },

  faq: {
    visible: true,
    title: "Frequently asked questions",
    description:
      "A few simple answers to the questions people often have when they want help understanding where to begin.",
    items: [
      {
        question: "Where should I start if I am new to Neuvago?",
        answer:
          "A good first step is usually either the product page if you want to understand what Neuvago is, or the how-it-works page if you want a practical overview of the full system.",
      },
      {
        question: "Should I begin with the product or the app?",
        answer:
          "That depends on what you want to understand first. Start with the product if you want the bigger picture. Start with the app if you want to understand the guided experience more directly.",
      },
      {
        question: "Where can I learn more about how Neuvago works?",
        answer:
          "The how-it-works page is the best place for a step-by-step explanation of how the system is designed to fit together.",
      },
      {
        question: "Where can I find research and background information?",
        answer:
          "The learn and research sections are the best places to explore the broader knowledge layer behind regulation, stress, recovery, and related topics.",
      },
      {
        question: "Where can I read legal and safety information?",
        answer:
          "The legal section includes pages covering intended use, regulatory information, trust and safety, privacy, and terms.",
      },
    ] satisfies SupportPageFaqItem[],
  } satisfies SupportPageSectionVisibility & {
    title: string;
    description: string;
    items: SupportPageFaqItem[];
  },

  finalCta: {
    visible: true,
    title: "Choose the next step that fits you best",
    description:
      "You can continue by exploring the product, understanding how the system works, or going deeper into the app and knowledge layers.",
    primaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies SupportPageCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies SupportPageCta,
    backgroundImage: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a calm support-page closing composition.",
    } satisfies SupportPageImage,
  } satisfies SupportPageSectionVisibility & {
    title: string;
    description: string;
    primaryCta: SupportPageCta;
    secondaryCta: SupportPageCta;
    backgroundImage: SupportPageImage;
  },
} as const;
