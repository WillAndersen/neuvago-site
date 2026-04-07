import Link from "next/link"

export const metadata = {
  title:
    "Burnout, Recovery and the Nervous System | Exhaustion, Capacity and Restoration | Neuvago",
  description:
    "Learn how burnout connects to the nervous system, including exhaustion, lower capacity, thin recovery, poor sleep, and why restoration can feel harder after prolonged stress.",
}

const burnoutPillars = [
  {
    title: "Burnout is often a capacity problem as much as an exhaustion problem",
    description:
      "Many people describe burnout as tiredness, but it often also involves reduced room for work, stress, emotion, sleep disruption, and everyday demands.",
  },
  {
    title: "Recovery often becomes thinner over time",
    description:
      "Burnout frequently becomes visible when rest no longer restores the system in the way it used to, and recovery begins to feel slow, fragile, or incomplete.",
  },
  {
    title: "The nervous system often stays involved",
    description:
      "Burnout often makes more sense when viewed together with prolonged activation, lower resilience, emotional overload, poor sleep, and difficulty returning after stress.",
  },
]

const commonBurnoutPatterns = [
  {
    title: "Persistent exhaustion",
    description:
      "A common pattern is tiredness that does not fully lift, even after rest, weekends, or periods that should have helped more than they did.",
  },
  {
    title: "Lower daily capacity",
    description:
      "Things that once felt manageable may start to feel heavier, more effortful, or harder to hold together than before.",
  },
  {
    title: "Slower recovery",
    description:
      "The body may need longer to come back after stress, emotional load, work intensity, social demands, or poor sleep.",
  },
  {
    title: "Emotional thinning or flatness",
    description:
      "Some people notice not only tiredness, but also numbness, reduced emotional range, irritability, or the sense that they have less available from the inside.",
  },
]

const connectedTopics = [
  {
    title: "Recovery and regulation",
    description:
      "A core page for understanding why burnout often involves weakened restoration, lower resilience, and a body that does not rebuild as easily as before.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Signs of a dysregulated nervous system",
    description:
      "A useful page for recognizing the broader patterns that often overlap with burnout, including poor sleep, shutdown, overload, and low resilience.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
  {
    title: "Emotional regulation and the nervous system",
    description:
      "A closely related page for understanding why emotional capacity often feels lower, thinner, or harder to recover in burnout states.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional regulation",
  },
  {
    title: "Sleep",
    description:
      "One of the most important related pathways, because poor or fragile sleep often shapes how depleted and under-restored the system feels over time.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
]

const searchReasons = [
  {
    title: "They feel exhausted but not restored",
    description:
      "Many people search for burnout because the core experience is not only tiredness, but the sense that rest no longer rebuilds them in the same way.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "They feel like they have less room than before",
    description:
      "Often the deeper question is why ordinary work, stress, decisions, social demands, or emotions now feel harder to carry than they used to.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
  {
    title: "They are trying to understand prolonged depletion",
    description:
      "Usually, people want language for why the system feels worn down, slower to recover, emotionally thinner, or less resilient over time.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional regulation",
  },
  {
    title: "They want a broader explanation",
    description:
      "The search often opens into a larger question about stress load, recovery, sleep, resilience, and what the nervous system has been carrying for too long.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
]

const clarifications = [
  {
    title: "Burnout is not only about being busy",
    description:
      "It often becomes more accurate to think about burnout as a longer-term stress-and-recovery pattern rather than a simple consequence of having too much on the calendar.",
  },
  {
    title: "Burnout is not only about motivation",
    description:
      "It may affect energy, capacity, sleep, emotional range, resilience, and how the body responds to ordinary life, not just willingness or mindset.",
  },
  {
    title: "The broader pattern usually matters most",
    description:
      "Burnout makes most sense when viewed across exhaustion, sleep, nervous system state, emotional capacity, and how well the system restores over time.",
  },
]

export default function BurnoutPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions / Burnout
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Understanding burnout through recovery, capacity, and the nervous system
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Burnout is often described as exhaustion, but in everyday life it
              is usually more than that. It may also involve lower capacity,
              thinner recovery, emotional depletion, fragile sleep, and a body
              that no longer seems able to rebuild itself from stress as easily
              as before.
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
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore sleep
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
                        A clearer way to understand depletion, lower capacity, and why recovery no longer feels strong enough
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Exhaustion
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Persistent tiredness
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Capacity
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Less room for daily life
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Slower restoration
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
              What burnout often means here
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Burnout often makes the most sense when it is understood as a longer-term stress, recovery, and capacity pattern
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, burnout often means more than being tired. It may
              show up as a system that feels worn down, thinner, slower to come
              back, and less able to rebuild after ordinary demands than it once was.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why burnout becomes much easier to understand when viewed
              together with stress load, recovery quality, nervous system state,
              sleep, and how much room remains for work, emotion, decisions, and
              daily life.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about burnout is not only as exhaustion
              itself, but as the point where the system can no longer restore
              strongly enough to keep carrying what it has been carrying.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/learn/signs-of-a-dysregulated-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore signs of dysregulation
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key pillars
            </p>

            <div className="mt-8 space-y-5">
              {burnoutPillars.map((item) => (
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
                Burnout often becomes clearest when the whole pattern is visible
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Exhaustion, lower capacity, sleep problems, emotional thinning, and weak recovery often belong to the same broader picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common burnout patterns
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Burnout often becomes most visible in the repeated ways the system feels depleted, thinner, and slower to recover
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always describe burnout in formal language. More
              often, they describe the lived patterns around it: persistent
              exhaustion, lower room for life, slower recovery, and a sense that
              the system no longer rebuilds the way it used to.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonBurnoutPatterns.map((item) => (
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
                Burnout works best as an entry point into the broader learning system
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step is often recovery, emotional capacity, sleep, or a clearer explanation of what the system has been carrying for too long.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why people search for burnout
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Most people are not searching only for a label. They are trying to understand why the system feels so depleted, thin, or hard to rebuild.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Burnout searches are often really searches for explanation: why
              rest no longer restores properly, why capacity feels lower, why
              emotions feel thinner, and why the body seems slower to recover
              from ordinary life than before.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why burnout pages become much stronger when they connect
              not only to exhaustion itself, but to the larger body-based logic
              of recovery, nervous system load, sleep, and restoration quality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/learn/emotional-regulation-and-the-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore emotional regulation
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
                Explore burnout, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use burnout as the entry point into exhaustion, recovery, sleep, and the larger question of restoration
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b564e] md:text-lg">
                Burnout is one of the most important entry conditions in the
                Neuvago universe because it connects directly to depletion,
                reduced resilience, poor sleep, emotional thinning, and the
                larger question of whether the body can still restore what daily
                life keeps taking from it.
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
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore sleep
                </Link>

                <Link
                  href="/learn/signs-of-a-dysregulated-nervous-system"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore signs of dysregulation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
