import type { homepageContent } from "@/content/homepage";

type HomeProofStripProps = {
  content: typeof homepageContent.proofStrip;
};

export function HomeProofStrip({ content }: HomeProofStripProps) {
  return (
    <section className="border-b border-black/5 bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
        <div className="grid gap-3 text-center text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#d9d0c4] sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <span key={item} className="py-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
