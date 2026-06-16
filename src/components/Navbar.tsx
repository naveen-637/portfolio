"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy logic
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; // check 30% down the viewport
      
      // If we are at the bottom of the page, highlight the last section (Contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("#contact");
        return;
      }

      for (const link of navLinks) {
        const el = document.querySelector(link.href) as HTMLElement;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawerVariants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 }
      }
    : {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { type: "spring" as const, stiffness: 280, damping: 28 }
      };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-primary/85 border-b border-white/[0.06] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-2 group transition-opacity duration-200 hover:opacity-80"
          aria-label="Home"
        >
          <span className="font-display font-bold text-[16px] tracking-[0.2em] text-white">
            NAVEEN
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "relative text-[11px] uppercase tracking-widest font-medium transition-colors duration-200 px-3 py-2 rounded-md",
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "#contact")}
          className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent hover:bg-accent-dim text-white font-semibold text-[11px] shadow-sm transition-all duration-200 shimmer-btn"
        >
          Let&apos;s Talk
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-text-secondary hover:text-white rounded-lg border border-white/08 hover:border-white/15 transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...drawerVariants}
            className="lg:hidden bg-card/97 border-b border-white/[0.06] shadow-xl px-6 py-6 flex flex-col gap-2 backdrop-blur-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "text-sm font-medium tracking-wide py-2.5 px-3 rounded-lg transition-all duration-150",
                  activeSection === link.href
                    ? "text-accent bg-accent/8 font-semibold"
                    : "text-text-secondary hover:text-white hover:bg-white/04"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="mt-3 text-center py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dim transition-colors shadow-sm shimmer-btn"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
