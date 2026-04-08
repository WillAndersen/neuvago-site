import Link from "next/link"

export const metadata = {
  title: "Neuvago Device | Calm Support for Stress, Sleep and Recovery",
  description:
    "Explore the Neuvago device — a thoughtfully designed product created to support calmer routines, stress relief, winding down, and recovery as part of the broader Neuvago system.",
}

const productPrinciples = [
  {
    title: "Designed to feel approachable",
    description:
      "The product should feel calm, clear, and easy to return to — not technical, intimidating, or overly clinical.",
  },
  {
    title: "Built for repeatable use",
    description:
      "The goal is not a one-off interaction, but a device that can become part of a steadier daily rhythm over time.",
  },
  {
    title: "Part of a broader system",
    description:
      "The device is strongest when seen together with the app, learning ecosystem, and the wider Neuvago experience.",
  },
]

const productMoments = [
  {
    title: "Stress feels high",
    description:
      "For moments when you want a calmer transition out of stress and toward something steadier.",
  },
  {
    title: "You want to wind down",
    description:
      "For evenings or slower parts of the day when you want support moving into a calmer state.",
  },
  {
    title: "You want a gentler rhythm",
    description:
      "For people who want support that feels realistic and easier to repeat, not more intensity.",
  },
  {
    title: "You want a connected experience",
    description:
      "For people who want the device to sit inside a broader app and learning ecosystem, not stand alone as an isolated tool.",
  },
]

const ecosystemLayers = [
  {
    eyebrow: "Device",
    title: "A physical layer for calm support",
    description:
      "The device gives the Neuvago system a tangible, repeatable physical point of return.",
  },
  {
    eyebrow: "App",
    title: "A guided layer for continuity",
    description:
      "The app helps turn use into a more personal and sustained rhythm through check-ins, sessions, and progress.",
  },
  {
    eyebrow: "Learning",
    title: "A wider layer of understanding",
    description:
      "The research and learning ecosystem helps people better understand stress, recovery, nervous system support, and the broader experience.",
  },
]

const whyItMatters = [
  {
    title: "Calmer daily support",
    description:
      "The product is designed to support calmer routines that feel easier to integrate into everyday life.",
  },
  {
    title: "Less friction, more return",
    description:
      "The experience should feel simple enough that returning to it feels natural rather than effortful.",
  },
  {
    title: "A more coherent system",
    description:
      "The device becomes more valuable when it is connected to app guidance and a broader understanding of the experience.",
  },
]

export default function ProductPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago device
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              A thoughtfully designed device for calmer routines and steadier support
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago device is designed to support stress relief, winding
              down, recovery, and calmer daily rhythm as part of a broader
              system that also includes the app and the wider Neuvago knowledge universe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get started
              </Link>

              <Link
                href="/app"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore app
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                How it works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Designed for calmer routines</span>
              <span>Built as part of a system</span>
              <span>App-connected experience</span>
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
                        Device experience
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Calm, simple, and easy to return to
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Daily rhythm
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Built for repeatable use over time
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Calm support
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Gentler transitions
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Connected system
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Works with the app
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
              Product philosophy
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The device is designed to feel useful in real life
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago should not feel like a harsh or overcomplicated product.
              The device is meant to feel approachable, calm, and realistic to
              return to in everyday use.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {productPrinciples.map((item) => (
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
              Where it fits
            </p>

            <div className="mt-8 space-y-5">
              {productMoments.map((item) => (
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
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common use moments
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The product is meant to support real daily situations
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The most useful products are not just impressive in theory. They
              fit into real moments — stress, winding down, slower transitions,
              and the need for a steadier rhythm through the day.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The Neuvago device is designed to sit inside those moments in a
              way that feels simpler and more repeatable over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how it works
              </Link>

              <Link
                href="/app"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore app
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              A connected system
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The device is stronger when it is part of something broader
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is not built around a single isolated hardware interaction.
              The device becomes more useful when it sits inside a wider system
              of app guidance, daily continuity, and deeper understanding.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That broader system is what helps the experience feel more
              personal, more coherent, and more sustainable over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/app"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore app
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore research
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            {ecosystemLayers.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
                  {item.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-medium leading-tight text-[#1f1f1c]">
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
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why it matters
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The point is not more complexity. The point is more usable support.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The product should make calmer support feel more accessible,
              repeatable, and grounded in everyday life rather than more intense
              or more difficult to use.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyItMatters.map((item) => (
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

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Explore the broader system around the product
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Start with the device, then understand how the wider experience fits together
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The product is one important part of Neuvago, but it becomes
                stronger when seen together with the app, the learning layer,
                and the broader experience it belongs to.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-started"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Get started
                </Link>

                <Link
                  href="/app"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore app
                </Link>

                <Link
                  href="/how-it-works"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  How it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
