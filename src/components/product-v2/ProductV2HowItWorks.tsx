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
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.4rem,9.5vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
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
          </div>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[1.8rem] border border-black/8 bg-black/8 sm:grid-cols-2 xl:grid-cols-4">
          {content.flow.map((item, index) => (
            <article
              key={item.title}
              className="relative bg-[#f2eee8] p-5 sm:p-6"
            >
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#927f68]">
                {item.label}
              </p>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                {item.description}
              </p>

              {index < content.flow.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-[#f7f4ef] text-sm text-[#6f675e] xl:flex"
                >
                  →
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
