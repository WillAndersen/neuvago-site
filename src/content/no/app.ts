import { appPageContent } from "@/content/app";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const appPageContentNo = {
  ...appPageContent,
  hero: {
    ...appPageContent.hero,
    eyebrow: "App",
    title: "Veiledning for øyeblikkene du vender tilbake til.",
    description:
      "Neuvago-appen gir hver økt en begynnelse, en rytme og en rolig måte å komme tilbake på — uten å gjøre regulering til nok et prestasjonsmål.",
    primaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    secondaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    desktopImage: {
      src: "/images/neuvago/app-hero-desktop.webp",
      alt: "Neuvago-appen vist i et rolig premiumgrensesnitt.",
    },
    mobileImage: {
      src: "/images/neuvago/app-hero-mobile.webp",
      alt: "Neuvago-appen med veiledet økt vist på mobil.",
    },
    proofLine: ["Veiledet", "Laget for rutiner", "Enkel å vende tilbake til"],
    panelEyebrow: "Veiledning uten press",
    panelText:
      "Appen gir hver økt en start, en rytme og en rolig grunn til å komme tilbake — uten å gjøre ro til enda et måltall.",
  },

  whatItDoes: {
    ...appPageContent.whatItDoes,
    eyebrow: "Veiledningslaget",
    itemLabel: "Punkt",
    title: "Appen gjør bruk til veiledning",
    description:
      "Appen er det som gjør Neuvago til et veiledet system. Den legger til økter, struktur og kontinuitet, slik at det føles enklere å begynne, enklere å forstå og enklere å vende tilbake over tid.",
    bullets: [
      "Veileder økter for ro, restitusjon og kveldsnedtrapping",
      "Hjelper deg å bygge rutiner som føles realistiske i hverdagen",
      "Gir kontinuitet, slik at opplevelsen blir enklere å vende tilbake til over tid",
    ],
    image: {
      src: "/images/neuvago/support-guidance-desktop.webp",
      alt: "Neuvago-appen med veiledet innhold og rutinevalg.",
    },
  },

  sessionsRhythm: {
    ...appPageContent.sessionsRhythm,
    eyebrow: "Øktrytme",
    featureLabel: "Steg",
    title: "Økter med en mykere rytme",
    description:
      "Appen er laget for mer enn å starte én enkelt økt. Den hjelper bruk til å bli en roligere rytme med veiledning, gjentakelse og økende gjenkjennelse over tid.",
    features: [
      {
        title: "Veiledede økter",
        description:
          "Velg økter laget for ro, regulering, restitusjon eller kveldsnedtrapping.",
      },
      {
        title: "Støttende rutiner",
        description:
          "Bruk appen som del av en rytme som føles praktisk og realistisk gjennom uken.",
      },
      {
        title: "Vend tilbake over tid",
        description:
          "Opplevelsen er laget for å være enkel å komme tilbake til, ikke krevende å opprettholde.",
      },
    ],
    supportingImages: [
      {
        src: "/images/neuvago/app-hero-mobile.webp",
        alt: "Neuvago-appen med veiledet økt på mobil.",
      },
      {
        src: "/images/neuvago/launch/product-lifestyle-card.webp",
        alt: "Neuvago-enheten som del av en rolig daglig rutine.",
      },
      {
        src: "/images/neuvago/launch/routine-evening-desktop.webp",
        alt: "Neuvago-enheten og appen som del av en rolig kveldsrutine.",
      },
    ],
    cta: {
      label: "Se hvordan det fungerer",
      href: no("/how-it-works"),
    },
  },

  progressWithoutPressure: {
    ...appPageContent.progressWithoutPressure,
    eyebrow: "Kontinuitet",
    title: "Kontinuitet uten press",
    description:
      "Appen støtter bevissthet og kontinuitet uten å gjøre opplevelsen til et prestasjonssystem. Målet er stødig tilbakevending, ikke press.",
    cards: [
      {
        title: "Et roligere syn på fremdrift",
        description:
          "Fremdrift rammes inn som tilbakevending, rytme og konsistens heller enn konstant prestasjon.",
      },
      {
        title: "Støttende kontinuitet",
        description:
          "Appen hjelper deg å komme tilbake over tid uten at opplevelsen føles tung.",
      },
      {
        title: "Mindre press, mer stødighet",
        description:
          "Bygget for å støtte skånsom gjentakelse heller enn stressende optimalisering.",
      },
    ],
    image: {
      src: "/images/neuvago/final-cta-desktop.webp",
      alt: "Neuvago-appens fremdriftsopplevelse vist i et rolig premiumgrensesnitt.",
    },
  },

  calmByDesign: {
    ...appPageContent.calmByDesign,
    eyebrow: "Rolig med vilje",
    title: "Designet for å føles rolig nok til å vende tilbake til.",
    description:
      "Neuvago-appen er bevisst rolig, enkel og jordet. Det betyr noe fordi et støttende grensesnitt gjør rutiner lettere å holde ved like uten å legge til mer press eller støy.",
    cards: [
      {
        title: "Tydelig veiledning",
        description:
          "Appen reduserer friksjon ved å gjøre neste steg tydelig og håndterbart.",
      },
      {
        title: "Mykt visuelt språk",
        description:
          "Et roligere grensesnitt med enkel hierarki, varm tone og mindre visuell støy.",
      },
      {
        title: "Struktur med lavt press",
        description:
          "Laget for å støtte kontinuitet uten at opplevelsen blir krevende.",
      },
      {
        title: "Enkel å vende tilbake til",
        description:
          "Bygget for å fungere i hverdagen, ikke bare under ideelle forhold.",
      },
    ],
    detailImages: [
      {
        src: "/images/neuvago/app-hero-desktop.webp",
        alt: "Neuvago-appens hovedskjerm.",
      },
      {
        src: "/images/neuvago/support-guidance-desktop.webp",
        alt: "Neuvago-appens bibliotek og veiledning.",
      },
    ],
  },

  fitsIntoLife: {
    ...appPageContent.fitsIntoLife,
    eyebrow: "I hverdagen",
    cardLabel: "",
    title: "Hvordan appen passer inn i dagen",
    description:
      "Appen er laget for å støtte en roligere flyt gjennom dagen — fra en mykere start, til en pause under stress, til en enklere kveldsnedtrapping.",
    cards: [
      {
        title: "Morgenrutine",
        description:
          "En mykere start når du ønsker en roligere og mer jordet begynnelse på dagen.",
      },
      {
        title: "Pause på dagen",
        description:
          "En praktisk måte å gå ut av stress og skape et stødigere øyeblikk midt på dagen.",
      },
      {
        title: "Kveldsro",
        description:
          "En roligere overgang ut av dagen og inn i en mer bevisst rytme før hvile.",
      },
    ],
    cardImages: [
      { src: "/images/neuvago/launch/product-lifestyle-card.webp", alt: "Neuvago-enheten som del av en rolig morgenrutine." },
      { src: "/images/neuvago/launch/product-detail-left-desktop.webp", alt: "Neuvago-enheten i et rolig hverdagsmiljø." },
      { src: "/images/neuvago/launch/routine-evening-desktop.webp", alt: "Neuvago-enheten og appen i en rolig kveldsrutine." },
    ],
  },

  deviceTogether: {
    ...appPageContent.deviceTogether,
    eyebrow: "Sammenkoblet system",
    title: "Enheten gjør appopplevelsen mer komplett",
    description:
      "Appen kan gi veiledning alene, men den føles mer jordet og komplett når den pares med den fysiske enheten. Sammen skaper de ett sammenhengende system.",
    features: [
      {
        title: "Appen kan stå på egne ben",
        description:
          "Den gir veiledning, struktur og rutiner som gjør opplevelsen nyttig i seg selv.",
      },
      {
        title: "Enheten legger til et fysisk lag",
        description:
          "Det fysiske produktet gjør den veiledede opplevelsen mer håndfast, jordet og komplett.",
      },
      {
        title: "Sammen føles systemet sterkere",
        description:
          "Appen og enheten støtter hverandre og skaper en roligere, tydeligere og mer gjentakbar daglig opplevelse.",
      },
    ],
    image: {
      src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
      alt: "Neuvago-enheten og appen vist sammen som ett sammenkoblet system.",
    },
    cta: {
      label: "Se produktet",
      href: no("/product"),
    },
  },

  faq: {
    ...appPageContent.faq,
    title: "Praktisk avklaring",
    description:
      "Noen enkle svar på spørsmål folk ofte har når de først utforsker appopplevelsen.",
    items: [
      {
        question: "Er appen en viktig del av Neuvago-opplevelsen?",
        answer:
          "Ja. Appen tilfører veiledning, øktstruktur, rutiner og kontinuitet, slik at opplevelsen føles mer komplett og enklere å vende tilbake til.",
      },
      {
        question: "Hvilke typer økter støtter appen?",
        answer:
          "Appen er laget for å støtte ro, regulering, restitusjon og kveldsnedtrapping gjennom en veiledet og strukturert opplevelse.",
      },
      {
        question: "Er appen laget for daglig bruk?",
        answer:
          "Ja. Opplevelsen er bygget for å føles enkel, gjentakbar og realistisk i hverdagen.",
      },
      {
        question: "Er appen bygget rundt ro heller enn press?",
        answer:
          "Ja. Målet er å skape en støttende opplevelse som føles jordet og håndterbar heller enn krevende eller overstimulerende.",
      },
      {
        question: "Erstatter appen enheten?",
        answer:
          "Appen er sentral i opplevelsen, men den blir sterkere når den pares med den fysiske enheten som del av ett sammenkoblet system.",
      },
    ],
  },

  finalCta: {
    ...appPageContent.finalCta,
    eyebrow: "Gå videre",
    title: "Se hvordan appen kobles til hele Neuvago-systemet",
    description:
      "Utforsk hvordan appens veiledning fungerer sammen med enheten og den bredere daglige rutinen rundt stress, restitusjon og hverdagsbalanse.",
    primaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    secondaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    backgroundImage: {
      src: "/images/neuvago/final-cta-desktop.webp",
      alt: "Neuvago-appen som viser kontinuitet over tid.",
    },
  },
} as unknown as typeof appPageContent;
