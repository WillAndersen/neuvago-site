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
      <div className="mx-auto flex min-h-[68vh] max-w-[92rem] items-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-5xl">
          <h1 className="max-w-[15ch] text-[clamp(3.25rem,8vw,7.75rem)] font-medium leading-[0.92] tracking-[-0.07em] text-[#1f1f1c]">
            {content.title}
          </h1>

          {content.description ? (
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          ) : null}

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
