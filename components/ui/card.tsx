import * as React from "react";

import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-night-700/60 bg-night-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-mystic-400/60 hover:shadow-[0_25px_60px_-25px_rgba(148,111,255,0.55)]",
        className
      )}
      {...rest}
    />
  );
});
Card.displayName = "Card";

const CardGlow = ({ className }: { className?: string }) => (
  <span
    aria-hidden
    className={cn(
      "pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300",
      "bg-[radial-gradient(circle_at_center,_rgba(148,111,255,0.35),_rgba(18,15,42,0)_65%)]",
      "group-hover:opacity-100",
      className
    )}
  />
);

export { Card, CardGlow };
