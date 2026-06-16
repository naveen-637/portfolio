"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

// ─── Typing Rotator ──────────────────────────────────────────────
const ROLES = [
  "AI Engineer",
  "Data Science Student",
  "Full Stack Developer",
  "Problem Solver",
];

function TypingRotator() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");

  useEffect(() => {
    const current = ROLES[index];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pause"), 1800);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("erasing"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, index]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span className="text-accent">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-accent rounded-full ml-0.5 align-middle"
      />
    </span>
  );
}

// ─── Stat Pill ────────────────────────────────────────────────────
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="text-lg font-bold font-display text-white leading-none">{value}</span>
      <span className="text-[11px] font-mono text-text-muted mt-0.5 whitespace-nowrap">{label}</span>
    </div>
  );
}

// ─── Social Link ─────────────────────────────────────────────────
function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-200 group"
    >
      <span className="text-text-muted group-hover:text-accent transition-colors duration-200">
        {icon}
      </span>
      <span className="text-[13px] font-medium hidden sm:inline">{label}</span>
    </a>
  );
}

// ─── Fade-up Variant ─────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ─── Main Hero ────────────────────────────────────────────────────
export default function Hero() {
  const { scrollY } = useScroll();

  // Scroll animations for content
  const yContent = useTransform(scrollY, [0, 400], [0, -40]);
  const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

  // Scroll animations for profile image (subtle scale down and parallax y-translation)
  const scaleImage = useTransform(scrollY, [0, 500], [1, 0.88]);
  const yImage = useTransform(scrollY, [0, 500], [0, 50]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center bg-primary overflow-hidden"
    >
      {/* Subtle warm ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 70% 40%, rgba(255,122,0,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(255,255,255,0.015) 0%, transparent 60%)",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">

          {/* ════════════════════════════════════════
              LEFT — Text Content
          ════════════════════════════════════════ */}
          <motion.div
            style={{ y: yContent, opacity: opacityContent }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >

            {/* Hello greeting */}
            <motion.p
              {...fadeUp(0.05)}
              className="text-[13px] font-mono text-text-muted tracking-[0.15em] uppercase mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.12)}
              className="font-display font-extrabold text-white leading-[1.04] tracking-[-0.025em] mb-3"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
            >
              Naveenkumar P
            </motion.h1>

            {/* Typing subheading */}
            <motion.div {...fadeUp(0.22)} className="mb-5 h-8 flex items-center">
              <p className="text-base md:text-lg font-display font-semibold text-text-secondary">
                <TypingRotator />
              </p>
            </motion.div>

            {/* Professional statement */}
            <motion.p
              {...fadeUp(0.30)}
              className="text-[13px] font-semibold text-text-secondary tracking-wide mb-3 max-w-[480px]"
            >
              Building intelligent software products through Artificial Intelligence, Data Science, and modern Full Stack Engineering.
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.36)}
              className="text-[14px] leading-[1.8] text-text-muted font-normal max-w-[480px] mb-8"
            >
              I focus on developing scalable applications, AI-powered solutions, and user-centered digital experiences that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.44)}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="/resume/Naveenkumar_P_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/12 bg-white/[0.04] text-white text-sm font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 active:scale-[0.98]"
              >
                <Download className="h-4 w-4 text-text-muted" />
                Download Resume
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div {...fadeUp(0.50)} className="w-12 h-px bg-white/10 mb-6" />

            {/* Social links */}
            <motion.div {...fadeUp(0.56)} className="flex items-center gap-5 mb-10">
              <SocialLink
                href="https://github.com/naveen-637"
                label="GitHub"
                icon={<Github className="h-4 w-4" />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/naveenkumar-p-bb76a4333"
                label="LinkedIn"
                icon={<Linkedin className="h-4 w-4" />}
              />
              <SocialLink
                href="https://leetcode.com/u/naveen63/"
                label="LeetCode"
                icon={<SiLeetcode className="h-4 w-4" />}
              />
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.62)}
              className="flex items-center gap-6 sm:gap-8"
            >
              <StatPill value="1150+" label="Problems Solved" />
              <div className="w-px h-8 bg-white/10" />
              <StatPill value="3+" label="Projects Built" />
              <div className="w-px h-8 bg-white/10" />
              <StatPill value="7.11" label="CGPA / 10" />
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════
              RIGHT — Profile Image
          ════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: scaleImage, y: yImage }}
            className="flex justify-center lg:justify-end items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Subtle warm glow behind */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full blur-3xl opacity-15 scale-110"
                style={{ background: "radial-gradient(circle, #ff7a00 0%, transparent 70%)" }}
              />

              {/* Profile image */}
              <div className="relative h-[280px] w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_0_6px_rgba(255,122,0,0.06),0_20px_60px_rgba(0,0,0,0.6)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Naveenkumar P"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle inner shadow */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full shadow-[inset_0_2px_20px_rgba(0,0,0,0.3)]"
                />
              </div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111]/95 border border-white/08 backdrop-blur-sm shadow-card whitespace-nowrap"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-white/80">
                  Open to Opportunities
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex justify-center mt-4 lg:mt-0"
        >
          <button
            onClick={() => scrollTo("#about")}
            aria-label="Scroll to About"
            className="flex flex-col items-center gap-1.5 text-text-muted hover:text-white transition-colors group"
          >
            <span className="text-[9px] font-mono uppercase tracking-widest opacity-40">scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-4 w-4 opacity-40 group-hover:opacity-80 transition-opacity" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
