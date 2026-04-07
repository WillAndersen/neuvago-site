import Link from "next/link"

export const metadata = {
  title:
    "Terms of Service | Neuvago",
  description:
    "Read the Neuvago Terms of Service, including website use, product information, orders, payments, shipping, returns, intellectual property, liability, and governing terms.",
}

const keyPoints = [
  {
    title: "Use of the site is governed by these terms",
    description:
      "By accessing the Neuvago website or purchasing products, users agree to the terms that govern access, use, and related services.",
  },
  {
    title: "Products are positioned for wellness use",
    description:
      "Neuvago products are described and marketed as general wellness products and are not intended to diagnose, treat, cure, or prevent disease.",
  },
  {
    title: "Clear legal structure builds trust",
    description:
      "These terms are intended to clarify responsibilities, limits, and expectations around website use, product use, transactions, and related services.",
  },
]

const sections = [
  {
    title: "Acceptance of these terms",
    body: [
      "These Terms of Service govern access to and use of the Neuvago website, products, and services.",
      "By accessing this website or purchasing products from Neuvago, you agree to be bound by these Terms.",
      "If you do not agree to these Terms, you should not use the website or services.",
    ],
  },
  {
    title: "Company information",
    body: [
      "Neuvago is a wellness technology brand offering products and information related to relaxation, stress support, and autonomic nervous system awareness.",
      "For questions regarding these Terms, please contact support@neuvago.com.",
    ],
  },
  {
    title: "Eligibility",
    body: [
      "By using this website or purchasing products from Neuvago, you confirm that you are at least 18 years of age or the age of majority in your jurisdiction.",
      "You also confirm that you have the legal capacity to enter into binding agreements.",
    ],
  },
  {
    title: "Use of the website",
    body: [
      "You agree to use the website only for lawful purposes and in accordance with these Terms.",
      "You may not use the website in a way that violates applicable laws or regulations, attempt to gain unauthorized access to systems or data, disrupt or interfere with website operations, scrape or extract data using automated systems without permission, or use the website to distribute malicious software.",
      "We reserve the right to restrict or terminate access to the website if these Terms are violated.",
    ],
  },
  {
    title: "Product information",
    body: [
      "We aim to ensure that product descriptions, specifications, and images are accurate and up to date. However, we do not guarantee that all website information is free from errors or omissions.",
      "Product appearance, features, and specifications may change without notice as part of ongoing product development.",
    ],
  },
  {
    title: "Wellness device disclaimer",
    body: [
      "Neuvago devices are designed and marketed as general wellness products.",
      "They are not intended to diagnose, treat, cure, or prevent any disease or medical condition.",
      "Information provided on this website is for educational and informational purposes only and should not be considered medical advice.",
      "Users should consult a qualified healthcare professional regarding medical concerns.",
    ],
  },
  {
    title: "Product use and user responsibility",
    body: [
      "Users are responsible for using Neuvago products in accordance with the instructions provided with the device.",
      "You agree that you will use the product responsibly and at your own discretion.",
      "Individuals with medical conditions, implanted medical devices, or concerns about electrical stimulation technologies should consult a healthcare professional before using the device.",
    ],
  },
  {
    title: "Orders and payment",
    body: [
      "When you place an order through the website, you agree to provide accurate and complete information required to process the purchase.",
      "Payment transactions may be processed by third-party payment providers. By submitting payment information, you authorize processing of the transaction through the applicable payment service provider.",
      "We reserve the right to refuse or cancel orders where necessary, including in cases of suspected fraud or pricing errors.",
    ],
  },
  {
    title: "Shipping and delivery",
    body: [
      "Shipping times and delivery estimates may vary depending on location, shipping provider, and other factors outside our control.",
      "We are not responsible for delays caused by shipping carriers, customs processes, or external circumstances beyond our control.",
    ],
  },
  {
    title: "Returns and refunds",
    body: [
      "Return and refund policies may be described separately on the website.",
      "If a return policy is provided, it will outline the conditions under which products may be returned, exchanged, or refunded.",
      "Customers should review applicable return policies before making a purchase.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "All content on the Neuvago website, including text, graphics, images, logos, product designs, and other materials, is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works from this content without prior written permission.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "The website may contain links to third-party websites or services.",
      "We are not responsible for the content, privacy practices, or policies of third-party websites, and users access such sites at their own risk.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by applicable law, Neuvago and its affiliates shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from use or inability to use the website, use of Neuvago products, reliance on information provided on the website, or technical errors, interruptions, or security issues.",
      "Total liability for any claim related to the use of products or services shall not exceed the amount paid for the product in question, to the extent permitted by law.",
    ],
  },
  {
    title: "No medical liability",
    body: [
      "Neuvago products are not medical devices and are not intended to provide medical treatment.",
      "Neuvago shall not be responsible for medical decisions or health outcomes related to the use of the device.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      "You agree to indemnify and hold harmless Neuvago, its affiliates, employees, and partners from claims, damages, liabilities, and expenses arising from misuse of the website or products.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these Terms of Service from time to time to reflect changes in services, legal obligations, or business practices.",
      "Updates will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Governing law and severability",
    body: [
      "These Terms shall be governed by and interpreted in accordance with the laws applicable to the jurisdiction in which the company operating Neuvago is established, unless otherwise required by applicable consumer protection laws.",
      "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
    ],
  },
  {
    title: "Contact information",
    body: [
      "If you have questions regarding these Terms of Service, please contact support@neuvago.com.",
      "Company: Neuvago.",
      "Address: [Insert company address].",
      "Effective Date: [Insert date].",
    ],
  },
]

const relatedPages = [
  {
    title: "Privacy Policy",
    description:
      "The page explaining how personal data may be collected, used, stored, and protected across the website and services.",
    href: "/legal/privacy-policy",
    linkLabel: "Read privacy policy",
  },
  {
    title: "Medical Disclaimer",
    description:
      "The disclaimer explaining how Neuvago content and products should be understood in a non-medical context.",
    href: "/legal/medical-disclaimer",
    linkLabel: "Read medical disclaimer",
  },
  {
    title: "Intended Use",
    description:
      "A clear explanation of what Neuvago is designed for and how intended use shapes product positioning.",
    href: "/legal/intended-use",
    linkLabel: "Read intended use",
  },
  {
    title: "Legal Hub",
    description:
      "Return to the full legal, compliance, safety, and policy overview.",
    href: "/legal",
    linkLabel: "Back to legal hub",
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / Terms of Service
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Terms of service
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              These Terms of Service govern access to and use of the Neuvago
              website, products, and related services. They are intended to
              clarify how the website may be used, how products are described,
              and how legal responsibilities and limitations apply.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/privacy-policy"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read privacy policy
              </Link>

              <Link
                href="/legal"
                className="rounded-full border border-[#d8d1c7] bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/70"
              >
                Back to legal hub
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)] md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-[#8a847b]">
              Key points
            </p>

            <div className="mt-8 space-y-5">
              {keyPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#f8f5f0] p-5"
                >
                  <h2 className="text-lg font-medium text-[#1f1f1c]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a52] md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f2eee8]">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-28">
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-medium tracking-[-0.02em] text-[#1f1f1c] md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-3xl text-base leading-8 text-[#5f5a52] md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Related legal pages
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Continue with privacy, disclaimer, and intended use
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedPages.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/60 p-8 shadow-[0_12px_40px_rgba(31,31,28,0.04)]"
              >
                <h3 className="text-2xl font-medium leading-tight text-[#1f1f1c]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52] md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex text-sm font-medium text-[#1f1f1c] transition hover:opacity-70"
                >
                  {item.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-[#efe7dc] to-[#e5dbcf] px-8 py-14 shadow-[0_20px_80px_rgba(31,31,28,0.06)] md:px-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[#7a756c]">
                Continue through the broader policy layer
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                Read privacy information, disclaimer pages, or return to the legal hub
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Terms of Service sit inside a broader legal and trust framework
                that explains how the Neuvago website, products, privacy
                practices, and wellness positioning should be understood.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/legal/privacy-policy"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Read privacy policy
                </Link>

                <Link
                  href="/legal/medical-disclaimer"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Read medical disclaimer
                </Link>

                <Link
                  href="/legal"
                  className="rounded-full border border-black/10 bg-transparent px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/40"
                >
                  Back to legal hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
