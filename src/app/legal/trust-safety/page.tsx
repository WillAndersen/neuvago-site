import Link from "next/link"

export const metadata = {
  title:
    "Trust & Safety | Neuvago",
  description:
    "Read how Neuvago approaches trust, safety, responsible wellness use, product design, and transparent communication for a general wellness device.",
}

const keyPoints = [
  {
    title: "Safety is a core design principle",
    description:
      "Neuvago is designed with safety, transparency, and responsible product development in mind from the beginning.",
  },
  {
    title: "Clear wellness positioning matters",
    description:
      "Neuvago is presented as a general wellness product, not a medical device, and should be understood within that context.",
  },
  {
    title: "Trust comes from clarity",
    description:
      "Long-term trust depends on responsible claims, usable safety guidance, and transparent product communication.",
  },
]

const sections = [
  {
    title: "Designed for responsible wellness use",
    body: [
      "Neuvago is developed as a general wellness device intended to support relaxation, stress support, and nervous system awareness through non-invasive auricular stimulation.",
      "It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition.",
      "We believe wellness technology should be thoughtfully designed, clearly explained, and easy to use with confidence.",
    ],
  },
  {
    title: "Non-invasive technology",
    body: [
      "Neuvago uses non-invasive auricular stimulation, meaning the device is intended to deliver stimulation externally through the ear without surgery, implants, or invasive procedures.",
      "This non-invasive approach is intended to make the product more accessible for general wellness use and easier to integrate into everyday routines.",
    ],
  },
  {
    title: "Safety as a design principle",
    body: [
      "Safety is considered throughout the product development process, from industrial design and component selection to charging behavior, materials, usability, and product instructions.",
      "Our goal is to create a device that feels comfortable, intuitive, and reliable in normal consumer use.",
      "This includes attention to areas such as everyday usability, electrical design, charging and battery considerations, materials, and clear user guidance.",
    ],
  },
  {
    title: "Compliance and product standards",
    body: [
      "Neuvago devices are intended to be designed and manufactured in accordance with applicable safety and compliance requirements for consumer electronic products.",
      "Depending on market and product configuration, this may include areas such as electrical safety, electromagnetic compatibility, battery safety, environmental compliance, technical documentation, and product traceability.",
      "For products placed on the European market, CE conformity plays an important role in demonstrating compliance with relevant requirements.",
    ],
  },
  {
    title: "Clear product classification",
    body: [
      "Trust begins with clear communication. Neuvago is marketed as a wellness device, not a medical device.",
      "The device is intended to support general wellness goals such as relaxation, stress support, and autonomic balance. It is not intended for diagnosis or treatment of disease.",
      "We believe that clearly defining intended use is essential for user trust and responsible product communication.",
    ],
  },
  {
    title: "Transparency around research",
    body: [
      "Scientific research related to the vagus nerve, autonomic regulation, stress physiology, heart rate variability, and non-invasive stimulation continues to grow.",
      "Neuvago may reference published scientific research for educational purposes. However, scientific references do not mean that Neuvago is a medical treatment or that individual users will experience the same outcomes described in research settings.",
      "We aim to present scientific information responsibly, with context and without overstating what a consumer wellness product is designed to do.",
    ],
  },
  {
    title: "Materials, battery, and everyday handling",
    body: [
      "Because Neuvago is intended for personal use, comfort and material choice are important parts of the user experience.",
      "We aim to use materials and components appropriate for consumer wellness products, with attention to comfort, durability, and normal everyday use.",
      "Rechargeable wellness devices must also be used responsibly. Users should follow product instructions related to charging, storage, and handling, and discontinue use if any part appears damaged or unsuitable for use.",
    ],
  },
  {
    title: "User responsibility and extra caution",
    body: [
      "Safe use of any wellness technology also depends on the user. Neuvago should always be used in accordance with the instructions provided with the device.",
      "Users should stop use and seek professional advice if they experience discomfort, irritation, or concerns related to product use.",
      "Individuals with underlying medical conditions, implanted electronic devices, pregnancy, or concerns regarding electrical stimulation should consult a qualified healthcare professional before use.",
    ],
  },
  {
    title: "Building long-term trust",
    body: [
      "We believe long-term trust is built through responsible claims, transparent product information, clear safety guidance, and consistent compliance practices.",
      "Our goal is not only to create a well-designed product, but to help users understand what the product is, what it is intended for, and how to use it responsibly.",
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
      "A clearer explanation of what Neuvago is designed for and how it should be understood as a wellness product.",
    href: "/legal/intended-use",
    linkLabel: "Read intended use",
  },
  {
    title: "Regulatory Information",
    description:
      "A broader overview of classification, general wellness positioning, and the regulatory context around Neuvago.",
    href: "/legal/regulatory",
    linkLabel: "Read regulatory information",
  },
  {
    title: "CE Compliance",
    description:
      "A Europe-focused explanation of consumer electronics conformity and compliance expectations.",
    href: "/legal/ce-compliance",
    linkLabel: "Read CE compliance",
  },
]

export default function TrustSafetyPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / Trust & Safety
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Trust &amp; safety
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              At Neuvago, safety, transparency, and responsible product design
              are central to how we build. We believe wellness technology should
              be thoughtfully designed, clearly explained, and easy to use with
              confidence.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Neuvago is developed as a general wellness device intended to
              support relaxation, stress support, and nervous system awareness
              through non-invasive auricular stimulation. It is not a medical
              device and is not intended to diagnose, treat, cure, or prevent disease.
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
              Continue with disclaimer, intended use, and broader regulatory context
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
                Read intended use, regulatory information, or return to the legal hub
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Trust &amp; Safety is one part of a broader framework that explains
                how Neuvago is designed, how it should be used responsibly, and
                how the brand approaches safety, transparency, and responsible claims.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/legal/intended-use"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Read intended use
                </Link>

                <Link
                  href="/legal/regulatory"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Read regulatory information
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
