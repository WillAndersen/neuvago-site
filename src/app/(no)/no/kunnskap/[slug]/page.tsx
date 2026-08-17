import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NorwegianKnowledgeArticlePage } from "@/components/knowledge/NorwegianKnowledgeArticlePage";
import {
  getNorwegianKnowledgeArticle,
  getPublishedNorwegianKnowledgeArticles,
} from "@/content/knowledge/no/registry";
import { buildNorwegianKnowledgeMetadata } from "@/lib/seo/knowledge-article";

type NorwegianKnowledgePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNorwegianKnowledgeArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NorwegianKnowledgePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNorwegianKnowledgeArticle(slug);

  if (!article) {
    return {};
  }

  return buildNorwegianKnowledgeMetadata(article);
}

export default async function NorwegianKnowledgePage({
  params,
}: NorwegianKnowledgePageProps) {
  const { slug } = await params;
  const article = getNorwegianKnowledgeArticle(slug);

  if (!article) {
    notFound();
  }

  return <NorwegianKnowledgeArticlePage article={article} />;
}
