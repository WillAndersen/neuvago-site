import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeVagusNerveProps = {
  content: typeof homepageContent.vagusNerve;
};

export function HomeVagusNerve({ content }: HomeVagusNerveProps) {
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

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {content.points.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.5rem] border border-black/6 bg-[#f7f4ef] p-5"
              >
                <h3 className="text-base font-medium tracking-[-0.02em] text-[#1f1f1c]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-[1.4rem] border border-[#c9b9a5]/45 bg-[#eee6db]/70 px-5 py-4 text-sm leading-6 text-[#5f574f]">
            {content.boundary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton
              href={content.primaryCta.href}
              label={content.primaryCta.label}
              variant="primary"
            />
            <CtaButton
              href={content.secondaryCta.href}
              label={content.secondaryCta.label}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
