import type { ReactNode } from "react";

type BaseCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function BaseCard({
  children,
  className = "",
  hover = false,
}: BaseCardProps) {
  return (
    <div
      className={`rounded-[1.5rem] border border-black/5 bg-white/70 shadow-sm ${
        hover ? "transition hover:bg-white hover:shadow-md" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
