"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "text-lg font-semibold tracking-wide",
            "bg-gradient-to-r from-mystic-200 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent"
          )}
        >
          Librairie Ésotérique
        </motion.span>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className="text-sm font-medium"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <Button asChild variant="primary" size="sm" className="hidden md:inline-flex">
          <Link href="#contact">Nous contacter</Link>
        </Button>
      </div>
    </header>
  );
}
