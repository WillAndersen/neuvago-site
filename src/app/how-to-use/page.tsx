import Link from "next/link"

export const metadata = {
  title:
    "How to Use Neuvago | Device, App and Daily Nervous System Support",
  description:
    "Learn how to use Neuvago in everyday life, including guided app use, device routines, stress support, sleep support, and calmer daily recovery practices.",
}

const simplePrinciples = [
  {
    title: "Start simple",
    description:
      "Neuvago is designed to feel approachable. You do not need a complicated protocol to begin using it well.",
  },
  {
    title: "Use it in real life",
    description:
      "The strongest routines are often the ones that fit naturally into the day rather than feeling like another demanding task.",
  },
  {
    title: "Consistency matters more than intensity",
    description:
      "For many people, the value comes from calmer repetition over time rather than trying to do everything perfectly.",
  },
]

const usagePaths = [
  {
    title: "Use the app on its own",
    description:
      "You can begin with guided sessions, check-ins, and calmer routines through the Neuvago app without needing the device.",
    href: "/app",
    linkLabel: "Explore app",
  },
  {
    title: "Use the device as part of a routine",
    description:
      "The device can become part of a daily or evening rhythm built around stress support, unwinding, and steadier recovery.",
    href: "/product",
    linkLabel: "Explore device",
  },
  {
    title: "Use app and device together",
    description:
      "For some people, the strongest experience comes from combining physical product use with guided sessions, tracking, and structure in the app.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
]

const realLifeMoments = [
  {
    title: "After a demanding day",
    description:
      "A simple way to create a calmer transition out of work, stress, pressure, or overstimulation.",
  },
  {
    title: "As part of an evening routine",
    description:
      "A softer rhythm for winding down before rest, sleep, or quiet time.",
  },
  {
    title: "During recovery-focused periods",
    description:
      "A useful support layer when the goal is to feel steadier, less overloaded, and easier to restore over time.",
  },
  {
    title: "As part of regular nervous system support",
    description:
      "Not only for difficult days, but also as something simple and repeatable that supports a calmer daily rhythm.",
  },
]

const practicalGuidelines = [
  {
    title: "Follow the product instructions",
    description:
      "Always use the device and app in accordance with the guidance that comes with the Neuvago system.",
  },
  {
    title: "Let the routine stay realistic",
    description:
      "It is usually better to build something simple you can return to than something overly ambitious you abandon quickly.",
  },
  {
    title: "Use wellness technology responsibly",
    description:
      "If you have medical conditions, implanted devices, or uncertainty about electrical stimulation technologies, consult a qualified healthcare professional first.",
  },
]

export default function HowToUsePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How to use
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              How to use Neuvago in everyday life
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is designed to feel simple enough to use in real life.
              Whether you begin with the app, the device, or both together, the
              goal is not intensity. It is calmer, steadier support for stress,
              sleep, recovery, and everyday nervous system routines.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/app"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
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
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-[#ebe4da] blur-2xl" />

            <div className="rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur">
              <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
                <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Everyday use
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Calm support that fits into routines, not outside them
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          App
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Guided support and check-ins
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Device
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Daily use and routine support
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Rhythm
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Repeatable and calm
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
              Start simple
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The best way to use Neuvago is usually the way that feels simple enough to return to
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people assume a wellness routine has to be complex to be
              effective. We think the opposite is often true. A calmer, more
              realistic routine is much easier to maintain — and much more
              likely to become meaningful over time.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Core principles
            </p>

            <div className="mt-8 space-y-5">
              {simplePrinciples.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h2 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h2>
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
              Different ways to use Neuvago
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              There is more than one valid way to begin
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {usagePaths.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Real-life moments
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The most useful routines are often the ones that fit naturally into everyday life
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {realLifeMoments.map((item) => (
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
              Practical guidelines
            </p>

            <div className="mt-8 space-y-5">
              {practicalGuidelines.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h2 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Device and app together
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              For some people, the strongest experience comes from using Neuvago as a connected system
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The app can stand on its own, and the device can be meaningful on
              its own. But together, they can create a more complete daily
              rhythm — combining product use, guided support, progress, and a
              clearer sense of continuity.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That does not mean everything has to be used at once. It simply
              means the Neuvago system is designed so each layer can support the
              others when it feels relevant.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how it works
              </Link>

              <Link
                href="/legal/intended-use"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Read intended use
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Continue through the broader Neuvago system
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Explore the app, the device, or the support hub next
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                How to use Neuvago is designed to help people begin simply and
                build calmer routines over time. The next step may be exploring
                the app, understanding the product better, or using the support
                hub to find the right path more easily.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/app"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore app
                </Link>

                <Link
                  href="/product"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore device
                </Link>

                <Link
                  href="/support"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Go to support hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
