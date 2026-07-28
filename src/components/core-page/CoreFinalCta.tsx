import Image from "next/image";
import { CtaButton } from "@/components/home";

type Cta = {
  label: string;
  href: string;
};

type ImageAsset = {
  src: string;
  alt: string;
};

type CoreFinalCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  backgroundImage: ImageAsset;
};

export function CoreFinalCta({
  eyebrow = "Next step",
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: CoreFinalCtaProps) {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 pb-20 pt-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.35rem] border border-black/5 bg-[#ebe2d6] shadow-[0_28px_100px_rgba(31,31,28,0.09)]">
          <div className="absolute inset-0">
            <Image
              src={backgroundImage.src}
              alt=""
              fill
              className="object-cover object-[72%_center] opacity-50"
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 92vw, 1320px"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(235,226,214,0.98)_0%,rgba(235,226,214,0.90)_40%,rgba(235,226,214,0.32)_74%,rgba(235,226,214,0.48)_100%)]" />

          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:max-w-3xl lg:px-14 lg:py-24">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5a52] sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton href={primaryCta.href} label={primaryCta.label} variant="primary" />
              <CtaButton href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
