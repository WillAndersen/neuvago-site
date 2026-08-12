import type { Metadata } from "next";
import { FeaturedTavnsStudyPage } from "@/components/research-v2";
import { getFeaturedTavnsStudy } from "@/content/research-study-catalog";

const study = getFeaturedTavnsStudy(
  "kim-2022-tavns-safety-systematic-review-meta-analysis",
);

export const metadata: Metadata = {
  title: study.metaTitle,
  description: study.metaDescription,
  alternates: { canonical: study.href },
  openGraph: {
    title: study.metaTitle,
    description: study.metaDescription,
    url: study.href,
    siteName: "Neuvago",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: study.metaTitle,
    description: study.metaDescription,
  },
};

export default function Kim2022TavnsSafetyPage() {
  return <FeaturedTavnsStudyPage study={study} />;
}
