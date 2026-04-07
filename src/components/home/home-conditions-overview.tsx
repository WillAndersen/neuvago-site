import Link from "next/link"

const conditions = [
  {
    title: "Stress",
    description:
      "Explore calmer ways to think about stress, regulation, and daily support.",
    href: "/conditions/stress",
  },
  {
    title: "Sleep",
    description:
      "Learn more about winding down, rest, sleep support, and nervous system rhythm.",
    href: "/conditions/sleep",
  },
  {
    title: "Anxiety",
    description:
      "Understand the connection between calm, awareness, and supportive routines.",
    href: "/conditions/anxiety",
  },
  {
    title: "Burnout",
    description:
      "Explore recovery, overwhelm, and the role of steadier support over time.",
    href: "/conditions/burnout",
  },
]

export function HomeConditionsOverview() {
  return (
    <section className="border-t border-black/5 bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions overview
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Explore the challenges people are trying to better understand
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people start by looking for help with what they are feeling:
              stress, poor sleep, overwhelm, or difficulty unwinding. Neuvago
              is building a calmer educational path into these topics.
            </p>
          </div>

          <div>
            <Link
              href="/conditions"
              className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore all conditions
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {conditions.map((condition) => (
            <article
              key={condition.title}
              className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
            >
              <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                {condition.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                {condition.description}
              </p>

              <Link
                href={condition.href}
                className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
              >
                Explore {condition.title.toLowerCase()}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
