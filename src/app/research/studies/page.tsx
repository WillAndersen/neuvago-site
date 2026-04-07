import Link from "next/link"

export const metadata = {
  title:
    "Scientific Studies Library | Vagus Nerve, HRV, Stress and Nervous System Research | Neuvago",
  description:
    "Browse the Neuvago Scientific Studies Library with individual research summaries on the vagus nerve, nervous system regulation, HRV, inflammation, stress, and non-invasive vagus nerve stimulation.",
}

const categories = [
  {
    title: "Foundational frameworks",
    description:
      "Landmark papers that shaped how researchers think about vagal pathways, autonomic regulation, emotional regulation, and brain–body communication.",
  },
  {
    title: "Autonomic regulation and HRV",
    description:
      "Core studies on heart rate variability, autonomic flexibility, and physiological regulation.",
  },
  {
    title: "Inflammation and neuroimmune signaling",
    description:
      "Research on the inflammatory reflex, cytokine signaling, acetylcholine, and vagus-related immune regulation.",
  },
  {
    title: "Vagus nerve stimulation",
    description:
      "Studies on implanted and non-invasive vagus nerve stimulation, including auricular stimulation and neuromodulation.",
  },
  {
    title: "Gut–brain axis",
    description:
      "Research on communication between the digestive system, brain, microbiome, immune signaling, and vagal pathways.",
  },
]

const featuredStudies = [
  {
    title: "Orienting in a Defensive World: The Polyvagal Theory",
    authors: "Stephen W. Porges",
    year: "1995",
    journal: "Psychophysiology",
    category: "Foundation",
    href: "/research/studies/porges-1995-polyvagal-theory",
    summary:
      "A landmark theoretical framework linking vagal pathways with safety, social engagement, mobilization, and shutdown states.",
  },
  {
    title:
      "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use",
    authors:
      "Task Force of the European Society of Cardiology and NASPE",
    year: "1996",
    journal: "Circulation",
    category: "HRV",
    href: "/research/studies/task-force-1996-heart-rate-variability-standards",
    summary:
      "The foundational methodological reference for HRV research and one of the central papers in autonomic physiology.",
  },
  {
    title: "A Model of Neurovisceral Integration in Emotion Regulation",
    authors: "Julian F. Thayer & Richard D. Lane",
    year: "2000",
    journal: "Journal of Affective Disorders",
    category: "Autonomic regulation",
    href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
    summary:
      "An influential model connecting emotional regulation, autonomic flexibility, HRV, and vagal regulation.",
  },
  {
    title: "The Inflammatory Reflex",
    authors: "Kevin J. Tracey",
    year: "2002",
    journal: "Nature",
    category: "Neuroimmune",
    href: "/research/studies/inflammatory-reflex-tracey-2002",
    summary:
      "A landmark concept describing how neural circuits, including vagal pathways, may participate in immune regulation.",
  },
]

const groupedStudies = [
  {
    title: "Foundational frameworks",
    studies: [
      {
        title: "Orienting in a Defensive World: The Polyvagal Theory",
        authors: "Stephen W. Porges",
        year: "1995",
        journal: "Psychophysiology",
        category: "Foundation",
        href: "/research/studies/porges-1995-polyvagal-theory",
        summary:
          "A foundational theory linking vagal pathways with safety, defensive responses, and the social engagement system.",
      },
      {
        title: "A Model of Neurovisceral Integration in Emotion Regulation",
        authors: "Julian F. Thayer & Richard D. Lane",
        year: "2000",
        journal: "Journal of Affective Disorders",
        category: "Autonomic regulation",
        href: "/research/studies/thayer-lane-2000-neurovisceral-integration",
        summary:
          "A key theoretical model linking the brain, emotional regulation, vagal activity, and autonomic flexibility.",
      },
    ],
  },
  {
    title: "Autonomic regulation and HRV",
    studies: [
      {
        title:
          "Heart Rate Variability: Standards of Measurement, Physiological Interpretation, and Clinical Use",
        authors:
          "Task Force of the European Society of Cardiology and NASPE",
        year: "1996",
        journal: "Circulation",
        category: "HRV",
        href: "/research/studies/task-force-1996-heart-rate-variability-standards",
        summary:
          "The foundational methodological paper behind HRV research across autonomic physiology, stress, sleep, and regulation studies.",
      },
    ],
  },
  {
    title: "Inflammation and neuroimmune signaling",
    studies: [
      {
        title:
          "Vagus Nerve Stimulation Attenuates the Systemic Inflammatory Response",
        authors: "L. V. Borovikova et al.",
        year: "2000",
        journal: "Nature",
        category: "Neuroimmune",
        href: "/research/studies/borovikova-2000-vagus-nerve-inflammation",
        summary:
          "A landmark experimental study suggesting that vagus nerve signaling may influence inflammatory cytokine release.",
      },
      {
        title: "The Inflammatory Reflex",
        authors: "Kevin J. Tracey",
        year: "2002",
        journal: "Nature",
        category: "Neuroimmune",
        href: "/research/studies/inflammatory-reflex-tracey-2002",
        summary:
          "A foundational concept describing how neural pathways may detect and regulate inflammatory activity through reflex-like mechanisms.",
      },
      {
        title: "The Cholinergic Anti-Inflammatory Pathway",
        authors: "Valentin A. Pavlov & Kevin J. Tracey",
        year: "2005",
        journal: "Brain, Behavior, and Immunity",
        category: "Neuroimmune",
        href: "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway",
        summary:
          "A major review describing how vagal cholinergic signaling may influence cytokine release and immune regulation.",
      },
    ],
  },
  {
    title: "Vagus nerve stimulation",
    studies: [
      {
        title:
          "Non-Invasive Access to the Vagus Nerve via the Ear: fMRI Evidence",
        authors: "E. Frangos, J. Ellrich, B. Komisaruk",
        year: "2015",
        journal: "Brain Stimulation",
        category: "Stimulation",
        href: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri",
        summary:
          "Important neuroimaging evidence supporting the idea that ear-based stimulation may influence brain regions associated with vagal pathways.",
      },
      {
        title:
          "Vagus Nerve Stimulation for Treatment-Resistant Depression",
        authors: "A. John Rush et al.",
        year: "2005",
        journal: "Biological Psychiatry",
        category: "Stimulation",
        href: "/research/studies/rush-2005-vagus-nerve-stimulation-depression",
        summary:
          "A widely cited clinical study examining implanted vagus nerve stimulation in treatment-resistant depression.",
      },
    ],
  },
  {
    title: "Gut–brain axis",
    studies: [
      {
        title:
          "Gut Feelings: The Emerging Biology of Gut–Brain Communication",
        authors: "Emeran A. Mayer",
        year: "2011",
        journal: "Nature Reviews Neuroscience",
        category: "Gut–brain",
        href: "/research/studies/mayer-2011-gut-brain-axis",
        summary:
          "A major review explaining how neural, hormonal, microbial, and immune pathways connect the digestive system with the brain.",
      },
    ],
  },
]

const libraryLayers = [
  {
    title: "Research hub",
    description:
      "The main research page explains the broader evidence layer and how it supports learning, topic development, and the larger Neuvago system.",
    href: "/research",
    linkLabel: "Go to research hub",
  },
  {
    title: "Learn",
    description:
      "The learning system translates foundational ideas such as regulation, vagal signaling, stress, sleep, and recovery into everyday language.",
    href: "/learn",
    linkLabel: "Go to learning hub",
  },
  {
    title: "Conditions",
    description:
      "Condition pages connect broader science and nervous system concepts to recognizable lived experiences such as stress, sleep difficulties, anxiety, and burnout.",
    href: "/conditions",
    linkLabel: "Browse conditions",
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
        Read summary
      </Link>
    </article>
  )
}

export default function ResearchStudiesPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Scientific Studies Library
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Scientific Studies Library
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This library collects individual published papers related to the
              vagus nerve, autonomic regulation, vagus nerve stimulation, HRV,
              inflammation, gut–brain communication, and related areas of
              nervous system research. Each study page is designed to make the
              literature easier to browse, understand, and place in context.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Current library: 9 studies</span>
              <span>Grouped by research track</span>
              <span>Built to expand over time</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to research hub
              </Link>

              <Link
                href="/learn"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Go to learning hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              About this library
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A calmer, more structured way to explore the published literature
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Review articles and overview pages explain larger ideas. Individual
              studies show how those ideas are actually investigated: what
              researchers measured, how studies were designed, what findings
              mattered, and where uncertainty remains.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The aim of this library is to make the literature easier to access
              without flattening it into oversimplified claims. It is intended as
              a structured educational resource rather than a substitute for
              original source reading.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Study page structure
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Research objective",
                "Study design or structure",
                "Main findings",
                "Scientific impact",
                "Limitations and context",
                "Reference details and source links",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/6 bg-[#f8f5f0] px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#3d3a35] md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research tracks
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The current library is organized around clear research paths
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
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
              Featured foundational studies
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A first set of landmark papers that shaped the broader conversation
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredStudies.map((item) => (
              <StudyCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Current library
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Current studies grouped into research tracks
            </h2>
          </div>

          <div className="mt-12 space-y-12">
            {groupedStudies.map((group) => (
              <section key={group.title}>
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#1f1f1c]">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.studies.map((item) => (
                    <StudyCard key={item.title} {...item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How this library fits the wider system
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The studies library is designed to work together with broader research and learning pathways
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Individual studies matter most when they can be placed in context.
              That is why this library sits inside a broader system that includes
              research overviews, learning pages, and condition-level content.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Over time, this structure should make it easier to move from broad
              understanding into topic-specific evidence and then into individual
              papers without losing the larger picture.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Connected layers
            </p>

            <div className="mt-8 space-y-5">
              {libraryLayers.map((item) => (
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
              Library note
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This library is intended for educational use and is designed to
              expand over time across major research areas related to vagus nerve
              signaling, autonomic regulation, inflammation, stimulation, and
              brain–body communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to research hub
              </Link>
              <Link
                href="/learn"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Go to learning hub
              </Link>
              <Link
                href="/conditions"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Browse conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
