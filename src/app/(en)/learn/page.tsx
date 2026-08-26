import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld"
import { AuthorityEditorialHero } from "@/components/authority";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data"
import { getPublishedDecisionGuidesForLocale } from "@/content/decision-guides/registry";

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
    title: "Auricular vagus nerve stimulation (taVNS)",
    href: "/learn/auricular-vagus-nerve-stimulation",
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

const pathwayCards = [
  {
    title: "Start with the foundations",
    description:
      "Begin with the big concepts if you want the clearest understanding of how stress, calm, sleep, and recovery fit together.",
    href: "/learn/nervous-system-regulation",
    linkLabel: "Start with regulation",
  },
  {
    title: "Start with something you recognize",
    description:
      "If the body feels wired, tired, overwhelmed, reactive, or difficult to settle, begin with the pages that map lived experience more directly.",
    href: "/learn/signs-of-a-dysregulated-nervous-system",
    linkLabel: "Start with recognition",
  },
  {
    title: "Start with practical support",
    description:
      "If the main question is what actually helps, begin with the practical pages around calming, recovery, and everyday nervous system support.",
    href: "/learn/how-to-calm-your-nervous-system",
    linkLabel: "Start with support",
  },
];

export default function LearnPage() {
  const decisionGuides = getPublishedDecisionGuidesForLocale("en");
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
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
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

              <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {moreFoundationGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group inline-flex items-start justify-between gap-4 border-b border-black/8 pb-4 text-base font-medium leading-7 text-[#1f1f1c] transition hover:border-black/20"
                  >
                    <span>{guide.title}</span>
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


      {decisionGuides.length > 0 ? (
        <section className="border-b border-black/5 bg-[#eee7dd]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Decision guides
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Compare methods before comparing promises
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                These guides turn anatomy, device design, intended use, evidence, safety, and practical fit into clearer decision criteria. They do not rank brands or declare a universal winner.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {decisionGuides.map((guide) => (
                <Link
                  key={guide.path}
                  href={guide.path}
                  className="group rounded-[2rem] border border-black/5 bg-white/65 p-8 shadow-[0_16px_52px_rgba(31,31,28,0.05)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#84796e]">
                    {guide.hubLabel}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em] text-[#1f1f1c]">
                    {guide.hubTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {guide.hubSummary}
                  </p>
                  <span className="mt-7 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                    Open decision guide
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Choose where to start
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A clearer way to begin based on the kind of question you actually have
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pathwayCards.map((item) => (
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

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Keep learning, then go deeper
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Continue into conditions, research, or the broader Neuvago system
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                The Learn hub is designed to help people move from confusion
                into clearer understanding. From here, you can continue into
                conditions, research, or the broader product and app system.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/conditions"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Browse conditions
                </Link>

                <Link
                  href="/research"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  View research hub
                </Link>

                <Link
                  href="/glossary"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Browse glossary
                </Link>

                <Link
                  href="/how-it-works"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
