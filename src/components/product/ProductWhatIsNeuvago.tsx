import Image from "next/image";
import type { productPageContent } from "@/content/product";

type ProductWhatIsNeuvagoProps = {
  content: typeof productPageContent.whatIsNeuvago;
};

function isNorwegianContent(content: typeof productPageContent.whatIsNeuvago) {
  return /[æøå]|fysisk|roligere|enhet|hverdagen/i.test(
    [content.title, content.description].join(" "),
  );
}

export function ProductWhatIsNeuvago({ content }: ProductWhatIsNeuvagoProps) {
  const sectionContent = content as typeof productPageContent.whatIsNeuvago & {
    eyebrow?: string;
  };

  const isNorwegian = isNorwegianContent(content);
  const visualLabel = isNorwegian ? "Produkt + app" : "Device + app";
  const detailLabel = isNorwegian ? "Systemet" : "The system";

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">
              {sectionContent.eyebrow ?? "The system"}
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.35rem,9.5vw,3.35rem)] font-medium leading-[0.98] tracking-[-0.035em] text-[#1f1f1c] sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.055em] lg:text-6xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.15rem] border border-black/6 bg-[#fbf8f2] shadow-[0_24px_90px_rgba(31,31,28,0.08)]">
            <div className="relative min-h-[22rem] bg-[#ede5da] sm:min-h-[28rem]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 48vw, 720px"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1f1f1c]/18 via-transparent to-white/10" />
              <div className="absolute bottom-5 left-5 rounded-full bg-[#fbf8f2]/88 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#4f493f] shadow-[0_12px_40px_rgba(31,31,28,0.16)] backdrop-blur">
                {visualLabel}
              </div>
            </div>

            <div className="grid gap-3 border-t border-black/6 p-4 sm:grid-cols-3 sm:p-5">
              {content.bullets.map((bullet, index) => (
                <div
                  key={bullet}
                  className="rounded-[1.15rem] border border-black/6 bg-white/58 px-4 py-3"
                >
                  <p className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-[#9a8f82]">
                    {detailLabel} 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 tracking-[-0.015em] text-[#292824]">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
