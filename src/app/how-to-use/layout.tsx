import type { Metadata } from "next";
import type { ReactNode } from "react";

import { privateRouteRobots } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  robots: privateRouteRobots,
};

export default function PrivateUtilityLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
