import type { appV2Content } from "@/content/app-v2";

type AppV2CalmByDesignProps = {
  content: typeof appV2Content.calmByDesign;
};

export function AppV2CalmByDesign({
  content,
}: AppV2CalmByDesignProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.7rem)] font-medium leading-[0.97] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.65rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_16px_55px_rgba(31,31,28,0.05)] sm:p-6"
            >
              <h3 className="text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
