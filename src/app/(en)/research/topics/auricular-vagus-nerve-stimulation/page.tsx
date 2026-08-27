import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title =
  "Auricular VNS Research | taVNS and Ear Anatomy | Neuvago";
const description =
  "Explore auricular VNS research, including taVNS, external-ear anatomy, stimulation sites, electrodes, parameters, sham design, safety and interpretation limits.";
const path = "/research/topics/auricular-vagus-nerve-stimulation";
const norwegianPath =
  "/no/forskning/aurikulaer-vagusnervestimulering";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": norwegianPath,
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

const quickAnswers = [
  {
    title: "Auricular VNS is a method family",
    description:
      "taVNS describes stimulation through the skin at the outer ear, but it does not define one universal site, electrode, dose, sham, or outcome.",
  },
  {
    title: "The outer ear is not a pure vagus zone",
    description:
      "Auricular innervation is mixed and variable. Vagal, trigeminal, cervical, and other sensory contributions can overlap across nearby regions.",
  },
  {
    title: "Sensation is not target engagement",
    description:
      "Tingling or warmth confirms sensory stimulation and contact, but it does not prove selective activation of the auricular vagus branch.",
  },
  {
    title: "Results remain protocol-specific",
    description:
      "A finding from one ear site, device, parameter set, population, or biomarker should not be generalized to every auricular VNS system.",
  },
];

const terminology = [
  {
    title: "Auricular VNS",
    label: "Broad ear-based term",
    description:
      "A general term for vagus-related stimulation approaches using the outer ear as the access point.",
  },
  {
    title: "taVNS",
    label: "Research abbreviation",
    description:
      "Transcutaneous auricular vagus nerve stimulation: stimulation through the skin at auricular locations.",
  },
  {
    title: "ABVN",
    label: "Anatomical branch",
    description:
      "The auricular branch of the vagus nerve. Naming it as the intended target does not itself prove selective activation.",
  },
  {
    title: "Ear VNS",
    label: "Search language",
    description:
      "A plain-language phrase people use before they know the anatomical and protocol distinctions in the literature.",
  },
];

const researchMap = [
  {
    label: "01",
    title: "Ear site",
    description:
      "Cymba, cavum, tragus, earlobe, canal, and mastoid are different anatomical and methodological choices.",
  },
  {
    label: "02",
    title: "Contact",
    description:
      "Electrode area, material, pressure, orientation, gel, and impedance shape the delivered current field.",
  },
  {
    label: "03",
    title: "Dose",
    description:
      "Intensity, frequency, pulse width, waveform, duty cycle, session length, and total exposure belong together.",
  },
  {
    label: "04",
    title: "Control",
    description:
      "Sham conditions must be assessed for sensation, blinding, and possible physiological activity.",
  },
  {
    label: "05",
    title: "Outcome",
    description:
      "fMRI, EEG, HRV, pupil measures, symptoms, and clinical outcomes answer different questions.",
  },
];

const nerveSupplyRows = [
  [
    "Auricular branch of the vagus nerve",
    "The primary branch auricular VNS aims to engage",
    "Distribution and density vary, and selective activation is not guaranteed",
  ],
  [
    "Great auricular nerve",
    "A cervical sensory nerve with substantial auricular coverage",
    "May contribute to sensation and control-condition responses",
  ],
  [
    "Auriculotemporal nerve",
    "A trigeminal branch supplying parts of the external ear",
    "Sensory activation cannot automatically be labelled vagal",
  ],
  [
    "Lesser occipital nerve",
    "A cervical contribution to posterior auricular regions",
    "Posterior-ear and mastoid stimulation may recruit multiple pathways",
  ],
  [
    "Facial-nerve-related contributions",
    "Small and variable auricular connections have been described",
    "Their functional role in taVNS remains incompletely mapped",
  ],
];

const siteRows = [
  [
    "Cymba conchae",
    "A common active location in taVNS and neuroimaging studies",
    "Small and irregular geometry can complicate reproducible contact",
  ],
  [
    "Cavum conchae",
    "Used alone or together with adjacent concha regions",
    "Innervation and electrode geometry vary across protocols",
  ],
  [
    "Tragus",
    "Common in physiological and parameter studies",
    "Other sensory nerves may contribute to the experience",
  ],
  [
    "Earlobe",
    "Frequently used as sham or somatosensory control",
    "It may not be physiologically inert and can feel different from active sites",
  ],
  [
    "External auditory canal",
    "Relevant to Arnold's nerve and anatomical discussions",
    "It is not equivalent to a surface electrode on the concha",
  ],
  [
    "Mastoid region",
    "An emerging posterior location with easier contact geometry",
    "Current fMRI evidence is early and does not establish selective ABVN targeting",
  ],
];

const contactVariables = [
  {
    title: "Electrode area",
    description:
      "Changes local current density and how concentrated or diffuse the field may be.",
  },
  {
    title: "Electrode shape",
    description:
      "Determines which parts of an irregular ear region actually receive contact.",
  },
  {
    title: "Material and medium",
    description:
      "Influence impedance, stability, skin comfort, and the consistency of current delivery.",
  },
  {
    title: "Mechanical pressure",
    description:
      "Can improve contact while also creating pressure sensation or discomfort of its own.",
  },
  {
    title: "Inter-electrode spacing",
    description:
      "Affects current direction, local field geometry, and comparability between devices.",
  },
  {
    title: "Movement and fit",
    description:
      "Shifting contact can change dose, sensation, artefact, and session reproducibility.",
  },
];

const doseRows = [
  [
    "Intensity",
    "Current or voltage during stimulation",
    "The same nominal value can produce different current density and sensation",
  ],
  [
    "Pulse width",
    "Duration of each electrical pulse",
    "Changes charge per pulse and must be considered with frequency",
  ],
  [
    "Frequency",
    "Number of pulses per second",
    "A frequency result in one protocol is not a universal optimum",
  ],
  [
    "Waveform",
    "Monophasic, biphasic, or other pulse geometry",
    "Influences net charge, comfort, and tissue interaction",
  ],
  [
    "Duty cycle",
    "Relationship between stimulation-on and stimulation-off periods",
    "Determines how much of a nominal session is active exposure",
  ],
  [
    "Session length",
    "Minutes of planned or active stimulation",
    "A short laboratory exposure is not equivalent to repeated home use",
  ],
  [
    "Programme duration",
    "Number of sessions, days, or weeks",
    "Cumulative exposure must be separated from one-session dose",
  ],
];

const shamRows = [
  [
    "Earlobe",
    "Simple, accessible, and often treated as a non-vagal control",
    "May produce strong sensation and may not be biologically inert",
  ],
  [
    "Lower intensity",
    "Keeps the same anatomical site and some sensory similarity",
    "May still influence biology or reveal group assignment",
  ],
  [
    "Brief ramp or start-up stimulation",
    "Creates an initial sensation before current stops",
    "The disappearing sensation can weaken blinding over time",
  ],
  [
    "Alternative auricular site",
    "May better match the ear-based experience",
    "Nerve supply can overlap with the active site",
  ],
  [
    "No current",
    "Clearly inactive electrically",
    "Blinding is usually poor when active stimulation is noticeable",
  ],
];

const evidenceLevels = [
  {
    title: "Anatomy",
    description:
      "Cadaver and anatomical reviews map probable nerve supply, but do not demonstrate selective activation by a specific device.",
  },
  {
    title: "Target engagement",
    description:
      "Neuroimaging or neurophysiology may support a mechanistic hypothesis under a particular protocol.",
  },
  {
    title: "Physiological marker",
    description:
      "HRV, heart rate, pupil, EEG, or salivary measures can change for many reasons and require careful controls.",
  },
  {
    title: "Subjective outcome",
    description:
      "Symptoms, comfort, or perceived state answer different questions than acute mechanistic signals.",
  },
  {
    title: "Clinical outcome",
    description:
      "A defined patient-centred endpoint requires its own trial design, comparator, follow-up, and interpretation.",
  },
];

const studyHighlights = [
  {
    title: "The nerve supply of the human auricle",
    source: "Peuker & Filler, 2002",
    design: "Cadaver anatomy",
    finding:
      "The study described heterogeneous auricular nerve distribution and prominent great auricular nerve contributions on both surfaces.",
    limit:
      "Fourteen ears from seven cadavers cannot define a universal selective taVNS target.",
    href: "https://pubmed.ncbi.nlm.nih.gov/11835542/",
  },
  {
    title: "External-ear stimulation and central projections",
    source: "Frangos et al., 2015",
    design: "Human fMRI",
    finding:
      "The study reported an activation pattern interpreted in relation to central vagal projections under one auricular protocol.",
    limit:
      "The result belongs to the studied site, dose, control, and imaging analysis—not every ear device.",
    href: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
  },
  {
    title: "Parameter-specific acute heart-rate effects",
    source: "Badran et al., 2018",
    design: "Small sequential crossover experiments",
    finding:
      "Different frequency and pulse-width combinations produced different acute heart-rate responses.",
    limit:
      "Small samples and brief pulse trains do not establish a universal optimal dose.",
    href: "https://pubmed.ncbi.nlm.nih.gov/29716843/",
  },
  {
    title: "Laboratory administration of taVNS",
    source: "Badran et al., 2019",
    design: "Methods paper",
    finding:
      "The paper described ear measurement, electrode placement, contact, perceptual thresholding, and stimulation settings.",
    limit:
      "Reproducible administration is not the same as clinical efficacy or product-specific safety.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
  },
  {
    title: "Respiration-gated auricular stimulation",
    source: "Sclocco et al., 2019",
    design: "Controlled multimodal 7T fMRI",
    finding:
      "Exhalation-gated cymba stimulation produced stronger responses in several studied brainstem regions and cardiovagal modulation.",
    limit:
      "A specialised gated fMRI protocol cannot be transferred directly to ordinary home use.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30803865/",
  },
  {
    title: "Anatomical basis for taVNS",
    source: "Butt et al., 2020",
    design: "Anatomical review",
    finding:
      "The review synthesised evidence on ABVN anatomy, central projections, and common stimulation sites.",
    limit:
      "The anatomical evidence base remains limited and partly dependent on a small number of historical dissections.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
  },
  {
    title: "Minimum reporting standards",
    source: "Farmer et al., 2021",
    design: "International consensus",
    finding:
      "The group recommended detailed reporting of anatomy, device, electrode, dose, control, participants, outcomes, and safety.",
    limit:
      "Standards improve future work but cannot recover missing details from older studies.",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    title: "A null result for the P3b ERP",
    source: "Gadeyne et al., 2022",
    design: "Randomised sham- and no-stimulation-controlled crossover study",
    finding:
      "Acute taVNS did not differ from sham or no stimulation on P3b amplitude or latency in healthy participants.",
    limit:
      "One acute ERP design does not rule out every LC-related mechanism or parameter set.",
    href: "https://pubmed.ncbi.nlm.nih.gov/35007840/",
  },
  {
    title: "Safety of taVNS",
    source: "Kim et al., 2022",
    design: "Systematic review and meta-analysis",
    finding:
      "Analyzable studies showed no difference in overall adverse-event risk between active taVNS and control.",
    limit:
      "More than half of included studies did not explicitly state whether adverse events occurred.",
    href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
  },
  {
    title: "Clinical application across 109 studies",
    source: "Gerges et al., 2024",
    design: "Scoping review",
    finding:
      "The review mapped broad clinical use, mostly local reported events, and substantial protocol variability.",
    limit:
      "Parameter and sham reporting were incomplete, and the review was not a full efficacy meta-analysis.",
    href: "https://pubmed.ncbi.nlm.nih.gov/38362860/",
  },
  {
    title: "Mastoid, cymba, and earlobe during fMRI",
    source: "Peng et al., 2026",
    design: "Single-blind sham-controlled concurrent fMRI",
    finding:
      "Mastoid and cymba produced highly similar broad activation patterns; earlobe produced a weaker similar pattern.",
    limit:
      "Twenty-four healthy participants and one acute imaging design do not validate mastoid as a universal ABVN target.",
    href: "https://pubmed.ncbi.nlm.nih.gov/42268178/",
  },
];

const safetyPoints = [
  {
    title: "Common reports are usually local",
    description:
      "Ear pain, tingling, skin irritation, and headache are among the recurring categories in dedicated reviews.",
  },
  {
    title: "Reporting quality remains uneven",
    description:
      "A study that does not mention adverse events has not demonstrated that no events occurred.",
  },
  {
    title: "Tolerability is protocol-specific",
    description:
      "Site, contact, intensity, pulse design, exposure, population, and follow-up all shape the safety interpretation.",
  },
  {
    title: "Product instructions take priority",
    description:
      "A commercial device needs its own risk management, verification, validation, intended use, and final instructions for use.",
  },
];

const transferRows = [
  [
    "Anatomy",
    "Are ear region, side, contact, and orientation comparable?",
    "All ear placements are treated as the same vagal target",
  ],
  [
    "Protocol",
    "Are electrode, dose, timing, and exposure comparable?",
    "One frequency or intensity result becomes a universal recommendation",
  ],
  [
    "Population",
    "Do participants resemble the new users?",
    "Acute data in healthy adults are generalised to every clinical group",
  ],
  [
    "Outcome",
    "Is the same mechanism, biomarker, symptom, or clinical endpoint measured?",
    "fMRI or HRV is presented as proven clinical benefit",
  ],
  [
    "Product",
    "Are device design, controls, and intended use directly relevant?",
    "Another device's evidence is presented as Neuvago evidence",
  ],
];

const relatedPathways = [
  {
    title: "Vagus nerve stimulation research",
    description:
      "Return to the broad VNS evidence layer covering implanted and non-invasive approaches, mechanisms, outcomes, and interpretation limits.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "Explore VNS research",
  },
  {
    title: "Transcutaneous VNS research",
    description:
      "Place auricular stimulation inside the wider tVNS method family, including cervical access, parameters, controls, and target engagement.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Explore tVNS research",
  },
  {
    title: "Safety and tolerability",
    description:
      "Review adverse-event reporting, tolerability, causality, study exclusions, and product-specific safety boundaries.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "Explore safety research",
  },
  {
    title: "Frangos et al. 2015",
    description:
      "Read Neuvago's study summary of foundational human fMRI evidence on electrical stimulation of the external ear.",
    href:
      "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    linkLabel: "Read study summary",
  },
  {
    title: "How to read a VNS study",
    description:
      "Use the 12-step guide to separate anatomy, stimulation parameters, sham design, target engagement and downstream outcomes.",
    href: "/research/how-to-read-a-vns-study",
    linkLabel: "Open research-literacy guide",
  },
  {
    title: "Auricular VNS guide",
    description:
      "Move from the research layer to a plain-language explanation of taVNS, ear placement, comfort, and responsible claims.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Read the guide",
  },
  {
    title: "How Neuvago works",
    description:
      "See the current practical device-and-app explanation, including placement, controls, guided sessions, and everyday routine design.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
];

const externalReferences = [
  {
    title: "The nerve supply of the human auricle",
    source: "Peuker & Filler, Clinical Anatomy, 2002",
    href: "https://pubmed.ncbi.nlm.nih.gov/11835542/",
  },
  {
    title:
      "Non-invasive access to vagus nerve central projections via external-ear stimulation",
    source: "Frangos et al., Brain Stimulation, 2015",
    href: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
  },
  {
    title:
      "Short trains of taVNS have parameter-specific effects on heart rate",
    source: "Badran et al., Brain Stimulation, 2018",
    href: "https://pubmed.ncbi.nlm.nih.gov/29716843/",
  },
  {
    title:
      "Laboratory administration of taVNS: technique, targeting, and considerations",
    source: "Badran et al., Journal of Visualized Experiments, 2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
  },
  {
    title:
      "Respiration and brainstem response to auricular vagus nerve stimulation",
    source: "Sclocco et al., Brain Stimulation, 2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/30803865/",
  },
  {
    title:
      "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
    source: "Butt et al., Journal of Anatomy, 2020",
    href: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
  },
  {
    title:
      "International recommendations for minimum reporting standards in tVNS research",
    source: "Farmer et al., Frontiers in Human Neuroscience, 2021",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    title:
      "taVNS cannot modulate the P3b event-related potential in healthy volunteers",
    source: "Gadeyne et al., Clinical Neurophysiology, 2022",
    href: "https://pubmed.ncbi.nlm.nih.gov/35007840/",
  },
  {
    title:
      "Safety of transcutaneous auricular vagus nerve stimulation",
    source: "Kim et al., Scientific Reports, 2022",
    href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
  },
  {
    title:
      "Clinical application of transcutaneous auricular vagus nerve stimulation",
    source: "Gerges et al., Disability and Rehabilitation, 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/38362860/",
  },
  {
    title:
      "Concurrent taVNS-fMRI at the mastoid and cymba conchae",
    source: "Peng et al., Neuromodulation, 2026",
    href: "https://pubmed.ncbi.nlm.nih.gov/42268178/",
  },
];

function TextCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <h3 className="text-xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
    </article>
  );
}

function TermCard({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
        {label}
      </p>
      <h3 className="mt-3 text-xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
    </article>
  );
}

function LinkCard({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="rounded-[1.75rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <h3 className="text-xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
      <Link
        href={href}
        className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        {linkLabel}
      </Link>
    </article>
  );
}

function ExternalReferenceCard({
  title,
  source,
  href,
}: {
  title: string;
  source: string;
  href: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
        {source}
      </p>
      <h3 className="mt-3 text-xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        Open source
      </a>
    </article>
  );
}

function ResearchTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-black/5 bg-white/60 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <table className="min-w-[760px] border-collapse text-left">
        <caption className="px-6 py-5 text-left text-sm font-medium text-[#1f1f1c]">
          {caption}
        </caption>
        <thead className="border-y border-black/5 bg-[#eee8df]">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-[#6d675f]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${row[0]}-${rowIndex}`}
              className="border-b border-black/5 last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cellIndex}-${cell}`}
                  className="max-w-[28rem] px-6 py-5 align-top text-sm leading-7 text-[#5f5a52]"
                >
                  {cellIndex === 0 ? (
                    <span className="font-medium text-[#1f1f1c]">
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AuricularVagusNerveStimulationResearchPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Research topics",
    datePublished: "2026-08-23",
    dateModified: "2026-08-23",
    keywords: [
      "auricular vagus nerve stimulation research",
      "transcutaneous auricular vagus nerve stimulation",
      "taVNS",
      "auricular VNS",
      "ear vagus nerve stimulation",
      "auricular branch of the vagus nerve",
      "ABVN",
      "cymba conchae",
      "cavum conchae",
      "tragus stimulation",
      "earlobe sham",
      "taVNS parameters",
      "taVNS safety",
      "taVNS target engagement",
      "Neuvago",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Topic Research", path: "/research/topics" },
      { name: "Auricular VNS", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="research-topics-auricular-vagus-nerve-stimulation"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Auricular VNS
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Auricular VNS research: taVNS, ear anatomy, and method limits
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Auricular vagus nerve stimulation uses the outer ear as a
              transcutaneous access point. Research often calls it taVNS, but
              the abbreviation covers multiple ear sites, electrodes, doses,
              controls, populations, and outcomes.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This topic separates anatomy from sensation, target engagement
              from clinical outcomes, and field-wide evidence from
              product-specific claims.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read Frangos 2015
              </Link>
              <Link
                href="/research/topics/transcutaneous-vagus-nerve-stimulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                View wider tVNS research
              </Link>
            </div>
          </div>

          <div className="hidden rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur lg:block">
            <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
              <div className="rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                  Research interpretation map
                </p>
                <h2 className="mt-3 text-2xl font-medium leading-tight">
                  Ear site is only the first layer
                </h2>

                <div className="mt-7 space-y-3">
                  {researchMap.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/60 bg-white/60 p-4"
                    >
                      <div className="flex gap-4">
                        <span className="text-xs font-medium tracking-[0.15em] text-[#8a847b]">
                          {item.label}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Short answer
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Auricular VNS is a method family, not one standardised treatment
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The responsible interpretation is protocol-specific. A result
              can be meaningful without establishing that every ear region or
              every taVNS device produces the same response.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {quickAnswers.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Terms to know
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Similar labels can hide different assumptions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Research language, anatomical language, and user search language
              overlap. The label alone does not define the protocol.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {terminology.map((item) => (
              <TermCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Ear anatomy
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The outer ear has mixed, overlapping, and variable nerve supply
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Cadaver work and anatomical reviews describe vagal,
              trigeminal, cervical, and other contributions. These maps are
              useful probability maps, not a universal guarantee of selective
              activation.
            </p>
          </div>

          <ResearchTable
            caption="Nerves discussed in external-ear research"
            headers={["Nerve or branch", "Research relevance", "Interpretation limit"]}
            rows={nerveSupplyRows}
          />
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Stimulation sites
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Cymba, cavum, tragus, earlobe, and mastoid are different method choices
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A study should report more than “ear stimulation.” Side,
              anatomical region, orientation, and contact area are necessary
              for comparison.
            </p>
          </div>

          <ResearchTable
            caption="Common active and control locations"
            headers={["Location", "How it is used", "Important limitation"]}
            rows={siteRows}
          />
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Electrode and contact
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Contact geometry is part of the biological dose
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The same current setting can create different local fields when
              electrode area, pressure, spacing, material, and impedance differ.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contactVariables.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Electrical dose
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Intensity alone does not describe a taVNS protocol
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Dose belongs to a system of pulse and timing variables. A
              parameter result remains a protocol result rather than a
              universal recommendation.
            </p>
          </div>

          <ResearchTable
            caption="Electrical and timing variables"
            headers={["Parameter", "What it describes", "Interpretation limit"]}
            rows={doseRows}
          />
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Sensation and target engagement
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Tingling confirms sensory contact, not selective vagal engagement
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Because several sensory nerves contribute to the outer ear,
              perceptible stimulation cannot identify which branch was
              activated. Sensation can help calibrate comfort and blinding,
              but it is not mechanism proof.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_14px_50px_rgba(31,31,28,0.05)]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
              Interpretation sequence
            </p>
            <ol className="mt-6 space-y-5">
              {[
                "Electrical contact produces sensory stimulation.",
                "Relevant nerve fibres may or may not be recruited selectively.",
                "Central or peripheral target engagement requires separate evidence.",
                "A biomarker may change without proving a clinical benefit.",
                "Clinical outcomes require their own controlled study design.",
              ].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1f1f1c] text-xs font-medium text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Evidence levels
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Anatomy, target engagement, biomarkers, and outcomes answer different questions
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {evidenceLevels.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Frangos 2015
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Foundational fMRI evidence belongs to one concrete auricular protocol
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Frangos, Ellrich, and Komisaruk reported an fMRI response pattern
              interpreted in relation to central vagal projections. The study
              is important mechanistic context, but it does not make every ear
              site or every device equivalent.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Neuroimaging remains a mechanism or target-engagement layer. It
              is not a clinical outcome and should not be presented as direct
              proof of a product benefit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_14px_50px_rgba(31,31,28,0.05)]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
              Responsible reading
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f5a52] md:text-base">
              <li>Identify the exact active and control locations.</li>
              <li>Record the electrode and stimulation settings.</li>
              <li>Separate activation maps from patient-centred outcomes.</li>
              <li>Consider sensory matching and imaging-analysis choices.</li>
              <li>Avoid transferring the result to an untested device.</li>
            </ul>
            <Link
              href="/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri"
              className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
            >
              Read Neuvago study summary
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Sham and blinding
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Earlobe is a common sham, not a guaranteed biological blank
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A useful sham should resemble the active experience while
              avoiding the hypothesised target. That is difficult when ear
              regions differ in sensation and multiple sensory pathways remain
              active.
            </p>
          </div>

          <ResearchTable
            caption="Common sham strategies and their limitations"
            headers={["Sham strategy", "Potential advantage", "Potential weakness"]}
            rows={shamRows}
          />
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Selected studies
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The field includes anatomy, methods, positive signals, null findings, and safety syntheses
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A credible topic page should make limitations as visible as
              promising results.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {studyHighlights.map((study) => (
              <article
                key={study.title}
                className="rounded-[1.75rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#ece5dc] px-3 py-1 text-xs font-medium text-[#6d675f]">
                    {study.design}
                  </span>
                  <span className="text-xs uppercase tracking-[0.12em] text-[#8a847b]">
                    {study.source}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-medium leading-tight">
                  {study.title}
                </h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8a847b]">
                      Main signal
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                      {study.finding}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8a847b]">
                      Key limit
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                      {study.limit}
                    </p>
                  </div>
                </div>
                <a
                  href={study.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
                >
                  Open source
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Biomarkers and null findings
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Mixed results are part of the evidence, not a problem to hide
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              taVNS has been studied with fMRI, EEG and ERP, pupil measures,
              salivary alpha-amylase, heart rate, HRV, baroreflex, and
              subjective outcomes. None is a universal vagus meter.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_14px_50px_rgba(31,31,28,0.05)]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
              Example null finding
            </p>
            <h3 className="mt-3 text-2xl font-medium leading-tight">
              Gadeyne et al. did not find the expected P3b modulation
            </h3>
            <p className="mt-5 text-sm leading-7 text-[#5f5a52] md:text-base">
              In 39 healthy participants, acute taVNS did not differ from sham
              or no stimulation on P3b amplitude or latency. The result does
              not disprove every proposed LC–noradrenaline mechanism, but it
              does show why mechanism claims need multiple methods and
              replications.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Safety and tolerability
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The overall tolerability pattern is favourable under studied conditions
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Dedicated reviews generally report local and mild events, while
              also showing that safety reporting is incomplete across many
              studies. “Generally well tolerated” does not mean risk-free or
              suitable for everyone.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {safetyPoints.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Emerging site research
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A 2026 fMRI study raises new questions about mastoid, cymba, and earlobe stimulation
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In 24 healthy participants, mastoid and cymba stimulation
              produced highly similar broad activation patterns. Earlobe
              stimulation also produced a weaker similar pattern. No adverse
              events were reported.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This single acute study does not validate mastoid as a universal
              ABVN target. It does support closer testing of site assumptions
              and the biological neutrality of sham conditions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-[#eee8df] p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
              Responsible next questions
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f5a52] md:text-base">
              <li>Can the result be replicated in a larger sample?</li>
              <li>How do current fields differ across the three locations?</li>
              <li>Which sensory nerves contribute to each response?</li>
              <li>Does the pattern persist outside acute fMRI conditions?</li>
              <li>Does it predict any patient-centred outcome?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Reporting standards
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Method description is part of the evidence
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Farmer and an international expert group recommended detailed
              reporting of anatomy, device, electrode, parameters,
              participants, control, outcomes, and adverse events.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              "Define the ear region with clear anatomical terminology.",
              "Report side, electrode size, shape, material, and orientation.",
              "State the delivered intensity and how it was selected.",
              "Report frequency, pulse width, waveform, and duty cycle.",
              "Separate planned session length from active stimulation time.",
              "Describe sham and measure the success of blinding.",
              "Report adverse events, withdrawals, and dose adjustments.",
              "Tie each conclusion to the outcome the study actually measured.",
            ].map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-[1.25rem] border border-black/5 bg-white/60 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1f1f1c] text-xs font-medium text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Generalisability
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Transfer requires a match in anatomy, protocol, population, outcome, and product
            </h2>
          </div>

          <ResearchTable
            caption="Five levels to check before transferring a finding"
            headers={["Level", "Question", "Common error"]}
            rows={transferRows}
          />
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago boundary
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Field research can guide questions, but Neuvago must document its own device
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Auricular research can inform terminology, placement
              communication, monitoring categories, and conservative
              interpretation. It cannot alone establish Neuvago&apos;s exact nerve
              engagement, clinical efficacy, adverse-event rate, or universal
              suitability.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_14px_50px_rgba(31,31,28,0.05)]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
              Product-specific requirements
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#5f5a52] md:text-base">
              <li>Use the final electrode and placement as the reference.</li>
              <li>Align intensity and session guidance with testing and IFU.</li>
              <li>Do not borrow adverse-event percentages from other devices.</li>
              <li>Do not market sensation as proof of vagus activation.</li>
              <li>Keep wellness purpose separate from clinical indications.</li>
              <li>Let risk management and regulatory documentation set safety boundaries.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Related pathways
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Move between anatomy, methods, safety, individual studies, and practical education
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Sources
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Primary research and method sources used in this topic
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {externalReferences.map((item) => (
              <ExternalReferenceCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1c] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-white/60">
            Research summary
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Auricular VNS is scientifically important precisely because the method details matter
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            The evidence includes genuine mechanistic signals, mixed
            biomarker results, useful safety syntheses, and clear knowledge
            gaps. The strongest interpretation keeps every conclusion tied to
            the studied ear site, electrode, dose, control, population, and
            outcome.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/research/topics/transcutaneous-vagus-nerve-stimulation"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c]"
            >
              Explore wider tVNS research
            </Link>
            <Link
              href="/research/topics/safety-and-tolerability"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white"
            >
              Review safety research
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
