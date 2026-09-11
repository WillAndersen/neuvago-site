import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { PlainEnglishSummary } from "@/components/authority";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

const title =
  "Vagus Nerve Stimulation (VNS) | How It Works and Types | Neuvago";
const description =
  "Learn what VNS is, how implanted, transcutaneous, and auricular approaches differ, how to read evidence, and why device, protocol, safety, and intended use matter.";
const path = "/learn/vagus-nerve-stimulation";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/vagusnervestimulering",
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

const keyPoints = [
  {
    title: "VNS means using stimulation to influence vagal pathways",
    description:
      "Vagus nerve stimulation is a broad term. It can describe implanted clinical systems, transcutaneous approaches, and research methods that use controlled electrical stimulation to influence pathways associated with the vagus nerve.",
  },
  {
    title: "The method matters",
    description:
      "An implanted medical VNS system, a research-grade transcutaneous device, and a consumer wellness device should not be treated as identical. The route, intensity, intended use, evidence, and risk profile can differ significantly.",
  },
  {
    title: "For Neuvago, the focus is non-invasive daily regulation",
    description:
      "Neuvago uses short, app-guided, non-invasive sessions to support a calmer nervous system routine. It is not framed as diagnosis, treatment, or a substitute for medical care.",
  },
];

const vnsTypes = [
  {
    title: "Implanted clinical VNS",
    label: "Medical systems",
    description:
      "A surgically implanted pulse generator connects to the vagus nerve, usually for specific clinical uses under medical supervision. This is the historical foundation of the VNS field, but it is not the same category as a wellness device.",
  },
  {
    title: "Transcutaneous VNS",
    label: "Non-invasive research category",
    description:
      "Transcutaneous VNS, often shortened to tVNS, uses surface electrodes instead of an implant. Research protocols vary by stimulation site, intensity, frequency, session length, and study population.",
  },
  {
    title: "Auricular VNS",
    label: "Ear-based approaches",
    description:
      "Auricular VNS, often shortened to taVNS, focuses on parts of the outer ear associated with auricular branches of the vagus nerve. This is one reason the ear is central in many non-invasive VNS discussions.",
  },
  {
    title: "Guided wellness routines",
    label: "Neuvago’s category",
    description:
      "A wellness-oriented vagus nerve stimulator should be explained with care: what it is designed to support, how sessions work, what the user should feel, and what claims it does not make.",
  },
];

const whyItMatters = [
  {
    title: "It separates the category before products are compared",
    description:
      "A vagus nerve stimulator can refer to very different systems. Understanding delivery route, intended use, protocol, and evidence first makes later product comparison more meaningful.",
  },
  {
    title: "It connects education to mechanism",
    description:
      "The page bridges the broad vagus nerve topic with the more practical question: how can a non-invasive device fit into a daily regulation routine?",
  },
  {
    title: "It protects trust by setting boundaries",
    description:
      "Understanding the differences between clinical treatment, research, and wellness support makes the VNS category clearer and easier to evaluate.",
  },
];

const mechanismCards = [
  {
    title: "A signal, not a switch",
    description:
      "Vagus nerve stimulation should not be understood as flipping the body instantly into calm. A better mental model is a repeated signal that may support pathways involved in regulation and return.",
  },
  {
    title: "Part of a larger autonomic system",
    description:
      "The vagus nerve is one part of the autonomic nervous system. Stimulation is most useful to understand alongside breathing, heart-rate patterns, recovery, sleep pressure, stress load, and daily rhythm.",
  },
  {
    title: "Parameters matter",
    description:
      "Stimulation location, intensity, duration, frequency, comfort, and timing all matter. That is why a guided routine can be more useful than asking users to guess their way through a session.",
  },
  {
    title: "Consistency matters more than drama",
    description:
      "For a wellness routine, the goal is not an extreme sensation. The better frame is gentle, repeatable support that can fit into the same kind of daily rhythm as sleep, recovery, or mindfulness habits.",
  },
];


const evidenceLanes = [
  {
    title: "Implanted VNS",
    description:
      "Implanted VNS is a regulated clinical-device category with surgery, programming, follow-up, device-specific labeling, and a distinct risk context. Evidence from an implanted system stays with that system and indication.",
  },
  {
    title: "Transcutaneous VNS",
    description:
      "tVNS uses external electrodes and includes more than one access site and protocol. Ear-based and neck-based approaches should be interpreted by device, placement, parameters, population, comparator, and outcome.",
  },
  {
    title: "Auricular taVNS",
    description:
      "taVNS is the ear-based branch of transcutaneous VNS. The literature includes neuroimaging, physiological, safety, and clinical studies, but there is no single universal ear site, dose, or outcome that defines the whole field.",
  },
  {
    title: "Product-specific evidence",
    description:
      "A category study does not become evidence for a specific consumer product automatically. Product claims need evidence that actually matches the device, protocol, intended use, and population being discussed.",
  },
];

const studyChecklist = [
  {
    title: "1. Which VNS method was used?",
    description:
      "Start with implanted, cervical transcutaneous, or auricular transcutaneous stimulation. The route and hardware define the evidence lane.",
  },
  {
    title: "2. Where and how was stimulation delivered?",
    description:
      "Look for site, electrode design, waveform, frequency, pulse width, intensity, duty cycle, session length, and total exposure.",
  },
  {
    title: "3. Who was studied?",
    description:
      "Healthy volunteers, a specific clinical population, and everyday wellness users are not interchangeable populations.",
  },
  {
    title: "4. What was the comparator and outcome?",
    description:
      "Sham design, control condition, blinding, follow-up period, and whether the outcome was subjective, physiological, imaging-based, or clinical all affect interpretation.",
  },
  {
    title: "5. What can transfer to this product?",
    description:
      "Only evidence that matches the relevant device and intended use should support product-level claims. General VNS evidence is useful context, not a shortcut to product efficacy.",
  },
];

const externalReferences = [
  {
    title: "VNS Therapy System — current FDA PMA labeling record",
    source: "U.S. FDA, PMA P970003/S240",
    href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?ID=P970003S240",
  },
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
      "Safety of transcutaneous auricular vagus nerve stimulation: a systematic review and meta-analysis",
    source: "Kim et al., Scientific Reports, 2022",
    href: "https://pubmed.ncbi.nlm.nih.gov/36543841/",
  },
];

const neuvagoPrinciples = [
  {
    title: "Non-invasive by design",
    description:
      "Neuvago is built around external stimulation, not surgery or implanted hardware. That distinction should be clear wherever the product is explained.",
  },
  {
    title: "App-guided instead of guesswork",
    description:
      "The app helps turn stimulation into a structured routine with guidance, session framing, and continuity rather than leaving the user to interpret every setting on their own.",
  },
  {
    title: "Wellness support, not medical treatment",
    description:
      "Neuvago stays within clear wellness boundaries: it can educate and support daily regulation routines without presenting itself as a treatment for disease or a replacement for clinical care.",
  },
];

const boundaries = [
  {
    title: "Not all VNS devices are equivalent",
    description:
      "Do not assume that evidence for one device, protocol, stimulation site, or clinical population automatically applies to every other device or use case.",
  },
  {
    title: "More intensity is not the goal",
    description:
      "For non-invasive wellness use, a comfortable and well-guided session is more appropriate than chasing strong sensation. Follow the product guidance and avoid improvising beyond it.",
  },
  {
    title: "Medical questions need medical guidance",
    description:
      "People with medical conditions, implanted electronic devices, pregnancy-related questions, heart rhythm concerns, or active treatment plans should speak with a qualified clinician before use.",
  },
];

const relatedLearning = [
  {
    title: "Implanted vs non-invasive VNS",
    description:
      "Compare surgery, hardware, stimulation site, intended use, safety context, and evidence boundaries before treating VNS methods as equivalent.",
    href: "/learn/implanted-vs-non-invasive-vagus-nerve-stimulation",
    linkLabel: "Compare implanted and non-invasive VNS",
  },
  {
    title: "How to choose a VNS device",
    description:
      "Use a 12-point buyer framework to check method, intended use, product-specific evidence, safety, protocol, practical ownership, and live purchase terms.",
    href: "/learn/how-to-choose-a-vagus-nerve-stimulation-device",
    linkLabel: "Open the buyer guide",
  },
  {
    title: "Ear-based vs. neck-based VNS",
    description:
      "Compare auricular taVNS and cervical nVNS by anatomy, device design, protocol, evidence, safety, comfort, and intended use.",
    href: "/learn/ear-vs-neck-vagus-nerve-stimulation",
    linkLabel: "Compare ear and neck methods",
  },
  {
    title: "Non-invasive vagus nerve stimulation",
    description:
      "Go deeper into nVNS, external stimulation, device differences, and how a guided wellness system should be evaluated.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Explore non-invasive VNS",
  },
  {
    title: "Transcutaneous vagus nerve stimulation",
    description:
      "A focused guide to tVNS, taVNS, stimulation through the skin, method differences, and why protocol details matter.",
    href: "/learn/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Explore tVNS",
  },
  {
    title: "Auricular vagus nerve stimulation",
    description:
      "A focused guide to ear-based VNS, taVNS, placement language, evidence context, and responsible wellness positioning.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Explore auricular VNS",
  },
  {
    title: "Vagus nerve",
    description:
      "Start here if you want the broader foundation before focusing on stimulation devices and non-invasive VNS.",
    href: "/learn/vagus-nerve",
    linkLabel: "Understand the vagus nerve",
  },
  {
    title: "Nervous system regulation",
    description:
      "A wider framework for understanding activation, settling, recovery, and the daily patterns that shape how supported the body feels.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
];

const nextPaths = [
  {
    title: "Read the research topic",
    description:
      "Move from plain-language education into the research library’s topic page on implanted and non-invasive vagus nerve stimulation.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "View VNS research",
  },
  {
    title: "Read the tVNS guide",
    description:
      "Learn what transcutaneous vagus nerve stimulation means in plain language before going deeper into method-focused research.",
    href: "/learn/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Read tVNS guide",
  },
  {
    title: "Explore transcutaneous VNS research",
    description:
      "Go deeper into tVNS, taVNS, stimulation sites, protocol variables, and why method details matter when interpreting non-invasive VNS evidence.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "View tVNS topic",
  },
  {
    title: "Review safety research",
    description:
      "Understand safety, tolerability, adverse event reporting, and why evidence should be interpreted by device, protocol, and population.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "View safety topic",
  },
  {
    title: "Explore autonomic regulation",
    description:
      "Connect vagus nerve stimulation to sympathetic and parasympathetic state-shifting, HRV, recovery, and nervous system flexibility.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "View regulation topic",
  },
  {
    title: "See how Neuvago works",
    description:
      "Learn how device placement, guided sessions, app support, and routine design fit together in the Neuvago system.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Explore the product",
    description:
      "Move from the VNS overview to the device and app system designed for calm, repeatable, non-invasive support.",
    href: "/product",
    linkLabel: "Explore the product",
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
      <a href={href} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline">
        Open source
      </a>
    </article>
  );
}

export default function VagusNerveStimulationPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    datePublished: authorityEditorialDates.vnsClusterPublished,
    dateModified: authorityEditorialDates.vnsClusterModified,
    keywords: [
      "vagus nerve stimulation",
      "non-invasive vagus nerve stimulation",
      "vagus nerve stimulator",
      "tVNS",
      "taVNS",
      "auricular vagus nerve stimulation",
      "nervous system regulation",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus Nerve Stimulation", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve-stimulation" />

      <section className="border-b border-black/5">
        <div className="mx-auto grid lg:min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Vagus nerve stimulation
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Vagus nerve stimulation (VNS): types, methods, evidence, and limits
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Vagus nerve stimulation is a broad category for using gentle
              electrical stimulation to engage pathways associated with the
              vagus nerve. The important thing is understanding the difference
              between implanted clinical VNS, non-invasive VNS, research
              protocols, and a wellness-oriented vagus nerve stimulator like
              Neuvago.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how Neuvago works
              </Link>

              <Link
                href="/learn/non-invasive-vagus-nerve-stimulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Non-invasive VNS
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-[#ebe4da] blur-2xl" />

            <div className="hidden rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur lg:block">
              <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
                <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        VNS overview
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        The bridge between vagus nerve education, research, and
                        the Neuvago system
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Non-invasive VNS
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          External stimulation, no implant
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Guidance
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Sessions and routine
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Trust
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Clear boundaries
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlainEnglishSummary
        title="VNS is a category with several very different approaches"
        description="The key is to separate implanted clinical VNS, non-invasive VNS, tVNS, auricular VNS, and wellness-oriented guided routines. That distinction helps users understand the category without overreading the research."
        points={[
          { title: "Different methods", description: "Implanted systems, external stimulation, ear-based approaches, and consumer wellness devices should not be treated as identical." },
          { title: "Different evidence", description: "Evidence depends on the device, protocol, population, outcome measure, and intended use being studied." },
          { title: "Different claims", description: "Neuvago should stay in a responsible wellness lane: guided routines, education, and clear boundaries." },
        ]}
        primaryHref="/research/topics/vagus-nerve-stimulation"
        primaryLabel="View VNS research"
        secondaryHref="/how-it-works"
        secondaryLabel="How Neuvago works"
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Simple definition
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagus nerve stimulation is not one single thing. It is a category
              of approaches.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              At the highest level, vagus nerve stimulation means applying a
              controlled stimulus with the aim of influencing pathways connected
              to the vagus nerve. In medical and research settings, VNS has been
              studied through implanted devices, surface electrodes, ear-based
              stimulation, and different stimulation protocols.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That breadth is why careful language matters. A non-invasive vagus
              nerve stimulation device is not the same as an implanted clinical
              system. A wellness routine is not the same as a medical treatment.
              And a promising research mechanism is not the same as a guaranteed
              personal outcome.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The most useful way to understand the category is to separate the
              core idea from the specific method: what is being stimulated, how
              the stimulation is delivered, what the intended use is, and what
              claims are appropriate for that context.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key takeaways
            </p>

            <div className="mt-8 space-y-5">
              {keyPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Types of VNS
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The most important distinction is how stimulation is delivered and
              what it is intended to do
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The phrase vagus nerve stimulation can hide important differences.
              A better explanation separates the main
              branches so users do not confuse clinical treatment, research, and
              wellness support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {vnsTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Why this distinction matters
            </p>

            <div className="mt-8 space-y-5">
              {whyItMatters.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why the category matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagus nerve stimulation sits between education, research, and the
              practical question of daily nervous system support
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This topic often connects with questions about stress, sleep, recovery,
              vagal tone, or nervous system regulation. Other readers
              come to the topic while comparing vagus nerve stimulators because
              they have already heard that stimulation may be a practical way
              to support vagal pathways.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              People come to VNS from different starting points. Some want to
              understand stress, sleep, recovery, vagal tone, or nervous system
              regulation; others are comparing vagus nerve stimulators. In both
              cases, the useful next step is to understand the category, connect
              it to the research, and see where a non-invasive, app-guided system
              like Neuvago fits without overstating what a wellness device can claim.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/vagus-nerve"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Learn the vagus nerve basics
              </Link>

              <Link
                href="/research/topics/vagus-nerve-stimulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore the research topic
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How to think about mechanism
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A useful mental model is signal, pathway, routine — not instant
              transformation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              For everyday education, the category is easier to understand when
              it is placed inside the broader autonomic nervous system. The
              vagus nerve is part of how the body communicates about internal
              state, and stimulation is one way researchers and device companies
              explore that communication.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mechanismCards.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">Evidence map</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">VNS evidence belongs to different lanes, not one shared bucket</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Implanted VNS, cervical tVNS, and auricular taVNS share a family name, but they do not share one device, one protocol, one intended use, or one evidence base. Start by identifying the method before interpreting a result.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">{evidenceLanes.map((item) => (<TextCard key={item.title} {...item} />))}</div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">Read the evidence</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">Five questions make a VNS study much easier to interpret</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The name VNS is not enough. Method, dose, population, comparator, and outcome determine what a study can support — and whether any part of it is relevant to a specific product.
            </p>
          </div>
          <div className="grid gap-6">{studyChecklist.map((item) => (<TextCard key={item.title} {...item} />))}</div>
        </div>
      </section>


      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How Neuvago fits
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Neuvago is best understood as a non-invasive vagus nerve stimulator
              for guided wellness routines
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago focuses on practical, responsible use rather than dramatic
              claims: short sessions, comfortable stimulation, app guidance,
              and a calmer routine that fits into real life.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The device and app explain how sessions work. The Learn and Research
              libraries provide the broader VNS context, the underlying nervous
              system concepts, and the boundaries around what the evidence can
              and cannot support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore the device and app
              </Link>

              <Link
                href="/app"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore app guidance
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Neuvago principles
            </p>

            <div className="mt-8 space-y-5">
              {neuvagoPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Important boundaries
            </p>

            <div className="mt-8 space-y-5">
              {boundaries.map((item) => (
                <TextCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Trust note
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The strongest VNS education is precise about what is known, what
              is still being studied, and what a wellness product can claim
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Vagus nerve stimulation is a serious research and clinical field.
              That does not mean every non-invasive device has the same evidence
              base or the same intended use. For Neuvago, that means calm, clear,
              and conservative communication.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This distinction helps users make better decisions by separating
              research context from product-specific evidence, keeping the product
              easy to understand, and making the boundaries explicit.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/medical-disclaimer"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read medical disclaimer
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
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">Selected references</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">Start with official labeling, method reviews, reporting standards, and safety evidence</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">These sources help separate implanted clinical VNS from transcutaneous methods and show why protocol details and product-specific evidence boundaries matter.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{externalReferences.map((item) => (<ExternalReferenceCard key={item.title} {...item} />))}</div>
        </div>
      </section>


      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue learning
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Place vagus nerve stimulation inside the wider nervous system
              picture
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {relatedLearning.map((item) => (
              <LinkCard key={item.title} {...item} />
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
                From VNS understanding to the Neuvago system
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Once the category is clear, the next question is practical: how
                does a non-invasive vagus nerve stimulator fit into a daily
                routine? These paths connect the education layer with research,
                product understanding, and app-guided use.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {nextPaths.map((item) => (
                <LinkCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-wave2d2a2-vns-overview-hardening="true" className="border-t border-black/5 bg-[#eee7dd] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7b7167]">Direct answers</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">What is vagus nerve stimulation—and what is a vagus nerve stimulator?</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-8 text-[#5f5a52]">
              <p>In medical and technical usage, vagus nerve stimulation normally means controlled electrical stimulation delivered by a device with the aim of influencing pathways associated with the vagus nerve. A vagus nerve stimulator is a device that delivers that stimulation. The name alone does not tell you whether the system is implanted or external, where it stimulates, which protocol it uses or what it is intended to do.</p>
              <p>Implanted medical VNS uses surgically placed components and clinical follow-up. Non-invasive systems use surface electrodes, including cervical and auricular approaches. tVNS and taVNS are not one standard dose: device, site, waveform, intensity, session design, population and outcome determine what a study can support.</p>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#5f5a52]">
              <p>Medical use belongs to specific regulated products, indications and jurisdictions. An implanted-device listing does not give every stimulator the same indication, and evidence from one system or protocol does not automatically become evidence for Neuvago or another device.</p>
              <p>Electrical VNS should be kept distinct from breathing, movement, relaxation, sound, and touch. Those practices may influence experience or autonomic measures without becoming defined electrical VNS.</p>
              <p><Link href="/learn/how-to-stimulate-the-vagus-nerve" className="font-medium underline underline-offset-4">Explore all stimulation-method categories and their evidence limits</Link></p>
            </div>
          </div>
          <div className="mt-10 rounded-[1.5rem] border border-black/8 bg-white/65 p-6"><h3 className="text-xl font-medium">Before comparing stimulators</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#5f5a52]"><li>Name the method and stimulation site.</li><li>Check the device, parameters, population and measured outcome.</li><li>Separate medical intended use from general wellness use.</li><li>Do not treat stronger sensation as proof of better engagement or outcome.</li></ul></div>
        </div>
      </section>
    </main>
  );
}
