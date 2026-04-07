import Link from "next/link"

export function HomeFinalCta() {
  return (
    <section className="border-t border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Begin with what feels most useful
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Explore the product, the app, or the ideas behind the experience
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago is designed to meet people at different starting points.
              Some begin with the product. Others begin with learning,
              understanding, and building a calmer daily rhythm.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/product"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore product
              </Link>

              <Link
                href="/how-it-works"
                className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
              >
                Learn how it works
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
  )
}
