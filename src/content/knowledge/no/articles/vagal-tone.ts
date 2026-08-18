import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const vagalToneArticle = {
  slug: "vagal-tone",
  path: "/no/kunnskap/vagal-tone",
  status: "published",
  wave: "1B",
  order: 100,

  title:
    "Vagal tone – hva begrepet betyr, hvordan det måles og hva HRV kan fortelle",
  seoTitle: "Vagal tone: betydning, HRV og begrensninger | Neuvago",
  description:
    "Lær hva vagal tone betyr, forskjellen fra HRV og parasympatisk aktivitet, hvordan kardial vagal kontroll måles, og hvorfor ett tall ikke beskriver hele vagusnerven.",
  eyebrow: "Vagusnerven, HRV og måling",
  lead:
    "Vagal tone brukes ofte som om det var én samlet styrkeinnstilling for vagusnerven eller et direkte mål på hvor rolig og regulert en person er. Fysiologisk er begrepet langt mer avgrenset. I forskning viser det vanligvis til den vedvarende vagale påvirkningen på et bestemt målorgan – oftest hjertet. Respiratorisk sinusarytmi og enkelte HRV-mål kan gi indirekte informasjon om kardial vagal kontroll under definerte forhold, men de måler ikke hele vagusnerven, all parasympatisk aktivitet eller generell helse.",
  shortAnswer: [
    "Vagal tone bør knyttes til et bestemt organ og en bestemt målemetode; «hele kroppens vagale tone» er ikke én direkte målbar størrelse.",
    "Kardial vagal tone beskriver vagusnervens vedvarende påvirkning på hjertets rytme, ikke vagal aktivitet i fordøyelse, luftveier eller andre organer.",
    "RSA og høyfrekvent HRV kan under kontrollerte forhold brukes som indirekte mål på deler av kardial vagal kontroll.",
    "Pust, gjennomsnittspuls, kroppsstilling, alder, medikamenter, rytmeforstyrrelser og målemetode påvirker tolkningen.",
    "Et høyt eller lavt HRV-tall er ikke alene en diagnose, en poengsum for nervesystembalanse eller dokumentasjon på at et produkt har økt vagal tone.",
  ],
  hubSummary:
    "En presis gjennomgang av vagal tone, kardial vagal kontroll, RSA og HRV – med forskjellen mellom direkte fysiologisk påvirkning og indirekte målemarkører.",
  hubLabel: "Måling og begreper",

  primaryKeyword: "vagal tone",
  secondaryKeywords: [
    "vagal tonus",
    "kardial vagal tone",
    "vagus tone",
    "vagusnerven og HRV",
    "HRV vagal tone",
    "respiratorisk sinusarytmi",
    "RSA",
    "høyfrekvent HRV",
    "parasympatisk aktivitet",
    "kardial vagal kontroll",
    "vagal aktivitet",
    "måle vagusnerven",
    "øke vagal tone",
    "lav vagal tone",
    "høy vagal tone",
    "sympatovagal balanse",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-18",
  modifiedAt: "2026-08-18",
  readingTimeMinutes: 19,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/vagal-tone",
  sitemapPriority: 0.84,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-vagal-tone",
      eyebrow: "Begrepet forklart",
      title: "Hva er vagal tone?",
      blocks: [
        {
          type: "paragraph",
          text: "Tone brukes i fysiologi om en vedvarende grunnaktivitet eller påvirkning som kan økes eller reduseres. Vagal tone viser derfor til en kontinuerlig påvirkning fra vagale nervebaner på et målorgan. Begrepet blir mest presist når organet navngis, for eksempel kardial vagal tone.",
        },
        {
          type: "paragraph",
          text: "I hjertet frigjør parasympatiske vagale nerveender acetylkolin som påvirker pacemakerceller og ledningsvev. Denne påvirkningen bidrar til at hvilepulsen hos friske mennesker ofte er lavere enn hjertets egen iboende pacemakerfrekvens.",
        },
        {
          type: "definition",
          term: "Kardial vagal tone",
          definition:
            "Den vedvarende parasympatiske påvirkningen fra vagale nervebaner på hjertets rytme og ledning under et definert måletidspunkt.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Begrepet trenger et målorgan",
          paragraphs: [
            "Det er mer presist å snakke om kardial vagal kontroll enn om én universell vagal tone for hele kroppen.",
            "Vagale nervebaner til hjerte, luftveier og fordøyelsessystem inngår i ulike reflekskretser og kan ikke summeres til ett enkelt forbrukertall.",
          ],
        },
      ],
    },
    {
      id: "vagal-tone-er-ikke-en-ting",
      eyebrow: "En viktig avgrensning",
      title: "Vagal tone er ikke én global innstilling for hele vagusnerven",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnerven er en blandet nerve med mange sensoriske og motoriske fibre. Aktiviteten organiseres i delvis separate baner med forskjellige målorganer og funksjoner. Endret vagal kontroll av hjertet betyr derfor ikke nødvendigvis at samme endring skjer i magesekk, tarm, luftveier eller andre vev.",
        },
        {
          type: "paragraph",
          text: "En stor andel av vagusnervens fibre er afferente og fører informasjon fra kroppen mot hjernestammen. Slike sensoriske signaler er ikke det samme som parasympatisk motorisk tone ut til et organ.",
        },
        {
          type: "table",
          caption: "Tre begreper som ofte blandes",
          columns: ["Begrep", "Hva det viser til", "Hva det ikke automatisk betyr"],
          rows: [
            [
              "Vagal afferent aktivitet",
              "Sensoriske signaler fra indre organer mot hjernestammen",
              "Parasympatisk motorisk påvirkning på hjertet",
            ],
            [
              "Kardial vagal tone",
              "Vedvarende vagal påvirkning på hjertets rytmekontroll",
              "Samlet vagal funksjon i alle organer",
            ],
            [
              "Parasympatisk aktivitet",
              "Organspesifikke signaler gjennom flere kraniale og sakrale nervebaner",
              "At all aktivitet går gjennom vagusnerven",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Vagal og parasympatisk er overlappende – ikke identiske",
          paragraphs: [
            "All vagal aktivitet er ikke parasympatisk efferent aktivitet, og all parasympatisk aktivitet går ikke gjennom vagusnerven.",
          ],
        },
      ],
    },
    {
      id: "direkte-og-indirekte-maaling",
      eyebrow: "Hvordan begrepet operasjonaliseres",
      title: "Hvordan kan kardial vagal tone måles?",
      blocks: [
        {
          type: "paragraph",
          text: "En direkte fysiologisk referansemetode er å undersøke hvor mye hjerteperioden eller pulsen endres når vagal påvirkning blokkeres farmakologisk, vanligvis med atropin. Forskjellen før og etter full vagal blokade kan brukes som et mål på den toniske vagale påvirkningen på hjertet under de aktuelle forholdene.",
        },
        {
          type: "paragraph",
          text: "Farmakologisk blokade brukes hovedsakelig i forskning og spesialiserte undersøkelser. I praksis brukes derfor ofte indirekte mål basert på variasjonen mellom hjerteslag, særlig respiratorisk sinusarytmi og høyfrekvente HRV-komponenter.",
        },
        {
          type: "table",
          caption: "Direkte referanse og vanlige indirekte mål",
          columns: ["Tilnærming", "Hva som registreres", "Viktig begrensning"],
          rows: [
            [
              "Farmakologisk vagal blokade",
              "Endring i hjerteperiode eller puls når muskarinreseptorer blokkeres",
              "Inngripende metode som brukes under kontrollerte forhold",
            ],
            [
              "Respiratorisk sinusarytmi – RSA",
              "Pustesynkron variasjon i tiden mellom hjerteslag",
              "Påvirkes av pust, gjennomsnittspuls, mekanikk og andre reguleringsmekanismer",
            ],
            [
              "Høyfrekvent HRV",
              "Variasjon i et frekvensområde som vanligvis overlapper pusterytmen",
              "Frekvensbåndet må passe pusten; tolkningen avhenger av registrering og analyse",
            ],
            [
              "RMSSD og andre tidsdomeneverdier",
              "Mønstre i forskjeller mellom påfølgende normale hjerteslag",
              "Indirekte og påvirket av rytmekvalitet, målelengde og kontekst",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Indirekte betyr ikke verdiløst",
          paragraphs: [
            "HRV-baserte mål kan være informative når spørsmålet, registreringen og forutsetningene er tydelige.",
            "Problemet oppstår når et avgrenset kardialt mål omtales som en direkte måling av hele vagusnerven eller generell reguleringsevne.",
          ],
        },
      ],
    },
    {
      id: "rsa-og-hf-hrv",
      eyebrow: "Pustesynkron hjerterytme",
      title: "Hva er RSA, og hvorfor kobles det til vagal tone?",
      blocks: [
        {
          type: "paragraph",
          text: "Respiratorisk sinusarytmi er den normale tendensen til at hjertefrekvensen varierer i takt med pusten. Hos mange øker pulsen under innpust og reduseres under utpust. Raske vagale endringer bidrar vesentlig til dette mønsteret.",
        },
        {
          type: "paragraph",
          text: "Høyfrekvent HRV brukes ofte som et matematisk mål på den delen av hjerterytmevariasjonen som faller innenfor pustefrekvensen. RSA og høyfrekvent HRV brukes derfor ofte som nærliggende begreper, men de er avhengige av hvordan pust og signaler registreres.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "RSA er ikke alltid en pålitelig avlesning av tonisk vagal påvirkning",
          paragraphs: [
            "Nyere gjennomganger understreker at RSA ikke under alle forhold er en pålitelig indeks for kardial vagal tone eller sentral vagal utstrømning.",
            "RSA er også et samspill mellom respirasjon og sirkulasjon og kan ha funksjoner som ikke reduseres til én parasympatisk måleverdi.",
          ],
        },
      ],
    },
    {
      id: "pust-puls-og-maaling",
      eyebrow: "Måleforholdene betyr mye",
      title: "Pust og gjennomsnittspuls kan endre HRV uten at vagal tone endres tilsvarende",
      blocks: [
        {
          type: "paragraph",
          text: "Langsommere eller dypere pust kan øke amplituden i respiratorisk hjerterytmevariasjon. Derfor kan to målinger gi ulike RSA- eller HRV-verdier selv om den underliggende toniske vagale påvirkningen ikke har endret seg i samme grad.",
        },
        {
          type: "paragraph",
          text: "Gjennomsnittlig hjerteperiode påvirker også hvor stor variasjon som matematisk kan oppstå. I tillegg kan sympatisk aktivitet, barorefleks, mekaniske trykkendringer i brystkassen og sirkulatoriske forhold modulere det observerte mønsteret.",
        },
        {
          type: "numbered",
          items: [
            "Registrer pustefrekvens og helst pustedybde når RSA eller høyfrekvent HRV skal tolkes fysiologisk.",
            "Sammenlign målinger i samme kroppsstilling og under tilsvarende hvile eller aktivitet.",
            "Bruk rensede normale hjerteslag og kontroller for bevegelsesartefakter og rytmefeil.",
            "Ta hensyn til gjennomsnittspuls og målelengde.",
            "Unngå å sammenligne tall fra ulike enheter eller algoritmer som om de var identiske.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Sympatisk aktivitet kan også påvirke RSA",
          paragraphs: [
            "Studier med beta-adrenerg blokade har vist at sympatisk utstrømning kan dempe respiratorisk hjerterytmevariasjon.",
            "Dette er enda en grunn til at RSA ikke bør forstås som et rent, isolert vagussignal.",
          ],
        },
      ],
    },
    {
      id: "innenfor-og-mellom-personer",
      eyebrow: "To forskjellige spørsmål",
      title: "Endringer hos samme person er ikke det samme som forskjeller mellom personer",
      blocks: [
        {
          type: "paragraph",
          text: "Et mål kan følge endringer i kardial vagal kontroll hos samme person uten å rangere personer presist mot hverandre. Grossman og Kollai fant at hvile-RSA alene ikke nøyaktig predikerte individuelle forskjeller i kardial vagal tone, selv om RSA sammen med hjerteperioden ga mer informasjon.",
        },
        {
          type: "table",
          caption: "Innen-person og mellom-person tolkning",
          columns: ["Spørsmål", "Eksempel", "Viktig hensyn"],
          rows: [
            [
              "Innen samme person",
              "Endres RSA fra en kontrollert hvileperiode til en bestemt oppgave?",
              "Pust, stilling, puls, tidspunkt og registreringsmetode bør holdes sammenlignbare",
            ],
            [
              "Mellom personer",
              "Har person A «bedre vagal tone» enn person B?",
              "Alder, anatomi, kondisjon, legemidler, respirasjon og mange andre faktorer påvirker nivået",
            ],
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Trenddata trenger et definert spørsmål",
          paragraphs: [
            "Det er mer nyttig å spørre hva som har endret seg under sammenlignbare forhold enn å behandle én forbrukerscore som en universell rangering av helse eller robusthet.",
          ],
        },
      ],
    },
    {
      id: "hvile-reaktivitet-og-restitusjon",
      eyebrow: "Nivå er bare én del av bildet",
      title: "Hvilenivå, reaktivitet og tilbakevending beskriver forskjellige sider av reguleringen",
      blocks: [
        {
          type: "paragraph",
          text: "Mange studier undersøker RSA eller HRV i hvile. Andre ser på hvor mye verdien endres under en oppgave og hvordan den vender tilbake etterpå. Disse målene svarer på ulike spørsmål og bør ikke slås sammen til én vagal poengsum.",
        },
        {
          type: "table",
          caption: "Tre vanlige måtesituasjoner",
          columns: ["Målesituasjon", "Hva den kan belyse", "Hva den ikke alene viser"],
          rows: [
            [
              "Hvile eller baseline",
              "Kardial variasjon under bestemte standardiserte forhold",
              "Hvordan personen reagerer på alle typer belastning",
            ],
            [
              "Reaktivitet",
              "Endring fra baseline under en definert oppgave",
              "Om endringen er god eller dårlig uten kunnskap om oppgaven",
            ],
            [
              "Restitusjon",
              "Tidsforløp etter at oppgaven eller belastningen avsluttes",
              "Samlet fysisk eller psykisk restitusjon",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Redusert HRV under en oppgave kan være funksjonelt",
          paragraphs: [
            "Fokusert innsats, fysisk aktivitet eller endret pust kan redusere enkelte HRV-mål uten at dette nødvendigvis betyr dårlig regulering.",
            "Kontekst, oppgavekrav og evnen til å skifte respons er viktigere enn å maksimere ett tall hele tiden.",
          ],
        },
      ],
    },
    {
      id: "hoy-og-lav-vagal-tone",
      eyebrow: "Unngå universelle rangeringer",
      title: "Er høy vagal tone alltid bra og lav vagal tone alltid dårlig?",
      blocks: [
        {
          type: "paragraph",
          text: "Lavere kardial vagal påvirkning eller lavere HRV forekommer i mange sammenhenger, blant annet ved høyere alder, akutt aktivitet, enkelte sykdommer, medikamentbruk, søvnmangel og endrede måleforhold. Et lavere tall identifiserer derfor ikke én årsak.",
        },
        {
          type: "paragraph",
          text: "Et høyere mål er heller ikke automatisk bedre. Rytmeforstyrrelser, svært lav gjennomsnittspuls, pustemønster og analysefeil kan gi høye verdier uten at de representerer ønsket fysiologi. Normal regulering krever variasjon som passer til organet og situasjonen.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Hjerterytmedata kan kreve medisinsk vurdering",
          paragraphs: [
            "Ny uregelmessig rytme, besvimelse, brystsmerter, uttalt tungpust eller vedvarende unormalt lav eller høy puls bør vurderes av helsepersonell.",
            "En HRV-app kan ikke skille sikkert mellom normal variasjon, målefeil og alle medisinske årsaker.",
          ],
        },
      ],
    },
    {
      id: "kan-man-oke-vagal-tone",
      eyebrow: "Et populært søkespørsmål",
      title: "Kan man øke vagal tone?",
      blocks: [
        {
          type: "paragraph",
          text: "Spørsmålet må først presiseres. Mener man å endre kardial vagal kontroll i hvile, øke RSA under en pusteøvelse, forbedre HRV-trenden over tid, eller føle seg roligere? Disse utfallene er ikke identiske.",
        },
        {
          type: "paragraph",
          text: "Søvn, fysisk aktivitet, sykdom, treningstilstand, alkohol, røyking, legemidler, psykososial belastning og måleforhold kan påvirke kardiale autonome mål. Langsom pust kan øke RSA og flere HRV-mål under øvelsen, men dette er ikke det samme som dokumentert varig økning i hele kroppens vagale tone.",
        },
        {
          type: "numbered",
          items: [
            "Definer hvilket utfall som ønskes endret.",
            "Mål under sammenlignbare forhold dersom data skal brukes som trend.",
            "Velg tiltak som også har selvstendig verdi, som søvn, passende aktivitet og redusert skadelig belastning.",
            "Unngå å jage høyest mulig HRV fra økt til økt.",
            "Bruk medisinsk vurdering ved symptomer eller kjent sykdom fremfor å forsøke å korrigere en selvdiagnostisert «lav vagal tone».",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Ingen enkelt teknikk er en universell vagus-oppgradering",
          paragraphs: [
            "Pust, kulde, lyd, bevegelse, sosial kontakt og stimulering omtales ofte som måter å «tone vagusnerven» på.",
            "De kan påvirke opplevelse eller enkelte fysiologiske mål, men effekten må beskrives etter metode, varighet, målgruppe og faktisk dokumentert utfall.",
          ],
        },
      ],
    },
    {
      id: "symptomer-og-selvdiagnose",
      eyebrow: "Begrepet har lav diagnostisk presisjon",
      title: "Kan symptomer vise at du har lav vagal tone?",
      blocks: [
        {
          type: "paragraph",
          text: "Nettlister knytter ofte uro, fordøyelsesplager, søvnvansker, tretthet, hjertebank eller dårlig stressmestring til «lav vagal tone». Slike symptomer er uspesifikke og kan ha mange fysiologiske, medisinske, psykologiske og situasjonelle forklaringer.",
        },
        {
          type: "paragraph",
          text: "Selv en reell HRV-endring identifiserer ikke automatisk årsaken til symptomer. Vagal tone er derfor ikke en tilstrekkelig selvdiagnose og bør ikke brukes til å utsette relevant vurdering.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Bruk symptomer til å velge riktig hjelp – ikke én vagusforklaring",
          paragraphs: [
            "Ved vedvarende, nye eller alvorlige plager bør vurderingen ta hensyn til søvn, medikamenter, hjerte, lunger, hormoner, infeksjon, smerte, mental helse og andre relevante forhold.",
          ],
        },
      ],
    },
    {
      id: "vns-og-vagal-tone",
      eyebrow: "Stimulering og måleutfall",
      title: "Betyr vagusnervestimulering at vagal tone øker?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnervestimulering beskriver en påført stimulus ved en bestemt nervebane eller anatomisk plassering. Vagal tone beskriver tonisk påvirkning på et målorgan. De to begrepene er derfor ikke synonymer.",
        },
        {
          type: "paragraph",
          text: "En stimuleringsstudie kan undersøke HRV, puls, blodtrykk, hjernemålinger, symptomer eller andre utfall. En endring i ett mål må tolkes etter enhet, plassering, parametere, kontrollbetingelse, tidspunkt og studiedeltakere. Fravær av HRV-endring betyr heller ikke nødvendigvis at ingen nervebane ble påvirket.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Mekanisme, biomarkør og brukerutfall er tre forskjellige nivåer",
          paragraphs: [
            "At en stimulus er knyttet til vagusrelaterte baner, at et kardialt mål endres og at en bruker opplever en bestemt effekt er separate påstander.",
            "Hver påstand krever direkte relevant dokumentasjon.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige produktgrenser",
      title: "Hva betyr vagal tone for Neuvago?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagal tone er relevant som kunnskapsbegrep fordi det hjelper leseren å skille vagusnervens anatomi, parasympatisk organregulering og hjertebaserte målinger. Begrepet må likevel ikke brukes som en snarvei til å love en bestemt Neuvago-effekt.",
        },
        {
          type: "paragraph",
          text: "Neuvago er et eksternt, ørebasert velværesystem med justerbar stimulering og en separat app for veiledede rutiner. Produktet må vurderes etter egen tiltenkt bruk, teknisk dokumentasjon, sikkerhetsinformasjon, stimuleringsparametere og direkte relevant produkttesting.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Neuvago måler eller diagnostiserer ikke vagal tone",
          paragraphs: [
            "Neuvago skal ikke beskrives som et system som diagnostiserer «lav vagal tone», balanserer hele det autonome nervesystemet eller garanterer høyere HRV.",
            "Forskning på RSA, HRV, kardial vagal kontroll og andre stimuleringsmetoder brukes som faglig kontekst, ikke som automatisk produktbevis.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Velværedata erstatter ikke medisinsk vurdering",
          paragraphs: [
            "Følg gjeldende produktinformasjon. Ved sykdom, aktive symptomer, hjerterytmeproblemer, implantert elektronisk utstyr, graviditet eller usikkerhet om egnethet bør kvalifisert helsepersonell konsulteres.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "berntson-cacioppo-grossman-2007",
      authors: "Berntson GG, Cacioppo JT, Grossman P",
      title: "Whither vagal tone",
      publication: "Biological Psychology",
      year: 2007,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/17046142/",
      doi: "10.1016/j.biopsycho.2006.08.006",
      pmid: "17046142",
      note:
        "Begrepskritisk gjennomgang av hvordan RSA brukes som indeks for vagal kontroll av hjertet, og hvorfor tolkningen krever presisjon.",
    },
    {
      id: "grossman-taylor-2007",
      authors: "Grossman P, Taylor EW",
      title:
        "Toward understanding respiratory sinus arrhythmia: relations to cardiac vagal tone, evolution and biobehavioral functions",
      publication: "Biological Psychology",
      year: 2007,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/17081672/",
      doi: "10.1016/j.biopsycho.2005.11.014",
      pmid: "17081672",
      note:
        "Omfattende gjennomgang av RSA, respirasjon, kardial vagal kontroll og biologiske funksjoner.",
    },
    {
      id: "grossman-2024",
      authors: "Grossman P",
      title:
        "Respiratory sinus arrhythmia (RSA), vagal tone and biobehavioral integration: Beyond parasympathetic function",
      publication: "Biological Psychology",
      year: 2024,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/38151156/",
      doi: "10.1016/j.biopsycho.2023.108739",
      pmid: "38151156",
      note:
        "Nyere begrepsgjennomgang som understreker at RSA ikke alltid er en pålitelig indeks for kardial vagal tone eller sentral vagal utstrømning.",
    },
    {
      id: "grossman-kollai-1993",
      authors: "Grossman P, Kollai M",
      title:
        "Respiratory sinus arrhythmia, cardiac vagal tone, and respiration: within- and between-individual relations",
      publication: "Psychophysiology",
      year: 1993,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/8416075/",
      doi: "10.1111/j.1469-8986.1993.tb02072.x",
      pmid: "8416075",
      note:
        "Farmakologisk blokkadestudie som skiller mellom innen-person og mellom-person forhold mellom RSA, respirasjon og kardial vagal tone.",
    },
    {
      id: "hayano-1991",
      authors:
        "Hayano J, Sakakibara Y, Yamada A, Yamada M, Mukai S, Fujinami T, Yokoyama K, Watanabe Y, Takata K",
      title:
        "Accuracy of assessment of cardiac vagal tone by heart rate variability in normal subjects",
      publication: "American Journal of Cardiology",
      year: 1991,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/1987723/",
      doi: "10.1016/0002-9149(91)90445-Q",
      pmid: "1987723",
      note:
        "Sammenligner flere HRV-indekser med kardial vagal tone bestemt ved full vagal blokade under kontrollert respirasjon.",
    },
    {
      id: "taylor-2001-sympathetic-restraint",
      authors: "Taylor JA, Myers CW, Halliwill JR, Seidel H, Eckberg DL",
      title:
        "Sympathetic restraint of respiratory sinus arrhythmia: implications for vagal-cardiac tone assessment in humans",
      publication: "American Journal of Physiology – Heart and Circulatory Physiology",
      year: 2001,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/11356639/",
      doi: "10.1152/ajpheart.2001.280.6.H2804",
      pmid: "11356639",
      note:
        "Viser at sympatisk utstrømning kan modulere og dempe RSA, med konsekvenser for tolkning som rent vagalt mål.",
    },
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
        "Klassisk standarddokument for HRV-begreper, registrering, analyse og fysiologisk tolkning.",
    },
    {
      id: "thayer-lane-2000",
      authors: "Thayer JF, Lane RD",
      title:
        "A model of neurovisceral integration in emotion regulation and dysregulation",
      publication: "Journal of Affective Disorders",
      year: 2000,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/11163422/",
      doi: "10.1016/S0165-0327(00)00338-4",
      pmid: "11163422",
      note:
        "Teoretisk modell som setter kardial autonom kontroll inn i et bredere nettverk for tilpasning, hemming og emosjonsregulering.",
    },
  ],

  relatedSlugs: [
    "det-autonome-nervesystemet",
    "det-parasympatiske-nervesystemet",
    "regulering-av-nervesystemet",
    "vagusnerven",
    "hrv-og-vagusnerven",
  ],
  relatedLinks: [
    {
      title: "Vagal tone",
      description:
        "Les den engelske parallellsiden om vagal tone, reguleringsfleksibilitet og hvordan begrepet brukes i dagligtale.",
      href: "/learn/vagal-tone",
      label: "Les engelsk parallellside",
    },
    {
      title: "Forskning på HRV",
      description:
        "Gå til forskningsbibliotekets tema om hjertefrekvensvariabilitet, målemetoder, fysiologisk tolkning og begrensninger.",
      href: "/research/topics/heart-rate-variability",
      label: "Utforsk HRV-forskning",
    },
    {
      title: "Autonom regulering",
      description:
        "Se den bredere forskningskonteksten for sympatisk og parasympatisk kontroll, HRV, stress og restitusjon.",
      href: "/research/topics/autonomic-regulation",
      label: "Utforsk autonom forskning",
    },
    {
      title: "HRV-standardene fra 1996",
      description:
        "Les Neuvagos studiesammendrag av det klassiske standarddokumentet for HRV-måling og tolkning.",
      href: "/research/studies/task-force-1996-heart-rate-variability-standards",
      label: "Les studiesammendraget",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan den eksterne ørekomponenten, enheten, appen og velværerutinen henger sammen uten påstander om å måle eller garantere vagal tone.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan Neuvago fungerer",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
