import type { NorwegianConditionPage } from "@/content/conditions/no/types";

export const hverdagsuroConditionPage = {
  slug: "hverdagsuro",
  path: "/no/tilstander/hverdagsuro",
  status: "published",
  wave: "2C.2" as NorwegianConditionPage["wave"],
  order: 15,

  title: "Hverdagsuro og et nervesystem som ikke roer seg",
  seoTitle: "Uro i kroppen og et nervesystem som ikke roer seg | Neuvago",
  description:
    "Kjenner du uro i kroppen eller at du ikke får falt til ro? Se mulige forklaringer, trygge hverdagsgrep og når symptomer bør vurderes av helsepersonell.",
  eyebrow: "Hverdagsuro og kroppslig aktivering",
  lead:
    "Uro i kroppen kan kjennes som rastløshet, spenning, et behov for å bevege seg eller vansker med å falle til ro. Slike opplevelser kan ha mange sammenhenger og er ikke én diagnose. Denne siden hjelper deg å beskrive mønsteret, se etter kontekst, velge enkle første steg og vite når det er riktig å søke helsehjelp.",
  shortAnswer: [
    "Hverdagsuro er en beskrivelse av en opplevelse, ikke én medisinsk eller psykisk diagnose.",
    "Uro kan merkes i kropp, oppmerksomhet og handling, men eksemplene er uspesifikke og skal ikke telles som en test.",
    "Søvn, stress og samlet belastning, smerter eller sykdom, legemidler og andre stoffer, koffein, alkohol og psykisk helse kan overlappe.",
    "Begynn med enkle lavrisikosteg og søk faglig vurdering når uroen er ny, sterk, vedvarende, økende, uforklarlig eller påvirker funksjon og trygghet.",
    "Neuvago kan bare omtales som et valgfritt element i en bredere velværerutine; produktet avgjør ikke årsaken og erstatter ikke helsehjelp.",
  ],
  hubSummary:
    "En ikke-diagnostisk guide til kroppslig uro og rastløshet, mulige bidragsfaktorer, trygge første steg og tydelige grenser for når du bør søke hjelp.",
  hubLabel: "Norsk hovedside",

  primaryKeyword: "uro i kroppen nervesystemet",
  secondaryKeywords: [
    "uro i kroppen",
    "indre uro",
    "kroppen roer seg ikke",
    "rastløshet i kroppen",
    "nervesystemet roer seg ikke",
    "kroppslig aktivering",
    "stress og uro",
    "uro uten kjent årsak",
    "hvordan falle til ro",
    "hverdagsuro",
  ],

  publishedAt: "2026-09-01",
  modifiedAt: "2026-09-01",
  readingTimeMinutes: 12,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  sitemapPriority: 0.78,
  changeFrequency: "monthly",

  pathway: {
    eyebrow: "Hverdagsuro-pathway",
    title: "Fra opplevelse til neste trygge steg",
    description:
      "Pathwayen organiserer observasjon, sammenheng, lavrisikostøtte og hjelpenivå. Den gir ingen poengsum, diagnose eller personlig konklusjon.",
    steps: [
      {
        number: "01",
        title: "Beskriv opplevelsen",
        description:
          "Legg merke til hva du kjenner, når det skjer og hvordan det påvirker deg, uten å gi opplevelsen en diagnose på forhånd.",
      },
      {
        number: "02",
        title: "Se etter sammenheng",
        description:
          "Se på timing, belastning, søvn, smerter eller sykdom, koffein, alkohol, andre stoffer, medisiner og nylige endringer.",
      },
      {
        number: "03",
        title: "Velg ett lavrisikosteg",
        description:
          "Reduser ett krav, bytt miljø, ta en pause, spis eller hvil ved behov, eller velg rolig bevegelse og enkel orientering.",
        href: "/no/kunnskap/hvordan-roe-ned-nervesystemet",
        label: "Se praktiske strategier",
      },
      {
        number: "04",
        title: "Vurder hjelpenivå",
        description:
          "Bruk fastlege, legevakt på 116 117 eller 113 etter hvor ny, sterk, vedvarende eller akutt situasjonen er.",
      },
    ],
  },

  sections: [
    {
      id: "hva-mener-vi-med-hverdagsuro",
      eyebrow: "Et vanlig ord med flere mulige forklaringer",
      title: "Hverdagsuro er en beskrivelse – ikke en diagnose",
      blocks: [
        {
          type: "paragraph",
          text: "Hverdagsuro er et praktisk ord for en opplevelse av at kroppen, tankene eller tempoet ikke faller helt til ro. Noen beskriver det som indre driv, rastløshet, spenning eller et behov for å gjøre noe. Andre merker at de stadig skifter oppgave, følger ekstra med på omgivelsene eller blir fortere irritert. Ordet forteller hvordan situasjonen oppleves, men ikke hvorfor den oppstår.",
        },
        {
          type: "paragraph",
          text: "Det er nyttig å begynne med denne forskjellen fordi samme opplevelse kan dukke opp etter en travel dag, lite søvn, bekymring, smerter, sykdom, koffein, alkohol, andre stoffer, endringer i legemidler eller en krevende livssituasjon. Noen ganger er uroen kortvarig og forståelig. Andre ganger varer den, blir sterkere eller påvirker funksjon på en måte som bør vurderes av helsepersonell.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Opplevelsen er virkelig selv om forklaringen ikke er klar",
          paragraphs: [
            "Du trenger ikke avvise det du kjenner fordi uroen er vanskelig å forklare.",
            "Samtidig er det tryggere å holde flere muligheter åpne enn å slå fast at én nerve, én biomarkør eller én diagnose forklarer alt.",
            "Generell informasjon. Ikke medisinsk rådgivning, diagnose eller behandling.",
          ],
        },
      ],
    },
    {
      id: "slik-kan-uro-kjennes",
      eyebrow: "Beskriv før du tolker",
      title: "Uro kan merkes i kropp, oppmerksomhet og handling",
      blocks: [
        {
          type: "paragraph",
          text: "Uro er ikke begrenset til én kroppsdel eller én følelse. Den kan vise seg som kroppslig spenning, raskere bevegelser, skiftende oppmerksomhet, irritabilitet eller vansker med å bli værende i en rolig aktivitet. Hos andre er den mer stille: kroppen føles anspent selv om personen sitter i ro, eller tankene fortsetter å lete etter neste oppgave etter at dagen egentlig er avsluttet.",
        },
        {
          type: "table",
          caption: "Et opplevelseskart uten poeng",
          columns: ["Område", "Eksempler", "Spørsmål som gir kontekst"],
          rows: [
            [
              "Kropp",
              "Spenning, rastløshet, behov for å bevege seg eller vansker med å finne en behagelig stilling",
              "Kom det etter aktivitet, stillesitting, smerter, sykdom, koffein eller lite mat og hvile?",
            ],
            [
              "Oppmerksomhet",
              "Vansker med å holde fokus, hyppige skifter eller sterk overvåking av kropp og omgivelser",
              "Er det mange samtidige krav, mye skjermbruk, bekymring eller lite søvn?",
            ],
            [
              "Handling",
              "Smårydder, sjekker, starter nye oppgaver eller avbryter pauser før kroppen har landet",
              "Hva skjer dersom ett krav fjernes og neste oppgave blir tydelig avgrenset?",
            ],
            [
              "Følelser",
              "Utålmodighet, irritabilitet, anspent forventning eller en vag følelse av at noe må gjøres",
              "Følger følelsen en bestemt situasjon, konflikt, belastning eller usikkerhet?",
            ],
            [
              "Tid og mønster",
              "Uroen kommer på bestemte tider, etter bestemte hendelser eller uten et tydelig mønster",
              "Når er den tydeligst, når er den mindre, og hva endret seg før den oppstod?",
            ],
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Eksempler skal ikke telles",
          paragraphs: [
            "Eksemplene er ikke en diagnose eller en sjekkliste du skal score.",
            "Ett eller flere eksempler sier heller ikke hvor alvorlig situasjonen er eller hvilken forklaring som er riktig.",
          ],
        },
      ],
    },
    {
      id: "uro-stress-angst-og-overstimulering",
      eyebrow: "Nærliggende ord – forskjellige sidejobber",
      title: "Uro, stress, angst og overstimulering kan overlappe uten å være det samme",
      blocks: [
        {
          type: "paragraph",
          text: "Uro kan være en del av en normal stressrespons, oppstå sammen med bekymring eller komme når sanseinntrykk og krav har hopet seg opp. Ordene beskriver likevel ikke det samme. Stress handler bredt om tilpasning til belastning. Overstimulering brukes ofte om at mengden inntrykk eller krav føles større enn kapasiteten der og da. Angst kan være en vanlig følelse, men angstlidelser vurderes ut fra mer enn én kroppslig reaksjon.",
        },
        {
          type: "paragraph",
          text: "Uro betyr ikke automatisk angst eller panikklidelse. Denne siden skal derfor ikke brukes til å avgjøre om du har en psykisk lidelse. Den skal heller ikke erstatte den bredere stress-pathwayen, gjenkjennelsesguiden om dysreguleringsspråk eller artikkelen om overstimulering. Hensikten er smalere: å gi et trygt språk for kroppslig og indre uro i hverdagen og hjelpe deg videre til riktig innhold eller hjelpenivå.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Velg side etter spørsmålet du prøver å besvare",
          paragraphs: [
            "Les stress-siden for belastning, aktivering og restitusjon, og overstimuleringsguiden når mange inntrykk eller krav er sentrale.",
            "Bruk guiden om å roe ned nervesystemet når du først og fremst trenger praktiske, ikke-diagnostiske strategier.",
          ],
        },
      ],
    },
    {
      id: "behold-flere-forklaringer-apne",
      eyebrow: "Kontekst før konklusjon",
      title: "Behold flere forklaringer åpne før du konkluderer",
      blocks: [
        {
          type: "paragraph",
          text: "Uro alene beviser ikke vagal eller autonom dysfunksjon. Kroppslige signaler er uspesifikke, og en opplevelse kan påvirkes av flere forhold samtidig. Det samme gjelder målinger som puls eller HRV: de kan gi informasjon i en bestemt sammenheng, men kan ikke alene forklare hvorfor en person kjenner uro eller avgjøre hvilket tiltak som passer.",
        },
        {
          type: "paragraph",
          text: "En praktisk gjennomgang begynner derfor med det som nylig har endret seg. Søvn, arbeidsbelastning, relasjoner, økonomi, smerter, feber eller annen sykdom, måltidsrytme, fysisk aktivitet, koffein, nikotin, alkohol, andre stoffer og legemidler kan alle være relevante i enkelte situasjoner. Listen er ikke en måte å stille diagnose på. Den viser hvorfor én universell forklaring sjelden er trygg.",
        },
        {
          type: "table",
          caption: "Mulige bidragsfaktorer og trygge neste steg",
          columns: ["Mulig sammenheng", "Hva du kan undersøke", "Når du bør søke råd"],
          rows: [
            [
              "Søvn og restitusjon",
              "Om uroen økte etter korte netter, uregelmessig rytme eller flere dager uten ordentlige pauser",
              "Når søvnproblemer eller utmattelse varer og påvirker daglig funksjon",
            ],
            [
              "Belastning og livssituasjon",
              "Om arbeid, omsorg, konflikt, økonomi eller store endringer har økt de samlede kravene",
              "Når belastningen blir langvarig, vanskelig å håndtere eller går ut over helse og trygghet",
            ],
            [
              "Koffein, nikotin, alkohol og andre stoffer",
              "Mengde, tidspunkt og om bruken nylig er endret; individuell følsomhet varierer",
              "Ved sterke eller uventede reaksjoner, mulig forgiftning eller bekymring for avhengighet",
            ],
            [
              "Smerter, feber eller sykdom",
              "Om uroen følger kroppslige symptomer, infeksjon, smerte eller annen tydelig endring",
              "Når symptomene er nye, sterke, forverres eller ikke kan forklares på en trygg måte",
            ],
            [
              "Legemidler",
              "Om uroen begynte etter oppstart, doseendring eller kombinasjon med andre midler",
              "Snakk med forskriver eller apotek; ikke endre reseptbelagte legemidler på egen hånd",
            ],
            [
              "Psykisk helse",
              "Om bekymring, frykt, nedstemthet eller uro har blitt mer dominerende og påvirker valgene dine",
              "Når plagene varer, blir sterkere eller gjør det vanskelig å fungere i hverdagen",
            ],
          ],
        },
      ],
    },
    {
      id: "fire-sporsmal-for-du-velger-tiltak",
      eyebrow: "Statisk refleksjon – ingen lagring",
      title: "Fire spørsmål gir mer informasjon enn en symptomscore",
      blocks: [
        {
          type: "paragraph",
          text: "En symptomscore kan gi et inntrykk av presisjon uten å forklare sammenhengen. Fire åpne spørsmål er ofte mer nyttige fordi de retter oppmerksomheten mot timing, forløp, funksjon og endringer. Svarene sendes ingen steder, lagres ikke og gir ikke et automatisk resultat.",
        },
        {
          type: "numbered",
          items: [
            "Når merker du uroen tydeligst – og når er den mindre?",
            "Hva skjedde i timene eller dagene før den økte?",
            "Hvor lenge har den vart, og påvirker den søvn, arbeid eller hverdagsfunksjon?",
            "Har det vært endringer i søvn, belastning, helse, medisiner, koffein, alkohol eller andre stoffer?",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Refleksjon er ikke diagnostikk",
          paragraphs: [
            "Spørsmålene hjelper deg å beskrive situasjonen og forberede en eventuell samtale med helsepersonell.",
            "De gir ingen poengsum, alvorlighetsgrad, personlig anbefaling eller konklusjon om nervesystemet.",
          ],
        },
      ],
    },
    {
      id: "start-med-det-enkleste",
      eyebrow: "Lav risiko før flere verktøy",
      title: "Start med støtte som ikke krever en diagnose",
      blocks: [
        {
          type: "paragraph",
          text: "Når situasjonen er trygg og det ikke er tegn til at hjelpen haster, kan du begynne med å redusere ett konkret krav. Demp støy eller varsler, avslutt én oppgave, flytt deg til et roligere sted eller gjør neste steg mindre. Dersom du har sittet lenge, kan rolig bevegelse være mer hjelpsomt enn å tvinge kroppen til å være helt stille.",
        },
        {
          type: "paragraph",
          text: "Grunnbehov er også relevante. Mat, væske, søvn, temperatur, smerte og behov for toalett eller hvile kan påvirke hvordan kroppen kjennes. Et enkelt pustefokus, orientering mot rommet eller kontakt med en trygg person kan være mulige støtter, men skal presenteres som valgmuligheter – ikke som en garanti eller en behandling som passer alle.",
        },
        {
          type: "bullets",
          items: [
            "Reduser én kilde til sanse- eller oppgavebelastning.",
            "Velg rolig bevegelse, en kort pause eller et mer støttende miljø.",
            "Sjekk grunnbehov uten å gjøre rutinen omfattende eller prestasjonsstyrt.",
            "Vurder om et konkret problem må løses før du forsøker å roe selve følelsen.",
            "Se etter om intensiteten, funksjonen eller tryggheten endrer seg – og bytt hjelpenivå ved behov.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Ett tydelig steg er nok til å teste retning",
          paragraphs: [
            "Målet er ikke å få kroppen til å føles perfekt på kommando.",
            "Målet er å gjøre situasjonen litt mer håndterbar og samtidig beholde oppmerksomheten på årsak, funksjon og sikkerhet.",
          ],
        },
      ],
    },
    {
      id: "nar-bor-du-soke-hjelp",
      eyebrow: "Vurdering fremfor selvdiagnose",
      title: "Når uro bør vurderes av helsepersonell",
      blocks: [
        {
          type: "paragraph",
          text: "Ta kontakt med fastlege eller annet kvalifisert helsepersonell når uroen er ny og uforklarlig, vedvarer over tid, blir sterkere, kommer sammen med andre plager eller gjør det vanskelig å sove, arbeide, spise, være sosial eller føle seg trygg. Det samme gjelder når du er usikker på om medisiner, rusmidler, smerter, sykdom eller psykisk helse kan spille inn.",
        },
        {
          type: "paragraph",
          text: "En faglig vurdering kan se på forløp, helse, legemidler, livssituasjon og funksjon samlet. Det er en annen oppgave enn å lese en nettartikkel eller prøve et velværeverktøy. Ved vedvarende angst, frykt eller unngåelse kan fastlegen hjelpe med videre vurdering og passende hjelpetilbud uten at du først må finne den riktige merkelappen selv.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Ikke bruk kundestøtte som helsetriage",
          paragraphs: [
            "Neuvago-support kan svare på produkt- og tekniske spørsmål, men skal ikke vurdere akutte symptomer, diagnoser eller endringer i legemidler.",
            "Bruk helsetjenesten når spørsmålet handler om årsak, risiko, behandling eller behovet for rask hjelp.",
          ],
        },
      ],
    },
    {
      id: "legevakt-og-akutt-hjelp",
      eyebrow: "Norsk hjelpehierarki",
      title: "Legevakt og akutt hjelp",
      blocks: [
        {
          type: "paragraph",
          text: "Kontakt fastlegen i åpningstiden ved nye, vedvarende eller plagsomme symptomer som trenger vurdering. Ring 116 117 når fastlegen ikke er tilgjengelig og hjelpen ikke kan vente. Legevakten avgjør hastegrad og videre oppfølging; denne siden skal ikke lage sin egen symptomliste for akuttvurdering.",
        },
        {
          type: "paragraph",
          text: "Ring 113 når situasjonen er akutt og det står om liv eller helse. Ikke forsink akutt hjelp for å fullføre en øvelse, bruke et produkt eller kontakte kundestøtte. Er du usikker på hvilket nivå som passer, kan 116 117 gi råd når situasjonen ikke er en 113-hendelse, men likevel ikke kan vente til fastlegen åpner.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Riktig tjeneste er en del av trygg egenomsorg",
          paragraphs: [
            "Fastlege, legevakt og 113 har ulike roller. Bruk dem etter hvor mye det haster og hvor påvirket helse og funksjon er.",
          ],
        },
      ],
    },
    {
      id: "hvor-neuvago-eventuelt-passer-inn",
      eyebrow: "En sen og valgfri velværebro",
      title: "Hvor Neuvago eventuelt passer inn",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago kan eventuelt inngå som et valgfritt steg i en bredere velværerutine etter at grunnbehov, belastning og hjelpenivå er vurdert. Det kan være relevant for voksne som ønsker en strukturert, ikke-invasiv rutine, men produktet skal ikke brukes til å avgjøre hvorfor uro oppstår eller om en person har en bestemt tilstand.",
        },
        {
          type: "paragraph",
          text: "Les først hvordan systemet fungerer og hvilke grenser som gjelder for tiltenkt bruk. Følg alltid den gjeldende produktinformasjonen og stopp dersom bruken oppleves ubehagelig. Sterkere stimulering er ikke nødvendigvis bedre, og en tydelig følelse er ikke i seg selv dokumentasjon på effekt, målaktivering eller egnethet.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Velværeverktøy kommer etter sikkerhet og kontekst",
          paragraphs: [
            "Den primære veien videre er informasjon om hvordan Neuvago fungerer. Kjøpsguiden kan deretter brukes for å vurdere metode, tiltenkt bruk, dokumentasjon og praktiske spørsmål.",
            "Denne piloten lenker ikke direkte til produktsiden og sporer ingen av handlingene på siden.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "helsenorge-psykisk-helsehjelp-voksne",
      authors: "Helsedirektoratet",
      title: "Psykisk helsehjelp for voksne",
      publication: "Helsenorge",
      year: 2026,
      type: "official-guidance",
      url: "https://www.helsenorge.no/psykisk-helse/psykisk-helsehjelp-for-voksne/",
      note:
        "Offisiell norsk veiledning om psykisk helse, vanlig uro og når langvarige eller funksjonspåvirkende plager bør møtes med riktig hjelpetilbud.",
    },
    {
      id: "helsenorge-angst",
      authors: "Helsedirektoratet",
      title: "Angst og angstlidelser",
      publication: "Helsenorge",
      year: 2026,
      type: "official-guidance",
      url: "https://www.helsenorge.no/sykdom/psykiske-lidelser/angst/angst-og-angstlidelser/",
      note:
        "Brukes til å skille vanlig uro og overlappende kroppslige reaksjoner fra en faglig vurdert angstlidelse, uten selvdiagnostikk.",
    },
    {
      id: "helsenorge-langvarig-stress",
      authors: "Helsedirektoratet",
      title: "Langvarig stress",
      publication: "Helsenorge",
      year: 2026,
      type: "official-guidance",
      url: "https://www.helsenorge.no/psykisk-helse/langvarig-stress/",
      note:
        "Offisiell veiledning om stress, mulige belastningsfaktorer, enkle hverdagsgrep og når vedvarende belastning bør vurderes av fastlege.",
    },
    {
      id: "helsenorge-legevakt",
      authors: "Helsedirektoratet",
      title: "Legevakt",
      publication: "Helsenorge",
      year: 2026,
      type: "official-guidance",
      url: "https://www.helsenorge.no/hjelpetilbud-i-kommunene/legevakt/",
      note:
        "Kilde for hjelpehierarkiet: fastlege i åpningstiden, 116 117 når hjelpen ikke kan vente, og 113 når det er akutt og står om liv eller helse.",
    },
    {
      id: "who-doing-what-matters",
      authors: "World Health Organization",
      title: "Doing What Matters in Times of Stress",
      publication: "World Health Organization",
      year: 2020,
      type: "official-guidance",
      url: "https://www.who.int/publications/i/item/9789240003927",
      note:
        "Internasjonal veiledning som brukes som generell støtte for korte, ikke-medikamentelle mestringsferdigheter; den dokumenterer ikke Neuvago-effekt.",
    },
    {
      id: "fda-caffeine",
      authors: "U.S. Food and Drug Administration",
      title: "Spilling the Beans: How Much Caffeine is Too Much?",
      publication: "FDA Consumer Updates",
      year: 2024,
      type: "official-guidance",
      url: "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much",
      note:
        "Kilde for at koffeinfølsomhet varierer, og at helseforhold og legemidler kan påvirke hvordan koffein virker for den enkelte.",
    },
    {
      id: "neuvago-tiltenkt-bruk",
      authors: "Neuvago Editorial Team",
      title: "Tiltenkt bruk",
      publication: "Neuvago",
      year: 2026,
      type: "reference-work",
      url: "https://neuvago.com/no/juridisk/tiltenkt-bruk",
      note:
        "Produktspesifikk grense for velværeposisjonering og for hva Neuvago ikke er ment å diagnostisere, behandle, kurere eller forebygge.",
    },
    {
      id: "neuvago-vns-sikkerhet",
      authors: "Neuvago Editorial Team",
      title: "Er vagusnervestimulering trygt?",
      publication: "Neuvago",
      year: 2026,
      type: "reference-work",
      url: "https://neuvago.com/no/kunnskap/er-vagusnervestimulering-trygt",
      note:
        "Metode- og sikkerhetskontekst med tydelig skille mellom generell forskning, produktspesifikke instrukser og individuelle vurderinger.",
    },
  ],

  relatedKnowledgeSlugs: [
    "hvordan-roe-ned-nervesystemet",
    "regulering-av-nervesystemet",
    "tegn-pa-dysregulert-nervesystem",
    "overstimulert",
    "restitusjon-og-regulering",
  ],
  relatedLinks: [
    {
      title: "Stress og nervesystemet",
      description:
        "Les den brede norske pathwayen om stressrespons, belastning, restitusjon og når stress bør vurderes i en større sammenheng.",
      href: "/no/tilstander/stress",
      label: "Les stress-pathwayen",
    },
    {
      title: "Søvn og nervesystemet",
      description:
        "Se hvordan søvntrykk, døgnrytme, kveldsaktivering og vanlige søvnmønstre kan påvirke kapasitet og uro.",
      href: "/no/tilstander/sovn",
      label: "Les søvn-pathwayen",
    },
    {
      title: "Sikkerhet ved vagusnervestimulering",
      description:
        "Les hvorfor metode, enhet, målgruppe, komfort, stoppsignaler og tiltenkt bruk må vurderes hver for seg.",
      href: "/no/kunnskap/er-vagusnervestimulering-trygt",
      label: "Les sikkerhetsguiden",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Se Neuvagos velværeposisjonering og grensene mot medisinsk diagnose, behandling, kur og forebygging.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan enheten, ørekomponenten, appen og den veiledede rutinen henger sammen innenfor tydelige velværegrenser.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
    {
      title: "Hvordan velge en vagusnervestimulator",
      description:
        "Bruk en transparent beslutningsguide for å vurdere metode, tiltenkt bruk, dokumentasjon, sikkerhet og praktiske forhold.",
      href: "/no/kunnskap/hvordan-velge-vagusnervestimulator",
      label: "Åpne kjøpsguiden",
    },
  ],

  disclaimer:
    "Generell informasjon om hverdagsuro og velvære. Siden er ikke medisinsk rådgivning, diagnose eller behandling og erstatter ikke fastlege, psykisk helsehjelp, legevakt eller akuttjenester.",
} as const satisfies NorwegianConditionPage;
