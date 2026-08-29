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
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
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
    eyebrow: "ABOUT NEUVAGO",
    title: "A more practical approach to vagus nerve stimulation.",
    introduction:
      "Neuvago is focused on making non-invasive vagus nerve stimulation more understandable, accessible and practical.",
    supportingStatement:
      "We also create digital tools and clear, science-informed resources that make the vagus nerve and parasympathetic nervous system easier to explore.",
    primaryCta: {
      label: "Explore the Product",
      href: "/product",
    },
    secondaryCta: {
      label: "Explore Research",
      href: "/research",
    },
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
    eyebrow: "WHY NEUVAGO EXISTS",
    title: "Making a complex field easier to approach.",
    paragraphs: [
      "Interest in the vagus nerve and nervous system is growing, but the science, terminology and available tools can still feel complex, clinical or difficult to bring into everyday life.",
      "Neuvago was created to make this field clearer and more accessible through practical products, digital tools and science-informed education.",
      "Neuvago is independently founded and led from Norway. We work closely with experienced manufacturing and specialist partners to develop thoughtful products and digital experiences around the nervous system and vagus nerve.",
    ],
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
