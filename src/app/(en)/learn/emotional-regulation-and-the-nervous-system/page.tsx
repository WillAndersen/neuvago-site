import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Emotional Regulation and the Nervous System | Neuvago",
  description:
    "Learn how emotional regulation connects to the nervous system, including overwhelm, reactivity, shutdown, emotional recovery, and how the body carries emotion in everyday life.",
  alternates: {
    canonical: "/learn/emotional-regulation-and-the-nervous-system",
  },
  openGraph: {
    title: "Emotional Regulation and the Nervous System | Neuvago",
    description: "Learn how emotional regulation connects to the nervous system, including overwhelm, reactivity, shutdown, emotional recovery, and how the body carries emotion in everyday life.",
    url: "/learn/emotional-regulation-and-the-nervous-system",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Regulation and the Nervous System | Neuvago",
    description: "Learn how emotional regulation connects to the nervous system, including overwhelm, reactivity, shutdown, emotional recovery, and how the body carries emotion in everyday life.",
  },
}

const keyPoints = [
  {
    title: "Regulation is not the same as suppression",
    description:
      "Changing how a situation is interpreted and holding back an outward expression are different strategies with different possible outcomes.",
  },
  {
    title: "Feeling, expression and physiology are distinct",
    description:
      "A person can look composed without feeling calm. A subjective account is important but does not directly measure nervous-system capacity.",
  },
  {
    title: "Group findings are not an individual diagnosis",
    description:
      "Studies linking regulation strategies and symptoms do not establish one cause for every experience of overwhelm, reactivity or flatness.",
  },
]

const howItOftenShowsUp = [
  {
    title: "Overwhelm",
    description:
      "Someone may describe feelings as too intense or difficult to manage. This is an experience, not a measurement of how much a nervous system can carry.",
  },
  {
    title: "Reactivity",
    description:
      "Irritation or a stronger response than expected may prompt reflection. A reaction on its own does not identify a disorder or a specific biological cause.",
  },
  {
    title: "Emotional flatness",
    description:
      "Feeling numb, blank or withdrawn is different from choosing not to show an emotion. Neither can be diagnosed as a particular defensive state from this page.",
  },
  {
    title: "Feelings that linger",
    description:
      "Emotion may still feel present after a difficult event. That does not establish that a response is trapped or must be completed by a particular technique.",
  },
]

const whatTheTopicExplains = [
  {
    title: "Experience and expression can differ",
    description:
      "Feeling an emotion and showing it outwardly are related but distinct. The research does not treat a composed appearance as proof of internal calm.",
  },
  {
    title: "Strategies are not interchangeable",
    description:
      "Reappraisal and suppression act differently in the research reviewed here. The page does not prescribe one strategy for every person and context.",
  },
  {
    title: "Associations need careful interpretation",
    description:
      "Links between strategies and symptoms are group-level findings. They do not prove that one strategy caused a particular person’s symptoms.",
  },
  {
    title: "Daily functioning deserves attention",
    description:
      "What a feeling means in daily life can guide a conversation about support without turning it into a score for autonomic balance.",
  },
]

const whyPeopleSearch = [
  {
    title: "They feel emotions too strongly",
    description:
      "Many people search for emotional regulation because emotions feel too fast, too intense, too heavy, or too difficult to carry with steadiness.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They have trouble coming back down",
    description:
      "Often the real question is why emotions linger for so long and why the body and mind do not easily return after stress, conflict, or emotional load.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "They are trying to understand reactivity or shutdown",
    description:
      "The search often begins when someone notices sharper reactions, emotional flooding, or emotional flatness and wants a clearer explanation of the pattern.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Explore fight, flight, freeze",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are looking for language that connects emotion, stress, nervous system state, recovery, and capacity in a way that feels real and usable.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "Anxiety",
    description:
      "A related condition page for understanding how emotional regulation often overlaps with unease, alertness, watchfulness, and difficulty settling.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "Fight, flight, freeze",
    description:
      "A related guide distinguishing defensive responses studied in research from everyday descriptions of overwhelm or emotional flatness.",
    href: "/learn/fight-flight-freeze",
    linkLabel: "Explore fight, flight, freeze",
  },
  {
    title: "Recovery and regulation",
    description:
      "A related guide to recovery, daily experience and the limits of inferring a particular physiological state.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "How to calm your nervous system",
    description:
      "A guide to general approaches and their limits, not a personalised treatment recommendation for emotional difficulties.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
]

export default function EmotionalRegulationAndTheNervousSystemPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Emotional Regulation and the Nervous System | Neuvago",
    description: "Learn how emotional regulation connects to the nervous system, including overwhelm, reactivity, shutdown, emotional recovery, and how the body carries emotion in everyday life.",
    path: "/learn/emotional-regulation-and-the-nervous-system",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Emotional Regulation and the Nervous System", path: "/learn/emotional-regulation-and-the-nervous-system" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-emotional-regulation-and-the-nervous-system" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Emotional regulation and the nervous system
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              How does emotional regulation connect to the nervous system in everyday life?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Emotion regulation concerns how people influence their emotions, including how they interpret a situation and how they express a response. Thoughts, behaviour and bodily responses can all be relevant. That does not mean there is one measurable “nervous system capacity” that explains every difficult feeling.
            </p>

            <p data-neuvago-interpretation-note="1e4d5" className="mt-5 max-w-2xl rounded-2xl border border-black/10 bg-white/60 p-4 text-sm leading-7 text-[#5f5a52]">The cited research distinguishes emotion-regulation strategies and their outcomes. It does not measure a single emotional carrying capacity, establish that feelings are stored in the body or diagnose a reader from overwhelm, reactivity or flatness.</p>
            <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Research background: <a href="#source-12212647" className="underline decoration-black/25 underline-offset-4">Gross JJ (2002)</a> · <a href="#source-20015584" className="underline decoration-black/25 underline-offset-4">Aldao A (2010)</a>.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore recovery
              </Link>

              <Link
                href="/conditions/anxiety"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore anxiety
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
                        Emotion and response
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        Distinguish what is felt, what is expressed and what a study actually measures
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Experience
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What a person reports feeling
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Expression
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What is shown outwardly
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Context
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What is happening around the response
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
              Different strategies and outcomes
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Emotion regulation is not simply suppressing feelings or forcing the body to look calm
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              One research distinction is between reappraisal, which changes how a situation is interpreted, and suppression, which limits outward expression. A strategy can affect what a person shows differently from what they feel or what is recorded physiologically.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Research also examines associations between regulation strategies and mental-health symptoms. These findings describe patterns across groups; they do not establish why one person feels overwhelmed, identify a diagnosis or show that emotions are stored in the body.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              This page uses everyday examples to make those distinctions easier to discuss. It is not a personalised treatment plan or a way to measure how much emotional load a nervous system can carry.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/fight-flight-freeze"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore fight, flight, freeze
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
                Context and outcomes are different questions
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Ask what someone is experiencing, how they respond and what matters in that situation, rather than inferring a hidden capacity from a reaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              How it often shows up
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Overwhelm, reactivity and emotional flatness describe experiences, not one shared diagnosis
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A person might describe feelings as intense, quick to arise, hard to express or slow to pass. The examples below are not diagnostic criteria, and emotional flatness does not by itself establish a particular defensive or autonomic state.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {howItOftenShowsUp.map((item) => (
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
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Distinctions that help
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The value is in separating the experience, the response and the possible explanations
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              The same outward response can leave important questions unanswered. Looking composed does not prove that someone feels calm; an intense reaction does not on its own identify a cause. Research findings need to be interpreted at the level of the strategy and outcome actually studied.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatTheTopicExplains.map((item) => (
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

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                When emotions feel harder to carry
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Difficult feelings deserve context, not a single explanation about nervous-system capacity.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The practical questions may be what happens around a difficult feeling, how it affects daily life and when additional support is needed. The research below does not turn those questions into a self-diagnosis.
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
                Keep the experience and its explanation separate
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Related topics can offer language and context while leaving individual causes and treatment needs open to assessment.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Support should not require suppressing every emotion or assuming a single bodily cause
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Emotions do not have to disappear for a conversation about support to be useful. Research on strategies can inform that conversation, but the summaries here do not select a treatment for an individual reader.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Neither general emotion-regulation research nor an association with symptoms establishes that Neuvago treats emotional dysregulation, anxiety or another condition. Persistent distress or difficulty coping may need individual professional support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/how-to-calm-your-nervous-system"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore calming
              </Link>

              <Link
                href="/learn/recovery-and-regulation"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore recovery
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
            <article id="source-12212647" data-source-pmid="12212647" className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#756e65]">1. Emotion regulation review · 2002</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-snug text-[#1f1f1c]">Emotion regulation: affective, cognitive, and social consequences</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Gross JJ. Psychophysiology.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Reviews reappraisal and suppression, with different consequences for emotional experience, expression and physiology. It is not a universal prescription to suppress feelings, a diagnostic tool or a study of Neuvago.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f5a52]">
                <span className="break-all">PMID: 12212647</span>
                <span className="break-all">DOI: 10.1017/s0048577201393198</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/12212647/" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">Read Gross JJ on PubMed</a>
            </article>
            <article id="source-20015584" data-source-pmid="20015584" className="min-w-0 scroll-mt-24 rounded-[1.5rem] border border-black/10 bg-white/70 p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#756e65]">2. Meta-analytic review · 2010</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-snug text-[#1f1f1c]">Emotion-regulation strategies across psychopathology: A meta-analytic review</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Aldao A, Nolen-Hoeksema S, Schweizer S. Clinical Psychology Review.</p>
              <p className="mt-4 text-sm leading-7 text-[#5f5a52]">Synthesises associations between emotion-regulation strategies and mental-health symptoms. Associations vary across samples and do not establish an individual diagnosis, a single cause or a product treatment effect.</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5f5a52]">
                <span className="break-all">PMID: 20015584</span>
                <span className="break-all">DOI: 10.1016/j.cpr.2009.11.004</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/20015584/" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4">Read Aldao A on PubMed</a>
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
                Use emotional regulation as the emotional-capacity bridge into
                overwhelm, reactivity, recovery, and steadier return
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Emotional regulation is one of the strongest bridge topics in
                the Neuvago learning universe because it connects how people
                feel internally with the bigger picture of stress, anxiety,
                shutdown, recovery, and what it means for the body to carry
                emotion with more flexibility over time.
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
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore recovery
                </Link>

                <Link
                  href="/conditions/anxiety"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore anxiety
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
