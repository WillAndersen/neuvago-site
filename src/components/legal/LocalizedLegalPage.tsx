import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data";

type LegalCta = {
  label: string;
  href: string;
};

type LegalKeyPoint = {
  title: string;
  description: string;
};

type LegalSection = {
  title: string;
  body: readonly string[];
};

type LegalRelatedPage = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

type LegalBreadcrumb = {
  name: string;
  path: string;
};

export type LegalTemplateContent = {
  metadata: Metadata;
  structuredDataTitle: string;
  structuredDataDescription: string;
  path: string;
  breadcrumbs: readonly LegalBreadcrumb[];
  eyebrow: string;
  title: string;
  description: string;
  secondaryDescription?: string;
  primaryCta?: LegalCta;
  secondaryCta?: LegalCta;
  trustCard: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      description: string;
    }[];
  };
  notice?: {
    title: string;
    body: string;
  };
  keyPoints: readonly LegalKeyPoint[];
  sections: readonly LegalSection[];
  relatedPages: readonly LegalRelatedPage[];
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: LegalCta;
    secondaryCta?: LegalCta;
  };
};

export function LocalizedLegalPage({ content }: { content: LegalTemplateContent }) {
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title: content.structuredDataTitle,
    description: content.structuredDataDescription,
    path: content.path,
    breadcrumbs: content.breadcrumbs.map((item) => ({
      name: item.name,
      path: item.path,
    })),
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix={`legal-no-${content.path.replace(/[^a-z0-9]+/gi, "-")}`} />

      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              {content.eyebrow}
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              {content.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              {content.description}
            </p>

            {content.secondaryDescription ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f5a52]">
                {content.secondaryDescription}
              </p>
            ) : null}

            {(content.primaryCta || content.secondaryCta) ? (
              <div className="mt-10 flex flex-wrap gap-4">
                {content.primaryCta ? (
                  <Link
                    href={content.primaryCta.href}
                    className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    {content.primaryCta.label}
                  </Link>
                ) : null}

                {content.secondaryCta ? (
                  <Link
                    href={content.secondaryCta.href}
                    className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
                  >
                    {content.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>

          <aside className="rounded-[2rem] border border-black/5 bg-white/55 p-5 shadow-[0_20px_80px_rgba(31,31,28,0.08)] backdrop-blur md:p-7">
            <div className="rounded-[1.6rem] bg-[#efe8de] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8a847b]">
                {content.trustCard.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.03em] text-[#1f1f1c] md:text-3xl">
                {content.trustCard.title}
              </h2>

              <div className="mt-8 space-y-4">
                {content.trustCard.items.map((item) => (
                  <article key={item.title} className="rounded-2xl bg-white/70 p-4">
                    <h3 className="text-sm font-medium text-[#1f1f1c]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#5f5a52]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {content.notice ? (
        <section className="border-b border-black/5 bg-[#f2eee8]">
          <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
            <div className="rounded-[1.6rem] border border-black/6 bg-white/55 p-6 md:p-8">
              <p className="text-sm font-medium text-[#1f1f1c]">
                {content.notice.title}
              </p>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-[#5f5a52] md:text-base">
                {content.notice.body}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {content.keyPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h2 className="text-xl font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Innhold
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Tydelig struktur, samlet på ett sted
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              Denne siden er skrevet for å gi brukere en klarere oversikt. Endelig juridisk tekst bør alltid kontrolleres opp mot selskapets faktiske produkt, betalingsflyt, personvernoppsett og regulatoriske dokumentasjon.
            </p>
          </div>

          <div className="space-y-6">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-7 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-8"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                  {section.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-[#5f5a52] md:text-base md:leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Relaterte sider
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Gå videre i juridisk og tillitslaget
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.relatedPages.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-black/5 bg-white/60 p-6 shadow-[0_12px_40px_rgba(31,31,28,0.04)]">
                <h3 className="text-xl font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {item.description}
                </p>
                <Link href={item.href} className="mt-7 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70">
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                {content.finalCta.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                {content.finalCta.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={content.finalCta.primaryCta.href} className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                  {content.finalCta.primaryCta.label}
                </Link>
                {content.finalCta.secondaryCta ? (
                  <Link href={content.finalCta.secondaryCta.href} className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75">
                    {content.finalCta.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
