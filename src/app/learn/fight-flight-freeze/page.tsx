import Link from "next/link"

export const metadata = {
  title:
    "Fight, Flight, Freeze | Survival Patterns, Stress States and Shutdown | Neuvago",
  description:
    "Learn what fight, flight, and freeze mean in everyday life, how these protective states connect to stress, anxiety, shutdown, and nervous system regulation, and why the body reacts so strongly under pressure.",
}

const keyPoints = [
  {
    title: "These are protective patterns",
    description:
      "Fight, flight, and freeze are often used to describe how the body tries to protect itself when it senses threat, pressure, overload, or lack of safety.",
  },
  {
    title: "They show up in ordinary life too",
    description:
      "The patterns are not only about emergencies. They can also appear in stress, conflict, anxiety, shutdown, urgency, avoidance, and difficulty settling.",
  },
  {
    title: "The model works best when kept practical",
    description:
      "Fight, flight, and freeze become most useful when they help explain real reactions people can recognize rather than sounding dramatic or overly clinical.",
  },
]

const statePatterns = [
  {
    title: "Fight",
    description:
      "Fight may show up as irritability, frustration, defensiveness, pushing harder, sharpness, or the feeling that the body wants to push back against pressure.",
  },
  {
    title: "Flight",
    description:
      "Flight often looks more like urgency, restlessness, overthinking, avoidance, busyness, or the feeling that you need to get away from what feels too much.",
  },
  {
    title: "Freeze",
    description:
      "Freeze can feel like shutdown, numbness, blankness, disconnection, low motivation, stillness, or the sense that the system has gone offline rather than calm.",
  },
  {
    title: "Mixed states",
    description:
      "Many people do not fit neatly into one category. Different states can overlap, alternate, or appear in different situations depending on stress, sleep, energy, and recovery.",
  },
]

const whyItMatters = [
  {
    title: "The body may speed up under pressure",
    description:
      "One reason this model matters is that it explains why stress can make the body feel sharper, more reactive, and more action-oriented than expected.",
  },
  {
    title: "The body may try to escape or avoid",
    description:
      "It also helps explain why overload can show up as avoidance, rushing, busyness, mental escape, or difficulty staying present with what feels too much.",
  },
  {
    title: "The body may shut down instead of calm down",
    description:
      "For many people, the most important insight is that stillness is not always regulation. Sometimes the system has gone into freeze rather than true settling.",
  },
  {
    title: "The pattern may linger after the moment",
    description:
      "These states can continue shaping sleep, stress load, and recovery even after the original pressure or trigger has passed.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want to understand strong reactions",
    description:
      "Many people find this model while trying to understand why the body reacts so strongly under pressure, conflict, uncertainty, or overwhelm.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "They are trying to understand anxiety differently",
    description:
      "The search often overlaps with anxiety when the body feels urgent, watchful, avoidant, reactive, or difficult to calm down.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They are trying to understand shutdown",
    description:
      "People also search for this when they recognize numbness, collapse, blankness, or the sense of going still when life feels too much.",
    href: "/conditions/burnout",
    linkLabel: "Explore burnout",
  },
  {
    title: "They want a practical nervous system explanation",
    description:
      "Usually, the deeper question is not just what stress is, but why the body responds in such different ways when pressure becomes too much to carry cleanly.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "The broader framework page for understanding how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Signs of a dysregulated nervous system",
    description:
      "A wider pattern-recognition page for understanding how stress, poor sleep, shutdown, overstimulation, and low resilience can show up together.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A practical support page for understanding what may help when the system is stuck in urgency, overload, or lingering activation.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Why your body feels stuck in stress",
    description:
      "A closely related explanation page for understanding why activation can remain in the body long after the obvious stressor has passed.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
]

const clarifications = [
  {
    title: "It does not mean removing all stress responses",
    description:
      "Fight, flight, and freeze are protective patterns. The goal is usually not to eliminate them completely, but to understand them better and help the body recover from them more cleanly.",
  },
  {
    title: "It does not mean forcing calm",
    description:
      "Useful support is often less about suppressing reactions and more about helping the body feel safe enough to return from urgency, avoidance, or shutdown.",
  },
  {
    title: "It works best when understood as a pattern model",
    description:
      "The model becomes most useful when it explains repeated states and reactions in real life rather than being treated like a rigid label that must fit perfectly.",
  },
]

export default function FightFlightFreezePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Fight, flight, freeze
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What do fight, flight, and freeze actually mean in everyday life?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Fight, flight, and freeze are often used to describe protective
              patterns in the body when stress, pressure, overload, or lack of
              safety feels too high. This page is designed to make those states
              easier to recognize in ordinary life, where they often show up as
              urgency, irritability, avoidance, shutdown, or difficulty settling.
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
                        Protective states page
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to understand why the body speeds up,
                        escapes, or shuts down under pressure
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Fight
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Push against pressure
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Flight
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Escape and urgency
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Freeze
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Shutdown and stillness
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
              Fight, flight, and freeze are often the body’s way of trying to
              protect itself when stress or pressure feels too much to carry cleanly
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In simple terms, fight, flight, and freeze are often described as
              survival responses. They are ways the body tries to protect itself
              when something feels threatening, overwhelming, too intense, or
              too much to process at once.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The model can sound dramatic, but its most useful application is
              often very ordinary. These patterns do not only appear in obvious
              emergencies. They can show up in daily life through irritability,
              urgency, avoidance, shutdown, overstimulation, conflict, and the
              feeling that the body does not easily return to calm.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              What makes the model helpful is that it gives people a clearer way
              to understand why stress does not always look the same. Sometimes
              the body speeds up. Sometimes it escapes. Sometimes it goes still.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/anxiety"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore anxiety
              </Link>

              <Link
                href="/learn/why-your-body-feels-stuck-in-stress"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore stuck stress
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
                This model works best when it explains recognizable states
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The value often comes from helping people name why their system
                reacts so differently under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              The state patterns
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The easiest way to understand the model is to look at what each
              protective state tends to feel like in practice
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Most people do not need a perfect classification. They need a way
              to recognize the patterns that keep repeating in their own body
              under load.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {statePatterns.map((item) => (
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
              Why this matters in daily life
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              This model matters because it explains why the body can react to
              pressure in very different ways
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Some people expect stress to look the same every time. In reality,
              pressure can make one person more irritable, another more avoidant,
              another more shut down, and the same person can shift between all
              three states depending on context, sleep, recovery, and how much
              the system is already carrying.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyItMatters.map((item) => (
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
                Why people search for this
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Most people are not searching for a theory of the stress response.
                They are trying to understand what their body is doing.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around fight, flight, and freeze are often really
                searches for explanation: why the body gets sharper, more urgent,
                more avoidant, or more shut down — and why these reactions can
                feel so strong even in ordinary life.
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
                This page works best as a protective-states page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                It is strongest when it explains defense patterns clearly, then
                sends the reader toward broader regulation, support, and recovery topics.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Fight, flight, and freeze are not the problem by themselves.
              They are protective patterns that become difficult when the body gets stuck in them.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful understanding of these states is not that they
              should never happen. The body needs protective responses. The real
              difficulty often begins when urgency, avoidance, or shutdown
              become too sticky, too strong, or too hard to recover from.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the model often helps most when it reduces shame. It
              shows that the body is trying to protect itself, even when the way
              it is doing that no longer feels supportive in ordinary life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/signs-of-a-dysregulated-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore signs of dysregulation
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
                Use fight, flight, and freeze as the protective-states entry into
                stress, urgency, shutdown, and steadier recovery
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Fight, flight, and freeze are one of the most useful foundation
                topics in the Neuvago learning universe because they help explain
                why the body reacts so differently under pressure — and how those
                reactions connect to stress, anxiety, shutdown, recovery, and what
                it means to return more cleanly afterward.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/learn/why-your-body-feels-stuck-in-stress"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore stuck stress
                </Link>

                <Link
                  href="/conditions/anxiety"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore anxiety
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
