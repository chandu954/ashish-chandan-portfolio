import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import QuickScan from "@/components/QuickScan";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GithubStrip from "@/components/GithubStrip";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";

export default function Page() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <main id="main">
        <Hero />
        <Stats />
        <QuickScan />
        <About />
        <Experience />
        <Projects />
        <GithubStrip />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}