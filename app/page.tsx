import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";
import TerminalSection from "@/components/TerminalSection";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Leadership />
        <Education />
        <Skills />
        <TerminalSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
