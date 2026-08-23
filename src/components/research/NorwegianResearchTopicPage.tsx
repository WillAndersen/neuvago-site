import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import {
  getEditorialEntity,
  type EditorialEntity,
} from "@/content/editorial/people";
import { getNorwegianKnowledgeArticle } from "@/content/knowledge/no/registry";
import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";
import { getNorwegianResearchTopic } from "@/content/research/no/registry";
import type {
  NorwegianResearchBlock,
  NorwegianResearchCalloutTone,
  NorwegianResearchSource,
  NorwegianResearchSourceType,
  NorwegianResearchTopic,
} from "@/content/research/no/types";
import { buildNorwegianResearchTopicStructuredData } from "@/lib/seo/norwegian-research-topic";

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
      <span className="font-medium text-[#1f1f1c]">
        {entity.name}
      </span>
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

const calloutClasses: Record<
  NorwegianResearchCalloutTone,
  string
> = {
  summary: "border-[#d8cbbc] bg-[#efe7dc]",
  evidence: "border-[#c9d1cc] bg-[#e9efeb]",
  scope: "border-[#d3c9bd] bg-[#f2eee8]",
  safety: "border-[#d8c3bd] bg-[#f4e9e5]",
};

const sourceTypeLabels: Record<
  NorwegianResearchSourceType,
  string
> = {
  "research-article": "Forskningsartikkel",
  "randomized-trial": "Randomisert studie",
  review: "Faglig oversikt",
  "systematic-review": "Systematisk oversikt",
  "meta-analysis": "Metaanalyse",
  "methods-paper": "Metodeartikkel",
  "official-guidance": "Offisiell veiledning",
  "reference-work": "Referanseverk",
};

function BlockRenderer({
  block,
}: {
  block: NorwegianResearchBlock;
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
        <div className="min-w-0 overflow-hidden rounded-[1.5rem] border border-black/7 bg-white/72 shadow-[0_14px_48px_rgba(31,31,28,0.05)]">
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

    case "callout":
      return (
        <aside
          className={`rounded-[1.5rem] border p-6 md:p-7 ${calloutClasses[block.tone]}`}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#746b62]">
            {block.tone === "safety"
              ? "Sikkerhet"
              : block.tone === "evidence"
                ? "Evidens"
                : block.tone === "scope"
                  ? "Avgrensning"
                  : "Oppsummering"}
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

function SourceCard({
  source,
}: {
  source: NorwegianResearchSource;
}) {
  return (
    <article className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/70 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
        {sourceTypeLabels[source.type]} · {source.year}
      </p>
      <h3 className="mt-3 break-words text-lg font-medium leading-7 tracking-[-0.02em] text-[#1f1f1c]">
        {source.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#625b53]">
        {source.authors} · {source.publication}
      </p>
      {source.note ? (
        <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
          {source.note}
        </p>
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
          <span className="break-all text-[#756e65]">
            DOI: {source.doi}
          </span>
        ) : null}
        {source.pmid ? (
          <span className="break-all text-[#756e65]">
            PMID: {source.pmid}
          </span>
        ) : null}
      </div>
    </article>
  );
}

export function NorwegianResearchTopicPage({
  topic,
}: {
  topic: NorwegianResearchTopic;
}) {
  const author = getEditorialEntity(topic.authorId);
  const reviewer = getEditorialEntity(topic.sourceReviewerId);
  const structuredData =
    buildNorwegianResearchTopicStructuredData(topic);

  const relatedTopics = topic.relatedSlugs
    .map((slug) => getNorwegianResearchTopic(slug))
    .filter(
      (item): item is NorwegianResearchTopic => Boolean(item),
    );

  const relatedKnowledge = topic.relatedKnowledgeSlugs
    .map((slug) => getNorwegianKnowledgeArticle(slug))
    .filter(
      (item): item is NorwegianKnowledgeArticle => Boolean(item),
    );

  return (
    <main className="min-w-0 bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix={`no-forskning-${topic.slug}`}
      />

      <section className="border-b border-black/6">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <nav aria-label="Brødsmuler">
            <ol className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-[#746d64]">
              <li>
                <Link
                  href="/no"
                  className="transition hover:text-[#1f1f1c]"
                >
                  Forside
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/no/forskning"
                  className="transition hover:text-[#1f1f1c]"
                >
                  Forskning
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                aria-current="page"
                className="min-w-0 break-words text-[#1f1f1c]"
              >
                {topic.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#e9eeea]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-12 lg:py-24">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#66736a]">
              {topic.eyebrow}
            </p>
            <h1
              lang="nb"
              className="mt-5 max-w-[18ch] min-w-0 break-words text-[clamp(2.65rem,7vw,5.65rem)] font-medium leading-[0.96] tracking-[-0.06em] [hyphens:auto] [overflow-wrap:anywhere]"
            >
              {topic.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#485149] md:text-xl md:leading-9">
              {topic.lead}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/7 bg-white/64 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#687169]">
              Om forskningsoversikten
            </p>
            <div className="mt-5 space-y-3">
              <EditorialEntityLine
                label="Redaksjon"
                entity={author}
              />
              <EditorialEntityLine
                label="Kildekontroll"
                entity={reviewer}
              />
              <p className="text-sm leading-6 text-[#5f665f]">
                Publisert:{" "}
                <time dateTime={topic.publishedAt}>
                  {formatDate(topic.publishedAt)}
                </time>
              </p>
              <p className="text-sm leading-6 text-[#5f665f]">
                Sist oppdatert:{" "}
                <time dateTime={topic.modifiedAt}>
                  {formatDate(topic.modifiedAt)}
                </time>
              </p>
              <p className="text-sm leading-6 text-[#5f665f]">
                Lesetid: omtrent {topic.readingTimeMinutes} minutter
              </p>
            </div>
            <p className="mt-6 border-t border-black/7 pt-5 text-sm leading-7 text-[#5f665f]">
              Forskningskontekst og generell informasjon. Ikke
              medisinsk rådgivning eller dokumentasjon av et bestemt
              produktutfall.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/6">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] border border-black/6 bg-white/68 p-6 shadow-[0_18px_64px_rgba(31,31,28,0.06)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              Kort forklart
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {topic.shortAnswer.map((answer) => (
                <li
                  key={answer}
                  className="rounded-[1.25rem] border border-black/5 bg-[#f1f4f1] p-5 text-base leading-7 text-[#485149]"
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eef2ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              {topic.researchMap.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              {topic.researchMap.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#596159] md:text-lg">
              {topic.researchMap.description}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {topic.researchMap.items.map((item) => (
              <article
                key={item.title}
                className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/72 p-5 shadow-[0_14px_44px_rgba(31,31,28,0.045)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#718076]">
                  {item.label}
                </p>
                <h3 className="mt-3 break-words text-xl font-medium tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#596159]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-12 lg:py-24">
        <aside className="min-w-0 self-start lg:sticky lg:top-24">
          <nav
            aria-label="Innholdsfortegnelse"
            className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/62 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#66736a]">
              På denne siden
            </p>
            <ol className="mt-5 space-y-3">
              {topic.sections.map((section, index) => (
                <li key={section.id} className="min-w-0">
                  <a
                    href={`#${section.id}`}
                    className="grid min-w-0 grid-cols-[1.5rem_minmax(0,1fr)] gap-2 text-sm leading-6 text-[#596159] transition hover:text-[#1f1f1c]"
                  >
                    <span className="text-[#89968d]">
                      {index + 1}.
                    </span>
                    <span className="min-w-0 break-words">
                      {section.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="space-y-20">
            {topic.sections.map((section) => (
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
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      <section className="border-y border-black/6 bg-[#e9eeea]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              Utvalgte studier
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Studier som viser både bredden og begrensningene i
              feltet
            </h2>
            <p className="mt-5 text-base leading-8 text-[#596159] md:text-lg">
              Hver studie svarer på et avgrenset spørsmål. Kortene
              under viser design, hovedfunn og den viktigste
              tolkningsgrensen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {topic.studyHighlights.map((study) => (
              <article
                key={study.id}
                className="min-w-0 rounded-[1.75rem] border border-black/6 bg-white/74 p-6 shadow-[0_16px_52px_rgba(31,31,28,0.05)] sm:p-7"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#718076]">
                  {study.design} · {study.year}
                </p>
                <h3 className="mt-3 break-words text-2xl font-medium leading-tight tracking-[-0.03em]">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#657067]">
                  {study.citation}
                </p>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#718076]">
                      Spørsmål
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-[#4f5850]">
                      {study.question}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#718076]">
                      Hovedfunn
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-[#4f5850]">
                      {study.finding}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#718076]">
                      Viktig begrensning
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-[#4f5850]">
                      {study.limitation}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  {study.href ? (
                    <Link
                      href={study.href}
                      className="rounded-full bg-[#1f1f1c] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Les Neuvago-sammendrag
                    </Link>
                  ) : null}
                  <a
                    href={study.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
                  >
                    Åpne originalkilde
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#66736a]">
              Kilder
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              Kilder brukt i oversikten
            </h2>
          </div>
          <div className="mt-12 grid min-w-0 gap-6 lg:grid-cols-2">
            {topic.sources.map((source) => (
              <SourceCard key={source.id} source={source} />
            ))}
          </div>
        </div>
      </section>

      {relatedTopics.length > 0 ? (
        <section className="border-b border-black/6 bg-[#eef2ef]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Relaterte forskningstemaer
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedTopics.map((item) => (
                <article
                  key={item.slug}
                  className="rounded-[1.5rem] border border-black/6 bg-white/72 p-6"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#718076]">
                    {item.hubLabel}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#596159]">
                    {item.hubSummary}
                  </p>
                  <Link
                    href={item.path}
                    className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4"
                  >
                    Åpne temaet
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-black/6 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
            Relaterte kunnskapsartikler
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedKnowledge.map((item) => (
              <article
                key={item.slug}
                className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/68 p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#84796e]">
                  {item.hubLabel}
                </p>
                <h3 className="mt-3 break-words text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.hubSummary}
                </p>
                <Link
                  href={item.path}
                  className="mt-6 inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4"
                >
                  Les artikkelen
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <h2 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
            Videre lesning og ansvarlige grenser
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {topic.relatedLinks.map((item) => (
              <article
                key={item.href}
                className="min-w-0 rounded-[1.5rem] border border-black/6 bg-white/70 p-6"
              >
                <h3 className="break-words text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
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
              Forskningsprinsipp
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Evidens skal gi bedre spørsmål – ikke raskere
              produktløfter
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">
              Bruk forskningslaget til å forstå metoder, studier,
              usikkerhet og grenser. Gå videre til kunnskapsartikler
              eller produktinformasjon først når konteksten er tydelig.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-0">
            <Link
              href="/no/forskning"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c]"
            >
              Til forskningshuben
            </Link>
            <Link
              href="/no/kunnskap"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white"
            >
              Til kunnskapssenteret
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
