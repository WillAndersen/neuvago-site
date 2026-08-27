import type { NorwegianResearchTopic } from "@/content/research/no/types";

export const vagusnervestimuleringResearchTopic = {
  slug: "vagusnervestimulering",
  path: "/no/forskning/vagusnervestimulering",
  status: "published",
  wave: "1D",
  order: 10,

  title:
    "Forskning på vagusnervestimulering – metoder, evidens og begrensninger",
  seoTitle:
    "Forskning på vagusnervestimulering | VNS og tVNS | Neuvago",
  description:
    "En norsk oversikt over forskning på implantert VNS, nVNS, tVNS og taVNS, studiedesign, mekanismer, utfall, sikkerhet og tolkningsgrenser.",
  eyebrow: "Norsk forskningsoversikt",
  lead:
    "Forskning på vagusnervestimulering omfatter flere teknologier og flere typer spørsmål. Noen studier undersøker kirurgisk implantert VNS i medisinsk behandling. Andre undersøker ekstern stimulering ved halsen eller ytre øre, fysiologiske markører, hjernens respons, kliniske utfall eller tolerabilitet. Et enkelt positivt resultat kan derfor ikke beskrive hele feltet – og kan heller ikke automatisk dokumentere en bestemt enhet. Denne oversikten viser hvordan forskningen er bygget opp, hvilke studier som er sentrale, og hva som fortsatt er usikkert.",
  shortAnswer: [
    "VNS-forskning må deles etter metode: implantert VNS, ikke-invasiv VNS, transkutan VNS og aurikulær taVNS er ikke ett homogent datasett.",
    "Studier kan undersøke mekanisme, target engagement, fysiologiske markører, kliniske utfall, sikkerhet eller brukbarhet – disse spørsmålene krever forskjellige design.",
    "Sham, blinding, plassering, intensitet, pulsbredde, frekvens og samlet eksponering påvirker hvor godt studier kan sammenlignes.",
    "Systematiske oversikter gir et bredere bilde enn enkeltstudier, men kan fortsatt være begrenset av heterogene protokoller og svak rapportering.",
    "Neuvago bruker forskningen som kontekst for utdanning og risikovurdering, ikke som direkte bevis for produktspesifikke behandlings- eller effektpåstander.",
  ],
  hubSummary:
    "Den brede norske forskningspillaren for implantert VNS, nVNS, tVNS og taVNS – med studiedesign, mekanisme, kliniske utfall, sikkerhet og ansvarlig produktfortolkning.",
  hubLabel: "Hovedtema",

  primaryKeyword: "forskning på vagusnervestimulering",
  secondaryKeywords: [
    "vagusnervestimulering forskning",
    "VNS forskning",
    "tVNS forskning",
    "taVNS forskning",
    "ikke-invasiv vagusnervestimulering forskning",
    "aurikulær vagusnervestimulering forskning",
    "implantert VNS forskning",
    "vagus nerve stimulation studies",
    "vagusnervestimulering studier",
    "tVNS studiedesign",
    "taVNS sham",
    "taVNS fMRI",
    "taVNS HRV",
    "taVNS sikkerhet",
    "vagusnervestimulering evidens",
    "Neuvago forskning",
  ],
  searchIntent: "mixed",

  publishedAt: "2026-08-23",
  modifiedAt: "2026-08-23",
  readingTimeMinutes: 27,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/research/topics/vagus-nerve-stimulation",
  sitemapPriority: 0.91,
  changeFrequency: "weekly",

  researchMap: {
    eyebrow: "Forskningskart",
    title:
      "Fem lag må holdes fra hverandre når VNS-studier tolkes",
    description:
      "Et felt blir tydeligere når metode, biologisk mål, måling, utfall og sikkerhet vurderes som separate lag.",
    items: [
      {
        label: "01",
        title: "Metode",
        description:
          "Implantert, cervikal eller aurikulær stimulering – med konkret enhet og plassering.",
      },
      {
        label: "02",
        title: "Target engagement",
        description:
          "Om stimuleringen når eller påvirker den antatte biologiske banen.",
      },
      {
        label: "03",
        title: "Markør",
        description:
          "fMRI, HRV, pupillometri, EEG eller andre mål som brukes som indirekte signaler.",
      },
      {
        label: "04",
        title: "Utfall",
        description:
          "Symptomskår, funksjon, søvn, livskvalitet eller annet forhåndsdefinert endepunkt.",
      },
      {
        label: "05",
        title: "Sikkerhet",
        description:
          "Uønskede hendelser, alvorlighet, frafall, komfort og samlet eksponering.",
      },
    ],
  },

  sections: [
    {
      id: "kort-svar",
      eyebrow: "Det viktigste først",
      title:
        "VNS-forskning er et forskningsfelt – ikke én samlet behandlingstest",
      blocks: [
        {
          type: "paragraph",
          text: "Ordet vagusnervestimulering kan vise til et kirurgisk implantat, en ekstern halsenhet eller transkutan stimulering ved øret. Studiene kan ha forskjellige indikasjoner, brukergrupper, doser og utfallsmål. Derfor må leseren først avklare hvilken metode og hvilket spørsmål studien faktisk gjelder.",
        },
        {
          type: "paragraph",
          text: "Feltet inneholder både grunnforskning, metodeutvikling, neuroimaging, fysiologiske studier, randomiserte kliniske forsøk, systematiske oversikter og sikkerhetsanalyser. Disse evidenstypene utfyller hverandre, men de kan ikke uten videre erstatte hverandre.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Den viktigste tolkningsregelen",
          paragraphs: [
            "Et funn fra én enhet, én plassering, én parameterkombinasjon og én målgruppe gjelder først og fremst akkurat den studien.",
            "Generaliserbarhet må begrunnes – den følger ikke automatisk av ordet VNS eller taVNS.",
          ],
        },
      ],
    },
    {
      id: "feltet-omfatter-flere-metoder",
      eyebrow: "Metode før resultat",
      title:
        "Implantert VNS, nVNS, tVNS og taVNS må beskrives separat",
      blocks: [
        {
          type: "table",
          caption: "Hovedkategorier i forskningslitteraturen",
          columns: [
            "Kategori",
            "Levering",
            "Typisk forskningskontekst",
            "Viktig grense",
          ],
          rows: [
            [
              "Implantert VNS",
              "Kirurgisk pulsgenerator og elektrode ved vagusnerven",
              "Epilepsi, behandlingsresistent depresjon og andre kliniske spørsmål",
              "Kliniske implantatdata dokumenterer ikke en ekstern øreenhet",
            ],
            [
              "Ikke-invasiv VNS",
              "Ekstern stimulering uten implantert maskinvare",
              "Samlebetegnelse som kan dekke flere plasseringer og produkter",
              "nVNS er ikke én standardisert protokoll",
            ],
            [
              "Cervikal tVNS/nVNS",
              "Stimulering gjennom huden ved halsen",
              "Kliniske og eksperimentelle studier med halsbaserte enheter",
              "Halsplassering kan ikke behandles som aurikulær plassering",
            ],
            [
              "Aurikulær taVNS",
              "Stimulering ved bestemte områder av ytre øre",
              "Neuroimaging, autonom regulering, sikkerhet og kliniske utfall",
              "Øreområde, elektrode og sham-design varierer betydelig",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Ikke-invasiv beskriver levering – ikke automatisk evidensnivå",
          paragraphs: [
            "Fravær av kirurgi sier ikke i seg selv hvor godt en effekt er dokumentert, hvilken målgruppe som er undersøkt eller hvilke produktpåstander som er tillatt.",
          ],
        },
      ],
    },
    {
      id: "evidenshierarki-og-sporsmal",
      eyebrow: "Hva undersøkes egentlig?",
      title:
        "Evidensstyrken avhenger av både forskningsspørsmål og design",
      blocks: [
        {
          type: "table",
          caption: "Vanlige evidenstyper i VNS-feltet",
          columns: [
            "Evidenstype",
            "Typisk spørsmål",
            "Styrke",
            "Begrensning",
          ],
          rows: [
            [
              "Metodeartikkel",
              "Hvordan leveres stimuleringen?",
              "Gjør protokollen reproduserbar",
              "Tester ikke nødvendigvis effekt",
            ],
            [
              "Neuroimaging eller fysiologi",
              "Påvirkes et antatt biologisk mål?",
              "Kan støtte mekanisme og target engagement",
              "Er ikke alene klinisk dokumentasjon",
            ],
            [
              "Randomisert kontrollert studie",
              "Er utfallet bedre enn kontroll?",
              "Reduserer flere former for bias",
              "Kan være liten, kort eller dårlig blindet",
            ],
            [
              "Systematisk oversikt",
              "Hva viser alle relevante studier samlet?",
              "Gir bredde og strukturert kvalitetsvurdering",
              "Arver svakheter og heterogenitet",
            ],
            [
              "Metaanalyse",
              "Hva er et samlet effekt- eller risikomål?",
              "Kan øke presisjonen",
              "Samlet tall kan skjule store protokollforskjeller",
            ],
          ],
        },
        {
          type: "numbered",
          items: [
            "Metode: Kan stimuleringen leveres stabilt og reproduserbart ved den valgte plasseringen?",
            "Mekanisme: Påvirkes baner eller hjerneregioner som er relevante for den biologiske hypotesen?",
            "Fysiologi: Endres HRV, puls, pupillrespons, EEG eller andre markører?",
            "Klinisk utfall: Endres et forhåndsdefinert symptom-, funksjons- eller livskvalitetsmål sammenlignet med kontroll?",
            "Sikkerhet og brukbarhet: Hvilke reaksjoner, avbrudd, frafall og alvorlige hendelser rapporteres?",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Et mekanismefunn er ikke automatisk et klinisk utfall",
          paragraphs: [
            "Aktivering i et fMRI-nettverk eller endring i en fysiologisk markør kan støtte en hypotese.",
            "Det beviser ikke alene at en person oppnår en bestemt helse- eller velværeeffekt.",
          ],
        },
      ],
    },
    {
      id: "implantert-vns",
      eyebrow: "Det etablerte kliniske sporet",
      title:
        "Implantert VNS har en annen historikk, risikoramme og evidenstype enn ekstern stimulering",
      blocks: [
        {
          type: "paragraph",
          text: "Implantert VNS ble utviklet som en klinisk neuromodulasjonsbehandling og undersøkes med kirurgisk implantasjon, programmering og langvarig oppfølging. Studier innen epilepsi og behandlingsresistent depresjon har formet mye av den tidlige VNS-litteraturen.",
        },
        {
          type: "paragraph",
          text: "Den randomiserte akuttfasestudien til Rush og kolleger fra 2005 undersøkte implantert VNS ved behandlingsresistent depresjon. Studien illustrerer hvorfor klinisk VNS må vurderes med kontrollgruppe, kronisk sykdomsbelastning, samtidig behandling og oppfølgingstid – ikke bare med en enkel før-og-etter-sammenligning.",
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Implantatforskning er viktig bakgrunn – men ikke produktbevis for taVNS",
          paragraphs: [
            "Felles nervebetegnelse gjør ikke levering, dose, målgruppe eller risikoprofil identisk.",
          ],
        },
      ],
    },
    {
      id: "ikke-invasiv-og-transkutan-vns",
      eyebrow: "Det eksterne forskningssporet",
      title:
        "Ikke-invasive studier gir lettere tilgang – og større protokollvariasjon",
      blocks: [
        {
          type: "paragraph",
          text: "Ekstern stimulering gjør det mulig å undersøke vagusrelaterte hypoteser uten kirurgi og i flere forskningsmiljøer. Samtidig øker variasjonen i enheter, kontaktflater, plassering, strømform, intensitet, pulsbredde, frekvens, duty cycle og øktlengde.",
        },
        {
          type: "paragraph",
          text: "Badran og kollegers metodeartikkel fra 2019 viser hvor mange praktiske detaljer som må beskrives for at en taVNS-protokoll skal kunne gjentas. Farmer og en internasjonal ekspertgruppe utvidet dette til minimumsstandarder for rapportering av tVNS-forskning.",
        },
        {
          type: "table",
          caption: "Metodedetaljer som bør finnes i en tVNS-studie",
          columns: [
            "Detalj",
            "Hvorfor den betyr noe",
          ],
          rows: [
            [
              "Enhet og elektrode",
              "Kontaktflate og strømlevering kan påvirke både dose og komfort",
            ],
            [
              "Anatomisk plassering",
              "Hals, cymba conchae, tragus og andre steder er ikke ekvivalente",
            ],
            [
              "Intensitet og terskelmetode",
              "Dose kan styres etter fast strøm, sensasjonsterskel eller individuell toleranse",
            ],
            [
              "Frekvens og pulsbredde",
              "Endrer den elektriske stimuleringen og kan påvirke sammenlignbarhet",
            ],
            [
              "Duty cycle og øktlengde",
              "Bestemmer aktiv stimuleringstid og samlet eksponering",
            ],
            [
              "Sham og blinding",
              "Avgjør hvor godt forventning og sensasjon kontrolleres",
            ],
          ],
        },
      ],
    },
    {
      id: "aurikulaer-forskning",
      eyebrow: "Ørebasert stimulering",
      title:
        "Aurikulær VNS undersøkes gjennom anatomi, neuroimaging, fysiologi og kliniske forsøk",
      blocks: [
        {
          type: "paragraph",
          text: "taVNS-forskning tar utgangspunkt i at bestemte deler av ytre øre har relevant nevral innervasjon og kan gi ikke-invasiv tilgang til vagusrelaterte baner. Dette er en biologisk og metodisk hypotese som undersøkes med flere typer data.",
        },
        {
          type: "paragraph",
          text: "Frangos, Ellrich og Komisaruk publiserte i 2015 en fMRI-studie som ofte brukes som sentral neuroimaging-kontekst for stimulering av ytre øre. Studien støtter at aurikulær stimulering kan påvirke sentrale områder forbundet med vagale projeksjoner, men den dokumenterer ikke alle øreplasseringer, parametere eller kliniske utfall.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Neuroimaging styrker mekanismediskusjonen – ikke alle produktpåstander",
          paragraphs: [
            "Et hjernesignal må tolkes sammen med studiedesign, kontrollbetingelse, plassering og det faktiske endepunktet.",
          ],
        },
      ],
    },
    {
      id: "sham-blinding-og-kontroll",
      eyebrow: "Studiedesign",
      title:
        "Sham-stimulering er nødvendig – og vanskelig å gjøre troverdig",
      blocks: [
        {
          type: "paragraph",
          text: "Elektrisk stimulering kan kjennes. En kontrollbetingelse må derfor balansere to hensyn: Den bør ligne aktiv behandling godt nok til å opprettholde blinding, men samtidig ikke levere den samme antatte biologiske stimuleringen.",
        },
        {
          type: "table",
          caption: "Vanlige sham-utfordringer",
          columns: [
            "Utfordring",
            "Mulig konsekvens",
          ],
          rows: [
            [
              "Sham kjennes svakere",
              "Deltakeren kan gjette gruppetilhørighet",
            ],
            [
              "Sham bruker et annet øreområde",
              "Kontrollstedet kan fortsatt ha biologiske eller sensoriske effekter",
            ],
            [
              "Intensiteten justeres forskjellig",
              "Forventning og komfort blir ulik mellom gruppene",
            ],
            [
              "Blinding testes ikke",
              "Det blir uklart om resultatet kan påvirkes av forventning",
            ],
            [
              "Ulike oppfølgingsrutiner",
              "Bivirknings- og utfallsrapportering kan bli skjev",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Sham betyr ikke nødvendigvis null strøm eller null sensasjon",
          paragraphs: [
            "Kontrollbetingelsen må beskrives detaljert før studiens effektstørrelse kan tolkes.",
          ],
        },
      ],
    },
    {
      id: "parametere-og-dose",
      eyebrow: "Elektrisk dose",
      title:
        "Samme navn kan skjule svært forskjellige stimuleringsdoser",
      blocks: [
        {
          type: "paragraph",
          text: "To studier kan begge bruke ordet taVNS og likevel levere ulik strøm til ulikt øreområde i ulik tid. Derfor er parameterheterogenitet en av de viktigste årsakene til at resultater varierer og metaanalyser blir vanskelige å tolke.",
        },
        {
          type: "bullets",
          items: [
            "Strømstyrke må vurderes sammen med elektrode, impedans og kontaktflate.",
            "Frekvens og pulsbredde bør ikke omtales som isolerte tall uten resten av protokollen.",
            "Duty cycle påvirker hvor mye av økten som faktisk består av aktiv stimulering.",
            "En enkelt laboratorieøkt og daglig hjemmebruk over måneder er forskjellige eksponeringsspørsmål.",
            "Individuell sensasjonsterskel kan gi mer komfort, men også mer dosevariasjon mellom deltakere.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Rapporteringsstandarder er en forutsetning for kumulativ forskning",
          paragraphs: [
            "Hvis dose, kontakt og plassering ikke beskrives, blir det vanskelig å gjenta studien eller forklare hvorfor funn spriker.",
          ],
        },
      ],
    },
    {
      id: "mekanisme-og-target-engagement",
      eyebrow: "Biologisk plausibilitet",
      title:
        "Mekanismeforskning spør om stimuleringen treffer den antatte banen",
      blocks: [
        {
          type: "definition",
          term: "Target engagement",
          definition:
            "Dokumentasjon på at en intervensjon påvirker det biologiske målet den er ment å påvirke. Det kan undersøkes med neuroimaging, nevrofysiologi eller andre forhåndsdefinerte markører.",
        },
        {
          type: "paragraph",
          text: "I taVNS-forskning brukes blant annet fMRI, evoked potentials, pupillometri, EEG, autonome mål og laboratorieoppgaver. Ingen av disse er en universell gullstandard for at vagusnerven er stimulert på en bestemt måte.",
        },
        {
          type: "paragraph",
          text: "En studie fra 2022 fant for eksempel ikke støtte for en antatt kontinuerlig taVNS-effekt på de undersøkte noradrenerge markørene. Negative og inkonsistente funn er viktige fordi de avgrenser mekanismehypotesene og motvirker at enhver fysiologisk endring tolkes som vagusspesifikk.",
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Sensasjon er ikke target engagement",
          paragraphs: [
            "Prikking viser at strøm merkes i huden. Det dokumenterer ikke alene hvilken nervebane eller sentral mekanisme som er påvirket.",
          ],
        },
      ],
    },
    {
      id: "hrv-og-andre-markorer",
      eyebrow: "Indirekte mål",
      title:
        "HRV er relevant forskningskontekst – men ikke en enkel vagusmåler",
      blocks: [
        {
          type: "paragraph",
          text: "HRV brukes ofte i forskning på autonom regulering, men påvirkes av pust, kroppsstilling, tid på døgnet, aktivitet, målemetode og mange andre forhold. En endring i HRV kan derfor ikke uten videre tilskrives taVNS.",
        },
        {
          type: "paragraph",
          text: "Soltani og kollegers systematiske oversikt fra 2023 inkluderte 21 kontrollerte studier i friske personer. Resultatene var blandede, og forfatterne fremhevet heterogene studiedesign og stimuleringsdoser som viktige forklaringer.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Blandede HRV-funn er informasjon – ikke et mislykket forskningsfelt",
          paragraphs: [
            "De viser at markøren og protokollen må standardiseres bedre før HRV kan brukes som pålitelig responsmål.",
          ],
        },
      ],
    },
    {
      id: "kliniske-utfall",
      eyebrow: "Hva opplever eller fungerer bedre?",
      title:
        "Kliniske utfall må være forhåndsdefinerte, relevante og sammenlignet med kontroll",
      blocks: [
        {
          type: "paragraph",
          text: "Kliniske studier kan måle symptomskår, funksjon, livskvalitet, søvn eller andre endepunkter. Resultatet blir mer troverdig når det primære utfallet er forhåndsregistrert, analysen følger randomiseringen, og kontrollgruppen behandles likt.",
        },
        {
          type: "table",
          caption: "Spørsmål ved kliniske resultater",
          columns: [
            "Spørsmål",
            "Hvorfor det betyr noe",
          ],
          rows: [
            [
              "Var utfallet primært eller sekundært?",
              "Mange sekundære analyser øker risikoen for tilfeldige funn",
            ],
            [
              "Var studien randomisert og kontrollert?",
              "Før-og-etter-endring kan skyldes tid, forventning eller annen behandling",
            ],
            [
              "Var effekten klinisk meningsfull?",
              "Statistisk signifikans er ikke automatisk merkbar nytte",
            ],
            [
              "Hvor lenge varte oppfølgingen?",
              "Korttidseffekt sier lite om varighet",
            ],
            [
              "Var populasjonen representativ?",
              "Strenge eksklusjonskriterier kan begrense generaliserbarhet",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Systematiske oversikter om søvn og andre kliniske områder kan vise lovende signaler, men heterogenitet, få studier og varierende kvalitetsvurdering gjør at resultatene bør beskrives som foreløpige når dokumentasjonen ikke er moden.",
        },
      ],
    },
    {
      id: "sikkerhet-og-tolerabilitet",
      eyebrow: "Skade, komfort og frafall",
      title:
        "Sikkerhet handler om mer enn fravær av alvorlige hendelser",
      blocks: [
        {
          type: "paragraph",
          text: "Redgrave og kolleger gjennomgikk 51 tVNS-studier med 1 322 deltakere og rapporterte hovedsakelig lokale og milde reaksjoner, men også frafall og alvorlige hendelser som måtte årsaksvurderes. Kim og kolleger samlet 177 taVNS-studier og fant ingen høyere samlet risiko for minst én hendelse ved aktiv stimulering enn ved kontroll.",
        },
        {
          type: "paragraph",
          text: "Samtidig omtalte mer enn halvparten av studiene i Kim-oversikten ikke om uønskede hendelser forekom. Det gjør rapporteringskvalitet til en sentral del av sikkerhetskonklusjonen.",
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "«Generelt godt tolerert» er mer presist enn «risikofritt»",
          paragraphs: [
            "Lokale reaksjoner, komfort, avbrutte økter, frafall og sjeldne hendelser må fortsatt rapporteres.",
            "Produktspesifikke kontraindikasjoner og stoppråd kommer fra den konkrete bruksanvisningen.",
          ],
        },
      ],
    },
    {
      id: "systematiske-oversikter",
      eyebrow: "Syntese av flere studier",
      title:
        "Systematiske oversikter er sterke verktøy – men arver svakhetene i primærstudiene",
      blocks: [
        {
          type: "paragraph",
          text: "En systematisk oversikt bruker en forhåndsdefinert metode for å finne og vurdere studier. En metaanalyse kan i tillegg beregne et samlet estimat. Dette gir mer oversikt enn én enkelt studie, men kvaliteten avhenger av søket, inklusjonskriteriene, risikoen for bias og hvor sammenlignbare studiene er.",
        },
        {
          type: "bullets",
          items: [
            "Heterogene protokoller kan gjøre et samlet gjennomsnitt vanskelig å anvende på én konkret enhet.",
            "Små studier og publikasjonsskjevhet kan overvurdere positive signaler.",
            "Lav eller svært lav evidenskvalitet bør stå tydelig i konklusjonen.",
            "Et samlet standardisert effektmål kan være statistisk nyttig, men vanskelig å oversette til hverdagslig betydning.",
            "Oppdateringsdatoen avgjør hvilke nye studier som er med.",
          ],
        },
      ],
    },
    {
      id: "negative-og-nullfunn",
      eyebrow: "Et modent evidensbilde",
      title:
        "Negative og inkonsistente resultater er nødvendige for ansvarlig forståelse",
      blocks: [
        {
          type: "paragraph",
          text: "Et forskningsbibliotek som bare fremhever positive studier, gir et skjevt bilde. Nullfunn kan vise at en markør ikke er sensitiv, at protokollen ikke traff målet, eller at den antatte effekten ikke var til stede under de undersøkte forholdene.",
        },
        {
          type: "paragraph",
          text: "For eksempel har enkelte kontrollerte studier ikke funnet tilleggseffekt av taVNS på HRV eller noradrenerge markører. Slike funn begrenser brede mekanisme- og effektpåstander og hjelper forskere med å forbedre design og hypoteser.",
        },
        {
          type: "callout",
          tone: "summary",
          title:
            "Troverdighet øker når nullfunn får plass",
          paragraphs: [
            "Målet er ikke å bevise at metoden alltid virker eller aldri virker, men å finne ut under hvilke betingelser et reproduserbart signal finnes.",
          ],
        },
      ],
    },
    {
      id: "generaliserbarhet",
      eyebrow: "Fra studie til person og produkt",
      title:
        "Generaliserbarhet må vurderes på tre nivåer",
      blocks: [
        {
          type: "table",
          caption: "Tre generaliseringsspørsmål",
          columns: [
            "Nivå",
            "Spørsmål",
            "Eksempel",
          ],
          rows: [
            [
              "Person",
              "Ligner den aktuelle personen studiedeltakerne?",
              "Friske unge voksne kan ikke representere alle kliniske eller eldre grupper",
            ],
            [
              "Protokoll",
              "Ligner plassering, dose og varighet?",
              "Én kort laboratorieøkt er ikke det samme som langvarig hjemmebruk",
            ],
            [
              "Produkt",
              "Ligner enhet, elektrode og tiltenkt bruk?",
              "En annen produsents kliniske enhet dokumenterer ikke Neuvago automatisk",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Forskningskontekst kan være relevant uten å være direkte produktdokumentasjon",
          paragraphs: [
            "Det er legitimt å forklare feltet og dets sikkerhetsmønstre.",
            "Det er ikke legitimt å presentere indirekte forskning som Neuvago-spesifikk effektbevis.",
          ],
        },
      ],
    },
    {
      id: "slik-leser-du-en-studie",
      eyebrow: "Praktisk leseguide",
      title:
        "Tolv spørsmål gir en rask, men seriøs studieanalyse",
      blocks: [
        {
          type: "numbered",
          items: [
            "Hvilken VNS-metode og enhet ble brukt?",
            "Hvor ble stimuleringen plassert?",
            "Hvilke parametere og hvilken samlet eksponering ble gitt?",
            "Hvem deltok, og hvem ble ekskludert?",
            "Var studien randomisert, kontrollert og forhåndsregistrert?",
            "Hvordan var sham utformet, og ble blindingen testet?",
            "Hva var det primære utfallet?",
            "Var effektstørrelsen klinisk forståelig og relevant?",
            "Hvor lenge varte oppfølgingen?",
            "Hvordan ble uønskede hendelser og frafall registrert?",
            "Var analysen robust mot manglende data og flere sammenligninger?",
            "Kan resultatet faktisk overføres til personen, protokollen og produktet du vurderer?",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Produktgrensen",
      title:
        "Neuvago skal bruke forskningen som kart – ikke som snarvei til claims",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er et eksternt, ørebasert velværesystem. Forskningsfeltet kan informere terminologi, metodeforståelse, sikkerhetsspørsmål, valg av kilder og hvilke usikkerheter som må være synlige.",
        },
        {
          type: "table",
          caption: "Hva forskningen kan og ikke kan gjøre for Neuvago",
          columns: [
            "Kan støtte",
            "Kan ikke alene dokumentere",
          ],
          rows: [
            [
              "Forklaring av VNS-, tVNS- og taVNS-kategoriene",
              "At Neuvago gir samme utfall som en annen enhet eller studie",
            ],
            [
              "Forståelse av relevante protokollvariabler",
              "Neuvagos eksakte biologiske target engagement",
            ],
            [
              "Generelle sikkerhets- og tolerabilitetstemaer",
              "Neuvagos egen bivirkningsrate eller universelle egnethet",
            ],
            [
              "Utforming av risikospørsmål og fremtidig testing",
              "Medisinske behandlingspåstander uten direkte dokumentasjon og riktig regulatorisk grunnlag",
            ],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "Endelig produktkommunikasjon skal harmoniseres med IFU og risikostyring",
          paragraphs: [
            "Forskningssiden skal ikke bli en alternativ bruksanvisning eller en indirekte medisinsk markedsføringsside.",
          ],
        },
      ],
    },
    {
      id: "oppsummering",
      eyebrow: "Samlet vurdering",
      title:
        "VNS-feltet er lovende, bredt og metodisk krevende",
      blocks: [
        {
          type: "bullets",
          items: [
            "Implantert og ikke-invasiv VNS må vurderes som separate teknologispor.",
            "Aurikulær forskning omfatter anatomi, neuroimaging, fysiologi, kliniske utfall og sikkerhet.",
            "Sham, blinding og elektriske parametere er avgjørende for tolkningen.",
            "HRV og andre fysiologiske markører er indirekte og påvirkes av mange forhold.",
            "Systematiske oversikter gir bredde, men arver heterogenitet og rapporteringssvakheter.",
            "Positive, negative og inkonsistente funn må vises sammen.",
            "Neuvago-spesifikke påstander krever direkte relevant produktdokumentasjon.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort konklusjon",
          paragraphs: [
            "Forskningen støtter at VNS og taVNS er seriøse neuromodulasjonsfelt med biologisk plausibilitet, kliniske undersøkelser og et voksende sikkerhetsgrunnlag.",
            "Den støtter ikke at alle metoder, protokoller, produkter eller brukergrupper kan behandles som like.",
          ],
        },
      ],
    },
  ],

  studyHighlights: [
    {
      id: "rush-2005",
      title:
        "Implantert VNS ved behandlingsresistent depresjon",
      citation: "Rush et al., Biological Psychiatry",
      year: 2005,
      design: "Randomisert kontrollert studie",
      question:
        "Ga implantert VNS bedre akutt utfall enn sham i en svært behandlingsresistent gruppe?",
      finding:
        "Studien etablerte et viktig kontrollert evidenspunkt for klinisk implantert VNS, men viste også hvor krevende akutt effektvurdering er i denne populasjonen.",
      limitation:
        "Implantert klinisk VNS, spesifikk indikasjon og samtidig behandling kan ikke generaliseres til ekstern velværestimulering.",
      href:
        "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/16139580/",
    },
    {
      id: "frangos-2015",
      title:
        "Aurikulær stimulering og sentrale vagale projeksjoner",
      citation: "Frangos, Ellrich & Komisaruk, Brain Stimulation",
      year: 2015,
      design: "fMRI-studie",
      question:
        "Kunne stimulering av ytre øre påvirke hjerneregioner forbundet med sentrale vagale baner?",
      finding:
        "Studien ga viktig neuroimaging-kontekst for ikke-invasiv aurikulær tilgang til vagusrelaterte projeksjoner.",
      limitation:
        "Neuroimaging dokumenterer ikke alle plasseringer, kliniske utfall eller kommersielle enheter.",
      href:
        "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/25573069/",
    },
    {
      id: "redgrave-2018",
      title:
        "Sikkerhet og tolerabilitet ved transkutan VNS",
      citation: "Redgrave et al., Brain Stimulation",
      year: 2018,
      design: "Systematisk oversikt",
      question:
        "Hvilke uønskede hendelser, alvorlige hendelser og frafall var rapportert i tVNS-studier?",
      finding:
        "51 studier og 1 322 eksponerte deltakere viste hovedsakelig milde reaksjoner ved de undersøkte dosene.",
      limitation:
        "Metoder og rapporteringskvalitet varierte, og materialet var bredere enn ren ørebasert taVNS.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/30217648/",
    },
    {
      id: "farmer-2021",
      title:
        "Minimumsstandarder for rapportering av tVNS",
      citation: "Farmer et al., Frontiers in Human Neuroscience",
      year: 2021,
      design: "Internasjonal konsensus",
      question:
        "Hvilke metode- og sikkerhetsdetaljer må rapporteres for at tVNS-studier skal kunne sammenlignes?",
      finding:
        "Ekspertgruppen anbefalte systematisk rapportering av blant annet enhet, plassering, parametere, utvalg og bivirkninger.",
      limitation:
        "En rapporteringsstandard løser ikke automatisk heterogenitet eller svak studiedesign.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/33854421/",
    },
    {
      id: "kim-2022",
      title:
        "Sikkerhet ved transkutan aurikulær VNS",
      citation: "Kim et al., Scientific Reports",
      year: 2022,
      design: "Systematisk oversikt og metaanalyse",
      question:
        "Var aktiv taVNS forbundet med høyere risiko for uønskede hendelser enn kontroll?",
      finding:
        "177 studier og 6 322 deltakere viste ingen forskjell i samlet risiko for minst én hendelse mellom aktiv taVNS og kontroll.",
      limitation:
        "Mer enn halvparten av studiene omtalte ikke uttrykkelig om hendelser forekom.",
      href:
        "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/36543841/",
    },
    {
      id: "soltani-2023",
      title:
        "taVNS, HRV og barorefleks i friske personer",
      citation: "Soltani et al., Clinical Autonomic Research",
      year: 2023,
      design: "Systematisk oversikt",
      question:
        "Gir taVNS konsistente endringer i HRV eller barorefleksfølsomhet?",
      finding:
        "Oversikten fant blandede resultater på tvers av 21 studier og flere HRV-mål.",
      limitation:
        "Heterogene studiedesign og doser gjør HRV vanskelig å bruke som universell responsmarkør.",
      href:
        "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/37119426/",
    },
    {
      id: "de-oliveira-2025",
      title:
        "taVNS ved insomni",
      citation: "de Oliveira et al., Neuromodulation",
      year: 2025,
      design: "Systematisk oversikt og metaanalyse",
      question:
        "Hva viste kliniske studier om taVNS og validerte søvn- og insomniskårer?",
      finding:
        "Oversikten rapporterte lovende signaler for søvnrelaterte utfall i inkluderte kliniske studier.",
      limitation:
        "Få og heterogene studier, risiko for bias og begrenset overførbarhet krever forsiktig konklusjon.",
      href:
        "/research/studies/de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/40323248/",
    },
  ],

  sources: [
    {
      id: "rush-2005",
      authors: "Rush AJ, Marangell LB, Sackeim HA, et al.",
      title:
        "Vagus nerve stimulation for treatment-resistant depression: a randomized, controlled acute phase trial",
      publication: "Biological Psychiatry",
      year: 2005,
      type: "randomized-trial",
      url: "https://pubmed.ncbi.nlm.nih.gov/16139580/",
      doi: "10.1016/j.biopsych.2005.05.025",
      pmid: "16139580",
      note:
        "Kontrollert studie av implantert VNS i en spesifikk klinisk populasjon.",
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
        "Sentral neuroimaging-kontekst for aurikulær stimulering og vagusrelaterte projeksjoner.",
    },
    {
      id: "redgrave-2018",
      authors:
        "Redgrave J, Day D, Leung H, Laud PJ, Ali A, Lindert R, Majid A",
      title:
        "Safety and tolerability of Transcutaneous Vagus Nerve stimulation in humans; a systematic review",
      publication: "Brain Stimulation",
      year: 2018,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/30217648/",
      doi: "10.1016/j.brs.2018.08.010",
      pmid: "30217648",
      note:
        "51 studier og 1 322 tVNS-eksponerte deltakere; hovedsakelig milde rapporterte reaksjoner.",
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
        "Metodeartikkel om plassering, dose, kontakt og praktisk administrasjon av taVNS i laboratoriet.",
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
        "Internasjonale anbefalinger for enhet, plassering, parametere, utvalg, utfall og sikkerhetsrapportering.",
    },
    {
      id: "dagostini-2022",
      authors:
        "D'Agostini M, Burger AM, Villca Ponce G, Claes S, von Leupoldt A, Van Diest I",
      title:
        "No evidence for a modulating effect of continuous transcutaneous auricular vagus nerve stimulation on markers of noradrenergic activity",
      publication: "Psychophysiology",
      year: 2022,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/34990045/",
      doi: "10.1111/psyp.13984",
      pmid: "34990045",
      note:
        "Et viktig nullfunn som viser at mekanismehypoteser og markører må testes kritisk.",
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
        "177 studier og 6 322 deltakere; overordnet gunstig sikkerhetsprofil, men store rapporteringsmangler.",
    },
    {
      id: "soltani-2023",
      authors:
        "Soltani D, Azizi B, Sima S, Tavakoli K, et al.",
      title:
        "A systematic review of the effects of transcutaneous auricular vagus nerve stimulation on baroreflex sensitivity and heart rate variability in healthy subjects",
      publication: "Clinical Autonomic Research",
      year: 2023,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/37119426/",
      doi: "10.1007/s10286-023-00938-w",
      pmid: "37119426",
      note:
        "21 studier med blandede HRV- og barorefleksfunn og betydelig protokollheterogenitet.",
    },
    {
      id: "de-oliveira-2025",
      authors:
        "de Oliveira HM, Gallo Ruelas M, Viana Diaz CA, et al.",
      title:
        "Transcutaneous Auricular Vagus Nerve Stimulation in Insomnia: A Systematic Review and Meta-Analysis",
      publication: "Neuromodulation",
      year: 2025,
      type: "meta-analysis",
      url: "https://pubmed.ncbi.nlm.nih.gov/40323248/",
      doi: "10.1016/j.neurom.2025.04.001",
      pmid: "40323248",
      note:
        "Klinisk søvnsyntese med lovende, men metodisk avgrensede resultater.",
    },
  ],

  relatedSlugs: [
    "sikkerhet-og-tolerabilitet",
    "transkutan-vagusnervestimulering",
    "aurikulaer-vagusnervestimulering",
  ],
  relatedKnowledgeSlugs: [
    "vagusnervestimulering",
    "ikke-invasiv-vagusnervestimulering",
    "transkutan-vagusnervestimulering",
    "aurikulaer-vagusnervestimulering",
    "orets-anatomi-og-vagusnerven",
    "er-vagusnervestimulering-trygt",
    "bivirkninger-ved-ikke-invasiv-vagusnervestimulering",
    "hvem-bor-vaere-forsiktig-med-vagusnervestimulering",
    "hrv-og-vagusnerven",
  ],
  relatedLinks: [
    {
      title: "Engelsk VNS-forskning",
      description:
        "Åpne den engelske parallellsiden med videre innganger til det eksisterende forskningsbiblioteket.",
      href: "/research/topics/vagus-nerve-stimulation",
      label: "Åpne engelsk forskningstema",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Gå dypere i rapporterte reaksjoner, sikkerhetsstudier, frafall og hvorfor rapporteringskvalitet er avgjørende.",
      href: "/research/topics/safety-and-tolerability",
      label: "Utforsk sikkerhetsforskningen",
    },
    {
      title: "Studiebibliotek",
      description:
        "Bla i Neuvagos engelske sammendrag av sentrale studier om VNS, taVNS, HRV, søvn og mekanismer.",
      href: "/research/studies",
      label: "Bla i studier",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Les hvordan Neuvago skiller generell forskningskontekst fra produktets velværeformål og medisinske påstander.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
    {
      title: "Medisinsk ansvarsfraskrivelse",
      description:
        "Se grensene mellom generell informasjon, individuell medisinsk rådgivning og produktkommunikasjon.",
      href: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
      label: "Les ansvarsfraskrivelsen",
    },
    {
      title: "Slik leser du en VNS-studie",
      description:
        "Bruk en tolvtrinnsmodell for studiedesign, protokoll, sham, utfall, usikkerhet, skjevhet, uønskede hendelser og evidensoverføring.",
      href: "/no/forskning/slik-leser-du-en-vns-studie",
      label: "Åpne forskningsguiden",
    },
  ],
} as const satisfies NorwegianResearchTopic;
