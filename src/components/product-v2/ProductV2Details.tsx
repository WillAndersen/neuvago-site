import Link from "next/link";
import type { productV2Content } from "@/content/product-v2";

type ProductV2DetailsProps = {
  content: typeof productV2Content.productDetails;
};

export function ProductV2Details({ content }: ProductV2DetailsProps) {
  return (
    <section className="bg-[#f2eee8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-black/6 bg-[#fbf8f2]/90 p-6 shadow-[0_24px_90px_rgba(31,31,28,0.08)] sm:p-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[13ch] text-balance text-[clamp(2.4rem,9.5vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-black/8 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {content.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_16px_60px_rgba(31,31,28,0.06)]"
              >
                <h3 className="text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-black/6 bg-[#1f1f1c] p-5 text-white shadow-[0_20px_80px_rgba(31,31,28,0.1)] sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {content.rows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                    {row.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/82">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <h3 className="text-lg font-medium tracking-[-0.03em] text-white">
                {content.safetyTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/72">
                {content.safetyDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
