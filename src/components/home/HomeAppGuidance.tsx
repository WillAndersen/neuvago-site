import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeAppGuidanceProps = {
  content: typeof homepageContent.appGuidance;
};

export function HomeAppGuidance({ content }: HomeAppGuidanceProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-12 lg:py-28">
        <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/55 shadow-[0_34px_100px_rgba(35,28,20,0.1)]">
          <div className="relative hidden aspect-[16/11] lg:block">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="720px"
            />
          </div>
          <div className="relative aspect-[4/5] lg:hidden">
            <Image
              src={content.mobileImage.src}
              alt={content.mobileImage.alt}
              fill
              className="object-cover"
              sizes="92vw"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-10 space-y-5">
            {content.items.map((item) => (
              <div key={item.title} className="border-t border-black/8 pt-5">
                <h3 className="text-xl font-medium tracking-[-0.025em] text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <CtaButton href={content.cta.href} label={content.cta.label} variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
