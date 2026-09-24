import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const path = "/learn/heart-rate-variability";
const title =
  "Heart Rate Variability (HRV): What It Measures and How to Read It | Neuvago";
const description =
  "Learn what heart rate variability means, how HRV is measured, what changes it, and why one HRV number is not a diagnosis or a direct vagal-tone score.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
    languages: {
      "en-US": path,
      "nb-NO": "/no/kunnskap/hrv",
      "x-default": path,
    },
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const influences = [
  "Breathing pattern and respiratory rate",
  "Body position and movement",
  "Time of day and recording duration",
  "Sleep, recent exercise and recovery context",
  "Illness, medication and other physiological context",
  "Signal quality, artifacts and the measurement method",
] as const;

const metrics = [
  {
    title: "RMSSD",
    description:
      "A time-domain metric based on beat-to-beat changes. It is often used in short recordings and is sensitive to high-frequency variation related to respiratory cardiac modulation.",
  },
  {
    title: "SDNN",
    description:
      "A time-domain measure of overall variability across the recording. Its meaning depends strongly on recording duration, so short and 24-hour values should not be treated as interchangeable.",
  },
  {
    title: "Frequency-domain measures",
    description:
      "Spectral methods describe how variability is distributed across frequency bands. Interpretation requires care, especially when labels are simplified into claims about sympathetic or parasympathetic balance.",
  },
] as const;

const references = [
  {
    label: "Task Force, 1996",
    title: "Standards of measurement, physiological interpretation and clinical use",
    detail:
      "The foundational standards paper formalized many common HRV measurement and reporting conventions and remains an important methodological reference.",
    href: "https://pubmed.ncbi.nlm.nih.gov/8598068/",
  },
  {
    label: "Laborde, Mosley & Thayer, 2017",
    title: "Recommendations for psychophysiological HRV research",
    detail:
      "A practical review of planning, recording, analysis and interpretation, emphasizing that HRV is easy to collect but easy to misinterpret without methodological control.",
    href: "https://pubmed.ncbi.nlm.nih.gov/28265249/",
  },
  {
    label: "Quigley et al., 2024",
    title: "Updated publication guidelines for HR and HRV studies",
    detail:
      "A committee report covering ECG and photoplethysmographic measurement, physiological foundations, methodological strengths and weaknesses, and transparent reporting.",
    href: "https://pubmed.ncbi.nlm.nih.gov/38873876/",
  },
  {
    label: "Human cardiovascular HRV guidelines, 2026",
    title: "Rigor and reproducibility in HRV research",
    detail:
      "Recent evidence-based guidance cautions against treating HRV as a specific measure of cardiac sympathetic outflow or a simple sympathovagal-balance score.",
    href: "https://pubmed.ncbi.nlm.nih.gov/42495990/",
  },
] as const;

export default function HeartRateVariabilityLearnPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title,
    description,
    path,
    articleSection: "Learn",
    authorName: "Neuvago Editorial Team",
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    keywords: [
      "heart rate variability",
      "HRV",
      "what is HRV",
      "HRV meaning",
      "HRV interpretation",
      "HRV and vagal tone",
    ],
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: "Heart rate variability", path },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="learn-heart-rate-variability" />

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Learn / Heart rate variability
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.035em] md:text-6xl">
              Heart rate variability (HRV): what it measures and how to read it
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              Heart rate variability describes variation in the time between
              successive heartbeats. It is widely used in cardiovascular,
              autonomic and psychophysiological research, but a single HRV number
              is not a diagnosis, a universal readiness score or a direct meter
              of the whole nervous system.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Short answer
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              HRV is about beat-to-beat timing, not how fast the heart beats
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              Two people can have the same average heart rate while the spacing
              between individual beats varies differently. HRV metrics describe
              patterns in those intervals. The pattern can change with breathing,
              posture, sleep, exercise, stress, illness, medication, recording
              length and measurement quality.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-black/8 bg-white/70 p-8">
            <h3 className="text-2xl font-medium">A useful mental model</h3>
            <p className="mt-5 text-base leading-8 text-[#5f5a52]">
              HRV is a measurement layer. It can contribute information about
              cardiac autonomic regulation when the method and context are
              controlled, but it does not by itself explain why a person feels
              stressed, recovered, tired or well.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Common metrics
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Different HRV metrics summarize different parts of the signal
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/65 p-7"
              >
                <h3 className="text-xl font-medium">{metric.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {metric.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#1f1f1c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-white/55">
            Context matters
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            HRV can change even when nothing is “wrong”
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {influences.map((item) => (
              <div
                key={item}
                className="border-b border-white/10 py-4 text-base leading-7 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              HRV and vagal tone
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              HRV can inform cardiac vagal research without becoming a universal “vagus score”
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              Some HRV measures, especially under controlled conditions, are
              used as indicators of respiratory modulation of cardiac vagal
              activity. That does not make every wearable HRV score a direct
              measurement of vagal tone, sympathetic output or “nervous system
              balance.” Recent guidance specifically warns against that kind of
              overinterpretation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/learn/vagal-tone"
                className="rounded-full border border-black/10 bg-white/65 px-6 py-3 text-sm font-medium"
              >
                Read about vagal tone
              </Link>
              <Link
                href="/learn/autonomic-nervous-system"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium"
              >
                Understand the autonomic nervous system
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            Reading personal HRV
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Consistency of measurement is often more useful than chasing someone else’s number
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Compare like with like",
                text: "A morning resting measurement should not be treated as directly interchangeable with an exercise recording or an overnight value from a different device.",
              },
              {
                title: "Watch method and artifacts",
                text: "Signal noise, missed beats and algorithm choices can change derived values. Research-grade interpretation starts with recording quality.",
              },
              {
                title: "Use trends carefully",
                text: "Repeated measurements under similar conditions can add context, but a trend still needs to be interpreted alongside sleep, training, illness and other factors.",
              },
              {
                title: "Do not diagnose from one score",
                text: "An unusually high or low consumer HRV value is not, by itself, a diagnosis or proof that one branch of the autonomic nervous system is malfunctioning.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/8 bg-white/65 p-7"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
            References
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Measurement standards and interpretation guidance
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {references.map((reference) => (
              <article
                key={reference.label}
                className="rounded-[1.5rem] border border-black/8 bg-white/70 p-7"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-[#7a756c]">
                  {reference.label}
                </p>
                <h3 className="mt-3 text-xl font-medium">{reference.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {reference.detail}
                </p>
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-medium underline underline-offset-4"
                >
                  Open source
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8ded0]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Research boundary
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              General HRV education and VNS-specific HRV research have different jobs
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              This page owns the general “what is HRV?” question. The Research
              topic page owns the evidence layer around HRV, autonomic regulation
              and VNS-related studies.
            </p>
            <Link
              href="/research/topics/heart-rate-variability"
              className="mt-7 inline-flex text-sm font-medium underline underline-offset-4"
            >
              Explore HRV research
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
