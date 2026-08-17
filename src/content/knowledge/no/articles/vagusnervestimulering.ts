import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const vagusnervestimuleringArticle = {
  slug: "vagusnervestimulering",
  path: "/no/kunnskap/vagusnervestimulering",
  status: "published",
  wave: "1A",
  order: 20,

  title: "Vagusnervestimulering (VNS) – hva det er og hvilke typer som finnes",
  seoTitle: "Vagusnervestimulering (VNS): typer og metode | Neuvago",
  description:
    "Lær hva vagusnervestimulering er, forskjellen på implantert og ikke-invasiv VNS, og hvorfor metode, protokoll og tiltenkt bruk må vurderes hver for seg.",
  eyebrow: "Kunnskap om VNS",
  lead:
    "Vagusnervestimulering, ofte forkortet VNS, er en samlebetegnelse for metoder som bruker kontrollerte elektriske impulser med mål om å påvirke nervebaner knyttet til vagusnerven. Begrepet omfatter svært forskjellige systemer – fra kirurgisk implanterte medisinske enheter til eksterne metoder ved halsen eller øret – og sier derfor ikke alene noe sikkert om effekt, risiko eller tiltenkt bruk.",
  shortAnswer: [
    "VNS er en kategori av stimuleringsmetoder, ikke én bestemt enhet eller universell protokoll.",
    "Implantert VNS og ikke-invasiv VNS skiller seg i plassering, maskinvare, oppfølging, regulering og dokumentasjonsgrunnlag.",
    "tVNS og taVNS beskriver transkutane metoder gjennom huden; taVNS er den aurikulære, ørebaserte grenen.",
    "Forskning på én enhet, protokoll eller pasientgruppe kan ikke automatisk brukes som dokumentasjon for et annet produkt eller et annet formål.",
  ],
  hubSummary:
    "En grunnartikkel om hva VNS betyr, hovedtypene av stimulering og hvorfor metode, evidens og tiltenkt bruk må holdes adskilt.",
  hubLabel: "Kategoriartikkel",

  primaryKeyword: "vagusnervestimulering",
  secondaryKeywords: [
    "hva er vagusnervestimulering",
    "VNS",
    "vagus nerve stimulation",
    "vagusnervestimulator",
    "implantert VNS",
    "ikke-invasiv vagusnervestimulering",
    "transkutan vagusnervestimulering",
    "tVNS",
    "taVNS",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-17",
  modifiedAt: "2026-08-17",
  readingTimeMinutes: 13,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/vagus-nerve-stimulation",
  sitemapPriority: 0.9,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-vagusnervestimulering",
      eyebrow: "Grunnleggende definisjon",
      title: "Hva er vagusnervestimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnervestimulering betyr på et overordnet nivå at elektriske impulser brukes med mål om å påvirke nervebaner som er knyttet til vagusnerven. Impulsene leveres av en enhet, men den konkrete metoden kan variere betydelig: stimuleringen kan være implantert eller ekstern, ligge ved halsen eller øret, og bruke ulike elektroder, bølgeformer og innstillinger.",
        },
        {
          type: "paragraph",
          text: "Forkortelsen VNS brukes både om det historiske feltet med kirurgisk implanterte systemer og som en bred samlebetegnelse for nyere ikke-invasive metoder. Derfor må en tekst alltid forklare hvilken type VNS den faktisk omtaler.",
        },
        {
          type: "definition",
          term: "VNS",
          definition:
            "Forkortelse for vagus nerve stimulation, på norsk vagusnervestimulering. Begrepet beskriver en kategori og må presiseres med metode, plassering, protokoll og tiltenkt bruk.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Begrepet er bredere enn produktet",
          paragraphs: [
            "At en enhet omtales i forbindelse med VNS, betyr ikke at den tilsvarer implanterte systemer, andre eksterne enheter eller protokollene i en bestemt studie.",
          ],
        },
      ],
    },
    {
      id: "vns-er-en-kategori",
      eyebrow: "Flere metoder",
      title: "VNS er en kategori – ikke én universell behandling eller protokoll",
      blocks: [
        {
          type: "paragraph",
          text: "VNS-feltet har utviklet seg over tid og omfatter i dag både kliniske systemer og forskningsmetoder med ulike tekniske løsninger. Den viktigste første avklaringen er derfor ikke bare om noe kalles VNS, men hvordan stimuleringen leveres og i hvilken sammenheng den brukes.",
        },
        {
          type: "table",
          caption: "Forenklet oversikt over sentrale VNS-kategorier",
          columns: ["Kategori", "Plassering og maskinvare", "Typisk kontekst"],
          rows: [
            [
              "Implantert VNS",
              "Pulsgenerator og elektrode opereres inn, vanligvis med kontakt rundt vagusnerven ved halsen.",
              "Medisinsk behandling og oppfølging under kvalifisert helsepersonell.",
            ],
            [
              "Cervikal ikke-invasiv VNS",
              "Ekstern stimulering ved halsområdet uten implantert maskinvare.",
              "Kan være regulert medisinsk utstyr eller forskningsmetode, avhengig av produkt og påstander.",
            ],
            [
              "Transkutan aurikulær VNS (taVNS)",
              "Ekstern stimulering ved bestemte områder av det ytre øret.",
              "Forskningsmetode, klinisk utprøving eller produktkategori med varierende protokoller og tiltenkt bruk.",
            ],
            [
              "Velværeorientert VNS-produkt",
              "Ekstern enhet utformet for generell velværebruk innenfor produktets egne instruksjoner.",
              "Forbrukerrettet velvære; skal ikke låne medisinske indikasjoner fra andre enheter.",
            ],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Fire spørsmål som avklarer kategorien",
          paragraphs: [
            "Hvor plasseres stimuleringen? Er utstyret implantert eller eksternt? Hvilke innstillinger og øktlengder brukes? Hva er produktets eller studiens faktiske tiltenkte formål?",
          ],
        },
      ],
    },
    {
      id: "implantert-vns",
      eyebrow: "Klinisk bakgrunn",
      title: "Hva er implantert VNS?",
      blocks: [
        {
          type: "paragraph",
          text: "Ved implantert VNS plasseres en pulsgenerator kirurgisk i kroppen og kobles til en elektrode ved vagusnerven. Systemet programmeres og følges opp i en medisinsk sammenheng. Dette er den historiske kjernen i VNS-feltet og har et annet risiko-, dokumentasjons- og oppfølgingsnivå enn eksterne forbrukerprodukter.",
        },
        {
          type: "paragraph",
          text: "Implanterte systemer er regulert for konkrete medisinske bruksområder i bestemte jurisdiksjoner. Hvilke indikasjoner som gjelder, må kontrolleres mot oppdatert produktmerking og lokale myndigheter. Det er ikke riktig å overføre slike indikasjoner til en ekstern velværeenhet.",
        },
        {
          type: "bullets",
          items: [
            "Krever kirurgisk inngrep og implantert maskinvare.",
            "Programmeres og følges opp av helsepersonell.",
            "Har produktspesifikke indikasjoner, kontraindikasjoner og sikkerhetskrav.",
            "Kan ikke brukes som direkte sammenligningsgrunnlag for alle ikke-invasive produkter.",
          ],
        },
      ],
    },
    {
      id: "ikke-invasiv-vns",
      eyebrow: "Eksterne metoder",
      title: "Hva menes med ikke-invasiv vagusnervestimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "Ikke-invasiv VNS bruker ekstern kontakt og krever ikke at en pulsgenerator eller elektrode opereres inn. Det gjør brukeropplevelsen og risikobildet annerledes enn ved implantert VNS, men uttrykket «ikke-invasiv» forteller fortsatt ikke hvilken kroppsdel som stimuleres, hvilke parametere som brukes eller hva enheten er ment å gjøre.",
        },
        {
          type: "paragraph",
          text: "Eksterne metoder kan rettes mot halsområdet eller bestemte områder av øret. Noen enheter er regulert medisinsk utstyr for avgrensede indikasjoner, andre brukes i forskning, og andre igjen presenteres som generelle velværeprodukter. Klassifisering og tillatte påstander må vurderes for det konkrete produktet og markedet.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Ikke-invasiv betyr ikke automatisk velvære",
          paragraphs: [
            "En ikke-invasiv enhet kan være et medisinsk produkt, en forskningsenhet eller et velværeprodukt. Det avgjøres ikke bare av om stimuleringen skjer uten kirurgi, men av blant annet design, tiltenkt bruk, dokumentasjon, merking og regulatorisk status.",
          ],
        },
      ],
    },
    {
      id: "tvns-og-tavns",
      eyebrow: "Begreper du vil møte",
      title: "Hva er tVNS, taVNS og aurikulær VNS?",
      blocks: [
        {
          type: "paragraph",
          text: "tVNS står for transkutan vagusnervestimulering og beskriver stimulering gjennom huden. I forskningslitteraturen brukes begrepet om flere eksterne tilnærminger. Det er derfor viktig å se om studien eller produktet gjelder halsen, øret eller en annen plassering.",
        },
        {
          type: "paragraph",
          text: "taVNS står for transkutan aurikulær vagusnervestimulering. Aurikulær betyr at metoden er knyttet til øret. taVNS er dermed den ørebaserte grenen av det bredere tVNS-feltet, men heller ikke taVNS er én standardisert protokoll.",
        },
        {
          type: "definition",
          term: "Transkutan",
          definition:
            "Gjennom huden. I VNS-sammenheng betyr det at stimuleringen leveres med ekstern kontakt i stedet for en implantert elektrode.",
        },
        {
          type: "bullets",
          items: [
            "tVNS: overordnet betegnelse for transkutan VNS gjennom huden.",
            "taVNS: transkutan aurikulær VNS ved øret.",
            "Aurikulær VNS: vanlig språk for ørebasert VNS; kan brukes noe bredere enn den presise forskningsforkortelsen.",
            "Cervikal nVNS: ekstern stimulering ved halsområdet og ikke det samme som aurikulær taVNS.",
          ],
        },
      ],
    },
    {
      id: "hvordan-leveres-stimuleringen",
      eyebrow: "Tekniske detaljer",
      title: "Hvordan leveres elektrisk stimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "En stimuleringsøkt består av elektriske pulser som beskrives med flere parametere. Blant de vanligste er frekvens, pulsvidde, intensitet, bølgeform, arbeidssyklus og øktlengde. Elektrodenes utforming, kontaktflate og plassering er også en del av protokollen.",
        },
        {
          type: "paragraph",
          text: "Disse detaljene påvirker både hva deltakeren kjenner og hvordan resultatene skal tolkes. To studier som begge kalles tVNS kan i praksis ha brukt ulike plasseringer, innstillinger, kontrollbetingelser og total stimuleringsdose.",
        },
        {
          type: "bullets",
          items: [
            "Frekvens: hvor ofte pulsene leveres.",
            "Pulsvidde: hvor lenge hver puls varer.",
            "Intensitet: styrken på stimuleringen, ofte justert ut fra protokoll og toleranse.",
            "Arbeidssyklus: hvordan perioder med stimulering og pause fordeles.",
            "Øktlengde og total eksponering: hvor lenge og hvor ofte stimuleringen gis.",
            "Plassering og kontrollbetingelse: hvor aktiv og eventuell sham-stimulering legges.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Parametere er ikke en fotnote",
          paragraphs: [
            "Konsensusarbeid i tVNS-feltet fremhever at enhetsdetaljer, plassering og stimuleringsparametere må rapporteres tydelig for at studier skal kunne sammenlignes og gjentas.",
          ],
        },
      ],
    },
    {
      id: "hvordan-tolke-forskning",
      eyebrow: "Evidens og overførbarhet",
      title: "Hvorfor kan ikke alle VNS-studier brukes om alle produkter?",
      blocks: [
        {
          type: "paragraph",
          text: "Et forskningsresultat gjelder først og fremst metoden, enheten, protokollen, deltakergruppen og utfallsmålet som faktisk ble undersøkt. Når disse forholdene endres, kan også relevansen endres. En studie av implantert VNS hos en klinisk pasientgruppe dokumenterer ikke automatisk en ørebasert velværerutine.",
        },
        {
          type: "numbered",
          items: [
            "Identifiser hvilken VNS-type og hvilken konkret enhet som ble brukt.",
            "Kontroller plassering, elektrode, frekvens, pulsvidde, intensitet, øktlengde og behandlingsperiode.",
            "Se om studien hadde sham- eller kontrollgruppe, og hvordan kontrollen var utformet.",
            "Skill mellom fysiologiske mål, mekanismefunn, selvrapporterte symptomer og kliniske endepunkter.",
            "Vurder om deltakergruppen og formålet samsvarer med påstanden som skal underbygges.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Forskningsfelt er ikke produktdokumentasjon",
          paragraphs: [
            "Generell VNS-forskning kan forklare kategorien og mulige mekanismer. Direkte påstander om et produkt må bygge på dokumentasjon som faktisk er relevant for produktets design, protokoll, målgruppe og tiltenkte bruk.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-og-regulering",
      eyebrow: "Ansvarlig vurdering",
      title: "Hva bør man vite om sikkerhet og regulatorisk status?",
      blocks: [
        {
          type: "paragraph",
          text: "Sikkerhet må vurderes ut fra den konkrete enheten og bruken. Implantert VNS innebærer kirurgiske og enhetsspesifikke risikoer. Ved transkutan stimulering er hudkontakt, lokal følelse, ubehag, hodepine, svimmelhet og korrekt plassering blant forholdene som kan være relevante, men rapporteringen varierer mellom studier.",
        },
        {
          type: "paragraph",
          text: "Et produkt skal brukes i samsvar med gjeldende instruksjoner, kontraindikasjoner og stoppkriterier. Personer med implantert elektronisk utstyr, relevante medisinske tilstander, graviditet eller usikkerhet om egnethet bør følge produktets sikkerhetsinformasjon og innhente råd fra kvalifisert helsepersonell.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Regulatorisk status er produkt- og markedsavhengig",
          paragraphs: [
            "At én VNS-enhet er godkjent eller registrert for en bestemt medisinsk indikasjon i ett land, betyr ikke at andre enheter har samme status eller kan bruke de samme påstandene.",
            "Kontroller alltid det konkrete produktets tiltenkte bruk, merking og sikkerhetsinformasjon i det aktuelle markedet.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige produktgrenser",
      title: "Hvordan passer Neuvago inn i VNS-kategorien?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago presenteres som et ikke-invasivt velværeprodukt med en separat app for veiledede rutiner. Produktet skal forstås ut fra sine egne spesifikasjoner, instruksjoner, sikkerhetsopplysninger og tiltenkte bruk – ikke ut fra indikasjoner eller resultater som tilhører andre VNS-systemer.",
        },
        {
          type: "paragraph",
          text: "Kunnskapsbasens oppgave er å forklare hvordan VNS-feltet er bygget opp, slik at leseren kan skille mellom anatomi, metode, forskning, medisinsk bruk og velværeprodukter. Det gir et mer presist grunnlag for å forstå Neuvago uten å gjøre generelle forskningsfunn om til produktløfter.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Hva denne artikkelen ikke dokumenterer",
          paragraphs: [
            "Artikkelen dokumenterer ikke at Neuvago har samme virkning som implanterte systemer, regulerte medisinske nVNS-enheter eller en forskningsprotokoll omtalt i litteraturen.",
            "Produktpåstander må vurderes separat mot Neuvagos direkte dokumentasjon og endelige regulatoriske ramme.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Viktig om helse og sikkerhet",
          paragraphs: [
            "Innholdet er generell informasjon og erstatter ikke medisinsk vurdering, diagnose eller behandling. Følg alltid den gjeldende produktdokumentasjonen og søk kvalifisert råd ved medisinske spørsmål eller usikkerhet om bruk.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "yuan-silberstein-2016-part-ii",
      authors: "Yuan H, Silberstein SD",
      title:
        "Vagus Nerve and Vagus Nerve Stimulation, a Comprehensive Review: Part II",
      publication: "Headache",
      year: 2016,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/26381725/",
      doi: "10.1111/head.12650",
      pmid: "26381725",
      note:
        "Oversikt over utviklingen av VNS, implanterte systemer og nyere stimuleringsenheter.",
    },
    {
      id: "yap-2020-critical-review",
      authors: "Yap JYY, Keatch C, Lambert E, Woods W, Stoddart PR, Kameneva T",
      title:
        "Critical Review of Transcutaneous Vagus Nerve Stimulation: Challenges for Translation to Clinical Practice",
      publication: "Frontiers in Neuroscience",
      year: 2020,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/32410932/",
      doi: "10.3389/fnins.2020.00284",
      pmid: "32410932",
      note:
        "Metodekritisk oversikt over tVNS, stimuleringssteder, parametere, enheter og begrenset standardisering.",
    },
    {
      id: "farmer-2021-reporting-standards",
      authors: "Farmer AD et al.",
      title:
        "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
      publication: "Frontiers in Human Neuroscience",
      year: 2021,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
      doi: "10.3389/fnhum.2020.568051",
      pmid: "33854421",
      note:
        "Internasjonale anbefalinger for rapportering av tekniske detaljer, protokoller og sikkerhet i tVNS-forskning.",
    },
    {
      id: "fda-implanted-vns-listing",
      authors: "U.S. Food and Drug Administration",
      title: "Vagus Nerve Stimulator (VNS) System – implanted for epilepsy",
      publication: "FDA Establishment Registration & Device Listing",
      year: 2026,
      type: "official-guidance",
      url: "https://www.accessdata.fda.gov/SCRIPTS/cdrh/cfdocs/cfRL/rl.cfm?lid=859346&lpcd=LYJ",
      note:
        "Offisiell amerikansk enhetsoppføring som illustrerer den regulerte kategorien for implantert VNS. Lokal indikasjon og produktmerking må alltid kontrolleres separat.",
    },
    {
      id: "fda-non-invasive-vns-listing",
      authors: "U.S. Food and Drug Administration",
      title: "gammaCore-S – Non-Invasive Vagus Nerve Stimulator",
      publication: "Devices@FDA",
      year: 2018,
      type: "official-guidance",
      url: "https://www.accessdata.fda.gov/SCRIPTS/cdrh/devicesatfda/index.cfm?db=pmn&id=K173442",
      note:
        "Offisiell amerikansk enhetsoppføring som viser at også ikke-invasiv VNS kan være regulert medisinsk utstyr for produktspesifikke indikasjoner.",
    },
  ],

  relatedSlugs: ["vagusnerven", "ikke-invasiv-vagusnervestimulering"],
  relatedLinks: [
    {
      title: "Forskning og kunnskapsgrunnlag",
      description:
        "Gå videre til den norske forskningshuben for metode, sikkerhet, tolerabilitet og tydelige tolkningsgrenser.",
      href: "/no/forskning",
      label: "Utforsk forskning",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan Neuvago-systemet er bygget opp i praksis, adskilt fra den generelle VNS-kategorien.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
    {
      title: "Neuvago-produktet",
      description:
        "Les den aktuelle produktinformasjonen, tiltenkt bruk, sikkerhetsrammen og kjøpsstatus.",
      href: "/no/produkt",
      label: "Utforsk produktet",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
