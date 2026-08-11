import Image from "next/image";
import type { productV2Content } from "@/content/product-v2";

type ProductV2EverydayUseProps = {
  content: typeof productV2Content.everydayUse;
};

export function ProductV2EverydayUse({
  content,
}: ProductV2EverydayUseProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.4rem,9.5vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[2rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_80px_rgba(31,31,28,0.07)]"
            >
              <div className="relative min-h-[17rem] bg-[#ede5da]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 24vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1f1c]/14 via-transparent to-white/10" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
