import Link from "next/link"

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Calm technology for modern nervous systems
          </p>

          <h1 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
            A calmer way to support stress, sleep, and recovery
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Neuvago combines a thoughtfully designed device, guided app
            experiences, and a growing knowledge platform to help people build
            a steadier, more supported daily rhythm.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/product"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore product
            </Link>

            <Link
              href="/how-it-works"
              className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
            >
              How it works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
            <span>Thoughtful device design</span>
            <span>Guided app support</span>
            <span>Research-informed learning</span>
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
                      Neuvago system
                    </p>
                    <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                      Device + app + knowledge
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-sm font-medium text-[#1f1f1c]">
                        Daily support
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                        Gentle routines for stress, recovery, and winding down.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Check-ins
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Notice patterns
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Sessions
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Build a calmer rhythm
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
  )
}