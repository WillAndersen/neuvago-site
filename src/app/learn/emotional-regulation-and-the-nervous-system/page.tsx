import Link from "next/link"

export const metadata = {
  title:
    "Emotional Regulation and the Nervous System | Reactivity, Overwhelm and Recovery | Neuvago",
  description:
    "Learn how emotional regulation connects to the nervous system, including overwhelm, reactivity, shutdown, emotional recovery, and how the body carries emotion in everyday life.",
}

const keyPoints = [
  {
    title: "Emotional regulation is about carrying emotion, not suppressing it",
    description:
      "The topic is usually most useful when it helps explain how the body and mind carry, process, and move through emotion with enough steadiness rather than trying to feel less.",
  },
  {
    title: "It is closely tied to nervous system capacity",
    description:
      "When the system is overloaded, under-recovered, or hard to settle, emotions often feel heavier, sharper, more overwhelming, or harder to come back from.",
  },
  {
    title: "It becomes practical when it explains real life",
    description:
      "The strongest value often comes from helping people understand reactivity, overwhelm, shutdown, and emotional recovery in ordinary life rather than treating the topic as abstract psychology.",
  },
]

const howItOftenShowsUp = [
  {
    title: "Overwhelm",
    description:
      "One common sign is feeling emotionally flooded more quickly, as if the system has less room than it used to for stress, input, disappointment, or emotional intensity.",
  },
  {
    title: "Reactivity",
    description:
      "Emotional dysregulation may show up as sharper reactions, faster irritation, stronger defensiveness, or the sense of being thrown off more easily than expected.",
  },
  {
    title: "Shutdown",
    description:
      "For some people, the pattern is less about intensity and more about going blank, numb, disconnected, withdrawn, emotionally flat, or hard to reach from the inside.",
  },
  {
    title: "Slow emotional recovery",
    description:
      "Emotions may linger longer than they used to, making it harder to return after conflict, disappointment, overstimulation, pressure, or a demanding day.",
  },
]

const whatTheTopicExplains = [
  {
    title: "Why emotion can feel too big for the system",
    description:
      "The topic often helps explain why some emotions feel hard to metabolize when the body already has too little space, too much load, or too little recovery.",
  },
  {
    title: "Why shutdown is not the same as calm",
    description:
      "One of the most useful insights is that going numb, blank, or flat does not always mean regulation. Sometimes it reflects a system that has lost flexibility under emotional strain.",
  },
  {
    title: "Why emotional capacity changes across time",
    description:
      "Many people notice that emotions feel more workable on some days and much harder on others. This page helps explain why stress, sleep, and recovery shape that difference.",
  },
  {
    title: "Why return matters as much as reaction",
    description:
      "The most useful question is often not only how strongly someone feels, but how well the system can come back after emotion has moved through it.",
  },
]

const whyPeopleSearch = [
  {
    title: "They feel emotions too strongly",
    description:
      "Many people search for emotional regulation because emotions feel too fast, too intense, too heavy, or too difficult to carry with steadiness.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They have trouble coming back down",
    description:
      "Often the real question is why emotions linger for so long and why the body and mind do not easily return after stress, conflict, or emotional load.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "They are trying to understand reactivity or shutdown",
    description:
      "The search often begins when someone notices sharper reactions, emotional flooding, or emotional flatness and wants a clearer explanation of the pattern.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Explore fight, flight, freeze",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are looking for language that connects emotion, stress, nervous system state, recovery, and capacity in a way that feels real and usable.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "Anxiety",
    description:
      "A related condition page for understanding how emotional regulation often overlaps with unease, alertness, watchfulness, and difficulty settling.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "Fight, flight, freeze",
    description:
      "A useful next step for understanding how emotional overwhelm, defensiveness, avoidance, or shutdown can reflect broader protective states in the system.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Explore fight, flight, freeze",
  },
  {
    title: "Recovery and regulation",
    description:
      "A broader restoration page for understanding why emotional capacity is often shaped by stress load, sleep, and how restored the body feels over time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A practical support page for understanding what may help when the system feels too overloaded to carry emotion with flexibility.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
]

const clarifications = [
  {
    title: "It does not mean never feeling strongly",
    description:
      "Emotional regulation support is usually not about removing intensity from life. It is more often about helping someone carry intensity without getting overwhelmed, shut down, or stuck for as long.",
  },
  {
    title: "It does not mean perfect emotional control",
    description:
      "Useful support is often less about mastering every feeling and more about becoming more flexible, recoverable, and steady when emotions move through the system.",
  },
  {
    title: "It works best when it supports real life",
    description:
      "The strongest support often improves recovery, sleep, nervous system settling, stress load, and everyday capacity rather than aiming for constant emotional smoothness.",
  },
]

export default function EmotionalRegulationAndTheNervousSystemPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Emotional regulation and the nervous system
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              How does emotional regulation connect to the nervous system in everyday life?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Emotional regulation is often discussed like a psychological skill,
              but in everyday life it is also deeply connected to nervous system
              capacity. When the system is overloaded, under-recovered, or hard
              to settle, emotions may feel heavier, faster, more overwhelming,
              or harder to recover from than expected.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/conditions/anxiety"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore anxiety
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
                        Emotional capacity page
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to understand how the body carries,
                        processes, and returns from emotional load
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Emotion
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What moves through the system
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Capacity
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            How much the system can carry
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Coming back after emotional load
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
              Emotional regulation often means having enough nervous system space
              to feel emotion without getting overwhelmed, shut down, or stuck in it
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In everyday life, emotional regulation is often less about having
              fewer emotions and more about what happens when emotion arrives.
              It is about whether the body and mind have enough steadiness to
              stay connected to what is being felt without getting flooded,
              flattened, or pushed too far out of balance.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the topic is so closely tied to nervous system state.
              When the system is already carrying too much stress, too little
              recovery, or too much activation, emotions often feel sharper,
              stickier, heavier, faster, or harder to metabolize cleanly.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about emotional regulation is not as perfect
              control, but as the body’s growing ability to carry emotional load
              with more flexibility and better return.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/fight-flight-freeze"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore fight, flight, freeze
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
                This page works best as an emotional-capacity page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The topic becomes clearest when it explains how much emotion the
                system can carry and how well it returns afterward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How it often shows up
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Emotional dysregulation often becomes most visible in the ways
              emotion feels harder to carry, process, or recover from
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People do not always describe the issue as emotional dysregulation.
              More often, they describe the lived experience around it: emotional
              flooding, sharper reactivity, numbness, shutdown, or the feeling
              that emotions linger in the system much longer than they used to.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {howItOftenShowsUp.map((item) => (
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
              What this topic often explains
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The real value often comes from understanding why emotions feel
              too big, too sticky, or too hard to return from
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Emotional regulation becomes much more useful when it explains why
              some emotions feel metabolizable and others feel overwhelming. The
              answer is often not just the emotion itself, but the condition of
              the system that is trying to hold it.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatTheTopicExplains.map((item) => (
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
                Most people are not searching for emotional control. They are
                trying to understand why emotions feel harder to carry than they should.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Searches around emotional regulation are often really searches
                for explanation: why emotions feel too intense, too fast, too
                sticky, too overwhelming, or too hard to recover from in everyday life.
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
                This page works best as an emotional-load page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                It is strongest when it explains emotional carrying capacity,
                then sends the reader toward broader regulation, support, and recovery topics.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Emotional regulation support is usually not about feeling less. It
              is about helping the system carry emotion with more steadiness and better return.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful understanding of support is not that emotion should
              disappear or become perfectly smooth. It is more often about
              making the system more able to move through emotion without
              becoming overwhelmed, shut down, or stuck for as long.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why emotional regulation support often overlaps with
              nervous system calming, better recovery, lower stress load, safer
              rhythm, stronger emotional capacity, and enough restoration that
              the body can process feeling more steadily.
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
                Use emotional regulation as the emotional-capacity bridge into
                overwhelm, reactivity, recovery, and steadier return
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Emotional regulation is one of the strongest bridge topics in
                the Neuvago learning universe because it connects how people
                feel internally with the bigger picture of stress, anxiety,
                shutdown, recovery, and what it means for the body to carry
                emotion with more flexibility over time.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/fight-flight-freeze"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore fight, flight, freeze
                </Link>

                <Link
                  href="/learn/recovery-and-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore recovery
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
