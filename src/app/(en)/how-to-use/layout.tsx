import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "How to Use Neuvago | Placement, Intensity and Sessions";

const description =
  "Learn how to prepare Neuvago, follow the placement guidance, choose a comfortable intensity, complete a session and care for the device.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/how-to-use",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/how-to-use",
    siteName: "Neuvago",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function HowToUseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
