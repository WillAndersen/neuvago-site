import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NorwegianResearchTopicPage } from "@/components/research/NorwegianResearchTopicPage";
import {
  getNorwegianResearchTopic,
  getPublishedNorwegianResearchTopics,
} from "@/content/research/no/registry";
import { buildNorwegianResearchTopicMetadata } from "@/lib/seo/norwegian-research-topic";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNorwegianResearchTopics().map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getNorwegianResearchTopic(slug);

  if (!topic || topic.status !== "published") {
    return {};
  }

  return buildNorwegianResearchTopicMetadata(topic);
}

export default async function NorwegianResearchTopicRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getNorwegianResearchTopic(slug);

  if (!topic || topic.status !== "published") {
    notFound();
  }

  return <NorwegianResearchTopicPage topic={topic} />;
}
