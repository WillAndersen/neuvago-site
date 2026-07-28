import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppChrome } from "@/components/layout/app-chrome";

import "../globals.css";

const defaultOgImage = {
  url: "/images/neuvago/launch/no-home-hero-desktop.webp",
  width: 1600,
  height: 900,
  alt: "Neuvago device and guided app",
};


export const metadata: Metadata = {
  metadataBase: new URL("https://neuvago.com"),
  title: {
    default: "Neuvago | Calm support for stress, sleep, and recovery",
    template: "%s",
  },
  description:
    "Neuvago combines a thoughtfully designed device, guided app experiences, and research-informed learning to support stress, sleep, recovery, and nervous system regulation.",
  keywords: [
    "Neuvago",
    "vagus nerve",
    "nervous system regulation",
    "vagal tone",
    "stress support",
    "sleep support",
    "recovery",
    "calm technology",
  ],
  openGraph: {
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "A calmer way to support stress, sleep, recovery, and nervous system regulation.",
    url: "https://neuvago.com",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago | Calm support for stress, sleep, and recovery",
    description:
      "A calmer way to support stress, sleep, recovery, and nervous system regulation.",
    images: [defaultOgImage.url],
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#f7f4ef] text-[#1f1f1c] antialiased"
      >
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
