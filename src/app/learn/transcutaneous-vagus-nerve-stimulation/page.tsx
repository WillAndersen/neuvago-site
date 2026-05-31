import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

const title =
  "Transcutaneous Vagus Nerve Stimulation | tVNS Guide | Neuvago";
const description =
  "Learn what transcutaneous vagus nerve stimulation means, how tVNS and taVNS relate to non-invasive VNS, and how to evaluate the category responsibly.";
const path = "/learn/transcutaneous-vagus-nerve-stimulation";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
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
    title: "Transcutaneous means through the skin",
    description:
      "Transcutaneous vagus nerve stimulation uses external contact rather than implanted hardware. In VNS conversations, it usually refers to non-invasive stimulation applied at the ear or neck area.",
  },
  {
    title: "tVNS is a method family, not one single protocol",
    description:
      "The term can include auricular approaches, cervical approaches, different electrodes, different settings, and different research goals. The details matter.",
  },
  {
    title: "taVNS is the ear-based branch",
    description:
      "Transcutaneous auricular vagus nerve stimulation, often shortened to taVNS, is the ear-based version of tVNS and is commonly discussed in relation to auricular vagal pathways.",
  },
];

const termCards = [
  {
    title: "tVNS",
    label: "Transcutaneous VNS",
    description:
      "A broad term for vagus nerve stimulation approaches delivered through the skin using external contact rather than implanted hardware.",
  },
  {
    title: "taVNS",
    label: "Auricular tVNS",
    description:
      "The ear-based form of tVNS. It is usually discussed in relation to specific outer-ear regions and the auricular branch of the vagus nerve.",
  },
  {
    title: "nVNS",
    label: "Non-invasive VNS",
    description:
      "A wider product and research category that can include different external approaches. tVNS is one way people describe non-invasive stimulation methods.",
  },
  {
    title: "Cervical nVNS",
    label: "Neck-based approach",
    description:
      "A non-invasive approach applied near the neck area. It should not be collapsed into ear-based taVNS or treated as identical to every tVNS method.",
  },
];

const whyItMatters = [
  {
    title: "It helps separate method from marketing",
    description:
      "People often see VNS, nVNS, tVNS, taVNS, and vagus nerve stimulator used together. A clear page helps explain which term describes the broad category and which term describes a specific method.",
  },
  {
    title: "It keeps evidence in the right lane",
    description:
      "A study using one stimulation site or parameter set does not automatically support every device, use case, or claim. tVNS should be read through method details.",
  },
  {
    title: "It gives users better evaluation criteria",
    description:
      "A user should know to ask about placement, comfort, session length, guidance, stimulation settings, safety boundaries, and intended use — not just whether something says VNS.",
  },
  {
    title: "It supports responsible product education",
    description:
      "Neuvago can explain transcutaneous VNS as category context while still keeping product language focused on wellness support, guided sessions, and daily routine design.",
  },
];

const evaluationCriteria = [
  {
    title: "Where stimulation is applied",
    description:
      "Ear placement, neck placement, control placement, and electrode design change how a method should be understood. The location is not a minor detail.",
  },
  {
    title: "Which settings are used",
    description:
      "Frequency, pulse width, intensity, waveform, session length, and duty cycle can all shape comfort, tolerability, and research interpretation.",
  },
  {
    title: "What the session is for",
    description:
      "A clinical protocol, laboratory study, and consumer wellness routine can share vocabulary without having the same purpose, evidence, or claims.",
  },
  {
    title: "How safety is explained",
    description:
      "Responsible tVNS education should discuss tolerability, contraindication awareness, medical contexts, and why non-invasive does not mean claim-free.",
  },
];

const methodBoundaries = [
  {
    title: "tVNS is not the same as implanted VNS",
    description:
      "Implanted clinical VNS and transcutaneous VNS are related categories, but they differ in hardware, exposure, regulation, indications, and evidence. They should not be treated as interchangeable.",
  },
  {
    title: "taVNS is not every form of tVNS",
    description:
      "Auricular VNS is a specific ear-based branch. It is useful to understand separately because placement, comfort, and research language differ from neck-based approaches.",
  },
  {
    title: "Sensation is not proof of mechanism",
    description:
      "Tingling, pressure, warmth, or comfort can be part of the user experience, but sensation alone does not prove a specific vagal mechanism or clinical outcome.",
  },
  {
    title: "Study findings are protocol-specific",
    description:
      "Research should be interpreted by device, site, parameter set, population, control condition, and outcome. That is especially important in broad wellness communication.",
  },
];

const neuvagoFit = [
  {
    title: "A simpler explanation for a technical category",
    description:
      "Neuvago can make tVNS understandable without turning the product page into a dense research manual or making claims beyond the intended wellness use.",
  },
  {
    title: "Guidance matters as much as hardware",
    description:
      "For everyday use, a device-and-app system should help with placement, comfort, session rhythm, and consistency rather than leaving people to interpret technical terms alone.",
  },
  {
    title: "The product bridge stays calm",
    description:
      "The right commercial bridge is practical: how sessions work, how the app guides the routine, and how Neuvago stays within clear wellness boundaries.",
  },
];

const relatedLearning = [
  {
    title: "Auricular vagus nerve stimulation",
    description:
      "Go deeper into the ear-based branch of tVNS, including taVNS, auricular placement language, comfort, and responsible claims.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Read auricular VNS guide",
  },
  {
    title: "Non-invasive vagus nerve stimulation",
    description:
      "Step back to the broader non-invasive VNS category, including nVNS, tVNS, taVNS, device differences, and wellness boundaries.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Read non-invasive VNS guide",
  },
  {
    title: "Vagus nerve stimulation overview",
    description:
      "Understand the full VNS category, including implanted systems, external approaches, research context, and responsible product language.",
    href: "/learn/vagus-nerve-stimulation",
    linkLabel: "Read VNS overview",
  },
  {
    title: "Vagus nerve basics",
    description:
      "Start with the anatomy and regulation foundation before moving into device categories and stimulation methods.",
    href: "/learn/vagus-nerve",
    linkLabel: "Understand the vagus nerve",
  },
];

const researchPathways = [
  {
    title: "Transcutaneous VNS research",
    description:
      "Move from this plain-language guide into the research topic on tVNS, taVNS, stimulation sites, protocol variables, and reporting standards.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "View tVNS research",
  },
  {
    title: "Safety and tolerability",
    description:
      "Understand how adverse events, comfort, contraindication awareness, and device differences shape responsible interpretation of non-invasive VNS.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "View safety topic",
  },
  {
    title: "Autonomic regulation",
    description:
      "Connect tVNS language to the wider physiology of sympathetic and parasympathetic state-shifting, HRV, stress, and recovery.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "View regulation topic",
  },
  {
    title: "Auricular fMRI study",
    description:
      "Read Neuvago’s summary of a foundational paper on non-invasive stimulation of external-ear regions and central vagal projections.",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    linkLabel: "Read study summary",
  },
];

const nextPaths = [
  {
    title: "See how Neuvago works",
    description:
      "Move from category education into the practical device-and-app explanation: placement, guided sessions, comfort, and daily routine design.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Explore the product",
    description:
      "Understand Neuvago as a non-invasive vagus nerve stimulator and app system designed for calm, repeatable wellness support.",
    href: "/product",
    linkLabel: "Explore Neuvago",
  },
  {
    title: "Review intended use",
    description:
      "See how Neuvago explains wellness boundaries and what the device is not intended to diagnose, treat, cure, or replace.",
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

export default function TranscutaneousVagusNerveStimulationPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: authorityEditorialDates.vnsClusterPublished,
    dateModified: authorityEditorialDates.vnsClusterModified,
    keywords: [
      "transcutaneous vagus nerve stimulation",
      "tVNS",
      "transcutaneous VNS",
      "transcutaneous auricular vagus nerve stimulation",
      "taVNS",
      "non-invasive vagus nerve stimulation",
      "auricular vagus nerve stimulation",
      "vagus nerve stimulator",
      "Neuvago",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Transcutaneous Vagus Nerve Stimulation", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="learn-transcutaneous-vagus-nerve-stimulation"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Transcutaneous VNS
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Transcutaneous vagus nerve stimulation, explained clearly
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Transcutaneous vagus nerve stimulation, often called tVNS, means
              stimulation delivered through the skin rather than through an
              implanted device. It is one of the most important terms to
              understand when evaluating non-invasive vagus nerve stimulation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This guide explains what tVNS means, how it relates to taVNS and
              auricular VNS, why method details matter, and how Neuvago keeps
              the category clear without turning research language into broad
              medical claims.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/transcutaneous-vagus-nerve-stimulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View tVNS research
              </Link>

              <Link
                href="/learn/auricular-vagus-nerve-stimulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Auricular VNS guide
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur">
            <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                      Method layer
                    </p>
                    <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                      tVNS connects the broad VNS category with the practical
                      details of external stimulation
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-medium text-[#1f1f1c]">
                        tVNS
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                        Transcutaneous vagus nerve stimulation
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          taVNS
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Ear-based branch
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          nVNS
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Non-invasive family
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Simple answer
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              tVNS is a non-invasive way of describing stimulation through the skin
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The term transcutaneous comes from trans, meaning through, and
              cutaneous, meaning skin. In practice, tVNS is used for external
              stimulation approaches that aim to engage vagus nerve-related
              pathways without implanted hardware.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That makes it a useful category term, but not a product claim by
              itself. The responsible question is always: where is stimulation
              applied, what protocol is used, what evidence is being referenced,
              and what is the intended use?
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
              tVNS, taVNS, nVNS, and auricular VNS are related, but not identical
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These terms are often used close together. Separating them makes
              the category easier to understand and helps keep Neuvago’s product
              language precise.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {termCards.map((item) => (
              <TermCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why it matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A clear tVNS guide helps users evaluate the category instead of chasing acronyms
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              tVNS is useful language only when it leads to better questions.
              It should help people understand device type, stimulation site,
              session guidance, evidence limits, and wellness boundaries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyItMatters.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Evaluation criteria
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The important question is not just whether a device says tVNS
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A better evaluation looks at the details that shape the experience
              and the evidence: where stimulation is applied, what settings are
              used, how sessions are guided, and what claims are made.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {evaluationCriteria.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Boundaries
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Good tVNS education should make the limits visible
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Clear boundaries make the category more trustworthy. They help
              users understand that related research does not automatically
              translate into broad product promises.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {methodBoundaries.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago context
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Neuvago uses tVNS language as category education, not as a shortcut to medical claims
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The right role for this page is to help people understand the
              category before they evaluate a non-invasive vagus nerve
              stimulator. The product story should remain practical: placement,
              guidance, comfort, routine, and responsible wellness support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {neuvagoFit.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue learning
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Connect tVNS with the broader VNS and non-invasive VNS cluster
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These pages help place tVNS in the full authority system without
              overloading one page with every detail.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {relatedLearning.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research and trust
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Go deeper into the research layer when you want protocol detail
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Learn page gives a practical overview. The Research pages go
              deeper into method details, safety, autonomic regulation, and key
              study context.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {researchPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Selected references
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Research context for understanding tVNS and taVNS
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These sources help frame transcutaneous VNS as a research method
              with technical variables, reporting standards, and safety context.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                From tVNS education to practical guided use
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Once the terminology is clear, the practical question is how a
                guided non-invasive system fits into everyday life with comfort,
                consistency, and responsible boundaries.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {nextPaths.map((item) => (
                  <LinkCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
