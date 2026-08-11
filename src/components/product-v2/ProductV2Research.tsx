import Link from "next/link";
import { CtaButton } from "@/components/home/CtaButton";
import type { productV2Content } from "@/content/product-v2";

type ProductV2ResearchProps = {
  content: typeof productV2Content.research;
};

export function ProductV2Research({ content }: ProductV2ResearchProps) {
  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#b8aa99]">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-medium tracking-[-0.055em] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#d4cabd] sm:text-lg">
              {content.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton
                href={content.primaryCta.href}
                label={content.primaryCta.label}
                variant="light"
              />
              <CtaButton
                href={content.secondaryCta.href}
                label={content.secondaryCta.label}
                variant="outlineLight"
              />
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-[#262520] p-6 transition hover:bg-[#2c2b25] sm:p-7"
              >
                <h3 className="text-lg font-medium tracking-[-0.03em] text-white group-hover:underline group-hover:decoration-white/30">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#d4cabd]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
