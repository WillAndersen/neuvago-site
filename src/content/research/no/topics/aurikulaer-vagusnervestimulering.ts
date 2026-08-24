import type { NorwegianResearchTopic } from "@/content/research/no/types";

export const aurikulaerVagusnervestimuleringResearchTopic = {
  slug: "aurikulaer-vagusnervestimulering",
  path: "/no/forskning/aurikulaer-vagusnervestimulering",
  status: "published",
  wave: "1D",
  order: 40,

  title:
    "Aurikulær vagusnervestimulering i forskning – øreanatomi, taVNS og tolkningsgrenser",
  seoTitle:
    "Aurikulær VNS-forskning | taVNS og ørestimulering | Neuvago",
  description:
    "Norsk forskningsoversikt over aurikulær VNS og taVNS: øreanatomi, stimuleringssteder, elektroder, sham, sikkerhet og tolkningsgrenser.",
  eyebrow: "Norsk aurikulær forskningsoversikt",
  lead:
    "Aurikulær vagusnervestimulering bruker ytre øre som tilgangspunkt for transkutan stimulering. I forskningen omtales metoden ofte som taVNS, men forkortelsen dekker ikke én ensartet protokoll. Studier varierer i øreområde, side, elektrode, kontakttrykk, strømstyrke, frekvens, pulsbredde, duty cycle, øktlengde, sham, populasjon og endepunkt. Samtidig er ytre øre innervert av flere nerver med overlappende og variabel fordeling. Derfor må aurikulær VNS tolkes som et anatomisk og metodisk landskap, ikke som én universell behandling eller én dokumentert produktmekanisme.",
  shortAnswer: [
    "Aurikulær VNS og taVNS beskriver ørebasert transkutan stimulering, men ikke én standardisert protokoll.",
    "Ytre øre har blandet og variabel innervasjon; et øreområde kan ikke behandles som en ren, eksklusiv vagussone.",
    "Cymba conchae, cavum conchae, tragus, øreflipp og andre steder er forskjellige metodevalg.",
    "Merkbar prikking eller varme dokumenterer elektrisk kontakt, men ikke spesifikk aktivering av aurikulære vagusfibre.",
    "fMRI, HRV, EEG, pupil og andre markører svarer på forskjellige spørsmål og er ikke direkte utskiftbare.",
    "Sham-sted, sensasjonsmatching og blinding påvirker hvordan aktive funn kan tolkes.",
    "Funn fra én aurikulær enhet, plassering eller parameterkombinasjon kan ikke uten videre overføres til en annen.",
    "Neuvago-spesifikke formuleringer må bygge på ferdig enhet, testing, risikostyring, tiltenkt bruk og endelig IFU.",
  ],
  hubSummary:
    "En forskningsoversikt over taVNS, ytre øres sammensatte innervasjon, cymba, cavum, tragus, elektrode, dose, sham, target engagement og produktspecifikke grenser.",
  hubLabel: "Aurikulær taVNS",

  primaryKeyword: "aurikulær vagusnervestimulering forskning",
  secondaryKeywords: [
    "taVNS forskning",
    "auricular vagus nerve stimulation research",
    "transkutan aurikulær vagusnervestimulering",
    "vagusnervestimulering øret",
    "øre vagusnervestimulering forskning",
    "aurikulær gren av vagusnerven",
    "ABVN forskning",
    "cymba conchae taVNS",
    "cavum conchae taVNS",
    "tragus vagusnervestimulering",
    "øreflipp sham taVNS",
    "taVNS fMRI",
    "taVNS target engagement",
    "taVNS parametere",
    "taVNS sikkerhet",
    "taVNS blinding",
    "taVNS elektrode",
    "taVNS øreanatomi",
    "Neuvago forskning",
  ],
  searchIntent: "mixed",

  publishedAt: "2026-08-23",
  modifiedAt: "2026-08-23",
  readingTimeMinutes: 27,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent:
    "/research/topics/auricular-vagus-nerve-stimulation",
  sitemapPriority: 0.9,
  changeFrequency: "weekly",

  researchMap: {
    eyebrow: "Aurikulært metodekart",
    title:
      "Fem lag må skilles før et taVNS-funn kan overføres",
    description:
      "Et aurikulært forskningsfunn blir først tolkbart når øreanatomi, kontakt, elektrisk dose, kontrollbetingelse og målt utfall beskrives separat.",
    items: [
      {
        label: "01",
        title: "Øreområde",
        description:
          "Cymba, cavum, tragus, øreflipp, øregang eller mastoid er ikke samme anatomiske tilgang.",
      },
      {
        label: "02",
        title: "Kontakt",
        description:
          "Elektrodeform, areal, materiale, trykk, impedans og hudkontakt påvirker strømfelt og komfort.",
      },
      {
        label: "03",
        title: "Dose",
        description:
          "Intensitet, frekvens, pulsbredde, duty cycle, øktlengde og samlet eksponering utgjør protokollen.",
      },
      {
        label: "04",
        title: "Kontroll",
        description:
          "Sham må vurderes for sensasjon, blinding og muligheten for egen biologisk aktivitet.",
      },
      {
        label: "05",
        title: "Utfall",
        description:
          "Nevroavbildning, autonom markør, symptomskår og klinisk endepunkt dokumenterer ulike nivåer.",
      },
    ],
  },

  sections: [
    {
      id: "kort-svar",
      eyebrow: "Det viktigste først",
      title:
        "Aurikulær VNS er en metodefamilie, ikke én standardisert behandling",
      blocks: [
        {
          type: "paragraph",
          text: "Aurikulær vagusnervestimulering beskriver elektrisk stimulering ved ytre øre i forsøk på å påvirke signalveier som forbindes med den aurikulære grenen av vagusnerven. I forskningslitteraturen brukes ofte forkortelsen taVNS. Likevel varierer studiene betydelig i hvor på øret stimuleringen gis, hvilken elektrode som brukes, hvordan intensiteten bestemmes, hvordan sham utformes og hvilke utfall som måles.",
        },
        {
          type: "paragraph",
          text: "Den ansvarlige konklusjonen er derfor protokollspesifikk: En studie kan vise et signal under én konkret plassering og dose uten å dokumentere at alle øreområder, alle taVNS-enheter eller alle målgrupper vil gi samme respons.",
        },
        {
          type: "callout",
          tone: "summary",
          title:
            "Ørebasert betyr ikke anatomisk entydig",
          paragraphs: [
            "Ytre øre har sammensatt sensorisk innervasjon og betydelig anatomisk variasjon.",
            "Forskningsresultater bør knyttes til det øreområdet, kontaktoppsettet og den dosen som faktisk ble undersøkt.",
          ],
        },
      ],
    },
    {
      id: "begrepene",
      eyebrow: "Terminologi",
      title:
        "Aurikulær VNS, taVNS, ABVN og ørestimulering overlapper – men er ikke identiske uttrykk",
      blocks: [
        {
          type: "table",
          caption: "Vanlige begreper i aurikulær VNS-litteratur",
          columns: [
            "Begrep",
            "Vanlig betydning",
            "Viktig grense",
          ],
          rows: [
            [
              "Aurikulær VNS",
              "Ørebasert vagusnervestimulering som overordnet uttrykk",
              "Kan brukes bredere enn den konkrete forskningsprotokollen",
            ],
            [
              "taVNS",
              "Transkutan aurikulær vagusnervestimulering gjennom huden ved ytre øre",
              "Forkortelsen sier ikke hvilket sted, hvilken elektrode eller dose som ble brukt",
            ],
            [
              "ABVN",
              "Auricular branch of the vagus nerve – aurikulær gren av vagusnerven",
              "Et anatomisk navn, ikke bevis på at all ørestimulering selektivt aktiverer grenen",
            ],
            [
              "Ear VNS",
              "Bruker- og søkespråk for vagusrelatert ørestimulering",
              "Kan brukes om produkter og metoder med ulike regulatoriske rammer",
            ],
            [
              "Transaurikulær stimulering",
              "Stimulering gjennom eller ved ørets overflate",
              "Brukes ikke alltid konsistent med taVNS i litteraturen",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Et anatomisk mål i navnet dokumenterer ikke selektiv nerveaktivering",
          paragraphs: [
            "Betegnelsen taVNS beskriver forskernes metodehypotese og plassering, men mekanismen må undersøkes med egne data.",
          ],
        },
      ],
    },
    {
      id: "orets-innervasjon",
      eyebrow: "Anatomisk grunnlag",
      title:
        "Ytre øre har blandet, overlappende og variabel nerveforsyning",
      blocks: [
        {
          type: "paragraph",
          text: "Kadaverstudier og anatomiske oversikter beskriver bidrag fra vagusnerven, trigeminusrelaterte grener, ansiktsnerven og cervikale nerver. Peuker og Filler fant en heterogen fordeling der den store ørenerven var fremtredende både lateralt og medialt. Butt og kolleger understreket senere at dagens taVNS-kart bygger på et begrenset anatomisk datagrunnlag og at mer presis kartlegging er nødvendig.",
        },
        {
          type: "table",
          caption: "Nerver som omtales i forskning på ytre øre",
          columns: [
            "Nerve eller gren",
            "Relevans",
            "Tolkningsgrense",
          ],
          rows: [
            [
              "Aurikulær gren av vagusnerven",
              "Den primære nervegrenen taVNS forsøker å nå",
              "Fordeling og tetthet kan variere mellom områder og personer",
            ],
            [
              "Stor ørenerv",
              "Cervikal sensorisk nerve med betydelig forsyning av aurikkelen",
              "Kan bidra til sensasjon og kontrollrespons",
            ],
            [
              "Auriculotemporal nerve",
              "Trigeminal gren som forsyner deler av øret",
              "Sensorisk respons kan ikke automatisk tolkes som vagal",
            ],
            [
              "Liten occipitalnerve",
              "Cervikal nerve som kan bidra posteriort",
              "Bakre øre- og mastoidstimulering kan involvere flere veier",
            ],
            [
              "Ansiktsnerverelaterte bidrag",
              "Små og varierende aurikulære forbindelser er beskrevet",
              "Den funksjonelle betydningen for taVNS er ikke fullt kartlagt",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Anatomiske kart er sannsynlighetskart – ikke en universell fasit",
          paragraphs: [
            "Den samme elektrodeplasseringen kan møte ulik geometri, hudkontakt og nervefordeling hos forskjellige personer.",
          ],
        },
      ],
    },
    {
      id: "stimuleringssteder",
      eyebrow: "Hvor på øret?",
      title:
        "Cymba, cavum, tragus, øreflipp og mastoid er forskjellige metodevalg",
      blocks: [
        {
          type: "table",
          caption: "Vanlige aktive og kontrollerte aurikulære steder",
          columns: [
            "Sted",
            "Hvordan det brukes",
            "Viktig begrensning",
          ],
          rows: [
            [
              "Cymba conchae",
              "Vanlig aktiv plassering i flere taVNS- og fMRI-studier",
              "Lite og uregelmessig område kan gjøre kontakt og reproduserbarhet krevende",
            ],
            [
              "Cavum conchae",
              "Brukes alene eller sammen med nærliggende conchaområder",
              "Innervasjon og elektrodegeometri varierer",
            ],
            [
              "Tragus",
              "Vanlig i flere fysiologiske og parameterstudier",
              "Andre sensoriske nerver kan bidra til opplevelsen",
            ],
            [
              "Øreflipp",
              "Ofte brukt som sham eller kontroll",
              "Kan gi sterk sensasjon og er ikke nødvendigvis biologisk helt inert",
            ],
            [
              "Ytre øregang",
              "Relevant for anatomiske beskrivelser og Arnold-refleksen",
              "Er ikke automatisk ekvivalent med vanlig overflateelektrode ved concha",
            ],
            [
              "Mastoid",
              "Undersøkes som et enklere og større kontaktområde bak øret",
              "Nyere fMRI-data er foreløpige og utfordrer en enkel aktiv–sham-dikotomi",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Stedet må rapporteres mer presist enn bare «øre»",
          paragraphs: [
            "Side, anatomisk del, elektrodeorientering og kontaktflate er nødvendig for sammenligning.",
          ],
        },
      ],
    },
    {
      id: "elektrode-og-kontakt",
      eyebrow: "Strømmen møter huden",
      title:
        "Elektrodeform, areal, trykk og impedans er del av den biologiske dosen",
      blocks: [
        {
          type: "paragraph",
          text: "To studier kan angi samme strømstyrke, men levere svært forskjellige lokale strømfelt dersom elektrodeareal, avstand, kontaktmedium, hudfuktighet, mekanisk trykk eller impedans er forskjellig. Komfort og stabil kontakt er derfor ikke bare brukeropplevelse; de påvirker hva protokollen faktisk leverer.",
        },
        {
          type: "table",
          caption: "Kontaktvariabler som bør rapporteres",
          columns: [
            "Variabel",
            "Hvorfor den betyr noe",
          ],
          rows: [
            [
              "Elektrodeareal",
              "Påvirker lokal strømtetthet og hvor avgrenset feltet blir",
            ],
            [
              "Elektrodeform",
              "Bestemmer hvilke deler av et uregelmessig øreområde som faktisk berøres",
            ],
            [
              "Materiale og gel",
              "Påvirker impedans, stabilitet og hudreaksjoner",
            ],
            [
              "Mekanisk trykk",
              "Kan endre kontakt og samtidig skape egen sensasjon eller smerte",
            ],
            [
              "Avstand mellom poler",
              "Påvirker strømretning og feltgeometri",
            ],
            [
              "Hudforberedelse",
              "Kan redusere variasjon i impedans, men må beskrives",
            ],
            [
              "Bevegelse under økten",
              "Kan gi skiftende kontakt, artefakter og ujevn stimulering",
            ],
          ],
        },
      ],
    },
    {
      id: "elektrisk-dose",
      eyebrow: "Parametere",
      title:
        "Strømstyrke alene beskriver ikke en taVNS-protokoll",
      blocks: [
        {
          type: "table",
          caption: "Elektriske og tidsmessige dosevariabler",
          columns: [
            "Parameter",
            "Hva den beskriver",
            "Tolkningsgrense",
          ],
          rows: [
            [
              "Intensitet",
              "Strøm eller spenning under stimuleringen",
              "Samme verdi kan gi ulik strømtetthet og sensasjon",
            ],
            [
              "Pulsbredde",
              "Varigheten av hver elektriske puls",
              "Endrer ladning per puls og kan ikke ignoreres ved frekvenssammenligning",
            ],
            [
              "Frekvens",
              "Antall pulser per sekund",
              "En «beste frekvens» i én studie er ikke universell",
            ],
            [
              "Bølgeform",
              "Mono- eller bifasisk strøm og pulsgeometri",
              "Påvirker netto ladning, komfort og vevsrespons",
            ],
            [
              "Duty cycle",
              "Forholdet mellom aktiv og inaktiv stimulering",
              "Bestemmer hvor stor del av økten som faktisk er eksponering",
            ],
            [
              "Øktlengde",
              "Minutter med aktiv eller planlagt stimulering",
              "En kort laboratorieøkt er ikke samme eksponering som hjemmebruk",
            ],
            [
              "Programvarighet",
              "Antall dager eller uker og økter per dag",
              "Kumulativ dose må skilles fra dose i én økt",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Parameterfunn er protokollfunn",
          paragraphs: [
            "Badran et al. fant parameteravhengige akutte hjertefrekvensresponser i en liten studie med korte pulstog.",
            "Det etablerer ikke en universell optimal dose for andre endepunkter, enheter eller bruksperioder.",
          ],
        },
      ],
    },
    {
      id: "sensasjon-og-target-engagement",
      eyebrow: "Hva viser prikking?",
      title:
        "Sensasjon dokumenterer kontakt – ikke selektiv target engagement",
      blocks: [
        {
          type: "paragraph",
          text: "Prikking, trykk, varme eller mildt ubehag viser at elektrisk stimulering når sensoriske strukturer. Fordi ytre øre har flere nervebidrag, kan sensasjon ikke alene avgjøre hvilken nervegren som ble aktivert. En deltaker kan dessuten kjenne både aktiv og sham, mens to personer kan rapportere samme intensitet med ulik fysisk dose.",
        },
        {
          type: "definition",
          term: "Target engagement",
          definition:
            "Dokumentasjon på at en intervensjon påvirker det biologiske målet som er relevant for hypotesen. I taVNS kan det undersøkes med nevroavbildning, nevrofysiologi eller andre markører, men ingen enkeltmarkør er universelt validert.",
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Merkbar ørestimulering er ikke bevis på en bestemt vagusmekanisme",
          paragraphs: [
            "Sensasjon kan brukes til komfortkalibrering og blinding, men ikke som alene dokumentasjon på ABVN-aktivering.",
          ],
        },
      ],
    },
    {
      id: "frangos-2015",
      eyebrow: "Grunnleggende fMRI-kontekst",
      title:
        "Frangos et al. viste et nevroavbildningsmønster for én konkret aurikulær protokoll",
      blocks: [
        {
          type: "paragraph",
          text: "Frangos, Ellrich og Komisaruk undersøkte stimulering av ytre øre hos friske deltakere med fMRI. Studien rapporterte respons i områder som ble tolket i lys av sentrale vagale projeksjoner. Den er derfor en sentral mekanismestudie i feltet.",
        },
        {
          type: "paragraph",
          text: "Studien dokumenterer ikke at alle øreområder eller alle taVNS-enheter gir samme mønster. fMRI-signaler påvirkes av analysevalg, kontrollsted, sensasjon, pulsdesign og tidspunkt. Nevroavbildning er dessuten et mekanisme- eller target-engagement-nivå, ikke et klinisk behandlingsutfall.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "fMRI-funn er viktig mekanismekontekst, ikke universelt produktbevis",
          paragraphs: [
            "Det mest presise er å beskrive hvilket øreområde, hvilken kontroll og hvilket nevroavbildningsutfall som ble undersøkt.",
          ],
        },
      ],
    },
    {
      id: "respirasjon-og-timing",
      eyebrow: "Protokolltiming",
      title:
        "Sclocco et al. viste at respirasjonsfasen kan endre responsen i en spesialisert fMRI-protokoll",
      blocks: [
        {
          type: "paragraph",
          text: "I en ultrahøyfelt 7T-fMRI-studie sammenlignet Sclocco og kolleger cymba-stimulering under utpust og innpust, med øreflipp som kontroll. Utpuststyrt stimulering ga sterkere respons i flere undersøkte hjernestammeregioner og økt cardiovagal modulering i denne protokollen.",
        },
        {
          type: "paragraph",
          text: "Resultatet viser at timing kan være en aktiv del av dosehypotesen. Det betyr ikke at respirasjonsstyring er nødvendig eller dokumentert optimal for alle taVNS-formål. Studien brukte spesialisert gating, fMRI-miljø og et begrenset utvalg.",
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "En avansert laboratorieprotokoll kan ikke oversettes direkte til vanlig hjemmebruk",
          paragraphs: [
            "Timing, enhet og endepunkt må være sammenlignbare før resultatet overføres.",
          ],
        },
      ],
    },
    {
      id: "sham-og-blinding",
      eyebrow: "Kontrollbetingelsen",
      title:
        "Øreflipp er vanlig sham, men kontrollen må undersøkes – ikke bare navngis",
      blocks: [
        {
          type: "paragraph",
          text: "En god sham skal ligne den aktive opplevelsen uten å gi den spesifikke biologiske påvirkningen hypotesen gjelder. I taVNS er dette vanskelig fordi ulike øreområder kan gi ulik sensasjon, og fordi kontrollsteder fortsatt stimulerer sensoriske nerver.",
        },
        {
          type: "table",
          caption: "Vanlige sham-strategier og svakheter",
          columns: [
            "Sham",
            "Fordel",
            "Mulig svakhet",
          ],
          rows: [
            [
              "Øreflipp",
              "Lett å plassere og ofte brukt som ikke-vagal kontroll",
              "Kan være sensorisk eller fysiologisk aktiv og kan kjennes annerledes",
            ],
            [
              "Lavere intensitet",
              "Bevarer samme sted og deler av sensasjonen",
              "Kan fortsatt påvirke biologiske mål eller avsløre gruppetilhørighet",
            ],
            [
              "Kort oppstartsstrøm",
              "Gir en initial følelse før strømmen stopper",
              "Sensasjonen forsvinner og kan svekke blinding over tid",
            ],
            [
              "Annet concha- eller tragusområde",
              "Kan matche øreopplevelsen bedre",
              "Anatomiske nervebidrag kan overlappe med aktiv plassering",
            ],
            [
              "Ingen strøm",
              "Tydelig inaktiv kontroll",
              "Svak blinding dersom aktiv stimulering merkes",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Blinding må måles, ikke antas",
          paragraphs: [
            "Deltakernes gjetning av gruppetilhørighet og likheten i sensasjon bør rapporteres.",
            "Nyere fMRI-data der også øreflipp ga et svakere lignende mønster understreker at sham ikke alltid er biologisk tom.",
          ],
        },
      ],
    },
    {
      id: "biomarkorer-og-nullfunn",
      eyebrow: "Hva måles?",
      title:
        "Biomarkører gir et sammensatt bilde – og nullfunn er en nødvendig del av feltet",
      blocks: [
        {
          type: "paragraph",
          text: "taVNS er undersøkt med fMRI, EEG og ERP, pupillometri, salivær alfa-amylase, hjertefrekvens, HRV, barorefleks og subjektive mål. Disse markørene ligger på forskjellige nivåer og har ulike feilkilder.",
        },
        {
          type: "bullets",
          items: [
            "fMRI kan undersøke regionale signalendringer, men er følsom for analyse, bevegelse og kontrollvalg.",
            "ERP og EEG kan undersøke tidsmessig nevral prosessering, men ett komponentmål er ikke en universell LC-markør.",
            "Pupil og salivær alfa-amylase brukes som indirekte noradrenerge mål, men påvirkes av flere forhold.",
            "HRV påvirkes av pust, kroppsstilling, tid på døgnet, aktivitet og analysevalg.",
            "Kliniske symptomskårer og funksjonsmål svarer på andre spørsmål enn akutte biomarkører.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Gadeyne et al. fant ikke den forventede P3b-modulasjonen",
          paragraphs: [
            "I en studie med 39 friske deltakere skilte akutt taVNS seg ikke fra sham eller kontroll på P3b-amplitude eller latens.",
            "Nullfunnet viser hvorfor en foreslått LC–noradrenalinmekanisme må testes med flere metoder og protokoller.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-og-tolerabilitet",
      eyebrow: "Forskningsfeltets sikkerhetslag",
      title:
        "Aurikulær taVNS beskrives generelt som godt tolerert under undersøkte forhold",
      blocks: [
        {
          type: "paragraph",
          text: "Systematiske oversikter peker mot et overordnet gunstig tolerabilitetsmønster, med lokale og milde reaksjoner som øresmerte, prikking, hudirritasjon og hodepine blant de vanligste rapporterte hendelsene. Samtidig er hendelsesrapporteringen ujevn.",
        },
        {
          type: "table",
          caption: "Sikkerhetsfunn og viktige begrensninger",
          columns: [
            "Funn",
            "Hva det støtter",
            "Hva det ikke støtter",
          ],
          rows: [
            [
              "Ingen høyere samlet hendelsesrisiko mot kontroll i analyserbare studier hos Kim et al.",
              "Et gunstig samlet mønster for undersøkte taVNS-protokoller",
              "At alle studier, enheter og målgrupper har samme risikoprofil",
            ],
            [
              "Vanlige hendelser var øresmerte, hodepine og prikking",
              "Lokale og sensoriske reaksjoner bør beskrives tydelig",
              "At alle slike reaksjoner er forventede eller ufarlige i enhver situasjon",
            ],
            [
              "Mange studier omtalte ikke eksplisitt hendelser",
              "Behov for bedre standardisert rapportering",
              "At manglende omtale betyr null hendelser",
            ],
            [
              "Gerges et al. fant hovedsakelig lokale hendelser",
              "Tolerabilitet virker gunstig på tvers av flere kliniske populasjoner",
              "Produktspesifikke Neuvago-rater eller universelle kontraindikasjoner",
            ],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "«Generelt godt tolerert» betyr ikke «risikofritt»",
          paragraphs: [
            "Resultatet gjelder de undersøkte personene, dosene, enhetene og oppfølgingstidene.",
            "Produktspesifikke stoppråd og kontraindikasjoner må komme fra den konkrete enhetens dokumentasjon og IFU.",
          ],
        },
      ],
    },
    {
      id: "rapporteringsstandarder",
      eyebrow: "Reproduserbarhet",
      title:
        "Farmer-konsensusen gjør metodebeskrivelsen til en del av evidensen",
      blocks: [
        {
          type: "paragraph",
          text: "Den internasjonale konsensusrapporten anbefaler at tVNS- og taVNS-studier oppgir enhet, elektrode, anatomisk sted, side, intensitet, frekvens, pulsbredde, duty cycle, øktlengde, deltakerutvalg, kontroll, blinding, utfall og hendelser. Dette er ikke administrativ detalj; uten opplysningene blir studien vanskelig å gjenta og sammenligne.",
        },
        {
          type: "numbered",
          items: [
            "Beskriv øreområdet med entydig anatomisk terminologi.",
            "Oppgi elektrodens størrelse, form, materiale og orientering.",
            "Rapporter intensitet som faktisk levert og hvordan nivået ble valgt.",
            "Oppgi frekvens, pulsbredde, bølgeform og duty cycle.",
            "Skill planlagt øktlengde fra faktisk aktiv stimulering.",
            "Beskriv sham og mål blindingseffektivitet.",
            "Rapporter hendelser, frafall og dosejusteringer.",
            "Knytt hver konklusjon til det endepunktet studien faktisk målte.",
          ],
        },
      ],
    },
    {
      id: "generaliserbarhet",
      eyebrow: "Fra én studie til en annen",
      title:
        "Overføring krever samsvar i anatomi, protokoll, populasjon og utfall",
      blocks: [
        {
          type: "table",
          caption: "Fire nivåer av generaliserbarhet",
          columns: [
            "Nivå",
            "Kontrollspørsmål",
            "Vanlig feilslutning",
          ],
          rows: [
            [
              "Anatomi",
              "Er øreområdet, siden og kontakten sammenlignbar?",
              "Alle øreplasseringer behandles som samme vagale mål",
            ],
            [
              "Protokoll",
              "Er elektrode, dose, timing og total eksponering sammenlignbar?",
              "Ett frekvens- eller intensitetsfunn gjøres universelt",
            ],
            [
              "Populasjon",
              "Ligner deltakerne den nye brukergruppen?",
              "Akutte data fra friske voksne overføres til alle kliniske grupper",
            ],
            [
              "Utfall",
              "Måles samme biomarkør, symptom eller funksjon?",
              "fMRI eller HRV fremstilles som dokumentert klinisk effekt",
            ],
            [
              "Produkt",
              "Er enhet, kontrollsystem og tiltenkt bruk direkte relevant?",
              "En annen produsents data presenteres som Neuvago-data",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Aurikulær VNS-forskning er feltkontekst – ikke en snarvei til produktclaim",
          paragraphs: [
            "En spesifikk kommersiell enhet må vurderes med direkte relevant teknisk og regulatorisk dokumentasjon.",
          ],
        },
      ],
    },
    {
      id: "nyere-stedsforskning",
      eyebrow: "Fremvoksende evidens",
      title:
        "En studie fra 2026 utfordrer antakelsen om at bare cymba er et relevant forskningssted",
      blocks: [
        {
          type: "paragraph",
          text: "En samtidig taVNS–fMRI-studie med 24 friske deltakere sammenlignet cymba conchae, mastoid og øreflipp. Mastoid og cymba ga svært lignende overordnede aktiveringsmønstre, mens øreflipp også ga et lignende, men svakere mønster. Studien rapporterte ingen uønskede hendelser.",
        },
        {
          type: "paragraph",
          text: "Dette er et tidlig enkeltfunn og etablerer ikke mastoid som en validert erstatning for cymba eller som et selektivt ABVN-sted. Det illustrerer derimot to viktige poenger: strøm kan påvirke flere aurikulære og nærliggende sensoriske veier, og kontrollsteder må undersøkes empirisk.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Nyere enkeltstudier bør utvide spørsmålene – ikke lukke dem",
          paragraphs: [
            "Replikasjon, strømfeltmodellering og anatomisk validering er nødvendig før et nytt sted kan gis en sterk mekanismeetikett.",
          ],
        },
      ],
    },
    {
      id: "slik-leser-du-tavns",
      eyebrow: "Praktisk forskningslesing",
      title:
        "Tolv spørsmål gjør en aurikulær studie lettere å vurdere",
      blocks: [
        {
          type: "numbered",
          items: [
            "Hvilket øreområde og hvilken side ble stimulert?",
            "Hvordan var området definert anatomisk?",
            "Hvilken elektrode, kontaktflate og orientering ble brukt?",
            "Hvordan ble intensiteten valgt og kontrollert?",
            "Hva var frekvens, pulsbredde, bølgeform og duty cycle?",
            "Hvor lang var hver økt og hele intervensjonsperioden?",
            "Hvordan var sham utformet, og ble blinding testet?",
            "Hvilket mål ble brukt som target engagement?",
            "Var endepunktet mekanistisk, fysiologisk, subjektivt eller klinisk?",
            "Hvem deltok, og hvem ble ekskludert?",
            "Hvordan ble hendelser, frafall og protokollavvik rapportert?",
            "Er den nye enheten og bruken tilstrekkelig lik til at overføring er rimelig?",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Produktgrensen",
      title:
        "Neuvago kan bruke aurikulær forskning som bakgrunn – men må dokumentere sin egen enhet",
      blocks: [
        {
          type: "paragraph",
          text: "Aurikulær forskning kan informere hvilke metodevariabler som bør beskrives, hvilke reaksjoner som bør overvåkes, hvordan plassering kan forklares, og hvilke mekanismegrenser kommunikasjonen må respektere. Den kan ikke alene dokumentere Neuvagos nøyaktige nerveaktivering, kliniske effekt, hendelsesrate eller universelle egnethet.",
        },
        {
          type: "bullets",
          items: [
            "Produktkommunikasjon skal bruke den faktiske ferdige elektroden og plasseringen som referanse.",
            "Intensitet og øktveiledning skal harmoniseres med testing og endelig IFU.",
            "Forskningsprosent fra andre enheter skal ikke presenteres som Neuvago-prosent.",
            "Sensasjon skal ikke markedsføres som bevis på vagusaktivering.",
            "Velværeformål skal holdes tydelig atskilt fra kliniske indikasjoner i litteraturen.",
            "Sikkerhetsgrenser skal følge risikostyring, verifikasjon, validering og regulatorisk dokumentasjon.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "Endelig IFU og produktsikkerhetsinformasjon har forrang",
          paragraphs: [
            "Forskningssiden er generell evidenskontekst og skal ikke fungere som bruksanvisning eller individuell medisinsk rådgivning.",
          ],
        },
      ],
    },
    {
      id: "oppsummering",
      eyebrow: "Samlet vurdering",
      title:
        "Aurikulær VNS er et viktig forskningsfelt med reelle signaler og tydelige metodiske grenser",
      blocks: [
        {
          type: "bullets",
          items: [
            "taVNS bruker ytre øre som transkutan tilgang, men dekker flere forskjellige protokoller.",
            "Ytre øres nerveforsyning er blandet og variabel, ikke en ren vagussone.",
            "Øreområde, elektrode, kontakt og elektrisk dose må være synlige.",
            "fMRI og andre biomarkører kan støtte target-engagement-hypoteser, men dokumenterer ikke automatisk klinisk effekt.",
            "Sham og blinding er særlig krevende fordi både aktiv og kontroll kan gi sensasjon og sensorisk aktivitet.",
            "Nullfunn og blandede resultater er nødvendige for et troverdig forskningsbilde.",
            "Sikkerhetsmønsteret er overordnet gunstig under undersøkte forhold, men rapporteringskvaliteten varierer.",
            "Neuvago-spesifikke claims krever direkte relevant produktdokumentasjon.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort konklusjon",
          paragraphs: [
            "Aurikulær vagusnervestimulering er en lovende og metodisk kompleks forskningskategori.",
            "Den mest ansvarlige tolkningen knytter hvert funn til det konkrete ørestedet, doseoppsettet, kontrollen, populasjonen og endepunktet.",
          ],
        },
      ],
    },
  ],

  studyHighlights: [
    {
      id: "peuker-2002",
      title:
        "Kadaverkartlegging av nerveforsyningen i ytre øre",
      citation: "Peuker & Filler, Clinical Anatomy",
      year: 2002,
      design: "Kadaverbasert anatomisk studie",
      question:
        "Hvordan er sensoriske nerver fordelt på aurikkelens laterale og mediale flater?",
      finding:
        "Studien beskrev en heterogen nervefordeling og fant at den store ørenerven var fremtredende på begge flater.",
      limitation:
        "Kun 14 ører fra sju kadavere ble undersøkt; kartet dokumenterer ikke selektiv aktivering ved en bestemt elektrode.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/11835542/",
    },
    {
      id: "frangos-2015",
      title:
        "Aurikulær stimulering og sentrale vagale projeksjoner",
      citation: "Frangos et al., Brain Stimulation",
      year: 2015,
      design: "Human fMRI-studie",
      question:
        "Ga elektrisk stimulering av et ytre øreområde et fMRI-mønster forenlig med sentrale vagale projeksjoner?",
      finding:
        "Studien rapporterte nevroavbildningsrespons i områder tolket i lys av vagale signalveier.",
      limitation:
        "Funnene gjelder den konkrete plasseringen, kontrollen, dosen og fMRI-analysen – ikke alle taVNS-enheter.",
      href:
        "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/25573069/",
    },
    {
      id: "badran-2018",
      title:
        "Korte taVNS-pulstog ga parameteravhengige hjertefrekvensresponser",
      citation: "Badran et al., Brain Stimulation",
      year: 2018,
      design: "Små sekvensielle crossover-forsøk",
      question:
        "Hvordan påvirket kombinasjoner av frekvens og pulsbredde akutt hjertefrekvens?",
      finding:
        "Enkelte parameterkombinasjoner ga forskjellige akutte hjertefrekvensresponser.",
      limitation:
        "Små utvalg, korte pulstog og hjertefrekvens som endepunkt etablerer ikke en universell optimal dose.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/29716843/",
    },
    {
      id: "badran-2019",
      title:
        "Laboratoriemetode for plassering, kontakt og intensitet",
      citation: "Badran et al., Journal of Visualized Experiments",
      year: 2019,
      design: "Metodeartikkel",
      question:
        "Hvordan kan taVNS administreres mer konsistent i laboratoriet?",
      finding:
        "Artikkelen beskrev øremål, elektrodeplassering, kontakt, sensasjonsterskel og stimuleringsparametere.",
      limitation:
        "Metodisk reproduserbarhet er ikke det samme som dokumentert klinisk effekt eller produktsikkerhet.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/30663712/",
    },
    {
      id: "sclocco-2019",
      title:
        "Respirasjonsfasen påvirket responsen i en 7T-fMRI-protokoll",
      citation: "Sclocco et al., Brain Stimulation",
      year: 2019,
      design: "Kontrollert multimodal 7T-fMRI-studie",
      question:
        "Var cymba-stimulering under utpust forskjellig fra innpust og øreflippkontroll?",
      finding:
        "Utpuststyrt stimulering ga sterkere undersøkt hjernestammerespons og cardiovagal modulering.",
      limitation:
        "Spesialisert respirasjonsgating og fMRI-miljø kan ikke direkte overføres til vanlig hjemmebruk.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/30803865/",
    },
    {
      id: "butt-2020",
      title:
        "Anatomisk oversikt over grunnlaget for taVNS",
      citation: "Butt et al., Journal of Anatomy",
      year: 2020,
      design: "Anatomisk oversiktsartikkel",
      question:
        "Hva støtter og begrenser det anatomiske grunnlaget for aurikulær vagusstimulering?",
      finding:
        "Oversikten samlet kunnskap om ABVN, øreinnervasjon, sentrale projeksjoner og vanlige stimuleringssteder.",
      limitation:
        "Det anatomiske evidensgrunnlaget er begrenset og bygger delvis på få historiske kadaverstudier.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/31742681/",
    },
    {
      id: "farmer-2021",
      title:
        "Internasjonale minimumsstandarder for tVNS-rapportering",
      citation: "Farmer et al., Frontiers in Human Neuroscience",
      year: 2021,
      design: "Internasjonal konsensus",
      question:
        "Hvilke metodeopplysninger må publiseres for at tVNS- og taVNS-studier skal kunne tolkes?",
      finding:
        "Ekspertgruppen anbefalte detaljert rapportering av anatomi, enhet, elektrode, dose, kontroll, utvalg, utfall og sikkerhet.",
      limitation:
        "Standardene forbedrer fremtidig forskning, men kan ikke reparere manglende data i eldre studier.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/33854421/",
    },
    {
      id: "gadeyne-2022",
      title:
        "Akutt taVNS endret ikke P3b i friske deltakere",
      citation: "Gadeyne et al., Clinical Neurophysiology",
      year: 2022,
      design: "Randomisert sham- og kontrollert crossover-studie",
      question:
        "Påvirket akutt taVNS P3b som foreslått indirekte noradrenerg markør?",
      finding:
        "P3b-amplitude og latens skilte seg ikke fra sham eller ingen stimulering.",
      limitation:
        "Ett akutt ERP-oppsett kan ikke avvise alle LC-relaterte mekanismer eller andre doser.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/35007840/",
    },
    {
      id: "kim-2022",
      title:
        "Systematisk sikkerhetssyntese for taVNS",
      citation: "Kim et al., Scientific Reports",
      year: 2022,
      design: "Systematisk oversikt og metaanalyse",
      question:
        "Var aktiv taVNS forbundet med høyere risiko for uønskede hendelser enn kontroll?",
      finding:
        "Analyserbare studier viste ingen forskjell i samlet hendelsesrisiko; vanlige hendelser var øresmerte, hodepine og prikking.",
      limitation:
        "Mer enn halvparten av studiene omtalte ikke eksplisitt om hendelser forekom.",
      href:
        "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/36543841/",
    },
    {
      id: "gerges-2024",
      title:
        "Kliniske anvendelser, parametere og sham på tvers av 109 studier",
      citation: "Gerges et al., Disability and Rehabilitation",
      year: 2024,
      design: "Scoping review",
      question:
        "Hvordan var taVNS, sham, parametere og hendelser rapportert i kliniske populasjoner?",
      finding:
        "Reviewet fant bred anvendelse, hovedsakelig lokale hendelser og betydelig variasjon i parametere.",
      limitation:
        "Parameter- og sham-rapporteringen var ufullstendig, og full metodisk kvalitetsvurdering ble ikke gjennomført.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/38362860/",
    },
    {
      id: "mastoid-cymba-2026",
      title:
        "Mastoid og cymba ga lignende aktiveringsmønstre i en liten fMRI-studie",
      citation: "Concurrent taVNS-fMRI study, Neuromodulation",
      year: 2026,
      design: "Enkeltblindet sham-kontrollert fMRI-studie",
      question:
        "Ga mastoidstimulering et nevroavbildningsmønster som lignet cymba og skilte seg fra øreflipp?",
      finding:
        "Mastoid og cymba ga svært lignende overordnede mønstre; øreflipp ga også et svakere lignende mønster.",
      limitation:
        "24 friske deltakere og ett akutt fMRI-oppsett etablerer ikke mastoid som validert ABVN-mål eller klinisk metode.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/42268178/",
    },
  ],

  sources: [
    {
      id: "peuker-2002",
      authors: "Peuker ET, Filler TJ",
      title: "The nerve supply of the human auricle",
      publication: "Clinical Anatomy",
      year: 2002,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/11835542/",
      doi: "10.1002/ca.1089",
      pmid: "11835542",
      note:
        "Kadaverstudie av 14 ører som beskrev heterogen nerveforsyning i aurikkelen.",
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
        "Grunnleggende human fMRI-kontekst for aurikulær stimulering og sentrale projeksjoner.",
    },
    {
      id: "badran-2018",
      authors:
        "Badran BW, Dowdle LT, Mithoefer OJ, LaBate NT, Coatsworth J, Brown JC, DeVries WH, Austelle CW, McTeague LM, George MS",
      title:
        "Short trains of transcutaneous auricular vagus nerve stimulation (taVNS) have parameter-specific effects on heart rate",
      publication: "Brain Stimulation",
      year: 2018,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/29716843/",
      doi: "10.1016/j.brs.2018.04.004",
      pmid: "29716843",
      note:
        "Små akutte parameterforsøk som undersøkte frekvens, pulsbredde og hjertefrekvens.",
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
        "Metodegrunnlag for øremål, elektrodeplassering, kontakt, terskel og dose.",
    },
    {
      id: "sclocco-2019",
      authors:
        "Sclocco R, Garcia RG, Kettner NW, Isenburg K, Fisher HP, Hubbard CS, Ay I, Polimeni JR, Goldstein J, Makris N, Toschi N, Barbieri R, Napadow V",
      title:
        "The influence of respiration on brainstem and cardiovagal response to auricular vagus nerve stimulation: A multimodal ultrahigh-field (7T) fMRI study",
      publication: "Brain Stimulation",
      year: 2019,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/30803865/",
      doi: "10.1016/j.brs.2019.02.003",
      pmid: "30803865",
      note:
        "Undersøkte respirasjonsstyrt cymba-stimulering, øreflippkontroll, hjernestamme-fMRI og cardiovagal respons.",
    },
    {
      id: "butt-2020",
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
        "Anatomisk oversikt som fremhever både grunnlaget og kunnskapshullene for taVNS.",
    },
    {
      id: "farmer-2021",
      authors:
        "Farmer AD, Strzelczyk A, Finisguerra A, et al.",
      title:
        "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
      publication: "Frontiers in Human Neuroscience",
      year: 2021,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
      doi: "10.3389/fnhum.2020.568051",
      pmid: "33854421",
      note:
        "Internasjonal konsensus om minimumsrapportering for tVNS- og taVNS-forskning.",
    },
    {
      id: "gadeyne-2022",
      authors:
        "Gadeyne S, Mertens A, Carrette E, Van den Bossche F, Boon P, Raedt R, Vonck K",
      title:
        "Transcutaneous auricular vagus nerve stimulation cannot modulate the P3b event-related potential in healthy volunteers",
      publication: "Clinical Neurophysiology",
      year: 2022,
      type: "randomized-trial",
      url: "https://pubmed.ncbi.nlm.nih.gov/35007840/",
      doi: "10.1016/j.clinph.2021.11.079",
      pmid: "35007840",
      note:
        "Sham- og kontrollert crossover-studie med nullfunn for P3b i friske deltakere.",
    },
    {
      id: "kim-2022",
      authors:
        "Kim AY, Marduy A, de Melo PS, Gianlorenco AC, Kim CK, Choi H, Song JJ, Fregni F",
      title:
        "Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis",
      publication: "Scientific Reports",
      year: 2022,
      type: "meta-analysis",
      url: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
      doi: "10.1038/s41598-022-25864-1",
      pmid: "36543841",
      note:
        "Systematisk sikkerhetssyntese med 177 studier og store rapporteringsmangler.",
    },
    {
      id: "soltani-2023",
      authors:
        "Soltani D, Tee BL, Yusoff MZM, et al.",
      title:
        "A systematic review of the effects of transcutaneous auricular vagus nerve stimulation on baroreflex sensitivity and heart rate variability in healthy subjects",
      publication: "Applied Psychophysiology and Biofeedback",
      year: 2023,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/37119426/",
      pmid: "37119426",
      note:
        "Blandede autonome funn og betydelig heterogenitet i studiedesign og stimuleringsdose.",
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
        "Kartla 109 studier, 21 kliniske populasjoner, parametere, sham og sikkerhetsrapportering.",
    },
    {
      id: "mastoid-cymba-2026",
      authors:
        "Peng X, Cox SS, Sutton F, Wood M, Tucker KB, Cash N, Badran BW, Borckardt JJ",
      title:
        "Concurrent taVNS-fMRI Revealed Similar Brain Activation Patterns Elicited by Stimulation of the Mastoid and the Cymba Conchae",
      publication: "Neuromodulation",
      year: 2026,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/42268178/",
      doi: "10.1016/j.neurom.2026.04.015",
      pmid: "42268178",
      note:
        "Ny liten fMRI-studie som sammenlignet cymba, mastoid og øreflipp og reiser nye spørsmål om sted og sham.",
    },
  ],

  relatedSlugs: [
    "vagusnervestimulering",
    "transkutan-vagusnervestimulering",
    "sikkerhet-og-tolerabilitet",
  ],
  relatedKnowledgeSlugs: [
    "aurikulaer-vagusnervestimulering",
    "orets-anatomi-og-vagusnerven",
    "transkutan-vagusnervestimulering",
    "ikke-invasiv-vagusnervestimulering",
    "vagusnervestimulering",
    "er-vagusnervestimulering-trygt",
    "bivirkninger-ved-ikke-invasiv-vagusnervestimulering",
  ],
  relatedLinks: [
    {
      title: "English auricular VNS research",
      description:
        "Open the English language-equivalent research topic on taVNS, ear anatomy, stimulation sites, controls and interpretation limits.",
      href: "/research/topics/auricular-vagus-nerve-stimulation",
      label: "Open English research topic",
    },
    {
      title: "Frangos et al. 2015",
      description:
        "Read Neuvago’s study summary of foundational human fMRI evidence on electrical stimulation of the external ear.",
      href:
        "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      label: "Read study summary",
    },
    {
      title: "Transkutan VNS-forskning",
      description:
        "Place auricular stimulation inside the wider tVNS method landscape covering cervical access, dose, sham and target engagement.",
      href: "/no/forskning/transkutan-vagusnervestimulering",
      label: "Open tVNS research",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Review adverse-event reporting, tolerability, causality, study exclusions and product-specific safety boundaries.",
      href: "/no/forskning/sikkerhet-og-tolerabilitet",
      label: "Open safety research",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "See how Neuvago separates general research context, wellness purpose and medical product claims.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Read intended use",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Move from research context to the current practical explanation of device placement, controls, sessions and everyday use.",
      href: "/no/slik-fungerer-det",
      label: "See how it works",
    },
  ],
} as const satisfies NorwegianResearchTopic;
