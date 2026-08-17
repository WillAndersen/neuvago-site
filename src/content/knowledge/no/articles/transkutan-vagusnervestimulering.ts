import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const transkutanVagusnervestimuleringArticle = {
  slug: "transkutan-vagusnervestimulering",
  path: "/no/kunnskap/transkutan-vagusnervestimulering",
  status: "published",
  wave: "1A",
  order: 40,

  title:
    "Transkutan vagusnervestimulering (tVNS) – metode, plassering og protokoller",
  seoTitle: "Transkutan vagusnervestimulering (tVNS) | Neuvago",
  description:
    "Lær hva transkutan vagusnervestimulering er, hvordan tVNS leveres gjennom huden, og hvorfor plassering, elektrode, parametere, kontrollbetingelser og sikkerhet må vurderes separat.",
  eyebrow: "Kunnskap om transkutan VNS",
  lead:
    "Transkutan vagusnervestimulering, ofte forkortet tVNS, er en samlebetegnelse for eksterne metoder som leverer elektrisk stimulering gjennom huden i stedet for via et kirurgisk implantat. Begrepet kan omfatte både ørebaserte og halsbaserte tilnærminger. Derfor må en tVNS-metode alltid beskrives med stimuleringssted, elektrode, innstillinger, øktlengde, målgruppe og tiltenkt bruk.",
  shortAnswer: [
    "Transkutan betyr at stimuleringen leveres gjennom huden med en ekstern elektrode eller kontaktflate.",
    "tVNS er en metodefamilie, ikke én standardisert protokoll eller ett bestemt produkt.",
    "taVNS er den aurikulære, ørebaserte delen av tVNS, mens transkutan cervikal VNS brukes om halsbaserte tilnærminger.",
    "Plassering, frekvens, pulsvidde, intensitet, bølgeform, øktlengde og kontrollbetingelser påvirker hvordan forskning skal tolkes.",
  ],
  hubSummary:
    "En metodeartikkel om tVNS, stimulering gjennom huden, forskjellen mellom aurikulær og cervikal plassering og hvorfor protokolldetaljer er avgjørende for tolkning.",
  hubLabel: "Metodeartikkel",

  primaryKeyword: "transkutan vagusnervestimulering",
  secondaryKeywords: [
    "tVNS",
    "transkutan VNS",
    "transcutaneous vagus nerve stimulation",
    "transkutan aurikulær vagusnervestimulering",
    "taVNS",
    "transkutan cervikal vagusnervestimulering",
    "ikke-invasiv vagusnervestimulering",
    "elektrisk stimulering gjennom huden",
    "vagusnervestimulering øre",
    "vagusnervestimulering hals",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-17",
  modifiedAt: "2026-08-17",
  readingTimeMinutes: 15,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/transcutaneous-vagus-nerve-stimulation",
  sitemapPriority: 0.88,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-transkutan-vagusnervestimulering",
      eyebrow: "Grunnleggende definisjon",
      title: "Hva er transkutan vagusnervestimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "Transkutan vagusnervestimulering beskriver elektrisk stimulering som leveres gjennom huden med eksterne elektroder eller kontaktflater. Metoden skiller seg dermed fra implantert VNS, der en pulsgenerator og elektrode opereres inn i kroppen.",
        },
        {
          type: "paragraph",
          text: "tVNS brukes som et overordnet metodebegrep. I litteraturen kan det vise til stimulering ved det ytre øret, ved halsen eller til mer spesifikke protokoller. Forkortelsen alene forteller derfor ikke nøyaktig hva som er gjort.",
        },
        {
          type: "definition",
          term: "Transkutan",
          definition:
            "Gjennom huden. I tVNS betyr det at elektriske pulser leveres fra en ekstern enhet via hudkontakt, uten kirurgisk implantert elektrode.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort sagt",
          paragraphs: [
            "tVNS er en familie av eksterne stimuleringsmetoder. For å forstå en studie eller enhet må du vite hvor, hvordan og hvorfor stimuleringen ble gitt.",
          ],
        },
      ],
    },
    {
      id: "tvns-nvns-og-tavns",
      eyebrow: "Begrepene henger sammen",
      title: "Hvordan henger tVNS, nVNS og taVNS sammen?",
      blocks: [
        {
          type: "paragraph",
          text: "Begrepene brukes ofte nær hverandre, men beskriver ulike nivåer i samme kategori. nVNS er den brede ikke-invasive familien. tVNS presiserer at stimuleringen gis gjennom huden. taVNS presiserer videre at den transkutane stimuleringen gis ved øret.",
        },
        {
          type: "table",
          caption: "Vanlige forkortelser i den ikke-invasive VNS-kategorien",
          columns: ["Begrep", "Vanlig betydning", "Hva som fortsatt må presiseres"],
          rows: [
            [
              "nVNS",
              "Ikke-invasiv vagusnervestimulering",
              "Plassering, enhet, protokoll og tiltenkt bruk",
            ],
            [
              "tVNS",
              "Transkutan stimulering gjennom huden",
              "Om metoden er aurikulær, cervikal eller en annen variant",
            ],
            [
              "taVNS",
              "Transkutan aurikulær VNS ved øret",
              "Eksakt øreområde, side, elektrode og parametere",
            ],
            [
              "tcVNS",
              "Transkutan cervikal VNS ved halsregionen",
              "Kontaktsted, enhet, bølgeform og produktspesifikk bruk",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Forkortelsen er bare starten",
          paragraphs: [
            "At to studier bruker ordet tVNS betyr ikke at de har brukt samme plassering, dose, kontrollbetingelse eller målgruppe.",
          ],
        },
      ],
    },
    {
      id: "aurikulaer-og-cervikal-tvns",
      eyebrow: "To hovedplasseringer",
      title: "Hva er forskjellen mellom aurikulær og cervikal tVNS?",
      blocks: [
        {
          type: "paragraph",
          text: "Internasjonale rapporteringsanbefalinger skiller mellom transkutan aurikulær stimulering av områder ved det ytre øret og transkutan cervikal stimulering ved halsregionen. Begge kan omtales som tVNS, men de bør ikke behandles som samme metode.",
        },
        {
          type: "table",
          caption: "Overordnede forskjeller mellom to tVNS-tilnærminger",
          columns: ["Tema", "Aurikulær tVNS / taVNS", "Cervikal tVNS / tcVNS"],
          rows: [
            ["Plassering", "Bestemte områder av det ytre øret", "Kontakt ved halsregionen"],
            ["Anatomisk diskusjon", "Aurikulære vagale nervebaner", "Cervikale vagale strukturer"],
            ["Elektrode", "Øreklips, ørepropp eller annen aurikulær kontakt", "Ekstern halskontakt"],
            ["Forskningsdesign", "Ofte sammenlignet med ørebasert sham", "Krever produkt- og plasseringstilpasset kontroll"],
            ["Overførbarhet", "Må vurderes per øreområde og protokoll", "Må vurderes per enhet og halsplassering"],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Plasseringen er en del av metoden",
          paragraphs: [
            "Ørebasert og halsbasert tVNS kan dele overordnet terminologi, men forskning fra én plassering kan ikke automatisk brukes som dokumentasjon for den andre.",
          ],
        },
      ],
    },
    {
      id: "hvordan-stimuleringen-leveres",
      eyebrow: "Fra enhet til hudkontakt",
      title: "Hvordan leveres transkutan stimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "En tVNS-enhet genererer elektriske pulser som overføres til huden gjennom en elektrode eller kontaktflate. Leveringen påvirkes av enhetens elektronikk, elektrodens geometri, kontaktmiddelet, hudmotstanden, plasseringen og hvordan intensiteten fastsettes.",
        },
        {
          type: "numbered",
          items: [
            "Enheten genererer en definert bølgeform og pulssekvens.",
            "Elektroden plasseres på det området som den aktuelle protokollen eller bruksanvisningen angir.",
            "God og stabil hudkontakt etableres med produktets anbefalte fremgangsmåte.",
            "Intensiteten justeres etter studiens metode eller produktets veiledning.",
            "Stimuleringen leveres i en angitt øktlengde og med et bestemt mønster av aktiv tid og pauser.",
            "Opplevelse, tolerabilitet og eventuelle hendelser registreres på en systematisk måte.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Ikke kopier en forskningsprotokoll til et annet produkt",
          paragraphs: [
            "Innstillinger, elektrode og plassering fra en studie skal ikke overføres til en annen enhet uten at produsentens bruksanvisning uttrykkelig støtter det.",
          ],
        },
      ],
    },
    {
      id: "plassering-og-malretting",
      eyebrow: "Anatomi og metode",
      title: "Hvorfor stimuleringsstedet må beskrives presist",
      blocks: [
        {
          type: "paragraph",
          text: "I aurikulær forskning brukes blant annet cymba conchae, tragus og andre øreområder som aktive eller sammenlignende plasseringer. I cervikal tVNS brukes eksterne kontaktsteder ved halsen. Ulike områder har forskjellig anatomisk begrunnelse og kan også gi ulike sanseopplevelser.",
        },
        {
          type: "bullets",
          items: [
            "Eksakt anatomisk område og side",
            "Aktiv elektrode og referanse- eller returelektrode",
            "Kontaktflate, materiale og størrelse",
            "Hudforberedelse og eventuelt kontaktmiddel",
            "Begrunnelse for aktiv plassering",
            "Begrunnelse for kontroll- eller sham-plassering",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "fMRI-funn er metodekontekst, ikke et universelt produktbevis",
          paragraphs: [
            "En liten fMRI-studie av stimulering ved venstre cymba conchae viste aktivitet i områder forbundet med sentrale vagale projeksjoner sammenlignet med øreflippen. Studien støtter en anatomisk og metodisk diskusjon, men dokumenterer ikke enhver øreenhet, protokoll eller brukeropplevelse.",
          ],
        },
      ],
    },
    {
      id: "stimuleringsparametere",
      eyebrow: "Protokollen må kunne etterprøves",
      title: "Hvilke tVNS-parametere bør alltid oppgis?",
      blocks: [
        {
          type: "paragraph",
          text: "Kritiske oversikter og internasjonale konsensusanbefalinger peker på stor variasjon og ufullstendig rapportering i tVNS-feltet. For at en studie skal kunne forstås, gjentas og sammenlignes, må de tekniske detaljene være tydelige.",
        },
        {
          type: "table",
          caption: "Sentrale protokollopplysninger",
          columns: ["Parameter", "Hva den beskriver", "Hvorfor den betyr noe"],
          rows: [
            ["Frekvens", "Antall pulser per sekund", "Kan påvirke opplevelse og biologisk respons"],
            ["Pulsvidde", "Varigheten av hver puls", "Påvirker levert elektrisk ladning"],
            ["Intensitet", "Strøm- eller spenningsnivå", "Må knyttes til målemetode og komfort"],
            ["Bølgeform", "Signalets elektriske form og polaritet", "Påvirker hvordan stimuleringen leveres"],
            ["Duty cycle", "Forholdet mellom aktiv stimulering og pause", "Bestemmer tidsmønsteret i økten"],
            ["Øktlengde", "Varighet per økt", "Påvirker samlet eksponering"],
            ["Antall økter", "Dosering over dager eller uker", "Viktig for sammenligning av studier"],
            ["Titrering", "Hvordan intensiteten velges og justeres", "Påvirker tolerabilitet og blinding"],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Det finnes ikke én universell tVNS-dose",
          paragraphs: [
            "Litteraturen inneholder ulike plasseringer og parameterkombinasjoner. En bestemt frekvens eller øktlengde bør ikke fremstilles som optimal for alle formål uten produkt- og problemspesifikk dokumentasjon.",
          ],
        },
      ],
    },
    {
      id: "sham-kontroll-og-blinding",
      eyebrow: "Forskningsdesign",
      title: "Hvorfor sham-kontroll og blinding er krevende i tVNS-studier",
      blocks: [
        {
          type: "paragraph",
          text: "En sham-betingelse skal ligne den aktive stimuleringen uten å gi den samme antatte målrettingen. I tVNS er dette vanskelig fordi plassering, prikking, trykk og intensitet kan gjøre det mulig for deltakere å gjette hvilken betingelse de mottar.",
        },
        {
          type: "bullets",
          items: [
            "Kontrollstedet kan ha annen nerveforsyning enn det aktive stedet.",
            "Aktiv og sham kan oppleves forskjellig selv ved lik rapportert intensitet.",
            "Titreringsmetoden kan påvirke både komfort og forventning.",
            "Deltakerens og forskerens gjetning bør måles når blinding er viktig.",
            "Et fravær av forskjell kan skyldes både ineffektiv aktiv stimulering og en biologisk aktiv kontroll.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Kontrollbetingelsen er ikke en detalj",
          paragraphs: [
            "Hvordan sham er valgt, levert og opplevd påvirker hvor sikkert resultatene kan tilskrives den aktive tVNS-protokollen.",
          ],
        },
      ],
    },
    {
      id: "hvordan-forskningen-bor-tolkes",
      eyebrow: "Ansvarlig evidensbruk",
      title: "Hvordan bør forskning på tVNS tolkes?",
      blocks: [
        {
          type: "paragraph",
          text: "tVNS-forskning spenner fra små mekanismestudier til kliniske forsøk og systematiske oversikter. Funnene kan gi viktig kunnskap, men relevansen avhenger av om enhet, plassering, parametere, målgruppe og utfall ligner på det spørsmålet man ønsker å besvare.",
        },
        {
          type: "numbered",
          items: [
            "Identifiser om metoden er aurikulær eller cervikal.",
            "Kontroller aktiv plassering og kontrollplassering.",
            "Sammenlign elektrode, frekvens, pulsvidde, intensitet og øktlengde.",
            "Se hvordan dosen ble titrert og om deltakerne kunne være blindet.",
            "Kontroller målgruppen, utvalgsstørrelsen og frafallet.",
            "Skill mellom mål på tolerabilitet, fysiologiske signaler, symptomer og kliniske endepunkter.",
            "Undersøk om studien gjelder det konkrete produktet som omtales.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Metoderelevans er ikke direkte produktdokumentasjon",
          paragraphs: [
            "Neuvago kan bruke tVNS-litteraturen til å forklare metode, terminologi og tolkningsgrenser. Påstander om Neuvago må støttes av dokumentasjon som faktisk gjelder Neuvago og produktets tiltenkte bruk.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-og-tolerabilitet",
      eyebrow: "Brukeropplevelse og rapportering",
      title: "Hva vet vi om sikkerhet og tolerabilitet ved tVNS?",
      blocks: [
        {
          type: "paragraph",
          text: "En systematisk gjennomgang av aurikulær tVNS fant ingen forskjell i risikoen for rapporterte bivirkninger mellom aktiv stimulering og kontroll i studiene som kunne inngå i metaanalysen. Vanligst rapportert var øresmerte, hodepine og prikking. Samtidig manglet mange studier tydelig informasjon om hvorvidt bivirkninger var vurdert.",
        },
        {
          type: "bullets",
          items: [
            "Lokalt ubehag, smerte eller hudirritasjon ved kontaktstedet",
            "Prikking eller annen lokal sanseopplevelse",
            "Hodepine",
            "Svimmelhet eller kvalme i enkelte rapporter",
            "Behov for systematisk registrering av hendelser og avbrutte økter",
            "Begrenset overførbarhet fra studerte grupper til alle potensielle brukere",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Følg alltid produktspesifikk sikkerhetsinformasjon",
          paragraphs: [
            "Stopp ved smerte, tydelig ubehag eller uventet reaksjon. Ikke bruk enheten på andre steder eller med andre innstillinger enn det bruksanvisningen beskriver.",
            "Personer med implantert elektronisk utstyr, relevante hjerterytmeproblemer, medisinske tilstander, graviditetsrelaterte spørsmål eller aktiv behandling bør innhente kvalifisert medisinsk råd før bruk.",
          ],
        },
      ],
    },
    {
      id: "neuvago-og-tvns",
      eyebrow: "Neuvago-kontekst",
      title: "Hvordan forholder Neuvago seg til tVNS-begrepet?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er en ekstern, ørebasert enhet og app for generell velvære. Transkutan VNS er relevant som kategori- og metodebegrep fordi stimuleringen leveres gjennom hudkontakt uten implantat, men den konkrete Neuvago-opplevelsen må beskrives gjennom produktets egen plassering, innstillinger, bruksanvisning og tiltenkte bruk.",
        },
        {
          type: "paragraph",
          text: "Neuvago skal ikke fremstille all tVNS-forskning som direkte produktbevis. Den ansvarlige tilnærmingen er å forklare feltet, vise hvilke metodiske detaljer som betyr noe, og holde produktpåstander innenfor dokumentasjonen og velværerammen.",
        },
        {
          type: "bullets",
          items: [
            "Ekstern stimulering gjennom hudkontakt",
            "Ørebasert plassering fremfor cervikal eller implantert stimulering",
            "Justerbar intensitet innenfor produktets veiledning",
            "Korte, strukturerte rutiner med en separat app som veiledningsverktøy",
            "Generell velvære – ikke diagnose, behandling eller erstatning for helsehjelp",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Denne artikkelen forklarer metoden",
          paragraphs: [
            "Kunnskap om tVNS gir kontekst for Neuvago, men dokumenterer ikke i seg selv en bestemt effekt av Neuvago-produktet.",
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
        "Metodekritisk gjennomgang av tVNS, stimuleringssteder, parametere, enheter og utfordringer ved overføring til klinisk praksis.",
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
        "Konsensusbaserte minimumskrav for rapportering av aurikulær og cervikal tVNS, enheter, parametere, kontrollbetingelser og sikkerhet.",
    },
    {
      id: "badran-2019-tavns-technique",
      authors: "Badran BW et al.",
      title:
        "Laboratory Administration of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): Technique, Targeting, and Considerations",
      publication: "Journal of Visualized Experiments",
      year: 2019,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
      doi: "10.3791/58984",
      pmid: "30663712",
      note:
        "Praktisk metodeartikkel om aurikulær målretting, elektrodekontakt, persepsjonsterskel og sikker administrasjon i laboratoriet.",
    },
    {
      id: "frangos-2015-fmri",
      authors: "Frangos E, Ellrich J, Komisaruk BR",
      title:
        "Non-invasive Access to the Vagus Nerve Central Projections via Electrical Stimulation of the External Ear: fMRI Evidence in Humans",
      publication: "Brain Stimulation",
      year: 2015,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
      doi: "10.1016/j.brs.2014.11.018",
      pmid: "25573069",
      note:
        "Liten fMRI-studie av stimulering ved venstre cymba conchae sammenlignet med øreflippen hos friske voksne.",
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
        "Systematisk gjennomgang av sikkerhetsrapportering og rapporterte hendelser i 177 taVNS-studier med 6322 deltakere.",
    },
  ],

  relatedSlugs: [
    "ikke-invasiv-vagusnervestimulering",
    "vagusnervestimulering",
    "vagusnerven",
  ],
  relatedLinks: [
    {
      title: "Forskning på transkutan VNS",
      description:
        "Gå videre til forskningsbibliotekets metodefokuserte side om tVNS, taVNS, stimuleringssteder og protokollvariabler.",
      href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
      label: "Utforsk tVNS-forskning",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Les om rapporterte hendelser, tolerabilitet, kontrollbetingelser og hvorfor sikkerhet må vurderes per protokoll og produkt.",
      href: "/research/topics/safety-and-tolerability",
      label: "Les om sikkerhet",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan den ørebaserte enheten, den separate appen og den praktiske velværerutinen henger sammen.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan Neuvago fungerer",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
