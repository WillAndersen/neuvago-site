import Link from "next/link";

type CtaButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "light" | "outlineLight";
};

export function CtaButton({
  href,
  label,
  variant = "primary",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition";

  const styles = {
    primary: "bg-[#1f1f1c] text-white hover:bg-[#2b2b28]",
    secondary: "border border-black/10 bg-white/70 text-[#1f1f1c] hover:bg-white",
    light: "bg-[#f7f4ef] text-[#1f1f1c] hover:bg-white",
    outlineLight:
      "border border-white/20 bg-white/0 text-[#f7f4ef] hover:bg-white/10",
  } satisfies Record<NonNullable<CtaButtonProps["variant"]>, string>;

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {label}
    </Link>
  );
}
