import Link from "next/link"

export const metadata = {
  title:
    "What Is Nervous System Regulation? Stress, Sleep, Recovery and Daily Life | Neuvago",
  description:
    "Learn what nervous system regulation means in everyday life, how it relates to stress, sleep, recovery, and why the body can feel more or less able to settle and return.",
}

const keyPoints = [
  {
    title: "Regulation is about state-shifting",
    description:
      "Nervous system regulation is often best understood as the body’s ability to move between activation, settling, recovery, and steadier states.",
  },
  {
    title: "It is about flexibility, not perfection",
    description:
      "A more regulated system is not calm all the time. It is more able to respond, adapt, and return after stress, pressure, or disruption.",
  },
  {
    title: "It helps explain everyday experience",
    description:
      "The term becomes useful when it helps make sense of overwhelm, poor sleep, low resilience, difficult transitions, and the feeling of being wired or hard to settle.",
  },
]

const frameworkCards = [
  {
    title: "Activation",
    description:
      "The body speeds up, mobilizes, braces, scans, and prepares to respond when pressure, uncertainty, or stress feels high.",
  },
  {
    title: "Settling",
    description:
      "The system starts to come down when enough safety, pause, or support is present for the body to ease out of heightened activation.",
  },
  {
    title: "Recovery",
    description:
      "The body restores more deeply when it is no longer spending so much energy staying alert, tense, overloaded, or unfinished.",
  },
  {
    title: "Return",
    description:
      "One of the clearest signs of regulation is not avoiding activation, but being more able to come back from it with steadiness.",
  },
]

const whyItMatters = [
  {
    title: "Stress feels more workable",
    description:
      "Regulation often becomes visible in how stress is carried. Pressure may still exist, but it does not take over the whole system in the same way.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "Sleep often becomes easier to understand",
    description:
      "The body usually rests better when it can shift more fully out of activation and into a more supported evening rhythm.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "Recovery becomes more realistic",
    description:
      "A stronger regulation picture often means the body is more able to restore after demanding periods instead of carrying so much activation into the next day.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const searchReasons = [
  {
    title: "They feel overstimulated or overloaded",
    description:
      "Many people encounter the term while trying to understand why daily life feels too activating, too fast, or too difficult to come down from.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "They struggle with winding down",
    description:
      "The topic often appears when someone wants to understand why the body does not easily settle into evening calm, sleep, or deeper restoration.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They want a bigger framework",
    description:
      "Often the real search is for a concept that ties together stress, sleep, recovery, tension, resilience, and the feeling of being hard to regulate.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "They are trying to understand the vagus nerve conversation",
    description:
      "Many people arrive here after seeing terms like vagus nerve, vagal tone, or parasympathetic nervous system and wanting a broader, more practical picture.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
]

const clarifications = [
  {
    title: "It does not mean never feeling stressed",
    description:
      "Regulation is not the absence of stress, emotion, urgency, or challenge. It is more about how flexibly the system responds and how well it returns afterward.",
  },
  {
    title: "It is not an on/off switch",
    description:
      "People often move between more regulated and less regulated states depending on sleep, stress load, recovery, context, and what the body has been carrying.",
  },
  {
    title: "It becomes most useful when it stays practical",
    description:
      "The concept helps most when it gives people language for everyday patterns rather than becoming another abstract label or idealized state.",
  },
]

export default function NervousSystemRegulationPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Nervous system regulation
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What does nervous system regulation actually mean?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Nervous system regulation is a practical way to understand how the
              body moves between stress, settling, recovery, and steadier daily
              balance. It matters because many people are not only asking what
              stress is. They are trying to understand why the body sometimes
              feels flexible and recoverable, and other times tense,
              overstimulated, wired, or hard to bring back down.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/vagus-nerve"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore vagus nerve
              </Link>

              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore recovery
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
                        Foundation framework
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to understand how the body shifts, settles,
                        and returns
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Stress
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Activation and demand
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Restoration and capacity
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Coming back toward balance
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
              What regulation means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Nervous system regulation is best understood as the body’s ability
              to shift states with enough flexibility and support
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, regulation often means the body is more able to
              move between activation and settling without getting stuck for as
              long in urgency, overload, shutdown, or thin recovery. It is not
              about feeling calm all the time. It is about whether the system
              can respond and then come back.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the term has become so useful. It gives people a way
              to understand patterns that otherwise feel disconnected: stress
              that stays high, evenings that do not fully settle, sleep that
              feels lighter, recovery that feels incomplete, or a body that
              seems to carry too much for too long.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about nervous system regulation is not as a
              personality trait or an ideal state, but as a living pattern of
              flexibility, adaptation, and return.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/stress"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stress
              </Link>

              <Link
                href="/conditions/sleep"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore sleep
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
                A framework, not just a word
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The term becomes most useful when it explains how the body moves
                through stress and back toward steadier ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              The core framework
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The easiest way to understand regulation is to look at how the
              body shifts through stress, settling, recovery, and return
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Regulation becomes easier to understand when it is treated as a
              process rather than a label. The body does not simply exist in one
              fixed state. It moves.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {frameworkCards.map((item) => (
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
              Why it matters in practice
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
                Regulation becomes visible through daily life
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The concept matters because it helps explain how stress, sleep,
                and recovery shape what the day actually feels like.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why the term matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Nervous system regulation matters because it gives one practical
              framework for many experiences that otherwise feel disconnected
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              One of the reasons the term has become so important is that it
              helps connect multiple lived experiences into one understandable
              pattern. Rather than treating stress, poor sleep, overload,
              tension, and fragile recovery as separate problems, it offers a
              broader lens.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That does not mean every experience has the same cause. It means
              the framework is often useful because it helps people see how the
              body’s capacity to shift and return affects many parts of life at
              once.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/vagal-tone"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore vagal tone
              </Link>

              <Link
                href="/learn/parasympathetic-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore parasympathetic states
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
                Most people are not searching for theory first. They are trying
                to understand what their body is doing.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The phrase “nervous system regulation” often becomes popular
                because it gives people a calmer, more coherent way to make
                sense of what they feel in everyday life.
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Regulation does not mean perfect calm. It usually means more
              flexibility, more support, and a better ability to return.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              One of the most important clarifications is that regulation is not
              about removing stress or never feeling activated. Human life still
              includes urgency, emotion, challenge, conflict, stimulation, and
              disruption.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              What stronger regulation often points to is something more
              realistic: the body is more able to move through those states
              without staying trapped in them for as long, and more able to find
              steadier ground again afterward.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/what-nervous-system-regulation-feels-like"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore what regulation feels like
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
              Useful clarification
            </p>

            <div className="mt-8 space-y-5">
              {clarifications.map((item) => (
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
                A realistic concept is a stronger concept
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The idea becomes much more useful when it describes human
                flexibility rather than idealized calm.
              </p>
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
                Use nervous system regulation as the framework for understanding
                stress, sleep, recovery, and steadier daily life
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Nervous system regulation is one of the most important
                foundation topics in the Neuvago learning universe because it
                helps connect what people feel with a broader, calmer framework
                for stress, recovery, sleep, resilience, and return.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/vagus-nerve"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore vagus nerve
                </Link>

                <Link
                  href="/learn/recovery-and-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore recovery
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
