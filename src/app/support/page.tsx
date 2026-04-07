import Link from "next/link"

export const metadata = {
  title:
    "Support | Neuvago",
  description:
    "Find support for Neuvago, including product information, app guidance, legal and compliance information, and the broader learning system around stress, sleep, recovery, and nervous system support.",
}

const supportAreas = [
  {
    title: "Product support",
    description:
      "Learn more about the device, how it fits into the Neuvago system, and where to go for intended use and trust information.",
    href: "/product",
    linkLabel: "Explore device",
  },
  {
    title: "App support",
    description:
      "Understand how the app works, what role it plays in the broader system, and how guided support fits into daily use.",
    href: "/app",
    linkLabel: "Explore app",
  },
  {
    title: "How it works",
    description:
      "See the broader system clearly, including how device, app, learning, and calmer daily support connect.",
    href: "/how-it-works",
    linkLabel: "See how it works",
  },
  {
    title: "Legal and compliance",
    description:
      "Find intended use, medical disclaimer, privacy policy, terms, trust & safety, and broader compliance information.",
    href: "/legal",
    linkLabel: "Go to legal hub",
  },
]

const commonNeeds = [
  {
    title: "I want to understand the product better",
    description:
      "A good next step is to start with the product page, the app page, or the how-it-works overview.",
  },
  {
    title: "I want to know how Neuvago should be used",
    description:
      "The intended use, trust & safety, and medical disclaimer pages help clarify how the product is positioned and how it should be understood.",
  },
  {
    title: "I want more background before I decide anything",
    description:
      "The learning hub and research hub provide deeper context around stress, sleep, recovery, and nervous system support.",
  },
]

const pathways = [
  {
    title: "Start with the product",
    description:
      "If your question is mostly about the device, begin there and then move into legal, app, or how-it-works pages as needed.",
    href: "/product",
    linkLabel: "Start with product",
  },
  {
    title: "Start with the app",
    description:
      "If your question is mostly about guided sessions, daily support, or using Neuvago without the device, begin with the app.",
    href: "/app",
    linkLabel: "Start with app",
  },
  {
    title: "Start with legal / trust",
    description:
      "If your question is about safety, intended use, classification, privacy, or product positioning, begin with the legal hub.",
    href: "/legal",
    linkLabel: "Start with legal",
  },
]

export default function SupportPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Support
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Support for product, app, trust information, and the broader Neuvago system
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The Neuvago support hub is here to help users find the right next
              step more easily. Whether the question is about the device, the
              app, intended use, legal information, or the broader learning
              system, this page is designed to make that path clearer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/how-it-works"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                See how it works
              </Link>

              <Link
                href="/legal"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Go to legal hub
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
                        Support hub
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clearer way to find the right next step
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Product
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Device and system support
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Legal
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Trust and compliance
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Learn
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Broader context
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
              What support means here
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Support should make the whole Neuvago system easier to understand, not harder to navigate
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              For Neuvago, support is not only about troubleshooting. It is also
              about helping users understand how the device, the app, legal
              information, and the learning system fit together in a calm and
              trustworthy way.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why this page works as a support hub rather than only a
              contact page. It helps people find the right path depending on
              what kind of question they actually have.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Common support needs
            </p>

            <div className="mt-8 space-y-5">
              {commonNeeds.map((item) => (
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
              Main support areas
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with the part of the system that best matches your question
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {supportAreas.map((item) => (
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
              Choose your pathway
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A clearer way to begin depending on what kind of support you need
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pathways.map((item) => (
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
                Continue through the broader Neuvago system
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Explore product, legal information, or the learning system next
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The support hub is designed to help users move more easily
                between product information, trust and compliance pages, and the
                broader learning system around stress, sleep, recovery, and
                nervous system support.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/product"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore device
                </Link>

                <Link
                  href="/legal"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Go to legal hub
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
