import Link from "next/link"

export const metadata = {
  title:
    "A Model of Neurovisceral Integration in Emotion Regulation (Thayer & Lane, 2000) | Neuvago Research Library",
  description:
    "Read a structured summary of Thayer & Lane (2000), the influential paper that linked emotional regulation, autonomic flexibility, HRV, and vagal regulation in the neurovisceral integration model.",
}

const studyDetails = [
  { label: "Authors", value: "Julian F. Thayer & Richard D. Lane" },
  { label: "Year", value: "2000" },
  { label: "Journal", value: "Journal of Affective Disorders" },
  { label: "Research field", value: "Psychophysiology / Neuroscience" },
  { label: "Main concept", value: "Neurovisceral integration" },
]

const keyIdeas = [
  {
    title: "A model linking brain, body, and emotion",
    description:
      "The neurovisceral integration model proposed that cognitive, emotional, and physiological regulation are interconnected through shared neural systems.",
  },
  {
    title: "HRV as a marker of autonomic flexibility",
    description:
      "The paper helped establish HRV as an important non-invasive marker in research on autonomic flexibility, vagal regulation, and adaptive capacity.",
  },
  {
    title: "A foundational bridge between psychophysiology and nervous system research",
    description:
      "This framework became highly influential in stress research, emotional regulation research, and later work on vagal pathways and resilience.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The objective of the paper was to propose a model explaining how emotional regulation, cognitive control, and physiological regulation are interconnected through neural networks that influence autonomic nervous system activity.",
      "The authors aimed to integrate findings from neuroscience, psychophysiology, and cardiovascular research into a broader framework linking brain function with autonomic flexibility and regulation.",
    ],
  },
  {
    title: "The neurovisceral integration model",
    body: [
      "The neurovisceral integration model proposes that the brain regulates emotional and physiological responses through interconnected neural circuits.",
      "These circuits involve brain regions associated with cognitive control, emotional processing, and autonomic regulation, including the prefrontal cortex, anterior cingulate cortex, amygdala, hypothalamus, and brainstem autonomic centers.",
      "Together, these structures form a regulatory network that helps support flexible physiological responses to changing environmental demands.",
    ],
  },
  {
    title: "The role of the vagus nerve",
    body: [
      "The vagus nerve plays an important role in the neurovisceral integration model because it influences parasympathetic regulation of heart rate and autonomic balance.",
      "Vagal signaling affects cardiovascular regulation and contributes to heart rate variability, which reflects the ongoing interaction between sympathetic and parasympathetic influences.",
      "This helped make vagal regulation a central part of later research on physiological flexibility, stress resilience, and emotional regulation.",
    ],
  },
  {
    title: "Heart rate variability as a marker",
    body: [
      "One of the most important ideas proposed in the model is that heart rate variability may serve as an indicator of autonomic flexibility and regulatory capacity.",
      "Higher HRV is often interpreted as reflecting stronger parasympathetic influence and greater adaptability of the autonomic nervous system.",
      "Because HRV can be measured non-invasively, it became widely used in research examining stress responses, emotional regulation, cardiovascular health, and psychophysiological resilience.",
    ],
  },
  {
    title: "Emotional regulation and autonomic flexibility",
    body: [
      "The model suggests that individuals with greater autonomic flexibility may be better able to regulate emotional responses and adapt to stress.",
      "Conversely, reduced autonomic flexibility may be associated with difficulties in emotional regulation, increased stress responses, and some forms of psychological dysregulation.",
      "This framework helped bridge research on emotional regulation with physiological measures such as HRV and vagal regulation.",
    ],
  },
  {
    title: "Scientific impact of the study",
    body: [
      "The neurovisceral integration model had a major influence on research examining the relationship between the brain, emotional regulation, and autonomic nervous system activity.",
      "It became widely cited in research on heart rate variability, stress physiology, anxiety, cardiovascular health, emotional regulation, and psychophysiological resilience.",
      "It also helped create a stronger conceptual bridge between psychological and physiological models of regulation.",
    ],
  },
  {
    title: "Subsequent research and discussion",
    body: [
      "Since the publication of the model, many studies have examined how HRV and vagal activity relate to emotional processing, cognitive performance, and stress responses.",
      "Researchers have also used the model to explore how interventions that influence autonomic regulation may affect emotional and physiological resilience.",
      "At the same time, debate continues regarding how HRV should be interpreted and how strongly it reflects vagal tone in all contexts, which makes context and methodology especially important.",
    ],
  },
  {
    title: "Why this study matters",
    body: [
      "The neurovisceral integration model helped establish a scientific framework linking brain function, emotional regulation, autonomic activity, and vagal influence.",
      "By connecting cognitive and physiological regulation, it provided a durable foundation for understanding how the nervous system supports adaptive responses to stress.",
      "Today, it remains one of the most widely cited theoretical frameworks in research on HRV, autonomic flexibility, and psychophysiology.",
    ],
  },
]

const relatedLinks = [
  {
    title: "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use",
    description:
      "A foundational methodological paper central to later work on autonomic flexibility and HRV interpretation.",
    href: "/research/studies/task-force-1996-heart-rate-variability-standards",
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
    title: "Emotional regulation and the nervous system",
    description:
      "A learning page connecting emotional load, reactivity, overwhelm, and nervous system capacity in everyday life.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional regulation",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the broader studies library to browse more individual research papers.",
    href: "/research/studies",
    linkLabel: "Back to studies library",
  },
]

export default function ThayerLane2000NeurovisceralIntegrationPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Neurovisceral Integration
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              A Model of Neurovisceral Integration in Emotion Regulation (Thayer & Lane, 2000)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The neurovisceral integration model proposed by Julian F. Thayer
              and Richard D. Lane in 2000 is one of the most influential
              frameworks linking the brain, autonomic nervous system regulation,
              emotional processing, HRV, and vagal regulation.
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
              A major framework linking emotional regulation, autonomic flexibility, and vagal influence
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This paper mattered because it helped connect psychological
              regulation and physiological regulation inside one integrated
              model. It provided a way to think about stress, emotion, and
              autonomic flexibility as part of the same broader system.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              It also helped strengthen the role of HRV and vagal regulation as
              important parts of psychophysiology research, which is why it
              still sits at the center of many conversations about stress,
              emotional regulation, and resilience.
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
                href="https://doi.org/10.1016/S0165-0327(99)00138-4"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1016/S0165-0327(99)00138-4
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/10708825/"
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
                summarizes one influential theoretical paper linking brain
                function, autonomic flexibility, and emotional regulation. It is
                intended as a structured guide to the paper’s relevance and
                context, not a substitute for the original article.
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
                href="https://pubmed.ncbi.nlm.nih.gov/10708825/"
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
