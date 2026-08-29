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
  description: string;
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
    eyebrow: string;
    title: string;
    introduction: string;
    items: readonly AboutV2Principle[];
  };
  focus: {
    visible: boolean;
    eyebrow: string;
    title: string;
    introduction: string;
    image: AboutV2Image;
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
    eyebrow: "OUR PHILOSOPHY",
    title: "What guides us.",
    introduction:
      "Neuvago is built around one idea: products and knowledge related to vagus nerve stimulation, the vagus nerve and the parasympathetic nervous system should be scientifically grounded, clearly explained and practical enough for everyday life.",
    items: [
      {
        id: "science-with-context",
        title: "Science with context",
        description:
          "We follow peer-reviewed research across VNS, taVNS and autonomic regulation. We communicate encouraging findings clearly while keeping differences between devices, stimulation protocols and study populations visible.",
      },
      {
        id: "clarity-with-purpose",
        title: "Clarity with purpose",
        description:
          "Complex science should be easier to understand without being oversimplified. We aim to make every product, article and interaction clear, considered and useful.",
      },
      {
        id: "designed-for-real-life",
        title: "Designed for real life",
        description:
          "We create approachable products and tools that can fit into ordinary routines, with thoughtful design, adjustable experiences and a low threshold for getting started.",
      },
    ],
  },
  focus: {
    visible: true,
    eyebrow: "WHAT WE’RE BUILDING",
    title: "Built around one focus.",
    introduction:
      "Neuvago is centred on the vagus nerve and parasympathetic nervous system. We develop practical products, digital tools and science-informed resources that make this field easier to understand and explore.",
    image: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "Neuvago device.",
    },
    areas: [
      {
        id: "device",
        title: "The Neuvago device",
        priority: "primary",
        description:
          "Non-invasive vagus nerve stimulation is the core of Neuvago. Our handheld device is designed to make ear-based stimulation approachable, adjustable and practical for everyday use.",
      },
      {
        id: "digital-tools",
        title: "Digital tools",
        priority: "secondary",
        description:
          "The Neuvago App brings together professionally guided sessions, breathing practices and personal tools for sleep, stress, focus and recovery.",
      },
      {
        id: "learn-research",
        title: "Learn & Research",
        priority: "secondary",
        description:
          "Learn offers clear educational articles, while Research provides access to scientific studies, summaries and context across VNS, taVNS and nervous system regulation.",
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
