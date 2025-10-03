import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-night-800/60 bg-night-950/70 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center text-sm text-night-300">
        <p>© {year} {siteConfig.name}</p>
        <p className="text-night-400">Tissé dans l’ombre et la lumière</p>
      </div>
    </footer>
  );
}
