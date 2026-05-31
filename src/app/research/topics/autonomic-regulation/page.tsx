import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

const title =
  "Autonomic Regulation Research | ANS, Vagus Nerve and HRV | Neuvago";
const description =
  "Explore autonomic regulation research across sympathetic and parasympathetic physiology, HRV, vagal pathways, stress load, recovery and VNS interpretation.";
const path = "/research/topics/autonomic-regulation";

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
    title: "Autonomic regulation is about flexible state-shifting",
    description:
      "The autonomic nervous system helps the body mobilize, settle, recover, and return. Research often focuses on how flexible those state shifts are, not whether the body is always calm.",
  },
  {
    title: "The vagus nerve is one pathway in a larger system",
    description:
      "Vagal pathways are central to parasympathetic regulation, but autonomic regulation also involves sympathetic activation, baroreflexes, respiration, brainstem circuits, and context-dependent feedback loops.",
  },
  {
    title: "HRV is useful, but not a complete picture",
    description:
      "Heart rate variability is widely used as a non-invasive marker of cardiac autonomic regulation, but it should be interpreted with measurement context, breathing, posture, time of day, and method limitations.",
  },
  {
    title: "VNS research should be interpreted through physiology",
    description:
      "Vagus nerve stimulation, tVNS, and taVNS are easiest to understand when placed inside the broader physiology of autonomic regulation, target engagement, safety, and study design.",
  },
];

const systemLayers = [
  {
    title: "Sympathetic activation",
    label: "Mobilize",
    description:
      "Sympathetic activity helps the body respond to challenge, effort, uncertainty, and demand. In research, it is often discussed alongside arousal, cardiovascular response, and stress physiology.",
  },
  {
    title: "Parasympathetic influence",
    label: "Settle",
    description:
      "Parasympathetic pathways, including vagal influences on the heart, are involved in slowing, settling, restoration, and flexible recovery after demand.",
  },
  {
    title: "Autonomic flexibility",
    label: "Adapt",
    description:
      "A flexible system can mobilize when needed and return when the challenge passes. This is why regulation research often focuses on adaptability rather than constant calm.",
  },
  {
    title: "Feedback and context",
    label: "Interpret",
    description:
      "Autonomic signals are shaped by breathing, posture, sleep, stress history, attention, environment, medication, and measurement method. Context is part of the signal.",
  },
];

const researchThemes = [
  {
    title: "Brain–body control loops",
    description:
      "Autonomic regulation is not just a peripheral body process. It involves communication between the brain, brainstem, heart, lungs, gut, immune system, and sensory feedback from the body.",
  },
  {
    title: "Vagal regulation and cardiac control",
    description:
      "The vagus nerve plays an important role in cardiac regulation, especially in fast parasympathetic influences on heart rate and recovery after physiological demand.",
  },
  {
    title: "HRV as a measurement window",
    description:
      "HRV research gives a non-invasive window into cardiac autonomic regulation, but it does not measure the entire autonomic nervous system or prove one simple internal state by itself.",
  },
  {
    title: "Stress, load, and recovery",
    description:
      "Stress research often examines how autonomic patterns shift during challenge and how quickly the system returns toward baseline after pressure ends.",
  },
  {
    title: "Neuromodulation and target engagement",
    description:
      "VNS, tVNS, and taVNS studies often ask whether a stimulation protocol influences autonomic markers or related neural pathways in a measurable, repeatable way.",
  },
  {
    title: "Translation into daily life",
    description:
      "For a wellness brand, the practical question is how research context can support safer education around stress, sleep, recovery, and routines without becoming medical claim language.",
  },
];

const measurementPrinciples = [
  {
    title: "HRV needs method discipline",
    description:
      "Different HRV metrics, recording lengths, devices, preprocessing choices, and breathing patterns can change interpretation. A single HRV number should not be treated as a full diagnosis of autonomic state.",
  },
  {
    title: "State and trait are different",
    description:
      "A momentary reading during stress, sleep, illness, caffeine, exercise, or poor recovery is not the same thing as a stable baseline across repeated measurements.",
  },
  {
    title: "Vagal tone is not one simple score",
    description:
      "Vagal regulation is often discussed through HRV, but the relationship between HRV metrics and vagal influence depends on physiology, protocol, and the specific question being asked.",
  },
  {
    title: "Subjective calm and physiology may diverge",
    description:
      "Someone may feel calm while physiology remains activated, or feel alert while some markers look stable. Research interpretation should leave room for both subjective and objective signals.",
  },
];

const evidenceSignals = [
  {
    title: "HRV standards and interpretation",
    source: "Task Force, 1996",
    description:
      "A foundational standards paper for HRV measurement and physiological interpretation. It remains an important reference for why HRV requires methodological care.",
    href: "https://pubmed.ncbi.nlm.nih.gov/8598068/",
    linkLabel: "View PubMed record",
  },
  {
    title: "Neurovisceral integration",
    source: "Thayer & Lane, 2000",
    description:
      "A major theoretical model linking autonomic regulation, emotional regulation, attention, and cardiovascular control into a broader brain–body framework.",
    href: "https://pubmed.ncbi.nlm.nih.gov/11163422/",
    linkLabel: "View PubMed record",
  },
  {
    title: "VNS and cardiovascular regulation",
    source: "Capilupi et al., 2020",
    description:
      "A review of VNS and cardiovascular physiology, including vagal influence on cardiac control, HRV, homeostasis, and translational neuromodulation questions.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31109966/",
    linkLabel: "View PubMed record",
  },
  {
    title: "Stress and HRV literature",
    source: "Kim et al., 2018",
    description:
      "A meta-analysis and review examining why HRV is commonly used in psychological stress research and how stress-related autonomic patterns are interpreted.",
    href: "https://pubmed.ncbi.nlm.nih.gov/29486547/",
    linkLabel: "View PubMed record",
  },
];

const vnsInterpretation = [
  {
    title: "VNS is one input into a regulatory system",
    description:
      "A stimulation protocol is not the whole regulatory picture. Autonomic state is shaped by sleep, stress load, breathing, context, health status, and repeated patterns over time.",
  },
  {
    title: "Target engagement matters more than vocabulary",
    description:
      "Calling something vagus nerve stimulation does not by itself establish the mechanism. Research needs clear stimulation sites, parameters, controls, and outcome measures.",
  },
  {
    title: "Physiological markers are not product promises",
    description:
      "A study showing changes in HRV or other autonomic markers does not automatically prove broad benefits, clinical outcomes, or equivalence across devices.",
  },
  {
    title: "Wellness language should stay practical",
    description:
      "For Neuvago, autonomic regulation is best used to explain routines, state-shifting, recovery support, and responsible education rather than disease treatment claims.",
  },
];

const neuvagoUse = [
  {
    title: "Connect Learn and Research",
    description:
      "The Learn page explains nervous system regulation in plain language. This research topic gives that concept a stronger evidence-oriented backbone.",
  },
  {
    title: "Support HRV without overclaiming",
    description:
      "HRV belongs in the authority system, but it should be framed as a useful measurement window with limitations rather than a complete proof of calm, health, or product effect.",
  },
  {
    title: "Bridge VNS to everyday outcomes carefully",
    description:
      "Autonomic regulation helps connect VNS/tVNS research to stress, sleep, and recovery while keeping the interpretation physiological and conservative.",
  },
  {
    title: "Strengthen trust before conversion",
    description:
      "Readers who understand the physiology, limits, and vocabulary behind regulation are better prepared to evaluate how Neuvago works without needing exaggerated claims.",
  },
];

const internalPathways = [
  {
    title: "Vagus nerve stimulation research",
    description:
      "Return to the broader VNS topic covering implanted VNS, non-invasive VNS, auricular stimulation, mechanisms, and responsible interpretation.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "Explore VNS research",
  },
  {
    title: "Transcutaneous VNS research",
    description:
      "Move into the method layer for tVNS, taVNS, stimulation sites, protocol variables, target engagement, and reporting standards.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Explore tVNS topic",
  },
  {
    title: "Heart rate variability research",
    description:
      "Explore HRV methodology, autonomic flexibility, vagal regulation, and why HRV appears so often in regulation research.",
    href: "/research/topics/heart-rate-variability",
    linkLabel: "Explore HRV topic",
  },
  {
    title: "Nervous system regulation guide",
    description:
      "A plain-language Learn page for understanding activation, settling, recovery, return, and regulation in everyday life.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Read the guide",
  },
  {
    title: "Stress condition page",
    description:
      "Move from research context into the lived-experience pathway for stress, overload, activation, and recovery.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "Sleep condition page",
    description:
      "Understand how evening activation, settling, and recovery connect the autonomic regulation topic to sleep-related user intent.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
];

const commercialPathways = [
  {
    title: "How Neuvago works",
    description:
      "Move from autonomic regulation research into the practical product experience: device placement, app guidance, session structure, and routines.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Explore the product",
    description:
      "Understand Neuvago as a non-invasive vagus nerve stimulator and app-guided wellness system with clear boundaries.",
    href: "/product",
    linkLabel: "Explore Neuvago",
  },
  {
    title: "Safety and tolerability",
    description:
      "Review the trust-focused research topic on adverse events, tolerability, contraindication awareness, and responsible interpretation.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "View safety topic",
  },
];

const externalReferences = [
  {
    title:
      "Heart rate variability: standards of measurement, physiological interpretation and clinical use",
    source: "Task Force of the ESC and NASPE, Circulation, 1996",
    href: "https://pubmed.ncbi.nlm.nih.gov/8598068/",
  },
  {
    title: "A model of neurovisceral integration in emotion regulation and dysregulation",
    source: "Thayer & Lane, Journal of Affective Disorders, 2000",
    href: "https://pubmed.ncbi.nlm.nih.gov/11163422/",
  },
  {
    title: "Heart rate variability, prefrontal neural function, and cognitive performance",
    source: "Thayer et al., Annals of Behavioral Medicine, 2009",
    href: "https://pubmed.ncbi.nlm.nih.gov/19424767/",
  },
  {
    title: "Vagus Nerve Stimulation and the Cardiovascular System",
    source: "Capilupi et al., Cold Spring Harbor Perspectives in Medicine, 2020",
    href: "https://pubmed.ncbi.nlm.nih.gov/31109966/",
  },
  {
    title: "Pitfalls of assessment of autonomic function by heart rate variability",
    source: "Hayano & Yuda, Journal of Physiological Anthropology, 2019",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6416928/",
  },
  {
    title: "Stress and Heart Rate Variability: A Meta-Analysis and Review of the Literature",
    source: "Kim et al., Psychiatry Investigation, 2018",
    href: "https://pubmed.ncbi.nlm.nih.gov/29486547/",
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

function SystemLayerCard({
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

export default function AutonomicRegulationResearchPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Research topics",
    datePublished: authorityEditorialDates.vnsClusterPublished,
    dateModified: authorityEditorialDates.vnsClusterModified,
    keywords: [
      "autonomic regulation",
      "autonomic nervous system regulation",
      "autonomic flexibility",
      "vagus nerve regulation",
      "heart rate variability",
      "HRV research",
      "sympathetic nervous system",
      "parasympathetic nervous system",
      "vagus nerve stimulation autonomic regulation",
      "non-invasive vagus nerve stimulation research",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Topic Research", path: "/research/topics" },
      { name: "Autonomic Regulation", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="research-topics-autonomic-regulation"
      />

      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Autonomic Regulation
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Autonomic regulation research: ANS, HRV, and vagal pathways
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Autonomic regulation research studies how the body mobilizes,
              settles, adapts, and returns. It is the physiology behind many of
              the topics Neuvago already explains in plain language: stress,
              sleep, recovery, HRV, vagal pathways, and nervous system
              regulation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This page gives Neuvago a research-grade bridge between vagus
              nerve stimulation, transcutaneous VNS, heart rate variability, and
              everyday regulation without turning physiology into overconfident
              product claims.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/heart-rate-variability"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore HRV research
              </Link>

              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Read regulation guide
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur">
            <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                      Research bridge
                    </p>
                    <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                      The physiology layer connecting VNS, HRV, stress, sleep,
                      and recovery
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-medium text-[#1f1f1c]">
                        Autonomic flexibility
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                        Mobilize, settle, recover, return
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          HRV
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Measurement window
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Vagal pathways
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          One part of a wider system
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-[#1f1f1c] p-4 text-white">
                      <p className="text-sm font-medium">
                        Research interpretation
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        Useful context, not universal product proof
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Quick answers
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              What autonomic regulation means in the Neuvago research library
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {quickAnswers.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              The system layer
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Autonomic regulation is not one calm state. It is a dynamic
              balance between activation, settling, adaptation, and context.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The autonomic nervous system is often simplified into sympathetic
              “fight or flight” and parasympathetic “rest and digest.” That
              shorthand is useful, but the research picture is richer. The body
              is constantly adjusting cardiovascular, respiratory, digestive,
              immune, and attentional states through feedback loops.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              For Neuvago, the point is not to make users memorize physiology.
              The point is to explain why stress, sleep, recovery, HRV, and
              vagus nerve stimulation belong in the same knowledge system.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {systemLayers.map((item) => (
              <SystemLayerCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research themes
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The topic connects physiology, measurement, stress, and VNS
              interpretation
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {researchThemes.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Evidence signals
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A few anchor references help keep the topic grounded
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page is not a final systematic review. It is a topic layer
              that organizes important research directions and links out to
              foundational sources that shape how autonomic regulation is
              interpreted.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {evidenceSignals.map((item) => (
              <EvidenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Measurement principles
            </p>
            <div className="mt-8 space-y-5">
              {measurementPrinciples.map((item) => (
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

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              HRV and interpretation
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              HRV is valuable because it is accessible, but that also makes it
              easy to overinterpret.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              HRV is one of the most useful measurement bridges between the
              autonomic nervous system and everyday regulation conversations.
              But HRV is not a standalone truth machine. It reflects cardiac
              autonomic regulation under specific conditions, not the entire
              state of a person.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why Neuvago should use HRV language carefully. It can help
              explain stress load, recovery, and flexibility, but it should not
              be used as a simplified promise that a device has created one
              universal physiological outcome.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics/heart-rate-variability"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore HRV topic
              </Link>

              <Link
                href="/research/studies/task-force-1996-heart-rate-variability-standards"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Read HRV standards summary
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              VNS interpretation
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Autonomic regulation gives VNS research the right physiological
              frame
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Vagus nerve stimulation research is often discussed through
              outcomes such as HRV, mood, stress, inflammation, pain, or sleep.
              Autonomic regulation helps keep those conversations organized by
              asking what pathway, protocol, marker, and context are actually
              being studied.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {vnsInterpretation.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Responsible Neuvago use
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              This topic should make the site more trustworthy, not more
              claim-heavy.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Autonomic regulation is a powerful organizing concept because it
              ties together the user’s lived experience with physiological
              research. But it should stay educational. Neuvago should not use
              it to imply diagnosis, treatment, prevention, cure, or guaranteed
              physiological change.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The strongest commercial role for this topic is trust. It helps
              readers understand the science vocabulary, then move calmly into
              how the Neuvago product and app are designed for guided wellness
              routines.
            </p>
          </div>

          <div className="space-y-5">
            {neuvagoUse.map((item) => (
              <TextCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue through the authority system
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Autonomic regulation connects the research library to Learn,
              Conditions, and the product experience
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {internalPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Practical next steps
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Move from research context into how Neuvago is designed and used
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commercialPathways.map((item) => (
              <LinkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              External references
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Selected sources for the autonomic regulation topic
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {externalReferences.map((item) => (
              <ExternalReferenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-4xl border-t border-black/8 pt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Topic note
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page is educational and research-oriented. It is not medical
              advice and should not be used to diagnose, treat, prevent, or cure
              any condition. Autonomic regulation research can help explain the
              physiology behind stress, sleep, recovery, HRV, and VNS, but it
              should be interpreted with study design, device type, population,
              and intended use in mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/legal/medical-disclaimer"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Read medical disclaimer
              </Link>
              <Link
                href="/research/topics"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to topic research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
