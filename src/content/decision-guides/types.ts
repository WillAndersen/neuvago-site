export type DecisionGuideLocale = "en" | "no";
export type DecisionGuideStatus = "draft" | "published";
export type DecisionGuideKind = "comparison" | "buyer-guide";
export type DecisionGuideCalloutTone =
  | "summary"
  | "evidence"
  | "scope"
  | "safety"
  | "product";

export type DecisionGuideParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type DecisionGuideBulletListBlock = {
  type: "bullets";
  items: readonly string[];
};

export type DecisionGuideNumberedListBlock = {
  type: "numbered";
  items: readonly string[];
};

export type DecisionGuideCardBlock = {
  type: "cards";
  items: readonly {
    title: string;
    description: string;
    label?: string;
  }[];
};

export type DecisionGuideCalloutBlock = {
  type: "callout";
  tone: DecisionGuideCalloutTone;
  title: string;
  paragraphs: readonly string[];
};

export type DecisionGuideBlock =
  | DecisionGuideParagraphBlock
  | DecisionGuideBulletListBlock
  | DecisionGuideNumberedListBlock
  | DecisionGuideCardBlock
  | DecisionGuideCalloutBlock;

export type DecisionGuideSection = {
  id: string;
  eyebrow?: string;
  title: string;
  blocks: readonly DecisionGuideBlock[];
};

export type DecisionGuideComparisonSide = {
  label: string;
  title: string;
  summary: string;
  facts: readonly string[];
};

export type DecisionGuideComparison = {
  eyebrow: string;
  title: string;
  introduction: string;
  left: DecisionGuideComparisonSide;
  right: DecisionGuideComparisonSide;
  rowLabels: {
    criterion: string;
    left: string;
    right: string;
  };
  rows: readonly {
    criterion: string;
    left: string;
    right: string;
  }[];
  footnote: string;
};

export type DecisionGuideChecklist = {
  eyebrow: string;
  title: string;
  introduction: string;
  items: readonly {
    title: string;
    description: string;
  }[];
};

export type DecisionGuideFaqItem = {
  question: string;
  answer: string;
};

export type DecisionGuideSourceType =
  | "comparative-study"
  | "research-article"
  | "anatomy-review"
  | "randomized-trial"
  | "systematic-review"
  | "consensus-review"
  | "regulatory-guidance"
  | "regulation"
  | "consumer-guidance"
  | "reporting-standard"
  | "research-guidance";

export type DecisionGuideSource = {
  id: string;
  authors: string;
  title: string;
  publication: string;
  year: number;
  type: DecisionGuideSourceType;
  url: string;
  doi?: string;
  pmid?: string;
  note: string;
};

export type DecisionGuideRelatedLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type DecisionGuideProductBridge = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  actions: readonly {
    label: string;
    href: string;
    variant: "primary" | "secondary" | "tertiary";
  }[];
};

export type DecisionGuideDownload = {
  title: string;
  description: string;
  href: string;
  fileName: string;
  format: "PDF";
  pageCount: number;
  version: string;
  publishedAt: string;
  downloadLabel: string;
};

export type DecisionGuideContent = {
  id: string;
  locale: DecisionGuideLocale;
  languageTag: "en-US" | "nb-NO";
  openGraphLocale: "en_US" | "nb_NO";
  path: string;
  counterpartPath: string;
  defaultPath: string;
  status: DecisionGuideStatus;
  kind: DecisionGuideKind;
  order: number;

  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  shortAnswer: readonly string[];
  hubTitle: string;
  hubSummary: string;
  hubLabel: string;

  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  publishedAt: string;
  modifiedAt: string;
  readingTimeMinutes: number;
  authorName: string;
  reviewerName: string;
  download?: DecisionGuideDownload;

  comparison?: DecisionGuideComparison;
  sections: readonly DecisionGuideSection[];
  checklist: DecisionGuideChecklist;
  faq: readonly DecisionGuideFaqItem[];
  sources: readonly DecisionGuideSource[];
  relatedLinks: readonly DecisionGuideRelatedLink[];
  productBridge: DecisionGuideProductBridge;

  sitemapPriority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export type DecisionGuidePair = {
  id: string;
  status: DecisionGuideStatus;
  order: number;
  en: DecisionGuideContent;
  no: DecisionGuideContent;
};
