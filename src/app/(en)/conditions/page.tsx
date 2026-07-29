import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld"
import { AuthorityEditorialHero, ConditionRoutinePathway } from "@/components/authority";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data"

export const metadata: Metadata = {
  title: "Conditions | Stress, Sleep and Nervous System Pathways | Neuvago",
  description:
    "Explore condition pathways for stress, sleep, anxiety, burnout, nervous system regulation, research context, and app-guided daily support.",
  alternates: {
    canonical: "/conditions",
    languages: {
      "en-US": "/conditions",
      "no-NO": "/no/tilstander",
      "x-default": "/conditions",
    },
  },
  openGraph: {
    title: "Conditions | Stress, Sleep and Nervous System Pathways | Neuvago",
    description:
      "Explore condition pathways for stress, sleep, anxiety, burnout, nervous system regulation, research context, and app-guided daily support.",
    url: "/conditions",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions | Stress, Sleep and Nervous System Pathways | Neuvago",
    description:
      "Explore condition pathways for stress, sleep, anxiety, burnout, nervous system regulation, research context, and app-guided daily support.",
  },
};

const featuredConditions = [
  {
    title: "Stress",
    description:
      "Move from stress, overload, activation, and poor recovery into autonomic regulation research, safety boundaries, and practical routine support.",
    href: "/conditions/stress",
    linkLabel: "See stress pathway",
  },
  {
    title: "Sleep",
    description:
      "Move from winding down, evening activation, fragile rest, and recovery questions into HRV, autonomic regulation, and calmer evening routines.",
    href: "/conditions/sleep",
    linkLabel: "See sleep pathway",
  },
  {
    title: "Anxiety",
    description:
      "Explore how anxiety can overlap with watchfulness, urgency, unease, overwhelm, and a system that feels difficult to settle.",
    href: "/conditions/anxiety",
    linkLabel: "Understand anxiety",
  },
  {
    title: "Burnout",
    description:
      "Learn more about depletion, lower capacity, thin recovery, and what it can look like when the system has been carrying too much for too long.",
    href: "/conditions/burnout",
    linkLabel: "Understand burnout",
  },
];

const conditionGuides = [
  {
    title: "Start with the pattern that feels closest",
    description:
      "You do not need to begin with theory. Start with the condition, symptom pattern, or lived experience that feels most familiar right now.",
  },
  {
    title: "Then move into broader understanding",
    description:
      "Once the condition page helps name the pattern, Learn can help explain the nervous system, recovery, regulation, and the bigger picture behind it.",
  },
  {
    title: "Use Research when you want the evidence layer",
    description:
      "Research adds more scientific depth and context without forcing every visitor to begin there first.",
  },
];

const relatedExperiences = [
  {
    title: "Feeling wired but tired",
    description:
      "A common entry point for people who feel exhausted but still unable to soften, switch off, or fully settle.",
    href: "/learn/why-you-feel-tired-but-cant-relax",
    linkLabel: "See this pattern",
  },
  {
    title: "Feeling stuck in stress",
    description:
      "For people who feel like the stressful thing is over, but the body still feels tense, alert, or unable to return.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Understand this pattern",
  },
  {
    title: "Signs of dysregulation",
    description:
      "For people who recognize poor sleep, overstimulation, shutdown, anxiety, low resilience, or a body that seems harder to settle.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Recognize the signs",
  },
  {
    title: "Emotional overwhelm",
    description:
      "For people trying to understand emotional flooding, reactivity, shutdown, or why emotions feel harder to carry than before.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional load",
  },
];

const pathwayCards = [
  {
    title: "Start with the condition itself",
    description:
      "If the main question is about stress, sleep, anxiety, or burnout, begin there and then follow the links into broader learning.",
    href: "/conditions/stress",
    linkLabel: "Start with conditions",
  },
  {
    title: "Move into the regulation framework",
    description:
      "If the condition pages feel familiar but incomplete, move up into the larger framework pages on regulation, the vagus nerve, and recovery.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Add research and safety context",
    description:
      "If you want the evidence layer, use Research to understand autonomic regulation, VNS, HRV, and responsible safety boundaries.",
    href: "/research/topics/safety-and-tolerability",
    linkLabel: "Review safety context",
  },
  {
    title: "Build a guided routine",
    description:
      "If the goal is practical daily support, move from the condition page into Neuvago’s app-guided sessions and routine structure.",
    href: "/app",
    linkLabel: "Explore the app",
  },
];

const conditionBridgeCards = [
  {
    title: "Stress → autonomic regulation",
    description:
      "Stress should lead users from activation and overload into autonomic regulation, HRV, recovery, and safety-aware VNS context.",
    href: "/conditions/stress",
    linkLabel: "Follow stress pathway",
  },
  {
    title: "Sleep → evening routine",
    description:
      "Sleep should lead users from difficulty unwinding into autonomic state, HRV interpretation, app guidance, and a calmer wind-down routine.",
    href: "/conditions/sleep",
    linkLabel: "Follow sleep pathway",
  },
  {
    title: "Research → trust layer",
    description:
      "Condition pages become stronger when they point to autonomic regulation, safety, tolerability, and evidence boundaries before product consideration.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "View regulation research",
  },
  {
    title: "Routine → product support",
    description:
      "When the user is ready for a practical next step, the bridge should be calm: how sessions work, how the app supports continuity, and what Neuvago is not.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
];

export default function ConditionsPage() {
    const structuredData = buildPageWithBreadcrumbStructuredData({
    title: "Conditions | Stress, Sleep and Nervous System Pathways | Neuvago",
    description: "Explore condition pathways for stress, sleep, anxiety, burnout, nervous system regulation, research context, and app-guided daily support.",
    path: "/conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
    ],
  });


  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions" />
      <AuthorityEditorialHero
        eyebrow="Conditions"
        title="Start with the pattern you recognize, then follow the pathway"
        description="Many people do not begin with theory. They begin with stress, sleep, unease, overload, or a body that feels harder to settle. Conditions should act as calm entry points into learning, research, safety, and guided routine support."
        secondaryDescription="The goal is not to push users directly to a device. It is to help them name the pattern, understand the nervous system context, and choose a practical next step when it feels relevant."
        tone="conditions"
        actions={[
          { href: "/conditions/stress", label: "Explore stress" },
          { href: "/conditions/sleep", label: "Explore sleep", variant: "secondary" },
        ]}
        points={[
          {
            label: "Human entry",
            title: "Begin with experience",
            description: "Stress, sleep, anxiety, and burnout pages should feel like pathways, not medical landing pages.",
          },
          {
            label: "Context",
            title: "Move into regulation",
            description: "Each condition connects to nervous system regulation, autonomic research, HRV, and safety boundaries.",
          },
          {
            label: "Routine",
            title: "Then make it practical",
            description: "When the reader is ready, the bridge leads to app guidance, how sessions work, and the Neuvago system.",
          },
        ]}
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Main condition pages
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with the conditions people are most likely to search first
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These are the clearest entry pages for the symptom and
              lived-experience side of the Neuvago site. Stress and sleep now
              connect more deliberately into Learn, Research, How it works,
              app-guided routines, and safety-aware product understanding.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredConditions.map((condition) => (
              <article
                key={condition.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {condition.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {condition.description}
                </p>

                <Link
                  href={condition.href}
                  className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {condition.linkLabel}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/learn"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Go to learning hub
            </Link>

            <Link
              href="/research"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              View research hub
            </Link>
          </div>
        </div>
      </section>

      <ConditionRoutinePathway
        eyebrow="Everyday pathways"
        title="Conditions become clearer when they are tied to real moments"
        description="A premium conditions system should feel human and practical: a morning reset, a workday pause, an evening wind-down. Those moments connect experience to education without making medical claims."
        image={{
          src: "/images/neuvago/stress-daytime-pause-desktop.webp",
          alt: "Neuvago device and app arranged for a calm daytime pause routine.",
        }}
        cards={[
          {
            title: "Workday pause",
            description: "For activation, tension, or a system that feels like it stays on too long.",
            href: "/conditions/stress",
            linkLabel: "Stress pathway",
          },
          {
            title: "Evening wind-down",
            description: "For difficulty settling, fragile rest, or a body that still feels alert at night.",
            href: "/conditions/sleep",
            linkLabel: "Sleep pathway",
          },
          {
            title: "Research boundary",
            description: "For readers who want the evidence and safety context before considering a routine.",
            href: "/research/topics/safety-and-tolerability",
            linkLabel: "Safety context",
          },
        ]}
      />

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              How to use this hub
            </p>

            <div className="mt-8 space-y-5">
              {conditionGuides.map((item) => (
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
                Conditions are often the most natural place to begin
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                They help people move from what they feel now into broader
                understanding around regulation, recovery, and calmer support.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why this hub matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Conditions give people a clearer entry into the larger Neuvago learning system
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people begin with a condition, not a concept. That is why
              this hub matters so much. It helps people move from what they are
              feeling now into broader understanding around regulation,
              recovery, vagus nerve topics, and calmer daily support.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Instead of leaving symptom pages on their own, the goal is to let
              them connect naturally into Learn, Research, and the broader
              product and app system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Go to learning hub
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                View research hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Related experience pathways
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Explore the patterns that often sit around the main conditions
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                These pages are useful when someone does not begin with a
                formal condition, but with a recognizable pattern or specific
                experience.
              </p>
            </div>

            <div>
              <Link
                href="/learn"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Go to learning hub
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedExperiences.map((item) => (
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Choose your pathway
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A clearer way to move from conditions into broader understanding
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pathwayCards.map((item) => (
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

      <section className="border-b border-black/5 bg-[#efe8de]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Condition-to-product pathways
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The strongest condition pages move from symptoms into research, safety, routine, and only then product support
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Conditions are often the user’s first entry point. The goal is not
              to push them directly to a device. The goal is to help them
              understand the pattern, see the evidence boundary, and then choose
              whether a guided Neuvago routine is relevant.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {conditionBridgeCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-[#f8f5f0] p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
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

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/research/topics/safety-and-tolerability"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Review safety context
            </Link>

            <Link
              href="/app"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore app guidance
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Start with what you feel, then keep going
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                A conditions hub designed to connect symptoms, learning, research, and calmer support
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The Neuvago conditions hub is built to help people move from
                what they are experiencing into broader understanding around
                stress, sleep, anxiety, burnout, recovery, nervous system
                regulation, and the wider patterns that shape daily life.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Go to learning hub
                </Link>

                <Link
                  href="/research"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  View research hub
                </Link>

                <Link
                  href="/how-it-works"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  See how it works
                </Link>

                <Link
                  href="/app"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore the app
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
