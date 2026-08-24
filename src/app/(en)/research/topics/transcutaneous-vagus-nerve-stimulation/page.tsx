import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { AuthorityVisualSection, PlainEnglishSummary, ResearchLedger } from "@/components/authority";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

const title =
  "Transcutaneous VNS Research | tVNS and taVNS | Neuvago";
const description =
  "Explore transcutaneous VNS research, including tVNS, taVNS, auricular stimulation, stimulation sites, protocol variables, safety and interpretation limits.";
const path = "/research/topics/transcutaneous-vagus-nerve-stimulation";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": "/research/topics/transcutaneous-vagus-nerve-stimulation",
      "nb-NO": "/no/forskning/transkutan-vagusnervestimulering",
      "x-default": "/research/topics/transcutaneous-vagus-nerve-stimulation",
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
    title: "tVNS means stimulation through the skin",
    description:
      "Transcutaneous vagus nerve stimulation uses surface electrodes rather than implanted hardware. The term can include different placements, including neck-based and ear-based approaches.",
  },
  {
    title: "taVNS is the ear-based branch of the category",
    description:
      "Transcutaneous auricular VNS focuses on outer-ear regions associated with auricular vagal pathways. It is often shortened to taVNS or auricular VNS.",
  },
  {
    title: "Protocol details change the interpretation",
    description:
      "Placement, pulse width, frequency, intensity, waveform, session length, sham design, and study population all matter when reading tVNS research.",
  },
];

const methodCards = [
  {
    title: "Transcutaneous VNS",
    label: "tVNS",
    description:
      "A broad research and device category for non-invasive stimulation delivered through the skin. It should always be interpreted by stimulation site and protocol.",
  },
  {
    title: "Auricular VNS",
    label: "taVNS",
    description:
      "An ear-based form of tVNS that studies stimulation around external-ear regions linked to auricular vagal pathways, such as the cymba conchae or tragus in many protocols.",
  },
  {
    title: "Cervical nVNS",
    label: "Neck-based",
    description:
      "A non-invasive approach that applies stimulation near the cervical vagus nerve area. Its mechanism, device design, indications, and evidence should not be collapsed into taVNS.",
  },
  {
    title: "Guided wellness context",
    label: "Neuvago boundary",
    description:
      "For Neuvago, tVNS research is context for understanding the category. It does not automatically become product-specific treatment, diagnosis, or prevention language.",
  },
];

const researchQuestions = [
  {
    title: "Where was stimulation applied?",
    description:
      "Ear placement, neck placement, control placement, and electrode design change the research question. A study using one site should not be generalized to every other site.",
  },
  {
    title: "What parameters were used?",
    description:
      "Frequency, pulse width, intensity, waveform, duty cycle, session length, and total exposure can affect comfort, target engagement, and interpretation.",
  },
  {
    title: "What was the control condition?",
    description:
      "Sham and control designs matter because skin sensation, attention, expectation, and device feel can all influence subjective outcomes.",
  },
  {
    title: "What outcome was measured?",
    description:
      "Brain imaging, HRV, symptoms, mood, sleep, pain, inflammation markers, and cognitive tasks are different endpoints and should not be mixed into one claim.",
  },
];

const evidenceSignals = [
  {
    title: "Critical review of tVNS",
    source: "Yap et al., 2020",
    description:
      "A widely cited review of tVNS that focuses on stimulation sites, parameters, devices, and the need for more systematic work before translating findings too broadly.",
    href: "https://pubmed.ncbi.nlm.nih.gov/32410932/",
    linkLabel: "View PubMed record",
  },
  {
    title: "Minimum reporting standards",
    source: "Farmer et al., 2021",
    description:
      "An international consensus paper proposing minimum reporting items for tVNS studies, including technical device and stimulation details needed for interpretation.",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
    linkLabel: "View PubMed record",
  },
  {
    title: "Auricular access and fMRI evidence",
    source: "Frangos et al., 2015",
    description:
      "A foundational neuroimaging study examining whether stimulation of an auricular region innervated by the auricular branch of the vagus nerve activates central vagal projections.",
    href: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
    linkLabel: "View PubMed record",
  },
  {
    title: "taVNS safety review",
    source: "Kim et al., 2022",
    description:
      "A systematic review and meta-analysis focused on adverse events and safety monitoring in human taVNS research.",
    href: "https://www.nature.com/articles/s41598-022-25864-1",
    linkLabel: "View article",
  },
];

const interpretationPrinciples = [
  {
    title: "Do not merge all VNS evidence into one claim",
    description:
      "Evidence for implanted VNS, cervical nVNS, auricular taVNS, and a wellness device may be related, but it is not interchangeable across benefits, safety, side effects, or claims.",
  },
  {
    title: "Target engagement is the central question",
    description:
      "A device may stimulate the skin, but the research question is whether the protocol engages the intended neural pathways in a meaningful and repeatable way.",
  },
  {
    title: "Sensation is not proof of mechanism",
    description:
      "Feeling tingling, pressure, or warmth does not by itself prove vagal engagement. User-facing education should avoid turning sensation into a mechanistic claim.",
  },
  {
    title: "Clinical findings need context",
    description:
      "A positive trial in one condition, population, or device does not automatically support broad wellness claims, product equivalence, or all-day consumer use.",
  },
];

const neuvagoUse = [
  {
    title: "Use tVNS as category education",
    description:
      "This page gives Neuvago a precise place to explain the research category behind non-invasive stimulation without overloading product pages with technical nuance.",
  },
  {
    title: "Keep product language conservative",
    description:
      "Neuvago can explain non-invasive stimulation, app guidance, session structure, comfort, and wellness support without borrowing clinical indications or safety assumptions from other devices.",
  },
  {
    title: "Link safety and method together",
    description:
      "A method page should always connect to safety and tolerability, because protocol details and adverse-event interpretation belong in the same trust system.",
  },
  {
    title: "Turn complexity into clarity",
    description:
      "The goal is not to make users memorize acronyms. It is to help them understand what tVNS, taVNS, and non-invasive VNS mean before evaluating a device.",
  },
];

const internalPathways = [
  {
    title: "VNS research topic",
    description:
      "Return to the broader research topic covering implanted VNS, non-invasive VNS, auricular stimulation, and brain–body regulation.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "Explore VNS research",
  },
  {
    title: "Safety and tolerability",
    description:
      "Understand how adverse events, side effects, study populations, contraindication awareness, and device differences shape responsible interpretation.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "View safety topic",
  },
  {
    title: "Auricular VNS research",
    description:
      "Go deeper into taVNS, external-ear anatomy, cymba, cavum, tragus, electrode contact, sham design, and auricular interpretation limits.",
    href: "/research/topics/auricular-vagus-nerve-stimulation",
    linkLabel: "Explore auricular topic",
  },
  {
    title: "Autonomic regulation",
    description:
      "Connect tVNS and taVNS method details to sympathetic and parasympathetic dynamics, HRV, stress physiology, and recovery context.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "Explore regulation topic",
  },
  {
    title: "Transcutaneous VNS guide",
    description:
      "A plain-language guide to tVNS, taVNS, stimulation through the skin, method differences, and everyday evaluation criteria.",
    href: "/learn/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Read tVNS guide",
  },
  {
    title: "Non-invasive VNS guide",
    description:
      "A plain-language guide to nVNS, tVNS, taVNS, device differences, and wellness boundaries.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Read the guide",
  },
  {
    title: "Auricular VNS guide",
    description:
      "A plain-language guide to ear-based VNS, taVNS, placement language, comfort, research context, and careful claims.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Read auricular guide",
  },
  {
    title: "Auricular fMRI study",
    description:
      "Read Neuvago’s summary of a foundational paper on non-invasive stimulation of the external ear and central vagal projections.",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    linkLabel: "Read study summary",
  },
];

const commercialPathways = [
  {
    title: "How Neuvago works",
    description:
      "Move from research vocabulary into the practical device, app guidance, session structure, and everyday use experience.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Explore the product",
    description:
      "Understand the Neuvago device-and-app system as a wellness product with clear boundaries and guided use.",
    href: "/product",
    linkLabel: "Explore Neuvago",
  },
  {
    title: "Intended use",
    description:
      "Review what Neuvago is designed to support and what it is not intended to diagnose, treat, prevent, or cure.",
    href: "/legal/intended-use",
    linkLabel: "Review intended use",
  },
];

const externalReferences = [
  {
    title:
      "Critical Review of Transcutaneous Vagus Nerve Stimulation: Challenges for Translation to Clinical Practice",
    source: "Yap et al., Frontiers in Neuroscience, 2020",
    href: "https://pubmed.ncbi.nlm.nih.gov/32410932/",
  },
  {
    title:
      "International consensus based review and recommendations for minimum reporting standards in tVNS research",
    source: "Farmer et al., Frontiers in Human Neuroscience, 2021",
    href: "https://pubmed.ncbi.nlm.nih.gov/33854421/",
  },
  {
    title:
      "Non-invasive access to the vagus nerve central projections via electrical stimulation of the external ear",
    source: "Frangos et al., Brain Stimulation, 2015",
    href: "https://pubmed.ncbi.nlm.nih.gov/25573069/",
  },
  {
    title:
      "Safety of transcutaneous auricular vagus nerve stimulation: a systematic review and meta-analysis",
    source: "Kim et al., Scientific Reports, 2022",
    href: "https://www.nature.com/articles/s41598-022-25864-1",
  },
  {
    title:
      "Laboratory administration of transcutaneous auricular vagus nerve stimulation: technique, targeting, and considerations",
    source: "Badran et al., Journal of Visualized Experiments, 2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/30663712/",
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

function MethodCard({
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

function EvidenceCard({
  title,
  source,
  description,
  href,
  linkLabel,
}: {
  title: string;
  source: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <article className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
        {source}
      </p>
      <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        {linkLabel}
      </a>
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
    <article className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
      <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
        {description}
      </p>
      <Link
        href={href}
        className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
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

export default function TranscutaneousVagusNerveStimulationResearchPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Research topics",
    datePublished: authorityEditorialDates.vnsClusterPublished,
    dateModified: authorityEditorialDates.vnsClusterModified,
    keywords: [
      "transcutaneous vagus nerve stimulation",
      "tVNS",
      "transcutaneous auricular vagus nerve stimulation",
      "taVNS",
      "auricular vagus nerve stimulation",
      "non-invasive vagus nerve stimulation research",
      "autonomic regulation",
      "vagus nerve stimulator research",
      "vagus nerve stimulation parameters",
      "auricular branch of the vagus nerve",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Topic Research", path: "/research/topics" },
      { name: "Transcutaneous VNS", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="research-topics-transcutaneous-vagus-nerve-stimulation"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid lg:min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Transcutaneous VNS
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Transcutaneous VNS research: tVNS, taVNS, and methods
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Transcutaneous vagus nerve stimulation, often shortened to tVNS,
              is one of the most important research categories behind modern
              non-invasive VNS. It describes stimulation delivered through the
              skin rather than through an implanted surgical system.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This page explains the research vocabulary around tVNS and taVNS,
              why protocol details matter, and how Neuvago should use this
              evidence layer responsibly without turning every study into a
              product claim.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/safety-and-tolerability"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View safety topic
              </Link>

              <Link
                href="/learn/non-invasive-vagus-nerve-stimulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Read non-invasive VNS guide
              </Link>
            </div>
          </div>

          <div className="hidden rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur lg:block">
            <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                      Method layer
                    </p>
                    <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                      The bridge between non-invasive VNS research and practical
                      product understanding
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-medium text-[#1f1f1c]">
                        tVNS
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                        Surface stimulation through the skin
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          taVNS
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Ear-based research pathway
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Protocols
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Placement, parameters, controls
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthorityVisualSection
        eyebrow="Method visual"
        title="tVNS is a method layer with important details"
        description="Transcutaneous VNS is easiest to understand when device type, stimulation site, parameters, session length, and research context are kept distinct."
        image={{ src: "/images/neuvago/transcutaneous-vns-education-desktop.webp", alt: "Neuvago device beside abstract transcutaneous VNS method cards." }}
      />

      <PlainEnglishSummary
        title="tVNS is a method family, not one uniform protocol"
        description="Transcutaneous vagus nerve stimulation describes non-invasive stimulation through the skin. In research, that can include auricular and cervical approaches, different parameters, different control conditions, and different populations."
        points={[
          { title: "taVNS is ear-based", description: "Auricular or taVNS studies focus on parts of the outer ear associated with vagal pathway discussions." },
          { title: "Parameters matter", description: "Intensity, pulse width, frequency, session length, and placement change how a study should be interpreted." },
          { title: "Method is not a claim", description: "Explaining tVNS does not mean every non-invasive VNS product can claim every research outcome." },
        ]}
        primaryHref="/learn/transcutaneous-vagus-nerve-stimulation"
        primaryLabel="Read tVNS guide"
        secondaryHref="/learn/auricular-vagus-nerve-stimulation"
        secondaryLabel="Auricular VNS"
      />

      <ResearchLedger
        title="Method details are the research signal"
        items={[
          { title: "What research suggests", description: "tVNS and taVNS research explores whether external stimulation can engage vagal-related pathways and measurable physiological responses." },
          { title: "What it does not prove", description: "A method label does not prove equivalence across devices, placements, settings, or wellness routines." },
          { title: "Neuvago boundary", description: "Neuvago should use tVNS context to explain the category while keeping product claims tied to intended use and guidance." },
        ]}
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Simple answer
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              tVNS is not one protocol. It is a family of non-invasive
              stimulation approaches.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The phrase transcutaneous vagus nerve stimulation is useful
              because it separates external stimulation from implanted VNS. But
              it is still too broad to interpret without details. A neck-based
              protocol, an ear-based protocol, a laboratory device, and a
              consumer wellness product can sit in the same high-level category
              while raising different questions.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the research layer should explain tVNS with precision:
              what was stimulated, how it was stimulated, who was studied, which
              outcomes were measured, and what the findings do not prove.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Quick answer
            </p>

            <div className="mt-8 space-y-5">
              {quickAnswers.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Category map
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The most useful first step is separating the terms
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A strong research page should reduce acronym confusion. tVNS,
              taVNS, nVNS, auricular stimulation, and cervical stimulation are
              related, but they do not all mean the same thing.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {methodCards.map((item) => (
              <MethodCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Evidence signals
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The strongest tVNS content teaches people how to read the method,
              not just the headline
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These references help frame the tVNS and taVNS research category.
              They are useful for education and trust, but they should not be
              treated as product-specific claims for every non-invasive vagus
              nerve stimulator.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {evidenceSignals.map((item) => (
              <EvidenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Research checklist
            </p>

            <div className="mt-8 space-y-5">
              {researchQuestions.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How to interpret tVNS research
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Method details are not academic clutter. They are the difference
              between evidence and overclaiming.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              tVNS research can involve different body sites, electrodes,
              stimulation waveforms, sham protocols, populations, and outcomes.
              Without those details, a reader can easily assume that every
              non-invasive VNS device is doing the same thing in the same way.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Neuvago’s research layer should do the opposite. It should make
              the method legible, keep claims attached to evidence, and help the
              user understand why a guided wellness product needs its own clear
              boundaries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/vagus-nerve-stimulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Return to VNS research
              </Link>

              <Link
                href="/legal/intended-use"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Review intended use
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Responsible interpretation
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              What this research does and does not mean for a wellness product
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {interpretationPrinciples.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How Neuvago should use this topic
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              This page should become the method bridge between education,
              safety, and product understanding
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People searching for transcutaneous vagus nerve stimulation often
              want more than a definition. They want to know whether tVNS is
              different from implanted VNS, whether taVNS is the same thing,
              what the ear has to do with the vagus nerve, and whether consumer
              devices are making claims responsibly.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That makes this page strategically important. It helps Neuvago own
              the research vocabulary while keeping the product voice calm,
              premium, and non-clinical.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how Neuvago works
              </Link>

              <Link
                href="/product"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore the product
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Neuvago use
            </p>

            <div className="mt-8 space-y-5">
              {neuvagoUse.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue through the authority layer
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Transcutaneous VNS should connect method, safety, education, and
              commercial understanding
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {internalPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Practical next steps
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              From research terms to the Neuvago experience
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {commercialPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              References
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Starting references for the transcutaneous VNS topic
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These references support transparent research context. They are
              not product-specific claims for Neuvago or individual medical
              advice.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {externalReferences.map((item) => (
              <ExternalReferenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Next step
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Now connect the method to safety and daily use
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Once the tVNS vocabulary is clear, the next step is
                understanding how safety, tolerability, intended use, and guided
                sessions fit together in the Neuvago system.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/safety-and-tolerability"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View safety topic
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
              >
                See how Neuvago works
              </Link>

              <Link
                href="/research/topics/vagus-nerve-stimulation"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
              >
                Return to VNS research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
