import Link from "next/link"

export const metadata = {
  title:
    "Recovery and Regulation | Stress, Sleep, Capacity and Restoration | Neuvago",
  description:
    "Learn how recovery and nervous system regulation connect to stress, sleep, capacity, resilience, and why rest is not always the same as real restoration.",
}

const keyPoints = [
  {
    title: "Recovery is more than stopping",
    description:
      "In everyday life, recovery is not only about taking a break. It is about whether the body and mind actually restore after stress, effort, poor sleep, or prolonged load.",
  },
  {
    title: "Recovery shapes capacity",
    description:
      "When recovery becomes stronger, ordinary life often feels more carryable. When it stays thin, everything can begin to feel heavier, slower, or harder to recover from.",
  },
  {
    title: "Regulation and recovery belong together",
    description:
      "The body often restores more fully when it can shift out of prolonged activation and back toward steadier, more supported states over time.",
  },
]

const whatRecoveryChanges = [
  {
    title: "Energy returns more cleanly",
    description:
      "Recovery often becomes visible when tiredness no longer lingers in the same way and the system begins to feel less worn down from the start of the day.",
  },
  {
    title: "Stress becomes more workable",
    description:
      "The same pressures may still exist, but the body often feels less fragile and more able to absorb, respond, and come back afterward.",
  },
  {
    title: "Capacity expands again",
    description:
      "When recovery is stronger, there is often more room for work, emotion, sleep disruption, decisions, and ordinary demands without the same immediate strain.",
  },
  {
    title: "Return happens more easily",
    description:
      "One of the clearest signs of better recovery is often not perfection, but the body’s improved ability to come back after hard days, poor nights, or demanding periods.",
  },
]

const everydayPatterns = [
  {
    title: "Lingering tiredness",
    description:
      "A common sign of thin recovery is that rest happened, but the tiredness still feels like it stayed behind in the system.",
  },
  {
    title: "Harder mornings",
    description:
      "Recovery issues often become visible in the way the day begins, when energy, steadiness, or motivation feel slow to return.",
  },
  {
    title: "Lower resilience",
    description:
      "Even smaller pressures may begin to feel harder to carry when the system is not restoring as fully as it needs to.",
  },
  {
    title: "Less room for ordinary life",
    description:
      "People may notice they simply have less space than before for work, stress, decisions, social input, or emotional load.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want their energy back",
    description:
      "Many people search for recovery support because they no longer feel as steady, clear, or resilient as they want to feel in daily life.",
    href: "/conditions/burnout",
    linkLabel: "Explore burnout",
  },
  {
    title: "They want rest to actually work",
    description:
      "Often the real question is why sleep, pauses, or quieter periods no longer feel as restorative as they used to.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They are trying to understand capacity",
    description:
      "The search is often really about why ordinary life now feels heavier, harder to recover from, or less manageable than before.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "They want a bigger explanation",
    description:
      "Usually, people are looking for language that explains how sleep, stress, resilience, regulation, and restoration all fit together.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "The broader framework page for understanding how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Burnout",
    description:
      "A closely related condition page for understanding what it can look like when low recovery and prolonged load begin to reduce capacity more dramatically.",
    href: "/conditions/burnout",
    linkLabel: "Explore burnout",
  },
  {
    title: "Sleep",
    description:
      "One of the clearest places recovery either strengthens or weakens is in how deeply the body rests and how restored it feels the next day.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A practical support page for understanding what may help the system shift into states where restoration becomes more possible.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
]

const clarifications = [
  {
    title: "It does not only mean taking more breaks",
    description:
      "Breaks matter, but recovery support is usually about whether the body and mind actually restore during and after those pauses.",
  },
  {
    title: "It does not mean instant restoration",
    description:
      "Recovery often rebuilds more gradually. It usually depends on stress load, sleep, rhythm, regulation, and how long the system has been under strain.",
  },
  {
    title: "It often works best as a whole-pattern concept",
    description:
      "Recovery becomes most useful when understood across sleep, stress, nervous system settling, daily routines, and how much life the body is still carrying.",
  },
]

export default function RecoveryAndRegulationPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Recovery and regulation
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Why recovery and regulation matter so much in everyday life
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Recovery is often treated as simple rest, but in real life it is
              more than stopping. It is about whether the body actually restores
              after stress, poor sleep, effort, overload, or prolonged strain —
              and whether that restoration changes how much capacity, steadiness,
              and resilience you have the next day.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
              </Link>

              <Link
                href="/conditions/burnout"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore burnout
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
                        Restoration page
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Recovery is about more than rest. It is about what the
                        system actually gets back.
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Stress
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What the system carries
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Restoration
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What actually returns
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Capacity
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What daily life feels like
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
              What recovery often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Recovery is often less about taking a break, and more about whether
              the system actually feels restored afterward
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, recovery is usually more than simply stopping.
              Many people are not only asking whether they paused. They are
              asking whether the pause helped the body and mind feel more
              restored, steadier, and more able to return.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why recovery often becomes connected to stress, sleep,
              regulation, and capacity. If the system remains strained, even
              rest may feel incomplete, and energy may not return in the way
              someone expects.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about recovery is not only as time off, but
              as the broader process through which the body gets back energy,
              steadiness, flexibility, and room for life again.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/sleep"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore sleep
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
                Recovery matters because it changes what the next day feels like
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The real question is often not whether rest happened, but whether
                it restored energy, resilience, and capacity in a meaningful way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What stronger recovery changes
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Recovery often becomes most visible in how much easier it feels to
              carry ordinary life again
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Better recovery is often less about one dramatic feeling and more
              about what begins to shift in daily life: more energy, more room,
              better return after pressure, and a body that no longer feels as
              immediately strained by everything it has to carry.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatRecoveryChanges.map((item) => (
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
              Common signs of thin recovery
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Incomplete recovery often becomes visible in the ordinary patterns
              people live with every day
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always notice recovery as a separate concept first.
              More often, they notice the consequences around it: lingering
              tiredness, lower resilience, slower return, and a day-to-day
              capacity that no longer feels like it used to.
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
                Why people search for recovery support
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Most people are not searching for a theory of recovery. They are
                searching for restoration, resilience, and a way to feel more like themselves again.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around recovery are often really searches for something
                practical: why the system still feels tired, why resilience feels
                lower, why sleep is not enough, and how daily life can begin to
                feel more carryable again.
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
                This page works best as a restoration page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step after understanding recovery is often looking at
                regulation, sleep, burnout, or practical support for helping the
                system restore more fully.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Recovery support is usually not only about resting more. It is
              about helping the system restore more fully over time.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful understanding of recovery support is not that one
              pause solves everything, but that the system may need better
              support for sleep, nervous system settling, daily rhythm, and
              restoration over time.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why recovery usually makes most sense when understood
              across sleep, stress, regulation, capacity, and how much the body
              is still carrying rather than as one isolated self-care idea.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/conditions/burnout"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore burnout
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
                Use recovery as the bridge into regulation, burnout, and what actually helps the system rebuild
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Recovery is one of the strongest bridge topics in the Neuvago
                learning universe because it connects what people feel day to day
                with the bigger picture of sleep, stress, burnout, regulation,
                capacity, and what real restoration actually changes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/conditions/burnout"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore burnout
                </Link>

                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore calming
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
