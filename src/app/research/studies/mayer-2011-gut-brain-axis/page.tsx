import Link from "next/link"

export const metadata = {
  title:
    "Gut Feelings: The Emerging Biology of Gut–Brain Communication (Mayer, 2011) | Neuvago Research Library",
  description:
    "Read a structured summary of Mayer (2011), the influential review that helped establish the gut–brain axis as a central framework in modern brain–body communication research.",
}

const studyDetails = [
  { label: "Author", value: "Emeran A. Mayer" },
  { label: "Year", value: "2011" },
  { label: "Journal", value: "Nature Reviews Neuroscience" },
  { label: "Research field", value: "Neuroscience / Gastroenterology" },
  { label: "Main topic", value: "Gut–brain axis communication" },
]

const keyIdeas = [
  {
    title: "A landmark gut–brain axis review",
    description:
      "This paper helped establish the gut–brain axis as a major framework for understanding communication between the brain and digestive system.",
  },
  {
    title: "The vagus nerve as a core signaling pathway",
    description:
      "Mayer emphasized neural communication, including vagal pathways, as one of the major routes linking the gastrointestinal system with the brain.",
  },
  {
    title: "A major bridge into modern brain–body research",
    description:
      "The review became highly influential across microbiome science, disorders of gut–brain interaction, stress physiology, and neurogastroenterology.",
  },
]

const sections = [
  {
    title: "Research objective",
    body: [
      "The objective of the review was to summarize emerging scientific understanding of how the gastrointestinal system communicates with the brain through neural, hormonal, and immune pathways.",
      "Mayer aimed to integrate research from neuroscience, gastroenterology, and microbiology into a more coherent framework explaining how gut signals influence brain function and behavior.",
    ],
  },
  {
    title: "The gut–brain axis",
    body: [
      "The gut–brain axis refers to a bidirectional communication system linking the brain and the gastrointestinal tract.",
      "Signals travel between these systems through multiple pathways, including neural circuits, endocrine signaling, immune communication, and microbial influences.",
      "This framework helped move the field beyond a narrow digestive model and toward a broader systems-level understanding of how brain and body interact.",
    ],
  },
  {
    title: "The role of the vagus nerve",
    body: [
      "The vagus nerve plays a major role in gut–brain communication because it provides a direct neural pathway connecting the digestive system to the brainstem.",
      "Sensory fibers of the vagus nerve transmit signals from the gastrointestinal tract to the brain, while efferent fibers influence digestive function and autonomic regulation.",
      "This bidirectional signaling helped make the vagus nerve one of the central structures in later research on gut–brain communication and nervous system regulation.",
    ],
  },
  {
    title: "The microbiome and neural signaling",
    body: [
      "The review also highlighted growing interest in the role of the gut microbiome in gut–brain communication.",
      "Microorganisms in the digestive tract may influence metabolic, immune, and neural processes, adding another layer to how gut–brain signaling is understood.",
      "This helped expand the gut–brain axis framework to include interactions among microbes, immune cells, endocrine systems, and neural pathways.",
    ],
  },
  {
    title: "Gut–brain interaction and digestive disorders",
    body: [
      "The review emphasized that many digestive conditions involve altered communication between the gut and the brain.",
      "Disorders such as irritable bowel syndrome increasingly came to be described as disorders of gut–brain interaction rather than purely local digestive disturbances.",
      "That shift helped influence later research in gastroenterology, neuroscience, and stress physiology.",
    ],
  },
  {
    title: "Scientific impact of the paper",
    body: [
      "Mayer’s review helped consolidate a growing body of research into one widely cited conceptual framework.",
      "The paper became a foundational reference in studies examining gut microbiome research, brain–body communication, digestive disorders, stress, emotional regulation, and neural pathways linking the gut and brain.",
      "It remains one of the most influential references in modern gut–brain axis research.",
    ],
  },
  {
    title: "Subsequent research",
    body: [
      "Following publication of this review, research on the gut–brain axis expanded rapidly.",
      "Researchers began examining how microbial metabolites, immune signaling, vagal pathways, and autonomic regulation interact to influence brain and body function.",
      "This contributed to rapid growth in fields such as microbiome research, disorders of gut–brain interaction, and brain–body signaling research.",
    ],
  },
  {
    title: "Limitations and scientific discussion",
    body: [
      "Although the gut–brain axis framework has become widely adopted, many details of the underlying mechanisms remain under investigation.",
      "Researchers continue to study how microbial activity, neural signaling, endocrine responses, and immune processes interact within this highly complex system.",
      "That means the review is best understood as a major organizing framework rather than a final answer to every mechanistic question in the field.",
    ],
  },
  {
    title: "Why this study matters",
    body: [
      "The Mayer review helped establish the gut–brain axis as one of the major concepts in modern brain–body communication research.",
      "By describing the biological mechanisms linking the digestive system and the brain, the paper helped guide a new generation of research across neuroscience, gastroenterology, microbiome science, and autonomic regulation.",
      "Today, the gut–brain axis remains one of the key frameworks for studying how neural, immune, microbial, and endocrine processes interact to shape physiological regulation.",
    ],
  },
]

const relatedLinks = [
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about internal communication, stress, sleep, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "The Inflammatory Reflex",
    description:
      "A landmark conceptual paper on neural regulation of inflammation and broader brain–body communication.",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
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

export default function Mayer2011GutBrainAxisPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Studies / Gut–Brain Axis
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Gut Feelings: The Emerging Biology of Gut–Brain Communication (Mayer, 2011)
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The review article by Emeran A. Mayer, published in 2011, is one
              of the most influential papers describing the biological mechanisms
              connecting the digestive system and the brain. It helped establish
              the gut–brain axis as a central framework in modern brain–body research.
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
              One of the landmark reviews that established the gut–brain axis as a major brain–body communication framework
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This paper mattered because it helped pull together findings from
              multiple disciplines into one modern framework. It made it easier
              to think about the brain, gut, immune system, microbiome, and vagal
              signaling as part of one larger communication network.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That made the paper especially influential in later research on
              disorders of gut–brain interaction, microbiome science, vagal signaling,
              and broader nervous system regulation.
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
                href="https://doi.org/10.1038/nrn3071"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm leading-7 text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                https://doi.org/10.1038/nrn3071
              </a>
              <div className="mt-4">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/21689577/"
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
                summarizes one influential review in gut–brain communication
                research. It is intended as a structured guide to the paper’s
                relevance and context, not a replacement for the original article.
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
              Continue with related theory, gut–brain, and broader learning pages
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
                href="https://pubmed.ncbi.nlm.nih.gov/21689577/"
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
