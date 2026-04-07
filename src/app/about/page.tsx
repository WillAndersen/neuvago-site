import Link from "next/link"

export const metadata = {
  title:
    "About Neuvago | A Calmer Approach to Stress, Sleep and Nervous System Support",
  description:
    "Learn about Neuvago, why we are building it, and how our calmer approach connects device, app, learning, and research around stress, sleep, recovery, and nervous system support.",
}

const coreIdeas = [
  {
    title: "A calmer approach",
    description:
      "Neuvago is built around the idea that support should feel clear, calm, and realistic enough to return to in everyday life.",
  },
  {
    title: "More than one product",
    description:
      "We are building a connected system that includes device, app, learning, and research — not just one isolated tool.",
  },
  {
    title: "Support that fits real life",
    description:
      "We care about what people actually feel: stress that lingers, sleep that feels fragile, recovery that feels thinner, and a body that is hard to bring back down.",
  },
]

const principles = [
  {
    title: "Calm over intensity",
    description:
      "We believe many people do not need more force. They need clearer, steadier, more supportive ways to relate to stress, sleep, and recovery.",
  },
  {
    title: "Clarity over hype",
    description:
      "We want Neuvago to feel intelligent and trustworthy, not exaggerated, clinical, or overclaimed.",
  },
  {
    title: "Daily rhythm matters",
    description:
      "Stress, sleep, emotional load, and recovery are not isolated topics. They shape everyday life, and support should reflect that.",
  },
]

const ecosystem = [
  {
    title: "Device",
    description:
      "A premium physical product designed to feel approachable, calm, and easy to return to.",
    href: "/product",
    linkLabel: "Explore device",
  },
  {
    title: "App",
    description:
      "A guided daily support experience with sessions, check-ins, progress, and calmer routines — with or without the device.",
    href: "/app",
    linkLabel: "Explore app",
  },
  {
    title: "Learn",
    description:
      "A growing authority layer around the vagus nerve, regulation, recovery, stress, sleep, and emotional support.",
    href: "/learn",
    linkLabel: "Go to learning hub",
  },
  {
    title: "Research",
    description:
      "A more structured evidence layer that supports the broader Neuvago worldview with depth and seriousness.",
    href: "/research",
    linkLabel: "View research hub",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              About Neuvago
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Building a calmer, more thoughtful approach to stress, sleep, recovery, and daily nervous system support
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago exists to create a more connected and supportive way of
              helping people understand stress, unwind more easily, build better
              recovery rhythms, and feel more supported in everyday life. We are
              building this as a connected system of device, app, learning, and
              research — designed to feel calm, premium, and grounded in real experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore device
              </Link>

              <Link
                href="/learn"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Go to learning hub
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
                        Brand idea
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A connected system designed to feel calm, intelligent, and usable in real life
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Device
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Calm physical support
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            App
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Guided daily support
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Learning
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Deeper understanding
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
              What Neuvago is
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Neuvago is not only a device or only an app. It is a broader system for calmer daily support.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              We are building Neuvago as a connected experience. For some
              people, the app may be the first entry point. For others, it may
              be the device, a learning page, or a specific question about
              stress, sleep, or recovery.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The goal is that all of those entry points still feel like part of
              the same system: calm, clear, premium, thoughtful, and designed to
              support real life rather than sit outside it.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Core ideas
            </p>

            <div className="mt-8 space-y-5">
              {coreIdeas.map((item) => (
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
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why we are building it
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              We are building Neuvago because too many people feel like they are carrying more than their system can comfortably hold
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people live with stress that lingers, evenings that do not
              fully soften, recovery that feels thinner, emotions that are harder
              to carry, or a body that simply feels harder to bring back down.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              We think these experiences deserve support that feels more calm,
              more usable, and more coherent — not more noise, more pressure, or
              more confusion.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why Neuvago is being built at the intersection of product,
              experience, education, and evidence-informed understanding.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              How we think
            </p>

            <div className="mt-8 space-y-5">
              {principles.map((item) => (
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
              Our perspective
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              We believe support should feel calm enough to trust, simple enough to use, and meaningful enough to return to
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is not being built to feel clinical, intimidating, or
              overcomplicated. It is being built to feel intelligent, clear,
              calm, and deeply usable in everyday life.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That affects everything: the device, the app, the learning system,
              the research layer, and the way the brand itself should feel when
              someone first encounters it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                The system we are creating
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Neuvago is being built as a connected ecosystem, not as a single isolated product
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Each part of Neuvago has a different role, but the larger value
                comes from how the pieces support one another.
              </p>
            </div>

            <div>
              <Link
                href="/how-it-works"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ecosystem.map((item) => (
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

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Explore Neuvago from the angle that feels most relevant
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Start with the device, the app, or the learning system — and move deeper from there
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Neuvago is being built to connect calmer support, better
                understanding, and a more thoughtful daily relationship with
                stress, sleep, recovery, and the nervous system.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/product"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore device
                </Link>

                <Link
                  href="/app"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore app
                </Link>

                <Link
                  href="/learn"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Go to learning hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
