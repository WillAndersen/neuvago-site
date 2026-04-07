import Link from "next/link"

export const metadata = {
  title:
    "Legal, Compliance and Policies | Neuvago",
  description:
    "Explore Neuvago legal, compliance, safety, privacy, and policy information, including medical disclaimer, intended use, regulatory information, CE compliance, FDA status, privacy policy, and terms of service.",
}

const legalGroups = [
  {
    title: "Product classification and intended use",
    description:
      "These pages explain how Neuvago is positioned as a general wellness product, what it is intended for, and what it is not intended to do.",
    links: [
      {
        title: "Medical Disclaimer",
        href: "/legal/medical-disclaimer",
        label: "Read disclaimer",
      },
      {
        title: "Intended Use",
        href: "/legal/intended-use",
        label: "Read intended use",
      },
      {
        title: "Regulatory Information",
        href: "/legal/regulatory",
        label: "Read regulatory overview",
      },
    ],
  },
  {
    title: "Compliance and market framework",
    description:
      "These pages explain the compliance and classification context around Neuvago in major markets and product safety frameworks.",
    links: [
      {
        title: "CE Compliance",
        href: "/legal/ce-compliance",
        label: "Read CE compliance",
      },
      {
        title: "FDA Status",
        href: "/legal/fda-status",
        label: "Read FDA status",
      },
      {
        title: "Trust & Safety",
        href: "/legal/trust-safety",
        label: "Read trust & safety",
      },
    ],
  },
  {
    title: "Privacy and legal terms",
    description:
      "These pages explain how we handle personal data, what terms apply to use of the website and products, and how we aim to communicate clearly and responsibly.",
    links: [
      {
        title: "Privacy Policy",
        href: "/legal/privacy-policy",
        label: "Read privacy policy",
      },
      {
        title: "Terms of Service",
        href: "/legal/terms-of-service",
        label: "Read terms",
      },
    ],
  },
]

const principles = [
  {
    title: "Transparency",
    description:
      "We want users to understand clearly what Neuvago is, how it is positioned, and where its boundaries are.",
  },
  {
    title: "Responsible communication",
    description:
      "We aim to describe the product carefully, avoid overstated claims, and keep wellness, education, and compliance language aligned.",
  },
  {
    title: "Trust through structure",
    description:
      "Legal, safety, regulatory, and privacy information should be easy to find and easy to navigate.",
  },
]

export default function LegalPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / Compliance
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Legal, compliance, safety, and policy information for Neuvago
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This section brings together the core legal, regulatory, safety,
              and policy information for Neuvago. It is designed to help users
              understand how the product is classified, what it is intended for,
              how we think about responsible communication, and where to find
              privacy and terms information.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                About Neuvago
              </Link>

              <Link
                href="/support"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Support
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
                        Trust layer
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A clear structure for classification, safety, privacy, and responsible product information
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Intended use
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What Neuvago is designed for
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Compliance
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Regulatory context
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Policies
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Privacy and terms
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
              Why this section exists
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Clear legal and compliance information helps users understand what Neuvago is, how it is positioned, and how it should be used
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Neuvago sits in a category where trust, intended use, and careful
              communication matter. This section is here to make that clearer.
              It brings together the pages that explain classification,
              compliance, safety, privacy, and the legal framework around use of
              the website and products.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The goal is not only legal completeness. It is also to make the
              broader Neuvago system feel more transparent, more serious, and
              easier to trust.
            </p>
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
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal and compliance structure
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Everything important in one clearer legal and trust layer
            </h2>
          </div>

          <div className="mt-14 space-y-10">
            {legalGroups.map((group) => (
              <section key={group.title}>
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#1f1f1c]">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-[#5f5a52]">
                    {group.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.links.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
                    >
                      <h4 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                        {item.title}
                      </h4>
                      <Link
                        href={item.href}
                        className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                      >
                        {item.label}
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
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
                Explore the product, the learning system, or support information next
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Legal and compliance information is one part of a broader trust
                layer. The next step may be understanding the product, learning
                more about the nervous system topics behind Neuvago, or finding
                support information.
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
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Go to learning hub
                </Link>

                <Link
                  href="/support"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
