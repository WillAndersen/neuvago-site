import Link from "next/link";

type Pathway = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

type AuthorityPathwaysProps = {
  eyebrow: string;
  title: string;
  description?: string;
  pathways: Pathway[];
  tone?: "light" | "warm" | "dark";
};

export function AuthorityPathways({
  eyebrow,
  title,
  description,
  pathways,
  tone = "warm",
}: AuthorityPathwaysProps) {
  const isDark = tone === "dark";
  const sectionClass = isDark
    ? "border-b border-white/10 bg-[#1f1f1c] text-white"
    : tone === "light"
      ? "border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]"
      : "border-b border-black/5 bg-[#efe8de] text-[#1f1f1c]";

  const cardClass = isDark
    ? "border-white/10 bg-white/[0.055] text-white"
    : "border-black/6 bg-white/62 text-[#1f1f1c]";

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-3xl">
          <p className={`text-sm font-medium uppercase tracking-[0.18em] ${isDark ? "text-white/55" : "text-[#7a756c]"}`}>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${isDark ? "text-white/66" : "text-[#5f5a52]"}`}>
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pathways.map((item) => (
            <article
              key={item.title}
              className={`rounded-[1.75rem] border p-7 shadow-[0_18px_54px_rgba(31,31,28,0.05)] ${cardClass}`}
            >
              <h3 className="text-xl font-medium leading-tight tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className={`mt-4 text-sm leading-7 md:text-base ${isDark ? "text-white/65" : "text-[#5f5a52]"}`}>
                {item.description}
              </p>
              <Link
                href={item.href}
                className={`mt-7 inline-flex text-sm font-medium transition hover:opacity-70 ${isDark ? "text-white" : "text-[#1f1f1c]"}`}
              >
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
