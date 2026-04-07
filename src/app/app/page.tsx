import Link from "next/link"

export const metadata = {
  title:
    "Neuvago App | Guided Sessions for Stress, Sleep and Recovery",
  description:
    "Explore the Neuvago app for guided sessions, check-ins, progress, and calmer daily support — a standalone experience for stress, sleep, recovery, and nervous system support, with or without the device.",
}

const appBenefits = [
  {
    title: "Use it on its own",
    description:
      "Neuvago can be used as a standalone app for guided support, stress relief, and calmer daily routines — no device required.",
  },
  {
    title: "Guided sessions for stress relief",
    description:
      "A growing library of guided sessions helps people unwind, reset, slow down, and create calmer moments throughout the day.",
  },
  {
    title: "Check in with how you feel",
    description:
      "Simple check-ins help users notice stress, energy, recovery, and how they are actually feeling over time.",
  },
  {
    title: "Build continuity",
    description:
      "Progress, structure, and repeatable routines make it easier to return regularly and build a steadier rhythm.",
  },
]

const sessionUseCases = [
  {
    title: "Stress reset",
    description:
      "For moments when stress feels high and you want guided support that helps you slow down and reset.",
  },
  {
    title: "Winding down",
    description:
      "For evenings, transitions, or any time you want help moving from stimulation into a calmer state.",
  },
  {
    title: "Recovery support",
    description:
      "For days when you feel depleted, overloaded, or like you need a gentler rhythm and more space to recover.",
  },
  {
    title: "Calm focus",
    description:
      "For moments when you want to feel more settled, clear, and steady without adding more intensity.",
  },
]

const personalizationFeatures = [
  {
    title: "Check-ins create a personal starting point",
    description:
      "Instead of guessing, users can begin with how they actually feel right now.",
  },
  {
    title: "Progress makes patterns easier to see",
    description:
      "Over time, the app can help people notice changes in stress, recovery, and daily rhythm.",
  },
  {
    title: "More relevance over time",
    description:
      "The more consistently someone uses the app, the more natural and supportive the experience can feel.",
  },
]

const systemFeatures = [
  {
    title: "Use the app by itself",
    description:
      "Start with guided sessions, check-ins, and calmer daily support without needing any additional hardware.",
  },
  {
    title: "Add the device later",
    description:
      "For people who want it, the device can become another layer in a broader Neuvago experience.",
  },
  {
    title: "One connected system",
    description:
      "Together, app guidance and device support can create a calmer, more continuous relationship with daily routines.",
  },
]

export default function AppPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Neuvago app
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Guided sessions and calmer support, with or without the device
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago app can be used on its own as a guided stress relief
              and nervous system support experience. Check-ins, sessions,
              progress, and helpful content create a calmer and more personal
              daily rhythm — while the device can add another layer for people
              who want it.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
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
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Works without device</span>
              <span>Guided stress relief sessions</span>
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
                        Calm support as a standalone experience
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Guided sessions
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Stress relief and calmer routines
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Check-ins
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Notice how you feel
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Progress
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            See patterns over time
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
              What the app helps you do
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              More than content. A calmer structure for daily support.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The app is designed to help people slow down, notice more, and
              build simple routines that feel easier to return to over time —
              whether they use it on its own or as part of the broader Neuvago system.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {appBenefits.map((item) => (
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
              Guided sessions
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A growing library of guided support for stress relief and calmer daily rhythms
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago app is designed to be useful on its own. Guided
              sessions help users find calmer moments throughout the day, build
              better transitions, and create a more supportive relationship with
              stress, recovery, and rest.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This makes the app valuable both for people who want standalone
              stress relief support and for those who later choose to add the
              device as part of the broader Neuvago system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how it works
              </Link>

              <Link
                href="/product"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Device is optional
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Session types
            </p>

            <div className="mt-8 space-y-5">
              {sessionUseCases.map((item) => (
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
                Standalone value matters
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The app should feel helpful, calming, and worth using even for
                people who never connect it to a device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Personalization
            </p>

            <div className="mt-8 space-y-5">
              {personalizationFeatures.map((item) => (
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
                Personal support feels different
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                When people can see patterns and start from how they actually
                feel, the experience becomes more relevant and more supportive.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Check-ins and progress
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The app becomes more personal the more it reflects real life
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Guided sessions are a big part of the value, but so is the ability
              to notice how you feel, track changes over time, and build a more
              personal sense of what actually helps.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Check-ins and progress help make the experience feel less generic
              and more grounded in real daily patterns around stress, rest,
              energy, and recovery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Learn how it works
              </Link>

              <Link
                href="/product"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore the broader system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              App + device
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Strong on its own, with the option to become part of something broader
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago app is designed to stand on its own as a guided stress
              relief and daily support experience. For some people, that is all
              they need.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              For others, the device can later become an additional layer within
              the same ecosystem. That means the app is never just an add-on —
              it is a real product in its own right, and also part of a larger system.
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
                See how it works together
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              One flexible system
            </p>

            <div className="mt-8 space-y-5">
              {systemFeatures.map((item) => (
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
                Optional expansion matters
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The strongest setup is one where the app already feels valuable,
                and the device can later deepen the experience for people who want it.
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
                Start with the app, expand later if you want to
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Guided support, stress relief, and calmer routines — with or without the device
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Neuvago is designed so the app already feels valuable on its
                own. For people who want more later, the device can become part
                of the same broader experience.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/how-it-works"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Learn how it works
                </Link>

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
