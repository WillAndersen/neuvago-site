type LedgerItem = {
  title: string;
  description: string;
};

type ResearchLedgerProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: LedgerItem[];
};

export function ResearchLedger({
  eyebrow = "Research ledger",
  title = "What the evidence can — and cannot — say",
  description = "A premium research page should make the boundary visible. Evidence can inform the category without becoming an automatic product claim.",
  items,
}: ResearchLedgerProps) {
  return (
    <section className="border-b border-black/5 bg-[#1f1f1c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/55">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/66 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
            >
              <h3 className="text-xl font-medium leading-tight tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
