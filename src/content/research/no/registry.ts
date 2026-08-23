import { vagusnervestimuleringResearchTopic } from "@/content/research/no/topics/vagusnervestimulering";
import { sikkerhetOgTolerabilitetResearchTopic } from "@/content/research/no/topics/sikkerhet-og-tolerabilitet";
import type { NorwegianResearchTopic } from "@/content/research/no/types";

const researchTopicRegistry = [
  vagusnervestimuleringResearchTopic,
  sikkerhetOgTolerabilitetResearchTopic,
] as const satisfies readonly NorwegianResearchTopic[];

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T12:00:00Z`));
}

function validateResearchTopicRegistry(
  topics: readonly NorwegianResearchTopic[],
) {
  const slugs = new Set<string>();
  const paths = new Set<string>();

  for (const topic of topics) {
    if (slugs.has(topic.slug)) {
      throw new Error(`Duplisert norsk forskningsslug: ${topic.slug}`);
    }

    if (paths.has(topic.path)) {
      throw new Error(`Duplisert norsk forskningssti: ${topic.path}`);
    }

    slugs.add(topic.slug);
    paths.add(topic.path);

    if (topic.path !== `/no/forskning/${topic.slug}`) {
      throw new Error(
        `Ugyldig forskningssti for ${topic.slug}: ${topic.path}`,
      );
    }

    if (!isIsoDate(topic.publishedAt) || !isIsoDate(topic.modifiedAt)) {
      throw new Error(`Ugyldig redaksjonell dato på ${topic.path}`);
    }

    if (topic.modifiedAt < topic.publishedAt) {
      throw new Error(
        `modifiedAt er eldre enn publishedAt på ${topic.path}`,
      );
    }

    if (topic.sections.length < 3) {
      throw new Error(`${topic.path} må ha minst tre hovedseksjoner`);
    }

    if (topic.sources.length < 3) {
      throw new Error(`${topic.path} må ha minst tre kilder`);
    }

    const sectionIds = new Set<string>();

    for (const section of topic.sections) {
      if (!/^[a-z0-9-]+$/.test(section.id)) {
        throw new Error(
          `Ugyldig seksjons-ID ${section.id} på ${topic.path}`,
        );
      }

      if (sectionIds.has(section.id)) {
        throw new Error(
          `Duplisert seksjons-ID ${section.id} på ${topic.path}`,
        );
      }

      sectionIds.add(section.id);
    }

    if (topic.relatedSlugs.includes(topic.slug)) {
      throw new Error(`${topic.path} kan ikke relatere til seg selv`);
    }
  }

  for (const topic of topics) {
    for (const relatedSlug of topic.relatedSlugs) {
      if (!slugs.has(relatedSlug)) {
        throw new Error(
          `${topic.path} refererer til ukjent relatedSlug: ${relatedSlug}`,
        );
      }
    }
  }
}

validateResearchTopicRegistry(researchTopicRegistry);

export function getAllNorwegianResearchTopics(): readonly NorwegianResearchTopic[] {
  return [...researchTopicRegistry].sort((a, b) => a.order - b.order);
}

export function getPublishedNorwegianResearchTopics(): readonly NorwegianResearchTopic[] {
  return getAllNorwegianResearchTopics().filter(
    (topic) => topic.status === "published",
  );
}

export function getNorwegianResearchTopic(
  slug: string,
): NorwegianResearchTopic | undefined {
  return researchTopicRegistry.find((topic) => topic.slug === slug);
}
