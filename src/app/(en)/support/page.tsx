import type { Metadata } from "next";

import {
  SupportV2Contact,
  SupportV2Faq,
  SupportV2Hero,
  SupportV2Resources,
} from "@/components/support-v2";
import { supportV2Content } from "@/content/support-v2";
import { buildWebPageStructuredData } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Neuvago Support | Clear Help for Product, App and Everyday Use",
  description:
    "Find clear help for understanding the Neuvago product, app, daily routines, legal information, and where to start next.",
  alternates: {
    canonical: "/support",
    languages: {
      "en-US": "/support",
      "nb-NO": "/no/support",
      "x-default": "/support",
    },
  },
  openGraph: {
    title: "Neuvago Support | Clear Help for Product, App and Everyday Use",
    description:
      "Find clear help for understanding the Neuvago product, app, daily routines, legal information, and where to start next.",
    url: "/support",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Support | Clear Help for Product, App and Everyday Use",
    description:
      "Find clear help for understanding the Neuvago product, app, daily routines, legal information, and where to start next.",
  },
};

export default function SupportPage() {
  const content = supportV2Content;
  const structuredData = buildWebPageStructuredData({
    title: content.hero.title,
    description:
      "Find clear help for understanding the Neuvago product, app, daily routines, legal information, and where to start next.",
    path: "/support",
  });

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {content.hero.visible ? <SupportV2Hero content={content.hero} /> : null}
      {content.resources.visible ? (
        <SupportV2Resources content={content.resources} />
      ) : null}
      {content.faq.visible ? <SupportV2Faq content={content.faq} /> : null}
      {content.contact.visible ? (
        <SupportV2Contact content={content.contact} />
      ) : null}
    </main>
  );
}
