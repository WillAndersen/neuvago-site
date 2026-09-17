import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { authorityEditorialDates } from "@/lib/seo/editorial-dates";
import { buildAuthorityPageStructuredData } from "@/lib/seo/structured-data";

const pageTitle = "Sleep Support & Vagus Nerve Stimulation | Neuvago";
const pageDescription =
  "Learn how nervous system activation can affect sleep, how Neuvago’s non-invasive vagus nerve stimulator fits into a 20-minute evening routine, and what randomized taVNS trials have reported.";
const pagePath = "/conditions/sleep";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
    languages: {
      "en-US": pagePath,
      "nb-NO": "/no/tilstander/sovn",
      "x-default": pagePath,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const sleepPatterns = [
  {
    title: "Difficulty winding down",
    description:
      "Your mind or body may still feel alert after the day is over, making it harder to settle into sleep.",
  },
  {
    title: "Waking during the night",
    description:
      "You may fall asleep but find it difficult to settle again after waking.",
  },
  {
    title: "Light or restless sleep",
    description:
      "Sleep may feel easily interrupted, shallow or less restorative than expected.",
  },
  {
    title: "Tired but wired",
    description:
      "You may feel exhausted while still feeling mentally active, tense or unable to fully switch off.",
  },
] as const;

const sleepStudies = [
  {
    evidenceType: "RANDOMIZED SHAM-CONTROLLED CLINICAL TRIAL",
    year: "2024",
    title: "taVNS and chronic insomnia",
    description:
      "In 72 adults with chronic insomnia, active taVNS produced a 4.2-point greater improvement in PSQI sleep-quality scores than sham at week 8. Responder rates were 69.4% with active taVNS and 27.8% with sham.",
    protocol:
      "Studied protocol: 30 minutes twice daily, five consecutive days per week, for eight weeks.",
    cta: "Read Zhang 2024 study summary",
    href: "/research/studies/zhang-2024-tavns-chronic-insomnia-randomized-clinical-trial",
  },
  {
    evidenceType: "DOUBLE-BLIND RANDOMIZED SHAM-CONTROLLED TRIAL",
    year: "2025",
    title: "taVNS and sleep quality",
    description:
      "In 40 participants with chronic insomnia, active taVNS produced significantly greater improvements in sleep quality and insomnia severity than sham after six weeks. The study also reported positive findings for total sleep time and quality of life.",
    protocol: "Studied protocol: 30 minutes daily for six weeks.",
    cta: "Read Yeom 2025 study summary",
    href: "/research/studies/yeom-2025-tavns-chronic-insomnia-randomized-sham-controlled-trial",
  },
] as const;

const eveningRoutineSteps = [
  {
    number: "01",
    title: "Prepare and position the earpiece",
    description:
      "Lightly moisten the supplied earpiece with conductive gel or water, then place it in the correct position in the left ear as described in the User Manual.",
  },
  {
    number: "02",
    title: "Select Sleep mode",
    description:
      "Choose the dedicated Sleep mode and begin the 20-minute session as part of your evening wind-down.",
  },
  {
    number: "03",
    title: "Adjust the intensity",
    description:
      "Increase the intensity gradually until the stimulation feels strong and noticeable but remains comfortable and does not hurt. Higher intensity does not mean better effect.",
  },
] as const;

const relatedTopics = [
  {
    title: "Why you feel tired but can’t relax",
    description:
      "Understand why exhaustion and nervous system activation can exist at the same time.",
    cta: "Explore wired-but-tired",
    href: "/learn/why-you-feel-tired-but-cant-relax",
  },
  {
    title: "How to calm your nervous system",
    description:
      "Explore practical, science-informed ways to support a shift from alertness toward a calmer state.",
    cta: "Explore calming",
    href: "/learn/how-to-calm-your-nervous-system",
  },
  {
    title: "Recovery and regulation",
    description:
      "Learn how rest, recovery capacity and nervous system regulation connect over time.",
    cta: "Explore recovery",
    href: "/learn/recovery-and-regulation",
  },
] as const;

const primaryButtonClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 sm:w-auto";

const secondaryButtonClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/15 px-7 py-3 text-sm font-medium text-[#1f1f1c] transition hover:border-black/25 hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 sm:w-auto";

const editorialLinkClass =
  "inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] underline underline-offset-4 transition hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4";

export default function SleepPage() {
  const structuredData = buildAuthorityPageStructuredData({
    title: pageTitle,
    description: pageDescription,
    path: pagePath,
    articleSection: "Conditions",
    dateModified: authorityEditorialDates.vnsClusterModified,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Conditions", path: "/conditions" },
      { name: "Sleep", path: pagePath },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="conditions-sleep" />

      <section
        data-sleep-section="hero"
        className="border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto grid min-h-[78vh] max-w-[92rem] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:gap-20 lg:px-12 lg:py-24">
          <div className="max-w-[48rem]">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#7a756c] sm:text-xs"
            >
              <Link
                href="/conditions"
                className="rounded-sm transition hover:text-[#1f1f1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
              >
                Conditions
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Sleep</span>
            </nav>

            <h1 className="mt-6 max-w-[16ch] text-balance text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Vagus nerve stimulation designed to support better sleep.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#4f4a43] sm:text-lg">
              Neuvago is a non-invasive vagus nerve stimulator designed to
              support calmer evenings, easier wind-down and better sleep. It
              delivers gentle, adjustable stimulation through an earpiece at
              the outer ear, with a dedicated Sleep mode and a 20-minute
              session.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#686158]">
              Sleep is shaped by more than tiredness. Stress, mental activity
              and lingering nervous system activation can make it harder to
              move from alertness into rest, stay asleep and feel restored the
              next day.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/product"
                className={`${primaryButtonClass} focus-visible:ring-offset-[#f7f4ef]`}
              >
                Explore Neuvago
              </Link>
              <Link
                href="#sleep-research"
                className={`${secondaryButtonClass} focus-visible:ring-offset-[#f7f4ef]`}
              >
                View sleep research
              </Link>
            </div>
          </div>

          <div className="relative min-h-[30rem] overflow-hidden rounded-[2.4rem] border border-black/6 bg-[#e9dfd2] shadow-[0_28px_95px_rgba(31,31,28,0.11)] sm:min-h-[38rem] lg:min-h-[44rem]">
            <Image
              src="/images/neuvago/launch/routine-evening-desktop.webp"
              alt="Neuvago device in a warm evening setting prepared for a sleep routine."
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/8" />
          </div>
        </div>
      </section>

      <section
        data-sleep-section="patterns"
        className="border-b border-black/5 bg-[#efe8de]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              WHEN SLEEP FEELS HARD
            </p>
            <h2 className="mt-5 max-w-[17ch] text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Sleep can be difficult even when you are tired.
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Falling asleep and staying asleep require more than fatigue.
              Stress, an active mind and lingering physiological alertness can
              make it harder for the body to shift into rest.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/8 bg-black/8 sm:grid-cols-2 xl:grid-cols-4">
            {sleepPatterns.map((pattern) => (
              <article
                key={pattern.title}
                className="min-h-[16rem] bg-[#f8f5f0] p-7 sm:p-8"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em]">
                  {pattern.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {pattern.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sleep-research"
        data-sleep-section="research"
        className="scroll-mt-24 border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              CLINICAL SLEEP RESEARCH
            </p>
            <h2 className="mt-5 max-w-[19ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Randomized trials have reported positive sleep outcomes.
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              Two randomized sham-controlled trials in people with chronic
              insomnia reported greater improvements in sleep outcomes with
              active taVNS than with sham under the specific protocols studied.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {sleepStudies.map((study, index) => (
              <article
                key={study.href}
                className={`rounded-[2rem] border p-7 sm:p-9 ${
                  index === 0
                    ? "border-black/9 bg-white shadow-[0_18px_62px_rgba(31,31,28,0.065)]"
                    : "border-black/6 bg-[#f2eee8] shadow-[0_12px_42px_rgba(31,31,28,0.04)]"
                }`}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#70685f]">
                    {study.evidenceType}
                  </span>
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#8a847b]">
                    {study.year}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.045em]">
                  {study.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#5f5a52]">
                  {study.description}
                </p>
                <p className="mt-6 border-t border-black/8 pt-5 text-sm leading-7 text-[#70685f]">
                  {study.protocol}
                </p>
                <Link
                  href={study.href}
                  className={`${editorialLinkClass} mt-7 focus-visible:ring-offset-white`}
                >
                  {study.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-7 max-w-4xl text-sm leading-7 text-[#70685f] sm:text-base">
            These trials examined specific external taVNS protocols and did not
            evaluate the Neuvago device.
          </p>
        </div>
      </section>

      <section
        data-sleep-section="routine"
        className="border-b border-black/5 bg-[#e9dfd2]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
            <div className="max-w-[42rem]">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
                NEUVAGO SLEEP MODE
              </p>
              <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
                A simple 20-minute routine for calmer evenings.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
                Neuvago delivers gentle, adjustable stimulation through an
                earpiece at the outer ear. Its dedicated Sleep mode uses a slow,
                continuous stimulation pattern designed for evening wind-down
                and rest.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#70685f] sm:text-base">
                Every Neuvago mode runs for 20 minutes and ends quietly.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/how-it-works"
                  className={`${primaryButtonClass} focus-visible:ring-offset-[#e9dfd2]`}
                >
                  See how Neuvago works
                </Link>
                <Link
                  href="/product"
                  className={`${secondaryButtonClass} focus-visible:ring-offset-[#e9dfd2]`}
                >
                  Explore the device
                </Link>
              </div>
            </div>

            <div className="border-t border-black/12">
              {eveningRoutineSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 border-b border-black/12 py-8 sm:grid-cols-[4rem_1fr] sm:py-10"
                >
                  <span className="text-xs font-medium tracking-[0.18em] text-[#8a847b]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-sleep-section="app"
        className="border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div className="max-w-[44rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              ADDITIONAL TOOLS
            </p>
            <h2 className="mt-5 max-w-[15ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              More ways to support sleep and wind-down.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              The Neuvago app works independently from the device and brings
              together guided sleep sessions and breathing practices you can
              use with or without stimulation.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#686158]">
              Guided sessions can support falling asleep, returning to sleep
              during the night and quieting an active mind, while breathing
              practices offer another simple way to create a calmer evening
              routine.
            </p>
            <Link
              href="/app"
              className={`${secondaryButtonClass} mt-9 focus-visible:ring-offset-[#f7f4ef]`}
            >
              Explore the Neuvago app
            </Link>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden rounded-[2.2rem] border border-black/6 bg-[#e9dfd2] shadow-[0_24px_78px_rgba(31,31,28,0.09)] sm:min-h-[34rem]">
            <Image
              src="/images/neuvago/evening-wind-down-desktop.webp"
              alt="Neuvago device and optional app tools in a calm evening setting."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        data-sleep-section="related"
        className="border-b border-black/5 bg-[#efe8de]"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-12 lg:py-28">
          <div className="max-w-[42rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#7b7167] sm:text-xs">
              CONTINUE EXPLORING
            </p>
            <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]">
              Explore sleep and nervous system regulation.
            </h2>
          </div>

          <div className="border-t border-black/12">
            {relatedTopics.map((topic) => (
              <article
                key={topic.href}
                className="border-b border-black/12 py-8 sm:py-10"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">
                  {topic.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {topic.description}
                </p>
                <Link
                  href={topic.href}
                  className={`${editorialLinkClass} mt-6 focus-visible:ring-offset-[#efe8de]`}
                >
                  {topic.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        data-sleep-section="responsible"
        aria-label="Responsible use"
        className="border-b border-black/5 bg-[#f7f4ef]"
      >
        <div className="mx-auto max-w-[92rem] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <p className="max-w-4xl text-sm leading-7 text-[#686158] sm:text-base">
            Neuvago is a general wellness device and is not intended to diagnose
            or treat insomnia. Persistent or severe sleep problems should be
            discussed with a qualified healthcare professional.
          </p>
        </div>
      </section>

      <section
        data-sleep-section="final-cta"
        className="bg-[#1f1f1c] text-white"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div className="max-w-[44rem]">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/55 sm:text-xs">
              NEUVAGO
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(3rem,5.8vw,6.2rem)] font-medium leading-[0.94] tracking-[-0.065em]">
              Make Neuvago part of your evening routine.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              Explore a non-invasive vagus nerve stimulator with a dedicated
              Sleep mode, four 20-minute stimulation modes and 30 adjustable
              intensity levels.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/shop"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b27b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f1f1c] sm:w-auto"
              >
                Get launch access
              </Link>
              <Link
                href="/product"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/24 px-7 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7b27b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f1f1c] sm:w-auto"
              >
                Explore the product
              </Link>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#302d29] sm:min-h-[34rem]">
            <Image
              src="/images/neuvago/launch/sleep-final-cta-device-only.webp"
              alt="Neuvago device resting naturally in a warm evening setting with no phone or app shown."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
          </div>
        </div>
      </section>
    </main>
  );
}
