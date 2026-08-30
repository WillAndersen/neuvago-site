import { vagusnervenArticle } from "@/content/knowledge/no/articles/vagusnerven";
import { vagusnervestimuleringArticle } from "@/content/knowledge/no/articles/vagusnervestimulering";
import { ikkeInvasivVagusnervestimuleringArticle } from "@/content/knowledge/no/articles/ikke-invasiv-vagusnervestimulering";
import { transkutanVagusnervestimuleringArticle } from "@/content/knowledge/no/articles/transkutan-vagusnervestimulering";
import { aurikulaerVagusnervestimuleringArticle } from "@/content/knowledge/no/articles/aurikulaer-vagusnervestimulering";
import { implantertOgIkkeInvasivVnsArticle } from "@/content/knowledge/no/articles/implantert-og-ikke-invasiv-vns";
import { detAutonomeNervesystemetArticle } from "@/content/knowledge/no/articles/det-autonome-nervesystemet";
import { detParasympatiskeNervesystemetArticle } from "@/content/knowledge/no/articles/det-parasympatiske-nervesystemet";
import { reguleringAvNervesystemetArticle } from "@/content/knowledge/no/articles/regulering-av-nervesystemet";
import { vagalToneArticle } from "@/content/knowledge/no/articles/vagal-tone";
import { hrvOgVagusnervenArticle } from "@/content/knowledge/no/articles/hrv-og-vagusnerven";
import { oretsAnatomiOgVagusnervenArticle } from "@/content/knowledge/no/articles/orets-anatomi-og-vagusnerven";
import { hvordanRoeNedNervesystemetArticle } from "@/content/knowledge/no/articles/hvordan-roe-ned-nervesystemet";
import { trottMenFarIkkeSlappetAvArticle } from "@/content/knowledge/no/articles/trott-men-far-ikke-slappet-av";
import { kveldsrutineForNedtrappingArticle } from "@/content/knowledge/no/articles/kveldsrutine-for-nedtrapping";
import { erVagusnervestimuleringTrygtArticle } from "@/content/knowledge/no/articles/er-vagusnervestimulering-trygt";
import { bivirkningerVedIkkeInvasivVagusnervestimuleringArticle } from "@/content/knowledge/no/articles/bivirkninger-ved-ikke-invasiv-vagusnervestimulering";
import { hvemBorVaereForsiktigMedVagusnervestimuleringArticle } from "@/content/knowledge/no/articles/hvem-bor-vaere-forsiktig-med-vagusnervestimulering";
import type { NorwegianKnowledgeArticle } from "@/content/knowledge/no/types";

const articleRegistry = [
  vagusnervenArticle,
  vagusnervestimuleringArticle,
  ikkeInvasivVagusnervestimuleringArticle,
  transkutanVagusnervestimuleringArticle,
  aurikulaerVagusnervestimuleringArticle,
  implantertOgIkkeInvasivVnsArticle,
  detAutonomeNervesystemetArticle,
  detParasympatiskeNervesystemetArticle,
  reguleringAvNervesystemetArticle,
  vagalToneArticle,
  hrvOgVagusnervenArticle,
  oretsAnatomiOgVagusnervenArticle,
  hvordanRoeNedNervesystemetArticle,
  trottMenFarIkkeSlappetAvArticle,
  kveldsrutineForNedtrappingArticle,
  erVagusnervestimuleringTrygtArticle,
  bivirkningerVedIkkeInvasivVagusnervestimuleringArticle,
  hvemBorVaereForsiktigMedVagusnervestimuleringArticle,
] as const satisfies readonly NorwegianKnowledgeArticle[];

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T12:00:00Z`));
}

function validateArticleRegistry(
  articles: readonly NorwegianKnowledgeArticle[]
): readonly NorwegianKnowledgeArticle[] {
  const slugs = new Set<string>();
  const paths = new Set<string>();

  for (const article of articles) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
      throw new Error(`Ugyldig norsk kunnskaps-slug: ${article.slug}`);
    }

    const expectedPath = `/no/kunnskap/${article.slug}`;
    if (article.path !== expectedPath) {
      throw new Error(
        `Feil path for ${article.slug}: forventet ${expectedPath}, fikk ${article.path}`
      );
    }

    if (slugs.has(article.slug)) {
      throw new Error(`Duplisert norsk kunnskaps-slug: ${article.slug}`);
    }

    if (paths.has(article.path)) {
      throw new Error(`Duplisert norsk kunnskaps-path: ${article.path}`);
    }

    slugs.add(article.slug);
    paths.add(article.path);

    if (!isIsoDate(article.publishedAt) || !isIsoDate(article.modifiedAt)) {
      throw new Error(`Ugyldig redaksjonell dato på ${article.path}`);
    }

    if (article.modifiedAt < article.publishedAt) {
      throw new Error(`modifiedAt er eldre enn publishedAt på ${article.path}`);
    }

    if (article.sections.length < 3) {
      throw new Error(`${article.path} må ha minst tre hovedseksjoner`);
    }

    const sectionIds = new Set<string>();
    for (const section of article.sections) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(section.id)) {
        throw new Error(`Ugyldig seksjons-ID ${section.id} på ${article.path}`);
      }

      if (sectionIds.has(section.id)) {
        throw new Error(`Duplisert seksjons-ID ${section.id} på ${article.path}`);
      }

      sectionIds.add(section.id);
    }

    if (article.sources.length < 3) {
      throw new Error(`${article.path} må ha minst tre dokumenterte kilder`);
    }

    if (article.relatedSlugs.includes(article.slug)) {
      throw new Error(`${article.path} kan ikke relatere til seg selv`);
    }
  }

  for (const article of articles) {
    for (const relatedSlug of article.relatedSlugs) {
      if (!slugs.has(relatedSlug)) {
        throw new Error(
          `${article.path} refererer til ukjent relatedSlug: ${relatedSlug}`
        );
      }
    }
  }

  return articles;
}

export const norwegianKnowledgeArticles = validateArticleRegistry(articleRegistry);

export function getPublishedNorwegianKnowledgeArticles(): readonly NorwegianKnowledgeArticle[] {
  return norwegianKnowledgeArticles
    .filter((article) => article.status === "published")
    .toSorted((a, b) => a.order - b.order);
}

export function getNorwegianKnowledgeArticle(
  slug: string
): NorwegianKnowledgeArticle | undefined {
  return norwegianKnowledgeArticles.find(
    (article) => article.slug === slug && article.status === "published"
  );
}
