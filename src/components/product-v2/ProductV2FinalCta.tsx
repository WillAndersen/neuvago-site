import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type {
  productV2Content,
  ProductV2Cta,
} from "@/content/product-v2";

type ProductV2FinalCtaContent = typeof productV2Content.finalCta & {
  secondaryCta?: ProductV2Cta;
};

type ProductV2FinalCtaProps = {
  content: ProductV2FinalCtaContent;
};

export function ProductV2FinalCta({
  content,
}: ProductV2FinalCtaProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 pb-20 pt-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.35rem] border border-black/5 bg-[#ebe2d6] shadow-[0_28px_100px_rgba(31,31,28,0.09)]">
          <div className="relative aspect-[5/4] overflow-hidden md:hidden">
            <Image
              src={content.mobileImage.src}
              alt={content.mobileImage.alt}
              fill
              className="object-cover object-center"
              sizes="calc(100vw - 2.5rem)"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(235,226,214,0.02)_42%,rgba(235,226,214,0.96)_100%)]" />
          </div>

          <div className="absolute inset-0 hidden md:block">
            <Image
              src={content.desktopImage.src}
              alt=""
              fill
              className="object-cover object-[72%_center] opacity-72"
              sizes="(max-width: 1200px) 92vw, 1320px"
            />
          </div>
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(235,226,214,0.99)_0%,rgba(235,226,214,0.93)_42%,rgba(235,226,214,0.34)_76%,rgba(235,226,214,0.22)_100%)] md:block" />

          <div className="relative z-10 px-6 pb-16 pt-8 sm:px-10 sm:pb-20 md:py-20 lg:max-w-3xl lg:px-14 lg:py-24">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5a52] sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton
                href={content.primaryCta.href}
                label={content.primaryCta.label}
                variant="primary"
              />
              {content.secondaryCta ? (
                <CtaButton
                  href={content.secondaryCta.href}
                  label={content.secondaryCta.label}
                  variant="secondary"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
