import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "Tired but Can’t Relax | Wired and Stressed | Neuvago",
  description:
    "Learn why you can feel tired but unable to relax, and how this wired-but-tired pattern connects to stress, sleep, recovery, and nervous system regulation.",
  alternates: {
    canonical: "/learn/why-you-feel-tired-but-cant-relax",
    languages: {
      "en-US": "/learn/why-you-feel-tired-but-cant-relax",
      "nb-NO": "/no/kunnskap/trott-men-far-ikke-slappet-av",
      "x-default": "/learn/why-you-feel-tired-but-cant-relax",
    },
  },
  openGraph: {
    title: "Tired but Can’t Relax | Wired and Stressed | Neuvago",
    description: "Learn why you can feel tired but unable to relax, and how this wired-but-tired pattern connects to stress, sleep, recovery, and nervous system regulation.",
    url: "/learn/why-you-feel-tired-but-cant-relax",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tired but Can’t Relax | Wired and Stressed | Neuvago",
    description: "Learn why you can feel tired but unable to relax, and how this wired-but-tired pattern connects to stress, sleep, recovery, and nervous system regulation.",
  },
}

const commonExperiences = [
  "You feel exhausted, but your body still feels alert.",
  "You want rest, but your mind keeps scanning, planning, or looping.",
  "You finally stop moving, yet your system does not feel like it has actually landed.",
  "You are tired at night, but still do not feel fully downshifted.",
]

const whatItOftenMeans = [
  {
    title: "Tiredness and relaxation are not the same thing",
    description:
      "Feeling exhausted while mentally alert is a real experience. It does not tell us, on its own, which biological process is involved or why rest is difficult.",
  },
  {
    title: "Stress and sleep can interact",
    description:
      "Insomnia research examines how stress and arousal can affect sleep. People differ in their sensitivity, and the findings do not explain every episode of tiredness.",
  },
  {
    title: "There may be more than one explanation",
    description:
      "Sleep, health, mood, medicines and daily circumstances can matter. Difficulty relaxing is not proof that the body feels unsafe or that the vagus nerve is malfunctioning.",
  },
]

const everydayPatterns = [
  {
    title: "Evening exhaustion without real softness",
    description:
      "You reach the end of the day feeling completely spent, but the system still does not feel deeply settled.",
  },
  {
    title: "Mental activity that keeps running",
    description:
      "Thoughts continue reviewing, anticipating, planning, or looping even when you genuinely want to stop.",
  },
  {
    title: "Quiet that does not feel relieving",
    description:
      "The opportunity for rest is there, but your body does not fully receive it as rest in the way you hoped.",
  },
  {
    title: "Sleep that feels hard to enter",
    description:
      "You may feel sleepy, but not truly downshifted, which can make falling asleep or staying deeply relaxed feel harder.",
  },
]

const whyPeopleSearch = [
  {
    title: "They feel exhausted and wired at the same time",
    description:
      "Many people search for this because they are trying to understand the contradiction of feeling drained but still unable to fully come down.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "They cannot switch off at night",
    description:
      "Often the search is really about why the day is over, tiredness is present, but the body still does not feel ready for true rest.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They want to understand why calm does not follow tiredness",
    description:
      "The deeper question is often not ‘why am I tired?’ but ‘why doesn’t being tired lead to relief?’",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "They want a practical explanation",
    description:
      "Usually, people are searching for language that explains why fatigue and activation can coexist in the same body at the same time.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const connectedTopics = [
  {
    title: "Why your body feels stuck in stress",
    description:
      "A broader explanation of why activation can remain in the body even when the obvious stressor has passed.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "How to calm your nervous system",
    description:
      "The practical support page for understanding what may help when the system feels too activated to fully soften.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Explore calming",
  },
  {
    title: "Sleep",
    description:
      "A closer look at why rest may feel fragile, evening settling may feel difficult, and deeper restoration may be harder to access.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "Recovery and regulation",
    description:
      "A useful next step for understanding why the system may need more restoration, softer transitions, and more complete return.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
]

const clarifications = [
  {
    title: "The feeling alone does not identify the cause",
    description:
      "A stress-related explanation is one possibility, not a conclusion from this page. Persistent, unexplained or disruptive tiredness is a reason to seek individual advice.",
  },
  {
    title: "It does not mean the tiredness is fake",
    description:
      "The exhaustion can be completely real even when you still feel alert. Describing both parts of the experience is more useful than assuming a single nervous-system cause.",
  },
  {
    title: "Research models are not personal test results",
    description:
      "Arousal and worry are studied as possible contributors to sleep problems. Recognizing the description does not diagnose insomnia or establish a specific treatment need.",
  },
]

export default function WhyYouFeelTiredButCantRelaxPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "Tired but Can’t Relax | Wired and Stressed | Neuvago",
    description: "Learn why you can feel tired but unable to relax, and how this wired-but-tired pattern connects to stress, sleep, recovery, and nervous system regulation.",
    path: "/learn/why-you-feel-tired-but-cant-relax",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Why You Feel Tired but Can’t Relax", path: "/learn/why-you-feel-tired-but-cant-relax" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-why-you-feel-tired-but-cant-relax" />
      <section className="flex min-h-[80vh] items-center border-b border-black/5">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-32">
          <div className="flex max-w-3xl flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#6f6a61] shadow-sm">
              Learn / Sleep / Stress / Recovery
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Why you feel tired but can’t relax
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5a52] md:text-xl">
              You may feel exhausted and want rest, yet remain mentally busy or
              physically tense. Research on insomnia and worry offers possible
              explanations for difficulty settling, but this combination of feelings
              does not identify a single cause. It is not proof of a nervous-system
              disorder.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-5">
              <p data-neuvago-interpretation-note="1e4d4" className="text-sm leading-7 text-[#5f5a52]">
                Feeling tired but unable to relax is an experience, not a diagnosis. Research on insomnia and worry offers possible explanations, but it cannot identify the cause of your symptoms or show that your vagus nerve needs a reset.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#514c45]">
                Research context and limits:{" "}
                <a href="#source-30046255" className="underline underline-offset-4">Kalmbach DA et al. (2018) [1]</a>{"; "}
                <a href="#source-16439263" className="underline underline-offset-4">Brosschot JF (2006) [2]</a>.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-your-body-feels-stuck-in-stress"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stuck stress
              </Link>
              <Link
                href="/conditions/sleep"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Explore sleep
              </Link>
              <Link
                href="/no/kunnskap/trott-men-far-ikke-slappet-av"
                data-language-counterpart="nb-NO"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Les denne siden på norsk
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)] backdrop-blur-sm md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-medium text-[#6f6a61]">
                  Common felt experience
                </p>
                <span className="rounded-full bg-[#f2eee8] px-3 py-1 text-xs font-medium text-[#6b655d]">
                  Often called “wired but tired”
                </span>
              </div>

              <div className="space-y-4">
                {commonExperiences.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-black/5 bg-[#fcfaf7] p-4"
                  >
                    <p className="text-sm leading-7 text-[#4f4a43]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-[#f2eee8] p-5">
                <p className="text-sm leading-7 text-[#5f5a52]">
                  In everyday life, this can feel strangely confusing. You may
                  assume that once you are tired enough, rest should happen
                  naturally. But tiredness and downshifting are not always the
                  same event in the body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8] border-b border-black/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              What this often means
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Feeling tired does not always mean feeling ready for sleep
            </h2>
          </div>

          <div className="space-y-4">
            {whatItOftenMeans.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-white/65 p-5 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-8 text-[#4f4a43]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              Common patterns
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              What this often feels like in everyday life
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5a52]">
              The experience is often quieter and more familiar than people
              expect. It may simply feel like the body never fully lands.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {everydayPatterns.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[#5f5a52]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8] border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="flex max-w-3xl flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              When tiredness does not bring relief
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              The contradiction is simple to describe but frustrating to live with: you
              can feel exhausted without feeling able to relax.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5a52]">
              The question is often not just “why am I tired?” It is “why does
              being tired not lead to real relief?”
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyPeopleSearch.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/65 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[#5f5a52]">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              Connected topics
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              This experience sits naturally inside a larger sleep-stress-recovery picture
            </h2>
          </div>

          <div className="space-y-4">
            {connectedTopics.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-white/60 p-5 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-8 text-[#4f4a43]">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8] border-b border-black/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-10 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              What this does and does not mean
            </h2>
          </div>

          <div className="space-y-4">
            {clarifications.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-black/5 bg-white/65 p-5 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-8 text-[#4f4a43]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sources-and-limits" data-neuvago-source-pilot="1e4d4" className="border-y border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">Sources and interpretation limits</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">What this research can and cannot explain</h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">These references provide context for the explanations discussed here. They are not studies of Neuvago and do not establish a product benefit. They do not make every everyday description on this page a measured biological finding.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article id="source-30046255" data-source-pmid="30046255" className="min-w-0 scroll-mt-24 rounded-3xl border border-black/6 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#84796e]">1. Insomnia review · 2018</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-tight tracking-[-0.025em]">Hyperarousal and sleep reactivity in insomnia: current insights</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Kalmbach DA et al. Nature and Science of Sleep.</p>
              <p className="mt-3 text-sm leading-7 text-[#625b53]">Discusses arousal and sensitivity of sleep to stress in insomnia research, with uncertainty about specific mechanisms. This does not diagnose insomnia or a nervous-system problem from the feeling of being tired but alert.</p>
              <div className="mt-5 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm text-[#514c45]">
                <span className="break-all">PMID: 30046255</span>
                <span className="break-all">DOI: 10.2147/NSS.S138823</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/30046255/" target="_blank" rel="noreferrer" className="mt-5 inline-flex break-all text-sm font-medium underline underline-offset-4">Read Kalmbach DA et al. on PubMed</a>
            </article>
            <article id="source-16439263" data-source-pmid="16439263" className="min-w-0 scroll-mt-24 rounded-3xl border border-black/6 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[#84796e]">2. Hypothesis and evidence review · 2006</p>
              <h3 className="mt-3 break-words text-xl font-medium leading-tight tracking-[-0.025em]">The perseverative cognition hypothesis: a review of worry, prolonged stress-related physiological activation, and health</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">Brosschot JF, Gerin W, Thayer JF. Journal of Psychosomatic Research.</p>
              <p className="mt-3 text-sm leading-7 text-[#625b53]">Reviews preliminary support for worry and rumination prolonging stress-related activation. It is a proposed explanation, not a universal cause of symptoms or evidence that stress is trapped in the body.</p>
              <div className="mt-5 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm text-[#514c45]">
                <span className="break-all">PMID: 16439263</span>
                <span className="break-all">DOI: 10.1016/j.jpsychores.2005.06.074</span>
              </div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/16439263/" target="_blank" rel="noreferrer" className="mt-5 inline-flex break-all text-sm font-medium underline underline-offset-4">Read Brosschot JF on PubMed</a>
            </article>
          </div>
          <aside data-neuvago-care-note="1e4d4" className="mt-8 rounded-3xl border border-black/10 bg-white/70 p-6">
            <h3 className="text-lg font-medium">When to seek individual advice</h3>
            <p className="mt-3 text-sm leading-7 text-[#5f5a52]">If tiredness lasts for weeks without a clear explanation or affects daily life, seek advice from a healthcare professional rather than assuming it is only stress or a regulation problem.</p>
            <a href="https://www.nhs.uk/symptoms/tiredness-and-fatigue/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm underline underline-offset-4">NHS guidance: tiredness and fatigue</a>
          </aside>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] p-8 shadow-[0_20px_60px_rgba(31,31,28,0.06)] md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a756c]">
                Keep exploring the broader picture
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Use this wired-but-tired feeling as the bridge into explanation, calming, and deeper recovery
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5b564e]">
                Feeling tired but unable to relax often makes much more sense
                when viewed through the lens of stress load, nervous system state,
                evening downshifting, and recovery capacity. The next step is
                usually not more force, but better understanding of why the body
                still feels “on.”
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/learn/why-your-body-feels-stuck-in-stress"
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore stuck stress
                </Link>
                <Link
                  href="/learn/how-to-calm-your-nervous-system"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Explore calming
                </Link>
                <Link
                  href="/learn/recovery-and-regulation"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
                >
                  Explore recovery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
