import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { PlainEnglishSummary } from "@/components/authority";
import type { FeaturedTavnsStudy } from "@/content/research-study-catalog";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

type FeaturedTavnsStudyPageProps = {
  study: FeaturedTavnsStudy;
};

export function FeaturedTavnsStudyPage({
  study,
}: FeaturedTavnsStudyPageProps) {
  const structuredData = buildAuthorityPageStructuredData({
    title: study.metaTitle,
    description: study.metaDescription,
    path: study.href,
    articleSection: "Scientific studies",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Scientific Studies", path: "/research/studies" },
      { name: study.cardHeading, path: study.href },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix={`research-study-${study.slug}`}
      />

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-black/10 bg-[#f2eee8] px-3.5 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#756a5f]">
                {study.researchArea}
              </span>
              <span className="rounded-full border border-black/10 bg-white/65 px-3.5 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#756a5f]">
                {study.evidenceType}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#8a847b]">
                {study.year}
              </span>
            </div>

            <h1 className="mt-6 max-w-[18ch] text-balance text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-6xl">
              {study.cardHeading}
            </h1>

            <p className="mt-6 max-w-4xl text-xl leading-8 text-[#3d3a35] md:text-2xl md:leading-9">
              {study.fullTitle}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              {study.heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/research/studies"
                className="rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                Back to studies library
              </Link>
              <Link
                href="/research"
                className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/60"
              >
                Back to research hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PlainEnglishSummary
        eyebrow="Study in plain English"
        title={study.plainEnglish.title}
        description={study.plainEnglish.description}
        points={[...study.plainEnglish.points]}
        primaryHref="/research/topics/transcutaneous-vagus-nerve-stimulation"
        primaryLabel="Explore taVNS research"
        secondaryHref="/research/studies"
        secondaryLabel="Browse all studies"
      />

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Study design
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              How the research was structured
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {study.studyDesign.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] border border-black/7 bg-white/66 p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#3d3a35] md:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-black/8 bg-white/70 p-7 shadow-[0_12px_42px_rgba(31,31,28,0.04)] md:p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Citation
            </p>
            <p className="mt-5 text-sm leading-7 text-[#3d3a35] md:text-base">
              {study.citation}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={`https://doi.org/${study.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.1rem] border border-black/7 bg-[#f8f5f0] px-4 py-3 text-sm font-medium text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                DOI: {study.doi}
              </a>
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${study.pubmedId}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.1rem] border border-black/7 bg-[#f8f5f0] px-4 py-3 text-sm font-medium text-[#1f1f1c] underline-offset-4 hover:underline"
              >
                PubMed: {study.pubmedId}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Key findings
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              What the study reported
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {study.keyFindings.map((finding) => (
              <article
                key={finding.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/70 p-6 shadow-[0_8px_24px_rgba(31,31,28,0.03)]"
              >
                <h3 className="text-xl font-medium leading-tight tracking-[-0.025em] text-[#1f1f1c]">
                  {finding.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {finding.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#1f1f1c] text-[#f7f4ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#b8aa99]">
              Important context
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Limitations remain part of the finding.
            </h2>

            <div className="mt-8 space-y-4">
              {study.importantContext.map((item) => (
                <p
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-sm leading-7 text-white/72 md:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#b8aa99]">
              What this study does not show
            </p>
            <div className="mt-8 space-y-4">
              {study.doesNotShow.map((item) => (
                <p
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-sm leading-7 text-white/72 md:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Continue exploring
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Related research paths
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {study.relatedLinks.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.5rem] border border-black/8 bg-white/70 p-6"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 hover:underline"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-4xl border-t border-black/8 pt-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research boundary
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This page summarizes peer-reviewed research for educational
              purposes. The study provides scientific context for the taVNS
              field and should not be interpreted as clinical evidence for the
              Neuvago device, medical advice, diagnosis, or treatment guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
