import Link from "next/link"

export const metadata = {
  title:
    "Stress and the Nervous System | Overload, Activation and Recovery | Neuvago",
  description:
    "Learn how stress affects the nervous system, why the body can stay activated, and how stress connects to overload, sleep, recovery, and calmer daily support.",
}

const stressPillars = [
  {
    title: "Stress is not only mental",
    description:
      "Stress often feels emotional or cognitive, but it is also something the body carries through tension, activation, urgency, and reduced recovery.",
  },
  {
    title: "Stress can remain in the system",
    description:
      "Even when a stressful event ends, the body may still feel activated, alert, or difficult to settle if the overall stress load remains too high.",
  },
  {
    title: "Recovery matters as much as pressure",
    description:
      "Stress becomes much easier to understand when it is viewed together with sleep, restoration, and how supported the body feels over time.",
  },
]

const commonStressPatterns = [
  {
    title: "Feeling on edge",
    description:
      "Stress often shows up as a body that feels braced, alert, watchful, or difficult to fully relax even during quieter moments.",
  },
  {
    title: "Mental overload",
    description:
      "Many people notice looping thoughts, planning, scanning, worry, or the sense that the mind never fully gets to stop.",
  },
  {
    title: "Physical tension",
    description:
      "Stress may also feel very physical through tightness, shallow breathing, rushing, pressure in the body, or difficulty softening.",
  },
  {
    title: "Thin recovery",
    description:
      "A stressed system often sleeps lighter, restores less deeply, and begins the next day with less capacity than it needs.",
  },
]

const connectedTopics = [
  {
    title: "Why your body feels stuck in stress",
    description:
      "A deeper explanation of why the body may remain activated even when the obvious pressure has passed.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A practical support page focused on what may help when the body feels too activated, overloaded, or hard to settle.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Nervous system regulation",
    description:
      "The broader framework page for understanding how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why stress becomes easier to carry when restoration and resilience improve over time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const searchReasons = [
  {
    title: "They feel overloaded",
    description:
      "Many people search for stress because life feels too intense, too fast, too demanding, or too heavy to carry cleanly.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
  {
    title: "They cannot switch off",
    description:
      "Often the real question is not only whether life is stressful, but why the body still does not settle even when there is time to rest.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They are trying to understand the body’s response",
    description:
      "Usually, people want language for why stress feels so physical, so persistent, and so tied to sleep, mood, and energy.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Explore fight, flight, freeze",
  },
  {
    title: "They want a broader explanation",
    description:
      "The search often opens into a larger question about the nervous system, recovery, resilience, and what the body needs in order to come back down.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
]

const clarifications = [
  {
    title: "Stress does not always mean visible crisis",
    description:
      "A person can be carrying significant stress without looking dramatic on the outside. Often, the body is holding much more than it appears to be.",
  },
  {
    title: "Stress is not only about mindset",
    description:
      "Thoughts matter, but stress also lives in the body through activation, urgency, disrupted sleep, reduced recovery, and how hard it feels to settle.",
  },
  {
    title: "The broader pattern usually matters most",
    description:
      "Stress becomes most useful to understand when viewed across load, recovery, sleep, nervous system state, and what keeps repeating over time.",
  },
]

export default function StressPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions / Stress
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Understanding stress through the nervous system
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Stress is one of the most common reasons people start looking for
              better support, but it is rarely only about feeling busy. It often
              shows up through activation, overload, poor sleep, reduced recovery,
              and a body that no longer feels easy to bring back down.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
              </Link>

              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore calming
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
                        A clearer way to understand overload, activation, and why the body stays “on”
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Activation
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Stress that stays high
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Thin restoration
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Sleep
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Harder unwinding
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
              What stress often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Stress often makes the most sense when it is understood as something the whole system is carrying
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, stress is often more than a thought or emotion.
              It can become a body-wide experience shaped by tension, urgency,
              vigilance, thinner recovery, and the sense that the system never
              quite gets to leave effort mode.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why stress becomes much easier to understand when viewed
              together with sleep, nervous system state, recovery quality, and
              how much the body is still carrying from what has already happened.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about stress is not only as pressure itself,
              but as the relationship between pressure, activation, and whether
              the system has enough support to return afterward.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-your-body-feels-stuck-in-stress"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stuck stress
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
              {stressPillars.map((item) => (
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
                Stress often becomes clearest when the whole pattern is visible
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The strongest understanding usually comes from seeing stress,
                sleep, activation, and recovery together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common stress patterns
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Stress often becomes most visible in the repeated patterns people live with every day
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always describe stress as one clear event. More often,
              they describe the patterns around it: feeling on edge, mentally
              overloaded, physically tense, or unable to recover properly.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonStressPatterns.map((item) => (
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
                Stress works best as an entry point into the broader learning system
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step is often regulation, recovery, calming, or a clearer explanation of what the body is still carrying.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why people search for stress
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Most people are not searching for a definition. They are trying to understand why stress feels so physical, so persistent, or so hard to recover from.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Stress searches are often really searches for explanation: why the
              body stays activated, why sleep becomes lighter, why recovery feels
              thinner, and why ordinary life starts to feel harder to carry.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why stress pages become much stronger when they connect not
              only to the condition itself, but to the larger frameworks that
              explain how the system returns, restores, and adapts over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
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
                Explore stress, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use stress as the entry point into activation, sleep, recovery, and nervous system understanding
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Stress is one of the most important entry conditions in the
                Neuvago universe because it connects directly to activation,
                overload, poor sleep, thin recovery, and the broader question of
                how the body comes back after too much pressure.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/why-your-body-feels-stuck-in-stress"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore stuck stress
                </Link>

                <Link
                  href="/learn/recovery-and-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore recovery
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
