export type AboutPageCta = {
  label: string;
  href: string;
};

export type AboutPageImage = {
  src: string;
  alt: string;
};

export type AboutPageSectionVisibility = {
  visible: boolean;
};

export type AboutPageCard = {
  title: string;
  description: string;
};

export type AboutPageLinkCard = {
  title: string;
  description: string;
  href: string;
};

export type AboutPageFaqItem = {
  question: string;
  answer: string;
};

export type AboutPageFeatureItem = {
  title: string;
  description: string;
};

export const aboutPageContent = {
  hero: {
    visible: true,
    eyebrow: "About",
    title: "Neuvago is built around a calmer way to support everyday regulation.",
    description:
      "We are building Neuvago as a more thoughtful alternative to experiences that feel too clinical, too intense, or too disconnected from real daily life.",
    primaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies AboutPageCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies AboutPageCta,
    desktopImage: {
      src: "/images/neuvago/homepage-master-hero-desktop.webp",
      alt: "Neuvago device and app shown together in a calm editorial composition.",
    } satisfies AboutPageImage,
    mobileImage: {
      src: "/images/neuvago/homepage-master-hero-mobile.webp",
      alt: "Neuvago device and app shown together for mobile about hero layout.",
    } satisfies AboutPageImage,
    proofLine: ["Calm by design", "Device + app", "Built for everyday life"],
  } satisfies AboutPageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: AboutPageCta;
    secondaryCta: AboutPageCta;
    desktopImage: AboutPageImage;
    mobileImage: AboutPageImage;
    proofLine: string[];
  },

  whyItExists: {
    visible: true,
    title: "Why Neuvago exists",
    description:
      "Many people feel caught between two extremes: experiences that feel too clinical and experiences that feel too gadget-driven. Neuvago is being built as a calmer middle path — more grounded, more supportive, and easier to live with.",
    cards: [
      {
        title: "Less intensity",
        description:
          "We believe support should feel calmer and more manageable, not more overwhelming.",
      },
      {
        title: "Less friction",
        description:
          "The experience should feel easier to understand, start, and return to over time.",
      },
      {
        title: "More continuity",
        description:
          "We care about the kind of experience people can realistically use in everyday life.",
      },
    ] satisfies AboutPageCard[],
    image: {
      src: "/images/neuvago/homepage-master-hero-desktop.webp",
      alt: "Neuvago device and app shown together as one connected system.",
    } satisfies AboutPageImage,
  } satisfies AboutPageSectionVisibility & {
    title: string;
    description: string;
    cards: AboutPageCard[];
    image: AboutPageImage;
  },

  approach: {
    visible: true,
    eyebrow: "Our approach",
    title: "A calmer philosophy in practice",
    description:
      "Neuvago is shaped by a few core ideas: calm over intensity, support over pressure, and consistency over extremes. Those principles influence the device, the app, and the overall experience.",
    cards: [
      {
        title: "Calm over intensity",
        description:
          "We want the experience to feel grounded and supportive rather than overstimulating.",
      },
      {
        title: "Support over pressure",
        description:
          "The goal is not to create performance stress, but a steadier sense of guidance and return.",
      },
      {
        title: "Consistency over extremes",
        description:
          "We care more about realistic repetition than idealized one-off moments.",
      },
      {
        title: "Clarity over complexity",
        description:
          "The system should feel understandable, usable, and easy to come back to.",
      },
    ] satisfies AboutPageCard[],
    detailImage: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "Close-up details of the Neuvago device material and finish.",
    } satisfies AboutPageImage,
  } satisfies AboutPageSectionVisibility & {
    eyebrow: string;
    title: string;
    description: string;
    cards: AboutPageCard[];
    detailImage: AboutPageImage;
  },

  connectedSystem: {
    visible: true,
    title: "Designed as a connected system",
    description:
      "Neuvago is not just a device and not just an app. It is designed as one connected experience where the physical layer and the guided layer support each other.",
    features: [
      {
        title: "A physical starting point",
        description:
          "The device creates a calm entry point into the experience.",
      },
      {
        title: "A guided layer",
        description:
          "The app adds sessions, structure, and continuity over time.",
      },
      {
        title: "A more complete experience",
        description:
          "Together, the system feels clearer, more grounded, and easier to return to.",
      },
    ] satisfies AboutPageFeatureItem[],
    image: {
      src: "/images/neuvago/homepage-master-hero-desktop.webp",
      alt: "Neuvago device and app shown together in a premium warm composition.",
    } satisfies AboutPageImage,
    supportingImages: [
      {
        src: "/images/neuvago/app-hero-desktop.webp",
        alt: "Neuvago app home screen mockup.",
      },
      {
        src: "/images/neuvago/app-hero-mobile.webp",
        alt: "Neuvago app session screen mockup.",
      },
    ] satisfies AboutPageImage[],
    cta: {
      label: "Explore the app",
      href: "/app",
    } satisfies AboutPageCta,
  } satisfies AboutPageSectionVisibility & {
    title: string;
    description: string;
    features: AboutPageFeatureItem[];
    image: AboutPageImage;
    supportingImages: AboutPageImage[];
    cta: AboutPageCta;
  },

  calmDesign: {
    visible: true,
    title: "A calm design philosophy",
    description:
      "Neuvago is intentionally shaped to feel warm, clear, and understated. We care about reducing noise, softening friction, and creating a more supportive visual experience.",
    cards: [
      {
        title: "Warm visual tone",
        description:
          "A softer palette and calmer atmosphere instead of cold or clinical cues.",
      },
      {
        title: "Simple hierarchy",
        description:
          "Clear structure helps the experience feel easier to understand and navigate.",
      },
      {
        title: "Less visual noise",
        description:
          "We want the system to feel quieter and more breathable, not crowded or demanding.",
      },
      {
        title: "Premium restraint",
        description:
          "A more thoughtful and grounded visual language rather than loud or gadget-like styling.",
      },
    ] satisfies AboutPageCard[],
    detailImages: [
      {
        src: "/images/neuvago/product-hero-desktop.webp",
        alt: "Close-up of Neuvago device material and finish.",
      },
      {
        src: "/images/neuvago/app-hero-desktop.webp",
        alt: "Neuvago app home screen shown in a calm premium layout.",
      },
    ] satisfies AboutPageImage[],
  } satisfies AboutPageSectionVisibility & {
    title: string;
    description: string;
    cards: AboutPageCard[];
    detailImages: AboutPageImage[];
  },

  builtForEverydayLife: {
    visible: true,
    title: "Built for everyday life",
    description:
      "Neuvago is designed to support real routines rather than ideal conditions. That means calmer starts, steadier pauses, and more intentional wind-down moments across the day.",
    cards: [
      {
        title: "Morning reset",
        description:
          "A softer beginning when you want a calmer entry into the day.",
      },
      {
        title: "Daytime pause",
        description:
          "A practical way to step out of stress and create a steadier moment.",
      },
      {
        title: "Evening wind-down",
        description:
          "A more intentional transition out of the day and toward rest.",
      },
    ] satisfies AboutPageCard[],
    image: {
      src: "/images/neuvago/evening-wind-down-desktop.webp",
      alt: "A calm real-life moment with Neuvago as part of a quiet routine.",
    } satisfies AboutPageImage,
    secondaryImage: {
      src: "/images/neuvago/homepage-master-hero-desktop.webp",
      alt: "Neuvago device and app shown together in a calm lifestyle setting.",
    } satisfies AboutPageImage,
  } satisfies AboutPageSectionVisibility & {
    title: string;
    description: string;
    cards: AboutPageCard[];
    image: AboutPageImage;
    secondaryImage: AboutPageImage;
  },

  knowledgeUniverse: {
    visible: true,
    title: "Grounded in a broader knowledge universe",
    description:
      "Neuvago sits within a larger body of ideas around nervous system regulation, vagus nerve stimulation, recovery, and stress physiology. You can explore that knowledge layer if you want to go deeper.",
    links: [
      {
        title: "Vagus nerve stimulation",
        description:
          "Explore one of the central ideas behind the Neuvago approach.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Nervous system regulation",
        description:
          "Learn more about what regulation means in everyday life.",
        href: "/learn/nervous-system-regulation",
      },
      {
        title: "Heart rate variability",
        description:
          "Understand why HRV is often discussed in relation to recovery and regulation.",
        href: "/research/topics/heart-rate-variability",
      },
      {
        title: "Why your body feels stuck in stress",
        description:
          "Explore one of the patterns many people recognize in real life.",
        href: "/learn/why-your-body-feels-stuck-in-stress",
      },
    ] satisfies AboutPageLinkCard[],
    primaryCta: {
      label: "Explore research",
      href: "/research",
    } satisfies AboutPageCta,
    secondaryCta: {
      label: "Visit Learn",
      href: "/learn",
    } satisfies AboutPageCta,
  } satisfies AboutPageSectionVisibility & {
    title: string;
    description: string;
    links: AboutPageLinkCard[];
    primaryCta: AboutPageCta;
    secondaryCta: AboutPageCta;
  },

  faq: {
    visible: true,
    title: "Practical clarity",
    description:
      "A few simple answers to the questions people often have when they want to understand the brand and the experience more clearly.",
    items: [
      {
        question: "What kind of experience is Neuvago designed for?",
        answer:
          "Neuvago is designed as a calmer, more supportive experience around stress, recovery, sleep, and everyday regulation.",
      },
      {
        question: "Is Neuvago built around calm rather than intensity?",
        answer:
          "Yes. A central part of the Neuvago philosophy is to create an experience that feels grounded, gentle, and realistic to return to.",
      },
      {
        question: "Why combine device and app?",
        answer:
          "Because together they create a more complete system: the device offers a physical starting point, and the app adds guidance, structure, and continuity.",
      },
      {
        question: "Is Neuvago meant for everyday life rather than ideal conditions?",
        answer:
          "Yes. The brand is being built around routines and experiences that feel practical and realistic in daily life.",
      },
    ] satisfies AboutPageFaqItem[],
  } satisfies AboutPageSectionVisibility & {
    title: string;
    description: string;
    items: AboutPageFaqItem[];
  },

  finalCta: {
    visible: true,
    title: "Explore the Neuvago experience in more detail",
    description:
      "Now that you’ve seen what Neuvago stands for, you can explore the product in more detail or go deeper into the app experience.",
    primaryCta: {
      label: "Explore Neuvago",
      href: "/product",
    } satisfies AboutPageCta,
    secondaryCta: {
      label: "Explore the app",
      href: "/app",
    } satisfies AboutPageCta,
    backgroundImage: {
      src: "/images/neuvago/homepage-master-hero-desktop.webp",
      alt: "Neuvago device and app shown together in a premium warm composition.",
    } satisfies AboutPageImage,
  } satisfies AboutPageSectionVisibility & {
    title: string;
    description: string;
    primaryCta: AboutPageCta;
    secondaryCta: AboutPageCta;
    backgroundImage: AboutPageImage;
  },
} as const;
