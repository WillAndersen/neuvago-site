import Image from "next/image";

import type { AboutV2Content } from "@/content/about-v2";

type AboutV2FocusProps = {
  content: AboutV2Content["focus"];
};

export function AboutV2Focus({ content }: AboutV2FocusProps) {
  if (!content.visible) {
    return null;
  }

  const primaryArea = content.areas.find((area) => area.priority === "primary");
  const supportingAreas = content.areas.filter(
    (area) => area.priority === "secondary",
  );

  if (!primaryArea) {
    return null;
  }

  return (
    <section className="border-b border-white/10 bg-[#24211e] text-white">
      <div className="mx-auto max-w-[92rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <header className="max-w-[58rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/52 sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2.9rem,6vw,6.2rem)] font-medium leading-[0.96] tracking-[-0.06em]">
            {content.title}
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/66 sm:text-lg">
            {content.introduction}
          </p>
        </header>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-[minmax(0,1.72fr)_minmax(18rem,0.98fr)] lg:items-start lg:gap-16 xl:gap-20">
          <article data-priority={primaryArea.priority}>
            <div className="relative aspect-[16/11] overflow-hidden border border-white/10 bg-[#eee7dc]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 64vw, 100vw"
                className="object-contain"
              />
            </div>
            <h3 className="mt-7 max-w-[14ch] text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:mt-8 sm:text-5xl lg:text-6xl">
              {primaryArea.title}
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
              {primaryArea.description}
            </p>
          </article>

          <div className="border-t border-white/15">
            {supportingAreas.map((area) => (
              <article
                key={area.id}
                data-priority={area.priority}
                className="border-b border-white/15 py-8 sm:py-10 lg:py-12"
              >
                <h3 className="text-2xl font-medium leading-tight tracking-[-0.045em] text-white/92 sm:text-3xl">
                  {area.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
