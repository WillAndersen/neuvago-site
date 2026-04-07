import Link from "next/link"

export const metadata = {
  title:
    "Topic Research | Vagus Nerve, HRV, Inflammation, Stress and Nervous System Research | Neuvago",
  description:
    "Explore topic research in the Neuvago Research Library, including vagus nerve stimulation, heart rate variability, inflammation, gut–brain axis, stress physiology, and autonomic regulation.",
}

const topicCategories = [
  {
    title: "Vagus nerve stimulation",
    description:
      "Research on implanted and non-invasive vagus nerve stimulation, including auricular stimulation, neuromodulation, and brain–body pathways.",
    href: "/research/topics/vagus-nerve-stimulation",
    linkLabel: "Browse topic",
    status: "Priority topic",
  },
  {
    title: "Heart rate variability",
    description:
      "Research on HRV as a physiological marker in autonomic regulation, vagal influence, stress, sleep, and recovery research.",
    href: "/research/topics/heart-rate-variability",
    linkLabel: "Browse topic",
    status: "Priority topic",
  },
  {
    title: "Inflammation",
    description:
      "Research on neuroimmune communication, the inflammatory reflex, cytokine signaling, and the cholinergic anti-inflammatory pathway.",
    href: "/research/topics/inflammation",
    linkLabel: "Browse topic",
    status: "Priority topic",
  },
  {
    title: "Gut–brain axis",
    description:
      "Research on communication between the digestive system, nervous system, microbiome, immune signaling, and vagal pathways.",
    href: "/research/topics/gut-brain-axis",
    linkLabel: "Planned topic",
    status: "Planned",
  },
  {
    title: "Stress physiology",
    description:
      "Research on stress responses, autonomic load, physiological activation, and how the nervous system responds to challenge.",
    href: "/research/topics/stress",
    linkLabel: "Planned topic",
    status: "Planned",
  },
  {
    title: "Sleep and recovery",
    description:
      "Research on recovery physiology, downshifting, autonomic balance, rest-related processes, and sleep-linked regulation.",
    href: "/research/topics/sleep",
    linkLabel: "Planned topic",
    status: "Planned",
  },
  {
    title: "Anxiety and emotional regulation",
    description:
      "Research on emotional processing, autonomic flexibility, vagal pathways, anxiety-related physiology, and regulation capacity.",
    href: "/research/topics/anxiety",
    linkLabel: "Planned topic",
    status: "Planned",
  },
  {
    title: "Autonomic nervous system regulation",
    description:
      "Research on sympathetic and parasympathetic balance, autonomic flexibility, vagal regulation, and state-shifting physiology.",
    href: "/research/topics/autonomic-regulation",
    linkLabel: "Planned topic",
    status: "Planned",
  },
]

const structureCards = [
  {
    title: "Research hub",
    description:
      "The main research page explains the broader evidence layer and how it supports the wider Neuvago knowledge universe.",
    href: "/research",
    linkLabel: "Back to research hub",
  },
  {
    title: "Topic research",
    description:
      "Topic pages organize the literature by theme, making it easier to move from a broad subject area into relevant individual studies.",
    href: "/research/topics",
    linkLabel: "You are here",
  },
  {
    title: "Scientific studies",
    description:
      "The studies library collects individual paper summaries and provides structured reading paths into the literature.",
    href: "/research/studies",
    linkLabel: "Go to studies library",
  },
]

const whyTopicsMatter = [
  {
    title: "Topics make a growing library easier to use",
    description:
      "As the research library expands, topic pages help readers navigate by subject area rather than needing to know individual papers in advance.",
  },
  {
    title: "Topics connect studies into larger patterns",
    description:
      "Single papers matter most when they are placed inside a broader research conversation. Topic pages help create that structure.",
  },
  {
    title: "Topics create a stronger authority system",
    description:
      "A topic layer strengthens the connection between the research hub, the studies library, and the broader learning and condition pages across the site.",
  },
]

export default function ResearchTopicsPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research / Topic Research
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Topic Research
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Topic Research organizes the Neuvago Research Library by major
              scientific themes. Instead of starting with individual papers,
              readers can begin with a research area such as vagus nerve stimulation,
              heart rate variability, inflammation, gut–brain communication, or
              autonomic regulation, and then move into the relevant studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#6b665e]">
              <span>Built to scale as the library grows</span>
              <span>Designed for theme-first browsing</span>
              <span>Connects topics to individual studies</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to research hub
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
              Why topic research exists
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A growing research library needs a clear subject layer between the hub and the individual papers
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Topic pages make the library easier to use. They help readers move
              from broad interest areas into more specific studies without losing
              the larger scientific picture.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This is especially important as the library grows. Topic research
              creates the structure needed to support dozens, and eventually many
              more, individual paper summaries.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Why topics matter
            </p>

            <div className="mt-7 space-y-5">
              {whyTopicsMatter.map((item) => (
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
              Current and planned topic tracks
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Topic pages are being built as the research system expands
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {topicCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7 shadow-[0_8px_24px_rgba(31,31,28,0.03)]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-black/10 bg-[#f6f1ea] px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-[#6f6a61]">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-4 text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How topic research fits the wider library
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Topic pages sit between the broad research hub and the individual studies
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The topic layer helps transform the research library into a more
              scalable system. It gives each major subject area a place to grow,
              collect relevant studies, and later connect more clearly into
              learning pages and condition pages.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Over time, this makes the research library easier to browse for
              professionals, researchers, and serious readers who want to follow
              a topic rather than only a single paper.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8 shadow-[0_8px_24px_rgba(31,31,28,0.03)]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Library structure
            </p>

            <div className="mt-8 space-y-5">
              {structureCards.map((item) => (
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
              Topic Research is intended to grow over time as the library expands.
              It provides the subject structure needed to support many more studies
              while keeping the research system understandable and browseable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Back to research hub
              </Link>
              <Link
                href="/research/studies"
                className="inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
              >
                Go to studies library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
