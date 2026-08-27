import { appV2Content } from "@/content/app-v2";
import {
  homepageContent,
  type HomepageCard,
  type HomepageCta,
  type HomepageImage,
} from "@/content/homepage";
import { commerceContent } from "@/content/commerce";
import type {
  Homepage03FaqItem,
  Homepage03Link,
  Homepage03Mode,
} from "@/content/homepage-v3";

const homeProductCtaNo = {
  label: commerceContent.isLive
    ? "Kjøp Neuvago"
    : "Få lanseringstilgang",
  href: commerceContent.shopHref,
} satisfies HomepageCta;

const appContentLaunchingSoon =
  !appV2Content.availability.professionalGuidance ||
  !appV2Content.availability.breathingTools;

const appItemsNo: HomepageCard[] = [
  {
    title: "Veiledede økter",
    description:
      "Profesjonelt veiledede økter organisert rundt søvn, stress, fokus og restitusjon.",
  },
  {
    title: "Pusteverktøy",
    description:
      "Veiledede og visuelle pusteøvelser for rolige pauser, nedtrapping, fokus og rutinebygging.",
  },
];

const homepageHeroDesktopNo = {
  src: "/images/neuvago/product-hero-desktop.webp",
  alt: "Nærbilde av Neuvago-enheten i en rolig produktsetting.",
} satisfies HomepageImage;

const homepageHeroMobileNo = {
  src: "/images/neuvago/launch/product-hero-mobile.webp",
  alt: "Nærbilde av Neuvago-enheten i en varm produktsetting.",
} satisfies HomepageImage;

const lifestyleImageNo = {
  src: "/images/neuvago/launch/product-lifestyle-card.webp",
  alt: "Neuvago-enheten i en rolig hjemmesituasjon.",
} satisfies HomepageImage;

const vagusImageNo = {
  src: "/images/neuvago/launch/product-detail-left-desktop.webp",
  alt: "Detaljert visning av Neuvago-enheten og de fysiske kontrollene.",
} satisfies HomepageImage;

const researchImageNo = {
  src: "/images/neuvago/research-hub-evidence-desktop.webp",
  alt: "Neuvago-enheten ved siden av forskningsnotater og kunnskapsmateriell.",
} satisfies HomepageImage;

const appLibraryImageNo = {
  src: "/images/home/app-mockup-library.png",
  alt: "Forhåndsvisning av biblioteket med veiledede økter i Neuvago App.",
} satisfies HomepageImage;

const appProgressImageNo = {
  src: "/images/home/app-mockup-progress.png",
  alt: "Forhåndsvisning av fremdrifts- og refleksjonsverktøy i Neuvago App.",
} satisfies HomepageImage;

const finalCtaDesktopNo = {
  src: "/images/neuvago/product-hero-desktop.webp",
  alt: "Nærbilde av Neuvago-enheten.",
} satisfies HomepageImage;

const finalCtaMobileNo = {
  src: "/images/neuvago/product-hero-mobile.webp",
  alt: "Nærbilde av Neuvago-enheten for mobilvisning.",
} satisfies HomepageImage;

type Homepage03ContentNo = {
  hero: typeof homepageContent.hero;
  featureBar: {
    visible: boolean;
    items: string[];
  };
  benefits: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    items: HomepageCard[];
    researchBridge: string;
    researchCta: HomepageCta;
  };
  stimulationModes: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    modes: Homepage03Mode[];
  };
  vagusNerve: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    cta: HomepageCta;
  };
  research: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    image: HomepageImage;
    cta: HomepageCta;
  };
  appGuidance: typeof homepageContent.appGuidance;
  learn: {
    visible: boolean;
    eyebrow: string;
    title: string;
    description: string;
    links: Homepage03Link[];
    cta: HomepageCta;
  };
  faq: {
    visible: boolean;
    title: string;
    items: Homepage03FaqItem[];
    supportPrompt: string;
    supportCta: HomepageCta;
  };
  finalCta: typeof homepageContent.finalCta;
};

export const homepage03ContentNo = {
  hero: {
    visible: true,
    eyebrow: "Neuvago",
    title: "Utviklet for nervesystemet ditt.",
    productLine:
      "Ikke-invasiv, ørebasert vagusnervestimulering for rolige velværerutiner knyttet til søvn, stress, fokus og restitusjon.",
    description:
      "Neuvago leverer skånsom, justerbar elektrisk stimulering gjennom en øreelektrode ved det ytre øret, med fire moduser på 20 minutter og appveiledning for ulike hverdagsrutiner.",
    primaryCta: homeProductCtaNo,
    secondaryCta: {
      label: "Slik fungerer det",
      href: "/no/slik-fungerer-det",
    },
    desktopImage: homepageHeroDesktopNo,
    mobileImage: homepageHeroMobileNo,
    proofLine: [
      "Ikke-invasiv",
      "Legemiddelfri",
      "Fire stimuleringsmoduser",
    ],
    mediaNote:
      "Enhetsfokusert Home-hero med dagens godkjente midlertidige produktfoto.",
  },

  featureBar: {
    visible: true,
    items: [
      "IKKE-INVASIV",
      "LEGEMIDDELFRI",
      "FIRE STIMULERINGSMODUSER",
      "JUSTERBAR INTENSITET",
    ],
  },

  benefits: {
    visible: true,
    eyebrow: "Hvorfor vagusnervestimulering?",
    title:
      "Utviklet for rutiner rundt søvn, stress, fokus og restitusjon.",
    description:
      "Nervesystemet er med på å forme overgangen mellom aktivitet og hvile. Neuvago gir en enkel, ikke-invasiv ramme for korte, strukturerte velværeøkter i hverdagen.",
    image: lifestyleImageNo,
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
    researchBridge:
      "Forskning på taVNS undersøker blant annet søvn, stress, kognitiv ytelse, HRV og autonom funksjon. Funnene er metode- og protokollavhengige og dokumenterer ikke automatisk en bestemt effekt av Neuvago.",
    researchCta: {
      label: "Utforsk forskningen",
      href: "/no/forskning",
    },
  },

  stimulationModes: {
    visible: true,
    eyebrow: "Fire stimuleringsmoduser",
    title: "Fire moduser for ulike behov.",
    description:
      "Velg mellom fire dedikerte stimuleringsmoduser utviklet for ulike øyeblikk og rutiner.",
    modes: [
      {
        name: "Sleep",
        description:
          "For rolig nedtrapping om kvelden og en fast rutine før hvile.",
      },
      {
        name: "Relax",
        description:
          "For korte pauser, avspenning og roligere øyeblikk i hverdagen.",
      },
      {
        name: "Meditation",
        description:
          "For meditasjon, tilstedeværelse og strukturert fokus.",
      },
      {
        name: "Relief",
        description:
          "For en langsommere og mer tydelig stimuleringsrytme.",
      },
    ],
  },

  vagusNerve: {
    visible: true,
    eyebrow: "Hvorfor vagusnerven er viktig",
    title:
      "En sentral forbindelse i hvordan kroppen veksler mellom aktivitet og hvile.",
    description:
      "Vagusnerven er en av kroppens viktige kommunikasjonsveier mellom hjernen og indre organer. Som del av det autonome nervesystemet er den relevant for forskning på prosesser knyttet til aktivitet, hvile og regulering.",
    image: vagusImageNo,
    cta: {
      label: "Lær om vagusnerven",
      href: "/no/kunnskap/vagusnerven",
    },
  },

  research: {
    visible: true,
    eyebrow: "Forskning",
    title:
      "Et voksende forskningsfelt innen vagusnervestimulering.",
    description:
      "Vagusnervestimulering har vært studert i flere tiår. Forskning på ikke-invasive tilnærminger, inkludert transkutan aurikulær vagusnervestimulering (taVNS), omfatter områder som søvn, stress, autonom regulering, hjertefrekvensvariabilitet (HRV), sikkerhet og tolerabilitet.",
    image: researchImageNo,
    cta: {
      label: "Utforsk forskningen",
      href: "/no/forskning",
    },
  },

  appGuidance: {
    visible: true,
    eyebrow: "Neuvago App",
    title: "Flere verktøy for rutiner rundt søvn, stress, fokus og restitusjon.",
    description: appContentLaunchingSoon
      ? "Veiledede økter og pusteverktøy lanseres snart. Som en del av Neuvagos bredere fokus på nervesystemet og velvære vil Neuvago App samle profesjonelt veiledede økter og pusteøvelser for ulike behov og situasjoner. Hver Neuvago-enhet inkluderer ett års tilgang til Neuvago App."
      : "Som en del av Neuvagos bredere fokus på nervesystemet og velvære samler Neuvago App profesjonelt veiledede økter og pusteøvelser for ulike behov og situasjoner. Hver Neuvago-enhet inkluderer ett års tilgang til Neuvago App.",
    image: appLibraryImageNo,
    mobileImage: appProgressImageNo,
    items: appItemsNo,
    cta: {
      label: "Utforsk Neuvago App",
      href: "/no/app",
    },
  },

  learn: {
    visible: true,
    eyebrow: "Kunnskap",
    title: "Forstå nervesystemet ditt.",
    description:
      "Utforsk tydelige, forskningsinformerte guider om vagusnerven, stress, søvn, restitusjon og det autonome nervesystemet.",
    links: [
      {
        label: "Vagusnerven",
        href: "/no/kunnskap/vagusnerven",
      },
      {
        label: "Vagusnervestimulering",
        href: "/no/kunnskap/vagusnervestimulering",
      },
      {
        label: "Ikke-invasiv vagusnervestimulering",
        href: "/no/kunnskap/ikke-invasiv-vagusnervestimulering",
      },
    ],
    cta: {
      label: "Utforsk Kunnskap",
      href: "/no/kunnskap",
    },
  },

  faq: {
    visible: true,
    title: "Ofte stilte spørsmål",
    items: [
      {
        question: "Hva er Neuvago?",
        answer:
          "Neuvago er en ikke-invasiv, ørebasert vagusnervestimulator for generell velvære og strukturerte hverdagsrutiner. Den leverer skånsom, justerbar elektrisk stimulering gjennom en øreelektrode ved det ytre øret og har fire moduser på 20 minutter.",
      },
      {
        question: "Hva kan Neuvago brukes til?",
        answer:
          "Neuvago kan brukes som del av velværerutiner for nedtrapping før hvile, korte pauser, meditasjon, fokusert tid og restitusjon. Forskning på transkutan aurikulær vagusnervestimulering (taVNS) undersøker også HRV, hodepine og tarm–hjerne-funksjon, men slike funn er ikke automatisk dokumentasjon for en bestemt effekt av Neuvago.",
        answerLink: {
          label: "Utforsk forskningen",
          href: "/no/forskning",
        },
      },
      {
        question: "Hvordan føles vagusnervestimulering?",
        answer:
          "De fleste Neuvago-modusene gir mild eller svært mild stimulering som kan kjennes som lett prikking eller små stikk ved øret. Intensiteten kan justeres og bør økes gradvis til stimuleringen er merkbar, men komfortabel. Relief bruker langsommere og tydeligere pulser og kan derfor oppleves mer markant enn de andre modusene.",
      },
      {
        question: "Hva er de fire stimuleringsmodusene?",
        answer:
          "Neuvago har fire stimuleringsmoduser: Sleep, Relax, Meditation og Relief. Sleep veksler mellom raskere og langsommere stimuleringsrytmer og er beregnet for kveldsrutiner og nedtrapping. Relax bruker et skånsomt rytmisk mønster med fire sekunder stimulering etterfulgt av fire sekunder pause, beregnet for avspenning og korte pauser. Meditation bruker den samme rytmen med fire sekunder på og fire sekunder av, men med et tettere pulsmønster, beregnet for meditasjon og fokusert tid. Relief bruker lavfrekvente og tydeligere pulser og gir en annen sanseprofil enn de øvrige modusene. Hver modus varer i 20 minutter, og stimuleringsintensiteten kan justeres direkte på enheten.",
      },
      {
        question: "Hvor lenge varer en Neuvago-økt?",
        answer:
          "Hver Neuvago-modus varer i 20 minutter. Begynn med lav intensitet og øk den gradvis til stimuleringen er merkbar, men komfortabel.",
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
    ],
    supportPrompt: "Trenger du mer hjelp?",
    supportCta: {
      label: "Besøk Support",
      href: "/no/support",
    },
  },

  finalCta: {
    visible: true,
    eyebrow: "Neuvago-enheten",
    title: "Klar for å gjøre Neuvago til en del av rutinen din?",
    description:
      "Utforsk en ikke-invasiv, ørebasert enhet med fire stimuleringsmoduser og appveiledning for strukturerte velværerutiner.",
    primaryCta: homeProductCtaNo,
    secondaryCta: {
      label: "Slik fungerer det",
      href: "/no/slik-fungerer-det",
    },
    signedInCta: {
      label: "Fortsett",
      href: "/continue",
    },
    backgroundImage: finalCtaDesktopNo,
    mobileImage: finalCtaMobileNo,
  },
} satisfies Homepage03ContentNo;

export const homepage03CommerceNo = {
  mode: commerceContent.mode,
  isLive: commerceContent.isLive,
  primaryCta: homeProductCtaNo,
} as const;
