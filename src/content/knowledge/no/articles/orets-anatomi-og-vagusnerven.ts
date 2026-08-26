import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const oretsAnatomiOgVagusnervenArticle = {
  slug: "orets-anatomi-og-vagusnerven",
  path: "/no/kunnskap/orets-anatomi-og-vagusnerven",
  status: "published",
  wave: "1B",
  order: 120,

  title:
    "Ørets anatomi og vagusnerven – nerveforsyning, plassering og viktige tolkningsgrenser",
  seoTitle: "Ørets anatomi og vagusnerven | Neuvago",
  description:
    "Lær om concha, cymba conchae, tragus, øreflippen og ørets nerveforsyning – og hvorfor anatomiske kart ikke alene dokumenterer vagal målengasjement.",
  eyebrow: "Øreanatomi og aurikulær stimulering",
  lead:
    "Det ytre øret er et lite, men anatomisk komplekst område. Hud, brusk, blodårer og flere sensoriske nerver ligger tett sammen, og nerveforsyningen kan variere og overlappe. Den aurikulære grenen av vagusnerven, ofte forkortet ABVN, er én av flere nerver som bidrar. Dette er grunnlaget for aurikulær vagusnervestimulering, men et anatomisk kart er ikke det samme som dokumentert målengasjement: plassering, elektrodeform, kontaktflate, strømfordeling, intensitet, individuell anatomi og studiedesign må vurderes sammen.",
  shortAnswer: [
    "Det ytre øret består blant annet av helix, antihelix, concha, cymba conchae, cavum conchae, tragus, antitragus og øreflipp.",
    "Øret forsynes av flere nerver, blant annet den aurikulære grenen av vagusnerven, auriculotemporalnerven, den store ørenerven og den lille nakkenervegrenen.",
    "Klassiske anatomikart er nyttige, men bygger på små disseksjonsstudier og bør ikke behandles som absolutte kart for alle mennesker.",
    "Cymba conchae er et mye brukt taVNS-mål, mens tragus, cavum conchae, øregang og øreflipp brukes forskjellig mellom studier og enheter.",
    "Prikking eller annen følelse under en elektrode viser at hudnerver påvirkes, men identifiserer ikke sikkert hvilken nerve eller sentral bane som er aktivert.",
  ],
  hubSummary:
    "En detaljert guide til ørets landemerker, sensoriske nerver, ABVN, anatomisk variasjon, strømfordeling og hvorfor plassering må tolkes sammen med protokoll og dokumentasjon.",
  hubLabel: "Anatomi og plassering",

  primaryKeyword: "ørets anatomi og vagusnerven",
  secondaryKeywords: [
    "vagusnerven i øret",
    "aurikulær gren av vagusnerven",
    "ABVN",
    "øreanatomi",
    "cymba conchae",
    "cavum conchae",
    "concha øre",
    "tragus vagusnerven",
    "øreflippen vagusnerven",
    "aurikulær vagusnervestimulering",
    "taVNS plassering",
    "øre vagusstimulering plassering",
    "øret nerveforsyning",
    "Arnolds nerve",
    "auriculotemporalnerven",
    "store ørenerven",
    "great auricular nerve",
    "elektrodeplassering øre",
    "vagus nerve ear anatomy",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-18",
  modifiedAt: "2026-08-18",
  readingTimeMinutes: 20,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  sitemapPriority: 0.85,
  changeFrequency: "monthly",

  sections: [
    {
      id: "det-ytre-oret",
      eyebrow: "Anatomisk oversikt",
      title: "Hva menes med det ytre øret?",
      blocks: [
        {
          type: "paragraph",
          text: "Det ytre øret består av øremuslingen, også kalt aurikkelen eller pinna, og den ytre øregangen frem til trommehinnen. Øremuslingen er i hovedsak bygget av elastisk brusk som er dekket av hud. Øreflippen skiller seg ut fordi den ikke har den samme bruskstøtten.",
        },
        {
          type: "paragraph",
          text: "Foldene og fordypningene gir øret sin individuelle form. De er også landemerker når forskere og produsenter beskriver hvor en elektrode er plassert. Et navn som «concha» eller «tragus» er derfor ikke pyntespråk, men en del av metodebeskrivelsen.",
        },
        {
          type: "definition",
          term: "Aurikkel",
          definition:
            "Den synlige øremuslingen på utsiden av hodet. I forskningslitteraturen brukes også ordene pinna og external ear.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Ørets form er en del av stimuleringsoppsettet",
          paragraphs: [
            "Elektrodepassform, kontakttrykk og avstanden mellom kontaktpunkter påvirkes av ørets geometri.",
            "Samme produkt eller forskningsprotokoll kan derfor få ulik fysisk kontakt hos forskjellige personer.",
          ],
        },
      ],
    },
    {
      id: "viktige-landemerker",
      eyebrow: "Navnene du møter i forskningen",
      title: "Helix, antihelix, concha, tragus og øreflipp",
      blocks: [
        {
          type: "table",
          caption: "Viktige landemerker på øremuslingen",
          columns: ["Område", "Kort forklaring", "Relevans i aurikulær stimulering"],
          rows: [
            [
              "Helix",
              "Den ytterste, buede kanten av øremuslingen",
              "Brukes som orienteringspunkt og inngår i enkelte elektrodeoppsett",
            ],
            [
              "Antihelix",
              "Den indre, Y-formede bruskkammen parallelt med helix",
              "Avgrenser deler av concha og ørets øvre fordypninger",
            ],
            [
              "Concha",
              "Den skålformede fordypningen som leder mot øregangen",
              "Deles ofte i cymba conchae og cavum conchae",
            ],
            [
              "Cymba conchae",
              "Den øvre delen av concha, over crus of helix",
              "Et mye brukt målområde i taVNS-studier",
            ],
            [
              "Cavum conchae",
              "Den nedre og dypere delen av concha nær åpningen til øregangen",
              "Brukes i anatomiske studier og enkelte stimuleringsprotokoller",
            ],
            [
              "Tragus",
              "Den lille bruskklaffen foran åpningen til øregangen",
              "Brukes i flere taVNS-oppsett, ofte med elektrode på eller rundt tragus",
            ],
            [
              "Antitragus",
              "Bruskfremspringet på motsatt side av tragus",
              "Kan påvirkes av strømfelt fra montasjer ved øreflipp eller concha",
            ],
            [
              "Øreflipp",
              "Den myke nedre delen uten brusk",
              "Brukes ofte som kontrollområde, men bør ikke automatisk kalles fysiologisk inert",
            ],
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Concha er ikke ett enkelt punkt",
          paragraphs: [
            "Cymba og cavum ligger nær hverandre, men har forskjellig form, bruskgeometri og forhold til øregangen.",
            "En studie som skriver «concha» uten nærmere beskrivelse gir mindre presis informasjon enn en studie som oppgir konkret område og elektrodeplassering.",
          ],
        },
      ],
    },
    {
      id: "nerveforsyningen",
      eyebrow: "Flere nerver deler området",
      title: "Hvilke nerver forsyner det ytre øret?",
      blocks: [
        {
          type: "paragraph",
          text: "Følesansen i øremuslingen kommer ikke fra én enkelt nerve. Flere hjernenerver og nerver fra nakkepleksus bidrar, og grensene mellom dem kan overlappe. Det er en viktig grunn til at en enkel fargelegging av øret ikke kan brukes som et sikkert individuelt nervekart.",
        },
        {
          type: "table",
          caption: "Viktige sensoriske nervebidrag til øret",
          columns: ["Nerve", "Opprinnelse", "Overordnet område eller rolle"],
          rows: [
            [
              "Aurikulær gren av vagusnerven – ABVN",
              "Hjernenerve X",
              "Bidrar til følesans i deler av concha og den ytre øregangen; forbindes med sentrale vagale projeksjoner",
            ],
            [
              "Auriculotemporalnerven",
              "Mandibulær gren av trigeminusnerven – V3",
              "Forsyner særlig fremre og øvre deler av øret og området foran øret",
            ],
            [
              "Store ørenerven",
              "Cervikalpleksus, hovedsakelig C2–C3",
              "Et omfattende bidrag til nedre og bakre deler av øremuslingen og øreflippen",
            ],
            [
              "Lille nakkenerve",
              "Cervikalpleksus, hovedsakelig C2",
              "Bidrar særlig til øvre bakside av øret og området bak øret",
            ],
            [
              "Ansikts- og glossopharyngeale forbindelser",
              "Hjernenerve VII og IX",
              "Kommuniserende eller mindre bidrag er beskrevet, særlig rundt øregangen",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Klassisk disseksjonsstudie viste heterogen fordeling",
          paragraphs: [
            "Peuker og Filler dissekerte 14 ører fra sju kadavere og fant en heterogen fordeling av flere kraniale og cervikale nerver.",
            "Den store ørenerven var fremtredende på både lateral og medial side av øremuslingen. Studien var viktig, men utvalget var lite.",
          ],
        },
      ],
    },
    {
      id: "abvn-og-arnolds-nerve",
      eyebrow: "Den aurikulære vagusgrenen",
      title: "Hva er ABVN – og hvorfor kalles den Arnolds nerve?",
      blocks: [
        {
          type: "paragraph",
          text: "Den aurikulære grenen av vagusnerven, ABVN, er en sensorisk gren av den tiende hjernenerven. Den omtales også som Arnolds nerve. Grenen går mot deler av det ytre øret og øregangen og kan formidle berøring, trykk eller irritasjon fra disse områdene.",
        },
        {
          type: "paragraph",
          text: "Hos enkelte kan mekanisk stimulering i øregangen utløse hoste, kjent som Arnold-refleksen. Fenomenet illustrerer at aurikulære vagale signaler kan inngå i en refleksbue, men en hosterefleks er ikke en generell test av vagusfunksjon.",
        },
        {
          type: "definition",
          term: "ABVN",
          definition:
            "Auricular branch of the vagus nerve – den aurikulære grenen av vagusnerven som fører sensorisk informasjon fra deler av det ytre øret mot hjernestammen.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Sensorisk vagusgren er ikke det samme som direkte parasympatisk stimulering av et organ",
          paragraphs: [
            "Aurikulær stimulering retter seg mot sensoriske fibre. Eventuelle effekter på hjerte, pust eller andre organfunksjoner må gå gjennom sentrale nettverk og videre regulerende baner.",
          ],
        },
      ],
    },
    {
      id: "hva-viser-anatomikartene",
      eyebrow: "Kart med forbehold",
      title: "Hva viser de klassiske kartene over ørets nerveforsyning?",
      blocks: [
        {
          type: "paragraph",
          text: "Mange taVNS-illustrasjoner bygger direkte eller indirekte på den lille disseksjonsstudien fra 2002. Kartene har vært svært innflytelsesrike fordi de ga konkrete estimater for hvilke øreområder som kunne motta fibre fra ABVN, auriculotemporalnerven og den store ørenerven.",
        },
        {
          type: "paragraph",
          text: "Senere anatomiske gjennomganger har påpekt uklarheter og mulige motsetninger mellom tekst, tabell og illustrasjoner i den opprinnelige publikasjonen, særlig for tragus. Kartet bør derfor leses som et historisk og nyttig utgangspunkt, ikke som et endelig atlas.",
        },
        {
          type: "bullets",
          items: [
            "Utvalget besto av få kadaverører.",
            "Makroskopisk disseksjon viser nervebaner, men ikke nødvendigvis hvilke fibre som aktiveres elektrisk.",
            "Små nervegrener og mikroskopisk overlapping kan være vanskelige å kartlegge.",
            "Individuell variasjon kan være større enn et prosentkart gir inntrykk av.",
            "Et overflatekart sier ikke alene hvor strømmen går gjennom hud og brusk.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Anatomisk litteratur anbefaler forsiktig språk",
          paragraphs: [
            "En omfattende gjennomgang fra 2020 beskrev anatomien som kompleks og understreket begrensninger i de vanlig brukte aurikulære kartene.",
            "Det er derfor mer presist å skrive at et område er forbundet med eller sannsynligvis mottar vagale fibre enn å kalle det et universelt «vaguspunkt».",
          ],
        },
      ],
    },
    {
      id: "cymba-conchae",
      eyebrow: "Et mye brukt målområde",
      title: "Hvorfor brukes cymba conchae ofte i taVNS?",
      blocks: [
        {
          type: "paragraph",
          text: "Cymba conchae ligger i den øvre delen av concha og er et av de mest brukte målområdene i aurikulær VNS-forskning. Området ble fremhevet i klassiske anatomikart som særlig relevant for ABVN.",
        },
        {
          type: "paragraph",
          text: "I en fMRI-studie med 12 friske voksne ble elektrisk stimulering ved venstre cymba conchae sammenlignet med stimulering av øreflippen. Cymba-stimuleringen var forbundet med aktivitet i flere områder som regnes som sentrale vagale projeksjoner, blant annet ipsilateral nucleus tractus solitarius.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "fMRI-funn er metodebevis – ikke universelt produktbevis",
          paragraphs: [
            "Studien støtter at den konkrete cymba-protokollen kunne nå sentrale vagusrelaterte nettverk under de undersøkte forholdene.",
            "Den dokumenterer ikke at alle elektroder, intensiteter, økter eller produkter ved cymba gir samme aktivering eller brukerutfall.",
          ],
        },
      ],
    },
    {
      id: "cavum-conchae-og-oregangen",
      eyebrow: "Nær øregangen",
      title: "Hva vet vi om cavum conchae og den ytre øregangen?",
      blocks: [
        {
          type: "paragraph",
          text: "Cavum conchae er den nedre delen av concha og ligger tett ved åpningen til øregangen. Området kan motta flere nervebidrag, og overgangen mellom cavum og øregang er anatomisk viktig for noen aurikulære stimuleringsoppsett.",
        },
        {
          type: "paragraph",
          text: "En histologisk studie undersøkte 11 ytre ører og fant nerveprofiler både mellom hud og brusk og utenfor brusken i cavum conchae og øregangen. Nervetetthet og andelen myeliniserte fibre varierte mellom regioner.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Nervetetthet identifiserer ikke automatisk nervens opprinnelse",
          paragraphs: [
            "Histologi kan vise hvor nervefibre ligger og hvor tette de er, men det kreves tilleggsteknikker for å fastslå hvilke navngitte nerver alle fibrene tilhører.",
          ],
        },
      ],
    },
    {
      id: "tragus",
      eyebrow: "Vanlig i forskning og produkter",
      title: "Er tragus et vagusområde?",
      blocks: [
        {
          type: "paragraph",
          text: "Tragus brukes i flere taVNS-protokoller fordi området ligger ved fremre vegg av den ytre øregangen og er praktisk å gripe med en klipselektrode. Det finnes anatomisk og funksjonell begrunnelse for at aurikulære vagale fibre kan påvirkes i eller nær området.",
        },
        {
          type: "paragraph",
          text: "Samtidig er tragus et godt eksempel på hvorfor absolutt språk bør unngås. Klassiske kart og senere tolkninger er ikke helt entydige, og andre sensoriske nervebidrag ligger i nærheten. «Tragus-stimulering» beskriver dessuten ikke om elektroden sitter på indre eller ytre flate, kontaktens størrelse eller hvor motpolen er plassert.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "Navnet tragus er ikke en komplett metodebeskrivelse",
          paragraphs: [
            "En ansvarlig studie eller produktside bør oppgi kontaktflate, side av tragus, elektrodeavstand, strømretning, intensitet og sessionstid.",
          ],
        },
      ],
    },
    {
      id: "oreflippen-som-kontroll",
      eyebrow: "Sham og kontrollplassering",
      title: "Hvorfor brukes øreflippen ofte som kontrollområde?",
      blocks: [
        {
          type: "paragraph",
          text: "Øreflippen er lett tilgjengelig, uten brusk og regnes vanligvis som mindre relevant for direkte ABVN-målretting enn concha og deler av øregangen. Derfor brukes den ofte som sham- eller kontrollplassering i taVNS-studier.",
        },
        {
          type: "paragraph",
          text: "En kontrollplassering bør ligne aktiv stimulering i følelse og forventning uten å aktivere den samme målbanen i samme grad. Dette er krevende. Øreflippen har andre sensoriske nerver, og elektrisk stimulering der er ikke nødvendigvis fysiologisk inaktiv.",
        },
        {
          type: "bullets",
          items: [
            "Deltakere kan merke forskjell i følelse eller elektrodeplassering.",
            "Strøm kan påvirke lokale hudnerver selv uten forventet ABVN-målretting.",
            "Kontrollstimulering kan ha uspesifikke effekter på oppmerksomhet og forventning.",
            "Et negativt eller positivt resultat avhenger derfor også av kvaliteten på sham-designet.",
          ],
        },
        {
          type: "callout",
          tone: "scope",
          title: "Sham betyr kontrollbetingelse – ikke nødvendigvis null fysiologi",
          paragraphs: [
            "Studier bør beskrive kontrollsted, parametere, sensasjon og blinding slik at leseren kan vurdere hva sammenligningen faktisk viser.",
          ],
        },
      ],
    },
    {
      id: "elektroder-og-stromfordeling",
      eyebrow: "Fra overflatekart til elektrisk felt",
      title: "Hvordan påvirker elektrodeform og plassering strømmen i øret?",
      blocks: [
        {
          type: "paragraph",
          text: "Elektrisk stimulering påvirker ikke bare punktet som tegnes på et ørekart. Strømmen går mellom elektrodekontaktene gjennom hud, bindevev og brusk. Kontaktens størrelse, avstand, form og plassering bestemmer det lokale elektriske feltet.",
        },
        {
          type: "paragraph",
          text: "En høyoppløselig beregningsmodell av øret sammenlignet flere taVNS-montasjer og fant at strømfordelingen var svært spesifikk for elektrodeoppsettet. Feltet var sterkest under kontaktene, og mindre elektroder ga høyere felt ved samme totalstrøm.",
        },
        {
          type: "table",
          caption: "Faktorer som påvirker strømfordeling og opplevelse",
          columns: ["Faktor", "Mulig konsekvens", "Hva som bør rapporteres"],
          rows: [
            [
              "Elektrodestørrelse",
              "Mindre kontakt kan gi høyere lokal strømtetthet",
              "Kontaktareal og form",
            ],
            [
              "Avstand og polaritet",
              "Endrer banen mellom kontaktpunktene",
              "Nøyaktig plassering av begge elektroder",
            ],
            [
              "Hud og kontaktmiddel",
              "Påvirker impedans, komfort og lokal strømfordeling",
              "Gel, fuktighet, rengjøring og kontakttrykk",
            ],
            [
              "Bruskgeometri",
              "Kan styre eller spre feltet annerledes mellom områder",
              "Hvilket ørelandemerke kontakten følger",
            ],
            [
              "Intensitet og pulsform",
              "Påvirker følelse og sannsynlig nerveaktivering",
              "Strøm, frekvens, pulsvidde, bølgeform og duty cycle",
            ],
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Elektroden er en del av målrettingen",
          paragraphs: [
            "To studier som begge skriver «cymba conchae» kan likevel stimulere forskjellige vevsvolumer dersom elektrodeform og montasje er ulike.",
          ],
        },
      ],
    },
    {
      id: "folelse-og-nerveaktivering",
      eyebrow: "Det brukeren merker",
      title: "Kan prikking fortelle hvilken nerve som stimuleres?",
      blocks: [
        {
          type: "paragraph",
          text: "Prikking, trykk, varme eller lett vibrasjonsfølelse viser at elektrisk stimulering påvirker hudens sensoriske system. Følelsen gir nyttig informasjon om komfort og persepsjonsterskel, men den identifiserer ikke sikkert hvilken navngitt nerve som er aktivert.",
        },
        {
          type: "paragraph",
          text: "Flere sensoriske nerver kan ligge i samme område, og ulike fibertyper kan ha lignende perseptuelle uttrykk. Opplevelsen påvirkes også av hudmotstand, elektrodepress, kontaktmiddel, tidligere erfaring og forventning.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Sterkere følelse er ikke lik bedre målengasjement",
          paragraphs: [
            "En komfortabel terskel kan brukes til å individualisere en forskningsprotokoll, men intensitet bør ikke økes bare for å oppnå kraftigere sensasjon.",
            "Smerte eller ubehag kan tyde på uheldig kontakt, for høy lokal strømtetthet eller feil passform.",
          ],
        },
      ],
    },
    {
      id: "fra-anatomi-til-malengasjement",
      eyebrow: "Beviskjeden",
      title: "Hvorfor er anatomi alene ikke dokumentasjon på målengasjement?",
      blocks: [
        {
          type: "paragraph",
          text: "Et anatomisk plausibelt mål er første ledd i en beviskjede. For å vise at en konkret stimulering faktisk påvirker en ønsket nervebane, trengs metode- og målespesifikk dokumentasjon.",
        },
        {
          type: "numbered",
          items: [
            "Vis at elektroden fysisk dekker det planlagte området hos den aktuelle brukeren.",
            "Beskriv strømfordeling, parametere og kontaktforhold.",
            "Dokumenter at en relevant nerve- eller sentral respons endres under en kontrollert protokoll.",
            "Sammenlign med en troverdig kontrollbetingelse.",
            "Skill målengasjement fra kliniske, subjektive eller velværerelaterte utfall.",
            "Undersøk om funnet reproduseres med samme enhet og målgruppe.",
          ],
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Anatomi, biomarkør og effekt er tre forskjellige påstander",
          paragraphs: [
            "At en elektrode ligger over et område med mulig ABVN-bidrag, betyr ikke automatisk at ABVN er selektivt aktivert.",
            "At en sentral respons måles, betyr heller ikke automatisk at brukeren får et bestemt helse- eller velværeutfall.",
          ],
        },
      ],
    },
    {
      id: "sidevalg-og-individuell-variasjon",
      eyebrow: "Venstre, høyre og personforskjeller",
      title: "Betyr sidevalg og individuell øreform noe?",
      blocks: [
        {
          type: "paragraph",
          text: "Mange aurikulære VNS-studier bruker venstre øre, delvis inspirert av historiske sikkerhetshensyn fra implantert cervikal VNS. Aurikulær stimulering er imidlertid sensorisk og ikke direkte elektrisk stimulering av hjertets efferente vagusgrener.",
        },
        {
          type: "paragraph",
          text: "Venstre og høyre øre skal likevel ikke behandles som automatisk identiske. Lateraliserte sentrale responser, studiedesign, enhetens passform og produktets validerte plassering kan være relevante. Brukeren bør følge den konkrete bruksanvisningen fremfor å bytte side på egen hånd.",
        },
        {
          type: "bullets",
          items: [
            "Ørets størrelse og vinkel varierer.",
            "Bruskkammer kan endre hvor kontakten faktisk hviler.",
            "Hudtilstand og fuktighet påvirker impedans.",
            "Piercinger, sår, eksem og irritasjon kan påvirke sikker kontakt.",
            "Høyre–venstre-valg må bygge på produktets eller studiens konkrete dokumentasjon.",
          ],
        },
      ],
    },
    {
      id: "sikkerhet-og-kontakt",
      eyebrow: "Praktisk bruk",
      title: "Hva bør vurderes ved kontakt med huden i øret?",
      blocks: [
        {
          type: "paragraph",
          text: "Ørehuden er utsatt for trykk, friksjon, fuktighet og lokal irritasjon. En elektrode må derfor gi stabil kontakt uten å skape unødig smerte eller skade. Komfort er ikke bare et designspørsmål; det påvirker også om en protokoll kan gjennomføres konsistent.",
        },
        {
          type: "bullets",
          items: [
            "Ikke plasser elektroder over åpne sår, aktiv hudinfeksjon eller kraftig irritasjon.",
            "Rengjør kontaktflater slik produktinformasjonen beskriver.",
            "Stopp ved skarp smerte, brennende følelse, vedvarende nummenhet eller tydelig hudreaksjon.",
            "Unngå improviserte elektrodeplasseringer og høyere intensitet enn veiledet.",
            "Vurder medisinsk råd ved implantert elektronisk utstyr, hjerterytmeproblemer, graviditet, anfallshistorikk eller aktiv behandling.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Øret er en tilgangsflate – ikke et risikofritt område",
          paragraphs: [
            "Ikke-invasiv bruk unngår kirurgi, men lokal hudkontakt, elektriske parametere og individuelle medisinske forhold må fortsatt tas på alvor.",
          ],
        },
      ],
    },
    {
      id: "slik-leser-du-en-plasseringspastand",
      eyebrow: "Kritisk sjekkliste",
      title: "Hvordan vurderer du en påstand om «riktig vaguspunkt» i øret?",
      blocks: [
        {
          type: "numbered",
          items: [
            "Er ørelandemerket definert presist – cymba, cavum, tragus, øregang eller øreflipp?",
            "Vises begge elektrodekontakter og strømveien, ikke bare ett markert punkt?",
            "Er anatomikilden en liten disseksjonsstudie, en histologisk studie, en modell eller funksjonell måling?",
            "Er individuell variasjon og overlapping med andre nerver nevnt?",
            "Er målengasjement dokumentert med den konkrete enheten og protokollen?",
            "Skilles følelse, nerveaktivering, biomarkør og brukerutfall tydelig?",
            "Er påstanden begrenset til produktets faktiske tiltenkte bruk?",
          ],
        },
        {
          type: "callout",
          tone: "summary",
          title: "Vær skeptisk til ett magisk punkt",
          paragraphs: [
            "Øreanatomi er distribuert, variabel og overlappende. En troverdig forklaring bruker landemerker og sannsynlighet, ikke et absolutt kart som lover samme nerveeffekt hos alle.",
          ],
        },
      ],
    },
    {
      id: "neuvago-kontekst",
      eyebrow: "Tydelige produktgrenser",
      title: "Hva betyr øreanatomi for Neuvago?",
      blocks: [
        {
          type: "paragraph",
          text: "Neuvago er et eksternt, ørebasert velværesystem. Ørekomponentens form, kontaktflate og anbefalte plassering er en del av den konkrete produktdesignen. Anatomisk litteratur brukes til å forklare hvorfor øret er relevant som tilgangsområde, men den erstatter ikke produktspesifikk testing.",
        },
        {
          type: "paragraph",
          text: "Neuvago skal derfor ikke beskrives som om enhver bruker får selektiv aktivering av én bestemt nerve bare fordi komponenten sitter i øret. Produktets dokumentasjon må knytte sammen passform, elektriske parametere, sikkerhet, brukeropplevelse og eventuelle målengasjementsdata.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Anatomisk plausibilitet er kontekst – ikke ferdig produktbevis",
          paragraphs: [
            "Neuvago skal ikke love at prikking beviser vagusaktivering, at et bestemt ørepunkt garanterer en fysiologisk effekt, eller at forskning med andre elektroder og protokoller gjelder direkte.",
            "Påstander må bygge på Neuvagos tiltenkte bruk, tekniske dokumentasjon, sikkerhetsinformasjon og direkte relevant produkttesting.",
          ],
        },
        {
          type: "callout",
          tone: "safety",
          title: "Følg den konkrete bruksanvisningen",
          paragraphs: [
            "Bruk riktig side, plassering, kontaktmiddel og intensitetsområde slik gjeldende produktinformasjon beskriver. Ikke eksperimenter med øregang, skadet hud eller alternative elektroder.",
          ],
        },
      ],
    },
  ],

  sources: [
    {
      id: "peuker-filler-2002",
      authors: "Peuker ET, Filler TJ",
      title: "The nerve supply of the human auricle",
      publication: "Clinical Anatomy",
      year: 2002,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/11835542/",
      doi: "10.1002/ca.1089",
      pmid: "11835542",
      note:
        "Klassisk disseksjonsstudie av 14 ører fra sju kadavere, med heterogen fordeling av kraniale og cervikale sensoriske nervebidrag.",
    },
    {
      id: "butt-2020-anatomical-basis",
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
        "Omfattende anatomisk gjennomgang av ABVN, ørets nerveforsyning, sentrale projeksjoner og begrensninger i vanlige kart og målområder.",
    },
    {
      id: "bermejo-2017-concha-canal",
      authors:
        "Bermejo P, López M, Larraya I, Chamorro J, Cobo JL, Ordóñez S, Vega JA",
      title:
        "Innervation of the Human Cavum Conchae and Auditory Canal: Anatomical Basis for Transcutaneous Auricular Nerve Stimulation",
      publication: "BioMed Research International",
      year: 2017,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/28396871/",
      doi: "10.1155/2017/7830919",
      pmid: "28396871",
      note:
        "Histologisk undersøkelse av 11 ytre ører som viste regionale forskjeller i nervetetthet og myeliniserte fibre i cavum conchae og øregangen.",
    },
    {
      id: "frangos-2015-fmri",
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
        "fMRI-studie av 12 friske voksne som sammenlignet venstre cymba conchae med øreflipp og rapporterte aktivitet i klassiske sentrale vagale projeksjoner.",
    },
    {
      id: "badran-2019-technique",
      authors:
        "Badran BW, Yu AB, Adair D, Mappin G, DeVries WH, Jenkins DD, George MS, Bikson M",
      title:
        "Laboratory Administration of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): Technique, Targeting, and Considerations",
      publication: "Journal of Visualized Experiments",
      year: 2019,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
      doi: "10.3791/58984",
      pmid: "30663712",
      note:
        "Metodeartikkel om øremål, elektrodeplassering, kontakt, parametere, persepsjonsterskel og sikker laboratorieadministrasjon av taVNS.",
    },
    {
      id: "kreisberg-2021-current-flow",
      authors:
        "Kreisberg E, Esmaeilpour Z, Adair D, Khadka N, Datta A, Badran BW, Bremner JD, Bikson M",
      title:
        "High-resolution computational modeling of the current flow in the outer ear during transcutaneous auricular Vagus Nerve Stimulation (taVNS)",
      publication: "Brain Stimulation",
      year: 2021,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/34517143/",
      doi: "10.1016/j.brs.2021.09.001",
      pmid: "34517143",
      note:
        "Høyoppløselig modell som viste at elektrodestørrelse og montasje former sensitivitet og romlig strømfordeling i øret.",
    },
    {
      id: "mulazimoglu-2017-posterior-canal",
      authors: "Mulazimoglu S, Flury R, Kapila S, Linder T",
      title:
        "Effects of a sensory branch to the posterior external ear canal: coughing, pain, Ramsay Hunt's syndrome and Hitselberger's sign",
      publication: "Journal of Laryngology & Otology",
      year: 2017,
      type: "research-article",
      url: "https://pubmed.ncbi.nlm.nih.gov/28173896/",
      doi: "10.1017/S0022215117000160",
      pmid: "28173896",
      note:
        "Anatomisk og klinisk beskrivelse av en sensorisk gren til bakre øregang, med bidrag fra Arnold-grenen og kommuniserende fibre.",
    },
  ],

  relatedSlugs: [
    "aurikulaer-vagusnervestimulering",
    "transkutan-vagusnervestimulering",
    "ikke-invasiv-vagusnervestimulering",
    "vagusnerven",
    "vagusnervestimulering",
  ],
  relatedLinks: [
    {
      title: "Hvordan velge vagusnervestimulator",
      description:
        "Sett øreanatomi inn i en praktisk produktsjekk for plassering, elektrode, protokoll, dokumentasjon, sikkerhet og gjeldende kjøpsvilkår.",
      href: "/no/kunnskap/hvordan-velge-vagusnervestimulator",
      label: "Åpne kjøpsguiden",
    },
    {
      title: "Ørebasert vs. hals-/nakkebasert VNS",
      description:
        "Sett øreanatomi inn i et nøytralt metodekart som forklarer forskjellen mellom aurikulær og cervikal ikke-invasiv VNS.",
      href: "/no/kunnskap/orebasert-vs-halsbasert-vns",
      label: "Se metodesammenligningen",
    },
    {
      title: "Aurikulær VNS i forskningen",
      description:
        "Gå fra begrepsforklaring og øreanatomi til den samlede forskningsoversikten om taVNS, stimuleringssteder, elektroder, parametere, sham, target engagement og tolkningsgrenser.",
      href: "/no/forskning/aurikulaer-vagusnervestimulering",
      label: "Utforsk aurikulær VNS-forskning",
    },
    {
      title: "Transkutan VNS i forskningen",
      description:
        "Gå fra begrepsforklaring til den norske metodeoversikten om anatomisk tilgang, elektriske parametere, sham, target engagement og tolkningsgrenser.",
      href: "/no/forskning/transkutan-vagusnervestimulering",
      label: "Utforsk tVNS-forskningen",
    },
    {
      title: "Aurikulær vagusnervestimulering",
      description:
        "Les den norske metodeguiden til taVNS, øreplassering, parametere, kontrollbetingelser og ansvarlig tolkning.",
      href: "/no/kunnskap/aurikulaer-vagusnervestimulering",
      label: "Les taVNS-guiden",
    },
    {
      title: "Aurikulær VNS på engelsk",
      description:
        "Se den engelske oversiktssiden om ear-based VNS, taVNS, plassering, komfort og produktgrenser.",
      href: "/learn/auricular-vagus-nerve-stimulation",
      label: "Les den engelske guiden",
    },
    {
      title: "Transkutan VNS-forskning",
      description:
        "Gå til forskningsbibliotekets temaside om tVNS, taVNS, stimuleringssteder, protokoller og rapporteringsstandarder.",
      href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
      label: "Utforsk tVNS-forskning",
    },
    {
      title: "Frangos 2015 – fMRI",
      description:
        "Les Neuvagos sammendrag av studien som sammenlignet cymba conchae og øreflipp under fMRI.",
      href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
      label: "Les studiesammendraget",
    },
    {
      title: "Sikkerhet og tolerabilitet",
      description:
        "Se forskning om lokal følelse, hendelser, kontraindikasjoner og hvorfor ikke-invasiv ikke betyr risikofri.",
      href: "/research/topics/safety-and-tolerability",
      label: "Les om sikkerhet",
    },
    {
      title: "Slik fungerer Neuvago",
      description:
        "Se hvordan ørekomponenten, enheten, appen og veiledede velværerutiner henger sammen i det konkrete systemet.",
      href: "/no/slik-fungerer-det",
      label: "Se hvordan Neuvago fungerer",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
