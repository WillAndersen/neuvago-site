import Link from "next/link";

import type { ConditionsV2Content } from "@/content/conditions-v2";

type ConditionsV2ResearchBridgeProps = {
  content: ConditionsV2Content["researchBridge"];
};

export function ConditionsV2ResearchBridge({
  content,
}: ConditionsV2ResearchBridgeProps) {
  if (!content.visible) {
    return null;
  }

  return (
    <section className="border-b border-white/10 bg-[#1f1f1c] text-white">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          <h2 className="max-w-[14ch] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          {content.description ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              {content.description}
            </p>
          ) : null}
        </div>

        <Link
          href={content.cta.href}
          className="inline-flex w-fit items-center gap-2 border-b border-white/35 pb-1 text-sm font-medium text-white transition hover:border-white"
        >
          {content.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
