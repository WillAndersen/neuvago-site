
import { homepageContent } from "@/content/homepage";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const homepageContentNo = {
  ...homepageContent,
  hero: {
    ...homepageContent.hero,
    eyebrow: "Neuvago",
    title: "En roligere måte å vende tilbake på.",
    description:
      "Neuvago kombinerer en ikke-invasiv vagusnervestimulator med veiledede appøkter for korte, gjentakbare rutiner som støtter regulering av nervesystemet.",
    primaryCta: {
      label: "Se produktet",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    proofLine: ["Ikke-invasiv", "App-veiledet", "Forankret i forskning"],
    mediaNote:
      "Hero-felt klart for video. Bruker et rolig stillbilde frem til ambient video er klar.",
  },

  proofStrip: {
    ...homepageContent.proofStrip,
    items: [
      "Ikke-invasiv",
      "App-veiledet",
      "Forankret i forskning",
      "Laget for daglige rutiner",
    ],
  },

  systemReveal: {
    ...homepageContent.systemReveal,
    eyebrow: "Neuvago-systemet",
    title: "Enhet, veiledning og rutine — laget for å fungere som ett.",
    description:
      "Neuvago er ikke bare en enhet eller bare en app. Det er et rolig system bygget rundt et fysisk startpunkt, veiledede økter og en rytme du kan vende tilbake til i hverdagen.",
    image: {
      ...homepageContent.systemReveal.image,
      alt: "Neuvago-enheten vist i en varm og premium produktkomposisjon.",
    },
    items: [
      {
        eyebrow: "Enhet",
        title: "Et rolig fysisk anker",
        description:
          "Den håndholdte enheten gir rutinen et tydelig startpunkt — enkel, gjennomtenkt og lett å ha i nærheten.",
        href: no("/product"),
      },
      {
        eyebrow: "Veiledning",
        title: "Økter som gjør neste steg tydelig",
        description:
          "Appen gir struktur i øyeblikket: velg en økt, følg rytmen og kom tilbake uten å måtte gjette.",
        href: no("/app"),
      },
      {
        eyebrow: "Rutine",
        title: "Bygget for gjentakelse",
        description:
          "Verdien ligger ikke i én intens økt, men i et roligere mønster du kan komme tilbake til over tid.",
        href: no("/how-it-works"),
      },
    ],
  },

  ritualSequence: {
    ...homepageContent.ritualSequence,
    eyebrow: "Rutinen",
    title: "Enkel nok til å begynne. Strukturert nok til å vende tilbake til.",
    description:
      "Opplevelsen er bevisst rolig: plasser enheten, start en veiledet økt og la appen gjøre øyeblikket til en gjentakbar rutine.",
    steps: [
      {
        title: "Plasser",
        description:
          "Start med et tydelig fysisk utgangspunkt og et rolig oppsett som ikke føles klinisk.",
      },
      {
        title: "Start",
        description:
          "Velg en veiledet økt i appen og følg en enkel, avgrenset rytme.",
      },
      {
        title: "Vend tilbake",
        description:
          "Bruk samme struktur igjen over tid, slik at regulering blir lettere å komme tilbake til.",
      },
    ],
    cta: {
      label: "Se hvordan det fungerer",
      href: no("/how-it-works"),
    },
  },

  appGuidance: {
    ...homepageContent.appGuidance,
    eyebrow: "Veiledet av appen",
    title: "Appen gjør en økt til noe du kan følge.",
    description:
      "Neuvago er laget for å fjerne usikkerheten rundt hva du skal gjøre videre. Økter, forløp og rolige fremdriftssignaler gjør opplevelsen veiledet heller enn improvisert.",
    items: [
      {
        title: "Veiledede økter",
        description:
          "Velg en økt som passer øyeblikket — reset, nedtrapping eller en roligere rytme.",
      },
      {
        title: "Et bibliotek som holder seg rolig",
        description:
          "Veiledningen er organisert uten at appen føles som et støyende dashboard.",
      },
      {
        title: "Fremdrift uten press",
        description:
          "Målet er kontinuitet, ikke prestasjon. Mer rytme, mindre intensitet.",
      },
    ],
    cta: {
      label: "Utforsk appen",
      href: no("/app"),
    },
  },

  researchBoundary: {
    ...homepageContent.researchBoundary,
    eyebrow: "Forskning og tydelige grenser",
    title: "Forankret i forskning, ikke drevet av påstander.",
    description:
      "Neuvago står i en bredere forskningssamtale om vagusnervestimulering, autonom regulering, HRV, stress og restitusjon. Nettstedet skiller forskningskontekst fra produktpåstander og holder tiltenkt bruk synlig.",
    points: [
      {
        title: "Hva forskning kan bidra til å forklare",
        description:
          "Vagusnerven og autonom regulering er relevante rammer for å forstå stress, restitusjon og nedregulering.",
      },
      {
        title: "Hva forskning ikke beviser",
        description:
          "Dokumentasjon fra et forskningsfelt blir ikke automatisk en påstand om et bestemt velværeprodukt eller en bestemt rutine.",
      },
      {
        title: "Slik holder Neuvago seg ansvarlig",
        description:
          "Neuvago posisjoneres ikke som medisinsk behandling, diagnostisk verktøy eller erstatning for profesjonell oppfølging.",
      },
    ],
    primaryCta: {
      label: "Utforsk forskning",
      href: no("/research"),
    },
    secondaryCta: {
      label: "Se tiltenkt bruk",
      href: no("/legal/intended-use"),
    },
  },

  everydayPathways: {
    ...homepageContent.everydayPathways,
    eyebrow: "Hverdagsøyeblikk",
    title: "Tre øyeblikk der en roligere rutine kan begynne.",
    description:
      "Neuvago er laget for hverdagen: en kort reset før dagen, en roligere pause under stress eller en mykere nedtrapping om kvelden.",
    items: [
      {
        eyebrow: "Morgen",
        title: "Morgenreset",
        description:
          "Start med en kort veiledet rutine før dagen blir for travel.",
        href: no("/app"),
        image: homepageContent.everydayPathways.items[0].image,
      },
      {
        eyebrow: "Dag",
        title: "Pause i arbeidsdagen",
        description:
          "Skap en roligere overgang når stresset føles som om det står på for lenge.",
        href: no("/conditions"),
        image: homepageContent.everydayPathways.items[1].image,
      },
      {
        eyebrow: "Kveld",
        title: "Kveldsnedtrapping",
        description:
          "Bruk en mykere rytme for å hjelpe kroppen over mot hvile og restitusjon.",
        href: no("/conditions"),
        image: homepageContent.everydayPathways.items[2].image,
      },
    ],
  },

  finalCta: {
    ...homepageContent.finalCta,
    title: "Bygg en roligere reguleringsrutine.",
    description:
      "Se hvordan Neuvago kombinerer en ikke-invasiv enhet, veiledede økter og forskningsinformert kunnskap i ett rolig daglig system.",
    primaryCta: {
      label: "Se Neuvago",
      href: no("/product"),
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    signedInCta: {
      label: "Fortsett",
      href: "/continue",
    },
  },
} as unknown as typeof homepageContent;
