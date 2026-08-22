import { stressConditionPage } from "@/content/conditions/no/pages/stress";
import { sovnConditionPage } from "@/content/conditions/no/pages/sovn";
import type { NorwegianConditionPage } from "@/content/conditions/no/types";

const conditionRegistry = [
  stressConditionPage,
  sovnConditionPage,
] as const satisfies readonly NorwegianConditionPage[];

function isIsoDate(value: string): boolean {
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T12:00:00Z`))
  );
}

function validateConditionRegistry(
  pages: readonly NorwegianConditionPage[],
): readonly NorwegianConditionPage[] {
  const slugs = new Set<string>();
  const paths = new Set<string>();

  for (const page of pages) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(page.slug)) {
      throw new Error(`Ugyldig norsk tilstands-slug: ${page.slug}`);
    }

    const expectedPath = `/no/tilstander/${page.slug}`;
    if (page.path !== expectedPath) {
      throw new Error(
        `Feil path for ${page.slug}: forventet ${expectedPath}, fikk ${page.path}`,
      );
    }

    if (slugs.has(page.slug) || paths.has(page.path)) {
      throw new Error(`Duplisert norsk tilstand: ${page.path}`);
    }

    slugs.add(page.slug);
    paths.add(page.path);

    if (!isIsoDate(page.publishedAt) || !isIsoDate(page.modifiedAt)) {
      throw new Error(`Ugyldig redaksjonell dato på ${page.path}`);
    }

    if (page.modifiedAt < page.publishedAt) {
      throw new Error(`modifiedAt er eldre enn publishedAt på ${page.path}`);
    }

    if (page.sections.length < 5) {
      throw new Error(`${page.path} må ha minst fem hovedseksjoner`);
    }

    if (page.sources.length < 5) {
      throw new Error(`${page.path} må ha minst fem dokumenterte kilder`);
    }

    if (page.pathway.steps.length < 3) {
      throw new Error(`${page.path} må ha minst tre pathway-steg`);
    }

    const sectionIds = new Set<string>();
    for (const section of page.sections) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(section.id)) {
        throw new Error(`Ugyldig seksjons-ID ${section.id} på ${page.path}`);
      }

      if (sectionIds.has(section.id)) {
        throw new Error(`Duplisert seksjons-ID ${section.id} på ${page.path}`);
      }

      sectionIds.add(section.id);
    }
  }

  return pages;
}

export const norwegianConditionPages =
  validateConditionRegistry(conditionRegistry);

export function getPublishedNorwegianConditionPages():
  readonly NorwegianConditionPage[] {
  return norwegianConditionPages
    .filter((page) => page.status === "published")
    .toSorted((a, b) => a.order - b.order);
}

export function getNorwegianConditionPage(
  slug: string,
): NorwegianConditionPage | undefined {
  return norwegianConditionPages.find(
    (page) => page.slug === slug && page.status === "published",
  );
}
