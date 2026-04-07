import Link from "next/link"

export const metadata = {
  title:
    "Why Your Body Feels Stuck in Stress | Lingering Activation, Sleep and Recovery | Neuvago",
  description:
    "Learn why the body can feel stuck in stress even after the stressful thing is over, and how lingering activation connects to sleep, recovery, anxiety, and nervous system regulation.",
}

const keyPoints = [
  {
    title: "The body does not always switch off immediately",
    description:
      "Stress responses often linger when the system has carried too much pressure for too long or has not yet had enough support to fully come down.",
  },
  {
    title: "What feels confusing often makes sense in context",
    description:
      "The body may stay tense, wired, watchful, or hard to settle because stress load, poor sleep, overstimulation, and thin recovery are still shaping its state.",
  },
  {
    title: "The explanation often helps by removing blame",
    description:
      "This pattern usually makes more sense as a system still carrying too much rather than a body that is simply refusing to relax.",
  },
]

const whyItHappens = [
  {
    title: "Stress load stays in the system",
    description:
      "Even when the obvious event is over, the body may still be carrying accumulated pressure, uncertainty, emotional load, or prolonged activation from what came before.",
  },
  {
    title: "Recovery has not fully happened yet",
    description:
      "The body often needs more than the stressor ending. It may still need sleep, restoration, softer transitions, and enough time to register that the pressure is actually over.",
  },
  {
    title: "The system has learned to stay ready",
    description:
      "After too much urgency, overload, or vigilance, the body may remain organized around alertness, scanning, and preparation rather than settling.",
  },
  {
    title: "Daily life keeps reactivating the pattern",
    description:
      "Even when one major stressor has passed, ongoing demands, overstimulation, unfinished tasks, and too little pause can keep feeding the same state.",
  },
]

const everydayPatterns = [
  {
    title: "Lingering tension",
    description:
      "The body continues to feel braced, tight, or physically on guard even when the situation itself is over.",
  },
  {
    title: "Urgency that stays high",
    description:
      "There can be a persistent internal rush, as if the system still believes there is something it needs to fix, escape, or stay ready for.",
  },
  {
    title: "Difficulty switching off",
    description:
      "The day may be over on paper, but not in the body. Settling, unwinding, and mentally releasing the day can feel much harder than expected.",
  },
  {
    title: "Thin sleep and thin recovery",
    description:
      "Sleep may feel lighter, evenings more restless, and the next day may begin with the same stress already present in the system.",
  },
]

const searchReasons = [
  {
    title: "The stressful thing is over, but the body disagrees",
    description:
      "Many people search for this because the pressure has passed on the outside, yet the body still feels tense, wired, restless, or watchful.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They want to understand why calm does not return",
    description:
      "Often the search is really about why the body does not come back to baseline even when life looks quieter on the surface.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "They are trying to make sense of anxiety and sleep trouble",
    description:
      "The search often overlaps with anxiety, restless evenings, lighter sleep, and the sense that the system is still carrying something unresolved.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are not asking for theory first. They are asking why stress can linger in the body long after the obvious trigger has passed.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "How to calm your nervous system",
    description:
      "The practical support page for understanding what may actually help once the body is stuck in lingering activation.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Nervous system regulation",
    description:
      "The larger framework page that explains how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Recovery and regulation",
    description:
      "A deeper next step for understanding why restoration, sleep, and daily rhythm matter so much when the system has not yet come back down.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Why you feel tired but can’t relax",
    description:
      "A closely related bridge page for understanding why depletion and activation can exist at the same time.",
    href: "/learn/why-you-feel-tired-but-cant-relax",
    linkLabel: "Explore wired-but-tired",
  },
]

const clarifications = [
  {
    title: "It does not mean the body is broken",
    description:
      "A body that feels stuck in stress is often a body still carrying load, not a body that has permanently lost the ability to calm down.",
  },
  {
    title: "It does not mean the stress was imaginary",
    description:
      "Even when the outside situation changes, the nervous system may still need more time, recovery, and support before it fully registers that the pressure is over.",
  },
  {
    title: "It usually makes most sense as a pattern",
    description:
      "The experience often becomes clearer when viewed across stress load, sleep, recovery, stimulation, and daily rhythm rather than as one isolated symptom.",
  },
]

export default function WhyYourBodyFeelsStuckInStressPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Why your body feels stuck in stress
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Why does the body sometimes feel stuck in stress even when the stressful thing is over?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people feel confused when the body stays tense, alert, wired,
              or hard to settle even after the obvious pressure has passed. In
              practice, this often happens because the stress response has not
              fully completed yet. The system may still be carrying load, thin
              recovery, overstimulation, or the aftereffects of staying “on” for
              too long.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
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
                        Explanation page
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A practical lens on why the body can stay “on” longer than it wants to
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Stress load
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What the system is still carrying
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Recovery
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What has not fully happened yet
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
              What this often means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The body often feels stuck in stress not because it is failing, but because the system has not yet fully returned from what it has been carrying
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, the stressful event itself is not always the only
              thing the body is responding to. The system may still be carrying
              accumulated pressure, poor sleep, emotional load, overstimulation,
              thin recovery, or a longer period of being “on” than it has truly
              had time to restore from.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the body can remain tense, watchful, wired, restless,
              or hard to settle even when the obvious pressure has passed. The
              issue is often not that the body does not want calm. The issue is
              that it has not yet registered enough return, recovery, or safety
              for the stress response to fully complete.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to understand this pattern is not as a personal
              failure, but as a sign that the system may still be carrying more
              than it has comfortably processed.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/learn/why-you-feel-tired-but-cant-relax"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore wired-but-tired
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
                This explanation works best when it removes blame
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Often, the most relieving part is understanding that the body may
                still be carrying load rather than simply “refusing to calm down.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why this often happens
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The system often stays “on” because too much is still unresolved in
              the body, even when the outside situation has changed
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Before asking how to calm the system, it often helps to understand
              why it is still active. In many cases, the body is not stuck for no
              reason. It is still organizing around what it has been carrying.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyItHappens.map((item) => (
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
              How it often shows up in daily life
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Being stuck in stress often becomes most visible in the background
              of ordinary life rather than in one dramatic moment
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always experience the pattern as one obvious stress
              response. More often, they notice it in smaller repeated ways: a
              body that stays tense, a mind that keeps rushing, evenings that do
              not settle, and sleep that does not fully restore.
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
                Why people search for this
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Most people are not searching for a stress theory. They are
                trying to understand why the body still feels “on” when it should be over.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around feeling stuck in stress are often really
                searches for a practical explanation: why the body stays tense,
                wired, watchful, restless, or hard to settle even after the
                obvious pressure has passed.
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
                This page works best as an explanation page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step after understanding why the body is stuck is often
                support, recovery, and a clearer framework for how return actually happens.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Feeling stuck in stress usually does not mean the body is broken.
              It often means the system has not yet had enough support to fully return.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful way to understand this feeling is not as proof that
              something is permanently wrong, but as a sign that the body may
              still be carrying more load, activation, under-recovery, or
              unfinished stress than it has fully worked through yet.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the experience often makes more sense when viewed
              through recovery, sleep, nervous system settling, and overall
              stress load rather than through blame or self-criticism.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
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

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Keep exploring the broader picture
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use this explanation as the bridge into calming, regulation, and the wired-but-tired experience
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Understanding why the body feels stuck in stress is one of the
                most useful bridge topics in the Neuvago learning universe
                because it connects lived experience with the bigger picture of
                anxiety, sleep, recovery, regulation, and what the body may still need in order to return.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore calming
                </Link>

                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/learn/why-you-feel-tired-but-cant-relax"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore wired-but-tired
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
