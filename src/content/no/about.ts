import { aboutPageContent } from "@/content/about";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const aboutPageContentNo = {
  ...aboutPageContent,
  hero: {
    ...aboutPageContent.hero,
    eyebrow: "Om Neuvago",
    title: "Neuvago er bygget rundt roligere daglig regulering.",
    description:
      "Vi bygger Neuvago som et mer gjennomtenkt alternativ til opplevelser som føles for kliniske, for intense eller for frakoblet hverdagen.",
    primaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    desktopImage: {
      src: "/images/neuvago/launch/no-home-hero-desktop.webp",
      alt: "Neuvago-enheten og appen vist sammen i en rolig, nordisk komposisjon.",
    },
    mobileImage: {
      src: "/images/neuvago/launch/no-home-hero-mobile.webp",
      alt: "Neuvago-enheten og appen vist sammen for mobil om-side.",
    },
    proofLine: ["Rolig design", "Enhet + app", "Bygget for hverdagen"],
  },

  whyItExists: {
    ...aboutPageContent.whyItExists,
    title: "Hvorfor Neuvago finnes",
    description:
      "Mange kjenner seg fanget mellom to ytterpunkter: opplevelser som føles for kliniske, og opplevelser som føles for gadget-drevne. Neuvago bygges som en roligere mellomvei — mer jordet, mer støttende og enklere å leve med.",
    cards: [
      {
        title: "Mindre intensitet",
        description:
          "Vi mener støtte skal føles roligere og mer håndterbar, ikke mer overveldende.",
      },
      {
        title: "Mindre friksjon",
        description:
          "Opplevelsen skal være enkel å forstå, enkel å starte og enkel å vende tilbake til over tid.",
      },
      {
        title: "Mer kontinuitet",
        description:
          "Vi bryr oss om opplevelser mennesker faktisk kan bruke i hverdagen.",
      },
    ],
    image: {
      src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
      alt: "Neuvago-enheten og appen vist sammen som ett sammenkoblet system.",
    },
  },

  approach: {
    ...aboutPageContent.approach,
    eyebrow: "Vår tilnærming",
    title: "En roligere filosofi i praksis",
    description:
      "Neuvago formes av noen få kjerneideer: ro fremfor intensitet, støtte fremfor press og konsistens fremfor ytterpunkter. De prinsippene påvirker enheten, appen og hele opplevelsen.",
    cards: [
      {
        title: "Ro fremfor intensitet",
        description:
          "Opplevelsen skal føles jordet og støttende, ikke overstimulerende.",
      },
      {
        title: "Støtte fremfor press",
        description:
          "Målet er ikke å skape prestasjonsstress, men en jevnere følelse av veiledning og tilbakevending.",
      },
      {
        title: "Konsistens fremfor ytterpunkter",
        description:
          "Vi bryr oss mer om realistisk gjentakelse enn idealiserte enkeltøyeblikk.",
      },
      {
        title: "Klarhet fremfor kompleksitet",
        description:
          "Systemet skal føles forståelig, brukbart og enkelt å komme tilbake til.",
      },
    ],
    detailImage: {
      src: "/images/neuvago/launch/product-gallery-detail.webp",
      alt: "Nærbilde av materialer og finish på Neuvago-enheten.",
    },
  },

  connectedSystem: {
    ...aboutPageContent.connectedSystem,
    title: "Designet som et sammenkoblet system",
    description:
      "Neuvago er ikke bare en enhet og ikke bare en app. Det er designet som én sammenkoblet opplevelse der det fysiske laget og veiledningslaget støtter hverandre.",
    features: [
      {
        title: "Et fysisk startpunkt",
        description: "Enheten skaper en rolig inngang til opplevelsen.",
      },
      {
        title: "Et veiledende lag",
        description:
          "Appen legger til økter, struktur og kontinuitet over tid.",
      },
      {
        title: "En mer komplett opplevelse",
        description:
          "Sammen føles systemet tydeligere, mer jordet og enklere å vende tilbake til.",
      },
    ],
    image: {
      src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
      alt: "Neuvago-enheten og appen vist sammen i en varm, premium komposisjon.",
    },
    supportingImages: [
      {
        src: "/images/neuvago/app-hero-desktop.webp",
        alt: "Neuvago-appens startskjerm vist i et rolig grensesnitt.",
      },
      {
        src: "/images/neuvago/launch/product-phone-app.webp",
        alt: "Neuvago-enheten og appen vist sammen.",
      },
    ],
    cta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },

  calmDesign: {
    ...aboutPageContent.calmDesign,
    title: "En rolig designfilosofi",
    description:
      "Neuvago er bevisst formet for å føles varm, tydelig og nedtonet. Vi bryr oss om å redusere støy, dempe friksjon og skape en mer støttende visuell opplevelse.",
    cards: [
      {
        title: "Varm visuell tone",
        description:
          "En mykere palett og roligere atmosfære fremfor kalde eller kliniske signaler.",
      },
      {
        title: "Enkelt hierarki",
        description:
          "Tydelig struktur gjør opplevelsen lettere å forstå og navigere.",
      },
      {
        title: "Mindre visuell støy",
        description:
          "Systemet skal føles roligere og mer luftig, ikke tettpakket eller krevende.",
      },
      {
        title: "Premium tilbakeholdenhet",
        description:
          "Et mer gjennomtenkt og jordet visuelt språk fremfor høylytt gadget-estetikk.",
      },
    ],
    detailImages: [
      {
        src: "/images/neuvago/launch/product-hero-desktop.webp",
        alt: "Neuvago-enheten vist i et rolig premium produktbilde.",
      },
      {
        src: "/images/neuvago/app-hero-desktop.webp",
        alt: "Neuvago-appen vist i en rolig premium layout.",
      },
    ],
  },

  builtForEverydayLife: {
    ...aboutPageContent.builtForEverydayLife,
    title: "Bygget for hverdagen",
    description:
      "Neuvago er designet for å støtte ekte rutiner, ikke ideelle forhold. Det betyr roligere starter, jevnere pauser og mer bevisste overganger gjennom dagen.",
    cards: [
      {
        title: "Morgenrutine",
        description:
          "En mykere start når du ønsker en roligere inngang til dagen.",
      },
      {
        title: "Pause på dagtid",
        description:
          "En praktisk måte å tre ut av stress og skape et jevnere øyeblikk.",
      },
      {
        title: "Kveldsro",
        description:
          "En mer bevisst overgang ut av dagen og mot hvile.",
      },
    ],
    image: {
      src: "/images/neuvago/launch/routine-evening-desktop.webp",
      alt: "Neuvago som del av en rolig kveldsrutine.",
    },
    secondaryImage: {
      src: "/images/neuvago/launch/no-home-hero-desktop.webp",
      alt: "Neuvago-enheten og appen i et rolig hverdagsmiljø.",
    },
  },

  knowledgeUniverse: {
    ...aboutPageContent.knowledgeUniverse,
    title: "Forankret i en bredere kunnskapsverden",
    description:
      "Neuvago står i en større sammenheng av idéer rundt regulering av nervesystemet, vagusnervestimulering, restitusjon og stressfysiologi. Du kan utforske kunnskapslaget når du vil gå dypere.",
    links: [
      {
        title: "Vagusnervestimulering",
        description:
          "Utforsk en av de sentrale idéene bak Neuvago-tilnærmingen.",
        href: "/research/topics/vagus-nerve-stimulation",
      },
      {
        title: "Regulering av nervesystemet",
        description:
          "Lær mer om hva regulering betyr i hverdagen.",
        href: "/learn/nervous-system-regulation",
      },
      {
        title: "Hjerteratevariabilitet",
        description:
          "Forstå hvorfor HRV ofte diskuteres i forbindelse med restitusjon og regulering.",
        href: "/research/topics/heart-rate-variability",
      },
      {
        title: "Når kroppen føles låst i stress",
        description:
          "Utforsk et mønster mange kjenner igjen i hverdagen.",
        href: "/learn/why-your-body-feels-stuck-in-stress",
      },
    ],
    primaryCta: {
      label: "Utforsk forskning",
      href: no("/research"),
    },
    secondaryCta: {
      label: "Besøk kunnskap",
      href: no("/learn"),
    },
  },

  faq: {
    ...aboutPageContent.faq,
    title: "Praktisk klarhet",
    description:
      "Noen enkle svar på spørsmål folk ofte har når de vil forstå merkevaren og opplevelsen tydeligere.",
    items: [
      {
        question: "Hva slags opplevelse er Neuvago designet for?",
        answer:
          "Neuvago er designet som en roligere, mer støttende opplevelse rundt stress, restitusjon, søvn og daglig regulering.",
      },
      {
        question: "Er Neuvago bygget rundt ro fremfor intensitet?",
        answer:
          "Ja. En sentral del av Neuvago-filosofien er å skape en opplevelse som føles jordet, skånsom og realistisk å vende tilbake til.",
      },
      {
        question: "Hvorfor kombinere enhet og app?",
        answer:
          "Fordi de sammen skaper et mer komplett system: enheten gir et fysisk startpunkt, og appen tilfører veiledning, struktur og kontinuitet.",
      },
      {
        question: "Er Neuvago laget for hverdagen, ikke perfekte forhold?",
        answer:
          "Ja. Merkevaren bygges rundt rutiner og opplevelser som skal føles praktiske og realistiske i dagliglivet.",
      },
    ],
  },

  finalCta: {
    ...aboutPageContent.finalCta,
    eyebrow: "Neste steg",
    title: "Utforsk Neuvago-opplevelsen videre",
    description:
      "Nå som du har sett hva Neuvago står for, kan du utforske produktet nærmere eller gå dypere inn i appopplevelsen.",
    primaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
    backgroundImage: {
      src: "/images/neuvago/launch/final-cta-desktop.webp",
      alt: "Neuvago-enheten og appen vist sammen i en varm, premium komposisjon.",
    },
  },
};
