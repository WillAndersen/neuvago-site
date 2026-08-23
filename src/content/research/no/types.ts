import type { EditorialEntityId } from "@/content/editorial/people";

export type NorwegianResearchTopicStatus = "draft" | "published";
export type NorwegianResearchWave = "1D";
export type NorwegianResearchSearchIntent =
  | "informational"
  | "academic"
  | "mixed";

export type NorwegianResearchCalloutTone =
  | "summary"
  | "evidence"
  | "scope"
  | "safety";

export type NorwegianResearchSourceType =
  | "research-article"
  | "randomized-trial"
  | "review"
  | "systematic-review"
  | "meta-analysis"
  | "methods-paper"
  | "official-guidance"
  | "reference-work";

export type NorwegianResearchParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type NorwegianResearchBulletListBlock = {
  type: "bullets";
  items: readonly string[];
};

export type NorwegianResearchNumberedListBlock = {
  type: "numbered";
  items: readonly string[];
};

export type NorwegianResearchDefinitionBlock = {
  type: "definition";
  term: string;
  definition: string;
};

export type NorwegianResearchTableBlock = {
  type: "table";
  caption?: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
};

export type NorwegianResearchCalloutBlock = {
  type: "callout";
  tone: NorwegianResearchCalloutTone;
  title: string;
  paragraphs: readonly string[];
};

export type NorwegianResearchBlock =
  | NorwegianResearchParagraphBlock
  | NorwegianResearchBulletListBlock
  | NorwegianResearchNumberedListBlock
  | NorwegianResearchDefinitionBlock
  | NorwegianResearchTableBlock
  | NorwegianResearchCalloutBlock;

export type NorwegianResearchSection = {
  id: string;
  eyebrow?: string;
  title: string;
  blocks: readonly NorwegianResearchBlock[];
};

export type NorwegianResearchMapItem = {
  label: string;
  title: string;
  description: string;
};

export type NorwegianResearchMap = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly NorwegianResearchMapItem[];
};

export type NorwegianResearchStudyHighlight = {
  id: string;
  title: string;
  citation: string;
  year: number;
  design: string;
  question: string;
  finding: string;
  limitation: string;
  href?: string;
  externalUrl: string;
};

export type NorwegianResearchSource = {
  id: string;
  authors: string;
  title: string;
  publication: string;
  year: number;
  type: NorwegianResearchSourceType;
  url: string;
  doi?: string;
  pmid?: string;
  note?: string;
};

export type NorwegianResearchRelatedLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type NorwegianResearchTopic = {
  slug: string;
  path: string;
  status: NorwegianResearchTopicStatus;
  wave: NorwegianResearchWave;
  order: number;

  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  shortAnswer: readonly string[];
  hubSummary: string;
  hubLabel: string;

  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  searchIntent: NorwegianResearchSearchIntent;

  publishedAt: string;
  modifiedAt: string;
  readingTimeMinutes: number;

  authorId: EditorialEntityId;
  sourceReviewerId: EditorialEntityId;

  englishEquivalent?: string;
  sitemapPriority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";

  researchMap: NorwegianResearchMap;
  sections: readonly NorwegianResearchSection[];
  studyHighlights: readonly NorwegianResearchStudyHighlight[];
  sources: readonly NorwegianResearchSource[];

  relatedSlugs: readonly string[];
  relatedKnowledgeSlugs: readonly string[];
  relatedLinks: readonly NorwegianResearchRelatedLink[];
};
