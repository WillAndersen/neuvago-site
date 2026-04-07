import Link from "next/link"

export const metadata = {
  title:
    "Anxiety and the Nervous System | Unease, Alertness and Overwhelm | Neuvago",
  description:
    "Learn how anxiety connects to the nervous system, including alertness, overwhelm, reactivity, poor sleep, and why the body can feel watchful or hard to settle.",
}

const anxietyPillars = [
  {
    title: "Anxiety is often felt in the body",
    description:
      "Anxiety is not only a mental experience. It often shows up through alertness, tension, unease, urgency, and a system that feels difficult to bring back down.",
  },
  {
    title: "Anxiety often overlaps with activation",
    description:
      "Many people experience anxiety as a nervous system state where the body stays watchful, braced, or expectant even when there is no immediate danger.",
  },
  {
    title: "Sleep and recovery often shape the pattern",
    description:
      "Anxiety usually becomes easier to understand when it is viewed together with stress load, sleep quality, recovery, and how supported the body feels over time.",
  },
]

const commonAnxietyPatterns = [
  {
    title: "Watchfulness",
    description:
      "The body may feel like it is scanning, anticipating, or quietly preparing for something even during otherwise ordinary moments.",
  },
  {
    title: "Inner urgency",
    description:
      "Many people notice a subtle internal pressure, rush, or feeling that something needs attention even when they cannot fully explain why.",
  },
  {
    title: "Difficulty settling",
    description:
      "Anxiety often shows up through evenings that do not soften easily, a body that feels hard to calm, or a mind that keeps moving after the day is over.",
  },
  {
    title: "Overwhelm and fragility",
    description:
      "When anxiety is high, smaller demands, social input, decisions, or disruptions may begin to feel like too much more quickly than before.",
  },
]

const connectedTopics = [
  {
    title: "Emotional regulation and the nervous system",
    description:
      "A deeper page for understanding overwhelm, reactivity, emotional load, and why feelings may be harder to carry or recover from.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional regulation",
  },
  {
    title: "Fight, flight, freeze",
    description:
      "A useful next step for understanding anxiety through protective states such as urgency, avoidance, defensiveness, and shutdown.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Explore fight, flight, freeze",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A practical support page for understanding what may help when the body feels too watchful, activated, or difficult to settle.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "What nervous system regulation feels like",
    description:
      "A contrast page for understanding what more steadiness, less urgency, and better return may feel like over time.",
    href: "/learn/what-nervous-system-regulation-feels-like",
    linkLabel: "Explore felt regulation",
  },
]

const searchReasons = [
  {
    title: "They feel watchful or on edge",
    description:
      "Many people search for anxiety because the body feels tense, alert, uneasy, or difficult to relax even when there is no obvious immediate reason.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
  {
    title: "They cannot come back down",
    description:
      "Often the real question is not only why anxiety shows up, but why it lingers in the body and feels hard to recover from.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "They want to understand the body’s response",
    description:
      "Usually, people are looking for language that explains why anxiety feels so physical, so persistent, and so connected to sleep, energy, and overwhelm.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They want a broader explanation",
    description:
      "The search often opens into a larger question about nervous system state, emotional load, recovery, and how the body returns after activation.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const clarifications = [
  {
    title: "Anxiety does not always look dramatic",
    description:
      "It can be loud and obvious, but it can also appear as quiet unease, internal tension, constant mental activity, or the sense that the system never fully settles.",
  },
  {
    title: "Anxiety is not only about thoughts",
    description:
      "Thinking patterns matter, but anxiety also shows up through body state, activation, poor sleep, reduced recovery, and how difficult it feels to come back down.",
  },
  {
    title: "The broader pattern usually matters most",
    description:
      "Anxiety often becomes clearest when viewed across nervous system state, sleep, stress load, emotional capacity, and what keeps repeating over time.",
  },
]

export default function AnxietyPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions / Anxiety
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Understanding anxiety through the nervous system
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Anxiety is often described as worry or unease, but in everyday life
              it is also deeply physical. It can show up as alertness, tension,
              urgency, poor sleep, overwhelm, and a body that does not easily
              feel safe enough to settle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/emotional-regulation-and-the-nervous-system"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore emotional regulation
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
                        Condition pathway
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to understand watchfulness, unease, and why the body feels hard to settle
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Alertness
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          A body that stays on edge
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Overwhelm
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Less room in the system
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Sleep
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Harder downshifting at night
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
              What anxiety often means here
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Anxiety often makes the most sense when it is understood as both an internal experience and a nervous system state
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, anxiety often feels like more than worry. It may
              feel like a body that stays alert, a mind that keeps scanning, a
              nervous system that stays too ready, or an internal sense that the
              system does not easily return to ease.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why anxiety becomes much easier to understand when viewed
              together with activation, stress load, emotional carrying capacity,
              poor sleep, and how supported the body feels over time.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about anxiety is not only as worry itself,
              but as the relationship between unease, body state, and whether
              the system can actually come back down afterward.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/fight-flight-freeze"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore fight, flight, freeze
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
              Key pillars
            </p>

            <div className="mt-8 space-y-5">
              {anxietyPillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Anxiety often becomes clearest when the whole pattern is visible
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Alertness, unease, sleep disruption, overwhelm, and reduced recovery often belong to the same broader picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common anxiety patterns
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Anxiety often becomes most visible in the repeated ways the body feels too watchful, too activated, or too easy to overwhelm
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always describe anxiety in clinical language. More
              often, they describe the lived patterns around it: staying on edge,
              carrying quiet urgency, struggling to settle, or feeling like the
              system has less room than it used to.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonAnxietyPatterns.map((item) => (
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
              Connected topics
            </p>

            <div className="mt-8 space-y-5">
              {connectedTopics.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">{item.title}</h3>
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
                Anxiety works best as an entry point into the broader learning system
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step is often calming, emotional regulation, recovery, or a better explanation of how the body carries unease.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why people search for anxiety
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Most people are not searching only for labels. They are trying to understand why the body feels so watchful, uneasy, or hard to settle.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Anxiety searches are often really searches for explanation: why the
              body feels on edge, why evenings do not soften, why emotions feel
              harder to carry, and why ordinary life can feel easier to overwhelm than before.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why anxiety pages become much stronger when they connect
              not only to anxiety itself, but to the broader body-based logic of
              activation, emotional load, sleep, and return after stress.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/emotional-regulation-and-the-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore emotional regulation
              </Link>

              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore calming
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
                Explore anxiety, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use anxiety as the entry point into alertness, emotional load, calming, and nervous system understanding
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b564e] md:text-lg">
                Anxiety is one of the most important entry conditions in the
                Neuvago universe because it connects directly to unease,
                activation, sleep disruption, overwhelm, and the larger question
                of how the body comes back after carrying too much for too long.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/emotional-regulation-and-the-nervous-system"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore emotional regulation
                </Link>

                <Link
                  href="/learn/fight-flight-freeze"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore fight, flight, freeze
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
