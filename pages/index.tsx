import Hero from "@/components/hero-section";
import { useEffect } from "react";
import Lenis from "lenis";
import AnalysisSection from "@/components/analysis-section";
import About from "@/components/about-section";
import Service from "@/components/service-section";
import GreenSection from "@/components/green-section";
import MediaSection from "@/components/media-section";
import PaySection from "@/components/pay-section";
import ProjectSection from "@/components/project-section";
import PartnersSection from "@/components/partners-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <AnalysisSection />
      <About />
      <Service />
      <GreenSection />
      <MediaSection />
      <PaySection />
      <ProjectSection />
      <PartnersSection />
      <FooterSection />
    </>
  );
}
