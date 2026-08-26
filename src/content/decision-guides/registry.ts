import { earVsNeckVnsGuidePair } from "@/content/decision-guides/ear-vs-neck-vns";
import type {
  DecisionGuideContent,
  DecisionGuideLocale,
  DecisionGuidePair,
} from "@/content/decision-guides/types";

const pairRegistry = [earVsNeckVnsGuidePair] as const satisfies readonly DecisionGuidePair[];

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T12:00:00Z`));
}

function validateGuide(guide: DecisionGuideContent): void {
  const expectedPrefix = guide.locale === "en" ? "/learn/" : "/no/kunnskap/";

  if (!guide.path.startsWith(expectedPrefix)) {
    throw new Error(`Ugyldig beslutningsguide-path: ${guide.path}`);
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

  if (guide.shortAnswer.length < 3) {
    throw new Error(`${guide.path} må ha minst tre kortsvar`);
  }

  if (guide.sections.length < 5) {
    throw new Error(`${guide.path} må ha minst fem hovedseksjoner`);
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

  if (guide.comparison && guide.comparison.rows.length < 8) {
    throw new Error(`${guide.path} må ha minst åtte sammenligningsrader`);
  }

  if (guide.checklist.items.length < 8) {
    throw new Error(`${guide.path} må ha minst åtte beslutningskriterier`);
  }

  if (guide.faq.length < 3) {
    throw new Error(`${guide.path} må ha minst tre FAQ-punkter`);
  }

  if (guide.sources.length < 5) {
    throw new Error(`${guide.path} må ha minst fem dokumenterte kilder`);
  }

  if (guide.relatedLinks.length < 5) {
    throw new Error(`${guide.path} må ha minst fem relaterte interne lenker`);
  }

  const internalLinks = [
    guide.counterpartPath,
    guide.defaultPath,
    ...guide.relatedLinks.map((link) => link.href),
    ...guide.productBridge.actions.map((action) => action.href),
  ];

  for (const href of internalLinks) {
    if (!href.startsWith("/")) {
      throw new Error(`Ugyldig intern lenke på ${guide.path}: ${href}`);
    }
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
}

function validatePairRegistry(
  pairs: readonly DecisionGuidePair[]
): readonly DecisionGuidePair[] {
  const ids = new Set<string>();
  const paths = new Set<string>();

  for (const pair of pairs) {
    if (ids.has(pair.id)) {
      throw new Error(`Duplisert beslutningsguide-ID: ${pair.id}`);
    }

    ids.add(pair.id);

    if (pair.en.id !== pair.id || pair.no.id !== pair.id) {
      throw new Error(`Språkparet ${pair.id} har inkonsistente ID-er`);
    }

    if (pair.en.locale !== "en" || pair.no.locale !== "no") {
      throw new Error(`Språkparet ${pair.id} har feil locale`);
    }

    if (pair.en.counterpartPath !== pair.no.path || pair.no.counterpartPath !== pair.en.path) {
      throw new Error(`Språkparet ${pair.id} har ikke gjensidige counterpartPath-felt`);
    }

    if (pair.en.defaultPath !== pair.en.path || pair.no.defaultPath !== pair.en.path) {
      throw new Error(`Språkparet ${pair.id} må bruke engelsk x-default`);
    }

    validateGuide(pair.en);
    validateGuide(pair.no);

    for (const path of [pair.en.path, pair.no.path]) {
      if (paths.has(path)) {
        throw new Error(`Duplisert beslutningsguide-path: ${path}`);
      }

      paths.add(path);
    }
  }

  return pairs;
}

export const decisionGuidePairs = validatePairRegistry(pairRegistry);

export function getPublishedDecisionGuidePairs(): readonly DecisionGuidePair[] {
  return decisionGuidePairs
    .filter((pair) => pair.status === "published")
    .toSorted((a, b) => a.order - b.order);
}

export function getPublishedDecisionGuides(): readonly DecisionGuideContent[] {
  return getPublishedDecisionGuidePairs().flatMap((pair) => [pair.en, pair.no]);
}

export function getPublishedDecisionGuidesForLocale(
  locale: DecisionGuideLocale
): readonly DecisionGuideContent[] {
  return getPublishedDecisionGuidePairs().map((pair) => pair[locale]);
}

export function getDecisionGuide(
  id: string,
  locale: DecisionGuideLocale
): DecisionGuideContent | undefined {
  const pair = decisionGuidePairs.find(
    (item) => item.id === id && item.status === "published"
  );

  return pair?.[locale];
}
