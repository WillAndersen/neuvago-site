import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { privateRouteRobots } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  robots: privateRouteRobots,
};

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#1f1f1c]">
      <header className="border-b border-black/5 bg-[#f7f4ef]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
          <div>
            <Link
              href="/admin/pages"
              className="text-sm font-medium uppercase tracking-[0.28em] text-[#1f1f1c]"
            >
              Neuvago Admin
            </Link>
          </div>

          <nav className="flex items-center gap-3 text-sm">
            <Link
              href="/admin/pages"
              className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[#1f1f1c] transition hover:bg-white"
            >
              Pages
            </Link>
            <Link
              href="/"
              className="text-[#5f5a52] transition hover:text-[#1f1f1c]"
            >
              View site
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
