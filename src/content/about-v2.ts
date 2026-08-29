export type AboutV2Link = {
  label: string;
  href: string;
};

export type AboutV2Image = {
  src: string;
  alt: string;
};

export type AboutV2Principle = {
  id: string;
  title: string;
  description?: string;
};

export type AboutV2FocusArea = {
  id: string;
  title: string;
  priority: "primary" | "secondary";
  description?: string;
};

export type AboutV2Content = {
  hero: {
    visible: boolean;
    eyebrow?: string;
    title: string;
    introduction?: string;
    supportingStatement?: string;
    primaryCta?: AboutV2Link;
    secondaryCta?: AboutV2Link;
    desktopImage: AboutV2Image;
    mobileImage: AboutV2Image;
  };
  whyItExists: {
    visible: boolean;
    title: string;
    paragraphs: readonly string[];
    companyStatement?: string;
  };
  principles: {
    visible: boolean;
    title: string;
    items: readonly AboutV2Principle[];
  };
  focus: {
    visible: boolean;
    title: string;
    areas: readonly AboutV2FocusArea[];
  };
  finalCta: {
    visible: boolean;
    title: string;
    description?: string;
    primaryCta?: AboutV2Link;
    secondaryCta?: AboutV2Link;
    image: AboutV2Image;
  };
};

export const aboutV2Content = {
  hero: {
    visible: true,
    title: "A more practical approach to vagus nerve stimulation.",
    desktopImage: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "Neuvago device.",
    },
    mobileImage: {
      src: "/images/neuvago/launch/product-hero-mobile.webp",
      alt: "Neuvago device.",
    },
  },
  whyItExists: {
    visible: true,
    title: "Why Neuvago exists.",
    paragraphs: [],
  },
  principles: {
    visible: true,
    title: "What guides us.",
    items: [
      {
        id: "science-with-context",
        title: "Science with context",
      },
      {
        id: "clarity-with-purpose",
        title: "Clarity with purpose",
      },
      {
        id: "designed-for-real-life",
        title: "Designed for real life",
      },
    ],
  },
  focus: {
    visible: true,
    title: "Built around one focus.",
    areas: [
      {
        id: "device",
        title: "The Neuvago device",
        priority: "primary",
      },
      {
        id: "digital-tools",
        title: "Digital tools",
        priority: "secondary",
      },
      {
        id: "learn-research",
        title: "Learn & Research",
        priority: "secondary",
      },
    ],
  },
  finalCta: {
    visible: true,
    title: "Explore Neuvago.",
    image: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "Neuvago device.",
    },
  },
} as const satisfies AboutV2Content;
