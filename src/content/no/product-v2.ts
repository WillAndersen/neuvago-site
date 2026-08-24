import { commerceContent } from "@/content/commerce";
import {
  productV2Content,
  type ProductV2Cta,
} from "@/content/product-v2";

const purchaseOpenNo =
  productV2Content.buyBox.purchaseOpen;

const purchaseCtaNo: ProductV2Cta = {
  label: purchaseOpenNo
    ? "Kjøp Neuvago"
    : "Se kjøpsdetaljer",
  href: "#buy",
};

const heroPurchaseCtaNo: ProductV2Cta = {
  label: commerceContent.isLive
    ? "Kjøp Neuvago"
    : "Få lanseringstilgang",
  href: commerceContent.shopHref,
};

export const productV2ContentNo = {
  ...productV2Content,

  hero: {
    ...productV2Content.hero,
    eyebrow: "Neuvago",
    title:
      "En ikke-invasiv vagusnervestimulator for daglig bruk.",
    description:
      "Utviklet for å støtte bedre søvn, roligere responser på stress i hverdagen, fokusert tid og restitusjon.",
    technologyDescription:
      "Neuvago gir skånsom, justerbar stimulering gjennom en øreelektrode ved det ytre øret, med fire 20-minutters moduser utviklet for ulike behov og situasjoner.",
    primaryCta: heroPurchaseCtaNo,
    secondaryCta: {
      label: "Slik fungerer det",
      href: "/no/slik-fungerer-det",
    },
    desktopImage: {
      ...productV2Content.hero.desktopImage,
      alt:
        "Nærbilde av Neuvago-enheten og de fysiske kontrollene.",
    },
    mobileImage: {
      ...productV2Content.hero.mobileImage,
      alt:
        "Nærbilde av Neuvago-enheten i mobilvisning.",
    },
    proofLine: [
      "IKKE-INVASIV",
      "FIRE 20-MINUTTERS MODUSER",
      "30 INTENSITETSNIVÅER",
    ],
  },

  benefits: {
    ...productV2Content.benefits,
    eyebrow: "Hvorfor Neuvago",
    title:
      "Utviklet for hvordan du ønsker å føle deg.",
    description:
      "Neuvago kombinerer fire stimuleringsmoduser med justerbar intensitet og gir deg en enkel måte å støtte bedre søvn, roligere responser på stress i hverdagen, fokusert tid og restitusjon.",
    image: {
      ...productV2Content.benefits.image,
      alt:
        "Neuvago-enheten i en rolig hjemmesituasjon for daglige velværerutiner.",
    },
    items: [
      {
        title: "Bedre søvn",
        description:
          "Støtt overgangen fra årvåkenhet til hvile, og bidra til å skape forholdene for dypere avspenning og bedre søvnkvalitet.",
      },
      {
        title: "Stress og ro",
        description:
          "Støtt en roligere respons på stress i hverdagen og hjelp nervesystemet med å bevege seg mot en mer regulert tilstand.",
      },
      {
        title: "Fokus og mental klarhet",
        description:
          "Skap en roligere indre tilstand som kan støtte oppmerksomhet, mental klarhet og fokusert tid.",
      },
      {
        title: "Restitusjon",
        description:
          "Støtt parasympatisk aktivitet og kroppens naturlige prosesser for hvile, restitusjon og autonom balanse.",
      },
    ],
  },

  howItWorks: {
    ...productV2Content.howItWorks,
    eyebrow: "Slik fungerer det",
    title: "Slik fungerer vagusnervestimulering.",
    description:
      "Neuvago bruker ikke-invasiv elektrisk stimulering ved det ytre øret. Denne aurikulære tilnærmingen er knyttet til nervebaner forbundet med vagusnerven, en viktig del av kommunikasjonen mellom hjernen og kroppen og det autonome nervesystemet.",
    image: {
      ...productV2Content.howItWorks.image,
      alt:
        "Neuvago-enheten ved siden av en enkel illustrasjon av det ytre øret.",
    },
    flow: [
      {
        label: "01",
        title: "Ytre øre",
        description:
          "Øreelektroden plasseres ved det ytre øret i samsvar med den medfølgende veiledningen.",
      },
      {
        label: "02",
        title: "Aurikulære nervebaner",
        description:
          "Elektrisk stimulering påføres gjennom et ikke-invasivt kontaktpunkt ved øret.",
      },
      {
        label: "03",
        title: "Vagusnerven",
        description:
          "Aurikulær vagusnervestimulering studeres i forbindelse med nervebaner knyttet til vagusnerven.",
      },
      {
        label: "04",
        title: "Det autonome nervesystemet",
        description:
          "Vagusnerven er en del av det større systemet som er involvert i kommunikasjon mellom hjernen og kroppen og skiftende fysiologiske tilstander.",
      },
    ],
    primaryCta: {
      label: "Se hvordan det fungerer",
      href: "/no/slik-fungerer-det",
    },
    secondaryCta: {
      label: "Lær om taVNS",
      href:
        "/no/forskning/transkutan-vagusnervestimulering",
    },
  },

  modes: {
    ...productV2Content.modes,
    eyebrow: "Fire stimuleringsmoduser",
    title: "Ulike moduser for ulike øyeblikk.",
    description:
      "Neuvago har fire navngitte stimuleringsprogrammer. Detaljert veiledning for hver modus vil være tilgjengelig før kjøp åpner.",
    items: ["Sleep", "Relax", "Meditation", "Relief"],
    cta: purchaseCtaNo,
  },

  features: {
    ...productV2Content.features,
    eyebrow: "Produktopplevelse",
    title: "Neuvago-opplevelsen.",
    description:
      "De mest nyttige produktfunksjonene er de som gjør hver rutine tydelig, justerbar og enkel å starte.",
    image: {
      ...productV2Content.features.image,
      alt:
        "Nærbilde av Neuvago-enheten og de fysiske kontrollene.",
    },
    cards: [
      {
        title: "Justerbar intensitet",
        description:
          "Øk eller reduser stimuleringen gradvis for å finne et komfortabelt nivå i samsvar med den medfølgende veiledningen.",
      },
      {
        title: "Enkle kontroller",
        description:
          "Styr økten direkte med de fysiske kontrollene på enheten.",
      },
      {
        title: "Fire stimuleringsmoduser",
        description:
          "Velg mellom fire navngitte programmer utviklet for ulike rutiner og øyeblikk.",
      },
      {
        title: "Utviklet for komfort",
        description:
          "Et ikke-invasivt, ørebasert format utviklet for enkel bruk i hverdagen.",
      },
    ],
  },

  useSequence: {
    ...productV2Content.useSequence,
    eyebrow: "Enkel å bruke",
    title: "Plasser. Velg. Juster. Start.",
    description:
      "Bruk Neuvago i fire enkle trinn. Følg den medfølgende hurtigstartveiledningen for fullstendig informasjon om plassering, ledende gel, øktlengde, vedlikehold og sikkerhet.",
    steps: [
      {
        title: "Plasser",
        description:
          "Plasser øreelektroden som vist i veiledningen.",
      },
      {
        title: "Velg",
        description:
          "Velg én av de fire navngitte stimuleringsmodusene.",
      },
      {
        title: "Juster",
        description:
          "Øk intensiteten gradvis til et komfortabelt nivå.",
      },
      {
        title: "Start",
        description:
          "Start økten og følg den medfølgende produktveiledningen.",
      },
    ],
    cta: {
      label: "Se fullstendig bruksveiledning",
      href: "/no/slik-fungerer-det",
    },
  },

  research: {
    ...productV2Content.research,
    eyebrow: "Forskning",
    title:
      "Vitenskapelig kontekst for en aurikulær tilnærming.",
    description:
      "Neuvago bruker en aurikulær, ørebasert tilnærming til ikke-invasiv vagusnervestimulering. Forskningskategorien som ligger nærmest denne teknologien, er transkutan aurikulær vagusnervestimulering, eller taVNS.",
    boundary:
      "Forskning på taVNS gir vitenskapelig kontekst for teknologikategorien. Den er ikke klinisk dokumentasjon for selve Neuvago-enheten.",
    links: [
      {
        title: "taVNS-forskning",
        description:
          "Utforsk aurikulær stimulering, protokollvariabler, aktivering av målområder og tolkning.",
        href:
          "/no/forskning/aurikulaer-vagusnervestimulering",
      },
      {
        title: "Autonom regulering",
        description:
          "Lær hvordan sympatisk og parasympatisk aktivitet studeres innen autonom regulering.",
        href: "/no/forskning",
      },
      {
        title: "Sikkerhet og tolerabilitet",
        description:
          "Se kontekst om bivirkninger, tolerabilitet og ansvarlig bruk i forskning på mennesker.",
        href:
          "/no/forskning/sikkerhet-og-tolerabilitet",
      },
      {
        title: "Vitenskapelig studiebibliotek",
        description:
          "Utforsk samlingen av studiesammendrag og grunnleggende forskning.",
        href: "/no/forskning",
      },
    ],
    primaryCta: {
      label: "Utforsk forskningen",
      href: "/no/forskning",
    },
    secondaryCta: {
      label: "Se tiltenkt bruk",
      href: "/no/juridisk/tiltenkt-bruk",
    },
  },

  buyBox: {
    ...productV2Content.buyBox,
    gallery: [
      {
        ...productV2Content.buyBox.gallery[0],
        alt: "Neuvago-enheten sett forfra.",
      },
      {
        ...productV2Content.buyBox.gallery[1],
        alt: "Neuvago-enheten sett fra siden.",
      },
      {
        ...productV2Content.buyBox.gallery[2],
        alt:
          "Nærbilde av kontrollene og overflaten på Neuvago-enheten.",
      },
    ],
    eyebrow: "Kjøp Neuvago",
    productName: "Neuvago",
    productDescription:
      "Ikke-invasiv vagusnervestimulator.",
    badge: "Generell velvære",
    purchaseTitle: purchaseOpenNo
      ? "Klar til bestilling"
      : "Kjøpsdetaljer",
    launchStatus: purchaseOpenNo
      ? "Tilgjengelig"
      : "Før lansering",
    purchaseDescription: purchaseOpenNo
      ? "Se hva som følger med, og fortsett til sikker betaling med Shopify."
      : "Kassen er ikke åpen ennå. Bekreftet pris, tilgjengelighet, levering, retur og garanti vil vises her før kjøp åpner.",
    checkoutLabel: "Kjøp Neuvago",
    checkoutDisabledLabel: "Kassen åpner snart",
    checkoutLoadingLabel: "Åpner kassen…",
    prelaunchCta: {
      label: "Slik fungerer Neuvago",
      href: "#how-it-works",
    },
    intendedUseCta: {
      label: "Se tiltenkt bruk",
      href: "/no/juridisk/tiltenkt-bruk",
    },
    includedItems: [
      "Neuvago-enhet",
      "Venstre øreelektrode",
      "Ladekabel",
      "Filtetui",
      "Brukermanual",
      "Hurtigstartveiledning",
      "Sprayflaske",
      "Ledende gel",
      "Ett års tilgang til Neuvago App",
    ],
    trustLinks: [
      {
        label: "Vilkår",
        href: "/no/juridisk/vilkar",
      },
      {
        label: "Personvern",
        href: "/no/juridisk/personvern",
      },
    ],
  },

  productDetails: {
    ...productV2Content.productDetails,
    eyebrow: "Produktdetaljer",
    title: "Detaljer når du ønsker dem.",
    description:
      "Se produktfunksjoner, sikkerhetsinformasjon og pakkeinnhold.",
    accordions: [
      {
        title: "Enhetsfunksjoner",
        description:
          "En kort oversikt over bekreftede funksjoner i Neuvago-enheten.",
        items: [
          "Oppladbar håndholdt enhet",
          "Fysiske kontroller og skjerm på enheten",
          "Justerbar stimuleringsintensitet",
          "Fire navngitte stimuleringsmoduser",
          "Ladekabel inkludert",
        ],
      },
      {
        title: "Sikkerhet og egnethet",
        description:
          "Les den medfølgende sikkerhetsinformasjonen før bruk.",
        items: [
          "Les instruksjonene, kontraindikasjonene og advarslene som følger med produktet",
          "Bruk øreelektroden og den ledende gelen bare slik det er beskrevet i instruksjonene",
          "Kontakt kvalifisert helsepersonell dersom du er usikker på om enheten passer for deg",
        ],
        links: [
          {
            label: "Tiltenkt bruk",
            href: "/no/juridisk/tiltenkt-bruk",
          },
          {
            label:
              "Forskning på sikkerhet og tolerabilitet",
            href:
              "/no/forskning/sikkerhet-og-tolerabilitet",
          },
          {
            label: "Support",
            href: "/no/support",
          },
        ],
      },
      {
        title: "Dette følger med",
        description:
          "Det bekreftede pakkeinnholdet for Neuvago.",
        items: [
          "Neuvago-enhet",
          "Venstre øreelektrode",
          "Ladekabel",
          "Filtetui",
          "Brukermanual",
          "Hurtigstartveiledning",
          "Sprayflaske",
          "Ledende gel",
          "Ett års tilgang til Neuvago App",
        ],
      },
    ],
  },

  faq: {
    ...productV2Content.faq,
    eyebrow: "FAQ",
    title: "Praktiske svar før kjøp.",
    description:
      "De viktigste spørsmålene om enheten, tiltenkt bruk, moduser, pakkeinnhold og forskningskontekst.",
    items: [
      {
        question: "Hva er Neuvago?",
        answer:
          "Neuvago er en ikke-invasiv enhet for vagusnervestimulering, utviklet for generell velvære og enkle, repeterbare rutiner i hverdagen.",
      },
      {
        question: "Hva er Neuvago utviklet for?",
        answer:
          "Neuvago er utviklet for generelle velværerutiner knyttet til avspenning, nedtrapping om kvelden og restitusjon. Den er ikke ment å diagnostisere, behandle, kurere eller forebygge sykdom.",
      },
      {
        question: "Hvor påføres stimuleringen?",
        answer:
          "Stimuleringen påføres gjennom en øreelektrode som plasseres ved det ytre øret i samsvar med plasseringsveiledningen som følger med produktet.",
      },
      {
        question: "Hva er de fire stimuleringsmodusene?",
        answer:
          "Neuvago har fire navngitte moduser: Sleep, Relax, Meditation og Relief. Detaljert veiledning for hver modus vil være tilgjengelig før kjøp åpner.",
      },
      {
        question: "Hva følger med Neuvago?",
        answer:
          "Neuvago-pakken inkluderer Neuvago-enheten, en venstre øreelektrode, ladekabel, filtetui, brukermanual, hurtigstartveiledning, sprayflaske og ledende gel. Ett års tilgang til Neuvago App er også inkludert.",
      },
      {
        question:
          "Er ett år med Neuvago App inkludert?",
        answer:
          "Ja. Hver Neuvago-enhet inkluderer ett års tilgang til Neuvago App. Aktivering, fornyelse, regional tilgjengelighet og pris etter den inkluderte perioden vil bli forklart før kjøp.",
      },
      {
        question: "Hvilken forskning finnes på taVNS?",
        answer:
          "Et voksende forskningsfelt utforsker transkutan aurikulær vagusnervestimulering innen områder som autonom regulering, nervebaner i hjernen, sikkerhet og tolerabilitet. Ekstern taVNS-forskning gir vitenskapelig kontekst og er ikke klinisk dokumentasjon for selve Neuvago-enheten.",
      },
      {
        question:
          "Hvilken sikkerhetsinformasjon bør jeg lese?",
        answer:
          "Les instruksjonene, kontraindikasjonene og sikkerhetsinformasjonen som følger med produktet før bruk. Kontakt kvalifisert helsepersonell dersom du er usikker på om enheten passer for deg.",
      },
    ],
  },

  finalCta: {
    ...productV2Content.finalCta,
    eyebrow: "Neuvago",
    title: purchaseOpenNo
      ? "Kjøp Neuvago."
      : "Utforsk Neuvago.",
    description: purchaseOpenNo
      ? "Se enheten og hva som følger med, og fortsett til sikker betaling."
      : "Se hva som følger med, hvordan enheten fungerer og kjøpsinformasjonen som er tilgjengelig før kassen åpner.",
    primaryCta: purchaseCtaNo,
    secondaryCta: {
      label: "Slik fungerer det",
      href: "#how-it-works",
    },
    desktopImage: {
      ...productV2Content.finalCta.desktopImage,
      alt:
        "Neuvago-enheten alene i en rolig produktsetting.",
    },
    mobileImage: {
      ...productV2Content.finalCta.mobileImage,
      alt:
        "Nærbilde av Neuvago-enheten i den avsluttende mobilseksjonen.",
    },
  },
} as unknown as typeof productV2Content;

export const productV2CommerceNo = {
  mode: commerceContent.mode,
  isLive: commerceContent.isLive,
  purchaseOpen: purchaseOpenNo,
  heroCta: heroPurchaseCtaNo,
  purchaseCta: purchaseCtaNo,
} as const;
