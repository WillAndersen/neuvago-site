import { commerceContent } from "@/content/commerce";

export type ProductV2Cta = {
  label: string;
  href: string;
};

export type ProductV2Image = {
  src: string;
  alt: string;
};

export type ProductV2Card = {
  title: string;
  description: string;
};

export type ProductV2LinkCard = ProductV2Card & {
  href: string;
};

export type ProductV2Benefit = ProductV2Card;

export type ProductV2FlowItem = ProductV2Card & {
  label: string;
};

export type ProductV2Specification = {
  label: string;
  value: string;
};

export type ProductV2Accordion = {
  title: string;
  description?: string;
  items?: readonly string[];
  specifications?: readonly ProductV2Specification[];
  link?: ProductV2Cta;
};

export type ProductV2FaqItem = {
  question: string;
  answer: string;
  answerLink?: ProductV2Cta;
};

/**
 * Central commerce state for the English Product page.
 *
 * Keep false until checkout, payment, price, delivery, returns and warranty
 * have been tested and approved together.
 */
const purchaseOpen: boolean = false;
const currentPrice: string | null = null;

const purchaseCta: ProductV2Cta = {
  label: purchaseOpen ? "Shop Neuvago" : "View purchase details",
  href: "#buy",
};

const heroPurchaseCta: ProductV2Cta = {
  label: commerceContent.ctaLabel,
  href: commerceContent.shopHref,
};

export const productV2Content = {
  hero: {
    eyebrow: "Neuvago",
    title: "A non-invasive vagus nerve stimulator for everyday use.",
    description:
      "Designed to support better sleep, calmer responses to everyday stress, focused time and recovery.",
    technologyDescription:
      "Neuvago delivers gentle, adjustable stimulation through an earpiece at the outer ear, with four 20-minute modes designed for different needs and moments.",
    primaryCta: heroPurchaseCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies ProductV2Cta,
    desktopImage: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "Close-up of the Neuvago device and its physical controls.",
    } satisfies ProductV2Image,
    mobileImage: {
      src: "/images/neuvago/launch/product-hero-mobile.webp",
      alt: "Close-up of the Neuvago device for a mobile product layout.",
    } satisfies ProductV2Image,
    proofLine: [
      "NON-INVASIVE",
      "FOUR 20-MINUTE MODES",
      "30 INTENSITY LEVELS",
    ],
  },

  benefits: {
    eyebrow: "Why Neuvago",
    title: "Designed for the way you want to feel.",
    description:
      "Neuvago combines four stimulation modes with adjustable intensity, giving you a simple way to support better sleep, calmer responses to everyday stress, focused time and recovery.",
    image: {
      src: "/images/neuvago/launch/product-lifestyle-card.webp",
      alt: "Neuvago device in a calm home setting for an everyday wellness routine.",
    } satisfies ProductV2Image,
    items: [
      {
        title: "Better Sleep",
        description:
          "Support the transition from alertness to rest, helping create the conditions for deeper relaxation and better sleep quality.",
      },
      {
        title: "Stress & Calm",
        description:
          "Support a calmer response to everyday stress and help the nervous system shift toward a more regulated state.",
      },
      {
        title: "Focus & Mental Clarity",
        description:
          "Create a calmer internal state that can support attention, mental clarity and focused time.",
      },
      {
        title: "Recovery",
        description:
          "Support parasympathetic activity and the body's natural processes for rest, recovery and autonomic balance.",
      },
    ] satisfies ProductV2Benefit[],
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "How Neuvago stimulates the vagus nerve.",
    description:
      "Neuvago delivers gentle, adjustable electrical impulses through an earpiece at the outer ear to stimulate the auricular branch of the vagus nerve. These sensory signals travel toward the brainstem, where vagal information is relayed into wider networks involved in autonomic regulation and brain–body communication.",
    image: {
      src: "/images/neuvago/auricular-vns-education-desktop.webp",
      alt: "Neuvago device beside a clean illustration of the outer ear.",
    } satisfies ProductV2Image,
    flow: [
      {
        label: "01",
        title: "Outer ear",
        description:
          "The earpiece applies gentle, adjustable electrical impulses at the outer ear.",
      },
      {
        label: "02",
        title: "Vagus nerve",
        description:
          "The impulses stimulate the auricular branch of the vagus nerve, which carries sensory information from parts of the outer ear.",
      },
      {
        label: "03",
        title: "Brainstem",
        description:
          "Signals travel toward the brainstem, where vagal sensory information is received and relayed.",
      },
      {
        label: "04",
        title: "Autonomic networks",
        description:
          "From the brainstem, vagal pathways connect with wider networks involved in brain–body communication and the body's shift between activation, rest and recovery.",
      },
    ] satisfies ProductV2FlowItem[],
    primaryCta: {
      label: "See how Neuvago works",
      href: "/how-it-works",
    } satisfies ProductV2Cta,
    secondaryCta: {
      label: "Explore taVNS Research",
      href: "/research/topics/auricular-vagus-nerve-stimulation",
    } satisfies ProductV2Cta,
  },

  modes: {
    eyebrow: "FOUR STIMULATION MODES",
    title: "Four modes, each with its own rhythm.",
    description:
      "Sleep, Relax, Meditation and Relief use distinct stimulation patterns for different needs and moments. Every mode runs for 20 minutes, with 30 adjustable intensity levels.",
    detailLabels: {
      intendedUse: "Intended use",
      stimulationPattern: "Stimulation pattern",
    },
    items: [
      {
        id: "sleep",
        name: "Sleep",
        intendedUse:
          "Designed for evening wind-down, rest and better sleep.",
        stimulationPattern:
          "Sleep alternates between faster and slower stimulation rhythms, creating a gentle, changing pattern.",
        sensation:
          "Typical sensation: Very mild stimulation with a light tingling or pricking sensation at the ear.",
      },
      {
        id: "relax",
        name: "Relax",
        intendedUse:
          "Designed for everyday stress, relaxation and a calmer state.",
        stimulationPattern:
          "Relax follows a steady rhythm of four seconds of stimulation followed by four seconds of pause.",
        sensation:
          "Typical sensation: Very mild stimulation with a soft tingling or pricking sensation.",
      },
      {
        id: "meditation",
        name: "Meditation",
        intendedUse:
          "Designed for meditation, focus and concentration.",
        stimulationPattern:
          "Meditation follows the same four-seconds-on, four-seconds-off rhythm as Relax, with a denser pulse pattern.",
        sensation:
          "Typical sensation: Mild tingling or pricking, usually more pronounced than Relax.",
      },
      {
        id: "relief",
        name: "Relief",
        intendedUse:
          "Designed for moments of tension and discomfort.",
        stimulationPattern:
          "Relief uses slow, distinct pulses followed by four seconds of pause.",
        sensation:
          "Typical sensation: More noticeable, individual pricking pulses.",
      },
    ],
    intensityNote:
      "The intensity of every mode is adjustable. Increase it gradually until the stimulation feels noticeable but comfortable.",
    cta: heroPurchaseCta,
  },

  features: {
    eyebrow: "Product experience",
    title: "The Neuvago product experience.",
    description:
      "The most useful product features are the ones that make each routine clear, adjustable and easy to begin.",
    image: {
      src: "/images/neuvago/launch/product-detail-left-desktop.webp",
      alt: "Close product view of the Neuvago device and its physical controls.",
    } satisfies ProductV2Image,
    cards: [
      {
        title: "Adjustable intensity",
        description:
          "Increase or decrease the stimulation gradually to find a comfortable level in line with the supplied guidance.",
      },
      {
        title: "Simple controls",
        description:
          "Manage the session directly using the physical controls on the device.",
      },
      {
        title: "Four stimulation modes",
        description:
          "Choose from four named programmes designed for different routines and moments.",
      },
      {
        title: "Designed for comfort",
        description:
          "A non-invasive, ear-based format designed for simple everyday use.",
      },
    ] satisfies ProductV2Card[],
  },

  useSequence: {
    eyebrow: "Simple to use",
    title: "Position. Choose. Adjust. Begin.",
    description:
      "Use Neuvago in four simple steps. Follow the supplied Quick Start Guide for complete placement, conductive gel, session duration, care and safety information.",
    steps: [
      {
        title: "Position",
        description: "Position the earpiece as shown in the instructions.",
      },
      {
        title: "Choose",
        description: "Select one of the four named stimulation modes.",
      },
      {
        title: "Adjust",
        description:
          "Increase the intensity gradually to a comfortable level.",
      },
      {
        title: "Begin",
        description:
          "Start the session and follow the supplied product guidance.",
      },
    ] satisfies ProductV2Card[],
    cta: {
      label: "See complete use guidance",
      href: "/how-it-works",
    } satisfies ProductV2Cta,
  },

  research: {
    eyebrow: "RESEARCH",
    title: "The science behind ear-based vagus nerve stimulation.",
    description:
      "Neuvago uses transcutaneous auricular vagus nerve stimulation (taVNS), a non-invasive approach that delivers gentle electrical stimulation through the outer ear. Research is exploring taVNS across areas including sleep, stress, autonomic function, heart rate variability (HRV), brain pathways, safety and tolerability.",
    areas: [
      {
        title: "Sleep & Stress",
        description:
          "Research is exploring taVNS in relation to sleep quality, stress responses and recovery.",
      },
      {
        title: "Autonomic Function & HRV",
        description:
          "Studies examine taVNS in relation to autonomic markers, including heart rate variability.",
      },
      {
        title: "Brain Pathways",
        description:
          "Human neuroimaging research has investigated how auricular stimulation engages central pathways associated with the vagus nerve.",
      },
      {
        title: "Safety & Tolerability",
        description:
          "Systematic research has assessed tolerability and reported adverse events across human taVNS studies.",
      },
    ] satisfies ProductV2Card[],
    cta: {
      label: "Explore the Research",
      href: "/research",
    } satisfies ProductV2Cta,
    contextNote:
      "Research presented relates to VNS and taVNS as fields of study. Findings vary between devices, stimulation protocols and study populations.",
  },

  buyBox: {
    gallery: [
      {
        src: "/images/neuvago/launch/product-gallery-front.webp",
        alt: "Neuvago device viewed from the front.",
      },
      {
        src: "/images/neuvago/launch/product-gallery-angle.webp",
        alt: "Neuvago device viewed from an angle.",
      },
      {
        src: "/images/neuvago/launch/product-gallery-detail.webp",
        alt: "Close detail of the Neuvago device controls and finish.",
      },
    ] satisfies ProductV2Image[],
    eyebrow: "NEUVAGO",
    title: "Everything you need to begin.",
    description:
      "Neuvago includes four 20-minute stimulation modes, 30 adjustable intensity levels and one year of access to the Neuvago App.",
    productName: "Neuvago",
    productDescription: "Non-invasive vagus nerve stimulator",
    price: currentPrice,
    purchaseOpen,
    includedTitle: "What's included",
    includedItems: [
      "Neuvago device",
      "Left earpiece",
      "Conductive gel",
      "Spray bottle",
      "Charging cable",
      "Felt case",
      "User Manual",
      "Quick Start Guide",
      "One year of Neuvago App access",
    ],
    primaryCta: heroPurchaseCta,
    secondaryCta: {
      label: "How it works",
      href: "/how-it-works",
    } satisfies ProductV2Cta,
  },

  productDetails: {
    eyebrow: "PRODUCT DETAILS",
    title: "The details behind Neuvago.",
    description:
      "Explore confirmed device features, technical specifications, safety guidance and everything included with Neuvago.",
    accordions: [
      {
        title: "Device Features",
        description:
          "Neuvago combines non-invasive, ear-based vagus nerve stimulation with four dedicated modes and adjustable intensity.",
        items: [
          "Four stimulation modes: Sleep, Relax, Meditation and Relief",
          "30 adjustable intensity levels",
          "On-device controls for mode selection, intensity and session start or pause",
          "On-device display showing mode and session information",
          "Rechargeable handheld design",
          "Left earpiece for ear-based stimulation",
        ],
      },
      {
        title: "Technical Specifications",
        specifications: [
          {
            label: "Model",
            value: "NVG-001",
          },
          {
            label: "Session duration",
            value: "20 minutes per mode",
          },
          {
            label: "Stimulation modes",
            value: "Sleep, Relax, Meditation and Relief",
          },
          {
            label: "Intensity levels",
            value: "30",
          },
          {
            label: "Output intensity",
            value: "0–8 mA",
          },
          {
            label: "Frequency range",
            value: "1–100 Hz",
          },
          {
            label: "Pulse width",
            value: "200–300 μs",
          },
          {
            label: "Battery capacity",
            value: "2000 mAh",
          },
          {
            label: "Input",
            value: "5V 1A",
          },
        ],
      },
      {
        title: "Safety & Suitability",
        description:
          "Read the User Manual and all supplied safety information before using Neuvago for the first time.",
        items: [
          "Use Neuvago only as directed in the supplied User Manual.",
          "Place the supplied left earpiece securely and ensure even, comfortable contact.",
          "Use the earpiece only on intact skin. Do not use it on wounds, irritated skin, bruises, abrasions or inflamed areas.",
          "Begin at a low intensity and increase it gradually until the stimulation feels noticeable but comfortable.",
          "Stop using the device if you experience significant discomfort or irritation.",
          "If you are uncertain whether Neuvago is suitable for you, consult a qualified healthcare professional before use.",
          "Keep the device and accessories out of reach of children.",
        ],
        link: {
          label: "View full safety information",
          href: "/support",
        },
      },
      {
        title: "What’s Included",
        description: "Every Neuvago package includes:",
        items: [
          "Neuvago device",
          "Left earpiece",
          "Charging cable",
          "Felt case",
          "User Manual",
          "Quick Start Guide",
          "Spray bottle",
          "Conductive gel",
          "One year of access to the Neuvago App",
        ],
      },
    ] satisfies ProductV2Accordion[],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions about Neuvago?",
    description:
      "Clear answers about the device, its stimulation modes, what a session feels like, what is included and the research behind taVNS.",
    items: [
      {
        question: "What is Neuvago?",
        answer:
          "Neuvago is a non-invasive vagus nerve stimulator designed for everyday use. It stimulates the auricular branch of the vagus nerve through a left earpiece at the outer ear and offers four 20-minute modes with 30 adjustable intensity levels.",
      },
      {
        question: "What is Neuvago designed to support?",
        answer:
          "Neuvago is designed to support better sleep, calmer responses to everyday stress, focused time and recovery. It can be used when you want to wind down, create a calmer state, prepare for sleep, focus or make space for rest and recovery.",
      },
      {
        question: "What does the stimulation feel like?",
        answer:
          "Most Neuvago modes provide mild or very mild stimulation that feels like a light tingling or pricking sensation at the ear. The intensity can be adjusted in small steps and should feel noticeable but comfortable. Relief uses slower, more distinct pulses and may therefore feel more pronounced than the other modes.",
        answerLink: {
          label: "Read the sensation and comfort guide",
          href: "/learn/what-does-vagus-nerve-stimulation-feel-like",
        } satisfies ProductV2Cta,
      },
      {
        question: "What are the four stimulation modes?",
        answer:
          "Neuvago includes four stimulation modes: Sleep, Relax, Meditation and Relief. Sleep alternates between faster and slower stimulation rhythms and is designed for evening wind-down, rest and better sleep. Relax uses a gentle rhythm of four seconds of stimulation followed by four seconds of pause, designed for everyday stress, relaxation and a calmer state. Meditation uses the same four-seconds-on, four-seconds-off rhythm with a denser pulse pattern, designed for meditation, focus and concentration. Relief uses slower, more distinct pulses followed by four seconds of pause, designed for moments of tension and discomfort. Every mode runs for 20 minutes, and the stimulation intensity can be adjusted directly on the device.",
      },
      {
        question: "How long is a Neuvago session?",
        answer:
          "Each Neuvago mode runs for 20 minutes. Begin at a low intensity and increase it gradually until the stimulation feels noticeable but comfortable.",
      },
      {
        question: "What is included with Neuvago?",
        answer:
          "The Neuvago package includes the Neuvago device, a left earpiece, charging cable, felt case, User Manual, Quick Start Guide, spray bottle and conductive gel. One year of access to the Neuvago App is also included.",
      },
      {
        question: "Is one year of the Neuvago App included?",
        answer:
          "Yes. Every Neuvago device includes one year of access to the Neuvago App, with professionally guided sessions and breathing practices for Sleep, Stress, Focus and Recovery.",
      },
      {
        question: "What does research say about taVNS?",
        answer:
          "Vagus nerve stimulation has been studied for decades, and a growing body of peer-reviewed research is examining transcutaneous auricular vagus nerve stimulation (taVNS). Research includes systematic reviews, meta-analyses, randomized studies and human neuroimaging across areas such as sleep, stress, autonomic function, heart rate variability (HRV), brain pathways, headache, gut–brain function, safety and tolerability. Findings are encouraging across several areas, while results vary between devices, stimulation protocols and study populations.",
        answerLink: {
          label: "Explore the Research",
          href: "/research",
        } satisfies ProductV2Cta,
      },
      {
        question: "What safety information should I review before use?",
        answer:
          "Read the User Manual and all supplied safety information before using Neuvago for the first time. Use the earpiece only on intact skin, begin at a low intensity and stop using the device if you experience significant discomfort or irritation. If you are uncertain whether Neuvago is suitable for you, consult a qualified healthcare professional before use.",
        answerLink: {
          label: "View full safety information",
          href: "/support",
        } satisfies ProductV2Cta,
      },
    ] satisfies ProductV2FaqItem[],
  },

  finalCta: {
    eyebrow: "Neuvago",
    title: purchaseOpen ? "Shop Neuvago." : "Explore Neuvago.",
    description: purchaseOpen
      ? "Review the device, what is included and continue to secure checkout."
      : "Review what is included, how the device works and the purchase information available before checkout opens.",
    primaryCta: purchaseCta,
    secondaryCta: {
      label: "How it works",
      href: "#how-it-works",
    } satisfies ProductV2Cta,
    desktopImage: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "Neuvago device standing alone in a calm product setting.",
    } satisfies ProductV2Image,
    mobileImage: {
      src: "/images/neuvago/product-hero-mobile.webp",
      alt: "Close-up of the Neuvago device for the final mobile call to action.",
    } satisfies ProductV2Image,
  },
} as const;
