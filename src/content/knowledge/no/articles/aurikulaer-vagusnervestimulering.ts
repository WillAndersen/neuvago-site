import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const aurikulaerVagusnervestimuleringArticle = {
  slug: "aurikulaer-vagusnervestimulering",
  path: "/no/kunnskap/aurikulaer-vagusnervestimulering",
  status: "published",
  wave: "1A",
  order: 50,

  title:
    "Aurikulær vagusnervestimulering (taVNS) – øreanatomi, plassering og metode",
  seoTitle: "Aurikulær vagusnervestimulering (taVNS) | Neuvago",
  description:
    "Lær hva aurikulær vagusnervestimulering er, hvordan taVNS brukes ved det ytre øret, og hvorfor øreområde, elektrode, parametere, kontrollbetingelser og sikkerhet må beskrives presist.",
  eyebrow: "Kunnskap om aurikulær VNS",
  lead:
    "Aurikulær vagusnervestimulering er den ørebaserte delen av den transkutane VNS-familien. Metoden omtales ofte som taVNS, kort for transkutan aurikulær vagusnervestimulering. Elektriske pulser leveres gjennom hudkontakt ved bestemte områder av det ytre øret. Fordi øret har sammensatt og delvis overlappende nerveforsyning, må plassering, elektrode, side, intensitet og forskningsdesign alltid vurderes som en del av selve metoden.",
  shortAnswer: [
    "Aurikulær VNS betyr ekstern stimulering ved det ytre øret og omtales ofte som taVNS.",
    "Det ytre øret forsynes av flere nerver, og anatomiske kart er ikke helt ensartede eller absolutte.",
    "Cymba conchae, cavum conchae og tragus forekommer i forskning, mens øreflippen ofte brukes som kontrollområde.",
    "Forskning fra ett øreområde, én elektrode eller én protokoll dokumenterer ikke automatisk andre enheter eller Neuvago-produktet.",
  ],
  hubSummary:
    "En fordypning i taVNS, ørets sammensatte nerveforsyning, vanlige stimuleringsområder og hvorfor plassering, kontakt og forskningsdesign er avgjørende.",
  hubLabel: "Ørebasert metode",

  primaryKeyword: "aurikulær vagusnervestimulering",
  secondaryKeywords: [
    "taVNS",
    "transkutan aurikulær vagusnervestimulering",
    "vagusnervestimulering øre",
    "ørebasert vagusnervestimulering",
    "auricular vagus nerve stimulation",
    "aurikulær gren av vagusnerven",
    "ABVN",
    "cymba conchae",
    "cavum conchae",
    "tragus",
    "vagusnerven i øret",
    "øreelektrode vagusnerven",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-17",
  modifiedAt: "2026-08-17",
  readingTimeMinutes: 16,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/auricular-vagus-nerve-stimulation",
  sitemapPriority: 0.88,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-aurikulaer-vagusnervestimulering",
      eyebrow: "Grunnleggende definisjon",
      title: "Hva er aurikulær vagusnervestimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "Aurikulær vagusnervestimulering beskriver ikke-invasiv elektrisk stimulering som leveres ved det ytre øret. Når stimuleringen gis gjennom huden, brukes ofte forkortelsen taVNS: transkutan aurikulær vagusnervestimulering.",
        },
        {
          type: "paragraph",
          text: "Metoden bygger på at deler av øret har sensorisk nerveforsyning som omfatter den aurikulære grenen av vagusnerven. Samtidig er øret også innervert av andre hjernenerver og nerver fra halsregionen. Derfor er det for enkelt å beskrive hele øret som ett ensartet vagusområde.",
        },
        {
          type: "definition",
          term: "taVNS",
          definition:
            "Transkutan aurikulær vagusnervestimulering: elektrisk stimulering gjennom huden ved et øreområde som velges med utgangspunkt i anatomi, metode og den aktuelle enhetens tiltenkte bruk.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort sagt",
          paragraphs: [
            "taVNS er en ørebasert metodefamilie. Et meningsfullt metodeutsagn må også fortelle hvilket øreområde, hvilken elektrode og hvilke innstillinger som ble brukt.",
          ],
        },
      ],
    },
    {
      id: "tavns-tvns-og-nvns",
      eyebrow: "Plass i kategorien",
      title: "Hvordan henger taVNS, tVNS og nVNS sammen?",
      blocks: [
        {
          type: "paragraph",
          text: "nVNS er den brede kategorien for ikke-invasive VNS-metoder. tVNS presiserer at stimuleringen leveres gjennom huden. taVNS presiserer videre at den transkutane stimuleringen skjer ved det ytre øret.",
        },
        {
          type: "table",
          caption: "Begrepene fra bred kategori til spesifikk plassering",
          columns: ["Begrep", "Vanlig betydning", "Hva begrepet ikke avgjør"],
          rows: [
            [
              "nVNS",
              "Ikke-invasiv vagusnervestimulering",
              "Om stimuleringen gis ved øret, halsen eller med en annen metode",
            ],
            [
              "tVNS",
              "Transkutan stimulering gjennom huden",
              "Eksakt anatomisk plassering, elektrode og protokoll",
            ],
            [
              "taVNS",
              "Transkutan aurikulær stimulering ved øret",
              "Hvilket øreområde, hvilken side og hvilke parametere som brukes",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "taVNS er mer spesifikt, men fortsatt ikke én standard",
          paragraphs: [
            "To taVNS-studier kan bruke forskjellige øreområder, elektrodetyper, intensitetsregler, sham-betingelser og målgrupper. De må derfor vurderes som separate protokoller.",
          ],
        },
      ],
    },
    {
      id: "orets-nerveforsyning",
      eyebrow: "Anatomien er sammensatt",
      title: "Hvilke nerver forsyner det ytre øret?",
      blocks: [
        {
          type: "paragraph",
          text: "Det ytre øret har en kompleks sensorisk nerveforsyning. Anatomiske studier beskriver bidrag fra den aurikulære grenen av vagusnerven, den aurikulotemporale grenen av trigeminusnerven, den store ørenerven og mindre occipitale nervegrener. Fordelingen kan være overlappende og variere mellom områder og individer.",
        },
        {
          type: "paragraph",
          text: "En disseksjonsstudie av 14 ører fra sju kadavere fant en heterogen fordeling og viste at den store ørenerven var fremtredende på store deler av både den laterale og mediale øreflaten. Studien illustrerer hvorfor en enkel tegning med skarpe, universelle grenser bør tolkes forsiktig.",
        },
        {
          type: "bullets",
          items: [
            "Aurikulær gren av vagusnerven, ofte forkortet ABVN",
            "Aurikulotemporal nerve fra trigeminusnerven",
            "Stor ørenerv fra cervikalplexus",
            "Mindre occipitale nervegrener",
            "Mulige overlapp mellom nerveområder",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Anatomiske kart er nyttige, men ikke absolutte",
          paragraphs: [
            "Kart over ørets nerveforsyning er et grunnlag for hypoteser og plassering, men de bør ikke brukes som bevis for at enhver kontakt på et bestemt øreområde utelukkende stimulerer én nerve.",
          ],
        },
      ],
    },
    {
      id: "vanlige-oreomrader",
      eyebrow: "Plasseringen må navngis",
      title: "Hvilke øreområder brukes i taVNS-forskning?",
      blocks: [
        {
          type: "paragraph",
          text: "Studier har brukt flere områder av det ytre øret. Cymba conchae, cavum conchae og tragus er blant områdene som ofte omtales i taVNS-litteraturen. Øreflippen brukes ofte som kontroll- eller sham-plassering fordi den vanligvis behandles som et område uten samme vagale begrunnelse.",
        },
        {
          type: "table",
          caption: "Eksempler på øreområder i litteraturen",
          columns: ["Øreområde", "Vanlig rolle i studier", "Viktig forbehold"],
          rows: [
            [
              "Cymba conchae",
              "Aktiv plassering i flere aurikulære protokoller",
              "Funn gjelder den konkrete elektroden og protokollen som ble brukt",
            ],
            [
              "Cavum conchae",
              "Aktiv eller sammenlignende concha-plassering",
              "Nerveforsyning og kontaktgeometri må beskrives",
            ],
            [
              "Tragus",
              "Aktiv plassering i flere laboratorie- og kliniske studier",
              "Eksakt kontaktflate og side av tragus kan variere",
            ],
            [
              "Øreflipp",
              "Ofte sham- eller kontrollplassering",
              "Kontrollen kan fortsatt gi merkbar somatosensorisk stimulering",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Hele øret er ikke ett stimuleringspunkt",
          paragraphs: [
            "Ord som ørebasert eller aurikulær er ikke tilstrekkelige alene. Studien eller produktet bør oppgi eksakt område og hvordan elektroden ligger mot huden.",
          ],
        },
      ],
    },
    {
      id: "elektrode-og-hudkontakt",
      eyebrow: "Kontaktflaten er en del av dosen",
      title: "Hvorfor elektrode, kontaktmiddel og passform betyr noe",
      blocks: [
        {
          type: "paragraph",
          text: "Elektriske pulser må overføres gjennom en fysisk kontaktflate. Elektrodens størrelse, form, materiale, avstand og trykk påvirker strømfordelingen og brukeropplevelsen. Hudmotstand, fuktighet og eventuelt kontaktmiddel kan også endre kontakten.",
        },
        {
          type: "numbered",
          items: [
            "Identifiser øreområdet som protokollen eller bruksanvisningen angir.",
            "Bruk elektrode og kontaktmiddel som hører til den aktuelle enheten.",
            "Sørg for stabil kontakt uten unødig trykk eller smerte.",
            "Fastsett intensiteten etter produktets veiledning eller studiens forhåndsdefinerte metode.",
            "Registrer avbrudd, kontaktproblemer og hudreaksjoner systematisk i forskning.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Ikke improviser med andre elektroder eller plasseringer",
          paragraphs: [
            "En elektrode eller innstilling fra én studie er ikke en generell oppskrift. Følg alltid den aktuelle enhetens bruksanvisning og stopp ved ubehag eller hudreaksjon.",
          ],
        },
      ],
    },
    {
      id: "intensitet-og-opplevelse",
      eyebrow: "Sansenivå er ikke mekanismebevis",
      title: "Hva kan stimuleringen kjennes som?",
      blocks: [
        {
          type: "paragraph",
          text: "Deltakere og brukere kan beskrive prikking, pulsering, trykk, varme eller annen lokal følelse. Opplevelsen påvirkes av elektrode, hudkontakt, intensitet og individuell følsomhet.",
        },
        {
          type: "paragraph",
          text: "En tydelig følelse bekrefter ikke at en bestemt vagal bane er aktivert, og en sterkere følelse betyr ikke nødvendigvis en bedre eller mer virkningsfull økt. I forskning gjør følelsen det også vanskeligere å blinde deltakere for om de får aktiv eller kontrollstimulering.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Komfort er en grense, ikke et prestasjonsmål",
          paragraphs: [
            "Stimulering skal ikke jages opp til sterk smerte. Produktets veiledning og stoppkriterier skal ha forrang fremfor ønsket om en kraftigere sanseopplevelse.",
          ],
        },
      ],
    },
    {
      id: "parametere-og-eksponering",
      eyebrow: "Protokollen må beskrives",
      title: "Hvilke parametere former en taVNS-økt?",
      blocks: [
        {
          type: "paragraph",
          text: "Aurikulær plassering er bare én del av metoden. Frekvens, pulsvidde, intensitet, bølgeform, duty cycle, øktlengde og antall økter påvirker samlet elektrisk eksponering og må rapporteres for at studier skal kunne sammenlignes.",
        },
        {
          type: "table",
          caption: "Sentrale opplysninger i en taVNS-protokoll",
          columns: ["Opplysning", "Eksempel på hva som må beskrives", "Hvorfor det er viktig"],
          rows: [
            ["Plassering", "Cymba, cavum, tragus eller annet område", "Definerer anatomisk mål og kontakt"],
            ["Side", "Venstre, høyre eller bilateral", "Gjør protokollen etterprøvbar"],
            ["Elektrode", "Geometri, materiale og kontaktflate", "Påvirker strømfordeling og komfort"],
            ["Frekvens", "Pulser per sekund", "Påvirker signalets tidsmønster"],
            ["Pulsvidde", "Varighet per puls", "Bidrar til levert elektrisk ladning"],
            ["Intensitet", "Fast verdi eller individuell titrering", "Påvirker tolerabilitet og blinding"],
            ["Øktlengde", "Minutter per økt og antall økter", "Bestemmer samlet eksponering"],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Rapporteringsstandarder er en del av evidenskvaliteten",
          paragraphs: [
            "Internasjonale konsensusanbefalinger fremhever at plassering, enhet, innstillinger, sham, deltakere og sikkerhet må beskrives detaljert. Ufullstendig rapportering gjør funn vanskeligere å gjenta og overføre.",
          ],
        },
      ],
    },
    {
      id: "sham-og-blinding",
      eyebrow: "Kontrollbetingelsen må være troverdig",
      title: "Hvorfor sham og blinding er krevende ved ørestimulering",
      blocks: [
        {
          type: "paragraph",
          text: "En god kontrollbetingelse bør ligne den aktive økten uten å gi den samme antatte målrettingen. I taVNS-studier kan kontrollen være et annet øreområde, en annen intensitet eller en enhet som gir begrenset eller ingen strøm.",
        },
        {
          type: "bullets",
          items: [
            "Aktiv og sham kan kjennes forskjellig.",
            "Øreflippen kan gi tydelig somatosensorisk følelse selv om den brukes som kontroll.",
            "Deltakernes forventninger kan påvirke selvrapporterte utfall.",
            "Forsker eller behandler kan kjenne til tildelingen dersom enheten må stilles inn forskjellig.",
            "Blinding bør vurderes og rapporteres, ikke bare antas.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "En sham er ikke automatisk biologisk inaktiv",
          paragraphs: [
            "Kontrollområdet og kontrollintensiteten kan ha egne sensoriske eller fysiologiske effekter. Resultatet må tolkes ut fra den faktiske sammenligningen studien gjennomførte.",
          ],
        },
      ],
    },
    {
      id: "fmri-og-sentrale-projeksjoner",
      eyebrow: "Mekanismekontekst",
      title: "Hva viser fMRI-studien av cymba conchae?",
      blocks: [
        {
          type: "paragraph",
          text: "En ofte sitert fMRI-studie undersøkte 12 friske voksne. Elektrisk stimulering ved venstre cymba conchae ble sammenlignet med stimulering av øreflippen. Forskerne rapporterte aktivering i flere områder som inngår i sentrale vagale projeksjoner.",
        },
        {
          type: "paragraph",
          text: "Studien er viktig fordi den gir menneskelig mekanismekontekst for tilgang via det ytre øret. Den var samtidig liten, brukte én bestemt plassering, elektrode og parameterkombinasjon og undersøkte hjerneaktivitet under en laboratorieprotokoll.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Hva studien ikke dokumenterer",
          paragraphs: [
            "fMRI-funnene dokumenterer ikke at alle øreområder, alle taVNS-enheter eller alle velværeøkter gir samme aktivering. De dokumenterer heller ikke i seg selv en bestemt klinisk eller personlig effekt.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-og-tolerabilitet",
      eyebrow: "Rapportering må tas på alvor",
      title: "Hva vet vi om sikkerhet og rapporterte hendelser?",
      blocks: [
        {
          type: "paragraph",
          text: "En systematisk gjennomgang og metaanalyse vurderte 177 taVNS-studier med 6322 deltakere. I studiene som kunne inngå i risikosammenligningen, ble det ikke funnet forskjell i samlet risiko for rapporterte hendelser mellom aktiv taVNS og kontroll.",
        },
        {
          type: "paragraph",
          text: "De hyppigst rapporterte hendelsene var øresmerte, hodepine og prikking. Samtidig oppga over halvparten av studiene ikke om hendelser hadde forekommet eller ikke. Mangelfull rapportering begrenser derfor hvor sikkert den samlede tolerabiliteten kan beskrives.",
        },
        {
          type: "bullets",
          items: [
            "Lokalt ubehag eller øresmerte",
            "Prikking eller annen lokal sanseopplevelse",
            "Hodepine",
            "Hudirritasjon eller kontaktproblemer",
            "Avbrudd på grunn av ubehag",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Produktspesifikk sikkerhetsinformasjon har forrang",
          paragraphs: [
            "En generell forskningsoversikt erstatter ikke kontraindikasjoner, advarsler og stoppkriterier for den konkrete enheten. Personer med medisinske problemstillinger bør søke kvalifisert vurdering før bruk.",
          ],
        },
      ],
    },
    {
      id: "hvordan-tolke-tavns-forskning",
      eyebrow: "Les metoden før konklusjonen",
      title: "Hvordan bør en taVNS-studie vurderes?",
      blocks: [
        {
          type: "numbered",
          items: [
            "Identifiser nøyaktig øreområde, side og elektrode.",
            "Kontroller frekvens, pulsvidde, intensitet, duty cycle og øktlengde.",
            "Se hvordan intensiteten ble valgt og om deltakere faktisk var blindet.",
            "Undersøk sham- eller kontrollbetingelsen og om den ga merkbar stimulering.",
            "Vurder målgruppe, utfallsmål, studiestørrelse og varighet.",
            "Se etter systematisk rapportering av uønskede hendelser og frafall.",
            "Avklar om funnet gjelder mekanisme, et klinisk utfall eller bare en subjektiv opplevelse.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Et lovende felt kan fortsatt ha varierende evidenskvalitet",
          paragraphs: [
            "Systematiske oversikter beskriver et voksende forskningsfelt, men også metodisk heterogenitet, varierende kontrollbetingelser og usikkerhet om optimal plassering og dose.",
          ],
        },
      ],
    },
    {
      id: "aurikulaer-vns-og-neuvago",
      eyebrow: "Tydelig produktavgrensning",
      title: "Hvordan passer Neuvago inn i den aurikulære VNS-kategorien?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er et ørebasert, ikke-invasivt velværeprodukt. Kunnskap om taVNS forklarer den større metoden og terminologien rundt ørebasert stimulering, men den generelle litteraturen er ikke automatisk direkte dokumentasjon for Neuvago.",
        },
        {
          type: "paragraph",
          text: "Direkte produktkommunikasjon må bygge på Neuvagos faktiske elektrodeplassering, tekniske dokumentasjon, bruksanvisning, sikkerhetsinformasjon og tiltenkte bruk. Studier med andre enheter eller protokoller bør omtales som forskningskontekst.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Kategoriinnhold og produktbevis er to forskjellige lag",
          paragraphs: [
            "Denne artikkelen forklarer aurikulær VNS og taVNS generelt. Den dokumenterer ikke i seg selv at Neuvago gir en bestemt fysiologisk, medisinsk eller personlig effekt.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Neuvago er ikke presentert som medisinsk behandling",
          paragraphs: [
            "Neuvago er ment for generell velværebruk og skal ikke brukes til diagnose, behandling, kurering eller forebygging av sykdom eller som erstatning for profesjonell helsehjelp.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "peuker-filler-2002-auricle",
      authors: "Peuker ET, Filler TJ",
      title: "The nerve supply of the human auricle",
      publication: "Clinical Anatomy",
      year: 2002,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/11835542/",
      doi: "10.1002/ca.1089",
      pmid: "11835542",
      note:
        "Disseksjonsstudie av 14 ører fra sju kadavere som beskriver en heterogen og sammensatt nerveforsyning i det ytre øret.",
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
        "fMRI-studie av 12 friske voksne med stimulering ved venstre cymba conchae sammenlignet med øreflippen.",
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
        "Metodeartikkel om målretting, elektrodeplassering, kontakt, intensitet og praktisk laboratorieadministrasjon av taVNS.",
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
        "Konsensusbaserte anbefalinger for rapportering av plassering, elektrode, parametere, sham, deltakere og sikkerhet i tVNS- og taVNS-forskning.",
    },
    {
      id: "verma-2021-auricular-review",
      authors: "Verma N et al.",
      title:
        "Auricular Vagus Neuromodulation—A Systematic Review on Quality of Evidence and Clinical Effects",
      publication: "Frontiers in Neuroscience",
      year: 2021,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/33994937/",
      doi: "10.3389/fnins.2021.664740",
      pmid: "33994937",
      note:
        "Systematisk gjennomgang av evidenskvalitet, kliniske anvendelser, anatomiske antakelser og metodisk variasjon i aurikulær neuromodulasjon.",
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
        "Systematisk sikkerhetsgjennomgang av 177 taVNS-studier med 6322 deltakere og vurdering av rapporterte hendelser og rapporteringskvalitet.",
    },
  ],

  relatedSlugs: [
    "transkutan-vagusnervestimulering",
    "ikke-invasiv-vagusnervestimulering",
    "vagusnervestimulering",
    "vagusnerven",
    "implantert-og-ikke-invasiv-vns",
    "orets-anatomi-og-vagusnerven",
    "er-vagusnervestimulering-trygt",
    "bivirkninger-ved-ikke-invasiv-vagusnervestimulering",
  ],
  relatedLinks: [
    {
      title: "Forskning på transkutan og aurikulær VNS",
      description:
        "Gå videre til forskningsbibliotekets metodefokuserte side om tVNS, taVNS, stimuleringssteder, sham og rapporteringsstandarder.",
      href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
      label: "Utforsk tVNS-forskning",
    },
    {
      title: "Frangos-studien forklart",
      description:
        "Les Neuvagos studiesammendrag av fMRI-undersøkelsen med cymba conchae og øreflippen hos friske voksne.",
      href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      label: "Les studiesammendraget",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Les om rapporterte hendelser, mangler i sikkerhetsrapportering og hvorfor produktspesifikke advarsler alltid har forrang.",
      href: "/research/topics/safety-and-tolerability",
      label: "Les om sikkerhet",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan Neuvagos ørebaserte enhet, den separate appen og den praktiske velværerutinen henger sammen.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan Neuvago fungerer",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
