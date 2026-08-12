import Link from "next/link";
import type { homepageContent } from "@/content/homepage";

type HomeProofStripProps = {
  content: typeof homepageContent.proofStrip;
};

export function HomeProofStrip({ content }: HomeProofStripProps) {
  return (
    <section className="border-b border-black/5 bg-[#1f1f1c] text-[#f7f4ef]">
      <div className="mx-auto grid max-w-[90rem] gap-3 px-5 py-4 sm:gap-4 sm:px-8 sm:py-5 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-center text-[0.62rem] font-medium uppercase tracking-[0.17em] text-[#d9d0c4] sm:text-[0.68rem] sm:tracking-[0.21em] lg:grid-cols-4">
          {content.items.map((item) => (
            <span key={item} className="py-2">
              {item}
            </span>
          ))}
        </div>

        <Link
          href={content.cta.href}
          className="mx-auto hidden items-center justify-center rounded-full border border-white/16 bg-white/[0.08] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.14] sm:inline-flex lg:mx-0"
        >
          {content.cta.label}
        </Link>
      </div>
    </section>
  );
}
