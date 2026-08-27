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
      "Utviklet for korte, strukturerte velværerutiner rundt nedtrapping, hverdagsstress, fokusert tid og restitusjon.",
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
      "Fire moduser for ulike øyeblikk i hverdagen.",
    description:
      "Neuvago kombinerer fire stimuleringsmønstre med justerbar intensitet, slik at du kan bygge korte velværeøkter rundt nedtrapping, pauser, fokus og restitusjon.",
    image: {
      ...productV2Content.benefits.image,
      alt:
        "Neuvago-enheten i en rolig hjemmesituasjon for daglige velværerutiner.",
    },
    items: [
      {
        title: "Søvn og nedtrapping",
        description:
          "Bruk Neuvago som del av en rolig kveldsrutine når du vil markere overgangen fra aktivitet til hvile.",
      },
      {
        title: "Stress og ro",
        description:
          "Lag rom for en kort pause og en roligere rutine i perioder med mye aktivitet eller hverdagsstress.",
      },
      {
        title: "Fokus og tilstedeværelse",
        description:
          "Bruk en strukturert økt før meditasjon, arbeid eller andre øyeblikk der du vil samle oppmerksomheten.",
      },
      {
        title: "Hvile og restitusjon",
        description:
          "Gjør Neuvago til et fast holdepunkt i rutiner for pauser, hvile og restitusjon.",
      },
    ],
  },

  howItWorks: {
    ...productV2Content.howItWorks,
    eyebrow: "Slik fungerer det",
    title: "Ørebasert stimulering i fire trinn.",
    description:
      "Neuvago leverer skånsomme, justerbare elektriske impulser gjennom en øreelektrode ved det ytre øret. Enheten er utviklet som en ørebasert VNS-enhet; flyten nedenfor viser den tilsiktede signalveien uten å være dokumentasjon på at det tilsiktede nervemålet faktisk er påvirket eller at brukeren får en bestemt effekt.",
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
          "Øreelektroden gir skånsomme, justerbare elektriske impulser ved det ytre øret.",
      },
      {
        label: "02",
        title: "Vagusnerven",
        description:
          "Plasseringen er valgt for å rette stimuleringen mot områder som brukes i aurikulær VNS. Sensasjon alene dokumenterer ikke at det tilsiktede nervemålet er påvirket.",
      },
      {
        label: "03",
        title: "Hjernestammen",
        description:
          "I taVNS-forskning undersøkes hvordan sensoriske signaler fra aurikulær stimulering kan nå og påvirke signalbehandling i hjernestammen.",
      },
      {
        label: "04",
        title: "Autonome nettverk",
        description:
          "Forskning undersøker videre forbindelser til større autonome nettverk. Et foreslått mekanismeforløp er ikke automatisk et klinisk eller praktisk utfall.",
      },
    ],
    primaryCta: {
      label: "Se hvordan Neuvago fungerer",
      href: "/no/slik-fungerer-det",
    },
    secondaryCta: {
      label: "Utforsk taVNS-forskning",
      href:
        "/no/forskning/aurikulaer-vagusnervestimulering",
    },
  },

  modes: {
    ...productV2Content.modes,
    eyebrow: "FIRE STIMULERINGSMODUSER",
    title: "Fire moduser, hver med sin egen rytme.",
    description:
      "Sleep, Relax, Meditation og Relief bruker ulike stimuleringsmønstre for forskjellige behov og situasjoner. Hver modus varer i 20 minutter og har 30 justerbare intensitetsnivåer.",
    detailLabels: {
      intendedUse: "Beregnet for",
      stimulationPattern: "Stimuleringsmønster",
    },
    items: [
      {
        id: "sleep",
        name: "Sleep",
        intendedUse:
          "Kveldsrutiner, rolig nedtrapping og overgang mot hvile.",
        stimulationPattern:
          "Sleep veksler mellom raskere og langsommere stimuleringsrytmer og skaper et skånsomt, skiftende mønster.",
        sensation:
          "Typisk følelse: Svært mild stimulering med en lett prikkende eller stikkende følelse ved øret.",
      },
      {
        id: "relax",
        name: "Relax",
        intendedUse:
          "Korte pauser, avspenning og roligere øyeblikk i hverdagen.",
        stimulationPattern:
          "Relax følger en jevn rytme med fire sekunder stimulering etterfulgt av fire sekunder pause.",
        sensation:
          "Typisk følelse: Svært mild stimulering med en myk prikkende eller stikkende følelse.",
      },
      {
        id: "meditation",
        name: "Meditation",
        intendedUse:
          "Meditasjon, tilstedeværelse og fokusert tid.",
        stimulationPattern:
          "Meditation følger den samme rytmen med fire sekunder på og fire sekunder av som Relax, med et tettere pulsmønster.",
        sensation:
          "Typisk følelse: Mild prikking eller stikking, vanligvis tydeligere enn Relax.",
      },
      {
        id: "relief",
        name: "Relief",
        intendedUse:
          "En langsommere, mer tydelig stimuleringsrytme og en annen sanseprofil.",
        stimulationPattern:
          "Relief bruker langsomme, tydelige pulser etterfulgt av fire sekunder pause.",
        sensation:
          "Typisk følelse: Mer merkbare, individuelle stikkende pulser.",
      },
    ],
    intensityNote:
      "Intensiteten i alle moduser kan justeres. Øk den gradvis til stimuleringen kjennes merkbar, men komfortabel.",
    cta: heroPurchaseCtaNo,
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
    eyebrow: "FORSKNING",
    title: "Forskningsfeltet rundt ørebasert vagusnervestimulering.",
    description:
      "Neuvago er utviklet som en ørebasert VNS-enhet. Forskning på transkutan aurikulær vagusnervestimulering (taVNS) undersøker blant annet søvn, stress, autonom funksjon, hjertefrekvensvariabilitet (HRV), nervebaner i hjernen, sikkerhet og tolerabilitet. Funnene kan ikke automatisk overføres til en bestemt effekt av Neuvago.",
    areas: [
      {
        title: "Søvn, stress og rutiner",
        description:
          "Studier undersøker taVNS i sammenheng med søvnrelaterte mål, stressresponser og restitusjon i ulike populasjoner og protokoller.",
      },
      {
        title: "Autonom funksjon og HRV",
        description:
          "Studier undersøker taVNS i sammenheng med autonome markører, inkludert hjertefrekvensvariabilitet.",
      },
      {
        title: "Nervebaner i hjernen",
        description:
          "Nevroavbildningsforskning på mennesker har undersøkt responser i sentrale nervebaner under aurikulær stimulering.",
      },
      {
        title: "Sikkerhet og tolerabilitet",
        description:
          "Systematisk forskning har vurdert tolerabilitet og rapporterte uønskede hendelser på tvers av studier av taVNS hos mennesker.",
      },
    ],
    cta: {
      label: "Utforsk forskningen",
      href: "/no/forskning",
    },
    contextNote:
      "Forskningen som presenteres, gjelder VNS og taVNS som forskningsfelt. Funn varierer mellom enheter, stimuleringsprotokoller og studiepopulasjoner og dokumenterer ikke automatisk en bestemt effekt av Neuvago.",
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
    eyebrow: "NEUVAGO",
    title: "Alt du trenger for å komme i gang.",
    description:
      "Neuvago inkluderer fire stimuleringsmoduser på 20 minutter, 30 justerbare intensitetsnivåer og ett års tilgang til Neuvago App.",
    productName: "Neuvago",
    productDescription: "Ikke-invasiv vagusnervestimulator",
    includedTitle: "Dette følger med",
    includedItems: [
      "Neuvago-enhet",
      "Venstre øreelektrode",
      "Ledende gel",
      "Sprayflaske",
      "Ladekabel",
      "Filtetui",
      "Brukermanual",
      "Hurtigstartveiledning",
      "Ett års tilgang til Neuvago App",
    ],
    primaryCta: heroPurchaseCtaNo,
    secondaryCta: {
      label: "Slik fungerer det",
      href: "/no/slik-fungerer-det",
    },
  },

  productDetails: {
    ...productV2Content.productDetails,
    eyebrow: "PRODUKTDETALJER",
    title: "Detaljene bak Neuvago.",
    description:
      "Utforsk bekreftede enhetsfunksjoner, tekniske spesifikasjoner, sikkerhetsveiledning og alt som følger med Neuvago.",
    accordions: [
      {
        title: "Enhetsfunksjoner",
        description:
          "Neuvago kombinerer ikke-invasiv, ørebasert vagusnervestimulering med fire dedikerte moduser og justerbar intensitet.",
        items: [
          "Fire stimuleringsmoduser: Sleep, Relax, Meditation og Relief",
          "30 justerbare intensitetsnivåer",
          "Kontroller på enheten for valg av modus, intensitet og start eller pause av økten",
          "Skjerm på enheten som viser modus- og øktinformasjon",
          "Oppladbar håndholdt utforming",
          "Venstre øreelektrode for ørebasert stimulering",
        ],
      },
      {
        title: "Tekniske spesifikasjoner",
        specifications: [
          {
            label: "Modell",
            value: "NVG-001",
          },
          {
            label: "Øktvarighet",
            value: "20 minutter per modus",
          },
          {
            label: "Stimuleringsmoduser",
            value: "Sleep, Relax, Meditation og Relief",
          },
          {
            label: "Intensitetsnivåer",
            value: "30",
          },
          {
            label: "Utgangsintensitet",
            value: "0–8 mA",
          },
          {
            label: "Frekvensområde",
            value: "1–100 Hz",
          },
          {
            label: "Pulsbredde",
            value: "200–300 μs",
          },
          {
            label: "Batterikapasitet",
            value: "2000 mAh",
          },
          {
            label: "Inngang",
            value: "5V 1A",
          },
        ],
      },
      {
        title: "Sikkerhet og egnethet",
        description:
          "Les brukermanualen og all medfølgende sikkerhetsinformasjon før du bruker Neuvago for første gang.",
        items: [
          "Bruk Neuvago bare som beskrevet i den medfølgende brukermanualen.",
          "Plasser den medfølgende venstre øreelektroden sikkert, og sørg for jevn og komfortabel kontakt.",
          "Bruk øreelektroden bare på intakt hud. Ikke bruk den på sår, irritert hud, blåmerker, skrubbsår eller betente områder.",
          "Begynn med lav intensitet og øk den gradvis til stimuleringen kjennes merkbar, men komfortabel.",
          "Stopp bruken dersom du opplever betydelig ubehag eller irritasjon.",
          "Dersom du er usikker på om Neuvago passer for deg, kontakt kvalifisert helsepersonell før bruk.",
          "Oppbevar enheten og tilbehøret utilgjengelig for barn.",
        ],
        link: {
          label: "Se fullstendig sikkerhetsinformasjon",
          href: "/no/support",
        },
      },
      {
        title: "Dette følger med",
        description: "Hver Neuvago-pakke inkluderer:",
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
    title: "Spørsmål om Neuvago?",
    description:
      "Tydelige svar om enheten, stimuleringsmodusene, hvordan en økt kjennes, hva som følger med, og forskningen bak taVNS.",
    items: [
      {
        question: "Hva er Neuvago?",
        answer:
          "Neuvago er en ikke-invasiv, ørebasert vagusnervestimulator for generell velvære og strukturerte hverdagsrutiner. Den leverer justerbar elektrisk stimulering gjennom en venstre øreelektrode ved det ytre øret og tilbyr fire moduser på 20 minutter med 30 intensitetsnivåer.",
      },
      {
        question: "Hvordan kan Neuvago inngå i en velværerutine?",
        answer:
          "Neuvago kan brukes som del av velværerutiner for nedtrapping før hvile, korte pauser, meditasjon, fokusert tid og restitusjon. Produktet er ikke ment å diagnostisere, behandle, kurere eller forebygge sykdom.",
      },
      {
        question: "Hvordan føles stimuleringen?",
        answer:
          "De fleste Neuvago-modusene gir mild eller svært mild stimulering som kjennes som en lett prikkende eller stikkende følelse ved øret. Intensiteten kan justeres i små trinn og bør kjennes merkbar, men komfortabel. Relief bruker langsommere og tydeligere pulser og kan derfor kjennes mer markant enn de andre modusene.",
      },
      {
        question: "Hva er de fire stimuleringsmodusene?",
        answer:
          "Neuvago inkluderer fire stimuleringsmoduser: Sleep, Relax, Meditation og Relief. Sleep veksler mellom raskere og langsommere stimuleringsrytmer og er beregnet for kveldsrutiner og nedtrapping. Relax bruker en skånsom rytme med fire sekunder stimulering etterfulgt av fire sekunder pause, beregnet for avspenning og korte pauser. Meditation bruker den samme rytmen med fire sekunder på og fire sekunder av, med et tettere pulsmønster, beregnet for meditasjon og fokusert tid. Relief bruker langsommere og tydeligere pulser etterfulgt av fire sekunder pause og gir en annen sanseprofil enn de øvrige modusene. Hver modus varer i 20 minutter, og stimuleringsintensiteten kan justeres direkte på enheten.",
      },
      {
        question: "Hvor lenge varer en Neuvago-økt?",
        answer:
          "Hver Neuvago-modus varer i 20 minutter. Begynn med lav intensitet og øk den gradvis til stimuleringen kjennes merkbar, men komfortabel.",
      },
      {
        question: "Hva følger med Neuvago?",
        answer:
          "Neuvago-pakken inkluderer Neuvago-enheten, en venstre øreelektrode, ladekabel, filtetui, brukermanual, hurtigstartveiledning, sprayflaske og ledende gel. Ett års tilgang til Neuvago App er også inkludert.",
      },
      {
        question: "Er ett år med Neuvago App inkludert?",
        answer:
          "Ja. Hver Neuvago-enhet inkluderer ett års tilgang til Neuvago App, med profesjonelt veiledede økter og pusteøvelser organisert rundt søvn, stress, fokus og restitusjon.",
      },
      {
        question: "Hva sier forskningen om taVNS?",
        answer:
          "Vagusnervestimulering har blitt studert i flere tiår, og fagfellevurdert forskning undersøker transkutan aurikulær vagusnervestimulering (taVNS) gjennom systematiske oversikter, metaanalyser, randomiserte studier og nevroavbildning hos mennesker. Resultatene varierer mellom enheter, stimuleringsprotokoller, kontrollbetingelser og studiepopulasjoner og er ikke automatisk dokumentasjon for en bestemt effekt av Neuvago.",
        answerLink: {
          label: "Utforsk forskningen",
          href: "/no/forskning",
        },
      },
      {
        question: "Hvilken sikkerhetsinformasjon bør jeg lese før bruk?",
        answer:
          "Les brukermanualen og all medfølgende sikkerhetsinformasjon før du bruker Neuvago for første gang. Bruk øreelektroden bare på intakt hud, begynn med lav intensitet og stopp bruken dersom du opplever betydelig ubehag eller irritasjon. Dersom du er usikker på om Neuvago passer for deg, kontakt kvalifisert helsepersonell før bruk.",
        answerLink: {
          label: "Se fullstendig sikkerhetsinformasjon",
          href: "/no/support",
        },
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
