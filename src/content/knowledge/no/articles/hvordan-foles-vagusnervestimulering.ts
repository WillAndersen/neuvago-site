import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const hvordanFolesVagusnervestimuleringArticle = {
  slug: "hvordan-foles-vagusnervestimulering",
  path: "/no/kunnskap/hvordan-foles-vagusnervestimulering",
  status: "published",
  wave: "1D",
  order: 170,

  title:
    "Hvordan føles vagusnervestimulering? Sensasjon, intensitet og komfort",
  seoTitle: "Hvordan føles vagusnervestimulering? | Neuvago",
  description:
    "En kildebasert guide til hvordan ørebasert, ikke-invasiv vagusnervestimulering kan kjennes, hvorfor sensasjonen varierer, og hvorfor prikking ikke beviser effekt.",
  eyebrow: "Sensasjon og komfort",
  lead:
    "Ørebasert, ikke-invasiv vagusnervestimulering merkes vanligvis lokalt ved kontaktområdet. Den kan kjennes som lett prikking, små stikk, tikking eller tydelige pulser. Opplevelsen varierer med enhet, stimuleringsmønster, intensitet, kontakt og personen som bruker den. Sensasjonen er nyttig som praktisk tilbakemelding, men den er ikke et biologisk måleinstrument for målretting eller effekt.",
  shortAnswer: [
    "Ørebasert, ikke-invasiv VNS merkes vanligvis som en lokal elektrisk sensasjon ved det ytre øret.",
    "Prikking, tikking eller pulsering kan være forventet, men stimuleringen bør ikke måtte være smertefull for å være relevant.",
    "Intensitet, pulsmønster, kontakt og individuell følsomhet påvirker hvordan stimuleringen kjennes.",
    "En sterkere sensasjon betyr ikke automatisk sterkere vagal aktivering eller bedre effekt.",
    "Ved ubehag, smerte eller at man føler seg uvel, skal produktets egne råd om reduksjon, pause eller stopp følges.",
  ],
  hubSummary:
    "Hva ørebasert VNS kan kjennes som, hvorfor intensitet og kontakt endrer sensasjonen, og forskjellen mellom følelse, komfort, målretting og effekt.",
  hubLabel: "Sensasjonsguide",

  primaryKeyword: "hvordan føles vagusnervestimulering",
  secondaryKeywords: [
    "hvordan kjennes vagusnervestimulering",
    "vagusnervestimulering prikking",
    "taVNS følelse",
    "tVNS sensasjon",
    "øre vagusnervestimulering følelse",
    "vagusnervestimulator intensitet",
    "vagusnervestimulering komfort",
  ],
  searchIntent: "informational",

  publishedAt: "2026-09-24",
  modifiedAt: "2026-09-24",
  readingTimeMinutes: 12,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent:
    "/learn/what-does-vagus-nerve-stimulation-feel-like",
  sitemapPriority: 0.84,
  changeFrequency: "weekly",

  sections: [
    {
      id: "kort-svar",
      eyebrow: "Det viktigste først",
      title:
        "Mild prikking eller pulsering er vanlig – men følelsen varierer mellom metode, oppsett og person",
      blocks: [
        {
          type: "paragraph",
          text: "Ved aurikulær eller ørebasert transkutan VNS ligger elektrodekontakten på det ytre øret. Derfor er den umiddelbare sensasjonen vanligvis lokal: prikking, små stikk, tikking eller pulser. Beskrivelsen varierer mellom studier og produkter fordi kontaktsted, elektrode, strømform og intensitet varierer.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "En praktisk grense",
          paragraphs: [
            "Stimulering trenger ikke kjennes sterk for å være merkbar.",
            "En sterkere sensasjon er ikke i seg selv dokumentasjon på bedre målretting eller effekt.",
          ],
        },
      ],
    },
    {
      id: "metoden-bestemmer-opplevelsen",
      eyebrow: "Metode først",
      title:
        "Ørebasert stimulering og implantert VNS skal ikke forventes å kjennes likt",
      blocks: [
        {
          type: "paragraph",
          text: "Aurikulær VNS bruker elektrisk kontakt ved det ytre øret, mens implantert VNS er en kirurgisk klinisk metode med elektroder ved den cervikale vagusnerven. Hardware, plassering, indikasjoner, dosering og sikkerhetsrammer er forskjellige.",
        },
        {
          type: "table",
          caption: "Hvorfor metodegrensen betyr noe",
          columns: ["Metode", "Hvor stimuleringen gis", "Hva sensasjonen kan fortelle"],
          rows: [
            [
              "Aurikulær / taVNS",
              "Ytre øre",
              "At elektrisk stimulering merkes lokalt ved kontaktområdet",
            ],
            [
              "Cervikal ikke-invasiv VNS",
              "Halsområdet",
              "At den aktuelle enheten gir en merkbar lokal stimulering",
            ],
            [
              "Implantert VNS",
              "Implantert elektrode ved cervikal vagus",
              "Må tolkes innenfor en separat klinisk og produktspesifikk ramme",
            ],
          ],
        },
      ],
    },
    {
      id: "fem-forskjellige-sporsmal",
      eyebrow: "Ord som bør skilles",
      title:
        "Sensasjon, komfort, intensitet, effekt og målretting er fem forskjellige spørsmål",
      blocks: [
        {
          type: "definition",
          term: "Sensasjon",
          definition:
            "Det du merker ved kontaktområdet under stimuleringen, for eksempel prikking, tikking eller pulser.",
        },
        {
          type: "definition",
          term: "Komfort",
          definition:
            "Om sensasjonen oppleves som tolererbar og akseptabel gjennom økten.",
        },
        {
          type: "definition",
          term: "Intensitet",
          definition:
            "Enhetens justerbare nivå. Et tall på én enhet kan ikke uten videre sammenlignes med et tall på en annen.",
        },
        {
          type: "definition",
          term: "Effekt",
          definition:
            "Et utfall under eller etter bruk. Effekt kan ikke utledes av hvor kraftig stimuleringen kjennes.",
        },
        {
          type: "definition",
          term: "Målretting",
          definition:
            "Et forskningsspørsmål om hvilke nervefibre og baner som faktisk påvirkes. Lokal prikking kan ikke svare på dette alene.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Følelse er ikke et biomarkørsignal",
          paragraphs: [
            "En lokal sensasjon viser at elektrisk stimulering er merkbar ved kontaktområdet.",
            "Den identifiserer ikke alene hvilke fibre som aktiveres, og den dokumenterer ikke en bestemt senere effekt.",
          ],
        },
      ],
    },
    {
      id: "hvorfor-sensasjonen-varierer",
      eyebrow: "Hele oppsettet teller",
      title: "Fire forhold påvirker hvordan stimuleringen kjennes",
      blocks: [
        {
          type: "bullets",
          items: [
            "Stimuleringsmønster: pulsrytme, pauser og bølgeform kan gjøre opplevelsen mykere, tettere eller mer markant.",
            "Intensitet: høyere nivå gjør vanligvis stimuleringen lettere å merke, men komfort er fortsatt en viktig grense.",
            "Kontakt: passform, jevn kontakt og forberedelse av kontaktflaten påvirker hvor stabilt stimuleringen merkes.",
            "Individuell følsomhet: øreform, hudfølsomhet og foretrukket nivå varierer mellom personer.",
          ],
        },
      ],
    },
    {
      id: "komfort-og-stopp",
      eyebrow: "Praktisk beslutning",
      title:
        "Begynn lavt, sjekk kontakt og bruk komfort som grense – ikke jag maksimal følelse",
      blocks: [
        {
          type: "numbered",
          items: [
            "Kontroller kontakt og plassering slik produktets egne instrukser beskriver.",
            "Start med lav intensitet og øk gradvis.",
            "Hold stimuleringen tydelig merkbar, men komfortabel, når produktinstruksen bruker denne rammen.",
            "Reduser, ta pause eller stopp dersom stimuleringen blir ubehagelig, smertefull eller du føler deg uvel.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Produktets egne instrukser gjelder",
          paragraphs: [
            "En generell kunnskapsartikkel kan ikke erstatte produktspesifikke grenser for plassering, intensitet, stoppråd eller hvem som bør søke medisinsk veiledning.",
          ],
        },
      ],
    },
    {
      id: "forskning-og-rapporteringsstandard",
      eyebrow: "Forskningsgrense",
      title:
        "God VNS-forskning beskriver mer enn bare om deltakeren kjente prikking",
      blocks: [
        {
          type: "paragraph",
          text: "Internasjonale rapporteringsanbefalinger for tVNS ber forskere beskrive blant annet stimuleringssted, elektrode, enhet, frekvens, pulsbredde, intensitet, dosering, deltakerkriterier, utfall og bivirkninger. Dette gjør det mulig å forstå hva en sensasjonsbeskrivelse faktisk tilhører.",
        },
        {
          type: "paragraph",
          text: "Tekniske taVNS-protokoller beskriver også hvordan elektrodeplassering, persepsjonsterskel og kontaktforhold påvirker administrasjonen. Derfor er «det prikker» for lite informasjon til å sammenligne to protokoller eller to produkter.",
        },
      ],
    },
    {
      id: "sensasjon-og-bivirkning",
      eyebrow: "Ikke samme kategori",
      title:
        "Forventet stimulussensasjon skal skilles fra ubehag og uønskede hendelser",
      blocks: [
        {
          type: "paragraph",
          text: "Mild prikking kan være en forventet del av elektrisk stimulering. Øresmerte, vedvarende hudirritasjon, hodepine eller annet ubehag er derimot reaksjoner som bør registreres og tolkes som del av tolerabilitets- og sikkerhetsbildet.",
        },
        {
          type: "paragraph",
          text: "Systematiske oversikter over tVNS og taVNS beskriver generelt god tolerabilitet under studerte forhold, samtidig som rapporteringen av uønskede hendelser varierer betydelig mellom studier.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Sensasjon beviser ikke effekt",
          paragraphs: [
            "At en stimulering kjennes, viser ikke alene at den ønskede nervebanen er selektivt aktivert.",
            "Det viser heller ikke at en sterkere sensasjon vil gi et bedre utfall.",
          ],
        },
      ],
    },
  ],

  sources: [
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
        "Rapporteringsstandarder for tVNS, inkludert sted, enhet, tekniske parametre, deltakere, utfall og bivirkninger.",
    },
    {
      id: "badran-2019-laboratory-tavns",
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
        "Teknisk beskrivelse av aurikulær stimulering, elektrodeplassering, elektriske parametre og persepsjonsterskler.",
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
        "Systematisk oversikt over bivirkninger og tolerabilitet ved taVNS.",
    },
    {
      id: "redgrave-2018-tvns-safety",
      authors: "Redgrave J et al.",
      title:
        "Safety and tolerability of Transcutaneous Vagus Nerve stimulation in humans; a systematic review",
      publication: "Brain Stimulation",
      year: 2018,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/30217648/",
      doi: "10.1016/j.brs.2018.08.010",
      pmid: "30217648",
      note:
        "Bred systematisk oversikt over sikkerhet og tolerabilitet ved transkutan VNS.",
    },
  ],

  relatedSlugs: [
    "ikke-invasiv-vagusnervestimulering",
    "aurikulaer-vagusnervestimulering",
    "bivirkninger-ved-ikke-invasiv-vagusnervestimulering",
    "er-vagusnervestimulering-trygt",
  ],
  relatedLinks: [
    {
      title: "Neuvago produkt",
      description:
        "Se produktspesifikk informasjon om enhet, intensitet, ørekomponent og stimuleringsmoduser.",
      href: "/no/produkt",
      label: "Utforsk produktet",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan enhet, plassering, intensitet og øktstruktur beskrives for Neuvago.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan det fungerer",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Gå til forskningslaget for bivirkninger, tolerabilitet og metodiske begrensninger.",
      href: "/no/forskning/sikkerhet-og-tolerabilitet",
      label: "Utforsk sikkerhetsforskning",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
