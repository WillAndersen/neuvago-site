import type { EditorialEntityId } from "@/content/editorial/people";

export type NorwegianKnowledgeArticleStatus = "draft" | "published";
export type NorwegianKnowledgeWave =
  | "1A"
  | "1B"
  | "1C"
  | "1D"
  | "2C.1";
export type NorwegianKnowledgeSearchIntent =
  | "informational"
  | "commercial-investigation"
  | "mixed";

export type NorwegianKnowledgeCalloutTone =
  | "summary"
  | "evidence"
  | "scope"
  | "safety";

export type NorwegianKnowledgeSourceType =
  | "research-article"
  | "review"
  | "systematic-review"
  | "official-guidance"
  | "reference-work";

export type NorwegianKnowledgeParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type NorwegianKnowledgeBulletListBlock = {
  type: "bullets";
  items: readonly string[];
};

export type NorwegianKnowledgeNumberedListBlock = {
  type: "numbered";
  items: readonly string[];
};

export type NorwegianKnowledgeDefinitionBlock = {
  type: "definition";
  term: string;
  definition: string;
};

export type NorwegianKnowledgeTableBlock = {
  type: "table";
  caption?: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
};

export type NorwegianKnowledgeCalloutBlock = {
  type: "callout";
  tone: NorwegianKnowledgeCalloutTone;
  title: string;
  paragraphs: readonly string[];
};

export type NorwegianKnowledgeTimelineItem = {
  time: string;
  title: string;
  description: string;
};

export type NorwegianKnowledgeTimelineBlock = {
  type: "timeline";
  totalDuration: string;
  items: readonly NorwegianKnowledgeTimelineItem[];
};

export type NorwegianKnowledgeVideoBlock = {
  type: "video";
  title: string;
  description: string;
  src: string;
  poster: string;
  captionsSrc: string;
  transcript: readonly string[];
};

export type NorwegianKnowledgeActionItem = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type NorwegianKnowledgeActionsBlock = {
  type: "actions";
  placement: string;
  items: readonly NorwegianKnowledgeActionItem[];
};

export type NorwegianKnowledgeBlock =
  | NorwegianKnowledgeParagraphBlock
  | NorwegianKnowledgeBulletListBlock
  | NorwegianKnowledgeNumberedListBlock
  | NorwegianKnowledgeDefinitionBlock
  | NorwegianKnowledgeTableBlock
  | NorwegianKnowledgeCalloutBlock
  | NorwegianKnowledgeTimelineBlock
  | NorwegianKnowledgeVideoBlock
  | NorwegianKnowledgeActionsBlock;

export type NorwegianKnowledgeSection = {
  id: string;
  eyebrow?: string;
  title: string;
  blocks: readonly NorwegianKnowledgeBlock[];
};

export type NorwegianKnowledgeSource = {
  id: string;
  authors: string;
  title: string;
  publication: string;
  year: number;
  type: NorwegianKnowledgeSourceType;
  url: string;
  doi?: string;
  pmid?: string;
  note?: string;
};

export type NorwegianKnowledgeRelatedLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type NorwegianKnowledgeCta = {
  label: string;
  href: string;
};

export type NorwegianKnowledgeArticle = {
  slug: string;
  path: string;
  status: NorwegianKnowledgeArticleStatus;
  wave: NorwegianKnowledgeWave;
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
  searchIntent: NorwegianKnowledgeSearchIntent;

  publishedAt: string;
  modifiedAt: string;
  readingTimeMinutes: number;

  authorId: EditorialEntityId;
  sourceReviewerId: EditorialEntityId;

  englishEquivalent?: string;
  sitemapPriority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";

  primaryCta?: NorwegianKnowledgeCta;
  secondaryCta?: NorwegianKnowledgeCta;

  sections: readonly NorwegianKnowledgeSection[];
  sources: readonly NorwegianKnowledgeSource[];
  relatedSlugs: readonly string[];
  relatedLinks: readonly NorwegianKnowledgeRelatedLink[];
};
