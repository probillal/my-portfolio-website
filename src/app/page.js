import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Hero />
        <TechStack />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
