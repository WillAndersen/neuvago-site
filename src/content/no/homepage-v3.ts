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
      "Profesjonelt veiledede økter for søvn, stress, fokus og restitusjon.",
  },
  {
    title: "Pusteverktøy",
    description:
      "Veiledede og visuelle pusteøvelser for ro, søvn, fokus, restitusjon og raske pauser.",
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
    modes: string[];
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
      "Ikke-invasiv vagusnervestimulering utviklet for å hjelpe deg med å sove bedre, føle mer ro, håndtere stress i hverdagen og støtte restitusjon.",
    description:
      "Neuvago stimulerer vagusnerven skånsomt gjennom øret og støtter kroppens naturlige overgang mot ro, hvile og restitusjon.",
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
      "Utviklet for å støtte hvordan du sover, reagerer på stress, fokuserer og restituerer.",
    description:
      "Nervesystemet påvirker hvor lett du skifter mellom aktivering og hvile. Neuvago gir en enkel, ikke-invasiv måte å støtte disse daglige reguleringsprosessene på.",
    image: lifestyleImageNo,
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
    researchBridge:
      "taVNS studeres innen områder som søvn, stress, kognitiv ytelse, HRV og autonom funksjon.",
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
    modes: ["Sleep", "Relax", "Meditation", "Relief"],
  },

  vagusNerve: {
    visible: true,
    eyebrow: "Hvorfor vagusnerven er viktig",
    title:
      "En sentral forbindelse i hvordan kroppen reagerer, restituerer og finner tilbake til balanse.",
    description:
      "Vagusnerven er en av kroppens viktigste kommunikasjonsveier mellom hjernen og indre organer. Som en sentral del av det parasympatiske nervesystemet spiller den en viktig rolle i prosessene som hjelper kroppen med å gå fra aktivering mot hvile, restitusjon og regulering.",
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
    title: "Flere verktøy for søvn, stress, fokus og restitusjon.",
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
          "Neuvago er en ikke-invasiv vagusnervestimulator utviklet for å støtte bedre søvn, roligere responser på stress i hverdagen, fokus og restitusjon. Den gir skånsom, justerbar elektrisk stimulering gjennom en øreelektrode ved det ytre øret og tilbyr fire moduser på 20 minutter for ulike behov og situasjoner.",
      },
      {
        question: "Hva kan Neuvago brukes til?",
        answer:
          "Neuvago kan brukes som en del av hverdagsrutiner for å roe ned før søvn, skape en roligere tilstand, støtte fokusert tid og gi rom for restitusjon. Forskning på transkutan aurikulær vagusnervestimulering (taVNS) utforsker også områder som hjertefrekvensvariabilitet (HRV), hodepine og tarm–hjerne-funksjon.",
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
          "Neuvago har fire stimuleringsmoduser: Sleep, Relax, Meditation og Relief. Sleep veksler mellom raskere og langsommere stimuleringsrytmer og er utviklet for å roe ned om kvelden og støtte søvn. Relax bruker et skånsomt rytmisk mønster med fire sekunder stimulering etterfulgt av fire sekunder pause, utviklet for avspenning og ro i hverdagen. Meditation bruker den samme rytmen med fire sekunder på og fire sekunder av, men med et tettere pulsmønster, utviklet for meditasjon, rolig fokus og konsentrasjon. Relief bruker lavfrekvente og tydeligere pulser for øyeblikk med spenning og ubehag. Hver modus varer i 20 minutter, og stimuleringsintensiteten kan justeres direkte på enheten.",
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
          "Ja. Hver Neuvago-enhet inkluderer ett års tilgang til Neuvago App, med profesjonelt veiledede økter og pusteøvelser for søvn, stress, fokus og restitusjon.",
      },
    ],
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
      "Utforsk ikke-invasiv vagusnervestimulering utviklet for søvn, stress, fokus og restitusjon.",
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
