import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Get Started with Neuvago | Account, App and Next Steps";

const description =
  "Create your Neuvago account, explore the app, and find the product, research, support and practical guidance you need to begin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/get-started",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/get-started",
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

export default function GetStartedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
