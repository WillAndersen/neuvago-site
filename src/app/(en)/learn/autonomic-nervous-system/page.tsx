import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Autonomic Nervous System: Sympathetic & Parasympathetic | Neuvago";
const description =
  "Learn what the autonomic nervous system is, how sympathetic, parasympathetic and enteric pathways work, how the brain coordinates them, and why ANS activity is not one simple balance score.";
const path = "/learn/autonomic-nervous-system";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/det-autonome-nervesystemet",
      "x-default": path,
    },
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const divisionRows = [
  [
    "Sympathetic",
    "Thoracolumbar outflow with widespread peripheral ganglia and organ-specific pathways.",
    "Mobilization, vascular tone, sweating, pupil dilation, cardiac and metabolic responses among many other functions.",
    "Not simply the ‘bad’ or ‘stress’ side of the nervous system.",
  ],
  [
    "Parasympathetic",
    "Cranial and sacral outflow; cranial nerves III, VII, IX and X plus pelvic pathways contribute.",
    "Organ-specific control including cardiac slowing, glandular activity, gastrointestinal and pelvic functions.",
    "Not a universal ‘calm mode’ and not equivalent to the vagus nerve alone.",
  ],
  [
    "Enteric",
    "Large neural network embedded in the gastrointestinal tract and connected with sympathetic, parasympathetic and sensory pathways.",
    "Local regulation of motility, secretion, absorption and gastrointestinal reflexes.",
    "Can operate with substantial local autonomy; it is not just an extension of the vagus nerve.",
  ],
] as const;

const organRows = [
  [
    "Heart",
    "Sympathetic and parasympathetic inputs can both influence rate and conduction, with context-dependent interaction.",
    "Heart rate alone does not reveal the complete autonomic state.",
  ],
  [
    "Blood vessels",
    "Systemic vascular tone is predominantly under sympathetic control, with important regional differences.",
    "A simple sympathetic-versus-parasympathetic table is incomplete for vascular regulation.",
  ],
  [
    "Pupil",
    "Sympathetic pathways support dilation while parasympathetic pathways support constriction.",
    "This familiar reciprocal example should not be generalized to every organ.",
  ],
  [
    "Sweat glands",
    "Sweating is primarily sympathetic, with postganglionic cholinergic signaling as an important exception to the usual neurotransmitter shorthand.",
    "‘Sympathetic = norepinephrine everywhere’ is incorrect.",
  ],
  [
    "Gastrointestinal tract",
    "Enteric circuits interact with both sympathetic and parasympathetic inputs.",
    "Digestive function cannot be reduced to ‘parasympathetic on, sympathetic off.’",
  ],
  [
    "Bladder and pelvic organs",
    "Storage and voiding depend on coordinated autonomic and somatic pathways.",
    "One autonomic branch does not independently explain the whole behavior.",
  ],
] as const;

type EditorialRow = readonly [string, ...string[]];

function EditorialCardGrid({
  caption,
  rows,
  fieldLabels,
}: {
  caption: string;
  rows: readonly EditorialRow[];
  fieldLabels: readonly string[];
}) {
  return (
    <div className="mt-10" data-editorial-card-grid>
      <p className="max-w-3xl text-sm leading-6 text-[#625b52]">{caption}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {rows.map(([title, ...fields]) => (
          <article
            key={title}
            className="rounded-[1.5rem] border border-black/8 bg-white/70 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.04)] sm:p-7"
          >
            <h3 className="text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
              {title}
            </h3>
            <dl className="mt-5 space-y-5">
              {fields.map((value, index) => (
                <div key={`${title}-${fieldLabels[index] ?? index}`}>
                  <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[#84796e]">
                    {fieldLabels[index] ?? `Detail ${index + 1}`}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[#5f5a52] sm:text-base">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

const measurementRows = [
  [
    "Heart rate",
    "Useful end-organ signal influenced by autonomic input and many non-autonomic factors.",
    "Not a direct readout of total sympathetic or parasympathetic activity.",
  ],
  [
    "Heart rate variability (HRV)",
    "Can characterize beat-to-beat variation and selected aspects of cardiac autonomic modulation under defined conditions.",
    "Not a validated single measure of whole-body ANS balance or direct sympathetic outflow.",
  ],
  [
    "Blood pressure / baroreflex measures",
    "Useful for cardiovascular autonomic assessment in appropriate protocols.",
    "Do not describe autonomic control of every organ.",
  ],
  [
    "Skin conductance / sweating",
    "Can reflect sudomotor sympathetic activity in the measured territory.",
    "Does not measure parasympathetic activity or the full autonomic nervous system.",
  ],
] as const;

const sections = [
  {
    id: "direct-answer",
    eyebrow: "Direct answer",
    title: "The ANS is a distributed control network, not one automatic switch",
    paragraphs: [
      "The autonomic nervous system (ANS) coordinates involuntary and semi-automatic physiological functions such as cardiovascular control, digestion, thermoregulation, pupil responses, glandular activity and pelvic-organ function.",
      "A conventional anatomical framework describes sympathetic, parasympathetic and enteric divisions. That framework is useful, but modern physiology also emphasizes sensory input, central autonomic networks, organ-specific pathways and the fact that sympathetic and parasympathetic outputs do not always behave as simple opposites.",
      "This page owns the broad ‘what is the autonomic nervous system?’ question. Nervous-system regulation remains the practical everyday-regulation page, while the dedicated comparison page owns ‘sympathetic vs parasympathetic.’",
    ],
  },
  {
    id: "three-divisions",
    eyebrow: "Core architecture",
    title: "Sympathetic, parasympathetic and enteric are three useful divisions",
    paragraphs: [
      "Sympathetic and parasympathetic efferent pathways commonly use a two-neuron chain: a preganglionic neuron with its cell body in the central nervous system and a postganglionic neuron in a peripheral ganglion.",
      "The enteric nervous system forms a large neural network within the gastrointestinal tract. It interacts with extrinsic autonomic pathways but can organize many local gastrointestinal functions through its own circuitry.",
      "These divisions are anatomical and physiological categories. They should not be turned into personality types, moral labels or a binary score for whether a person is ‘regulated.’",
    ],
  },
  {
    id: "central-autonomic-network",
    eyebrow: "Brain and body",
    title: "Autonomic control is coordinated centrally as well as peripherally",
    paragraphs: [
      "The ANS is often introduced as a peripheral system, but autonomic output is continuously shaped by brainstem, hypothalamic, limbic and cortical networks that integrate internal sensory information with behavior, emotion, posture, temperature, respiration and other demands.",
      "The term central autonomic network is used for interconnected regions that help coordinate visceromotor, neuroendocrine, respiratory and behavioral responses. This makes autonomic regulation state-dependent and context-dependent rather than a simple reflex from one organ to one nerve.",
      "Sensory information also matters. Visceral afferents carry signals toward the central nervous system, where they contribute to reflexes and broader regulatory decisions.",
    ],
  },
  {
    id: "sympathetic-parasympathetic",
    eyebrow: "Two major efferent systems",
    title: "Sympathetic and parasympathetic activity are related—but not one balance axis",
    paragraphs: [
      "Textbook diagrams often place sympathetic and parasympathetic activity on opposite ends of one scale. That works for some examples, but research on autonomic space and cardiac control shows that the two branches can change reciprocally, independently or together.",
      "Co-activation has been described in several reflexes and physiological contexts. At rest, some organs also receive ongoing tonic input rather than waiting for one branch to switch on after the other switches off.",
      "A better question is therefore: which organ, pathway, time scale and physiological task are being measured? The answer can differ from one target tissue to another.",
    ],
  },
  {
    id: "organ-specific-control",
    eyebrow: "Organ-specific physiology",
    title: "The same autonomic label can mean different things in different organs",
    paragraphs: [
      "The effect of autonomic signaling depends on the target organ, receptor, neurotransmitter, background state and reflex context. Sympathetic activation does not produce one identical effect everywhere, and parasympathetic pathways are not distributed uniformly throughout the body.",
      "Examples such as pupil size, heart rate and digestion are useful teaching tools, but they should not be generalized into a universal rule that every body system is controlled by two perfectly opposing branches.",
    ],
  },
  {
    id: "neurotransmitters",
    eyebrow: "Signal chemistry",
    title: "Acetylcholine and norepinephrine are important—but the shorthand has exceptions",
    paragraphs: [
      "Preganglionic sympathetic and parasympathetic neurons generally release acetylcholine. Most postganglionic parasympathetic neurons also use acetylcholine, while many postganglionic sympathetic neurons use norepinephrine.",
      "Important exceptions matter. Sympathetic pathways to eccrine sweat glands are classically cholinergic, and the adrenal medulla receives preganglionic sympathetic input before releasing catecholamines into the circulation.",
      "This is another reason broad labels should not be mistaken for one uniform body-wide signal.",
    ],
  },
  {
    id: "measurement",
    eyebrow: "Measurement",
    title: "No single consumer metric measures the whole ANS",
    paragraphs: [
      "Autonomic physiology can be studied through cardiovascular, sudomotor, pupillary, respiratory and other signals. Each method samples a particular output or reflex under particular conditions.",
      "HRV is widely used, but current methodological guidance cautions against treating it as a specific measure of sympathetic outflow or a complete ‘sympathovagal balance’ score. Recording method, duration, respiration, posture, activity, age and analysis choices all affect interpretation.",
      "A wearable value can be useful within a consistent context, but it should not be translated automatically into a diagnosis, a direct vagus score or a whole-body nervous-system state.",
    ],
  },
  {
    id: "vagus-relationship",
    eyebrow: "Where the vagus fits",
    title: "The vagus nerve is important—but it is not the whole autonomic nervous system",
    paragraphs: [
      "The vagus nerve carries a large share of cranial parasympathetic outflow to thoracic and abdominal organs and also carries substantial visceral sensory information toward the brainstem.",
      "That does not make the vagus synonymous with the parasympathetic nervous system. Other cranial and sacral pathways contribute to parasympathetic function, while sympathetic, enteric, spinal sensory and central regulatory networks also participate in autonomic physiology.",
      "General ANS physiology is therefore context for vagus-nerve education. It is not product evidence for Neuvago and does not show that one intervention has ‘balanced the ANS.’",
    ],
  },
  {
    id: "clinical-boundary",
    eyebrow: "Clinical boundary",
    title: "Everyday activation is not the same as autonomic disease",
    paragraphs: [
      "Heart pounding during exertion, sweating in heat, pupil changes in light or digestive changes around a meal can all involve autonomic physiology without indicating disease.",
      "Persistent fainting, marked orthostatic symptoms, unexplained sweating abnormalities, bladder dysfunction, severe gastrointestinal dysmotility or other concerning symptoms can have many causes and may require clinical assessment.",
      "This page is educational. It does not diagnose dysautonomia, autonomic neuropathy or any other condition from symptoms, wearable data or subjective feelings.",
    ],
  },
] as const;

const sources = [
  {
    id: "A-001",
    title: "Anatomy, Autonomic Nervous System",
    source: "Waxenbaum JA, Reddy V, Das JM · StatPearls / NCBI Bookshelf",
    year: "Updated 2025",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK539845/",
  },
  {
    id: "B-001",
    title: "Overview of the Anatomy, Physiology, and Pharmacology of the Autonomic Nervous System",
    source: "Wehrwein EA, Orer HS, Barman SM · Comprehensive Physiology",
    year: "2016",
    href: "https://pubmed.ncbi.nlm.nih.gov/27347892/",
  },
  {
    id: "B-002",
    title: "Basics of autonomic nervous system function",
    source: "Gibbons CH · Handbook of Clinical Neurology",
    year: "2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/31277865/",
  },
  {
    id: "B-003",
    title: "Physiology and Pathophysiology of the Autonomic Nervous System",
    source: "Benarroch EE · Continuum",
    year: "2020",
    href: "https://pubmed.ncbi.nlm.nih.gov/31996619/",
  },
  {
    id: "B-004",
    title: "Anatomy and physiology of the autonomic nervous system: implication on diagnostic and monitoring tools",
    source: "Roche F et al. · Revue Neurologique",
    year: "2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/38176987/",
  },
  {
    id: "B-005",
    title: "Autonomic determinism and the doctrine of autonomic space",
    source: "Berntson GG, Cacioppo JT, Quigley KS · Psychological Review",
    year: "1991",
    href: "https://pubmed.ncbi.nlm.nih.gov/1660159/",
  },
  {
    id: "B-006",
    title: "Reflexly evoked coactivation of cardiac vagal and sympathetic motor outflows",
    source: "Paton JFR et al. · Clinical and Experimental Pharmacology and Physiology",
    year: "2006",
    href: "https://pubmed.ncbi.nlm.nih.gov/17184509/",
  },
  {
    id: "B-007",
    title: "Guidelines for rigor and reproducibility of heart rate variability within human cardiovascular research",
    source: "Carter JR et al. · American Journal of Physiology-Heart and Circulatory Physiology",
    year: "2026",
    href: "https://pubmed.ncbi.nlm.nih.gov/42495990/",
  },
] as const;

export default function AutonomicNervousSystemPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    keywords: [
      "autonomic nervous system",
      "ANS",
      "sympathetic nervous system",
      "parasympathetic nervous system",
      "enteric nervous system",
      "autonomic regulation",
      "sympathetic vs parasympathetic",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Autonomic nervous system", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-search-dominance-1e1b="autonomic-nervous-system">
      <JsonLd data={structuredData} idPrefix="learn-autonomic-nervous-system" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Foundation guide · autonomic physiology
          </p>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Autonomic nervous system: how the body coordinates internal function
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            A clear guide to sympathetic, parasympathetic and enteric pathways—plus the central networks, sensory signals and organ-specific control that make the ANS more complex than “fight or flight” versus “rest and digest.”
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/no/kunnskap/det-autonome-nervesystemet" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">
              Les på norsk
            </Link>
            <Link href="#direct-answer" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90">
              What is the ANS?
            </Link>
            <Link href="/learn/sympathetic-vs-parasympathetic-nervous-system" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">
              Compare sympathetic vs parasympathetic
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            The autonomic nervous system coordinates many internal functions through sympathetic, parasympathetic and enteric pathways integrated with sensory input and central brain networks. It is not one “stress-versus-calm” switch, and no single wearable metric measures the whole system.
          </p>
        </div>
      </section>

      <section className="border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Three divisions</p>
            <p className="mt-3 text-sm text-[#8a8178]">Useful framework, not a personality test</p>
          </div>
          <div className="min-w-0">
            <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              A practical map of the autonomic nervous system
            </h2>
            <EditorialCardGrid
              caption="High-level divisions. Real autonomic control is organ-specific and centrally coordinated."
              rows={divisionRows}
              fieldLabels={["High-level anatomy", "Examples of function", "Important limit"]}
            />
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20 ${
            index % 2 === 0 ? "bg-[#eee7dd]" : "bg-[#f7f4ef]"
          }`}
        >
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">{section.eyebrow}</p>
              <p className="mt-3 text-sm text-[#8a8178]">{String(index + 1).padStart(2, "0")} / 09</p>
            </div>
            <div className="min-w-0">
              <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">{section.title}</h2>
              <div className="mt-8 max-w-3xl space-y-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#5f5a52] sm:text-lg">{paragraph}</p>
                ))}
              </div>

              {section.id === "sympathetic-parasympathetic" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/sympathetic-vs-parasympathetic-nervous-system" className="font-medium underline underline-offset-4">
                    Compare sympathetic and parasympathetic systems
                  </Link>
                  <Link href="/learn/parasympathetic-nervous-system" className="font-medium underline underline-offset-4">
                    Read the parasympathetic guide
                  </Link>
                </div>
              ) : null}

              {section.id === "organ-specific-control" ? (
                <EditorialCardGrid
                  caption="Why autonomic control must be interpreted organ by organ."
                  rows={organRows}
                  fieldLabels={["What the physiology illustrates", "Interpretation limit"]}
                />
              ) : null}

              {section.id === "measurement" ? (
                <>
                  <EditorialCardGrid
                    caption="Measurements sample parts of autonomic physiology, not a single whole-body balance."
                    rows={measurementRows}
                    fieldLabels={["Can contribute", "Cannot establish alone"]}
                  />
                  <p className="mt-8">
                    <Link href="/research/topics/heart-rate-variability" className="font-medium underline underline-offset-4">
                      Explore the HRV research layer
                    </Link>
                  </p>
                </>
              ) : null}

              {section.id === "vagus-relationship" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/vagus-nerve" className="font-medium underline underline-offset-4">
                    Read the vagus nerve foundation
                  </Link>
                  <Link href="/research/topics/autonomic-regulation" className="font-medium underline underline-offset-4">
                    Explore autonomic regulation research
                  </Link>
                </div>
              ) : null}

              {section.id === "clinical-boundary" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/nervous-system-regulation" className="font-medium underline underline-offset-4">
                    Explore everyday nervous-system regulation
                  </Link>
                  <Link href="/legal/editorial-policy" className="font-medium underline underline-offset-4">
                    Read the claims and review policy
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Reader-visible sources</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            Use the ANS framework without flattening the physiology
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sources.map((source) => (
              <a
                key={source.id}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-white/15 p-5 hover:bg-white/5"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">{source.id}</p>
                <p className="mt-3 text-sm font-medium">{source.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{source.source} · {source.year}</p>
              </a>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/65">
            Reviewed 11 September 2026. This is general physiology, not a diagnostic test and not evidence that a specific intervention or Neuvago produces a defined whole-body autonomic effect.
          </p>
        </div>
      </section>
    </main>
  );
}
