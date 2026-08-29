import {
  AboutV2FinalCta,
  AboutV2Focus,
  AboutV2Hero,
  AboutV2Principles,
  AboutV2WhyItExists,
} from "@/components/about-v2";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutV2Content } from "@/content/about-v2";
import { buildLocalizedPageMetadata } from "@/i18n/metadata";
import { buildPageWithBreadcrumbStructuredData } from "@/lib/seo/structured-data";

const metadataTitle = "About Neuvago | Vagus Nerve Stimulation";
const metadataDescription =
  "A more practical approach to vagus nerve stimulation.";

export const metadata = buildLocalizedPageMetadata({
  pageId: "de-about",
  locale: "en",
  title: metadataTitle,
  description: metadataDescription,
});

export default function AboutPage() {
  const content = aboutV2Content;
  const structuredData = buildPageWithBreadcrumbStructuredData({
    title: content.hero.title,
    description: metadataDescription,
    path: "/about",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <JsonLd data={structuredData} idPrefix="about-v2" />
      {content.hero.visible ? <AboutV2Hero content={content.hero} /> : null}
      {content.whyItExists.visible ? (
        <AboutV2WhyItExists content={content.whyItExists} />
      ) : null}
      {content.principles.visible ? (
        <AboutV2Principles content={content.principles} />
      ) : null}
      {content.focus.visible ? <AboutV2Focus content={content.focus} /> : null}
      {content.finalCta.visible ? (
        <AboutV2FinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
