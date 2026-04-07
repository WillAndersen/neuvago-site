import Link from "next/link"

export const metadata = {
  title:
    "How to Calm Your Nervous System in Real Life | Stress, Sleep and Recovery | Neuvago",
  description:
    "Learn how to calm your nervous system in everyday life by understanding what keeps the body activated, what actually helps, and how calming connects to stress, sleep, and recovery.",
}

const keyPoints = [
  {
    title: "Calming is usually about conditions, not tricks",
    description:
      "In real life, the nervous system often settles more easily when stress load, overstimulation, transitions, sleep, and recovery are supported more steadily.",
  },
  {
    title: "The body often needs help coming down",
    description:
      "Many people do not struggle because they do not want calm. They struggle because the body does not easily follow once activation has been high for too long.",
  },
  {
    title: "What helps is often gentler than expected",
    description:
      "The strongest support is often not intensity, but more realistic rhythms that help the body feel safer, less overloaded, and more able to return over time.",
  },
]

const whatKeepsItActivated = [
  {
    title: "Too much stress load",
    description:
      "The system often stays activated when pressure, responsibility, uncertainty, or emotional load have been high for too long.",
  },
  {
    title: "Overstimulation",
    description:
      "Noise, screens, decisions, social input, multitasking, and too little space can keep the body from fully coming down.",
  },
  {
    title: "Thin recovery",
    description:
      "Even when the obvious stressor has passed, the system may still stay ‘on’ if recovery has not been strong enough to truly restore it.",
  },
  {
    title: "Difficult transitions",
    description:
      "Many people do not only struggle during stress. They struggle in the moments after it, when the system does not easily know how to shift gears.",
  },
]

const whatActuallyHelps = [
  {
    title: "Reduce what keeps the system on",
    description:
      "Calm becomes more possible when load, urgency, overstimulation, and unnecessary pressure are reduced rather than pushed through endlessly.",
  },
  {
    title: "Support recovery more consistently",
    description:
      "Sleep, rest, slower transitions, repetition, and steadier routines often matter more than one dramatic calming moment.",
  },
  {
    title: "Work with the body, not against it",
    description:
      "The goal is usually not to force instant calm, but to help the body feel supported enough to come down more gradually and more reliably.",
  },
  {
    title: "Repeat what is realistic",
    description:
      "The system often responds best to support that feels possible to return to regularly rather than techniques that feel intense or hard to sustain.",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "A broader framework for understanding how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Why your body feels stuck in stress",
    description:
      "A deeper explanation of why the body may stay alert, tense, or hard to settle even when the obvious stress has passed.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "Recovery and regulation",
    description:
      "A practical next step for understanding why calm often depends on recovery, rhythm, sleep, and how much the system is still carrying.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Sleep",
    description:
      "Sleep often becomes one of the clearest places calming either works or does not, especially when evenings feel too activated to fully soften.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
]

const searchReasons = [
  {
    title: "They feel too wired",
    description:
      "Many people search for this because the body feels too alert, tense, restless, or overstimulated for too much of the day.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "They cannot switch off at night",
    description:
      "Often the search is really about evenings, sleep, and the frustration of feeling tired while the body still does not fully settle.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They are trying to understand anxiety differently",
    description:
      "The search often overlaps with anxiety when the body feels watchful, urgent, uneasy, or difficult to bring back down.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They want something practical",
    description:
      "Usually, people are not searching for more theory. They are searching for what actually helps a stressed system come down in real life.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
]

const clarifications = [
  {
    title: "It does not mean one perfect technique",
    description:
      "Calming support is usually not about finding one magical method. It is more often about improving the conditions that help the system settle more consistently.",
  },
  {
    title: "It does not mean forcing calm",
    description:
      "The body often comes down more successfully when it feels safer and less overloaded, not when it is pushed to relax on command.",
  },
  {
    title: "It works best when it supports real life",
    description:
      "The strongest calming support often improves sleep, recovery, transitions, steadiness, and daily rhythm rather than aiming for perfect calm in isolated moments.",
  },
]

export default function HowToCalmYourNervousSystemPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / How to calm your nervous system
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              How do you actually calm your nervous system in everyday life?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Calming the nervous system is often less about one quick trick and
              more about helping the body move out of prolonged activation and
              into steadier, more restorative states. In practice, that usually
              means understanding what is still keeping the system “on” and what
              makes it more able to come down in real life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-your-body-feels-stuck-in-stress"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stuck stress
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
                        Practical guide
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A calmer approach to helping the system come down, settle,
                        and restore
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Activation
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What keeps the system on
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Support
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What helps it settle
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
              What this usually means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Calming your nervous system usually means helping the body shift
              out of prolonged activation rather than trying to “relax harder”
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In practical terms, calming the nervous system is often not about
              doing one perfect thing. It is more often about helping the body
              feel supported enough to move away from tension, urgency,
              overstimulation, or unfinished stress and back toward something
              steadier.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the topic matters so much. For many people, the problem
              is not knowing they want calm. The problem is that the body does
              not easily follow once activation has been high for too long.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about calming is not as a performance goal,
              but as a process of changing the conditions that help the system
              return.
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
                Calm becomes more possible when it becomes more realistic
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The idea gets stronger when it explains why the body stays on and
                what actually helps it come down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What keeps the system activated
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Before asking what helps, it often makes sense to ask what is still
              keeping the body from fully coming down
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people try to calm the nervous system without first looking
              at what is still feeding activation. Often, the body is not
              “refusing” calm. It is still carrying more than it has fully
              returned from.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatKeepsItActivated.map((item) => (
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
              What actually helps
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              What helps is often not more force, but steadier support that makes
              it easier for the body to return
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In real life, the system often responds best to support that is
              gentler, more repeatable, and more sustainable than people expect.
              Calm usually becomes more possible when the broader conditions
              around stress and recovery start to improve.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatActuallyHelps.map((item) => (
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
                This topic works best inside a larger regulation picture
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Calming becomes easier to understand when linked to stress,
                recovery, sleep, and what the system is still carrying.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why this page matters in the cluster
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              This page should work as the practical, high-intent guide inside
              the larger Neuvago Learn cluster
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Some pages explain the larger framework. Some help people recognize
              patterns. This page has a different job: it should help someone
              understand what calming actually involves in ordinary life.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why it works best when it stays practical, realistic, and
              closely connected to sleep, stress, transitions, recovery, and the
              body’s difficulty returning from activation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/anxiety"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore anxiety
              </Link>

              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore recovery
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
                Why people search for this
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Most people are not searching for perfect calm. They are trying
                to understand why the body feels too “on” and what actually helps.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around calming the nervous system are often really
                searches for relief, steadiness, better sleep, calmer evenings,
                and a body that can return more easily after stress.
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Calming support is usually not about fixing yourself with one
              technique. It is about helping the system come down more reliably over time.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful understanding of calming support is not that one
              breath, one routine, or one method solves everything. It is more
              often about improving the broader conditions that help the body
              feel less overloaded and more able to settle.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why calming support often overlaps with better sleep,
              lower stress load, stronger recovery, steadier routines, and
              gentler transitions rather than one dramatic intervention.
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
                The topic gets stronger when it stays realistic
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Clear explanations of what actually helps usually build more
                trust than promises of instant calm.
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
                Use calming as the practical bridge into explanation, regulation, and better sleep support
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Learning how to calm the nervous system is one of the strongest
                entry points into the Neuvago learning universe because it
                connects what people want right now with the bigger picture of
                stress load, recovery, sleep, and how the body returns.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/why-your-body-feels-stuck-in-stress"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore stuck stress
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
