import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#f2eee8]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-sm font-medium uppercase tracking-[0.2em] text-[#1f1f1c]"
            >
              Neuvago
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#5f5a52]">
              Calm, thoughtful support for stress, sleep, recovery, and nervous
              system awareness.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#1f1f1c]">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5f5a52]">
              <Link href="/product">Product</Link>
              <Link href="/app">App</Link>
              <Link href="/how-it-works">How it works</Link>
              <Link href="/conditions">Conditions</Link>
              <Link href="/research">Research</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#1f1f1c]">Learn</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5f5a52]">
              <Link href="/learn">Learning hub</Link>
              <Link href="/learn/vagus-nerve">Vagus nerve</Link>
              <Link href="/learn/nervous-system-regulation">
                Nervous system regulation
              </Link>
              <Link href="/learn/recovery-and-regulation">
                Recovery and regulation
              </Link>
              <Link href="/learn/how-to-calm-your-nervous-system">
                How to calm your nervous system
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#1f1f1c]">Company</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5f5a52]">
              <Link href="/about">About</Link>
              <Link href="/support">Support</Link>
              <Link href="/legal">Legal / Compliance</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#1f1f1c]">Legal</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#5f5a52]">
              <Link href="/legal/medical-disclaimer">Medical Disclaimer</Link>
              <Link href="/legal/intended-use">Intended Use</Link>
              <Link href="/legal/regulatory">Regulatory Information</Link>
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
              <Link href="/legal/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-black/5 pt-6 text-sm text-[#7a756c]">
          © 2026 Neuvago. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
