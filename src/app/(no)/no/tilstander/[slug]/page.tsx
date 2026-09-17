import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NorwegianConditionPageView } from "@/components/conditions/NorwegianConditionPage";
import {
  NorwegianSleepConditionPage,
  norwegianSleepConditionMetadata,
} from "@/components/conditions/NorwegianSleepConditionPage";
import {
  getNorwegianConditionPage,
  getPublishedNorwegianConditionPages,
} from "@/content/conditions/no/registry";
import { buildNorwegianConditionMetadata } from "@/lib/seo/norwegian-condition";

type NorwegianConditionRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNorwegianConditionPages().map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: NorwegianConditionRouteProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "sovn") {
    return norwegianSleepConditionMetadata;
  }

  const page = getNorwegianConditionPage(slug);

  if (!page) {
    return {};
  }

  return buildNorwegianConditionMetadata(page);
}

export default async function NorwegianConditionRoute({
  params,
}: NorwegianConditionRouteProps) {
  const { slug } = await params;

  if (slug === "sovn") {
    return <NorwegianSleepConditionPage />;
  }

  const page = getNorwegianConditionPage(slug);

  if (!page) {
    notFound();
  }

  return <NorwegianConditionPageView page={page} />;
}
