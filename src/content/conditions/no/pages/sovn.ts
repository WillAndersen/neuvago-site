import type { NorwegianConditionPage } from "@/content/conditions/no/types";

export const sovnConditionPage = {
  slug: "sovn",
  path: "/no/tilstander/sovn",
  status: "published",
  wave: "1C",
  order: 20,

  title:
    "Søvn og nervesystemet – nedtrapping, døgnrytme og restitusjon",
  seoTitle:
    "Søvn og nervesystemet | Nedtrapping og døgnrytme | Neuvago",
  description:
    "Forstå søvntrykk, døgnrytme, kveldens aktivering og vanlige søvnmønstre – med trygge råd, behandlingsgrenser og en rolig velværepathway.",
  eyebrow: "Søvn, nedtrapping og restitusjon",
  lead:
    "Søvn er ikke bare et spørsmål om å være sliten nok. Den formes av samspillet mellom søvntrykk, døgnrytme, lys, aktivitet, kroppslig tilstand, forventning og hvor lett hjernen og kroppen skifter ut av dagens krav. En rolig kveldsrutine kan støtte overgangen, men vedvarende søvnvansker, søvnapné og andre søvnsykdommer trenger en mer spesifikk vurdering. Denne siden skiller derfor mellom hverdagslig søvnstøtte, klinisk insomni, andre søvnforstyrrelser og hva Neuvago kan og ikke kan påstå.",
  shortAnswer: [
    "Søvn styres blant annet av et søvntrykk som bygger seg opp mens du er våken, og en døgnrytme som påvirker når kroppen er mest klar for søvn og våkenhet.",
    "En dårlig natt eller en kort periode med søvnvansker er vanlig og betyr ikke automatisk at nervesystemet er skadet.",
    "Stress, smerte, sykdom, lys, skiftarbeid, koffein, alkohol, legemidler og søvnvaner kan påvirke både innsovning, oppvåkninger og dagsform.",
    "Ved kronisk insomni er flerkomponent kognitiv atferdsterapi for insomni, CBT-I, anbefalt førstelinjebehandling; generelle søvnråd alene er vanligvis ikke nok.",
    "Neuvago kan inngå i en rolig kveldsrutine, men er ikke en insomnibehandling, søvndiagnose, søvntracker eller erstatning for klinisk søvnhjelp.",
  ],
  hubSummary:
    "En norsk søvn-pathway fra søvntrykk og døgnrytme til kveldens aktivering, vanlige søvnmønstre, CBT-I, søvnapné, wearables, taVNS-forskning og tydelige velværegrenser.",
  hubLabel: "Norsk hovedside",

  primaryKeyword: "søvn nervesystemet",
  secondaryKeywords: [
    "søvn og nervesystemet",
    "søvn og stress",
    "søvnvansker",
    "vanskelig å sovne",
    "våkner om natten",
    "våkner for tidlig",
    "ikke uthvilt etter søvn",
    "døgnrytme",
    "søvntrykk",
    "kveldsrutine",
    "nedtrapping før søvn",
    "wired but tired",
    "trøtt men får ikke sove",
    "insomni",
    "CBT-I",
    "søvnhygiene",
    "søvntracker",
    "HRV og søvn",
    "vagusnerven og søvn",
    "vagusnervestimulering søvn",
  ],

  publishedAt: "2026-08-22",
  modifiedAt: "2026-08-22",
  readingTimeMinutes: 24,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/conditions/sleep",
  sitemapPriority: 0.9,
  changeFrequency: "weekly",

  pathway: {
    eyebrow: "Søvn-pathway",
    title: "Fra kveldens aktivering til riktig neste steg",
    description:
      "Pathwayen hjelper leseren å skille mellom en kortvarig urolig kveld, døgnrytme og søvntrykk, vedvarende insomni, mulig søvnsykdom og en enkel velværerutine.",
    steps: [
      {
        number: "01",
        title: "Avklar mønster og sikkerhet",
        description:
          "Er problemet innsovning, oppvåkninger, tidlig oppvåkning, farlig søvnighet, snorking og pustestopp, smerte eller en uvanlig nattlig hendelse?",
      },
      {
        number: "02",
        title: "Forankre dagen",
        description:
          "Stå opp omtrent samme tid, få dagslys og aktivitet, og vurder koffein, lur, alkohol, skiftarbeid og andre forhold som påvirker rytmen.",
      },
      {
        number: "03",
        title: "Lag en rolig overgang",
        description:
          "Reduser krav og lys gradvis, avslutt problemløsning, og velg en enkel rutine som ikke gjør søvn til en prestasjon.",
        href: "/no/kunnskap/hvordan-roe-ned-nervesystemet",
        label: "Se praktiske reguleringsstrategier",
      },
      {
        number: "04",
        title: "Vurder varighet og funksjon",
        description:
          "Dersom søvnvanskene varer, påvirker dagsfunksjonen eller gir mistanke om søvnsykdom, gå videre til fastlege, CBT-I eller annen relevant utredning.",
      },
    ],
  },

  sections: [
    {
      id: "hva-er-sovn",
      eyebrow: "Mer enn fravær av våkenhet",
      title: "Hva er søvn?",
      blocks: [
        {
          type: "paragraph",
          text: "Søvn er en aktiv biologisk tilstand med regelmessige endringer i hjerneaktivitet, muskeltonus, pust, hjerterytme, temperatur og respons på omgivelsene. Gjennom natten beveger søvnen seg mellom non-REM-stadier og REM-søvn i gjentatte sykluser.",
        },
        {
          type: "paragraph",
          text: "Søvn bidrar til blant annet læring, hukommelse, emosjonell bearbeiding, metabolsk regulering, immunfunksjon og restitusjon. Det betyr ikke at hvert søvnstadium har én enkel oppgave, eller at en forbrukerenhet kan måle alle disse prosessene presist.",
        },
        {
          type: "definition",
          term: "Søvnkontinuitet",
          definition:
            "Hvor sammenhengende søvnperioden er, inkludert innsovning, oppvåkninger og hvor mye tid som faktisk tilbringes sovende mens man ligger i sengen.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Søvnkvalitet er mer enn antall timer",
          paragraphs: [
            "Varighet, timing, regelmessighet, kontinuitet og dagsfunksjon gir til sammen et mer nyttig bilde.",
            "En enkelt natt eller en enkelt klokkescore kan ikke oppsummere hele søvnhelsen.",
          ],
        },
      ],
    },
    {
      id: "sovntrykk-og-dognrytme",
      eyebrow: "To prosesser virker sammen",
      title: "Søvntrykk og døgnrytme forklarer hvorfor du kan være trøtt uten å sovne",
      blocks: [
        {
          type: "paragraph",
          text: "En sentral modell beskriver søvn som et samspill mellom en homeostatisk prosess og en døgnrytmeprosess. Søvntrykket bygger seg vanligvis opp mens du er våken og reduseres under søvn. Døgnrytmen organiserer når kroppen biologisk fremmer våkenhet og når den fremmer søvn.",
        },
        {
          type: "table",
          caption: "Forenklet toprosessmodell",
          columns: ["Prosess", "Hva den beskriver", "Praktisk eksempel"],
          rows: [
            [
              "Søvntrykk – prosess S",
              "Behovet for søvn som øker med tiden våken og faller under søvn",
              "En lang eller sen lur kan redusere søvntrykket ved vanlig leggetid",
            ],
            [
              "Døgnrytme – prosess C",
              "Et omtrent 24-timers signal som påvirkes av kroppens biologiske klokke og tidsmarkører som lys",
              "En forskjøvet rytme kan gjøre deg våken sent selv etter en lang dag",
            ],
            [
              "Samspillet",
              "Når søvntrykk og døgnrytme sammen gjør søvn mer eller mindre sannsynlig",
              "Du kan være utslitt, men fortsatt ligge i en biologisk våkenhetsperiode",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Toprosessmodellen er et rammeverk – ikke en personlig måling",
          paragraphs: [
            "Modellen er sentral i søvnforskning og forklarer mange mønstre i timing og søvnintensitet.",
            "Den kan ikke brukes til å beregne en persons eksakte søvntrykk eller døgnrytme fra én vanlig klokke eller app.",
          ],
        },
      ],
    },
    {
      id: "hvor-mye-sovn",
      eyebrow: "Behov varierer",
      title: "Hvor mye søvn trenger voksne?",
      blocks: [
        {
          type: "paragraph",
          text: "En felles konsensus fra American Academy of Sleep Medicine og Sleep Research Society anbefaler at voksne regelmessig sover minst sju timer per natt for å fremme optimal helse. Mange voksne fungerer best rundt sju til ni timer, men individuelt behov, alder, helse og livssituasjon spiller inn.",
        },
        {
          type: "paragraph",
          text: "Tid i sengen er ikke det samme som tid sovende. Et menneske som ligger ni timer i sengen med mange oppvåkninger, har ikke nødvendigvis sovet ni timer. Samtidig bør søvn ikke bli en konkurranse om et perfekt tall.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Et anbefalt område er ikke en diagnosegrense",
          paragraphs: [
            "Noen trenger mer søvn i perioder med sykdom, graviditet, høy belastning eller restitusjon.",
            "Vedvarende svært kort eller svært lang søvn sammen med funksjonsplager bør vurderes i kontekst.",
          ],
        },
      ],
    },
    {
      id: "vanlige-sovnmonstre",
      eyebrow: "Mønster før forklaring",
      title: "Hvilke søvnmønstre er vanlige å kjenne igjen?",
      blocks: [
        {
          type: "table",
          caption: "Vanlige mønstre og mulige neste spørsmål",
          columns: ["Mønster", "Hvordan det kan oppleves", "Hva som bør vurderes"],
          rows: [
            [
              "Vansker med å sovne",
              "Trøtt, men mentalt eller kroppslig våken ved leggetid",
              "Døgnrytme, koffein, bekymring, lys, smerte, lur og tid i sengen",
            ],
            [
              "Hyppige oppvåkninger",
              "Søvnen føles lett, fragmentert eller vanskelig å gjenoppta",
              "Miljø, alkohol, smerte, overgangsalder, pustestopp, vannlating og andre medisinske forhold",
            ],
            [
              "Tidlig oppvåkning",
              "Våkner tidligere enn ønsket og får ikke sove igjen",
              "Døgnrytme, depresjon, stress, tidlig leggetid og samlet søvnbehov",
            ],
            [
              "Ikke uthvilt",
              "Har sovet, men føler lav kapasitet eller søvnighet på dagtid",
              "Søvnlengde, kontinuitet, søvnapné, legemidler, sykdom, depresjon og andre søvnforstyrrelser",
            ],
            [
              "Uregelmessig rytme",
              "Søvn og oppvåkning flytter seg mye mellom dager",
              "Skiftarbeid, sosial jetlag, lys, aktivitet og døgnrytmeforstyrrelse",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Samme symptom kan ha ulike årsaker",
          paragraphs: [
            "En søvnside kan hjelpe med orientering, men kan ikke fastslå om problemet er insomni, søvnapné, døgnrytmeforstyrrelse, en annen sykdom eller en kortvarig reaksjon.",
          ],
        },
      ],
    },
    {
      id: "sovnighet-tretthet-og-aktivering",
      eyebrow: "Ord som ofte blandes",
      title: "Søvnighet, tretthet og «wired but tired» er ikke helt det samme",
      blocks: [
        {
          type: "definition",
          term: "Søvnighet",
          definition:
            "En økt tendens til å sovne, særlig i rolige eller monotone situasjoner.",
        },
        {
          type: "definition",
          term: "Tretthet eller fatigue",
          definition:
            "En opplevelse av lav energi eller redusert kapasitet som ikke nødvendigvis innebærer at man faktisk sovner.",
        },
        {
          type: "paragraph",
          text: "Noen er både slitne og aktiverte om kvelden. Tanker kan gå raskt, musklene kan være spente, og oppmerksomheten kan fortsette å overvåke problemer selv om kroppen trenger hvile. Dette beskrives ofte som «wired but tired».",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Riktig ord gir et bedre neste steg",
          paragraphs: [
            "Farlig søvnighet under bilkjøring krever et annet tiltak enn mental uro ved leggetid.",
            "Vedvarende fatigue kan også skyldes sykdom eller psykiske plager og bør ikke automatisk forklares med søvn eller vagusnerven.",
          ],
        },
      ],
    },
    {
      id: "stress-og-sovn",
      eyebrow: "Toveis påvirkning",
      title: "Stress kan forstyrre søvn – og dårlig søvn kan gjøre belastning tyngre",
      blocks: [
        {
          type: "paragraph",
          text: "Bekymring, konflikt, tidskrav og kroppslig aktivering kan gjøre det vanskeligere å skifte til søvn. Søvnmangel og døgnrytmeforstyrrelse kan samtidig påvirke oppmerksomhet, emosjonsregulering, smerteopplevelse og hvordan nye krav håndteres.",
        },
        {
          type: "paragraph",
          text: "Dette kan utvikle seg til en sirkel der personen prøver stadig hardere å sove, bruker mer tid i sengen, overvåker klokken og blir mer frustrert. Da kan selve søvnforsøket begynne å opprettholde våkenhet.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Stress er relevant, men ikke en fullstendig søvndiagnose",
          paragraphs: [
            "Søvnapné, rastløse bein, smerte, legemidler, depresjon, mani, overgangsalder og andre forhold kan gi eller forsterke søvnproblemer.",
            "Les stress-pathwayen for en bredere vurdering av belastning og aktivering.",
          ],
        },
      ],
    },
    {
      id: "dognrytme-og-lys",
      eyebrow: "Timing er en del av søvnen",
      title: "Døgnrytmen påvirkes av lys, tidspunkter og regelmessighet",
      blocks: [
        {
          type: "paragraph",
          text: "Lys er en viktig tidsmarkør for den biologiske klokken. Dagslys tidlig på dagen kan bidra til å forankre rytmen, mens kraftig lys sent kan forsinke søvntiming hos enkelte. Effekten avhenger av tidspunkt, intensitet, varighet og personens eksisterende rytme.",
        },
        {
          type: "numbered",
          items: [
            "Prioriter et relativt stabilt oppvåkningstidspunkt.",
            "Få dagslys og gjerne bevegelse tidlig i våkenperioden.",
            "La lys og aktivitet bli roligere mot slutten av kvelden.",
            "Unngå å behandle alle skjermer som identiske; både lysstyrke, innhold og tidsbruk kan spille inn.",
            "Ved tydelig forsinket eller fremskyndet rytme kan spesifikk døgnrytmebehandling være mer relevant enn generelle søvnråd.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Lysbehandling må tidsstyres",
          paragraphs: [
            "Lys på feil tidspunkt kan flytte døgnrytmen i uønsket retning.",
            "Ved bipolar lidelse, øyesykdom eller betydelig døgnrytmeforstyrrelse bør lysbehandling vurderes med faglig veiledning.",
          ],
        },
      ],
    },
    {
      id: "kveldens-overgang",
      eyebrow: "En rutine er et signal, ikke en soveknapp",
      title: "En god kveldsrutine gjør overgangen tydeligere uten å gjøre søvn til en prestasjon",
      blocks: [
        {
          type: "paragraph",
          text: "En nedtrappingsrutine kan redusere samtidige krav og gi et mer gjenkjennelig skifte fra arbeid og problemløsning til hvile. Den virker ikke fordi én bestemt aktivitet garanterer søvn, men fordi gjentakelse, timing og lavere aktivering kan gjøre overgangen mer forutsigbar.",
        },
        {
          type: "numbered",
          items: [
            "Avslutt krevende oppgaver og beslutninger på et definert tidspunkt.",
            "Skriv ned neste dags oppgaver dersom hodet fortsetter å holde dem aktive.",
            "Demp lys og varsler gradvis fremfor å forsøke et brått skifte.",
            "Velg én eller to rolige aktiviteter som faktisk føles enkle.",
            "Gå til sengs når søvnigheten er tydeligere, ikke bare fordi klokken sier at du må sove nå.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Rutinen skal redusere press",
          paragraphs: [
            "Hvis kveldsrutinen blir et omfattende ritual som må gjennomføres perfekt, kan den øke overvåkning og bekymring.",
          ],
        },
      ],
    },
    {
      id: "koffein-alkohol-og-andre-stoffer",
      eyebrow: "Kjemiske påvirkninger",
      title: "Koffein, alkohol, nikotin og legemidler kan endre søvnen",
      blocks: [
        {
          type: "table",
          caption: "Vanlige påvirkninger som ofte undervurderes",
          columns: ["Faktor", "Mulig påvirkning", "Praktisk vurdering"],
          rows: [
            [
              "Koffein",
              "Kan forlenge innsovning, redusere total søvntid og påvirke dyp søvn",
              "Tidspunkt og dose betyr mye; følsomhet varierer mellom personer",
            ],
            [
              "Alkohol",
              "Kan gjøre innsovning lettere, men fragmentere senere søvn og forverre snorking eller pustestopp",
              "Ikke bruk alkohol som søvnbehandling",
            ],
            [
              "Nikotin",
              "Er stimulerende og abstinens gjennom natten kan også forstyrre søvn",
              "Se søvnen i sammenheng med samlet nikotinbruk",
            ],
            [
              "Legemidler og rusmidler",
              "Kan gi søvnighet, uro, livlige drømmer, rastløshet eller endret pust",
              "Ikke endre reseptbelagte legemidler uten å rådføre deg med forskriver",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Koffeineffekten kan vare langt inn i kvelden",
          paragraphs: [
            "En systematisk oversikt og metaanalyse fant redusert søvntid og søvneffektivitet etter koffein, med stor betydning av dose og hvor lenge før leggetid det ble inntatt.",
            "Et universelt klokkeslett passer ikke alle, men koffein sent på dagen er en konkret faktor å teste.",
          ],
        },
      ],
    },
    {
      id: "aktivitet-lur-og-sovntrykk",
      eyebrow: "Dagen påvirker natten",
      title: "Aktivitet og lur kan støtte eller svekke søvntrykket",
      blocks: [
        {
          type: "paragraph",
          text: "Regelmessig fysisk aktivitet kan støtte helse, humør og søvn, men intens trening tett på leggetid oppleves ulikt. En lur kan være nyttig ved søvnmangel eller spesielle behov, men en lang eller sen lur kan redusere søvntrykket før natten.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Ikke bruk søvndeprivasjon som et selvforsøk",
          paragraphs: [
            "Søvnrestriksjon i CBT-I er en strukturert behandlingskomponent og er ikke det samme som å holde seg våken lengst mulig.",
            "Personer med blant annet bipolar lidelse, epilepsi, farlig søvnighet eller enkelte medisinske tilstander trenger særskilt vurdering før søvntiden begrenses.",
          ],
        },
      ],
    },
    {
      id: "sovnhygiene-og-behandling",
      eyebrow: "Gode vaner er ikke hele behandlingen",
      title: "Søvnhygiene kan støtte søvn, men behandler ikke nødvendigvis kronisk insomni alene",
      blocks: [
        {
          type: "paragraph",
          text: "Søvnhygiene omfatter vaner og omgivelser som regelmessighet, lys, koffein, alkohol, aktivitet, temperatur og et egnet sovemiljø. Dette er et nyttig grunnlag, særlig ved kortvarige eller tydelig vaneutløste problemer.",
        },
        {
          type: "paragraph",
          text: "Ved kronisk insomni anbefaler American Academy of Sleep Medicine flerkomponent kognitiv atferdsterapi for insomni, CBT-I. Retningslinjen foreslår at søvnhygiene ikke brukes som eneste behandlingskomponent.",
        },
        {
          type: "table",
          caption: "Hva CBT-I vanligvis kan inneholde",
          columns: ["Komponent", "Formål", "Viktig grense"],
          rows: [
            [
              "Stimulus-kontroll",
              "Styrke forbindelsen mellom seng og søvn fremfor frustrert våkenhet",
              "Må tilpasses helse, sikkerhet og livssituasjon",
            ],
            [
              "Søvntidsbegrensning",
              "Konsolidere søvnen ved å justere tiden i seng",
              "Bør gjennomføres strukturert og kan være uegnet uten faglig vurdering",
            ],
            [
              "Kognitivt arbeid",
              "Redusere katastrofetanker, overvåkning og urealistiske søvnkrav",
              "Er mer enn positiv tenkning eller å presse frem ro",
            ],
            [
              "Avspenning",
              "Redusere unødvendig kroppslig eller mental aktivering",
              "Er én del av behandlingen, ikke nødvendigvis hele løsningen",
            ],
            [
              "Søvnhygiene og opplæring",
              "Rydde i konkrete påvirkningsfaktorer og forstå søvnregulering",
              "Anbefales ikke som eneste behandling ved kronisk insomni",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "CBT-I er førstelinje ved kronisk insomni",
          paragraphs: [
            "AASM gir en sterk anbefaling for flerkomponent CBT-I hos voksne med kronisk insomni.",
            "American College of Physicians anbefaler også CBT-I som initial behandling før legemidler vurderes sammen med pasienten.",
          ],
        },
      ],
    },
    {
      id: "insomni-og-andre-sovnsykdommer",
      eyebrow: "Riktig problem trenger riktig pathway",
      title: "Insomni er ikke det samme som alle former for dårlig søvn",
      blocks: [
        {
          type: "paragraph",
          text: "Insomni innebærer vedvarende vansker med å sovne, opprettholde søvn eller våkne tidligere enn ønsket, til tross for tilstrekkelig mulighet for søvn, sammen med plager eller redusert funksjon på dagtid.",
        },
        {
          type: "table",
          caption: "Andre søvnproblemer som kan kreve en annen vurdering",
          columns: ["Mulig problem", "Tegn som kan være relevante", "Vanlig neste nivå"],
          rows: [
            [
              "Søvnapné",
              "Høy snorking, observerte pustestopp, gisping, morgenhodepine eller uttalt søvnighet",
              "Fastlege og eventuell søvnutredning",
            ],
            [
              "Rastløse bein",
              "Ubehag og trang til å bevege beina, særlig i ro og om kvelden",
              "Medisinsk vurdering og årsaksutredning",
            ],
            [
              "Døgnrytmeforstyrrelse",
              "Søvnen fungerer bedre på svært andre tidspunkter enn hverdagen tillater",
              "Kartlegging av rytme, lys og timing",
            ],
            [
              "Parasomni",
              "Uvanlige handlinger, rop, voldsom bevegelse eller forvirring under søvn",
              "Vurdering av sikkerhet, legemidler og eventuell søvnmedisin",
            ],
            [
              "Narkolepsi eller annen hypersomni",
              "Uttalt søvntrang, søvnanfall eller andre karakteristiske symptomer",
              "Fastlege og spesialistutredning",
            ],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Pustestopp og farlig søvnighet skal ikke løses med en kveldsrutine",
          paragraphs: [
            "Helsenorge anbefaler legeutredning ved søvnforstyrrelser når søvnapné kan være en forklaring.",
            "Ikke kjør bil eller utfør risikofylt arbeid dersom du har problemer med å holde deg våken.",
          ],
        },
      ],
    },
    {
      id: "sovntrackere-og-data",
      eyebrow: "Måling kan hjelpe og forstyrre",
      title: "Hva kan smartklokker og søvntrackere egentlig fortelle?",
      blocks: [
        {
          type: "paragraph",
          text: "Forbrukerenheter estimerer søvn fra signaler som bevegelse, puls, pulsbølge, temperatur og algoritmer. De kan være nyttige for å se grove mønstre i leggetid, oppvåkningstid og regelmessighet, men de måler vanligvis ikke søvn på samme måte som polysomnografi.",
        },
        {
          type: "paragraph",
          text: "American Academy of Sleep Medicine har understreket at forbrukerteknologi ikke skal brukes alene til å diagnostisere eller behandle søvnforstyrrelser. Data kan derimot bidra i en samtale med helsepersonell når de tolkes sammen med symptomer og klinisk vurdering.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Unngå at søvnscoren blir et nytt våkenhetsproblem",
          paragraphs: [
            "Dersom måling gjør deg mer urolig, mer opptatt av perfekte stadier eller mindre trygg på egen opplevelse, kan en pause fra trackingen være nyttig.",
            "Neuvago måler ikke søvn, søvnstadier eller insomni.",
          ],
        },
      ],
    },
    {
      id: "hrv-vagus-og-sovn",
      eyebrow: "Indirekte mål og komplekse mekanismer",
      title: "HRV og vagusnerven kan gi kontekst, men ikke en komplett søvnscore",
      blocks: [
        {
          type: "paragraph",
          text: "Søvn er forbundet med endringer i autonom regulering gjennom natten, og HRV brukes i forskning for å studere kardiale mønstre. Men HRV påvirkes også av pust, søvnstadium, puls, alder, alkohol, sykdom, rytmeforstyrrelser og sensor.",
        },
        {
          type: "paragraph",
          text: "Vagusnerven inngår i reguleringen av flere organer og i sensorisk kommunikasjon mellom kropp og hjerne. Søvn kan likevel ikke reduseres til «vagal tone», og en høy eller lav HRV-verdi forklarer ikke alene hvorfor en person sover dårlig.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Søvn, HRV og vagus er tre overlappende – men ulike – temaer",
          paragraphs: [
            "Bruk HRV som et indirekte fysiologisk mål under definerte forhold, ikke som diagnose av søvn eller nervesystem.",
            "Les HRV-guiden før du tolker nattlige wearable-data.",
          ],
        },
      ],
    },
    {
      id: "tavns-og-insomni-forskning",
      eyebrow: "Et voksende forskningsfelt",
      title: "Hva viser forskning på taVNS og insomni?",
      blocks: [
        {
          type: "paragraph",
          text: "Transkutan aurikulær vagusnervestimulering undersøkes som mulig behandling ved insomni og andre søvnforstyrrelser. Nyere randomiserte studier og metaanalyser har rapportert forbedringer på selvrapporterte søvnskalaer sammenlignet med sham.",
        },
        {
          type: "paragraph",
          text: "Samtidig er evidensen begrenset av små utvalg, heterogene protokoller, ulik sham, mange studier fra få miljøer og stor vekt på subjektive utfall. En metaanalyse fra 2025 vurderte evidensen for PSQI som lav og for ISI som svært lav.",
        },
        {
          type: "paragraph",
          text: "En nyere systematisk oversikt med flere randomiserte studier rapporterte også positive samlede resultater, men understreket heterogenitet og begrenset klinisk tolkbarhet. Feltet er derfor lovende, men ikke et grunnlag for å generalisere til enhver ørebasert enhet.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Forskningsresultater må følge den konkrete enheten og protokollen",
          paragraphs: [
            "Studier av klinisk taVNS ved diagnostiserte søvnforstyrrelser dokumenterer ikke automatisk Neuvago.",
            "Neuvago er ikke posisjonert som insomnibehandling, og produktpåstander må bygge på direkte relevant produktdokumentasjon.",
          ],
        },
      ],
    },
    {
      id: "en-praktisk-kveldssekvens",
      eyebrow: "En rolig velværesekvens",
      title: "En enkel kveldssekvens uten løfte om perfekt søvn",
      blocks: [
        {
          type: "numbered",
          items: [
            "Bestem når dagens krevende oppgaver og problemløsning skal avsluttes.",
            "Skriv ned det du må huske, slik at sengen ikke blir planleggingssted.",
            "Demp lys, varsler og krevende innhold gradvis.",
            "Velg en rolig aktivitet, for eksempel lett lesing, dusj, rolig musikk eller en kort reguleringsøvelse.",
            "Gå til sengs når søvnigheten øker, og unngå å overvåke klokken kontinuerlig.",
            "Hold oppvåkningstidspunktet relativt stabilt neste morgen selv etter en mindre god natt.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Målet er en tydelig overgang – ikke å tvinge frem søvn",
          paragraphs: [
            "Søvn er ikke en viljestyrt prestasjon. Rutinen skal gjøre forholdene mer støttende og redusere presset.",
          ],
        },
      ],
    },
    {
      id: "nar-du-bor-soke-hjelp",
      eyebrow: "Norsk hjelpenivå",
      title: "Når bør søvnvansker tas opp med fastlegen eller annet helsepersonell?",
      blocks: [
        {
          type: "bullets",
          items: [
            "Når søvnvanskene varer over tid og påvirker arbeid, skole, humør, konsentrasjon eller sikkerhet.",
            "Ved høy snorking, observerte pustestopp, gisping eller betydelig søvnighet på dagtid.",
            "Ved søvnanfall, uvanlige nattlige handlinger, voldsom bevegelse, kramper eller skadefare.",
            "Ved vedvarende rastløshet i beina, sterke smerter, overgangsplager eller andre kroppslige symptomer som forstyrrer søvnen.",
            "Når søvnen endres tydelig sammen med mani, alvorlig depresjon, rusbruk eller selvmordstanker.",
            "Når du vurderer sovemedisin, melatonin eller andre behandlingsprodukter og trenger hjelp til riktig indikasjon, timing og risiko.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Søk akutt hjelp ved alvorlig psykisk eller fysisk fare",
          paragraphs: [
            "Ring 113 ved akutt selvmordsfare, alvorlig pustevansker, bevissthetstap eller annen fare for liv og helse.",
            "Ring legevakt 116 117 når hjelpen ikke kan vente til fastlegen er tilgjengelig, men situasjonen ikke virker livstruende.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Norsk lavterskelhjelp finnes flere steder",
          paragraphs: [
            "Helsenorge beskriver selvhjelpskurs for kortvarige og langvarige søvnvansker, og enkelte kommuner tilbyr Rask psykisk helsehjelp eller søvnkurs.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige produktgrenser",
      title: "Hvordan kan Neuvago inngå i en kveldsrutine?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er et eksternt, ørebasert velværesystem med justerbar stimulering og en separat app for veiledede rutiner. Systemet kan brukes som en strukturert overgang ut av dagen, sammen med roligere lys, færre krav og andre enkle kveldsvalg.",
        },
        {
          type: "paragraph",
          text: "Produktbroen skal være beskjeden. Neuvago er ikke en søvnmedisinsk undersøkelse, måler ikke søvnstadier og er ikke ment å diagnostisere eller behandle insomni, søvnapné, døgnrytmeforstyrrelser eller andre søvnsykdommer.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Kveldsrutine – ikke behandlingsløfte",
          paragraphs: [
            "Neuvago skal ikke love raskere innsovning, flere timer søvn, økt dyp søvn, normalisert HRV, lavere kortisol eller behandlingseffekt ved insomni.",
            "Forskning på andre taVNS-enheter og kliniske protokoller er forskningskontekst, ikke automatisk Neuvago-dokumentasjon.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Følg gjeldende produktinformasjon",
          paragraphs: [
            "Bruk anbefalt plassering og intensitetsområde. Ved aktiv sykdom, implantert elektronisk utstyr, graviditet, hjerterytmeproblemer, anfallshistorikk eller usikkerhet om egnethet bør kvalifisert helsepersonell konsulteres.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "watson-2015-sleep-duration",
      authors:
        "Watson NF, Badr MS, Belenky G, Bliwise DL, Buxton OM, Buysse D, Dinges DF, Gangwisch J, Grandner MA, Kushida C, Malhotra RK, Martin JL, Patel SR, Quan SF, Tasali E",
      title:
        "Recommended Amount of Sleep for a Healthy Adult: A Joint Consensus Statement of the American Academy of Sleep Medicine and Sleep Research Society",
      publication: "Journal of Clinical Sleep Medicine",
      year: 2015,
      type: "official-guidance",
      url: "https://pubmed.ncbi.nlm.nih.gov/25979105/",
      doi: "10.5664/jcsm.4758",
      pmid: "25979105",
      note:
        "Konsensusuttalelse som anbefaler at voksne regelmessig sover minst sju timer per natt for optimal helse, samtidig som individuelt behov varierer.",
    },
    {
      id: "borbely-2016-two-process",
      authors: "Borbély AA, Daan S, Wirz-Justice A, Deboer T",
      title: "The two-process model of sleep regulation: a reappraisal",
      publication: "Journal of Sleep Research",
      year: 2016,
      type: "review",
      url: "https://doi.org/10.1111/jsr.12371",
      doi: "10.1111/jsr.12371",
      note:
        "Oppdatert faglig gjennomgang av samspillet mellom homeostatisk søvntrykk og døgnrytmeprosessen.",
    },
    {
      id: "edinger-2021-cbti-guideline",
      authors:
        "Edinger JD, Arnedt JT, Bertisch SM, Carney CE, Harrington JJ, Lichstein KL, Sateia MJ, Troxel WM, Zhou ES, Kazmi U, Heald JL, Martin JL",
      title:
        "Behavioral and psychological treatments for chronic insomnia disorder in adults: an American Academy of Sleep Medicine clinical practice guideline",
      publication: "Journal of Clinical Sleep Medicine",
      year: 2021,
      type: "official-guidance",
      url: "https://pubmed.ncbi.nlm.nih.gov/33164742/",
      doi: "10.5664/jcsm.8986",
      pmid: "33164742",
      note:
        "Klinisk retningslinje med sterk anbefaling for flerkomponent CBT-I og anbefaling mot søvnhygiene som eneste behandling ved kronisk insomni.",
    },
    {
      id: "queshim-2016-acp-insomnia",
      authors: "Qaseem A, Kansagara D, Forciea MA, Cooke M, Denberg TD",
      title:
        "Management of Chronic Insomnia Disorder in Adults: A Clinical Practice Guideline From the American College of Physicians",
      publication: "Annals of Internal Medicine",
      year: 2016,
      type: "official-guidance",
      url: "https://pubmed.ncbi.nlm.nih.gov/27136449/",
      doi: "10.7326/M15-2175",
      pmid: "27136449",
      note:
        "Retningslinje som anbefaler CBT-I som initial behandling hos voksne med kronisk insomni.",
    },
    {
      id: "gardiner-2023-caffeine-sleep",
      authors:
        "Gardiner C, Weakley J, Burke LM, Roach GD, Sargent C, Maniar N, Townshend A, Halson SL",
      title:
        "The effect of caffeine on subsequent sleep: A systematic review and meta-analysis",
      publication: "Sleep Medicine Reviews",
      year: 2023,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/36870101/",
      doi: "10.1016/j.smrv.2023.101764",
      pmid: "36870101",
      note:
        "Metaanalyse som fant at koffein reduserte søvntid og søvneffektivitet og påvirket innsovning, nattlig våkenhet og søvnstadier.",
    },
    {
      id: "khosla-2018-consumer-sleep-tech",
      authors:
        "Khosla S, Deak MC, Gault D, Goldstein CA, Hwang D, Kwon Y, O'Hearn D, Schutte-Rodin S, Yurcheshen M, Rosen IM, Kirsch DB, Chervin RD, Carden KA, Ramar K, Aurora RN, Kristo DA, Malhotra RK, Martin JL, Olson EJ, Rosen CL, Rowley JA",
      title:
        "Consumer Sleep Technology: An American Academy of Sleep Medicine Position Statement",
      publication: "Journal of Clinical Sleep Medicine",
      year: 2018,
      type: "official-guidance",
      url: "https://pubmed.ncbi.nlm.nih.gov/29734997/",
      doi: "10.5664/jcsm.7128",
      pmid: "29734997",
      note:
        "Posisjonsuttalelse om at forbrukerteknologi ikke skal brukes alene til diagnostikk eller behandling av søvnforstyrrelser.",
    },
    {
      id: "helsenorge-better-sleep",
      authors: "Helsedirektoratet",
      title: "Gode råd for betre søvn",
      publication: "Helsenorge",
      year: 2025,
      type: "official-guidance",
      url: "https://www.helsenorge.no/sovnproblemer/rad-for-bedre-sovn/",
      note:
        "Norsk offentlig informasjon om normal variasjon, regelmessighet, dagslys, aktivitet, koffein og andre praktiske søvnråd.",
    },
    {
      id: "helsenorge-sleep-apnea",
      authors: "Helsedirektoratet",
      title: "Søvnapné",
      publication: "Helsenorge",
      year: 2025,
      type: "official-guidance",
      url: "https://www.helsenorge.no/sykdom/sovnsykdommer/sovnapne/",
      note:
        "Norsk informasjon om pustestopp, snorking, søvnighet, konsentrasjonsplager, utredning og behandling av obstruktiv søvnapné.",
    },
    {
      id: "de-oliveira-2025-tavns-insomnia",
      authors:
        "de Oliveira HM, Gallo Ruelas M, Viana Diaz CA, de Paula GO, da Costa PRF, Pilitsis JG",
      title:
        "Transcutaneous Auricular Vagus Nerve Stimulation in Insomnia: A Systematic Review and Meta-Analysis",
      publication: "Neuromodulation",
      year: 2025,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/40323248/",
      doi: "10.1016/j.neurom.2025.04.001",
      pmid: "40323248",
      note:
        "Metaanalyse av seks studier med 336 deltakere; positive skalaresultater, men lav til svært lav evidenskvalitet og behov for mer forskning.",
    },
    {
      id: "yang-2026-tavns-sleep-disorders",
      authors:
        "Yang T, et al.",
      title:
        "Transcutaneous auricular vagus nerve stimulation for sleep disorders: a systematic review and meta-analysis of sleep, anxiety, depression, and safety outcomes",
      publication: "Journal article indexed in PubMed",
      year: 2026,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/42522355/",
      pmid: "42522355",
      note:
        "Nyere oversikt over 14 randomiserte studier som rapporterte positive samlede utfall, men understreket heterogenitet og begrenset klinisk tolkbarhet.",
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
      title: "Stress og nervesystemet",
      description:
        "Se hvordan belastning, aktivering, søvn og restitusjon kan forsterke hverandre – og hvordan riktig hjelpenivå velges.",
      href: "/no/tilstander/stress",
      label: "Les stress-pathwayen",
    },
    {
      title: "Sleep pathway på engelsk",
      description:
        "Les den eksisterende engelske parallellsiden om evening activation, unwinding, recovery og ansvarlige velværegrenser.",
      href: "/conditions/sleep",
      label: "Les engelsk parallellside",
    },
    {
      title: "taVNS og insomni – systematisk oversikt",
      description:
        "Les Neuvagos studiesammendrag av de Oliveira og kollegers metaanalyse, med evidensgradering og tydelige tolkningsgrenser.",
      href:
        "/research/studies/de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis",
      label: "Les studiesammendraget",
    },
    {
      title: "Autonom regulering – forskning",
      description:
        "Utforsk forskningskonteksten for stress, HRV, parasympatisk regulering, restitusjon og tilstandsskifte.",
      href: "/research/topics/autonomic-regulation",
      label: "Utforsk autonom forskning",
    },
    {
      title: "Neuvago-appen",
      description:
        "Se hvordan appen organiserer rolige, veiledede kveldsrutiner uten å gjøre søvn til et prestasjonsmål.",
      href: "/no/app",
      label: "Utforsk appen",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan ørekomponent, enhet, app og gjentakbar rutine henger sammen innenfor tydelige velværegrenser.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Les hva Neuvago er utviklet for, og hvorfor produktet ikke er ment å diagnostisere eller behandle søvnsykdom.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
  ],

  disclaimer:
    "Generell informasjon om søvn og velvære. Siden er ikke medisinsk rådgivning, diagnose eller behandling og erstatter ikke fastlege, søvnmedisinsk utredning, CBT-I eller akuttjenester.",
} as const satisfies NorwegianConditionPage;
