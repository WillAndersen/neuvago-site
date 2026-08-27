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
      "Neuvago leverer skånsomme, justerbare elektriske impulser gjennom en øreelektrode ved det ytre øret. Enheten er utviklet som en ørebasert VNS-enhet, og forklaringen nedenfor viser den tilsiktede signalveien uten å være dokumentasjon på at det tilsiktede nervemålet faktisk er påvirket eller at den enkelte bruker får en bestemt effekt.",
    benefitStatement:
      "En ikke-invasiv, ørebasert tilnærming med fire moduser på 20 minutter for strukturerte velværerutiner.",
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
    eyebrow: "SIGNALVEIEN",
    title: "Fra det ytre øret til større autonome nettverk.",
    description:
      "Sekvensen nedenfor viser den tilsiktede signalveien for ørebasert stimulering. Den er en forklaringsmodell og dokumenterer ikke i seg selv at det tilsiktede nervemålet er påvirket eller at brukeren får en bestemt effekt.",
    steps: [
      {
        id: "outer-ear",
        label: "Ytre øre",
        description:
          "Øreelektroden tilfører skånsomme, justerbare elektriske impulser ved det ytre øret.",
      },
      {
        id: "vagus-nerve",
        label: "Vagusnerven",
        description:
          "Plasseringen er valgt for å rette stimuleringen mot områder som brukes i aurikulær VNS. Ørets innervasjon er sammensatt, og sensasjon alene dokumenterer ikke at det tilsiktede nervemålet er påvirket.",
      },
      {
        id: "brainstem",
        label: "Hjernestammen",
        description:
          "I taVNS-forskning undersøkes hvordan sensoriske signaler fra aurikulær stimulering kan nå og påvirke signalbehandling i hjernestammen.",
      },
      {
        id: "autonomic-networks",
        label: "Autonome nettverk",
        description:
          "Forskning undersøker videre forbindelser til større autonome nettverk. Et foreslått mekanismeforløp er ikke automatisk et klinisk eller praktisk utfall.",
      },
    ],
  },
  whyItMatters: {
    visible: true,
    eyebrow: "HVORFOR DET ER VIKTIG",
    title: "Hvorfor vagusnerven er viktig.",
    description:
      "Vagusnerven er en sentral nervebane i det parasympatiske nervesystemet. Den fører signaler mellom hjernen og kroppen og bidrar til prosessene som hjelper oss med å respondere på belastning, finne ro og restituere.",
    productConnection:
      "Neuvago gir et ikke-invasivt, ørebasert format for korte, strukturerte velværeøkter i hverdagen.",
    areas: [
      {
        id: "better-sleep",
        label: "Søvn og hvile",
        description:
          "Å bevege seg fra årvåkenhet mot hvile er en del av kroppens naturlige forberedelse til søvn.",
      },
      {
        id: "stress-calm",
        label: "Stressrespons",
        description:
          "Autonom regulering påvirker hvordan kroppen reagerer på hverdagens krav, og hvordan den finner ro etterpå.",
      },
      {
        id: "focus-mental-clarity",
        label: "Fokus og mental klarhet",
        description:
          "En roligere indre tilstand kan skape bedre forhold for oppmerksomhet, konsentrasjon og klar tenkning.",
      },
      {
        id: "recovery",
        label: "Restitusjon og balanse",
        description:
          "Parasympatiske prosesser støtter hvile, gjenoppbygging og tilbakevending mot balanse etter fysisk eller mental belastning.",
      },
    ],
    researchBridge: {
      title: "Fordyp deg i vitenskapen.",
      description:
        "Utforsk forskning på transkutan aurikulær vagusnervestimulering (taVNS), inkludert søvn, stress, autonom funksjon, HRV, nervebaner i hjernen, sikkerhet og tolerabilitet. Funnene er metode- og protokollavhengige og dokumenterer ikke automatisk en bestemt effekt av Neuvago.",
      cta: {
        label: "Utforsk forskningen",
        href: "/no/forskning",
      },
    },
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
    eyebrow: "NEUVAGO-ENHETEN",
    title: "Klar til å oppleve Neuvago?",
    description:
      "Oppdag enheten, de fire stimuleringsmodusene og alt som følger med Neuvago.",
    primaryCta: howItWorksHeroPrimaryCtaNo,
    secondaryCta: {
      label: "Utforsk produktet",
      href: "/no/produkt",
    },
    image: {
      src: "/images/neuvago/launch/product-hero-desktop.webp",
      alt: "Neuvago-enhet for vagusnervestimulering.",
    },
  },
} satisfies HowItWorksV2Content;
