import Link from "next/link"

export const metadata = {
  title:
    "What Is the Parasympathetic Nervous System? Calm, Rest and Restoration | Neuvago",
  description:
    "Learn what the parasympathetic nervous system is, how it relates to calm, unwinding, digestion, sleep, and why it matters for recovery and nervous system restoration.",
}

const keyPoints = [
  {
    title: "The calmer side of the system",
    description:
      "The parasympathetic nervous system is often described as the part of the broader nervous system most closely associated with settling, restoration, digestion, and unwinding.",
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

const clarifications = [
  {
    title: "It does not mean being calm all the time",
    description:
      "The body still needs activation, effort, responsiveness, and energy. The point is not permanent calm, but a healthier ability to return from activation.",
  },
  {
    title: "It does not mean shutting down",
    description:
      "Parasympathetic support is about restoration and steadiness, not about becoming flat, passive, disconnected, or absent from life.",
  },
  {
    title: "It works best as a practical state concept",
    description:
      "The idea becomes most useful when it helps explain unwinding, digestion, sleep, restoration, and calmer daily rhythm in real life.",
  },
]

export default function ParasympatheticNervousSystemPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
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
              The parasympathetic nervous system is often described as the
              calmer side of the broader nervous system — the side most closely
              associated with unwinding, restoration, digestion, and the body’s
              ability to move away from prolonged activation and back toward
              steadier states.
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
                Why people search for it
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Most people are not searching for a technical system. They are
                trying to understand why the body will not settle — and what calm actually means.
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
                This page works best as a calmer-states page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                It is strongest when it clarifies what the body is moving toward
                when activation starts to ease.
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
