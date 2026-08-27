import type { ReactNode } from "react";

import { AppChrome } from "@/components/layout/app-chrome";
import { getLocaleDefinition } from "@/i18n/locale-registry";
import { buildRootMetadata } from "@/i18n/root-metadata";

import "../globals.css";

export const metadata = buildRootMetadata("no");

export default function NorwegianRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={getLocaleDefinition("no").htmlLang}>
      <body className="bg-[#f7f4ef] text-[#1f1f1c] antialiased">
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
