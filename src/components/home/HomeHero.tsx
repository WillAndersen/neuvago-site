import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeHeroProps = {
  content: typeof homepageContent.hero;
};

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_20%_10%,rgba(231,218,199,0.9),transparent_34%),linear-gradient(180deg,#fbf8f2_0%,#f7f4ef_74%)]" />
      <div className="absolute left-0 top-36 -z-10 hidden h-80 w-80 rounded-full bg-[#eadfcf]/60 blur-3xl lg:block" />

      <div className="mx-auto max-w-[90rem] px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-24 lg:pt-18">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-12">
          <div className="max-w-2xl pb-2 lg:pb-10">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#8b8277]">
              {content.eyebrow}
            </p>

            <h1 className="max-w-[9.5ch] text-[clamp(4.2rem,12vw,10.5rem)] font-medium leading-[0.82] tracking-[-0.085em] text-[#1f1f1c]">
              {content.title}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg lg:text-xl lg:leading-9">
              {content.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
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

          <div className="relative lg:pl-4">
            <div className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-[#ede5d9]/70 blur-3xl" />

            <div className="hidden overflow-hidden rounded-[2.4rem] border border-black/5 bg-white/55 shadow-[0_38px_120px_rgba(35,28,20,0.14)] lg:block">
              <div className="relative aspect-[16/10]">
                <Image
                  src={content.desktopImage.src}
                  alt={content.desktopImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 92vw, 820px"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,244,239,0.24),transparent_28%,transparent_84%,rgba(247,244,239,0.18))]" />
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/55 shadow-[0_28px_90px_rgba(35,28,20,0.14)] lg:hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={content.mobileImage.src}
                  alt={content.mobileImage.alt}
                  fill
                  className="object-cover"
                  sizes="92vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/8 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p className="max-w-xl text-sm leading-6 text-[#766f65]">
            A quiet product experience for moments when you want structure,
            guidance, and a calmer rhythm to return to.
          </p>
          <div className="flex flex-wrap gap-3">
            {content.proofLine.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/8 bg-white/55 px-4 py-2 text-sm text-[#6b665e] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
