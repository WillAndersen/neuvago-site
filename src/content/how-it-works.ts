export type HowItWorksCta = {
  label: string;
  href: string;
};

export type HowItWorksImage = {
  src: string;
  alt: string;
};

export type HowItWorksSectionVisibility = {
  visible: boolean;
};

export type HowItWorksCard = {
  title: string;
  description: string;
};

export type HowItWorksStep = {
  title: string;
  description: string;
  image?: HowItWorksImage;
};

export type HowItWorksFaqItem = {
  question: string;
  answer: string;
};

export type HowItWorksFeatureItem = {
  title: string;
  description: string;
};

export const howItWorksPageContent = {
  hero: {
    visible: true,
    eyebrow: "How it works",
    title: "How to use Neuvago’s non-invasive VNS system in practice.",
    description:
      "Neuvago is designed to make a non-invasive vagus nerve stimulator easier to understand in real life: place the external device comfortably, follow guided app sessions, and return to the routine over time.",
    primaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies HowItWorksCta,
    secondaryCta: {
      label: "Explore the app",
      href: "/app",
    } satisfies HowItWorksCta,
    desktopImage: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a warm explanatory composition.",
    } satisfies HowItWorksImage,
    mobileImage: {
      src: "/images/home/hero-device-app-mobile.png",
      alt: "Neuvago device and app shown together for mobile how-it-works hero layout.",
    } satisfies HowItWorksImage,
    proofLine: ["Device + app", "Comfort-first routine", "Built for daily use"],
  } satisfies HowItWorksSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: HowItWorksCta;
    secondaryCta: HowItWorksCta;
    desktopImage: HowItWorksImage;
    mobileImage: HowItWorksImage;
    proofLine: string[];
  },

  systemAtAGlance: {
    visible: true,
    title: "What each part of the system does",
    description:
      "The easiest way to understand Neuvago is to look at the job of each layer: the non-invasive device starts the experience, the app guides it, and repetition makes it useful in daily life.",
    cards: [
      {
        title: "The device",
        description:
          "A non-invasive vagus nerve stimulator designed to feel simple, calm, and comfortable to begin with.",
      },
      {
        title: "The app",
        description:
          "Guidance, sessions, and structure that make the next step clearer.",
      },
      {
        title: "Together",
        description:
          "One connected system that feels easier to understand and easier to repeat.",
      },
    ] satisfies HowItWorksCard[],
    image: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app displayed together as one connected system.",
    } satisfies HowItWorksImage,
  } satisfies HowItWorksSectionVisibility & {
    title: string;
    description: string;
    cards: HowItWorksCard[];
    image: HowItWorksImage;
  },

  steps: {
    visible: true,
    title: "How it works, step by step",
    description:
      "In practice, the flow is straightforward: place the device comfortably, follow guidance in the app, and build a routine you can come back to without chasing intensity.",
    items: [
      {
        title: "Place the device comfortably",
        description:
          "Begin with the device as the physical starting point for the experience. Placement, contact, and comfort are part of the routine, not afterthoughts.",
        image: {
          src: "/images/home/device-cutout-front-angle.png",
          alt: "Front and angled view of the Neuvago device.",
        },
      },
      {
        title: "Follow the guidance in the app",
        description:
          "Use the app to choose guidance that fits the moment, while session length, rhythm, and intensity stay easy to understand.",
        image: {
          src: "/images/home/app-mockup-session.png",
          alt: "Neuvago session screen shown on a smartphone.",
        },
      },
      {
        title: "Return over time",
        description:
          "Repeat it in ways that fit real life so the system becomes more familiar, more comfortable, and easier to return to over time.",
        image: {
          src: "/images/home/app-mockup-progress.png",
          alt: "Neuvago progress screen showing continued use over time.",
        },
      },
    ] satisfies HowItWorksStep[],
  } satisfies HowItWorksSectionVisibility & {
    title: string;
    description: string;
    items: HowItWorksStep[];
  },

  appAdds: {
    visible: true,
    title: "What the app adds in practice",
    description:
      "The app helps turn the device into a guided system. It clarifies what to do next, supports routines, and makes the experience easier to return to without friction.",
    features: [
      {
        title: "Session guidance",
        description:
          "Choose from sessions designed for calm, recovery, regulation, or evening wind-down, with a structure that discourages guesswork.",
      },
      {
        title: "Clearer structure",
        description:
          "The app makes the next step feel easier by giving the experience a more supportive shape.",
      },
      {
        title: "Continuity over time",
        description:
          "It helps turn occasional use into a steadier daily or weekly rhythm.",
      },
    ] satisfies HowItWorksFeatureItem[],
    supportingImages: [
      {
        src: "/images/home/app-mockup-home.png",
        alt: "Neuvago app home screen mockup.",
      },
      {
        src: "/images/home/app-mockup-session.png",
        alt: "Neuvago app session screen mockup.",
      },
      {
        src: "/images/home/app-mockup-library.png",
        alt: "Neuvago app library screen mockup.",
      },
    ] satisfies HowItWorksImage[],
    cta: {
      label: "Explore the app",
      href: "/app",
    } satisfies HowItWorksCta,
  } satisfies HowItWorksSectionVisibility & {
    title: string;
    description: string;
    features: HowItWorksFeatureItem[];
    supportingImages: HowItWorksImage[];
    cta: HowItWorksCta;
  },

  dailyLife: {
    visible: true,
    title: "How it can fit into the day",
    description:
      "Once the system is understood, it can fit into real routines — a calmer start, a reset during stress, or an easier evening wind-down.",
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
    ] satisfies HowItWorksCard[],
    image: {
      src: "/images/home/lifestyle-sofa-neuvago.png",
      alt: "A calm real-life moment with Neuvago as part of a quiet routine.",
    } satisfies HowItWorksImage,
    secondaryImage: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a calm lifestyle setting.",
    } satisfies HowItWorksImage,
  } satisfies HowItWorksSectionVisibility & {
    title: string;
    description: string;
    cards: HowItWorksCard[];
    image: HowItWorksImage;
    secondaryImage: HowItWorksImage;
  },

  repetition: {
    visible: true,
    title: "Why consistency matters more than intensity",
    description:
      "The goal is not to do more and more. It is to build a routine that feels simple enough to repeat, because repetition is what makes the system more useful over time.",
    cards: [
      {
        title: "Simple beats intense",
        description:
          "A comfortable routine you can actually repeat is more useful than one that feels overly ambitious, confusing, or demanding.",
      },
      {
        title: "Return builds familiarity",
        description:
          "Coming back consistently helps the system feel easier, clearer, and more natural over time.",
      },
      {
        title: "Consistency supports the experience",
        description:
          "The value comes from realistic repetition, not from trying to force intensity, sensation, or perfection.",
      },
    ] satisfies HowItWorksCard[],
    image: {
      src: "/images/home/app-mockup-progress.png",
      alt: "Neuvago progress screen shown in a calm premium interface.",
    } satisfies HowItWorksImage,
  } satisfies HowItWorksSectionVisibility & {
    title: string;
    description: string;
    cards: HowItWorksCard[];
    image: HowItWorksImage;
  },

  faq: {
    visible: true,
    title: "Practical clarity",
    description:
      "A few simple answers to the questions people often have when they first explore how Neuvago works.",
    items: [
      {
        question: "Do I use the device together with the app?",
        answer:
          "Yes. Neuvago is designed as a connected experience where the device creates the physical entry point and the app provides guidance, session structure, and continuity.",
      },
      {
        question: "Is Neuvago meant for daily use?",
        answer:
          "Yes. The experience is designed to feel simple, repeatable, and realistic to return to across everyday life.",
      },
      {
        question: "Is it designed to feel calm rather than intense?",
        answer:
          "Yes. The system is intentionally built around comfort, clarity, and a calmer supportive experience rather than intensity or overstimulation.",
      },
      {
        question: "Do I need to understand the research before using it?",
        answer:
          "No. The research layer is there if you want to go deeper, but the experience itself is designed to feel simple and approachable. If you have a medical condition, implanted electronic device, heart rhythm concern, or pregnancy-related question, speak with a qualified clinician before use.",
      },
      {
        question: "How should I think about intensity?",
        answer:
          "A stronger sensation is not automatically a better session. Neuvago should be understood through comfort, guidance, and repeatability rather than pushing stimulation harder.",
      },
    ] satisfies HowItWorksFaqItem[],
  } satisfies HowItWorksSectionVisibility & {
    title: string;
    description: string;
    items: HowItWorksFaqItem[];
  },

  finalCta: {
    visible: true,
    title: "Explore the product or the app next",
    description:
      "Now that you have the practical overview, continue into the product page for the device itself or the app page for the guided experience layer.",
    primaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies HowItWorksCta,
    secondaryCta: {
      label: "Explore the app",
      href: "/app",
    } satisfies HowItWorksCta,
    backgroundImage: {
      src: "/images/home/device-phone-paired-editorial.png",
      alt: "Neuvago device and app shown together in a premium warm composition.",
    } satisfies HowItWorksImage,
  } satisfies HowItWorksSectionVisibility & {
    title: string;
    description: string;
    primaryCta: HowItWorksCta;
    secondaryCta: HowItWorksCta;
    backgroundImage: HowItWorksImage;
  },
} as const;
