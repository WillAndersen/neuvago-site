import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Check in with how you feel",
    description:
      "Start with simple awareness. Notice stress, energy, rest, and how your body feels today.",
  },
  {
    number: "02",
    title: "Follow calm, guided support",
    description:
      "Use the device and app experience to build supportive moments around stress, winding down, and recovery.",
  },
  {
    number: "03",
    title: "Build awareness over time",
    description:
      "Return regularly, notice patterns, and create a steadier relationship with your nervous system rhythms.",
  },
]

export function HomeHowItWorks() {
  return (
    <section className="border-t border-black/5 bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            A simple rhythm designed to feel easy to return to
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Neuvago is built to feel calm and approachable from the start,
            while becoming more personal and supportive over time.
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

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/how-it-works"
            className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore how it works
          </Link>

          <Link
            href="/app"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
          >
            Explore app
          </Link>
        </div>
      </div>
    </section>
  )
}
