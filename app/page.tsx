import Navbar from "@/components/layout/Navbar";
import SiteBackground from "@/components/layout/SiteBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* One continuous canvas: the background flows the whole spectrum while
          the transparent sections float on top, so the page reads as a single
          surface instead of stacked panels. */}
      <div className="relative overflow-x-clip">
        <SiteBackground />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
