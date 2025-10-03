"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardGlow } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Gallery() {
  return (
    <section id="galerie" className="relative py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-mystic-200/70">
            Manifestations mystiques
          </p>
          <h2 className="text-3xl font-semibold text-night-50 md:text-4xl">
            Vibrations & Reliques
          </h2>
          <p className="max-w-2xl text-sm text-night-300/80 md:text-base">
            Explorez les arcanes soigneusement sélectionnés pour éveiller vos sens
            subtils et nourrir votre quête de lumière.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {siteConfig.gallery.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <Card className="group h-full overflow-hidden p-0">
                <div className="relative w-full overflow-hidden bg-night-950 aspect-[3/4] sm:aspect-[2/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 px-6 pb-8 pt-6">
                  <h3 className="text-xl font-semibold text-night-50">
                    {item.title}
                  </h3>
                  <p className="text-sm text-night-300/80">{item.description}</p>
                </div>
                <CardGlow />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
