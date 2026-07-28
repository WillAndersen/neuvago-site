import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { AppChrome } from "@/components/layout/app-chrome";

import "../globals.css";

const defaultOgImage = {
  url: "/images/neuvago/launch/no-home-hero-desktop.webp",
  width: 1600,
  height: 900,
  alt: "Neuvago-enhet og veiledet app",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neuvago.com"),
  title: {
    default: "Neuvago Norge | Ikke-invasiv VNS-enhet og app",
    template: "%s",
  },
  description:
    "Neuvago kombinerer en gjennomtenkt enhet, veiledede appopplevelser og forskningsinformert innhold for roligere rutiner, restitusjon og daglig regulering.",
  openGraph: {
    title: "Neuvago Norge | Ikke-invasiv VNS-enhet og app",
    description:
      "En roligere måte å støtte daglige rutiner, restitusjon og regulering på.",
    url: "https://neuvago.com/no",
    siteName: "Neuvago",
    locale: "nb_NO",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuvago Norge | Ikke-invasiv VNS-enhet og app",
    description:
      "En roligere måte å støtte daglige rutiner, restitusjon og regulering på.",
    images: [defaultOgImage.url],
  },
};

export default function NorwegianRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="nb">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f4ef] text-[#1f1f1c] antialiased`}
      >
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
