import Link from "next/link";
import type { productV2Content } from "@/content/product-v2";

type ProductV2ModesProps = {
  content: typeof productV2Content.modes;
};

export function ProductV2Modes({ content }: ProductV2ModesProps) {
  return (
    <section className="bg-[#3a312a] text-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#cdbda9]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-medium leading-[0.97] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#d9cfc4] sm:text-base">
              {content.description}
            </p>
          </div>

          <div>
            <div className="grid gap-px overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
              {content.items.map((mode) => (
                <div
                  key={mode}
                  className="bg-[#40362e] px-5 py-7 text-center sm:px-6 lg:py-9"
                >
                  <p className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                    {mode}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-start lg:justify-end">
              <Link
                href={content.cta.href}
                className="inline-flex items-center justify-center rounded-full bg-[#f7f4ef] px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white"
              >
                {content.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
