import Link from "next/link"

export const metadata = {
  title:
    "Privacy Policy | Neuvago",
  description:
    "Read the Neuvago Privacy Policy, including what personal data we collect, how we use it, cookies, analytics, third-party services, data retention, and your rights.",
}

const keyPoints = [
  {
    title: "Transparency in data handling",
    description:
      "We aim to explain clearly what personal data may be collected, how it may be used, and how it is handled across the Neuvago website and services.",
  },
  {
    title: "No sale of personal data",
    description:
      "Neuvago does not sell personal data. Data may be shared with trusted service providers only where necessary to operate the business and services.",
  },
  {
    title: "Your rights matter",
    description:
      "Depending on location and applicable law, users may have rights relating to access, correction, deletion, restriction, objection, portability, and complaint.",
  },
]

const sections = [
  {
    title: "Who we are",
    body: [
      "This Privacy Policy explains how Neuvago collects, uses, stores, and protects personal data when you visit our website, purchase products, contact us, or otherwise interact with our services.",
      "We are committed to protecting privacy and handling personal data in a transparent and responsible manner.",
      "If you have questions about this Privacy Policy or how personal data is processed, you can contact us at privacy@neuvago.com.",
    ],
  },
  {
    title: "What personal data we may collect",
    body: [
      "We may collect personal data that you provide directly to us, data collected automatically when you use the website, and data received through transactions or customer support interactions.",
      "This may include information such as name, email address, phone number, shipping and billing address, order details, customer support messages, and other information you choose to provide.",
      "It may also include automatically collected information such as IP address, browser type, device type, operating system, pages viewed, referral source, approximate location derived from IP, and cookie or tracking data.",
    ],
  },
  {
    title: "Order, transaction, and payment information",
    body: [
      "If you purchase products from us, we may collect information necessary to process orders, manage delivery, handle returns, and provide customer support.",
      "Payment card details are typically processed by third-party payment providers and are not stored by us unless explicitly stated otherwise.",
    ],
  },
  {
    title: "How personal data may be used",
    body: [
      "Personal data may be used to operate and maintain the website, process and fulfill orders, provide customer support, communicate about products or service updates, improve the website and user experience, analyze traffic and performance, detect fraud or security issues, and comply with legal obligations.",
      "Where permitted by law, personal data may also be used to send newsletters, product updates, or marketing communications.",
    ],
  },
  {
    title: "Legal bases for processing",
    body: [
      "Where applicable under data protection law, personal data may be processed on one or more legal bases including consent, performance of a contract, compliance with a legal obligation, and legitimate interests where those interests are not overridden by user rights and interests.",
    ],
  },
  {
    title: "Cookies and tracking technologies",
    body: [
      "We may use cookies and similar technologies to improve website functionality, remember preferences, understand how visitors use the website, and support analytics or marketing activities.",
      "These technologies may include essential cookies, analytics cookies, functional cookies, and marketing cookies depending on how the website is configured.",
      "Users can typically control cookies through browser settings and, where applicable, through cookie consent tools displayed on the website.",
    ],
  },
  {
    title: "Analytics and third-party services",
    body: [
      "We may use third-party services to help us understand traffic, improve performance, process transactions, deliver communications, provide e-commerce functionality, host the website, and support security or customer support operations.",
      "These providers may process personal data on our behalf in accordance with their own privacy practices and applicable data protection laws.",
    ],
  },
  {
    title: "Sharing of personal data",
    body: [
      "We do not sell personal data.",
      "We may share personal data with trusted third parties where necessary for business operations, including payment providers, shipping partners, hosting and technology providers, analytics or marketing service providers, professional advisers, and authorities where required by law.",
      "Personal data may also be shared in connection with a merger, acquisition, restructuring, financing, or sale of assets.",
    ],
  },
  {
    title: "International transfers",
    body: [
      "Personal data may be processed in countries other than the user’s country of residence.",
      "Where international transfers occur, appropriate steps should be taken to ensure that such transfers are carried out in accordance with applicable data protection laws and supported by appropriate safeguards where required.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "Personal data is retained only for as long as necessary for the purposes described in this Privacy Policy, including fulfilling contractual obligations, maintaining business records, resolving disputes, enforcing agreements, and complying with legal obligations.",
      "Retention periods may vary depending on the type of data and the purpose of processing.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on your location and applicable law, you may have rights relating to your personal data, including the right to access, correct, delete, restrict, object, withdraw consent where relevant, request portability where applicable, and lodge a complaint with a supervisory authority.",
      "To exercise your rights, please contact us using the contact details provided on this page.",
    ],
  },
  {
    title: "Marketing communications",
    body: [
      "If you subscribe to newsletters or otherwise consent to receive marketing communications, we may send updates about products, content, offers, and company news.",
      "You can unsubscribe from marketing emails at any time using the unsubscribe link in the email or by contacting us directly.",
    ],
  },
  {
    title: "Data security",
    body: [
      "We take reasonable technical and organizational measures to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure.",
      "However, no method of transmission over the internet or method of electronic storage is completely secure, and absolute security cannot be guaranteed.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "Our website and products are intended for adults and are not directed to children.",
      "We do not knowingly collect personal data from children unless permitted by applicable law and supported by appropriate consent where required.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "The website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or policies of third-party websites.",
      "Users are encouraged to review the privacy policies of any third-party sites they visit.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in services, legal obligations, or business practices.",
      "When updates are made, the effective date on this page should also be updated.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about this Privacy Policy or privacy practices, please contact: privacy@neuvago.com.",
      "Company: Neuvago.",
      "Address: [Insert company address].",
      "Effective Date: [Insert date].",
    ],
  },
]

const relatedPages = [
  {
    title: "Terms of Service",
    description:
      "The terms governing access to the Neuvago website, products, and services.",
    href: "/legal/terms-of-service",
    linkLabel: "Read terms",
  },
  {
    title: "Trust & Safety",
    description:
      "A broader overview of product trust, safety, responsible use, and how Neuvago approaches consumer wellness technology.",
    href: "/legal/trust-safety",
    linkLabel: "Read trust & safety",
  },
  {
    title: "Medical Disclaimer",
    description:
      "The disclaimer explaining how Neuvago content and products should be understood in a non-medical context.",
    href: "/legal/medical-disclaimer",
    linkLabel: "Read medical disclaimer",
  },
  {
    title: "Legal Hub",
    description:
      "Return to the full legal, compliance, safety, and policy overview.",
    href: "/legal",
    linkLabel: "Back to legal hub",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1c]">
      <section className="border-b border-black/5">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#7a756c]">
              Legal / Privacy Policy
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Privacy policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
              This Privacy Policy explains how Neuvago may collect, use, store,
              and protect personal data when you visit the website, purchase
              products, contact us, or otherwise interact with our services.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52]">
              We are committed to handling personal data in a transparent and
              responsible manner and to making privacy information easier to
              understand.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/legal/terms-of-service"
                className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Read terms
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
              Continue with terms, trust information, and the broader legal structure
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
                Read terms, trust & safety, or return to the legal hub
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] md:text-lg">
                Privacy is one part of a broader legal and trust framework that
                explains how Neuvago handles personal data, communicates
                responsibly, and structures the relationship between users,
                website services, and product experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/legal/terms-of-service"
                  className="rounded-full bg-[#1f1f1c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Read terms
                </Link>

                <Link
                  href="/legal/trust-safety"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-medium text-[#1f1f1c] transition hover:bg-white/75"
                >
                  Read trust & safety
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
