import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Anxiety and the Nervous System | Neuvago",
  description:
    "Learn how anxiety connects to the nervous system, including alertness, overwhelm, reactivity, poor sleep, and why the body can feel watchful or hard to settle.",
  alternates: {
    canonical: "/conditions/anxiety",
  },
  openGraph: {
    title: "Anxiety and the Nervous System | Neuvago",
    description: "Learn how anxiety connects to the nervous system, including alertness, overwhelm, reactivity, poor sleep, and why the body can feel watchful or hard to settle.",
    url: "/conditions/anxiety",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anxiety and the Nervous System | Neuvago",
    description: "Learn how anxiety connects to the nervous system, including alertness, overwhelm, reactivity, poor sleep, and why the body can feel watchful or hard to settle.",
  },
}

const anxietyPillars = [
  {
    title: "Anxiety can have physical features",
    description:
      "Tension, restlessness or sleep difficulties may accompany anxiety. No single sensation tells you which condition, if any, is present.",
  },
  {
    title: "Distress and daily impact matter",
    description:
      "An assessment considers what you are experiencing and how it affects your life, alongside other possible physical and mental health concerns.",
  },
  {
    title: "Support can include established care",
    description:
      "Generalised anxiety disorder and panic disorder have evidence-based care options. A qualified professional can discuss assessment and appropriate treatment.",
  },
]

const commonAnxietyPatterns = [
  {
    title: "Worry that is hard to manage",
    description:
      "You may notice repeated worry or anticipation that takes up attention and is difficult to set aside.",
  },
  {
    title: "Tension or restlessness",
    description:
      "Feeling tense, irritable or on edge can be part of anxiety, but does not identify its cause on its own.",
  },
  {
    title: "Sleep or concentration difficulties",
    description:
      "Some people find it harder to fall asleep, concentrate or make decisions while feeling anxious.",
  },
  {
    title: "Avoidance or disruption",
    description:
      "Fear or worry may affect activities, relationships or work. The impact on your life is worth discussing rather than measuring against this list.",
  },
]

const connectedTopics = [
  {
    title: "Emotional regulation and the nervous system",
    description:
      "Background on emotional experiences and strategies, with distinctions between research findings and individual assessment.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional regulation",
  },
  {
    title: "Fight, flight, freeze",
    description:
      "Background on defensive responses. This is not a way to diagnose an anxiety disorder from a protective-state label.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Explore fight, flight, freeze",
  },
  {
    title: "How to calm your nervous system",
    description:
      "General reading about calming practices. It does not replace assessment or treatment when anxiety is persistent or disabling.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "What nervous system regulation feels like",
    description:
      "A discussion of subjective experience, with limits on inferring physiology from a feeling of calm.",
    href: "/learn/what-nervous-system-regulation-feels-like",
    linkLabel: "Explore felt regulation",
  },
]

const sourceReferences = [
  {
    "key": "who-anxiety",
    "kind": "official-guidance",
    "design": "Public health guidance",
    "dateLabel": "8 September 2025",
    "title": "Anxiety disorders",
    "authors": "World Health Organization",
    "publication": "WHO fact sheet",
    "scope": "Overview of anxiety disorders, their impact and available care. This is general information, not a diagnostic test or evidence for a Neuvago treatment effect.",
    "pmid": null,
    "doi": null,
    "href": "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders",
    "linkLabel": "World Health Organization"
  },
  {
    "key": "nice-cg113",
    "kind": "official-guidance",
    "design": "Clinical guideline",
    "dateLabel": "2011; updated 15 June 2020",
    "title": "Generalised anxiety disorder and panic disorder in adults: management",
    "authors": "National Institute for Health and Care Excellence",
    "publication": "NICE clinical guideline CG113",
    "scope": "Assessment and care options for adults with generalised anxiety disorder or panic disorder. It does not cover every anxiety presentation and is not a self-treatment protocol.",
    "pmid": null,
    "doi": null,
    "href": "https://www.nice.org.uk/guidance/cg113/chapter/Recommendations",
    "linkLabel": "National Institute for Health and Care Excellence"
  }
] as const

export default function AnxietyPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Anxiety and the Nervous System | Neuvago",
    description: "Learn how anxiety connects to the nervous system, including alertness, overwhelm, reactivity, poor sleep, and why the body can feel watchful or hard to settle.",
    path: "/conditions/anxiety",
    articleSection: "Conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Anxiety and the Nervous System", path: "/conditions/anxiety" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions-anxiety" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions / Anxiety
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Understanding anxiety through the nervous system
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Feeling anxious sometimes is part of life. Anxiety disorders involve
              fear or worry that is difficult to manage and interferes with
              everyday life. Physical tension, restlessness and sleep difficulties
              can accompany anxiety, but these experiences alone do not identify a
              disorder or a particular nervous system problem.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Sources: <a className="underline underline-offset-4" href="#source-who-anxiety">[1] WHO fact sheet</a> · <a className="underline underline-offset-4" href="#source-nice-cg113">[2] NICE clinical guideline CG113</a></p>
            <p data-neuvago-interpretation-note="1e4d6" className="mt-5 text-sm leading-7 text-[#625b53]">Anxiety is not a diagnosis of vagus-nerve dysfunction. The nervous-system framing in this page is limited background: it cannot establish a cause, diagnosis or treatment choice for an individual.</p>
            <aside data-neuvago-care-note="1e4d6" className="mt-6 rounded-2xl border border-black/10 bg-white/65 p-5">
              <h2 className="text-base font-medium">When to seek individual advice</h2>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">If anxiety is affecting daily life or is difficult to cope with, seek advice from a healthcare professional. Do not wait for a wellness routine or device to solve it. If you or someone else is in immediate danger or cannot stay safe, contact local emergency services now.</p>
              <a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm underline underline-offset-4">NHS guidance: anxiety, fear and panic</a>
            </aside>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/emotional-regulation-and-the-nervous-system"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore emotional regulation
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-[#ebe4da] blur-2xl" />
            <div className="hidden rounded-[2rem] border border-black/5 bg-white/50 p-4 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur lg:block">
              <div className="rounded-[1.75rem] bg-[#efe8de] p-6 md:p-8">
                <div className="aspect-[4/5] rounded-[1.5rem] border border-black/5 bg-gradient-to-b from-[#f9f6f1] to-[#e7dfd4] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-white/40 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8a847b]">
                        Condition pathway
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Understanding anxiety without reducing it to a single body
                        state
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Alertness
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Feeling tense or on edge
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Overwhelm
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Everyday demands may feel harder
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Sleep
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Difficulty getting to sleep
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Anxiety and anxiety disorders
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The nervous system is part of anxiety, not the whole explanation
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Anxiety can involve thoughts, feelings, behaviour and bodily
              sensations. Its causes and course are shaped by social,
              psychological and biological factors rather than one measure of
              activation.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Generalised anxiety disorder, panic disorder and other anxiety
              disorders are not interchangeable labels. A clinical assessment
              considers distress, effects on daily life and relevant physical or
              mental health conditions, not only a list of sensations.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This page offers orientation, not a diagnostic checklist.
              Recognising an example below is a reason to consider your situation
              and support needs, not proof of low vagal tone, a damaged vagus
              nerve or a need for a stimulation device.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/fight-flight-freeze"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore fight, flight, freeze
              </Link>

              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore recovery
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key pillars
            </p>

            <div className="mt-8 space-y-5">
              {anxietyPillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Your difficulties deserve attention, not a score from this page
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Discuss how anxiety affects sleep, relationships, work or daily
                activities with a qualified professional when it is persistent or
                difficult to cope with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Experiences people may notice
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Thoughts, sensations and behaviour can all be part of the picture
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The examples below describe possible experiences, not a complete set
              of diagnostic criteria. Similar difficulties can occur for other
              reasons. Do not assume a new or concerning physical symptom is
              simply anxiety.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonAnxietyPatterns.map((item) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Connected topics
            </p>

            <div className="mt-8 space-y-5">
              {connectedTopics.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                  >
                    {item.linkLabel}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Further reading is not the same as clinical care
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The linked Learn pages explain related concepts. They do not
                assess your symptoms or replace care for an anxiety disorder.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Assessment and support
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Effective treatments exist; calming is not the only option
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              NICE describes a stepped approach to generalised anxiety disorder in
              adults. Depending on individual needs, options include supported
              self-help, psychological therapies such as cognitive behavioural
              therapy, and medication considered with a clinician.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The choice depends on an assessment, preferences and prior
              treatment. Everyday routines may support well-being, but Neuvago is
              not presented here as a treatment for anxiety disorders or a
              substitute for recommended care.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/emotional-regulation-and-the-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore emotional regulation
              </Link>

              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore calming
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sources-and-limits" data-neuvago-source-pilot="1e4d6" className="border-y border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#84796e]">Sources and interpretation limits</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-4xl">Where this explanation comes from</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These references provide definitions, clinical guidance and research context. They are not studies of Neuvago and do not establish a Neuvago treatment effect.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sourceReferences.map((source, index) => (
              <article key={source.key} id={`source-${source.key}`} data-source-key={source.key} data-source-kind={source.kind} className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-black/6 bg-white/70 p-6">
                <p className="text-xs uppercase tracking-[0.12em] text-[#7b7167]">{index + 1}. {source.design} · {source.dateLabel}</p>
                <h3 className="mt-3 break-words text-xl font-medium leading-tight">{source.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{source.authors}. {source.publication}.</p>
                <p className="mt-3 text-sm leading-7 text-[#625b53]">{source.scope}</p>
                <div className="mt-4 flex min-w-0 flex-wrap gap-x-5 gap-y-2 text-sm text-[#514c45]">
                  {source.pmid ? <span>PMID: {source.pmid}</span> : null}
                  {source.doi ? <span className="break-all">DOI: {source.doi}</span> : null}
                </div>
                <a href={source.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4 transition hover:decoration-black">Read {source.linkLabel}</a>
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
                Continue learning, without replacing care
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Explore related concepts at your own pace
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b564e] md:text-lg">
                These links offer general educational reading. They are not a
                personalised treatment plan, a test of your vagus nerve or
                evidence that Neuvago treats an anxiety disorder.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/emotional-regulation-and-the-nervous-system"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore emotional regulation
                </Link>

                <Link
                  href="/learn/fight-flight-freeze"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore fight, flight, freeze
                </Link>

                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore calming
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
