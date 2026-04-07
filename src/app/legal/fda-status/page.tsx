import Link from "next/link"

export const metadata = {
  title:
    "FDA Status | Neuvago",
  description:
    "Read how Neuvago should be understood in relation to FDA regulation, including general wellness positioning, non-medical intended use, and responsible product communication in the United States.",
}

const keyPoints = [
  {
    title: "Neuvago is not FDA approved as a medical device",
    description:
      "Neuvago is positioned as a general wellness product and is not intended to diagnose, treat, cure, or prevent disease.",
  },
  {
    title: "General wellness positioning matters",
    description:
      "Regulatory treatment depends heavily on intended use and product claims. Neuvago is marketed within a wellness framework rather than a medical treatment framework.",
  },
  {
    title: "Responsible communication is part of compliance",
    description:
      "Clear boundaries around claims, intended use, and product purpose are essential for maintaining a compliant and trustworthy wellness positioning.",
  },
]

const sections = [
  {
    title: "Is Neuvago FDA approved?",
    body: [
      "The U.S. Food and Drug Administration regulates medical devices that are intended to diagnose, treat, cure, or prevent disease.",
      "Because Neuvago is designed and marketed as a general wellness device, it is not positioned as a medical device requiring FDA approval in that sense.",
      "Neuvago does not claim to diagnose or treat medical conditions and is not intended for medical use.",
    ],
  },
  {
    title: "General wellness policy context",
    body: [
      "The FDA has published guidance related to products positioned as general wellness products. These are products intended to support healthy lifestyle practices without making medical claims.",
      "Examples of general wellness positioning may include technologies related to relaxation, stress support, sleep support, mindfulness, meditation, fitness, and general well-being.",
      "Products in this category are typically treated differently from medical devices when they do not make disease-related claims.",
    ],
  },
  {
    title: "Wellness technology and nervous system support",
    body: [
      "Neuvago is intended as a consumer wellness technology that supports relaxation, stress support, and nervous system awareness.",
      "The device uses non-invasive auricular stimulation techniques that are widely discussed in scientific and educational contexts related to the autonomic nervous system and stress physiology.",
      "Neuvago is intended for individuals interested in wellness practices that may support relaxation and general well-being.",
    ],
  },
  {
    title: "Not intended for medical treatment",
    body: [
      "Neuvago devices are not intended to diagnose, treat, cure, or prevent any medical condition.",
      "Individuals experiencing symptoms of illness or medical concerns should consult a licensed healthcare professional.",
    ],
  },
  {
    title: "Responsible marketing",
    body: [
      "Regulatory classification is strongly influenced by intended use and marketing claims.",
      "Neuvago is marketed as a general wellness device intended to support relaxation, stress support, and autonomic nervous system awareness.",
      "The product is not promoted as a therapy, treatment, or medical intervention.",
    ],
  },
  {
    title: "Safety and product design",
    body: [
      "Although Neuvago is not positioned as a medical device, it is still intended to be designed with safety and responsible product development in mind.",
      "Consumer wellness technologies must still comply with applicable requirements related to electronics, materials, charging, battery safety, and product safety in the markets where they are sold.",
    ],
  },
  {
    title: "Consult a healthcare professional",
    body: [
      "Individuals with existing medical conditions, implanted medical devices, or concerns regarding electrical stimulation technologies should consult a healthcare professional before using wellness technologies.",
      "This is especially important when a user is unsure whether a general wellness product is appropriate for their own circumstances.",
    ],
  },
]

const relatedPages = [
  {
    title: "Regulatory Information",
    description:
      "A broader overview of how Neuvago is classified and how regulatory positioning fits into the general wellness category.",
    href: "/legal/regulatory",
    linkLabel: "Read regulatory information",
  },
  {
    title: "CE Compliance",
    description:
      "The corresponding Europe-focused page explaining CE conformity and consumer electronics compliance in the European market.",
    href: "/legal/ce-compliance",
    linkLabel: "Read CE compliance",
  },
  {
    title: "Intended Use",
    description:
      "A clearer explanation of what Neuvago is designed for and how intended use shapes product classification.",
    href: "/legal/intended-use",
    linkLabel: "Read intended use",
  },
  {
    title: "Medical Disclaimer",
    description:
      "The legal disclaimer explaining that Neuvago website content is educational and not medical advice or treatment.",
    href: "/legal/medical-disclaimer",
    linkLabel: "Read medical disclaimer",
  },
]

export default function FDAStatusPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / FDA Status
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              FDA status
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page explains how Neuvago should be understood in relation to
              the United States Food and Drug Administration (FDA). It is
              intended to clarify how general wellness positioning differs from
              medical device regulation and why intended use and responsible
              communication matter so much.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/regulatory"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read regulatory information
              </Link>

              <Link
                href="/legal"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Back to legal hub
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key points
            </p>

            <div className="mt-8 space-y-5">
              {keyPoints.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-28">
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#1f1f1c] md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Related legal pages
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Continue with regulatory overview, European compliance, and intended use
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedPages.map((item) => (
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
                Continue through the broader trust layer
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Read intended use, European compliance, or return to the legal hub
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                FDA status is one part of a broader trust and classification
                framework that explains how Neuvago is positioned, how product
                claims are bounded, and how the brand communicates responsibly
                across different markets.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/legal/intended-use"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Read intended use
                </Link>

                <Link
                  href="/legal/ce-compliance"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Read CE compliance
                </Link>

                <Link
                  href="/legal"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Back to legal hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
