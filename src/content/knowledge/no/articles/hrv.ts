import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const hrvArticle = {
  slug: "hrv",
  path: "/no/kunnskap/hrv",
  status: "published",
  wave: "SEARCH-1E",
  order: 105,

  title: "HRV – hva hjertefrekvensvariabilitet måler, og hvordan du tolker det",
  seoTitle: "HRV: hjertefrekvensvariabilitet, måling og tolkning | Neuvago",
  description:
    "Lær hva HRV og pulsvariasjon er, hvordan HRV måles, hva RMSSD og SDNN betyr, hvordan smartklokker måler, og hvorfor høy eller lav HRV må tolkes i kontekst.",
  eyebrow: "HRV, måling og tolkning",
  lead:
    "Hjertefrekvensvariabilitet, HRV, beskriver variasjonen i tidsintervallet mellom påfølgende hjerteslag. Det er et mål på variasjon i rytmen – ikke en karakter på helsen din, ikke en direkte vagusmåling og ikke én universell poengsum for det autonome nervesystemet.",
  shortAnswer: [
    "HRV beskriver hvor mye tidsintervallet mellom hjerteslag varierer over en definert registreringsperiode.",
    "Vanlige mål som RMSSD og SDNN beregner forskjellige sider av variasjonen og kan ikke sammenlignes ukritisk på tvers av målelengde og metode.",
    "Pust, kroppsstilling, tidspunkt, søvn, aktivitet, sykdom, medisiner, alkohol, koffein, temperatur, alder og datakvalitet kan påvirke resultatet.",
    "Smartklokker og ringer bruker ofte PPG og proprietære algoritmer. Verdier fra ulike enheter er derfor ikke nødvendigvis direkte sammenlignbare.",
    "Det finnes ikke én universell HRV-normalverdi som passer alle. Trender hos samme person under like måleforhold er ofte mer informative enn én isolert verdi.",
  ],
  hubSummary:
    "Den generelle norske HRV-guiden: definisjon, RMSSD og SDNN, målemetoder, smartklokker, normalverdier, høy/lav HRV, trender og tolkningsgrenser.",
  hubLabel: "HRV og måling",

  primaryKeyword: "HRV",
  secondaryKeywords: [
    "hjertefrekvensvariabilitet",
    "pulsvariasjon",
    "pulsvariabilitet",
    "HRV måling",
    "HRV måler",
    "måle HRV",
    "HRV smartklokke",
    "HRV klokke",
    "HRV normalverdi",
    "høy HRV",
    "lav HRV",
    "god HRV",
    "RMSSD",
    "SDNN",
    "pNN50",
    "RR intervall",
    "NN intervall",
    "PPG HRV",
    "ECG HRV",
  ],
  searchIntent: "informational",

  publishedAt: "2026-09-11",
  modifiedAt: "2026-09-11",
  readingTimeMinutes: 18,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  sitemapPriority: 0.88,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hva-er-hrv",
      eyebrow: "Kort forklart",
      title: "Hva er HRV – hjertefrekvensvariabilitet?",
      blocks: [
        {
          type: "paragraph",
          text: "Hjertet slår ikke med helt identiske mellomrom. Selv når gjennomsnittspulsen virker stabil, varierer tiden fra ett normalt hjerteslag til det neste. HRV beskriver denne variasjonen matematisk.",
        },
        {
          type: "paragraph",
          text: "HRV beregnes over et bestemt tidsvindu. Derfor er registreringslengde, signaltype, datarensing og målesituasjon en del av selve målet – ikke bare tekniske detaljer rundt tallet.",
        },
        {
          type: "definition",
          term: "HRV – hjertefrekvensvariabilitet",
          definition:
            "Matematisk beskrivelse av variasjonen i tidsintervaller mellom påfølgende hjerteslag over en definert registreringsperiode.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "HRV er variasjon i tid – ikke det samme som puls",
          paragraphs: [
            "To personer kan ha samme gjennomsnittspuls og likevel ha forskjellig HRV.",
            "En høy eller lav HRV-verdi kan ikke tolkes uten å vite hvordan, når og under hvilke forhold målingen ble gjort.",
          ],
        },
      ],
    },
    {
      id: "hvordan-males-hrv",
      eyebrow: "Signal og datakvalitet",
      title: "Hvordan måles HRV?",
      blocks: [
        {
          type: "paragraph",
          text: "Den klassiske referansemetoden er elektrokardiografi, ECG, der tidsintervallet mellom påfølgende R-topper registreres. Etter at artefakter og relevante unormale slag er håndtert, brukes ofte normal-til-normal-intervaller – NN-intervaller – i HRV-analysen.",
        },
        {
          type: "paragraph",
          text: "Forbrukerenheter bruker ofte fotopletysmografi, PPG, som registrerer pulsbølgen i stedet for hjertets elektriske R-topp. PPG-baserte pulsintervaller kan samsvare godt med ECG under rolige forhold, men er ikke fysisk identiske med ECG-baserte RR- eller NN-intervaller.",
        },
        {
          type: "editorial-cards",
          caption: "Tre vanlige signalnivåer – og hvorfor de ikke er helt det samme.",
          items: [
            {
              title: "ECG / RR-intervall",
              fields: [
                {
                  label: "Hva registreres",
                  text: "Tiden mellom elektriske R-topper i hjertets ECG-signal.",
                },
                {
                  label: "Viktig grense",
                  text: "Rå RR-data kan inneholde ektopiske slag eller artefakter og må kvalitetssikres før standard HRV-analyse.",
                },
              ],
            },
            {
              title: "NN-intervall",
              fields: [
                {
                  label: "Hva registreres",
                  text: "Intervaller mellom påfølgende normale sinus-slag etter relevant datarensing.",
                },
                {
                  label: "Viktig grense",
                  text: "Hvordan programvaren oppdager og korrigerer avvik påvirker HRV-resultatet.",
                },
              ],
            },
            {
              title: "PPG / pulsintervall",
              fields: [
                {
                  label: "Hva registreres",
                  text: "Tiden mellom pulsbølger i optisk målt perifer blodstrøm.",
                },
                {
                  label: "Viktig grense",
                  text: "Bevegelse, perifer sirkulasjon, sensorplassering og algoritme kan påvirke målingen.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "rmssd-sdnn-og-andre-mal",
      eyebrow: "Vanlige HRV-mål",
      title: "Hva betyr RMSSD, SDNN, pNN50 og frekvensmål?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV er ikke ett enkelt regnestykke. Ulike mål beskriver forskjellige egenskaper ved signalet, og samme person kan derfor ha flere HRV-verdier som alle er korrekte innenfor sin metode.",
        },
        {
          type: "editorial-cards",
          caption: "Vanlige HRV-mål og den viktigste tolkningsgrensen for hvert mål.",
          items: [
            {
              title: "RMSSD",
              fields: [
                {
                  label: "Hva måles",
                  text: "Rask slag-til-slag-variasjon basert på forskjeller mellom påfølgende NN-intervaller.",
                },
                {
                  label: "Tolkning",
                  text: "Brukes ofte i korte hvilemålinger og er følsomt for kardial vagal modulering, men er ikke en direkte måling av hele vagusnerven.",
                },
              ],
            },
            {
              title: "SDNN",
              fields: [
                {
                  label: "Hva måles",
                  text: "Standardavviket til NN-intervallene i den valgte registreringsperioden.",
                },
                {
                  label: "Tolkning",
                  text: "Avhenger sterkt av hvor lenge det måles. Fem minutter og 24 timer er ikke direkte sammenlignbare.",
                },
              ],
            },
            {
              title: "pNN50",
              fields: [
                {
                  label: "Hva måles",
                  text: "Andelen nabointervaller som avviker mer enn 50 millisekunder.",
                },
                {
                  label: "Tolkning",
                  text: "Følsomt for rask variasjon, men terskelen er konvensjonell og målekvalitet betyr mye.",
                },
              ],
            },
            {
              title: "HF, LF og LF/HF",
              fields: [
                {
                  label: "Hva måles",
                  text: "Frekvensinnhold i variasjonen over bestemte spektrale bånd.",
                },
                {
                  label: "Tolkning",
                  text: "HF kan under definerte forhold reflektere rask vagalt mediert variasjon. LF er ikke et rent sympatisk mål, og LF/HF er ikke en universell sympatisk–parasympatisk balancescore.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "hva-pavirker-hrv",
      eyebrow: "Kontekst",
      title: "Hva påvirker HRV fra dag til dag?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV påvirkes av både stabil bakgrunn og situasjonen rundt selve målingen. Derfor kan et tall endre seg uten at én bestemt fysiologisk mekanisme alene forklarer endringen.",
        },
        {
          type: "editorial-cards",
          caption: "Vanlige forhold som kan endre HRV eller gjøre sammenligningen mindre pålitelig.",
          items: [
            {
              title: "Pust og kroppsstilling",
              fields: [
                {
                  label: "Hvorfor det betyr noe",
                  text: "Respirasjon påvirker rask kardial variasjon, og overgang mellom liggende, sittende og stående endrer autonom og sirkulatorisk belastning.",
                },
              ],
            },
            {
              title: "Søvn, aktivitet og restitusjon",
              fields: [
                {
                  label: "Hvorfor det betyr noe",
                  text: "Søvnmønster, nylig trening, fysisk belastning og restitusjon kan påvirke HRV-trender.",
                },
              ],
            },
            {
              title: "Tidspunkt og temperatur",
              fields: [
                {
                  label: "Hvorfor det betyr noe",
                  text: "Døgnrytme og termoregulatoriske krav gjør at målinger på ulike tidspunkt eller i ulike temperaturer kan avvike.",
                },
              ],
            },
            {
              title: "Helse og påvirkningsfaktorer",
              fields: [
                {
                  label: "Hvorfor det betyr noe",
                  text: "Infeksjon, smerte, sykdom, legemidler, alkohol, koffein, nikotin, hydrering og stress kan bidra til endringer.",
                },
              ],
            },
            {
              title: "Alder og individuelle forskjeller",
              fields: [
                {
                  label: "Hvorfor det betyr noe",
                  text: "HRV endres med alder og varierer betydelig mellom personer, også blant friske.",
                },
              ],
            },
            {
              title: "Signalfeil og rytmeforstyrrelser",
              fields: [
                {
                  label: "Hvorfor det betyr noe",
                  text: "Artefakter, ektopiske slag og rytmeforstyrrelser kan øke eller redusere beregnede HRV-mål og gjøre en forbrukerscore misvisende.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "normalverdi-hoy-og-lav-hrv",
      eyebrow: "Normalverdi og trend",
      title: "Hva er en god HRV – og er høy HRV alltid bedre?",
      blocks: [
        {
          type: "paragraph",
          text: "Det finnes ikke én universell HRV-normalverdi som kan brukes på tvers av alder, kjønn, målemetode, registreringslengde, tidspunkt og enhet. Et tall må sammenlignes med relevante referanser og med samme metrikk.",
        },
        {
          type: "paragraph",
          text: "I mange sammenhenger er lavere HRV statistisk forbundet med høyere alder, sykdom eller belastning. Det betyr ikke at én lav måling diagnostiserer et problem hos en enkeltperson. Høy HRV er heller ikke automatisk bedre; målefeil, ekstraslag og enkelte rytmeforhold kan gi høye verdier.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Sammenlign likt med likt",
          paragraphs: [
            "Bruk samme enhet, samme metrikk, omtrent samme tidspunkt og lignende måleforhold når du følger en trend.",
            "En personlig trend kan være mer meningsfull enn å sammenligne absoluttverdien din med en tilfeldig verdi fra andre personer eller en annen enhet.",
          ],
        },
      ],
    },
    {
      id: "smartklokke-ring-og-hrv-score",
      eyebrow: "Wearables",
      title: "Kan smartklokke eller ring måle HRV pålitelig?",
      blocks: [
        {
          type: "paragraph",
          text: "Mange klokker og ringer estimerer HRV fra PPG, ofte under søvn eller andre rolige perioder. Under gode forhold kan enkelte målinger korrelere godt med ECG-baserte referanser, men ytelsen varierer mellom enheter, algoritmer, situasjoner og HRV-mål.",
        },
        {
          type: "paragraph",
          text: "Forbrukerprodukter kan i tillegg vise en proprietær restitusjons-, stress- eller readiness-score som kombinerer HRV med andre data. En slik score er ikke det samme som den rå HRV-metrikken og kan ikke uten videre sammenlignes mellom produsenter.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Et tall fra en wearable må tolkes sammen med metoden",
          paragraphs: [
            "Sjekk hvilken metrikk enheten viser, når den måler, hvor langt målevinduet er og om verdien kommer fra ECG eller PPG.",
            "Unngå å sammenligne råtall mellom enheter som bruker forskjellige sensorer, tidsvinduer eller algoritmer.",
          ],
        },
      ],
    },
    {
      id: "hrv-og-det-autonome-nervesystemet",
      eyebrow: "Autonom fysiologi",
      title: "Hva kan HRV fortelle om det autonome nervesystemet?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV oppstår i samspill mellom hjertets rytmegenerator, autonom nerveaktivitet, respirasjon, barorefleks, sirkulasjon og andre mekanismer. Derfor kan HRV inneholde informasjon om deler av kardial autonom regulering.",
        },
        {
          type: "paragraph",
          text: "Det betyr ikke at HRV er en direkte måling av hele det sympatiske eller parasympatiske nervesystemet. Særlig den eldre tolkningen der LF representerer sympatisk aktivitet, HF parasympatisk aktivitet og LF/HF en universell «balanse», er for enkel.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "HRV måler ikke hele nervesystemet",
          paragraphs: [
            "Et HRV-tall kan ikke alene fastslå at du er «sympatisk dominant», «parasympatisk aktivert» eller generelt dysregulert.",
          ],
        },
      ],
    },
    {
      id: "hrv-og-vagusnerven",
      eyebrow: "Eget fordypningstema",
      title: "Hva er sammenhengen mellom HRV og vagusnerven?",
      blocks: [
        {
          type: "paragraph",
          text: "Enkelte HRV-mål, særlig rask kardial variasjon som RMSSD og respirasjonsrelatert høyfrekvent HRV under definerte forhold, påvirkes tydelig av vagal efferent kontroll av hjertet.",
        },
        {
          type: "paragraph",
          text: "Det gjør HRV relevant i forskning på vagal regulering, men ikke til en direkte test av hele vagusnerven. Den dedikerte siden om HRV og vagusnerven eier denne sammenhengen og går videre inn i vagal tone, pust og VNS/taVNS-forskning.",
        },
        {
          type: "actions",
          placement: "hrv-vagus-split",
          items: [
            {
              label: "Les om HRV og vagusnerven",
              href: "/no/kunnskap/hrv-og-vagusnerven",
              variant: "primary",
            },
            {
              label: "Utforsk HRV-forskning",
              href: "/research/topics/heart-rate-variability",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    {
      id: "nar-en-hrv-verdi-bor-folges-opp",
      eyebrow: "Helsegrense",
      title: "Når bør du se forbi HRV-tallet?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV fra en forbrukerenhet er ikke et diagnostisk verktøy. Dersom en verdi endrer seg, er det mer nyttig å vurdere målekvalitet og kontekst enn å tolke tallet som en sykdomsmarkør.",
        },
        {
          type: "callout",
          tone: "safety",
          title: "Symptomer veier tyngre enn en wearable-score",
          paragraphs: [
            "Ved ny uregelmessig hjerterytme, besvimelse, brystsmerter, uttalt tungpust eller vedvarende hjertebank bør helsepersonell kontaktes uavhengig av HRV-verdien.",
            "Et avvik i en forbrukerenhet bør ved medisinsk bekymring vurderes med egnet klinisk målemetode – ikke brukes som selvdiagnose.",
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
        "Grunnleggende standarddokument for terminologi, tids- og frekvensdomene, målelengde og metodisk HRV-tolkning.",
    },
    {
      id: "quigley-2024-hrv-guidelines",
      authors:
        "Quigley KS, Gianaros PJ, Norman GJ, Jennings JR, Berntson GG, de Geus EJC",
      title:
        "Publication guidelines for human heart rate and heart rate variability studies in psychophysiology-Part 1: Physiological underpinnings and foundations of measurement",
      publication: "Psychophysiology",
      year: 2024,
      type: "official-guidance",
      url: "https://pubmed.ncbi.nlm.nih.gov/38873876/",
      doi: "10.1111/psyp.14604",
      pmid: "38873876",
      note:
        "Oppdatert metode- og rapporteringsveiledning for HR/HRV fra ECG og PPG, med vekt på signal, fysiologisk grunnlag og tolkningsgrenser.",
    },
    {
      id: "hayano-yuda-2019-pitfalls",
      authors: "Hayano J, Yuda E",
      title: "Pitfalls of assessment of autonomic function by heart rate variability",
      publication: "Journal of Physiological Anthropology",
      year: 2019,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/30867063/",
      doi: "10.1186/s40101-019-0193-2",
      pmid: "30867063",
      note:
        "Kritisk gjennomgang av grensene ved å koble LF, HF og andre HRV-komponenter direkte til sympatisk og parasympatisk aktivitet.",
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
      pmid: "26177817",
      note:
        "Faglig posisjonsdokument om signalanalyse, standardisering og nyere HRV-metoder.",
    },
    {
      id: "petek-2023-wearables",
      authors: "Petek BJ, Al-Alusi MA, Moulson N, et al.",
      title:
        "Consumer Wearable Health and Fitness Technology in Cardiovascular Medicine: JACC State-of-the-Art Review",
      publication: "Journal of the American College of Cardiology",
      year: 2023,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/37438010/",
      doi: "10.1016/j.jacc.2023.04.054",
      pmid: "37438010",
      note:
        "Klinisk oversikt over forbruker-wearables, PPG/ECG, HRV-tolkning, artefakter, individuelle trender og begrensninger ved proprietære målinger.",
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
      pmid: "29668452",
      note:
        "Systematisk gjennomgang av wearable-baserte HRV-målinger, med best samsvar under rolige og kontrollerte forhold.",
    },
  ],

  relatedSlugs: [
    "hrv-og-vagusnerven",
    "det-autonome-nervesystemet",
    "det-sympatiske-nervesystemet",
    "det-parasympatiske-nervesystemet",
    "regulering-av-nervesystemet",
    "vagal-tone",
  ],
  relatedLinks: [
    {
      title: "HRV og vagusnerven",
      description:
        "Fordyp deg i hvilke HRV-mål som påvirkes av kardial vagal kontroll, hva HRV ikke sier om hele vagusnerven, og hva VNS-forskningen viser.",
      href: "/no/kunnskap/hrv-og-vagusnerven",
      label: "Les vagus-fordypningen",
    },
    {
      title: "Forskning på hjertefrekvensvariabilitet",
      description:
        "Se forskningslaget for standarder, fysiologisk tolkning, metodevalg og evidensgrenser.",
      href: "/research/topics/heart-rate-variability",
      label: "Utforsk HRV-forskning",
    },
    {
      title: "HRV-standardene fra 1996",
      description:
        "Les studiesammendraget av det klassiske standarddokumentet for måling og tolkning.",
      href: "/research/studies/task-force-1996-heart-rate-variability-standards",
      label: "Les standardsammendraget",
    },
    {
      title: "Det autonome nervesystemet",
      description:
        "Se den bredere fysiologien rundt sympatisk, parasympatisk og enterisk regulering.",
      href: "/no/kunnskap/det-autonome-nervesystemet",
      label: "Forstå ANS",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
