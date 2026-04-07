import Link from "next/link"

export const metadata = {
  title:
    "The Cholinergic Anti-Inflammatory Pathway (Pavlov & Tracey, 2005) | Neuvago Research Library",
  description:
    "Read a structured summary of Pavlov & Tracey (2005), the influential review that described the cholinergic anti-inflammatory pathway and helped shape research on vagal signaling and immune regulation.",
}

const studyDetails = [
  { label: "Authors", value: "Valentin A. Pavlov & Kevin J. Tracey" },
  { label: "Year", value: "2005" },
  { label: "Journal", value: "Brain, Behavior, and Immunity" },
  { label: "Research field", value: "Neuroimmunology" },
  { label: "Main concept", value: "Cholinergic anti-inflammatory pathway" },
]

const keyIdeas = [
  {
    title: "A foundational neuroimmune mechanism",
    description:
      "The paper described the cholinergic anti-inflammatory pathway as a key mechanism through which vagal signaling may influence inflammatory responses.",
  },
  {
    title: "A major extension of inflammatory reflex research",
    description:
      "This review helped translate earlier discoveries into a broader framework connecting vagus nerve signaling, acetylcholine, cytokines, and immune regulation.",
  },
  {
    title: "A cornerstone of later bioelectronic medicine",
    description:
      "The concept became central to later research on vagus nerve stimulation, inflammation, and neural regulation of physiology.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The objective of the paper was to explain how neural pathways, especially those involving the vagus nerve, may influence inflammatory responses.",
      "The authors reviewed experimental evidence suggesting that cholinergic signaling can regulate cytokine release during immune activation.",
      "By synthesizing results from multiple studies, they aimed to provide a broader conceptual framework for how the nervous system might participate in controlling inflammation.",
    ],
  },
  {
    title: "The cholinergic anti-inflammatory pathway",
    body: [
      "The cholinergic anti-inflammatory pathway refers to a neural mechanism in which acetylcholine-mediated signaling influences inflammatory processes.",
      "According to this model, vagus nerve activity may regulate immune responses by modulating cytokine production.",
      "This pathway became one of the most important proposed mechanisms linking neural signaling with immune regulation and forms a major part of the broader inflammatory reflex framework.",
    ],
  },
  {
    title: "The role of acetylcholine",
    body: [
      "Acetylcholine is the primary neurotransmitter associated with the parasympathetic nervous system.",
      "In the cholinergic anti-inflammatory pathway, acetylcholine released through vagal signaling is proposed to interact with receptors on immune cells.",
      "Experimental evidence discussed in the paper suggested that activation of the alpha7 nicotinic acetylcholine receptor on immune cells may inhibit the release of pro-inflammatory cytokines such as TNF.",
      "This receptor interaction became one of the key biological mechanisms proposed to explain neural regulation of inflammation.",
    ],
  },
  {
    title: "The role of the vagus nerve",
    body: [
      "The vagus nerve is one of the primary communication pathways between the brain and internal organs.",
      "Because it carries both sensory and regulatory signals, it can participate in bidirectional communication between the nervous system and immune system.",
      "In the cholinergic anti-inflammatory pathway, efferent vagal signaling is thought to influence immune activity in peripheral tissues, reinforcing the broader idea that vagal pathways may help shape inflammatory regulation.",
    ],
  },
  {
    title: "Scientific impact of the paper",
    body: [
      "The Pavlov and Tracey review became one of the most widely cited papers in neuroimmune research.",
      "It helped provide a coherent theoretical framework connecting neural signaling, immune regulation, and inflammatory responses.",
      "The concept of the cholinergic anti-inflammatory pathway influenced later work in neuroimmunology, autonomic physiology, vagus nerve stimulation research, and bioelectronic medicine.",
    ],
  },
  {
    title: "Subsequent research",
    body: [
      "Following publication of this review, researchers continued investigating how vagus nerve signaling interacts with immune pathways in different physiological and experimental settings.",
      "This work contributed to a growing field focused on how neural stimulation technologies may influence inflammatory signaling and physiological regulation.",
      "The cholinergic anti-inflammatory pathway remains one of the key concepts behind modern research into vagus-related neuroimmune communication.",
    ],
  },
  {
    title: "Limitations and ongoing discussion",
    body: [
      "Although the cholinergic anti-inflammatory pathway is widely accepted as an important conceptual framework, researchers continue to investigate the exact biological mechanisms involved.",
      "Open questions remain regarding the detailed neural circuits, the role of different immune cell types, and how findings from experimental models translate to human physiology.",
      "That means the paper is best understood as a major foundation for ongoing research rather than a final answer to every mechanistic question.",
    ],
  },
  {
    title: "Why this paper matters",
    body: [
      "The Pavlov and Tracey review helped establish a broader understanding of how neural pathways may participate in immune regulation.",
      "By describing the cholinergic anti-inflammatory pathway, the paper gave later researchers a durable framework for studying vagus nerve physiology and neuroimmune communication.",
      "Today, it remains one of the central references in research on inflammation, the vagus nerve, and bioelectronic medicine.",
    ],
  },
]

const relatedLinks = [
  {
    title: "The Inflammatory Reflex",
    description:
      "A foundational conceptual paper describing how neural circuits may detect and regulate inflammatory activity.",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
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
      "A broader learning page on why the vagus nerve matters in conversations about internal communication, regulation, and recovery.",
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

export default function PavlovTracey2005CholinergicAntiInflammatoryPathwayPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Cholinergic Anti-Inflammatory Pathway
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              The Cholinergic Anti-Inflammatory Pathway (Pavlov &amp; Tracey, 2005)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The paper by Valentin A. Pavlov and Kevin J. Tracey, published in
              2005, is one of the foundational reviews in neuroimmune research.
              It described the cholinergic anti-inflammatory pathway as a key
              mechanism through which vagal signaling may influence inflammatory responses.
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
              A major mechanism paper linking vagal signaling, acetylcholine, and inflammatory regulation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This paper mattered because it helped move the field from broad
              conceptual neuroimmune discussion toward a more specific proposed
              biological mechanism. It gave researchers a clearer way to think
              about how vagal signaling might influence cytokine release.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That made it one of the most important bridge papers between early
              inflammatory reflex theory and later experimental and translational
              research on vagus nerve stimulation and immune regulation.
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
                href="https://doi.org/10.1016/j.bbi.2005.03.015"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1016/j.bbi.2005.03.015
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/15922555/"
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
                summarizes one influential review in neuroimmune research. It is
                intended as a structured guide to the paper’s relevance and
                context, not a replacement for the original article.
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
                href="https://pubmed.ncbi.nlm.nih.gov/15922555/"
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
