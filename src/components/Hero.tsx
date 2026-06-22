"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

// ─── Typing Rotator ──────────────────────────────────────────────
const ROLES = [
  "AI & Data Science Student",
  "Full Stack Developer",
  "Machine Learning Enthusiast",
  "Aspiring AI Engineer",
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
    <div className="flex flex-col items-center">
      <span className="text-xl md:text-2xl font-bold font-display text-white leading-none">{value}</span>
      <span className="text-[11px] font-mono text-text-muted mt-1 whitespace-nowrap uppercase tracking-wider">{label}</span>
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

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Premium ambient backdrop glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <div
          className="absolute h-[350px] w-[350px] md:h-[500px] md:w-[500px] rounded-full blur-[120px] opacity-15"
          style={{
            background: "radial-gradient(circle, #ff8c00 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[600px] w-[600px] rounded-full blur-[180px] opacity-[0.03] translate-y-12"
          style={{
            background: "radial-gradient(circle, #ffffff 0%, transparent 75%)",
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-16 text-center flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <motion.div
          style={{ y: yContent, opacity: opacityContent }}
          className="flex flex-col items-center justify-center w-full"
        >
          {/* Hello greeting */}
          <motion.p
            {...fadeUp(0.05)}
            className="text-[13px] font-mono text-accent tracking-[0.2em] uppercase mb-4 font-bold"
          >
            HELLO, I&apos;M
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.12)}
            className="font-display font-extrabold text-white leading-[1.04] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }}
          >
            Naveenkumar P
          </motion.h1>

          {/* Typing subheading */}
          <motion.div {...fadeUp(0.22)} className="mb-6 h-8 flex items-center justify-center">
            <p className="text-lg md:text-xl font-display font-semibold text-text-secondary">
              <TypingRotator />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.32)}
            className="text-[14px] md:text-[16px] leading-[1.8] text-text-muted font-normal max-w-2xl mb-10"
          >
            Building intelligent software products through Artificial Intelligence, Data Science, and modern Full Stack Engineering. I focus on scalable applications, AI-powered solutions, and user-centered digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.42)}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-dim transition-all duration-200 shadow-lg shadow-accent/10 active:scale-[0.98] shimmer-btn"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="/resume/Naveenkumar_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/[0.04] text-white text-sm font-semibold hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 active:scale-[0.98]"
            >
              <Download className="h-4 w-4 text-text-muted" />
              Download Resume
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div {...fadeUp(0.48)} className="w-16 h-px bg-white/10 mb-8" />

          {/* Social links */}
          <motion.div {...fadeUp(0.54)} className="flex items-center justify-center gap-6 md:gap-8 mb-12">
            <SocialLink
              href="https://github.com/naveen-637"
              label="GitHub"
              icon={<Github className="h-5 w-5" />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/naveenkumar-p-bb76a4333"
              label="LinkedIn"
              icon={<Linkedin className="h-5 w-5" />}
            />
            <SocialLink
              href="https://leetcode.com/u/naveen63/"
              label="LeetCode"
              icon={<SiLeetcode className="h-5 w-5" />}
            />
            <SocialLink
              href="http://www.skillrack.com/profile/514484/9953f1a59e3dd5e61a16d277294d7a18f0da277c"
              label="SkillRack"
              icon={<FaCode className="h-5 w-5" />}
            />
          </motion.div>

        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center"
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
