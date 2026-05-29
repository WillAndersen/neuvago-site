import type { Metadata } from "next";
import { getProductContent } from "@/lib/content/get-product-content";
import {
  ProductHero,
  ProductWhatIsNeuvago,
  ProductWhyItFeelsDifferent,
  ProductDeviceAppTogether,
  ProductHowItFitsIntoLife,
  ProductHowToUse,
  ProductTrustBridge,
  ProductFaq,
  ProductFinalCta,
} from "@/components/product";
import {
  buildFAQStructuredData,
  buildProductStructuredData,
  buildWebPageStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title:
    "Neuvago Device | Non-Invasive Vagus Nerve Stimulator | Neuvago",
  description:
    "Explore Neuvago, a premium non-invasive vagus nerve stimulator and guided app system designed for calmer routines around stress, sleep, recovery, and daily regulation.",
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    title:
      "Neuvago Device | Non-Invasive Vagus Nerve Stimulator | Neuvago",
    description:
      "Explore Neuvago, a premium non-invasive vagus nerve stimulator and guided app system designed for calmer routines around stress, sleep, recovery, and daily regulation.",
    url: "/product",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neuvago Device | Non-Invasive Vagus Nerve Stimulator | Neuvago",
    description:
      "Explore Neuvago, a premium non-invasive vagus nerve stimulator and guided app system designed for calmer routines around stress, sleep, recovery, and daily regulation.",
  },
};

export default async function ProductPage() {
  const content = await getProductContent();

  const structuredData: Array<Record<string, unknown>> = [
    buildWebPageStructuredData({
      title: content.hero.title,
      description: content.hero.description,
      path: "/product",
    }),
    buildProductStructuredData({
      name: "Neuvago",
      description: content.whatIsNeuvago.description,
      path: "/product",
      image: content.hero.desktopImage.src,
    }),
  ];

  const faqStructuredData = content.faq.visible
    ? buildFAQStructuredData(content.faq.items)
    : null;

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`product-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      {content.hero.visible ? <ProductHero content={content.hero} /> : null}

      {content.whatIsNeuvago.visible ? (
        <ProductWhatIsNeuvago content={content.whatIsNeuvago} />
      ) : null}

      {content.whyItFeelsDifferent.visible ? (
        <ProductWhyItFeelsDifferent content={content.whyItFeelsDifferent} />
      ) : null}

      {content.howItFitsIntoLife.visible ? (
        <ProductHowItFitsIntoLife content={content.howItFitsIntoLife} />
      ) : null}

      {content.deviceAppTogether.visible ? (
        <ProductDeviceAppTogether content={content.deviceAppTogether} />
      ) : null}

      {content.howToUse.visible ? (
        <ProductHowToUse content={content.howToUse} />
      ) : null}

      {content.trustBridge.visible ? (
        <ProductTrustBridge content={content.trustBridge} />
      ) : null}

      {content.faq.visible ? <ProductFaq content={content.faq} /> : null}

      {content.finalCta.visible ? (
        <ProductFinalCta content={content.finalCta} />
      ) : null}
    </main>
  );
}
