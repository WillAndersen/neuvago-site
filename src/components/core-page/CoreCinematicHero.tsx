import Image from "next/image";
import { CtaButton } from "@/components/home";

type HeroCta = {
  label: string;
  href: string;
};

type HeroImage = {
  src: string;
  alt: string;
};

type CoreCinematicHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  desktopImage: HeroImage;
  mobileImage: HeroImage;
  proofLine?: readonly string[];
  panelEyebrow?: string;
  panelText?: string;
  imagePosition?: string;
  mobileImagePosition?: string;
};

export function CoreCinematicHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  desktopImage,
  mobileImage,
  proofLine = [],
  panelEyebrow = "Designed as one system",
  panelText = "A calm physical product, guided sessions, and a routine you can return to.",
  imagePosition = "72% center",
  mobileImagePosition = "62% center",
}: CoreCinematicHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f7f4ef] text-[#1f1f1c]">
      <div className="absolute inset-0 -z-30">
        <Image
          src={desktopImage.src}
          alt=""
          fill
          className="hidden object-cover md:block"
          style={{ objectPosition: imagePosition }}
          sizes="(min-width: 768px) 100vw, 0px"
          priority
        />
        <Image
          src={mobileImage.src}
          alt=""
          fill
          className="object-cover md:hidden"
          style={{ objectPosition: mobileImagePosition }}
          sizes="(max-width: 767px) 100vw, 0px"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(247,244,239,0.98)_0%,rgba(247,244,239,0.92)_34%,rgba(247,244,239,0.68)_58%,rgba(247,244,239,0.36)_72%,rgba(247,244,239,0.92)_100%)] md:bg-[linear-gradient(90deg,rgba(247,244,239,0.99)_0%,rgba(247,244,239,0.94)_30%,rgba(247,244,239,0.58)_52%,rgba(247,244,239,0.10)_80%,rgba(247,244,239,0.20)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(255,251,244,0.92),transparent_32%),radial-gradient(circle_at_78%_86%,rgba(224,207,184,0.18),transparent_42%)]" />

      <div className="mx-auto flex min-h-[680px] max-w-[92rem] flex-col justify-between px-5 pb-7 pt-20 sm:min-h-[730px] sm:px-8 sm:pt-24 lg:min-h-[790px] lg:px-12 lg:pb-12 lg:pt-24 xl:min-h-[830px]">
        <div className="max-w-[43rem]">
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#7b7167] sm:text-xs sm:tracking-[0.32em]">
            {eyebrow}
          </p>

          <h1 className="max-w-[12.5ch] text-[clamp(3.25rem,13.5vw,5.7rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#1f1f1c] drop-shadow-[0_1px_24px_rgba(247,244,239,0.72)] sm:text-[clamp(4.2rem,10vw,7.2rem)] sm:leading-[0.86] md:max-w-[13ch] lg:text-[clamp(5.7rem,8.2vw,9.4rem)] lg:leading-[0.84] lg:tracking-[-0.085em]">
            {title}
          </h1>

          <p className="mt-7 max-w-[36rem] text-[1.02rem] leading-7 text-[#514c45] sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
            <CtaButton href={primaryCta.href} label={primaryCta.label} variant="primary" />
            <CtaButton href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
          </div>

          {proofLine.length ? (
            <div className="mt-7 flex flex-wrap gap-2.5">
              {proofLine.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-[#fbf8f2]/62 px-3.5 py-2 text-xs font-medium text-[#665f56] shadow-[0_16px_40px_rgba(42,34,24,0.05)] backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="hidden w-full max-w-[40rem] rounded-[1.75rem] border border-white/45 bg-[#fbf8f2]/58 p-5 shadow-[0_28px_80px_rgba(42,34,24,0.1)] backdrop-blur-md md:block lg:max-w-[42rem]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#8a7f72]">
            {panelEyebrow}
          </p>
          <p className="mt-3 text-sm leading-6 text-[#5f574f]">{panelText}</p>
        </div>
      </div>
    </section>
  );
}
