import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { homepage03Content } from "@/content/homepage-v3";

type Home03VagusNerveProps = {
  content: typeof homepage03Content.vagusNerve;
};

export function Home03VagusNerve({
  content,
}: Home03VagusNerveProps) {
  return (
    <section className="bg-white/55">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-12 lg:py-28">
        <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#eee6db] shadow-[0_34px_100px_rgba(35,28,20,0.1)]">
          <div className="relative aspect-[4/3]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 680px"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8">
            <CtaButton
              href={content.cta.href}
              label={content.cta.label}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
