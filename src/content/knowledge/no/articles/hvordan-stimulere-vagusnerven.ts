import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const hvordanStimulereVagusnervenArticle = {
  slug: "hvordan-stimulere-vagusnerven",
  path: "/no/kunnskap/hvordan-stimulere-vagusnerven",
  status: "published",
  wave: "2D.2" as NorwegianKnowledgeArticle["wave"],
  order: 15,

  title: "Hvordan stimulere vagusnerven? Metoder, dokumentasjon og viktige grenser",
  seoTitle: "Hvordan stimulere vagusnerven? Metoder og evidens | Neuvago",
  description:
    "Lær hva «stimulere vagusnerven» kan bety, hvordan elektrisk VNS skiller seg fra pust og andre metoder, og hvilke evidens- og sikkerhetsgrenser som gjelder.",
  eyebrow: "Fagsenter om vagusnerven",
  lead:
    "Uttrykket kan vise til flere ulike ting. Elektrisk VNS er en egen metodekategori, mens pust, bevegelse, avslapning, lyd og skånsom berøring kan påvirke autonom tilstand uten at de dermed er dokumentert som direkte og selektiv vagusnervestimulering.",
  shortAnswer: [
    "«Stimulere vagusnerven» brukes om elektrisk VNS, vanlige reguleringspraksiser og en rekke trendpåstander som ikke har samme evidensgrunnlag.",
    "Pust og bevegelse kan påvirke opplevelse og enkelte autonome mål, men er ikke det samme som definert elektrisk VNS.",
    "Implantert, cervikal og aurikulær stimulering er forskjellige metoder med ulike enheter, protokoller og sikkerhetsrammer.",
    "Det finnes ingen universell syv-minutters reset, hjemmetest eller intensitet som dokumenterer vagusfunksjon eller passer alle.",
  ],
  hubSummary:
    "En kildebasert oversikt over elektrisk VNS, pust, bevegelse, avslapning og andre metoder – med tydelige grenser for hva forskningen faktisk viser.",
  hubLabel: "Fagsenter: metoder",

  primaryKeyword: "hvordan stimulere vagusnerven",
  secondaryKeywords: [
    "stimulere vagusnerven",
    "aktivere vagusnerven",
    "vagusnerven øvelser",
    "pust og vagusnerven",
    "vagus nerve reset",
    "elektrisk vagusnervestimulering",
  ],
  searchIntent: "informational",

  publishedAt: "2026-09-02",
  modifiedAt: "2026-09-04",
  readingTimeMinutes: 18,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  englishEquivalent: "/learn/how-to-stimulate-the-vagus-nerve",
  sitemapPriority: 0.92,
  changeFrequency: "weekly",

  sections: [
    {
      id: "hva-betyr-det-a-stimulere-vagusnerven",
      eyebrow: "Begynn med definisjonen",
      title: "Hva betyr det egentlig å stimulere vagusnerven?",
      blocks: [
        {
          type: "paragraph",
          text: "Uttrykket «stimulere vagusnerven» brukes på flere måter på nettet. I medisinsk og teknisk språk handler vagusnervestimulering vanligvis om en definert elektrisk stimulering med en bestemt enhet, plassering og protokoll. I hverdagsspråk brukes uttrykket også om pust, bevegelse, avslapning, lyd, kulde og berøring. Disse kategoriene bør ikke blandes sammen, fordi de bygger på forskjellige mekanismer, målemetoder og sikkerhetsrammer.",
        },
        {
          type: "paragraph",
          text: "Et godt svar begynner derfor ikke med en liste over triks. Det begynner med å spørre hva man mener med stimulering. Ønsker man å forstå en medisinsk VNS-behandling, en ikke-invasiv elektrisk metode, eller en vanlig praksis som kan påvirke pust, oppmerksomhet eller autonom tilstand? Først når kategorien er tydelig, kan man vurdere hva forskning faktisk har undersøkt, hvilke resultater som ble målt, og om funnene er relevante for spørsmålet man stiller.",
        },
        {
          type: "paragraph",
          text: "Vagusnerven er heller ikke en enkel av/på-bryter for ro. Den består av mange nervefibre og inngår i et større autonomt nettverk. Signalene går både fra kroppen til hjernen og fra hjernen til organer. Derfor er det for enkelt å tolke en bestemt følelse, en endring i puls eller ett HRV-tall som bevis på at hele vagusnerven er «aktivert», «svak» eller «resatt».",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Direkte svar",
          paragraphs: [
            "Du kan påvirke forhold som henger sammen med autonom regulering gjennom blant annet pust, bevegelse og avslapning. Elektrisk VNS er derimot en egen metodekategori. Ingen enkelt øvelse, følelse eller tidsgrense dokumenterer alene at vagusnerven er direkte og selektivt stimulert.",
          ],
        },
      ],
    },
    {
      id: "fire-metodekategorier",
      eyebrow: "Metodekart",
      title: "Fire ulike måter uttrykket brukes på",
      blocks: [
        {
          type: "paragraph",
          text: "Når søkeresultater samler svært forskjellige tiltak under én overskrift, blir både nytte og risiko vanskeligere å vurdere. En ryddigere modell er å dele feltet i fire spor: implantert medisinsk VNS, ikke-invasiv elektrisk VNS, atferds- og reguleringspraksiser, og trendpregede eller risikable gjør-det-selv-påstander. Tabellen gir ikke en rangering. Den viser hvilken type spørsmål som må stilles for hver kategori.",
        },
        {
          type: "table",
          caption: "Fire metodekategorier som ofte omtales som «vagusstimulering»",
          columns: [
            "Metodekategori",
            "Hva det er",
            "Hva evidens kan vise",
            "Viktige grenser",
          ],
          rows: [
            ["Implantert medisinsk VNS", "Kirurgisk implantert pulsgenerator og elektrode under medisinsk oppfølging.", "Produkt- og indikasjonsspesifikke kliniske utfall, sikkerhet og tolerabilitet.", "Kan ikke likestilles med eksterne velværeprodukter eller hjemmeøvelser."],
            ["Ikke-invasiv elektrisk VNS", "Elektrisk stimulering gjennom hud ved for eksempel øre eller hals.", "Resultater for en bestemt enhet, plassering, protokoll og populasjon.", "Det finnes ikke én universell protokoll eller automatisk overføring mellom enheter."],
            ["Pust og reguleringspraksiser", "Pust, bevegelse, avspenning, lyd eller skånsom berøring.", "Endringer i opplevelse, pust, puls eller HRV-relaterte mål i bestemte sammenhenger.", "Er ikke automatisk dokumentasjon på direkte elektrisk eller selektiv vagusstimulering."],
            ["Trend- og DIY-påstander", "«Reset», trykkpunkter, kraftig halsmassasje eller universelle hjemmetester.", "Kan undersøkes som påstander eller opplevelser.", "Premisset kan være feil; enkelte prosedyrer hører hjemme i klinisk overvåket praksis."],
          ],
        },
        {
          type: "paragraph",
          text: "Denne inndelingen gjør det mulig å gi praktisk informasjon uten å late som alle metoder gjør det samme. En person kan oppleve at langsom pust gjør det lettere å roe tempoet, mens en forskningsstudie kan undersøke elektriske pulser ved et bestemt øreområde. Begge temaene kan være relevante i et fagsenter, men de må beskrives med hvert sitt evidensspråk.",
        },
        {
          type: "paragraph",
          text: "Inndelingen beskytter også mot feilslutninger. At implantert VNS er en regulert medisinsk enhetskategori i USA, betyr ikke at enhver stimulator har de samme indikasjonene. At en studie finner en endring med én taVNS-protokoll, betyr ikke at alle ørebaserte enheter gir samme resultat. Og at en øvelse påvirker pust eller opplevelse, betyr ikke at den er en elektrisk VNS-behandling.",
        },
      ],
    },
    {
      id: "elektrisk-vagusnervestimulering",
      eyebrow: "Egen metodekategori",
      title: "Elektrisk VNS er en egen metodekategori",
      blocks: [
        {
          type: "paragraph",
          text: "Elektrisk vagusnervestimulering innebærer at en enhet leverer kontrollerte elektriske impulser. Implantert VNS bruker kirurgisk plasserte komponenter og medisinsk oppfølging. Ikke-invasive metoder bruker elektroder på huden. Innen ikke-invasiv VNS finnes det igjen forskjeller mellom cervikal stimulering ved halsen og aurikulær stimulering ved det ytre øret.",
        },
        {
          type: "paragraph",
          text: "Ordene tVNS og taVNS beskriver heller ikke én ferdig dose. Studier varierer i elektrode, aktivt sted, kontrollsted, frekvens, pulsvidde, intensitet, titrering, øktlengde, antall økter og studiedeltakere. De varierer også i hva de måler: tolerabilitet, fysiologiske signaler, subjektive vurderinger, symptomer eller kliniske endepunkter. Farmer-konsensusen og metodekritiske oversikter fremhever nettopp behovet for å rapportere disse detaljene.",
        },
        {
          type: "paragraph",
          text: "Det finnes derfor ikke et kildebelagt universelt «beste» sted, intensitetsnivå eller program for alle formål. Høyere intensitet eller en sterkere prikking er heller ikke i seg selv bevis på bedre målretting eller bedre resultat. Relevant evidens må knyttes til den konkrete metoden, enheten, protokollen, populasjonen og det utfallet som faktisk ble undersøkt.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Hold kategoriene adskilt",
          paragraphs: [
            "Les mer om definisjoner og hovedtyper i artikkelen om vagusnervestimulering. Sammenlign implantert og ikke-invasiv VNS separat, og bruk den aurikulære artikkelen når spørsmålet gjelder øret. Forskning på én kategori er ikke automatisk produktdokumentasjon for en annen.",
          ],
        },
      ],
    },
    {
      id: "pust-og-autonom-regulering",
      eyebrow: "Atferdsbasert praksis",
      title: "Pust kan påvirke autonom tilstand – men er ikke det samme som elektrisk VNS",
      blocks: [
        {
          type: "paragraph",
          text: "Langsom, frivillig pust er blant metodene folk oftest forbinder med vagusnerven. Systematiske oversikter viser at langsom pust under bestemte betingelser kan påvirke hjertefrekvens og HRV-relaterte mål. Det finnes også forskning på psykofysiologiske korrelater av pustekontroll. Dette gir et rimelig grunnlag for å omtale pust som en praksis som kan påvirke kroppslig aktivering, oppmerksomhet og enkelte autonome mål.",
        },
        {
          type: "paragraph",
          text: "Det er likevel et sprang fra en endring i pust eller kardial HRV til påstanden om at en øvelse direkte og selektivt stimulerer hele vagusnerven. HRV er et indirekte og kontekstavhengig mål på variasjon mellom hjerteslag. Målet påvirkes blant annet av pustefrekvens, kroppsstilling, aktivitet, tid på døgnet, målemetode og individforskjeller. Ett tall er derfor ikke en hjemmetest som kan diagnostisere «vagal tone» eller vagusdysfunksjon.",
        },
        {
          type: "paragraph",
          text: "En praktisk pusteøvelse kan beskrives uten å love en bestemt nerveeffekt: finn en komfortabel rytme, unngå å presse pusten, og stopp dersom du blir svimmel eller uvel. Målet kan være å senke tempoet og rette oppmerksomheten mot en roligere utpust. Den dedikerte pusteartikkelen kommer i en senere bølge og skal behandle teknikker, evidens og sikkerhetsgrenser mer detaljert.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Hva forskningen støtter – og ikke støtter",
          paragraphs: [
            "Forskningen støtter kvalifisert språk om pust og mål som puls eller HRV under definerte forhold. Den støtter ikke en universell garanti om direkte elektrisk vagusstimulering, klinisk behandling eller samme virkning for alle mennesker.",
          ],
        },
      ],
    },
    {
      id: "bevegelse-avslapning-lyd-og-beroring",
      eyebrow: "Bredere reguleringsverktøy",
      title: "Bevegelse, avslapning, lyd og skånsom berøring",
      blocks: [
        {
          type: "paragraph",
          text: "Bevegelse kan påvirke puls, pust, søvntrykk, humør og restitusjon, og enkelte treningsintervensjoner er undersøkt med mål på kardial autonom kontroll. Resultatene varierer mellom aktivitetstyper, intensitet, varighet og populasjoner. Derfor er «trening stimulerer vagusnerven» for upresist som generell påstand. Det er mer presist å si at regelmessig aktivitet kan påvirke flere systemer som inngår i autonom regulering.",
        },
        {
          type: "paragraph",
          text: "Avslapning, meditasjon, grounding og oppmerksomhetsøvelser kan hjelpe noen med å skifte fokus og håndtere stressbelastning. WHO beskriver praktiske stressmestringsverktøy uten å gjøre dem avhengige av en vagusspesifikk forklaring. Dette er en nyttig modell: en øvelse kan være verdifull fordi den er enkel, gjennomførbar og støtter mestring, selv om man ikke kan bevise at den selektivt aktiverer én nerve.",
        },
        {
          type: "paragraph",
          text: "Lyd, nynning, sang og skånsom berøring omtales ofte som «vagusøvelser». Slike aktiviteter kan endre pust, stemmebruk, oppmerksomhet, sosial kontekst eller kroppslig opplevelse. Det betyr ikke at én bestemt tone eller berøring er dokumentert som en universell vagusprotokoll. Når evidensen er indirekte eller sammensatt, bør språket være tilsvarende nøkternt.",
        },
        {
          type: "bullets",
          items: [
            "Beskriv hva personen faktisk gjør – for eksempel langsom pust, rolig gange eller grounding.",
            "Beskriv hvilket utfall som er undersøkt – for eksempel opplevd stress, puls eller HRV.",
            "Unngå å gjøre en plausibel mekanisme om til et garantert resultat.",
            "Behold lavrisiko praksiser som frivillige verktøy, ikke som diagnoser eller behandling.",
          ],
        },
      ],
    },
    {
      id: "stimulering-ved-oret-og-halsen",
      eyebrow: "Anatomi og plassering",
      title: "Øre og hals er ikke samme stimuleringssted",
      blocks: [
        {
          type: "paragraph",
          text: "Aurikulær stimulering retter seg mot det ytre øret, mens cervikal stimulering skjer ved halsen. Implantert VNS bruker en kirurgisk plassert elektrode. Disse metodene har forskjellige anatomiske forutsetninger, enheter og protokoller. Det er derfor misvisende å omtale dem som utskiftbare versjoner av den samme øvelsen.",
        },
        {
          type: "paragraph",
          text: "Det ytre øret har sammensatt nerveforsyning. Anatomiske studier og senere oversikter viser bidrag fra flere nerver og usikkerhet knyttet til nøyaktig fordeling. Hele øret kan derfor ikke beskrives som ett ensartet «vaguspunkt». En følelse ved øret beviser heller ikke at en bestemt nervegren er målrettet eller at et ønsket utfall vil følge.",
        },
        {
          type: "paragraph",
          text: "For elektrisk ørestimulering må man vite hvilken del av øret som brukes, hvordan elektroden er utformet, hvilke pulser som leveres og hvordan intensiteten styres. Slike detaljer hører til den konkrete enheten eller forskningsprotokollen. De bør ikke erstattes av generelle bilder, tilfeldige TENS-oppsett eller råd om å plassere strøm hvor som helst på øret.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Bruk aldri anatomi som gjør-det-selv-instruksjon",
          paragraphs: [
            "Denne oversikten forklarer kategorier, ikke elektrodeplassering. Følg bare den konkrete enhetens gjeldende instruksjoner. Endelig øre- og elektrodeveiledning for Neuvago skal bruke den virkelige enheten og godkjent produktdokumentasjon.",
          ],
        },
      ],
    },
    {
      id: "kan-man-stimulere-vagusnerven-selv",
      eyebrow: "Direkte svar",
      title: "Kan man stimulere vagusnerven selv?",
      blocks: [
        {
          type: "paragraph",
          text: "Du kan selv bruke vanlige lavrisiko praksiser som komfortabel, rolig pust, moderat bevegelse, avspenning og grounding. Disse kan påvirke hvordan kroppen oppleves og reguleres, men de bør beskrives som det de er. Det er ikke nødvendig å hevde at en bestemt øvelse direkte «treffer» vagusnerven for at den kan være nyttig i en hverdagsrutine.",
        },
        {
          type: "paragraph",
          text: "Elektrisk stimulering er noe annet. En ekstern stimulator må vurderes ut fra tiltenkt bruk, plassering, strømform, intensitetsstyring, produktkvalitet, sikkerhetsinformasjon og dokumentasjon. En vanlig TENS-enhet er ikke automatisk en vagusnervestimulator, og tilfeldige elektroder ved øre eller hals er ikke en forsvarlig erstatning for en enhet som er utformet og dokumentert for et bestemt bruksområde.",
        },
        {
          type: "paragraph",
          text: "Medisinske prosedyrer og spørsmål om sykdom hører heller ikke hjemme i en generell selvhjelpsguide. Dersom du har symptomer, implantert elektronisk utstyr, hjerterytmeproblemer, pågående behandling eller andre medisinske spørsmål, bør vurderingen knyttes til kvalifisert helsepersonell og til den konkrete produktinformasjonen.",
        },
        {
          type: "numbered",
          items: [
            "Bestem om du spør om en vanlig reguleringspraksis eller en elektrisk enhet.",
            "Kontroller hva metoden faktisk er utviklet og undersøkt for.",
            "Følg produktspesifikke instruksjoner fremfor generelle nettips.",
            "Stopp ved smerte, uventet reaksjon eller tydelig ubehag, og søk råd når situasjonen krever det.",
          ],
        },
      ],
    },
    {
      id: "hvor-lang-tid-tar-det",
      eyebrow: "Ingen universell klokke",
      title: "Hvor lang tid tar det å stimulere vagusnerven?",
      blocks: [
        {
          type: "paragraph",
          text: "Spørsmålet har ikke ett universelt svar, fordi «stimulere» kan bety forskjellige ting. En elektrisk puls leveres i det øyeblikket en enhet er aktiv, men det sier ikke at en bestemt nerve er selektivt målrettet, at målengasjement er dokumentert, eller at et subjektivt eller klinisk resultat skal oppstå innen en fast tidsgrense.",
        },
        {
          type: "paragraph",
          text: "I forskning kan man måle umiddelbare signaler under en økt, endringer kort tid etterpå eller utvikling over gjentatte økter. Ulike utfall har ulike tidsskalaer. Tolerabilitet kan vurderes i én økt, mens andre forskningsspørsmål krever dager eller uker. Resultatet avhenger dessuten av enhet, plassering, protokoll, deltakergruppe og målemetode.",
        },
        {
          type: "paragraph",
          text: "Det samme gjelder pust og avslapning. Noen merker raskt at tempoet endrer seg, mens andre ikke opplever en tydelig forskjell. En opplevelse av ro er ikke en laboratoriemåling av hele vagusnervens funksjon, og fravær av en tydelig følelse betyr ikke nødvendigvis at øvelsen er «feil». Unngå derfor løfter om en syv minutters reset eller en fast tid som gjelder alle.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Spør heller: hvilket utfall, hvilken metode og hvilken tidsskala?",
          paragraphs: [
            "Et presist svar navngir hva som gjøres, hva som måles, når det måles og hvilken usikkerhet som finnes. Produktspesifikk øktlengde og frekvens skal hentes fra gjeldende instruksjoner, ikke utledes fra generelle forskningsartikler.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-og-metoder-du-ikke-bor-improvisere",
      eyebrow: "Sikkerhetsgrense",
      title: "Sikkerhet: metoder du ikke bør improvisere",
      blocks: [
        {
          type: "paragraph",
          text: "Kraftig trykk mot halsen eller carotis skal ikke presenteres som en generell vagusøvelse. Carotis-sinusmassasje beskrives i europeisk klinisk veiledning som en overvåket diagnostisk manøver med kontinuerlig måling. Det er noe helt annet enn et trykkpunkt folk bør prøve på seg selv etter en kort video.",
        },
        {
          type: "paragraph",
          text: "Improvisert elektrisk stimulering ved hals eller øre er heller ikke en nøytral hjemmetest. Strømform, plassering, kontakt, enhetens konstruksjon og brukerens situasjon betyr noe. «Ikke-invasiv» betyr ikke automatisk risikofri eller egnet for alle. Følg alltid den konkrete enhetens bruksanvisning og sikkerhetsinformasjon.",
        },
        {
          type: "paragraph",
          text: "Symptomer som svimmelhet, besvimelse, brystsmerter, pustevansker, plutselig svakhet eller andre alvorlige eller akutte tegn skal ikke forklares bort som en vagusreaksjon. Søk akutt hjelp ved alvorlige symptomer. Ved vedvarende eller bekymringsfulle plager bør vurderingen tas med helsepersonell fremfor å bruke nettbaserte vagustester.",
        },
        {
          type: "bullets",
          items: [
            "Ikke bruk kraftig hals- eller carotistrykk som selvhjelpsmetode.",
            "Ikke plasser tilfeldige elektriske elektroder ved øre eller hals.",
            "Ikke øk intensitet for å jage en sterkere følelse.",
            "Ikke bruk symptomer eller HRV som egen diagnose.",
            "Ikke erstatt medisinsk vurdering med en «vagus reset».",
          ],
        },
      ],
    },
    {
      id: "slik-vurderer-du-metoder-og-neuvago",
      eyebrow: "Fra søk til vurdering",
      title: "Slik vurderer du en metode – og hvor Neuvago eventuelt passer inn",
      blocks: [
        {
          type: "paragraph",
          text: "En nyttig metodevurdering begynner med målet. Søker du en enkel hverdagspraksis for å senke tempoet, kunnskap om elektrisk VNS, eller informasjon om en medisinsk behandling? Deretter bør du identifisere selve metoden, dokumentasjonen, sikkerhetsrammen og om resultatene gjelder den samme enheten, plasseringen og målgruppen.",
        },
        {
          type: "numbered",
          items: [
            "Definer brukerjobben og unngå å blande velvære, forskning og medisinsk behandling.",
            "Identifiser om metoden er atferdsbasert, elektrisk ikke-invasiv eller implantert.",
            "Se etter enhet, sted, waveform, intensitet, øktdesign, populasjon og utfall.",
            "Les begrensninger og bivirkningsrapportering, ikke bare konklusjonen.",
            "Kontroller tiltenkt bruk og gjeldende produktinformasjon.",
            "Velg en metode som er forståelig, gjennomførbar og trygg innenfor sin egen ramme.",
          ],
        },
        {
          type: "paragraph",
          text: "Neuvago kan omtales som én mulig ikke-invasiv, ørebasert elektrisk velværeenhet innenfor sin gjeldende tiltenkte bruk. Forskning på implantert VNS, andre ikke-invasive enheter eller laboratorieprotokoller er ikke automatisk dokumentasjon for Neuvago. Denne siden skal derfor ikke fylle inn produktspesifikk frekvens, varighet, kontraindikasjoner eller stoppregler før de dedikerte produkt- og IFU-portene er lukket.",
        },
        {
          type: "paragraph",
          text: "Fagsenterets rolle er å gjøre hele landskapet forståelig: gratis praksiser som pust og bevegelse, elektriske metoder, medisinske systemer, sikkerhet og forskningsgrenser. En bred og ærlig kunnskapsbase står ikke i motsetning til et produkt. Den gjør det lettere for leseren å forstå når en enhet faktisk er relevant, og når et enklere verktøy eller profesjonell vurdering er mer passende.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Neuvagos plass i helheten",
          paragraphs: [
            "Neuvago er ikke svaret på alle spørsmål om vagusnerven. Det er én mulig velværebasert, ikke-invasiv elektrisk metode. Les hvordan systemet fungerer, vurder dokumentasjonen på riktig nivå, og behold pust, bevegelse og andre praksiser som egne kategorier.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "fda-vns-epilepsy",
      authors: "U.S. Food and Drug Administration",
      title: "Vagus Nerve Stimulator (VNS) System — implanted for epilepsy",
      publication: "FDA Establishment Registration & Device Listing",
      year: 2026,
      type: "official-guidance",
      url: "https://www.accessdata.fda.gov/SCRIPTS/cdrh/cfdocs/cfRL/rl.cfm?lid=859346&lpcd=LYJ",
      note: "Amerikansk produktkode- og enhetskontekst for implantert medisinsk VNS; kan ikke overføres til Neuvago.",
    },
    {
      id: "esc-syncope-2018",
      authors: "European Society of Cardiology task force",
      title: "Practical Instructions for the 2018 ESC Guidelines for the diagnosis and management of syncope",
      publication: "European Heart Journal",
      year: 2018,
      type: "official-guidance",
      url: "https://academic.oup.com/eurheartj/article/39/21/e43/4939242",
      doi: "10.1093/eurheartj/ehy071",
      note: "Brukes bare til å etablere at carotis-sinusmassasje er en overvåket klinisk manøver, ikke en generell hjemmeøvelse.",
    },
    {
      id: "who-stress-guide",
      authors: "World Health Organization",
      title: "Doing What Matters in Times of Stress: An Illustrated Guide",
      publication: "World Health Organization",
      year: 2020,
      type: "official-guidance",
      url: "https://www.who.int/publications-detail-redirect/9789240003927",
      note: "Praktisk stressmestring uten behov for en vagusspesifikk mekanismepåstand.",
    },
    {
      id: "farmer-2021",
      authors: "Farmer AD et al.",
      title: "International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020)",
      publication: "Frontiers in Human Neuroscience",
      year: 2021,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
      doi: "10.3389/fnhum.2020.568051",
      pmid: "33854421",
      note: "Konsensus om rapportering av enhet, plassering, parametere, kontroller, utfall og sikkerhet.",
    },
    {
      id: "yap-2020",
      authors: "Yap JYY et al.",
      title: "Critical Review of Transcutaneous Vagus Nerve Stimulation: Challenges for Translation to Clinical Practice",
      publication: "Frontiers in Neuroscience",
      year: 2020,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/32410932/",
      doi: "10.3389/fnins.2020.00284",
      pmid: "32410932",
      note: "Metodekritisk oversikt over variasjon og manglende universell optimal protokoll.",
    },
    {
      id: "badran-2019",
      authors: "Badran BW et al.",
      title: "Laboratory Administration of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): Technique, Targeting, and Considerations",
      publication: "Journal of Visualized Experiments",
      year: 2019,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
      doi: "10.3791/58984",
      pmid: "30663712",
      note: "Metodekontekst for aurikulær elektrisk stimulering; ikke produktinstruksjon.",
    },
    {
      id: "butt-2020",
      authors: "Butt MF et al.",
      title: "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
      publication: "Journal of Anatomy",
      year: 2020,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
      doi: "10.1111/joa.13122",
      pmid: "31742681",
      note: "Anatomisk oversikt som understreker sammensatt øreinnervasjon og tolkningsgrenser.",
    },
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
      note: "Anatomisk studie av nerveforsyningen i det ytre øret.",
    },
    {
      id: "berthoud-2000",
      authors: "Berthoud HR, Neuhuber WL",
      title: "Functional and chemical anatomy of the afferent vagal system",
      publication: "Autonomic Neuroscience",
      year: 2000,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/11189015/",
      doi: "10.1016/S1566-0702(00)00215-0",
      pmid: "11189015",
      note: "Grunnlag for afferent vagusanatomi; ikke produktspesifikk evidens.",
    },
    {
      id: "ben-menachem-2015",
      authors: "Ben-Menachem E et al.",
      title: "Surgically implanted and non-invasive vagus nerve stimulation: a review of efficacy, safety and tolerability",
      publication: "European Journal of Neurology",
      year: 2015,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/25614179/",
      doi: "10.1111/ene.12629",
      pmid: "25614179",
      note: "Kategorioversikt over implantert og ikke-invasiv VNS.",
    },
    {
      id: "laborde-2022",
      authors: "Laborde S et al.",
      title: "Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis",
      publication: "Neuroscience & Biobehavioral Reviews",
      year: 2022,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/35623448/",
      doi: "10.1016/j.neubiorev.2022.104711",
      pmid: "35623448",
      note: "Kjernegrunnlag for kvalifisert språk om langsom pust og kardiale autonome mål.",
    },
    {
      id: "zaccaro-2018",
      authors: "Zaccaro A et al.",
      title: "How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing",
      publication: "Frontiers in Human Neuroscience",
      year: 2018,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/30245619/",
      doi: "10.3389/fnhum.2018.00353",
      pmid: "30245619",
      note: "Systematisk oversikt over psykofysiologiske korrelater av langsom pust.",
    },
    {
      id: "grassler-2021",
      authors: "Grässler B et al.",
      title: "Effects of Different Exercise Interventions on Cardiac Autonomic Control and Secondary Health Factors in Middle-Aged Adults",
      publication: "Journal of Cardiovascular Development and Disease",
      year: 2021,
      type: "systematic-review",
      url: "https://pubmed.ncbi.nlm.nih.gov/34436236/",
      doi: "10.3390/jcdd8080094",
      pmid: "34436236",
      note: "Heterogen evidens om trening og kardiale autonome mål.",
    },
  ],

  relatedSlugs: [
    "vagusnerven",
    "vagusnervestimulering",
    "hvordan-roe-ned-nervesystemet",
    "aurikulaer-vagusnervestimulering",
    "implantert-og-ikke-invasiv-vns",
    "er-vagusnervestimulering-trygt",
  ],
  relatedLinks: [
    {
      title: "How to stimulate the vagus nerve",
      description:
        "Read the semantically equivalent English methods-centre guide.",
      href: "/learn/how-to-stimulate-the-vagus-nerve",
      label: "Read in English",
    },
    {
      title: "Kan man «resette» vagusnerven?",
      description:
        "Les hva reset-uttrykket betyr, hvorfor ingen universell sju-minutters nullstilling er dokumentert, og hvilke grenser som gjelder for pust, HRV og elektrisk VNS.",
      href: "/no/kunnskap/resette-vagusnerven",
      label: "Forstå reset-påstanden",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se den praktiske forklaringen av den ikke-invasive enheten, øreelektroden og appen innenfor Neuvagos gjeldende velværeramme.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan systemet fungerer",
    },
    {
      title: "Tiltenkt bruk",
      description:
        "Les grensene mellom generell velværeinformasjon, produktbruk og medisinsk vurdering.",
      href: "/no/juridisk/tiltenkt-bruk",
      label: "Les tiltenkt bruk",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
