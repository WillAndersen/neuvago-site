import type { ReactNode } from "react";

type AdminSectionCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function AdminSectionCard({
  title,
  description,
  children,
}: AdminSectionCardProps) {
  return (
    <section className="rounded-[1.5rem] border border-black/5 bg-white/70 p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#1f1f1c]">{title}</h2>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-[#5f5a52]">{description}</p>
        ) : null}
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}
