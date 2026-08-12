import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { appV2Content } from "@/content/app-v2";

type AppV2FinalCtaProps = {
  content: typeof appV2Content.finalCta;
};

export function AppV2FinalCta({ content }: AppV2FinalCtaProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 pb-20 pt-4 sm:px-8 lg:px-12 lg:pb-28">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#e9dfd2] shadow-[0_34px_100px_rgba(35,28,20,0.12)] lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="order-2 px-6 pb-14 pt-8 sm:px-10 sm:pb-18 lg:order-1 lg:px-14 lg:py-20">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[13ch] text-balance text-4xl font-medium leading-[0.96] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
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

          <div className="order-1 min-w-0 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-[16/11]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 92vw, 54vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
