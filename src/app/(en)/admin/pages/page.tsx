import Link from "next/link";

const pageCards = [
  {
    slug: "homepage",
    title: "Homepage",
    description:
      "Edit the public homepage hero, sales messaging, authority sections, learning cards, and final CTA.",
    href: "/admin/pages/homepage",
    status: "Save-enabled",
    priority: "Core",
  },
  {
    slug: "product",
    title: "Product",
    description:
      "Edit the product page hero, differentiation, system sections, FAQ, and closing CTA.",
    href: "/admin/pages/product",
    status: "Save-enabled",
    priority: "Core",
  },
  {
    slug: "app",
    title: "App",
    description:
      "Edit the app page experience, guidance sections, FAQ, and closing CTA.",
    href: "/admin/pages/app",
    status: "Save-enabled",
    priority: "Core",
  },
  {
    slug: "how-it-works",
    title: "How it works",
    description:
      "Edit the explanatory page, system overview, step-by-step content, FAQ, and final CTA.",
    href: "/admin/pages/how-it-works",
    status: "Save-enabled",
    priority: "Core",
  },
  {
    slug: "about",
    title: "About",
    description:
      "Edit the brand story, philosophy, trust sections, FAQ, and final CTA.",
    href: "/admin/pages/about",
    status: "Save-enabled",
    priority: "Trust",
  },
  {
    slug: "support",
    title: "Support",
    description:
      "Edit support routing, practical help sections, FAQ, and final CTA.",
    href: "/admin/pages/support",
    status: "Save-enabled",
    priority: "Trust",
  },
];

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-black/5 bg-white/60 p-4">
      <p className="text-sm text-[#7a756c]">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-[#1f1f1c]">{value}</p>
    </div>
  );
}

function StatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-[#1f1f1c]">
      {label}
    </span>
  );
}

export default function AdminPagesIndexPage() {
  const saveEnabledCount = pageCards.filter(
    (page) => page.status === "Save-enabled"
  ).length;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a756c]">
          Content editor
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1c] sm:text-4xl">
          Public page editor
        </h1>
        <p className="mt-4 text-base leading-7 text-[#5f5a52] sm:text-lg">
          Manage the public-facing Neuvago pages from one place. The core public
          layer is now connected to save-enabled editors backed by the database.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Public core pages" value={String(pageCards.length)} />
        <StatCard label="Save-enabled editors" value={String(saveEnabledCount)} />
        <StatCard label="Primary focus" value="Homepage + Product" />
        <StatCard label="Current phase" value="Editor V2" />
      </div>

      <div className="mt-10 rounded-[1.5rem] border border-black/5 bg-white/70 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-[#1f1f1c]">
          Recommended next work
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.25rem] border border-black/5 bg-[#f7f4ef] p-4">
            <p className="text-sm font-medium text-[#1f1f1c]">High value now</p>
            <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
              Expand more editable sections on homepage and product where content
              changes most often.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-black/5 bg-[#f7f4ef] p-4">
            <p className="text-sm font-medium text-[#1f1f1c]">Admin polish</p>
            <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
              Keep rolling out stronger editor UX and clearer save feedback across
              the remaining editors.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-black/5 bg-[#f7f4ef] p-4">
            <p className="text-sm font-medium text-[#1f1f1c]">Later</p>
            <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
              Add media strategy, more fields, and optional database-backed metadata
              once the editing flow feels stable.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pageCards.map((page) => (
          <Link
            key={page.slug}
            href={page.href}
            className="rounded-[1.5rem] border border-black/5 bg-white/70 p-6 shadow-sm transition hover:bg-white hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge label={page.status} />
              <StatusBadge label={page.priority} />
            </div>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[#8a847b]">
              {page.slug}
            </p>

            <h2 className="mt-2 text-xl font-semibold text-[#1f1f1c]">
              {page.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
              {page.description}
            </p>

            <div className="mt-6 text-sm font-medium text-[#1f1f1c]">
              Open editor
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
