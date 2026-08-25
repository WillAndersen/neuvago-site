import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GlossaryTermPage } from "@/components/glossary/GlossaryTermPage";
import {
  getGlossaryTerm,
  getGlossaryTermPair,
  getPublishedNorwegianGlossaryTerms,
} from "@/content/glossary/registry";
import { buildGlossaryTermMetadata } from "@/lib/seo/glossary";

type NorwegianGlossaryTermPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNorwegianGlossaryTerms().map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({
  params,
}: NorwegianGlossaryTermPageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm("no", slug);

  if (!term) {
    return {};
  }

  const pair = getGlossaryTermPair(term.id);
  if (!pair) {
    return {};
  }

  return buildGlossaryTermMetadata(term, pair);
}

export default async function NorwegianGlossaryTermPage({
  params,
}: NorwegianGlossaryTermPageProps) {
  const { slug } = await params;
  const term = getGlossaryTerm("no", slug);

  if (!term) {
    notFound();
  }

  return <GlossaryTermPage term={term} />;
}
