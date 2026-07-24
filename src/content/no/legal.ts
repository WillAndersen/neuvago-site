import type { Metadata } from "next";
import { localizedHref } from "@/i18n/routes";
import type { LegalTemplateContent } from "@/components/legal/LocalizedLegalPage";

const no = (href: string) => localizedHref(href, "no");

function metadata({
  title,
  description,
  canonical,
  english,
}: {
  title: string;
  description: string;
  canonical: string;
  english: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-US": english,
        "nb-NO": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Neuvago",
      locale: "nb_NO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const legalRelated = [
  {
    title: "Tiltenkt bruk",
    description: "Hvordan Neuvago skal forstås, og hvilke grenser som gjelder for bruk og kommunikasjon.",
    href: no("/legal/intended-use"),
    linkLabel: "Les tiltenkt bruk",
  },
  {
    title: "Personvern",
    description: "Hvordan personopplysninger kan behandles på nettsiden, i kjøpsflyt og i kontakt med support.",
    href: no("/legal/privacy-policy"),
    linkLabel: "Les personvern",
  },
  {
    title: "Vilkår",
    description: "Vilkår for bruk av nettsiden, produktinformasjon, kjøp, ansvar og immaterielle rettigheter.",
    href: no("/legal/terms-of-service"),
    linkLabel: "Les vilkår",
  },
  {
    title: "Support",
    description: "Finn praktisk hjelp og riktig sted å starte hvis du vil forstå Neuvago bedre.",
    href: no("/support"),
    linkLabel: "Gå til support",
  },
];

export const noLegalContent = {
  hub: {
    metadata: metadata({
      title: "Juridisk og samsvar | Neuvago",
      description:
        "Samlet juridisk informasjon for Neuvago i Norge, inkludert tiltenkt bruk, personvern og vilkår.",
      canonical: "/no/juridisk",
      english: "/legal",
    }),
    structuredDataTitle: "Juridisk og samsvar | Neuvago",
    structuredDataDescription:
      "Samlet juridisk informasjon for Neuvago i Norge, inkludert tiltenkt bruk, personvern og vilkår.",
    path: "/no/juridisk",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Juridisk og samsvar", path: "/no/juridisk" },
    ],
    eyebrow: "Juridisk og samsvar",
    title: "Tydelig juridisk informasjon for Neuvago i Norge.",
    description:
      "Denne delen samler de viktigste juridiske, personvernmessige og produktrelaterte rammene for Neuvago. Målet er at brukere skal forstå hva produktet er ment for, hvilke grenser som gjelder, og hvor de finner praktisk informasjon.",
    secondaryDescription:
      "Sidene er laget som et strukturert utgangspunkt for norsk lansering. Endelig tekst bør gjennomgås av juridisk og regulatorisk rådgiver før offentlig launch.",
    primaryCta: { label: "Les tiltenkt bruk", href: no("/legal/intended-use") },
    secondaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
    trustCard: {
      eyebrow: "Tillit og klarhet",
      title: "En ryddig struktur for produkt, personvern og vilkår",
      items: [
        { title: "Tiltenkt bruk", description: "Hva Neuvago er laget for, og hva det ikke er ment å erstatte." },
        { title: "Personvern", description: "Hvordan personopplysninger kan behandles og hvilke rettigheter brukere har." },
        { title: "Vilkår", description: "Rammer for bruk av nettside, produktinformasjon, kjøp og ansvar." },
      ],
    },
    notice: {
      title: "Lanseringsnotat",
      body:
        "Dette er norsk launch-copy og ikke juridisk rådgivning. Selskapsopplysninger, datoer, betalingsflyt, returvilkår, personvernleverandører, appdata og endelig regulatorisk posisjonering må kontrolleres før siden publiseres.",
    },
    keyPoints: [
      {
        title: "Ansvarlig kommunikasjon",
        description:
          "Neuvago bør beskrives med tydelige grenser rundt velvære, bruk, sikkerhet og hva produktet ikke er ment å gjøre.",
      },
      {
        title: "Personvern med klarhet",
        description:
          "Brukere skal forstå hvilke opplysninger som kan behandles, hvorfor de behandles, og hvordan de kan utøve rettighetene sine.",
      },
      {
        title: "Praktiske vilkår",
        description:
          "Vilkår bør dekke nettsidebruk, produktinformasjon, kjøp, betaling, levering, retur, immaterielle rettigheter og ansvarsgrenser.",
      },
    ],
    sections: [
      {
        title: "Hva denne juridiske delen dekker",
        body: [
          "Den juridiske delen samler informasjon om tiltenkt bruk, personvern, vilkår og relaterte tillits- og samsvarsgrenser.",
          "Den er ment å gjøre viktig informasjon mer tilgjengelig for brukere, samtidig som Neuvago kan holde kommunikasjon, produktbeskrivelser og sikkerhetsgrenser samlet på ett sted.",
        ],
      },
      {
        title: "Hva som må fylles inn før launch",
        body: [
          "Selskapsnavn, organisasjonsnummer, adresse, kontaktadresse, effektiv dato, returvilkår, leverandører, betalingsløsninger og eventuelle databehandlere må fylles inn eller bekreftes.",
          "Dersom appen samler inn helse- eller sensorrelaterte opplysninger, må personvernteksten oppdateres eksplisitt for den faktiske databehandlingen.",
        ],
      },
      {
        title: "Regulatorisk presisjon",
        body: [
          "Produktets endelige markedsføring må samsvare med tiltenkt bruk, produktdokumentasjon, sikkerhetsinformasjon og regulatorisk vurdering.",
          "Unngå påstander som kan forstås som diagnostikk, behandling, kurering eller forebygging av sykdom dersom slik bruk ikke er godkjent og dokumentert.",
        ],
      },
    ],
    relatedPages: legalRelated,
    finalCta: {
      eyebrow: "Neste steg",
      title: "Fortsett til tiltenkt bruk, personvern eller vilkår",
      description:
        "Start med tiltenkt bruk for produktgrensene, personvern for databehandling, eller vilkår for praktiske rammer rundt nettside og kjøp.",
      primaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
      secondaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
    },
  },

  intendedUse: {
    metadata: metadata({
      title: "Tiltenkt bruk | Neuvago Norge",
      description:
        "Les hvordan Neuvago er ment å brukes som del av en rolig velværerutine, og hvilke medisinske og sikkerhetsmessige grenser som gjelder.",
      canonical: "/no/juridisk/tiltenkt-bruk",
      english: "/legal/intended-use",
    }),
    structuredDataTitle: "Tiltenkt bruk | Neuvago Norge",
    structuredDataDescription:
      "Les hvordan Neuvago er ment å brukes som del av en rolig velværerutine, og hvilke medisinske og sikkerhetsmessige grenser som gjelder.",
    path: "/no/juridisk/tiltenkt-bruk",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Juridisk", path: "/no/juridisk" },
      { name: "Tiltenkt bruk", path: "/no/juridisk/tiltenkt-bruk" },
    ],
    eyebrow: "Juridisk / Tiltenkt bruk",
    title: "Tiltenkt bruk og tydelige produktgrenser.",
    description:
      "Neuvago er beskrevet som en ikke-invasiv produkt- og appopplevelse for voksne som ønsker en roligere, mer strukturert velværerutine i hverdagen.",
    secondaryDescription:
      "Denne siden forklarer hvordan Neuvago bør forstås på et overordnet nivå, og hvilke typer bruk og påstander som ikke er en del av tiltenkt bruk.",
    primaryCta: { label: "Se produktet", href: no("/product") },
    secondaryCta: { label: "Juridisk oversikt", href: no("/legal") },
    trustCard: {
      eyebrow: "Bruksramme",
      title: "Velvære, rutine og ansvarlig bruk",
      items: [
        { title: "Voksne brukere", description: "Neuvago er skrevet og posisjonert for voksne brukere med egen vurderingsevne." },
        { title: "Ikke-invasiv bruk", description: "Opplevelsen skal brukes i tråd med instruksjoner, sikkerhetsinformasjon og appveiledning." },
        { title: "Ikke medisinsk behandling", description: "Innholdet skal ikke forstås som diagnose, behandling eller medisinsk råd." },
      ],
    },
    notice: {
      title: "Viktig sikkerhets- og regulatorisk notat",
      body:
        "Denne teksten må samsvare med endelig produktdokumentasjon, brukerhåndbok, regulatorisk vurdering og faktiske claims. Ikke bruk medisinske behandlingspåstander med mindre de er uttrykkelig godkjent, dokumentert og juridisk avklart.",
    },
    keyPoints: [
      {
        title: "Generell velværebruk",
        description:
          "Neuvago er ment å støtte roligere rutiner, restitusjonsvaner og daglig regulering som del av en bredere velværepraksis.",
      },
      {
        title: "App-veiledet opplevelse",
        description:
          "Appen skal bidra med struktur, tydelighet og veiledning, men erstatter ikke profesjonell medisinsk vurdering.",
      },
      {
        title: "Klare grenser",
        description:
          "Neuvago skal ikke presenteres som et produkt som diagnostiserer, behandler, kurerer eller forebygger sykdom.",
      },
    ],
    sections: [
      {
        title: "Tiltenkt formål",
        body: [
          "Neuvago er ment for voksne brukere som ønsker en roligere, mer strukturert velværerutine knyttet til stress, restitusjon, søvnforberedelse og daglig regulering.",
          "Produktet og appen er ment å brukes sammen som en kort, repeterbar opplevelse som kan passe inn i hverdagen.",
        ],
      },
      {
        title: "Ikke ment som medisinsk behandling",
        body: [
          "Neuvago er ikke ment å diagnostisere, behandle, kurere eller forebygge sykdom eller medisinske tilstander.",
          "Informasjon på nettsiden, i appen eller i annet Neuvago-materiale er generell informasjon og skal ikke tolkes som medisinsk råd.",
          "Personer med medisinske tilstander, implanterte elektroniske enheter, graviditet, epilepsi, hjerterytmeforstyrrelser eller andre relevante bekymringer bør rådføre seg med kvalifisert helsepersonell før bruk.",
        ],
      },
      {
        title: "Bruk i tråd med instruksjoner",
        body: [
          "Neuvago skal brukes i samsvar med instruksjoner, sikkerhetsinformasjon og eventuell veiledning som følger med produktet eller appen.",
          "Brukeren er ansvarlig for å stoppe bruk ved ubehag, feil bruk, uventede reaksjoner eller andre bekymringer, og for å søke medisinsk hjelp ved behov.",
        ],
      },
      {
        title: "Kommunikasjonsgrenser",
        body: [
          "Markedsføring og produktinformasjon bør holde seg innenfor velvære, rutine, opplevelse, avslapning og generell reguleringsstøtte dersom dette er den godkjente posisjoneringen.",
          "Produktet skal ikke beskrives på en måte som gir inntrykk av dokumentert behandlingseffekt for spesifikke sykdommer uten at dette er regulatorisk og vitenskapelig avklart.",
        ],
      },
      {
        title: "Endringer i dokumentasjon",
        body: [
          "Tiltenkt bruk kan oppdateres dersom produktet, appen, regulatorisk dokumentasjon, sikkerhetsinformasjon eller markedsposisjonering endres.",
          "Den til enhver tid publiserte versjonen bør gjenspeile den faktiske lanseringsstatusen for produktet i Norge.",
        ],
      },
    ],
    relatedPages: legalRelated,
    finalCta: {
      eyebrow: "Neste steg",
      title: "Les mer om personvern og vilkår",
      description:
        "Etter tiltenkt bruk bør brukere også kunne forstå hvordan data håndteres og hvilke vilkår som gjelder for nettsted, kjøp og bruk.",
      primaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
      secondaryCta: { label: "Vilkår", href: no("/legal/terms-of-service") },
    },
  },

  privacy: {
    metadata: metadata({
      title: "Personvern | Neuvago Norge",
      description:
        "Les hvordan Neuvago kan behandle personopplysninger i forbindelse med nettsted, kjøp, support, nyhetsbrev, analyse og apprelaterte tjenester.",
      canonical: "/no/juridisk/personvern",
      english: "/legal/privacy-policy",
    }),
    structuredDataTitle: "Personvern | Neuvago Norge",
    structuredDataDescription:
      "Les hvordan Neuvago kan behandle personopplysninger i forbindelse med nettsted, kjøp, support, nyhetsbrev, analyse og apprelaterte tjenester.",
    path: "/no/juridisk/personvern",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Juridisk", path: "/no/juridisk" },
      { name: "Personvern", path: "/no/juridisk/personvern" },
    ],
    eyebrow: "Juridisk / Personvern",
    title: "Personvern og behandling av personopplysninger.",
    description:
      "Denne personvernsiden forklarer hvordan Neuvago kan samle inn, bruke, lagre og beskytte personopplysninger når brukere besøker nettstedet, kjøper produkter, kontakter support eller bruker relaterte tjenester.",
    secondaryDescription:
      "Teksten må tilpasses faktisk databehandling, faktiske leverandører, appfunksjoner, analyseverktøy, e-handelsoppsett og selskapets kontaktinformasjon før lansering.",
    primaryCta: { label: "Kontakt support", href: no("/support") },
    secondaryCta: { label: "Vilkår", href: no("/legal/terms-of-service") },
    trustCard: {
      eyebrow: "Personvernramme",
      title: "Tydelig informasjon om data, formål og rettigheter",
      items: [
        { title: "Hva som behandles", description: "Kontaktdata, kjøpsdata, tekniske data og eventuell apprelatert informasjon må beskrives tydelig." },
        { title: "Hvorfor det behandles", description: "Formål som kjøp, levering, support, sikkerhet, analyse og kommunikasjon må forklares." },
        { title: "Brukerrettigheter", description: "Brukere skal kunne forstå hvordan de kan be om innsyn, retting, sletting eller begrensning." },
      ],
    },
    notice: {
      title: "Må tilpasses før launch",
      body:
        "Denne siden inneholder generell norsk personvernstruktur. Fyll inn behandlingsansvarlig, kontaktadresse, eventuelt personvernombud, leverandører, datakategorier, behandlingsgrunnlag, lagringstid, overføringer, cookieverktøy og appdata før publisering.",
    },
    keyPoints: [
      {
        title: "Åpenhet",
        description:
          "Brukere skal få klar informasjon om hvilke opplysninger som behandles og hvordan de kan utøve rettighetene sine.",
      },
      {
        title: "Formålsbegrensning",
        description:
          "Personopplysninger bør bare brukes til konkrete, forklarte formål som drift, kjøp, levering, support og sikkerhet.",
      },
      {
        title: "Leverandører og overføringer",
        description:
          "Betaling, frakt, hosting, analyse, e-post og appfunksjoner kan innebære tredjepartsleverandører som må beskrives korrekt.",
      },
    ],
    sections: [
      {
        title: "Behandlingsansvarlig og kontakt",
        body: [
          "Behandlingsansvarlig: [Sett inn juridisk selskapsnavn]. Organisasjonsnummer: [sett inn organisasjonsnummer]. Adresse: [sett inn adresse].",
          "Spørsmål om personvern kan sendes til privacy@neuvago.com eller annen kontaktadresse som selskapet bekrefter før launch.",
        ],
      },
      {
        title: "Personopplysninger vi kan behandle",
        body: [
          "Vi kan behandle opplysninger du oppgir selv, for eksempel navn, e-postadresse, leveringsadresse, fakturaadresse, telefonnummer, ordreopplysninger, supportmeldinger og nyhetsbrevpreferanser.",
          "Vi kan også behandle tekniske opplysninger som IP-adresse, enhetstype, nettleser, operativsystem, sider som besøkes, henvisningskilde, omtrentelig plassering basert på IP og cookie- eller analyseopplysninger.",
          "Dersom Neuvago-appen samler inn øktdata, enhetsdata, preferanser eller andre personrelaterte opplysninger, må disse datakategoriene beskrives eksplisitt her før app-lansering.",
        ],
      },
      {
        title: "Formål med behandlingen",
        body: [
          "Personopplysninger kan brukes til å drifte og forbedre nettstedet, behandle bestillinger, levere produkter, håndtere betaling, gi support, sende servicemeldinger, ivareta sikkerhet og oppfylle juridiske forpliktelser.",
          "Dersom du melder deg på nyhetsbrev eller samtykker til markedsføring, kan vi bruke kontaktopplysninger til å sende produktoppdateringer, innhold og nyheter. Du kan melde deg av markedsføring når som helst.",
        ],
      },
      {
        title: "Behandlingsgrunnlag",
        body: [
          "Avhengig av situasjonen kan behandlingen bygge på avtale, samtykke, rettslig forpliktelse eller berettiget interesse der dette er tillatt etter gjeldende personvernregler.",
          "Den endelige personvernerklæringen bør koble hver hovedkategori av behandling til riktig behandlingsgrunnlag.",
        ],
      },
      {
        title: "Deling med tredjeparter",
        body: [
          "Vi selger ikke personopplysninger. Opplysninger kan deles med betrodde leverandører der det er nødvendig for drift, betaling, frakt, hosting, analyse, sikkerhet, kommunikasjon eller support.",
          "Leverandører og databehandlere må dokumenteres og beskrives i tråd med faktisk oppsett før lansering.",
        ],
      },
      {
        title: "Informasjonskapsler og analyse",
        body: [
          "Nettstedet kan bruke informasjonskapsler og lignende teknologier for grunnleggende funksjonalitet, analyse, preferanser og eventuell markedsføring.",
          "Brukere bør kunne administrere valg gjennom nettleserinnstillinger og eventuelt et cookie-samtykkeverktøy dersom dette brukes.",
        ],
      },
      {
        title: "Lagring og sletting",
        body: [
          "Personopplysninger lagres bare så lenge det er nødvendig for formålene de ble samlet inn for, eller så lenge selskapet er pålagt å lagre dem etter lov, regnskap, sikkerhet eller tvisteløsning.",
          "Konkrete lagringsperioder bør fylles inn når selskapets faktiske prosesser er bekreftet.",
        ],
      },
      {
        title: "Dine rettigheter",
        body: [
          "Avhengig av gjeldende personvernregler kan du ha rett til innsyn, retting, sletting, begrensning, dataportabilitet, å protestere mot behandling og å trekke tilbake samtykke der behandlingen bygger på samtykke.",
          "Du kan også ha rett til å klage til relevant tilsynsmyndighet dersom du mener at personopplysninger behandles i strid med regelverket.",
        ],
      },
      {
        title: "Sikkerhet",
        body: [
          "Vi skal bruke rimelige tekniske og organisatoriske tiltak for å beskytte personopplysninger mot uautorisert tilgang, tap, misbruk, endring eller utlevering.",
          "Ingen metode for overføring eller lagring over internett er helt risikofri, og absolutt sikkerhet kan ikke garanteres.",
        ],
      },
      {
        title: "Endringer i personvernerklæringen",
        body: [
          "Denne personvernerklæringen kan oppdateres ved endringer i tjenester, leverandører, appfunksjoner, juridiske krav eller forretningspraksis.",
          "Effektiv dato: [Sett inn dato].",
        ],
      },
    ],
    relatedPages: legalRelated,
    finalCta: {
      eyebrow: "Neste steg",
      title: "Les vilkår eller gå tilbake til juridisk oversikt",
      description:
        "Personvern er én del av tillitslaget. Vilkår og tiltenkt bruk forklarer de praktiske og produktrelaterte rammene videre.",
      primaryCta: { label: "Les vilkår", href: no("/legal/terms-of-service") },
      secondaryCta: { label: "Juridisk oversikt", href: no("/legal") },
    },
  },

  terms: {
    metadata: metadata({
      title: "Vilkår | Neuvago Norge",
      description:
        "Les Neuvagos norske bruksvilkår for nettside, produktinformasjon, kjøp, betaling, levering, retur, ansvar og immaterielle rettigheter.",
      canonical: "/no/juridisk/vilkar",
      english: "/legal/terms-of-service",
    }),
    structuredDataTitle: "Vilkår | Neuvago Norge",
    structuredDataDescription:
      "Les Neuvagos norske bruksvilkår for nettside, produktinformasjon, kjøp, betaling, levering, retur, ansvar og immaterielle rettigheter.",
    path: "/no/juridisk/vilkar",
    breadcrumbs: [
      { name: "Forside", path: "/no" },
      { name: "Juridisk", path: "/no/juridisk" },
      { name: "Vilkår", path: "/no/juridisk/vilkar" },
    ],
    eyebrow: "Juridisk / Vilkår",
    title: "Vilkår for nettsted, produktinformasjon og kjøp.",
    description:
      "Disse vilkårene beskriver rammene for bruk av Neuvago-nettstedet, produktinformasjon, kjøp, betaling, levering, retur, immaterielle rettigheter og ansvarsgrenser.",
    secondaryDescription:
      "Vilkårene må tilpasses endelig selskapsstruktur, Shopify-oppsett, betalingsleverandør, frakt, returpolicy og forbrukerrettigheter før launch.",
    primaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
    secondaryCta: { label: "Tiltenkt bruk", href: no("/legal/intended-use") },
    trustCard: {
      eyebrow: "Praktiske rammer",
      title: "Klare forventninger rundt bruk, kjøp og ansvar",
      items: [
        { title: "Nettsted", description: "Hvordan nettstedet kan brukes og hvilke begrensninger som gjelder." },
        { title: "Kjøp", description: "Bestilling, betaling, levering, retur og refusjon må samsvare med faktisk butikkoppsett." },
        { title: "Ansvar", description: "Rimelige ansvarsgrenser, produktgrenser og brukeransvar bør beskrives tydelig." },
      ],
    },
    notice: {
      title: "Må juridisk kvalitetssikres",
      body:
        "Denne teksten er et lanseringsutkast. Forbrukerrettigheter, angrerett, garanti, reklamasjon, frakt, retur, jurisdiksjon og ansvarsbegrensninger må tilpasses faktisk salgsløsning og gjeldende lov før publisering.",
    },
    keyPoints: [
      {
        title: "Bruk av nettstedet",
        description:
          "Brukere skal bruke nettstedet lovlig og ikke forsøke å forstyrre, misbruke eller få uautorisert tilgang til systemer eller data.",
      },
      {
        title: "Produkt og kjøp",
        description:
          "Produktbeskrivelser, priser, tilgjengelighet, frakt, retur og betaling må samsvare med faktisk nettbutikk og lanseringsstatus.",
      },
      {
        title: "Ansvarsgrenser",
        description:
          "Vilkår bør forklare at Neuvago ikke gir medisinsk råd, og at produktet må brukes i tråd med instruksjoner og sikkerhetsinformasjon.",
      },
    ],
    sections: [
      {
        title: "Aksept av vilkårene",
        body: [
          "Disse vilkårene gjelder for tilgang til og bruk av Neuvago-nettstedet, produktinformasjon, kjøpsflyt og relaterte tjenester.",
          "Ved å bruke nettstedet eller kjøpe produkter fra Neuvago, godtar du vilkårene som gjelder for slik bruk og slike kjøp.",
        ],
      },
      {
        title: "Selskapsinformasjon",
        body: [
          "Selskap: [Sett inn juridisk selskapsnavn]. Organisasjonsnummer: [sett inn organisasjonsnummer]. Adresse: [sett inn adresse].",
          "Kontakt for vilkår og praktiske spørsmål: support@neuvago.com eller annen bekreftet kontaktadresse.",
        ],
      },
      {
        title: "Bruk av nettstedet",
        body: [
          "Du skal bruke nettstedet på en lovlig måte og ikke forsøke å få uautorisert tilgang, forstyrre drift, hente ut data automatisk uten tillatelse eller distribuere skadelig programvare.",
          "Vi kan begrense eller avslutte tilgang dersom nettstedet misbrukes eller vilkårene brytes.",
        ],
      },
      {
        title: "Produktinformasjon",
        body: [
          "Vi forsøker å holde produktbeskrivelser, bilder, spesifikasjoner, tilgjengelighet og priser oppdaterte, men feil kan forekomme.",
          "Produktets utseende, funksjoner og spesifikasjoner kan endres som del av videre produktutvikling.",
        ],
      },
      {
        title: "Velvære- og sikkerhetsramme",
        body: [
          "Neuvago er ikke ment å erstatte medisinsk vurdering, diagnose eller behandling.",
          "Brukere skal lese og følge instruksjoner, sikkerhetsinformasjon og tiltenkt bruk før produktet tas i bruk.",
        ],
      },
      {
        title: "Bestilling og betaling",
        body: [
          "Når du legger inn en bestilling, må du oppgi korrekt og fullstendig informasjon som er nødvendig for å behandle kjøpet.",
          "Betaling kan håndteres av tredjeparts betalingsleverandører. Ved å sende inn betalingsinformasjon godtar du at transaksjonen behandles gjennom relevant betalingsløsning.",
          "Vi kan avvise eller kansellere bestillinger ved mistanke om svindel, feilprising, lagerfeil eller andre rimelige grunner.",
        ],
      },
      {
        title: "Levering, retur og refusjon",
        body: [
          "Leveringstider er estimater og kan påvirkes av transportør, lagerstatus, toll, helligdager eller andre forhold utenfor vår kontroll.",
          "Retur, refusjon, angrerett, reklamasjon og eventuell garanti må beskrives i tråd med endelig norsk salgsoppsett og gjeldende forbrukerregler.",
        ],
      },
      {
        title: "Immaterielle rettigheter",
        body: [
          "Alt innhold på nettstedet, inkludert tekst, bilder, grafikk, logoer, produktdesign, layout og annet materiale, er beskyttet av immaterielle rettigheter.",
          "Du kan ikke kopiere, distribuere, endre eller lage avledede verk uten skriftlig tillatelse, med mindre dette er tillatt etter lov.",
        ],
      },
      {
        title: "Tredjepartslenker og tjenester",
        body: [
          "Nettstedet kan inneholde lenker til tredjeparts nettsteder, tjenester eller betalings- og fraktleverandører.",
          "Vi er ikke ansvarlige for innhold, vilkår eller personvernpraksis hos tredjepartsleverandører, med mindre annet følger av gjeldende lov.",
        ],
      },
      {
        title: "Ansvarsbegrensning",
        body: [
          "I den grad gjeldende lov tillater det, er Neuvago ikke ansvarlig for indirekte tap, følgeskader, driftsavbrudd, tap av data, tekniske feil eller skade som oppstår som følge av feil bruk av nettsted, app eller produkt.",
          "Ansvarsbegrensninger skal ikke begrense rettigheter som ikke kan fravikes etter gjeldende forbruker- eller produktansvarsregler.",
        ],
      },
      {
        title: "Endringer i vilkårene",
        body: [
          "Vi kan oppdatere vilkårene ved endringer i produkt, tjenester, nettbutikk, juridiske krav eller forretningspraksis.",
          "Effektiv dato: [Sett inn dato].",
        ],
      },
    ],
    relatedPages: legalRelated,
    finalCta: {
      eyebrow: "Neste steg",
      title: "Gå videre til personvern eller juridisk oversikt",
      description:
        "Vilkår bør leses sammen med personvern, tiltenkt bruk og øvrig juridisk informasjon for en komplett forståelse av Neuvago-rammene.",
      primaryCta: { label: "Personvern", href: no("/legal/privacy-policy") },
      secondaryCta: { label: "Juridisk oversikt", href: no("/legal") },
    },
  },
} satisfies Record<string, LegalTemplateContent>;
