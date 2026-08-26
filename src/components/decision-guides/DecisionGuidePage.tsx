import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import type {
  DecisionGuideBlock,
  DecisionGuideCalloutTone,
  DecisionGuideContent,
  DecisionGuideSourceType,
} from "@/content/decision-guides/types";
import { buildDecisionGuideStructuredData } from "@/lib/seo/decision-guide";

const calloutClasses: Record<DecisionGuideCalloutTone, string> = {
  summary: "border-[#d8cbbc] bg-[#efe7dc]",
  evidence: "border-[#c7d3cd] bg-[#e8efeb]",
  scope: "border-[#d3c9bd] bg-[#f2eee8]",
  safety: "border-[#d8c3bd] bg-[#f4e9e5]",
  product: "border-[#c8c0b6] bg-[#ebe4db]",
};

const sourceTypeLabels: Record<
  DecisionGuideSourceType,
  { en: string; no: string }
> = {
  "comparative-study": {
    en: "Comparative study",
    no: "Komparativ studie",
  },
  "research-article": {
    en: "Research article",
    no: "Forskningsartikkel",
  },
  "anatomy-review": {
    en: "Anatomy review",
    no: "Anatomioversikt",
  },
  "randomized-trial": {
    en: "Randomized trial",
    no: "Randomisert studie",
  },
  "systematic-review": {
    en: "Systematic review",
    no: "Systematisk oversikt",
  },
  "consensus-review": {
    en: "Consensus review",
    no: "Konsensusoversikt",
  },
};

function formatDate(value: string, locale: "en" | "no") {
  return new Intl.DateTimeFormat(locale === "no" ? "nb-NO" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${value}T12:00:00Z`));
}

function BlockRenderer({
  block,
  locale,
}: {
  block: DecisionGuideBlock;
  locale: "en" | "no";
}) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base leading-8 text-[#4f4a43] md:text-lg md:leading-9">
          {block.text}
        </p>
      );

    case "bullets":
      return (
        <ul className="space-y-3 pl-5 text-base leading-8 text-[#4f4a43] marker:text-[#8a7f72] md:text-lg">
          {block.items.map((item) => (
            <li key={item} className="pl-2">
              {item}
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol className="space-y-4 pl-6 text-base leading-8 text-[#4f4a43] marker:font-medium marker:text-[#6f665c] md:text-lg">
          {block.items.map((item) => (
            <li key={item} className="pl-2">
              {item}
            </li>
          ))}
        </ol>
      );

    case "cards":
      return (
        <div className="grid gap-5 md:grid-cols-2">
          {block.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-black/6 bg-white/68 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
            >
              {item.label ? (
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#84796e]">
                  {item.label}
                </p>
              ) : null}
              <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.025em] text-[#1f1f1c]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52] md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      );

    case "callout":
      return (
        <aside
          className={`rounded-[1.5rem] border p-6 md:p-7 ${calloutClasses[block.tone]}`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#746b62]">
            {block.tone === "safety"
              ? locale === "no"
                ? "Sikkerhet"
                : "Safety"
              : block.tone === "evidence"
                ? locale === "no"
                  ? "Forskningskontekst"
                  : "Evidence context"
                : block.tone === "scope"
                  ? locale === "no"
                    ? "Avgrensning"
                    : "Scope"
                  : block.tone === "product"
                    ? locale === "no"
                      ? "Produktfakta"
                      : "Product facts"
                    : locale === "no"
                      ? "Oppsummering"
                      : "Summary"}
          </p>
          <h3 className="mt-3 text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
            {block.title}
          </h3>
          <div className="mt-4 space-y-3">
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-[#514c45] md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </aside>
      );
  }
}

function ComparisonVisual({ guide }: { guide: DecisionGuideContent }) {
  const comparison = guide.comparison;

  if (!comparison) {
    return null;
  }

  return (
    <section className="border-b border-black/6 bg-[#eee7dd]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
            {comparison.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
            {comparison.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
            {comparison.introduction}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          {[comparison.left, comparison.right].map((side, index) => (
            <div key={side.title} className={index === 1 ? "md:col-start-3" : ""}>
              <article className="h-full rounded-[2rem] border border-black/7 bg-white/70 p-7 shadow-[0_20px_70px_rgba(31,31,28,0.06)] sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#82776b]">
                  {side.label}
                </p>
                <h3 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em]">
                  {side.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#5f5a52]">
                  {side.summary}
                </p>
                <ul className="mt-7 space-y-3">
                  {side.facts.map((fact) => (
                    <li
                      key={fact}
                      className="rounded-[1rem] border border-black/5 bg-[#f7f4ef] px-4 py-3 text-sm leading-6 text-[#514c45]"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}

          <div className="hidden items-center justify-center md:col-start-2 md:row-start-1 md:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#f7f4ef] text-xl font-medium text-[#6f665c]">
              ≠
            </span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-black/7 bg-white/72 shadow-[0_16px_56px_rgba(31,31,28,0.05)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[64rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/7 bg-[#f4efe8]">
                  <th className="px-5 py-4 text-sm font-medium text-[#1f1f1c]">
                    {comparison.rowLabels.criterion}
                  </th>
                  <th className="px-5 py-4 text-sm font-medium text-[#1f1f1c]">
                    {comparison.rowLabels.left}
                  </th>
                  <th className="px-5 py-4 text-sm font-medium text-[#1f1f1c]">
                    {comparison.rowLabels.right}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr
                    key={row.criterion}
                    className="border-b border-black/5 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="w-[18%] px-5 py-5 align-top text-sm font-medium leading-7 text-[#1f1f1c]"
                    >
                      {row.criterion}
                    </th>
                    <td className="w-[41%] px-5 py-5 align-top text-sm leading-7 text-[#5f5a52]">
                      {row.left}
                    </td>
                    <td className="w-[41%] px-5 py-5 align-top text-sm leading-7 text-[#5f5a52]">
                      {row.right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-[#6b635a]">
          {comparison.footnote}
        </p>
      </div>
    </section>
  );
}

function actionClass(variant: "primary" | "secondary" | "tertiary") {
  if (variant === "primary") {
    return "bg-white text-[#1f1f1c] hover:bg-[#eee7dd]";
  }

  if (variant === "secondary") {
    return "border border-white/25 bg-white/8 text-white hover:bg-white/14";
  }

  return "border border-white/20 bg-transparent text-white hover:bg-white/10";
}

export function DecisionGuidePage({ guide }: { guide: DecisionGuideContent }) {
  const isNo = guide.locale === "no";
  const structuredData = buildDecisionGuideStructuredData(guide);
  const hubPath = isNo ? "/no/kunnskap" : "/learn";
  const homePath = isNo ? "/no" : "/";

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix={`decision-guide-${guide.id}-${guide.locale}`} />

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <nav aria-label={isNo ? "Brødsmuler" : "Breadcrumbs"}>
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#746d64]">
              <li>
                <Link href={homePath} className="transition hover:text-[#1f1f1c]">
                  {isNo ? "Forside" : "Home"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={hubPath} className="transition hover:text-[#1f1f1c]">
                  {isNo ? "Kunnskap" : "Learn"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#1f1f1c]">
                {guide.hubTitle}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#efe8de]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-12 lg:py-24">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#786e64]">
              {guide.eyebrow}
            </p>
            <h1
              className="mt-5 max-w-[18ch] break-words text-[clamp(2.7rem,7vw,5.7rem)] font-medium leading-[0.96] tracking-[-0.06em] [hyphens:auto] [overflow-wrap:anywhere]"
              lang={isNo ? "nb" : "en"}
            >
              {guide.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#514c45] md:text-xl md:leading-9">
              {guide.lead}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/7 bg-white/58 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              {isNo ? "Om guiden" : "About this guide"}
            </p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-[#5f5a52]">
              <p>
                <span className="text-[#756e65]">{isNo ? "Redaksjon" : "Author"}: </span>
                <span className="font-medium text-[#1f1f1c]">{guide.authorName}</span>
              </p>
              <p>
                <span className="text-[#756e65]">{isNo ? "Kildekontroll" : "Source review"}: </span>
                <span className="font-medium text-[#1f1f1c]">{guide.reviewerName}</span>
              </p>
              <p>
                {isNo ? "Publisert" : "Published"}: {" "}
                <time dateTime={guide.publishedAt}>
                  {formatDate(guide.publishedAt, guide.locale)}
                </time>
              </p>
              <p>
                {isNo ? "Sist oppdatert" : "Last updated"}: {" "}
                <time dateTime={guide.modifiedAt}>
                  {formatDate(guide.modifiedAt, guide.locale)}
                </time>
              </p>
              <p>
                {isNo ? "Lesetid" : "Reading time"}: {isNo ? "omtrent" : "about"} {guide.readingTimeMinutes} {isNo ? "minutter" : "minutes"}
              </p>
            </div>

            <div className="mt-6 border-t border-black/7 pt-5">
              <Link
                href={guide.counterpartPath}
                className="inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
              >
                {isNo ? "Read this guide in English" : "Les guiden på norsk"}
              </Link>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#625b53]">
              {isNo
                ? "Generell informasjon. Ikke medisinsk rådgivning, diagnose eller behandling."
                : "General information. Not medical advice, diagnosis, or treatment."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
          <div className="rounded-[2rem] border border-black/6 bg-white/68 p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              {isNo ? "Kort svar" : "Short answer"}
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {guide.shortAnswer.map((answer) => (
                <li
                  key={answer}
                  className="rounded-[1.25rem] border border-black/5 bg-[#f5f1eb] p-5 text-base leading-7 text-[#514c45]"
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ComparisonVisual guide={guide} />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:px-12 lg:py-24">
        <aside className="self-start lg:sticky lg:top-24">
          <nav
            aria-label={isNo ? "Innholdsfortegnelse" : "Table of contents"}
            className="rounded-[1.5rem] border border-black/6 bg-white/62 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              {isNo ? "På denne siden" : "On this page"}
            </p>
            <ol className="mt-5 space-y-3">
              {guide.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="grid grid-cols-[1.5rem_1fr] gap-2 text-sm leading-6 text-[#5f5a52] transition hover:text-[#1f1f1c]"
                  >
                    <span className="text-[#92877b]">{index + 1}.</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#decision-checklist"
                  className="grid grid-cols-[1.5rem_1fr] gap-2 text-sm leading-6 text-[#5f5a52] transition hover:text-[#1f1f1c]"
                >
                  <span className="text-[#92877b]">{guide.sections.length + 1}.</span>
                  <span>{guide.checklist.title}</span>
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="space-y-20">
            {guide.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-black/6 pb-20 last:border-b-0 last:pb-0"
              >
                {section.eyebrow ? (
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
                  {section.title}
                </h2>
                <div className="mt-8 space-y-7">
                  {section.blocks.map((block, index) => (
                    <BlockRenderer
                      key={`${section.id}-${block.type}-${index}`}
                      block={block}
                      locale={guide.locale}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      <section
        id="decision-checklist"
        className="scroll-mt-28 border-y border-black/6 bg-[#eee7dd]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              {guide.checklist.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              {guide.checklist.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              {guide.checklist.introduction}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {guide.checklist.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/6 bg-white/68 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
              >
                <h3 className="text-xl font-medium leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              {isNo ? "Vanlige spørsmål" : "Frequently asked questions"}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              {isNo
                ? "Korte svar om øre- og halsbasert VNS"
                : "Short answers about ear- and neck-based VNS"}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {guide.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.5rem] border border-black/6 bg-white/65 p-6"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              {isNo ? "Kilder" : "Sources"}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              {isNo ? "Kildegrunnlag for sammenligningen" : "Evidence base for the comparison"}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52] md:text-lg">
              {isNo
                ? "Kildene forklarer metode, anatomi, target engagement, studiedesign og sikkerhetsrapportering. De dokumenterer ikke automatisk en bestemt effekt av Neuvago."
                : "These sources frame method, anatomy, target engagement, study design, and safety reporting. They do not automatically document a specific effect of Neuvago."}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {guide.sources.map((source) => (
              <article
                key={source.id}
                className="rounded-[1.5rem] border border-black/6 bg-white/68 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#84796e]">
                  {sourceTypeLabels[source.type][guide.locale]} · {source.year}
                </p>
                <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.025em]">
                  {source.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {source.authors}. {source.publication}.
                </p>
                <p className="mt-3 text-sm leading-7 text-[#625b53]">
                  {source.note}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#514c45]">
                  {source.doi ? <span>DOI: {source.doi}</span> : null}
                  {source.pmid ? <span>PMID: {source.pmid}</span> : null}
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm font-medium underline decoration-black/25 underline-offset-4 transition hover:decoration-black"
                >
                  {isNo ? "Åpne primærkilden" : "Open primary source"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              {isNo ? "Les videre" : "Continue learning"}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              {isNo
                ? "Fortsett til metode, forskning, sikkerhet og produktgrenser"
                : "Continue into method, research, safety, and product boundaries"}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {guide.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-[1.5rem] border border-black/6 bg-white/65 p-6 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {link.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium underline-offset-4 group-hover:underline">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#1f1f1c] p-7 text-white sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                {guide.productBridge.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                {guide.productBridge.title}
              </h2>
              <div className="mt-5 space-y-3">
                {guide.productBridge.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-white/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 flex shrink-0 flex-wrap gap-3 lg:mt-0 lg:max-w-sm lg:justify-end">
              {guide.productBridge.actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${actionClass(action.variant)}`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
