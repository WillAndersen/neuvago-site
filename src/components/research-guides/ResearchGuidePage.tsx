import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import type {
  ResearchGuideBlock,
  ResearchGuideCalloutTone,
  ResearchGuideContent,
  ResearchGuideSource,
  ResearchGuideSourceType,
} from "@/content/research-guides/types";
import { buildResearchGuideStructuredData } from "@/lib/seo/research-guide";

const calloutClasses: Record<ResearchGuideCalloutTone, string> = {
  summary: "border-[#d8cbbc] bg-[#efe7dc]",
  evidence: "border-[#c9d1cc] bg-[#e9efeb]",
  scope: "border-[#d3c9bd] bg-[#f2eee8]",
  safety: "border-[#d8c3bd] bg-[#f4e9e5]",
};

const sourceTypeLabels: Record<
  ResearchGuideSourceType,
  { en: string; no: string }
> = {
  "reporting-guideline": {
    en: "Reporting guideline",
    no: "Rapporteringsstandard",
  },
  "methods-paper": {
    en: "Methods paper",
    no: "Metodeartikkel",
  },
  "systematic-review-guidance": {
    en: "Systematic-review guidance",
    no: "Veiledning for systematiske oversikter",
  },
  "risk-of-bias-tool": {
    en: "Risk-of-bias tool",
    no: "Verktøy for risiko for skjevhet",
  },
  "evidence-framework": {
    en: "Evidence framework",
    no: "Evidensrammeverk",
  },
  "official-guidance": {
    en: "Official guidance",
    no: "Offisiell veiledning",
  },
  "research-article": {
    en: "Research article",
    no: "Forskningsartikkel",
  },
};

const labels = {
  en: {
    home: "Home",
    hub: "Research",
    published: "Published",
    updated: "Updated",
    readingTime: "Reading time",
    minutes: "min",
    author: "Written by",
    reviewer: "Source review",
    counterpart: "Read Norwegian version",
    quickEyebrow: "The practical answer",
    quickTitle: "Four rules before you repeat a study conclusion",
    frameworkQuestion: "Question",
    frameworkWhy: "Why it matters",
    frameworkWarning: "Warning sign",
    contents: "On this page",
    examplesEyebrow: "Worked examples",
    examplesTitle: "Four studies, four different evidence questions",
    examplesDescription:
      "Use the same reading framework while keeping the design-specific lesson visible.",
    exampleLesson: "Reading lesson",
    exampleLink: "Open study summary",
    checklistItem: "Check",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Research labels do not remove the need for interpretation",
    sourcesEyebrow: "Source basis",
    sourcesTitle: "Reporting standards and methods used for this guide",
    openSource: "Open source",
    relatedEyebrow: "Continue reading",
    relatedTitle: "Move between methods, studies and definitions",
    finalEyebrow: "Research principle",
    finalTitle: "A better reading process produces narrower, stronger claims",
    finalDescription:
      "The goal is not to distrust every study. It is to identify the exact question, method, estimate and boundary before evidence is carried into another context.",
    finalPrimary: "Browse scientific studies",
    finalSecondary: "Back to research hub",
  },
  no: {
    home: "Forside",
    hub: "Forskning",
    published: "Publisert",
    updated: "Oppdatert",
    readingTime: "Lesetid",
    minutes: "min",
    author: "Skrevet av",
    reviewer: "Kildekontroll",
    counterpart: "Les engelsk versjon",
    quickEyebrow: "Det praktiske svaret",
    quickTitle: "Fire regler før du gjentar en studiekonklusjon",
    frameworkQuestion: "Spørsmål",
    frameworkWhy: "Hvorfor det betyr noe",
    frameworkWarning: "Varselsignal",
    contents: "På denne siden",
    examplesEyebrow: "Eksempler",
    examplesTitle: "Fire studier – fire ulike evidensspørsmål",
    examplesDescription:
      "Bruk samme lesemodell, men behold læringspunktet som følger av studiedesignet.",
    exampleLesson: "Læringspunkt",
    exampleLink: "Åpne studiesammendrag",
    checklistItem: "Kontroll",
    faqEyebrow: "Vanlige spørsmål",
    faqTitle: "Forskningsetiketter fjerner ikke behovet for tolkning",
    sourcesEyebrow: "Kildegrunnlag",
    sourcesTitle: "Rapporteringsstandarder og metoder brukt i guiden",
    openSource: "Åpne kilde",
    relatedEyebrow: "Videre lesning",
    relatedTitle: "Gå mellom metode, studier og definisjoner",
    finalEyebrow: "Forskningsprinsipp",
    finalTitle: "En bedre lesemåte gir smalere og sterkere påstander",
    finalDescription:
      "Målet er ikke å mistru alle studier. Målet er å finne det eksakte spørsmålet, metoden, estimatet og grensen før evidens flyttes til en ny sammenheng.",
    finalPrimary: "Bla i studiesammendrag",
    finalSecondary: "Til forskningshuben",
  },
} as const;

function formatDate(value: string, locale: ResearchGuideContent["locale"]) {
  return new Intl.DateTimeFormat(locale === "no" ? "nb-NO" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}

function BlockRenderer({
  block,
  locale,
}: {
  block: ResearchGuideBlock;
  locale: ResearchGuideContent["locale"];
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
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <article
              key={`${item.label ?? "card"}-${item.title}`}
              className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/72 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.045)]"
            >
              {item.label ? (
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#718076]">
                  {item.label}
                </p>
              ) : null}
              <h3 className="mt-3 break-words text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      );

    case "definition":
      return (
        <div className="rounded-[1.5rem] border border-black/6 bg-white/72 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.045)]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#84796e]">
            {locale === "no" ? "Begrep" : "Definition"}
          </p>
          <h3 className="mt-3 text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
            {block.term}
          </h3>
          <p className="mt-3 text-base leading-8 text-[#5f5a52]">
            {block.definition}
          </p>
        </div>
      );

    case "table":
      return (
        <div className="min-w-0 overflow-hidden rounded-[1.5rem] border border-black/7 bg-white/74 shadow-[0_14px_48px_rgba(31,31,28,0.045)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[52rem] border-collapse text-left">
              {block.caption ? (
                <caption className="border-b border-black/7 bg-[#eee7dd] px-5 py-4 text-left text-sm font-medium text-[#514b44]">
                  {block.caption}
                </caption>
              ) : null}
              <thead>
                <tr className="border-b border-black/7 bg-[#f5f1eb]">
                  {block.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-5 py-4 text-sm font-medium text-[#1f1f1c]"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={`${rowIndex}-${row.join("-")}`}
                    className="border-b border-black/5 last:border-b-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${cellIndex}-${cell}`}
                        className="px-5 py-4 align-top text-sm leading-7 text-[#5f5a52]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "callout":
      return (
        <aside
          className={`rounded-[1.5rem] border p-6 ${calloutClasses[block.tone]}`}
        >
          <h3 className="text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
            {block.title}
          </h3>
          <div className="mt-4 space-y-3">
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-[#5f5a52] md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </aside>
      );
  }
}

function SourceCard({
  source,
  guide,
}: {
  source: ResearchGuideSource;
  guide: ResearchGuideContent;
}) {
  const copy = labels[guide.locale];

  return (
    <article className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/74 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.045)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#e9efeb] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#66736a]">
          {sourceTypeLabels[source.type][guide.locale]}
        </span>
        <span className="text-xs text-[#84796e]">{source.year}</span>
      </div>
      <h3 className="mt-4 break-words text-xl font-medium leading-tight tracking-[-0.025em]">
        {source.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#6a645d]">
        {source.authors}
      </p>
      <p className="mt-1 text-sm leading-7 text-[#7b756d]">
        {source.publication}
      </p>
      <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
        {source.note}
      </p>
      <div className="mt-5 space-y-1 text-xs leading-6 text-[#756e65]">
        {source.doi ? <p>DOI: {source.doi}</p> : null}
        {source.pmid ? <p>PMID: {source.pmid}</p> : null}
      </div>
      <a
        href={source.url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
      >
        {copy.openSource}
      </a>
    </article>
  );
}

export function ResearchGuidePage({
  guide,
}: {
  guide: ResearchGuideContent;
}) {
  const copy = labels[guide.locale];
  const structuredData = buildResearchGuideStructuredData(guide);
  const homePath = guide.locale === "no" ? "/no" : "/";
  const hubPath = guide.locale === "no" ? "/no/forskning" : "/research";

  return (
    <main className="min-w-0 bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix={`research-guide-${guide.id}-${guide.locale}`}
      />

      <section className="border-b border-black/6 bg-[#e9eeea]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-[#66736a]"
          >
            <Link href={homePath} className="hover:underline">
              {copy.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={hubPath} className="hover:underline">
              {copy.hub}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{guide.hubTitle}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.65fr)] lg:items-end">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#66736a]">
                {guide.eyebrow}
              </p>
              <h1
                lang={guide.locale === "no" ? "nb" : "en"}
                className="mt-5 max-w-[19ch] min-w-0 break-words text-[clamp(2.9rem,7vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em] [hyphens:none] [overflow-wrap:anywhere]"
              >
                {guide.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#485149] md:text-xl md:leading-9">
                {guide.lead}
              </p>
            </div>

            <aside className="rounded-[1.75rem] border border-black/7 bg-white/62 p-6 shadow-[0_18px_62px_rgba(31,31,28,0.055)] backdrop-blur sm:p-7">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#718076]">
                    {copy.published}
                  </dt>
                  <dd className="mt-1 font-medium">
                    {formatDate(guide.publishedAt, guide.locale)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#718076]">
                    {copy.updated}
                  </dt>
                  <dd className="mt-1 font-medium">
                    {formatDate(guide.modifiedAt, guide.locale)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#718076]">
                    {copy.readingTime}
                  </dt>
                  <dd className="mt-1 font-medium">
                    {guide.readingTimeMinutes} {copy.minutes}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#718076]">
                    {copy.author}
                  </dt>
                  <dd className="mt-1 font-medium">{guide.authorName}</dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-black/7 pt-5 text-sm leading-7 text-[#5f5a52]">
                <span className="text-[#756e65]">{copy.reviewer}: </span>
                <span className="font-medium text-[#1f1f1c]">
                  {guide.reviewerName}
                </span>
              </p>
              <Link
                href={guide.counterpartPath}
                hrefLang={guide.locale === "no" ? "en-US" : "nb-NO"}
                className="mt-5 inline-flex rounded-full border border-black/10 bg-white/50 px-5 py-2.5 text-sm font-medium transition hover:bg-white"
              >
                {copy.counterpart}
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-black/6">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {copy.quickEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {copy.quickTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {guide.shortAnswer.map((answer, index) => (
              <article
                key={answer}
                className={`rounded-[1.5rem] border p-6 shadow-[0_14px_48px_rgba(31,31,28,0.045)] ${
                  index === 0
                    ? "border-black/10 bg-[#1f1f1c] text-white"
                    : "border-black/6 bg-white/72"
                }`}
              >
                <p
                  className={`text-xs font-medium uppercase tracking-[0.16em] ${
                    index === 0 ? "text-white/50" : "text-[#718076]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p
                  className={`mt-4 text-base leading-8 ${
                    index === 0 ? "text-white/76" : "text-[#596159]"
                  }`}
                >
                  {answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eef2ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {guide.framework.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {guide.framework.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#596159] md:text-lg">
              {guide.framework.introduction}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {guide.framework.items.map((item) => (
              <article
                key={item.label}
                className="min-w-0 rounded-[1.6rem] border border-black/6 bg-white/76 p-6 shadow-[0_16px_52px_rgba(31,31,28,0.045)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#718076]">
                    {item.label}
                  </p>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9cab9f]" />
                </div>
                <h3 className="mt-3 break-words text-2xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#718076]">
                      {copy.frameworkQuestion}
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-[#4f5850]">
                      {item.question}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#718076]">
                      {copy.frameworkWhy}
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-[#4f5850]">
                      {item.whyItMatters}
                    </dd>
                  </div>
                  <div className="rounded-xl bg-[#f4e9e5] p-4">
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#8b6e66]">
                      {copy.frameworkWarning}
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-[#69534d]">
                      {item.warning}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(13rem,0.3fr)_minmax(0,1fr)] lg:px-12 lg:py-24">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
            {copy.contents}
          </p>
          <nav className="mt-5 space-y-2" aria-label={copy.contents}>
            {guide.sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex gap-3 rounded-xl px-3 py-2 text-sm leading-6 text-[#5f5a52] transition hover:bg-[#eee7dd] hover:text-[#1f1f1c]"
              >
                <span className="text-[#9a8f82]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{section.title}</span>
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 space-y-16 lg:space-y-20">
          {guide.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="min-w-0 scroll-mt-28"
            >
              {section.eyebrow ? (
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
                  {section.eyebrow}
                </p>
              ) : null}
              <h2 className="mt-4 max-w-4xl break-words text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
                {section.title}
              </h2>
              <div className="mt-8 min-w-0 space-y-7">
                {section.blocks.map((block, index) => (
                  <BlockRenderer
                    key={`${section.id}-${index}`}
                    block={block}
                    locale={guide.locale}
                  />
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>

      <section className="border-y border-black/6 bg-[#e9eeea]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {copy.examplesEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {copy.examplesTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#596159] md:text-lg">
              {copy.examplesDescription}
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {guide.examples.map((example) => (
              <article
                key={example.href}
                className="min-w-0 rounded-[1.75rem] border border-black/6 bg-white/76 p-6 shadow-[0_16px_52px_rgba(31,31,28,0.045)] sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#eef2ef] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#66736a]">
                    {example.label}
                  </span>
                  <span className="text-xs text-[#84796e]">
                    {example.evidenceType}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
                  {example.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#596159] md:text-base">
                  {example.summary}
                </p>
                <div className="mt-6 rounded-[1.25rem] bg-[#efe7dc] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#84796e]">
                    {copy.exampleLesson}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                    {example.lesson}
                  </p>
                </div>
                <Link
                  href={example.href}
                  className="mt-6 inline-flex rounded-full bg-[#1f1f1c] px-5 py-2.5 text-sm font-medium text-white"
                >
                  {copy.exampleLink}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {guide.checklist.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {guide.checklist.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#596159] md:text-lg">
              {guide.checklist.introduction}
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guide.checklist.items.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.4rem] border border-black/6 bg-white/72 p-5"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-black/20 bg-white"
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#718076]">
                      {copy.checklistItem} {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#786e64]">
              {copy.faqEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {copy.faqTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {guide.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.4rem] border border-black/6 bg-white/70 p-5 open:bg-white"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-medium leading-7 marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {copy.sourcesEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {copy.sourcesTitle}
            </h2>
          </div>
          <div className="mt-12 grid min-w-0 gap-6 lg:grid-cols-2">
            {guide.sources.map((source) => (
              <SourceCard key={source.id} source={source} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eef2ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {copy.relatedEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {copy.relatedTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {guide.relatedLinks.map((item) => (
              <article
                key={item.href}
                className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/72 p-6"
              >
                <h3 className="break-words text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#596159]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4"
                >
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1c] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/58">
              {copy.finalEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              {copy.finalTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">
              {copy.finalDescription}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <Link
              href="/research/studies"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c]"
            >
              {copy.finalPrimary}
            </Link>
            <Link
              href={hubPath}
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white"
            >
              {copy.finalSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
