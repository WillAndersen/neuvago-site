import Link from "next/link";
import type { supportPageContent } from "@/content/support";

type SupportStartHereProps = {
  content: typeof supportPageContent.startHere;
};

export function SupportStartHere({ content }: SupportStartHereProps) {
  return (
    <section className="bg-[#f2eee8]">
      <div className="mx-auto max-w-[92rem] px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">Start here</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">{content.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {content.links.map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-[2rem] border border-black/5 bg-white/64 p-6 shadow-[0_18px_60px_rgba(31,31,28,0.06)] transition hover:bg-white">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-[#1f1f1c] group-hover:underline group-hover:decoration-black/20">{link.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
