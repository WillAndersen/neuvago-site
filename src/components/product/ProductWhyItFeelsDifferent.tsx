import type { productPageContent } from "@/content/product";

type ProductWhyItFeelsDifferentProps = {
  content: typeof productPageContent.whyItFeelsDifferent;
};

export function ProductWhyItFeelsDifferent({ content }: ProductWhyItFeelsDifferentProps) {
  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#b8aa99]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#d4cabd] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
          {content.cards.map((card) => (
            <div key={card.title} className="bg-[#262520] p-6 sm:p-7">
              <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#d4cabd]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
