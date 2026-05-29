import type { Metadata } from "next";

import { AccountChrome } from "@/components/account/account-chrome";
import { privateRouteRobots } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  robots: privateRouteRobots,
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AccountChrome>{children}</AccountChrome>;
}
