import Link from "next/link"

export const metadata = {
  title:
    "Vagus Nerve Stimulation Research | Implanted and Non-Invasive VNS | Neuvago",
  description:
    "Explore vagus nerve stimulation research in the Neuvago Research Library, including implanted VNS, auricular stimulation, neuromodulation, and brain–body regulation research.",
}

const topicOverview = [
  {
    title: "Implanted vagus nerve stimulation",
    description:
      "Clinical and translational research on implanted VNS devices, especially in psychiatry and neuromodulation contexts.",
  },
  {
    title: "Non-invasive auricular stimulation",
    description:
      "Research on transcutaneous and auricular approaches designed to access vagal pathways without implant surgery.",
  },
  {
    title: "Brain–body regulation",
    description:
      "Studies examining how vagus nerve stimulation may influence autonomic regulation, neural circuits, and broader physiological signaling.",
  },
]

const researchThemes = [
  {
    title: "Implanted VNS as a clinical neuromodulation approach",
    description:
      "One major branch of the literature focuses on implanted vagus nerve stimulation, particularly in treatment-resistant depression and other severe clinical contexts.",
  },
  {
    title: "Auricular and transcutaneous stimulation pathways",
    description:
      "Another major branch examines whether external stimulation of the ear may influence vagal pathways and associated brain regions.",
  },
  {
    title: "Mechanisms and target pathways",
    description:
      "Researchers also study how VNS may influence brainstem pathways, autonomic signaling, neurotransmitter systems, and broader brain–body communication.",
  },
  {
    title: "Translation and interpretation",
    description:
      "A central question in the field is how findings from implanted devices, auricular stimulation, imaging, and physiology should be interpreted across different use cases and populations.",
  },
]

const foundationalStudies = [
  {
    title: "Vagus Nerve Stimulation for Treatment-Resistant Depression",
    authors: "A. John Rush et al.",
    year: "2005",
    journal: "Biological Psychiatry",
    category: "Implanted VNS",
    href: "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
    summary:
      "A landmark clinical study examining implanted vagus nerve stimulation in treatment-resistant depression.",
  },
  {
    title:
      "Non-Invasive Access to the Vagus Nerve via the Ear: fMRI Evidence",
    authors: "E. Frangos, J. Ellrich, B. Komisaruk",
    year: "2015",
    journal: "Brain Stimulation",
    category: "Auricular stimulation",
    href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
    summary:
      "A key neuroimaging study showing that stimulation of the ear may influence brain regions associated with vagal pathways.",
  },
]

const connectedResearch = [
  {
    title: "Vagus nerve",
    description:
      "A broader learning page on why the vagus nerve matters in conversations about regulation, stress, sleep, and internal communication pathways.",
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

export default function VagusNerveStimulationResearchPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topics / Vagus Nerve Stimulation
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Vagus Nerve Stimulation Research
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This topic page organizes research related to vagus nerve stimulation,
              including implanted VNS, auricular stimulation, non-invasive approaches,
              and broader neuromodulation pathways. It is designed to provide a
              structured overview before readers move into individual studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Current topic: 2 study summaries</span>
              <span>Implanted + non-invasive stimulation</span>
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
              A research area spanning implanted devices, auricular stimulation, and neuromodulation pathways
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Vagus nerve stimulation research does not refer to one single method.
              It includes different device types, stimulation approaches, target
              pathways, and research contexts, ranging from invasive clinical systems
              to non-invasive auricular neuromodulation studies.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This topic page groups those research directions together so the
              literature can be understood as a broader field rather than as a
              disconnected set of individual papers.
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
              The current literature can be read through a few major research tracks
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
              The first two anchor studies in the vagus nerve stimulation track
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
              As more studies are added, topic pages make it easier to browse the
              literature by subject area rather than by title alone. This is
              especially important in a field like vagus nerve stimulation, where
              methods, devices, targets, and interpretations can vary significantly.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Over time, this topic page can expand to include more studies,
              clearer internal categorization, and stronger links into adjacent
              research themes such as stress physiology, HRV, autonomic regulation,
              and emotional processing.
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
              the studies library expands across implanted, non-invasive, and
              mechanism-oriented vagus nerve stimulation research.
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
