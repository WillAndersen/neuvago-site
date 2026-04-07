import Link from "next/link"

const items = [
  {
    eyebrow: "Device",
    title: "A thoughtfully designed device",
    description:
      "Designed to feel calm, simple, and approachable as part of a supportive daily routine.",
    href: "/product",
    linkLabel: "Explore product",
  },
  {
    eyebrow: "App",
    title: "Guided support through the app",
    description:
      "Check-ins, sessions, and progress help turn occasional use into a more personal and consistent practice.",
    href: "/app",
    linkLabel: "Explore app",
  },
  {
    eyebrow: "Knowledge",
    title: "A growing learning ecosystem",
    description:
      "Research-informed articles and educational content help people better understand stress, sleep, recovery, and nervous system regulation.",
    href: "/research",
    linkLabel: "Explore research",
  },
]

export function HomeWhatIsNeuvago() {
  return (
    <section className="border-t border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            What Neuvago is
          </p>

          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            More than a product. A calmer support system.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
            Neuvago is built as an ecosystem that brings together device
            design, app guidance, and thoughtful education in one calm and
            connected experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-black/5 bg-white/55 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
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
  )
}
