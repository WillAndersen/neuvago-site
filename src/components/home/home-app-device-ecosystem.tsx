import Link from "next/link"

const features = [
  {
    title: "Check in",
    description:
      "Notice how you feel, build awareness, and create a more personal starting point.",
  },
  {
    title: "Follow guided sessions",
    description:
      "Use calm, supportive sessions to create rhythm around stress, winding down, and recovery.",
  },
  {
    title: "Track progress",
    description:
      "See patterns over time and build a steadier relationship with your daily nervous system needs.",
  },
]

export function HomeAppDeviceEcosystem() {
  return (
    <section className="border-t border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[2rem] border border-black/5 bg-white/55 p-5 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-7">
          <div className="rounded-[1.75rem] bg-[#efe8de] p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
              <div className="rounded-[1.5rem] border border-white/60 bg-white/50 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                  Device
                </p>
                <h3 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                  Calm, simple support
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  Thoughtfully designed to feel approachable, clear, and easy to
                  return to as part of everyday life.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/60 bg-[#f8f5f0] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                  App
                </p>
                <h3 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                  Guidance and continuity
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  The app helps turn one-off use into a more personal and
                  repeatable rhythm through check-ins, sessions, and progress.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/60 bg-white/50 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                Together
              </p>
              <h3 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                A connected nervous system experience
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f5a52]">
                Neuvago is designed as a system where hardware, app guidance,
                and learning work together to support more awareness, more calm,
                and better daily consistency over time.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            App + device ecosystem
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Built as a system, not just a single product
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            The Neuvago experience is designed to feel calm and simple on the
            surface, while offering more depth over time through app guidance,
            supportive routines, and personal progress.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-black/5 bg-white/55 p-5"
              >
                <h3 className="text-lg font-medium text-[#1f1f1c]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/app"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore app
            </Link>

            <Link
              href="/how-it-works"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
