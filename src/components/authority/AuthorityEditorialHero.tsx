import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type HeroPoint = {
  label: string;
  title: string;
  description: string;
};

type AuthorityEditorialHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  secondaryDescription?: string;
  actions?: HeroAction[];
  points?: HeroPoint[];
  tone?: "learn" | "research" | "conditions";
};

export function AuthorityEditorialHero({
  eyebrow,
  title,
  description,
  secondaryDescription,
  actions = [],
  points = [],
  tone = "learn",
}: AuthorityEditorialHeroProps) {
  const isDark = tone === "research";
  const sectionClass = isDark
    ? "border-b border-white/10 bg-[#1f1f1c] text-white"
    : tone === "conditions"
      ? "border-b border-black/5 bg-[#efe8de] text-[#1f1f1c]"
      : "border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]";

  const bodyClass = isDark ? "text-white/68" : "text-[#5f5a52]";
  const eyebrowClass = isDark ? "text-white/55" : "text-[#7a756c]";
  const panelClass = isDark
    ? "border-white/10 bg-white/[0.055]"
    : "border-black/6 bg-white/55";
  const pointClass = isDark
    ? "border-white/10 bg-white/[0.06]"
    : "border-black/6 bg-white/68";

  return (
    <section className={sectionClass}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-28">
        <div className="max-w-4xl">
          <p className={`mb-5 text-sm font-medium uppercase tracking-[0.18em] ${eyebrowClass}`}>
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-medium leading-[1.03] tracking-[-0.045em] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className={`mt-7 max-w-2xl text-base leading-8 md:text-lg ${bodyClass}`}>
            {description}
          </p>
          {secondaryDescription ? (
            <p className={`mt-5 max-w-2xl text-base leading-8 ${bodyClass}`}>
              {secondaryDescription}
            </p>
          ) : null}

          {actions.length ? (
            <div className="mt-10 flex flex-wrap gap-4">
              {actions.map((action) => {
                const primary = action.variant !== "secondary";
                return (
                  <Link
                    key={action.href + action.label}
                    href={action.href}
                    className={
                      primary
                        ? isDark
                          ? "rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:opacity-90"
                          : "rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                        : isDark
                          ? "rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                          : "rounded-full border border-black/10 bg-white/45 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                    }
                  >
                    {action.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>

        {points.length ? (
          <div className={`rounded-[2.25rem] border p-4 shadow-[0_24px_90px_rgba(31,31,28,0.08)] ${panelClass}`}>
            <div className="grid gap-3">
              {points.map((point) => (
                <article
                  key={point.title}
                  className={`rounded-[1.5rem] border p-5 ${pointClass}`}
                >
                  <p className={`text-xs font-medium uppercase tracking-[0.16em] ${eyebrowClass}`}>
                    {point.label}
                  </p>
                  <h2 className="mt-2 text-xl font-medium leading-tight tracking-[-0.02em]">
                    {point.title}
                  </h2>
                  <p className={`mt-3 text-sm leading-7 ${bodyClass}`}>
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
