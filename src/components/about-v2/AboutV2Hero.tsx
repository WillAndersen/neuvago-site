import Image from "next/image";
import Link from "next/link";

import type { AboutV2Content } from "@/content/about-v2";

type AboutV2HeroProps = {
  content: AboutV2Content["hero"];
};

export function AboutV2Hero({ content }: AboutV2HeroProps) {
  if (!content.visible) {
    return null;
  }

  const hasCtas = Boolean(content.primaryCta || content.secondaryCta);

  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_18%_18%,rgba(255,251,244,0.96),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(224,207,184,0.26),transparent_34%)]" />

      <div className="mx-auto grid min-h-[72vh] max-w-[92rem] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="max-w-[48rem]">
          {content.eyebrow ? (
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
              {content.eyebrow}
            </p>
          ) : null}

          <h1 className="max-w-[14ch] text-balance text-[clamp(3.35rem,7.4vw,7.4rem)] font-medium leading-[0.92] tracking-[-0.065em]">
            {content.title}
          </h1>

          {content.introduction ? (
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.introduction}
            </p>
          ) : null}

          {content.supportingStatement ? (
            <p className="mt-5 max-w-2xl border-l border-black/15 pl-5 text-sm leading-7 text-[#6d655c] sm:text-base">
              {content.supportingStatement}
            </p>
          ) : null}

          {hasCtas ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {content.primaryCta ? (
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                >
                  {content.primaryCta.label}
                </Link>
              ) : null}
              {content.secondaryCta ? (
                <Link
                  href={content.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-black/12 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
                >
                  {content.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative mx-auto w-full max-w-[48rem] overflow-hidden border border-black/5 bg-[#eee7de]">
          <div className="relative aspect-[4/5] sm:aspect-[16/11]">
            <Image
              src={content.mobileImage.src}
              alt={content.mobileImage.alt}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 0px"
              className="object-cover md:hidden"
            />
            <Image
              src={content.desktopImage.src}
              alt={content.desktopImage.alt}
              fill
              priority
              sizes="(min-width: 768px) 58vw, 0px"
              className="hidden object-cover md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
