import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GlossaryTermPage } from "@/components/glossary/GlossaryTermPage";
import {
  getGlossaryTerm,
  getGlossaryTermPair,
  getPublishedEnglishGlossaryTerms,
} from "@/content/glossary/registry";
import { buildGlossaryTermMetadata } from "@/lib/seo/glossary";

type EnglishGlossaryTermPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedEnglishGlossaryTerms().map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({
  params,
}: EnglishGlossaryTermPageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm("en", slug);

  if (!term) {
    return {};
  }

  const pair = getGlossaryTermPair(term.id);
  if (!pair) {
    return {};
  }

  return buildGlossaryTermMetadata(term, pair);
}

export default async function EnglishGlossaryTermPage({
  params,
}: EnglishGlossaryTermPageProps) {
  const { slug } = await params;
  const term = getGlossaryTerm("en", slug);

  if (!term) {
    notFound();
  }

  return <GlossaryTermPage term={term} />;
}
