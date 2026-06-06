import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { CtaButton } from "@/components/home/CtaButton";

type HomeHeroProps = {
  content: typeof homepageContent.hero;
};

function HeroTitle({ title }: { title: string }) {
  if (title === "A calmer way to return.") {
    return (
      <>
        <span className="block">A calmer way</span>
        <span className="block">to return.</span>
      </>
    );
  }

  return title;
}

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="absolute inset-0 -z-30">
        <Image
          src={content.desktopImage.src}
          alt=""
          fill
          className="hidden object-cover object-[72%_center] md:block"
          sizes="100vw"
          priority
        />
        <Image
          src={content.mobileImage.src}
          alt=""
          fill
          className="object-cover object-[58%_center] md:hidden"
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(247,244,239,0.96)_0%,rgba(247,244,239,0.84)_30%,rgba(247,244,239,0.24)_63%,rgba(247,244,239,0.86)_100%)] md:bg-[linear-gradient(90deg,rgba(247,244,239,0.98)_0%,rgba(247,244,239,0.9)_32%,rgba(247,244,239,0.42)_54%,rgba(247,244,239,0.06)_78%,rgba(247,244,239,0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(255,251,244,0.92),transparent_34%),radial-gradient(circle_at_78%_78%,rgba(224,207,184,0.2),transparent_40%)]" />

      <div className="mx-auto flex min-h-[760px] max-w-[92rem] flex-col justify-between px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:min-h-[860px] lg:px-12 lg:pb-12 lg:pt-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#7b7167]">
            {content.eyebrow}
          </p>

          <h1 className="max-w-[12ch] text-[clamp(4.1rem,11vw,10.75rem)] font-medium leading-[0.84] tracking-[-0.09em] text-[#1f1f1c] drop-shadow-[0_1px_20px_rgba(247,244,239,0.55)]">
            <HeroTitle title={content.title} />
          </h1>

          <p className="mt-8 max-w-[38rem] text-base leading-8 text-[#514c45] sm:text-lg lg:text-xl lg:leading-9">
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

        <div className="mt-16 w-full max-w-4xl rounded-[1.75rem] border border-white/45 bg-[#fbf8f2]/62 p-4 shadow-[0_28px_80px_rgba(42,34,24,0.1)] backdrop-blur-md sm:p-5 lg:max-w-[56rem]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[34rem] text-sm leading-6 text-[#665f55]">
              A quiet product experience for moments when you want structure,
              guidance, and a calmer rhythm to return to.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {content.proofLine.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-white/55 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#6b665e] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
