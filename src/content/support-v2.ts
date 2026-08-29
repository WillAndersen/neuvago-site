export type SupportV2Link = {
  label: string;
  href: string;
};

export type SupportV2ResourceItem = {
  id: string;
  label: string;
  href?: string;
};

export type SupportV2ResourceGroup = {
  id: string;
  title: string;
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
    eyebrow?: string;
    title: string;
    introduction?: string;
    primaryCta: SupportV2Link;
    secondaryCta?: SupportV2Link;
  };
  resources: {
    visible: boolean;
    title: string;
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
    title: "How can we help?",
    primaryCta: {
      label: "Contact Support",
      href: "#contact-support",
    },
    secondaryCta: {
      label: "Support Resources",
      href: "#support-resources",
    },
  },
  resources: {
    visible: true,
    title: "Support resources.",
    groups: [
      {
        id: "getting-started",
        title: "Getting started",
        items: [
          {
            id: "quick-start-guide",
            label: "Quick Start Guide",
          },
          {
            id: "preparing-the-earpiece",
            label: "Preparing the earpiece",
          },
          {
            id: "positioning-the-earpiece",
            label: "Positioning the earpiece in the left ear",
          },
          {
            id: "choosing-a-stimulation-mode",
            label: "Choosing a stimulation mode",
          },
          {
            id: "adjusting-the-intensity",
            label: "Adjusting the intensity",
          },
        ],
      },
      {
        id: "using-and-caring",
        title: "Using and caring for Neuvago",
        items: [
          {
            id: "user-manual",
            label: "User Manual",
          },
          {
            id: "conductive-gel-or-water",
            label: "Conductive gel or water",
          },
          {
            id: "cleaning-the-earpiece",
            label: "Cleaning the earpiece",
          },
          {
            id: "charging",
            label: "Charging",
          },
          {
            id: "storage-and-care",
            label: "Storage and care",
          },
        ],
      },
      {
        id: "safety-and-suitability",
        title: "Safety & suitability",
        items: [
          {
            id: "full-safety-information",
            label: "Full safety information",
          },
          {
            id: "contraindications",
            label: "Contraindications",
          },
          {
            id: "intended-use",
            label: "Intended use",
            href: "/legal/intended-use",
          },
          {
            id: "when-to-stop-use",
            label: "When to stop use",
          },
          {
            id: "professional-guidance",
            label: "When to seek professional guidance",
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
