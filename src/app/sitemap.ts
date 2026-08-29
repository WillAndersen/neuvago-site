import type { MetadataRoute } from "next";
import { SEO_LAUNCH_REVIEW_DATE } from "@/lib/seo/editorial-dates";
import { getPublishedNorwegianKnowledgeArticles } from "@/content/knowledge/no/registry";
import { getPublishedDecisionGuides } from "@/content/decision-guides/registry";
import { getPublishedNorwegianConditionPages } from "@/content/conditions/no/registry";

import { getPublishedResearchGuides } from "@/content/research-guides/registry";
import { getPublishedNorwegianResearchTopics } from "@/content/research/no/registry";
import {
  getPublishedEnglishGlossaryTerms,
  getPublishedNorwegianGlossaryTerms,
} from "@/content/glossary/registry";

const siteUrl = "https://neuvago.com";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: string;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no", changeFrequency: "weekly", priority: 0.96, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/product", changeFrequency: "weekly", priority: 0.92, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/produkt", changeFrequency: "weekly", priority: 0.9, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/app", changeFrequency: "weekly", priority: 0.86, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/slik-fungerer-det", changeFrequency: "weekly", priority: 0.86, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/support", changeFrequency: "monthly", priority: 0.72, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/om-oss", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/kunnskap", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/tilstander", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/forskning", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/ordliste", changeFrequency: "monthly", priority: 0.76, lastModified: "2026-08-25" },
  { path: "/no/juridisk/vilkar", changeFrequency: "monthly", priority: 0.62, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk/fda-status", changeFrequency: "monthly", priority: 0.52, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk/ce-samsvar", changeFrequency: "monthly", priority: 0.54, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk/tillit-og-sikkerhet", changeFrequency: "monthly", priority: 0.58, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk/regulatorisk", changeFrequency: "monthly", priority: 0.58, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk/medisinsk-ansvarsfraskrivelse", changeFrequency: "monthly", priority: 0.58, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk/personvern", changeFrequency: "monthly", priority: 0.62, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk/tiltenkt-bruk", changeFrequency: "monthly", priority: 0.64, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/no/juridisk", changeFrequency: "monthly", priority: 0.68, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/app", changeFrequency: "weekly", priority: 0.85, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/how-it-works", changeFrequency: "weekly", priority: 0.88, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/how-to-use", changeFrequency: "monthly", priority: 0.82, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/get-started", changeFrequency: "monthly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/support", changeFrequency: "monthly", priority: 0.7 },

  { path: "/conditions", changeFrequency: "weekly", priority: 0.85, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/conditions/stress", changeFrequency: "weekly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/conditions/sleep", changeFrequency: "weekly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/conditions/anxiety", changeFrequency: "weekly", priority: 0.76 },
  { path: "/conditions/migraine-and-headache", changeFrequency: "weekly", priority: 0.76, lastModified: "2026-08-28" },
  { path: "/conditions/gut-brain-and-digestion", changeFrequency: "weekly", priority: 0.76, lastModified: "2026-08-28" },
  { path: "/conditions/burnout", changeFrequency: "weekly", priority: 0.76 },
  { path: "/conditions/depression-and-mood", changeFrequency: "weekly", priority: 0.76, lastModified: "2026-08-28" },
  { path: "/conditions/chronic-pain", changeFrequency: "weekly", priority: 0.76, lastModified: "2026-08-28" },

  { path: "/learn", changeFrequency: "weekly", priority: 0.86, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/glossary", changeFrequency: "monthly", priority: 0.78, lastModified: "2026-08-25" },
  { path: "/learn/vagus-nerve", changeFrequency: "weekly", priority: 0.82, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/learn/vagus-nerve-stimulation", changeFrequency: "weekly", priority: 0.86, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/learn/non-invasive-vagus-nerve-stimulation", changeFrequency: "weekly", priority: 0.86, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/learn/transcutaneous-vagus-nerve-stimulation", changeFrequency: "weekly", priority: 0.84, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/learn/auricular-vagus-nerve-stimulation", changeFrequency: "weekly", priority: 0.84, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/learn/what-does-vagus-nerve-stimulation-feel-like", changeFrequency: "weekly", priority: 0.82, lastModified: "2026-08-28" },
  { path: "/learn/nervous-system-regulation", changeFrequency: "weekly", priority: 0.82, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/learn/recovery-and-regulation", changeFrequency: "weekly", priority: 0.76 },
  { path: "/learn/parasympathetic-nervous-system", changeFrequency: "weekly", priority: 0.75 },
  { path: "/learn/vagal-tone", changeFrequency: "weekly", priority: 0.75 },
  { path: "/learn/fight-flight-freeze", changeFrequency: "weekly", priority: 0.75 },
  { path: "/learn/how-to-calm-your-nervous-system", changeFrequency: "weekly", priority: 0.8 },
  { path: "/learn/why-your-body-feels-stuck-in-stress", changeFrequency: "weekly", priority: 0.76 },
  { path: "/learn/why-you-feel-tired-but-cant-relax", changeFrequency: "weekly", priority: 0.76 },
  { path: "/learn/signs-of-a-dysregulated-nervous-system", changeFrequency: "weekly", priority: 0.78 },
  { path: "/learn/what-nervous-system-regulation-feels-like", changeFrequency: "weekly", priority: 0.74 },
  { path: "/learn/emotional-regulation-and-the-nervous-system", changeFrequency: "weekly", priority: 0.74 },

  { path: "/research", changeFrequency: "weekly", priority: 0.84, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics", changeFrequency: "weekly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics/vagus-nerve-stimulation", changeFrequency: "weekly", priority: 0.82, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics/transcutaneous-vagus-nerve-stimulation", changeFrequency: "weekly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics/auricular-vagus-nerve-stimulation", changeFrequency: "weekly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics/safety-and-tolerability", changeFrequency: "weekly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics/autonomic-regulation", changeFrequency: "weekly", priority: 0.8, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics/heart-rate-variability", changeFrequency: "weekly", priority: 0.78, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/topics/inflammation", changeFrequency: "weekly", priority: 0.72 },
  { path: "/research/topics/gut-brain-axis", changeFrequency: "weekly", priority: 0.72 },
  { path: "/research/studies", changeFrequency: "weekly", priority: 0.74 },
  { path: "/research/studies/porges-1995-polyvagal-theory", changeFrequency: "monthly", priority: 0.66 },
  { path: "/research/studies/thayer-lane-2000-neurovisceral-integration", changeFrequency: "monthly", priority: 0.66 },
  { path: "/research/studies/task-force-1996-heart-rate-variability-standards", changeFrequency: "monthly", priority: 0.66 },
  { path: "/research/studies/inflammatory-reflex-tracey-2002", changeFrequency: "monthly", priority: 0.66 },
  { path: "/research/studies/de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review", changeFrequency: "monthly", priority: 0.7, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/research/studies/mayer-2011-gut-brain-axis", changeFrequency: "monthly", priority: 0.66 },
  { path: "/research/studies/borovikova-2000-vagus-nerve-inflammation", changeFrequency: "monthly", priority: 0.64 },
  { path: "/research/studies/pavlov-tracey-2005-cholinergic-anti-inflammatory-pathway", changeFrequency: "monthly", priority: 0.64 },
  { path: "/research/studies/rush-2005-vagus-nerve-stimulation-depression", changeFrequency: "monthly", priority: 0.64 },

  { path: "/legal", changeFrequency: "monthly", priority: 0.55, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/legal/medical-disclaimer", changeFrequency: "yearly", priority: 0.45, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/legal/intended-use", changeFrequency: "yearly", priority: 0.45, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/legal/regulatory", changeFrequency: "yearly", priority: 0.45, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/legal/ce-compliance", changeFrequency: "yearly", priority: 0.42 },
  { path: "/legal/fda-status", changeFrequency: "yearly", priority: 0.42 },
  { path: "/legal/trust-safety", changeFrequency: "yearly", priority: 0.45, lastModified: SEO_LAUNCH_REVIEW_DATE },
  { path: "/legal/privacy-policy", changeFrequency: "yearly", priority: 0.35 },
  { path: "/legal/terms-of-service", changeFrequency: "yearly", priority: 0.35 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const coreEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: new Date(route.lastModified ?? SEO_LAUNCH_REVIEW_DATE),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const norwegianKnowledgeEntries: MetadataRoute.Sitemap =
    getPublishedNorwegianKnowledgeArticles().map((article) => ({
      url: new URL(article.path, siteUrl).toString(),
      lastModified: new Date(`${article.modifiedAt}T12:00:00Z`),
      changeFrequency: article.changeFrequency,
      priority: article.sitemapPriority,
    }));

  const decisionGuideEntries: MetadataRoute.Sitemap =
    getPublishedDecisionGuides().map((guide) => ({
      url: new URL(guide.path, siteUrl).toString(),
      lastModified: new Date(`${guide.modifiedAt}T12:00:00Z`),
      changeFrequency: guide.changeFrequency,
      priority: guide.sitemapPriority,
    }));

  const norwegianConditionEntries: MetadataRoute.Sitemap =
    getPublishedNorwegianConditionPages().map((page) => ({
      url: new URL(page.path, siteUrl).toString(),
      lastModified: new Date(`${page.modifiedAt}T12:00:00Z`),
      changeFrequency: page.changeFrequency,
      priority: page.sitemapPriority,
    }));

  const norwegianResearchTopicEntries: MetadataRoute.Sitemap =
    getPublishedNorwegianResearchTopics().map((topic) => ({
      url: new URL(topic.path, siteUrl).toString(),
      lastModified: new Date(`${topic.modifiedAt}T12:00:00Z`),
      changeFrequency: topic.changeFrequency,
      priority: topic.sitemapPriority,
    }));

  const researchGuideEntries: MetadataRoute.Sitemap =
    getPublishedResearchGuides().map((guide) => ({
      url: new URL(guide.path, siteUrl).toString(),
      lastModified: new Date(`${guide.modifiedAt}T12:00:00Z`),
      changeFrequency: guide.changeFrequency,
      priority: guide.sitemapPriority,
    }));

  const englishGlossaryEntries: MetadataRoute.Sitemap =
    getPublishedEnglishGlossaryTerms().map((term) => ({
      url: new URL(term.path, siteUrl).toString(),
      lastModified: new Date(`${term.modifiedAt}T12:00:00Z`),
      changeFrequency: term.changeFrequency,
      priority: term.sitemapPriority,
    }));

  const norwegianGlossaryEntries: MetadataRoute.Sitemap =
    getPublishedNorwegianGlossaryTerms().map((term) => ({
      url: new URL(term.path, siteUrl).toString(),
      lastModified: new Date(`${term.modifiedAt}T12:00:00Z`),
      changeFrequency: term.changeFrequency,
      priority: term.sitemapPriority,
    }));

  return [
    ...coreEntries,
    ...decisionGuideEntries,
    ...norwegianKnowledgeEntries,
    ...norwegianConditionEntries,
    ...norwegianResearchTopicEntries,
    ...researchGuideEntries,
    ...englishGlossaryEntries,
    ...norwegianGlossaryEntries,
  ];
}
