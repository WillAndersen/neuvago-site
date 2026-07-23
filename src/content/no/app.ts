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
      "Neuvago-appen gir hver økt en begynnelse, en rytme og en rolig måte å komme tilbake på — uten å gjøre regulering til enda en prestasjonsmåling.",
    primaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    secondaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    desktopImage: {
      ...appPageContent.hero.desktopImage,
      alt: "Neuvago-appen vist i et rolig og premium grensesnitt.",
    },
    mobileImage: {
      ...appPageContent.hero.mobileImage,
      alt: "Neuvago-appen vist med en rolig veiledet øktopplevelse på mobil.",
    },
    proofLine: ["Veiledet", "Laget for rutiner", "Lett å vende tilbake til"],
    panelEyebrow: "Veiledning uten press",
    panelText:
      "Appen gir hver økt en begynnelse, en rytme og en mild grunn til å vende tilbake — uten å gjøre ro til enda et målepunkt.",
  },

  whatItDoes: {
    ...appPageContent.whatItDoes,
    eyebrow: "Veiledningslaget",
    title: "Appen gjør bruk til veiledning",
    description:
      "Appen er det som gjør Neuvago til et veiledet system, ikke bare en frittstående enhet. Den tilfører økter, struktur og kontinuitet, slik at det blir enklere å begynne, enklere å forstå og enklere å vende tilbake over tid.",
    bullets: [
      "Veileder økter for ro, restitusjon og kveldsro",
      "Hjelper deg å bygge rutiner som føles realistiske i hverdagen",
      "Gir kontinuitet slik at opplevelsen blir enklere å vende tilbake til over tid",
    ],
    image: {
      ...appPageContent.whatItDoes.image,
      alt: "Neuvago-appens bibliotek med veiledet innhold og rutinevalg.",
    },
  },

  calmByDesign: {
    ...appPageContent.calmByDesign,
    eyebrow: "Rolig av design",
    title: "Designet for å føles rolig nok til å vende tilbake til.",
    description:
      "Neuvago-appen er bevisst rolig, enkel og jordet. Det betyr noe fordi et støttende grensesnitt gjør rutiner lettere å holde ved like uten å legge til press eller overbelastning.",
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
          "Laget for å støtte kontinuitet uten at opplevelsen føles krevende.",
      },
      {
        title: "Lett å komme tilbake til",
        description:
          "Bygget for å føles realistisk i hverdagen, ikke bare under ideelle forhold.",
      },
    ],
    detailImages: [
      {
        ...appPageContent.calmByDesign.detailImages[0],
        alt: "Neuvago-appens startskjerm i et rolig grensesnitt.",
      },
      {
        ...appPageContent.calmByDesign.detailImages[1],
        alt: "Neuvago-appens bibliotek med veiledede økter og rutiner.",
      },
    ],
  },

  sessionsRhythm: {
    ...appPageContent.sessionsRhythm,
    eyebrow: "Øktrytme",
    title: "Økter med en mykere rytme",
    description:
      "Appen er laget for mer enn å starte én enkelt økt. Den hjelper deg å gjøre bruk til en roligere rytme med veiledning, gjentakelse og økende gjenkjennelse over tid.",
    features: [
      {
        title: "Veiledede økter",
        description:
          "Velg økter laget for ro, regulering, restitusjon eller kveldsro.",
      },
      {
        title: "Støttende rutiner",
        description:
          "Bruk appen som en del av en rytme som føles praktisk og realistisk gjennom uken.",
      },
      {
        title: "Vend tilbake over tid",
        description:
          "Opplevelsen er laget for å føles lett å komme tilbake til, ikke slitsom å vedlikeholde.",
      },
    ],
    supportingImages: [
      {
        ...appPageContent.sessionsRhythm.supportingImages[0],
        alt: "Neuvago-appens øktskjerm på mobil.",
      },
      {
        ...appPageContent.sessionsRhythm.supportingImages[1],
        alt: "Neuvago-enheten og appen i en rolig morgenrutine.",
      },
      {
        ...appPageContent.sessionsRhythm.supportingImages[2],
        alt: "Neuvago-enheten og appen i en varm kveldsrutine.",
      },
    ],
    cta: {
      label: "Se hvordan det fungerer",
      href: no("/how-it-works"),
    },
  },

  fitsIntoLife: {
    ...appPageContent.fitsIntoLife,
    eyebrow: "I hverdagen",
    title: "Hvordan appen passer inn i dagen",
    description:
      "Appen er laget for å støtte en roligere flyt gjennom dagen — fra en mykere start, til en pause under stress, til en enklere nedtrapping om kvelden.",
    cards: [
      {
        title: "Morgenrutine",
        description:
          "En mykere start når du ønsker en roligere og mer jordet begynnelse på dagen.",
      },
      {
        title: "Pause i løpet av dagen",
        description:
          "En praktisk måte å gå ut av stress og skape et stødigere øyeblikk midt på dagen.",
      },
      {
        title: "Kveldsro",
        description:
          "En roligere overgang ut av dagen og inn i en mer bevisst rytme før hvile.",
      },
    ],
    images: [
      {
        src: "/images/neuvago/launch/product-lifestyle-card.webp",
        alt: "Neuvago-enheten og appen i en rolig hverdagsrutine.",
      },
      {
        src: "/images/neuvago/launch/product-detail-left-desktop.webp",
        alt: "Neuvago-enheten som et rolig punkt i en dagsrutine.",
      },
      {
        src: "/images/neuvago/launch/routine-evening-desktop.webp",
        alt: "Neuvago-enheten og appen i en varm kveldsrutine.",
      },
    ],
    image: {
      ...appPageContent.fitsIntoLife.image,
      alt: "Neuvago-enheten og appen i en rolig morgenrutine.",
    },
    secondaryImage: {
      ...appPageContent.fitsIntoLife.secondaryImage,
      alt: "Neuvago-enheten og appen i en varm kveldsrutine.",
    },
  },

  progressWithoutPressure: {
    ...appPageContent.progressWithoutPressure,
    eyebrow: "Kontinuitet",
    title: "Kontinuitet uten press",
    description:
      "Appen støtter bevissthet og kontinuitet uten å gjøre opplevelsen til et prestasjonssystem. Målet er å komme jevnt tilbake, ikke å presse hardere.",
    cards: [
      {
        title: "Et roligere bilde av fremdrift",
        description:
          "Fremdrift handler om å vende tilbake, finne rytme og bygge kontinuitet — ikke konstant prestasjon.",
      },
      {
        title: "Støttende kontinuitet",
        description:
          "Appen hjelper deg å komme tilbake over tid uten at opplevelsen føles tung.",
      },
      {
        title: "Mindre press, mer stødighet",
        description:
          "Laget for mild gjentakelse, ikke stressende optimalisering.",
      },
    ],
    image: {
      ...appPageContent.progressWithoutPressure.image,
      alt: "Neuvago-appens fremdriftsskjerm vist i et rolig premiumgrensesnitt.",
    },
  },

  deviceTogether: {
    ...appPageContent.deviceTogether,
    eyebrow: "Sammenkoblet system",
    title: "Enheten gjør appopplevelsen mer komplett",
    description:
      "Appen kan veilede opplevelsen på egen hånd, men den føles mer jordet og komplett når den brukes sammen med den fysiske enheten. Sammen skaper de ett sammenkoblet system.",
    features: [
      {
        title: "Appen kan stå på egne ben",
        description:
          "Den gir allerede veiledning, struktur og rutiner som gjør opplevelsen nyttig i seg selv.",
      },
      {
        title: "Enheten tilfører et fysisk lag",
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
      "Noen enkle svar på spørsmål mange har når de først utforsker appopplevelsen.",
    items: [
      {
        question: "Er appen en viktig del av Neuvago-opplevelsen?",
        answer:
          "Ja. Appen tilfører veiledning, øktstruktur, rutiner og kontinuitet, slik at opplevelsen føles mer komplett og enklere å vende tilbake til.",
      },
      {
        question: "Hvilke typer økter støtter appen?",
        answer:
          "Appen er laget for å støtte ro, regulering, restitusjon og kveldsro gjennom en veiledet og strukturert opplevelse.",
      },
      {
        question: "Er appen laget for daglig bruk?",
        answer:
          "Ja. Opplevelsen er bygget for å føles enkel, gjentakbar og realistisk i hverdagen.",
      },
      {
        question: "Er appen bygget rundt ro heller enn press?",
        answer:
          "Ja. Målet er å skape en støttende opplevelse som føles jordet og håndterbar, ikke krevende eller overstimulerende.",
      },
      {
        question: "Erstatter appen enheten?",
        answer:
          "Appen er sentral i opplevelsen, men den blir sterkere når den brukes sammen med den fysiske enheten som del av ett system.",
      },
    ],
  },

  finalCta: {
    ...appPageContent.finalCta,
    eyebrow: "Gå videre",
    title: "Se hvordan appen henger sammen med hele Neuvago-systemet",
    description:
      "Utforsk hvordan den veiledede appdelen fungerer sammen med enheten og den bredere daglige rutinen rundt stress, restitusjon og hverdagsbalanse.",
    primaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    secondaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    backgroundImage: {
      ...appPageContent.finalCta.backgroundImage,
      alt: "Neuvago-appens fremdriftsskjerm viser kontinuitet over tid.",
    },
  },
} as unknown as typeof appPageContent;
