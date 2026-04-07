import Link from "next/link"

export const metadata = {
  title:
    "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response (Borovikova et al., 2000) | Neuvago Research Library",
  description:
    "Read a structured summary of Borovikova et al. (2000), the landmark Nature study showing that vagus nerve stimulation reduced inflammatory cytokine release in an experimental model.",
}

const studyDetails = [
  { label: "Authors", value: "L. V. Borovikova et al." },
  { label: "Year", value: "2000" },
  { label: "Journal", value: "Nature" },
  { label: "Research field", value: "Neuroimmunology" },
  { label: "Main topic", value: "Neural regulation of inflammation" },
]

const keyIdeas = [
  {
    title: "A landmark experimental study",
    description:
      "This paper provided some of the first strong experimental evidence that vagus nerve stimulation could influence inflammatory cytokine release.",
  },
  {
    title: "A core foundation for later neuroimmune theory",
    description:
      "The findings became a major foundation for later work on the inflammatory reflex and the cholinergic anti-inflammatory pathway.",
  },
  {
    title: "A bridge into modern bioelectronic medicine",
    description:
      "The study helped establish the idea that neural circuits may influence immune signaling in measurable ways.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The objective of the study was to investigate whether neural signaling through the vagus nerve could influence inflammatory responses during systemic immune activation.",
      "The researchers were particularly interested in tumor necrosis factor (TNF), a cytokine that plays a major role in inflammatory processes.",
    ],
  },
  {
    title: "Study design",
    body: [
      "The study used an experimental animal model to investigate the interaction between vagus nerve signaling and immune responses.",
      "Key parts of the design included inducing systemic inflammation with endotoxin, stimulating the vagus nerve, measuring inflammatory cytokines, and comparing responses between stimulated and non-stimulated groups.",
      "This design made it possible to observe how vagus nerve activation affected inflammatory signaling under controlled conditions.",
    ],
  },
  {
    title: "Main findings",
    body: [
      "The study found that stimulation of the vagus nerve significantly reduced the production of tumor necrosis factor during systemic inflammation.",
      "This result suggested that neural pathways could directly influence immune signaling rather than simply responding to it.",
      "The researchers also identified acetylcholine as a key mediator in the process, helping connect vagal signaling with later work on the cholinergic anti-inflammatory pathway.",
    ],
  },
  {
    title: "The role of the vagus nerve",
    body: [
      "The vagus nerve serves as a major communication pathway between the brain and many organs throughout the body.",
      "Because it carries both sensory and regulatory signals, it is well positioned to link neural signaling with immune activity.",
      "The results of this study suggested that vagal pathways may provide one mechanism through which the nervous system can influence inflammatory processes.",
    ],
  },
  {
    title: "The cholinergic anti-inflammatory pathway",
    body: [
      "The findings of this study helped establish the concept of the cholinergic anti-inflammatory pathway.",
      "This pathway describes how acetylcholine signaling associated with vagal activity may influence immune cells and inflammatory mediator release.",
      "That mechanism later became a central part of the broader inflammatory reflex model.",
    ],
  },
  {
    title: "Scientific impact of the study",
    body: [
      "The Borovikova et al. paper is widely considered a landmark in neuroimmune research.",
      "It demonstrated that neural circuits could influence immune responses in a measurable way and helped open a major new research field.",
      "The study continues to be cited across neuroimmunology, vagus nerve stimulation research, inflammatory reflex research, and bioelectronic medicine.",
    ],
  },
  {
    title: "Subsequent research",
    body: [
      "Following this study, researchers began exploring whether vagus nerve stimulation might influence inflammatory pathways across different physiological and experimental contexts.",
      "This work contributed directly to later theories of the inflammatory reflex and to broader interest in neural regulation of physiology.",
      "It also helped lay part of the conceptual groundwork for bioelectronic medicine as a field.",
    ],
  },
  {
    title: "Limitations and scientific discussion",
    body: [
      "The original study was conducted in an experimental model, which means later work was needed to understand how the findings translate to human physiology.",
      "Subsequent studies have continued investigating the underlying mechanisms, the specific neural circuits involved, and the relevance of these findings across clinical settings.",
      "That means the study is best understood as a foundational experimental result rather than a final answer to all neuroimmune questions.",
    ],
  },
  {
    title: "Why this study matters",
    body: [
      "The Borovikova et al. study provided one of the first strong demonstrations that vagus nerve signaling could influence inflammatory responses.",
      "That made it a turning point in research on brain–body communication and helped establish the idea that the nervous system may participate in regulating immune function.",
      "Today, it remains one of the core references in the literature on vagus nerve physiology, inflammation, and neuroimmune communication.",
    ],
  },
]

const relatedLinks = [
  {
    title: "The Inflammatory Reflex (Tracey, 2002)",
    description:
      "A landmark conceptual paper that expanded the broader framework for neural regulation of inflammation.",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
    linkLabel: "Read related study",
  },
  {
    title: "The Cholinergic Anti-Inflammatory Pathway (Pavlov & Tracey, 2005)",
    description:
      "A closely related review describing the mechanism that grew directly out of findings like those reported here.",
    href: "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
    linkLabel: "Read related study",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the broader studies library to browse more individual research papers.",
    href: "/research/studies",
    linkLabel: "Back to studies library",
  },
  {
    title: "Research hub",
    description:
      "Go back to the broader evidence layer connecting foundational concepts, topic pathways, and individual studies.",
    href: "/research",
    linkLabel: "Back to research hub",
  },
]

export default function Borovikova2000VagusNerveInflammationPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Vagus Nerve and Inflammation
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response (Borovikova et al., 2000)
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The study by Borovikova and colleagues, published in <em>Nature</em> in
              2000, is one of the most influential experimental studies in
              neuroimmunology. It provided some of the first strong evidence
              that vagus nerve stimulation could reduce inflammatory cytokine
              release in a model of systemic inflammation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Back to studies library
              </Link>

              <Link
                href="/research"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Back to research hub
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Study details
            </p>

            <div className="mt-8 space-y-4">
              {studyDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] px-5 py-4"
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

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                DOI
              </p>
              <a
                href="https://doi.org/10.1038/35030300"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1038/35030300
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/10698726/"
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Why this study matters
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              One of the first major studies showing that vagus nerve signaling may influence inflammation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This paper mattered because it gave the field a striking
              experimental result: vagus nerve stimulation was associated with a
              reduction in inflammatory cytokine release during systemic immune activation.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That helped shift the conversation toward the idea that the nervous
              system may play a direct role in immune regulation, not just a
              secondary or unrelated one.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key ideas
            </p>

            <div className="mt-8 space-y-5">
              {keyIdeas.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Related pages
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Continue into related learning and research paths
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedLinks.map((item) => (
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
                Research disclaimer
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                This study summary is provided for educational purposes
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                This page summarizes scientific research for educational
                purposes. It does not constitute medical advice, diagnosis, or
                treatment recommendations. Medical concerns should always be
                discussed with qualified healthcare professionals.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/research/studies"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Back to studies library
                </Link>

                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/10698726/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  View on PubMed
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
