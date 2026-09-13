import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Signs of a Dysregulated Nervous System | Neuvago",
  description:
    "Learn the common signs of a dysregulated nervous system, how they show up in everyday life, and how they connect to stress, sleep, recovery, anxiety, and shutdown.",
  alternates: {
    canonical: "/learn/signs-of-a-dysregulated-nervous-system",
    languages: {
      en: "/learn/signs-of-a-dysregulated-nervous-system",
      "nb-NO": "/no/kunnskap/tegn-pa-dysregulert-nervesystem",
    },
  },
  openGraph: {
    title: "Signs of a Dysregulated Nervous System | Neuvago",
    description: "Learn the common signs of a dysregulated nervous system, how they show up in everyday life, and how they connect to stress, sleep, recovery, anxiety, and shutdown.",
    url: "/learn/signs-of-a-dysregulated-nervous-system",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signs of a Dysregulated Nervous System | Neuvago",
    description: "Learn the common signs of a dysregulated nervous system, how they show up in everyday life, and how they connect to stress, sleep, recovery, anxiety, and shutdown.",
  },
}

const keyPoints = [
  {
    title: "Experiences are not diagnostic criteria",
    description:
      "Tension, poor sleep, overwhelm and emotional flatness describe experiences. Recognising one or several does not establish a particular condition.",
  },
  {
    title: "Different descriptions may have different explanations",
    description:
      "Feeling on edge and feeling withdrawn are not interchangeable. This page cannot determine their cause or reduce them to one nervous-system state.",
  },
  {
    title: "Context is more useful than a checklist score",
    description:
      "Timing, changes from your usual experience and effects on daily life can help frame a discussion with a healthcare professional.",
  },
]

const commonSigns = [
  {
    title: "Feeling persistently tense",
    description:
      "You might describe feeling on edge or finding it hard to settle after a demanding situation.",
  },
  {
    title: "Trouble winding down",
    description:
      "An evening may feel restless, mentally busy or less restful than you expected.",
  },
  {
    title: "Rest does not feel refreshing",
    description:
      "You might still feel tired after resting. Persistent tiredness should not automatically be attributed to a regulation problem.",
  },
  {
    title: "Feeling overwhelmed by input",
    description:
      "Noise, screens or everyday demands may feel harder to manage than they used to.",
  },
  {
    title: "Anxiety or unease",
    description:
      "You might describe worry, restlessness or watchfulness, with or without an obvious trigger.",
  },
  {
    title: "Emotional flatness or withdrawal",
    description:
      "Feeling numb, blank or withdrawn deserves its own context. It should not automatically be labelled a freeze response or a low-vagal state.",
  },
  {
    title: "Ordinary demands feel harder",
    description:
      "Tasks that used to feel manageable may seem more difficult, or require more effort than you expect.",
  },
  {
    title: "Feeling tired but alert",
    description:
      "You might feel worn out while thoughts remain busy or settling into rest still feels difficult.",
  },
]

const whyPeopleSearch = [
  {
    title: "They feel like something is off",
    description:
      "Many people search for these signs because they can feel that the body is not settling, recovering, or responding the way it normally does.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They do not know how to name the pattern",
    description:
      "Often the search begins when stress, anxiety, sleep trouble, shutdown, or overstimulation keep showing up without one clear explanation tying them together.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "They want to understand symptoms in context",
    description:
      "The question may be whether several changes are connected. This page cannot determine whether they share one cause or need different explanations.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are not searching for theory first. They are trying to understand why stress, sleep, resilience, and recovery all seem harder at the same time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "The broader framework for understanding how the body moves between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A related guide to general approaches and their limits, without choosing an intervention for the reader.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Why your body feels stuck in stress",
    description:
      "A related guide to persistent stress experiences and the limits of explanations about unfinished activation.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "What regulation feels like",
    description:
      "A useful contrast page for understanding what stronger steadiness, return, and recovery may feel like in practice.",
    href: "/learn/what-nervous-system-regulation-feels-like",
    linkLabel: "Explore felt regulation",
  },
]

export default function SignsOfADysregulatedNervousSystemPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Signs of a Dysregulated Nervous System | Neuvago",
    description: "Learn the common signs of a dysregulated nervous system, how they show up in everyday life, and how they connect to stress, sleep, recovery, anxiety, and shutdown.",
    path: "/learn/signs-of-a-dysregulated-nervous-system",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Common Signs of a Dysregulated Nervous System", path: "/learn/signs-of-a-dysregulated-nervous-system" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-signs-of-a-dysregulated-nervous-system" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Signs of a dysregulated nervous system
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              What are the common signs of a dysregulated nervous system?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              People use “dysregulated nervous system” to describe experiences such as feeling tense, overwhelmed, tired, restless or emotionally flat. These experiences can be worth discussing, but this page is not a diagnostic checklist. Several experiences occurring together do not establish one nervous-system cause.
            </p>

            <p data-neuvago-interpretation-note="1e4d5" className="mt-5 max-w-2xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm leading-7 text-[#5f5a52]">On this page, “dysregulated nervous system” is an everyday description, not a diagnosis. The examples do not measure vagal tone or establish autonomic dysfunction. The references explain stress physiology and the limits of treating experience, behaviour and physiology as the same thing.</p>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Research background: <a href="#source-17615391" className="underline decoration-black/25 underline-offset-4">McEwen BS (2007)</a> · <a href="#source-19809584" className="underline decoration-black/25 underline-offset-4">Mauss IB (2009)</a>.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore regulation
              </Link>

              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore calming
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
                        Describing experiences
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Notice what has changed without assuming one explanation for it
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Tension
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          Feeling on edge
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Flatness
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Feeling numb or withdrawn
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Daily life
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Rest may not feel refreshing
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
              Description and diagnosis
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A description of how you feel is not the same as a diagnosis of autonomic dysfunction
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Stress physiology involves communication between the brain and several body systems. That research provides context for stress responses; it does not make tension, fatigue or emotional flatness a specific test of nervous-system function.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              There is also a measurement distinction. What someone reports feeling, how they behave and what a physiological recording shows are related questions, not interchangeable answers. Feeling unsettled does not by itself tell us which biological process is responsible.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              The useful starting point is to describe what is happening, when it began and how it affects daily life, while leaving room for different explanations and individual assessment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-your-body-feels-stuck-in-stress"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stuck stress
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
              Key takeaways
            </p>

            <div className="mt-8 space-y-5">
              {keyPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#e9e1d6] p-5">
              <p className="text-sm font-medium text-[#1f1f1c]">
                Description can come before explanation
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Noticing a change is useful. Naming a cause requires more than recognising a phrase on a webpage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Examples, not a diagnostic score
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Everyday experiences can be described without treating them as a checklist for one condition
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The examples below describe possible experiences, not criteria for diagnosing dysregulation. There is no score, threshold or number of matching cards that confirms a disorder, and the list is not exhaustive.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commonSigns.map((item) => (
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                When several signs show up together
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                When several experiences overlap, context matters more than counting how many apply.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Consider the timing, what else was happening and whether the changes interfere with daily life. A cluster of experiences can help guide a conversation, but it does not prove they share one cause.
              </p>
            </div>

            <div>
              <Link
                href="/learn"
                className="inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore learning
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyPeopleSearch.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
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
                  <h3 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h3>
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
                Recognition is only the first step
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Related reading can explain terms and research limits. It cannot determine why a particular person is having symptoms.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              These experiences do not establish a damaged vagus nerve, low vagal tone or a single underlying disorder
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A description such as feeling wired, numb or overwhelmed is not itself a physiological measurement. The sources below are background on stress and emotion measurement, not evidence that this set of experiences identifies autonomic disease.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Persistent or worrying changes deserve individual attention rather than an assumed explanation based on nervous-system language. You do not need to match a set number of examples before asking for help.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/what-nervous-system-regulation-feels-like"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore what regulation feels like
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

      <section id="sources-and-limits" data-neuvago-source-pilot="1e4d5" aria-labelledby="sources-and-limits-title" className="border-y border-black/5 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">Sources and interpretation limits</p>
            <h2 id="sources-and-limits-title" className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">What these references explain — and what they do not</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These references support the distinctions described above. They are not studies of Neuvago and do not establish a product benefit, a diagnosis or evidence for every existing statement on this page.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article id="source-17615391" data-source-pmid="17615391" className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#756e65]">1. Stress physiology review · 2007</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-snug text-[#1f1f1c]">Physiology and neurobiology of stress and adaptation: central role of the brain</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">McEwen BS. Physiological Reviews.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Describes stress and adaptation across neural, endocrine and other body systems. It does not validate this page as a symptom checklist or diagnose autonomic dysfunction from everyday experiences.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f5a52]">
                <span className="break-all">PMID: 17615391</span>
                <span className="break-all">DOI: 10.1152/physrev.00041.2006</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17615391/" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">Read McEwen BS on PubMed</a>
            </article>
            <article id="source-19809584" data-source-pmid="19809584" className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#756e65]">2. Emotion measurement review · 2009</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-snug text-[#1f1f1c]">Measures of emotion: A review</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Mauss IB, Robinson MD. Cognition and Emotion.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Examines subjective, physiological and behavioural measures of emotion and why they are not interchangeable. It does not establish that feeling calm measures vagal tone or nervous-system health.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f5a52]">
                <span className="break-all">PMID: 19809584</span>
                <span className="break-all">DOI: 10.1080/02699930802204677</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/19809584/" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">Read Mauss IB on PubMed</a>
            </article>
          </div>
          <aside data-neuvago-care-note="1e4d5" aria-labelledby="individual-advice-title" className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-6">
            <h3 id="individual-advice-title" className="text-lg font-medium">When to seek individual advice</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5f5a52]">If you are struggling to cope with stress or the things you are trying are not helping, seek advice from a healthcare professional. Use local urgent services if you need immediate help; this page is not an assessment or a substitute for care.</p>
            <a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">NHS guidance: getting help with stress</a>
          </aside>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Keep exploring the broader picture
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Use these signs as the recognition point into regulation, calming, and what steadier support feels like
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The signs of a dysregulated nervous system are one of the most
                useful entry points into the Neuvago learning universe because
                they connect what people are actually experiencing with the
                larger picture of stress, sleep, recovery, anxiety, shutdown,
                and how the body returns.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore calming
                </Link>

                <Link
                  href="/learn/what-nervous-system-regulation-feels-like"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore felt regulation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/55">
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <Link
            href="/no/kunnskap/tegn-pa-dysregulert-nervesystem"
            className="inline-flex rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#f6f3ed]"
          >
            Les denne siden på norsk
          </Link>
        </div>
      </section>
</main>
  )
}
