import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld"
import { AuthorityEditorialHero } from "@/components/authority";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data"


export const metadata: Metadata = {
  title:
    "Learn | VNS, Non-Invasive VNS, tVNS and Auricular VNS | Neuvago",
  description:
    "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, tVNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
  alternates: {
    canonical: "/learn",
    languages: {
      "en-US": "/learn",
      "nb-NO": "/no/kunnskap",
      "x-default": "/learn",
    },
  },
  openGraph: {
    title:
      "Learn | VNS, Non-Invasive VNS, tVNS and Auricular VNS | Neuvago",
    description:
      "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, tVNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
    url: "/learn",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Learn | VNS, Non-Invasive VNS, tVNS and Auricular VNS | Neuvago",
    description:
      "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, tVNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
  },
};

const primaryFoundationArticles = [
  {
    title: "Nervous system regulation",
    description:
      "Understand how the nervous system shifts between activation, regulation, rest and recovery.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Read about nervous system regulation",
  },
  {
    title: "Vagus nerve",
    description:
      "Learn how the vagus nerve carries signals between the brain and body and why it matters for stress, sleep and recovery.",
    href: "/learn/vagus-nerve",
    linkLabel: "Understand the vagus nerve",
  },
  {
    title: "Vagus nerve stimulation",
    description:
      "Explore what vagus nerve stimulation is and how implanted and non-invasive approaches differ.",
    href: "/learn/vagus-nerve-stimulation",
    linkLabel: "Explore vagus nerve stimulation",
  },
  {
    title: "Non-invasive vagus nerve stimulation",
    description:
      "Understand external approaches to vagus nerve stimulation, including tVNS and ear-based taVNS.",
    href: "/learn/non-invasive-vagus-nerve-stimulation",
    linkLabel: "Explore non-invasive VNS",
  },
] as const;

const moreFoundationGuides = [
  {
    title: "Transcutaneous vagus nerve stimulation (tVNS)",
    href: "/learn/transcutaneous-vagus-nerve-stimulation",
  },
  {
    title: "Transcutaneous auricular vagus nerve stimulation (taVNS)",
    href: "/learn/auricular-vagus-nerve-stimulation",
  },
  {
    title: "Implanted vs non-invasive vagus nerve stimulation",
    href: "/learn/implanted-vs-non-invasive-vagus-nerve-stimulation",
  },
  {
    title: "What does vagus nerve stimulation feel like?",
    href: "/learn/what-does-vagus-nerve-stimulation-feel-like",
  },
  {
    title: "Parasympathetic nervous system",
    href: "/learn/parasympathetic-nervous-system",
  },
  {
    title: "Vagal tone",
    href: "/learn/vagal-tone",
  },
  {
    title: "Fight, flight and freeze",
    href: "/learn/fight-flight-freeze",
  },
  {
    title: "Recovery and regulation",
    href: "/learn/recovery-and-regulation",
  },
] as const;

const everydayQuestionGroups = [
  {
    id: "practical-guidance",
    title: "Practical guidance",
    description:
      "Clear articles for moments when the main question is what may help in everyday life.",
    articles: [
      {
        title: "Vagus nerve reset",
        description:
          "Understand what the popular reset phrase means, why there is no literal reset button and what gentle regulation practices can—and cannot—show.",
        href: "/learn/vagus-nerve-reset",
      },
      {
        title: "Breathing exercises and the vagus nerve",
        description:
          "Compare slow breathing, longer exhalation and 4-7-8 with clear limits around HRV, RespHRV and direct vagus-nerve claims.",
        href: "/learn/breathing-exercises-and-the-vagus-nerve",
      },
      {
        title: "How to calm your nervous system",
        description:
          "Explore practical, science-informed ways to help the body move from activation toward a calmer state.",
        href: "/learn/how-to-calm-your-nervous-system",
      },
      {
        title: "Why your body feels stuck in stress",
        description:
          "Understand why the body can remain activated even after the stressful moment has passed.",
        href: "/learn/why-your-body-feels-stuck-in-stress",
      },
      {
        title: "Why you feel tired but can’t relax",
        description:
          "Explore why exhaustion and activation can exist at the same time, and how this may affect evenings, sleep and recovery.",
        href: "/learn/why-you-feel-tired-but-cant-relax",
      },
    ],
  },
  {
    id: "recognize-the-pattern",
    title: "Recognize the pattern",
    description:
      "Articles that help readers understand common nervous system patterns and put everyday experiences into context.",
    articles: [
      {
        title: "Signs of a dysregulated nervous system",
        description:
          "Learn about patterns such as overstimulation, poor sleep, shutdown and difficulty winding down.",
        href: "/learn/signs-of-a-dysregulated-nervous-system",
      },
      {
        title: "What nervous system regulation feels like",
        description:
          "Understand how regulation may feel in everyday life, including greater steadiness and a more flexible return after stress.",
        href: "/learn/what-nervous-system-regulation-feels-like",
      },
      {
        title: "Emotional regulation and the nervous system",
        description:
          "Explore the relationship between the nervous system, overwhelm, reactivity and emotional shutdown.",
        href: "/learn/emotional-regulation-and-the-nervous-system",
      },
    ],
  },
] as const;

const finalPathways = [
  {
    title: "Conditions",
    description:
      "Browse articles on stress, sleep, anxiety, migraine and headache, gut–brain function and digestion, burnout, depression and mood, chronic pain and related nervous system topics.",
    href: "/conditions",
    ctaLabel: "Browse conditions",
  },
  {
    title: "Research",
    description:
      "Explore peer-reviewed studies, systematic reviews and scientific context across VNS, taVNS, autonomic regulation, HRV, safety and related fields.",
    href: "/research",
    ctaLabel: "Explore Research",
  },
] as const;

export default function LearnPage() {
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title: "Learn | VNS, Non-Invasive VNS, tVNS and Auricular VNS | Neuvago",
    description: "Explore practical explainers on vagus nerve stimulation, non-invasive VNS, tVNS, auricular VNS, the vagus nerve, nervous system regulation, stress, sleep, and recovery.",
    path: "/learn",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
    ],
  });


  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c] [&_a]:focus-visible:outline-none [&_a]:focus-visible:ring-2 [&_a]:focus-visible:ring-[#1f1f1c] [&_a]:focus-visible:ring-offset-4">
      <JsonLd data={structuredData} idPrefix="learn" />
      <AuthorityEditorialHero
        eyebrow="LEARN"
        title="Understand your nervous system."
        description="Explore clear, science-informed articles on the vagus nerve, nervous system regulation, stress, sleep, recovery and non-invasive vagus nerve stimulation."
        secondaryDescription="Start with the fundamentals or explore the questions and patterns that matter to you."
        tone="learn"
        actions={[
          { href: "#articles", label: "Browse articles" },
        ]}
      />

      <section
        id="articles"
        className="scroll-mt-28 border-b border-black/5 bg-[#f2eee8]"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="max-w-2xl lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              START HERE
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with the foundations.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Build a clear understanding of nervous system regulation, the
              vagus nerve and non-invasive vagus nerve stimulation before
              exploring more specific questions, patterns and conditions.
            </p>
          </div>

          <div>
            <div className="border-t border-black/10">
              {primaryFoundationArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block border-b border-black/10 py-8 transition hover:border-black/20"
                >
                  <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] md:text-3xl">
                        {article.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                        {article.description}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] transition group-hover:translate-x-0.5">
                      {article.linkLabel}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 border-t border-black/10 pt-8">
              <h3 className="text-2xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                More foundational guides
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] md:text-base">
                Go deeper into the pathways, concepts and stress responses that
                shape nervous system regulation.
              </p>

              <div className="mt-7 grid gap-x-10 gap-y-4 lg:grid-cols-2">
                {moreFoundationGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group min-w-0 inline-flex items-start justify-between gap-4 border-b border-black/8 pb-4 text-base font-medium leading-7 text-[#1f1f1c] transition hover:border-black/20"
                  >
                    <h4 className="min-w-0">{guide.title}</h4>
                    <span
                      aria-hidden="true"
                      className="shrink-0 transition group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-wave2d2a2-methods-centre="en" className="border-b border-black/5 bg-[#1f1f1c] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/55">Vagus nerve methods centre</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">How to stimulate the vagus nerve</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72">A source-based guide to electrical VNS, breathing, movement, relaxation and other methods—with clear limits around what the evidence can actually show.</p>
          </div>
          <div className="lg:text-right"><Link href="/learn/how-to-stimulate-the-vagus-nerve" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1f1f1c]">Explore the methods</Link></div>
        </div>
      </section>




      <section className="border-b border-black/5 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              EVERYDAY NERVOUS SYSTEM QUESTIONS
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Start with what you’re experiencing.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Explore articles that begin with the questions, sensations and
              patterns people often notice in everyday life — from feeling
              stuck in stress or unable to unwind to understanding nervous
              system regulation and emotional responses.
            </p>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-16">
            {everydayQuestionGroups.map((group) => (
              <section
                key={group.id}
                aria-labelledby={`learn-${group.id}`}
                className="min-w-0"
              >
                <div className="max-w-xl">
                  <h3
                    id={`learn-${group.id}`}
                    className="text-2xl font-medium tracking-[-0.035em] text-[#1f1f1c] md:text-3xl"
                  >
                    {group.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {group.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-black/10">
                  {group.articles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="group block border-b border-black/10 py-7 transition hover:border-black/20"
                    >
                      <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div className="max-w-xl">
                          <h4 className="text-xl font-medium leading-tight tracking-[-0.03em] text-[#1f1f1c] md:text-2xl">
                            {article.title}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-[#5f5a52] md:text-base">
                            {article.description}
                          </p>
                        </div>

                        <span
                          aria-hidden="true"
                          className="text-xl text-[#1f1f1c] transition group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="learn-continue-exploring-title"
        className="bg-[#e8ded0]"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-2xl lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              CONTINUE EXPLORING
            </p>
            <h2
              id="learn-continue-exploring-title"
              className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl"
            >
              Explore specific conditions or go deeper into the science.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Continue with condition-focused articles, or explore the
              scientific studies and reviews behind vagus nerve stimulation
              and nervous system regulation.
            </p>
          </div>

          <div className="border-y border-black/10">
            {finalPathways.map((pathway) => (
              <article
                key={pathway.href}
                className="border-b border-black/10 py-8 last:border-b-0 md:py-10"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] md:text-3xl">
                  {pathway.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] md:text-base">
                  {pathway.description}
                </p>
                <Link
                  href={pathway.href}
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] underline-offset-4 transition hover:underline"
                >
                  {pathway.ctaLabel}
                  <span
                    aria-hidden="true"
                    className="transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
