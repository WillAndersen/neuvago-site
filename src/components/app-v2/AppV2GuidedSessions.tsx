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
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-12 lg:py-24">
        <div className="order-2 overflow-hidden rounded-[2.25rem] border border-black/6 bg-[#eee4d8] shadow-[0_30px_105px_rgba(31,31,28,0.11)] lg:order-1">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={1024}
            height={1536}
            className="mx-auto h-auto max-h-[48rem] w-auto"
            sizes="(max-width: 1024px) 84vw, 500px"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#81766a]">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.5rem,9vw,3.7rem)] font-medium leading-[0.97] tracking-[-0.045em] text-[#1f1f1c] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.categories.map((category) => (
              <article
                key={category.title}
                className="rounded-[1.35rem] border border-black/6 bg-[#fbf8f2] p-4"
              >
                <h3 className="text-lg font-medium tracking-[-0.035em] text-[#1f1f1c]">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-[1.2rem] border border-black/6 bg-[#f2eee8] px-4 py-3 text-xs leading-6 text-[#6f675e]">
            {content.note}
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
