import Image from "next/image";
import Link from "next/link";

import type { AboutV2Content } from "@/content/about-v2";

type AboutV2FinalCtaProps = {
  content: AboutV2Content["finalCta"];
};

export function AboutV2FinalCta({
  content,
}: AboutV2FinalCtaProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="bg-[#e8ded0] text-[#1f1f1c]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:gap-14 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div className="max-w-[44rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[10ch] text-balance text-[clamp(3.2rem,6.5vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.065em]">
            {content.title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={content.primaryCta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0] sm:w-auto"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/15 px-7 py-3 text-sm font-medium text-[#302d29] transition hover:border-black/25 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0] sm:w-auto"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative aspect-[5/4] overflow-hidden border border-black/5 bg-[#ded1c1] sm:aspect-[16/11] lg:aspect-[4/5]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-[72%_center]"
          />
        </div>
      </div>
    </section>
  );
}
