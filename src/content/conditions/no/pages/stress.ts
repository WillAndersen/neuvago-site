import type { NorwegianConditionPage } from "@/content/conditions/no/types";

export const stressConditionPage = {
  slug: "stress",
  path: "/no/tilstander/stress",
  status: "published",
  wave: "1C",
  order: 10,

  title:
    "Stress og nervesystemet – aktivering, belastning og veien tilbake",
  seoTitle:
    "Stress og nervesystemet | Aktivering og regulering | Neuvago",
  description:
    "Forstå hvordan stress påvirker kropp, søvn, oppmerksomhet og restitusjon – og hvordan du kan velge trygg støtte uten å gjøre stress til én diagnose.",
  eyebrow: "Stress og daglig regulering",
  lead:
    "Stress er ikke bare en tanke eller en travel kalender. Det er en koordinert tilpasningsrespons der hjernen og kroppen mobiliserer oppmerksomhet, energi og handling når noe oppleves krevende. Kortvarig stress kan være nyttig. Belastningen blir mer problematisk når aktiveringen er for sterk, gjentas ofte, varer lenge eller ikke faller tilstrekkelig etterpå. Denne siden forklarer stress som et mønster i hele systemet – uten å gjøre alle kroppslige symptomer til «nervesystemdysregulering» og uten å presentere Neuvago som behandling.",
  shortAnswer: [
    "Stress er en normal tilpasningsrespons, ikke automatisk en sykdom eller et tegn på at kroppen er ødelagt.",
    "Sympatisk aktivitet, HPA-aksen, hormoner, immunsignaler, pust, muskler og atferd kan bidra samtidig.",
    "Kortvarig aktivering kan støtte handling og prestasjon; vedvarende eller dårlig avsluttet belastning kan koste mer over tid.",
    "Søvn, smerte, sykdom, arbeidssituasjon, relasjoner, økonomi, koffein, alkohol og medisiner kan påvirke hvordan stress oppleves.",
    "Praktisk støtte bør begynne med belastningen og grunnbehovene – ikke med et løfte om å «resette vagusnerven».",
  ],
  hubSummary:
    "En kildebasert pathway fra stress og kroppslig aktivering til autonom fysiologi, hverdagsmønstre, trygg støtte, forskning og tydelige produktgrenser.",
  hubLabel: "Norsk hovedside",

  primaryKeyword: "stress nervesystemet",
  secondaryKeywords: [
    "stress og nervesystemet",
    "stressrespons",
    "kroppen i alarmberedskap",
    "vedvarende stress",
    "kronisk stress",
    "stress og søvn",
    "stress og vagusnerven",
    "sympatisk nervesystem stress",
    "HPA aksen",
    "allostatisk belastning",
    "indre uro",
    "kroppen roer seg ikke",
    "nedregulering stress",
    "hvordan roe ned stress",
    "stressmestring",
  ],

  publishedAt: "2026-08-18",
  modifiedAt: "2026-08-18",
  readingTimeMinutes: 22,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/conditions/stress",
  sitemapPriority: 0.9,
  changeFrequency: "weekly",

  pathway: {
    eyebrow: "Stress-pathway",
    title: "Fra aktivering til neste passende handling",
    description:
      "Pathwayen er ikke en behandlingstest. Den hjelper leseren å skille mellom akutt fare, reell problemløsning, grunnbehov, nedregulering, restitusjon og behov for faglig hjelp.",
    steps: [
      {
        number: "01",
        title: "Sjekk sikkerhet og årsak",
        description:
          "Er situasjonen trygg? Finnes det smerte, sykdom, konflikt, søvnmangel eller et konkret problem som må håndteres først?",
      },
      {
        number: "02",
        title: "Reduser unødvendig belastning",
        description:
          "Gjør én ting enklere: senk samtidige krav, demp støy, ta pause, be om hjelp eller endre miljøet.",
      },
      {
        number: "03",
        title: "Velg riktig støtte",
        description:
          "Bruk rolig pust, bevegelse, orientering, sosial støtte eller hvile etter hva kroppen og situasjonen faktisk trenger.",
        href: "/no/kunnskap/hvordan-roe-ned-nervesystemet",
        label: "Se praktiske strategier",
      },
      {
        number: "04",
        title: "Vurder respons og neste nivå",
        description:
          "Er intensiteten litt lavere og neste handling tydeligere? Hvis ikke: bytt strategi, løs årsaken eller søk riktig hjelp.",
      },
    ],
  },

  sections: [
    {
      id: "hva-er-stress",
      eyebrow: "Grunnleggende forståelse",
      title: "Hva er stress?",
      blocks: [
        {
          type: "paragraph",
          text: "Stress oppstår når hjernen og kroppen registrerer eller forventer krav som krever tilpasning. Responsen formes av selve situasjonen, tidligere erfaring, tilgjengelige ressurser, kontroll, forutsigbarhet og hvor viktig utfallet oppleves.",
        },
        {
          type: "paragraph",
          text: "Stressresponsen kan mobilisere energi, øke oppmerksomhet, endre puls og pust og gjøre rask handling lettere. Derfor er ikke stress i seg selv unormalt. Det er en del av kroppens evne til å møte utfordringer.",
        },
        {
          type: "definition",
          term: "Stressor",
          definition:
            "En hendelse, belastning, forventning eller kroppslig tilstand som utløser behov for tilpasning. Det kan være fysisk, psykososialt, miljømessig eller medisinsk.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Stress er en respons – ikke en moralsk feil",
          paragraphs: [
            "Sterk aktivering betyr ikke at personen er svak eller gjør regulering feil.",
            "Responsen må forstås i lys av krav, kapasitet, erfaring og hvor lenge belastningen varer.",
          ],
        },
      ],
    },
    {
      id: "stress-systemene",
      eyebrow: "Flere systemer arbeider sammen",
      title: "Hva skjer i kroppen under en stressrespons?",
      blocks: [
        {
          type: "paragraph",
          text: "Stress organiseres ikke av ett enkelt senter eller én nerve. Hjerneområder som vurderer trussel og betydning kommuniserer med det autonome nervesystemet, hormonelle systemer, immunsystemet og motoriske nettverk.",
        },
        {
          type: "table",
          caption: "Forenklet oversikt over deler av stressresponsen",
          columns: ["Del av responsen", "Mulig rolle", "Viktig avgrensning"],
          rows: [
            [
              "Sympatisk-adrenal respons",
              "Rask mobilisering av sirkulasjon, oppmerksomhet og handling",
              "Sympatisk aktivitet er også nødvendig ved normal oppreisning, temperaturregulering og trening",
            ],
            [
              "HPA-aksen",
              "Hormonell tilpasning via hypothalamus, hypofyse og binyrebark",
              "Kortisol varierer med døgnrytme, sykdom, søvn og målemetode",
            ],
            [
              "Parasympatiske baner",
              "Bidrar til organspesifikk regulering og rask kardial kontroll",
              "Parasympatisk aktivitet er ikke én global roknapp",
            ],
            [
              "Immune og metabolske signaler",
              "Bidrar til ressursfordeling og kommunikasjon mellom kroppssystemer",
              "En generell stressopplevelse identifiserer ikke én bestemt biomarkør",
            ],
            [
              "Atferd og oppmerksomhet",
              "Prioriterer handling, overvåking, problemløsning eller beskyttelse",
              "Atferden påvirker igjen den videre fysiologiske belastningen",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Stressystemet støtter både fysisk og atferdsmessig tilpasning",
          paragraphs: [
            "Klassiske fysiologiske modeller beskriver stress som en koordinert respons som skal bevare funksjon når kravene endres.",
            "Problemet er ikke at systemet aktiveres, men blant annet hyppighet, varighet, intensitet og evnen til å avslutte eller omorganisere responsen.",
          ],
        },
      ],
    },
    {
      id: "akutt-og-langvarig-stress",
      eyebrow: "Tid og avslutning betyr noe",
      title: "Hva er forskjellen mellom akutt og langvarig stress?",
      blocks: [
        {
          type: "table",
          caption: "Akutt og langvarig belastning",
          columns: ["Mønster", "Eksempel", "Hva som bør vurderes"],
          rows: [
            [
              "Kortvarig aktivering",
              "Presentasjon, eksamen, konflikt, trening eller akutt fare",
              "Om responsen passer situasjonen og faller etterpå",
            ],
            [
              "Gjentatt belastning",
              "Mange tidsfrister, avbrudd eller konflikter gjennom uken",
              "Total mengde, pauser, kontroll og restitusjonsmulighet",
            ],
            [
              "Vedvarende belastning",
              "Langvarig omsorgspress, økonomisk utrygghet, sykdom eller arbeidsbelastning",
              "Om årsaken kan endres og hvilken praktisk eller faglig støtte som trengs",
            ],
            [
              "Mangelfull avslutning",
              "Kroppen forblir aktivert lenge etter at kravet er borte",
              "Søvn, smerte, bekymring, miljø, vaner og andre medisinske eller psykiske forklaringer",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Det er ikke mulig å sette én tidsgrense som gjør stress «kronisk» for alle formål. I praksis er det mer nyttig å se på om belastningen vedvarer, om den påvirker funksjon, og om systemet får tilstrekkelig anledning til å skifte og hente seg inn.",
        },
      ],
    },
    {
      id: "allostase-og-belastning",
      eyebrow: "Stabilitet gjennom endring",
      title: "Allostase forklarer hvorfor tilpasning både beskytter og kan koste",
      blocks: [
        {
          type: "definition",
          term: "Allostase",
          definition:
            "Tilpasning gjennom endring: hjernen og kroppen justerer ressursbruk og fysiologi for å møte forventede eller pågående krav.",
        },
        {
          type: "definition",
          term: "Allostatisk belastning",
          definition:
            "Den kumulative kostnaden når tilpasningssystemer aktiveres ofte, blir stående på for lenge eller ikke samordnes effektivt.",
        },
        {
          type: "paragraph",
          text: "Stressmediatorer kan være beskyttende på kort sikt. De gjør handling og tilpasning mulig. Ved gjentatt eller vedvarende belastning kan den samme mobiliseringen bidra til slitasje, særlig når søvn, sosial støtte, bevegelse, trygghet og andre gjenoppbyggende forhold er utilstrekkelige.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Allostatisk belastning er ikke en enkel selvtest",
          paragraphs: [
            "Begrepet brukes i forskning om samspill mellom flere kroppssystemer og livsbelastninger.",
            "En smartklokke, et HRV-tall eller en symptombeskrivelse kan ikke alene beregne en persons samlede allostatiske belastning.",
          ],
        },
      ],
    },
    {
      id: "hvordan-stress-kan-kjennes",
      eyebrow: "Lived experience uten selvdiagnose",
      title: "Hvordan kan stress vise seg i hverdagen?",
      blocks: [
        {
          type: "table",
          caption: "Vanlige mønstre som kan opptre ved stress",
          columns: ["Område", "Mulig opplevelse", "Andre forklaringer må også vurderes"],
          rows: [
            [
              "Kropp",
              "Muskelspenning, raskere pust, hjertebank, varme eller uro",
              "Smerte, infeksjon, stoffskifte, hjerte- og lungesykdom, medisiner og stimulantia",
            ],
            [
              "Oppmerksomhet",
              "Vansker med å skifte fokus, scanning, tankekjør eller glemsomhet",
              "Søvnmangel, depresjon, ADHD, rusmidler og andre nevrologiske eller psykiske forhold",
            ],
            [
              "Følelser",
              "Irritabilitet, uro, overveldelse eller lavere toleranse",
              "Angstlidelser, depresjon, traumer, hormonelle og sosiale forhold",
            ],
            [
              "Søvn",
              "Vansker med å koble av, hyppige oppvåkninger eller tidlig oppvåkning",
              "Insomni, søvnapné, smerte, skiftarbeid, alkohol og andre søvnforstyrrelser",
            ],
            [
              "Atferd",
              "Unngåelse, rushing, overarbeid, sosial tilbaketrekning eller mer bruk av rusmidler",
              "Kontekst, mestringsmønstre og eksisterende helseutfordringer",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Symptomer peker ikke automatisk på én vagus- eller stressforklaring",
          paragraphs: [
            "Stress kan være en relevant del av bildet, men vanlige symptomer er uspesifikke.",
            "Nye, sterke eller vedvarende plager bør vurderes på riktig medisinsk eller psykologisk nivå.",
          ],
        },
      ],
    },
    {
      id: "hvorfor-kroppen-kan-forbli-pa",
      eyebrow: "Etter at situasjonen er over",
      title: "Hvorfor kan kroppen føles aktivert etterpå?",
      blocks: [
        {
          type: "paragraph",
          text: "En respons avsluttes ikke nødvendigvis i samme øyeblikk som en hendelse tar slutt. Tanker, forventning, konflikt, smerte, stimulerende stoffer og et krevende miljø kan fortsette å gi signaler om at innsats eller overvåking trengs.",
        },
        {
          type: "paragraph",
          text: "I tillegg kan den opprinnelige belastningen ha brukt mye kapasitet. En person kan derfor være både sliten og aktivert samtidig. Det er ikke et paradoks: energifølelsen, muskelberedskapen, oppmerksomheten og den reelle restitusjonen kan bevege seg forskjellig.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "«Trøtt, men på» trenger en bred vurdering",
          paragraphs: [
            "Noen trenger nedregulering. Andre trenger søvn, mat, smertelindring, mindre arbeidspress, behandling eller en løsning på den faktiske situasjonen.",
          ],
        },
      ],
    },
    {
      id: "stress-og-sovn",
      eyebrow: "Toveis påvirkning",
      title: "Stress og søvn kan forsterke hverandre",
      blocks: [
        {
          type: "paragraph",
          text: "Stress kan gjøre innsovning og sammenhengende søvn vanskeligere gjennom bekymring, aktivering, endret døgnrytme og atferd. Utilstrekkelig eller uregelmessig søvn kan samtidig gjøre nye krav vanskeligere å håndtere og påvirke fysiologisk stressreaktivitet.",
        },
        {
          type: "paragraph",
          text: "Dette betyr ikke at alle søvnproblemer skyldes stress. Vedvarende søvnvansker, høy snorking, pustestopp, rastløse bein, smerter eller tydelig funksjonsfall bør vurderes mer spesifikt.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Søvn er både restitusjon og mulig stressor",
          paragraphs: [
            "Faglige oversikter beskriver søvnmangel og døgnrytmeforstyrrelse som belastninger som kan påvirke flere kroppssystemer.",
            "Den kommende norske søvn-pathwayen vil skille kveldens nedtrapping fra behandling av insomni og annen søvnsykdom.",
          ],
        },
      ],
    },
    {
      id: "stress-og-hrv",
      eyebrow: "Måling uten overtolkning",
      title: "Kan HRV vise hvor stresset du er?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV beskriver variasjonen mellom hjerteslag. Enkelte HRV-mål kan gi informasjon om kardial autonom regulering under definerte forhold, men påvirkes av pust, puls, kroppsstilling, alder, aktivitet, alkohol, sykdom, søvn, rytmeforstyrrelser og målemetode.",
        },
        {
          type: "paragraph",
          text: "En lav verdi kan forekomme under belastning, men er ikke en universell stressdiagnose. En høy verdi beviser heller ikke at en person er rolig, frisk eller fullt restituert.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Se HRV som trenddata – ikke en dom",
          paragraphs: [
            "Sammenlign egne målinger under mest mulig like forhold og se dem sammen med søvn, aktivitet, symptomer og funksjon.",
            "Les den norske HRV-guiden før du bruker et klokketall som forklaring på stress.",
          ],
        },
      ],
    },
    {
      id: "hva-som-kan-hjelpe",
      eyebrow: "Støtte på flere nivåer",
      title: "Hva kan hjelpe når stressbelastningen er høy?",
      blocks: [
        {
          type: "paragraph",
          text: "Det mest treffsikre tiltaket avhenger av hva som opprettholder belastningen. En god plan kombinerer ofte endring av årsaken, støtte til grunnbehovene og enkle ferdigheter for å gjøre aktiveringen mer håndterbar.",
        },
        {
          type: "table",
          caption: "Eksempler på støtte og riktig forventning",
          columns: ["Tiltak", "Mulig rolle", "Hva det ikke erstatter"],
          rows: [
            [
              "Problemløsning og grensesetting",
              "Reduserer eller omorganiserer selve kravet",
              "Kan kreve hjelp fra arbeidsgiver, familie, økonomisk rådgiver eller helsevesen",
            ],
            [
              "Søvn, mat, væske og pauser",
              "Støtter kapasitet og gjenoppbygging",
              "Er ikke alene nok ved alvorlig sykdom eller vedvarende psykiske plager",
            ],
            [
              "Rolig pust og orientering",
              "Kan gi en kortvarig tilstandsendring og tydeligere neste steg",
              "Er ikke en universell vagus-reset eller behandling av alle stressårsaker",
            ],
            [
              "Bevegelse",
              "Kan bruke mobilisert energi og støtte humør, søvn og helse",
              "Må tilpasses sykdom, smerte, utmattelse og kapasitet",
            ],
            [
              "Sosial støtte",
              "Kan gi trygghet, perspektiv og praktisk avlastning",
              "Hjelper mest når relasjonen og kontakten faktisk oppleves støttende",
            ],
            [
              "Faglig hjelp",
              "Gir vurdering, behandling eller oppfølging når problemet varer eller er alvorlig",
              "Bør ikke utsettes fordi en velværeteknikk midlertidig demper symptomer",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Små ferdigheter kan være nyttige uten å løse hele belastningen",
          paragraphs: [
            "WHO anbefaler enkle stressmestringsferdigheter som grounding, å legge merke til tanker, aksept, verdibasert handling og vennlighet.",
            "Systematiske analyser antyder at pust, aktivitet og mindfulness kan hjelpe enkelte stressutfall, men effektene varierer med metode, person og situasjon.",
          ],
        },
      ],
    },
    {
      id: "en-praktisk-rekkefolge",
      eyebrow: "Fra stress til handling",
      title: "En praktisk rekkefølge når kroppen føles for aktivert",
      blocks: [
        {
          type: "numbered",
          items: [
            "Sjekk om det finnes akutt fare eller symptomer som krever helsehjelp.",
            "Navngi den konkrete belastningen fremfor bare å kalle alt «stress».",
            "Reduser ett unødvendig krav eller be om praktisk hjelp.",
            "Sjekk søvn, mat, væske, smerte, temperatur, koffein og alkohol.",
            "Velg én mild strategi: bevegelse, rolig pust, orientering, pause eller sosial støtte.",
            "Vurder responsen etter noen minutter og velg neste handling.",
            "Søk faglig hjelp dersom mønsteret er vedvarende, alvorlig eller begrenser hverdagen.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Regulering inkluderer å skifte nivå",
          paragraphs: [
            "Noen situasjoner trenger en selvhjelpsferdighet. Andre trenger problemløsning, behandling eller akutt hjelp.",
          ],
        },
      ],
    },
    {
      id: "nar-du-bor-soke-hjelp",
      eyebrow: "Norsk hjelpenivå",
      title: "Når bør stressplager vurderes av helsepersonell?",
      blocks: [
        {
          type: "paragraph",
          text: "Ta kontakt med fastlege eller annet kvalifisert helsepersonell når plagene varer, øker, påvirker arbeid, skole, søvn, relasjoner eller egenomsorg, eller når du er usikker på om symptomene skyldes stress.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Søk akutt hjelp ved alvorlige symptomer",
          paragraphs: [
            "Ring 113 ved fare for liv og helse, blant annet ved bevisstløshet, nye lammelser eller språkproblemer, vedvarende brystsmerter eller akutt selvmordsfare.",
            "Ring legevakt 116 117 når hjelpen ikke kan vente til fastlegen er tilgjengelig, men situasjonen ikke virker livstruende.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Stressordet må ikke skjule andre forklaringer",
          paragraphs: [
            "Brystsmerter, tungpust, besvimelse, uregelmessig puls, nevrologiske symptomer, betydelig vekttap, vedvarende feber eller markert psykisk forverring bør ikke selvforklares med stress.",
          ],
        },
      ],
    },
    {
      id: "vagusnerven-og-stress",
      eyebrow: "Relevant fysiologi med tydelige grenser",
      title: "Hva har vagusnerven med stress å gjøre?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnerven inngår i omfattende sensoriske og parasympatiske forbindelser mellom hjernestammen og flere organer. Den er relevant for hvordan kroppen registrerer indre tilstand og regulerer blant annet hjerte, luftveier og fordøyelse.",
        },
        {
          type: "paragraph",
          text: "Det betyr ikke at stress kan reduseres til «for lav vagal tone», eller at enhver aktivitet som påvirker pust eller hjerterytme selektivt aktiverer vagusnerven. Stressregulering skjer gjennom distribuerte nettverk og påvirkes av kontekst, læring, hormoner, atferd og miljø.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Vagusnerven er en del av bildet – ikke hele forklaringen",
          paragraphs: [
            "Bruk vagus- og HRV-begreper presist, og unngå å gjøre én nerve til årsak til alle stressplager.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Rolig produktbro",
      title: "Hvordan kan Neuvago inngå i en stressrelatert velværerutine?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er et eksternt, ørebasert velværesystem med justerbar stimulering og en separat app for veiledede rutiner. Systemet kan inngå som én strukturert pause i hverdagen, for eksempel sammen med rolig pust, orientering eller en overgang ut av arbeid.",
        },
        {
          type: "paragraph",
          text: "En praktisk produktbro bør komme etter at belastningen, sikkerheten og de ikke-produktbaserte valgene er forstått. Neuvago skal ikke brukes til å diagnostisere stress, behandle stresslidelser eller erstatte helsehjelp.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Velværestøtte – ikke stressbehandling",
          paragraphs: [
            "Neuvago skal ikke love at det senker kortisol, øker vagal tone, normaliserer HRV eller resetter nervesystemet.",
            "Produktpåstander må bygge på Neuvagos tiltenkte bruk, tekniske dokumentasjon, sikkerhetsinformasjon og direkte relevant produkttesting.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Følg gjeldende produktinformasjon",
          paragraphs: [
            "Bruk anbefalt plassering og intensitetsområde. Ved sykdom, aktive symptomer, implantert elektronisk utstyr, graviditet eller usikkerhet om egnethet bør kvalifisert helsepersonell konsulteres.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "chrousos-gold-1992",
      authors: "Chrousos GP, Gold PW",
      title:
        "The concepts of stress and stress system disorders. Overview of physical and behavioral homeostasis",
      publication: "JAMA",
      year: 1992,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/1538563/",
      pmid: "1538563",
      note:
        "Klassisk oversikt over stressbegrepet og et koordinert stressystem som støtter fysiologisk og atferdsmessig tilpasning.",
    },
    {
      id: "mcewen-1998-allostasis",
      authors: "McEwen BS",
      title: "Stress, adaptation, and disease. Allostasis and allostatic load",
      publication: "Annals of the New York Academy of Sciences",
      year: 1998,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/9629234/",
      doi: "10.1111/j.1749-6632.1998.tb09546.x",
      pmid: "9629234",
      note:
        "Grunnleggende fremstilling av allostase som tilpasning og allostatisk belastning som kostnaden ved hyppig, vedvarende eller dårlig avsluttet aktivering.",
    },
    {
      id: "mcewen-gianaros-2010",
      authors: "McEwen BS, Gianaros PJ",
      title:
        "Central role of the brain in stress and adaptation: links to socioeconomic status, health, and disease",
      publication: "Annals of the New York Academy of Sciences",
      year: 2010,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/20201874/",
      pmid: "20201874",
      note:
        "Oversikt over hjernen som sentral mediator og mål for stress, allostase og toveis kommunikasjon med autonome, kardiovaskulære og immune systemer.",
    },
    {
      id: "mcewen-karatsoreos-2015",
      authors: "McEwen BS, Karatsoreos IN",
      title:
        "Sleep Deprivation and Circadian Disruption: Stress, Allostasis, and Allostatic Load",
      publication: "Sleep Medicine Clinics",
      year: 2015,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/26055668/",
      doi: "10.1016/j.jsmc.2014.11.007",
      pmid: "26055668",
      note:
        "Faglig oversikt over søvn og døgnrytme som homeostatiske funksjoner og hvordan søvnforstyrrelse kan fungere som belastning og forsterke andre stressorer.",
    },
    {
      id: "laborde-2022-slow-breathing",
      authors:
        "Laborde S, Allen MS, Borges U, Dosseville F, Hosang TJ, Iskra M, Mosley E, Salvotti C, Spolverato L, Zammit N, Javelle F",
      title:
        "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis",
      publication: "Neuroscience & Biobehavioral Reviews",
      year: 2022,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/35623448/",
      doi: "10.1016/j.neubiorev.2022.104711",
      pmid: "35623448",
      note:
        "Systematisk oversikt og metaanalyse av langsom pust og kardiale vagalt medierte HRV-mål under og etter øvelser.",
    },
    {
      id: "morava-2024-exercise",
      authors: "Morava A, Dillon K, Sui W, Alushaj E, Prapavessis H",
      title:
        "The effects of acute exercise on stress reactivity assessed via a multidimensional approach: a systematic review",
      publication: "Journal of Behavioral Medicine",
      year: 2024,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/38468106/",
      doi: "10.1007/s10865-024-00470-w",
      pmid: "38468106",
      note:
        "Systematisk gjennomgang av én treningsøkts påvirkning på fysiologisk og selvrapportert stressreaktivitet.",
    },
    {
      id: "goyal-2014-meditation",
      authors:
        "Goyal M, Singh S, Sibinga EMS, Gould NF, Rowland-Seymour A, Sharma R, Berger Z, Sleicher D, Maron DD, Shihab HM, Ranasinghe PD, Linn S, Saha S, Bass EB, Haythornthwaite JA",
      title:
        "Meditation programs for psychological stress and well-being: a systematic review and meta-analysis",
      publication: "JAMA Internal Medicine",
      year: 2014,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/24395196/",
      doi: "10.1001/jamainternmed.2013.13018",
      pmid: "24395196",
      note:
        "Systematisk oversikt over meditasjonsprogrammer med små til moderate effekter for enkelte stressrelaterte utfall og tydelige evidensbegrensninger.",
    },
    {
      id: "who-2020-stress",
      authors: "World Health Organization",
      title: "Doing what matters in times of stress: an illustrated guide",
      publication: "World Health Organization",
      year: 2020,
      type: "official-guidance",
      url: "https://www.who.int/publications/i/item/9789240003927",
      note:
        "Offisiell veiledning med praktiske stressmestringsferdigheter som grounding, unhooking, aksept, verdibasert handling og vennlighet.",
    },
    {
      id: "helsenorge-legevakt",
      authors: "Helsedirektoratet",
      title: "Legevakt",
      publication: "Helsenorge",
      year: 2023,
      type: "official-guidance",
      url:
        "https://www.helsenorge.no/hjelpetilbud-i-kommunene/legevakt/",
      note:
        "Offisiell norsk veiledning om fastlege, legevakt 116 117 og når 113 skal kontaktes ved akutte symptomer.",
    },
  ],

  relatedKnowledgeSlugs: [
    "hvordan-roe-ned-nervesystemet",
    "regulering-av-nervesystemet",
    "det-autonome-nervesystemet",
    "det-parasympatiske-nervesystemet",
    "vagal-tone",
    "hrv-og-vagusnerven",
    "vagusnerven",
  ],
  relatedLinks: [
    {
      title: "Stress pathway på engelsk",
      description:
        "Les den eksisterende engelske parallellsiden om aktivering, belastning, restitusjon og rolige rutiner.",
      href: "/conditions/stress",
      label: "Les engelsk parallellside",
    },
    {
      title: "Autonom regulering – forskning",
      description:
        "Gå til forskningsbibliotekets tema om sympatisk og parasympatisk kontroll, HRV, stressresponser og metodiske grenser.",
      href: "/research/topics/autonomic-regulation",
      label: "Utforsk autonom forskning",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Se hvorfor ikke-invasiv VNS må vurderes etter enhet, protokoll, målgruppe, hendelser og tiltenkt bruk.",
      href: "/research/topics/safety-and-tolerability",
      label: "Les sikkerhetsforskning",
    },
    {
      title: "Neuvago-appen",
      description:
        "Se hvordan appen organiserer korte, veiledede rutiner uten å gjøre stress til et prestasjonsmål.",
      href: "/no/app",
      label: "Utforsk appen",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan ørekomponent, enhet, app og rutine henger sammen innenfor tydelige velværegrenser.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Les den norske juridiske forklaringen av produktets velværeposisjon og hva Neuvago ikke er ment å diagnostisere eller behandle.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
  ],

  disclaimer:
    "Generell informasjon om stress og velvære. Siden er ikke medisinsk rådgivning, diagnose eller behandling, og erstatter ikke fastlege, legevakt, psykisk helsehjelp eller akuttjenester.",
} as const satisfies NorwegianConditionPage;
