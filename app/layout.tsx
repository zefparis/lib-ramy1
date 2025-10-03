import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Librairie Ésotérique",
  description:
    "Un passage vers l’invisible, l’occulte et le magique. Librairie ésotérique mystique à Brazzaville.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${manrope.variable} min-h-screen bg-night-950 text-night-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
