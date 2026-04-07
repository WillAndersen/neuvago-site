import Link from "next/link"

export const metadata = {
  title:
    "How Neuvago Works | Device, App and Nervous System Support",
  description:
    "Learn how Neuvago works as a connected system of device, app, guided sessions, and calmer daily support for stress, sleep, recovery, and nervous system regulation.",
}

const steps = [
  {
    title: "Start with how you feel",
    description:
      "Neuvago begins with the user’s real experience — stress, tiredness, poor sleep, overload, or the need for a calmer reset in the moment.",
  },
  {
    title: "Use guided support",
    description:
      "The app provides guided sessions, check-ins, and structure that help users create calmer routines and more repeatable daily support.",
  },
  {
    title: "Add the device if wanted",
    description:
      "For people who want a broader experience, the device can become an additional layer inside the same calmer Neuvago system.",
  },
  {
    title: "Build steadier rhythm over time",
    description:
      "The goal is not intensity. It is a calmer, more supportive rhythm around stress, rest, sleep, recovery, and return.",
  },
]

const systemParts = [
  {
    title: "Device",
    description:
      "A premium physical product designed to feel simple, calm, and easy to return to in daily life.",
    href: "/product",
    linkLabel: "Explore device",
  },
  {
    title: "App",
    description:
      "A standalone guided experience with sessions, check-ins, progress, and calmer support — with or without the device.",
    href: "/app",
    linkLabel: "Explore app",
  },
  {
    title: "Learning",
    description:
      "A connected knowledge layer around vagus nerve topics, regulation, stress, sleep, recovery, and emotional load.",
    href: "/learn",
    linkLabel: "Explore learning",
  },
  {
    title: "Research",
    description:
      "An evidence-informed layer that strengthens the broader authority structure behind the Neuvago system.",
    href: "/research",
    linkLabel: "Explore research",
  },
]

const useMoments = [
  {
    title: "Stressful days",
    description:
      "For moments when the body feels overloaded, activated, or like it needs a calmer reset.",
  },
  {
    title: "Evening transitions",
    description:
      "For unwinding after the day and creating a softer bridge into rest or sleep.",
  },
  {
    title: "Recovery routines",
    description:
      "For building more supportive rhythms around restoration, steadiness, and daily capacity.",
  },
  {
    title: "Ongoing nervous system support",
    description:
      "For people who want something they can come back to regularly rather than only using during peak stress.",
  },
]

const principles = [
  {
    title: "Simple enough to return to",
    description:
      "A support system only helps if it feels realistic enough to use more than once.",
  },
  {
    title: "Calm, not clinical",
    description:
      "The Neuvago experience is designed to feel warm, premium, and supportive rather than technical or intimidating.",
  },
  {
    title: "Built for continuity",
    description:
      "The system is meant to support real life through repetition, rhythm, and calmer habits over time.",
  },
]

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How it works
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              How Neuvago works as a calmer system for stress, sleep, recovery, and daily support
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is designed as a connected system rather than a single
              isolated product. The device, app, guided sessions, check-ins,
              learning, and research layers work together to support calmer
              daily routines and a steadier relationship with stress, rest,
              sleep, and recovery.
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
                        Connected system
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Device, app, daily support, and deeper understanding working together
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          App
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Guided sessions and structure
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Device
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Premium physical support
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Learning
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Broader understanding
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
              The core flow
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A simple system built to support daily life rather than overwhelm it
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago system works best when it feels clear, repeatable, and
              easy to return to. The goal is not more intensity — it is calmer,
              steadier support over time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
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
              System parts
            </p>

            <div className="mt-8 space-y-5">
              {systemParts.map((item) => (
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
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                  >
                    {item.linkLabel}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Stronger together
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Each layer can stand on its own, but together they create a
                broader and more supportive user journey.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              One system, multiple entry points
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              People can begin with the app, the device, a learning page, or a condition page — and still enter the same broader Neuvago experience
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Not everyone starts in the same place. Some begin with stress
              relief and guided sessions. Some begin with the device. Others
              begin by reading about sleep, recovery, the vagus nerve, or the
              nervous system.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The purpose of the system is to make all of those entry points
              feel coherent. Instead of disconnected pieces, the experience
              should feel like one calm, well-structured path.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore learning
              </Link>

              <Link
                href="/conditions"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Where it helps most
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A calmer system designed for real moments in real life
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago system is designed to fit into ordinary life rather
              than sit outside it. These are some of the moments where it can
              feel most relevant.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useMoments.map((item) => (
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
              The system only works if it feels calm, usable, and realistic to return to
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is not designed to feel clinical, intense, or demanding.
              It is designed to feel warm, premium, clear, and easy to live with.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That matters because daily support only becomes meaningful when it
              feels realistic enough to become part of everyday life rather than
              something people abandon after a short burst of motivation.
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
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore app
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Core principles
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

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Calm systems create better continuity
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                When support feels simple and approachable, it is much easier to
                return to consistently over time.
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
                Start anywhere, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                One calmer system connecting device, app, learning, and research
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Neuvago works best as a connected experience. Whether someone
                begins with the device, the app, a condition page, or the
                broader learning hub, the goal is the same: clearer support for
                stress, sleep, recovery, and steadier daily life.
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
                  Explore learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
