import type { EditorialEntityId } from "@/content/editorial/people";
import type {
  NorwegianKnowledgeBlock,
  NorwegianKnowledgeRelatedLink,
  NorwegianKnowledgeSection,
  NorwegianKnowledgeSource,
} from "@/content/knowledge/no/types";

export type NorwegianConditionStatus = "draft" | "published";
export type NorwegianConditionWave = "1C" | "2" | "3";

export type NorwegianConditionPathwayStep = {
  number: string;
  title: string;
  description: string;
  href?: string;
  label?: string;
};

export type NorwegianConditionPathway = {
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly NorwegianConditionPathwayStep[];
};

export type NorwegianConditionPage = {
  slug: string;
  path: string;
  status: NorwegianConditionStatus;
  wave: NorwegianConditionWave;
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

  publishedAt: string;
  modifiedAt: string;
  readingTimeMinutes: number;

  authorId: EditorialEntityId;
  sourceReviewerId: EditorialEntityId;

  englishEquivalent?: string;
  sitemapPriority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";

  pathway: NorwegianConditionPathway;
  sections: readonly NorwegianKnowledgeSection[];
  sources: readonly NorwegianKnowledgeSource[];

  relatedKnowledgeSlugs: readonly string[];
  relatedLinks: readonly NorwegianKnowledgeRelatedLink[];

  disclaimer: string;
};

export type {
  NorwegianKnowledgeBlock,
  NorwegianKnowledgeRelatedLink,
  NorwegianKnowledgeSource,
};
