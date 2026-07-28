import { howItWorksPageContent } from "@/content/how-it-works";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const howItWorksPageContentNo = {
  ...howItWorksPageContent,
  hero: {
    ...howItWorksPageContent.hero,
    eyebrow: "Slik fungerer det",
    title: "Plasser. Start. Vend tilbake.",
    description:
      "Neuvago er bygget rundt en enkel rutine: plasser den ikke-invasive enheten komfortabelt, følg en veiledet appøkt og vend tilbake til rutinen over tid.",
    primaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
    desktopImage: {
      src: "/images/neuvago/how-it-works-routine-desktop.webp",
      alt: "Neuvago-enheten, appen og enkle rutinekort som forklarer hvordan systemet fungerer.",
    },
    mobileImage: {
      src: "/images/neuvago/how-it-works-routine-mobile.webp",
      alt: "Neuvago-enheten, appen og rutinekort vist for mobil.",
    },
    proofLine: ["Enhet + app", "Komfort først", "Laget for daglig bruk"],
    panelEyebrow: "Plasser. Start. Vend tilbake.",
    panelText:
      "Neuvago er laget rundt en enkel rutine: et fysisk produkt, veiledede appøkter og gjentakbare øyeblikk som passer inn i hverdagen.",
  },

  steps: {
    ...howItWorksPageContent.steps,
    eyebrow: "Rutinen",
    stepLabel: "Steg",
    title: "Slik fungerer det, steg for steg",
    description:
      "I praksis er flyten enkel: plasser enheten komfortabelt, følg veiledningen i appen og bygg en rutine du kan vende tilbake til uten å jage intensitet.",
    items: [
      {
        title: "Plasser enheten komfortabelt",
        description:
          "Start med enheten som det fysiske utgangspunktet for opplevelsen. Plassering, kontakt og komfort er en del av rutinen, ikke ettertanker.",
        image: {
          src: "/images/neuvago/launch/product-hero-mobile.webp",
          alt: "Neuvago-enheten vist i en rolig produktkomposisjon.",
        },
      },
      {
        title: "Følg veiledningen i appen",
        description:
          "Bruk appen til å velge veiledning som passer øyeblikket, mens øktlengde, rytme og intensitet holdes enkle å forstå.",
        image: {
          src: "/images/neuvago/app-hero-mobile.webp",
          alt: "Neuvago-appen med veiledet økt på mobil.",
        },
      },
      {
        title: "Vend tilbake over tid",
        description:
          "Gjenta på måter som passer hverdagen, slik at systemet blir mer kjent, mer komfortabelt og enklere å vende tilbake til over tid.",
        image: {
          src: "/images/neuvago/launch/routine-evening-mobile.webp",
          alt: "Neuvago-enheten og appen som del av en rolig kveldsrutine.",
        },
      },
    ],
  },

  systemAtAGlance: {
    ...howItWorksPageContent.systemAtAGlance,
    eyebrow: "Systemet kort fortalt",
    title: "Systemet har tre oppgaver",
    description:
      "Den enkleste måten å forstå Neuvago på er å se hva hvert lag gjør: den ikke-invasive enheten starter opplevelsen, appen veileder den, og gjentakelse gjør den nyttig i hverdagen.",
    cards: [
      {
        title: "Enheten",
        description:
          "En ikke-invasiv vagusnervestimulator laget for å føles enkel, rolig og komfortabel å begynne med.",
      },
      {
        title: "Appen",
        description:
          "Veiledning, økter og struktur som gjør neste steg tydeligere.",
      },
      {
        title: "Sammen",
        description:
          "Ett sammenkoblet system som føles enklere å forstå og enklere å gjenta.",
      },
    ],
    image: {
      src: "/images/neuvago/launch/product-detail-left-desktop.webp",
      alt: "Nærbilde av Neuvago-enhetens materiale og finish.",
    },
  },

  appAdds: {
    ...howItWorksPageContent.appAdds,
    eyebrow: "App-veiledning",
    featureLabel: "Del",
    title: "Hva appen tilfører i praksis",
    description:
      "Appen hjelper enheten å bli et veiledet system. Den tydeliggjør hva du gjør videre, støtter rutiner og gjør opplevelsen lettere å vende tilbake til uten friksjon.",
    features: [
      {
        title: "Øktveiledning",
        description:
          "Velg økter laget for ro, restitusjon, regulering eller kveldsnedtrapping, med en struktur som reduserer gjetting.",
      },
      {
        title: "Tydeligere struktur",
        description:
          "Appen gjør neste steg enklere ved å gi opplevelsen en mer støttende form.",
      },
      {
        title: "Kontinuitet over tid",
        description:
          "Den hjelper sporadisk bruk å bli en stødigere daglig eller ukentlig rytme.",
      },
    ],
    supportingImages: [
      {
        src: "/images/neuvago/support-guidance-desktop.webp",
        alt: "Neuvago-appens bibliotek og veiledning.",
      },
      {
        src: "/images/neuvago/app-hero-desktop.webp",
        alt: "Neuvago-appens hovedskjerm.",
      },
      {
        src: "/images/neuvago/launch/product-app-pairing-desktop.webp",
        alt: "Neuvago-enheten og appen vist sammen.",
      },
    ],
    cta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },

  dailyLife: {
    ...howItWorksPageContent.dailyLife,
    eyebrow: "Passer inn i dagen",
    cardLabel: "",
    title: "Hvordan det kan passe inn i hverdagen",
    description:
      "Når systemet er forstått, kan det passe inn i ekte rutiner — en roligere start, en pause under stress eller en enklere kveldsnedtrapping.",
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
      { src: "/images/neuvago/launch/product-lifestyle-card.webp", alt: "Neuvago-enheten i en rolig morgenrutine." },
      { src: "/images/neuvago/launch/product-detail-left-desktop.webp", alt: "Neuvago-enheten i et rolig hverdagsmiljø." },
      { src: "/images/neuvago/launch/routine-evening-desktop.webp", alt: "Neuvago-enheten og appen i en rolig kveldsrutine." },
    ],
  },

  repetition: {
    ...howItWorksPageContent.repetition,
    eyebrow: "Vend tilbake over tid",
    title: "Hvorfor konsistens betyr mer enn intensitet",
    description:
      "Målet er ikke å gjøre mer og mer. Målet er å bygge en rutine som føles enkel nok til å gjenta, fordi gjentakelse er det som gjør systemet mer nyttig over tid.",
    cards: [
      {
        title: "Enkelt slår intenst",
        description:
          "En komfortabel rutine du faktisk kan gjenta, er mer nyttig enn en som føles for ambisiøs, forvirrende eller krevende.",
      },
      {
        title: "Tilbakevending bygger gjenkjennelse",
        description:
          "Å komme tilbake jevnlig hjelper systemet å føles enklere, tydeligere og mer naturlig over tid.",
      },
      {
        title: "Konsistens støtter opplevelsen",
        description:
          "Verdien kommer fra realistisk gjentakelse, ikke fra å presse intensitet, følelse eller perfeksjon.",
      },
    ],
    image: {
      src: "/images/neuvago/final-cta-desktop.webp",
      alt: "Neuvago-appen vist i et rolig premiumgrensesnitt.",
    },
  },

  faq: {
    ...howItWorksPageContent.faq,
    title: "Praktisk avklaring",
    description:
      "Noen enkle svar på spørsmål folk ofte har når de først utforsker hvordan Neuvago fungerer.",
    items: [
      {
        question: "Bruker jeg enheten sammen med appen?",
        answer:
          "Ja. Neuvago er laget som en sammenkoblet opplevelse der enheten gir et fysisk startpunkt, mens appen gir veiledning, øktstruktur og kontinuitet.",
      },
      {
        question: "Er Neuvago ment for daglig bruk?",
        answer:
          "Ja. Opplevelsen er laget for å føles enkel, gjentakbar og realistisk å vende tilbake til i hverdagen.",
      },
      {
        question: "Er systemet laget for å føles rolig heller enn intenst?",
        answer:
          "Ja. Systemet er bevisst bygget rundt komfort, tydelighet og en roligere støttende opplevelse heller enn intensitet eller overstimulering.",
      },
      {
        question: "Må jeg forstå forskningen før jeg bruker det?",
        answer:
          "Nei. Forskningslaget finnes hvis du vil gå dypere, men selve opplevelsen er laget for å føles enkel og tilgjengelig. Har du en medisinsk tilstand, implantert elektronisk enhet, spørsmål om hjerterytme eller graviditet, bør du snakke med kvalifisert helsepersonell før bruk.",
      },
      {
        question: "Hvordan bør jeg tenke om intensitet?",
        answer:
          "En sterkere følelse er ikke automatisk en bedre økt. Neuvago bør forstås gjennom komfort, veiledning og gjentakbarhet heller enn å presse stimulering hardere.",
      },
    ],
  },

  finalCta: {
    ...howItWorksPageContent.finalCta,
    eyebrow: "Gå videre",
    title: "Utforsk produktet eller appen videre",
    description:
      "Nå som du har den praktiske oversikten, kan du gå videre til produktsiden for selve enheten eller appsiden for den veiledede opplevelsen.",
    primaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
    backgroundImage: {
      src: "/images/neuvago/app-hero-mobile.webp",
      alt: "Neuvago-appen med veiledet økt i et rolig grensesnitt.",
    },
  },
} as unknown as typeof howItWorksPageContent;
