import Link from "next/link";

type SummaryPoint = {
  title: string;
  description: string;
};

type PlainEnglishSummaryProps = {
  eyebrow?: string;
  title: string;
  description: string;
  points?: SummaryPoint[];
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PlainEnglishSummary({
  eyebrow = "In plain English",
  title,
  description,
  points = [],
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PlainEnglishSummaryProps) {
  return (
    <section className="border-b border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-0.035em] text-[#1f1f1c] md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] md:text-lg">
            {description}
          </p>

          {(primaryHref || secondaryHref) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryHref && primaryLabel ? (
                <Link
                  href={primaryHref}
                  className="rounded-full bg-[#1f1f1c] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  {primaryLabel}
                </Link>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="rounded-full border border-black/10 bg-white/45 px-5 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          )}
        </div>

        {points.length ? (
          <div className="grid gap-4 md:grid-cols-3 lg:pt-2">
            {points.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.5rem] border border-black/6 bg-white/62 p-6 shadow-[0_14px_48px_rgba(31,31,28,0.045)]"
              >
                <h3 className="text-lg font-medium leading-tight tracking-[-0.02em] text-[#1f1f1c]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
