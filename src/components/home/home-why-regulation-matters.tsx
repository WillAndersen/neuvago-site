import Link from "next/link"

const signals = [
  "Stress can feel harder to unwind from",
  "Sleep can feel lighter or less restorative",
  "Recovery can feel slower than it should",
  "Daily rhythms can start to feel more fragile",
]

export function HomeWhyRegulationMatters() {
  return (
    <section className="border-t border-black/5 bg-[#f2eee8]">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Why it matters
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Modern life can put the nervous system under quiet, constant strain
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Many people are not looking for more stimulation. They are looking
            for a steadier way to support stress, sleep, and recovery in daily
            life. That is where nervous system regulation becomes relevant.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
            Neuvago is built around the idea that calm support, better
            awareness, and more thoughtful routines can help people feel more
            supported over time.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/learn/nervous-system-regulation"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore nervous system regulation
            </Link>

            <Link
              href="/conditions/stress"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore stress
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white/55 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
          <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
            Common experiences
          </p>

          <div className="mt-8 space-y-4">
            {signals.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-black/5 bg-[#f8f5f0] px-5 py-4"
              >
                <p className="text-sm leading-7 text-[#3d3a35] md:text-base">
                  {signal}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
            <p className="text-sm font-medium text-[#1f1f1c]">
              Calm support can start with better awareness
            </p>
            <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
              Understanding patterns in stress, rest, and recovery is often the
              first step toward building a more supportive rhythm.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
