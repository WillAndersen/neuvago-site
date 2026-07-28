import Link from "next/link";
import type { supportPageContent } from "@/content/support";

type SupportTopicsProps = {
  content: typeof supportPageContent.supportTopics;
};

export function SupportTopics({ content }: SupportTopicsProps) {
  const sectionContent = content as typeof supportPageContent.supportTopics & {
    eyebrow?: string;
  };

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[92rem] px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#81766a]">{sectionContent.eyebrow ?? "Topics"}</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.055em] text-[#1f1f1c] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f5a52] sm:text-lg">{content.description}</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-black/5 bg-black/5 md:grid-cols-2 lg:grid-cols-3">
          {content.links.map((link) => (
            <Link key={link.href} href={link.href} className="group bg-white/68 p-6 transition hover:bg-white sm:p-7">
              <h3 className="text-lg font-medium tracking-[-0.03em] text-[#1f1f1c] group-hover:underline group-hover:decoration-black/20">{link.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
