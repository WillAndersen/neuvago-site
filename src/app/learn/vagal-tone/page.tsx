import Link from "next/link"

export const metadata = {
  title:
    "What Is Vagal Tone? Resilience, Recovery and Nervous System Flexibility | Neuvago",
  description:
    "Learn what vagal tone means, how it relates to resilience, recovery, return after stress, and why the term matters in everyday nervous system conversations.",
}

const keyPoints = [
  {
    title: "A more specific resilience lens",
    description:
      "Vagal tone is often used as a more specific way to talk about how steady, flexible, and recoverable the body feels over time.",
  },
  {
    title: "Often connected to recovery and return",
    description:
      "The term matters because it is often used to describe how well the body settles after stress and how supported restoration feels afterward.",
  },
  {
    title: "Most useful when it stays practical",
    description:
      "Vagal tone becomes much more valuable when it helps explain daily patterns of steadiness, stress response, and recovery rather than sounding like a purely technical metric.",
  },
]

const whatItOftenPointsTo = [
  {
    title: "Better adaptability",
    description:
      "The term is often used when people are trying to understand why the body sometimes feels more flexible, less reactive, and easier to bring back to steadier ground.",
  },
  {
    title: "Stronger recovery capacity",
    description:
      "Vagal tone often appears in conversations about whether recovery feels more supported, more complete, and less fragile over time.",
  },
  {
    title: "Greater return after stress",
    description:
      "One of the most useful ways to think about the term is how well the body seems able to come back after activation rather than how calm it is in one isolated moment.",
  },
  {
    title: "More supported resilience",
    description:
      "In practical language, the topic often overlaps with the question of why some days the system feels steadier and more resilient, while on other days it feels easier to throw off balance.",
  },
]

const dailyPatterns = [
  {
    title: "When the system feels more supported",
    description:
      "People often use the term in a more positive sense when the body feels steadier, more recoverable, and less immediately overwhelmed by stress.",
  },
  {
    title: "When recovery feels thinner",
    description:
      "The same term can also be used when someone is trying to understand why the body feels more fragile, slower to restore, or harder to settle after pressure.",
  },
  {
    title: "When resilience feels uneven",
    description:
      "Many people become interested in vagal tone because they notice that their ability to handle stress and return afterward changes across time, context, sleep, and recovery.",
  },
  {
    title: "When the body feels less flexible",
    description:
      "The topic often becomes relevant when a person feels more reactive, more depleted, or less able to move fluidly between activation and settling.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want to understand resilience",
    description:
      "Many people encounter the term while looking for a clearer way to understand why some days feel steadier, calmer, or easier to recover from than others.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They are trying to make sense of recovery",
    description:
      "The term often appears when someone is exploring why recovery feels stronger at times and thinner or more fragile at others.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "They want a more specific lens",
    description:
      "Often the search begins after someone has already encountered the broader vagus nerve conversation and wants a more specific concept tied to flexibility and return.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "They are trying to understand stress response quality",
    description:
      "Usually, the deeper question is not just whether stress happens, but how well the body seems able to adapt and return after it.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
]

const connectedTopics = [
  {
    title: "Vagus nerve",
    description:
      "The broader entry page for understanding why the vagus nerve matters across stress, sleep, recovery, and nervous system support.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "Nervous system regulation",
    description:
      "The larger framework page for understanding how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why restoration, resilience, and return often depend on the wider conditions shaping the nervous system over time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Parasympathetic nervous system",
    description:
      "A related calmer-state page that helps explain why vagal tone is so often discussed alongside settling, restoration, and unwinding.",
    href: "/learn/parasympathetic-nervous-system",
    linkLabel: "Explore parasympathetic states",
  },
]

const clarifications = [
  {
    title: "It does not explain everything by itself",
    description:
      "Vagal tone can be a useful concept, but it still makes the most sense as one part of a broader picture involving stress load, sleep, recovery, and nervous system state.",
  },
  {
    title: "It is not a final verdict about the body",
    description:
      "The term works best when understood as dynamic rather than fixed. It is usually more helpful as a lens into changing patterns than as a permanent label.",
  },
  {
    title: "It is most useful in real-life context",
    description:
      "The strongest use of the concept is often to make daily experience easier to understand: resilience, return after stress, recovery quality, and how supported the system feels over time.",
  },
]

export default function VagalTonePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Vagal tone
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What is vagal tone, and why is it often linked to resilience, recovery, and steadier response to stress?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Vagal tone is often used as a more specific way to talk about how
              well the body seems able to settle, adapt, recover, and return
              after stress. In practical terms, the topic matters because it
              gives people a sharper lens for understanding flexibility,
              steadiness, and supported recovery capacity over time.
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
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore regulation
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
                        Specific resilience lens
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A more focused way to think about steadiness, recovery,
                        and return after stress
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Flexibility
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Adapting without getting stuck
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Restoration after strain
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Coming back toward steadiness
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
              What vagal tone often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagal tone is often used as a more specific way to describe how
              supported, flexible, and recoverable the body feels over time
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In practical language, vagal tone is often discussed as a way to
              describe how well the body seems able to shift toward steadier,
              more restorative states. That is why it appears so often in
              conversations about resilience, recovery, flexibility, and return
              after stress.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The term can sound technical, but the underlying idea is usually
              quite simple. People want to understand whether the body feels
              more supported, more adaptable, and more able to come back after
              pressure rather than staying reactive, depleted, or slow to recover.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That makes vagal tone useful not because it explains everything,
              but because it offers one more specific lens into how the system
              seems to be coping, restoring, and responding over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
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
                Most useful as a sharper lens
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The term becomes strongest when it helps explain daily patterns
                of resilience, recovery, and return in a more specific way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What the term often points to
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagal tone is often useful because it gives more specific language
              for how the body adapts and recovers
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The term usually becomes meaningful when people are trying to
              understand why the body sometimes feels steadier, more resilient,
              and easier to bring back after stress — and at other times more
              fragile, reactive, or slower to restore.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatItOftenPointsTo.map((item) => (
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
              How it often shows up in real life
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The term often becomes relevant when people notice that stress
              response, recovery, and resilience do not feel equally supported across time
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Most people do not become interested in vagal tone because they
              want a metric first. They become interested because they notice
              variation in how steady, recoverable, and adaptable the body feels
              in ordinary life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dailyPatterns.map((item) => (
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
                Most people are not searching for a number. They are trying to
                understand why the body sometimes feels more resilient, more recoverable, or less so.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around vagal tone are often really searches for a more
                specific explanation of resilience, recovery quality, and return
                after stress rather than a purely technical explanation of a single term.
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
                This page works best as a specific resilience page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                It is strongest when it sharpens the bigger conversation about
                vagus nerve, regulation, and recovery rather than trying to replace it.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Vagal tone can be useful, but it makes the most sense as one part
              of a larger stress-recovery-regulation picture
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Because vagal tone is often presented as a more specific concept,
              it can sometimes sound more definitive than it really is. That
              usually makes the topic less helpful, not more.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A calmer perspective is that vagal tone can be a useful lens into
              resilience, return, and recovery quality — but it still makes the
              most sense when placed within a wider understanding of stress,
              sleep, recovery, nervous system flexibility, and daily rhythm.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/parasympathetic-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore parasympathetic states
              </Link>

              <Link
                href="/learn/vagus-nerve"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore vagus nerve
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
                Use vagal tone as the more specific lens into resilience,
                recovery quality, and steadier return after stress
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Vagal tone is one of the more specific foundation topics in the
                Neuvago learning universe because it helps sharpen the
                conversation around resilience, flexibility, recovery quality,
                and how well the system seems able to come back after strain.
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
                  href="/learn/nervous-system-regulation"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore regulation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
