import type { ReactNode } from "react";

import { buildLocalizedPageMetadata } from "@/i18n/metadata";

const title = "How to Use Neuvago | Placement, Intensity and Sessions";

const description =
  "Learn how to prepare Neuvago, follow the placement guidance, choose a comfortable intensity, complete a session and care for the device.";

export const metadata = buildLocalizedPageMetadata({
  pageId: "de-how-to-use",
  locale: "en",
  title,
  description,
});

export default function HowToUseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
