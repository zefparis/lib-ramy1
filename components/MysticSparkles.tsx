"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const sparkles = [
  { top: "10%", left: "15%", size: 6, delay: 0 },
  { top: "25%", left: "70%", size: 4, delay: 0.6 },
  { top: "40%", left: "30%", size: 5, delay: 1.2 },
  { top: "55%", left: "80%", size: 3, delay: 0.3 },
  { top: "65%", left: "20%", size: 5, delay: 0.9 },
  { top: "75%", left: "55%", size: 4, delay: 1.5 },
  { top: "85%", left: "35%", size: 6, delay: 1.8 },
  { top: "15%", left: "85%", size: 3, delay: 1.1 },
];

interface MysticSparklesProps {
  className?: string;
}

export default function MysticSparkles({ className }: MysticSparklesProps) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      {sparkles.map((sparkle, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: [0.2, 0.8, 0.3], scale: [0.9, 1.4, 1] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
          className="block rounded-full bg-mystic-400/70 shadow-[0_0_12px_rgba(148,111,255,0.65)]"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            top: sparkle.top,
            left: sparkle.left,
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
}
