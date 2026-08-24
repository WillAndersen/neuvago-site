import { commerceContent } from "@/content/commerce";
import type {
  HowItWorksV2Cta,
  HowItWorksV2Content,
} from "@/content/how-it-works-v2";

const howItWorksHeroPrimaryCtaNo = {
  label: commerceContent.isLive
    ? "Kjøp Neuvago"
    : "Få lanseringstilgang",
  href: commerceContent.shopHref,
} satisfies HowItWorksV2Cta;

export const howItWorksV2ContentNo = {
  hero: {
    visible: true,
    eyebrow: "SLIK FUNGERER DET",
    title: "Slik stimulerer Neuvago vagusnerven.",
    mainIntroduction:
      "Neuvago leverer skånsomme, justerbare elektriske impulser gjennom en øreelektrode ved det ytre øret for å stimulere den aurikulære grenen av vagusnerven. Disse sensoriske signalene beveger seg mot hjernestammen, der vagal informasjon videresendes til større nettverk som er involvert i autonom regulering og kommunikasjon mellom hjerne og kropp.",
    benefitStatement:
      "En ikke-invasiv tilnærming utviklet for å støtte bedre søvn, roligere responser på stress i hverdagen, fokusert tid og restitusjon.",
    primaryCta: howItWorksHeroPrimaryCtaNo,
    secondaryCta: {
      label: "Utforsk produktet",
      href: "/no/produkt",
    },
    quickFacts: [
      "FIRE STIMULERINGSMODUSER",
      "20-MINUTTERS ØKTER",
      "30 INTENSITETSNIVÅER",
    ],
    desktopImage: {
      src: "/images/neuvago/product-hero-desktop.webp",
      alt: "Neuvago-enhet for vagusnervestimulering.",
    },
    mobileImage: {
      src: "/images/neuvago/product-hero-mobile.webp",
      alt: "Neuvago-enhet for vagusnervestimulering.",
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
