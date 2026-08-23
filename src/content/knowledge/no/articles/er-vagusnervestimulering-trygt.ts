import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const erVagusnervestimuleringTrygtArticle = {
  slug: "er-vagusnervestimulering-trygt",
  path: "/no/kunnskap/er-vagusnervestimulering-trygt",
  status: "published",
  wave: "1D",
  order: 140,

  title:
    "Er vagusnervestimulering trygt? Sikkerhet, risiko og hva forskningen viser",
  seoTitle:
    "Er vagusnervestimulering trygt? | Sikkerhet | Neuvago",
  description:
    "En kildebasert guide til sikkerhet ved implantert VNS, tVNS og taVNS, vanlige reaksjoner, alvorlige hendelser og viktige begrensninger.",
  eyebrow: "Sikkerhet og tolerabilitet",
  lead:
    "Vagusnervestimulering er ikke én metode med én felles risikoprofil. Implantert VNS innebærer kirurgi og et medisinsk implantat, mens transkutan og aurikulær stimulering gis utenfra gjennom huden. Forskningen på tVNS og taVNS beskriver metoden som generelt godt tolerert ved protokollene som er undersøkt, men sikkerhetsrapporteringen er ofte ufullstendig, studiene varierer mye, og funn fra én enhet eller protokoll kan ikke automatisk overføres til en annen. Et ansvarlig svar er derfor verken «helt risikofritt» eller «farlig», men: vurder metode, plassering, dose, målgruppe, rapporteringskvalitet og produktets egne instrukser.",
  shortAnswer: [
    "Implantert VNS, halsbasert tVNS og ørebasert taVNS må vurderes hver for seg; de har ulik levering, brukskontekst og risikoprofil.",
    "Systematiske oversikter av transkutan og aurikulær VNS rapporterer hovedsakelig milde og forbigående reaksjoner, men alvorlige hendelser og frafall må fortsatt registreres og vurderes.",
    "Vanlige rapporterte reaksjoner omfatter lokal hudirritasjon eller smerte, prikking, hodepine og enkelte ganger svimmelhet eller annet ubehag.",
    "Manglende rapportering er ikke det samme som dokumentert fravær av bivirkninger; flere oversikter etterlyser mer standardisert sikkerhetsregistrering.",
    "Neuvagos endelige, produktspesifikke kontraindikasjoner, advarsler og stoppråd skal følge den ferdige bruksanvisningen og regulatoriske dokumentasjonen.",
  ],
  hubSummary:
    "En kildebasert sikkerhetspillar som skiller implantert VNS, tVNS og taVNS, forklarer vanlige reaksjoner, alvorlige hendelser, rapporteringssvakheter og produktspesifikke grenser.",
  hubLabel: "Sikkerhetsguide",

  primaryKeyword: "er vagusnervestimulering trygt",
  secondaryKeywords: [
    "vagusnervestimulering sikkerhet",
    "er VNS trygt",
    "bivirkninger vagusnervestimulering",
    "taVNS sikkerhet",
    "tVNS sikkerhet",
    "ikke-invasiv vagusnervestimulering bivirkninger",
    "vagusnervestimulering risiko",
    "øre vagusnervestimulering sikkerhet",
    "aurikulær vagusnervestimulering bivirkninger",
    "transkutan vagusnervestimulering bivirkninger",
    "implantert VNS risiko",
    "hudirritasjon taVNS",
    "hodepine taVNS",
    "svimmelhet vagusnervestimulering",
    "alvorlige bivirkninger taVNS",
    "hvem bør unngå vagusnervestimulering",
    "Neuvago sikkerhet",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-22",
  modifiedAt: "2026-08-22",
  readingTimeMinutes: 22,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  sitemapPriority: 0.9,
  changeFrequency: "weekly",

  sections: [
    {
      id: "kort-svar",
      eyebrow: "Det viktigste først",
      title: "Et presist sikkerhetssvar må begynne med hvilken type VNS det gjelder",
      blocks: [
        {
          type: "paragraph",
          text: "Begrepet vagusnervestimulering brukes om flere teknologier. Implantert VNS leveres gjennom elektroder og pulsgenerator som opereres inn og følges opp klinisk. Transkutan VNS leveres gjennom huden, enten ved halsen eller ved deler av det ytre øret. Disse metodene kan ikke få ett felles ja-eller-nei-svar om sikkerhet.",
        },
        {
          type: "paragraph",
          text: "For transkutan aurikulær VNS viser de største tilgjengelige oversiktene at rapporterte reaksjoner som regel er milde og forbigående ved de undersøkte protokollene. Samtidig er sikkerhetsdataene mindre robuste enn et enkelt sammendrag kan gi inntrykk av, fordi mange studier ikke rapporterer bivirkninger systematisk og langtidsdataene er mer begrensede.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Den ansvarlige konklusjonen",
          paragraphs: [
            "tVNS og taVNS fremstår generelt som godt tolerert i forskningen som foreligger.",
            "Det betyr ikke null risiko, universell egnethet eller at alle enheter og stimuleringsoppsett har samme sikkerhetsprofil.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-betyr-flere-ting",
      eyebrow: "Definer spørsmålet",
      title: "«Trygt» kan bety fravær av alvorlig skade, god tolerabilitet eller lavt frafall",
      blocks: [
        {
          type: "paragraph",
          text: "Sikkerhet og tolerabilitet brukes ofte om hverandre, men de beskriver ikke helt det samme. En metode kan ha få alvorlige hendelser og likevel oppleves ubehagelig nok til at enkelte avbryter. En annen metode kan gi mange milde sensasjoner uten at de har medisinsk betydning.",
        },
        {
          type: "definition",
          term: "Bivirkning eller uønsket hendelse",
          definition:
            "Et uønsket symptom, funn eller medisinsk forhold som oppstår under en studie eller brukssituasjon. Hendelsen er ikke automatisk forårsaket av stimuleringen.",
        },
        {
          type: "definition",
          term: "Alvorlig uønsket hendelse",
          definition:
            "En hendelse som for eksempel medfører sykehusinnleggelse, livstruende tilstand, varig funksjonstap eller annen medisinsk alvorlighet. Alvorlighetsgrad og årsakssammenheng er to forskjellige vurderinger.",
        },
        {
          type: "definition",
          term: "Tolerabilitet",
          definition:
            "Hvor godt en deltaker eller bruker klarer å gjennomføre stimuleringen med tanke på ubehag, lokale reaksjoner, avbrutte økter og frafall.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "En hendelse under behandling er ikke automatisk en hendelse på grunn av behandlingen",
          paragraphs: [
            "Studier bør registrere hva som skjedde, hvor alvorlig det var, når det oppstod og hvor sannsynlig det er at stimuleringen var årsaken.",
          ],
        },
      ],
    },
    {
      id: "metoder-og-risikoprofiler",
      eyebrow: "Metode før konklusjon",
      title: "Implantert VNS, halsbasert tVNS og ørebasert taVNS har forskjellige risikoprofiler",
      blocks: [
        {
          type: "table",
          caption: "Forenklet sikkerhetssammenligning",
          columns: [
            "Metode",
            "Hvordan den leveres",
            "Sentrale sikkerhetstemaer",
            "Hva som ikke kan generaliseres",
          ],
          rows: [
            [
              "Implantert VNS",
              "Kirurgisk implantert pulsgenerator og elektrode ved vagusnerven",
              "Operasjonsrisiko, infeksjon, implantat- og ledningsproblemer, stemme- og halssymptomer, klinisk programmering",
              "Risikoprofilen kan ikke brukes som direkte mål på en ekstern øreenhet",
            ],
            [
              "Transkutan cervikal VNS",
              "Ekstern stimulering gjennom huden ved halsen",
              "Lokal hudreaksjon, komfort, stimulering nær cervikale strukturer, protokoll og produktspesifikke advarsler",
              "Funn kan ikke automatisk overføres til aurikulær plassering",
            ],
            [
              "Transkutan aurikulær VNS",
              "Ekstern stimulering ved bestemte områder av ytre øre",
              "Kontaktsted, smerte eller irritasjon, prikking, hodepine, svimmelhet, dose og plassering",
              "En studies protokoll dokumenterer ikke enhver øreenhet",
            ],
            [
              "Velværeorientert øresystem",
              "Produktspesifikk ekstern enhet og veiledet rutine",
              "Tiltenkt bruk, bruksanvisning, kontakt, intensitet, egnethet og stoppråd",
              "Generell taVNS-forskning er kontekst, ikke automatisk produktdokumentasjon",
            ],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Ikke lån kontraindikasjoner eller sikkerhetsløfter mellom produktkategorier",
          paragraphs: [
            "En implantert medisinsk enhet, en klinisk tVNS-protokoll og et velværeprodukt må vurderes etter sine egne instrukser, data og regulatoriske rammer.",
          ],
        },
      ],
    },
    {
      id: "implantert-vns",
      eyebrow: "Kirurgisk og klinisk kontekst",
      title: "Implantert VNS innebærer både operasjonsrisiko og stimuleringsrelaterte reaksjoner",
      blocks: [
        {
          type: "paragraph",
          text: "Implantert VNS er en medisinsk behandling med kirurgisk innsetting av en pulsgenerator og en elektrode rundt vagusnerven på halsen. Sikkerhetsbildet omfatter derfor både selve operasjonen, implantatet, ledningen, programmeringen og reaksjoner under stimulering.",
        },
        {
          type: "paragraph",
          text: "Offisiell sikkerhetsinformasjon for implanterte VNS-systemer omtaler blant annet infeksjon og andre kirurgiske komplikasjoner, samt stimuleringsrelaterte symptomer som stemmeforandring, hoste, halsubehag, tungpust og svelgevansker. Denne profilen tilhører en implantatbehandling og bør ikke brukes til å beskrive en ekstern aurikulær metode som om teknologiene var like.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Ikke-invasiv betyr mindre invasivitet – ikke automatisk null risiko",
          paragraphs: [
            "Fravær av kirurgi fjerner implantasjonsrisikoen, men ekstern elektrisk stimulering krever fortsatt god kontakt, passende dose, tydelige instrukser og oppfølging av uønskede reaksjoner.",
          ],
        },
      ],
    },
    {
      id: "redgrave-2018",
      eyebrow: "Bred tVNS-oversikt",
      title: "En systematisk oversikt fra 2018 fant hovedsakelig milde reaksjoner – men også frafall og enkelte alvorlige hendelser",
      blocks: [
        {
          type: "paragraph",
          text: "Redgrave og kolleger gjennomgikk 51 studier med 1 322 personer som hadde mottatt transkutan VNS. Oversikten omfattet mer enn bare ørebasert taVNS og gir derfor et bredt bilde av tidlig tVNS-forskning.",
        },
        {
          type: "table",
          caption: "Utvalgte resultater fra Redgrave et al. 2018",
          columns: ["Mål", "Rapportert resultat", "Tolkning"],
          rows: [
            [
              "Lokal hudirritasjon",
              "240 deltakere – 18,2 prosent",
              "Den vanligste rapporterte reaksjonen i denne oversikten",
            ],
            [
              "Hodepine",
              "47 deltakere – 3,6 prosent",
              "Rapportert på tvers av ulike protokoller",
            ],
            [
              "Nasofaryngitt",
              "23 deltakere – 1,7 prosent",
              "Årsakssammenhengen med stimulering er ikke nødvendigvis klar",
            ],
            [
              "Frafall på grunn av bivirkninger",
              "35 deltakere – 2,6 prosent",
              "Tolerabilitet kan være klinisk relevant selv når hendelser ikke er alvorlige",
            ],
            [
              "Alvorlige uønskede hendelser",
              "30 hendelser totalt; 3 ble vurdert som mulig relatert",
              "Alvorlig hendelse betyr ikke automatisk dokumentert årsakssammenheng",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Konklusjonen gjaldt dosene og protokollene som var testet",
          paragraphs: [
            "Forfatterne beskrev tVNS som sikkert og godt tolerert ved forskningsdosene som var undersøkt frem til 2017.",
            "Resultatet er ikke en universell godkjenning av alle fremtidige enheter, plasseringer eller brukergrupper.",
          ],
        },
      ],
    },
    {
      id: "kim-2022",
      eyebrow: "Største aurikulære sikkerhetssyntese",
      title: "Kim et al. 2022 samlet 177 taVNS-studier og 6 322 deltakere",
      blocks: [
        {
          type: "paragraph",
          text: "Den systematiske oversikten og metaanalysen fra Kim og kolleger fokuserte spesifikt på transkutan aurikulær VNS. Den sammenstilte 177 studier med totalt 6 322 personer og vurderte både hvordan bivirkninger ble registrert og hvilke hendelser som ble rapportert.",
        },
        {
          type: "table",
          caption: "Hovedfunn fra Kim et al. 2022",
          columns: ["Funn", "Resultat", "Hvorfor det betyr noe"],
          rows: [
            [
              "Studier uten omtale av bivirkninger",
              "55,37 prosent",
              "Mer enn halvparten dokumenterte ikke uttrykkelig om hendelser forekom eller ikke",
            ],
            [
              "Studier som rapporterte minst én hendelse",
              "24,86 prosent",
              "Rapporteringspraksisen var ujevn mellom studiene",
            ],
            [
              "Aktiv taVNS mot kontroll",
              "Ingen signifikant forskjell i samlet risiko for minst én hendelse",
              "Kontrollbetingelsen og forventede sensasjoner er viktige i tolkningen",
            ],
            [
              "Samlet hendelsesrate",
              "12,84 per 100 000 person-minutter-dager med stimulering",
              "Et forskningsmål som ikke bør leses som en enkel personlig prosentsannsynlighet",
            ],
            [
              "Hyppigst rapportert",
              "Øresmerte, hodepine og prikking",
              "Lokale og forbigående reaksjoner dominerte rapporteringen",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Oversikten fant ikke en kausal sammenheng mellom taVNS og alvorlige hendelser i materialet. Det er betryggende, men konklusjonen må leses sammen med den omfattende mangelen på eksplisitt sikkerhetsrapportering.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "«Generelt trygt» og «fullstendig dokumentert» er ikke det samme",
          paragraphs: [
            "Dataene støtter en gunstig sikkerhetsprofil ved de studerte protokollene.",
            "Samtidig gjør manglende og varierende rapportering det vanskeligere å anslå sjeldne hendelser, langtidsrisiko og forskjeller mellom bestemte enheter.",
          ],
        },
      ],
    },
    {
      id: "nyere-data",
      eyebrow: "Nyere sikkerhetsdata",
      title: "Nyere analyser støtter hovedsakelig milde reaksjoner, men viser fortsatt behov for standardisert registrering",
      blocks: [
        {
          type: "paragraph",
          text: "En pooled analyse publisert i 2025 brukte et standardisert spørreskjema hos 488 deltakere. Den fant gjennomgående lave og milde bivirkningsskårer. Enkelte forskjeller mellom kontinuerlig og intervallbasert stimulering var statistisk målbare, men forfatterne vurderte de fleste effektene som små i klinisk betydning.",
        },
        {
          type: "paragraph",
          text: "En scoping review fra 2024 inkluderte 109 studier på terapeutisk taVNS. Totalt hadde 2 214 voksne mottatt aktiv stimulering og 1 017 sham. De fleste rapporterte hendelsene var lokale ved stimuleringsstedet, men bare omtrent halvparten av studiene rapporterte sikkerhet og tolerabilitet, og både stimuleringsparametere og bivirkninger ble registrert ujevnt.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Nyere data reduserer ikke behovet for produktspesifikk vurdering",
          paragraphs: [
            "Et samlet mønster av milde reaksjoner er nyttig forskningskontekst.",
            "Det dokumenterer fortsatt ikke automatisk en bestemt kommersiell enhet, kontaktløsning eller hjemmeprotokoll.",
          ],
        },
      ],
    },
    {
      id: "vanlige-reaksjoner",
      eyebrow: "Hva som oftest rapporteres",
      title: "Vanlige reaksjoner er ofte lokale, sensoriske og forbigående",
      blocks: [
        {
          type: "table",
          caption: "Reaksjoner som går igjen i sikkerhetslitteraturen",
          columns: ["Reaksjon", "Mulig sammenheng", "Viktig nyanse"],
          rows: [
            [
              "Prikking eller elektrisk sensasjon",
              "Direkte følge av elektrisk stimulering ved kontaktstedet",
              "Kan være forventet sensasjon, men skal ikke måtte være smertefull eller stadig sterkere",
            ],
            [
              "Øresmerte eller lokalt ubehag",
              "Kontakttrykk, intensitet, elektrodeplassering eller hudfølsomhet",
              "Vedvarende smerte er ikke et mål på bedre effekt",
            ],
            [
              "Rødhet, irritasjon eller kløe",
              "Elektrodekontakt, fuktighet, materiale, trykk eller strømfordeling",
              "Hudreaksjon bør dokumenteres og vurderes før videre bruk",
            ],
            [
              "Hodepine",
              "Rapportert i flere oversikter, men årsakssammenheng kan variere",
              "Samtidig sykdom, stress, studieprosedyrer og sham kan også spille inn",
            ],
            [
              "Svimmelhet eller ubehag",
              "Rapportert i enkelte studier og pooled analyser",
              "Krever avbrudd og vurdering dersom det er tydelig, nytt eller vedvarende",
            ],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Mer intens sensasjon er ikke en sikkerhets- eller effektfordel",
          paragraphs: [
            "En god protokoll søker en tydelig, tolererbar og reproducerbar opplevelse – ikke høyest mulig intensitet.",
          ],
        },
      ],
    },
    {
      id: "alvorlige-hendelser",
      eyebrow: "Sjeldne hendelser og årsak",
      title: "Alvorlige hendelser må tas på alvor uten å tilskrives stimuleringen automatisk",
      blocks: [
        {
          type: "paragraph",
          text: "Når en studie rapporterer en alvorlig uønsket hendelse, må forskerne skille mellom at hendelsen oppstod under studieperioden og at den sannsynligvis ble forårsaket av stimuleringen. Dette krever tidsforløp, medisinsk vurdering, doseforhold, alternative forklaringer og gjerne sammenligning med kontrollgruppen.",
        },
        {
          type: "paragraph",
          text: "Redgrave-oversikten rapporterte alvorlige hendelser, men bare et lite mindretall ble vurdert som mulig relatert. Kim-oversikten fant ingen dokumentert kausal sammenheng mellom taVNS og alvorlige hendelser. Den nyere scoping reviewen identifiserte også alvorlige hendelser, men viste at klassifisering og årsaksvurdering var ujevn og enkelte hendelser forekom i shamgrupper.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Fravær av dokumentert årsak er ikke et løfte om at en hendelse aldri kan forekomme",
          paragraphs: [
            "Sjeldne risikoer krever store datasett, lang oppfølging og konsekvent rapportering.",
            "En sikkerhetsside bør derfor beskrive både det betryggende hovedmønsteret og usikkerheten som fortsatt finnes.",
          ],
        },
      ],
    },
    {
      id: "rapporteringskvalitet",
      eyebrow: "Den viktigste begrensningen",
      title: "Sikkerhetsrapportering i tVNS-forskning har ofte vært utilstrekkelig",
      blocks: [
        {
          type: "paragraph",
          text: "Manglende registrering kan gjøre en metode sikrere på papiret enn den faktisk er, men kan også bety at studien ikke hadde hendelser å rapportere. Uten en eksplisitt setning om at sikkerhet ble undersøkt og ingen hendelser ble funnet, vet leseren ikke forskjellen.",
        },
        {
          type: "paragraph",
          text: "Farmer og en stor internasjonal ekspertgruppe anbefalte derfor minimumsstandarder for tVNS-forskning. De omfatter tekniske parametere, plassering, enhet, inkluderings- og eksklusjonskriterier, utfallsmål og detaljert rapportering av bivirkninger.",
        },
        {
          type: "numbered",
          items: [
            "Beskriv hvordan bivirkninger ble etterspurt – spontant eller med standardisert skjema.",
            "Rapporter både fravær og tilstedeværelse av hendelser.",
            "Oppgi alvorlighetsgrad, varighet, tiltak og om deltakeren avbrøt.",
            "Vurder årsakssammenheng og rapporter hendelser i både aktiv- og kontrollgruppe.",
            "Oppgi plassering, intensitet, frekvens, pulsbredde, duty cycle, øktlengde og samlet eksponering.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Rapporteringsstandarder er også et sikkerhetstiltak",
          paragraphs: [
            "Detaljert metodeinformasjon gjør det mulig å se om bestemte protokoller, brukergrupper eller kontaktløsninger har en annen risikoprofil.",
          ],
        },
      ],
    },
    {
      id: "parametere-og-dose",
      eyebrow: "Detaljene kan endre opplevelsen",
      title: "Plassering, kontakt, intensitet og samlet eksponering er en del av sikkerheten",
      blocks: [
        {
          type: "paragraph",
          text: "Elektrisk stimulering beskrives ikke godt nok med bare navnet taVNS eller tVNS. To studier kan bruke samme kategoriord, men ulike øreområder, elektroder, strømformer, frekvenser, pulsbredder, intensiteter, øktlengder og totale behandlingsperioder.",
        },
        {
          type: "table",
          caption: "Protokolldetaljer som bør være synlige",
          columns: ["Variabel", "Hvorfor den betyr noe", "Spørsmål å stille"],
          rows: [
            [
              "Anatomisk plassering",
              "Forskjellige steder har ulik anatomi, hudkontakt og mekanismehypotese",
              "Hvor sitter elektroden, og hvorfor er stedet valgt?",
            ],
            [
              "Intensitet",
              "Påvirker sensasjon, komfort og risiko for smerte eller avbrudd",
              "Er målet tolererbar stimulering fremfor maksimal styrke?",
            ],
            [
              "Pulsbredde og frekvens",
              "Endrer elektrisk dose og nerve-/hudrespons",
              "Er parameterne dokumentert og forklart?",
            ],
            [
              "Duty cycle og øktlengde",
              "Bestemmer hvor lenge strøm leveres i hver økt",
              "Hvor mye aktiv stimulering mottar brukeren faktisk?",
            ],
            [
              "Samlet eksponering",
              "Kort laboratorietest og daglig hjemmebruk over måneder er ikke samme sikkerhetsspørsmål",
              "Hvor lang oppfølging har dokumentasjonen?",
            ],
            [
              "Elektrode og kontakt",
              "Trykk, størrelse, fuktighet og materiale påvirker lokal tolerabilitet",
              "Finnes tydelig veiledning for hud, kontakt og vedlikehold?",
            ],
          ],
        },
      ],
    },
    {
      id: "hvem-er-studert",
      eyebrow: "Generaliserbarhet",
      title: "En gunstig sikkerhetsprofil gjelder først og fremst personene og situasjonene som faktisk er studert",
      blocks: [
        {
          type: "paragraph",
          text: "Mange studier inkluderer friske voksne eller nøye utvalgte pasientgrupper. Personer med bestemte hjerteforhold, implantert elektronisk utstyr, graviditet, alvorlig sykdom eller andre risikofaktorer kan være ekskludert. Når slike grupper mangler i datamaterialet, vet vi mindre om sikkerheten – det er ikke det samme som at risikoen er dokumentert høy eller lav.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Eksklusjonskriterium er ikke automatisk en universell kontraindikasjon",
          paragraphs: [
            "En studie kan ekskludere en gruppe for å redusere usikkerhet eller forenkle forsøket.",
            "En produktkontraindikasjon skal bygge på den konkrete enhetens risikovurdering, bruksanvisning og regulatoriske dokumentasjon.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Produktspesifikke grupper må avklares i endelig Neuvago-informasjon",
          paragraphs: [
            "Den endelige listen over kontraindikasjoner, advarsler, forsiktighetsregler og behov for medisinsk vurdering skal ikke låses på grunnlag av generelle forskningsartikler alene.",
          ],
        },
      ],
    },
    {
      id: "vurder-sikkerhetspastander",
      eyebrow: "Les påstander kritisk",
      title: "Slik vurderer du om en sikkerhetspåstand er troverdig",
      blocks: [
        {
          type: "numbered",
          items: [
            "Sjekk hvilken metode og anatomisk plassering påstanden gjelder.",
            "Se hvor mange personer som faktisk mottok aktiv stimulering.",
            "Se hvor lenge de ble fulgt opp og hvor stor den samlede eksponeringen var.",
            "Sjekk om bivirkninger ble etterspurt systematisk eller bare rapportert spontant.",
            "Skill mellom alle hendelser, alvorlige hendelser og hendelser vurdert som relatert.",
            "Se om kontrollgruppen hadde tilsvarende symptomer eller sensasjoner.",
            "Kontroller om frafall og avbrutte økter er rapportert.",
            "Vurder om studiens enhet, dose og målgruppe ligner produktet eller situasjonen du vurderer.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Den beste sikkerhetssetningen er spesifikk",
          paragraphs: [
            "«Generelt godt tolerert i de undersøkte taVNS-protokollene» er mer presist enn «vagusnervestimulering er helt trygt».",
          ],
        },
      ],
    },
    {
      id: "nar-du-bor-stoppe-og-soke-hjelp",
      eyebrow: "Bruk og hjelpenivå",
      title: "Stopp ved tydelig ubehag og bruk riktig medisinsk hjelpenivå ved alvorlige eller vedvarende symptomer",
      blocks: [
        {
          type: "paragraph",
          text: "Den konkrete bruksanvisningen skal styre plassering, intensitet, øktlengde, hudkontakt og når bruk skal avbrytes. Ikke fortsett for å «venne kroppen til» sterk smerte, tydelig hudskade, kraftig svimmelhet eller andre nye symptomer som føles medisinsk bekymringsfulle.",
        },
        {
          type: "bullets",
          items: [
            "Ta pause og kontroller plassering, kontakt og intensitet ved lokalt ubehag.",
            "Ikke øk intensiteten for å jage en kraftigere sensasjon.",
            "Kontakt fastlege eller annet kvalifisert helsepersonell ved vedvarende, gjentatte eller uklare symptomer.",
            "Ring legevakt 116 117 når hjelpen ikke kan vente til fastlegen er tilgjengelig, men situasjonen ikke virker livstruende.",
            "Ring 113 når det er akutt og står om liv og helse.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Denne siden erstatter ikke produktets bruksanvisning eller medisinsk vurdering",
          paragraphs: [
            "Generell forskningsinformasjon kan ikke avgjøre om en bestemt person bør bruke en bestemt enhet.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige produktgrenser",
      title: "Hva kan vi si om Neuvago før den endelige sikkerhetsdokumentasjonen er låst?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er utviklet som et eksternt, ørebasert velværesystem med justerbar stimulering og en separat app. Den generelle tVNS- og taVNS-litteraturen gir relevant metode- og sikkerhetskontekst, men dokumenterer ikke automatisk Neuvagos konkrete enhet, elektrode, parametere eller hjemmebruk.",
        },
        {
          type: "paragraph",
          text: "Før produktspesifikke sikkerhetsformuleringer låses, skal de samordnes med endelig bruksanvisning, teknisk risikostyring, elektrisk sikkerhetsdokumentasjon, produktets tiltenkte bruk og de regulatoriske dokumentene som gjelder den ferdige maskinvaren.",
        },
        {
          type: "table",
          caption: "Hva som kan publiseres nå – og hva som må følge final dokumentasjon",
          columns: ["Kan publiseres som generell kunnskap", "Må være produktspesifikt dokumentert"],
          rows: [
            [
              "Forskjellen mellom implantert VNS, tVNS og taVNS",
              "Endelig kontraindikasjonsliste for Neuvago",
            ],
            [
              "Vanlige reaksjoner rapportert i forskningslitteraturen",
              "Neuvagos eksakte stoppråd og forsiktighetsregler",
            ],
            [
              "Begrensninger i sikkerhetsrapportering",
              "Tillatte intensitets-, økt- og eksponeringsgrenser",
            ],
            [
              "Hvorfor en studie ikke automatisk dokumenterer et produkt",
              "Påstander om Neuvagos egen bivirkningsrate eller sikkerhetsnivå",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Neuvago skal ikke markedsføres som risikofritt",
          paragraphs: [
            "En ansvarlig velværeposisjon bruker tydelig bruksinformasjon, moderat språk og en åpen forskjell mellom generell forskning og direkte produktdokumentasjon.",
          ],
        },
      ],
    },
    {
      id: "oppsummering",
      eyebrow: "Samlet vurdering",
      title: "Forskningen er overveiende betryggende for taVNS – men sikkerhet må fortsatt beskrives presist",
      blocks: [
        {
          type: "bullets",
          items: [
            "Implantert VNS og ikke-invasive metoder har ulike risikoer og skal ikke blandes sammen.",
            "Systematiske oversikter beskriver tVNS og taVNS som generelt godt tolerert ved protokollene som er undersøkt.",
            "Lokale reaksjoner, øresmerte eller ubehag, prikking og hodepine går igjen i litteraturen.",
            "Alvorlige hendelser er rapportert, men årsakssammenheng med stimuleringen har ofte vært usikker eller ikke dokumentert.",
            "Mangelfull sikkerhetsrapportering og begrensede langtidsdata gjør at «ingen kjent hendelse» ikke bør oversettes til «ingen risiko».",
            "Enhet, plassering, parametere, eksponering, brukergruppe og bruksanvisning avgjør hvor relevant forskningen er for et konkret produkt.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort konklusjon",
          paragraphs: [
            "Ikke-invasiv, særlig aurikulær, vagusnervestimulering har en gunstig rapportert sikkerhetsprofil i dagens forskning.",
            "Den korrekte formuleringen er likevel «generelt godt tolerert under studerte forhold» – ikke «garantert trygt for alle».",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "kim-2022-tavns-safety",
      authors:
        "Kim AY, Marduy A, de Melo PS, Gianlorenco AC, Kim CK, Choi H, Song JJ, Fregni F",
      title:
        "Safety of transcutaneous auricular vagus nerve stimulation (taVNS): a systematic review and meta-analysis",
      publication: "Scientific Reports",
      year: 2022,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
      doi: "10.1038/s41598-022-25864-1",
      pmid: "36543841",
      note:
        "177 studier og 6 322 deltakere; hyppigst rapportert øresmerte, hodepine og prikking, men mer enn halvparten av studiene omtalte ikke om bivirkninger forekom.",
    },
    {
      id: "redgrave-2018-tvns-safety",
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
        "51 studier og 1 322 tVNS-eksponerte deltakere; lokal hudirritasjon, hodepine og nasofaryngitt var de vanligste rapporterte reaksjonene.",
    },
    {
      id: "farmer-2021-reporting-standards",
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
        "Internasjonal konsensus om rapportering av enhet, plassering, parametere, inklusjon, eksklusjon og bivirkninger i tVNS-studier.",
    },
    {
      id: "giraudier-2025-pooled-side-effects",
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
        "Pooled analyse av 488 deltakere med standardisert registrering av ti mulige bivirkninger; reaksjonene var gjennomgående milde.",
    },
    {
      id: "gerges-2024-clinical-application",
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
        "109 studier, 2 214 voksne med aktiv taVNS og 1 017 med sham; sikkerhets- og parameterregistreringen var begrenset og inkonsistent.",
    },
    {
      id: "livanova-2025-vns-safety",
      authors: "LivaNova",
      title:
        "VNS Therapy Safety Information – Brief Summary for Patients and Healthcare Professionals",
      publication: "VNS Therapy product safety information",
      year: 2025,
      type: "official-guidance",
      url: "https://www.livanova.com/epilepsy-vnstherapy/en-us/safety-information",
      note:
        "Produktspesifikk sikkerhetsinformasjon for et implantert VNS-system; brukes her til å vise hvorfor implantatrisiko ikke kan blandes sammen med ekstern taVNS.",
    },
    {
      id: "helsenorge-helsehjelp",
      authors: "Helsedirektoratet",
      title: "Helsehjelp i Norge – 113, legevakt og fastlege",
      publication: "Helsenorge",
      year: 2026,
      type: "official-guidance",
      url: "https://www.helsenorge.no/helsehjelp/",
      note:
        "Offisiell norsk veiledning om 113 ved fare for liv, 116 117 når hjelpen ikke kan vente, og fastlegen som hovedkontakt.",
    },
  ],

  relatedSlugs: [
    "vagusnervestimulering",
    "ikke-invasiv-vagusnervestimulering",
    "transkutan-vagusnervestimulering",
    "aurikulaer-vagusnervestimulering",
    "implantert-og-ikke-invasiv-vns",
    "bivirkninger-ved-ikke-invasiv-vagusnervestimulering",
  ],
  relatedLinks: [
    {
      title: "Sikkerhet og tolerabilitet – forskningsoversikt",
      description:
        "Gå dypere i den engelske forskningssiden om bivirkningsrapportering, studiepopulasjoner, komfort og tolkningsgrenser.",
      href: "/research/topics/safety-and-tolerability",
      label: "Utforsk sikkerhetsforskningen",
    },
    {
      title: "Kim et al. 2022 – taVNS-sikkerhet",
      description:
        "Les Neuvagos studiesammendrag av den systematiske oversikten og metaanalysen med 177 studier og 6 322 deltakere.",
      href:
        "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis",
      label: "Les studiesammendraget",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Les hvordan Neuvago avgrenser velværebruk fra diagnose, behandling og medisinsk oppfølging.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
    {
      title: "Medisinsk ansvarsfraskrivelse",
      description:
        "Se grensene mellom generell informasjon, produktinformasjon og individuell medisinsk rådgivning.",
      href: "/no/juridisk/medisinsk-ansvarsfraskrivelse",
      label: "Les medisinsk ansvarsfraskrivelse",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan enheten, ørekomponenten, appen og den veiledede velværerutinen henger sammen.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
