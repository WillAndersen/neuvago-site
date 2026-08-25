import Image from "next/image";
import Link from "next/link";
import type { HowItWorksV2Content } from "@/content/how-it-works-v2";

export type HowItWorksV2FinalCtaProps = {
  content: HowItWorksV2Content["finalCta"];
};

export function HowItWorksV2FinalCta({
  content,
}: HowItWorksV2FinalCtaProps) {
  return (
    <section
      data-how-it-works-section="final-cta"
      className="overflow-hidden border-t border-white/5 bg-[#1f1f1c] text-[#f7f4ef]"
    >
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28 xl:gap-24 xl:py-32">
        <div className="min-w-0">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#cdbda9] sm:text-xs">
            {content.eyebrow}
          </p>

          <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(3.35rem,13vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.065em] text-white sm:text-[clamp(4.5rem,8vw,6.8rem)] sm:leading-[0.91] lg:text-[clamp(4.8rem,6vw,7rem)] lg:leading-[0.9] lg:tracking-[-0.072em]">
            {content.title}
          </h2>

          <p className="mt-7 max-w-[38rem] text-base leading-8 text-[#ddd2c6] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={content.primaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#f7f4ef] px-6 py-3.5 text-sm font-medium text-[#1f1f1c] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1c] sm:w-auto"
            >
              {content.primaryCta.label}
            </Link>

            <Link
              href={content.secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1c] sm:w-auto"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div
          data-how-it-works-final-cta-image="true"
          className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#2b2b28] sm:min-h-[560px] lg:min-h-[640px]"
        >
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            className="object-cover object-[68%_center]"
            sizes="(min-width: 1024px) 54vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
