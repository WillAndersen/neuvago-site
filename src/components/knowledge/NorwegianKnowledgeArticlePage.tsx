import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import {
  getEditorialEntity,
  type EditorialEntity,
} from "@/content/editorial/people";
import type {
  NorwegianKnowledgeArticle,
  NorwegianKnowledgeBlock,
  NorwegianKnowledgeCalloutTone,
  NorwegianKnowledgeSourceType,
} from "@/content/knowledge/no/types";
import { getNorwegianKnowledgeArticle } from "@/content/knowledge/no/registry";
import { buildNorwegianKnowledgeArticleStructuredData } from "@/lib/seo/knowledge-article";

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

const calloutClasses: Record<NorwegianKnowledgeCalloutTone, string> = {
  summary: "border-[#d8cbbc] bg-[#efe7dc]",
  evidence: "border-[#c9d1cc] bg-[#e9efeb]",
  scope: "border-[#d3c9bd] bg-[#f2eee8]",
  safety: "border-[#d8c3bd] bg-[#f4e9e5]",
};

const sourceTypeLabels: Record<NorwegianKnowledgeSourceType, string> = {
  "research-article": "Forskningsartikkel",
  review: "Faglig oversikt",
  "systematic-review": "Systematisk oversikt",
  "official-guidance": "Offisiell veiledning",
  "reference-work": "Referanseverk",
};

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
            <table className="min-w-[44rem] w-full border-collapse text-left">
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
                ? "Forskningskontekst"
                : block.tone === "scope"
                  ? "Avgrensning"
                  : "Oppsummering"}
          </p>
          <h3 className="mt-3 text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
            {block.title}
          </h3>
          <div className="mt-4 space-y-3">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-[#514c45] md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </aside>
      );
  }
}

export function NorwegianKnowledgeArticlePage({
  article,
}: {
  article: NorwegianKnowledgeArticle;
}) {
  const author = getEditorialEntity(article.authorId);
  const reviewer = getEditorialEntity(article.sourceReviewerId);
  const structuredData = buildNorwegianKnowledgeArticleStructuredData(article);
  const relatedArticles = article.relatedSlugs
    .map((slug) => getNorwegianKnowledgeArticle(slug))
    .filter((item): item is NorwegianKnowledgeArticle => Boolean(item));

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd
        data={structuredData}
        idPrefix={`no-kunnskap-${article.slug}`}
      />

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
                  href="/no/kunnskap"
                  className="transition hover:text-[#1f1f1c]"
                >
                  Kunnskap
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#1f1f1c]">
                {article.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-b border-black/6 bg-[#efe8de]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-12 lg:py-24">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#786e64]">
              {article.eyebrow}
            </p>
            <h1 className="mt-5 max-w-[16ch] break-words [hyphens:auto] text-[clamp(2.8rem,7vw,5.8rem)] font-medium leading-[0.96] tracking-[-0.06em]" lang="nb">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#514c45] md:text-xl md:leading-9">
              {article.lead}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/7 bg-white/58 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              Om artikkelen
            </p>
            <div className="mt-5 space-y-3">
              <EditorialEntityLine label="Redaksjon" entity={author} />
              <EditorialEntityLine label="Kildekontroll" entity={reviewer} />
              <p className="text-sm leading-6 text-[#5f5a52]">
                Publisert: <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </p>
              <p className="text-sm leading-6 text-[#5f5a52]">
                Sist oppdatert:{" "}
                <time dateTime={article.modifiedAt}>{formatDate(article.modifiedAt)}</time>
              </p>
              <p className="text-sm leading-6 text-[#5f5a52]">
                Lesetid: omtrent {article.readingTimeMinutes} minutter
              </p>
            </div>
            <p className="mt-6 border-t border-black/7 pt-5 text-sm leading-7 text-[#625b53]">
              Generell informasjon. Ikke medisinsk rådgivning, diagnose eller behandling.
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
              {article.shortAnswer.map((answer) => (
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

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-12 lg:py-24">
        <aside className="self-start lg:sticky lg:top-24">
          <nav
            aria-label="Innholdsfortegnelse"
            className="rounded-[1.5rem] border border-black/6 bg-white/62 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7b7167]">
              På denne siden
            </p>
            <ol className="mt-5 space-y-3">
              {article.sections.map((section, index) => (
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
            </ol>
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="space-y-20">
            {article.sections.map((section) => (
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
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      <section className="border-y border-black/6 bg-[#eee7dd]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7b7167]">
              Kilder
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              Kildegrunnlag for artikkelen
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f5a52] md:text-lg">
              Kildene under er valgt for å forklare temaet, metodene og tolkningsgrensene. De dokumenterer ikke automatisk en bestemt effekt av Neuvago.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {article.sources.map((source) => (
              <article
                key={source.id}
                className="rounded-[1.5rem] border border-black/6 bg-white/68 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#84796e]">
                  {sourceTypeLabels[source.type]} · {source.year}
                </p>
                <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.025em]">
                  {source.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {source.authors}. {source.publication}.
                </p>
                {source.note ? (
                  <p className="mt-3 text-sm leading-7 text-[#625b53]">{source.note}</p>
                ) : null}
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
                  Åpne primærkilden
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
              Les videre
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              Fortsett til relaterte begreper, forskning og praktisk bruk
            </h2>
          </div>

          {relatedArticles.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={related.path}
                  className="rounded-[1.5rem] border border-black/6 bg-white/65 p-6 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#84796e]">
                    {related.hubLabel}
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.025em]">
                    {related.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                    {related.hubSummary}
                  </p>
                </Link>
              ))}
            </div>
          ) : null}

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {article.relatedLinks.map((link) => (
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
                Redaksjonell merknad
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                Denne siden oppdateres når kunnskapsgrunnlaget eller Neuvagos produktdokumentasjon endres
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Oppdateringsdatoen skal gjenspeile en faktisk redaksjonell gjennomgang – ikke bare en ny deploy.
              </p>
            </div>
            <Link
              href="/no/kunnskap"
              className="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-[#eee7dd] lg:mt-0"
            >
              Tilbake til kunnskapsbasen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
