import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppChrome } from "@/components/layout/app-chrome";

import "../globals.css";

const defaultOgImage = {
  url: "/images/neuvago/launch/no-home-hero-desktop.webp",
  width: 1600,
  height: 900,
  alt: "Neuvago-enhet og veiledet app",
};


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
    locale: "no_NO",
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
    <html lang="no">
      <body
        className="bg-[#f7f4ef] text-[#1f1f1c] antialiased"
      >
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
