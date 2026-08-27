import type { ReactNode } from "react";

import { OrganicConversionTracker } from "@/components/analytics/OrganicConversionTracker";
import { AppChrome } from "@/components/layout/app-chrome";
import { getLocaleDefinition } from "@/i18n/locale-registry";
import { buildRootMetadata } from "@/i18n/root-metadata";

import "../globals.css";

export const metadata = buildRootMetadata("en");

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={getLocaleDefinition("en").htmlLang}>
      <body className="bg-[#f7f4ef] text-[#1f1f1c] antialiased">
        <OrganicConversionTracker />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
