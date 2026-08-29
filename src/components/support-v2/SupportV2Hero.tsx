import Link from "next/link";

import type { SupportV2Content } from "@/content/support-v2";

type SupportV2HeroProps = {
  content: SupportV2Content["hero"];
};

export function SupportV2Hero({ content }: SupportV2HeroProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="max-w-[58rem]">
          {content.eyebrow ? (
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs">
              {content.eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-[12ch] text-balance text-[clamp(3.6rem,8vw,7.4rem)] font-medium leading-[0.91] tracking-[-0.07em]">
            {content.title}
          </h1>
          {content.introduction ? (
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.introduction}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={content.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1f1f1c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
            >
              {content.primaryCta.label}
            </Link>
            {content.secondaryCta ? (
              <Link
                href={content.secondaryCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/14 px-7 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98c50] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
              >
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
