import Image from "next/image";
import { CtaButton } from "@/components/home/CtaButton";
import type { appV2Content } from "@/content/app-v2";

type AppV2GuidedSessionsProps = {
  content: typeof appV2Content.guidedSessions;
};

export function AppV2GuidedSessions({
  content,
}: AppV2GuidedSessionsProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="overflow-hidden rounded-[2.25rem] border border-black/6 bg-[#eadfd2] shadow-[0_28px_95px_rgba(31,31,28,0.09)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 92vw, 44vw"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.8rem)] font-medium leading-[0.97] tracking-[-0.048em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 divide-y divide-black/9 border-y border-black/9">
              {content.categories.map((category) => (
                <article
                  key={category.label}
                  className="grid gap-2 py-5 sm:grid-cols-[0.28fr_0.72fr] sm:gap-5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#927f68]">
                    {category.label}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.035em] text-[#1f1f1c]">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                      {category.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

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
      </div>
    </section>
  );
}
