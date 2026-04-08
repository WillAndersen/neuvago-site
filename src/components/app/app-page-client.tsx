"use client"

import Link from "next/link"

import { useAuthUser } from "@/hooks/useAuthUser"

const appPillars = [
  {
    title: "Guided sessions",
    description:
      "Use calm guided support for stress relief, winding down, recovery, and steadier daily rhythm.",
  },
  {
    title: "Check-ins",
    description:
      "Start from how you actually feel instead of guessing what kind of support you need.",
  },
  {
    title: "Progress",
    description:
      "See patterns over time and build a more personal sense of what helps you feel steadier.",
  },
]

const standaloneValue = [
  {
    title: "Useful on its own",
    description:
      "The app is designed to feel valuable even without the device, making it a real product in its own right.",
  },
  {
    title: "Easy to return to",
    description:
      "The experience should feel calm and repeatable, not like something you need to force yourself to use.",
  },
  {
    title: "More personal over time",
    description:
      "As people check in, follow sessions, and build continuity, the experience becomes more relevant.",
  },
]

const sessionMoments = [
  {
    title: "Stress reset",
    description:
      "For moments when stress feels high and you want guided support that helps you slow down and reset.",
  },
  {
    title: "Winding down",
    description:
      "For evenings, transitions, or any time you want help moving into a calmer state.",
  },
  {
    title: "Recovery support",
    description:
      "For days when you feel depleted, overloaded, or like you need a gentler rhythm.",
  },
  {
    title: "Calm focus",
    description:
      "For moments when you want to feel clearer and steadier without adding more intensity.",
  },
]

const systemLayers = [
  {
    eyebrow: "App",
    title: "A guided standalone experience",
    description:
      "The app should already feel calming, useful, and complete enough to stand on its own.",
  },
  {
    eyebrow: "Device",
    title: "An optional physical layer",
    description:
      "For people who want more later, the device can become another layer inside the broader Neuvago system.",
  },
  {
    eyebrow: "Knowledge",
    title: "A wider understanding layer",
    description:
      "The broader learning and research ecosystem helps the app feel more grounded in something larger.",
  },
]

const whyItMatters = [
  {
    title: "Less friction, more continuity",
    description:
      "A calmer product is easier to come back to than something that feels demanding or overbuilt.",
  },
  {
    title: "Support that reflects real life",
    description:
      "The app is meant to fit how people actually feel across stress, recovery, and the need for softer transitions.",
  },
  {
    title: "A stronger system over time",
    description:
      "The app becomes even more valuable when it connects naturally to the device and wider Neuvago experience.",
  },
]

export function AppPageClient() {
  const { isLoading, isSignedIn } = useAuthUser()

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago app
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Guided support, calmer routines, and a more personal rhythm over time
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago app is designed as a standalone experience for guided
              sessions, calmer daily support, check-ins, and progress — while
              also serving as a central layer in the broader Neuvago system for
              people who later choose to add the device.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {isLoading ? (
                <>
                  <Link
                    href="/how-it-works"
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    How it works
                  </Link>

                  <Link
                    href="/product"
                    className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
                  >
                    Explore device
                  </Link>
                </>
              ) : isSignedIn ? (
                <>
                  <Link
                    href="/continue"
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Continue
                  </Link>

                  <Link
                    href="/product"
                    className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
                  >
                    Explore device
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/get-started"
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Get started
                  </Link>

                  <Link
                    href="/product"
                    className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
                  >
                    Explore device
                  </Link>
                </>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Standalone app value</span>
              <span>Guided calmer support</span>
              <span>Device optional</span>
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
                        App experience
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Calm support as a product in its own right
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Guided sessions
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Support for calmer daily rhythm
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Check-ins
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Start from how you feel
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Progress
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Notice patterns over time
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
              Core pillars
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A calmer app experience built around support, awareness, and continuity
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The app is designed to help people slow down, notice more, and
              build a steadier relationship with stress, recovery, and calmer
              daily routines.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {appPillars.map((item) => (
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
              Why the app matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The app is not just an add-on. It is one of the core Neuvago products.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago app is designed to feel complete enough to stand on
              its own. That matters because guided support, calmer routines, and
              personal continuity should already feel valuable before any device
              is introduced.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              For some people, the app may be the primary experience. For
              others, it may later become the central layer connecting the
              device, daily use, and the broader Neuvago system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {isLoading ? (
                <Link
                  href="/how-it-works"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  See how it works
                </Link>
              ) : isSignedIn ? (
                <Link
                  href="/continue"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Continue
                </Link>
              ) : (
                <Link
                  href="/get-started"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Get started
                </Link>
              )}

              <Link
                href="/product"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore device
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            {standaloneValue.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Session moments
            </p>

            <div className="mt-8 space-y-5">
              {sessionMoments.map((item) => (
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
              Real daily use
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The app is designed around the moments when people actually want support
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The most useful digital experiences are grounded in real daily
              situations. The app should feel helpful in the moments when people
              want calmer transitions, guided support, or a gentler rhythm.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the experience is built around support, not noise —
              sessions that feel realistic to return to and check-ins that make
              the system feel more personal over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Learn how it works
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Inside the wider system
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The app becomes even stronger when it is part of something broader
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The app already has standalone value, but it becomes even more
              meaningful when it connects to the device layer and the wider
              Neuvago learning ecosystem.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That connection is what helps the experience feel more coherent,
              more personal, and more durable over time.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore device
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                How it works together
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            {systemLayers.map((item) => (
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

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Explore the app inside the wider Neuvago experience
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Start with guided support, then see how the broader system fits together
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The app is one of the most important parts of Neuvago. It can be
                useful on its own, and it can also become the central layer in a
                broader connected experience.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {isLoading ? (
                  <Link
                    href="/get-started"
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Get started
                  </Link>
                ) : isSignedIn ? (
                  <Link
                    href="/continue"
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Continue
                  </Link>
                ) : (
                  <Link
                    href="/get-started"
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Get started
                  </Link>
                )}

                <Link
                  href="/product"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore device
                </Link>

                <Link
                  href="/research"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
