import Link from "next/link"

export const metadata = {
  title:
    "Gut–Brain Axis Research | Vagal Signaling, Microbiome and Brain–Body Communication | Neuvago",
  description:
    "Explore gut–brain axis research in the Neuvago Research Library, including vagal signaling, microbiome communication, digestive regulation, inflammation, and broader brain–body pathways.",
}

const topicOverview = [
  {
    title: "Brain–body communication",
    description:
      "Gut–brain axis research examines how signals move between the digestive system and the brain through neural, immune, endocrine, and microbial pathways.",
  },
  {
    title: "Vagal signaling",
    description:
      "A major part of this literature focuses on the vagus nerve as one of the key communication routes linking gut activity with the brain.",
  },
  {
    title: "Microbiome and regulation",
    description:
      "The field also includes growing interest in how microbiome-related processes may interact with neural, immune, and metabolic signaling.",
  },
]

const researchThemes = [
  {
    title: "Bidirectional communication",
    description:
      "A central theme is that the gut and brain continuously exchange information rather than functioning as separate systems.",
  },
  {
    title: "Vagus nerve pathways",
    description:
      "The vagus nerve is repeatedly highlighted as a direct neural pathway linking digestive processes with regulatory centers in the brain.",
  },
  {
    title: "Microbiome, immune, and endocrine interaction",
    description:
      "The field increasingly studies how microbes, immune cells, hormones, and neural pathways interact within one larger communication network.",
  },
  {
    title: "Digestive disorders and brain–body models",
    description:
      "This literature also helped shift understanding of some digestive conditions toward disorders of gut–brain interaction rather than purely local digestive dysfunction.",
  },
]

const foundationalStudies = [
  {
    title: "Gut Feelings: The Emerging Biology of Gut–Brain Communication",
    authors: "Emeran A. Mayer",
    year: "2011",
    journal: "Nature Reviews Neuroscience",
    category: "Foundation review",
    href: "/research/studies/mayer-2011-gut-brain-axis",
    summary:
      "A landmark review explaining how neural, hormonal, microbial, and immune pathways connect the digestive system with the brain.",
  },
]

const connectedResearch = [
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about internal communication, stress, sleep, and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Explore vagus nerve",
  },
  {
    title: "Inflammation",
    description:
      "A topic page covering neuroimmune signaling, inflammatory reflex research, and vagus-related immune communication.",
    href: "/research/topics/inflammation",
    linkLabel: "Browse inflammation research",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Return to the full studies library to browse individual papers across multiple research tracks.",
    href: "/research/studies",
    linkLabel: "Go to studies library",
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

export default function GutBrainAxisResearchPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Gut–Brain Axis
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Gut–Brain Axis Research
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This topic page organizes research related to gut–brain communication,
              including vagal signaling, microbiome-related processes, immune and endocrine
              pathways, and broader brain–body regulation. It is designed to provide
              a structured overview before readers move into individual studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Current topic: 1 study summary</span>
              <span>Built around brain–body communication</span>
              <span>Designed to grow over time</span>
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
              A research area linking digestive physiology, neural signaling, and broader brain–body regulation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Gut–brain axis research examines how the digestive system and the
              brain communicate through multiple overlapping pathways. This includes
              neural signaling, endocrine responses, immune activity, and the growing
              role of microbiome science in brain–body communication models.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This topic page groups the literature so the gut–brain axis can be
              understood as a broader scientific framework rather than as a narrow
              digestive topic alone.
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
              The gut–brain literature can be read through a few major research tracks
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
              The first anchor study in the gut–brain axis track
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-1 lg:max-w-3xl">
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
              especially useful in gut–brain axis research, where neural, immune,
              endocrine, digestive, and microbial mechanisms intersect.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Over time, this topic page can expand to include more studies,
              clearer internal grouping, and stronger links into adjacent research
              themes such as inflammation, vagal signaling, IBS, stress physiology,
              and brain–body communication.
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
              the studies library expands across gut–brain communication, vagal pathways,
              microbiome research, digestive regulation, and broader brain–body signaling.
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
