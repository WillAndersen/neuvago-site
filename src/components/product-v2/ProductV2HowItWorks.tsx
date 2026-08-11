import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { productV2Content } from "@/content/product-v2";

type ProductV2HowItWorksProps = {
  content: typeof productV2Content.howItWorks;
};

export function ProductV2HowItWorks({
  content,
}: ProductV2HowItWorksProps) {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.4rem,9.5vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl sm:leading-[0.94] lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
            <p className="mt-5 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.secondaryDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton
                href={content.primaryCta.href}
                label={content.primaryCta.label}
                variant="primary"
              />
              <CtaButton
                href={content.secondaryCta.href}
                label={content.secondaryCta.label}
                variant="secondary"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.15rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.08)]">
            <div className="relative aspect-[16/11] bg-[#ede5da]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 54vw"
              />
            </div>

            <div className="grid gap-3 border-t border-black/6 p-4 sm:grid-cols-3 sm:p-5">
              {content.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.15rem] border border-black/6 bg-white/58 px-4 py-4"
                >
                  <h3 className="text-base font-medium tracking-[-0.025em] text-[#292824]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
