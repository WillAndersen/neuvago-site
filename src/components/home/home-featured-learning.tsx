import Link from "next/link"

const articles = [
  {
    eyebrow: "Learn",
    title: "What is the vagus nerve?",
    description:
      "A clear introduction to what the vagus nerve is, why it matters, and why it is often discussed in relation to stress, calm, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Read more",
  },
  {
    eyebrow: "Learn",
    title: "Nervous system regulation explained",
    description:
      "Understand what regulation means in practice, and why daily rhythms, rest, and awareness can make such a meaningful difference over time.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    eyebrow: "Learn",
    title: "What is vagal tone?",
    description:
      "A calmer, more practical explanation of vagal tone and why people connect it to resilience, regulation, and recovery.",
    href: "/learn/vagal-tone",
    linkLabel: "Explore vagal tone",
  },
  {
    eyebrow: "Research",
    title: "Explore the research library",
    description:
      "Go deeper into Neuvago’s growing collection of research-informed articles, educational content, and topic overviews.",
    href: "/research",
    linkLabel: "Explore research",
  },
]

export function HomeFeaturedLearning() {
  return (
    <section className="border-t border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Featured learning
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with the ideas behind the experience
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is designed to support not just action, but understanding.
              These guides help people explore the vagus nerve, nervous system
              regulation, stress, sleep, and recovery in a clearer way.
            </p>
          </div>

          <div>
            <Link
              href="/learn"
              className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Explore all learning
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-[2rem] border border-black/5 bg-white/55 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
            >
              <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
                {article.eyebrow}
              </p>

              <h3 className="mt-4 text-2xl font-medium leading-tight text-[#1f1f1c]">
                {article.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
              >
                {article.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
