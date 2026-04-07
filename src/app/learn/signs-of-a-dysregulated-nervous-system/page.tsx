import Link from "next/link"

export const metadata = {
  title:
    "Common Signs of a Dysregulated Nervous System | Stress, Sleep and Recovery | Neuvago",
  description:
    "Learn the common signs of a dysregulated nervous system, how they show up in everyday life, and how they connect to stress, sleep, recovery, anxiety, and shutdown.",
}

const keyPoints = [
  {
    title: "Dysregulation is often recognized through patterns",
    description:
      "Most people do not begin with the term itself. They begin by noticing repeated signs such as tension, overstimulation, poor sleep, shutdown, or low resilience.",
  },
  {
    title: "The signs can look different from person to person",
    description:
      "For some people the pattern feels more urgent and activated. For others it feels flatter, heavier, more shut down, or harder to recover from.",
  },
  {
    title: "The signs make more sense when viewed together",
    description:
      "One isolated symptom does not always say much. The broader picture often becomes clearer when multiple signs start showing up at the same time.",
  },
]

const commonSigns = [
  {
    title: "Stress that stays high",
    description:
      "The body continues to feel tense, alert, braced, or hard to settle even after the obvious pressure should have passed.",
  },
  {
    title: "Trouble winding down",
    description:
      "Evenings may feel restless, mentally busy, physically activated, or strangely unable to soften into real rest.",
  },
  {
    title: "Poor or thin recovery",
    description:
      "Rest may happen, but not feel fully restorative. The next day can begin with the same strain already present in the system.",
  },
  {
    title: "Overstimulation",
    description:
      "Noise, screens, demands, social input, or ordinary daily friction may start to feel like too much more quickly than before.",
  },
  {
    title: "Anxiety or unease",
    description:
      "The system may feel watchful, restless, urgent, uneasy, or difficult to calm even when there is no obvious immediate threat.",
  },
  {
    title: "Shutdown or emotional flatness",
    description:
      "For some people, dysregulation does not look fast. It looks blank, low, disconnected, numb, withdrawn, or strangely absent.",
  },
  {
    title: "Low resilience",
    description:
      "Ordinary demands begin to feel heavier, and the amount the system can comfortably carry seems lower than it used to.",
  },
  {
    title: "Feeling wired but tired",
    description:
      "A person can feel depleted and exhausted while still feeling too alert, too mentally active, or too activated to fully relax.",
  },
]

const whyPeopleSearch = [
  {
    title: "They feel like something is off",
    description:
      "Many people search for these signs because they can feel that the body is not settling, recovering, or responding the way it normally does.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They do not know how to name the pattern",
    description:
      "Often the search begins when stress, anxiety, sleep trouble, shutdown, or overstimulation keep showing up without one clear explanation tying them together.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "They want to understand symptoms in context",
    description:
      "The search is often really about whether scattered experiences might belong to one broader nervous system picture rather than several unrelated problems.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are not searching for theory first. They are trying to understand why stress, sleep, resilience, and recovery all seem harder at the same time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "The broader framework for understanding how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "How to calm your nervous system",
    description:
      "The practical support page for understanding what actually helps once these signs start feeling familiar.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Why your body feels stuck in stress",
    description:
      "A deeper explanation of why activation can linger in the body long after the obvious stressor has passed.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "What regulation feels like",
    description:
      "A useful contrast page for understanding what stronger steadiness, return, and recovery may feel like in practice.",
    href: "/learn/what-nervous-system-regulation-feels-like",
    linkLabel: "Explore felt regulation",
  },
]

const clarifications = [
  {
    title: "These signs do not always mean one single cause",
    description:
      "The pattern can reflect a broader regulation issue, but one symptom alone does not always point to one simple explanation.",
  },
  {
    title: "These signs do not mean the body is broken",
    description:
      "Often, they make more sense as a system working hard under stress, overload, poor sleep, or thin recovery rather than a system that has permanently failed.",
  },
  {
    title: "The broader pattern usually matters more than one moment",
    description:
      "These signs become most useful when noticed across time. What keeps repeating, clustering, or shaping daily life often matters more than one isolated experience.",
  },
]

export default function SignsOfADysregulatedNervousSystemPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Signs of a dysregulated nervous system
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What are the common signs of a dysregulated nervous system?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A dysregulated nervous system can show up in many ways: stress
              that stays high, trouble winding down, poor sleep, overstimulation,
              low resilience, anxiety, shutdown, or a body that does not easily
              return to steadier ground. This page is designed to make those
              signs easier to recognize in everyday life.
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
                        Pattern recognition
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to recognize when the system is struggling
                        to settle, restore, and return
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
                            Shutdown
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Flatness or collapse
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Harder return to balance
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
              What this often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A dysregulated nervous system often means the body is having a
              harder time settling, adapting, recovering, and shifting states flexibly
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In practical terms, dysregulation often means the system does not
              move as easily between activation and settling as it needs to.
              Stress may stay high for longer, recovery may feel thinner, and
              the body may feel more easily pushed into urgency, overstimulation,
              shutdown, or exhaustion.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why people often recognize the pattern through signs rather
              than theory. They may say they feel wired, anxious, exhausted,
              overstimulated, numb, unable to sleep, or unable to properly come
              down after pressure.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The term becomes useful when it helps connect those experiences
              into one clearer picture instead of treating them as completely
              separate problems.
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
                Recognition usually comes before explanation
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Most people recognize the pattern first, then look for the
                language that explains it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common everyday signs
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The signs usually become most visible in the ordinary patterns
              people live with every day
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always describe the issue as “dysregulation.” More
              often, they describe what keeps happening: stress that stays high,
              poor sleep, trouble winding down, overstimulation, shutdown, or a
              system that seems slower to recover than before.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonSigns.map((item) => (
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
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Why people search for this
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Most people are not searching for a diagnosis first. They are
                trying to understand why so many things feel “off” at the same time.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around the signs of a dysregulated nervous system are
                often really searches for a pattern: why stress, sleep, anxiety,
                shutdown, overstimulation, and low resilience all seem to show
                up together.
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
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
                This page works best as a recognition page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step after recognition is usually explanation, practical
                support, or a clearer contrast with what steadier regulation feels like.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              These signs often point to a struggling system, but they do not
              always mean one single cause or one fixed explanation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful way to understand these signs is not as proof that
              something is permanently wrong, but as signals that the body may be
              under more strain, more overload, less recovery, or more prolonged
              activation than it can comfortably manage right now.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why it is usually more helpful to notice patterns over time
              than to over-interpret one single symptom. The broader picture often
              matters more than one isolated moment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/what-nervous-system-regulation-feels-like"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore what regulation feels like
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
                Keep exploring the broader picture
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use these signs as the recognition point into regulation, calming, and what steadier support feels like
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The signs of a dysregulated nervous system are one of the most
                useful entry points into the Neuvago learning universe because
                they connect what people are actually experiencing with the
                larger picture of stress, sleep, recovery, anxiety, shutdown,
                and how the body returns.
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
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore calming
                </Link>

                <Link
                  href="/learn/what-nervous-system-regulation-feels-like"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore felt regulation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
