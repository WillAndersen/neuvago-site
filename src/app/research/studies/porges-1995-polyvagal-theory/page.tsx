import Link from "next/link"

export const metadata = {
  title:
    "Orienting in a Defensive World: The Polyvagal Theory (Porges, 1995) | Neuvago Research Library",
  description:
    "Read a structured summary of Porges (1995), the landmark paper that introduced the polyvagal theory and helped shape research on vagal pathways, stress, safety, and emotional regulation.",
}

const studyDetails = [
  { label: "Author", value: "Stephen W. Porges" },
  { label: "Year", value: "1995" },
  { label: "Journal", value: "Psychophysiology" },
  { label: "Research field", value: "Psychophysiology / Neuroscience" },
  { label: "Main concept", value: "Polyvagal theory" },
]

const keyIdeas = [
  {
    title: "A hierarchical autonomic model",
    description:
      "The theory proposes that the autonomic nervous system supports different adaptive response patterns organized in a functional hierarchy.",
  },
  {
    title: "The vagus nerve plays a central role",
    description:
      "Porges emphasized vagal pathways as key regulators of physiological states linked to safety, stress, social engagement, and defensive responding.",
  },
  {
    title: "A major framework for stress and emotional regulation research",
    description:
      "The polyvagal theory became highly influential in research on trauma, emotional regulation, psychophysiology, and autonomic state shifts.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The goal of the paper was to propose an evolutionary and physiological model explaining how the autonomic nervous system regulates behavioral responses to environmental challenge.",
      "Porges aimed to explain how neural circuits influence emotional regulation, defensive responses, and social engagement, with particular emphasis on the role of vagal pathways.",
    ],
  },
  {
    title: "The polyvagal framework",
    body: [
      "The polyvagal theory proposes that the autonomic nervous system includes multiple neural circuits that evolved to support different adaptive responses.",
      "Porges described three broad systems: a ventral vagal system associated with social engagement and calmer physiological states, the sympathetic nervous system associated with mobilization responses such as fight or flight, and a dorsal vagal system associated with immobilization or shutdown responses.",
      "According to the theory, these systems form a hierarchical organization that allows the nervous system to respond flexibly to changing environmental conditions.",
    ],
  },
  {
    title: "The vagus nerve and social engagement",
    body: [
      "A central concept in the theory is that vagal pathways help regulate physiological states that support social interaction and emotional regulation.",
      "Porges proposed that the ventral vagal complex is associated with a social engagement system that coordinates facial expression, vocalization, and heart rate regulation.",
      "In this framework, calm and social connectedness are not merely psychological states. They are also shaped by physiological regulation.",
    ],
  },
  {
    title: "Stress and defensive responses",
    body: [
      "When the nervous system detects threat or danger, the polyvagal model suggests that autonomic regulation shifts toward defensive responses.",
      "These responses may involve sympathetic activation and mobilization or dorsal vagal activation and immobilization, depending on how the environment is being processed.",
      "This perspective helped expand scientific interest in how autonomic state shapes stress experience, behavior, and emotional regulation.",
    ],
  },
  {
    title: "Scientific impact of the theory",
    body: [
      "The polyvagal theory has had a major impact on research examining the relationship between autonomic regulation, emotional processing, and social behavior.",
      "The framework has influenced work in trauma research, emotional regulation, psychophysiology, social neuroscience, and broader discussions about vagal regulation and resilience.",
      "It also helped drive broader interest in how vagal pathways may influence psychological and physiological flexibility.",
    ],
  },
  {
    title: "Subsequent research and debate",
    body: [
      "Since the introduction of the polyvagal theory, many studies have examined how vagal activity and heart rate variability relate to emotional regulation, social engagement, and stress resilience.",
      "At the same time, some aspects of the theory remain debated within the scientific community. Researchers continue to investigate how autonomic circuits interact and how well the proposed hierarchy explains physiological responses across contexts.",
      "Even with that ongoing discussion, the theory remains one of the most cited and influential frameworks in this broader research area.",
    ],
  },
  {
    title: "Why this study matters",
    body: [
      "The polyvagal theory helped highlight the importance of vagal pathways in emotional and physiological regulation.",
      "By proposing an evolutionary model of autonomic function, the paper encouraged researchers to look more closely at how neural circuits shape responses to safety, stress, and social interaction.",
      "Today, it remains one of the foundational references in research on autonomic physiology, trauma, and emotional regulation.",
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
    title: "A Model of Neurovisceral Integration in Emotion Regulation",
    description:
      "A later framework linking emotional regulation, autonomic flexibility, HRV, and vagal regulation.",
    href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
    linkLabel: "Read related study",
  },
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about stress, sleep, recovery, and nervous system support.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the broader studies library to browse more individual research papers.",
    href: "/research/studies",
    linkLabel: "Back to studies library",
  },
]

export default function Porges1995PolyvagalTheoryPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Polyvagal Theory
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Orienting in a Defensive World: The Polyvagal Theory (Porges, 1995)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The polyvagal theory was introduced by Stephen W. Porges in 1995
              as a framework for understanding how the autonomic nervous system
              regulates responses to safety, stress, and threat. It became one
              of the most influential theoretical models in research on vagal
              pathways, emotional regulation, and autonomic state shifts.
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
              One of the major frameworks linking vagal pathways, safety, stress, and emotional regulation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The polyvagal theory helped expand scientific interest in how the
              vagus nerve and autonomic nervous system shape physiological states
              associated with calm, defensive responding, social engagement, and
              emotional regulation.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Whether one agrees with every aspect of the model or not, this
              paper remains a major reference point in how researchers and
              clinicians think about autonomic state shifts.
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
                href="https://doi.org/10.1111/j.1469-8986.1995.tb01213.x"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1111/j.1469-8986.1995.tb01213.x
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/7878167/"
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
                is intended to summarize one influential paper in a structured,
                readable format. It is not a substitute for the original article,
                but a guide to its core ideas, context, and relevance.
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
                href="https://pubmed.ncbi.nlm.nih.gov/7878167/"
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
