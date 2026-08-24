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
    title: "Slik stimulerer Neuvago vagusnerven.",
    description:
      "Neuvago gir skånsomme, justerbare elektriske impulser gjennom en øreelektrode ved det ytre øret for å stimulere den aurikulære grenen av vagusnerven. Disse sensoriske signalene går mot hjernestammen, der vagal informasjon formidles videre til større nettverk som er involvert i autonom regulering og kommunikasjon mellom hjernen og kroppen.",
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
          "Impulsene stimulerer den aurikulære grenen av vagusnerven, som fører sensorisk informasjon fra deler av det ytre øret.",
      },
      {
        label: "03",
        title: "Hjernestammen",
        description:
          "Signalene går mot hjernestammen, der vagal sensorisk informasjon mottas og formidles videre.",
      },
      {
        label: "04",
        title: "Autonome nettverk",
        description:
          "Fra hjernestammen kobles vagale nervebaner til større nettverk som er involvert i kommunikasjon mellom hjernen og kroppen og kroppens overgang mellom aktivering, hvile og restitusjon.",
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
      intendedUse: "Utviklet for",
      stimulationPattern: "Stimuleringsmønster",
    },
    items: [
      {
        id: "sleep",
        name: "Sleep",
        intendedUse:
          "Utviklet for nedtrapping om kvelden, hvile og bedre søvn.",
        stimulationPattern:
          "Sleep veksler mellom raskere og langsommere stimuleringsrytmer og skaper et skånsomt, skiftende mønster.",
        sensation:
          "Typisk følelse: Svært mild stimulering med en lett prikkende eller stikkende følelse ved øret.",
      },
      {
        id: "relax",
        name: "Relax",
        intendedUse:
          "Utviklet for stress i hverdagen, avspenning og en roligere tilstand.",
        stimulationPattern:
          "Relax følger en jevn rytme med fire sekunder stimulering etterfulgt av fire sekunder pause.",
        sensation:
          "Typisk følelse: Svært mild stimulering med en myk prikkende eller stikkende følelse.",
      },
      {
        id: "meditation",
        name: "Meditation",
        intendedUse:
          "Utviklet for meditasjon, fokus og konsentrasjon.",
        stimulationPattern:
          "Meditation følger den samme rytmen med fire sekunder på og fire sekunder av som Relax, med et tettere pulsmønster.",
        sensation:
          "Typisk følelse: Mild prikking eller stikking, vanligvis tydeligere enn Relax.",
      },
      {
        id: "relief",
        name: "Relief",
        intendedUse:
          "Utviklet for øyeblikk med spenning og ubehag.",
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
    title: "Vitenskapen bak ørebasert vagusnervestimulering.",
    description:
      "Neuvago bruker transkutan aurikulær vagusnervestimulering (taVNS), en ikke-invasiv tilnærming som gir skånsom elektrisk stimulering gjennom det ytre øret. Forskning utforsker taVNS innen områder som søvn, stress, autonom funksjon, hjertefrekvensvariabilitet (HRV), nervebaner i hjernen, sikkerhet og tolerabilitet.",
    areas: [
      {
        title: "Søvn og stress",
        description:
          "Forskning utforsker taVNS i sammenheng med søvnkvalitet, stressresponser og restitusjon.",
      },
      {
        title: "Autonom funksjon og HRV",
        description:
          "Studier undersøker taVNS i sammenheng med autonome markører, inkludert hjertefrekvensvariabilitet.",
      },
      {
        title: "Nervebaner i hjernen",
        description:
          "Nevroavbildningsforskning på mennesker har undersøkt hvordan aurikulær stimulering aktiverer sentrale nervebaner knyttet til vagusnerven.",
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
      "Forskningen som presenteres, gjelder VNS og taVNS som forskningsfelt. Funn varierer mellom enheter, stimuleringsprotokoller og studiepopulasjoner.",
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
