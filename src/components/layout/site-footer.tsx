import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/product", label: "Product" },
      { href: "/app", label: "App" },
      { href: "/how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { href: "/learn", label: "Learning hub" },
      { href: "/conditions", label: "Conditions" },
      { href: "/research", label: "Research" },
      { href: "/learn/vagus-nerve", label: "Vagus nerve" },
      {
        href: "/learn/nervous-system-regulation",
        label: "Nervous system regulation",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/support", label: "Support" },
      { href: "/legal", label: "Legal / Compliance" },
      { href: "/legal/trust-safety", label: "Trust & Safety" },
    ],
  },
  {
    title: "Access",
    links: [
      { href: "/get-started", label: "Get started" },
      { href: "/login", label: "Sign in" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/medical-disclaimer", label: "Medical Disclaimer" },
      { href: "/legal/intended-use", label: "Intended Use" },
      { href: "/legal/regulatory", label: "Regulatory Information" },
      { href: "/legal/privacy-policy", label: "Privacy Policy" },
      { href: "/legal/terms-of-service", label: "Terms of Service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#f2eee8] text-[#1f1f1c]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block text-sm font-medium uppercase tracking-[0.32em] text-[#1f1f1c] transition hover:opacity-80"
              aria-label="Neuvago home"
            >
              Neuvago
            </Link>

            <p className="mt-6 text-base leading-8 text-[#5f5a52]">
              Calm, thoughtful support for stress, sleep, recovery, and nervous
              system awareness.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-[#5f5a52] transition hover:text-[#1f1f1c]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-black/5 pt-6">
          <div className="flex flex-col gap-4 text-sm text-[#7a756c]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Neuvago. All rights reserved.</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/legal/privacy-policy"
                  className="transition hover:text-[#1f1f1c]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms-of-service"
                  className="transition hover:text-[#1f1f1c]"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/legal/medical-disclaimer"
                  className="transition hover:text-[#1f1f1c]"
                >
                  Medical Disclaimer
                </Link>
              </div>
            </div>

            <p className="max-w-3xl leading-6">
              Neuvago is designed for general wellness and educational support.
              Please review{" "}
              <Link
                href="/legal/intended-use"
                className="underline decoration-black/20 underline-offset-4 transition hover:text-[#1f1f1c]"
              >
                Intended Use
              </Link>{" "}
              and{" "}
              <Link
                href="/legal/medical-disclaimer"
                className="underline decoration-black/20 underline-offset-4 transition hover:text-[#1f1f1c]"
              >
                Medical Disclaimer
              </Link>{" "}
              for important product and communication context.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
