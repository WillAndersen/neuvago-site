import Link from "next/link"

export const metadata = {
  title: "How Neuvago Works | A Calmer Rhythm for Stress, Sleep and Recovery",
  description:
    "Learn how Neuvago combines device support, guided app experiences, check-ins, and calmer daily routines to support stress, sleep, recovery, and nervous system regulation.",
}

const steps = [
  {
    number: "01",
    title: "Start with how you feel",
    description:
      "Neuvago begins with awareness. Instead of guessing, the experience is designed to start from what your body and mind seem to need right now.",
  },
  {
    number: "02",
    title: "Use calm, guided support",
    description:
      "Guided sessions and supportive routines help create steadier transitions around stress, recovery, winding down, and calmer daily rhythm.",
  },
  {
    number: "03",
    title: "Build continuity over time",
    description:
      "As people return to the experience, check-ins, progress, and routine help make support feel more personal, more relevant, and easier to sustain.",
  },
]

const layers = [
  {
    eyebrow: "Device",
    title: "A calm physical layer",
    description:
      "The device gives the Neuvago system a tangible, repeatable physical point of return.",
  },
  {
    eyebrow: "App",
    title: "A guided personal layer",
    description:
      "The app helps turn use into a more continuous practice through sessions, check-ins, and progress.",
  },
  {
    eyebrow: "Learning",
    title: "A wider understanding layer",
    description:
      "The learning and research ecosystem helps people better understand stress, regulation, recovery, and how the system fits together.",
  },
]

const useCases = [
  {
    title: "Stress feels high",
    description:
      "Neuvago can support calmer resets and steadier transitions when stress feels elevated or difficult to come down from.",
  },
  {
    title: "You want to wind down",
    description:
      "The experience can help create a softer transition into the evening or other slower parts of the day.",
  },
  {
    title: "You feel depleted",
    description:
      "A gentler rhythm can help support recovery-oriented moments when energy is low and the system feels overloaded.",
  },
  {
    title: "You want more consistency",
    description:
      "The broader goal is not intensity, but repeatability — support that feels easier to come back to over time.",
  },
]

const principles = [
  {
    title: "Simple enough to use in real life",
    description:
      "Neuvago should feel practical and approachable, not overly technical or demanding.",
  },
  {
    title: "Calm on the surface, deeper over time",
    description:
      "The experience can begin simply while becoming more personal and more meaningful with regular use.",
  },
  {
    title: "Useful with or without the device",
    description:
      "The app should already feel valuable on its own, while the device can deepen the broader system for people who want it.",
  },
]

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How it works
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              A calmer system designed to feel easier to return to over time
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is designed to help people move toward steadier states
              through a connected experience of device support, guided app use,
              check-ins, and calmer daily rhythm.
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
                href="/product"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore device
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Guided daily support</span>
              <span>Device + app system</span>
              <span>Calmer routines over time</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-[#ebe4da] blur-2xl" />

            <div className="rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur">
              <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
                <div className="rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                  <div className="space-y-4 rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Step 1
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#1f1f1c]">
                        Notice how you feel
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Step 2
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#1f1f1c]">
                        Follow calm guided support
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/70 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Step 3
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#1f1f1c]">
                        Build steadier continuity over time
                      </p>
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
              The basic flow
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The experience is designed to feel clear before it ever feels complex
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago should feel understandable at a high level from the start,
              even if the system becomes more personal and more supportive over time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[#8a847b]">
                  {step.number}
                </p>

                <h3 className="mt-5 text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {step.description}
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
              System layers
            </p>

            <div className="mt-8 space-y-5">
              {layers.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-lg font-medium text-[#1f1f1c]">
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
              Device + app + understanding
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Neuvago works best when the parts reinforce each other
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The goal is not one isolated product interaction. It is to create
              a broader system where hardware, app guidance, and learning
              reinforce each other and make the experience feel more coherent.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is what helps the experience become more meaningful over
              time: people understand more, notice more, and use the system more consistently.
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
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common moments
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The system is meant to fit the moments when people actually want support
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago should feel relevant not only in theory, but in the kinds
              of moments when people actually want calmer, steadier support.
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
              Design principles
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The experience should feel supportive before it feels advanced
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago should not feel like a noisy optimization tool or a layer
              of unnecessary health complexity. The system is meant to feel calm,
              usable, and realistic in everyday life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore product
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
            {principles.map((item) => (
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
                Begin in the way that feels most useful
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Start with the product, the app, or the wider understanding behind the system
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Some people begin by learning. Others begin with guided support.
                Others begin with the product itself. Neuvago is designed to
                make those different starting points feel coherent.
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
