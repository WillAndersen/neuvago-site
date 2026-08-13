import type { homepage03Content } from "@/content/homepage-v3";

type Home03FeatureBarProps = {
  content: typeof homepage03Content.featureBar;
};

export function Home03FeatureBar({
  content,
}: Home03FeatureBarProps) {
  return (
    <section className="border-b border-black/5 bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-x-3 gap-y-1 px-5 py-4 text-center text-[0.62rem] font-medium uppercase tracking-[0.17em] text-[#d9d0c4] sm:px-8 sm:py-5 sm:text-[0.68rem] sm:tracking-[0.21em] lg:grid-cols-4 lg:px-12">
        {content.items.map((item) => (
          <span key={item} className="py-2">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
