import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { homepage03Content } from "@/content/homepage-v3";

type Home03ResearchProps = {
  content: typeof homepage03Content.research;
};

export function Home03Research({
  content,
}: Home03ResearchProps) {
  return (
    <section className="bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-12 lg:py-28">
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

          <div className="mt-9">
            <CtaButton
              href={content.cta.href}
              label={content.cta.label}
              variant="light"
            />
          </div>
        </div>

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
      </div>
    </section>
  );
}
