import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { getFeaturedTavnsStudy } from "@/content/research-study-catalog";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const study = getFeaturedTavnsStudy(
  "de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis",
);

export const metadata: Metadata = {
  title: study.metaTitle,
  description: study.metaDescription,
  alternates: { canonical: study.href },
  openGraph: {
    title: study.metaTitle,
    description: study.metaDescription,
    url: study.href,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: study.metaTitle,
    description: study.metaDescription,
  },
};

const studyDetails = [
  { label: "Study type", value: "Systematic review and meta-analysis" },
  { label: "Databases searched", value: "PubMed, Embase and CENTRAL" },
  {
    label: "Search period",
    value: "From database inception through January 2025",
  },
  { label: "Studies screened", value: "313" },
  { label: "Studies included", value: "6" },
  { label: "Total participants", value: "336" },
  { label: "Population", value: "People with insomnia" },
  {
    label: "Primary outcomes",
    value:
      "Sleep quality measured with PSQI and insomnia severity measured with ISI",
  },
] as const;

const pooledResults = [
  {
    title: "Sleep quality — PSQI",
    estimate: "Mean difference: −3.60",
    confidenceInterval: "95% confidence interval: −4.98 to −2.22",
    pValue: "p < 0.01",
    certainty: "Low certainty",
    explanation:
      "The pooled analysis reported lower PSQI scores in the taVNS groups, indicating an improvement in measured sleep quality.",
  },
  {
    title: "Insomnia severity — ISI",
    estimate: "Mean difference: −5.24",
    confidenceInterval: "95% confidence interval: −9.02 to −1.46",
    pValue: "p < 0.01",
    certainty: "Very low certainty",
    explanation:
      "The pooled analysis reported lower ISI scores in the taVNS groups, indicating an improvement in measured insomnia severity.",
  },
] as const;

const interpretationItems = [
  {
    title: "Certainty of evidence",
    description:
      "The certainty of evidence was rated low for sleep quality and very low for insomnia severity. This limits how confidently the pooled estimates can be interpreted.",
  },
  {
    title: "Size and variation of the evidence base",
    description:
      "Only six studies were included. Stimulation protocols, study methods and participant groups varied, and further standardisation and independent research are needed.",
  },
  {
    title: "Scope of the finding",
    description:
      "The review examined the wider taVNS research field. It did not study the Neuvago device, and its findings cannot automatically be assumed to apply to every taVNS protocol, device or user.",
  },
] as const;

const relatedResearch = [
  {
    title: "Transcutaneous Auricular Vagus Nerve Stimulation",
    description:
      "Explore the wider research on ear-based vagus nerve stimulation, protocol variables, target engagement, safety and interpretation.",
    label: "Explore taVNS Research",
    href: "/research/topics/auricular-vagus-nerve-stimulation",
  },
  {
    title: "Scientific Studies Library",
    description:
      "Browse the complete collection of published papers summarised in the Neuvago Research library.",
    label: "Browse Scientific Studies",
    href: "/research/studies",
  },
] as const;

export default function DeOliveira2025TavnsInsomniaPage() {
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
        idPrefix="research-study-de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis"
      />

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#766d63]">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <li>
                <Link
                  href="/research"
                  className="rounded-sm transition hover:text-[#1f1f1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                >
                  Research
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/research/studies"
                  className="rounded-sm transition hover:text-[#1f1f1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                >
                  Scientific Studies Library
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Study Summary</li>
            </ol>
          </nav>

          <div className="mt-12 max-w-[76rem]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-black/10 bg-[#eee7de] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#756a5f]">
                {study.researchArea}
              </span>
              <span className="rounded-full border border-black/10 bg-white/65 px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#756a5f]">
                {study.evidenceType}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#81796f]">
                {study.year}
              </span>
            </div>

            <p className="mt-8 text-sm font-medium text-[#746a60]">
              {study.cardHeading}
            </p>
            <h1 className="mt-4 max-w-[24ch] text-balance text-[clamp(2.7rem,6.4vw,6.6rem)] font-medium leading-[0.94] tracking-[-0.06em] text-[#1f1f1c]">
              {study.fullTitle}
            </h1>
            <p className="mt-8 max-w-4xl text-base leading-8 text-[#514c45] sm:text-lg sm:leading-9">
              A 2025 systematic review and meta-analysis pooled six studies
              involving 336 participants with insomnia. It reported improvements
              in sleep quality and insomnia severity, while the certainty of
              evidence was rated low to very low.
            </p>
            <Link
              href="/research/studies"
              className="mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#1f1f1c] underline decoration-black/35 underline-offset-4 transition hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
            >
              <span aria-hidden="true">←</span>
              Back to Scientific Studies Library
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <header className="max-w-[38rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#766d63]">
              IN PLAIN ENGLISH
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              What this review examined.
            </h2>
          </header>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-[#5b554e] sm:text-lg sm:leading-9">
            <p>
              The review brought together clinical studies examining
              transcutaneous auricular vagus nerve stimulation in people with
              insomnia. The pooled analysis focused on two commonly used
              outcomes: sleep quality measured with the Pittsburgh Sleep Quality
              Index (PSQI) and insomnia severity measured with the Insomnia
              Severity Index (ISI).
            </p>
            <p>
              The results were statistically significant, but the evidence base
              was small and the certainty of evidence was limited. The findings
              therefore need to be read alongside the study methods, stimulation
              protocols and populations included.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <header className="max-w-4xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#766d63]">
              STUDY DESIGN
            </p>
            <h2 className="mt-5 text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Study at a glance.
            </h2>
          </header>
          <dl className="mt-12 grid border-t border-black/12 sm:grid-cols-2">
            {studyDetails.map((item, index) => (
              <div
                key={item.label}
                className={[
                  "border-b border-black/12 py-6 sm:px-6 sm:py-7",
                  index % 2 === 0 ? "sm:border-r" : "",
                ].join(" ")}
              >
                <dt className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[#81796f]">
                  {item.label}
                </dt>
                <dd className="mt-3 max-w-xl text-base leading-8 text-[#37332f] sm:text-lg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#ece5dc]">
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <header className="max-w-4xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#766d63]">
              POOLED RESULTS
            </p>
            <h2 className="mt-5 text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              What the review found.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b554e] sm:text-lg">
              Lower scores indicate improvement on both the PSQI and ISI scales.
            </p>
          </header>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {pooledResults.map((result) => (
              <article
                key={result.title}
                className="flex min-w-0 flex-col border border-black/8 bg-[#f8f5f0] p-6 shadow-[0_16px_50px_rgba(31,31,28,0.035)] sm:p-8"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-3xl">
                  {result.title}
                </h3>
                <dl className="mt-7 space-y-4 border-t border-black/10 pt-6">
                  <div>
                    <dt className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#81796f]">
                      Effect estimate
                    </dt>
                    <dd className="mt-2 text-lg font-medium text-[#292622]">
                      {result.estimate}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#81796f]">
                      Confidence interval
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-[#37332f]">
                      {result.confidenceInterval}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#81796f]">
                      p-value
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-[#37332f]">
                      {result.pValue}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#81796f]">
                      Evidence certainty
                    </dt>
                    <dd className="mt-2 inline-flex rounded-full border border-black/10 bg-[#eee7de] px-3 py-1.5 text-sm font-medium text-[#37332f]">
                      {result.certainty}
                    </dd>
                  </div>
                </dl>
                <p className="mt-7 border-t border-black/10 pt-6 text-sm leading-7 text-[#5b554e] sm:text-base sm:leading-8">
                  {result.explanation}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 border-t border-black/12 pt-7 sm:flex sm:items-start sm:justify-between sm:gap-12">
            <h3 className="text-xl font-medium tracking-[-0.025em] text-[#292622]">
              Additional sleep outcomes
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5b554e] sm:mt-0 sm:text-base sm:leading-8">
              The included studies also reported improvements across sleep-related
              measures including sleep latency, duration, efficiency and overall
              sleep quality.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#1f1f1c] text-[#f7f4ef]">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <header className="max-w-[38rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#b8aa99]">
              EVIDENCE AND INTERPRETATION
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              How to interpret the findings.
            </h2>
          </header>
          <div className="border-t border-white/15">
            {interpretationItems.map((item) => (
              <article
                key={item.title}
                className="border-b border-white/15 py-7 sm:py-9"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <header className="max-w-[38rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#766d63]">
              SOURCE DETAILS
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Citation and original sources.
            </h2>
          </header>
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-[#37332f] sm:text-lg sm:leading-9">
              {study.citation}
            </p>
            <dl className="mt-9 border-t border-black/12">
              <div className="border-b border-black/12 py-6 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[#81796f]">
                  DOI
                </dt>
                <dd className="mt-3 sm:mt-0">
                  <p className="break-all text-sm leading-7 text-[#5b554e]">
                    {study.doi}
                  </p>
                  <a
                    href={`https://doi.org/${study.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open DOI record for ${study.doi} in a new tab`}
                    className="mt-3 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#1f1f1c] underline decoration-black/35 underline-offset-4 transition hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                  >
                    Open DOI record
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div className="border-b border-black/12 py-6 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[#81796f]">
                  PubMed
                </dt>
                <dd className="mt-3 sm:mt-0">
                  <p className="text-sm leading-7 text-[#5b554e]">
                    PMID {study.pubmedId}
                  </p>
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${study.pubmedId}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View PMID ${study.pubmedId} on PubMed in a new tab`}
                    className="mt-3 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#1f1f1c] underline decoration-black/35 underline-offset-4 transition hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                  >
                    View on PubMed
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-7 text-sm leading-7 text-[#5b554e] sm:text-base">
              The original paper remains the primary scientific source.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <header className="max-w-[38rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#766d63]">
              CONTINUE EXPLORING
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Continue into related research.
            </h2>
          </header>
          <div className="border-t border-black/12">
            {relatedResearch.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block border-b border-black/12 py-7 transition hover:bg-white/28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-inset sm:py-9"
              >
                <div className="flex min-w-0 items-start justify-between gap-5">
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium leading-tight tracking-[-0.025em] text-[#1f1f1c] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5b554e] sm:text-base sm:leading-8">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-medium text-[#1f1f1c] underline decoration-black/30 underline-offset-4 group-hover:decoration-black">
                      {item.label}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 pt-1 text-xl transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <aside className="bg-[#f7f4ef]" aria-label="Educational note">
        <div className="mx-auto max-w-[92rem] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <p className="max-w-4xl border-t border-black/10 pt-7 text-sm leading-7 text-[#6a635b]">
            This page summarises external peer-reviewed research for educational
            purposes and is not medical advice.
          </p>
        </div>
      </aside>
    </main>
  );
}
