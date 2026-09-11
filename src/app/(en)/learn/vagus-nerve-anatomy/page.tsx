import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Vagus Nerve Anatomy: Location, Course & Branches | Neuvago";
const description =
  "See where the vagus nerve is, how cranial nerve X travels from the brainstem through the neck, chest and abdomen, and how its major branches differ.";
const path = "/learn/vagus-nerve-anatomy";

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

type DirectAnswer = {
  question: string;
  answer: string;
};

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  answers?: readonly DirectAnswer[];
};

const courseRows = [
  [
    "Brainstem",
    "Vagal fibres connect with several nuclei in the medulla, including the nucleus tractus solitarius, dorsal motor nucleus and nucleus ambiguus.",
    "Different nuclei and fibre populations serve different sensory, motor and autonomic functions.",
  ],
  [
    "Skull base",
    "Rootlets join and the nerve leaves the skull through the jugular foramen; superior and inferior sensory ganglia lie along the early course.",
    "This is deep anatomy, not a point that can be located from the skin.",
  ],
  [
    "Neck",
    "The left and right vagus nerves descend deep in the neck within the carotid sheath, between major vessels.",
    "The cervical vagus should not be described as a superficial pressure point.",
  ],
  [
    "Chest",
    "Branches contribute to cardiac, pulmonary and oesophageal plexuses; recurrent laryngeal branches follow different right- and left-sided routes.",
    "Anatomical contribution does not mean the vagus alone controls the organ or function.",
  ],
  [
    "Diaphragm and upper abdomen",
    "Vagal fibres reorganise around the oesophagus and continue as vagal trunks into distributed gastrointestinal and upper-abdominal networks.",
    "The nerve branches into networks; it is not one uninterrupted cable to the gut.",
  ],
] as const;

const branchRows = [
  [
    "Auricular branch (ABVN)",
    "Sensory contribution to parts of the external ear and ear canal.",
    "The ear has overlapping innervation from several nerves; read the dedicated ear-anatomy guide.",
  ],
  [
    "Pharyngeal branches",
    "Contribute to motor and sensory pathways involved in the pharynx and swallowing.",
    "Swallowing depends on multiple nerves, muscles and central circuits.",
  ],
  [
    "Superior laryngeal nerve",
    "Carries sensory and motor fibres associated with the laryngeal region.",
    "Its internal and external branches have different roles.",
  ],
  [
    "Recurrent laryngeal nerve",
    "Provides major motor supply to intrinsic laryngeal muscles and follows an asymmetric course on the two sides.",
    "Right and left branches loop around different structures.",
  ],
  [
    "Cardiac, pulmonary and oesophageal branches",
    "Join regional autonomic and sensory networks in the thorax.",
    "A branch entering a plexus does not establish complete or exclusive vagal control.",
  ],
] as const;

const sections: readonly Section[] = [
  {
    id: "direct-answer",
    eyebrow: "Where is the vagus nerve?",
    title: "A paired cranial nerve with a long, branching course",
    paragraphs: [
      "The vagus nerve is cranial nerve X. Humans have a left and a right vagus nerve. They arise from the brainstem region, leave the skull through the jugular foramina, descend deep in the neck and continue into the chest and upper abdomen through multiple branches, plexuses and vagal trunks.",
      "That route explains the name vagus, meaning wandering. It does not mean there is one continuous surface line that can be traced with a finger. Much of the cervical course lies deep beside major blood vessels, and the thoracic and abdominal pathways repeatedly branch and reorganise.",
      "This page owns the detailed anatomy, location, course and branch question. The broader Vagus nerve guide remains the place for the plain-language definition, function families, HRV limits and wider context.",
    ],
    answers: [
      {
        question: "Where is the vagus nerve located?",
        answer:
          "The paired vagus nerves begin in the brainstem region, leave the skull through the jugular foramina and descend deep in the neck before branching through the chest and upper abdomen. They are not one superficial line or pressure point.",
      },
      {
        question: "Is there one vagus nerve or two?",
        answer:
          "There is a left and a right vagus nerve. They share a broad organisation but are not perfectly symmetrical, especially in parts of the thorax and in the recurrent laryngeal branches.",
      },
    ],
  },
  {
    id: "brainstem-and-skull-base",
    eyebrow: "Cranial nerve X",
    title: "From vagal nuclei to the jugular foramen",
    paragraphs: [
      "Vagal anatomy begins in the medulla, not in the neck. Different fibre populations are associated with different central nuclei. The nucleus tractus solitarius receives substantial visceral sensory input; the dorsal motor nucleus contributes parasympathetic efferent fibres; and the nucleus ambiguus contributes branchial motor fibres and selected cardiac-related pathways.",
      "These names matter because cranial nerve X is a mixed nerve. Sensory, motor and parasympathetic fibres travel together for part of the route but do not represent one uniform signal. Saying that the vagus was 'activated' is therefore incomplete unless the branch, fibre population, stimulus and outcome are defined.",
      "Multiple rootlets emerge from the medulla and join before the nerve exits the skull through the jugular foramen. Superior and inferior vagal sensory ganglia contain cell bodies of afferent neurons along this early extracranial course.",
    ],
    bullets: [
      "Afferent describes information travelling toward the central nervous system.",
      "Efferent describes information travelling from central circuits toward peripheral targets.",
      "Motor, sensory and parasympathetic fibres should not be collapsed into one 'calming' signal.",
    ],
  },
  {
    id: "neck-course",
    eyebrow: "Deep cervical anatomy",
    title: "The vagus nerve in the neck",
    paragraphs: [
      "After leaving the skull, the vagus descends on each side within the carotid sheath. Standard anatomical descriptions place it posteriorly between the carotid artery and internal jugular vein. This is clinically important deep anatomy next to major vessels and other nerves.",
      "Because of that location, the cervical vagus is not a reliable home palpation target. Feeling a pulse, muscle, tendon or tender spot in the neck does not identify the vagus nerve. Strong pressure around the carotid region can also affect vascular and reflex structures unrelated to any consumer idea of 'vagus massage'.",
      "The cervical course gives rise to several branches, including pharyngeal, superior laryngeal, recurrent laryngeal and cardiac-related pathways. Their functions differ, so a symptom or sensation in one territory does not reveal a whole-nerve state.",
    ],
    answers: [
      {
        question: "Can you feel or press the vagus nerve in the neck?",
        answer:
          "The cervical vagus lies deep within the carotid sheath beside major vessels. A person cannot reliably identify the nerve by pressing the skin, and strong neck pressure is not an appropriate self-test for vagus function.",
      },
    ],
  },
  {
    id: "thorax-and-abdomen",
    eyebrow: "Chest to abdomen",
    title: "Branches, plexuses and vagal trunks",
    paragraphs: [
      "Within the thorax, vagal branches join cardiac, pulmonary and oesophageal networks. These plexuses also contain other autonomic and sensory fibres, so their output reflects distributed circuitry rather than one nerve working alone.",
      "The recurrent laryngeal nerves illustrate left-right asymmetry. On the right, the recurrent branch loops near the subclavian artery; on the left, it passes beneath the aortic arch before ascending toward the larynx. This difference is a useful reminder that 'the vagus nerve' is shorthand for paired, branching anatomy.",
      "Around the oesophagus, fibres from the two sides contribute to an oesophageal plexus and reorganise into anterior and posterior vagal trunks that pass through the diaphragm. Upper-abdominal connections then enter gastrointestinal and visceral networks.",
      "Descriptions such as 'brain-to-gut nerve' are useful introductions but incomplete anatomy. Vagal signalling interacts with enteric circuits, spinal pathways, hormones and local organ mechanisms, and the extent of vagal supply differs across tissues.",
    ],
  },
  {
    id: "major-branches",
    eyebrow: "Anatomy map",
    title: "Major branches are not interchangeable",
    paragraphs: [
      "A branch name identifies a route and territory, not a universal physiological effect. The auricular branch, pharyngeal branches, laryngeal branches and thoracoabdominal branches carry different fibre populations and connect with different tissues.",
      "This distinction becomes important whenever anatomy is used to support a claim. Evidence about an ear pathway cannot simply be transferred to the cervical trunk; a cardiac response does not prove that gastrointestinal pathways changed; and a sensation at the skin does not identify one deeper fascicle.",
    ],
  },
  {
    id: "left-versus-right",
    eyebrow: "Paired anatomy",
    title: "Left and right vagus nerves share a plan, not an identical route",
    paragraphs: [
      "The two vagus nerves originate from corresponding brainstem structures and both travel through the neck, chest and upper abdomen, but their relationships and branches are not mirror images at every level.",
      "The recurrent laryngeal branches are the clearest visible example of asymmetry. Thoracic relationships also differ around the great vessels, lungs and oesophagus before fibres contribute to the oesophageal plexus and vagal trunks.",
      "This does not support simple rules that one side is always 'safe', 'calming' or physiologically preferable. Side choice in a study or device protocol is a protocol-specific decision and should be interpreted with the actual method and safety documentation.",
    ],
  },
  {
    id: "ear-branch",
    eyebrow: "A distinctive peripheral branch",
    title: "The auricular branch reaches parts of the external ear",
    paragraphs: [
      "The auricular branch of the vagus nerve, often abbreviated ABVN and historically called Arnold's nerve, contributes sensory innervation to parts of the external ear and external auditory canal.",
      "The outer ear is not a pure vagus territory. It also receives fibres from the auriculotemporal nerve and cervical nerves such as the great auricular and lesser occipital nerves, with overlap and anatomical variation. This is why an ear map should be read as an evidence-informed anatomical model, not as a guaranteed map for every individual.",
      "Because the ear offers superficial access to sensory fibres associated with the vagus, it has become important in transcutaneous auricular VNS research. Anatomy explains the rationale for studying the ear; it does not by itself establish target engagement, efficacy, safety or a product-specific effect.",
    ],
    answers: [
      {
        question: "Does the vagus nerve go to the ear?",
        answer:
          "A small auricular branch of the vagus contributes sensory fibres to parts of the external ear and ear canal. Those regions also have overlapping innervation from other cranial and cervical nerves.",
      },
    ],
  },
  {
    id: "anatomy-claim-boundaries",
    eyebrow: "Interpretation boundary",
    title: "What anatomy can—and cannot—prove",
    paragraphs: [
      "An anatomical connection can show that a pathway exists. It cannot by itself show that a particular wellness practice selectively activates that pathway, that a sensation proves neural target engagement, or that a clinical outcome will follow.",
      "For electrical stimulation, location is only one variable. Electrode geometry, contact, current distribution, amplitude, pulse width, frequency, session timing, control condition, population and outcome measurement all affect how a study should be interpreted.",
      "For non-electrical practices, evidence should be evaluated method by method. Breathing, touch, massage, movement, cold exposure, sound and relaxation are not interchangeable 'vagus stimulation' protocols simply because they may influence autonomic or subjective outcomes.",
      "General vagus anatomy is also not product evidence for Neuvago. Product claims require the product's controlled documentation, intended use, safety information and directly relevant evidence.",
    ],
  },
  {
    id: "sources",
    eyebrow: "Evidence map",
    title: "Sources for the anatomy and interpretation boundaries",
    paragraphs: [
      "The reader-visible sources below combine reference anatomy with modern reviews of vagal organisation and sensory pathways. They support the anatomy and interpretation boundaries on this page; they do not constitute a clinical guideline or product-efficacy review.",
      "Reviewed 11 September 2026. Educational information only. New swallowing difficulty, persistent voice change, fainting, neurological symptoms or concern about nerve injury requires appropriate clinical assessment rather than an online anatomy guide.",
    ],
  },
];

const sources = [
  {
    id: "A-001",
    title: "Neuroanatomy, Cranial Nerve 10 (Vagus Nerve)",
    source: "Kenny BJ, Bordoni B · StatPearls / NCBI Bookshelf",
    year: "2026 edition",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK537171/",
  },
  {
    id: "A-002",
    title: "Neuroanatomy, Vagal Nerve Nuclei",
    source: "Baker E, Lui F · StatPearls / NCBI Bookshelf",
    year: "2026 edition",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK545209/",
  },
  {
    id: "A-003",
    title: "Anatomy, Head and Neck: Anterior Vagus Nerve",
    source: "Baquiran M, Bordoni B · StatPearls / NCBI Bookshelf",
    year: "2026 edition",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK547696/",
  },
  {
    id: "B-001",
    title: "Functional anatomy of the vagus system — emphasis on the somato-visceral interface",
    source: "Neuhuber WL, Berthoud HR · Autonomic Neuroscience",
    year: "2021",
    href: "https://pubmed.ncbi.nlm.nih.gov/34634680/",
  },
  {
    id: "B-002",
    title: "Internal senses of the vagus nerve",
    source: "Prescott SL, Liberles SD · Neuron",
    year: "2022",
    href: "https://pubmed.ncbi.nlm.nih.gov/35051375/",
  },
  {
    id: "B-003",
    title: "Functional and chemical anatomy of the afferent vagal system",
    source: "Berthoud HR, Neuhuber WL · Autonomic Neuroscience",
    year: "2000",
    href: "https://pubmed.ncbi.nlm.nih.gov/11189015/",
  },
] as const;

export default function VagusNerveAnatomyPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    keywords: [
      "vagus nerve anatomy",
      "where is the vagus nerve",
      "vagus nerve location",
      "vagus nerve course",
      "vagus nerve branches",
      "cranial nerve X anatomy",
      "left and right vagus nerve",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus nerve", path: "/learn/vagus-nerve" },
      { name: "Vagus nerve anatomy", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-search-dominance-1e1a="vagus-anatomy">
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve-anatomy" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Anatomy guide · cranial nerve X
          </p>
          <h1 className="mt-6 max-w-[19ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Vagus nerve anatomy: where it runs and how it branches
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            Follow the paired vagus nerves from the brainstem through the skull base, neck, chest and upper abdomen—and keep anatomy separate from stimulation, symptom and product claims.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#direct-answer"
              className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Where is the vagus nerve?
            </Link>
            <Link
              href="/learn/vagus-nerve"
              className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70"
            >
              Vagus nerve foundation
            </Link>
            <Link
              href="/learn/vagus-nerve-in-the-ear"
              className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70"
            >
              Explore the ear branch
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            The left and right vagus nerves leave the brainstem, pass through the jugular foramina and descend deep in the neck before branching through the chest and upper abdomen. They are a paired, mixed nerve system—not one superficial line or “calm switch.”
          </p>
        </div>
      </section>

      <section className="border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20" data-anatomy-course-map>
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Course map</p>
              <p className="mt-3 text-sm text-[#8a8178]">Brainstem → abdomen</p>
            </div>
            <div className="min-w-0">
              <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                A location map with the interpretation boundary built in
              </h2>
              <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                <table className="w-full min-w-[60rem] border-collapse text-left">
                  <caption className="p-5 text-left text-sm text-[#625b52]">
                    High-level route of cranial nerve X. This is an anatomy overview, not a self-location or stimulation map.
                  </caption>
                  <thead className="border-y border-black/8 bg-white/70">
                    <tr>
                      {["Region", "What happens anatomically", "Important boundary"].map((heading) => (
                        <th key={heading} className="p-4 text-sm font-medium">{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {courseRows.map((row) => (
                      <tr key={row[0]} className="border-b border-black/7 last:border-b-0">
                        {row.map((cell) => (
                          <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
          <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
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

              {section.bullets ? (
                <ul className="mt-8 max-w-3xl space-y-3 rounded-[1.5rem] border border-black/8 bg-white/70 p-6">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-[#5f5a52]">
                      <span aria-hidden="true">—</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.answers?.map((answer) => (
                <div key={answer.question} className="mt-8 rounded-[1.5rem] border border-black/8 bg-white/70 p-6">
                  <h3 className="text-xl font-medium tracking-[-0.025em]">{answer.question}</h3>
                  <p className="mt-3 text-base leading-8 text-[#5f5a52]">{answer.answer}</p>
                </div>
              ))}

              {section.id === "major-branches" ? (
                <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                  <table className="w-full min-w-[60rem] border-collapse text-left">
                    <caption className="p-5 text-left text-sm text-[#625b52]">
                      Selected branches and why the branch identity matters
                    </caption>
                    <thead className="border-y border-black/8 bg-white/70">
                      <tr>
                        {["Branch", "High-level role", "Interpretation limit"].map((heading) => (
                          <th key={heading} className="p-4 text-sm font-medium">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {branchRows.map((row) => (
                        <tr key={row[0]} className="border-b border-black/7 last:border-b-0">
                          {row.map((cell) => (
                            <td key={cell} className="p-4 align-top text-sm leading-7 text-[#5f5a52]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.id === "ear-branch" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/vagus-nerve-in-the-ear" className="font-medium underline underline-offset-4">
                    Read the dedicated ear-anatomy guide
                  </Link>
                  <Link href="/learn/auricular-vagus-nerve-stimulation" className="font-medium underline underline-offset-4">
                    Understand auricular VNS
                  </Link>
                </div>
              ) : null}

              {section.id === "anatomy-claim-boundaries" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/how-to-stimulate-the-vagus-nerve" className="font-medium underline underline-offset-4">
                    Explore stimulation-method categories
                  </Link>
                  <Link href="/legal/editorial-policy" className="font-medium underline underline-offset-4">
                    Read the editorial and claims policy
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
            Anatomy first, claims second
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
            Reviewed 11 September 2026. General anatomy is scientific context, not evidence that a particular method or product selectively engages the vagus nerve or produces a clinical outcome.
          </p>
        </div>
      </section>
    </main>
  );
}
