import Link from "next/link"

export const metadata = {
  title:
    "Neuvago Device | Vagus Nerve Stimulation for Stress, Sleep and Recovery",
  description:
    "Explore the Neuvago device and how it supports a calmer approach to stress, sleep, recovery, and daily nervous system support as part of the broader Neuvago system.",
}

const useCases = [
  {
    title: "Stress support",
    description:
      "For people looking for a calmer, more supportive way to relate to everyday stress.",
  },
  {
    title: "Winding down",
    description:
      "For moments when the body and mind feel like they need help slowing down and settling.",
  },
  {
    title: "Sleep routines",
    description:
      "For people who want gentler rituals around rest, evenings, and preparing for sleep.",
  },
  {
    title: "Recovery",
    description:
      "For those trying to build steadier rhythms that feel more restorative over time.",
  },
]

const dailyMoments = [
  "Part of a calmer morning or evening routine",
  "A supportive moment after demanding days",
  "An easier way to create space for winding down",
  "Something simple enough to return to regularly",
]

const systemFeatures = [
  {
    title: "Check-ins",
    description:
      "A simple way to notice how you feel and create a more personal starting point.",
  },
  {
    title: "Sessions",
    description:
      "Guided support helps turn one-off use into a calmer and more repeatable rhythm.",
  },
  {
    title: "Progress",
    description:
      "Patterns over time can help users better understand stress, rest, and recovery.",
  },
]

const designPrinciples = [
  {
    title: "Calm by design",
    description:
      "A softer, more thoughtful visual language helps the product feel approachable from the first interaction.",
  },
  {
    title: "Simple to use",
    description:
      "The experience is meant to feel clear and low-friction rather than technical or demanding.",
  },
  {
    title: "Comfort matters",
    description:
      "A product people return to regularly should feel physically and emotionally easy to live with.",
  },
]

export default function ProductPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago device
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              A thoughtfully designed device for calmer daily support
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago device is designed to feel simple, premium, and easy
              to return to. It is part of a broader system built to support
              stress, sleep, recovery, and a steadier daily rhythm.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                How it works
              </Link>

              <Link
                href="/app"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore app
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
                        Calm hardware
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Designed to feel clear, calm, and premium
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Simple to return to
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Built for everyday use, not complexity.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Calm design
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Soft, clear, approachable
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Part of a system
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Device + app + learning
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why people use it
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Built for the moments people want more calm, support, and steadiness
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People are often not looking for more intensity. They are looking
              for better ways to unwind, recover, sleep, and feel more supported
              in everyday life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Daily life
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Designed to fit into real life, not take it over
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago device is meant to feel approachable and easy to live
              with. Not like another demanding health tool, but like a calmer
              part of a more supportive daily rhythm.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That means simple use, low friction, and an experience people can
              come back to regularly without it feeling heavy, technical, or
              overwhelming.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Learn how it works
              </Link>

              <Link
                href="/app"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                See the app
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Everyday fit
            </p>

            <div className="mt-8 space-y-4">
              {dailyMoments.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#3d3a35] md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Calm design matters
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                A product people return to regularly has to feel clear,
                approachable, and easy to integrate into everyday routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Connected experience
            </p>

            <div className="mt-8 space-y-5">
              {systemFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                More than one-off use
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The app helps the device become part of a broader, more personal
                daily rhythm over time.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Part of a broader system
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The device becomes more meaningful when it works together with the app
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is designed as a connected system. The device supports the
              moment itself, while the app adds guidance, structure, and a more
              personal sense of continuity.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That combination makes the experience feel less like isolated use
              and more like an approachable daily practice around stress,
              winding down, sleep, and recovery.
            </p>

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
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Design, comfort, simplicity
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Designed to feel calm in the hand, in the moment, and over time
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The product experience should not feel clinical, intimidating, or
              over-engineered. Neuvago is designed to feel soft, clear,
              premium, and easy to understand.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That simplicity is part of the value. When a product feels easier
              to trust and easier to return to, it has a much better chance of
              becoming part of real daily life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Learn more
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore research
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Design principles
            </p>

            <div className="mt-8 space-y-5">
              {designPrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Premium without feeling distant
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The goal is a product that feels elevated and thoughtful, while
                still remaining warm, simple, and approachable.
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
                Begin with the part that feels most relevant
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Explore the device, learn how it works, or see the broader system behind it
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Neuvago is designed to feel calm and straightforward, while also
                opening the door to a deeper app experience and a broader
                understanding of stress, sleep, recovery, and nervous system regulation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/how-it-works"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Learn how it works
                </Link>

                <Link
                  href="/app"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore app
                </Link>

                <Link
                  href="/shop"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Shop later
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
