import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const ikkeInvasivVagusnervestimuleringArticle = {
  slug: "ikke-invasiv-vagusnervestimulering",
  path: "/no/kunnskap/ikke-invasiv-vagusnervestimulering",
  status: "published",
  wave: "1A",
  order: 30,

  title:
    "Ikke-invasiv vagusnervestimulering – metode, typer og viktige forskjeller",
  seoTitle: "Ikke-invasiv vagusnervestimulering (nVNS) | Neuvago",
  description:
    "Lær hva ikke-invasiv vagusnervestimulering er, hvordan nVNS, tVNS og taVNS henger sammen, og hvorfor plassering, protokoll, sikkerhet og tiltenkt bruk må vurderes separat.",
  eyebrow: "Kunnskap om ikke-invasiv VNS",
  lead:
    "Ikke-invasiv vagusnervestimulering er en samlebetegnelse for eksterne stimuleringsmetoder som ikke krever kirurgisk implantert utstyr. Kategorien omfatter blant annet halsbaserte og ørebaserte tilnærminger, men enhetene, protokollene, forskningsgrunnlaget og den regulatoriske statusen kan være svært forskjellige. Derfor er «ikke-invasiv» et utgangspunkt for forståelse – ikke en garanti for at alle metoder er like.",
  shortAnswer: [
    "Ikke-invasiv VNS leverer stimulering uten kirurgisk implantert pulsgenerator eller elektrode.",
    "nVNS kan omfatte halsbaserte, transkutane og aurikulære metoder; tVNS og taVNS er mer spesifikke begreper innen den brede kategorien.",
    "Plassering, elektrode, frekvens, pulsvidde, intensitet, øktlengde og målgruppe påvirker hvordan forskning og sikkerhet skal tolkes.",
    "Dokumentasjon for én bestemt enhet eller protokoll kan ikke automatisk overføres til et annet produkt eller et annet formål.",
  ],
  hubSummary:
    "En grunnartikkel om hva ikke-invasiv VNS betyr, hovedtypene av ekstern stimulering og hvilke detaljer som må vurderes før metoder og produkter sammenlignes.",
  hubLabel: "Metodeartikkel",

  primaryKeyword: "ikke-invasiv vagusnervestimulering",
  secondaryKeywords: [
    "ikke invasiv vagusnervestimulering",
    "nVNS",
    "non-invasive vagus nerve stimulation",
    "ikke-invasiv vagusnervestimulator",
    "ekstern vagusnervestimulering",
    "transkutan vagusnervestimulering",
    "tVNS",
    "taVNS",
    "aurikulær vagusnervestimulering",
    "halsbasert vagusnervestimulering",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-17",
  modifiedAt: "2026-08-17",
  readingTimeMinutes: 14,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/non-invasive-vagus-nerve-stimulation",
  sitemapPriority: 0.9,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-ikke-invasiv-vagusnervestimulering",
      eyebrow: "Grunnleggende definisjon",
      title: "Hva er ikke-invasiv vagusnervestimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "Ikke-invasiv vagusnervestimulering beskriver eksterne metoder som leverer elektrisk stimulering uten at en pulsgenerator eller elektrode opereres inn i kroppen. Stimuleringen gis gjennom kontakt med huden, for eksempel ved halsen eller bestemte områder av det ytre øret.",
        },
        {
          type: "paragraph",
          text: "Begrepet brukes både i forskning, kliniske sammenhenger og forbrukermarkedet. Det er derfor viktig å undersøke hvilken konkret enhet, plassering, protokoll, målgruppe og tiltenkt bruk en tekst viser til. To produkter kan begge omtales som ikke-invasive, men likevel være teknisk og regulatorisk svært forskjellige.",
        },
        {
          type: "definition",
          term: "nVNS",
          definition:
            "En vanlig forkortelse for non-invasive vagus nerve stimulation, på norsk ikke-invasiv vagusnervestimulering. Forkortelsen beskriver en bred kategori og må presiseres med stimuleringssted, enhet og protokoll.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort sagt",
          paragraphs: [
            "Ikke-invasiv betyr at metoden ikke krever et kirurgisk implantat. Det betyr ikke at alle eksterne VNS-metoder har samme virkemåte, evidens, risiko eller regulatoriske status.",
          ],
        },
      ],
    },
    {
      id: "hva-ikke-invasiv-betyr",
      eyebrow: "Et viktig skille",
      title: "Hva «ikke-invasiv» betyr – og hva ordet ikke forteller",
      blocks: [
        {
          type: "paragraph",
          text: "Ordet ikke-invasiv beskriver først og fremst hvordan stimuleringen leveres: uten kirurgi og uten permanent implantert maskinvare. Det gir nyttig informasjon om inngrepsnivået, men sier lite alene om målområdet, styrken, bølgeformen eller formålet med bruken.",
        },
        {
          type: "bullets",
          items: [
            "Det forteller ikke om stimuleringen gis ved halsen eller øret.",
            "Det forteller ikke hvilke elektriske parametere eller øktlengder som brukes.",
            "Det forteller ikke om enheten er medisinsk utstyr, forskningsutstyr eller et velværeprodukt.",
            "Det forteller ikke om dokumentasjonen gjelder det konkrete produktet.",
            "Det betyr ikke automatisk at metoden passer for alle brukere eller situasjoner.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Kategoriord er ikke produktdokumentasjon",
          paragraphs: [
            "At et produkt tilhører den brede nVNS-kategorien, er ikke i seg selv dokumentasjon for en bestemt fysiologisk eller klinisk effekt.",
          ],
        },
      ],
    },
    {
      id: "hovedtyper-ikke-invasiv-vns",
      eyebrow: "Metodefamilien",
      title: "Hvilke hovedtyper av ikke-invasiv VNS finnes?",
      blocks: [
        {
          type: "paragraph",
          text: "Terminologien varierer mellom studier, myndighetsdokumenter og produktsider. En nyttig inndeling er å skille mellom hvor stimuleringen gis og hvordan metoden beskrives.",
        },
        {
          type: "table",
          caption: "Vanlige begreper i den ikke-invasive VNS-kategorien",
          columns: ["Begrep", "Vanlig betydning", "Viktig presisering"],
          rows: [
            [
              "nVNS",
              "Bred samlebetegnelse for ikke-invasiv VNS",
              "Kan dekke ulike kroppssteder, enheter og formål",
            ],
            [
              "Cervikal nVNS",
              "Ekstern stimulering ved halsregionen",
              "Skal ikke behandles som identisk med ørebasert stimulering",
            ],
            [
              "tVNS",
              "Transkutan stimulering gjennom huden",
              "Brukes som metodebegrep og kan omfatte ulike plasseringer",
            ],
            [
              "taVNS",
              "Transkutan aurikulær VNS ved det ytre øret",
              "Plassering i øret og kontrollbetingelser varierer mellom studier",
            ],
            [
              "Aurikulær VNS",
              "Ørebasert vagusnervestimulering",
              "Brukes ofte nær taVNS, men konkrete protokoller må beskrives",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Begrepene overlapper, men de er ikke fullstendig utskiftbare. En faglig god side bør alltid gå videre fra forkortelsen og beskrive den faktiske metoden.",
        },
      ],
    },
    {
      id: "implantert-og-ikke-invasiv-vns",
      eyebrow: "Ulike rammer",
      title: "Hvordan skiller ikke-invasiv VNS seg fra implantert VNS?",
      blocks: [
        {
          type: "paragraph",
          text: "Implantert VNS er utviklet som en medisinsk teknologi der en pulsgenerator opereres inn og kobles til vagusnerven. Ikke-invasive metoder leverer derimot stimulering uten permanent kirurgisk utstyr. Dette påvirker både brukeropplevelse, oppfølging, eksponering og risikoramme.",
        },
        {
          type: "table",
          caption: "Overordnede forskjeller mellom implantert og ikke-invasiv VNS",
          columns: ["Tema", "Implantert VNS", "Ikke-invasiv VNS"],
          rows: [
            ["Maskinvare", "Kirurgisk implantert system", "Ekstern enhet og hudkontakt"],
            ["Oppfølging", "Klinisk behandling og programmering", "Varierer etter produkt og tiltenkt bruk"],
            ["Eksponering", "Kan levere programmert stimulering over tid", "Vanligvis avgrensede eksterne økter"],
            ["Regulering", "Produktspesifikke medisinske indikasjoner", "Kan være medisinsk utstyr eller velværeprodukt"],
            ["Evidens", "Knyttet til konkrete systemer og indikasjoner", "Må vurderes per enhet, metode og protokoll"],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Resultater kan ikke lånes på tvers",
          paragraphs: [
            "Dokumentasjon for implantert VNS kan gi viktig historisk og biologisk kontekst, men kan ikke automatisk brukes som dokumentasjon for en ekstern forbrukerenhet.",
          ],
        },
      ],
    },
    {
      id: "hvordan-stimuleringen-leveres",
      eyebrow: "Teknisk grunnlag",
      title: "Hvordan leveres stimuleringen fra en ekstern enhet?",
      blocks: [
        {
          type: "paragraph",
          text: "En ikke-invasiv enhet bruker elektrodekontakt mot huden for å levere kontrollerte elektriske pulser. Kontaktflaten, hudmotstanden og den konkrete plasseringen påvirker hvordan stimuleringen oppleves og leveres.",
        },
        {
          type: "numbered",
          items: [
            "Enheten genererer et definert elektrisk signal.",
            "Elektroden eller kontaktflaten plasseres på produktets angitte område.",
            "Intensiteten justeres innenfor produktets veiledning og brukerens komfortnivå.",
            "Stimuleringen gjennomføres i en avgrenset økt eller protokoll.",
            "Enheten rengjøres og oppbevares i tråd med bruksanvisningen.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Følg produktets egen veiledning",
          paragraphs: [
            "Plassering, kontaktmiddel, intensitet og øktlengde skal ikke improviseres ut fra en protokoll hentet fra en annen enhet eller forskningsstudie.",
          ],
        },
      ],
    },
    {
      id: "stimuleringsparametere",
      eyebrow: "Protokollen betyr noe",
      title: "Hvilke stimuleringsparametere påvirker metoden?",
      blocks: [
        {
          type: "paragraph",
          text: "Elektrisk stimulering beskrives gjennom flere parametere. Forskningslitteraturen viser betydelig variasjon, og internasjonale rapporteringsanbefalinger understreker at detaljene må oppgis for at studier skal kunne tolkes og sammenlignes.",
        },
        {
          type: "bullets",
          items: [
            "Stimuleringssted og side av kroppen",
            "Elektrodetype, størrelse og kontaktflate",
            "Frekvens – hvor ofte pulsene gjentas",
            "Pulsvidde – hvor lenge hver puls varer",
            "Intensitet og hvordan den fastsettes",
            "Bølgeform og polaritet",
            "Duty cycle – forholdet mellom stimulering og pause",
            "Øktlengde, antall økter og samlet eksponering",
            "Kontroll- eller sham-betingelse i forskning",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Samme forkortelse kan skjule ulike protokoller",
          paragraphs: [
            "To studier kan begge bruke betegnelsen tVNS, men levere stimulering på ulike steder, med ulike innstillinger og til ulike grupper. Resultatene bør derfor ikke slås sammen uten metodekritikk.",
          ],
        },
      ],
    },
    {
      id: "hva-forskningen-kan-overfores",
      eyebrow: "Ansvarlig tolkning",
      title: "Hva kan forskning på én nVNS-metode fortelle om en annen?",
      blocks: [
        {
          type: "paragraph",
          text: "Forskning på ikke-invasiv VNS omfatter ulike enheter, målområder, sham-oppsett, studiedeltakere og utfallsmål. Et funn kan være relevant for å forstå feltet, men den direkte overførbarheten til et annet produkt avhenger av hvor like metodene faktisk er.",
        },
        {
          type: "numbered",
          items: [
            "Kontroller hvilken enhet og elektrode som ble brukt.",
            "Kontroller hvor stimuleringen ble plassert.",
            "Sammenlign frekvens, pulsvidde, intensitet og øktlengde.",
            "Se hvilken befolkning og hvilken problemstilling studien undersøkte.",
            "Vurder kontrollbetingelsen og om blindingen var troverdig.",
            "Skill mellom et fysiologisk mål, et spørreskjema og et klinisk utfall.",
            "Undersøk om studien faktisk gjelder det produktet som omtales.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Feltrelevans er ikke det samme som produktbevis",
          paragraphs: [
            "Neuvago kan bruke nVNS-forskning til å forklare kategori, metode og tolkningsgrenser. Direkte produktpåstander krever dokumentasjon som faktisk gjelder Neuvago og den aktuelle tiltenkte bruken.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-og-tolerabilitet",
      eyebrow: "Brukeropplevelse og risiko",
      title: "Hva vet vi om sikkerhet og tolerabilitet?",
      blocks: [
        {
          type: "paragraph",
          text: "Systematiske gjennomganger av aurikulær tVNS beskriver metoden som generelt godt tolerert i studerte grupper, med hyppigst rapporterte hendelser som lokalt ubehag eller øresmerte, hodepine og prikking. Samtidig har mange studier rapportert bivirkninger ufullstendig, noe som gjør standardisert sikkerhetsregistrering viktig.",
        },
        {
          type: "bullets",
          items: [
            "Ubehag, smerte eller hudirritasjon ved kontaktstedet",
            "Prikking eller annen lokal sanseopplevelse",
            "Hodepine",
            "Svimmelhet eller kvalme kan forekomme i enkelte sammenhenger",
            "Mangelfull eller inkonsekvent bivirkningsrapportering begrenser sikkerhetsestimatene",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Ikke-invasiv betyr ikke risikofri",
          paragraphs: [
            "Bruk bare produktet slik det er tiltenkt, stopp ved smerte eller tydelig ubehag, og følg produktets kontraindikasjoner og sikkerhetsinformasjon.",
            "Personer med implantert elektronisk utstyr, relevante hjerterytmeproblemer, medisinske tilstander, graviditetsrelaterte spørsmål eller aktiv behandling bør innhente kvalifisert medisinsk råd før bruk.",
          ],
        },
      ],
    },
    {
      id: "hvordan-vurdere-en-enhet",
      eyebrow: "Bedre spørsmål før valg",
      title: "Hvordan kan en ikke-invasiv VNS-enhet vurderes?",
      blocks: [
        {
          type: "paragraph",
          text: "En troverdig vurdering bør gå lenger enn om produktet bruker bokstavene VNS. Det viktigste er om produsenten forklarer teknologien, bruken, grensene og dokumentasjonen på en kontrollerbar måte.",
        },
        {
          type: "table",
          caption: "Praktisk vurderingsramme",
          columns: ["Spørsmål", "Hvorfor det er viktig"],
          rows: [
            ["Hvor gis stimuleringen?", "Plasseringen påvirker metode og overførbar forskning"],
            ["Hvilken type elektrode brukes?", "Kontakt og komfort påvirker leveringen"],
            ["Kan intensiteten justeres?", "Brukeren trenger kontroll innenfor sikker veiledning"],
            ["Er økten tydelig guidet?", "Reduserer gjetning og ustrukturert bruk"],
            ["Hva er produktets tiltenkte bruk?", "Avgrenser hva produsenten faktisk hevder"],
            ["Hvilken dokumentasjon gjelder selve produktet?", "Skiller feltforskning fra produktbevis"],
            ["Er sikkerhetsinformasjonen synlig?", "Bivirkninger og forsiktighetsregler skal være lett tilgjengelige"],
            ["Er regulatorisk status forklart?", "Ikke-invasive produkter kan ha ulike juridiske rammer"],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Transparens er et kvalitetstegn",
          paragraphs: [
            "En god produktside forklarer både hva enheten er laget for og hva den ikke er laget for. Tydelige grenser styrker tilliten.",
          ],
        },
      ],
    },
    {
      id: "regulatorisk-status-og-tiltenkt-bruk",
      eyebrow: "Produktspesifikke rammer",
      title: "Hvorfor regulatorisk status og tiltenkt bruk må vurderes separat",
      blocks: [
        {
          type: "paragraph",
          text: "Ikke-invasiv VNS er ikke én regulatorisk kategori. Enkelte eksterne enheter er godkjent eller klarert som medisinsk utstyr for produktspesifikke indikasjoner, mens andre produkter markedsføres innen generell velvære. Den juridiske statusen følger det konkrete produktet, markedet, dokumentasjonen og påstandene – ikke bare stimuleringsmetoden.",
        },
        {
          type: "bullets",
          items: [
            "Kontroller hvem som er produsent og hvem som er ansvarlig markedsaktør.",
            "Les den uttrykkelige tiltenkte bruken og eventuelle kontraindikasjoner.",
            "Skill mellom sertifikater, testdokumentasjon og dokumentasjon for effekt.",
            "Ikke anta at en medisinsk indikasjon for ett produkt gjelder en annen enhet.",
            "Kontroller markeds- og landsspesifikk informasjon før kjøp eller bruk.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Teknologien alene avgjør ikke produktets status",
          paragraphs: [
            "To enheter kan begge levere ekstern elektrisk stimulering, men ha forskjellig tiltenkt bruk, dokumentasjon, merking og regulatorisk klassifisering.",
          ],
        },
      ],
    },
    {
      id: "neuvago-og-ikke-invasiv-vns",
      eyebrow: "Neuvago-kontekst",
      title: "Hvordan passer Neuvago inn i den ikke-invasive VNS-kategorien?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er utviklet som en ekstern, ørebasert enhet og app for generell velvære. Produktet krever ikke kirurgisk implantat, og bruken er bygget rundt korte, guidede rutiner med justerbar intensitet og tydelige grenser for tiltenkt bruk.",
        },
        {
          type: "paragraph",
          text: "Kunnskap om nVNS gir en viktig kategori- og metodekontekst, men skal ikke brukes som en snarvei til produktpåstander. Neuvagos direkte dokumentasjon må vurderes separat fra forskning på andre enheter, andre protokoller og medisinske indikasjoner.",
        },
        {
          type: "bullets",
          items: [
            "Ekstern og ikke-invasiv enhet",
            "Ørebasert kontakt fremfor halsbasert eller implantert stimulering",
            "Justerbar intensitet og produktspesifikk bruksveiledning",
            "Appen fungerer som et separat veilednings- og rutineverktøy",
            "Generell velvære – ikke diagnose, behandling eller erstatning for helsehjelp",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Dette er kategoriinformasjon",
          paragraphs: [
            "Artikkelen forklarer ikke-invasiv VNS som felt. Den dokumenterer ikke i seg selv en bestemt effekt av Neuvago.",
          ],
        },
      ],
    },
  ],

  sources: [
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
        "Metodekritisk oversikt over transkutan VNS, stimuleringssteder, parametere og utfordringer ved overføring mellom forskning og klinisk bruk.",
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
        "Internasjonale anbefalinger for rapportering av enhet, plassering, parametere, kontrollbetingelser og sikkerhet i tVNS-forskning.",
    },
    {
      id: "kim-2022-tavns-safety",
      authors: "Kim AY et al.",
      title:
        "Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis",
      publication: "Scientific Reports",
      year: 2022,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
      doi: "10.1038/s41598-022-25864-1",
      pmid: "36543841",
      note:
        "Systematisk sikkerhetsanalyse av 177 taVNS-studier og 6322 deltakere, med vekt på rapporterte bivirkninger og mangelfull standardisering.",
    },
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
        "Oversikt over utviklingen av VNS, implanterte systemer og nyere ikke-invasive stimuleringsenheter.",
    },
    {
      id: "fda-gammacore-k173442",
      authors: "U.S. Food and Drug Administration",
      title: "gammaCore-S – Non-Invasive Vagus Nerve Stimulator",
      publication: "Devices@FDA",
      year: 2018,
      type: "official-guidance",
      url: "https://www.accessdata.fda.gov/SCRIPTS/cdrh/devicesatfda/index.cfm?db=pmn&id=K173442",
      note:
        "Offisiell amerikansk enhetsoppføring som illustrerer at en ikke-invasiv VNS-enhet kan være regulert medisinsk utstyr for produktspesifikke indikasjoner.",
    },
  ],

  relatedSlugs: ["vagusnervestimulering", "vagusnerven"],
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
        "Se hvordan den eksterne enheten, den separate appen og den praktiske rutinen er bygget opp.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan Neuvago fungerer",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Les den norske forklaringen av velværerammen, produktets grenser og hva Neuvago ikke er ment å erstatte.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
