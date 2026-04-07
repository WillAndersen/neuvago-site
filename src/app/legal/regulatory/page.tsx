import Link from "next/link"

export const metadata = {
  title:
    "Regulatory Information | Neuvago",
  description:
    "Read regulatory information for Neuvago, including product classification, general wellness positioning, consumer safety standards, and responsible product communication.",
}

const keyPoints = [
  {
    title: "General wellness classification",
    description:
      "Neuvago is designed and marketed as a general wellness product intended to support relaxation, stress support, and nervous system awareness.",
  },
  {
    title: "Not a medical device",
    description:
      "Neuvago is not classified or marketed as a medical device and is not intended for the diagnosis, treatment, cure, or prevention of disease.",
  },
  {
    title: "Safety and compliance still matter",
    description:
      "Even when a product is not a medical device, it still needs to meet relevant safety, electronics, and consumer product compliance requirements.",
  },
]

const sections = [
  {
    title: "Product classification",
    body: [
      "Consumer health and wellness technologies may fall into different regulatory categories depending on intended use, risk profile, and marketing claims.",
      "Products intended to diagnose, treat, cure, or prevent medical conditions are typically classified as medical devices and are subject to much stricter regulatory frameworks.",
      "Neuvago is designed as a general wellness technology intended to support relaxation, stress management, and autonomic nervous system awareness. Because the device does not make medical claims and is not intended for medical treatment, it is positioned within the general wellness product category.",
    ],
  },
  {
    title: "General wellness products",
    body: [
      "General wellness products are consumer technologies designed to support healthy lifestyle practices that contribute to overall well-being.",
      "This category can include products related to relaxation, stress support, sleep routines, mindfulness, meditation, nervous system awareness, and broader wellness habits.",
      "Neuvago is intended to complement these kinds of wellness practices and is not intended to replace professional medical care.",
    ],
  },
  {
    title: "European regulatory context",
    body: [
      "In the European Union, products are regulated based on intended purpose and risk profile. Medical devices must comply with the Medical Device Regulation (EU) 2017/745.",
      "Because Neuvago devices are not intended for medical diagnosis or treatment, they are not positioned as medical devices under that framework.",
      "Instead, Neuvago devices are intended to be manufactured and placed on the market in accordance with applicable consumer electronics and product safety requirements relevant to wellness technologies.",
    ],
  },
  {
    title: "Product safety standards",
    body: [
      "Even when a product is not classified as a medical device, manufacturers must still ensure that products meet applicable safety requirements.",
      "For consumer wellness electronics, this may include areas such as electrical safety, electromagnetic compatibility, battery safety, environmental compliance, material suitability, technical documentation, and product traceability.",
      "These frameworks help ensure that consumer wellness technologies operate safely under normal conditions of use.",
    ],
  },
  {
    title: "International market considerations",
    body: [
      "Different regions may apply different regulatory approaches to consumer wellness technologies.",
      "Manufacturers and distributors must ensure that products comply with applicable local requirements before entering markets such as the European Union, the United States, or other international jurisdictions.",
      "This is one reason why clear intended use and disciplined product claims are so important.",
    ],
  },
  {
    title: "Responsible marketing and claims",
    body: [
      "Regulatory classification is strongly influenced by how a product is described and marketed.",
      "Products that make medical claims may fall under medical device regulation even when the underlying technology is similar to that used in consumer wellness products.",
      "Neuvago is marketed for general wellness purposes, including relaxation, stress support, and support for autonomic balance. It is not promoted as a therapy or medical treatment.",
    ],
  },
  {
    title: "Scientific research and educational content",
    body: [
      "Scientific research related to vagus nerve stimulation, autonomic regulation, and stress physiology is widely discussed in academic literature.",
      "Neuvago may reference such research for educational and informational purposes. However, references to scientific studies do not imply that the Neuvago device provides medical treatment or reproduces the same outcomes reported in research settings.",
      "We believe scientific information should be presented with context and without overstating what a consumer wellness product is designed to do.",
    ],
  },
  {
    title: "Consumer responsibility",
    body: [
      "Consumers should use wellness technologies responsibly and in accordance with product instructions and safety guidance.",
      "Individuals with existing medical conditions, implanted medical devices, or concerns regarding electrical stimulation technologies should consult a qualified healthcare professional before use.",
    ],
  },
  {
    title: "Transparency and compliance",
    body: [
      "Neuvago is committed to transparency, safety, and responsible product design.",
      "Our goal is to build wellness technology that supports relaxation and nervous system awareness while staying aligned with applicable consumer product, safety, and compliance frameworks.",
    ],
  },
]

const relatedPages = [
  {
    title: "Medical Disclaimer",
    description:
      "The legal disclaimer explaining how Neuvago content and products should be understood in a non-medical context.",
    href: "/legal/medical-disclaimer",
    linkLabel: "Read medical disclaimer",
  },
  {
    title: "Intended Use",
    description:
      "A clear explanation of what Neuvago is designed for and how the product should be understood as a wellness device.",
    href: "/legal/intended-use",
    linkLabel: "Read intended use",
  },
  {
    title: "CE Compliance",
    description:
      "A summary of how CE conformity fits into product safety and compliance for consumer electronics in Europe.",
    href: "/legal/ce-compliance",
    linkLabel: "Read CE compliance",
  },
  {
    title: "FDA Status",
    description:
      "A specific explanation of how Neuvago should be understood in relation to FDA medical device regulation in the United States.",
    href: "/legal/fda-status",
    linkLabel: "Read FDA status",
  },
]

export default function RegulatoryPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / Regulatory Information
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Regulatory information
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page explains the broader regulatory context relevant to
              Neuvago. It is designed to clarify how the product is classified,
              why intended use matters, how responsible product communication
              shapes regulatory positioning, and how safety and compliance still
              apply in a general wellness context.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/intended-use"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read intended use
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
              Continue with disclaimer, intended use, and market-specific compliance pages
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
                Read intended use, compliance pages, or return to the legal hub
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Regulatory information is one part of a broader framework that
                explains how Neuvago is classified, how it is marketed, and how
                we think about safety, compliance, and responsible communication
                as a wellness technology brand.
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
