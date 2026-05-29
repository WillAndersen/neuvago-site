import Image from "next/image";
import { BaseCard } from "@/components/home/BaseCard";

type AppScreenCardProps = {
  src: string;
  alt: string;
};

export function AppScreenCard({
  src,
  alt,
}: AppScreenCardProps) {
  return (
    <BaseCard className="bg-white/60 p-4">
      <div className="mx-auto max-w-[260px] overflow-hidden rounded-[1.5rem] border border-black/5 bg-[#f7f4ef]">
        <div className="relative aspect-[4/5]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 70vw, 260px"
          />
        </div>
      </div>
    </BaseCard>
  );
}
