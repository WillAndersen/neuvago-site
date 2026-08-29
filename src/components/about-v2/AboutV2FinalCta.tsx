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

  const hasCtas = Boolean(content.primaryCta || content.secondaryCta);

  return (
    <section className="bg-[#e8ded0] text-[#1f1f1c]">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        <div>
          <h2 className="max-w-[10ch] text-balance text-[clamp(3.2rem,6.5vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.065em]">
            {content.title}
          </h2>

          {content.description ? (
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          ) : null}

          {hasCtas ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {content.primaryCta ? (
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0]"
                >
                  {content.primaryCta.label}
                </Link>
              ) : null}
              {content.secondaryCta ? (
                <Link
                  href={content.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-black/12 px-6 py-3 text-sm font-medium transition hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d6a3e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8ded0]"
                >
                  {content.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative aspect-[16/10] overflow-hidden border border-black/5 bg-[#efe8de]">
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
