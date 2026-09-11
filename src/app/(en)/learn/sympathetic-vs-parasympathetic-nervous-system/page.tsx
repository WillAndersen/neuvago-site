import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Sympathetic vs Parasympathetic: Key Differences | Neuvago";
const description =
  "Compare sympathetic and parasympathetic anatomy, signaling and organ effects—and learn why fight-or-flight versus rest-and-digest is useful shorthand, not a complete model of autonomic physiology.";
const path = "/learn/sympathetic-vs-parasympathetic-nervous-system";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
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

const comparisonRows = [
  [
    "Central outflow",
    "Classically thoracolumbar, mainly T1–L2 spinal cord segments.",
    "Classically craniosacral: cranial nerves III, VII, IX and X plus sacral pelvic pathways.",
  ],
  [
    "Ganglia",
    "Often closer to the spinal cord in sympathetic chain or prevertebral ganglia.",
    "Often near or within the target organ.",
  ],
  [
    "Preganglionic transmitter",
    "Acetylcholine.",
    "Acetylcholine.",
  ],
  [
    "Postganglionic transmitter",
    "Often norepinephrine, with important exceptions such as cholinergic sympathetic innervation of sweat glands.",
    "Acetylcholine.",
  ],
  [
    "Distribution",
    "Broad distribution including blood vessels, sweat glands, piloerector muscles and many visceral organs.",
    "More restricted distribution, especially to head, thoracic/abdominal viscera and pelvic organs.",
  ],
  [
    "Popular shorthand",
    "‘Fight or flight.’",
    "‘Rest and digest.’",
  ],
  [
    "Better interpretation",
    "Organ-specific mobilization, vascular, thermoregulatory, metabolic and other functions—not one global stress switch.",
    "Organ-specific cranial and pelvic functions—not one global calm switch.",
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

const organRows = [
  [
    "Heart",
    "Generally increases rate, conduction and contractile support.",
    "Can slow sinus rate and atrioventricular conduction.",
    "Both limbs can be active; end-organ response depends on baseline state and reflex context.",
  ],
  [
    "Pupil",
    "Supports dilation through sympathetic pathways.",
    "Supports constriction through parasympathetic pathways.",
    "A useful reciprocal example, but not a model for every organ.",
  ],
  [
    "Blood vessels",
    "Major neural control of systemic vascular tone is sympathetic.",
    "Limited direct parasympathetic innervation in much of the systemic vasculature.",
    "A two-column ‘opposite effects’ table is incomplete here.",
  ],
  [
    "Sweating",
    "Sympathetic control is central to eccrine sweating.",
    "No equivalent body-wide parasympathetic sweating pathway.",
    "Sympathetic postganglionic fibers to eccrine glands use acetylcholine—an important exception.",
  ],
  [
    "Gastrointestinal tract",
    "Can modify motility, secretion and vascular responses through extrinsic pathways.",
    "Can support gastrointestinal activity through cranial and sacral pathways.",
    "Enteric circuits are a third major part of the physiology.",
  ],
  [
    "Bladder",
    "Contributes to storage-phase coordination.",
    "Contributes to voiding-related pelvic autonomic pathways.",
    "Somatic pathways also participate.",
  ],
] as const;

const sections = [
  {
    id: "direct-answer",
    eyebrow: "Direct comparison",
    title: "They are different autonomic pathways—not a good side and a bad side",
    paragraphs: [
      "The sympathetic and parasympathetic nervous systems are major autonomic efferent systems with different anatomical origins, ganglia, target distributions and common signaling patterns.",
      "The sympathetic system is classically associated with mobilization and ‘fight or flight,’ while the parasympathetic system is associated with ‘rest and digest.’ Those phrases are useful introductions, but they are incomplete: both systems are continuously regulated, many organs are not controlled as simple opposites, and co-activation can occur.",
      "This page owns the comparison question. The broader Autonomic nervous system guide owns the full ANS architecture, and the Parasympathetic nervous system page remains the dedicated parasympathetic owner.",
    ],
  },
  {
    id: "anatomy",
    eyebrow: "Anatomy",
    title: "Thoracolumbar versus cranial and sacral outflow",
    paragraphs: [
      "A conventional anatomical distinction places sympathetic preganglionic neurons mainly in thoracic and upper lumbar spinal cord segments. Their axons project to sympathetic chain or prevertebral ganglia, or directly to adrenal-medullary chromaffin cells.",
      "Parasympathetic preganglionic pathways arise from selected brainstem nuclei associated with cranial nerves III, VII, IX and X and from sacral pelvic pathways. Parasympathetic ganglia are commonly close to or embedded within target organs.",
      "This classical framework is useful for learning anatomy, even as contemporary authors debate whether the traditional autonomic labels capture all visceral sensory and central-regulatory complexity.",
    ],
  },
  {
    id: "signaling",
    eyebrow: "Neurotransmitters",
    title: "Acetylcholine is shared; postganglionic signaling often differs",
    paragraphs: [
      "Both sympathetic and parasympathetic preganglionic neurons generally use acetylcholine at nicotinic receptors in autonomic ganglia.",
      "Many sympathetic postganglionic neurons release norepinephrine at adrenergic receptors, while parasympathetic postganglionic neurons use acetylcholine at muscarinic receptors.",
      "The shorthand has important exceptions. Sympathetic innervation of eccrine sweat glands is cholinergic, and the adrenal medulla functions as a modified sympathetic ganglion that releases catecholamines into the circulation.",
    ],
  },
  {
    id: "fight-flight-rest-digest",
    eyebrow: "Popular shorthand",
    title: "‘Fight or flight’ and ‘rest and digest’ describe patterns, not the whole system",
    paragraphs: [
      "Acute threat or exertion can recruit sympathetic pathways that support cardiovascular, metabolic, pupillary and thermoregulatory responses. Quiet feeding and digestion can involve parasympathetic pathways that support selected gastrointestinal and cardiac functions.",
      "But the body does not repeatedly flip from one pure mode to another. Sympathetic activity contributes to ordinary standing, temperature regulation and blood-pressure control, while parasympathetic activity can continue during states that are not simply restful.",
      "Using the shorthand as a first explanation is reasonable. Using it as a complete diagnosis of a person’s nervous-system state is not.",
    ],
  },
  {
    id: "autonomic-space",
    eyebrow: "Beyond one balance scale",
    title: "Reciprocal change is only one of several possible coordination patterns",
    paragraphs: [
      "The concept of autonomic space was developed to show that sympathetic and parasympathetic control can vary along partly independent dimensions rather than one single continuum.",
      "In some reflexes, one branch rises as the other falls. In others, both can increase, both can decrease, or one can change while the other remains relatively stable.",
      "This matters for consumer language. ‘More parasympathetic’ does not automatically mean ‘less sympathetic,’ and a single end-organ measure cannot usually reveal the state of both branches across the whole body.",
    ],
  },
  {
    id: "organ-by-organ",
    eyebrow: "Target-specific control",
    title: "Compare the branches organ by organ, not slogan by slogan",
    paragraphs: [
      "The physiological effect of an autonomic signal depends on target tissue, receptor distribution, baseline state and central/reflex context.",
      "Some targets show familiar opposing effects. Others are dominated by one branch, receive additional enteric or somatic control, or use signaling exceptions that make a simple two-column diagram misleading.",
    ],
  },
  {
    id: "measurement",
    eyebrow: "Measurement",
    title: "HRV is not a direct sympathovagal balance meter",
    paragraphs: [
      "HRV can quantify variation between heartbeats and may reflect selected aspects of cardiac autonomic modulation when measured and interpreted appropriately.",
      "However, methodological reviews and current guidelines caution against interpreting common HRV metrics as direct measures of sympathetic outflow or a single sympathovagal balance. Respiration, posture, recording length, signal source, activity and analysis method all matter.",
      "The comparison between sympathetic and parasympathetic systems therefore should not be collapsed into one wearable score.",
    ],
  },
  {
    id: "stress-recovery",
    eyebrow: "Everyday context",
    title: "Stress and recovery are coordinated states, not branch labels",
    paragraphs: [
      "Stress responses can involve sympathetic cardiovascular and sudomotor changes, endocrine signaling, respiratory changes, attention and behavior. Recovery likewise involves more than one pathway.",
      "A person can feel calmer without proving a specific parasympathetic change, and a higher heart rate does not by itself prove a pathological sympathetic state.",
      "The practical regulation page is the better owner for everyday calming and recovery strategies; this comparison page stays focused on physiology.",
    ],
  },
  {
    id: "vagus-and-product-boundary",
    eyebrow: "Vagus and product boundary",
    title: "The vagus is parasympathetic-related, but neither ANS branch is a product claim",
    paragraphs: [
      "The vagus nerve carries substantial parasympathetic outflow and visceral sensory information, but the parasympathetic system also includes other cranial and pelvic pathways.",
      "General VNS, taVNS or autonomic research does not establish that Neuvago reduces sympathetic activity, increases parasympathetic activity or ‘balances’ the autonomic nervous system.",
      "Those would be product-specific physiological claims and would require directly relevant product evidence and controlled product documentation.",
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
    id: "A-002",
    title: "Neuroanatomy, Parasympathetic Nervous System",
    source: "Tindle J, Tadi P · StatPearls / NCBI Bookshelf",
    year: "Reference chapter",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK553141/",
  },
  {
    id: "A-003",
    title: "Neuroanatomy, Sympathetic Nervous System",
    source: "Alshak MN, Das JM · StatPearls / NCBI Bookshelf",
    year: "Updated 2023",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK542195/",
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
    title: "Autonomic determinism: modes of autonomic control and autonomic space",
    source: "Berntson GG, Cacioppo JT, Quigley KS · Psychological Review",
    year: "1991",
    href: "https://pubmed.ncbi.nlm.nih.gov/1660159/",
  },
  {
    id: "B-003",
    title: "Reflexly evoked coactivation of cardiac vagal and sympathetic motor outflows",
    source: "Paton JFR et al. · Clinical and Experimental Pharmacology and Physiology",
    year: "2006",
    href: "https://pubmed.ncbi.nlm.nih.gov/17184509/",
  },
  {
    id: "B-004",
    title: "Physiology and Pathophysiology of the Autonomic Nervous System",
    source: "Benarroch EE · Continuum",
    year: "2020",
    href: "https://pubmed.ncbi.nlm.nih.gov/31996619/",
  },
  {
    id: "B-005",
    title: "Guidelines for rigor and reproducibility of heart rate variability within human cardiovascular research",
    source: "Carter JR et al. · American Journal of Physiology-Heart and Circulatory Physiology",
    year: "2026",
    href: "https://pubmed.ncbi.nlm.nih.gov/42495990/",
  },
] as const;

export default function SympatheticVsParasympatheticPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    keywords: [
      "sympathetic vs parasympathetic",
      "sympathetic nervous system vs parasympathetic nervous system",
      "fight or flight vs rest and digest",
      "autonomic nervous system",
      "sympathovagal balance",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Autonomic nervous system", path: "/learn/autonomic-nervous-system" },
      { name: "Sympathetic vs parasympathetic", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-search-dominance-1e1b="sympathetic-vs-parasympathetic">
      <JsonLd data={structuredData} idPrefix="learn-sympathetic-vs-parasympathetic" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Comparison guide · autonomic physiology
          </p>
          <h1 className="mt-6 max-w-[21ch] text-[clamp(3rem,7vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Sympathetic vs parasympathetic nervous system: the useful differences—and the limits
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            Compare anatomy, ganglia, neurotransmitters and organ effects without turning the autonomic nervous system into a simplistic “stress side” versus “calm side” switch.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#direct-answer" className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90">
              See the comparison
            </Link>
            <Link href="/learn/autonomic-nervous-system" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">
              Autonomic nervous system
            </Link>
            <Link href="/learn/parasympathetic-nervous-system" className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70">
              Parasympathetic guide
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            Sympathetic pathways are classically thoracolumbar and support many mobilizing, vascular, thermoregulatory and metabolic functions. Parasympathetic pathways arise from cranial and sacral regions and support organ-specific cranial, cardiac, gastrointestinal and pelvic functions. They can oppose each other, act independently or sometimes be active together.
          </p>
        </div>
      </section>

      <section className="border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Comparison guide</p>
            <p className="mt-3 text-sm text-[#8a8178]">Start here, then keep the exceptions</p>
          </div>
          <div className="min-w-0">
            <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Sympathetic and parasympathetic systems side by side
            </h2>
            <EditorialCardGrid
              caption="Conventional comparison. The sections below explain where this model becomes too simple."
              rows={comparisonRows}
              fieldLabels={["Sympathetic", "Parasympathetic"]}
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
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
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

              {section.id === "organ-by-organ" ? (
                <EditorialCardGrid
                  caption="Selected end organs show why a universal opposition model is incomplete."
                  rows={organRows}
                  fieldLabels={["Sympathetic", "Parasympathetic", "Important nuance"]}
                />
              ) : null}

              {section.id === "autonomic-space" ? (
                <p className="mt-8">
                  <Link href="/learn/autonomic-nervous-system" className="font-medium underline underline-offset-4">
                    See the broader ANS architecture
                  </Link>
                </p>
              ) : null}

              {section.id === "measurement" ? (
                <p className="mt-8">
                  <Link href="/research/topics/heart-rate-variability" className="font-medium underline underline-offset-4">
                    Read the HRV evidence and measurement limits
                  </Link>
                </p>
              ) : null}

              {section.id === "stress-recovery" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/nervous-system-regulation" className="font-medium underline underline-offset-4">
                    Explore nervous-system regulation
                  </Link>
                  <Link href="/learn/how-to-calm-your-nervous-system" className="font-medium underline underline-offset-4">
                    Explore practical calming guidance
                  </Link>
                </div>
              ) : null}

              {section.id === "vagus-and-product-boundary" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/vagus-nerve" className="font-medium underline underline-offset-4">
                    Understand where the vagus fits
                  </Link>
                  <Link href="/legal/editorial-policy" className="font-medium underline underline-offset-4">
                    Read the evidence and claims policy
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
            Comparison is useful when the exceptions stay visible
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
            Reviewed 11 September 2026. The page compares general physiology. It does not diagnose “sympathetic dominance,” prove a whole-body autonomic balance from HRV, or establish a Neuvago-specific physiological effect.
          </p>
        </div>
      </section>
    </main>
  );
}
