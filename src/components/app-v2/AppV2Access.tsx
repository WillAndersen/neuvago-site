import Link from "next/link";
import { CtaButton } from "@/components/home/CtaButton";
import type { appV2Content } from "@/content/app-v2";

type AppV2AccessProps = {
  content: typeof appV2Content.access;
};

export function AppV2Access({ content }: AppV2AccessProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/6 bg-[#fbf8f2] p-6 shadow-[0_22px_80px_rgba(31,31,28,0.07)] sm:p-8 lg:p-10">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[12ch] text-balance text-[clamp(2.5rem,9vw,3.7rem)] font-medium leading-[0.97] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
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

            <p className="mt-6 text-xs leading-6 text-[#756c63]">
              {content.availabilityNote}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/6 bg-[#1f1f1c] p-6 text-[#f7f4ef] shadow-[0_22px_80px_rgba(31,31,28,0.09)] sm:p-8 lg:p-10">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.25em] text-[#bfb1a0]">
              Device purchase benefit
            </p>
            <h3 className="mt-5 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">
              {content.includedTitle}
            </h3>
            <p className="mt-5 text-base leading-8 text-white/72">
              {content.includedDescription}
            </p>
            <p className="mt-5 rounded-[1.15rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-xs leading-6 text-white/58">
              {content.includedNote}
            </p>

            <Link
              href={content.productCta.href}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-[#f7f4ef] px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              {content.productCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
