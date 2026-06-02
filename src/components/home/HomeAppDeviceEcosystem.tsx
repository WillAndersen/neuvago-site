import Image from "next/image";
import type { homepageContent } from "@/content/homepage";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ContentCard } from "@/components/home/ContentCard";
import { CtaButton } from "@/components/home/CtaButton";
import { AppScreenCard } from "@/components/home/AppScreenCard";

type HomeAppDeviceEcosystemProps = {
  content: typeof homepageContent.appDeviceEcosystem;
};

export function HomeAppDeviceEcosystem({
  content,
}: HomeAppDeviceEcosystemProps) {
  const mainImage = {
    src: "/images/home/app-mockup-library.png",
    alt: "Neuvago app library screen shown as the guidance layer of the connected system.",
  } as const;

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <SectionHeading
              title={content.title}
              description={content.description}
            />

            <div className="mt-8 space-y-4">
              {content.features.map((feature) => (
                <ContentCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="mt-10">
              <CtaButton
                href={content.cta.href}
                label={content.cta.label}
                variant="secondary"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_24px_80px_rgba(31,31,28,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  className="object-contain bg-[#f6eee6] p-6"
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.supportingImages.slice(0, 2).map((image) => (
                <AppScreenCard key={image.src} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
