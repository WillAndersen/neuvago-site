import { howToReadVnsStudyGuidePair } from "@/content/research-guides/how-to-read-vns-study";
import type {
  ResearchGuideContent,
  ResearchGuideLocale,
  ResearchGuidePair,
} from "@/content/research-guides/types";

const pairRegistry = [
  howToReadVnsStudyGuidePair,
] as const satisfies readonly ResearchGuidePair[];

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T12:00:00Z`));
}

function validateGuide(guide: ResearchGuideContent): void {
  const expectedPrefix =
    guide.locale === "en" ? "/research/" : "/no/forskning/";

  if (!guide.path.startsWith(expectedPrefix)) {
    throw new Error(`Ugyldig forskningsguide-path: ${guide.path}`);
  }

  if (guide.locale === "en" && guide.languageTag !== "en-US") {
    throw new Error(`${guide.path} må bruke en-US`);
  }

  if (guide.locale === "no" && guide.languageTag !== "nb-NO") {
    throw new Error(`${guide.path} må bruke nb-NO`);
  }

  if (!isIsoDate(guide.publishedAt) || !isIsoDate(guide.modifiedAt)) {
    throw new Error(`Ugyldig redaksjonell dato på ${guide.path}`);
  }

  if (guide.modifiedAt < guide.publishedAt) {
    throw new Error(`modifiedAt er eldre enn publishedAt på ${guide.path}`);
  }

  if (guide.description.length > 160) {
    throw new Error(`SEO-beskrivelsen er for lang på ${guide.path}`);
  }

  if (guide.shortAnswer.length < 4) {
    throw new Error(`${guide.path} må ha minst fire kortsvar`);
  }

  if (guide.framework.items.length < 10) {
    throw new Error(`${guide.path} må ha minst ti kontrollpunkter`);
  }

  if (guide.sections.length < 7) {
    throw new Error(`${guide.path} må ha minst sju hovedseksjoner`);
  }

  if (guide.examples.length < 3) {
    throw new Error(`${guide.path} må ha minst tre studieeksempler`);
  }

  if (guide.checklist.items.length !== guide.framework.items.length) {
    throw new Error(
      `${guide.path} må ha like mange rammeverk- og sjekklistepunkter`,
    );
  }

  if (guide.faq.length < 5) {
    throw new Error(`${guide.path} må ha minst fem FAQ-punkter`);
  }

  if (guide.sources.length < 8) {
    throw new Error(`${guide.path} må ha minst åtte dokumenterte kilder`);
  }

  if (guide.relatedLinks.length < 10) {
    throw new Error(`${guide.path} må ha minst ti relaterte lenker`);
  }

  const sectionIds = new Set<string>();
  for (const section of guide.sections) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(section.id)) {
      throw new Error(`Ugyldig seksjons-ID ${section.id} på ${guide.path}`);
    }

    if (sectionIds.has(section.id)) {
      throw new Error(`Duplisert seksjons-ID ${section.id} på ${guide.path}`);
    }

    sectionIds.add(section.id);
  }

  const frameworkLabels = new Set<string>();
  for (const item of guide.framework.items) {
    if (frameworkLabels.has(item.label)) {
      throw new Error(`Duplisert rammeverkslabel ${item.label} på ${guide.path}`);
    }

    frameworkLabels.add(item.label);
  }

  const sourceIds = new Set<string>();
  for (const source of guide.sources) {
    if (sourceIds.has(source.id)) {
      throw new Error(`Duplisert kilde-ID ${source.id} på ${guide.path}`);
    }

    sourceIds.add(source.id);

    if (!source.url.startsWith("https://")) {
      throw new Error(`Ugyldig kilde-URL på ${guide.path}: ${source.url}`);
    }
  }

  for (const link of guide.relatedLinks) {
    if (!link.href.startsWith("/")) {
      throw new Error(`Ugyldig intern lenke på ${guide.path}: ${link.href}`);
    }
  }

  for (const example of guide.examples) {
    if (!example.href.startsWith("/research/studies/")) {
      throw new Error(
        `Studieeksempel må peke til studiesammendrag på ${guide.path}: ${example.href}`,
      );
    }
  }
}

function validatePairRegistry(
  pairs: readonly ResearchGuidePair[],
): readonly ResearchGuidePair[] {
  const ids = new Set<string>();
  const paths = new Set<string>();

  for (const pair of pairs) {
    if (ids.has(pair.id)) {
      throw new Error(`Duplisert forskningsguide-ID: ${pair.id}`);
    }

    ids.add(pair.id);

    if (pair.en.id !== pair.id || pair.no.id !== pair.id) {
      throw new Error(`Språkparet ${pair.id} har inkonsistente ID-er`);
    }

    if (
      pair.en.status !== pair.status ||
      pair.no.status !== pair.status
    ) {
      throw new Error(`Språkparet ${pair.id} har inkonsistent status`);
    }

    if (pair.en.order !== pair.order || pair.no.order !== pair.order) {
      throw new Error(`Språkparet ${pair.id} har inkonsistent rekkefølge`);
    }

    if (pair.en.locale !== "en" || pair.no.locale !== "no") {
      throw new Error(`Språkparet ${pair.id} har feil locale`);
    }

    if (
      pair.en.counterpartPath !== pair.no.path ||
      pair.no.counterpartPath !== pair.en.path
    ) {
      throw new Error(
        `Språkparet ${pair.id} har ikke gjensidige counterpartPath-felt`,
      );
    }

    if (
      pair.en.defaultPath !== pair.en.path ||
      pair.no.defaultPath !== pair.en.path
    ) {
      throw new Error(`Språkparet ${pair.id} må bruke engelsk x-default`);
    }

    validateGuide(pair.en);
    validateGuide(pair.no);

    const englishFrameworkLabels = pair.en.framework.items.map(
      (item) => item.label,
    );
    const norwegianFrameworkLabels = pair.no.framework.items.map(
      (item) => item.label,
    );
    const englishSourceIds = pair.en.sources.map((source) => source.id);
    const norwegianSourceIds = pair.no.sources.map((source) => source.id);
    const englishExamplePaths = pair.en.examples.map((example) => example.href);
    const norwegianExamplePaths = pair.no.examples.map((example) => example.href);

    if (
      JSON.stringify(englishFrameworkLabels) !==
      JSON.stringify(norwegianFrameworkLabels)
    ) {
      throw new Error(`Språkparet ${pair.id} har ulike rammeverkspunkter`);
    }

    if (
      JSON.stringify(englishSourceIds) !== JSON.stringify(norwegianSourceIds)
    ) {
      throw new Error(`Språkparet ${pair.id} har ulikt kildegrunnlag`);
    }

    if (
      JSON.stringify(englishExamplePaths) !==
      JSON.stringify(norwegianExamplePaths)
    ) {
      throw new Error(`Språkparet ${pair.id} har ulike studieeksempler`);
    }

    for (const path of [pair.en.path, pair.no.path]) {
      if (paths.has(path)) {
        throw new Error(`Duplisert forskningsguide-path: ${path}`);
      }

      paths.add(path);
    }
  }

  return pairs;
}

export const researchGuidePairs = validatePairRegistry(pairRegistry);

export function getPublishedResearchGuidePairs(): readonly ResearchGuidePair[] {
  return researchGuidePairs
    .filter((pair) => pair.status === "published")
    .toSorted((a, b) => a.order - b.order);
}

export function getPublishedResearchGuides(): readonly ResearchGuideContent[] {
  return getPublishedResearchGuidePairs().flatMap((pair) => [
    pair.en,
    pair.no,
  ]);
}

export function getPublishedResearchGuidesForLocale(
  locale: ResearchGuideLocale,
): readonly ResearchGuideContent[] {
  return getPublishedResearchGuidePairs().map((pair) => pair[locale]);
}

export function getResearchGuide(
  id: string,
  locale: ResearchGuideLocale,
): ResearchGuideContent | undefined {
  const pair = researchGuidePairs.find(
    (item) => item.id === id && item.status === "published",
  );

  return pair?.[locale];
}
