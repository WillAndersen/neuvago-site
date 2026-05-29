import type { homepageContent } from "@/content/homepage";

type HomeProofStripProps = {
  content: typeof homepageContent.proofStrip;
};

export function HomeProofStrip({ content }: HomeProofStripProps) {
  return (
    <section className="border-b border-black/5 bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#5f5a52]">
          {content.items.map((item) => (
            <span key={item} className="inline-flex items-center">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
