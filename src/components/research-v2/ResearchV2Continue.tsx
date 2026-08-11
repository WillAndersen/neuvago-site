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

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.cards.map((card, index) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group rounded-[2rem] border p-7 shadow-[0_22px_78px_rgba(31,31,28,0.065)] transition hover:-translate-y-0.5 sm:p-9 ${
                index === 0
                  ? "border-black/10 bg-[#1f1f1c] text-white"
                  : "border-black/6 bg-[#fbf8f2] text-[#1f1f1c]"
              }`}
            >
              <h3 className="text-3xl font-medium tracking-[-0.05em]">
                {card.title}
              </h3>
              <p
                className={`mt-4 max-w-xl text-sm leading-7 sm:text-base ${
                  index === 0 ? "text-white/68" : "text-[#5f5a52]"
                }`}
              >
                {card.description}
              </p>
              <span
                className={`mt-7 inline-flex text-sm font-medium underline-offset-4 group-hover:underline ${
                  index === 0 ? "text-white" : "text-[#1f1f1c]"
                }`}
              >
                {card.linkLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
