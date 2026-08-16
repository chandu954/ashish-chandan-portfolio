import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import QuickScan from "@/components/QuickScan";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GithubStrip from "@/components/GithubStrip";
import Showcase from "@/components/Showcase";
import Collapse from "@/components/Collapse";
import CaseStudy from "@/components/CaseStudy";
import CaseStudyEleva from "@/components/CaseStudyEleva";
import Experience from "@/components/Experience";
import Praise from "@/components/Praise";
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
        <Showcase />
        <Collapse label="Case study 01 — Hyacinte AI · client RAG infrastructure" hint="tenant isolation · async ingestion · RAGAS evals — 2 min read">
          <CaseStudy />
        </Collapse>
        <Collapse label="Case study 02 — Eleva · LLM product engineering" hint="ATS pipeline · honest-AI guardrails · provider failover — 2 min read">
          <CaseStudyEleva />
        </Collapse>
        <Praise />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}