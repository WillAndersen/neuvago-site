import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export const howItWorksV2ContentNo = {
  hero: {
    visible: true,
    title: "Slik stimulerer Neuvago vagusnerven.",
    desktopImage: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "",
    },
    mobileImage: {
      src: "/images/neuvago/product-hero-mobile.webp",
      alt: "",
    },
  },
  mechanism: {
    visible: true,
    title: "Fra det ytre øret til større autonome nettverk.",
    steps: [
      { id: "outer-ear", label: "Ytre øre" },
      { id: "vagus-nerve", label: "Vagusnerven" },
      { id: "brainstem", label: "Hjernestammen" },
      { id: "autonomic-networks", label: "Autonome nettverk" },
    ],
  },
  whyItMatters: {
    visible: true,
    title: "Hvorfor vagusnervestimulering er viktig.",
    areas: [
      { id: "better-sleep", label: "Bedre søvn" },
      { id: "stress-calm", label: "Stress og ro" },
      {
        id: "focus-mental-clarity",
        label: "Fokus og mental klarhet",
      },
      { id: "recovery", label: "Restitusjon" },
    ],
  },
  modes: {
    visible: true,
    title: "Fire moduser. Fire ulike stimuleringsmønstre.",
    items: [
      { id: "sleep", name: "Sleep" },
      { id: "relax", name: "Relax" },
      { id: "meditation", name: "Meditation" },
      { id: "relief", name: "Relief" },
    ],
  },
  whatToExpect: {
    visible: true,
    title: "Hva du kan forvente av en Neuvago-økt.",
    facts: [
      { id: "duration", label: "20-minutters økter" },
      { id: "intensity", label: "30 intensitetsnivåer" },
      {
        id: "stimulation",
        label: "Mild, justerbar stimulering",
      },
    ],
  },
  research: {
    visible: true,
    title: "Et voksende forskningsfelt.",
    image: {
      src: "/images/neuvago/research-hub-evidence-desktop.webp",
      alt: "",
    },
  },
  finalCta: {
    visible: true,
    title: "Klar til å oppleve Neuvago?",
    image: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "",
    },
  },
} satisfies HowItWorksV2Content;
