import Link from "next/link"

export const metadata = {
  title:
    "What Nervous System Regulation Feels Like in Everyday Life | Neuvago",
  description:
    "Learn what nervous system regulation can feel like in everyday life, including less urgency, more room, better recovery, easier transitions, and stronger steadiness over time.",
}

const keyPoints = [
  {
    title: "Regulation is often felt before it is explained",
    description:
      "Many people recognize regulation not through theory first, but through subtle changes in how the body, mind, and day begin to feel more workable.",
  },
  {
    title: "It usually feels like more flexibility, not perfect calm",
    description:
      "The system may still feel stress, emotion, and challenge, but often with more room, more steadiness, and a better ability to return afterward.",
  },
  {
    title: "The feeling is often quieter than people expect",
    description:
      "Progress does not always feel dramatic. Often it feels like less urgency, less inner friction, more ease in transitions, and more capacity for ordinary life.",
  },
]

const feltSigns = [
  {
    title: "Less urgency",
    description:
      "One common sign is that the body no longer feels quite so rushed, braced, or under quiet internal pressure for no obvious reason.",
  },
  {
    title: "More room inside the day",
    description:
      "Tasks, emotions, decisions, and ordinary life may begin to feel more carryable, as if the system has a little more space than before.",
  },
  {
    title: "Better return after stress",
    description:
      "The body may still react, but it often comes back more easily after disappointment, conflict, overstimulation, or a demanding period.",
  },
  {
    title: "A quieter body",
    description:
      "Many people notice less inner chaos, less background tension, and a gentler sense that the system is no longer working quite so hard just to stay upright.",
  },
  {
    title: "More ease in transitions",
    description:
      "Shifting into evening, settling after work, moving out of pressure, or recovering after social or emotional load may begin to feel smoother.",
  },
  {
    title: "Sleep and recovery feel more supportive",
    description:
      "Sleep may feel deeper, evenings may feel softer, and recovery may begin to feel more real rather than thin or incomplete.",
  },
]

const whyPeopleSearch = [
  {
    title: "They want to know if things are improving",
    description:
      "Many people search for this because they are trying to understand whether regulation, calming, or recovery is actually beginning to happen.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "They do not know what regulation should feel like",
    description:
      "Often the term sounds important, but the lived experience of it feels vague until someone can picture how it might show up in the body and in daily life.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They are trying to recognize progress",
    description:
      "The search is often really about noticing signs like less urgency, better return, easier evenings, or a greater sense of steadiness through the day.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "They want contrast",
    description:
      "Sometimes the search is really about understanding the difference between regulation, shutdown, numbness, forced calm, and simply being exhausted.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "The broader framework page that explains what regulation means and how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "How to calm your nervous system",
    description:
      "The practical support page for understanding what may help the body move toward the kind of steadiness described here.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why stronger restoration often changes what regulation feels like in daily life.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Signs of a dysregulated nervous system",
    description:
      "A strong contrast page for understanding what less supported states may look like when the body is having a harder time settling and returning.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
]

const clarifications = [
  {
    title: "It does not mean constant calm",
    description:
      "Regulation usually does not remove stress, emotion, or challenge. More often, it changes how overwhelming, sticky, or destabilizing those states feel.",
  },
  {
    title: "It does not mean feeling less",
    description:
      "The system can still feel deeply. The difference is often that feeling becomes more workable, less consuming, and easier to recover from.",
  },
  {
    title: "It often feels like flexibility",
    description:
      "One of the clearest signs is usually not stillness itself, but the body’s growing ability to adapt, return, and carry ordinary life with more steadiness.",
  },
]

export default function WhatNervousSystemRegulationFeelsLikePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / What nervous system regulation feels like
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What does nervous system regulation actually feel like in everyday life?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Nervous system regulation is often explained as a concept, but
              many people are really trying to understand what it feels like in
              the body and in daily life. Often, it feels less like “perfect
              calm” and more like less urgency, better return after stress, more
              room inside the day, and a quieter sense that the system is not
              working quite so hard all the time.
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
                        Felt experience
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A practical way to recognize more steadiness, more room,
                        and better return in daily life
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Less urgency
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          More ease in the body
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Better return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Recovery after stress
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            More room
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Greater daily capacity
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
              What it often feels like
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Regulation often feels less like “being calm” and more like having
              enough steadiness to stay with life without getting thrown off as easily
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, regulation often feels like a greater ability to
              recover, adapt, and return after stress rather than a state of
              constant stillness. A person may notice that they do not get as
              overwhelmed as quickly, that they settle more easily after
              pressure, or that daily life feels a little more carryable.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why regulation is often felt through contrast. There may
              be less urgency, less inner chaos, better recovery after hard
              moments, more room for emotion, and a quieter sense that the
              system is no longer pushing so hard all the time.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to understand regulation is not as perfection, but as
              a growing sense of flexibility, steadiness, and easier return.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
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
                Often recognized through subtle shifts
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The feeling is often not dramatic. It is more like more room,
                more return, and less friction through the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common felt signs
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The feeling of regulation often becomes most visible in the
              ordinary ways daily life starts to feel more manageable
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Most people do not describe regulation in technical language. They
              describe it in lived experience: less rushing, better return,
              easier evenings, more steadiness, and the feeling that there is
              simply more room inside the day.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {feltSigns.map((item) => (
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
                Most people are not searching for a definition. They are trying
                to understand what getting better is supposed to feel like.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around what nervous system regulation feels like are
                often really searches for recognition: how to notice progress,
                how to distinguish regulation from shutdown, and how to tell
                whether more steadiness, ease, and return are beginning to show
                up in everyday life.
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
                This page works best as a progress-recognition page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The next step after recognition is often understanding the larger
                framework, supporting recovery more deeply, or learning what
                helps regulation become more possible.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              This feeling usually does not mean constant calm or zero stress. It
              often means the system is becoming more able to return, adapt, and recover.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful way to understand the feeling of regulation is not
              as a perfect state, but as a steadier one. The body may still feel
              stress, emotion, pressure, and challenge, but those experiences may
              become less consuming and more workable over time.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why regulation often feels more like flexibility than
              stillness: more return after difficulty, more room for life, and
              less tendency to get stuck in urgency, shutdown, or overwhelm.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
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
                Use the feeling of regulation as the bridge into calming,
                recovery, steadiness, and stronger daily capacity
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Understanding what nervous system regulation feels like is one
                of the strongest bridge topics in the Neuvago learning universe
                because it connects internal experience with the bigger picture
                of stress, sleep, anxiety, recovery, and what getting better may
                begin to feel like in real life.
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
