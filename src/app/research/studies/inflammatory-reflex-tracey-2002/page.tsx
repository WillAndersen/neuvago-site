import Link from "next/link"

export const metadata = {
  title:
    "The Inflammatory Reflex: Neural Regulation of the Immune System (Tracey, 2002) | Neuvago Research Library",
  description:
    "Read a structured summary of Tracey (2002), the landmark paper that introduced the inflammatory reflex and helped establish the role of vagal pathways in neuroimmune communication.",
}

const studyDetails = [
  { label: "Author", value: "Kevin J. Tracey" },
  { label: "Year", value: "2002" },
  { label: "Journal", value: "Nature" },
  { label: "Research field", value: "Neuroimmunology" },
  { label: "Main concept", value: "Neural regulation of inflammation" },
]

const keyIdeas = [
  {
    title: "A landmark neuroimmune framework",
    description:
      "The inflammatory reflex became one of the most influential concepts in research on how the nervous system may interact with immune regulation.",
  },
  {
    title: "The vagus nerve as a communication pathway",
    description:
      "The paper emphasized the vagus nerve as a key link between peripheral inflammatory activity and regulatory centers in the brain.",
  },
  {
    title: "A major foundation for later vagus nerve research",
    description:
      "This framework helped shape subsequent work on inflammation, bioelectronic medicine, and vagus nerve stimulation research.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The objective of this work was to explain how the nervous system might participate in regulating inflammatory responses.",
      "The paper built on earlier experimental findings suggesting that stimulation of the vagus nerve could influence inflammatory signaling.",
      "Tracey proposed a conceptual framework describing how neural circuits might detect inflammatory activity and regulate immune responses through autonomic pathways.",
    ],
  },
  {
    title: "The inflammatory reflex concept",
    body: [
      "The inflammatory reflex describes a neural circuit linking the immune system with the central nervous system.",
      "In this model, inflammatory signals arising in the body may be detected and transmitted to the brain through neural pathways, including the vagus nerve.",
      "The brain may then send regulatory signals back to peripheral organs through autonomic pathways that influence immune activity.",
      "Through this loop, the nervous system may monitor and modulate inflammatory responses rather than remaining separate from them.",
    ],
  },
  {
    title: "The cholinergic anti-inflammatory pathway",
    body: [
      "A key mechanism associated with the inflammatory reflex is the cholinergic anti-inflammatory pathway.",
      "This pathway involves acetylcholine-mediated signaling associated with vagal activity and became central to later research on how neural signaling may influence cytokine release.",
      "The inflammatory reflex and cholinergic anti-inflammatory pathway are closely linked in the literature and together helped reshape how neuroimmune communication was understood.",
    ],
  },
  {
    title: "The role of the vagus nerve",
    body: [
      "The vagus nerve is one of the most important communication pathways between the brain and internal organs.",
      "Because it carries both sensory and regulatory signals, it provides a plausible neural link between inflammatory activity in peripheral tissues and regulatory centers in the brain.",
      "This dual role made the vagus nerve central to the inflammatory reflex model and to later research on neural regulation of inflammation.",
    ],
  },
  {
    title: "Scientific impact of the study",
    body: [
      "The inflammatory reflex framework helped reshape scientific understanding of immune regulation by suggesting that the nervous system may participate directly in controlling inflammatory processes.",
      "After publication, research in neuroimmune communication expanded rapidly as scientists explored how neural circuits might regulate inflammation and how vagus nerve stimulation might influence inflammatory signaling.",
      "The study contributed to the emergence of an interdisciplinary field combining neuroscience, immunology, physiology, and later bioelectronic medicine.",
    ],
  },
  {
    title: "Subsequent research",
    body: [
      "Since publication of the inflammatory reflex concept, numerous studies have investigated how vagal pathways interact with immune signaling.",
      "Researchers have examined both implanted and non-invasive vagus nerve stimulation in experimental and clinical contexts, especially in relation to inflammatory regulation.",
      "Although the field continues to evolve, the inflammatory reflex remains one of the most influential frameworks for understanding neural regulation of inflammation.",
    ],
  },
  {
    title: "Limitations and scientific discussion",
    body: [
      "As with many conceptual models in science, the inflammatory reflex continues to be refined and investigated.",
      "Researchers are still studying the precise neural circuits involved, how immune cells interact with neural pathways, and how findings from animal models translate to human physiology.",
      "Even with those open questions, the concept remains highly influential and widely cited across neuroimmune research.",
    ],
  },
  {
    title: "Why this study matters",
    body: [
      "The inflammatory reflex helped establish a new perspective in which the nervous system and immune system are closely interconnected.",
      "That shift opened new paths of research into brain–body communication and into how neural pathways may influence inflammatory responses.",
      "Today, this paper remains a cornerstone reference in research on vagus nerve physiology, autonomic regulation, inflammation, and neuroimmune signaling.",
    ],
  },
]

const relatedLinks = [
  {
    title: "The Cholinergic Anti-Inflammatory Pathway",
    description:
      "A closely related review describing the mechanism that grew directly out of inflammatory reflex research.",
    href: "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
    linkLabel: "Read related study",
  },
  {
    title:
      "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response",
    description:
      "A landmark experimental study showing that vagus nerve stimulation reduced inflammatory cytokine release in an experimental model.",
    href: "/research/studies/borovikova-2000-vagus-nerve-inflammation",
    linkLabel: "Read related study",
  },
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about regulation, stress, recovery, and internal communication pathways.",
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

export default function InflammatoryReflexTracey2002Page() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Inflammatory Reflex
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              The Inflammatory Reflex: Neural Regulation of the Immune System (Tracey, 2002)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The inflammatory reflex, introduced by Kevin J. Tracey in 2002,
              became one of the most influential concepts in neuroimmune
              research. It proposed that the nervous system may help regulate
              immune responses through neural circuits involving the vagus nerve.
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
              A landmark framework showing how neural circuits may participate in immune regulation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This paper mattered because it helped shift scientific thinking
              about inflammation. Instead of viewing immune responses as purely
              biochemical processes, it proposed that neural pathways may also
              participate in how inflammatory activity is detected and regulated.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That made the paper especially important for later research on the
              vagus nerve, neuroimmune communication, and bioelectronic medicine.
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
                href="https://doi.org/10.1038/415853a"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1038/415853a
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/12490959/"
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
                summarizes one foundational conceptual paper in neuroimmune
                communication. It is intended as a structured guide to the
                paper’s relevance and context, not a replacement for the original article.
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
              Continue with related mechanism papers and broader learning pages
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
                href="https://pubmed.ncbi.nlm.nih.gov/12490959/"
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
