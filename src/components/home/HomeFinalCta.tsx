import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeFinalCtaProps = {
  content: typeof homepageContent.finalCta;
};

export function HomeFinalCta({ content }: HomeFinalCtaProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[90rem] px-5 pb-20 pt-4 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#e9dfd2] shadow-[0_34px_100px_rgba(35,28,20,0.12)]">
          <div className="absolute inset-0 hidden opacity-75 md:block">
            <Image
              src={content.backgroundImage.src}
              alt={content.backgroundImage.alt}
              fill
              className="object-cover object-right"
              sizes="(max-width: 1024px) 92vw, 1200px"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,223,210,0.98)_0%,rgba(233,223,210,0.92)_38%,rgba(233,223,210,0.35)_78%,rgba(233,223,210,0.18)_100%)]" />

          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:max-w-3xl lg:px-14 lg:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
              Begin quietly
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}
