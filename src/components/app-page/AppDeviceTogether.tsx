import Image from "next/image";
import type { appPageContent } from "@/content/app";
import {
  SectionHeading,
  ContentCard,
  CtaButton,
} from "@/components/home";

type AppDeviceTogetherProps = {
  content: typeof appPageContent.deviceTogether;
};

export function AppDeviceTogether({ content }: AppDeviceTogetherProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12 lg:py-20">
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

          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_24px_80px_rgba(31,31,28,0.08)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 560px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
