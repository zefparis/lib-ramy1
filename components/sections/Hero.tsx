"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/wp3984345.jpg"
          alt="Autel ésotérique irisé"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/40 via-night-950/80 to-night-950" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-32 text-center md:items-center">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-mystic-500/40 bg-night-900/60 px-4 py-1 text-xs uppercase tracking-[0.4em] text-mystic-200/70 backdrop-blur-md"
        >
          Passage vers l'occulte
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-4xl font-semibold leading-tight text-night-50 drop-shadow-lg md:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-base text-night-200/80 md:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 1.25, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="#contact">Nous contacter</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#galerie">Voir la galerie</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
