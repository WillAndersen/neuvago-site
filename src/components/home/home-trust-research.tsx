import Link from "next/link"

const pillars = [
  {
    title: "Research-informed",
    description:
      "Neuvago is built around a thoughtful, informed perspective on stress, sleep, recovery, and nervous system regulation.",
  },
  {
    title: "Carefully designed",
    description:
      "The experience is meant to feel calm, clear, and approachable rather than overwhelming or overcomplicated.",
  },
  {
    title: "Educational in approach",
    description:
      "A growing library of articles and research content helps users better understand the bigger picture behind how they feel.",
  },
]

export function HomeTrustResearch() {
  return (
    <section className="border-t border-black/5 bg-[#f2eee8]">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Trust and research
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Built with a more thoughtful and informed perspective
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Neuvago is designed to feel calm and simple, while still being
            grounded in careful thinking around the nervous system, daily
            regulation, and the realities of modern stress and recovery.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
            The goal is not to overwhelm people with information, but to make
            the experience feel more trustworthy, more supportive, and easier
            to understand over time.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/research"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore research
            </Link>

            <Link
              href="/learn"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore learning
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
            >
              <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                {pillar.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                {pillar.description}
              </p>
            </article>
          ))}

          <div className="rounded-[2rem] bg-[#e6ddd1] p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Neuvago perspective
            </p>

            <p className="mt-4 text-base leading-8 text-[#3d3a35]">
              Calm support becomes more meaningful when product design, app
              guidance, and education are all working together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
