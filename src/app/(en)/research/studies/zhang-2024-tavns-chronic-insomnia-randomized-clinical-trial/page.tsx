import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const pagePath =
  "/research/studies/zhang-2024-tavns-chronic-insomnia-randomized-clinical-trial";
const pageTitle =
  "taVNS for Chronic Insomnia | Randomized Clinical Trial | Neuvago";
const pageDescription =
  "Read a clear summary of a 2024 sham-controlled randomized trial examining transcutaneous auricular vagus nerve stimulation in 72 adults with chronic insomnia.";
const paperTitle =
  "Transcutaneous Auricular Vagus Nerve Stimulation for Chronic Insomnia Disorder: A Randomized Clinical Trial";
const doi = "10.1001/jamanetworkopen.2024.51217";
const pubmedId = "39680406";
const trialRegistration = "ChiCTR2100051319";

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
  "72 participants",
  "4.2-point greater PSQI improvement than sham",
  "69.4% responder rate with active taVNS",
] as const;

const studyDetails = [
  {
    label: "Design",
    value: "Single-centre, parallel-group, randomized sham-controlled clinical trial",
  },
  {
    label: "Participants randomized",
    value: "72 adults with chronic insomnia disorder",
  },
  { label: "Groups", value: "36 active taVNS and 36 sham taVNS" },
  {
    label: "Completion",
    value: "68 participants completed the eight-week intervention and follow-up",
  },
  {
    label: "Treatment schedule",
    value:
      "30 minutes twice daily, five consecutive days per week, for eight weeks",
  },
  {
    label: "Follow-up",
    value: "Twelve weeks after treatment, for a total study period of 20 weeks",
  },
  {
    label: "Primary outcome",
    value: "Change in Pittsburgh Sleep Quality Index score at week 8",
  },
  {
    label: "Clinically important threshold",
    value: "2.5 points for the between-group PSQI difference",
  },
  {
    label: "Secondary outcomes",
    value:
      "Insomnia severity, depression, anxiety, daytime sleepiness and fatigue",
  },
  {
    label: "Blinding",
    value:
      "Participants, outcome assessors and statisticians were blinded to treatment assignment",
  },
  {
    label: "Analysis",
    value: "Intention-to-treat and per-protocol analyses",
  },
  { label: "Trial registration", value: trialRegistration },
] as const;

const primaryResults = [
  {
    title: "Sleep quality at week 8",
    metrics: [
      { label: "Active taVNS", value: "PSQI change: −8.2 points" },
      { label: "Sham", value: "PSQI change: −3.9 points" },
      {
        label: "Between-group result",
        value: "4.2-point greater improvement with active taVNS",
      },
      {
        label: "Confidence interval",
        value:
          "95% confidence interval: 2.6 to 5.9 points greater improvement",
      },
      { label: "p-value", value: "p < 0.001" },
      { label: "Effect size", value: "Cohen’s d: 1.2" },
    ],
    interpretation:
      "The between-group difference exceeded the study’s prespecified 2.5-point threshold for clinical importance.",
  },
  {
    title: "PSQI responder rate at week 8",
    metrics: [
      { label: "Active taVNS", value: "69.4%" },
      { label: "Sham", value: "27.8%" },
      { label: "Between-group difference", value: "41.6 percentage points" },
      { label: "p-value", value: "p < 0.001" },
    ],
    interpretation:
      "A responder was defined as a participant with at least a 50% reduction from baseline in PSQI score.",
  },
] as const;

const supportingResults = [
  {
    title: "Insomnia severity at week 8",
    intro: null,
    metrics: [
      { label: "Active taVNS", value: "ISI change: −10.6 points" },
      { label: "Sham", value: "ISI change: −5.9 points" },
      {
        label: "Between-group result",
        value: "4.7-point greater improvement with active taVNS",
      },
      {
        label: "Confidence interval",
        value:
          "95% confidence interval: 2.3 to 7.1 points greater improvement",
      },
      { label: "p-value", value: "p < 0.001" },
      { label: "Effect size", value: "Cohen’s d: 0.9" },
    ],
    interpretation: null,
  },
  {
    title: "Results at week 20",
    intro:
      "The between-group difference in PSQI remained 4.5 points in favour of active taVNS at week 20.",
    metrics: [
      { label: "Active taVNS", value: "Responder rate: 72.2%" },
      { label: "Sham", value: "Responder rate: 22.2%" },
      { label: "p-value", value: "p < 0.001" },
    ],
    interpretation:
      "The study reported that the sleep-quality difference between the groups remained present through the 20-week study period.",
  },
] as const;

const contextItems = [
  {
    title: "A controlled comparison",
    description:
      "The randomized sham-controlled design allowed the outcomes reported with active stimulation to be compared with a sham condition rather than with baseline change alone.",
  },
  {
    title: "A specific treatment protocol",
    description:
      "The trial used 30-minute sessions twice daily, five consecutive days per week, for eight weeks. The findings belong to this studied protocol and should not automatically be assumed to apply to every stimulation schedule.",
  },
  {
    title: "A single-centre external study",
    description:
      "The study was conducted at one centre with 72 participants and did not evaluate the Neuvago device. Larger multicentre studies are needed to establish how widely the findings apply.",
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

export default function Zhang2024TavnsChronicInsomniaPage() {
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
        idPrefix="research-study-zhang-2024-tavns-chronic-insomnia-randomized-clinical-trial"
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
                RANDOMIZED SHAM-CONTROLLED CLINICAL TRIAL
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#81796f]">
                2024
              </span>
            </div>

            <p className="mt-8 text-sm font-medium text-[#746a60]">
              taVNS and chronic insomnia
            </p>
            <h1 className="mt-4 max-w-[25ch] text-balance text-[clamp(2.7rem,6.2vw,6.4rem)] font-medium leading-[0.94] tracking-[-0.06em] text-[#1f1f1c]">
              {paperTitle}
            </h1>
            <p className="mt-8 max-w-4xl text-base leading-8 text-[#514c45] sm:text-lg sm:leading-9">
              In a randomized sham-controlled clinical trial of 72 adults with
              chronic insomnia, the studied taVNS protocol produced a 4.2-point
              greater improvement in PSQI sleep-quality scores than sham at week
              8. The difference exceeded the study’s prespecified 2.5-point
              threshold for clinical importance.
            </p>

            <dl className="mt-10 grid border-y border-black/10 sm:grid-cols-3">
              {heroHighlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className={[
                    "py-5 sm:px-5 sm:py-6",
                    index > 0 ? "border-t border-black/10 sm:border-l sm:border-t-0" : "",
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
              The trial compared active transcutaneous auricular vagus nerve
              stimulation with sham stimulation in adults diagnosed with chronic
              insomnia disorder.
            </p>
            <p>
              Participants used the assigned stimulation for 30 minutes twice
              daily, five consecutive days per week, over eight weeks. The
              primary outcome was change in sleep quality measured with the
              Pittsburgh Sleep Quality Index, or PSQI.
            </p>
            <p>
              The researchers also assessed insomnia severity, mental health,
              daytime sleepiness, fatigue and safety. Participants were followed
              for a total of 20 weeks.
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
                    {result.intro ? (
                      <p className="mt-5 max-w-xl text-sm leading-7 text-[#5b554e] sm:text-base sm:leading-8">
                        {result.intro}
                      </p>
                    ) : null}
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
                    {result.interpretation ? (
                      <p className="mt-6 max-w-3xl text-sm leading-7 text-[#5b554e] sm:text-base sm:leading-8">
                        {result.interpretation}
                      </p>
                    ) : null}
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
          <div>
            <dl className="grid border-y border-black/12 sm:grid-cols-2">
              <div className="py-6 sm:border-r sm:px-6 sm:py-7">
                <dt className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[#81796f]">
                  Active taVNS
                </dt>
                <dd className="mt-3 text-xl font-medium tracking-[-0.025em] text-[#292622] sm:text-2xl">
                  5 participants — 13.9%
                </dd>
              </div>
              <div className="border-t border-black/12 py-6 sm:border-t-0 sm:px-6 sm:py-7">
                <dt className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[#81796f]">
                  Sham
                </dt>
                <dd className="mt-3 text-xl font-medium tracking-[-0.025em] text-[#292622] sm:text-2xl">
                  4 participants — 11.1%
                </dd>
              </div>
            </dl>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#5b554e] sm:text-lg sm:leading-9">
              <p>
                The study found no statistically significant difference in the
                proportion of participants reporting adverse events between
                active and sham stimulation.
              </p>
              <p>
                The most commonly reported stimulation-related event was slight
                temporary clamping pain at the outer ear.
              </p>
            </div>
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
              Zhang S, Zhao Y, Qin Z, et al. Transcutaneous Auricular Vagus
              Nerve Stimulation for Chronic Insomnia Disorder: A Randomized
              Clinical Trial. JAMA Network Open. 2024;7(12):e2451217.
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
              <div className="border-b border-black/12 py-6 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-[0.67rem] font-medium uppercase tracking-[0.2em] text-[#81796f]">
                  Trial registration
                </dt>
                <dd className="mt-3 text-sm leading-7 text-[#5b554e] sm:mt-0">
                  {trialRegistration}
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
