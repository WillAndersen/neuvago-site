import Link from "next/link";

export type ConditionArticleTone = "light" | "warm" | "dark";

export type ConditionArticleRow = {
  title?: string;
  description: string;
};

export type ConditionArticleSection = {
  id: string;
  eyebrow?: string;
  title: string;
  introduction?: string;
  paragraphs?: readonly string[];
  rows?: readonly ConditionArticleRow[];
  points?: readonly string[];
  closing?: string;
  tone?: ConditionArticleTone;
};

export type ConditionArticleRelatedLink = {
  title: string;
  description: string;
  href: string;
};

export type ConditionArticleRelatedGroup = {
  title: string;
  links: readonly ConditionArticleRelatedLink[];
};

export type ConditionArticleSource = {
  title: string;
  reference: string;
  href: string;
  context: string;
};

export type ConditionArticleContent = {
  hero: {
    eyebrow: string;
    title: string;
    introduction: string;
    supportingCopy: string;
  };
  sections: readonly ConditionArticleSection[];
  urgentHelp: {
    eyebrow: string;
    title: string;
    introduction: string;
    items: readonly string[];
    closing: string;
  };
  relatedReading: {
    eyebrow: string;
    title: string;
    introduction: string;
    groups: readonly ConditionArticleRelatedGroup[];
  };
  sources: {
    eyebrow: string;
    title: string;
    introduction: string;
    items: readonly ConditionArticleSource[];
    evidenceReviewed: string;
    editorialReview: string;
    medicalReview: string;
    disclaimer: string;
  };
};

type ConditionArticlePageProps = {
  content: ConditionArticleContent;
};

const sectionStyles: Record<
  ConditionArticleTone,
  {
    section: string;
    eyebrow: string;
    heading: string;
    body: string;
    border: string;
    divide: string;
  }
> = {
  light: {
    section: "border-b border-black/5 bg-[#f7f4ef]",
    eyebrow: "text-[#7a756c]",
    heading: "text-[#1f1f1c]",
    body: "text-[#5f5a52]",
    border: "border-black/10",
    divide: "divide-black/10",
  },
  warm: {
    section: "border-b border-black/5 bg-[#eee7dd]",
    eyebrow: "text-[#7a756c]",
    heading: "text-[#1f1f1c]",
    body: "text-[#5f5a52]",
    border: "border-black/10",
    divide: "divide-black/10",
  },
  dark: {
    section: "border-b border-white/10 bg-[#23231f]",
    eyebrow: "text-[#cdbda9]",
    heading: "text-white",
    body: "text-[#e3d8cb]",
    border: "border-white/14",
    divide: "divide-white/14",
  },
};

function EditorialSection({ section }: { section: ConditionArticleSection }) {
  const tone = section.tone ?? "light";
  const styles = sectionStyles[tone];

  return (
    <section id={section.id} className={styles.section}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          {section.eyebrow ? (
            <p
              className={`text-xs font-medium uppercase tracking-[0.22em] ${styles.eyebrow}`}
            >
              {section.eyebrow}
            </p>
          ) : null}
          <h2
            className={`mt-4 max-w-[15ch] text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl ${styles.heading}`}
          >
            {section.title}
          </h2>
          {section.introduction ? (
            <p
              className={`mt-6 max-w-xl text-base leading-8 md:text-lg ${styles.body}`}
            >
              {section.introduction}
            </p>
          ) : null}
        </div>

        <div>
          {section.paragraphs?.length ? (
            <div className="space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`max-w-3xl text-base leading-8 md:text-lg ${styles.body}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {section.rows?.length ? (
            <div
              className={`mt-2 divide-y border-y ${styles.border} ${styles.divide}`}
            >
              {section.rows.map((row) => (
                <article key={`${row.title ?? "row"}-${row.description}`} className="py-7 first:pt-0 last:pb-0">
                  {row.title ? (
                    <h3
                      className={`text-xl font-medium leading-tight tracking-[-0.025em] md:text-2xl ${styles.heading}`}
                    >
                      {row.title}
                    </h3>
                  ) : null}
                  <p
                    className={`${row.title ? "mt-3" : ""} max-w-3xl text-sm leading-7 md:text-base ${styles.body}`}
                  >
                    {row.description}
                  </p>
                </article>
              ))}
            </div>
          ) : null}

          {section.points?.length ? (
            <div
              className={`mt-2 divide-y border-y ${styles.border} ${styles.divide}`}
            >
              {section.points.map((point) => (
                <p
                  key={point}
                  className={`py-6 text-sm leading-7 first:pt-0 last:pb-0 md:text-base ${styles.body}`}
                >
                  {point}
                </p>
              ))}
            </div>
          ) : null}

          {section.closing ? (
            <p
              className={`mt-8 max-w-3xl border-l-2 pl-5 text-sm leading-7 md:text-base ${styles.border} ${styles.body}`}
            >
              {section.closing}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ConditionArticlePage({ content }: ConditionArticlePageProps) {
  return (
    <article>
      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-[92rem] px-6 py-20 md:px-10 md:py-24 lg:flex lg:min-h-[72vh] lg:items-center lg:px-12 lg:py-28">
          <div className="max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7a756c]">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-[19ch] text-[clamp(3.25rem,7vw,7.25rem)] font-medium leading-[0.96] tracking-[-0.06em] text-[#1f1f1c]">
              {content.hero.title}
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#4f4b45] md:text-xl md:leading-9">
              {content.hero.introduction}
            </p>
            <p className="mt-7 max-w-3xl border-l border-black/15 pl-5 text-base leading-8 text-[#6b665e]">
              {content.hero.supportingCopy}
            </p>
          </div>
        </div>
      </section>

      {content.sections.map((section) => (
        <EditorialSection key={section.id} section={section} />
      ))}

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="border-y border-[#9a6b52]/35 py-9 md:py-12">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8a6554]">
              {content.urgentHelp.eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1f1f1c] sm:text-4xl md:text-5xl">
              {content.urgentHelp.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              {content.urgentHelp.introduction}
            </p>
            <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {content.urgentHelp.items.map((item) => (
                <p
                  key={item}
                  className="py-6 text-sm leading-7 text-[#403d38] first:pt-0 last:pb-0 md:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-[#6b665e] md:text-base">
              {content.urgentHelp.closing}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7a756c]">
              {content.relatedReading.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1f1f1c] sm:text-4xl md:text-5xl">
              {content.relatedReading.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg">
              {content.relatedReading.introduction}
            </p>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {content.relatedReading.groups.map((group) => (
              <section key={group.title} aria-labelledby={`related-${group.title.toLowerCase().replaceAll(" ", "-")}`}>
                <h3
                  id={`related-${group.title.toLowerCase().replaceAll(" ", "-")}`}
                  className="text-lg font-medium tracking-[-0.025em] text-[#1f1f1c]"
                >
                  {group.title}
                </h3>
                <div className="mt-5 divide-y divide-black/10 border-y border-black/10">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group block py-5 first:pt-0 last:pb-0"
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span>
                          <span className="block text-sm font-medium leading-6 text-[#1f1f1c] transition group-hover:opacity-70">
                            {link.title}
                          </span>
                          <span className="mt-2 block text-sm leading-6 text-[#6b665e]">
                            {link.description}
                          </span>
                        </span>
                        <span aria-hidden="true" className="mt-0.5 text-[#7a756c]">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#23231f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#cdbda9]">
              {content.sources.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
              {content.sources.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#ddd2c6] md:text-lg">
              {content.sources.introduction}
            </p>
          </div>

          <div className="mt-12 divide-y divide-white/12 border-y border-white/12">
            {content.sources.items.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[0.72fr_1.28fr] md:gap-10"
              >
                <div>
                  <h3 className="text-base font-medium leading-7 text-white transition group-hover:text-[#cdbda9]">
                    {source.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#b9aa99]">
                    External source ↗
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[#eee5db]">
                    {source.reference}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#c9bcae]">
                    {source.context}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 grid border-y border-white/12 sm:grid-cols-3 sm:divide-x sm:divide-white/12">
            <div className="py-5 sm:pr-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#b9aa99]">
                Evidence reviewed
              </p>
              <p className="mt-2 text-sm leading-6 text-white">
                {content.sources.evidenceReviewed}
              </p>
            </div>
            <div className="border-t border-white/12 py-5 sm:border-t-0 sm:px-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#b9aa99]">
                Editorial review
              </p>
              <p className="mt-2 text-sm leading-6 text-white">
                {content.sources.editorialReview}
              </p>
            </div>
            <div className="border-t border-white/12 py-5 sm:border-t-0 sm:pl-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#b9aa99]">
                Medical review
              </p>
              <p className="mt-2 text-sm leading-6 text-white">
                {content.sources.medicalReview}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#c9bcae]">
            {content.sources.disclaimer}
          </p>
        </div>
      </section>
    </article>
  );
}
