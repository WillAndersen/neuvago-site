import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { homepage03Content } from "@/content/homepage-v3";

type Home03BenefitsProps = {
  content: typeof homepage03Content.benefits;
};

export function Home03Benefits({
  content,
}: Home03BenefitsProps) {
  return (
    <section className="bg-[#e8ded0]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[18ch] text-balance text-[clamp(2.7rem,9.5vw,4.1rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#1f1f1c] sm:text-6xl lg:text-7xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2.25rem] border border-black/6 bg-[#eee5da] shadow-[0_28px_95px_rgba(31,31,28,0.09)]">
            <div className="relative h-full min-h-[24rem]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 54vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,31,28,0.02)_45%,rgba(31,31,28,0.18)_100%)]" />
            </div>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="grid gap-2 py-5 sm:grid-cols-[0.4fr_0.6fr] sm:gap-6 sm:py-6"
              >
                <h3 className="text-xl font-medium tracking-[-0.035em] text-[#1f1f1c] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[#5f5a52] sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-7 text-[#5f5a52] sm:text-base">
            {content.researchBridge}
          </p>
          <div className="shrink-0">
            <CtaButton
              href={content.researchCta.href}
              label={content.researchCta.label}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
