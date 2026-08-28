import Link from "next/link";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2ContinueProps = {
  content: typeof researchV2Content.continue;
};

export function ResearchV2Continue({
  content,
}: ResearchV2ContinueProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div className="max-w-[38rem]">
            <p className="text-[0.7rem] font-medium tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="border-t border-black/10">
            {content.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block border-b border-black/10 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f2eee8] sm:py-8"
              >
                <h3 className="text-2xl font-medium tracking-[-0.045em] text-[#1f1f1c] sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1f1f1c] underline-offset-4 group-hover:underline group-focus-visible:underline">
                  {card.linkLabel}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
