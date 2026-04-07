import Link from "next/link"

export const metadata = {
  title:
    "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use (Task Force, 1996) | Neuvago Research Library",
  description:
    "Read a structured summary of the 1996 Task Force report on heart rate variability, the landmark reference that standardized HRV measurement and interpretation in autonomic research.",
}

const studyDetails = [
  {
    label: "Authors",
    value:
      "Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology",
  },
  { label: "Year", value: "1996" },
  { label: "Journal", value: "Circulation" },
  { label: "Research field", value: "Cardiology / Autonomic physiology" },
  { label: "Main topic", value: "Heart rate variability measurement standards" },
]

const keyIdeas = [
  {
    title: "The foundational HRV reference",
    description:
      "This report became the standard methodological reference for HRV research worldwide and remains the most cited paper in the field.",
  },
  {
    title: "A common language for autonomic research",
    description:
      "The report standardized definitions, measurement techniques, and interpretation principles for HRV across scientific and clinical settings.",
  },
  {
    title: "A major bridge into vagal regulation research",
    description:
      "Because HRV reflects autonomic dynamics and parasympathetic influence, the report became central to research on vagal regulation, stress, sleep, and physiological flexibility.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The goal of the Task Force report was to establish standardized definitions, measurement techniques, and interpretation guidelines for heart rate variability.",
      "Before this publication, HRV research was expanding rapidly, but researchers used different methods and terminology across studies.",
      "The report aimed to create a shared methodological framework that would make findings more consistent and comparable across scientific disciplines.",
    ],
  },
  {
    title: "What heart rate variability is",
    body: [
      "Heart rate variability refers to the natural variation in time between consecutive heartbeats.",
      "Rather than beating at a perfectly constant rhythm, the heart continuously adjusts its timing in response to signals from the autonomic nervous system.",
      "These variations reflect the interaction between sympathetic and parasympathetic influences, making HRV a widely used physiological marker in autonomic research.",
    ],
  },
  {
    title: "Categories of HRV measurements",
    body: [
      "The Task Force report defined several major categories of HRV measurements that are still widely used today.",
      "Time-domain measures include metrics such as SDNN, RMSSD, NN50, and pNN50, which describe variation in heartbeat intervals over time.",
      "Frequency-domain measures include high-frequency (HF), low-frequency (LF), and very-low-frequency (VLF) components, which describe how HRV signals are distributed across frequency bands.",
      "The report also acknowledged nonlinear approaches, which later became important for studying more complex aspects of heart rate dynamics.",
    ],
  },
  {
    title: "Autonomic nervous system regulation",
    body: [
      "A major reason this report mattered so much is that it placed HRV inside a broader autonomic framework.",
      "The report emphasized that HRV reflects the interaction between sympathetic and parasympathetic nervous system activity.",
      "Because the vagus nerve plays a central role in parasympathetic regulation of heart rate, HRV became deeply linked with later research on vagal activity, autonomic flexibility, and regulation.",
    ],
  },
  {
    title: "Scientific impact of the report",
    body: [
      "The Task Force report became the standard reference for HRV methodology worldwide and is still cited across cardiology, psychophysiology, sleep research, exercise physiology, and neuromodulation research.",
      "It gave researchers a common framework for collecting, analyzing, and interpreting HRV data, which made cross-study comparison much more reliable.",
      "It also helped establish HRV as one of the most widely used non-invasive measures in autonomic nervous system research.",
    ],
  },
  {
    title: "HRV and vagal regulation",
    body: [
      "Many HRV metrics are influenced by parasympathetic activity mediated through the vagus nerve.",
      "Because of this relationship, HRV became widely used in studies of stress regulation, emotional processing, sleep, resilience, and autonomic flexibility.",
      "At the same time, the report helped reinforce that HRV should be understood in context rather than treated as a single simplified signal.",
    ],
  },
  {
    title: "Limitations and interpretation",
    body: [
      "Although HRV is a useful research tool, the Task Force emphasized that HRV measures must be interpreted carefully.",
      "Many factors influence HRV, including breathing patterns, activity level, sleep, medication use, age, posture, and measurement conditions.",
      "This is one reason the report remains so important: it encouraged methodological discipline rather than overly simplistic interpretation.",
    ],
  },
  {
    title: "Why this report matters",
    body: [
      "The Task Force report established the methodological foundation for HRV research.",
      "By standardizing measurement and interpretation, it enabled researchers around the world to study autonomic regulation using more consistent methods.",
      "Today, it remains one of the most important references for understanding HRV in the context of vagal regulation, autonomic physiology, and nervous system flexibility.",
    ],
  },
]

const relatedLinks = [
  {
    title: "A Model of Neurovisceral Integration in Emotion Regulation",
    description:
      "A later theoretical framework linking emotional regulation, autonomic flexibility, HRV, and vagal influence.",
    href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
    linkLabel: "Read related study",
  },
  {
    title: "Orienting in a Defensive World: The Polyvagal Theory",
    description:
      "A foundational autonomic framework linking vagal pathways with safety, stress, and state shifts.",
    href: "/research/studies/porges-1995-polyvagal-theory",
    linkLabel: "Read related study",
  },
  {
    title: "Nervous system regulation",
    description:
      "A broader learning page for understanding how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Understand regulation",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the broader studies library to browse more individual research papers.",
    href: "/research/studies",
    linkLabel: "Back to studies library",
  },
]

export default function TaskForce1996HeartRateVariabilityStandardsPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Heart Rate Variability
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use (Task Force, 1996)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The 1996 Task Force report published in <em>Circulation</em> is the
              most widely cited scientific reference on heart rate variability
              (HRV). It established standardized methods for measuring HRV and
              provided a common framework for interpreting HRV in physiological
              and clinical research.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to studies library
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Back to research hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Abstracted significance
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The methodological foundation behind modern HRV research
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This report mattered because it created a shared language for HRV
              research. It helped move the field from scattered methods and mixed
              terminology toward a more rigorous framework for measurement and
              interpretation.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Because HRV became central to discussions of autonomic function,
              parasympathetic influence, and vagal regulation, this report also
              became one of the most important foundations beneath later research
              on stress, sleep, recovery, and nervous system flexibility.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Citation details
            </p>

            <div className="mt-7 space-y-4">
              {studyDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8a847b]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-[#3d3a35] md:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-black/6 bg-[#f8f5f0] p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8a847b]">
                DOI
              </p>
              <a
                href="https://doi.org/10.1161/01.CIR.93.5.1043"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1161/01.CIR.93.5.1043
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/8598068/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 hover:underline"
                >
                  View study on PubMed
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Key ideas
            </p>

            <div className="mt-8 space-y-5">
              {keyIdeas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]"
                >
                  <h2 className="text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52] md:text-[0.96rem]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Library note
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
              <p className="text-base leading-8 text-[#5f5a52] md:text-lg">
                This page is part of the Neuvago Scientific Studies Library and
                summarizes one foundational paper in HRV methodology and autonomic
                research. It is intended as a structured guide to the paper’s core
                relevance, not a replacement for the original article.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Related studies and research paths
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Continue with related theory, methodology, and learning pages
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedLinks.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]"
              >
                <h3 className="text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-[0.96rem]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-4xl border-t border-black/8 pt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research disclaimer
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page summarizes scientific research for educational
              purposes. It does not constitute medical advice, diagnosis, or
              treatment recommendations. Medical concerns should always be
              discussed with qualified healthcare professionals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to studies library
              </Link>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/8598068/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                View on PubMed
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
