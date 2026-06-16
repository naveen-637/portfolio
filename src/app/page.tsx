"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports (Code-splitting and Lazy Loading below the fold)
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Certifications = dynamic(() => import("@/components/Certifications"), { ssr: false });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress((window.scrollY / totalScrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-primary text-text-primary overflow-x-hidden">
      {/* Scroll progress indicator — orange accent */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-accent z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />


    </main>
  );
}
