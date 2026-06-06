import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeResearchBoundaryProps = {
  content: typeof homepageContent.researchBoundary;
};

export function HomeResearchBoundary({ content }: HomeResearchBoundaryProps) {
  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#b8aa9a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#d5cbc0] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <CtaButton href={content.primaryCta.href} label={content.primaryCta.label} variant="light" />
            <CtaButton href={content.secondaryCta.href} label={content.secondaryCta.label} variant="outlineLight" />
          </div>
        </div>

        <div className="space-y-5">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/8 shadow-[0_34px_100px_rgba(0,0,0,0.25)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover opacity-92"
                sizes="(max-width: 1024px) 92vw, 680px"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {content.points.map((point) => (
              <article key={point.title} className="rounded-[1.4rem] border border-white/10 bg-white/7 p-5">
                <h3 className="text-base font-medium tracking-[-0.02em] text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#d5cbc0]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
