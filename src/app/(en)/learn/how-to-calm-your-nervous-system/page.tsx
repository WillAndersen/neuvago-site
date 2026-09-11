import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data"

export const metadata = {
  title:
    "How to Calm Your Nervous System | Neuvago",
  description:
    "Practical, evidence-informed ways to calm a stressed or overactivated nervous system, including slower breathing, reducing input, movement, relaxation, sleep, and when to seek more support.",
  alternates: {
    canonical: "/learn/how-to-calm-your-nervous-system",
    languages: {
      "en-US": "/learn/how-to-calm-your-nervous-system",
      "nb-NO": "/no/kunnskap/hvordan-roe-ned-nervesystemet",
      "x-default": "/learn/how-to-calm-your-nervous-system",
    },
  },
  openGraph: {
    title: "How to Calm Your Nervous System | Neuvago",
    description: "Practical, evidence-informed ways to calm a stressed or overactivated nervous system, including slower breathing, reducing input, movement, relaxation, sleep, and when to seek more support.",
    url: "/learn/how-to-calm-your-nervous-system",
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calm Your Nervous System | Neuvago",
    description: "Practical, evidence-informed ways to calm a stressed or overactivated nervous system, including slower breathing, reducing input, movement, relaxation, sleep, and when to seek more support.",
  },
}

const keyPoints = [
  {
    title: "Calming is usually about conditions, not tricks",
    description:
      "In real life, the nervous system often settles more easily when stress load, overstimulation, transitions, sleep, and recovery are supported more steadily.",
  },
  {
    title: "The body often needs help coming down",
    description:
      "Many people do not struggle because they do not want calm. They struggle because the body does not easily follow once activation has been high for too long.",
  },
  {
    title: "What helps is often gentler than expected",
    description:
      "The strongest support is often not intensity, but more realistic rhythms that help the body feel safer, less overloaded, and more able to return over time.",
  },
]

const whatKeepsItActivated = [
  {
    title: "Too much stress load",
    description:
      "The system often stays activated when pressure, responsibility, uncertainty, or emotional load have been high for too long.",
  },
  {
    title: "Overstimulation",
    description:
      "Noise, screens, decisions, social input, multitasking, and too little space can keep the body from fully coming down.",
  },
  {
    title: "Thin recovery",
    description:
      "Even when the obvious stressor has passed, the system may still stay ‘on’ if recovery has not been strong enough to truly restore it.",
  },
  {
    title: "Difficult transitions",
    description:
      "Many people do not only struggle during stress. They struggle in the moments after it, when the system does not easily know how to shift gears.",
  },
]

const whatActuallyHelps = [
  {
    title: "Reduce what keeps the system on",
    description:
      "Calm becomes more possible when load, urgency, overstimulation, and unnecessary pressure are reduced rather than pushed through endlessly.",
  },
  {
    title: "Support recovery more consistently",
    description:
      "Sleep, rest, slower transitions, repetition, and steadier routines often matter more than one dramatic calming moment.",
  },
  {
    title: "Work with the body, not against it",
    description:
      "The goal is usually not to force instant calm, but to help the body feel supported enough to come down more gradually and more reliably.",
  },
  {
    title: "Repeat what is realistic",
    description:
      "The system often responds best to support that feels possible to return to regularly rather than techniques that feel intense or hard to sustain.",
  },
]

const quickCalmSteps = [
  {
    step: "1",
    title: "Reduce the input first",
    description:
      "Move away from unnecessary noise, screens, multitasking, or urgency if you can. A calming technique has less work to do when the environment is no longer adding as much demand.",
  },
  {
    step: "2",
    title: "Slow your breathing without forcing it",
    description:
      "Let breathing become slower and comfortable rather than taking very large breaths. A slightly longer, unforced exhale can feel easier for some people. Stop if you feel dizzy or more uncomfortable.",
  },
  {
    step: "3",
    title: "Release obvious muscle tension",
    description:
      "Unclench the jaw, drop the shoulders, loosen the hands, or use gentle progressive muscle relaxation. Reducing muscular effort can be a practical part of a broader relaxation response.",
  },
  {
    step: "4",
    title: "Choose gentle movement if stillness feels worse",
    description:
      "A slow walk or other comfortable movement can be easier than trying to sit perfectly still when activation is high. The goal is not to exhaust yourself into calm.",
  },
  {
    step: "5",
    title: "Use a predictable transition",
    description:
      "Dimmer light, fewer decisions, a familiar routine, and a quieter environment can help signal that the demanding part of the day is ending.",
  },
  {
    step: "6",
    title: "Repeat what is tolerable and useful",
    description:
      "Regulation is usually built through repeatable conditions, not a dramatic one-off hack. Keep the practices that genuinely help and drop the ones that make you feel worse.",
  },
]

const evidenceSummary = [
  {
    title: "Slow breathing",
    strength: "Supported, with important context",
    description:
      "Systematic reviews report that voluntary slow breathing can change heart rate and vagally mediated HRV and may reduce subjective arousal for some people. Breathing rate, depth, posture, and individual tolerance matter.",
    href: "https://pubmed.ncbi.nlm.nih.gov/35623448/",
    source: "Laborde S et al. Neuroscience & Biobehavioral Reviews, 2022.",
  },
  {
    title: "Relaxation techniques",
    strength: "Established self-management category",
    description:
      "Relaxation methods such as progressive muscle relaxation, guided imagery, and breathing are widely used to elicit a relaxation response. Evidence varies by technique and health condition, and these methods should not replace needed medical care.",
    href: "https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know",
    source: "U.S. National Center for Complementary and Integrative Health.",
  },
  {
    title: "Movement and exercise",
    strength: "Useful, but not an instant universal switch",
    description:
      "A 2024 systematic review found that acute exercise can reduce some physiological measures of later stress reactivity, especially blood pressure and cortisol, while heart-rate and self-report findings were less consistent.",
    href: "https://pubmed.ncbi.nlm.nih.gov/38468106/",
    source: "Morava A et al. Journal of Behavioral Medicine, 2024.",
  },
  {
    title: "Meditation, yoga, and breathing practices",
    strength: "Promising across studies, not uniform",
    description:
      "A systematic review of single-session yoga components found many studies reporting lower physiological or psychological stress reactivity, but methods and interventions varied.",
    href: "https://pubmed.ncbi.nlm.nih.gov/37822096/",
    source: "Stress and Health systematic review, 2023.",
  },
]

const commonQuestions = [
  {
    question: "How quickly should your nervous system calm down?",
    answer:
      "There is no universal timeline. A short breathing or relaxation practice may change how you feel within minutes, while recovery from sustained stress, poor sleep, illness, pain, or prolonged overload can take much longer.",
  },
  {
    question: "Does slow breathing activate the vagus nerve?",
    answer:
      "Slow breathing can change respiratory sinus arrhythmia and vagally mediated cardiac HRV, but that is not the same as directly measuring or 'switching on' the whole vagus nerve. Breathing also changes mechanical, chemical, and central nervous-system inputs.",
  },
  {
    question: "Is a low HRV score proof that your nervous system is dysregulated?",
    answer:
      "No. HRV can provide information about parts of cardiac autonomic regulation under defined conditions, but a consumer HRV value is not a whole-body nervous-system diagnosis.",
  },
  {
    question: "What if calming techniques make me feel worse?",
    answer:
      "Stop or modify the technique. Some people find slow breathing, stillness, body scanning, or inward attention uncomfortable. A quieter environment, gentle movement, or support from another person may be a better starting point.",
  },
]

const connectedTopics = [
  {
    title: "Nervous system regulation",
    description:
      "A broader framework for understanding how the body shifts between activation, settling, recovery, and return.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Explore regulation",
  },
  {
    title: "Why your body feels stuck in stress",
    description:
      "A deeper explanation of why the body may stay alert, tense, or hard to settle even when the obvious stress has passed.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
  {
    title: "Recovery and regulation",
    description:
      "A practical next step for understanding why calm often depends on recovery, rhythm, sleep, and how much the system is still carrying.",
    href: "/learn/recovery-and-regulation",
    linkLabel: "Explore recovery",
  },
  {
    title: "Sleep",
    description:
      "Sleep often becomes one of the clearest places calming either works or does not, especially when evenings feel too activated to fully soften.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
]

const searchReasons = [
  {
    title: "They feel too wired",
    description:
      "This question often comes up when the body feels too alert, tense, restless, or overstimulated for too much of the day.",
    href: "/conditions/stress",
    linkLabel: "Explore stress",
  },
  {
    title: "They cannot switch off at night",
    description:
      "Often the problem is really about evenings, sleep, and the frustration of feeling tired while the body still does not fully settle.",
    href: "/conditions/sleep",
    linkLabel: "Explore sleep",
  },
  {
    title: "They are trying to understand anxiety differently",
    description:
      "The experience often overlaps with anxiety when the body feels watchful, urgent, uneasy, or difficult to bring back down.",
    href: "/conditions/anxiety",
    linkLabel: "Explore anxiety",
  },
  {
    title: "They want something practical",
    description:
      "Usually, people do not need more theory. They need to know what actually helps a stressed system come down in real life.",
    href: "/learn/why-your-body-feels-stuck-in-stress",
    linkLabel: "Explore stuck stress",
  },
]

const clarifications = [
  {
    title: "It does not mean one perfect technique",
    description:
      "Calming support is usually not about finding one magical method. It is more often about improving the conditions that help the system settle more consistently.",
  },
  {
    title: "It does not mean forcing calm",
    description:
      "The body often comes down more successfully when it feels safer and less overloaded, not when it is pushed to relax on command.",
  },
  {
    title: "It works best when it supports real life",
    description:
      "The strongest calming support often improves sleep, recovery, transitions, steadiness, and daily rhythm rather than aiming for perfect calm in isolated moments.",
  },
]

export default function HowToCalmYourNervousSystemPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: "How to Calm Your Nervous System | Neuvago",
    description: "Practical, evidence-informed ways to calm a stressed or overactivated nervous system, including slower breathing, reducing input, movement, relaxation, sleep, and when to seek more support.",
    path: "/learn/how-to-calm-your-nervous-system",
    articleSection: "Learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "How to Calm Your Nervous System in Real Life", path: "/learn/how-to-calm-your-nervous-system" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-how-to-calm-your-nervous-system" />
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / How to calm your nervous system
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              How to calm your nervous system: practical, evidence-informed steps
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              If your body feels wired, tense, restless, or hard to settle,
              start with low-risk changes that reduce demand rather than trying
              to force an instant switch. Slower comfortable breathing, less
              sensory input, releasing muscle tension, gentle movement, and a
              steadier transition into rest can all help — but no single method
              works the same way for everyone.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/learn/why-your-body-feels-stuck-in-stress"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stuck stress
              </Link>

              <Link
                href="/learn/nervous-system-regulation"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Explore regulation
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
                        Practical guide
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-[#1f1f1c]">
                        A calmer approach to helping the system come down, settle,
                        and restore
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-medium text-[#1f1f1c]">
                          Activation
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                          What keeps the system on
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Support
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            What helps it settle
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-medium text-[#1f1f1c]">
                            Return
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                            Coming back toward steadiness
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
              What this usually means
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Calming your nervous system usually means helping the body shift
              out of prolonged activation rather than trying to “relax harder”
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In practical terms, calming the nervous system is often not about
              doing one perfect thing. It is more often about helping the body
              feel supported enough to move away from tension, urgency,
              overstimulation, or unfinished stress and back toward something
              steadier.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why the topic matters so much. For many people, the problem
              is not knowing they want calm. The problem is that the body does
              not easily follow once activation has been high for too long.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              A useful way to think about calming is not as a performance goal,
              but as a process of changing the conditions that help the system
              return.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/stress"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore stress
              </Link>

              <Link
                href="/conditions/sleep"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Explore sleep
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
                Calm becomes more possible when it becomes more realistic
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                The idea gets stronger when it explains why the body stays on and
                what actually helps it come down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Start here
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              If you want to calm your nervous system right now, lower demand before adding more techniques.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These steps are intentionally simple. You do not need to do all
              six, and none is a medical treatment. Pick the lowest-effort step
              that feels tolerable, then notice whether the body is becoming
              more settled rather than trying to hit a perfect state.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {quickCalmSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[2rem] border border-black/5 bg-white/65 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#84796e]">
                  Step {item.step}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/learn/breathing-exercises-and-the-vagus-nerve"
              className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore breathing exercises
            </Link>
            <Link
              href="/learn/nervous-system-regulation"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
            >
              Understand regulation
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              What keeps the system activated
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Before asking what helps, it often makes sense to ask what is still
              keeping the body from fully coming down
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Many people try to calm the nervous system without first looking
              at what is still feeding activation. Often, the body is not
              “refusing” calm. It is still carrying more than it has fully
              returned from.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatKeepsItActivated.map((item) => (
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
              What actually helps
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              What helps is often not more force, but steadier support that makes
              it easier for the body to return
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              In real life, the system often responds best to support that is
              gentler, more repeatable, and more sustainable than people expect.
              Calm usually becomes more possible when the broader conditions
              around stress and recovery start to improve.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatActuallyHelps.map((item) => (
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
                This topic works best inside a larger regulation picture
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Calming becomes easier to understand when linked to stress,
                recovery, sleep, and what the system is still carrying.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Short-term calming and the bigger picture
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Practical calming works best when you can tell the difference
              between a short-term settling strategy and the bigger recovery picture
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A breathing exercise, a walk, or a quieter room may help in the
              moment. That is different from changing the sleep, stress load,
              pain, uncertainty, illness, or daily demands that keep bringing
              activation back.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              Use short-term techniques for short-term support, and treat
              repeated difficulty settling as a reason to look at the larger
              context rather than escalating to increasingly intense
              &ldquo;hacks.&rdquo;
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/conditions/anxiety"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore anxiety
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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Why this question comes up
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                The goal is not perfect calm. It is to understand why the body
                feels too “on” and what actually helps.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Questions about calming the nervous system are often really
                about relief, steadiness, better sleep, calmer evenings, and a
                body that can return more easily after stress.
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
            {searchReasons.map((item) => (
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
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Evidence, not hacks
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              The best-supported calming tools are ordinary, repeatable, and more limited than social media often suggests.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Research supports several ways of reducing stress reactivity or
              eliciting a relaxation response, but the effects vary across
              people and outcomes. None of these findings proves that one
              technique &ldquo;resets&rdquo; the nervous system.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {evidenceSummary.map((item) => (
              <article
                key={item.href}
                className="rounded-[2rem] border border-black/5 bg-white/65 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#84796e]">
                  {item.strength}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#84796e]">
                  {item.source}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
                >
                  Open source
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-black/5 bg-[#eee6db] p-8 md:p-10">
            <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
              Calming is not the same as proving &ldquo;parasympathetic dominance&rdquo;
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f5a52] md:text-base">
              Feeling calmer can coincide with physiological changes, but no
              single sensation, breathing response, heart-rate value, or HRV
              score proves a whole-body autonomic state. General research on
              breathing or relaxation is also not Neuvago product evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A few boundaries make nervous-system calming advice much more useful.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {commonQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.75rem] border border-black/5 bg-white/65 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-xl font-medium leading-7 text-[#1f1f1c]">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#d6c9b8] bg-[#f8f2e9] p-8 md:p-10">
            <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
              When calming techniques are not enough
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f5a52] md:text-base">
              Relaxation techniques are self-management tools, not substitutes
              for medical or mental-health care. If symptoms are new, severe,
              persistent, worsening, or feel unsafe, seek appropriate
              professional help rather than relying on a nervous-system
              technique or wearable score.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Clarification
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Calming support is usually not about fixing yourself with one
              technique. It is about helping the system come down more reliably over time.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              A more useful understanding of calming support is not that one
              breath, one routine, or one method solves everything. It is more
              often about improving the broader conditions that help the body
              feel less overloaded and more able to settle.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              That is why calming support often overlaps with better sleep,
              lower stress load, stronger recovery, steadier routines, and
              gentler transitions rather than one dramatic intervention.
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
              Useful clarification
            </p>

            <div className="mt-8 space-y-5">
              {clarifications.map((item) => (
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
                The topic gets stronger when it stays realistic
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                Clear explanations of what actually helps usually build more
                trust than promises of instant calm.
              </p>
            </div>
          </div>
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
                Use calming as the practical bridge into explanation, regulation, and better sleep support
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Calming strategies are most useful when they connect immediate
                relief with the bigger picture: stress load, sleep, recovery,
                health, environment, and whether the body is being asked to
                return from more activation than it can realistically absorb.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/learn/why-your-body-feels-stuck-in-stress"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Explore stuck stress
                </Link>

                <Link
                  href="/learn/nervous-system-regulation"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Explore regulation
                </Link>

                <Link
                  href="/conditions/sleep"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Explore sleep
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
