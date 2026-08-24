import type { NorwegianResearchTopic } from "@/content/research/no/types";

export const sikkerhetOgTolerabilitetResearchTopic = {
  slug: "sikkerhet-og-tolerabilitet",
  path: "/no/forskning/sikkerhet-og-tolerabilitet",
  status: "published",
  wave: "1D",
  order: 20,

  title:
    "Sikkerhet og tolerabilitet ved ikke-invasiv VNS – hendelser, rapportering og grenser",
  seoTitle:
    "VNS-sikkerhet og tolerabilitet | tVNS og taVNS | Neuvago",
  description:
    "Norsk forskningsoversikt over sikkerhet, tolerabilitet og bivirkningsrapportering ved ikke-invasiv VNS, tVNS og taVNS.",
  eyebrow: "Norsk forskningsoversikt",
  lead:
    "Sikkerhet i forskning betyr mer enn at alvorlige hendelser er sjeldne. En ansvarlig vurdering må også se på lokale reaksjoner, ubehag, avbrutte økter, frafall, alvorlighetsgrad, mulig årsakssammenheng, samlet eksponering og hvor systematisk hendelser faktisk ble registrert. Studier av ikke-invasiv VNS og aurikulær taVNS viser gjennomgående et gunstig tolerabilitetsmønster under undersøkte forhold, men rapporteringen er ujevn, protokollene varierer og forskningsresultater fra andre enheter kan ikke brukes som direkte Neuvago-dokumentasjon.",
  shortAnswer: [
    "Dedikerte oversikter beskriver ikke-invasiv VNS og taVNS som generelt godt tolerert ved de dosene og populasjonene som er undersøkt.",
    "De vanligste rapporterte reaksjonene er som regel lokale eller milde, men type, alvorlighet, varighet og årsakssammenheng rapporteres ikke konsekvent.",
    "Fravær av rapporterte hendelser er ikke det samme som dokumentasjon på at ingen hendelser forekom.",
    "En alvorlig hendelse i en studie er ikke automatisk forårsaket av stimuleringen; årsaksvurderingen må leses separat.",
    "Forskningsmessige eksklusjonskriterier, kliniske kontraindikasjoner og en produkts egne bruksgrenser er tre forskjellige nivåer.",
    "Neuvago-spesifikke sikkerhetsformuleringer må bygge på ferdig enhet, risikostyring, testing, tiltenkt bruk og endelig bruksanvisning.",
  ],
  hubSummary:
    "En norsk forskningsoversikt over uønskede hendelser, komfort, frafall, årsaksvurdering, rapporteringskvalitet og grensen mellom feltdata og produktsikkerhet.",
  hubLabel: "Sikkerhetsforskning",

  primaryKeyword: "sikkerhet ved vagusnervestimulering",
  secondaryKeywords: [
    "VNS sikkerhet",
    "tVNS sikkerhet",
    "taVNS sikkerhet",
    "vagusnervestimulering bivirkninger forskning",
    "ikke-invasiv VNS tolerabilitet",
    "transkutan vagusnervestimulering uønskede hendelser",
    "aurikulær vagusnervestimulering sikkerhet",
    "taVNS adverse events",
    "taVNS side effects",
    "VNS tolerability",
    "vagus nerve stimulation safety research",
    "taVNS kontraindikasjoner",
    "tVNS eksklusjonskriterier",
    "Neuvago sikkerhet",
  ],
  searchIntent: "mixed",

  publishedAt: "2026-08-23",
  modifiedAt: "2026-08-23",
  readingTimeMinutes: 25,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/research/topics/safety-and-tolerability",
  sitemapPriority: 0.9,
  changeFrequency: "weekly",

  researchMap: {
    eyebrow: "Sikkerhetskart",
    title:
      "Fem lag må vurderes før en studie kan kalles betryggende",
    description:
      "Et enkelt utsagn som «ingen alvorlige bivirkninger» sier lite uten informasjon om hendelser, alvorlighet, årsak, eksponering og rapporteringsmetode.",
    items: [
      {
        label: "01",
        title: "Hendelse",
        description:
          "Hva opplevde deltakeren – lokalt ubehag, hodepine, svimmelhet, avbrudd eller annet?",
      },
      {
        label: "02",
        title: "Alvorlighet",
        description:
          "Var hendelsen mild, moderat, alvorlig eller klassifisert som en alvorlig uønsket hendelse?",
      },
      {
        label: "03",
        title: "Årsak",
        description:
          "Ble hendelsen vurdert som relatert, mulig relatert, usannsynlig relatert eller ikke relatert til stimuleringen?",
      },
      {
        label: "04",
        title: "Eksponering",
        description:
          "Hvor mange økter, minutter, dager og hvilken elektrisk protokoll lå bak observasjonen?",
      },
      {
        label: "05",
        title: "Rapportering",
        description:
          "Ble hendelser aktivt etterspurt med skjema, registrert spontant eller ikke omtalt?",
      },
    ],
  },

  sections: [
    {
      id: "kort-svar",
      eyebrow: "Det viktigste først",
      title:
        "Forskningsbildet er gjennomgående betryggende – men ikke komplett",
      blocks: [
        {
          type: "paragraph",
          text: "Systematiske oversikter og nyere pooled data peker mot at transkutan og aurikulær vagusnervestimulering vanligvis gir milde og forbigående reaksjoner under undersøkte forhold. Samtidig viser de samme kildene at rapporteringen ofte er mangelfull, at protokollene varierer, og at enkelte studier ikke sier tydelig om uønskede hendelser ble etterspurt eller forekom.",
        },
        {
          type: "paragraph",
          text: "Den mest presise konklusjonen er derfor ikke at metoden er risikofri. Det er at den i publisert forskning generelt har vist et gunstig tolerabilitetsmønster ved de undersøkte dosene, samtidig som bedre og mer standardisert sikkerhetsrapportering fortsatt er nødvendig.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Den ansvarlige hovedkonklusjonen",
          paragraphs: [
            "«Generelt godt tolerert under undersøkte forhold» er mer presist enn «trygt for alle».",
            "Forskningsfeltets overordnede mønster kan informere, men erstatter ikke produktspesifikk risikostyring og bruksanvisning.",
          ],
        },
      ],
    },
    {
      id: "begrepene",
      eyebrow: "Språket må være presist",
      title:
        "Sikkerhet, tolerabilitet, bivirkning og uønsket hendelse betyr ikke det samme",
      blocks: [
        {
          type: "table",
          caption: "Begreper som bør holdes fra hverandre",
          columns: [
            "Begrep",
            "Hva det beskriver",
            "Viktig grense",
          ],
          rows: [
            [
              "Sikkerhet",
              "Samlet vurdering av skade, alvorlighet, sannsynlighet og eksponering",
              "Kan ikke reduseres til ett symptom eller én studie",
            ],
            [
              "Tolerabilitet",
              "Hvor godt deltakere tåler opplevelsen og kan fullføre protokollen",
              "God tolerabilitet betyr ikke fravær av alle reaksjoner",
            ],
            [
              "Uønsket hendelse",
              "Et negativt medisinsk eller subjektivt fenomen som oppstår i studieperioden",
              "Er ikke automatisk forårsaket av intervensjonen",
            ],
            [
              "Bivirkning",
              "En uønsket reaksjon som vurderes å ha sammenheng med intervensjonen",
              "Årsakssammenheng krever egen vurdering",
            ],
            [
              "Alvorlig uønsket hendelse",
              "En regulatorisk alvorlighetskategori, for eksempel sykehusinnleggelse eller livstruende hendelse",
              "Alvorlighetskategori sier ikke alene om stimuleringen var årsaken",
            ],
            [
              "Sensasjon",
              "Forventet eller vanlig følelse som prikking, trykk eller varme",
              "Kan være en del av stimuleringen uten å være en bivirkning",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "En uønsket hendelse er ikke det samme som en dokumentert bivirkning",
          paragraphs: [
            "Sikkerhetsdata bør vise både hva som skjedde og hvordan forskerne vurderte mulig sammenheng med stimuleringen.",
          ],
        },
      ],
    },
    {
      id: "hvilke-data-svarer-pa-hva",
      eyebrow: "Evidenstyper",
      title:
        "Forskjellige datakilder svarer på forskjellige sikkerhetsspørsmål",
      blocks: [
        {
          type: "table",
          caption: "Hva ulike sikkerhetskilder kan bidra med",
          columns: [
            "Datakilde",
            "Styrke",
            "Begrensning",
          ],
          rows: [
            [
              "Enkeltstudie",
              "Detaljert protokoll, populasjon og hendelsesforløp",
              "Ofte liten og for kort til å fange sjeldne hendelser",
            ],
            [
              "Systematisk oversikt",
              "Samler hendelser og frafall fra mange studier",
              "Arver manglende og uensartet rapportering",
            ],
            [
              "Metaanalyse",
              "Kan sammenligne samlet risiko mellom aktiv og kontroll",
              "Krever at studiene rapporterer sammenlignbare data",
            ],
            [
              "Scoping review",
              "Kartlegger populasjoner, protokoller og rapporteringspraksis",
              "Vurderer ikke alltid metodisk kvalitet eller samlet risiko",
            ],
            [
              "Pooled deltakerdata",
              "Kan bruke samme spørreskjema på tvers av flere datasett",
              "Kan være avgrenset til bestemte laboratorier og populasjoner",
            ],
            [
              "Produktets egen dokumentasjon",
              "Gjelder konkret maskinvare, programvare, tiltenkt bruk og risiko",
              "Kan ikke erstattes av litteratur om andre enheter",
            ],
          ],
        },
      ],
    },
    {
      id: "redgrave-2018",
      eyebrow: "Bred tVNS-oversikt",
      title:
        "Redgrave et al. samlet tidlige humane sikkerhetsdata på tvers av 51 studier",
      blocks: [
        {
          type: "paragraph",
          text: "Den systematiske oversikten fra 2018 inkluderte 51 studier og 1 322 personer som hadde mottatt transkutan VNS. Forfatterne registrerte rapporterte bivirkninger, alvorlige uønskede hendelser, vurdert årsakssammenheng og frafall på grunn av reaksjoner.",
        },
        {
          type: "table",
          caption: "Utvalgte tall fra Redgrave et al. 2018",
          columns: [
            "Observasjon",
            "Rapportert resultat",
            "Ansvarlig tolkning",
          ],
          rows: [
            [
              "Lokal hudirritasjon",
              "240 deltakere, 18,2 %",
              "Den vanligste registrerte reaksjonen i det samlede materialet",
            ],
            [
              "Hodepine",
              "47 deltakere, 3,6 %",
              "Forekom, men sier ikke alene noe om årsak i hver enkelt studie",
            ],
            [
              "Nasofaryngitt",
              "23 deltakere, 1,7 %",
              "En hendelse kan registreres i studieperioden uten å være stimuleringseffekt",
            ],
            [
              "Frafall på grunn av reaksjoner",
              "35 deltakere, 2,6 %",
              "Fullførbarhet er en viktig del av tolerabilitet",
            ],
            [
              "Alvorlige uønskede hendelser",
              "30 hendelser totalt",
              "Bare tre ble av forskerne vurdert som mulig forårsaket av tVNS",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Konklusjonen gjaldt dosene som var undersøkt",
          paragraphs: [
            "Forfatterne beskrev tVNS som sikkert og godt tolerert ved forskningsdosene som var inkludert.",
            "Det er ikke det samme som en universell konklusjon for alle enheter, protokoller og brukergrupper.",
          ],
        },
      ],
    },
    {
      id: "kim-2022",
      eyebrow: "Den største dedikerte taVNS-syntesen",
      title:
        "Kim et al. fant ingen høyere samlet hendelsesrisiko ved aktiv taVNS enn ved kontroll",
      blocks: [
        {
          type: "paragraph",
          text: "Kim og kolleger gjennomgikk 177 taVNS-studier med totalt 6 322 deltakere. I de 35 studiene som rapporterte hvor mange personer som opplevde minst én uønsket hendelse, fant metaanalysen ingen forskjell i risiko mellom aktiv taVNS og kontroll.",
        },
        {
          type: "table",
          caption: "Hovedpunkter fra Kim et al. 2022",
          columns: [
            "Punkt",
            "Resultat",
            "Tolkningsgrense",
          ],
          rows: [
            [
              "Studier",
              "177",
              "Studiene var heterogene i design, dose og populasjon",
            ],
            [
              "Deltakere",
              "6 322",
              "Samlet størrelse gir bredde, men ikke produktspesifisitet",
            ],
            [
              "Studier uten eksplisitt omtale av hendelser",
              "55,37 %",
              "Manglende omtale kan ikke behandles som sikker nullrapportering",
            ],
            [
              "Risiko for minst én hendelse",
              "Ingen forskjell mellom aktiv taVNS og kontroll",
              "Analysen var basert på de studiene som hadde tilstrekkelige data",
            ],
            [
              "Vanligst rapporterte hendelser",
              "Øresmerte, hodepine og prikking",
              "Frekvens og alvorlighet må leses i lys av protokollen",
            ],
            [
              "Alvorlige hendelser",
              "Ingen påvist kausal sammenheng med taVNS",
              "Årsaksvurdering og rapporteringskvalitet er fortsatt sentralt",
            ],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "Manglende rapportering er ikke dokumentasjon på fravær",
          paragraphs: [
            "Når mer enn halvparten av studiene ikke oppgir om hendelser forekom, blir sikkerhetskonklusjonen mindre presis enn deltakerantallet alene kan gi inntrykk av.",
          ],
        },
      ],
    },
    {
      id: "nyere-data",
      eyebrow: "Feltet etter 2022",
      title:
        "Nyere oversikter og pooled data støtter et gunstig mønster – og behovet for standardisering",
      blocks: [
        {
          type: "paragraph",
          text: "En scoping review publisert i 2024 kartla 109 studier på tvers av 21 kliniske populasjoner. Totalt hadde 2 214 voksne mottatt aktiv taVNS og 1 017 sham. De fleste rapporterte hendelsene var lokale ved stimuleringsstedet, men parameter- og hendelsesrapporteringen var begrenset og ujevn.",
        },
        {
          type: "paragraph",
          text: "I 2025 analyserte Giraudier og kolleger standardiserte spørreskjemadata fra 488 deltakere. De rapporterte gjennomgående lave og milde reaksjonsskårer. Intervallstimulering var forbundet med lavere sannsynlighet for enkelte plager enn kontinuerlig stimulering, men flere statistiske effekter var små og av begrenset klinisk betydning.",
        },
        {
          type: "callout",
          tone: "evidence",
          title:
            "Nyere data gjør bildet skarpere, ikke universelt",
          paragraphs: [
            "Standardiserte spørreskjemaer forbedrer sammenlignbarheten.",
            "Resultatene gjelder fortsatt de undersøkte laboratoriene, deltakerne og protokollene.",
          ],
        },
      ],
    },
    {
      id: "vanlige-reaksjoner",
      eyebrow: "Hva rapporteres?",
      title:
        "Lokale og sensoriske reaksjoner dominerer den publiserte litteraturen",
      blocks: [
        {
          type: "bullets",
          items: [
            "Lokal hudirritasjon eller rødhet ved elektrodeområdet.",
            "Øresmerte, ømhet eller ubehag ved aurikulær plassering.",
            "Prikking, trykk, varme eller annen stimulussensasjon.",
            "Hodepine.",
            "Svimmelhet eller kvalme i enkelte datasett.",
            "Ubehagelige følelser eller tretthet under eller etter økten.",
            "Avbrutt økt eller redusert intensitet på grunn av komfort.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Forventet stimulussensasjon må skilles fra skade",
          paragraphs: [
            "En merkbar følelse kan være forventet i en elektrisk stimuleringsprotokoll.",
            "Vedvarende smerte, tydelig hudreaksjon, nye symptomer eller funksjonspåvirkning skal ikke normaliseres som «bare prikking».",
          ],
        },
      ],
    },
    {
      id: "alvorlige-hendelser-og-arsak",
      eyebrow: "Alvorlighet er ikke årsak",
      title:
        "Alvorlige hendelser må rapporteres – men årsakssammenhengen må vurderes separat",
      blocks: [
        {
          type: "paragraph",
          text: "I klinisk forskning registreres alvorlige hendelser ofte uavhengig av om forskeren tror de skyldes intervensjonen. Dette er viktig for å unngå underrapportering, men betyr også at råtallet ikke kan leses som antall alvorlige bivirkninger.",
        },
        {
          type: "numbered",
          items: [
            "Hva skjedde, og når skjedde det i forhold til stimuleringen?",
            "Fantes alternative medisinske eller situasjonelle forklaringer?",
            "Forsvant hendelsen ved pause eller avslutning?",
            "Kom hendelsen tilbake ved ny eksponering?",
            "Ble den vurdert av blindet eller uavhengig personell?",
            "Hvordan klassifiserte studien mulig årsakssammenheng?",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "«Ingen kausal sammenheng påvist» er ikke det samme som «ingen hendelser»",
          paragraphs: [
            "Begge opplysningene bør stå synlig: hva som skjedde, og hvordan mulig sammenheng ble vurdert.",
          ],
        },
      ],
    },
    {
      id: "rapporteringskvalitet",
      eyebrow: "Den største metodiske svakheten",
      title:
        "Sikkerhetsdata blir svake når studier bare skriver «ingen alvorlige hendelser»",
      blocks: [
        {
          type: "table",
          caption: "Fra svak til sterk sikkerhetsrapportering",
          columns: [
            "Rapporteringsnivå",
            "Eksempel",
            "Hva leseren faktisk kan vite",
          ],
          rows: [
            [
              "Svært svakt",
              "Hendelser ikke omtalt",
              "Ingenting sikkert om registrering eller fravær",
            ],
            [
              "Svakt",
              "«Ingen alvorlige hendelser»",
              "Ikke om milde eller moderate hendelser forekom",
            ],
            [
              "Bedre",
              "Liste over hendelser",
              "Hva som ble observert, men ikke nødvendigvis alvorlighet eller årsak",
            ],
            [
              "Godt",
              "Antall deltakere, type, alvorlighet og frafall",
              "Et mer komplett tolerabilitetsbilde",
            ],
            [
              "Sterkt",
              "Standardisert aktiv etterspørring, eksponering, varighet og årsaksvurdering",
              "Data som kan sammenlignes og brukes i synteser",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Farmer og en internasjonal ekspertgruppe anbefalte minimumsstandarder for tVNS-forskning, inkludert tydelig rapportering av enhet, plassering, elektriske parametere, utvalg, eksklusjoner, utfall og uønskede hendelser. Standardene er viktige fordi sikkerhet ikke kan tolkes uavhengig av hva som faktisk ble gjort.",
        },
      ],
    },
    {
      id: "dose-og-protokoll",
      eyebrow: "Eksponering betyr noe",
      title:
        "Intensitet, pulsbredde, varighet og duty cycle er del av sikkerhetsvurderingen",
      blocks: [
        {
          type: "table",
          caption: "Protokollvariabler som kan påvirke tolerabilitet",
          columns: [
            "Variabel",
            "Hvorfor den betyr noe",
          ],
          rows: [
            [
              "Anatomisk plassering",
              "Kontaktflate, følsomhet og nevral innervasjon varierer mellom hals- og øreområder",
            ],
            [
              "Elektrode og kontakt",
              "Trykk, størrelse, materiale og impedans påvirker hud og sensasjon",
            ],
            [
              "Intensitet",
              "Høyere strøm kan øke ubehag, men sensasjon er ikke en lineær effektmarkør",
            ],
            [
              "Pulsbredde og frekvens",
              "Påvirker den elektriske dosen og sammenlignbarheten mellom protokoller",
            ],
            [
              "Duty cycle",
              "Bestemmer hvor stor del av økten stimuleringen faktisk er aktiv",
            ],
            [
              "Øktlengde og behandlingsperiode",
              "En laboratorieøkt og daglig hjemmebruk over måneder er ulike eksponeringer",
            ],
            [
              "Kontinuerlig eller intervall",
              "Nyere pooled data antyder forskjeller i enkelte subjektive reaksjoner",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Sterkere følelse betyr ikke sterkere dokumentert effekt",
          paragraphs: [
            "Komfort, protokolltrofasthet og sikkerhet skal ikke underordnes jakten på mest mulig sensasjon.",
          ],
        },
      ],
    },
    {
      id: "populasjoner-og-eksklusjoner",
      eyebrow: "Hvem ble faktisk undersøkt?",
      title:
        "Et betryggende resultat i en selektert studie gjelder ikke automatisk alle",
      blocks: [
        {
          type: "paragraph",
          text: "Forskningsstudier bruker ofte eksklusjonskriterier for å beskytte deltakere, redusere forvekslingsfaktorer eller oppfylle et bestemt klinisk design. Det kan bety at personer med implantert elektronikk, bestemte hjerterytmeforhold, graviditet, alvorlig sykdom, epilepsihistorikk eller annen behandling ikke var representert.",
        },
        {
          type: "definition",
          term: "Forskningsmessig eksklusjonskriterium",
          definition:
            "Et kriterium som gjør at en person ikke inkluderes i en bestemt studie. Det kan være sikkerhetsbegrunnet, metodisk eller praktisk, og er ikke automatisk en universell kontraindikasjon for alle produkter.",
        },
        {
          type: "definition",
          term: "Produktspesifikk kontraindikasjon",
          definition:
            "En bruksgrense som gjelder den konkrete enheten og dens tiltenkte bruk, basert på risikostyring, testing, klinisk vurdering og regulatorisk dokumentasjon.",
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "Mangel på data skal beskrives som mangel på data",
          paragraphs: [
            "Fravær av en gruppe fra studiene dokumenterer verken at bruk er farlig eller at bruk er trygg.",
          ],
        },
      ],
    },
    {
      id: "sham-og-blinding",
      eyebrow: "Kontrollgruppen påvirker sikkerhetsbildet",
      title:
        "Sham-design bestemmer hva aktiv-kontroll-sammenligningen faktisk betyr",
      blocks: [
        {
          type: "paragraph",
          text: "En sham-betingelse kan bruke svakere strøm, annen plassering, kortere stimulering eller ingen aktiv strøm. Dersom sham kjennes tydelig annerledes, kan forventning påvirke både symptomer og hendelsesrapportering. Dersom sham fortsatt gir sensorisk eller biologisk stimulering, kan forskjellen mellom gruppene bli mindre.",
        },
        {
          type: "bullets",
          items: [
            "Ble sham-opplevelsen matchet mot aktiv stimulering?",
            "Ble deltakerne spurt om hvilken gruppe de trodde de var i?",
            "Ble hendelser etterspurt likt i begge grupper?",
            "Var oppfølgingen like hyppig?",
            "Var kontrollstedet virkelig biologisk inaktivt?",
          ],
        },
      ],
    },
    {
      id: "frafall-og-fullforbarhet",
      eyebrow: "Tolerabilitet i praksis",
      title:
        "Frafall, avbrutte økter og intensitetsreduksjon er sikkerhetsdata",
      blocks: [
        {
          type: "paragraph",
          text: "En studie kan ha få klassifiserte bivirkninger, men likevel mange avbrutte økter, dosejusteringer eller deltakere som slutter. Derfor bør tolerabilitet vurderes gjennom både symptomrapportering og om protokollen faktisk lot seg gjennomføre.",
        },
        {
          type: "bullets",
          items: [
            "Antall deltakere som avsluttet på grunn av ubehag.",
            "Antall økter som ble stoppet eller forkortet.",
            "Hvor ofte intensiteten måtte reduseres.",
            "Om hudkontakt eller elektrodeplassering måtte endres.",
            "Om hendelser førte til medisinsk vurdering.",
            "Om frafall ble fordelt mellom aktiv og kontroll.",
          ],
        },
      ],
    },
    {
      id: "generaliserbarhet",
      eyebrow: "Fra litteratur til konkret bruk",
      title:
        "Sikkerhetsdata må generaliseres på person-, protokoll- og produktnivå",
      blocks: [
        {
          type: "table",
          caption: "Tre spørsmål før forskning overføres",
          columns: [
            "Nivå",
            "Spørsmål",
            "Typisk feilslutning",
          ],
          rows: [
            [
              "Person",
              "Ligner brukeren studiedeltakerne?",
              "Resultater fra friske voksne brukes som universell konklusjon",
            ],
            [
              "Protokoll",
              "Ligner plassering, dose, varighet og hyppighet?",
              "Én kort laboratorieøkt sidestilles med langvarig hjemmebruk",
            ],
            [
              "Produkt",
              "Ligner enhet, elektrode, strømlevering og tiltenkt bruk?",
              "En annen produsents data presenteres som Neuvago-data",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title:
            "Feltdata kan være relevant kontekst uten å være direkte produktbevis",
          paragraphs: [
            "Det er legitimt å forklare mønstre og usikkerheter i litteraturen.",
            "Det er ikke legitimt å låne presise bivirkningsrater eller universelle sikkerhetskonklusjoner til en annen enhet.",
          ],
        },
      ],
    },
    {
      id: "slik-leser-du-sikkerhetsdata",
      eyebrow: "Praktisk leseguide",
      title:
        "Tolv spørsmål gir en mer pålitelig sikkerhetsvurdering",
      blocks: [
        {
          type: "numbered",
          items: [
            "Hvilken enhet og hvilken anatomisk plassering ble brukt?",
            "Hvilke elektriske parametere og hvilken samlet eksponering ble gitt?",
            "Hvem deltok, og hvem ble ekskludert?",
            "Ble hendelser aktivt etterspurt eller bare spontant rapportert?",
            "Ble fravær av hendelser uttrykkelig dokumentert?",
            "Ble alvorlighet og varighet registrert?",
            "Ble mulig årsakssammenheng vurdert?",
            "Hvor mange avbrøt eller reduserte dosen?",
            "Hvordan var sham eller kontroll utformet?",
            "Var oppfølgingstiden lang nok for spørsmålet?",
            "Var dataene fullstendige nok til metaanalyse?",
            "Kan resultatet overføres til den personen, protokollen og enheten du vurderer?",
          ],
        },
      ],
    },
    {
      id: "hva-forskningen-ikke-viser",
      eyebrow: "Nødvendige grenser",
      title:
        "Et gunstig forskningsmønster dokumenterer ikke universell egnethet",
      blocks: [
        {
          type: "bullets",
          items: [
            "At alle ikke-invasive VNS-enheter har samme risikoprofil.",
            "At alle øreområder og elektroder er ekvivalente.",
            "At sterkere stimulering er bedre eller like trygt.",
            "At personer som ble ekskludert fra studier automatisk kan bruke enheten.",
            "At manglende hendelsesrapportering betyr at ingen hendelser forekom.",
            "At en annen enhets bivirkningsprosent er Neuvagos bivirkningsprosent.",
            "At «ikke-invasiv» betyr risikofri eller uten behov for stoppråd.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Produktgrensen",
      title:
        "Neuvago skal bruke sikkerhetsforskningen som bakgrunn – ikke som erstatning for egen dokumentasjon",
      blocks: [
        {
          type: "paragraph",
          text: "Forskningsfeltet kan informere terminologi, forventede reaksjonskategorier, hendelsesskjemaer, brukeropplæring og hvilke risikospørsmål som må undersøkes. Endelige Neuvago-formuleringer må likevel harmoniseres med ferdig maskinvare, programvare, tiltenkt bruk, risikostyring, verifikasjon, validering og bruksanvisning.",
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
              "Valg av hendelseskategorier som bør overvåkes",
              "Neuvagos egen hendelsesrate",
            ],
            [
              "Forståelse av vanlige lokale og sensoriske reaksjoner",
              "At alle Neuvago-brukere vil oppleve samme mønster",
            ],
            [
              "Utforming av konservativ brukerkommunikasjon",
              "Produktspesifikke kontraindikasjoner før de er ferdig fastsatt",
            ],
            [
              "Behovet for tydelig stoppråd og eskalering",
              "At Neuvago er risikofritt",
            ],
            [
              "Krav til god rapportering og oppfølging",
              "Medisinske sikkerhets- eller behandlingspåstander",
            ],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title:
            "Den endelige IFU-en har forrang for produktspesifikk bruk",
          paragraphs: [
            "Forskningssiden skal ikke fungere som en foreløpig bruksanvisning.",
            "Ved akutte symptomer eller medisinsk bekymring kommer helsehjelp før produktvurdering.",
          ],
        },
      ],
    },
    {
      id: "oppsummering",
      eyebrow: "Samlet vurdering",
      title:
        "Sikkerhetsbildet er gunstig, men rapporteringskvaliteten setter en tydelig grense",
      blocks: [
        {
          type: "bullets",
          items: [
            "Dedikerte oversikter beskriver tVNS og taVNS som generelt godt tolerert under undersøkte forhold.",
            "Lokale reaksjoner, øresmerte, hodepine og prikking er blant de vanligste rapporterte hendelsene.",
            "Alvorlige hendelser må skilles fra hendelser som faktisk vurderes som forårsaket av stimuleringen.",
            "Manglende og inkonsistent rapportering gjør presise risikorater usikre.",
            "Dose, plassering, elektrode, øktlengde og total eksponering må være synlige.",
            "Forskningsmessige eksklusjoner er ikke automatisk universelle kontraindikasjoner.",
            "Neuvago-spesifikke sikkerhetspåstander krever direkte relevant produktdokumentasjon.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort konklusjon",
          paragraphs: [
            "Den publiserte litteraturen støtter et overordnet gunstig tolerabilitetsmønster for ikke-invasiv VNS og taVNS ved undersøkte protokoller.",
            "Den støtter ikke at alle enheter, doser, brukergrupper eller anvendelser kan behandles som like.",
          ],
        },
      ],
    },
  ],

  studyHighlights: [
    {
      id: "redgrave-2018",
      title:
        "Sikkerhet og tolerabilitet ved transkutan VNS",
      citation: "Redgrave et al., Brain Stimulation",
      year: 2018,
      design: "Systematisk oversikt",
      question:
        "Hvilke bivirkninger, alvorlige hendelser og frafall var rapportert i humane tVNS-studier?",
      finding:
        "51 studier og 1 322 eksponerte deltakere viste hovedsakelig milde reaksjoner; 2,6 % falt fra på grunn av reaksjoner.",
      limitation:
        "Protokollene og populasjonene var heterogene, og oversikten dekket et bredt tVNS-felt.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/30217648/",
    },
    {
      id: "badran-2019",
      title:
        "Metode, kontakt og dose ved laboratoriebasert taVNS",
      citation: "Badran et al., Journal of Visualized Experiments",
      year: 2019,
      design: "Metodeartikkel",
      question:
        "Hvilke praktiske detaljer må kontrolleres for å levere taVNS reproduserbart og komfortabelt?",
      finding:
        "Artikkelen beskriver blant annet elektrodeplassering, kontakt, intensitet, terskel og protokollgjennomføring.",
      limitation:
        "En metodeartikkel dokumenterer ikke i seg selv klinisk sikkerhet for alle enheter eller hjemmeprotokoller.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/30663712/",
    },
    {
      id: "farmer-2021",
      title:
        "Minimumsstandarder for tVNS-rapportering",
      citation: "Farmer et al., Frontiers in Human Neuroscience",
      year: 2021,
      design: "Internasjonal konsensus",
      question:
        "Hva må rapporteres for at tVNS-studier skal kunne sammenlignes og sikkerhetsdata tolkes?",
      finding:
        "Ekspertgruppen anbefalte detaljert rapportering av enhet, plassering, parametere, utvalg, utfall og hendelser.",
      limitation:
        "Rapporteringsstandarder forbedrer dataene, men kan ikke korrigere svakheter i studier som allerede er publisert.",
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
        "Var aktiv taVNS forbundet med høyere risiko for minst én uønsket hendelse enn kontroll?",
      finding:
        "177 studier og 6 322 deltakere viste ingen forskjell i samlet risiko mellom aktiv taVNS og kontroll i studiene med tilstrekkelige data.",
      limitation:
        "55,37 % av studiene omtalte ikke eksplisitt om uønskede hendelser forekom.",
      href:
        "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/36543841/",
    },
    {
      id: "gerges-2024",
      title:
        "Klinisk bruk, sham og sikkerhetsrapportering",
      citation: "Gerges et al., Disability and Rehabilitation",
      year: 2024,
      design: "Scoping review",
      question:
        "Hvordan var taVNS brukt og rapportert på tvers av kliniske populasjoner?",
      finding:
        "109 studier omfattet 2 214 voksne med aktiv taVNS og 1 017 med sham; de fleste rapporterte hendelsene var lokale.",
      limitation:
        "Parameter- og hendelsesrapporteringen var inkonsistent, og reviewet gjennomførte ikke full kvalitetsvurdering av alle inkluderte studier.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/38362860/",
    },
    {
      id: "giraudier-2025",
      title:
        "Standardiserte bivirkningsdata fra 488 deltakere",
      citation: "Giraudier et al., Frontiers in Human Neuroscience",
      year: 2025,
      design: "Pooled analyse",
      question:
        "Hvordan fordelte ti standardiserte reaksjonsskårer seg ved taVNS, og påvirket protokollvariabler resultatene?",
      finding:
        "Reaksjonene var gjennomgående minimale og milde; intervallstimulering reduserte sannsynligheten for enkelte plager.",
      limitation:
        "Datasettet var avgrenset til bestemte forskningsprotokoller og bygget på subjektive spørreskjemaskårer.",
      externalUrl:
        "https://pubmed.ncbi.nlm.nih.gov/39981126/",
    },
  ],

  sources: [
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
        "Tidlig bred sikkerhetsoversikt med 51 studier, 1 322 eksponerte personer, hendelser, alvorlige hendelser og frafall.",
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
        "Praktisk metodegrunnlag for plassering, kontakt, terskel, intensitet og protokollgjennomføring.",
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
        "Internasjonale minimumsstandarder for metode-, utvalgs-, parameter- og sikkerhetsrapportering.",
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
        "177 studier og 6 322 deltakere; ingen forskjell i samlet hendelsesrisiko mellom aktiv og kontroll i analyserbare studier, men store rapporteringsmangler.",
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
        "Kartla 109 studier, 21 kliniske populasjoner, sham-praksis, parameterkvalitet og sikkerhetsrapportering.",
    },
    {
      id: "giraudier-2025",
      authors:
        "Giraudier M, Ventura-Bort C, Szeska C, Weymar M",
      title:
        "A pooled analysis of the side effects of non-invasive Transcutaneous Auricular Vagus Nerve Stimulation (taVNS)",
      publication: "Frontiers in Human Neuroscience",
      year: 2025,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/39981126/",
      doi: "10.3389/fnhum.2025.1539416",
      pmid: "39981126",
      note:
        "Standardiserte spørreskjemadata fra 488 deltakere med gjennomgående milde reaksjoner og analyse av protokollvariabler.",
    },
  ],

  relatedSlugs: ["vagusnervestimulering",
    "transkutan-vagusnervestimulering",
    "aurikulaer-vagusnervestimulering",
  ],
  relatedKnowledgeSlugs: [
    "er-vagusnervestimulering-trygt",
    "bivirkninger-ved-ikke-invasiv-vagusnervestimulering",
    "hvem-bor-vaere-forsiktig-med-vagusnervestimulering",
    "ikke-invasiv-vagusnervestimulering",
    "transkutan-vagusnervestimulering",
    "aurikulaer-vagusnervestimulering",
    "implantert-og-ikke-invasiv-vns",
  ],
  relatedLinks: [
    {
      title: "Engelsk sikkerhetsforskning",
      description:
        "Åpne den engelske språkparsiden om VNS-sikkerhet, bivirkninger, tolerabilitet og ansvarlige produktgrenser.",
      href: "/research/topics/safety-and-tolerability",
      label: "Åpne engelsk forskningstema",
    },
    {
      title: "Kim et al. 2022",
      description:
        "Les Neuvagos studiesammendrag av den systematiske oversikten og metaanalysen av taVNS-sikkerhet.",
      href:
        "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
      label: "Les studiesammendraget",
    },
    {
      title: "Forskning på vagusnervestimulering",
      description:
        "Sett sikkerhetsdataene inn i den bredere forskningskonteksten for implantert VNS, nVNS, tVNS og taVNS.",
      href: "/no/forskning/vagusnervestimulering",
      label: "Åpne VNS-forskningen",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Se hvordan Neuvago skiller forskningskontekst, velværeformål og medisinske produktpåstander.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
    {
      title: "Medisinsk ansvarsfraskrivelse",
      description:
        "Les grensene mellom generell informasjon, individuell helsehjelp og produktkommunikasjon.",
      href: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
      label: "Les ansvarsfraskrivelsen",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Gå fra forskningskontekst til den praktiske forklaringen av plassering, komfort, veiledning og daglig rutine.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
  ],
} as const satisfies NorwegianResearchTopic;
