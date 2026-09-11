import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

export const hrvOgVagusnervenArticle = {
  slug: "hrv-og-vagusnerven",
  path: "/no/kunnskap/hrv-og-vagusnerven",
  status: "published",
  wave: "1B",
  order: 110,

  title: "HRV og vagusnerven – hva sammenhengen faktisk kan fortelle",
  seoTitle: "HRV og vagusnerven: vagal påvirkning og VNS | Neuvago",
  description:
    "Forstå sammenhengen mellom HRV og vagusnerven, hvilke HRV-mål som påvirkes av kardial vagal kontroll, hvorfor HRV ikke er en direkte vagustest, og hva taVNS-forskningen viser.",
  eyebrow: "HRV, vagal regulering og VNS",
  lead:
    "Vagusnerven påvirker hjertets rytme gjennom parasympatiske efferente baner, og derfor er enkelte HRV-mål følsomme for rask kardial vagal modulering. Men HRV er ikke en direkte måling av hele vagusnerven, vagal tone eller generell parasympatisk funksjon – og en HRV-endring beviser ikke at vagusnervestimulering har virket.",
  shortAnswer: [
    "RMSSD og respirasjonsrelatert høyfrekvent HRV brukes ofte som mål som er følsomme for rask kardial vagal påvirkning.",
    "HRV reflekterer hjertets regulering og påvirkes samtidig av pust, puls, barorefleks, aktivitet, måleforhold og andre mekanismer.",
    "HRV kan derfor ikke brukes som en direkte test av hele vagusnerven eller som én universell verdi for «vagal tone».",
    "Studier av taVNS og HRV viser blandede resultater. Fravær av HRV-endring beviser ikke fravær av nevral påvirkning, og en HRV-endring beviser ikke klinisk effekt.",
  ],
  hubSummary:
    "Fordypning i forholdet mellom HRV og vagusnerven: kardial vagal modulering, RMSSD/HF, pust, vagal tone, VNS/taVNS og strenge biomarkørgrenser.",
  hubLabel: "HRV og vagusnerven",

  primaryKeyword: "HRV og vagusnerven",
  secondaryKeywords: [
    "vagusnerven HRV",
    "HRV vagus",
    "vagal HRV",
    "vagal tone HRV",
    "RMSSD vagus",
    "HF HRV vagus",
    "parasympatisk aktivitet HRV",
    "vagusnervestimulering HRV",
    "taVNS HRV",
    "HRV biomarkør VNS",
  ],
  searchIntent: "informational",

  publishedAt: "2026-08-18",
  modifiedAt: "2026-09-11",
  readingTimeMinutes: 14,

  authorId: "john-willander",
  sourceReviewerId: "neuvago-redaksjonen",

  sitemapPriority: 0.82,
  changeFrequency: "monthly",

  sections: [
    {
      id: "hvorfor-vagusnerven-pavirker-hrv",
      eyebrow: "Kardial vagal kontroll",
      title: "Hvorfor kan vagusnerven påvirke HRV?",
      blocks: [
        {
          type: "paragraph",
          text: "Parasympatiske efferente fibre i vagusnerven påvirker særlig sinusknuten og bidrar til raske endringer i tiden mellom hjerteslag. Denne raske moduleringen er en viktig grunn til at enkelte korttidsmål av HRV er følsomme for kardial vagal påvirkning.",
        },
        {
          type: "paragraph",
          text: "Koblingen gjelder imidlertid hjertets regulering – ikke hele vagusnerven. Vagusnerven inneholder flere fibre og funksjoner, og HRV sier ikke direkte noe om for eksempel sensoriske vagale baner til hjernestammen, gastrointestinal innervasjon eller andre grener.",
        },
        {
          type: "callout",
          tone: "summary",
          title: "HRV kan være vagalt påvirket uten å være en vagustest",
          paragraphs: [
            "Et mål kan være fysiologisk følsomt for kardial vagal kontroll og samtidig være for uspesifikt til å beskrive hele nerven.",
          ],
        },
      ],
    },
    {
      id: "rmssd-hf-og-vagal-modulering",
      eyebrow: "Mål som ofte brukes",
      title: "Hvilke HRV-mål er mest relevante for kardial vagal modulering?",
      blocks: [
        {
          type: "editorial-cards",
          caption: "Tre mål som ofte diskuteres i vagal HRV-forskning – med grensene synlige.",
          items: [
            {
              title: "RMSSD",
              fields: [
                {
                  label: "Hvorfor det brukes",
                  text: "Fremhever raske forskjeller mellom påfølgende normale hjerteintervaller og er ofte følsomt for kardial vagal modulering.",
                },
                {
                  label: "Hva det ikke er",
                  text: "En direkte måling av hele vagusnerven eller en generell vagusstyrke.",
                },
              ],
            },
            {
              title: "HF-HRV",
              fields: [
                {
                  label: "Hvorfor det brukes",
                  text: "Høyfrekvent HRV overlapper ofte respirasjonsrelatert sinusarytmi og kan under kontrollerte forhold gi informasjon om rask vagalt mediert kardial variasjon.",
                },
                {
                  label: "Hva det ikke er",
                  text: "Et mål som kan tolkes uten å kjenne pustefrekvens, signal, tidsvindu og analysemetode.",
                },
              ],
            },
            {
              title: "LF/HF",
              fields: [
                {
                  label: "Hvorfor det forekommer",
                  text: "Historisk brukt som et forhold mellom lav- og høyfrekvent spektral effekt.",
                },
                {
                  label: "Hva det ikke er",
                  text: "En validert universell sympatisk–parasympatisk eller vagal balancescore.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pust-og-respiratorisk-sinusarytmi",
      eyebrow: "Respirasjon som nøkkelkontekst",
      title: "Hvorfor pust kan endre vagalt medierte HRV-mål",
      blocks: [
        {
          type: "paragraph",
          text: "Hjertefrekvensen varierer normalt med respirasjonen. Under innpust og utpust endres kardial vagal påvirkning, og dette bidrar til respiratorisk sinusarytmi.",
        },
        {
          type: "paragraph",
          text: "Langsom pust kan derfor endre både amplitude og frekvensfordeling i HRV. Det gjør respirasjon til en sentral kontekstvariabel når man forsøker å tolke et HRV-mål som «vagalt».",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "Endret HRV under pust er ikke automatisk endret «vagal tone»",
          paragraphs: [
            "Pustemønsteret i seg selv påvirker målingen. En fysiologisk respons må skilles fra påstander om en varig eller generell vagal tilstand.",
          ],
        },
      ],
    },
    {
      id: "hrv-er-ikke-vagal-tone",
      eyebrow: "Begrepsgrense",
      title: "Er HRV det samme som vagal tone?",
      blocks: [
        {
          type: "paragraph",
          text: "Begrepet vagal tone brukes ofte løst om parasympatisk eller vagal påvirkning. I forskning kan enkelte kardiale HRV-mål inngå som indirekte markører for vagalt mediert kontroll, men dette gjør ikke HRV og vagal tone til synonymer.",
        },
        {
          type: "paragraph",
          text: "En HRV-verdi påvirkes av flere fysiologiske og metodiske forhold. En enkelt måling kan derfor ikke brukes som en direkte kvantifisering av «styrken» til vagusnerven.",
        },
        {
          type: "actions",
          placement: "hrv-vagal-tone",
          items: [
            {
              label: "Les den generelle HRV-guiden",
              href: "/no/kunnskap/hrv",
              variant: "primary",
            },
            {
              label: "Les om vagal tone",
              href: "/no/kunnskap/vagal-tone",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    {
      id: "ta-vns-og-hrv-forskning",
      eyebrow: "VNS-forskning",
      title: "Hva viser studier av taVNS og HRV?",
      blocks: [
        {
          type: "paragraph",
          text: "HRV er undersøkt som mulig biomarkør for vagal målengasjement ved transkutan aurikulær vagusnervestimulering, taVNS. Begrunnelsen er at vagusnerven påvirker kardial parasympatisk regulering.",
        },
        {
          type: "paragraph",
          text: "Resultatene er ikke entydige. En systematisk oversikt av kontrollerte studier fant endringer i enkelte HRV-mål i noen studier, men betydelig heterogenitet i design, dose og analyse. En levende Bayesian metaanalyse fant sterk støtte for ingen robust akutt effekt på vagalt mediert HRV på tvers av de inkluderte sham-kontrollerte studiene.",
        },
        {
          type: "callout",
          tone: "evidence",
          title: "HRV er ikke en universell positiv kontroll for taVNS",
          paragraphs: [
            "At HRV ikke endres, beviser ikke at ingen sensoriske eller sentrale nervebaner ble påvirket.",
            "At HRV endres, beviser heller ikke en bestemt mekanisme, klinisk effekt eller at funnet gjelder andre enheter og protokoller.",
          ],
        },
      ],
    },
    {
      id: "kan-hrv-vise-om-vns-virker",
      eyebrow: "Biomarkørgrense",
      title: "Kan HRV vise om vagusnervestimulering virker?",
      blocks: [
        {
          type: "paragraph",
          text: "Ikke alene. For at HRV skal brukes som et mål på målengasjement eller mekanisme i en studie, må måleprotokoll, signaltype, respirasjon, statistisk plan og forventet fysiologisk retning være definert på forhånd.",
        },
        {
          type: "paragraph",
          text: "Selv da beskriver HRV et kardialt sluttmål. Det er ikke en direkte registrering fra den aurikulære vagusgrenen eller fra sentrale vagale kjerner.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Biomarkør ≠ klinisk effekt",
          paragraphs: [
            "En endring i en fysiologisk markør må ikke presenteres som bevis på symptomforbedring, behandlingseffekt eller produktnytte uten direkte relevant evidens.",
          ],
        },
      ],
    },
    {
      id: "neuvago-og-hrv",
      eyebrow: "Produktgrense",
      title: "Hva betyr HRV-forskningen for Neuvago?",
      blocks: [
        {
          type: "paragraph",
          text: "Generell forskning på HRV, vagal regulering og taVNS gir fysiologisk og metodisk kontekst. Den er ikke automatisk direkte produktevidens for Neuvago.",
        },
        {
          type: "paragraph",
          text: "Neuvago må ikke beskrives som et produkt som øker HRV, måler vagal tone, dokumenterer vagal målengasjement eller diagnostiserer autonom funksjon uten direkte relevant produktdokumentasjon som støtter den konkrete påstanden.",
        },
        {
          type: "callout",
          tone: "scope",
          title: "Neuvago måler ikke HRV eller vagusfunksjon",
          paragraphs: [
            "Hvis HRV senere brukes i produkt- eller appkontekst, må sensor, algoritme, måleforhold, validert formål og evidensgrunnlag beskrives eksplisitt.",
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
        "Standarddokument for HRV-måling og fysiologisk tolkning, inkludert vagalt mediert kardial variasjon og metodegrenser.",
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
      pmid: "38873876",
      note:
        "Oppdatert metode- og tolkningsveiledning for kardial autonom regulering og HRV.",
    },
    {
      id: "hayano-yuda-2019-pitfalls",
      authors: "Hayano J, Yuda E",
      title: "Pitfalls of assessment of autonomic function by heart rate variability",
      publication: "Journal of Physiological Anthropology",
      year: 2019,
      type: "review",
      url: "https://pubmed.ncbi.nlm.nih.gov/30867063/",
      pmid: "30867063",
      note:
        "Kritisk gjennomgang av forenklet kobling mellom HRV-komponenter og autonome grener.",
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
      pmid: "34473846",
      note:
        "Bayesiansk metaanalyse som fant sterk støtte for ingen robust akutt taVNS-effekt på vagalt mediert HRV i de inkluderte sham-kontrollerte studiene.",
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
      pmid: "37119426",
      note:
        "Systematisk oversikt med blandede HRV-funn og betydelig heterogenitet i studiedesign og stimuleringsdose.",
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
      pmid: "36920567",
      note:
        "Kontrollert studie som ikke fant ytterligere akutt HRV-effekt av taVNS sammenlignet med sham under langsom pust i den undersøkte protokollen.",
    },
  ],

  relatedSlugs: [
    "hrv",
    "vagal-tone",
    "det-autonome-nervesystemet",
    "det-parasympatiske-nervesystemet",
    "regulering-av-nervesystemet",
    "vagusnerven",
    "vagusnervestimulering",
  ],
  relatedLinks: [
    {
      title: "HRV – måling og tolkning",
      description:
        "Gå til den generelle HRV-eieren for normalverdi, smartklokker, RMSSD, SDNN, høy/lav HRV og målemetode.",
      href: "/no/kunnskap/hrv",
      label: "Les den generelle HRV-guiden",
    },
    {
      title: "Forskning på hjertefrekvensvariabilitet",
      description:
        "Se forskningsbibliotekets HRV-tema for standarder, metode, fysiologi og evidensgrenser.",
      href: "/research/topics/heart-rate-variability",
      label: "Utforsk HRV-forskning",
    },
    {
      title: "taVNS og HRV – systematisk oversikt",
      description:
        "Se Neuvagos studiesammendrag av Soltani og kollegers gjennomgang av HRV og barorefleks i taVNS-studier.",
      href: "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review",
      label: "Les taVNS-oversikten",
    },
    {
      title: "HRV-standardene fra 1996",
      description:
        "Les studiesammendraget av standarddokumentet for HRV-måling og fysiologisk tolkning.",
      href: "/research/studies/task-force-1996-heart-rate-variability-standards",
      label: "Les standardsammendraget",
    },
  ],
} as const satisfies NorwegianKnowledgeArticle;
