import Link from "next/link"

export const metadata = {
  title:
    "Medical Disclaimer | Neuvago",
  description:
    "Read the Neuvago medical disclaimer, including how our website content and products should be understood as general wellness information and not medical advice or treatment.",
}

const keyPoints = [
  {
    title: "Educational, not medical",
    description:
      "The information on the Neuvago website is provided for educational and informational purposes only. It is not intended as medical advice.",
  },
  {
    title: "Wellness device, not medical device",
    description:
      "Neuvago products are designed and marketed as general wellness devices and are not intended to diagnose, treat, cure, or prevent disease.",
  },
  {
    title: "Professional care still matters",
    description:
      "People with symptoms, diagnoses, implanted devices, or medical concerns should speak with a qualified healthcare professional.",
  },
]

const sections = [
  {
    title: "No medical advice",
    body: [
      "The content on this website, including articles, research summaries, guides, product descriptions, and educational materials, is not intended as medical advice and should not be relied upon as a substitute for professional medical consultation, diagnosis, or treatment.",
      "Always seek the advice of a qualified physician or other licensed healthcare professional regarding any medical condition, symptoms, or treatment decisions. Never disregard professional medical advice or delay seeking medical care because of something you have read on this website.",
    ],
  },
  {
    title: "Wellness device classification",
    body: [
      "Neuvago devices are marketed as general wellness products intended to support relaxation, stress management, and overall well-being.",
      "Neuvago devices are not intended to replace medical treatment and should not be used as a therapy for diagnosed medical conditions.",
    ],
  },
  {
    title: "Scientific research and educational content",
    body: [
      "This website may reference scientific studies, academic research, and clinical literature related to the autonomic nervous system, vagus nerve stimulation, stress physiology, heart rate variability, sleep regulation, and related fields.",
      "These references are provided for informational purposes only and do not imply that the Neuvago device provides medical treatment or produces the same outcomes observed in scientific research settings.",
    ],
  },
  {
    title: "Individual experience may vary",
    body: [
      "Wellness products may affect individuals differently depending on lifestyle, health status, personal circumstances, and other factors.",
      "Any examples, testimonials, or descriptions of possible benefits should not be understood as guarantees of results.",
    ],
  },
  {
    title: "Not intended for diagnosis or treatment",
    body: [
      "Neuvago devices are not intended for use in the diagnosis, treatment, mitigation, or prevention of any disease or medical condition.",
      "If you are experiencing symptoms of illness, chronic stress, sleep disorders, cardiovascular concerns, or any other medical issue, you should seek advice from a licensed healthcare professional.",
    ],
  },
  {
    title: "Use at your own discretion",
    body: [
      "The use of any wellness device involves personal responsibility. By using Neuvago products or relying on information presented on this website, you acknowledge that you are doing so voluntarily and at your own discretion.",
      "Users should consult a healthcare professional before using any wellness technology if they have existing medical conditions, implanted medical devices, or concerns about whether electrical stimulation technologies are appropriate for them.",
    ],
  },
  {
    title: "Emergency situations",
    body: [
      "This website is not intended for emergency situations.",
      "If you believe you are experiencing a medical emergency, contact your doctor or emergency services immediately.",
    ],
  },
  {
    title: "Limitation of reliance",
    body: [
      "Neuvago and its affiliates, employees, partners, and contributors do not accept responsibility for medical decisions made in reliance on content presented on this website.",
      "All users are responsible for ensuring that the use of wellness devices is appropriate for their own individual circumstances.",
    ],
  },
]

const relatedPages = [
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
      "An overview of the broader regulatory framework relevant to Neuvago as a general wellness technology.",
    href: "/legal/regulatory",
    linkLabel: "Read regulatory information",
  },
  {
    title: "FDA Status",
    description:
      "A specific explanation of how Neuvago should be understood in relation to FDA medical device regulation.",
    href: "/legal/fda-status",
    linkLabel: "Read FDA status",
  },
  {
    title: "CE Compliance",
    description:
      "A summary of how CE conformity fits into the product safety and compliance picture for consumer electronics in Europe.",
    href: "/legal/ce-compliance",
    linkLabel: "Read CE compliance",
  },
]

export default function MedicalDisclaimerPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / Medical Disclaimer
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Medical disclaimer
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The information provided on the Neuvago website is for
              educational and informational purposes only. Neuvago products are
              designed as general wellness devices intended to support
              relaxation, stress management, and overall well-being.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Neuvago is not a medical device and is not intended to diagnose,
              treat, cure, or prevent any disease or medical condition.
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
              Continue with intended use, regulatory context, and compliance information
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
                The medical disclaimer is one part of a broader framework that
                explains how Neuvago is classified, how it is intended to be
                used, and how we think about safety, compliance, and responsible
                communication.
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
