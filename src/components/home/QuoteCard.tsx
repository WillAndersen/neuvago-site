import { BaseCard } from "@/components/home/BaseCard";

type QuoteCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function QuoteCard({
  quote,
  name,
  role,
}: QuoteCardProps) {
  return (
    <BaseCard className="bg-white/60 px-6 py-6">
      <p className="text-[15px] leading-7 text-[#2a2925]">“{quote}”</p>
      <div className="mt-5">
        <p className="text-sm font-semibold text-[#1f1f1c]">{name}</p>
        <p className="text-sm text-[#7a756c]">{role}</p>
      </div>
    </BaseCard>
  );
}
