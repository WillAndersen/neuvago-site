export type SupportV2Link = {
  label: string;
  href: string;
};

export type SupportV2ResourceItem = SupportV2Link & {
  id: string;
  fileType?: "PDF";
  openInNewTab?: boolean;
};

export type SupportV2ResourceGroup = {
  id: string;
  title: string;
  description: string;
  items: readonly SupportV2ResourceItem[];
};

export type SupportV2FaqItem = {
  id: string;
  question: string;
  answer?: string;
};

export type SupportV2Content = {
  hero: {
    visible: boolean;
    eyebrow: string;
    title: string;
    introduction: string;
    primaryCta: SupportV2Link;
    secondaryCta: SupportV2Link;
  };
  resources: {
    visible: boolean;
    eyebrow: string;
    title: string;
    introduction: string;
    groups: readonly SupportV2ResourceGroup[];
  };
  faq: {
    visible: boolean;
    title: string;
    items: readonly SupportV2FaqItem[];
  };
  contact: {
    visible: boolean;
    title: string;
    email: string;
    fields: {
      name: string;
      email: string;
      supportTopic: string;
      message: string;
      orderNumber: string;
      deviceSerialNumber: string;
      attachment: string;
    };
    supportTopics: readonly string[];
    privacy: SupportV2Link;
  };
};

export const supportV2Content = {
  hero: {
    visible: true,
    eyebrow: "SUPPORT",
    title: "How can we help?",
    introduction:
      "Find product guides, safety information and answers to common questions, or contact Neuvago for personal support.",
    primaryCta: {
      label: "Contact support",
      href: "#contact-support",
    },
    secondaryCta: {
      label: "Browse support resources",
      href: "#support-resources",
    },
  },
  resources: {
    visible: true,
    eyebrow: "SUPPORT RESOURCES",
    title: "Find the right guide.",
    introduction:
      "Start with the essential guides for setting up, using and caring for Neuvago, or review the approved safety information before use.",
    groups: [
      {
        id: "getting-started",
        title: "Getting started",
        description:
          "Find clear guidance on preparing the earpiece, positioning it correctly in the left ear, choosing a stimulation mode and adjusting the intensity.",
        items: [],
      },
      {
        id: "using-and-caring",
        title: "Using and caring for Neuvago",
        description:
          "Find guidance on stimulation intensity, conductive gel or water, cleaning the earpiece, charging, storage and general product care.",
        items: [],
      },
      {
        id: "safety-and-suitability",
        title: "Safety & suitability",
        description:
          "Review contraindications, intended use and the full safety information before using Neuvago for the first time.",
        items: [
          {
            id: "intended-use",
            label: "Read Intended Use",
            href: "/legal/intended-use",
          },
        ],
      },
    ],
  },
  faq: {
    visible: true,
    title: "Frequently asked questions",
    items: [
      {
        id: "getting-started",
        question: "How do I get started with Neuvago?",
      },
      {
        id: "stimulation-feel",
        question: "What should the stimulation feel like?",
      },
      {
        id: "cannot-feel-stimulation",
        question: "What should I do if I cannot feel the stimulation?",
      },
      {
        id: "clean-earpiece",
        question: "How do I clean the earpiece?",
      },
      {
        id: "full-safety-information",
        question: "Where can I find the full safety information?",
      },
    ],
  },
  contact: {
    visible: true,
    title: "Still need help?",
    email: "contact@neuvago.com",
    fields: {
      name: "Name",
      email: "Email",
      supportTopic: "Support topic",
      message: "Message",
      orderNumber: "Order number",
      deviceSerialNumber: "Device serial number",
      attachment: "Attachment",
    },
    supportTopics: [
      "Product use",
      "Earpiece or stimulation",
      "Technical issue",
      "Safety question",
      "Order or delivery",
      "Return or warranty",
      "App or account",
      "Other",
    ],
    privacy: {
      label: "Privacy Policy",
      href: "/legal/privacy-policy",
    },
  },
} as const satisfies SupportV2Content;
