import Link from "next/link"

export const metadata = {
  title:
    "Inflammation Research | Neuroimmune Signaling, Inflammatory Reflex and Vagal Pathways | Neuvago",
  description:
    "Explore inflammation research in the Neuvago Research Library, including neuroimmune signaling, the inflammatory reflex, cytokine regulation, and vagus-related immune communication.",
}

const topicOverview = [
  {
    title: "Neuroimmune communication",
    description:
      "This topic covers research on how neural pathways and immune signaling may interact rather than functioning as isolated systems.",
  },
  {
    title: "Inflammatory reflex research",
    description:
      "A major branch of the literature examines the inflammatory reflex as a framework for how the nervous system may detect and help regulate inflammatory activity.",
  },
  {
    title: "Cholinergic anti-inflammatory signaling",
    description:
      "Another key area focuses on acetylcholine-mediated mechanisms and how vagal signaling may influence cytokine release.",
  },
]

const researchThemes = [
  {
    title: "From inflammation to neural regulation",
    description:
      "One of the major shifts in this literature is the move away from viewing inflammation as only biochemical and toward seeing it as part of a broader brain–body signaling system.",
  },
  {
    title: "The vagus nerve as a regulatory pathway",
    description:
      "The vagus nerve appears repeatedly in this literature because it provides a plausible communication route between peripheral tissues and regulatory centers in the brain.",
  },
  {
    title: "Mechanisms and cytokine signaling",
    description:
      "A large part of the field focuses on the biological mechanisms through which neural signals may influence cytokines and immune cell activity.",
  },
  {
    title: "Translation and interpretation",
    description:
      "A central research question is how experimental findings in neuroimmune models should be interpreted in relation to broader physiology and later clinical investigation.",
  },
]

const foundationalStudies = [
  {
    title:
      "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response",
    authors: "L. V. Borovikova et al.",
    year: "2000",
    journal: "Nature",
    category: "Experimental foundation",
    href: "/research/studies/borovikova-2000-vagus-nerve-inflammation",
    summary:
      "A landmark experimental study suggesting that vagus nerve stimulation may influence inflammatory cytokine release.",
  },
  {
    title: "The Inflammatory Reflex",
    authors: "Kevin J. Tracey",
    year: "2002",
    journal: "Nature",
    category: "Conceptual framework",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
    summary:
      "A foundational concept describing how neural pathways may detect and regulate inflammatory activity through reflex-like mechanisms.",
  },
  {
    title: "The Cholinergic Anti-Inflammatory Pathway",
    authors: "Valentin A. Pavlov & Kevin J. Tracey",
    year: "2005",
    journal: "Brain, Behavior, and Immunity",
    category: "Mechanism review",
    href: "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
    summary:
      "A major review describing how vagal cholinergic signaling may influence cytokine release and immune regulation.",
  },
]

const connectedResearch = [
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about internal regulation, signaling, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the full studies library to browse individual papers across multiple research tracks.",
    href: "/research/studies",
    linkLabel: "Go to studies library",
  },
  {
    title: "Topic Research",
    description:
      "Return to the broader topic layer to explore other major subject areas in the research library.",
    href: "/research/topics",
    linkLabel: "Back to topic research",
  },
]

function StudyCard({
  title,
  authors,
  year,
  journal,
  category,
  href,
  summary,
}: {
  title: string
  authors: string
  year: string
  journal: string
  category: string
  href: string
  summary: string
}) {
  return (
    <article className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-black/10 bg-[#f6f1ea] px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-[#6f6a61]">
          {category}
        </span>
        <span className="text-[0.72rem] uppercase tracking-[0.14em] text-[#8a847b]">
          {year}
        </span>
      </div>

      <h3 className="mt-4 text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#6a645d]">
        {authors}
      </p>

      <p className="mt-1 text-sm leading-6 text-[#7b756d]">
        {journal}
      </p>

      <p className="mt-5 text-sm leading-7 text-[#5f5a52] md:text-[0.96rem]">
        {summary}
      </p>

      <Link
        href={href}
        className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
      >
        Read study summary
      </Link>
    </article>
  )
}

export default function InflammationResearchPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Inflammation
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Inflammation Research
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This topic page organizes research related to inflammation,
              neuroimmune signaling, the inflammatory reflex, cytokine regulation,
              and vagus-related immune communication. It is designed to provide a
              structured overview before readers move into individual studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Current topic: 3 study summaries</span>
              <span>Experimental + conceptual + mechanism review</span>
              <span>Built to grow over time</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research/topics"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to topic research
              </Link>

              <Link
                href="/research/studies"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Go to studies library
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Topic overview
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A research area linking immune signaling, neural pathways, and brain–body regulation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Inflammation research within this library focuses on a major shift
              in scientific thinking: the idea that inflammatory regulation may
              involve not only biochemical signaling, but also neural circuits
              and autonomic communication pathways.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This topic page groups the literature together so the field can be
              understood as a broader neuroimmune research track rather than only
              as isolated findings or mechanism papers.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              What this topic includes
            </p>

            <div className="mt-7 space-y-5">
              {topicOverview.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] p-5"
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Main research themes
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The inflammation literature can be read through a few major research tracks
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {researchThemes.map((item) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Foundational studies in this topic
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The first three anchor studies in the inflammation track
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {foundationalStudies.map((item) => (
              <StudyCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How this topic fits the library
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Topic pages help a growing studies library stay usable as it expands
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              As more studies are added, topic pages make it easier to browse
              the literature by subject area rather than by title alone. This is
              especially useful in inflammation research, where conceptual models,
              experimental studies, and mechanism papers often sit very close together.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Over time, this topic page can expand to include more studies,
              stronger internal grouping, and clearer links into adjacent research
              themes such as vagus nerve signaling, gut–brain communication, and stress physiology.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Connected research paths
            </p>

            <div className="mt-8 space-y-5">
              {connectedResearch.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
                  >
                    {item.linkLabel}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-4xl border-t border-black/8 pt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Topic note
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This topic page is intended as a growing research index rather than
              a final review article. It is designed to organize the literature as
              the studies library expands across neuroimmune signaling, inflammatory
              reflex research, cytokine regulation, and vagus-related immune communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research/studies"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Go to studies library
              </Link>
              <Link
                href="/research/topics"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to topic research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
