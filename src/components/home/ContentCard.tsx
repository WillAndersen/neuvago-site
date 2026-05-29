import { BaseCard } from "@/components/home/BaseCard";

type ContentCardProps = {
  title: string;
  description: string;
};

export function ContentCard({
  title,
  description,
}: ContentCardProps) {
  return (
    <BaseCard className="px-5 py-5">
      <h3 className="text-lg font-semibold text-[#1f1f1c]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#5f5a52]">{description}</p>
    </BaseCard>
  );
}
