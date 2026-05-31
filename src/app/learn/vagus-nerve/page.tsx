import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";

export const metadata: Metadata = {
  title:
    "What Is the Vagus Nerve? | Stress, Sleep and Recovery | Neuvago",
  description:
    "Learn what the vagus nerve is, how it connects brain and body, and why it matters for stress, sleep, recovery, and nervous system regulation.",
  alternates: {
    canonical: "/learn/vagus-nerve",
  },
  openGraph: {
    title:
      "What Is the Vagus Nerve? | Stress, Sleep and Recovery | Neuvago",
    description:
      "Learn what the vagus nerve is, how it connects brain and body, and why it matters for stress, sleep, recovery, and nervous system regulation.",
    url: "/learn/vagus-nerve",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Is the Vagus Nerve? | Stress, Sleep and Recovery | Neuvago",
    description:
      "Learn what the vagus nerve is, how it connects brain and body, and why it matters for stress, sleep, recovery, and nervous system regulation.",
  },
}

const keyPoints = [
  {
    title: "A major communication pathway",
    description:
      "The vagus nerve is one of the body’s most important communication pathways, linking the brain with key organs and systems throughout the body.",
  },
  {
    title: "A practical entry point into the nervous system",
    description:
      "The topic matters because it helps people understand why stress, calm, recovery, sleep, and regulation are so closely connected.",
  },
  {
    title: "Most useful when explained clearly",
    description:
      "The vagus nerve becomes more valuable as a topic when it is used to make daily experience easier to understand, not more technical or overcomplicated.",
  },
]

const whatItConnects = [
  {
    title: "Brain and body",
    description:
      "The vagus nerve helps connect the brain with processes happening throughout the body rather than keeping stress and calm as ‘mental’ topics alone.",
  },
  {
    title: "Stress and settling",
    description:
      "It often appears in discussions about how the body responds to stress and how it shifts back toward calmer, more supported states.",
  },
  {
    title: "Sleep and recovery",
    description:
      "Because it is closely associated with calming and restorative functions, the topic often overlaps with unwinding, rest, and deeper recovery.",
  },
  {
    title: "Daily rhythm",
    description:
      "Many people care about the vagus nerve because they are really trying to understand why some days feel steadier, more resilient, and easier to recover from than others.",
  },
]

const whyItMatters = [
  {
    title: "Stress makes more sense",
    description:
      "The vagus nerve helps people understand why stress is not only a thought or emotion, but also a body-wide experience with real physiological patterns.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "Sleep becomes part of the same picture",
    description:
      "The topic often overlaps with sleep because winding down, resting, and shifting out of activation are all part of the larger conversation.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "Recovery becomes easier to explain",
    description:
      "The vagus nerve is often relevant when people are asking why recovery feels stronger at times and thinner or slower at others.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const searchReasons = [
  {
    title: "They want to understand stress differently",
    description:
      "Many people first encounter the vagus nerve while trying to understand tension, overwhelm, and why the body can stay activated long after pressure should have passed.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "They are trying to understand sleep and unwinding",
    description:
      "The topic often appears when people are searching for clearer explanations around evenings, settling, rest, and why the body does not easily switch off.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They want a broader nervous system framework",
    description:
      "Often the real search is not for a nerve in isolation, but for a more connected explanation of calm, regulation, resilience, and recovery.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They are following the vagus nerve conversation itself",
    description:
      "Some people arrive here after seeing terms like vagal tone, parasympathetic nervous system, or nervous system regulation and wanting the clearest starting point.",
    href: "/learn/vagal-tone",
    linkLabel: "Explore vagal tone",
  },
]

const connectedTopics = [
  {
    title: "Vagus nerve stimulation",
    description:
      "A clearer category page on implanted VNS, non-invasive VNS, ear-based approaches, and how guided wellness devices should be understood.",
    href: "/learn/vagus-nerve-stimulation",
    linkLabel: "Explore VNS",
  },
  {
    title: "Non-invasive VNS",
    description:
      "A practical next step for understanding external stimulation, nVNS devices, and how a guided wellness system should be evaluated.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Explore non-invasive VNS",
  },
  {
    title: "Auricular VNS",
    description:
      "A focused guide to ear-based vagus nerve stimulation, taVNS, placement language, research context, and careful claims.",
    href: "/learn/auricular-vagus-nerve-stimulation",
    linkLabel: "Explore auricular VNS",
  },
  {
    title: "Nervous system regulation",
    description:
      "A broader framework for understanding how the body shifts between activation, settling, recovery, and steadier daily balance.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Parasympathetic nervous system",
    description:
      "A calmer-state lens that helps explain why the vagus nerve is so often discussed in relation to restoration, digestion, and unwinding.",
    href: "/learn/parasympathetic-nervous-system",
    linkLabel: "Explore parasympathetic states",
  },
  {
    title: "Vagal tone",
    description:
      "A more specific concept often used to talk about steadiness, resilience, recovery, and how supported the system feels over time.",
    href: "/learn/vagal-tone",
    linkLabel: "Explore vagal tone",
  },
  {
    title: "Recovery and regulation",
    description:
      "A practical next step for understanding why stress load, sleep, restoration, and daily capacity all shape how supported the system feels.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "VNS research topic",
    description:
      "A research hub for implanted and non-invasive vagus nerve stimulation, foundational studies, adjacent topics, and responsible interpretation.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "View VNS research",
  },
  {
    title: "How Neuvago works",
    description:
      "A practical explanation of how the Neuvago device, app guidance, session flow, and routine design fit together.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
]


export default function VagusNervePage() {
    const structuredData = buildAuthorityPageStructuredData({
    title: "What Is the Vagus Nerve? | Stress, Sleep and Recovery | Neuvago",
    description: "Learn what the vagus nerve is, how it connects brain and body, and why it matters for stress, sleep, recovery, and nervous system regulation.",
    path: "/learn/vagus-nerve",
    articleSection: "Learn",
    dateModified: authorityEditorialDates.vnsClusterModified,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Vagus Nerve", path: "/learn/vagus-nerve" },
    ],
  });


  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-vagus-nerve" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Vagus nerve
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What the vagus nerve is — and why it matters for stress, sleep, and recovery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The vagus nerve is one of the body’s most important
              communication pathways. It matters because it helps connect many
              of the same themes people are already trying to understand in real
              life: stress, calm, sleep, recovery, and how the body settles and
              returns.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
              </Link>

              <Link
                href="/conditions/stress"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore stress
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
                        Foundation topic
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A key entry point into stress, calm, recovery, and the
                        wider nervous system conversation
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Stress
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          How the body responds
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Sleep
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Winding down and rest
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Return and restoration
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
              What the vagus nerve is
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The vagus nerve is a major pathway connecting the brain with the
              rest of the body
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The vagus nerve is often described as one of the body’s most
              important communication pathways. It helps connect the brain with
              systems involved in heart rate, breathing, digestion, and broader
              nervous system function.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is one reason it appears so often in conversations about
              stress and calm. The topic gives people a more connected way to
              think about the body, rather than treating stress, sleep, and
              recovery as completely separate experiences.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful starting point is not to get lost in technical detail,
              but to understand why the vagus nerve keeps showing up whenever
              people are asking how the body settles, restores, and returns
              after pressure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore nervous system regulation
              </Link>

              <Link
                href="/conditions/stress"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore stress
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
                Best used as a clear starting point
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                You do not need to master the science first. The most important
                thing is understanding why this topic matters in practical
                conversations about daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why it matters in practice
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The vagus nerve matters because it helps connect stress, settling,
              sleep, recovery, and daily rhythm into one larger picture
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              One reason the vagus nerve has become such an important topic is
              that it helps bridge the gap between theory and lived experience.
              People may start by searching for stress relief, better sleep, or
              deeper recovery, and then discover that the vagus nerve sits close
              to all of those conversations.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That does not mean the vagus nerve is the whole answer. It means
              it is one of the clearest entry points into understanding why
              nervous system topics feel so relevant in ordinary life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatItConnects.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Why people care about it
            </p>

            <div className="mt-8 space-y-5">
              {whyItMatters.map((item) => (
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
                The topic becomes useful when it connects to real life
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Stress, sleep, and recovery are usually the practical reasons
                people care about this topic in the first place.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why this page matters in the cluster
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              This page works best as the broad entry point into the whole
              vagus nerve conversation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Some Learn pages are there to explain frameworks. Some are there
              to explain symptoms or lived experience. This page has a different
              job: it should help someone understand why the vagus nerve keeps
              appearing across all of those conversations.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why this page works best as a broad topic page — one that
              introduces the theme clearly, then sends people deeper into
              regulation, vagus nerve stimulation, vagal tone, parasympathetic
              states, stress, sleep, and recovery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/vagus-nerve-stimulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore VNS
              </Link>

              <Link
                href="/learn/non-invasive-vagus-nerve-stimulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Non-invasive VNS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Why people search for it
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Most people are not really searching for a nerve. They are
                searching for relief, clarity, or a better explanation of what
                the body is doing.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The term “vagus nerve” often becomes a gateway topic. People
                discover it while trying to make sense of tension, overwhelm,
                sleep problems, fragile recovery, or why the body does not feel
                as settled as they want it to.
              </p>
            </div>

            <div>
              <Link
                href="/conditions"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore conditions
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {searchReasons.map((item) => (
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
                This topic becomes stronger inside a larger cluster
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The vagus nerve is most useful when connected to regulation,
                stimulation, recovery, calm-state learning, and real-life
                nervous system experience.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The vagus nerve matters, but it makes most sense as part of a
              broader nervous system picture
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Because the vagus nerve has become such a visible online topic, it
              can sometimes be framed too simply. That usually makes the topic
              feel more dramatic than it needs to be.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A calmer and more useful perspective is that the vagus nerve is an
              important part of the conversation — but it still makes the most
              sense when placed inside a larger understanding of stress,
              regulation, sleep, recovery, and everyday nervous system function.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore research
              </Link>

              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore regulation
              </Link>
            </div>
          </div>
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
                Use the vagus nerve as the entry point into regulation, resilience, and stress-related support
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The vagus nerve is one of the most important foundation topics
                in the Neuvago learning universe because it helps connect what
                people are already searching for — stress relief, better sleep,
                calmer evenings, stronger recovery — into one broader,
                more understandable picture.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/learn/vagal-tone"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore vagal tone
                </Link>

                <Link
                  href="/conditions/stress"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore stress
                </Link>

                <Link
                  href="/learn/vagus-nerve-stimulation"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Understand VNS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
