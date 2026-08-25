import { englishGlossaryTerms } from "@/content/glossary/en/terms";
import { norwegianGlossaryTerms } from "@/content/glossary/no/terms";
import type {
  GlossaryLocale,
  GlossaryTerm,
  GlossaryTermPair,
} from "@/content/glossary/types";

const glossaryTerms = [
  ...englishGlossaryTerms,
  ...norwegianGlossaryTerms,
] as const satisfies readonly GlossaryTerm[];

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T12:00:00Z`));
}

function validateGlossaryRegistry(
  terms: readonly GlossaryTerm[],
): readonly GlossaryTerm[] {
  const keys = new Set<string>();
  const paths = new Set<string>();
  const idsByLocale = new Map<GlossaryLocale, Set<string>>([
    ["en", new Set<string>()],
    ["no", new Set<string>()],
  ]);

  for (const term of terms) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(term.id)) {
      throw new Error(`Invalid glossary id: ${term.id}`);
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(term.slug)) {
      throw new Error(`Invalid glossary slug: ${term.slug}`);
    }

    const expectedPath =
      term.locale === "en"
        ? `/glossary/${term.slug}`
        : `/no/ordliste/${term.slug}`;

    if (term.path !== expectedPath) {
      throw new Error(
        `Incorrect glossary path for ${term.id}/${term.locale}: ` +
          `expected ${expectedPath}, received ${term.path}`,
      );
    }

    const key = `${term.locale}:${term.slug}`;
    if (keys.has(key)) {
      throw new Error(`Duplicate glossary slug: ${key}`);
    }

    if (paths.has(term.path)) {
      throw new Error(`Duplicate glossary path: ${term.path}`);
    }

    keys.add(key);
    paths.add(term.path);
    idsByLocale.get(term.locale)?.add(term.id);

    if (!isIsoDate(term.publishedAt) || !isIsoDate(term.modifiedAt)) {
      throw new Error(`Invalid glossary editorial date: ${term.path}`);
    }

    if (term.modifiedAt < term.publishedAt) {
      throw new Error(`modifiedAt precedes publishedAt: ${term.path}`);
    }

    if (term.shortDefinition.trim().length < 40) {
      throw new Error(`Glossary definition is too short: ${term.path}`);
    }

    if (term.expandedDefinition.length < 2) {
      throw new Error(`Glossary term needs at least two paragraphs: ${term.path}`);
    }

    if (term.whatItIsNot.length < 2) {
      throw new Error(`Glossary term needs scope boundaries: ${term.path}`);
    }

    if (term.sourceLinks.length < 1) {
      throw new Error(`Glossary term needs source pathways: ${term.path}`);
    }

    if (term.relatedTermIds.includes(term.id)) {
      throw new Error(`Glossary term cannot relate to itself: ${term.path}`);
    }

    const normalizedAliases = term.aliases.map((alias) =>
      alias.trim().toLocaleLowerCase(term.locale === "no" ? "nb-NO" : "en-US"),
    );

    if (new Set(normalizedAliases).size !== normalizedAliases.length) {
      throw new Error(`Duplicate aliases on glossary term: ${term.path}`);
    }
  }

  const englishIds = idsByLocale.get("en") ?? new Set<string>();
  const norwegianIds = idsByLocale.get("no") ?? new Set<string>();

  for (const id of englishIds) {
    if (!norwegianIds.has(id)) {
      throw new Error(`Missing Norwegian glossary pair for: ${id}`);
    }
  }

  for (const id of norwegianIds) {
    if (!englishIds.has(id)) {
      throw new Error(`Missing English glossary pair for: ${id}`);
    }
  }

  for (const term of terms) {
    const localeIds = idsByLocale.get(term.locale) ?? new Set<string>();
    for (const relatedId of term.relatedTermIds) {
      if (!localeIds.has(relatedId)) {
        throw new Error(
          `${term.path} references an unknown related term: ${relatedId}`,
        );
      }
    }
  }

  return terms;
}

export const validatedGlossaryTerms = validateGlossaryRegistry(glossaryTerms);

export function getPublishedGlossaryTerms(
  locale: GlossaryLocale,
): readonly GlossaryTerm[] {
  return validatedGlossaryTerms
    .filter((term) => term.locale === locale && term.status === "published")
    .toSorted((a, b) => a.order - b.order);
}

export function getGlossaryTerm(
  locale: GlossaryLocale,
  slug: string,
): GlossaryTerm | undefined {
  return validatedGlossaryTerms.find(
    (term) =>
      term.locale === locale &&
      term.slug === slug &&
      term.status === "published",
  );
}

export function getGlossaryTermById(
  locale: GlossaryLocale,
  id: string,
): GlossaryTerm | undefined {
  return validatedGlossaryTerms.find(
    (term) =>
      term.locale === locale && term.id === id && term.status === "published",
  );
}

export function getGlossaryTermPair(id: string): GlossaryTermPair | undefined {
  const english = getGlossaryTermById("en", id);
  const norwegian = getGlossaryTermById("no", id);

  if (!english || !norwegian) {
    return undefined;
  }

  return { id, english, norwegian };
}

export function getPublishedEnglishGlossaryTerms(): readonly GlossaryTerm[] {
  return getPublishedGlossaryTerms("en");
}

export function getPublishedNorwegianGlossaryTerms(): readonly GlossaryTerm[] {
  return getPublishedGlossaryTerms("no");
}
