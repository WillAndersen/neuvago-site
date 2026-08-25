export type GlossaryLocale = "en" | "no";
export type GlossaryTermStatus = "draft" | "published";
export type GlossaryCategoryId =
  | "anatomy"
  | "stimulation-methods"
  | "nervous-system"
  | "measurement-interpretation"
  | "safety-research"
  | "protocol-parameters";

export type GlossaryLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type GlossaryTerm = {
  id: string;
  slug: string;
  path: string;
  locale: GlossaryLocale;
  status: GlossaryTermStatus;
  order: number;

  term: string;
  termCode?: string;
  aliases: readonly string[];
  category: GlossaryCategoryId;

  seoTitle: string;
  description: string;
  shortDefinition: string;
  hubSummary: string;
  expandedDefinition: readonly string[];
  whatItIsNot: readonly string[];
  whyItMatters: string;

  primaryPillar: GlossaryLink;
  sourceLinks: readonly GlossaryLink[];
  relatedTermIds: readonly string[];

  publishedAt: string;
  modifiedAt: string;
  sitemapPriority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export type GlossaryTermPair = {
  id: string;
  english: GlossaryTerm;
  norwegian: GlossaryTerm;
};
