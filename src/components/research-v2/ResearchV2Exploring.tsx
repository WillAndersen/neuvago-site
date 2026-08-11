import Link from "next/link";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2ExploringProps = {
  content: typeof researchV2Content.exploring;
};

export function ResearchV2Exploring({
  content,
}: ResearchV2ExploringProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.cards.map((card) => {
            const cardContent = (
              <>
                <p className="text-[0.63rem] font-medium uppercase tracking-[0.21em] text-[#927f68]">
                  {card.label}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.045em] text-[#1f1f1c]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
                {card.linkLabel ? (
                  <span className="mt-6 inline-flex text-sm font-medium text-[#1f1f1c] underline-offset-4 group-hover:underline">
                    {card.linkLabel}
                  </span>
                ) : (
                  <span className="mt-6 inline-flex rounded-full border border-black/7 bg-[#f2eee8] px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.17em] text-[#81766a]">
                    Research area
                  </span>
                )}
              </>
            );

            return card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-[1.7rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_62px_rgba(31,31,28,0.055)] transition hover:-translate-y-0.5"
              >
                {cardContent}
              </Link>
            ) : (
              <article
                key={card.title}
                className="group rounded-[1.7rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_18px_62px_rgba(31,31,28,0.055)]"
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
