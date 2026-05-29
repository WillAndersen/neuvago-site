import Link from "next/link";
import { BaseCard } from "@/components/home/BaseCard";

type LightLinkCardProps = {
  title: string;
  description: string;
  href: string;
};

export function LightLinkCard({
  title,
  description,
  href,
}: LightLinkCardProps) {
  return (
    <Link href={href} className="block">
      <BaseCard className="px-5 py-5" hover>
        <h3 className="text-base font-semibold text-[#1f1f1c]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#5f5a52]">{description}</p>
      </BaseCard>
    </Link>
  );
}
