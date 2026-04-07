import Link from "next/link"

export const metadata = {
  title:
    "Intended Use | Neuvago",
  description:
    "Read the intended use of Neuvago, including how the device is designed as a general wellness product for relaxation, stress support, and nervous system awareness.",
}

const keyPoints = [
  {
    title: "General wellness purpose",
    description:
      "Neuvago is intended as a general wellness device designed to support relaxation, stress management, and overall well-being.",
  },
  {
    title: "Non-invasive consumer use",
    description:
      "The device is designed for adult consumers interested in non-invasive wellness technology that may support calmer daily routines.",
  },
  {
    title: "Not intended for medical treatment",
    description:
      "Neuvago is not a medical device and is not intended to diagnose, treat, cure, or prevent disease or medical conditions.",
  },
]

const sections = [
  {
    title: "General wellness purpose",
    body: [
      "Neuvago is designed as a general wellness device intended to support relaxation, stress regulation, and overall well-being through non-invasive stimulation of the auricular branch of the vagus nerve.",
      "The device is intended for individuals interested in wellness technologies that may complement healthy lifestyle practices such as relaxation routines, mindfulness, breathing exercises, recovery habits, and daily stress support.",
    ],
  },
  {
    title: "Support for relaxation and stress management",
    body: [
      "The autonomic nervous system plays an important role in how the body responds to stress and how it returns toward calmer states.",
      "Neuvago is intended to be used as part of a broader wellness routine aimed at supporting relaxation and stress management in everyday life.",
      "Many people include relaxation technologies in routines that also involve sleep hygiene, mindfulness, breathing exercises, meditation, and other supportive practices. Neuvago is intended to complement these kinds of routines.",
    ],
  },
  {
    title: "Support for nervous system awareness",
    body: [
      "The device is intended for individuals who wish to explore wellness technologies related to nervous system awareness, autonomic balance, and calmer daily support.",
      "Neuvago provides non-invasive stimulation to areas of the ear associated with the auricular branch of the vagus nerve. This type of stimulation is widely discussed in educational and scientific contexts related to the autonomic nervous system and stress physiology.",
    ],
  },
  {
    title: "Educational and lifestyle use",
    body: [
      "Neuvago devices are intended for personal wellness use and educational exploration of nervous system regulation technologies.",
      "The device may be used by people interested in practices such as relaxation routines, stress management, mindfulness, breathing exercises, sleep hygiene routines, and general wellness habits.",
    ],
  },
  {
    title: "Appropriate use",
    body: [
      "Neuvago should be used in accordance with the instructions provided with the device and any related guidance included in the broader Neuvago system.",
      "The device is intended for adult consumers seeking wellness technology designed to support relaxation and general well-being.",
    ],
  },
  {
    title: "Complementary wellness technology",
    body: [
      "Neuvago is intended to complement healthy lifestyle practices such as regular physical activity, healthy sleep habits, stress management techniques, mindfulness, and general self-care.",
      "It is not intended to replace professional care, clinical treatment, or medical decision-making.",
    ],
  },
  {
    title: "Not a medical device",
    body: [
      "Neuvago is not a medical device and is not intended for use in the diagnosis, treatment, cure, or prevention of any disease or medical condition.",
      "The device should not be used as a substitute for professional medical care or treatment.",
    ],
  },
  {
    title: "Not intended for medical conditions",
    body: [
      "Neuvago products are not intended to treat medical conditions such as anxiety disorders, depression, cardiovascular disease, chronic pain, epilepsy, sleep disorders, or other medical diagnoses.",
      "Individuals experiencing medical symptoms or health concerns should consult a qualified healthcare professional.",
    ],
  },
  {
    title: "Responsible use",
    body: [
      "Users should consult a healthcare professional before using any wellness technology if they have underlying health conditions, implanted medical devices, or concerns regarding whether electrical stimulation technologies are appropriate for them.",
      "By using Neuvago devices, users acknowledge that the device is intended for general wellness purposes only.",
    ],
  },
]

const relatedPages = [
  {
    title: "Medical Disclaimer",
    description:
      "The legal disclaimer explaining that website content is educational and that Neuvago is not intended as medical advice or treatment.",
    href: "/legal/medical-disclaimer",
    linkLabel: "Read medical disclaimer",
  },
  {
    title: "Regulatory Information",
    description:
      "A broader overview of the regulatory framework surrounding Neuvago as a general wellness technology.",
    href: "/legal/regulatory",
    linkLabel: "Read regulatory information",
  },
  {
    title: "CE Compliance",
    description:
      "A summary of how CE conformity fits into the consumer product safety and compliance picture in Europe.",
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

export default function IntendedUsePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / Intended Use
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Intended use
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page explains the intended use and purpose of the Neuvago
              device. Understanding intended use helps clarify what the product
              is designed for, how it should be used, and how it should be
              understood within a general wellness context.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Neuvago is designed as a general wellness device intended to
              support relaxation, stress support, and nervous system awareness
              through non-invasive auricular stimulation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/medical-disclaimer"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read medical disclaimer
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
              Continue with disclaimer, regulatory context, and compliance information
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
                Read disclaimer, regulatory information, or return to the legal hub
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Intended use is one part of a broader framework that explains
                how Neuvago is classified, how it should be understood, and how
                we think about responsible communication, compliance, and safety.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/legal/medical-disclaimer"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Read medical disclaimer
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
