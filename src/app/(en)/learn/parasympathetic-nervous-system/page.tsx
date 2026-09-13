import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Parasympathetic Nervous System | Neuvago",
  description:
    "Learn what the parasympathetic nervous system is, how it relates to calm, unwinding, digestion, sleep, and why it matters for recovery and nervous system restoration.",
  alternates: {
    canonical: "/learn/parasympathetic-nervous-system",
    languages: {
      "en-US": "/learn/parasympathetic-nervous-system",
      "nb-NO": "/no/kunnskap/det-parasympatiske-nervesystemet",
      "x-default": "/learn/parasympathetic-nervous-system",
    },
  },
  openGraph: {
    title: "Parasympathetic Nervous System | Neuvago",
    description: "Learn what the parasympathetic nervous system is, how it relates to calm, unwinding, digestion, sleep, and why it matters for recovery and nervous system restoration.",
    url: "/learn/parasympathetic-nervous-system",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parasympathetic Nervous System | Neuvago",
    description: "Learn what the parasympathetic nervous system is, how it relates to calm, unwinding, digestion, sleep, and why it matters for recovery and nervous system restoration.",
  },
}

const keyPoints = [
  {
    title: "The calmer side of the system",
    description:
      "The parasympathetic nervous system regulates organ functions alongside other autonomic pathways. Calm and stress are not a single scale with one branch at each end.",
  },
  {
    title: "Relevant because activation is not the whole story",
    description:
      "Many people understand stress well enough, but this topic matters because it helps explain what the body needs in order to come down from stress and move toward recovery.",
  },
  {
    title: "Most useful when kept practical",
    description:
      "The concept becomes far more valuable when it helps explain evenings, sleep, softer states, recovery, and everyday restoration rather than sounding abstract or overly technical.",
  },
]

const whatItOftenSupports = [
  {
    title: "Unwinding",
    description:
      "One of the most practical ways people understand the parasympathetic side is through the body’s ability to slow down, soften, and stop carrying the day with the same intensity.",
  },
  {
    title: "Restoration",
    description:
      "The topic often matters because the body tends to restore more fully when it can move away from prolonged activation and into calmer states.",
  },
  {
    title: "Digestion and internal settling",
    description:
      "The concept is also often connected to digestion and other restorative functions because it helps represent the body’s more maintenance-oriented states.",
  },
  {
    title: "Return after stress",
    description:
      "In everyday life, one of the clearest practical meanings is whether the body can come back from stress rather than staying activated for too long.",
  },
]

const everydayPatterns = [
  {
    title: "Evenings that actually soften",
    description:
      "A more supported parasympathetic state is often felt when the body more naturally shifts into quieter, less effortful evening rhythms.",
  },
  {
    title: "Sleep that feels more reachable",
    description:
      "Because this topic overlaps with settling and restoration, it is often relevant when people are trying to understand why sleep sometimes feels easier to enter and deeper once it arrives.",
  },
  {
    title: "The body feels less braced",
    description:
      "Many people notice the contrast in physical experience: less inner tension, less rush, and less sense of being held in quiet readiness.",
  },
  {
    title: "Recovery feels more real",
    description:
      "The calmer side of the nervous system often becomes meaningful when restoration feels more complete rather than thin, fragile, or interrupted.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want the body to calm down",
    description:
      "Many people find this term while trying to understand why the body stays activated, tense, or alert longer than it wants to.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They want help winding down",
    description:
      "The search often reflects a practical question about evenings, transitions into rest, and how to move toward calmer states more easily.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They want stronger restoration",
    description:
      "People also search for this topic when they are trying to understand why restoration feels weaker, slower, or less complete than expected.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "They are following the vagus nerve conversation",
    description:
      "Often the search begins with the vagus nerve and then becomes broader as people try to understand the calmer side of the nervous system more clearly.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
]

const connectedTopics = [
  {
    title: "Autonomic nervous system",
    description:
      "Start with the broader ANS architecture, including sympathetic, parasympathetic and enteric pathways and central control.",
    href: "/learn/autonomic-nervous-system",
    linkLabel: "Explore the autonomic nervous system",
  },
  {
    title: "Sympathetic vs parasympathetic",
    description:
      "Compare anatomy, signaling and organ effects without reducing the two systems to one simple stress-versus-calm scale.",
    href: "/learn/sympathetic-vs-parasympathetic-nervous-system",
    linkLabel: "Compare the two systems",
  },
  {
    title: "Vagus nerve",
    description:
      "The broader entry page for understanding why the vagus nerve matters across stress, sleep, calm, and recovery conversations.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "Nervous system regulation",
    description:
      "The larger framework page for understanding how the body moves between activation, settling, restoration, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why calmer states matter so much for restoration, resilience, and everyday capacity.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Sleep",
    description:
      "A closely related condition page because one of the clearest real-life questions is whether the body can actually wind down deeply enough to rest.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
]

export default function ParasympatheticNervousSystemPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Parasympathetic Nervous System | Neuvago",
    description: "Learn what the parasympathetic nervous system is, how it relates to calm, unwinding, digestion, sleep, and why it matters for recovery and nervous system restoration.",
    path: "/learn/parasympathetic-nervous-system",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "What Is the Parasympathetic Nervous System? Calm, Rest and Restoration", path: "/learn/parasympathetic-nervous-system" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-parasympathetic-nervous-system" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Parasympathetic nervous system
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What is the parasympathetic nervous system, and why is it so often linked to calm, rest, and recovery?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The parasympathetic nervous system is a division of the autonomic nervous system involved in regulating organ functions such as heart rate and digestion. “Rest and digest” is useful shorthand, but sympathetic and parasympathetic activity are not opposite ends of a single calm–stress scale.{" "}
              <a href="#source-17786266" className="underline underline-offset-4" aria-label="Read background source 1">[1]</a> <a href="#source-1660159" className="underline underline-offset-4" aria-label="Read background source 2">[2]</a>
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52]" data-neuvago-interpretation-note="1e4d3">
              The everyday examples below describe experiences, not measurements of parasympathetic activity. Feeling settled does not, by itself, identify which autonomic pathways are active.{" "}
              <a href="#sources-and-limits" className="font-medium underline underline-offset-4">Read the sources and their limits.</a>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
              </Link>

              <Link
                href="/learn/vagus-nerve"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore vagus nerve
              </Link>
              <Link
                href="/learn/sympathetic-vs-parasympathetic-nervous-system"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Compare sympathetic vs parasympathetic
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
                        Calmer states page
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to understand the body’s settling,
                        restoring, and unwinding side
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Calm
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Moving out of high activation
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Restoration
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Rebuilding through softer states
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Unwinding
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Letting the day leave the body
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What it often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The parasympathetic nervous system is often the most practical way
              to talk about the body’s calmer and more restorative states
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In simple terms, the parasympathetic nervous system is often used
              to describe the side of the body that supports settling, digestion,
              restoration, and return after stress. That is why it appears so
              often in conversations about calm, sleep, unwinding, and deeper
              recovery.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The term can sound technical, but the most useful idea is
              straightforward. When people talk about the body “coming down,”
              softening, digesting, settling, or finally leaving stress mode,
              they are often talking about parasympathetic states in practical language.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That makes the concept valuable not because it explains
              everything, but because it helps clarify what the body is trying
              to move toward when people are searching for calmer support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/sleep"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore sleep
              </Link>

              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore recovery
              </Link>
            </div>
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

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Most useful when it clarifies what calm actually involves
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The concept gets stronger when it helps explain rest,
                restoration, and unwinding in ordinary life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What these calmer states often support
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Parasympathetic states matter because they help explain what the
              body needs in order to truly come down
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people understand activation well enough. What is often less
              clear is what the body is moving toward when stress starts to ease.
              This topic helps explain that softer side of the system.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatItOftenSupports.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How it often shows up in everyday life
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The calmer side of the nervous system often becomes most meaningful
              when people notice how evenings, sleep, and restoration actually feel
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Most people do not become interested in this topic because they
              want physiology first. They become interested because they are
              trying to understand why the body sometimes settles, softens, and
              restores — and at other times stays activated much longer than expected.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {everydayPatterns.map((item) => (
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
                When the body has trouble settling
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                The parasympathetic system is often most relevant when you are trying to
                understand why the body will not settle — and what calm actually means.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The term “parasympathetic nervous system” often shows up when
                people are looking for a clearer explanation of calm, evening
                settling, digestion, recovery, or why the body still feels “on”
                even when it wants to rest.
              </p>
            </div>

            <div>
              <Link
                href="/learn"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore learning
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyPeopleSearch.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Connected topics
            </p>

            <div className="mt-8 space-y-5">
              {connectedTopics.map((item) => (
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
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                  >
                    {item.linkLabel}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Calmer states are more than a single switch
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The useful focus is what the body may be moving toward when activation
                starts to ease.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Parasympathetic support is usually not about being calm all the time.
              It is about helping the body return more easily from activation toward restoration.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful understanding of parasympathetic support is not that
              life becomes pressure-free, but that the body may become more able
              to settle, digest, recover, unwind, and move out of prolonged alertness.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the topic often overlaps with recovery, sleep,
              digestion, calmer states, and the daily conditions that make it
              easier for the system to restore itself more fully.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/conditions/sleep"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore sleep
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sources-and-limits" aria-labelledby="sources-and-limits-heading" data-neuvago-source-pilot="1e4d3" className="border-y border-black/10 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.16em] text-[#625b53]">Sources and interpretation</p>
            <h2 id="sources-and-limits-heading" className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">Background sources and what they do not establish</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These references provide background on autonomic physiology and the limits of the calm-versus-stress shorthand. They do not establish that every everyday experience described on this page is caused by a particular parasympathetic state.</p>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">These references are not studies of Neuvago and do not establish a product benefit, a diagnosis or personal suitability for stimulation.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article id="source-17786266" data-source-pmid="17786266" className="min-w-0 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#625b53]">1. Physiology review · 2007</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-7 text-[#1f1f1c]">Physiology of the autonomic nervous system</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">McCorry LK. American Journal of Pharmaceutical Education.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Background on autonomic pathways and organ functions, including parasympathetic control. This is not a trial of a relaxation technique or of Neuvago.</p>
              <div className="mt-4 flex min-w-0 flex-col gap-2 text-sm text-[#5f5a52]">
                <span>PMID: 17786266</span>
                <span className="break-all">DOI: 10.5688/aj710478</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17786266/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-medium underline decoration-black/30 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Read McCorry LK on PubMed</a>
            </article>
            <article id="source-1660159" data-source-pmid="1660159" className="min-w-0 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#625b53]">2. Conceptual review · 1991</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-7 text-[#1f1f1c]">Autonomic determinism: the modes of autonomic control, the doctrine of autonomic space, and the laws of autonomic constraint</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Berntson GG, Cacioppo JT, Quigley KS. Psychological Review.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Explains why sympathetic and parasympathetic control cannot be reduced to opposite ends of a single scale. It is not a way to diagnose an individual from how calm they feel.</p>
              <div className="mt-4 flex min-w-0 flex-col gap-2 text-sm text-[#5f5a52]">
                <span>PMID: 1660159</span>
                <span className="break-all">DOI: 10.1037/0033-295x.98.4.459</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/1660159/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-medium underline decoration-black/30 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Read Berntson GG on PubMed</a>
            </article>
          </div>
          <Link href="/research/how-to-read-a-vns-study" className="mt-8 inline-flex text-sm font-medium underline decoration-black/30 underline-offset-4">How to read a VNS study without transferring its conclusions to a different method or product</Link>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Keep exploring the broader picture
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use the parasympathetic nervous system as the calmer-states entry
                into rest, unwinding, recovery, and deeper restoration
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The parasympathetic nervous system is one of the strongest
                foundation topics in the Neuvago learning universe because it
                helps explain the body’s softer side — the side associated with
                calm, settling, digestion, sleep, restoration, and coming back
                from too much activation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/vagus-nerve"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore vagus nerve
                </Link>

                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/conditions/sleep"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore sleep
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
