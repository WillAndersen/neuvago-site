import type { Metadata } from "next";
import Link from "next/link";
import { AuthorityVisualSection } from "@/components/authority";
import { JsonLd } from "@/components/seo/json-ld"
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data"

export const metadata: Metadata = {
  title: "Research Hub | VNS, tVNS and Safety | Neuvago",
  description:
    "Browse Neuvago research topics and study summaries on vagus nerve stimulation, transcutaneous VNS, autonomic regulation, safety and tolerability, heart rate variability, stress, sleep, recovery, and nervous system regulation.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research Hub | VNS, tVNS and Safety | Neuvago",
    description:
      "Browse Neuvago research topics and study summaries on vagus nerve stimulation, transcutaneous VNS, autonomic regulation, safety and tolerability, heart rate variability, stress, sleep, recovery, and nervous system regulation.",
    url: "/research",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Hub | VNS, tVNS and Safety | Neuvago",
    description:
      "Browse Neuvago research topics and study summaries on vagus nerve stimulation, transcutaneous VNS, autonomic regulation, safety and tolerability, heart rate variability, stress, sleep, recovery, and nervous system regulation.",
  },
};

const researchFoundations = [
  {
    title: "Vagus nerve stimulation",
    description:
      "A core research topic on non-invasive vagus nerve stimulation, mechanisms, and why it matters within the broader evidence base.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "Explore topic",
  },
  {
    title: "Transcutaneous VNS",
    description:
      "A method-focused research topic on tVNS, taVNS, stimulation sites, protocol variables, target engagement, and responsible interpretation.",
    href: "/research/topics/transcutaneous-vagus-nerve-stimulation",
    linkLabel: "Explore tVNS topic",
  },
  {
    title: "Safety and tolerability",
    description:
      "A trust-focused research topic on reported adverse events, tolerability, contraindication awareness, and responsible interpretation of non-invasive VNS evidence.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "Explore safety topic",
  },
  {
    title: "Autonomic regulation",
    description:
      "A connective research topic on sympathetic and parasympathetic pathways, vagal regulation, HRV, stress physiology, and state-shifting.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "Explore regulation topic",
  },
  {
    title: "Heart rate variability",
    description:
      "A research topic on HRV, autonomic flexibility, recovery, and why heart rate variability appears so often in regulation conversations.",
    href: "/research/topics/heart-rate-variability",
    linkLabel: "Explore topic",
  },
  {
    title: "Gut–brain axis",
    description:
      "A broader research topic on how neural, immune, and signaling pathways connect body systems, including vagal pathways.",
    href: "/research/topics/gut-brain-axis",
    linkLabel: "Explore topic",
  },
];

const researchThemes = [
  {
    title: "Stress and overload",
    description:
      "Evidence pathways around prolonged activation, physiological stress responses, overwhelm, and why the body can stay “on” longer than expected.",
  },
  {
    title: "Sleep and unwinding",
    description:
      "Research themes around evenings, downshifting, restoration, and what shapes whether sleep feels reachable and restorative.",
  },
  {
    title: "Emotional regulation",
    description:
      "A research-informed view of overwhelm, reactivity, shutdown, emotional carrying capacity, and return after emotional load.",
  },
  {
    title: "Resilience and flexibility",
    description:
      "Themes connected to vagal tone, recovery quality, adaptability, and how supported the system feels across time and context.",
  },
];

const libraryStructure = [
  {
    title: "Core topics",
    description:
      "Anchor pages for the major themes behind the research layer, giving the broader Neuvago evidence system clearer structure.",
  },
  {
    title: "Topic pages",
    description:
      "Focused topic pages around areas like vagus nerve stimulation, transcutaneous VNS, safety, autonomic regulation, heart rate variability, inflammation, and the gut–brain axis.",
  },
  {
    title: "Study summaries",
    description:
      "Published papers organized into a format that makes methods, findings, limitations, and context easier to browse.",
  },
  {
    title: "References and context",
    description:
      "Supporting evidence layers that help readers place individual studies inside a broader scientific and conceptual picture.",
  },
];

const featuredStudies = [
  {
    title: "Porges, 1995",
    subtitle: "Polyvagal theory",
    description:
      "A landmark framework linking vagal pathways with safety, stress responses, social engagement, and autonomic state shifts.",
    href: "/research/studies/porges-1995-polyvagal-theory",
  },
  {
    title: "Thayer & Lane, 2000",
    subtitle: "Neurovisceral integration",
    description:
      "An influential model connecting emotional regulation, autonomic flexibility, HRV, and vagal regulation.",
    href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
  },
  {
    title: "Task Force, 1996",
    subtitle: "Heart rate variability standards",
    description:
      "The foundational methodological reference for HRV research and one of the core papers behind autonomic regulation research.",
    href: "/research/studies/task-force-1996-heart-rate-variability-standards",
  },
  {
    title: "Tracey, 2002",
    subtitle: "Inflammatory reflex",
    description:
      "A landmark concept describing how neural pathways, including the vagus nerve, may participate in immune regulation.",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
  },
  {
    title: "Frangos et al., 2015",
    subtitle: "Auricular vagus nerve stimulation and fMRI",
    description:
      "Important neuroimaging evidence supporting non-invasive access to vagal pathways through stimulation of the ear.",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
  },
  {
    title: "Mayer, 2011",
    subtitle: "Gut–brain axis communication",
    description:
      "A major review explaining how neural, hormonal, and immune pathways connect the gut and brain, including vagal signaling.",
    href: "/research/studies/mayer-2011-gut-brain-axis",
  },
];

const researchPathways = [
  {
    title: "Use Research to deepen Learn",
    description:
      "Move from evidence summaries into clearer educational explainers when you want the bigger picture behind the topics you are reading about.",
    href: "/learn",
    linkLabel: "Go to learning hub",
  },
  {
    title: "Use Research to support Conditions",
    description:
      "Move from evidence into symptom and lived-experience pathways when the question starts with stress, sleep, anxiety, or burnout.",
    href: "/conditions",
    linkLabel: "Browse conditions",
  },
  {
    title: "Use Research to strengthen the broader system",
    description:
      "Research adds depth and trust to Product, App, and How it works without turning the site into a claim-heavy medical experience.",
    href: "/how-it-works",
    linkLabel: "See how it connects",
  },
];

const principles = [
  {
    title: "Evidence-informed, not overclaimed",
    description:
      "The research layer builds trust through careful interpretation, not through dramatic claims or overstated promises.",
  },
  {
    title: "Clarity over jargon",
    description:
      "The goal is to make important topics easier to understand without flattening them into hype or making them inaccessible.",
  },
  {
    title: "Useful in everyday life",
    description:
      "Research is most valuable here when it helps people better understand stress, calm, sleep, recovery, and how those themes fit together.",
  },
];

export default function ResearchPage() {
    const structuredData = buildPageWithBreadcrumbStructuredData({
    title: "Research Hub | VNS, tVNS and Safety | Neuvago",
    description: "Browse Neuvago research topics and study summaries on vagus nerve stimulation, transcutaneous VNS, autonomic regulation, safety and tolerability, heart rate variability, stress, sleep, recovery, and nervous system regulation.",
    path: "/research",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
    ],
  });


  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="research" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              A clearer research hub for the vagus nerve, stress, sleep, recovery, and nervous system regulation
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago research hub organizes topic pages, study summaries,
              and evidence-informed pathways around vagus nerve stimulation,
              transcutaneous VNS, safety and tolerability, heart rate variability, stress, sleep, recovery, emotional
              regulation, and broader nervous system regulation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Browse studies library
              </Link>

              <Link
                href="/research/topics"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore research topics
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-[#ebe4da] blur-2xl" />

            <div className="rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur">
              <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
                <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Evidence layer
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A research layer organized around topics, studies, and evidence pathways
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Research topics
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Major themes and concepts
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Studies
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Published papers and summaries
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Pathways
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Learn, conditions, and system context
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

      <AuthorityVisualSection
        eyebrow="Research visual"
        title="Evidence, organized in a calmer way"
        description="Neuvago’s research layer should feel thoughtful rather than clinical: topic pages, study summaries, and careful interpretation organized around what the evidence can and cannot say."
        image={{ src: "/images/neuvago/research-hub-evidence-desktop.webp", alt: "Neuvago device beside abstract research cards and evidence visuals." }}
      />


      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Core research topics
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with the topics that anchor the research layer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These topic pages are the clearest entry points into the evidence
              side of Neuvago. Transcutaneous VNS and safety now sit beside the broader VNS topic as priority trust topics for the category.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {researchFoundations.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Main research themes
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The research themes people most often care about
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The research hub is organized around the real questions people
              bring into the site around stress, sleep, recovery, emotional
              load, and nervous system flexibility.
            </p>
          </div>

          <div className="grid gap-6">
            {researchThemes.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-xl font-medium leading-tight text-[#1f1f1c]">
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Research structure
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                A clearer evidence structure, not just a generic library
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The research hub is organized around research topics, study
                summaries, and supporting evidence pathways that make the
                library easier to browse and understand.
              </p>
            </div>

            <div>
              <Link
                href="/research/topics"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore research topics
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {libraryStructure.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Scientific Studies Library
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Published studies worth starting with
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The studies library brings together individual papers in a
                format that makes methods, findings, limitations, and context
                easier to browse than raw references alone.
              </p>
            </div>

            <div>
              <Link
                href="/research/studies"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Browse studies library
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredStudies.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-[#8a847b]">
                  {item.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  Read study summary
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/research/studies"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Browse studies library
            </Link>

            <Link
              href="/research/topics"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore research topics
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Research principles
            </p>

            <div className="mt-8 space-y-5">
              {principles.map((item) => (
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

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Research should build trust, not confusion
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The purpose is to support clarity, seriousness, and better understanding.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How research supports the broader site
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Research is the evidence layer behind the broader Neuvago system
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The role of research is not only to collect references. It adds
              deeper structure and trust to the ideas expressed throughout
              Learn, Conditions, Product, App, and the broader knowledge
              universe.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              In practice, the research hub functions as a serious
              evidence-informed layer beneath the rest of the site, not a
              detached section with no real relationship to the user journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Go to learning hub
              </Link>

              <Link
                href="/conditions"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Browse conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research pathways
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Where to go next from Research
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Use the evidence layer as a bridge into learning, conditions, and
              the broader Neuvago system.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {researchPathways.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Explore the evidence layer, then keep moving
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Browse studies, explore research topics, or continue into Learn
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The research hub is designed to give the broader Neuvago system
                more depth and clarity by organizing studies, evidence themes,
                and topic pages in a way that is easier to navigate.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/research/studies"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Browse studies library
                </Link>

                <Link
                  href="/research/topics"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore research topics
                </Link>

                <Link
                  href="/learn"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Go to learning hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
