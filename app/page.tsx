import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MysticBG from "@/components/MysticBG";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <MysticBG />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
