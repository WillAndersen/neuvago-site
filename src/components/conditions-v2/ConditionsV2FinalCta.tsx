import Image from "next/image";
import Link from "next/link";

import type { ConditionsV2Content } from "@/content/conditions-v2";

type ConditionsV2FinalCtaProps = {
  content: ConditionsV2Content["finalCta"];
};

export function ConditionsV2FinalCta({
  content,
}: ConditionsV2FinalCtaProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="bg-[#e8ded0]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#756d62] sm:text-sm">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[13ch] text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-[#1f1f1c] sm:text-6xl lg:text-7xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0]"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0]"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-black/5 bg-[#efe8de]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
