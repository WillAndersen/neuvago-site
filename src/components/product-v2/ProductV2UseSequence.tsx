import Link from "next/link";
import type { productV2Content } from "@/content/product-v2";

type ProductV2UseSequenceProps = {
  content: typeof productV2Content.useSequence;
};

export function ProductV2UseSequence({
  content,
}: ProductV2UseSequenceProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.4rem,9.5vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <Link
              href={content.cta.href}
              className="mt-7 inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
            >
              {content.cta.label}
            </Link>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-[1.65rem] border border-black/8 bg-black/8 sm:grid-cols-2 xl:grid-cols-4">
            {content.steps.map((step, index) => (
              <li key={step.title} className="bg-[#f2eee8] p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#927f68]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.04em] text-[#1f1f1c]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
