import Image from "next/image";
import type { productPageContent } from "@/content/product";
import { CtaButton } from "@/components/home";

type ProductDeviceAppTogetherProps = {
  content: typeof productPageContent.deviceAppTogether;
};

function isNorwegianContent(content: typeof productPageContent.deviceAppTogether) {
  return /[æøå]|appen|enhet|produktopplevelsen|veiledning/i.test(
    [content.title, content.description].join(" "),
  );
}

function imageClassName(src: string) {
  if (/product-phone-app|product-gallery|product-hero/i.test(src)) {
    return "object-contain p-5 sm:p-7";
  }

  return "object-cover";
}

export function ProductDeviceAppTogether({
  content,
}: ProductDeviceAppTogetherProps) {
  const sectionContent = content as typeof productPageContent.deviceAppTogether & {
    eyebrow?: string;
  };

  const isNorwegian = isNorwegianContent(content);
  const imageLabel = isNorwegian ? "App + enhet" : "App + device";
  const supportingImages = content.supportingImages?.length
    ? content.supportingImages
    : [content.image];

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div className="overflow-hidden rounded-[2.15rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.08)]">
            <div className="relative min-h-[24rem] bg-[#ede5da] sm:min-h-[30rem]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className={imageClassName(content.image.src)}
                sizes="(max-width: 1024px) 92vw, 54vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1f1c]/12 via-transparent to-white/10" />
              <div className="absolute bottom-5 left-5 rounded-full bg-[#fbf8f2]/88 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#4f493f] shadow-[0_12px_40px_rgba(31,31,28,0.16)] backdrop-blur">
                {imageLabel}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-black/6 p-3 sm:p-4">
              {supportingImages.slice(0, 3).map((image, index) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-[1rem] border border-black/6 bg-[#f2eee8]"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={imageClassName(image.src)}
                      sizes="(max-width: 768px) 30vw, 180px"
                    />
                  </div>
                  <div className="border-t border-black/6 px-3 py-2">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-[#8a7f72]">
                      0{index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {sectionContent.eyebrow ?? "Device + app"}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.35rem,9.5vw,3.35rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#1f1f1c] sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.055em] lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 space-y-4">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[1.35rem] border border-black/6 bg-[#fbf8f2] p-5 shadow-[0_14px_48px_rgba(31,31,28,0.05)]"
                >
                  <h3 className="text-xl font-medium tracking-[-0.03em] text-[#1f1f1c]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CtaButton href={content.cta.href} label={content.cta.label} variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
