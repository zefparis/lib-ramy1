"use client";

import { motion } from "framer-motion";

import MysticSparkles from "@/components/MysticSparkles";
import { cn } from "@/lib/utils";

const orbs = [
  {
    size: "40rem",
    top: "-15%",
    left: "-10%",
    gradient:
      "bg-[radial-gradient(circle_at_center,_rgba(148,111,255,0.45),_rgba(16,13,40,0)_70%)]",
    animation: "orb-slow",
  },
  {
    size: "30rem",
    top: "20%",
    right: "-5%",
    gradient:
      "bg-[radial-gradient(circle_at_center,_rgba(77,240,210,0.35),_rgba(16,13,40,0)_70%)]",
    animation: "orb-fast",
  },
  {
    size: "24rem",
    bottom: "-10%",
    left: "20%",
    gradient:
      "bg-[radial-gradient(circle_at_center,_rgba(232,121,249,0.4),_rgba(16,13,40,0)_70%)]",
    animation: "orb-slow",
  },
];

export default function MysticBG({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,111,255,0.08),_rgba(10,9,18,1)_75%)]" />
      {orbs.map((orb, index) => (
        <motion.span
          key={index}
          className={cn(
            "absolute rounded-full blur-3xl mix-blend-screen opacity-70",
            orb.gradient
          )}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <MysticSparkles className="opacity-80" />
      <div className="absolute inset-0 bg-night-950/60 backdrop-blur-[2px]" />
    </div>
  );
}
