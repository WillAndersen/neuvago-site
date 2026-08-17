import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const vagusnervenArticle = {
  slug: "vagusnerven",
  path: "/no/kunnskap/vagusnerven",
  status: "published",
  wave: "1A",
  order: 10,

  title: "Vagusnerven – anatomi, funksjon og betydning",
  seoTitle: "Vagusnerven: anatomi, funksjon og betydning | Neuvago",
  description:
    "Lær hva vagusnerven er, hvor den går, hvilke signaler den frakter, og hvorfor den er viktig i kroppens autonome regulering.",
  eyebrow: "Kunnskap om vagusnerven",
  lead:
    "Vagusnerven er den tiende hjernenerven og en omfattende kommunikasjonsforbindelse mellom hjernestammen og flere organer i halsen, brystkassen og bukhulen. Den inngår i både sensoriske, motoriske og autonome funksjoner, og bør forstås som del av et større nervesystem – ikke som en enkel av- og på-knapp for ro.",
  shortAnswer: [
    "Vagusnerven er et par med nerver som springer ut fra hjernestammen og går videre gjennom hals, brystkasse og bukhule.",
    "Den formidler informasjon i begge retninger mellom hjernen og indre organer.",
    "Den er en sentral del av det parasympatiske nervesystemet, men vagusnerven alene forklarer ikke hele kroppens stress- eller reguleringsrespons.",
    "Kunnskap om vagusnerven gir et grunnlag for å forstå VNS, tVNS og taVNS, men generell anatomi er ikke dokumentasjon for effekten av et bestemt produkt.",
  ],
  hubSummary:
    "En grunnleggende innføring i vagusnervens anatomi, signalretninger og rolle i det autonome nervesystemet.",
  hubLabel: "Grunnartikkel",

  primaryKeyword: "vagusnerven",
  secondaryKeywords: [
    "hva er vagusnerven",
    "vagus nerve",
    "tiende hjernenerve",
    "nervus vagus",
    "parasympatisk nervesystem",
    "autonome nervesystem",
    "hjerne kropp kommunikasjon",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-17",
  modifiedAt: "2026-08-17",
  readingTimeMinutes: 11,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/vagus-nerve",
  sitemapPriority: 0.86,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-vagusnerven",
      eyebrow: "Grunnleggende anatomi",
      title: "Hva er vagusnerven?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnerven kalles også nervus vagus eller hjernenerve X. Navnet kommer fra latin og viser til at nerven har et vidt forløp gjennom kroppen. I stedet for å ende i ett avgrenset område forgrener den seg fra hjernestammen og videre til strukturer i halsen, brystkassen og bukhulen.",
        },
        {
          type: "paragraph",
          text: "Mennesket har en venstre og en høyre vagusnerve. Sammen inngår de i et omfattende nettverk som formidler informasjon mellom hjernen og blant annet svelg, strupe, hjerte, lunger og deler av fordøyelsessystemet. De enkelte grenene har ulike oppgaver, og venstre og høyre side er ikke fullstendig identiske i forløp eller funksjon.",
        },
        {
          type: "definition",
          term: "Hjernenerve X",
          definition:
            "Vagusnerven er den tiende av tolv par hjernenerver. Romertallet X brukes ofte i anatomiske og medisinske tekster.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Et viktig språkvalg",
          paragraphs: [
            "Det er mer presist å beskrive vagusnerven som en kommunikasjonsforbindelse enn som kroppens «roknapp». Nerven inngår i flere sanse-, refleks-, bevegelses- og reguleringsfunksjoner, og virkningen avhenger av hvilke nervefibre, organer og kretsløp som er involvert.",
          ],
        },
      ],
    },
    {
      id: "hvor-gar-vagusnerven",
      eyebrow: "Forløp gjennom kroppen",
      title: "Hvor går vagusnerven?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnerven har utspring i hjernestammen. Derfra forlater den hodeskallen, går ned gjennom halsen og fortsetter inn i brystkassen. Underveis avgir den grener til områder som er involvert i stemme, svelging, hosterefleks, hjerte- og lungefunksjon. Videre danner vagale fibre nettverk rundt spiserøret og fortsetter gjennom mellomgulvet til organer i bukhulen.",
        },
        {
          type: "paragraph",
          text: "Når man sier at vagusnerven forbinder hjernen med kroppen, er dette derfor en anatomisk beskrivelse av mange forgreninger – ikke én enkel kabel som går direkte fra hjernen til ett bestemt organ. Signalene inngår i lokale nervefletninger, ganglier og refleksbuer sammen med andre deler av nervesystemet.",
        },
        {
          type: "bullets",
          items: [
            "Hjernestammen: utgangspunktet for sentrale vagale kjerner og forbindelser.",
            "Halsen: grener til blant annet svelg og strupe.",
            "Brystkassen: forbindelser til hjerte, lunger og spiserør.",
            "Bukhulen: forbindelser til deler av magesekk, tarm og andre organer.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Anatomien er detaljert",
          paragraphs: [
            "Den nøyaktige fordelingen av vagale nervefibre er mer kompleks enn en forenklet kroppstegning kan vise. En pedagogisk illustrasjon bør derfor markeres som skjematisk og ikke brukes som presis veiledning for stimulering eller behandling.",
          ],
        },
      ],
    },
    {
      id: "signaler-i-begge-retninger",
      eyebrow: "Afferent og efferent",
      title: "Vagusnerven frakter signaler i begge retninger",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnerven er en blandet nerve. Det betyr at den inneholder flere typer nervefibre. Noen fører informasjon fra kroppen mot hjernestammen, mens andre fører signaler fra hjernestammen ut til muskler og organer.",
        },
        {
          type: "table",
          caption: "To hovedretninger for vagale signaler",
          columns: ["Begrep", "Signalretning", "Forenklet forklaring"],
          rows: [
            [
              "Afferent",
              "Fra kroppen mot hjernen",
              "Formidler sanseinformasjon om tilstanden i indre organer og vev.",
            ],
            [
              "Efferent",
              "Fra hjernen mot kroppen",
              "Formidler motoriske og autonome signaler til bestemte målorganer og muskler.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Mye av den vagale kommunikasjonen handler om at hjernen mottar informasjon om kroppens indre tilstand. Denne typen registrering kalles ofte interosepsjon. Den omfatter blant annet signaler knyttet til strekk, kjemiske forhold, pust, sirkulasjon og aktivitet i fordøyelsessystemet.",
        },
        {
          type: "definition",
          term: "Interosepsjon",
          definition:
            "Nervesystemets registrering og bearbeiding av signaler fra kroppens indre miljø. Opplevelsen av sult, metthet, kvalme, pustebehov og hjerteaktivitet kan involvere interoseptive prosesser.",
        },
      ],
    },
    {
      id: "autonome-nervesystem",
      eyebrow: "Regulering uten viljestyring",
      title: "Vagusnerven og det autonome nervesystemet",
      blocks: [
        {
          type: "paragraph",
          text: "Det autonome nervesystemet bidrar til å regulere kroppsfunksjoner som i stor grad foregår uten bevisst styring. Det omfatter blant annet sympatisk og parasympatisk aktivitet, i tillegg til samspill med enteriske og sentrale nervesystemer.",
        },
        {
          type: "paragraph",
          text: "Vagusnerven er en viktig parasympatisk forbindelse til flere organer. Parasympatisk aktivitet forbindes ofte med fordøyelse, restitusjon og bevaring av energi. Det betyr likevel ikke at all parasympatisk funksjon går gjennom vagusnerven, eller at vagal aktivitet alltid kan oversettes direkte til en opplevelse av ro.",
        },
        {
          type: "bullets",
          items: [
            "Autonom regulering skjer gjennom flere parallelle nervebaner og signalstoffer.",
            "Sympatisk og parasympatisk aktivitet er ikke alltid rene motpoler; de kan endres samtidig eller ulikt i forskjellige organer.",
            "En kroppslig tilstand påvirkes også av pust, søvn, hormoner, fysisk aktivitet, sykdom, medisiner, forventninger og omgivelser.",
            "Vagusnerven er derfor viktig, men den er ikke en komplett forklaring på stress, søvn eller psykisk helse.",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Kort oppsummert",
          paragraphs: [
            "Vagusnerven er en sentral del av parasympatisk kommunikasjon og kropp–hjerne-signalering. Den virker alltid innenfor et større biologisk system.",
          ],
        },
      ],
    },
    {
      id: "funksjoner-og-reflekser",
      eyebrow: "Flere oppgaver",
      title: "Hvilke funksjoner er vagusnerven involvert i?",
      blocks: [
        {
          type: "paragraph",
          text: "Fordi vagusnerven inneholder ulike fibre og mange grener, er den involvert i flere typer funksjoner. Det er nyttig å skille mellom direkte motoriske oppgaver, autonome signaler og sensorisk informasjon som inngår i refleksbuer.",
        },
        {
          type: "bullets",
          items: [
            "Svelging og stemme: vagale grener bidrar til styring og følsomhet i svelg og strupe.",
            "Hoste og luftveier: sensoriske og motoriske kretsløp bidrar til beskyttende reflekser.",
            "Hjerte og sirkulasjon: vagale signaler inngår i regulering av bestemte sider ved hjerteaktivitet og reflekskontroll.",
            "Fordøyelse: vagale forbindelser inngår i signalering om blant annet strekk, næringsstoffer, metthet og bevegelse i fordøyelsessystemet.",
            "Kropp–hjerne-informasjon: vagale sanseceller formidler informasjon om tilstanden i flere indre organer.",
          ],
        },
        {
          type: "paragraph",
          text: "Disse funksjonene styres ikke av vagusnerven alene. Organfunksjon oppstår gjennom samspill mellom lokale nervekretser, ryggmarg, hjernestamme, høyere hjerneområder, hormoner og andre signalveier.",
        },
      ],
    },
    {
      id: "stress-sovn-restitusjon",
      eyebrow: "Hvorfor temaet er populært",
      title: "Hvorfor nevnes vagusnerven ved stress, søvn og restitusjon?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnerven trekkes ofte frem fordi den er en tydelig inngang til å forstå forbindelsen mellom hjernen og kroppens indre organer. Stress oppleves ikke bare som tanker. Det kan også påvirke puls, pust, fordøyelse, muskelspenning, oppmerksomhet og søvn. Vagal signalering inngår i deler av dette bildet.",
        },
        {
          type: "paragraph",
          text: "Søvn og restitusjon avhenger imidlertid av langt mer enn én nerve. Døgnrytme, søvntrykk, fysisk og psykisk belastning, sykdom, miljø, vaner og mange biologiske systemer påvirker hvordan kroppen faller til ro og henter seg inn.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Unngå én-forklaringsmodellen",
          paragraphs: [
            "Det er lite presist å forklare alle plager med en «dårlig» eller «skadet» vagusnerve uten en medisinsk vurdering. De samme symptomene kan ha mange ulike årsaker, og nettinnhold kan ikke avgjøre hva som gjelder for den enkelte.",
          ],
        },
      ],
    },
    {
      id: "vagal-tone",
      eyebrow: "Et ofte brukt begrep",
      title: "Hva betyr vagal tone?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagal tone brukes som en samlebetegnelse for vagal innflytelse på fysiologiske funksjoner. Begrepet kan bety forskjellige ting avhengig av fagfelt og målemetode. I noen sammenhenger brukes variasjon i hjerterytmen som en indirekte indikator på bestemte sider ved autonom regulering.",
        },
        {
          type: "paragraph",
          text: "Hjertefrekvensvariabilitet, ofte forkortet HRV, er ikke en direkte måling av hele vagusnerven eller en samlet poengsum for helse. Resultatet påvirkes av blant annet pust, kroppsstilling, tidspunkt, fysisk form, sykdom, medikamenter, alder og hvordan målingen er gjennomført.",
        },
        {
          type: "definition",
          term: "Hjertefrekvensvariabilitet (HRV)",
          definition:
            "Variasjonen i tidsintervallet mellom påfølgende hjerteslag. Ulike HRV-mål uttrykker ulike fysiologiske egenskaper og må tolkes i riktig målekontekst.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Vær forsiktig med bastante tolkninger",
          paragraphs: [
            "En enkelt HRV-måling kan ikke alene diagnostisere vagusnervens funksjon, stressnivå eller sykdom. Sammenligninger over tid krever mest mulig like måleforhold og en forståelse av hvilken HRV-parameter som brukes.",
          ],
        },
      ],
    },
    {
      id: "forskning-og-stimulering",
      eyebrow: "Fra anatomi til VNS",
      title: "Hvordan henger vagusnerven sammen med vagusnervestimulering?",
      blocks: [
        {
          type: "paragraph",
          text: "Vagusnervestimulering, VNS, er en overordnet betegnelse på metoder som bruker elektriske impulser med mål om å påvirke vagale nervebaner. Feltet omfatter implanterte medisinske systemer, ikke-invasive metoder ved halsen og transkutane eller aurikulære forskningsmetoder ved øret.",
        },
        {
          type: "paragraph",
          text: "Disse metodene kan ikke behandles som om de er identiske. Plassering, elektrode, bølgeform, frekvens, pulsvidde, intensitet, varighet, kontrollbetingelse, deltakergruppe og tiltenkt bruk kan variere betydelig. Funn fra én metode eller protokoll kan derfor ikke automatisk overføres til en annen.",
        },
        {
          type: "numbered",
          items: [
            "Avklar hvilken del av VNS-feltet som omtales: implantert, cervikal, transkutan eller aurikulær.",
            "Se hvilken protokoll, plassering og enhet studien faktisk brukte.",
            "Skill mellom mekanismefunn, fysiologiske mål, symptommål og kliniske endepunkter.",
            "Kontroller om resultatene gjelder samme produkt, målgruppe og tiltenkte bruk som påstanden handler om.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Hva forskningen kan og ikke kan fortelle",
          paragraphs: [
            "Generell forskning på vagusnervens anatomi forklarer hvorfor nerven er interessant. Den dokumenterer ikke i seg selv at en bestemt stimuleringsmetode har en bestemt effekt.",
            "Studier av VNS må vurderes ut fra den konkrete metoden, protokollen, populasjonen, kontrollen og utfallsmålene. Relevans for et kommersielt produkt må vises – ikke bare antas.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige grenser",
      title: "Hva betyr denne kunnskapen for Neuvago?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago presenteres som et ikke-invasivt velværeprodukt med en app for veiledede rutiner. Vagusnervens anatomi gir bakgrunn for å forstå produktkategorien, men skal ikke brukes som en snarvei til å love behandling, diagnose eller et bestemt personlig resultat.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Kategori er ikke produktdokumentasjon",
          paragraphs: [
            "Denne artikkelen beskriver vagusnerven og forskningsfeltet generelt. Den dokumenterer ikke i seg selv effekt, sikkerhet eller egnethet for Neuvago hos en bestemt person.",
            "Produktinformasjon må bygge på Neuvagos faktiske spesifikasjoner, tiltenkte bruk, sikkerhetsdokumentasjon og eventuell direkte produktforskning.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Viktig om helse og sikkerhet",
          paragraphs: [
            "Innholdet er generell informasjon og erstatter ikke medisinsk vurdering, diagnose eller behandling. Ved symptomer, sykdom, implantert elektronisk utstyr, graviditet eller usikkerhet om bruk av et stimuleringsprodukt bør du rådføre deg med kvalifisert helsepersonell og følge produktets gjeldende sikkerhetsinformasjon.",
          ],
        },
      ],
    },
  ],

  sources: [
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
      note: "Anatomisk og funksjonell oversikt over afferente vagale systemer.",
    },
    {
      id: "yuan-silberstein-2016-part-i",
      authors: "Yuan H, Silberstein SD",
      title:
        "Vagus Nerve and Vagus Nerve Stimulation, a Comprehensive Review: Part I",
      publication: "Headache",
      year: 2016,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/26364692/",
      doi: "10.1111/head.12647",
      pmid: "26364692",
      note: "Oversikt over vagusnervens anatomi, fysiologi og kropp–hjerne-kommunikasjon.",
    },
    {
      id: "prescott-liberles-2022",
      authors: "Prescott SL, Liberles SD",
      title: "Internal senses of the vagus nerve",
      publication: "Neuron",
      year: 2022,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/35051375/",
      doi: "10.1016/j.neuron.2021.12.020",
      pmid: "35051375",
      note: "Moderne oversikt over vagale sanseceller og signalering fra indre organer.",
    },
    {
      id: "kupari-et-al-2019",
      authors: "Kupari J, Häring M, Agirre E, Castelo-Branco G, Ernfors P",
      title: "An Atlas of Vagal Sensory Neurons and Their Molecular Specialization",
      publication: "Cell Reports",
      year: 2019,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/31116992/",
      doi: "10.1016/j.celrep.2019.04.096",
      pmid: "31116992",
      note: "Eksperimentell kartlegging av mangfoldet blant vagale sensoriske nevroner.",
    },
  ],

  relatedSlugs: ["vagusnervestimulering", "det-autonome-nervesystemet"],
  relatedLinks: [
    {
      title: "Forskning og kunnskapsgrunnlag",
      description:
        "Gå videre til den norske forskningshuben for metode, sikkerhet, tolerabilitet og tydelige tolkningsgrenser.",
      href: "/no/forskning",
      label: "Utforsk forskning",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan enheten, appen og den praktiske rutinen er bygget opp, adskilt fra den generelle anatomien.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
    {
      title: "Neuvago-produktet",
      description:
        "Les den aktuelle produktinformasjonen, tiltenkt bruk, innhold i pakken og kjøpsstatus.",
      href: "/no/produkt",
      label: "Utforsk produktet",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
