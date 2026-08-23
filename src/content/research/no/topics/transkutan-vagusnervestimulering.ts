import type { NorwegianResearchTopic } from "@/content/research/no/types";

export const transkutanVagusnervestimuleringResearchTopic = {
  slug: "transkutan-vagusnervestimulering",
  path: "/no/forskning/transkutan-vagusnervestimulering",
  status: "published",
  wave: "1D",
  order: 30,

  title:
    "Transkutan vagusnervestimulering i forskning – metoder, parametere og tolkning",
  seoTitle:
    "Transkutan VNS-forskning | tVNS og taVNS | Neuvago",
  description:
    "Norsk forskningsoversikt over transkutan vagusnervestimulering, tVNS, taVNS, anatomisk mål, elektriske parametere, sham, target engagement og tolkningsgrenser.",
  eyebrow: "Norsk metodeoversikt",
  lead:
    "Transkutan vagusnervestimulering er ikke én ensartet protokoll. Begrepet dekker ekstern elektrisk stimulering gjennom huden ved blant annet halsen og ytre øre, med store variasjoner i anatomisk plassering, elektrode, intensitet, frekvens, pulsbredde, duty cycle, øktlengde, kontrollbetingelse og målte utfall. Derfor må tVNS-forskning leses som et metodelandskap: Først når det er tydelig hva som ble stimulert, hvordan dosen ble levert og hva studien faktisk målte, kan funn sammenlignes eller vurderes for overførbarhet.",
  shortAnswer: [
    "tVNS er en metodekategori, ikke én standardisert behandling.",
    "Samme forkortelse betyr ikke samme anatomiske mål, elektrode eller dose.",
    "Aurikulær taVNS og cervikal nVNS/tVNS er forskjellige tilganger og må beskrives separat.",
    "Sensasjon er ikke target engagement, og et fysiologisk signal er ikke automatisk et klinisk utfall.",
    "Sham-design og blinding påvirker hvor sikkert aktive og kontrollerte effekter kan skilles.",
    "Funn fra én tVNS-enhet kan ikke uten videre overføres til en annen.",
    "Neuvago-spesifikke formuleringer må bygge på ferdig enhet, testing, risikostyring, tiltenkt bruk og endelig IFU.",
  ],
  hubSummary:
    "En metodeorientert forskningsoversikt over aurikulær og cervikal tVNS, anatomisk tilgang, elektrisk dose, sham, target engagement, biomarkører og generaliserbarhet.",
  hubLabel: "tVNS-metoder",

  primaryKeyword: "transkutan vagusnervestimulering forskning",
  secondaryKeywords: [
    "tVNS forskning",
    "transcutaneous vagus nerve stimulation research",
    "taVNS research",
    "transkutan aurikulær vagusnervestimulering",
    "cervikal vagusnervestimulering",
    "ikke-invasiv vagusnervestimulering metode",
    "tVNS parametere",
    "taVNS frekvens",
    "taVNS pulsbredde",
    "taVNS intensitet",
    "taVNS duty cycle",
    "taVNS sham",
    "taVNS blinding",
    "taVNS target engagement",
    "tVNS HRV",
    "tVNS fMRI",
    "vagus nerve stimulation through skin",
    "Neuvago forskning",
  ],
  searchIntent: "mixed",

  publishedAt: "2026-08-23",
  modifiedAt: "2026-08-23",
  readingTimeMinutes: 26,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent:
    "/research/topics/transcutaneous-vagus-nerve-stimulation",
  sitemapPriority: 0.9,
  changeFrequency: "weekly",

  researchMap: {
    eyebrow: "Metodekart",
    title:
      "Fem spørsmål må besvares før to tVNS-studier kan sammenlignes",
    description:
      "Metoden blir først tydelig når anatomisk tilgang, elektrisk dose, kontrollbetingelse, mål på target engagement og klinisk eller fysiologisk utfall holdes fra hverandre.",
    items: [
      {
        label: "01",
        title: "Hvor?",
        description:
          "Hals, cymba conchae, cavum conchae, tragus eller et annet område er ikke samme anatomiske tilgang.",
      },
      {
        label: "02",
        title: "Hvordan?",
        description:
          "Elektrode, intensitet, frekvens, pulsbredde, burst-mønster og duty cycle utgjør dosen.",
      },
      {
        label: "03",
        title: "Mot hva?",
        description:
          "Sham og blinding må være troverdige nok til å skille spesifikke effekter fra sensasjon og forventning.",
      },
      {
        label: "04",
        title: "Treffer den?",
        description:
          "fMRI, pupil, EEG, HRV og andre markører kan undersøke target engagement, men er ikke likeverdige bevis.",
      },
      {
        label: "05",
        title: "Hva endret seg?",
        description:
          "Mekanisme, fysiologisk markør, symptomskår og klinisk utfall må tolkes på hvert sitt nivå.",
      },
    ],
  },

  sections: [
    {
      id: "kort-svar",
      eyebrow: "Det viktigste først",
      title:
        "tVNS må leses som en familie av protokoller, ikke som én behandling",
      blocks: [
        {
          type: "paragraph",
          text: "Transkutan betyr at elektrisk stimulering leveres gjennom huden. I VNS-forskningen brukes begrepet både om aurikulære tilganger ved ytre øre og om cervikale tilganger ved halsen. Disse metodene kan dele et overordnet mål om å påvirke vagusrelaterte afferente signalveier, men de bruker forskjellige anatomiske innganger og kan ikke behandles som teknisk eller biologisk identiske.",
        },
        {
          type: "paragraph",
          text: "Den ansvarlige lesemåten er derfor å gå fra kategori til konkret protokoll: anatomisk sted, side, elektrode, kontakt, strømstyrke, frekvens, pulsbredde, mønster, øktlengde, samlet eksponering, sham, populasjon og utfall. Uten disse opplysningene blir ordet tVNS for upresist til å bære en sterk konklusjon.",
        },
        {
          type: "callout",
          tone: "summary",
          title:
            "tVNS er en metodekategori, ikke én standardisert behandling",
          paragraphs: [
            "Samme forkortelse kan skjule vesentlige forskjeller i anatomisk mål, enhet og elektrisk dose.",
            "Forskningsresultater må knyttes til den protokollen som faktisk ble undersøkt.",
          ],
        },
      ],
    },
    {
      id: "metodefamilien",
      eyebrow: "Begrepene",
      title:
        "nVNS, tVNS og taVNS overlapper – men betyr ikke alltid det samme",
      blocks: [
        {
          type: "table",
          caption: "Vanlige metodebetegnelser i litteraturen",
          columns: ["Begrep", "Typisk betydning", "Tolkningsgrense"],
          rows: [
            [
              "nVNS",
              "Ikke-invasiv VNS levert uten kirurgisk implantat",
              "Kan omfatte flere anatomiske tilganger og produktklasser",
            ],
            [
              "tVNS",
              "Transkutan VNS gjennom huden",
              "Brukes både bredt og som betegnelse på bestemte øre- eller halsprotokoller",
            ],
            [
              "taVNS",
              "Transkutan aurikulær VNS ved ytre øre",
              "Øreområde, side, elektrode og parametere varierer betydelig",
            ],
            [
              "cervikal nVNS/tVNS",
              "Ekstern stimulering ved halsen over vagusnervens forløp",
              "Er ikke automatisk sammenlignbar med aurikulær stimulering",
            ],
            [
              "Implantert VNS",
              "Kirurgisk plassert system rundt cervikal vagus",
              "Har en annen invasivitet, doselevering og regulatorisk ramme",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Samme forkortelse betyr ikke samme anatomiske mål, elektrode eller dose",
          paragraphs: [
            "Artikler bør omtales med den mest presise metodebetegnelsen kilden støtter.",
          ],
        },
      ],
    },
    {
      id: "anatomi-og-tilgang",
      eyebrow: "Hvor stimuleringen gis",
      title:
        "Aurikulær og cervikal tilgang bygger på forskjellige anatomiske innganger",
      blocks: [
        {
          type: "paragraph",
          text: "Anatomiske oversikter beskriver to hovedveier for transkutan tilgang: den aurikulære grenen av vagusnerven ved deler av ytre øre og den cervikale vagusnerven ved halsen. Ved øret er innervasjonen sammensatt og overlappende med andre sensoriske nerver. Ved halsen ligger vagusnerven dypere og i nærheten av andre strukturer. Derfor er plassering ikke bare en brukerdetalj, men en sentral del av metodehypotesen.",
        },
        {
          type: "table",
          caption: "Anatomisk tilgang og hva den innebærer",
          columns: ["Tilgang", "Vanlig forskningsplassering", "Viktig begrensning"],
          rows: [
            [
              "Aurikulær",
              "Cymba conchae, cavum conchae eller tragusområder",
              "Ytre øre har overlappende og varierende sensorisk innervasjon",
            ],
            [
              "Cervikal",
              "Antero-lateral hals over nervens antatte forløp",
              "Strømfelt og aktivering kan involvere flere vev og nerver",
            ],
            [
              "Earlobe-kontroll",
              "Øreflipp som sham eller aktiv kontroll",
              "Kan gi tydelig sensasjon og er ikke nødvendigvis fysiologisk helt inert",
            ],
            [
              "Nærliggende kontrollsted",
              "Tragusnært, mastoid eller halsmuskel avhengig av studien",
              "En kontroll kan aktivere andre sensoriske baner og komplisere kontrasten",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Anatomisk plausibilitet er nødvendig, men ikke tilstrekkelig",
          paragraphs: [
            "Et område kan være relevant for vagal tilgang uten at alle elektroder og doser ved området gir samme target engagement.",
          ],
        },
      ],
    },
    {
      id: "fra-hud-til-hjerne",
      eyebrow: "Mekanismekjeden",
      title:
        "Et transkutant signal må passere flere ledd før et utfall kan tilskrives vagal stimulering",
      blocks: [
        {
          type: "numbered",
          items: [
            "Strømmen må leveres stabilt gjennom hud og elektrodegrensesnitt.",
            "Relevante afferente nervefibre må aktiveres i tilstrekkelig grad.",
            "Signalet må nå sentrale reléområder og endre nevral aktivitet.",
            "Endringen må kunne måles med en valid markør eller et relevant utfall.",
            "Kontrollbetingelsen må redusere alternative forklaringer som sensasjon, forventning og generell somatosensorisk stimulering.",
            "Resultatet må reproduseres i en sammenlignbar protokoll og populasjon.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Sensasjon er ikke target engagement",
          paragraphs: [
            "Prikking eller trykk viser at huden og sensoriske fibre påvirkes, men beviser ikke hvilken nervebane som dominerer eller om et bestemt sentralt mål er aktivert.",
          ],
        },
      ],
    },
    {
      id: "elektriske-parametere",
      eyebrow: "Dosen",
      title:
        "Intensitet alene beskriver ikke den elektriske tVNS-dosen",
      blocks: [
        {
          type: "table",
          caption: "Parametere som bør rapporteres",
          columns: ["Parameter", "Hva den beskriver", "Hvorfor den betyr noe"],
          rows: [
            ["Strømstyrke", "Elektrisk amplitude, ofte i mA", "Påvirker sensasjon, ladning og hvilke fibre som kan rekrutteres"],
            ["Pulsbredde", "Varighet av hver elektriske puls", "Sammen med strømstyrke bestemmer den ladning per fase"],
            ["Frekvens", "Pulser per sekund", "Kan endre tidsmønster og sentral respons"],
            ["Burst-mønster", "Grupper av pulser med pauser mellom", "Er ikke ekvivalent med kontinuerlig stimulering ved samme nominelle frekvens"],
            ["Duty cycle", "Forholdet mellom aktiv tid og pause", "Bestemmer faktisk eksponering under økten"],
            ["Polaritet og bølgeform", "Mono- eller bifasisk, ladningsbalansert eller annet", "Påvirker vev, elektrode og sammenlignbarhet"],
            ["Øktlengde", "Minutter per økt", "En del av total dose og tolerabilitet"],
            ["Hyppighet og varighet", "Økter per dag/uke og antall uker", "Skiller akutt laboratoriestimulering fra gjentatt hjemmebruk"],
          ],
        },
        {
          type: "paragraph",
          text: "Farmer og kolleger anbefalte at tVNS-studier rapporterer enhet, elektrode, plassering, parametere, intensitetsvalg, protokoll, utvalg, kontroll, utfall og sikkerhetsdata. Uten et slikt minimumssett blir både replikasjon og metaanalyse svakere.",
        },
      ],
    },
    {
      id: "dose-som-system",
      eyebrow: "Mer enn ett tall",
      title:
        "Elektrisk dose er et system av ladning, tidsmønster og samlet eksponering",
      blocks: [
        {
          type: "table",
          caption: "Fire dosenivåer som bør holdes fra hverandre",
          columns: ["Nivå", "Eksempel", "Vanlig feil"],
          rows: [
            ["Puls", "Strømstyrke × pulsbredde", "Bare mA rapporteres"],
            ["Sekund", "Frekvens og antall pulser eller bursts", "25 Hz behandles som samme dose i alle mønstre"],
            ["Økt", "Aktiv tid, pauser og total øktlengde", "Klokketid brukes uten faktisk on-time"],
            ["Program", "Antall økter og total behandlingsperiode", "En enkelt laboratorieøkt generaliseres til langvarig bruk"],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Parameterstudier viser at responsen ikke nødvendigvis følger en enkel mer-er-bedre-kurve",
          paragraphs: [
            "Frekvens, pustefase, plassering og individuell intensitet kan påvirke målte responser på ulike måter.",
          ],
        },
      ],
    },
    {
      id: "plassering-og-elektrode",
      eyebrow: "Kontaktflaten",
      title:
        "Elektrodens form, trykk og kontakt kan være like viktig som navnet på øreområdet",
      blocks: [
        {
          type: "bullets",
          items: [
            "Elektrodestørrelse og kontaktflate påvirker strømtetthet.",
            "Trykk og mekanisk passform påvirker både komfort og impedans.",
            "Hudforberedelse, fuktighet og bevegelse kan endre kontakt under økten.",
            "Venstre og høyre side kan ikke alltid antas å være likeverdige.",
            "Et område som kalles tragus eller concha kan være definert ulikt mellom studier.",
            "En laboratorieelektrode og en kommersiell wearable kan gi forskjellige strømfelt.",
          ],
        },
        {
          type: "definition",
          term: "Strømtetthet",
          definition:
            "Hvor mye strøm som fordeles over et gitt elektrodeareal. Samme mA kan oppleves og påvirke vev forskjellig med ulik kontaktflate.",
        },
      ],
    },
    {
      id: "intensitet-og-sensasjon",
      eyebrow: "Individuell kalibrering",
      title:
        "Sensasjonsterskel kan støtte komfort og standardisering – men er ikke en effektmåler",
      blocks: [
        {
          type: "paragraph",
          text: "Mange studier justerer intensiteten individuelt, for eksempel til tydelig men komfortabel sensasjon eller til et nivå under smertegrensen. Dette kan redusere store forskjeller i hudkontakt og følsomhet, men det standardiserer ikke nødvendigvis nerveaktivering mellom personer.",
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Sterkere følelse betyr ikke sterkere dokumentert effekt",
          paragraphs: [
            "En protokoll kan bli mindre tolerabel uten at target engagement eller klinisk nytte øker.",
            "Sensasjon bør beskrives som bruker- og blindingselement, ikke som bevis på mekanisme.",
          ],
        },
      ],
    },
    {
      id: "sham-og-blinding",
      eyebrow: "Kontrollbetingelsen",
      title:
        "En troverdig sham må ligne opplevelsen uten å kopiere den antatte aktive mekanismen",
      blocks: [
        {
          type: "table",
          caption: "Vanlige sham-strategier og deres kompromisser",
          columns: ["Sham", "Fordel", "Begrensning"],
          rows: [
            ["Øreflipp", "Kan gi lignende elektrisk sensasjon", "Kan aktivere andre sensoriske baner og er ikke nødvendigvis inert"],
            ["Lavere intensitet", "Samme enhet og plassering", "Deltakere kan merke forskjell; lav dose kan fortsatt være aktiv"],
            ["Kort oppstartsstrøm", "Kan gi initial sensasjon", "Opplevelsen divergerer når aktiv stimulering fortsetter"],
            ["Annet øreområde", "Kan matche kontakt og prosedyrer", "Anatomisk kontrollområde kan ha egen fysiologisk effekt"],
            ["Ingen strøm", "Tydelig metodisk null", "Svak blinding dersom aktiv gruppe kjenner stimuleringen"],
          ],
        },
        {
          type: "bullets",
          items: [
            "Ble deltakerne spurt om hvilken gruppe de trodde de var i?",
            "Var sensasjon og ubehag sammenlignbart mellom gruppene?",
            "Ble utfallsvurderere blindet?",
            "Ble sham levert med samme oppmerksomhet, varighet og utstyr?",
            "Kan kontrollstedet selv ha aktive sensoriske eller autonome effekter?",
          ],
        },
      ],
    },
    {
      id: "frangos-ore-2015",
      eyebrow: "Aurikulær fMRI-kontekst",
      title:
        "Frangos et al. viste at cymba conchae-stimulering kan nå mønstre forenlige med sentrale vagale projeksjoner",
      blocks: [
        {
          type: "paragraph",
          text: "Den humane fMRI-studien fra 2015 sammenlignet elektrisk stimulering ved cymba conchae med kontrollstimulering ved øreflippen. Forskerne rapporterte aktivitet i områder de beskrev som klassiske sentrale vagale projeksjoner, inkludert hjernestammeregioner. Studien er viktig som target-engagement-kontekst for aurikulær tilgang.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "fMRI-funnet dokumenterer en bestemt protokoll – ikke alle øreenheter",
          paragraphs: [
            "Studien etablerer ikke at enhver elektrode, plassering eller dose ved øret gir samme aktiveringsmønster.",
            "Nevral aktivering er ikke i seg selv et klinisk effektmål.",
          ],
        },
      ],
    },
    {
      id: "frangos-hals-2017",
      eyebrow: "Cervikal fMRI-kontekst",
      title:
        "Frangos og Komisaruk undersøkte en separat transkutan tilgang ved halsen",
      blocks: [
        {
          type: "paragraph",
          text: "I en studie med 13 friske deltakere ble stimulering av antero-lateral hals sammenlignet med kontrollstimulering over et bakre halsområde. Forskerne rapporterte aktivering i blant annet nucleus tractus solitarius, parabrachialområdet, sensorisk cortex og insula. Studien støtter anatomisk plausibilitet for cervikal tilgang, men bruker en annen plassering og en annen metode enn aurikulær taVNS.",
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Cervikal og aurikulær tVNS bør ikke blandes i én effektkategori",
          paragraphs: [
            "Begge er transkutane, men tilgang, strømfelt, produktdesign og kontrollbetingelser er forskjellige.",
          ],
        },
      ],
    },
    {
      id: "badran-metode-2019",
      eyebrow: "Praktisk laboratoriemetode",
      title:
        "Badran et al. gjorde plassering, terskel og dose eksplisitte",
      blocks: [
        {
          type: "paragraph",
          text: "Metodeartikkelen beskriver hvordan aurikulær taVNS kan administreres i laboratoriet, med oppmerksomhet på øremål, elektrodeplassering, kontakt, individuell sensasjonsterskel, strømintensitet og øktgjennomføring. Den er særlig nyttig fordi den viser hvor mange operative valg som skjuler seg bak en kort metodebetegnelse.",
        },
        {
          type: "bullets",
          items: [
            "Dokumenter nøyaktig plassering med foto eller anatomisk referanse.",
            "Beskriv elektrode, kontaktmedium og impedanshåndtering.",
            "Forklar hvordan individuell intensitet ble bestemt.",
            "Oppgi frekvens, pulsbredde, duty cycle og øktlengde.",
            "Registrer komfort, avbrudd og protokollavvik.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "En metodeartikkel dokumenterer reproduserbarhet – ikke klinisk effekt",
          paragraphs: [
            "God prosedyrebeskrivelse er et grunnlag for forskning, men erstatter ikke kontrollerte utfallsdata.",
          ],
        },
      ],
    },
    {
      id: "pust-og-frekvens",
      eyebrow: "Tidsstyrt stimulering",
      title:
        "Sclocco-studiene viser at pustefase og frekvens kan endre målte hjernestammeresponser",
      blocks: [
        {
          type: "paragraph",
          text: "I en 7T-fMRI-studie ble aurikulær stimulering tidslåst til inn- eller utpust. Utåndingsstyrt stimulering var forbundet med sterkere respons i undersøkte hjernestammeregioner og med endringer i en cardiovagal markør. En senere studie sammenlignet 2, 10, 25 og 100 Hz i den samme respiratory-gated rammen og fant sterkest fMRI-respons ved 100 Hz for den spesifikke protokollen.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Et parameterfunn er ikke en universell optimal dose",
          paragraphs: [
            "Resultatet gjelder respiratory-gated cymba-stimulering, den undersøkte populasjonen og fMRI-endepunktet.",
            "En frekvens som maksimerer ett bildesignal er ikke automatisk best for komfort, sikkerhet eller klinisk utfall.",
          ],
        },
      ],
    },
    {
      id: "markorer-og-endepunkter",
      eyebrow: "Hva studien måler",
      title:
        "Target engagement, fysiologi og klinisk nytte er forskjellige evidensnivåer",
      blocks: [
        {
          type: "table",
          caption: "Utfallsnivåer i tVNS-forskning",
          columns: ["Nivå", "Eksempler", "Hva det kan støtte"],
          rows: [
            ["Sensasjon", "Prikking, trykk, smerte, komfort", "At stimuleringen merkes og kan tolereres"],
            ["Perifer fysiologi", "Puls, HRV, pust, hudledning", "Kontekst om autonome endringer, men ikke spesifikk nerveaktivering alene"],
            ["Sentral markør", "fMRI, EEG, MEG, pupil", "Hypoteser om nevral respons eller target engagement"],
            ["Atferd", "Oppmerksomhet, minne, reaksjonstid", "Oppgave- og protokollspesifikk funksjonsendring"],
            ["Symptomskår", "Søvn, smerte, humør eller stressmål", "Klinisk eller subjektiv endring i undersøkt populasjon"],
            ["Hardt klinisk utfall", "Anfall, funksjon, bruk av helsetjenester", "Mer direkte klinisk relevans, men krever robuste studier"],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Et fysiologisk signal er ikke automatisk et klinisk utfall",
          paragraphs: [
            "En endring i HRV, pupil eller fMRI kan være interessant uten å dokumentere symptomforbedring eller behandlingsnytte.",
          ],
        },
      ],
    },
    {
      id: "nullfunn-og-replikasjon",
      eyebrow: "Når hypotesen ikke bekreftes",
      title:
        "Nullfunn er avgjørende for å teste om foreslåtte biomarkører faktisk er robuste",
      blocks: [
        {
          type: "paragraph",
          text: "D’Agostini et al. undersøkte kontinuerlig cymba-stimulering mot øreflipp-sham hos 66 friske deltakere og fant ingen effekt på de undersøkte indirekte markørene for noradrenerg aktivitet, inkludert pupillære og salivære mål. Andre studier har også rapportert inkonsistente funn for pupil og HRV.",
        },
        {
          type: "paragraph",
          text: "Et nullfunn kan bety at mekanismehypotesen er svak, at markøren er lite sensitiv, at dosen eller tidsmønsteret ikke traff, eller at effekten er mindre og mer kontekstavhengig enn antatt. Derfor bør nullfunn ikke skjules som metodefeil uten videre analyse.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Negative og inkonsistente resultater er en del av metodekartet",
          paragraphs: [
            "De bidrar til å avgrense hvilke protokoller og markører som ikke kan brukes som sikre surrogater.",
          ],
        },
      ],
    },
    {
      id: "hrv-og-autonom-tolkning",
      eyebrow: "En populær markør",
      title:
        "HRV kan være relevant, men resultatene er blandede og protokollavhengige",
      blocks: [
        {
          type: "paragraph",
          text: "Soltani et al. inkluderte 21 kontrollerte studier av aurikulær stimulering, HRV og barorefleks i friske deltakere. Enkelte HRV-mål endret seg i deler av litteraturen, mens barorefleksfunnene var begrensede. Forfatterne beskrev resultatene som blandede og pekte på heterogene design og doser.",
        },
        {
          type: "bullets",
          items: [
            "HRV påvirkes av pust, kroppsstilling, tid på døgnet, bevegelse og analysevalg.",
            "Ulike HRV-indekser representerer ikke én enkel biologisk størrelse.",
            "Akutt HRV-endring kan ikke uten videre brukes som bevis på langtidseffekt.",
            "En protokoll kan påvirke sentrale mål uten tydelig HRV-endring – eller omvendt.",
            "HRV bør forhåndsdefineres og tolkes sammen med protokoll og kontrollbetingelse.",
          ],
        },
      ],
    },
    {
      id: "rapporteringsstandarder",
      eyebrow: "Reproduserbarhet",
      title:
        "Minimumsstandarder er nødvendige fordi tVNS-studier ofte mangler avgjørende detaljer",
      blocks: [
        {
          type: "table",
          caption: "Et minimum for en tolkbar tVNS-studie",
          columns: ["Område", "Bør rapporteres"],
          rows: [
            ["Enhet", "Produsent, modell, strømlevering og programvare"],
            ["Elektrode", "Form, areal, materiale, plassering og kontaktmedium"],
            ["Dose", "mA, pulsbredde, frekvens, bølgeform, burst og duty cycle"],
            ["Eksponering", "On-time, øktlengde, antall økter og total periode"],
            ["Intensitetsvalg", "Fast dose, sensasjonsterskel, smertegrense eller annen kalibrering"],
            ["Kontroll", "Shamsted, shamdose, blindingstest og kontrollens mulige aktivitet"],
            ["Populasjon", "Alder, helse, medisiner, eksklusjoner og baseline"],
            ["Utfall", "Forhåndsregistrerte primærmål, tidspunkt, analyse og manglende data"],
            ["Sikkerhet", "Hendelser, alvorlighet, årsak, avbrudd og frafall"],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title:
            "Metoden er bare så sammenlignbar som rapporteringen tillater",
          paragraphs: [
            "En studie som bare oppgir «25 Hz tVNS» mangler store deler av den faktiske protokollen.",
          ],
        },
      ],
    },
    {
      id: "generaliserbarhet-og-neuvago",
      eyebrow: "Fra forskningsfelt til produkt",
      title:
        "Forskning kan informere Neuvago uten å fungere som direkte produktdokumentasjon",
      blocks: [
        {
          type: "table",
          caption: "Hva metodeforskningen kan og ikke kan gjøre",
          columns: ["Kan informere", "Kan ikke alene dokumentere"],
          rows: [
            ["Hvilke parametere og protokolldetaljer som bør beskrives", "At Neuvagos dose aktiverer et bestemt sentralt mål"],
            ["Hvordan sham og blinding kan vurderes", "At Neuvago er klinisk ekvivalent med en forskningsenhet"],
            ["Hvilke sensasjoner og tolerabilitetsmål som bør følges", "Neuvagos egen hendelses- eller bivirkningsrate"],
            ["Hvilke biomarkører som er utforsket", "At HRV, pupil eller fMRI vil endres ved Neuvago-bruk"],
            ["Hvorfor anatomisk plassering og elektrode betyr noe", "At alle funn fra aurikulær eller cervikal tVNS kan overføres"],
            ["Behovet for tydelige produktgrenser", "Medisinske behandlings- eller mekanismepåstander"],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "Funn fra én tVNS-enhet kan ikke uten videre overføres til en annen",
          paragraphs: [
            "Endelig produktkommunikasjon skal harmoniseres med IFU, risikostyring, testing, tiltenkt bruk og den faktiske ferdige enheten.",
            "Forskningssiden skal forklare feltet, ikke fungere som foreløpig bruksanvisning eller klinisk claim-dokument.",
          ],
        },
      ],
    },
    {
      id: "oppsummering",
      eyebrow: "Samlet metodevurdering",
      title:
        "Den sterkeste tVNS-konklusjonen begynner med en presis protokollbeskrivelse",
      blocks: [
        {
          type: "bullets",
          items: [
            "Transkutan VNS omfatter både aurikulære og cervikale tilganger.",
            "Anatomisk sted, elektrode og elektriske parametere er del av metodehypotesen.",
            "Intensitet alene beskriver ikke dose eller samlet eksponering.",
            "Sham og blinding bestemmer hvor troverdig aktiv-kontroll-forskjellen er.",
            "Sensasjon, target engagement, fysiologi og klinisk utfall er ulike evidensnivåer.",
            "Nullfunn og blandede biomarkørresultater må inngå i helhetsbildet.",
            "Minimumsrapportering er nødvendig for replikasjon og metaanalyse.",
            "Neuvago-spesifikke claims krever direkte relevant produktdokumentasjon.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort konklusjon",
          paragraphs: [
            "tVNS-feltet viser at ekstern tilgang til vagusrelaterte baner er forskningsmessig plausibel, men responsen avhenger av metode, dose og målenivå.",
            "Det er derfor mer presist å spørre hvilken tVNS-protokoll som ble undersøkt enn om «tVNS virker» som én enhetlig metode.",
          ],
        },
      ],
    },
  ],

  studyHighlights: [
    {
      id: "frangos-2015-ear-fmri",
      title: "Aurikulær tilgang og sentrale vagale projeksjoner",
      citation: "Frangos, Ellrich & Komisaruk, Brain Stimulation",
      year: 2015,
      design: "Human fMRI-studie",
      question:
        "Ga cymba conchae-stimulering et annet sentralt aktiveringsmønster enn øreflipp-kontroll?",
      finding:
        "Forskerne rapporterte aktivitet i områder forenlige med klassiske sentrale vagale projeksjoner.",
      limitation:
        "Funnene gjelder den konkrete enheten, plasseringen, dosen og fMRI-kontrasten – ikke alle aurikulære produkter.",
      href:
        "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
    },
    {
      id: "frangos-2017-neck-fmri",
      title: "Transkutan cervikal tilgang ved halsen",
      citation: "Frangos & Komisaruk, Brain Stimulation",
      year: 2017,
      design: "Human fMRI-studie",
      question:
        "Kunne stimulering over antero-lateral hals nå mønstre forenlige med vagale afferente projeksjoner?",
      finding:
        "Studien rapporterte aktivering i blant annet NTS, parabrachialområdet, sensorisk cortex og insula hos 13 friske deltakere.",
      limitation:
        "Cervikal tilgang er anatomisk og teknisk forskjellig fra aurikulær taVNS.",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/28104084/",
    },
    {
      id: "badran-2019-methods",
      title: "Teknikk, målretting og laboratorieadministrasjon",
      citation: "Badran et al., Journal of Visualized Experiments",
      year: 2019,
      design: "Metodeartikkel",
      question:
        "Hvordan kan aurikulær taVNS leveres og dokumenteres mer reproduserbart?",
      finding:
        "Artikkelen beskriver øremål, elektrodeplassering, kontakt, individuell intensitet og praktisk protokollgjennomføring.",
      limitation:
        "Metodekvalitet dokumenterer ikke i seg selv target engagement eller klinisk effekt.",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
    },
    {
      id: "sclocco-2019-respiration",
      title: "Pustefase og hjernestammerespons",
      citation: "Sclocco et al., Brain Stimulation",
      year: 2019,
      design: "7T fMRI og fysiologi",
      question:
        "Endret utpust- versus innpuststyrt aurikulær stimulering den målte sentrale og cardiovagale responsen?",
      finding:
        "Utåndingsstyrt stimulering ga sterkere respons i undersøkte hjernestammeregioner og endret en cardiovagal markør i den spesifikke protokollen.",
      limitation:
        "Respiratory-gated laboratoriestimulering er ikke direkte ekvivalent med vanlig kontinuerlig eller selvstyrt bruk.",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/30803865/",
    },
    {
      id: "sclocco-2020-frequency",
      title: "Frekvens påvirket fMRI-responsen",
      citation: "Sclocco et al., Brain Stimulation",
      year: 2020,
      design: "Parameterstudie med fMRI",
      question:
        "Ga 2, 10, 25 og 100 Hz forskjellige hjernestammeresponser ved respiratory-gated taVNS?",
      finding:
        "100 Hz ga sterkest respons i det undersøkte fMRI-endepunktet, med en svakere respons også ved 2 Hz.",
      limitation:
        "Resultatet definerer ikke en universell optimal frekvens for andre enheter, utfall eller brukergrupper.",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/32380448/",
    },
    {
      id: "farmer-2021-reporting",
      title: "Minimumsstandarder for tVNS-rapportering",
      citation: "Farmer et al., Frontiers in Human Neuroscience",
      year: 2021,
      design: "Internasjonal konsensus og review",
      question:
        "Hvilke metode- og rapporteringsdetaljer er nødvendige for tolkbar og reproduserbar tVNS-forskning?",
      finding:
        "Ekspertgruppen anbefalte detaljert rapportering av enhet, plassering, dose, populasjon, kontroll, utfall og sikkerhet.",
      limitation:
        "Standardene forbedrer framtidige studier, men kan ikke fylle hullene i eldre rapportering.",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
    },
    {
      id: "dagostini-2022-null",
      title: "Ingen effekt på undersøkte noradrenerge markører",
      citation: "D’Agostini et al., Psychophysiology",
      year: 2022,
      design: "Sham-kontrollert crossover-studie",
      question:
        "Påvirket kontinuerlig cymba-stimulering pupil-, salivære og andre indirekte markører for noradrenerg aktivitet?",
      finding:
        "Studien fant ingen effekt på de undersøkte markørene hos 66 friske deltakere.",
      limitation:
        "Nullfunnet gjelder markørene og den konkrete kontinuerlige protokollen, ikke alle mulige taVNS-mekanismer.",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/34990045/",
    },
    {
      id: "soltani-2023-hrv",
      title: "Blandede HRV- og barorefleksfunn",
      citation: "Soltani et al., Clinical Autonomic Research",
      year: 2023,
      design: "Systematisk oversikt",
      question:
        "Hvordan påvirket aurikulær stimulering HRV og barorefleks i kontrollerte studier av friske personer?",
      finding:
        "21 studier viste blandede resultater, med betydelig variasjon mellom design, dose og HRV-mål.",
      limitation:
        "Heterogeniteten begrenser sikker identifikasjon av optimal dose og pålitelig autonom biomarkør.",
      href:
        "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review",
      externalUrl: "https://pubmed.ncbi.nlm.nih.gov/37119426/",
    },
  ],

  sources: [
    {
      id: "butt-2020-anatomy",
      authors: "Butt MF, Albusoda A, Farmer AD, Aziz Q",
      title:
        "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
      publication: "Journal of Anatomy",
      year: 2020,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
      doi: "10.1111/joa.13122",
      pmid: "31742681",
      note:
        "Anatomisk oversikt over aurikulær og cervikal transkutan tilgang, ytre øres innervasjon og sentrale tolkningsgrenser.",
    },
    {
      id: "frangos-2015",
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
        "Human fMRI-kontekst for cymba conchae-stimulering sammenlignet med øreflipp-kontroll.",
    },
    {
      id: "frangos-2017",
      authors: "Frangos E, Komisaruk BR",
      title:
        "Access to Vagal Projections via Cutaneous Electrical Stimulation of the Neck: fMRI Evidence in Healthy Humans",
      publication: "Brain Stimulation",
      year: 2017,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/28104084/",
      doi: "10.1016/j.brs.2016.10.008",
      pmid: "28104084",
      note:
        "Human fMRI-studie av transkutan cervikal tilgang ved antero-lateral hals.",
    },
    {
      id: "badran-2019",
      authors:
        "Badran BW, Yu AB, Adair D, Mappin G, DeVries WH, Jenkins DD, George MS, Bikson M",
      title:
        "Laboratory Administration of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): Technique, Targeting, and Considerations",
      publication: "Journal of Visualized Experiments",
      year: 2019,
      type: "methods-paper",
      url: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
      doi: "10.3791/58984",
      pmid: "30663712",
      note:
        "Praktisk metodegrunnlag for plassering, kontakt, intensitetsvalg og laboratorieadministrasjon.",
    },
    {
      id: "sclocco-2019",
      authors:
        "Sclocco R, Garcia RG, Kettner NW, Isenburg K, Fisher HP, Hubbard CS, et al.",
      title:
        "The influence of respiration on brainstem and cardiovagal response to auricular vagus nerve stimulation: A multimodal ultrahigh-field (7T) fMRI study",
      publication: "Brain Stimulation",
      year: 2019,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/30803865/",
      doi: "10.1016/j.brs.2019.02.003",
      pmid: "30803865",
      note:
        "Respiratory-gated taVNS med 7T fMRI og cardiovagal fysiologi.",
    },
    {
      id: "sclocco-2020",
      authors:
        "Sclocco R, Garcia RG, Kettner NW, Fisher HP, Isenburg K, Makarovsky M, et al.",
      title:
        "Stimulus frequency modulates brainstem response to respiratory-gated transcutaneous auricular vagus nerve stimulation",
      publication: "Brain Stimulation",
      year: 2020,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/32380448/",
      doi: "10.1016/j.brs.2020.03.011",
      pmid: "32380448",
      note:
        "Parameterstudie av 2, 10, 25 og 100 Hz i en respiratory-gated fMRI-protokoll.",
    },
    {
      id: "farmer-2021",
      authors: "Farmer AD, Strzelczyk A, Finisguerra A, et al.",
      title:
        "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
      publication: "Frontiers in Human Neuroscience",
      year: 2021,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
      doi: "10.3389/fnhum.2020.568051",
      pmid: "33854421",
      note:
        "Internasjonale minimumsstandarder for enhet, elektrode, plassering, parametere, kontroll, utfall og sikkerhet.",
    },
    {
      id: "dagostini-2022",
      authors:
        "D'Agostini M, Burger AM, Villca Ponce G, Claes S, von Leupoldt A, Van Diest I",
      title:
        "No evidence for a modulating effect of continuous transcutaneous auricular vagus nerve stimulation on markers of noradrenergic activity",
      publication: "Psychophysiology",
      year: 2022,
      type: "randomized-trial",
      url: "https://pubmed.ncbi.nlm.nih.gov/34990045/",
      doi: "10.1111/psyp.13984",
      pmid: "34990045",
      note:
        "Sham-kontrollert nullfunn for flere indirekte noradrenerge markører ved kontinuerlig cymba-stimulering.",
    },
    {
      id: "soltani-2023",
      authors:
        "Soltani D, Azizi B, Sima S, Tavakoli K, Hosseini Mohammadi NS, et al.",
      title:
        "A systematic review of the effects of transcutaneous auricular vagus nerve stimulation on baroreflex sensitivity and heart rate variability in healthy subjects",
      publication: "Clinical Autonomic Research",
      year: 2023,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/37119426/",
      doi: "10.1007/s10286-023-00938-w",
      pmid: "37119426",
      note:
        "21 kontrollerte studier med blandede autonome funn og betydelig protokollheterogenitet.",
    },
    {
      id: "gerges-2024",
      authors:
        "Gerges ANH, Williams EER, Hillier S, Uy J, Hamilton T, Chamberlain S, Hordacre B",
      title:
        "Clinical application of transcutaneous auricular vagus nerve stimulation: a scoping review",
      publication: "Disability and Rehabilitation",
      year: 2024,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/38362860/",
      doi: "10.1080/09638288.2024.2313123",
      pmid: "38362860",
      note:
        "Kartla 109 studier og fant begrenset, inkonsistent parameter- og sham-rapportering på tvers av kliniske populasjoner.",
    },
  ],

  relatedSlugs: [
    "vagusnervestimulering",
    "sikkerhet-og-tolerabilitet",
  ],
  relatedKnowledgeSlugs: [
    "transkutan-vagusnervestimulering",
    "ikke-invasiv-vagusnervestimulering",
    "aurikulaer-vagusnervestimulering",
    "orets-anatomi-og-vagusnerven",
    "vagusnervestimulering",
    "hrv-og-vagusnerven",
    "er-vagusnervestimulering-trygt",
  ],
  relatedLinks: [
    {
      title: "Engelsk tVNS-forskning",
      description:
        "Åpne den engelske språkparsiden om transkutan og aurikulær VNS, metodevariabler og ansvarlig tolkning.",
      href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
      label: "Åpne engelsk forskningstema",
    },
    {
      title: "Forskning på vagusnervestimulering",
      description:
        "Sett tVNS-metodene inn i den bredere forskningskonteksten for implantert og ikke-invasiv VNS.",
      href: "/no/forskning/vagusnervestimulering",
      label: "Åpne VNS-forskningen",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Gå dypere i uønskede hendelser, rapporteringskvalitet, frafall og produktspesifikke sikkerhetsgrenser.",
      href: "/no/forskning/sikkerhet-og-tolerabilitet",
      label: "Åpne sikkerhetsforskningen",
    },
    {
      title: "Frangos et al. 2015",
      description:
        "Les Neuvagos studiesammendrag av den sentrale fMRI-studien om aurikulær tilgang til vagale projeksjoner.",
      href:
        "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      label: "Les studiesammendraget",
    },
    {
      title: "Soltani et al. 2023",
      description:
        "Les studiesammendraget om taVNS, HRV, barorefleks og betydningen av heterogene protokoller.",
      href:
        "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review",
      label: "Les HRV-oversikten",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Se hvordan Neuvago skiller forskningskontekst, velværeformål og medisinske produktpåstander.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Gå fra metodeforskning til den praktiske forklaringen av plassering, komfort, veiledning og daglig rutine.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
  ],
} as const satisfies NorwegianResearchTopic;
