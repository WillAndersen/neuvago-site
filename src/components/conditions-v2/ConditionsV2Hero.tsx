import Link from "next/link";

import type { ConditionsV2Content } from "@/content/conditions-v2";

type ConditionsV2HeroProps = {
  content: ConditionsV2Content["hero"];
};

export function ConditionsV2Hero({
  content,
}: ConditionsV2HeroProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 sm:py-20 lg:flex lg:min-h-[70vh] lg:items-center lg:px-12 lg:py-28">
        <div className="max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7a756c] sm:text-sm">
            {content.eyebrow}
          </p>

          <h1 className="mt-5 max-w-[20ch] text-[clamp(3.25rem,7vw,7.25rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[#1f1f1c]">
            {content.title}
          </h1>

          <p className="mt-8 max-w-[54rem] text-base leading-8 text-[#4f4b45] sm:text-lg lg:text-xl lg:leading-9">
            {content.introduction}
          </p>

          <p className="mt-7 max-w-[47rem] border-l border-black/15 pl-5 text-sm leading-7 text-[#686158] sm:text-base sm:leading-8">
            {content.supportingCopy}
          </p>

          <Link
            href={content.primaryCta.href}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2b2b28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f1c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f4ef]"
          >
            {content.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
