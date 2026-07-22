import Image from "next/image";
import type { productPageContent } from "@/content/product";
import { CtaButton } from "@/components/home/CtaButton";

type ProductHeroProps = {
  content: typeof productPageContent.hero;
};

export function ProductHero({ content }: ProductHeroProps) {
  const heroContent = content as typeof productPageContent.hero & {
    panelEyebrow?: string;
    panelText?: string;
  };
  const proofLine = content.proofLine.slice(0, 3);

  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_18%_18%,rgba(255,251,244,0.95),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(224,207,184,0.28),transparent_34%)]" />

      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-14 lg:px-12 lg:py-20 xl:py-24">
        <div className="max-w-[43rem]">
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs sm:tracking-[0.32em]">
            {content.eyebrow}
          </p>

          <h1 className="max-w-[12.8ch] text-[clamp(3.15rem,12vw,5.55rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#1f1f1c] sm:text-[clamp(4.1rem,9vw,6.9rem)] sm:leading-[0.86] lg:text-[clamp(5.2rem,6.7vw,7.8rem)] lg:leading-[0.84] lg:tracking-[-0.085em]">
            {content.title}
          </h1>

          <p className="mt-7 max-w-[36rem] text-[1.02rem] leading-7 text-[#514c45] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
            <CtaButton href={content.primaryCta.href} label={content.primaryCta.label} variant="primary" />
            <CtaButton href={content.secondaryCta.href} label={content.secondaryCta.label} variant="secondary" />
          </div>

          {proofLine.length ? (
            <div className="mt-7 flex flex-wrap gap-2.5">
              {proofLine.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-[#fbf8f2]/72 px-3.5 py-2 text-xs font-medium text-[#665f56] shadow-[0_16px_40px_rgba(42,34,24,0.05)] backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:pl-2">
          <div className="relative overflow-hidden rounded-[2.35rem] border border-white/55 bg-[#eee7dc] shadow-[0_32px_120px_rgba(42,34,24,0.14)]">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[16/10]">
              <Image
                src={content.desktopImage.src}
                alt={content.desktopImage.alt}
                fill
                className="hidden object-contain md:block"
                sizes="(max-width: 1023px) 90vw, (max-width: 1536px) 52vw, 780px"
                loading="eager"
                fetchPriority="high"
              />
              <Image
                src={content.mobileImage.src}
                alt={content.mobileImage.alt}
                fill
                className="object-contain md:hidden"
                sizes="92vw"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="hidden border-t border-black/5 bg-[#fbf8f2]/74 px-6 py-5 backdrop-blur sm:block">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#8a7f72]">
                {heroContent.panelEyebrow ?? "The physical anchor"}
              </p>
              <p className="mt-2 max-w-[34rem] text-sm leading-6 text-[#5f574f]">
                {heroContent.panelText ??
                  "A tactile, non-invasive device designed to make the guided experience feel calm, grounded, and easy to return to."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
