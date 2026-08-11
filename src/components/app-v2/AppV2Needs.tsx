import type { appV2Content } from "@/content/app-v2";

type AppV2NeedsProps = {
  content: typeof appV2Content.needs;
};

export function AppV2Needs({ content }: AppV2NeedsProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[15rem] flex-col rounded-[1.6rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_16px_55px_rgba(31,31,28,0.055)]"
            >
              <span className="self-start rounded-full border border-black/8 bg-[#f2eee8] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#7c7165]">
                {card.direction}
              </span>
              <h3 className="mt-6 text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
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
