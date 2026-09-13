import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Burnout and Nervous System Recovery | Neuvago",
  description:
    "Learn how burnout connects to the nervous system, including exhaustion, lower capacity, thin recovery, poor sleep, and why restoration can feel harder after prolonged stress.",
  alternates: {
    canonical: "/conditions/burnout",
  },
  openGraph: {
    title: "Burnout and Nervous System Recovery | Neuvago",
    description: "Learn how burnout connects to the nervous system, including exhaustion, lower capacity, thin recovery, poor sleep, and why restoration can feel harder after prolonged stress.",
    url: "/conditions/burnout",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnout and Nervous System Recovery | Neuvago",
    description: "Learn how burnout connects to the nervous system, including exhaustion, lower capacity, thin recovery, poor sleep, and why restoration can feel harder after prolonged stress.",
  },
}

const burnoutPillars = [
  {
    title: "An occupational definition",
    description:
      "Here, burnout refers to the work-related concept described by WHO, not every experience of depleted energy or emotional strain.",
  },
  {
    title: "Exhaustion is not the whole construct",
    description:
      "Research distinguishes burnout from exhaustion alone and examines its relationship with mental health without making the terms interchangeable.",
  },
  {
    title: "The context needs attention",
    description:
      "Working conditions, support and appropriate healthcare belong in the discussion. The answer is not simply to regulate your nervous system better.",
  },
]

const commonBurnoutPatterns = [
  {
    title: "Exhaustion in relation to work",
    description:
      "Energy may feel depleted in connection with sustained demands at work.",
  },
  {
    title: "Distance or cynicism about work",
    description:
      "A person may feel increasingly detached from their job or negative about it.",
  },
  {
    title: "Reduced effectiveness at work",
    description:
      "A person may feel less effective or able to accomplish what their work requires.",
  },
  {
    title: "Other symptoms need their own assessment",
    description:
      "Persistent fatigue, sleep difficulties or low mood should not automatically be attributed to burnout. Similar problems can have other causes.",
  },
]

const connectedTopics = [
  {
    title: "Recovery and regulation",
    description:
      "Background on everyday rest and job-stress recovery, not a measure of your capacity or a promised recovery schedule.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Signs of a dysregulated nervous system",
    description:
      "Everyday descriptions with limits: the examples are not diagnostic criteria for burnout or autonomic disease.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Explore signs of dysregulation",
  },
  {
    title: "Emotional regulation and the nervous system",
    description:
      "Background on emotions and regulation strategies, not evidence that burnout is caused by insufficient emotional capacity.",
    href: "/learn/emotional-regulation-and-the-nervous-system",
    linkLabel: "Explore emotional regulation",
  },
  {
    title: "Sleep",
    description:
      "General reading about sleep. Persistent sleep difficulties warrant attention rather than being assumed to be only burnout.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
]

const sourceReferences = [
  {
    "key": "who-burnout",
    "kind": "official-guidance",
    "design": "Classification clarification",
    "dateLabel": "28 May 2019",
    "title": "Burn-out an occupational phenomenon: International Classification of Diseases",
    "authors": "World Health Organization",
    "publication": "WHO ICD-11 clarification",
    "scope": "Defines burnout in an occupational context and distinguishes its ICD-11 classification from a medical condition. This does not make exhaustion outside work unimportant or remove the need for care.",
    "pmid": null,
    "doi": null,
    "href": "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases",
    "linkLabel": "World Health Organization"
  },
  {
    "key": "maslach-2016",
    "kind": "scholarly-review",
    "design": "Research review",
    "dateLabel": "2016",
    "title": "Understanding the burnout experience: recent research and its implications for psychiatry",
    "authors": "Maslach C, Leiter MP",
    "publication": "World Psychiatry",
    "scope": "Reviews occupational burnout, measurement and its relationship with mental health. It is not a trial of Neuvago and does not establish a single biological test or universal recovery plan.",
    "pmid": "27265691",
    "doi": "10.1002/wps.20311",
    "href": "https://pubmed.ncbi.nlm.nih.gov/27265691/",
    "linkLabel": "the PubMed record"
  },
  {
    "key": "who-work",
    "kind": "official-guidance",
    "design": "Workplace mental-health guidance",
    "dateLabel": "2 September 2024",
    "title": "Mental health at work",
    "authors": "World Health Organization",
    "publication": "WHO fact sheet",
    "scope": "Describes workplace risks and organisational responses alongside individual support. These recommendations concern mental health at work broadly, not proof that a particular routine treats burnout.",
    "pmid": null,
    "doi": null,
    "href": "https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work",
    "linkLabel": "World Health Organization"
  }
] as const

export default function BurnoutPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Burnout and Nervous System Recovery | Neuvago",
    description: "Learn how burnout connects to the nervous system, including exhaustion, lower capacity, thin recovery, poor sleep, and why restoration can feel harder after prolonged stress.",
    path: "/conditions/burnout",
    articleSection: "Conditions",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Burnout, Recovery and the Nervous System", path: "/conditions/burnout" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions-burnout" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Conditions / Burnout
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Understanding burnout through recovery, capacity, and the nervous system
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Burnout has a specific meaning in WHO’s ICD-11: an occupational
              phenomenon associated with sustained workplace stress that has not
              been adequately addressed. It involves exhaustion, detachment or
              cynicism about work, and reduced effectiveness at work. It is not a
              catch-all label for tiredness or distress in every area of life.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Sources: <a className="underline underline-offset-4" href="#source-who-burnout">[1] WHO ICD-11 clarification</a> · <a className="underline underline-offset-4" href="#source-maslach-2016">[2] Research review</a> · <a className="underline underline-offset-4" href="#source-who-work">[3] WHO fact sheet</a></p>
            <p data-neuvago-interpretation-note="1e4d6" className="mt-5 text-sm leading-7 text-[#625b53]">The WHO definition used here is work-related. Tiredness, emotional numbness or poor sleep alone cannot confirm burnout, autonomic dysfunction or a need for vagus-nerve stimulation.</p>
            <aside data-neuvago-care-note="1e4d6" className="mt-6 rounded-2xl border border-black/10 bg-white/65 p-5">
              <h2 className="text-base font-medium">When to seek individual advice</h2>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">If you have felt tired for weeks without a clear explanation, or tiredness affects daily life, seek medical advice rather than assuming it is only burnout. Workplace support may be relevant alongside healthcare. If you or someone else is in immediate danger or cannot stay safe, contact local emergency services now.</p>
              <a href="https://www.nhs.uk/symptoms/tiredness-and-fatigue/" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm underline underline-offset-4">NHS guidance: tiredness and fatigue</a>
            </aside>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/conditions/sleep"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore sleep
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
                        Understanding exhaustion in its work and health context
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Exhaustion
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Energy depleted in relation to work
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Distance from work
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Detachment or cynicism
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Efficacy
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Feeling less effective at work
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
              What burnout means here
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Keep the workplace context visible
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              WHO places burnout among factors that can influence health or
              contact with health services, rather than classifying it as a
              medical condition in ICD-11. This is a classification distinction,
              not a reason to dismiss distress or delay seeking help.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Research reviews examine burnout in relation to work, measurement
              and mental health. Burnout should not be equated with exhaustion
              alone, nor used to decide from symptoms whether someone has
              depression, an anxiety disorder or another health condition.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Sleep problems, low mood and persistent fatigue need attention in
              their own right. Exhaustion from other areas of life can be serious
              even when it does not fit this occupational definition. The
              appropriate response is support and assessment, not stretching one
              label to explain everything.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/learn/signs-of-a-dysregulated-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore signs of dysregulation
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key pillars
            </p>

            <div className="mt-8 space-y-5">
              {burnoutPillars.map((item) => (
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
                A workplace problem is not simply a personal failure to relax
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Working conditions and available support matter. An individual
                routine does not remove excessive demands, bullying or other risks
                at work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Three dimensions, with an important boundary
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Burnout is more than an exhaustion checklist
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The first three cards summarise the dimensions in the WHO
              definition. They are not a scoring tool. The fourth explains why
              other symptoms still deserve individual assessment rather than an
              automatic burnout label.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonBurnoutPatterns.map((item) => (
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
                Reading about recovery does not address every workplace risk
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The linked pages offer background on rest, emotions and sleep.
                They are not an occupational assessment or evidence of a treatment
                effect.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Support at work and beyond
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Support should include working conditions, not only self-care
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              WHO recommends organisational action on workplace mental-health
              risks, including attention to workload, control, working hours and
              support. Where relevant, a discussion with a manager, occupational
              health service or worker representative can help identify practical
              changes.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Individual clinical care may also be needed. A rest routine cannot
              resolve every work-related problem, and this page does not recommend
              Neuvago as a treatment for burnout or set a universal timetable for
              recovery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/learn/emotional-regulation-and-the-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore emotional regulation
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
                Continue learning, without replacing support
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Explore rest, emotions and sleep as background topics
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b564e] md:text-lg">
                These links are general educational resources, not a diagnosis or
                a plan for returning to work. They do not show that Neuvago treats
                burnout or replace workplace support and appropriate healthcare.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/recovery-and-regulation"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore recovery
                </Link>

                <Link
                  href="/conditions/sleep"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore sleep
                </Link>

                <Link
                  href="/learn/signs-of-a-dysregulated-nervous-system"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore signs of dysregulation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
