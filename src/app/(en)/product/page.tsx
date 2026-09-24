import type { Metadata } from "next";
import { productV2Content } from "@/content/product-v2";
import {
  ProductV2Hero,
  ProductV2Benefits,
  ProductV2HowItWorks,
  ProductV2Modes,
  ProductV2Research,
  ProductV2BuyBox,
  ProductV2Details,
  ProductV2Faq,
  ProductV2FinalCta,
} from "@/components/product-v2";
import {
  buildFAQStructuredData,
  buildPageWithBreadcrumbStructuredData,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago | Ear-Based Vagus Nerve Stimulation Device",
  description:
    "Meet Neuvago, an ear-based VNS device with four 20-minute modes, 30 intensity levels, a left earpiece and one year of app access. See how it works and get launch access.",
  alternates: {
    canonical: "/product",
    languages: {
      "en-US": "/product",
      "nb-NO": "/no/produkt",
      "x-default": "/product",
    },
  },
  openGraph: {
    title: "Neuvago | Ear-Based Vagus Nerve Stimulation Device",
    description:
      "Discover Neuvago’s ear-based stimulation approach, four 20-minute modes, 30 intensity levels, app access, package contents, safety information and launch access.",
    url: "/product",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Ear-Based Vagus Nerve Stimulation Device",
    description:
      "Neuvago is an ear-based VNS device with adjustable intensity, four 20-minute modes, physical controls and app access.",
  },
};

export default function ProductPage() {
  const content = productV2Content;

  const structuredData: Array<Record<string, unknown>> =
    buildPageWithBreadcrumbStructuredData({
      title: content.hero.title,
      description: `${content.hero.description} ${content.hero.technologyDescription}`,
      path: "/product",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
      ],
    });

  structuredData.push({
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Neuvago",
    model: "NVG-001",
    brand: {
      "@type": "Brand",
      name: "Neuvago",
    },
    category: "Ear-based non-invasive vagus nerve stimulation device",
    description:
      "Ear-based non-invasive VNS device with four 20-minute modes, 30 adjustable intensity levels and a supplied left earpiece.",
    url: "https://neuvago.com/product",
  });

  const faqStructuredData = buildFAQStructuredData(content.faq.items);

  if (faqStructuredData) {
    structuredData.push(faqStructuredData);
  }

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      {structuredData.map((item, index) => (
        <script
          key={`product-v2-2-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <ProductV2Hero content={content.hero} />
      <ProductV2Benefits content={content.benefits} />
      <ProductV2HowItWorks content={content.howItWorks} />
      <ProductV2Modes content={content.modes} />
      <ProductV2BuyBox content={content.buyBox} />
      <ProductV2Research content={content.research} />
      <ProductV2Details content={content.productDetails} />
      <ProductV2Faq content={content.faq} />
      <ProductV2FinalCta content={content.finalCta} />
    </main>
  );
}
