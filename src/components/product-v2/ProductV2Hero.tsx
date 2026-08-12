import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { productV2Content } from "@/content/product-v2";

type ProductV2HeroProps = {
  content: typeof productV2Content.hero;
};

export function ProductV2Hero({ content }: ProductV2HeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_18%_18%,rgba(255,251,244,0.95),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(224,207,184,0.28),transparent_34%)]" />

      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:px-12 lg:py-20 xl:py-24">
        <div className="min-w-0 max-w-[44rem]">
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs sm:tracking-[0.32em]">
            {content.eyebrow}
          </p>

          <h1 className="max-w-[13ch] text-balance text-[clamp(2.85rem,11.5vw,5.3rem)] font-medium leading-[0.94] tracking-[-0.06em] text-[#1f1f1c] sm:text-[clamp(4rem,8.5vw,6.5rem)] sm:leading-[0.9] lg:text-[clamp(4.8rem,6.2vw,7.2rem)] lg:leading-[0.88] lg:tracking-[-0.075em]">
            {content.title}
          </h1>

          <div className="mt-7 overflow-hidden rounded-[1.9rem] border border-white/55 bg-[#eee7dc] shadow-[0_26px_90px_rgba(42,34,24,0.12)] lg:hidden">
            <div className="relative aspect-[16/11] sm:aspect-[16/9]">
              <Image
                src={content.mobileImage.src}
                alt={content.mobileImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1023px) 92vw, 0px"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          <p className="mt-7 max-w-[40rem] text-lg font-medium leading-8 tracking-[-0.018em] text-[#302d29] sm:mt-8 sm:text-xl lg:text-2xl lg:leading-9">
            {content.description}
          </p>

          <p className="mt-4 max-w-[39rem] text-[1.01rem] leading-7 text-[#514c45] sm:text-lg sm:leading-8">
            {content.technologyDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
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

          <div className="mt-7 flex flex-wrap gap-2.5">
            {content.proofLine.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/8 bg-[#fbf8f2]/72 px-3.5 py-2 text-xs font-medium text-[#665f56] shadow-[0_16px_40px_rgba(42,34,24,0.05)] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden min-w-0 lg:block lg:pl-2">
          <div className="relative overflow-hidden rounded-[2.35rem] border border-white/55 bg-[#eee7dc] shadow-[0_32px_120px_rgba(42,34,24,0.14)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={content.desktopImage.src}
                alt={content.desktopImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 52vw, 780px"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
