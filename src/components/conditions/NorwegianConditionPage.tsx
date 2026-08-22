import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import {
  getEditorialEntity,
  type EditorialEntity,
} from "@/content/editorial/people";
import type {
  NorwegianConditionPage,
  NorwegianKnowledgeBlock,
  NorwegianKnowledgeSource,
} from "@/content/conditions/no/types";
import { getNorwegianKnowledgeArticle } from "@/content/knowledge/no/registry";
import { buildNorwegianConditionStructuredData } from "@/lib/seo/norwegian-condition";

const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T12:00:00Z`));
}

function EditorialEntityLine({
  label,
  entity,
}: {
  label: string;
  entity: EditorialEntity;
}) {
  const content = (
    <>
      <span className="font-medium text-[#1f1f1c]">{entity.name}</span>
      <span className="text-[#756e65]"> · {entity.role}</span>
    </>
  );

  return (
    <p className="text-sm leading-6 text-[#5f5a52]">
      <span className="text-[#756e65]">{label}: </span>
      {entity.profilePath ? (
        <Link
          href={entity.profilePath}
          className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </p>
  );
}

function BlockRenderer({ block }: { block: NorwegianKnowledgeBlock }) {
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

    case "definition":
      return (
        <div className="rounded-[1.5rem] border border-black/6 bg-white/70 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#84796e]">
            Begrep
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
        <div className="overflow-hidden rounded-[1.5rem] border border-black/7 bg-white/72 shadow-[0_14px_48px_rgba(31,31,28,0.05)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[44rem] border-collapse text-left">
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

    case "callout": {
      const classes = {
        summary: "border-[#d8cbbc] bg-[#efe7dc]",
        evidence: "border-[#c9d1cc] bg-[#e9efeb]",
        scope: "border-[#d3c9bd] bg-[#f2eee8]",
        safety: "border-[#d8c3bd] bg-[#f4e9e5]",
      }[block.tone];

      const label = {
        summary: "Oppsummering",
        evidence: "Forskningskontekst",
        scope: "Avgrensning",
        safety: "Sikkerhet",
      }[block.tone];

      return (
        <aside className={`rounded-[1.5rem] border p-6 md:p-7 ${classes}`}>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#746b62]">
            {label}
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
}

function SourceCard({ source }: { source: NorwegianKnowledgeSource }) {
  const typeLabels = {
    "research-article": "Forskningsartikkel",
    review: "Faglig oversikt",
    "systematic-review": "Systematisk oversikt",
    "official-guidance": "Offisiell veiledning",
    "reference-work": "Referanseverk",
  } as const;

  return (
    <article className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/70 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
        {typeLabels[source.type]} · {source.year}
      </p>
      <h3 className="mt-3 break-words text-lg font-medium leading-7 tracking-[-0.02em] text-[#1f1f1c]">
        {source.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#625b53]">
        {source.authors} · {source.publication}
      </p>
      {source.note ? (
        <p className="mt-4 text-sm leading-7 text-[#5f5a52]">{source.note}</p>
      ) : null}
      <div className="mt-5 flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm">
        <a
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="break-all font-medium text-[#1f1f1c] underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
        >
          Åpne kilde
        </a>
        {source.doi ? (
          <span className="break-all text-[#756e65]">DOI: {source.doi}</span>
        ) : null}
        {source.pmid ? (
          <span className="break-all text-[#756e65]">PMID: {source.pmid}</span>
        ) : null}
      </div>
    </article>
  );
}

export function NorwegianConditionPageView({
  page,
}: {
  page: NorwegianConditionPage;
}) {
  const author = getEditorialEntity(page.authorId);
  const reviewer = getEditorialEntity(page.sourceReviewerId);
  const structuredData = buildNorwegianConditionStructuredData(page);
  const relatedKnowledge = page.relatedKnowledgeSlugs
    .map((slug) => getNorwegianKnowledgeArticle(slug))
    .filter((item) => Boolean(item));

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix={`no-tilstander-${page.slug}`} />

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <nav aria-label="Brødsmuler">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#746d64]">
              <li>
                <Link href="/no" className="transition hover:text-[#1f1f1c]">
                  Forside
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/no/tilstander"
                  className="transition hover:text-[#1f1f1c]"
                >
                  Tilstander
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#1f1f1c]">
                {page.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#efe8de]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-12 lg:py-24">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#786e64]">
              {page.eyebrow}
            </p>
            <h1
              lang="nb"
              className="mt-5 max-w-[18ch] min-w-0 break-words text-[clamp(2.65rem,7vw,5.65rem)] font-medium leading-[0.96] tracking-[-0.06em] [hyphens:auto] [overflow-wrap:anywhere]"
            >
              {page.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#514c45] md:text-xl md:leading-9">
              {page.lead}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/7 bg-white/58 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              Om siden
            </p>
            <div className="mt-5 space-y-3">
              <EditorialEntityLine label="Redaksjon" entity={author} />
              <EditorialEntityLine label="Kildekontroll" entity={reviewer} />
              <p className="text-sm leading-6 text-[#5f5a52]">
                Publisert:{" "}
                <time dateTime={page.publishedAt}>
                  {formatDate(page.publishedAt)}
                </time>
              </p>
              <p className="text-sm leading-6 text-[#5f5a52]">
                Sist oppdatert:{" "}
                <time dateTime={page.modifiedAt}>
                  {formatDate(page.modifiedAt)}
                </time>
              </p>
              <p className="text-sm leading-6 text-[#5f5a52]">
                Lesetid: omtrent {page.readingTimeMinutes} minutter
              </p>
            </div>
            <p className="mt-6 border-t border-black/7 pt-5 text-sm leading-7 text-[#625b53]">
              {page.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
          <div className="rounded-[2rem] border border-black/6 bg-white/68 p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              Kort forklart
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {page.shortAnswer.map((answer) => (
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

      <section className="border-b border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#786e64]">
              {page.pathway.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              {page.pathway.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52] md:text-lg">
              {page.pathway.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {page.pathway.steps.map((step) => (
              <article
                key={step.number}
                className="relative min-w-0 rounded-[1.75rem] border border-black/6 bg-white/70 p-6 shadow-[0_16px_52px_rgba(31,31,28,0.05)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8a7f72]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {step.description}
                </p>
                {step.href && step.label ? (
                  <Link
                    href={step.href}
                    className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
                  >
                    {step.label}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-12 lg:py-24">
        <aside className="self-start lg:sticky lg:top-24">
          <div className="rounded-[1.5rem] border border-black/6 bg-white/66 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              På denne siden
            </p>
            <ol className="mt-5 space-y-3">
              {page.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-6 text-[#5f5a52] transition hover:text-[#1f1f1c]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="space-y-16">
            {page.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                {section.eyebrow ? (
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="mt-3 max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
                  {section.title}
                </h2>
                <div className="mt-7 space-y-6">
                  {section.blocks.map((block, index) => (
                    <BlockRenderer
                      key={`${section.id}-${block.type}-${index}`}
                      block={block}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      <section className="border-y border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              Kilder
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Dokumentasjon og videre lesning
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52] md:text-lg">
              Kildene brukes til å forklare stressfysiologi, målegrenser,
              praktisk støtte og norsk hjelpenivå. De dokumenterer ikke
              automatisk en effekt av Neuvago.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {page.sources.map((source) => (
              <SourceCard key={source.id} source={source} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              Beslektet kunnskap
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Gå fra stress til fysiologi og praktiske strategier
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedKnowledge.map((article) => (
              <article
                key={article!.slug}
                className="rounded-[1.75rem] border border-black/6 bg-white/70 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.17em] text-[#81766b]">
                  {article!.hubLabel}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.025em]">
                  {article!.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {article!.hubSummary}
                </p>
                <Link
                  href={article!.path}
                  className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
                >
                  Les artikkelen
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              Neste steg
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Forskning, app, produkt og tydelige grenser
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.relatedLinks.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.75rem] border border-black/6 bg-white/70 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
              >
                <h3 className="text-xl font-medium tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4 transition hover:decoration-black/60"
                >
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
