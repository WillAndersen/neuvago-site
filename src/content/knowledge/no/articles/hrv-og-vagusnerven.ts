import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const hrvOgVagusnervenArticle = {
  slug: "hrv-og-vagusnerven",
  path: "/no/kunnskap/hrv-og-vagusnerven",
  status: "published",
  wave: "1B",
  order: 110,

  title:
    "HRV og vagusnerven – hva hjertefrekvensvariabilitet kan og ikke kan fortelle",
  seoTitle: "HRV og vagusnerven: måling og tolkning | Neuvago",
  description:
    "Lær hva HRV er, hvordan RMSSD, SDNN og frekvensmål tolkes, hva smartklokker faktisk måler, og hvorfor HRV ikke er en direkte vagusmåling.",
  eyebrow: "HRV, måling og vagusnerven",
  lead:
    "Hjertefrekvensvariabilitet, ofte forkortet HRV, beskriver variasjonen i tidsintervallet mellom hjerteslag. HRV brukes i forskning, klinisk fysiologi, idrett og forbrukerteknologi fordi hjerterytmen påvirkes av pust, autonome nervebaner, reflekskontroll, døgnrytme, aktivitet og mange andre forhold. Enkelte HRV-mål kan gi indirekte informasjon om rask kardial vagal regulering, men HRV er ikke en direkte måling av hele vagusnerven, samlet parasympatisk aktivitet eller generell «nervesystembalanse».",
  shortAnswer: [
    "HRV beregnes fra variasjon mellom påfølgende hjerteslag, helst fra kvalitetssikrede normale NN-intervaller i et ECG-signal.",
    "RMSSD og høyfrekvent HRV brukes ofte som mål som er følsomme for rask kardial vagal påvirkning, mens SDNN beskriver samlet variasjon over den aktuelle registreringslengden.",
    "Pust, kroppsstilling, tidspunkt, aktivitet, gjennomsnittspuls, alder, legemidler, sykdom og signalfeil kan endre resultatet.",
    "PPG-baserte wearables måler pulsbølgeintervaller; disse kan samsvare godt med ECG i rolige forhold, men er ikke alltid identiske med ECG-basert HRV.",
    "Et høyt eller lavt HRV-tall er ikke alene en diagnose, en vurdering av hele vagusnerven eller bevis på at en bestemt stimulering virker.",
  ],
  hubSummary:
    "En praktisk og metodekritisk guide til HRV, RR- og NN-intervaller, RMSSD, SDNN, frekvensmål, wearables, pust, artefakter og sammenhengen med vagusnerven.",
  hubLabel: "Måling og begreper",

  primaryKeyword: "HRV og vagusnerven",
  secondaryKeywords: [
    "hjertefrekvensvariabilitet",
    "HRV",
    "måle HRV",
    "HRV smartklokke",
    "HRV klokke",
    "HRV normalverdi",
    "høy HRV",
    "lav HRV",
    "RMSSD",
    "SDNN",
    "pNN50",
    "høyfrekvent HRV",
    "LF HF ratio",
    "RR intervall",
    "NN intervall",
    "vagusnerven HRV",
    "parasympatisk aktivitet HRV",
    "pulsvariasjon",
    "PPG og HRV",
    "ECG og HRV",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-18",
  modifiedAt: "2026-08-18",
  readingTimeMinutes: 21,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  sitemapPriority: 0.85,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-hrv",
      eyebrow: "Grunnleggende definisjon",
      title: "Hva er hjertefrekvensvariabilitet – HRV?",
      blocks: [
        {
          type: "paragraph",
          text: "Hjertet slår ikke med helt identiske tidsintervaller. Selv ved en tilsynelatende stabil puls varierer tiden fra ett slag til det neste. HRV beskriver mønsteret og størrelsen på denne variasjonen.",
        },
        {
          type: "paragraph",
          text: "Variasjonen oppstår fordi hjertets rytmegenerator kontinuerlig påvirkes av blant annet parasympatiske og sympatiske nervebaner, pust, blodtrykksreflekser, hormoner, temperatur, aktivitet og hjertets egne egenskaper. HRV er derfor et sammensatt resultat, ikke et isolert signal fra én nerve.",
        },
        {
          type: "definition",
          term: "Hjertefrekvensvariabilitet – HRV",
          definition:
            "Matematisk beskrivelse av variasjonen i tidsintervaller mellom påfølgende hjerteslag over en definert registreringsperiode.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "HRV handler om tid mellom slag – ikke bare puls",
          paragraphs: [
            "En gjennomsnittspuls på 60 slag per minutt betyr ikke at hvert intervall varer nøyaktig ett sekund.",
            "To personer kan ha samme gjennomsnittspuls, men forskjellige mønstre i slag-til-slag-variasjonen.",
          ],
        },
      ],
    },
    {
      id: "rr-og-nn-intervaller",
      eyebrow: "Hva som faktisk analyseres",
      title: "Hva er forskjellen mellom RR-intervaller og NN-intervaller?",
      blocks: [
        {
          type: "paragraph",
          text: "I et elektrokardiogram, ECG, identifiseres vanligvis R-toppene i hvert normalt QRS-kompleks. Tiden mellom to R-topper kalles et RR-intervall. Dersom registreringen inneholder ekstraslag, feilregistreringer eller andre unormale slag, kan rå RR-intervaller gi misvisende HRV.",
        },
        {
          type: "paragraph",
          text: "Et NN-intervall er et normal-til-normal-intervall etter at artefakter og relevante unormale slag er identifisert og håndtert. Mange standardiserte HRV-mål skal beregnes fra NN-intervaller, ikke fra en ukritisk liste over alle registrerte pulsslag.",
        },
        {
          type: "table",
          caption: "RR og NN brukes ikke alltid om det samme datasettet",
          columns: ["Begrep", "Betydning", "Hvorfor det betyr noe"],
          rows: [
            [
              "RR-intervall",
              "Tidsintervallet mellom påfølgende registrerte R-topper i ECG",
              "Kan inneholde ektopiske slag eller feil dersom signalet ikke er kvalitetssikret",
            ],
            [
              "NN-intervall",
              "Tidsintervallet mellom påfølgende normale sinus-slag etter datarensing",
              "Gir et mer definert grunnlag for standard HRV-analyse",
            ],
            [
              "Interbeat- eller pulsintervall",
              "Tidsintervallet mellom registrerte pulsbølger eller slag i en sensor",
              "Målemetoden kan være ECG, bryststropp eller PPG og er ikke alltid ekvivalent",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Datakvalitet kommer før HRV-tallet",
          paragraphs: [
            "Et enkelt feilregistrert eller ektopisk slag kan påvirke særlig korttidsmål som RMSSD og pNN50 betydelig.",
            "Enheten eller programvaren bør derfor ha dokumentert slagdeteksjon, artefakthåndtering og tydelig informasjon om hvilke intervaller som analyseres.",
          ],
        },
      ],
    },
    {
      id: "tidsdomene",
      eyebrow: "Vanlige HRV-mål",
      title: "Hva betyr RMSSD, SDNN og pNN50?",
      blocks: [
        {
          type: "table",
          caption: "Vanlige tidsdomenevariabler",
          columns: ["Mål", "Hva som beregnes", "Vanlig tolkning og grense"],
          rows: [
            [
              "RMSSD",
              "Kvadratroten av gjennomsnittet av kvadrerte forskjeller mellom påfølgende NN-intervaller",
              "Følsomt for rask slag-til-slag-variasjon og ofte brukt som et vagalt mediert kardialt mål under korte, standardiserte registreringer",
            ],
            [
              "SDNN",
              "Standardavviket til alle NN-intervaller i registreringen",
              "Beskriver samlet variasjon i den aktuelle måleperioden og avhenger sterkt av registreringslengden",
            ],
            [
              "pNN50",
              "Andelen påfølgende NN-intervaller som skiller seg mer enn 50 millisekunder",
              "Fanger rask variasjon, men bruker en vilkårlig terskel og påvirkes av alder og måleforhold",
            ],
            [
              "Gjennomsnittlig NN",
              "Gjennomsnittlig tid mellom normale hjerteslag",
              "Tilsvarer gjennomsnittspulsens tidsgrunnlag og påvirker mulighetsrommet for variasjon",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Målene svarer på forskjellige spørsmål. RMSSD og pNN50 legger stor vekt på forskjellen mellom nabo-intervaller. SDNN inkluderer variasjon over hele registreringen og kan derfor ikke sammenlignes ukritisk mellom en femminutters måling og en 24-timers Holter-registrering.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Registreringslengden er en del av målet",
          paragraphs: [
            "HRV-standardene skiller mellom korte registreringer og døgnregistreringer. Verdier fra forskjellige tidsvinduer er ikke direkte utskiftbare.",
          ],
        },
      ],
    },
    {
      id: "frekvensdomene",
      eyebrow: "Rytmer i signalet",
      title: "Hva betyr HF, LF og VLF i frekvensanalyse?",
      blocks: [
        {
          type: "paragraph",
          text: "Frekvensanalyse fordeler variasjonen i hjerteintervallene etter hvor raskt mønstrene svinger. Resultatet uttrykkes som effekt eller power i definerte frekvensbånd. Båndene er matematiske analyseområder og ikke separate nerver.",
        },
        {
          type: "table",
          caption: "Forenklet oversikt over frekvensbånd",
          columns: ["Mål", "Vanlig frekvensområde", "Hva som må vurderes"],
          rows: [
            [
              "HF – høy frekvens",
              "Omtrent 0,15–0,40 Hz i vanlige voksenprotokoller",
              "Overlapper ofte normal pustefrekvens og brukes som et mål på vagalt mediert kardial variasjon når pusten ligger i båndet",
            ],
            [
              "LF – lav frekvens",
              "Omtrent 0,04–0,15 Hz",
              "Påvirkes av både parasympatiske og sympatiske mekanismer, barorefleks og målesituasjon",
            ],
            [
              "VLF – svært lav frekvens",
              "Omtrent 0,0033–0,04 Hz",
              "Krever lengre registrering for meningsfull tolkning; fysiologien er sammensatt",
            ],
            [
              "Total power",
              "Samlet spektral effekt innenfor valgte bånd",
              "Avhenger av registreringslengde, preprocessing og hvilke frekvenser analysen inkluderer",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Frekvensbånd er analysemodeller – ikke rene fysiologiske kanaler",
          paragraphs: [
            "HF kan være informativt om rask kardial vagal modulering når pust og måleforhold er kjent.",
            "LF bør ikke omtales som et rent sympatisk mål.",
          ],
        },
      ],
    },
    {
      id: "lf-hf-forholdet",
      eyebrow: "En omstridt snarvei",
      title: "Hvorfor LF/HF-forholdet ikke er en enkel sympatisk–parasympatisk balanse",
      blocks: [
        {
          type: "paragraph",
          text: "LF/HF beregnes ved å dele lavfrekvent effekt på høyfrekvent effekt. Målet har ofte blitt omtalt som «sympatovagal balanse», der LF representerer sympatisk aktivitet og HF parasympatisk aktivitet.",
        },
        {
          type: "paragraph",
          text: "Denne tolkningen er for enkel. LF påvirkes ikke bare av sympatisk aktivitet, og forholdstallet kan endres fordi telleren, nevneren eller begge endres. Pust, barorefleks og den matematiske normaliseringen påvirker også resultatet.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "LF/HF bør ikke brukes som en universell balansepoengsum",
          paragraphs: [
            "Kritiske gjennomganger og nyere metodeanbefalinger fraråder å tolke LF/HF som en direkte måling av sympatisk–parasympatisk balanse.",
            "Et forholdstall kan beskrives som et spektralt forhold i den aktuelle registreringen, men den fysiologiske meningen må begrunnes særskilt.",
          ],
        },
      ],
    },
    {
      id: "hrv-og-vagusnerven",
      eyebrow: "Koblingen til vagal regulering",
      title: "Hva er sammenhengen mellom HRV og vagusnerven?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagale nervebaner til hjertet kan endre sinusknutens rytme raskt fra slag til slag. Denne raske påvirkningen er en viktig grunn til at RMSSD, RSA og HF-HRV ofte omtales som vagalt medierte HRV-mål.",
        },
        {
          type: "paragraph",
          text: "Koblingen gjelder kardial vagal kontroll. Vagusnerven inneholder også omfattende sensoriske fibre og motoriske forbindelser til andre organer. Et hjertebasert HRV-mål kan derfor ikke vise samlet vagal aktivitet i fordøyelse, luftveier eller andre systemer.",
        },
        {
          type: "table",
          caption: "Hva HRV kan og ikke kan støtte",
          columns: ["HRV kan bidra med", "HRV kan ikke alene fastslå"],
          rows: [
            [
              "Informasjon om variasjon i sinusrytmen under definerte forhold",
              "Aktiviteten i alle vagale nervefibre",
            ],
            [
              "Indirekte mål på rask kardial vagal modulering",
              "Samlet parasympatisk aktivitet i hele kroppen",
            ],
            [
              "Respons på en standardisert oppgave eller måleperiode",
              "Årsaken til symptomer eller en medisinsk diagnose",
            ],
            [
              "Trenddata når metode og kontekst er sammenlignbar",
              "Om én person har et «bedre nervesystem» enn en annen",
            ],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "HRV er et vindu mot hjertets regulering",
          paragraphs: [
            "Det er et viktig vindu, men ikke en direkte avlesning av hele vagusnerven eller hele det autonome nervesystemet.",
          ],
        },
      ],
    },
    {
      id: "pust-og-hrv",
      eyebrow: "Den sterkeste akutte påvirkningen",
      title: "Hvordan påvirker pust HRV?",
      blocks: [
        {
          type: "paragraph",
          text: "Hjertefrekvensen varierer normalt med respirasjonen. Hos mange øker pulsen under innpust og reduseres under utpust. Dette kalles respiratorisk sinusarytmi og bidrar betydelig til korttids-HRV.",
        },
        {
          type: "paragraph",
          text: "Når pusten blir langsommere, kan den respiratoriske svingningen flyttes fra HF-båndet mot LF-båndet. Derfor kan langsom pust gi høyere total variasjon og høyere RMSSD samtidig som HF-power ikke nødvendigvis øker på den måten en enkel fortolkning forventer.",
        },
        {
          type: "numbered",
          items: [
            "Registrer eller standardiser pust når HRV skal brukes i fysiologisk sammenligning.",
            "Unngå å sammenligne en spontan hvilemåling med en kontrollert langsom-pust-måling som om de var samme tilstand.",
            "Vurder om pustefrekvensen ligger innenfor frekvensbåndet som tolkes.",
            "Ikke bruk en akutt pustefremkalt HRV-økning som bevis på varig forbedret vagusfunksjon.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Langsom pust påvirker selve målesignalet",
          paragraphs: [
            "Det kan være en ønsket og interessant fysiologisk effekt, men den må beskrives som en effekt under den konkrete pusteprotokollen.",
          ],
        },
      ],
    },
    {
      id: "kort-og-lang-registrering",
      eyebrow: "Måletid former resultatet",
      title: "Hva er forskjellen mellom korte målinger og 24-timers HRV?",
      blocks: [
        {
          type: "table",
          caption: "Måleperioder svarer på forskjellige spørsmål",
          columns: ["Registrering", "Typisk bruk", "Viktig begrensning"],
          rows: [
            [
              "Fem minutter i hvile",
              "Standardisert korttidsmåling av blant annet RMSSD og frekvenskomponenter",
              "Krever stabil periode og sier lite om variasjon gjennom hele døgnet",
            ],
            [
              "Ultra-kort måling",
              "Praktiske trendmålinger med enkelte validerte mål og enheter",
              "Ikke alle HRV-variabler er gyldige ved svært korte tidsvinduer",
            ],
            [
              "Nattmåling",
              "Trenddata under relativt rolige forhold og uten viljestyrt aktivitet",
              "Søvnstadier, bevegelse, alkohol, temperatur og sensorvalg påvirker resultatet",
            ],
            [
              "24-timers Holter",
              "Samlet døgnvariasjon, rytmevurdering og kliniske eller forskningsmessige spørsmål",
              "Verdiene påvirkes av aktivitet, søvn, måltider, døgnrytme og hele dagens hendelser",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "SDNN fra 24 timer beskriver noe annet enn SDNN fra fem minutter. Det samme gjelder referanseområder, prognostisk betydning og hvilke fysiologiske rytmer som får plass i signalet.",
        },
      ],
    },
    {
      id: "ecg-ppg-og-wearables",
      eyebrow: "Sensoren betyr noe",
      title: "Måler smartklokker og ringer egentlig HRV?",
      blocks: [
        {
          type: "paragraph",
          text: "ECG registrerer hjertets elektriske aktivitet og er referansemetoden for å identifisere R-topper og RR-intervaller. Mange klokker og ringer bruker fotopletysmografi, PPG, som registrerer endringer i blodvolum i huden og beregner intervaller mellom pulsbølger.",
        },
        {
          type: "definition",
          term: "Pulsfrekvensvariabilitet – PRV",
          definition:
            "Variasjon i tidsintervaller mellom perifere pulsbølger målt med for eksempel PPG. PRV kan ligne ECG-basert HRV under enkelte forhold, men er ikke definisjonsmessig identisk.",
        },
        {
          type: "paragraph",
          text: "Studier viser at enkelte sensorer og algoritmer kan måle RMSSD med god overensstemmelse mot ECG i ro og under kontrollerte forhold. Andre studier finner relevante avvik, særlig ved bevegelse, sykdom, dårlig signal eller for enkelte HRV-variabler.",
        },
        {
          type: "table",
          caption: "Når wearables er mest og minst pålitelige",
          columns: ["Mer gunstige forhold", "Mer krevende forhold"],
          rows: [
            [
              "Rolig hvile eller søvn",
              "Bevegelse, trening eller rask stillingsendring",
            ],
            [
              "God hudkontakt og stabil perifer sirkulasjon",
              "Løs passform, kulde, svetting eller svak pulsbølge",
            ],
            [
              "Samme enhet og samme algoritme over tid",
              "Sammenligning av råtall mellom forskjellige merker",
            ],
            [
              "Kvalitetssikret sinusrytme",
              "Ektopiske slag, atrieflimmer eller uregelmessig rytme",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "PPG-resultater må vurderes etter enhet, målgruppe og situasjon",
          paragraphs: [
            "En stor klinisk studie fra 2025 fant at PPG-basert PRV ikke var utskiftbar med ECG-basert HRV for RMSSD, SDNN og pNN50 i den undersøkte kliniske populasjonen.",
            "Dette motsier ikke at enkelte validerte wearables kan gi nyttige trenddata i ro; det viser at teknologi og anvendelsesområde må spesifiseres.",
          ],
        },
      ],
    },
    {
      id: "artefakter-og-rytme",
      eyebrow: "Når tallene blir misvisende",
      title: "Hvordan påvirker artefakter, ekstraslag og rytmeforstyrrelser HRV?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV er svært følsomt for feil i slagdeteksjonen. Ett manglende slag kan skape et kunstig langt intervall, og ett dobbeltregistrert slag kan skape to svært korte intervaller. Begge deler kan øke enkelte HRV-mål kraftig.",
        },
        {
          type: "paragraph",
          text: "Ektopiske slag og atrieflimmer skaper reell intervallvariasjon, men variasjonen har en annen fysiologisk betydning enn normal sinusrytme. En høy variabilitetsscore ved uregelmessig rytme skal derfor ikke tolkes som høy vagal tone.",
        },
        {
          type: "bullets",
          items: [
            "Kontroller om enheten rapporterer signal- eller datakvalitet.",
            "Se om unormale slag fjernes, korrigeres eller beholdes.",
            "Unngå fysiologisk HRV-tolkning ved kjent eller mistenkt atrieflimmer uten medisinsk kompetanse.",
            "Vurder ECG eller klinisk rytmeundersøkelse ved nye uregelmessige pulsmønstre og symptomer.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Høy variabilitet kan skyldes uregelmessig rytme",
          paragraphs: [
            "Besvimelse, brystsmerter, uttalt tungpust, ny hjertebank eller vedvarende uregelmessig puls bør vurderes av helsepersonell.",
          ],
        },
      ],
    },
    {
      id: "faktorer-som-pavirker-hrv",
      eyebrow: "Kontekst før konklusjon",
      title: "Hvilke faktorer påvirker HRV?",
      blocks: [
        {
          type: "table",
          caption: "Vanlige påvirkningsfaktorer",
          columns: ["Faktor", "Eksempel på mulig påvirkning", "Hvordan sammenligne bedre"],
          rows: [
            [
              "Alder",
              "Mange HRV-mål endres gjennom livsløpet",
              "Unngå direkte rangering mot personer i andre aldersgrupper",
            ],
            [
              "Tid på døgnet",
              "Døgnrytme påvirker puls og autonom kontroll",
              "Mål omtrent samme tidspunkt",
            ],
            [
              "Kroppsstilling",
              "Liggende, sittende og stående gir ulike sirkulatoriske krav",
              "Bruk samme stilling og overgangstid",
            ],
            [
              "Pust",
              "Frekvens og dybde endrer respiratorisk hjerterytmevariasjon",
              "Registrer eller standardiser pusten",
            ],
            [
              "Trening og aktivitet",
              "Akutt aktivitet, belastning og restitusjon endrer HRV",
              "Bruk en definert hvileperiode og noter treningsbelastning",
            ],
            [
              "Søvn og alkohol",
              "Søvnmangel og alkohol kan påvirke natt- og morgenmålinger",
              "Se trend sammen med søvn og inntak",
            ],
            [
              "Sykdom, feber og smerte",
              "Endrer metabolsk og autonom belastning",
              "Ikke overfør sykdomsmålinger til normal baseline",
            ],
            [
              "Legemidler og stimulantia",
              "Kan påvirke hjerterytme og autonome responser",
              "Tolk i lys av kjent bruk og medisinsk kontekst",
            ],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Standardisering gjør trenddata mer nyttige",
          paragraphs: [
            "Mål på samme måte, i samme stilling og omtrent samme tidspunkt når målet er å følge endringer over tid.",
          ],
        },
      ],
    },
    {
      id: "innen-person-og-mellom-person",
      eyebrow: "Hva sammenlignes?",
      title: "Hvorfor er egen trend ofte mer nyttig enn å sammenligne seg med andre?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV varierer betydelig mellom personer. Genetikk, alder, hjertefrekvens, kondisjon, kroppsstørrelse, pust, helse og målemetode bidrar til nivåforskjeller. Ett universelt «optimalt» tall passer derfor dårlig.",
        },
        {
          type: "paragraph",
          text: "En serie standardiserte målinger hos samme person kan være mer informativ dersom målet er å oppdage avvik fra egen baseline. Selv da må resultatet ses sammen med søvn, trening, alkohol, sykdom, symptomer og hvordan personen faktisk fungerer.",
        },
        {
          type: "table",
          caption: "To forskjellige tolkningsoppgaver",
          columns: ["Sammenligning", "Mer forsvarlig spørsmål", "Fallgruve"],
          rows: [
            [
              "Innen samme person",
              "Er dagens måling tydelig annerledes enn egen trend under like forhold?",
              "Å reagere på normal dag-til-dag-støy",
            ],
            [
              "Mellom personer",
              "Er målemetode, alder og kontekst tilstrekkelig sammenlignbar?",
              "Å rangere helse eller robusthet fra ulike forbrukerscorer",
            ],
          ],
        },
      ],
    },
    {
      id: "hoy-og-lav-hrv",
      eyebrow: "Ingen enkel karakter",
      title: "Er høy HRV alltid bra og lav HRV alltid dårlig?",
      blocks: [
        {
          type: "paragraph",
          text: "I mange grupper er lavere HRV statistisk forbundet med høyere alder, sykdom eller belastning. Slike gruppesammenhenger betyr ikke at én lav dagsmåling identifiserer sykdom hos en enkeltperson.",
        },
        {
          type: "paragraph",
          text: "Høyere HRV er heller ikke alltid bedre. Målefeil, ekstraslag, atrieflimmer, svært lav puls og spesielle pustemønstre kan gi høye verdier. Under fokusert arbeid eller fysisk aktivitet kan enkelte HRV-mål falle som del av en normal respons.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "HRV må tolkes som mønster i kontekst",
          paragraphs: [
            "Nivå, reaktivitet, tilbakevending, målekvalitet og personens funksjon er mer informative enn én isolert «god» eller «dårlig» score.",
          ],
        },
      ],
    },
    {
      id: "hrv-og-vagusnervestimulering",
      eyebrow: "Biomarkør eller sideutfall?",
      title: "Kan HRV vise om vagusnervestimulering virker?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV er ofte foreslått som en biomarkør for vagal målengasjement ved transkutan aurikulær vagusnervestimulering. Hypotesen er intuitiv fordi vagusnerven bidrar til kardial parasympatisk kontroll. Men aurikulær stimulering påvirker primært sensoriske nervebaner, og en eventuell hjerteeffekt går indirekte gjennom sentrale nettverk.",
        },
        {
          type: "paragraph",
          text: "Forskningsresultatene er blandede. En systematisk oversikt av 21 kontrollerte studier hos friske deltakere fant signifikante endringer i noen HRV-mål i mange, men ikke alle studier, med stor variasjon i design og stimuleringsdose. En levende Bayesian metaanalyse av 16 sham-kontrollerte studier fant derimot sterk støtte for ingen robust akutt effekt på vagalt mediert HRV.",
        },
        {
          type: "paragraph",
          text: "En kontrollert studie der taVNS ble kombinert med langsom pust fant heller ingen ytterligere akutt HRV-effekt sammenlignet med sham under den undersøkte protokollen.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "HRV er ikke en universell positiv kontroll for taVNS",
          paragraphs: [
            "Fravær av HRV-endring beviser ikke at ingen sensoriske eller sentrale nervebaner ble påvirket.",
            "En HRV-endring beviser heller ikke alene en klinisk effekt, en bestemt mekanisme eller at resultatet gjelder andre enheter og protokoller.",
          ],
        },
      ],
    },
    {
      id: "slik-leser-du-en-hrv-studie",
      eyebrow: "Metodekritisk sjekkliste",
      title: "Hva bør du kontrollere i en HRV-studie?",
      blocks: [
        {
          type: "numbered",
          items: [
            "Var signalet ECG, bryststropp eller PPG, og er metoden validert for akkurat dette HRV-målet?",
            "Ble normale NN-intervaller identifisert, og hvordan ble artefakter og ektopiske slag behandlet?",
            "Hvor lang var registreringen, og passer variabelen til tidsvinduet?",
            "Var kroppsstilling, hviletid, tidspunkt, romtemperatur og nylig aktivitet standardisert?",
            "Ble respirasjon registrert eller kontrollert?",
            "Var analysen planlagt på forhånd, og hvor mange HRV-variabler ble testet?",
            "Gjelder funnet en forskjell mellom grupper, en endring innen personer eller en prognostisk sammenheng?",
            "Er resultatet replikert med samme metode og i relevant målgruppe?",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Metoden er en del av funnet",
          paragraphs: [
            "Et HRV-tall uten informasjon om signal, datarensing, varighet, pust og situasjon er vanskelig å tolke.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige produktgrenser",
      title: "Hva betyr HRV for Neuvago?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV er relevant som kunnskapsområde fordi det ofte brukes i forskning på autonom regulering, vagal kontroll, pust, stress og vagusnervestimulering. Det gir ikke automatisk produktdokumentasjon for Neuvago.",
        },
        {
          type: "paragraph",
          text: "Neuvago er et eksternt, ørebasert velværesystem med justerbar stimulering og en separat app for veiledede rutiner. Produktet må vurderes etter egen tiltenkt bruk, tekniske data, sikkerhetsinformasjon, stimuleringsprotokoll og direkte relevant produkttesting.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Neuvago måler ikke HRV eller vagusfunksjon",
          paragraphs: [
            "Neuvago skal ikke beskrives som et system som diagnostiserer autonom dysfunksjon, måler vagal tone eller garanterer høyere HRV.",
            "En eventuell fremtidig HRV-integrasjon må angi sensor, datakvalitet, algoritme, måleforhold og hvilken bruk informasjonen er validert for.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Forbrukerdata erstatter ikke hjerteundersøkelse",
          paragraphs: [
            "Ved ny uregelmessig rytme, besvimelse, brystsmerter, uttalt tungpust eller vedvarende hjertebank bør helsepersonell kontaktes.",
            "Følg alltid gjeldende produktinformasjon og rådfør deg med kvalifisert helsepersonell ved sykdom, implantert elektronisk utstyr, graviditet eller usikkerhet om egnethet.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "task-force-1996-hrv",
      authors:
        "Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology",
      title:
        "Heart rate variability: standards of measurement, physiological interpretation and clinical use",
      publication: "Circulation",
      year: 1996,
      type: "official-guidance",
      url: "https://pubmed.ncbi.nlm.nih.gov/8598068/",
      pmid: "8598068",
      note:
        "Grunnleggende standarddokument for RR- og NN-intervaller, tids- og frekvensdomene, korttids- og døgnregistrering og metodisk rapportering.",
    },
    {
      id: "sassi-2015-position",
      authors:
        "Sassi R, Cerutti S, Lombardi F, Malik M, Huikuri HV, Peng CK, Schmidt G, Yamamoto Y",
      title:
        "Advances in heart rate variability signal analysis: joint position statement by the e-Cardiology ESC Working Group and the European Heart Rhythm Association",
      publication: "Europace",
      year: 2015,
      type: "official-guidance",
      url: "https://pubmed.ncbi.nlm.nih.gov/26177817/",
      doi: "10.1093/europace/euv015",
      pmid: "26177817",
      note:
        "Faglig posisjonsdokument om nyere HRV-analyse, signalbehandling, standardisering og tolkningsgrenser.",
    },
    {
      id: "billman-2013-lf-hf",
      authors: "Billman GE",
      title:
        "The LF/HF ratio does not accurately measure cardiac sympatho-vagal balance",
      publication: "Frontiers in Physiology",
      year: 2013,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/23431279/",
      doi: "10.3389/fphys.2013.00026",
      pmid: "23431279",
      note:
        "Begrepskritisk gjennomgang av hvorfor LF/HF-forholdet ikke er en direkte sympatisk–parasympatisk balanseindikator.",
    },
    {
      id: "georgiou-2018-wearables",
      authors:
        "Georgiou K, Larentzakis AV, Khamis NN, Alsuhaibani GI, Alaska YA, Giallafos EJ",
      title:
        "Can Wearable Devices Accurately Measure Heart Rate Variability? A Systematic Review",
      publication: "Folia Medica",
      year: 2018,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/29668452/",
      doi: "10.2478/folmed-2018-0012",
      pmid: "29668452",
      note:
        "Systematisk gjennomgang av wearable-baserte HRV-målinger i hvile og aktivitet, med bedre samsvar under stasjonære forhold.",
    },
    {
      id: "plews-2017-smartphone-ppg",
      authors:
        "Plews DJ, Scott B, Altini M, Wood M, Kilding AE, Laursen PB",
      title:
        "Comparison of Heart-Rate-Variability Recording With Smartphone Photoplethysmography, Polar H7 Chest Strap, and Electrocardiography",
      publication: "International Journal of Sports Physiology and Performance",
      year: 2017,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/28290720/",
      doi: "10.1123/ijspp.2016-0668",
      pmid: "28290720",
      note:
        "Kontrollert femminutters sammenligning av RMSSD fra smartphone-PPG, bryststropp og ECG hos 29 friske deltakere.",
    },
    {
      id: "kantrowitz-2025-prv-hrv",
      authors:
        "Kantrowitz AB, Ben-David K, Morris M, Wittels HL, Wishon MJ, McDonald SM, Renaghan EJ, Feigenbaum LA, Wittels SH",
      title:
        "Pulse rate variability is not the same as heart rate variability: findings from a large, diverse clinical population study",
      publication: "Frontiers in Physiology",
      year: 2025,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/40809286/",
      doi: "10.3389/fphys.2025.1630032",
      pmid: "40809286",
      note:
        "Samtidig ECG- og PPG-studie av 931 voksne som fant systematiske forskjeller mellom ECG-HRV og PPG-PRV for flere tidsdomenevariabler.",
    },
    {
      id: "wolf-2021-tavns-vmhrv",
      authors: "Wolf V, Kühnel A, Teckentrup V, Koenig J, Kroemer NB",
      title:
        "Does transcutaneous auricular vagus nerve stimulation affect vagally mediated heart rate variability? A living and interactive Bayesian meta-analysis",
      publication: "Psychophysiology",
      year: 2021,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/34473846/",
      doi: "10.1111/psyp.13933",
      pmid: "34473846",
      note:
        "Bayesiansk metaanalyse av 16 sham-kontrollerte studier som fant sterk støtte for ingen robust akutt taVNS-effekt på vagalt mediert HRV.",
    },
    {
      id: "soltani-2023-tavns-hrv",
      authors:
        "Soltani D, Azizi B, Sima S, Tavakoli K, Hosseini Mohammadi NS, Vahabie AH, Akbarzadeh-Sherbaf K, Vasheghani-Farahani A",
      title:
        "A systematic review of the effects of transcutaneous auricular vagus nerve stimulation on baroreflex sensitivity and heart rate variability in healthy subjects",
      publication: "Clinical Autonomic Research",
      year: 2023,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/37119426/",
      doi: "10.1007/s10286-023-00938-w",
      pmid: "37119426",
      note:
        "Systematisk gjennomgang av 21 kontrollerte studier med blandede funn og betydelig heterogenitet i design og stimuleringsdose.",
    },
    {
      id: "szulczewski-2023-slow-breathing",
      authors: "Szulczewski MT, D'Agostini M, Van Diest I",
      title:
        "Expiratory-gated Transcutaneous Auricular Vagus Nerve Stimulation does not Further Augment Heart Rate Variability During Slow Breathing at 0.1 Hz",
      publication: "Applied Psychophysiology and Biofeedback",
      year: 2023,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/36920567/",
      doi: "10.1007/s10484-023-09584-4",
      pmid: "36920567",
      note:
        "Kryss-over-studie av 22 deltakere som ikke fant ytterligere akutt HRV-effekt av taVNS sammenlignet med sham under langsom pust.",
    },
  ],

  relatedSlugs: [
    "vagal-tone",
    "det-autonome-nervesystemet",
    "det-parasympatiske-nervesystemet",
    "regulering-av-nervesystemet",
    "vagusnerven",
    "vagusnervestimulering",
  ],
  relatedLinks: [
    {
      title: "Forskning på hjertefrekvensvariabilitet",
      description:
        "Gå til forskningsbibliotekets HRV-tema for standarder, fysiologisk tolkning, metodevalg og vanlige begrensninger.",
      href: "/research/topics/heart-rate-variability",
      label: "Utforsk HRV-forskning",
    },
    {
      title: "HRV-standardene fra 1996",
      description:
        "Les Neuvagos sammendrag av standarddokumentet for måling, tids- og frekvensdomene og klinisk tolkning.",
      href: "/research/studies/task-force-1996-heart-rate-variability-standards",
      label: "Les standardsammendraget",
    },
    {
      title: "taVNS og HRV – systematisk oversikt",
      description:
        "Se Neuvagos studiesammendrag av Soltani og kollegers gjennomgang av HRV og barorefleks i taVNS-studier.",
      href: "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review",
      label: "Les taVNS-oversikten",
    },
    {
      title: "Autonom regulering",
      description:
        "Se den bredere forskningskonteksten for sympatisk og parasympatisk kontroll, stress, restitusjon og HRV.",
      href: "/research/topics/autonomic-regulation",
      label: "Utforsk autonom forskning",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan enheten, ørekomponenten, appen og velværerutinen henger sammen uten å påstå at produktet måler eller garanterer HRV.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan Neuvago fungerer",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
