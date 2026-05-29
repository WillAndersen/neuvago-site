import Link from "next/link";

type CtaButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function CtaButton({
  href,
  label,
  variant = "primary",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-[#1f1f1c] text-white hover:bg-[#2b2b28]"
      : "border border-black/10 bg-white/70 text-[#1f1f1c] hover:bg-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}
