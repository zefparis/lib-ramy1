"use client";

import { motion } from "framer-motion";

import { Card, CardGlow } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

const items = [
  {
    label: "Adresse",
    value: siteConfig.contact.address,
    href: "https://maps.app.goo.gl/",
  },
  {
    label: "Téléphone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 text-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-mystic-200/70">
            Appel des arcanes
          </p>
          <h2 className="text-3xl font-semibold text-night-50 md:text-4xl">
            Entrer en résonance
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-night-300/80 md:text-base">
            Trouvez la voie pour nous contacter et laissez la magie opérer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full space-y-4 p-6 text-left">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-mystic-200/70">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="relative mt-2 block text-base text-night-50 transition-colors hover:text-mystic-100"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                </div>
                <CardGlow className="opacity-40" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
