import Link from "next/link"

export const metadata = {
  title:
    "Why You Feel Tired but Can’t Relax | Wired but Tired, Sleep and Stress | Neuvago",
  description:
    "Learn why you can feel tired but unable to relax, and how this wired-but-tired pattern connects to stress, sleep, recovery, and nervous system regulation.",
}

const commonExperiences = [
  "You feel exhausted, but your body still feels alert.",
  "You want rest, but your mind keeps scanning, planning, or looping.",
  "You finally stop moving, yet your system does not feel like it has actually landed.",
  "You are tired at night, but still do not feel fully downshifted.",
]

const whatItOftenMeans = [
  {
    title: "Tiredness and relaxation are not the same thing",
    description:
      "The body can be physically depleted while still carrying stress, alertness, unfinished activation, or a nervous system state that has not yet softened.",
  },
  {
    title: "The system may still be organized around effort",
    description:
      "Even when energy is low, the body may still feel subtly mobilized, watchful, tense, or mentally active rather than ready for full rest.",
  },
  {
    title: "The body may not yet feel safe enough to fully let go",
    description:
      "For many people, the issue is not a lack of tiredness. It is difficulty accessing softness, exhale, or a more complete sense of settling.",
  },
]

const everydayPatterns = [
  {
    title: "Evening exhaustion without real softness",
    description:
      "You reach the end of the day feeling completely spent, but the system still does not feel deeply settled.",
  },
  {
    title: "Mental activity that keeps running",
    description:
      "Thoughts continue reviewing, anticipating, planning, or looping even when you genuinely want to stop.",
  },
  {
    title: "Quiet that does not feel relieving",
    description:
      "The opportunity for rest is there, but your body does not fully receive it as rest in the way you hoped.",
  },
  {
    title: "Sleep that feels hard to enter",
    description:
      "You may feel sleepy, but not truly downshifted, which can make falling asleep or staying deeply relaxed feel harder.",
  },
]

const whyPeopleSearch = [
  {
    title: "They feel exhausted and wired at the same time",
    description:
      "Many people search for this because they are trying to understand the contradiction of feeling drained but still unable to fully come down.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "They cannot switch off at night",
    description:
      "Often the search is really about why the day is over, tiredness is present, but the body still does not feel ready for true rest.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They want to understand why calm does not follow tiredness",
    description:
      "The deeper question is often not ‘why am I tired?’ but ‘why doesn’t being tired lead to relief?’",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are searching for language that explains why fatigue and activation can coexist in the same body at the same time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "Why your body feels stuck in stress",
    description:
      "A broader explanation of why activation can remain in the body even when the obvious stressor has passed.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "How to calm your nervous system",
    description:
      "The practical support page for understanding what may help when the system feels too activated to fully soften.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Sleep",
    description:
      "A closer look at why rest may feel fragile, evening settling may feel difficult, and deeper restoration may be harder to access.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why the system may need more restoration, softer transitions, and more complete return.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const clarifications = [
  {
    title: "It does not automatically mean something is seriously wrong",
    description:
      "For many people, this experience makes sense as a stress-and-recovery pattern rather than as proof that the body is failing in some dramatic way.",
  },
  {
    title: "It does not mean the tiredness is fake",
    description:
      "The exhaustion can be completely real. The issue is that tiredness does not always arrive together with nervous system settling.",
  },
  {
    title: "It often makes most sense as a mixed state",
    description:
      "The body may be low on energy while still carrying activation, urgency, mental momentum, or unfinished load at the same time.",
  },
]

export default function WhyYouFeelTiredButCantRelaxPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="flex min-h-[80vh] items-center border-b border-black/5">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-32">
          <div className="flex max-w-3xl flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#6f6a61] shadow-sm">
              Learn / Sleep / Stress / Recovery
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Why you feel tired but can’t relax
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] md:text-xl">
              Sometimes the body feels exhausted, but still unable to soften.
              You may want sleep, relief, or rest, yet still feel internally
              alert, mentally busy, or subtly “on.” This page is designed to
              explain that contradiction and why fatigue and settling do not
              always arrive together.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-your-body-feels-stuck-in-stress"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stuck stress
              </Link>
              <Link
                href="/conditions/sleep"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Explore sleep
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)] backdrop-blur-sm md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-medium text-[#6f6a61]">
                  Common felt experience
                </p>
                <span className="rounded-full bg-[#f2eee8] px-3 py-1 text-xs font-medium text-[#6b655d]">
                  Often called “wired but tired”
                </span>
              </div>

              <div className="space-y-4">
                {commonExperiences.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-black/5 bg-[#fcfaf7] p-4"
                  >
                    <p className="text-sm leading-7 text-[#4f4a43]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-[#f2eee8] p-5">
                <p className="text-sm leading-7 text-[#5f5a52]">
                  In everyday life, this can feel strangely confusing. You may
                  assume that once you are tired enough, rest should happen
                  naturally. But tiredness and downshifting are not always the
                  same event in the body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8] border-b border-black/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              What this often means
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Exhaustion and relaxation often belong to two different layers of the same system
            </h2>
          </div>

          <div className="space-y-4">
            {whatItOftenMeans.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-white/65 p-5 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-8 text-[#4f4a43]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              Common patterns
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              What this often feels like in everyday life
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5a52]">
              The experience is often quieter and more familiar than people
              expect. It may simply feel like the body never fully lands.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {everydayPatterns.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[#5f5a52]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8] border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="flex max-w-3xl flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              Why people search for this
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Usually, people are not searching for a definition. They are trying
              to understand a contradiction they live with regularly.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5a52]">
              The question is often not just “why am I tired?” It is “why does
              being tired not lead to real relief?”
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyPeopleSearch.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/65 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[#5f5a52]">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              Connected topics
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              This experience sits naturally inside a larger sleep-stress-recovery picture
            </h2>
          </div>

          <div className="space-y-4">
            {connectedTopics.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-white/60 p-5 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-8 text-[#4f4a43]">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8] border-b border-black/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              What this does and does not mean
            </h2>
          </div>

          <div className="space-y-4">
            {clarifications.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-white/65 p-5 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-8 text-[#4f4a43]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] p-8 shadow-[0_20px_60px_rgba(31,31,28,0.06)] md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
                Keep exploring the broader picture
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Use this wired-but-tired feeling as the bridge into explanation, calming, and deeper recovery
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5b564e]">
                Feeling tired but unable to relax often makes much more sense
                when viewed through the lens of stress load, nervous system state,
                evening downshifting, and recovery capacity. The next step is
                usually not more force, but better understanding of why the body
                still feels “on.”
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/learn/why-your-body-feels-stuck-in-stress"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore stuck stress
                </Link>
                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Explore calming
                </Link>
                <Link
                  href="/learn/recovery-and-regulation"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Explore recovery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
