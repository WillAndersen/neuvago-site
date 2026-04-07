import Link from "next/link"

export const metadata = {
  title:
    "CE Compliance | Neuvago",
  description:
    "Read how CE compliance fits into Neuvago product safety and consumer electronics requirements, including electrical safety, EMC, battery safety, and product conformity in Europe.",
}

const keyPoints = [
  {
    title: "CE marking supports market conformity",
    description:
      "For products placed on the European market, CE marking is part of demonstrating conformity with applicable safety and compliance requirements.",
  },
  {
    title: "Consumer electronics still require strong safety standards",
    description:
      "Even though Neuvago is not a medical device, it still needs to align with relevant consumer product and electronics safety frameworks.",
  },
  {
    title: "Compliance is broader than one label",
    description:
      "CE conformity sits inside a larger product safety picture that may include electrical safety, EMC, battery safety, documentation, and traceability.",
  },
]

const sections = [
  {
    title: "What the CE mark means",
    body: [
      "The CE mark is a conformity marking used within the European Economic Area. It indicates that a product has been assessed to meet applicable safety, health, and environmental protection requirements for distribution within the EU and EEA.",
      "By applying the CE mark, the manufacturer declares that the product complies with relevant EU legislation applicable to the product category.",
      "For consumer electronics and wellness technologies, CE marking is part of the broader process of demonstrating that the product has been designed, evaluated, and documented in line with applicable requirements.",
    ],
  },
  {
    title: "Product category",
    body: [
      "Neuvago devices are positioned as general wellness consumer electronic devices. They are not intended to diagnose, treat, cure, or prevent disease and are therefore not positioned as medical devices.",
      "As a wellness device, Neuvago is intended to comply with the standards and conformity requirements relevant to consumer electronics and personal wellness technologies placed on the European market.",
    ],
  },
  {
    title: "Electrical safety",
    body: [
      "Consumer electronic products must meet electrical safety requirements to help ensure safe operation under normal conditions of use.",
      "Electrical safety testing may help demonstrate that a product operates safely with respect to voltage limits, insulation, component design, charging behavior, and protection against electrical hazards.",
    ],
  },
  {
    title: "Electromagnetic compatibility (EMC)",
    body: [
      "Electromagnetic compatibility testing helps ensure that electronic products do not generate excessive electromagnetic interference and are sufficiently resistant to interference from other devices.",
      "This is especially important in environments where users are surrounded by other personal electronics and wireless devices in daily life.",
    ],
  },
  {
    title: "RoHS and environmental compliance",
    body: [
      "The Restriction of Hazardous Substances Directive (RoHS) limits the use of certain hazardous materials in electronic products sold in the European Union.",
      "Environmental compliance frameworks like RoHS are part of the broader expectation that consumer electronic products are designed responsibly and in line with applicable material restrictions.",
    ],
  },
  {
    title: "Battery safety",
    body: [
      "Devices containing rechargeable batteries must also meet safety requirements related to battery design, transportation, handling, and normal use.",
      "Battery safety considerations may include testing related to stability, transport safety, short-circuit protection, overheating risk, and documentation for lithium-based battery systems.",
    ],
  },
  {
    title: "Materials and consumer safety",
    body: [
      "Products designed for personal use should also consider materials and broader consumer safety requirements.",
      "This includes attention to device housing materials, accessories, comfort-related materials, durability, and suitability for normal consumer use.",
    ],
  },
  {
    title: "Manufacturer responsibility",
    body: [
      "Manufacturers placing products on the European market are responsible for ensuring that products comply with applicable directives, standards, and conformity requirements.",
      "This may involve product testing, technical documentation, risk review, traceability, labeling, and the preparation of a Declaration of Conformity.",
    ],
  },
  {
    title: "Declaration of Conformity",
    body: [
      "A Declaration of Conformity is a document in which the manufacturer states that the product complies with relevant EU legislation.",
      "This declaration typically references the directives and standards used during conformity assessment and is one of the important documents supporting lawful product placement on the market.",
    ],
  },
  {
    title: "Commitment to safety",
    body: [
      "Neuvago is committed to building wellness technologies that prioritize safety, reliability, and responsible product development.",
      "Our goal is to create consumer wellness devices that feel calm and approachable, while also aligning with the appropriate safety and compliance expectations for personal electronics.",
    ],
  },
]

const relatedPages = [
  {
    title: "Regulatory Information",
    description:
      "The broader overview of how Neuvago is classified and how compliance fits into its position as a general wellness technology.",
    href: "/legal/regulatory",
    linkLabel: "Read regulatory information",
  },
  {
    title: "FDA Status",
    description:
      "A market-specific explanation of how Neuvago is understood in relation to FDA medical device regulation in the United States.",
    href: "/legal/fda-status",
    linkLabel: "Read FDA status",
  },
  {
    title: "Intended Use",
    description:
      "A clearer explanation of what Neuvago is designed for and how intended use shapes product classification.",
    href: "/legal/intended-use",
    linkLabel: "Read intended use",
  },
  {
    title: "Trust & Safety",
    description:
      "A broader trust and safety page covering product responsibility, safety philosophy, and responsible use in everyday life.",
    href: "/legal/trust-safety",
    linkLabel: "Read trust & safety",
  },
]

export default function CECompliancePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / CE Compliance
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              CE compliance
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page explains how CE conformity fits into the broader product
              safety and compliance picture for Neuvago devices. It is intended
              to clarify what CE marking means, how it relates to consumer
              electronics sold in Europe, and why product safety remains
              important even when a product is positioned as a general wellness device.
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
              Continue with regulatory context, intended use, and market-specific status pages
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
                Read regulatory information, market-specific status, or return to the legal hub
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                CE compliance is one part of a broader framework that explains
                how Neuvago is classified, how it fits within consumer product
                safety expectations, and how responsible compliance supports
                long-term trust.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/legal/regulatory"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Read regulatory information
                </Link>

                <Link
                  href="/legal/fda-status"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Read FDA status
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
