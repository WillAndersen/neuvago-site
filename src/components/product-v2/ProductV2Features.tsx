import Image from "next/image";
import type { productV2Content } from "@/content/product-v2";

type ProductV2FeaturesProps = {
  content: typeof productV2Content.features;
};

export function ProductV2Features({ content }: ProductV2FeaturesProps) {
  return (
    <section className="bg-[#f2eee8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="overflow-hidden rounded-[2.1rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.08)] lg:sticky lg:top-24">
          <div className="relative aspect-[4/3] bg-[#ede5da]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 42vw"
            />
          </div>
          <div className="border-t border-black/6 p-6 sm:p-8">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.35rem,9vw,3.4rem)] font-medium leading-[0.97] tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.55rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_16px_60px_rgba(31,31,28,0.06)] sm:p-6"
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
      </div>
    </section>
  );
}
