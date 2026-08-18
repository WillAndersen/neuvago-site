import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const detParasympatiskeNervesystemetArticle = {
  slug: "det-parasympatiske-nervesystemet",
  path: "/no/kunnskap/det-parasympatiske-nervesystemet",
  status: "published",
  wave: "1B",
  order: 80,

  title:
    "Det parasympatiske nervesystemet – funksjon, vagusnerven og vanlige misforståelser",
  seoTitle:
    "Det parasympatiske nervesystemet: funksjon og vagus | Neuvago",
  description:
    "Lær hva det parasympatiske nervesystemet er, hvordan det regulerer ulike organer, hvilken rolle vagusnerven har, og hvorfor «rest and digest» er en forenkling.",
  eyebrow: "Nervesystem og fysiologi",
  lead:
    "Det parasympatiske nervesystemet er en del av kroppens autonome regulering. Det påvirker blant annet pupiller, spyttkjertler, hjerte, luftveier, fordøyelsessystem og bekkenorganer gjennom flere ulike nervebaner. Vagusnerven er den største parasympatiske forbindelsen til organer i bryst- og bukhulen, men den er ikke hele det parasympatiske nervesystemet. Systemet bør heller ikke forstås som én universell «roknapp»: virkningen er organspesifikk, situasjonsavhengig og tett integrert med sensoriske signaler, hjernestamme, ryggmarg og andre reguleringssystemer.",
  shortAnswer: [
    "Det parasympatiske nervesystemet er en av hoveddelene i det autonome nervesystemet og regulerer bestemte organfunksjoner uten at de må styres viljemessig.",
    "Parasympatiske nervebaner kommer fra hjernestammen og den sakrale delen av ryggmargen; vagusnerven er bare én av flere forbindelser.",
    "Acetylkolin er hovedsignalstoff både i autonome ganglier og ved de fleste parasympatiske målorganer.",
    "Parasympatisk aktivitet betyr ikke alltid «ro», og sympatisk og parasympatisk aktivitet er ikke en enkel gass–brems-akse.",
    "HRV og pustesynkron variasjon i hjerterytmen kan gi informasjon om kardial vagal kontroll, men måler ikke hele det parasympatiske nervesystemet.",
  ],
  hubSummary:
    "En presis forklaring av parasympatisk anatomi, signalstoffer og organregulering, med vagusnervens rolle, HRV-begrensninger og et mer nyansert alternativ til «rest and digest».",
  hubLabel: "Fysiologisk grunnlag",

  primaryKeyword: "det parasympatiske nervesystemet",
  secondaryKeywords: [
    "parasympatisk nervesystem",
    "parasympatisk aktivitet",
    "vagusnerven parasympatisk",
    "rest and digest",
    "kraniosakral utløp",
    "acetylkolin",
    "muskarine reseptorer",
    "autonome ganglier",
    "kardial vagal kontroll",
    "respiratorisk sinusarytmi",
    "HRV og parasympatisk aktivitet",
    "fordøyelse og nervesystemet",
    "parasympatisk regulering",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-17",
  modifiedAt: "2026-08-17",
  readingTimeMinutes: 18,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/parasympathetic-nervous-system",
  sitemapPriority: 0.84,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-det-parasympatiske-nervesystemet",
      eyebrow: "Grunnleggende definisjon",
      title: "Hva er det parasympatiske nervesystemet?",
      blocks: [
        {
          type: "paragraph",
          text: "Det parasympatiske nervesystemet er en del av det autonome nervesystemet. Det består av sentrale nerveceller, utgående nervefibre, perifere ganglier og korte forbindelser til bestemte målorganer. Sammen bidrar disse kretsene til løpende regulering av indre organer.",
        },
        {
          type: "paragraph",
          text: "Begrepet brukes ofte som et generelt synonym for ro, hvile og restitusjon. Det er mer presist å beskrive systemet ut fra hvilke organer og funksjoner det påvirker. Parasympatisk aktivitet kan blant annet trekke sammen pupillen, øke spyttsekresjon, redusere hjertefrekvens, påvirke luftveier, fremme deler av fordøyelsesaktiviteten og bidra til tømming av blære og tarm.",
        },
        {
          type: "definition",
          term: "Parasympatisk regulering",
          definition:
            "Organspesifikk autonom signalering fra hjernestamme og sakral ryggmarg via perifere ganglier til glatt muskulatur, hjertemuskulatur og kjertler.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "En del av et større reguleringssystem",
          paragraphs: [
            "Parasympatiske responser virker sammen med sympatiske nervebaner, lokale organreflekser, hormoner, sanseinformasjon og sentrale hjernenettverk.",
            "En opplevelse av ro kan følge enkelte parasympatiske mønstre, men følelsen er ikke en direkte måling av hele systemets aktivitet.",
          ],
        },
      ],
    },
    {
      id: "hvor-kommer-signalene-fra",
      eyebrow: "Hjernestamme og sakral ryggmarg",
      title: "Hvor kommer de parasympatiske nervebanene fra?",
      blocks: [
        {
          type: "paragraph",
          text: "Parasympatisk utløp beskrives tradisjonelt som kraniosakralt. De kraniale forbindelsene begynner i hjernestammen og følger deler av hjernenervene III, VII, IX og X. Den sakrale forbindelsen går gjennom bekkennervene fra den nedre delen av ryggmargen.",
        },
        {
          type: "table",
          caption: "Viktige parasympatiske forbindelser",
          columns: ["Forbindelse", "Område", "Eksempler på mål"],
          rows: [
            [
              "Hjernenerve III",
              "Mellomhjernen og øyehulen",
              "Pupillekonstriksjon og tilpasning av linsen",
            ],
            [
              "Hjernenerve VII",
              "Hjernestammen og ansiktsregionen",
              "Tårekjertel og flere spyttkjertler",
            ],
            [
              "Hjernenerve IX",
              "Hjernestammen og halsregionen",
              "Ørespyttkjertelen",
            ],
            [
              "Hjernenerve X – vagusnerven",
              "Hals, bryst og store deler av bukhulen",
              "Hjerte, luftveier og flere organer i fordøyelsessystemet",
            ],
            [
              "Pelvine splankniske nerver",
              "Sakral ryggmarg og bekken",
              "Distale deler av tykktarmen, endetarm, blære og kjønnsorganer",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Vagusnerven dekker ikke hele kroppen",
          paragraphs: [
            "Parasympatisk regulering av pupiller, enkelte kjertler og bekkenorganer går gjennom andre nervebaner enn vagusnerven.",
            "Det er derfor upresist å omtale all parasympatisk aktivitet som «vagal aktivitet».",
          ],
        },
      ],
    },
    {
      id: "to-nevroner-og-ganglier",
      eyebrow: "Fra sentralnervesystem til organ",
      title: "Parasympatiske signaler går vanligvis gjennom en kjede av to nevroner",
      blocks: [
        {
          type: "paragraph",
          text: "En typisk utgående parasympatisk bane består av et preganglionært nevron i hjernestamme eller ryggmarg og et postganglionært nevron i et perifert ganglion. Det preganglionære aksonet er ofte langt, mens det postganglionære aksonet er kort fordi gangliet ligger nær eller inne i målorganet.",
        },
        {
          type: "definition",
          term: "Autonomt ganglion",
          definition:
            "En samling nervecellelegemer utenfor sentralnervesystemet der et preganglionært nevron overfører signalet til et postganglionært nevron.",
        },
        {
          type: "bullets",
          items: [
            "Preganglionære parasympatiske nevroner frigjør acetylkolin.",
            "Acetylkolin binder seg til nikotinerge reseptorer i gangliet.",
            "De fleste postganglionære parasympatiske nevroner frigjør også acetylkolin.",
            "Ved målorganet virker acetylkolin hovedsakelig gjennom muskarine reseptorer.",
            "Den endelige virkningen avhenger av organ, reseptortype, lokal krets og samtidig aktivitet i andre systemer.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Samme signalstoff kan gi ulike effekter",
          paragraphs: [
            "Acetylkolin kan redusere hjertefrekvens, øke kjertelsekresjon eller stimulere glatt muskulatur avhengig av hvilke reseptorer og celletyper som mottar signalet.",
          ],
        },
      ],
    },
    {
      id: "organ-for-organ",
      eyebrow: "Funksjon er organspesifikk",
      title: "Hva gjør det parasympatiske nervesystemet i ulike organer?",
      blocks: [
        {
          type: "paragraph",
          text: "Det finnes ikke én parasympatisk effekt som gjelder overalt. Nervebanene er organisert i funksjonelle kretsløp med ulike mål, og mange organer har både sentral og lokal regulering.",
        },
        {
          type: "table",
          caption: "Forenklede eksempler på parasympatisk organregulering",
          columns: ["Organ eller system", "Vanlige parasympatiske virkninger", "Viktig avgrensning"],
          rows: [
            [
              "Øye",
              "Pupillekonstriksjon og tilpasning til nærsyn",
              "Går hovedsakelig gjennom hjernenerve III, ikke vagusnerven",
            ],
            [
              "Spytt- og tårekjertler",
              "Økt væskesekresjon",
              "Fordeles gjennom hjernenervene VII og IX",
            ],
            [
              "Hjerte",
              "Redusert pacemakerfrekvens og påvirkning av ledning gjennom bestemte deler av hjertet",
              "Kardial vagal kontroll er ikke identisk med all parasympatisk aktivitet",
            ],
            [
              "Luftveier",
              "Påvirkning av bronkial glatt muskulatur og kjertelsekresjon",
              "Respirasjon styres også av sentrale rytmegeneratorer, kjemorefleks og viljestyring",
            ],
            [
              "Mage–tarm-kanal",
              "Bidrar til motilitet, sekresjon og samspill med enteriske nettverk",
              "Det enteriske nervesystemet utfører omfattende lokal regulering",
            ],
            [
              "Blære og bekkenorganer",
              "Bidrar til blærekontraksjon, tømming og enkelte seksuelle responser",
              "Går via sakrale bekkennerver, ikke vagusnerven",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "«Mer parasympatisk» er ikke alltid et meningsfullt mål",
          paragraphs: [
            "Et optimalt autonomt mønster avhenger av hvilket organ som skal reguleres og hva kroppen gjør. Det er mulig å ha forskjellige parasympatiske endringer i hjerte, fordøyelse og pupiller i samme situasjon.",
          ],
        },
      ],
    },
    {
      id: "vagusnervens-rolle",
      eyebrow: "Den største kraniale forbindelsen",
      title: "Hvilken rolle har vagusnerven i det parasympatiske nervesystemet?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnerven fører parasympatiske motoriske signaler fra hjernestammen til blant annet hjerte, luftveier og flere organer i øvre del av fordøyelsessystemet. Preganglionære vagale fibre kobler seg til nerveceller i eller nær målorganene.",
        },
        {
          type: "paragraph",
          text: "Vagusnerven er samtidig en blandet nerve med omfattende sensorisk informasjon fra indre organer til hjernestammen. En stor andel av vagale fibre er afferente. Det betyr at vagusnerven ikke bare sender parasympatiske kommandoer ut, men i stor grad rapporterer om kroppens indre tilstand.",
        },
        {
          type: "table",
          caption: "To hovedroller i vagusnerven",
          columns: ["Fibertype", "Signalretning", "Eksempel"],
          rows: [
            [
              "Visceral afferent",
              "Fra organer mot hjernestammen",
              "Informasjon om strekk, kjemisk miljø og aktivitet i hjerte, luftveier og fordøyelsessystem",
            ],
            [
              "Parasympatisk efferent",
              "Fra hjernestammen mot organer",
              "Regulerende signaler til bestemte mål i hjerte, lunger og mage–tarm-system",
            ],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Vagal og parasympatisk er overlappende – ikke identiske",
          paragraphs: [
            "All vagal aktivitet er ikke parasympatisk motorikk, og all parasympatisk motorikk går ikke gjennom vagusnerven.",
          ],
        },
      ],
    },
    {
      id: "rest-and-digest",
      eyebrow: "En nyttig, men begrenset huskeregel",
      title: "Hvorfor «rest and digest» er en forenkling",
      blocks: [
        {
          type: "paragraph",
          text: "Uttrykket «rest and digest» gjør det lett å huske at parasympatiske nervebaner bidrar til fordøyelse, sekresjon og flere funksjoner som ofte er tydelige i hvile. Problemet oppstår når slagordet behandles som en komplett fysiologisk modell.",
        },
        {
          type: "paragraph",
          text: "Parasympatisk aktivitet kan være høy under spesifikke reflekser uten at hele kroppen er i en rolig tilstand. Sympatisk og parasympatisk aktivitet kan også øke samtidig eller endres uavhengig. Ved seksuell respons, dykkerrefleks og enkelte fordøyelses- eller hjertereflekser kan flere autonome grener være aktive på samme tid.",
        },
        {
          type: "table",
          caption: "Fra huskeregel til mer presis forståelse",
          columns: ["Forenkling", "Mer presist"],
          rows: [
            [
              "Parasympatisk betyr ro",
              "Parasympatisk beskriver bestemte nervebaner og organsvar",
            ],
            [
              "Sympatisk og parasympatisk er alltid motpoler",
              "Grenene kan være resiproke, samaktiverte, samreduserte eller relativt uavhengige",
            ],
            [
              "Vagusnerven slår på hele hvilemodusen",
              "Vagale fibre inngår i flere sensoriske og motoriske kretsløp med organspesifikke effekter",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Autonomt rom",
          paragraphs: [
            "Modellen om autonomt rom beskriver sympatisk og parasympatisk kontroll som to dimensjoner. Den er et nyttig korrektiv til forestillingen om at kroppen alltid befinner seg på én enkel skala mellom «stress» og «ro».",
          ],
        },
      ],
    },
    {
      id: "stress-og-restitusjon",
      eyebrow: "Tilpasning og tilbakevending",
      title: "Hvilken rolle har parasympatisk regulering ved stress og restitusjon?",
      blocks: [
        {
          type: "paragraph",
          text: "Ved en krevende situasjon kan kroppen endre puls, blodårer, ventilasjon, fordøyelse, muskelberedskap og oppmerksomhet. Når kravene endres, må organreguleringen justeres igjen. Parasympatiske hjertebaner kan bidra til raske endringer i hjertefrekvens, mens fordøyelse og andre funksjoner følger sine egne tidsforløp.",
        },
        {
          type: "paragraph",
          text: "Restitusjon er derfor ikke én parasympatisk hendelse. Den påvirkes også av søvn, hormonell regulering, energi- og væskebalanse, fysisk kapasitet, smerte, temperatur, inflammasjon, emosjonell belastning og hva personen gjør etter belastningen.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Aktivering er ikke en feiltilstand",
          paragraphs: [
            "Sympatisk mobilisering er nødvendig ved trening, oppreist stilling, varme, kulde og krevende oppgaver. Målet er ikke å holde kroppen permanent parasympatisk, men å ha fleksible responser som passer situasjonen.",
          ],
        },
      ],
    },
    {
      id: "pust-hrv-og-kardial-vagal-kontroll",
      eyebrow: "Hva hjerterytmen kan fortelle",
      title: "Hva er sammenhengen mellom pust, HRV og parasympatisk aktivitet?",
      blocks: [
        {
          type: "paragraph",
          text: "Hjertefrekvensen varierer normalt med pusten. Hos mange øker den under innpust og reduseres under utpust. Denne pustesynkrone variasjonen er i stor grad knyttet til raske endringer i kardial vagal aktivitet, men påvirkes også av respirasjonsmønster, mekanikk, reflekskontroll og andre forhold.",
        },
        {
          type: "paragraph",
          text: "HRV er et sett av mål på variasjonen mellom hjerteslag. Noen HRV-mål kan under standardiserte forhold gi informasjon om kardial vagal regulering. De gir ikke en direkte avlesning av vagusnerven som helhet og kan ikke brukes som et samlet mål på parasympatisk aktivitet i fordøyelse, pupiller, luftveier og bekkenorganer.",
        },
        {
          type: "numbered",
          items: [
            "Kontroller målelengde, signaltype og kvaliteten på registrerte hjerteslag.",
            "Vurder pustefrekvens og pustedybde, fordi de påvirker pustesynkron variasjon.",
            "Sammenlign målinger i tilsvarende kroppsstilling, tidspunkt og aktivitetsnivå.",
            "Ta hensyn til alder, rytmeforstyrrelser, sykdom, søvn, trening, alkohol, koffein og legemidler.",
            "Unngå å omtale én HRV-verdi som et direkte mål på «vagal tone» eller generell nervesystembalanse.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Kardial vagal kontroll er et avgrenset vindu",
          paragraphs: [
            "Hjertebaserte mål kan være verdifulle når spørsmålet gjelder hjerterytmeregulering og måleforholdene er tydelige. De bør ikke utvides til påstander om hele det parasympatiske nervesystemet.",
          ],
        },
      ],
    },
    {
      id: "hvordan-undersokes-systemet",
      eyebrow: "Autonom testing",
      title: "Hvordan undersøkes parasympatisk funksjon?",
      blocks: [
        {
          type: "paragraph",
          text: "Parasympatisk funksjon kan undersøkes med ulike metoder avhengig av organ og problemstilling. Det finnes ingen enkelt test som dekker hele systemet.",
        },
        {
          type: "bullets",
          items: [
            "Hjerte: pulsrespons ved dyp pust, Valsalva-manøver, stillingsendring og enkelte HRV-analyser.",
            "Pupiller: lysrefleks og farmakologiske tester.",
            "Spytt og tårevæske: måling av sekresjon under definerte forhold.",
            "Mage–tarm og blære: organrettede funksjonsundersøkelser og klinisk nevrofysiologisk vurdering.",
            "Legemiddelblokade: brukes i forskning for å skille bidrag fra bestemte reseptorer og autonome grener.",
          ],
        },
        {
          type: "paragraph",
          text: "Resultater må tolkes sammen med symptomer, klinisk undersøkelse, medikamentbruk og andre medisinske forhold. Et avvik i én refleks eller ett organ innebærer ikke automatisk at hele det parasympatiske nervesystemet er svakt eller skadet.",
        },
      ],
    },
    {
      id: "symptomer-og-medisinsk-vurdering",
      eyebrow: "Når generell kunnskap ikke er nok",
      title: "Parasympatiske begreper bør ikke brukes som selvdiagnose",
      blocks: [
        {
          type: "paragraph",
          text: "Symptomer som hjertebank, besvimelse, svimmelhet, unormal svetting, uttalt tørrhet, svelgvansker, fordøyelsesproblemer, blæreplager eller endret pupillereaksjon kan ha mange årsaker. De kan involvere autonome mekanismer, men også hjerte, hormoner, infeksjon, legemidler, væskebalanse, smerte, angst, nevrologisk sykdom eller andre forhold.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Søk riktig helsehjelp ved alvorlige eller vedvarende symptomer",
          paragraphs: [
            "Besvimelse, brystsmerter, uttalt pustevansker, ny hjerterytmeforstyrrelse, nevrologiske utfall eller rask forverring krever medisinsk vurdering.",
            "Nettinnhold og velværeprodukter kan ikke fastslå om symptomer skyldes autonom dysfunksjon eller erstatte diagnostikk og behandling.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige produktgrenser",
      title: "Hva betyr parasympatisk fysiologi for Neuvago?",
      blocks: [
        {
          type: "paragraph",
          text: "Det parasympatiske nervesystemet gir bakgrunn for å forstå hvorfor vagusnerven ofte omtales sammen med stress, restitusjon, pust, fordøyelse og søvn. Denne bakgrunnen dokumenterer ikke i seg selv at en bestemt ørebasert stimulering øker parasympatisk aktivitet i hele kroppen.",
        },
        {
          type: "paragraph",
          text: "Neuvago er et eksternt, ørebasert velværesystem. Produktet må vurderes etter sin egen tiltenkte bruk, tekniske dokumentasjon, plassering, stimuleringsparametere, sikkerhetsinformasjon og eventuell direkte produktforskning.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Ingen «parasympatisk bryter»-påstand",
          paragraphs: [
            "Neuvago skal ikke beskrives som et produkt som slår på hele det parasympatiske nervesystemet, korrigerer en påstått ubalanse eller behandler autonom dysfunksjon.",
            "Forskning på parasympatisk fysiologi og andre vagusstimuleringsmetoder brukes som kunnskapskontekst, ikke som automatisk dokumentasjon for Neuvago.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Følg den konkrete sikkerhetsinformasjonen",
          paragraphs: [
            "Bruk produktet bare som beskrevet i gjeldende bruksanvisning. Ved sykdom, aktive symptomer, implantert elektronisk utstyr, graviditet eller usikkerhet om egnethet bør kvalifisert helsepersonell konsulteres.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "wehrwein-orer-barman-2016",
      authors: "Wehrwein EA, Orer HS, Barman SM",
      title:
        "Overview of the Anatomy, Physiology, and Pharmacology of the Autonomic Nervous System",
      publication: "Comprehensive Physiology",
      year: 2016,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/27347892/",
      doi: "10.1002/cphy.c150037",
      pmid: "27347892",
      note:
        "Omfattende oversikt over sympatisk og parasympatisk anatomi, signalstoffer, reseptorer og organvirkninger.",
    },
    {
      id: "benarroch-2020",
      authors: "Benarroch EE",
      title: "Physiology and Pathophysiology of the Autonomic Nervous System",
      publication: "Continuum",
      year: 2020,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/31996619/",
      doi: "10.1212/CON.0000000000000817",
      pmid: "31996619",
      note:
        "Klinisk og fysiologisk oversikt over autonom organisering, målorganer, sentral kontroll og autonom svikt.",
    },
    {
      id: "mccorry-2007",
      authors: "McCorry LK",
      title: "Physiology of the autonomic nervous system",
      publication: "American Journal of Pharmaceutical Education",
      year: 2007,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/17786266/",
      doi: "10.5688/aj710478",
      pmid: "17786266",
      note:
        "Pedagogisk gjennomgang av efferente autonome baner, acetylkolin, reseptorer og organfunksjoner.",
    },
    {
      id: "berthoud-neuhuber-2000",
      authors: "Berthoud HR, Neuhuber WL",
      title: "Functional and chemical anatomy of the afferent vagal system",
      publication: "Autonomic Neuroscience",
      year: 2000,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/11189015/",
      doi: "10.1016/S1566-0702(00)00215-0",
      pmid: "11189015",
      note:
        "Detaljert oversikt over vagale afferente forbindelser og sensoriske terminaler i indre organer.",
    },
    {
      id: "berntson-cacioppo-quigley-1991",
      authors: "Berntson GG, Cacioppo JT, Quigley KS",
      title:
        "Autonomic determinism: the modes of autonomic control, the doctrine of autonomic space, and the laws of autonomic constraint",
      publication: "Psychological Review",
      year: 1991,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/1660159/",
      doi: "10.1037/0033-295X.98.4.459",
      pmid: "1660159",
      note:
        "Grunnlag for å forstå sympatisk og parasympatisk kontroll som flere mulige samspill, ikke én balanseakse.",
    },
    {
      id: "hrv-task-force-1996",
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
        "Klassisk standarddokument for HRV-måling, begreper og fysiologisk tolkning.",
    },
    {
      id: "karemaker-2015",
      authors: "Karemaker JM",
      title:
        "Heart rate variability and sympathovagal balance: pharmacological validation",
      publication: "Netherlands Heart Journal",
      year: 2015,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/25696224/",
      doi: "10.1007/s12471-015-0688-y",
      pmid: "25696224",
      note:
        "Farmakologisk validering som illustrerer begrensninger ved å bruke HRV som direkte mål på sympatisk–parasympatisk balanse.",
    },
  ],

  relatedSlugs: [
    "det-autonome-nervesystemet",
    "vagusnerven",
    "vagusnervestimulering",
    "regulering-av-nervesystemet",
    "vagal-tone",
    "hrv-og-vagusnerven",
    "hvordan-roe-ned-nervesystemet",
  ],
  relatedLinks: [
    {
      title: "Parasympathetic nervous system",
      description:
        "Les den engelske parallellsiden om parasympatisk regulering, vagusnerven og rolige tilstander.",
      href: "/learn/parasympathetic-nervous-system",
      label: "Les engelsk parallellside",
    },
    {
      title: "Forskning på autonom regulering",
      description:
        "Gå til forskningsbibliotekets tema om sentral autonom kontroll, HRV, sympatisk og parasympatisk aktivitet og metodiske begrensninger.",
      href: "/research/topics/autonomic-regulation",
      label: "Utforsk autonom forskning",
    },
    {
      title: "HRV-forskning",
      description:
        "Se hvordan hjertefrekvensvariabilitet brukes i forskning, og hvorfor målet ikke representerer hele det autonome nervesystemet.",
      href: "/research/topics/heart-rate-variability",
      label: "Utforsk HRV-forskning",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan enheten, ørekomponenten, appen og velværerutinen henger sammen uten å gjøre parasympatiske behandlingspåstander.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan Neuvago fungerer",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
