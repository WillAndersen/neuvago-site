export type ResearchGuideLocale = "en" | "no";
export type ResearchGuideStatus = "draft" | "published";
export type ResearchGuideKind =
  | "research-literacy"
  | "protocol-method";

export type ResearchGuideCalloutTone =
  | "summary"
  | "evidence"
  | "scope"
  | "safety";

export type ResearchGuideParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type ResearchGuideBulletListBlock = {
  type: "bullets";
  items: readonly string[];
};

export type ResearchGuideNumberedListBlock = {
  type: "numbered";
  items: readonly string[];
};

export type ResearchGuideCardBlock = {
  type: "cards";
  items: readonly {
    label?: string;
    title: string;
    description: string;
  }[];
};

export type ResearchGuideDefinitionBlock = {
  type: "definition";
  term: string;
  definition: string;
};

export type ResearchGuideTableBlock = {
  type: "table";
  caption?: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
};

export type ResearchGuideCalloutBlock = {
  type: "callout";
  tone: ResearchGuideCalloutTone;
  title: string;
  paragraphs: readonly string[];
};

export type ResearchGuideBlock =
  | ResearchGuideParagraphBlock
  | ResearchGuideBulletListBlock
  | ResearchGuideNumberedListBlock
  | ResearchGuideCardBlock
  | ResearchGuideDefinitionBlock
  | ResearchGuideTableBlock
  | ResearchGuideCalloutBlock;

export type ResearchGuideSection = {
  id: string;
  eyebrow?: string;
  title: string;
  blocks: readonly ResearchGuideBlock[];
};

export type ResearchGuideFrameworkItem = {
  label: string;
  title: string;
  question: string;
  whyItMatters: string;
  warning: string;
};

export type ResearchGuideFramework = {
  eyebrow: string;
  title: string;
  introduction: string;
  items: readonly ResearchGuideFrameworkItem[];
};

export type ResearchGuideExample = {
  label: string;
  title: string;
  evidenceType: string;
  summary: string;
  lesson: string;
  href: string;
};

export type ResearchGuideChecklist = {
  eyebrow: string;
  title: string;
  introduction: string;
  items: readonly {
    title: string;
    description: string;
  }[];
};

export type ResearchGuideFaqItem = {
  question: string;
  answer: string;
};

export type ResearchGuideSourceType =
  | "reporting-guideline"
  | "methods-paper"
  | "systematic-review-guidance"
  | "risk-of-bias-tool"
  | "evidence-framework"
  | "official-guidance"
  | "research-article";

export type ResearchGuideSource = {
  id: string;
  authors: string;
  title: string;
  publication: string;
  year: number;
  type: ResearchGuideSourceType;
  url: string;
  doi?: string;
  pmid?: string;
  note: string;
};

export type ResearchGuideRelatedLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type ResearchGuideContent = {
  id: string;
  locale: ResearchGuideLocale;
  languageTag: "en-US" | "nb-NO";
  openGraphLocale: "en_US" | "nb_NO";
  path: string;
  counterpartPath: string;
  defaultPath: string;
  status: ResearchGuideStatus;
  kind: ResearchGuideKind;
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

  framework: ResearchGuideFramework;
  sections: readonly ResearchGuideSection[];
  examples: readonly ResearchGuideExample[];
  checklist: ResearchGuideChecklist;
  faq: readonly ResearchGuideFaqItem[];
  sources: readonly ResearchGuideSource[];
  relatedLinks: readonly ResearchGuideRelatedLink[];

  sitemapPriority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export type ResearchGuidePair = {
  id: string;
  status: ResearchGuideStatus;
  order: number;
  en: ResearchGuideContent;
  no: ResearchGuideContent;
};
