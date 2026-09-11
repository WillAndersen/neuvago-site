import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const title = "Vagus Nerve in the Ear: ABVN & Ear Anatomy | Neuvago";
const description =
  "Learn where the auricular branch of the vagus nerve (ABVN) may contribute to outer-ear sensation, why ear innervation overlaps, and what anatomy can and cannot prove.";
const path = "/learn/vagus-nerve-in-the-ear";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/orets-anatomi-og-vagusnerven",
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

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

const landmarkRows = [
  [
    "Cymba conchae",
    "Upper part of the conchal bowl",
    "Frequently used in auricular-VNS research; classic cadaver maps reported strong ABVN representation here.",
    "Do not treat one small cadaver map as a universal individual map.",
  ],
  [
    "Cavum conchae",
    "Lower conchal bowl leading toward the ear canal",
    "Anatomical reports describe vagal contribution with variable overlap from other sensory nerves.",
    "Site labels alone do not prove selective vagal target engagement.",
  ],
  [
    "Tragus",
    "Cartilage in front of the external auditory opening",
    "Used in some taVNS protocols, but published anatomical interpretations are less uniform than simple diagrams often imply.",
    "Protocol, electrode geometry and current spread matter.",
  ],
  [
    "External auditory canal",
    "Canal extending inward from the concha",
    "Parts of the canal can receive vagal sensory fibres and are associated with Arnold's ear-cough reflex.",
    "The canal is not a DIY stimulation site.",
  ],
  [
    "Earlobe",
    "Soft lower part of the auricle",
    "Often used as a comparison or sham site in research because it is not usually presented as a primary ABVN target.",
    "A sham condition is a study-design choice, not proof that a site has zero neural activity.",
  ],
] as const;

const interpretationRows = [
  [
    "Anatomical map",
    "Shows nerve territories reported in anatomical work.",
    "Does not prove which fibres one electrode activates in one person.",
  ],
  [
    "Skin sensation",
    "Shows that sensory structures are being stimulated.",
    "Does not identify the nerve branch or prove central vagal target engagement.",
  ],
  [
    "fMRI or evoked response",
    "Can provide indirect evidence that stimulation changes activity in relevant neural networks.",
    "Is not the same as direct recording from the ABVN and depends on protocol and analysis.",
  ],
  [
    "Clinical or wellness outcome",
    "Measures a downstream change in a study population.",
    "Cannot be transferred automatically to another device, site, waveform, population or intended use.",
  ],
] as const;

const sections: readonly Section[] = [
  {
    id: "direct-answer",
    eyebrow: "Direct answer",
    title: "Yes—the vagus has an auricular branch, but the ear is not a pure vagus map",
    paragraphs: [
      "The auricular branch of the vagus nerve (ABVN), sometimes called Arnold's nerve, contributes sensory fibres to parts of the external ear and external auditory canal. It is unusual because it provides a superficial access point associated with a cranial nerve whose main trunk otherwise runs deep through the neck and body.",
      "The important qualifier is contributes. The human auricle also receives sensory fibres from the auriculotemporal nerve and cervical nerves including the great auricular and lesser occipital nerves. Their territories can overlap, and individual anatomy varies.",
      "This page owns the anatomy question: where the vagus nerve may contribute in the ear, what landmarks researchers use, and what the maps can and cannot establish. The auricular-VNS guide owns the stimulation method, and the Research section owns study-level evidence.",
    ],
  },
  {
    id: "outer-ear-landmarks",
    eyebrow: "Ear anatomy",
    title: "The landmarks behind terms such as concha, cymba and tragus",
    paragraphs: [
      "The visible external ear is the auricle or pinna. Its folds and depressions create named landmarks that researchers use to describe electrode placement. The concha is the bowl-shaped region leading toward the external auditory canal and is commonly divided into the cymba conchae and cavum conchae.",
      "The tragus is the projection in front of the canal opening; the antihelix and helix form other prominent folds; and the earlobe is the soft inferior portion. These names are anatomical coordinates, not evidence grades.",
      "Two studies can both say 'ear stimulation' while using different landmarks, electrodes, current paths and controls. That is why a search for 'vagus nerve in the ear' should lead to anatomy before it leads to conclusions about efficacy.",
    ],
  },
  {
    id: "nerve-supply",
    eyebrow: "Overlapping innervation",
    title: "Several nerves share the outer ear",
    paragraphs: [
      "Classic human dissection work described a heterogeneous distribution of cranial and cervical sensory nerves across the auricle. The ABVN is one contributor, alongside the auriculotemporal nerve from the trigeminal system and cervical branches such as the great auricular and lesser occipital nerves.",
      "The best-known cadaver map came from 14 ears in seven cadavers. It has been highly influential, but its small sample and the difficulty of tracing extremely fine terminal branches are important limitations. Modern reviews therefore warn against treating its coloured territories as absolute borders in every person.",
      "Overlap matters practically because electrical current spreads through tissue rather than following a printed line on a diagram. A region associated with ABVN fibres may also contain or lie close to non-vagal sensory fibres.",
    ],
    bullets: [
      "ABVN: auricular branch of the vagus nerve.",
      "Auriculotemporal nerve: sensory branch associated with the trigeminal system.",
      "Great auricular and lesser occipital nerves: cervical sensory contributions to the auricle.",
      "Facial- and glossopharyngeal-related communications have also been described in the broader auricular pathway literature.",
    ],
  },
  {
    id: "cymba-concha-tragus",
    eyebrow: "Sites used in research",
    title: "Cymba conchae, concha and tragus should be described with uncertainty intact",
    paragraphs: [
      "The cymba conchae is a common auricular-VNS research target and was reported as an ABVN territory in the classic cadaver literature. Human fMRI studies have also used cymba-conchae stimulation when investigating central pathways associated with vagal afferent input.",
      "The cavum conchae and tragus also appear in auricular-stimulation research, but anatomical claims about how purely or densely they are innervated by the ABVN are less uniform across sources. Reviews have explicitly noted that the literature lacks a definitive, high-resolution cutaneous map for every individual.",
      "The responsible conclusion is therefore not 'this point is the vagus nerve'. It is that selected auricular regions are anatomically plausible access sites for studying vagal-related afferent stimulation, while selectivity and target engagement remain protocol-dependent questions.",
    ],
  },
  {
    id: "anatomy-versus-target-engagement",
    eyebrow: "Evidence boundary",
    title: "Anatomical plausibility is not the same as target engagement",
    paragraphs: [
      "An anatomical atlas answers where nerve fibres have been reported. Target engagement asks whether a specific intervention actually affected the intended neural pathway under a defined protocol.",
      "A tingling, warm or sharp sensation under an ear electrode confirms a sensory experience, not the identity of the activated nerve. The sensation may reflect several cutaneous afferents, and current distribution depends on contact, geometry, tissue properties and stimulation parameters.",
      "Human fMRI and electrophysiological studies can add evidence about central responses, but they remain indirect measures of peripheral fibre engagement. A brain response can also be influenced by somatosensory input that is not exclusively vagal.",
      "This is why Neuvago's editorial policy separates general physiology, method evidence and product evidence. An ear-anatomy page can establish the anatomical rationale; it cannot establish a Neuvago-specific clinical outcome.",
    ],
  },
  {
    id: "what-studies-must-report",
    eyebrow: "Reading taVNS studies",
    title: "Placement only makes sense together with the rest of the protocol",
    paragraphs: [
      "Consensus recommendations for transcutaneous VNS research emphasise detailed reporting of stimulation site, electrode, waveform, intensity, pulse width, frequency, timing, control condition, participant characteristics and outcomes.",
      "This matters because two studies at nominally similar ear sites can differ in current density, contact area, dose, session length and sham design. The word taVNS is therefore a method family, not one standardised exposure.",
      "When comparing results, preserve the exact site and protocol. Do not use a result from one ear location, device or population as automatic evidence for another.",
    ],
  },
  {
    id: "relationship-to-auricular-vns",
    eyebrow: "From anatomy to method",
    title: "How ear anatomy relates to auricular VNS",
    paragraphs: [
      "Transcutaneous auricular vagus nerve stimulation (taVNS) is the research term commonly used when electrical stimulation is applied through the skin at auricular sites selected to access vagal-related sensory pathways.",
      "The anatomy provides a rationale for the method. The method then requires its own evidence layer: stimulation parameters, controls, target-engagement measures, safety, population and outcomes.",
      "The same separation applies commercially. A product's electrode placement and settings must come from controlled product documentation. General ABVN anatomy or another device's research cannot substitute for product-specific validation, intended use or safety information.",
    ],
  },
  {
    id: "safety-and-scope",
    eyebrow: "Scope and safety",
    title: "This is not an electrode-placement or self-treatment guide",
    paragraphs: [
      "This page identifies anatomical landmarks and evidence boundaries. It does not provide electrical settings, self-designed electrode placement, treatment instructions or a recommendation to stimulate the ear canal.",
      "People should follow the instructions and safety information for any specific device. Pain, skin injury, marked dizziness, fainting, new neurological symptoms or other concerning reactions require appropriate assessment rather than increasing intensity or experimenting with placement.",
      "For Neuvago specifically, product placement, warnings, contraindications and settings belong to the current controlled product documentation and safety pages—not to general anatomy literature.",
    ],
  },
  {
    id: "sources",
    eyebrow: "Evidence map",
    title: "Sources behind the ear-anatomy boundary",
    paragraphs: [
      "The sources below include the classic human auricle dissection study, a modern anatomical review, human fMRI work, a systematic review of auricular neuromodulation and minimum reporting recommendations for transcutaneous VNS research.",
      "Reviewed 11 September 2026. The page is educational and does not claim that one anatomical map proves selective ABVN activation or a clinical effect.",
    ],
  },
];

const sources = [
  {
    id: "A-001",
    title: "The nerve supply of the human auricle",
    source: "Peuker ET, Filler TJ · Clinical Anatomy",
    year: "2002",
    href: "https://pubmed.ncbi.nlm.nih.gov/11835542/",
  },
  {
    id: "A-002",
    title: "The anatomical basis for transcutaneous auricular vagus nerve stimulation",
    source: "Butt MF, Albusoda A, Farmer AD, Aziz Q · Clinical Anatomy",
    year: "2020",
    href: "https://pubmed.ncbi.nlm.nih.gov/31742681/",
  },
  {
    id: "B-001",
    title: "Non-invasive access to the vagus nerve central projections via electrical stimulation of the external ear",
    source: "Frangos E, Ellrich J, Komisaruk BR · Brain Stimulation",
    year: "2015",
    href: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
  },
  {
    id: "B-002",
    title: "Auricular Vagus Neuromodulation—A Systematic Review on Quality of Evidence and Clinical Effects",
    source: "Verma N et al. · Frontiers in Neuroscience",
    year: "2021",
    href: "https://pubmed.ncbi.nlm.nih.gov/33994937/",
  },
  {
    id: "B-003",
    title: "International consensus based review and minimum reporting standards in transcutaneous VNS research",
    source: "Farmer AD et al. · Frontiers in Human Neuroscience",
    year: "2021",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    id: "B-004",
    title: "Laboratory administration of transcutaneous auricular vagus nerve stimulation",
    source: "Badran BW et al. · Journal of Visualized Experiments",
    year: "2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
  },
] as const;

export default function VagusNerveInTheEarPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    keywords: [
      "vagus nerve in the ear",
      "vagus nerve ear",
      "auricular branch of the vagus nerve",
      "ABVN",
      "ear vagus anatomy",
      "cymba conchae vagus nerve",
      "tragus vagus nerve",
      "Arnold's nerve",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus nerve", path: "/learn/vagus-nerve" },
      { name: "Vagus nerve in the ear", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]" data-search-dominance-1e1a="ear-anatomy">
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve-ear" />

      <section className="border-b border-black/5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#7b7167]">
            Ear anatomy · ABVN · target-engagement boundary
          </p>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(3rem,7vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.065em]">
            Vagus nerve in the ear: anatomy, ABVN and what the maps really show
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52]">
            The auricular branch of the vagus nerve helps explain why the outer ear is studied in taVNS—but the ear has overlapping sensory innervation, and an anatomy map is not proof of selective vagal activation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/no/kunnskap/orets-anatomi-og-vagusnerven"
              className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70"
            >
              Les på norsk
            </Link>
            <Link
              href="#direct-answer"
              className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Read the direct answer
            </Link>
            <Link
              href="/learn/auricular-vagus-nerve-stimulation"
              className="rounded-full border border-black/12 px-5 py-3 text-sm font-medium hover:bg-white/70"
            >
              Auricular VNS guide
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7dd] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-black/8 bg-white/70 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answer</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-[#3d3934] sm:text-2xl">
            The vagus nerve reaches parts of the external ear through its auricular branch, or ABVN. But the auricle is supplied by several overlapping nerves, so no simple coloured ear map can prove which nerve one electrode activates in one person.
          </p>
        </div>
      </section>

      <section className="border-b border-black/5 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Landmark map</p>
            <p className="mt-3 text-sm text-[#8a8178]">Anatomy ≠ proof of engagement</p>
          </div>
          <div className="min-w-0">
            <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              The ear regions you will see in taVNS papers
            </h2>
            <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
              <table className="w-full min-w-[66rem] border-collapse text-left">
                <caption className="p-5 text-left text-sm text-[#625b52]">
                  High-level landmark guide. Innervation varies and overlaps; this table is not electrode-placement instruction.
                </caption>
                <thead className="border-y border-black/8 bg-white/70">
                  <tr>
                    {["Landmark", "Where it is", "Why it appears in research", "Boundary"].map((heading) => (
                      <th key={heading} className="p-4 text-sm font-medium">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {landmarkRows.map((row) => (
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

              {section.id === "anatomy-versus-target-engagement" ? (
                <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white/70">
                  <table className="w-full min-w-[58rem] border-collapse text-left">
                    <caption className="p-5 text-left text-sm text-[#625b52]">
                      Four different evidence questions that should not be collapsed into one
                    </caption>
                    <thead className="border-y border-black/8 bg-white/70">
                      <tr>
                        {["Evidence layer", "What it can contribute", "What it cannot prove alone"].map((heading) => (
                          <th key={heading} className="p-4 text-sm font-medium">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {interpretationRows.map((row) => (
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

              {section.id === "relationship-to-auricular-vns" ? (
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link href="/learn/auricular-vagus-nerve-stimulation" className="font-medium underline underline-offset-4">
                    Read the auricular VNS guide
                  </Link>
                  <Link href="/research/topics/auricular-vagus-nerve-stimulation" className="font-medium underline underline-offset-4">
                    Explore the research layer
                  </Link>
                  <Link href="/learn/vagus-nerve-anatomy" className="font-medium underline underline-offset-4">
                    Follow the full vagus course
                  </Link>
                </div>
              ) : null}

              {section.id === "safety-and-scope" ? (
                <p className="mt-8">
                  <Link href="/legal/editorial-policy" className="font-medium underline underline-offset-4">
                    See how Neuvago separates physiology, method evidence and product evidence
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-black/5 bg-[#1f1f1c] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">Reader-visible sources</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            Keep the uncertainty visible
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
            Reviewed 11 September 2026. Ear anatomy supports anatomical plausibility; it does not automatically establish selective ABVN engagement, product efficacy, treatment benefit or regulatory status.
          </p>
        </div>
      </section>
    </main>
  );
}
