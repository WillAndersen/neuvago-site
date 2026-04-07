import Link from "next/link"

export const metadata = {
  title:
    "Conditions: Stress, Sleep, Anxiety and Burnout | Neuvago",
  description:
    "Explore Neuvago condition pages on stress, sleep, anxiety, burnout, overwhelm, recovery, and the broader nervous system patterns that shape everyday life.",
}

const featuredConditions = [
  {
    title: "Stress",
    description:
      "Explore calmer learning pathways around stress, overload, activation, and why the body can stay “on” longer than expected.",
    href: "/conditions/stress",
    linkLabel: "See stress patterns",
  },
  {
    title: "Sleep",
    description:
      "Learn more about winding down, evening activation, lighter sleep, fragile rest, and what makes sleep support feel more realistic over time.",
    href: "/conditions/sleep",
    linkLabel: "See sleep patterns",
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
]

const learningBridges = [
  {
    title: "Conditions are often the entry point",
    description:
      "Many people begin with what they feel — not with theory. That is why these pages are designed to meet symptom-level questions first.",
  },
  {
    title: "The strongest condition pages lead somewhere deeper",
    description:
      "Stress, sleep, anxiety, and burnout usually make more sense when connected back to regulation, recovery, calmer states, and broader nervous system understanding.",
  },
  {
    title: "This creates a stronger authority structure",
    description:
      "Instead of isolated symptom pages, the goal is a connected system where Conditions, Learn, and Research strengthen one another.",
  },
]

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
]

const pathwayCards = [
  {
    title: "Start with the condition you feel most directly",
    description:
      "If the main question is about stress, sleep, anxiety, or burnout, begin there and then follow the links into the broader Learn cluster.",
    href: "/conditions/stress",
    linkLabel: "Start with conditions",
  },
  {
    title: "Start with a practical support page",
    description:
      "If the question is less about naming the issue and more about what might actually help, move from Conditions into the practical Learn pages.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Start with support",
  },
  {
    title: "Start with broader nervous system learning",
    description:
      "If the condition pages feel familiar but incomplete, go upward into the larger framework pages on regulation, vagus nerve, and recovery.",
    href: "/learn",
    linkLabel: "Go to learning hub",
  },
]

export default function ConditionsPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Explore the challenges people are often trying to better understand
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people begin with what they are feeling: stress, poor sleep,
              anxiety, overload, or the sense that recovery feels harder than it
              should. This hub is designed to organize those pathways more
              clearly, while connecting them to deeper learning around nervous
              system regulation, vagus nerve topics, and calmer daily support.
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
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                View research hub
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
                        Conditions hub
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way into stress, sleep, anxiety, burnout, and related patterns
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Conditions
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Start with what feels most familiar
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Learn
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Go deeper into the framework
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Research
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Explore the broader evidence layer
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Main condition pages
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with the condition pages people are most likely to search first
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These are the main entry pages for the symptom and lived-experience
              side of the Neuvago site. Each one is designed to connect back to
              broader learning around regulation, recovery, and the nervous system.
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              How this hub fits the larger site
            </p>

            <div className="mt-8 space-y-5">
              {learningBridges.map((item) => (
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
                Conditions pages should lead somewhere deeper
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The strongest structure is one where symptom-level pages connect
                naturally into broader learning and stronger understanding.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why this hub matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Conditions are one of the clearest ways into the larger Neuvago learning system
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people begin with a condition, not with theory. That is why
              this hub matters so much. It helps people move from what they are
              feeling now into broader understanding around regulation, recovery,
              vagus nerve topics, and calmer daily support.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This also makes the site stronger structurally. Instead of symptom
              pages existing on their own, they become part of a more coherent
              learning and authority system.
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
                These pages are useful when someone does not begin with a formal
                condition, but with a recognizable lived pattern or specific experience.
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

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Start with what you feel, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                A conditions hub designed to connect symptoms, learning, research, and calmer support
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The Neuvago conditions hub is built to help people move from
                what they are experiencing into broader understanding around
                stress, sleep, anxiety, burnout, recovery, nervous system regulation,
                and the wider body-based patterns that shape daily life.
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
