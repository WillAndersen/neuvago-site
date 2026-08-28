import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { researchV2Content } from "@/content/research-v2";

type ResearchV2ClosestProps = {
  content: typeof researchV2Content.closest;
};

export function ResearchV2Closest({
  content,
}: ResearchV2ClosestProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#756d64] sm:text-base sm:leading-8">
            {content.context}
          </p>

          <div className="mt-8">
            <CtaButton
              href={content.primaryCta.href}
              label={content.primaryCta.label}
              variant="primary"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.2rem] border border-black/6 bg-[#e9dfd2] shadow-[0_28px_95px_rgba(31,31,28,0.09)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="hidden object-cover md:block"
              sizes="(min-width: 1024px) 44vw, (min-width: 768px) 92vw, 0px"
              loading="eager"
              fetchPriority="high"
            />
            <Image
              src={content.mobileImage.src}
              alt={content.mobileImage.alt}
              fill
              className="object-cover md:hidden"
              sizes="(max-width: 767px) 92vw, 0px"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
