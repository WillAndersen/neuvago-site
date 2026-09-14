import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const pagePath =
  "/research/studies/yeom-2025-tavns-chronic-insomnia-randomized-sham-controlled-trial";
const pageTitle =
  "taVNS and Chronic Insomnia | Double-Blind Randomized Trial | Neuvago";
const pageDescription =
  "Read a clear summary of a 2025 double-blind, randomized, sham-controlled trial examining daily taVNS in 40 people with chronic insomnia disorder.";
const paperTitle =
  "Transcutaneous Auricular Vagus Nerve Stimulation (taVNS) Improves Sleep Quality in Chronic Insomnia Disorder: A Double-Blind, Randomized, Sham-Controlled Trial";
const doi = "10.1016/j.sleep.2025.106579";
const pubmedId = "40398066";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const heroHighlights = [
  "40 participants",
  "30 minutes daily for six weeks",
  "Active taVNS compared with sham",
] as const;

const studyDetails = [
  {
    label: "Design",
    value: "Double-blind, randomized, sham-controlled trial",
  },
  {
    label: "Participants",
    value: "40 participants with chronic insomnia disorder",
  },
  {
    label: "Comparison",
    value: "Active taVNS compared with sham stimulation",
  },
  { label: "Treatment period", value: "Six weeks" },
  { label: "Session schedule", value: "30 minutes daily" },
  {
    label: "Primary outcome",
    value:
      "Sleep quality measured with the Pittsburgh Sleep Quality Index (PSQI)",
  },
  {
    label: "Secondary outcomes",
    value: "Insomnia severity, total sleep time and quality of life",
  },
  {
    label: "Objective sleep measurement",
    value: "Fitbit wearable devices were used to obtain objective sleep measures",
  },
  {
    label: "Analysis",
    value: "Modified intention-to-treat analysis at six weeks",
  },
] as const;

const primaryResults = [
  {
    title: "Sleep quality — PSQI",
    copy:
      "The active taVNS group showed a significantly greater reduction in PSQI scores than the sham group after six weeks.",
    metrics: [
      { label: "Reported effect size", value: "Cohen’s d: −1.21" },
      { label: "p-value", value: "p = 0.009" },
    ],
    interpretation:
      "The reported effect size indicates a large difference between the groups, with lower PSQI scores favouring active taVNS.",
  },
  {
    title: "Insomnia severity — ISI",
    copy:
      "The active taVNS group also showed a significantly greater improvement in insomnia severity than the sham group.",
    metrics: [
      { label: "Active taVNS:", value: "−7.6 points" },
      { label: "Sham:", value: "−4.25 points" },
      { label: "Reported effect size", value: "Cohen’s d: −0.75" },
      { label: "p-value", value: "p = 0.023" },
    ],
    interpretation:
      "The result favoured active taVNS and represented a moderate to large difference between the groups.",
  },
] as const;

const supportingResults = [
  {
    title: "Total sleep time",
    copy:
      "The study reported a significant increase in total sleep time with active taVNS compared with sham stimulation.",
    metrics: [
      { label: "Reported effect size", value: "Cohen’s d: 0.69" },
      { label: "p-value", value: "p = 0.019" },
    ],
  },
  {
    title: "Quality of life",
    copy:
      "Quality-of-life scores improved significantly more with active taVNS than with sham stimulation.",
    metrics: [
      { label: "Reported effect size", value: "Cohen’s d: 0.65" },
      { label: "p-value", value: "p = 0.047" },
    ],
  },
] as const;

const contextItems = [
  {
    title: "A strong controlled design",
    description:
      "The double-blind, randomized, sham-controlled design provides a controlled comparison between active and sham stimulation rather than relying only on changes from baseline.",
  },
  {
    title: "A specific treatment protocol",
    description:
      "Participants used the assigned stimulation for 30 minutes daily over six weeks. The findings belong to this studied protocol and should not automatically be assumed to apply to every stimulation schedule.",
  },
  {
    title: "A small external study",
    description:
      "The trial included 40 participants and did not evaluate the Neuvago device. Larger independent studies would help establish how widely the findings apply.",
  },
] as const;

const relatedResearch = [
  {
    title: "Transcutaneous Auricular Vagus Nerve Stimulation",
    description:
      "Explore wider research on ear-based vagus nerve stimulation, protocol variables, safety and interpretation.",
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

export default function Yeom2025TavnsChronicInsomniaPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: pageTitle,
    description: pageDescription,
    path: pagePath,
    articleSection: "Scientific studies",
    schemaType: "ScholarlyArticle",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Research", path: "/research" },
      { name: "Scientific Studies", path: "/research/studies" },
      { name: paperTitle, path: pagePath },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix="research-study-yeom-2025-tavns-chronic-insomnia-randomized-sham-controlled-trial"
      />

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <nav
            aria-label="Breadcrumb"
            className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#766d63]"
          >
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <li>
                <Link
                  href="/research"
                  className="rounded-sm transition hover:text-[#1f1f1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                >
                  RESEARCH
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/research/studies"
                  className="rounded-sm transition hover:text-[#1f1f1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                >
                  SCIENTIFIC STUDIES LIBRARY
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">STUDY SUMMARY</li>
            </ol>
          </nav>

          <div className="mt-12 max-w-[80rem]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-black/10 bg-[#eee7de] px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#756a5f]">
                SLEEP
              </span>
              <span className="rounded-full border border-black/10 bg-white/65 px-3.5 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#756a5f]">
                DOUBLE-BLIND RANDOMIZED SHAM-CONTROLLED TRIAL
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#81796f]">
                2025
              </span>
            </div>

            <p className="mt-8 text-sm font-medium text-[#746a60]">
              taVNS and chronic insomnia
            </p>
            <h1 className="mt-4 max-w-[25ch] text-balance text-[clamp(2.7rem,6.2vw,6.4rem)] font-medium leading-[0.94] tracking-[-0.06em] text-[#1f1f1c]">
              {paperTitle}
            </h1>
            <p className="mt-8 max-w-4xl text-base leading-8 text-[#514c45] sm:text-lg sm:leading-9">
              A double-blind, randomized, sham-controlled trial of 40 people with
              chronic insomnia disorder reported significantly greater
              improvements in sleep quality and insomnia severity with active
              taVNS than with sham stimulation after six weeks.
            </p>

            <dl className="mt-10 grid border-y border-black/10 sm:grid-cols-3">
              {heroHighlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className={[
                    "py-5 sm:px-5 sm:py-6",
                    index > 0
                      ? "border-t border-black/10 sm:border-l sm:border-t-0"
                      : "",
                  ].join(" ")}
                >
                  <dt className="sr-only">Evidence highlight {index + 1}</dt>
                  <dd className="text-sm font-medium leading-6 text-[#37332f] sm:text-base">
                    {highlight}
                  </dd>
                </div>
              ))}
            </dl>

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
              What the trial examined.
            </h2>
          </header>
          <div className="max-w-3xl space-y-6 text-base leading-8 text-[#5b554e] sm:text-lg sm:leading-9">
            <p>
              The study compared active transcutaneous auricular vagus nerve
              stimulation with sham stimulation in people diagnosed with chronic
              insomnia disorder.
            </p>
            <p>
              Participants used the assigned stimulation for 30 minutes each day
              over six weeks. Sleep quality measured with the Pittsburgh Sleep
              Quality Index, or PSQI, was the primary outcome.
            </p>
            <p>
              The researchers also assessed insomnia severity, total sleep time,
              quality of life and adverse events.
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
                <dd className="mt-3 max-w-2xl text-sm leading-7 text-[#37332f] sm:text-base sm:leading-8">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#eee7de]">
        <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <header className="max-w-4xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#766d63]">
              RESULTS
            </p>
            <h2 className="mt-5 text-balance text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              What the trial reported.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5b554e] sm:text-lg sm:leading-9">
              Lower PSQI and ISI scores indicate improvement in sleep quality and
              insomnia severity.
            </p>
          </header>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {primaryResults.map((result) => (
              <article
                key={result.title}
                className="border border-black/10 bg-[#fbf8f2] p-6 shadow-[0_24px_70px_rgba(31,31,28,0.06)] sm:p-8"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-3xl">
                  {result.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#5b554e] sm:text-base sm:leading-8">
                  {result.copy}
                </p>
                <dl className="mt-7 border-t border-black/10">
                  {result.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border-b border-black/10 py-4 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-5"
                    >
                      <dt className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#81796f]">
                        {metric.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-7 text-[#292622] sm:mt-0 sm:text-base">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-7 text-sm leading-7 text-[#5b554e] sm:text-base sm:leading-8">
                  {result.interpretation}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-black/12">
            {supportingResults.map((result) => (
              <article
                key={result.title}
                className="border-b border-black/12 py-8 sm:py-10"
              >
                <div className="grid gap-7 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14">
                  <div>
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] sm:text-3xl">
                      {result.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#5b554e] sm:text-base sm:leading-8">
                      {result.copy}
                    </p>
                  </div>
                  <div>
                    <dl className="grid border-t border-black/10 sm:grid-cols-2">
                      {result.metrics.map((metric, index) => (
                        <div
                          key={metric.label}
                          className={[
                            "border-b border-black/10 py-5 sm:px-5",
                            index % 2 === 0 ? "sm:border-r" : "",
                          ].join(" ")}
                        >
                          <dt className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#81796f]">
                            {metric.label}
                          </dt>
                          <dd className="mt-2 text-sm leading-7 text-[#292622] sm:text-base">
                            {metric.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <header className="max-w-[38rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#766d63]">
              SAFETY IN THE TRIAL
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              Reported adverse events.
            </h2>
          </header>
          <div className="max-w-3xl space-y-5 border-y border-black/12 py-7 text-base leading-8 text-[#5b554e] sm:py-9 sm:text-lg sm:leading-9">
            <p>
              The authors reported no significant adverse events during the
              six-week trial.
            </p>
            <p>
              This safety finding relates to the participants, device, protocol
              and treatment period examined in this specific study.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#1f1f1c] text-[#f7f4ef]">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
          <header className="max-w-[38rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#b8aa99]">
              STUDY CONTEXT
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">
              What to keep in mind.
            </h2>
          </header>
          <div className="border-t border-white/15">
            {contextItems.map((item) => (
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
              Yeom JW, Kim H, Park S, Yoon Y, Seo JY, Cho CH, Lee HJ.
              Transcutaneous Auricular Vagus Nerve Stimulation (taVNS) Improves
              Sleep Quality in Chronic Insomnia Disorder: A Double-Blind,
              Randomized, Sham-Controlled Trial. Sleep Medicine.
              2025;133:106579.
            </p>
            <dl className="mt-9 border-t border-black/12">
              <div className="border-b border-black/12 py-6 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[#81796f]">
                  DOI
                </dt>
                <dd className="mt-3 sm:mt-0">
                  <p className="break-all text-sm leading-7 text-[#5b554e]">
                    {doi}
                  </p>
                  <a
                    href={`https://doi.org/${doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open DOI record for ${doi} in a new tab`}
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
                    PMID {pubmedId}
                  </p>
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${pubmedId}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View PMID ${pubmedId} on PubMed in a new tab`}
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
