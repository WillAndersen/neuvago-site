
import { homepageContent } from "@/content/homepage";
import { localizedHref } from "@/i18n/routes";

const no = (href: string) => localizedHref(href, "no");

export const homepageContentNo = {
  ...homepageContent,
  hero: {
    ...homepageContent.hero,
    eyebrow: "Neuvago-enhet + app",
    title: "Møt Neuvago: enhet, app og en roligere daglig rutine.",
    description:
      "En ikke-invasiv VNS-enhet koblet til veiledede appøkter for korte, gjentakbare velværerutiner — med kjøpsalternativer under klargjøring.",
    primaryCta: {
      label: "Se kjøpsalternativer",
      href: no("/product#buy"),
    },
    secondaryCta: {
      label: "Slik fungerer det",
      href: no("/how-it-works"),
    },
    panelEyebrow: "Enhet + app + rutine",
    panelText:
      "En rolig produktopplevelse for korte reguleringsøyeblikk: et fysisk anker, veiledede økter og en rytme du kan vende tilbake til.",
    proofLine: ["Enhet + app", "Klargjør lansering", "Tydelige bruksgrenser"],
    mediaNote:
      "Produktledet hero-felt klart for video. Bruker et rolig stillbilde frem til ambient video er klar.",
  },

  proofStrip: {
    ...homepageContent.proofStrip,
    items: ["Enhet + app", "Kjøp klargjøres", "Veiledede økter", "Tydelige bruksgrenser"],
  },

  systemReveal: {
    ...homepageContent.systemReveal,
    eyebrow: "Produktsystemet",
    title: "Én produktopplevelse: enhet, app og rutine.",
    description:
      "Neuvago er bygget som en komplett produktopplevelse: en taktil ikke-invasiv enhet, veiledede appøkter og en rolig rutinevei som er enkel å vende tilbake til.",
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
    eyebrow: "Slik henger kjøp og bruk sammen",
    title: "Et produkt du kan forstå før kjøp åpner.",
    description:
      "Før kjøp åpner, skal siden gjøre opplevelsen tydelig: hva enheten gjør, hvordan appen veileder deg og hvor bruksgrensene går.",
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
      label: "Se rutinen",
      href: no("/how-it-works"),
    },
  },

  appGuidance: {
    ...homepageContent.appGuidance,
    eyebrow: "Inkludert opplevelse",
    title: "Appen er en del av produktet, ikke et tillegg.",
    description:
      "Neuvago kombinerer enheten med appveiledning slik at første steg, øktflyt og gjentakbar rutine føles tydelig fra starten.",
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
      label: "Utforsk appveiledning",
      href: no("/app"),
    },
  },

  researchBoundary: {
    ...homepageContent.researchBoundary,
    eyebrow: "Tillit før kjøp",
    title: "Tydelige påstander, synlige grenser.",
    description:
      "Neuvago skal være produktledet, men ikke overdrivende. Forskningskontekst, tiltenkt bruk, sikkerhetsspråk og regulatoriske grenser skal ligge tett på kjøpsreisen.",
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
      label: "Les tiltenkt bruk",
      href: no("/legal/intended-use"),
    },
    secondaryCta: {
      label: "Utforsk forskning",
      href: no("/research"),
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
        title: "Morgenrutine",
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
        title: "Kveldsro",
        description:
          "Bruk en mykere rytme for å hjelpe kroppen over mot hvile og restitusjon.",
        href: no("/conditions"),
        image: homepageContent.everydayPathways.items[2].image,
      },
    ],
  },

  finalCta: {
    ...homepageContent.finalCta,
    eyebrow: "Begynn rolig",
    title: "Vær klar når Neuvago åpner for kjøp.",
    description:
      "Se produktet, forstå den veiledede appopplevelsen og gå gjennom de praktiske detaljene før kjøp åpner.",
    primaryCta: {
      label: "Se kjøpsalternativer",
      href: no("/product#buy"),
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
