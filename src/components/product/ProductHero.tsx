import Image from "next/image";
import type { productPageContent } from "@/content/product";
import { CtaButton } from "@/components/home";

type ProductHeroProps = {
  content: typeof productPageContent.hero;
};

const genericHeroSources = new Set([
  "/images/home/hero-device-app-master.png",
  "/images/home/hero-device-app-mobile.png",
  "/images/home/device-phone-paired-editorial.png",
]);

function getProductHeroImage(image: { src: string; alt: string }) {
  if (!genericHeroSources.has(image.src)) {
    return { image, forced: false };
  }

  return {
    image: {
      src: "/images/home/device-cutout-front-angle.png",
      alt: "Front and angled views of the Neuvago device in a product-focused composition.",
    },
    forced: true,
  };
}

export function ProductHero({ content }: ProductHeroProps) {
  const desktop = getProductHeroImage(content.desktopImage);
  const mobile = getProductHeroImage(content.mobileImage);
  const desktopImageClass = desktop.forced
    ? "object-contain bg-[#f7f3ec] p-8"
    : "object-cover";
  const mobileImageClass = mobile.forced
    ? "object-contain bg-[#f7f3ec] p-6"
    : "object-cover";

  return (
    <section className="border-b border-black/5 bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#7a756c]">
              {content.eyebrow}
            </p>

            <h1 className="max-w-[11ch] text-4xl font-semibold tracking-[-0.04em] text-[#1f1f1c] sm:text-5xl lg:text-7xl lg:leading-[0.95]">
              {content.title}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5a52] sm:text-lg">
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

            <div className="mt-8 flex flex-wrap gap-3">
              {content.proofLine.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-black/8 bg-white/60 px-4 py-2 text-sm text-[#6b665e]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 hidden rounded-[2.5rem] bg-[#efe8de] blur-2xl lg:block" />

            <div className="relative hidden overflow-hidden rounded-[2.2rem] border border-black/5 bg-white/60 shadow-[0_28px_90px_rgba(31,31,28,0.12)] lg:block">
              <div className="relative aspect-[4/3]">
                <Image
                  src={desktop.image.src}
                  alt={desktop.image.alt}
                  fill
                  className={desktopImageClass}
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
                  priority
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_24px_80px_rgba(31,31,28,0.10)] lg:hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={mobile.image.src}
                  alt={mobile.image.alt}
                  fill
                  className={mobileImageClass}
                  sizes="(max-width: 1024px) 92vw, 0px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
