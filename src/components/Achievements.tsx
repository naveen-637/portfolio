"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2, Trophy, Award, BookMarked, X, ZoomIn } from "lucide-react";

// ─── Stats Data ──────────────────────────────────────────────────
type StatItem = {
  value: string;
  suffix: string;
  label: string;
  sublabel: string;
  Icon: React.ElementType;
};

const stats: StatItem[] = [
  {
    value: "1150",
    suffix: "+",
    label: "Problems Solved",
    sublabel: "Skillrack",
    Icon: Code2,
  },
  {
    value: "150",
    suffix: "+",
    label: "Problems Solved",
    sublabel: "LeetCode",
    Icon: Trophy,
  },
  {
    value: "4",
    suffix: "",
    label: "Certificates",
    sublabel: "Skillrack",
    Icon: Award,
  },
  {
    value: "285",
    suffix: "",
    label: "Bronze Badges",
    sublabel: "Skillrack",
    Icon: BookMarked,
  },
];

// ─── Hackathon Data ───────────────────────────────────────────────
const hackathons = [
  {
    name: "AXIOS '25",
    role: "Participant",
    photo: "/hack1.jpg",
    description:
      "Participated in the 2nd edition of AXIOS, an Inter-Collegiate Technical Fest conducted by the Department of Applied Mathematics and Computational Sciences at PSG College of Technology on October 10 & 11.",
  },
  {
    name: "GenAI Hackathon",
    role: "Participant",
    photo: "/hack2.JPG",
    description:
      "Participated in the GenAI Hackathon organized under the FutureSkills Prime initiative by Nasscom and the Ministry of Electronics & Information Technology, Government of India (Dec 2025).",
  },
];

// ─── CountUp ─────────────────────────────────────────────────────
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200"
        aria-label="Close preview"
      >
        <X className="h-5 w-5" />
      </button>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
        <p className="text-center text-xs font-mono text-white/40 mt-3 tracking-wide">
          {alt} &nbsp;·&nbsp; Tap outside or press Esc to close
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────
export default function Achievements() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section
      id="achievements"
      className="relative py-20 md:py-28 bg-primary border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 border-b border-white/[0.06] pb-6"
        >
          <p className="section-label">07 / Benchmarks</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none">
            Achievements
          </h2>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/[0.07] bg-card p-5 relative overflow-hidden hover:border-white/[0.13] shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Top orange line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-accent/50 to-transparent" />

              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg mb-4 bg-accent/08 border border-accent/20 text-accent">
                <stat.Icon className="h-4 w-4" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold font-display text-accent leading-none mb-1 select-none">
                <CountUp target={parseInt(stat.value)} suffix={stat.suffix} />
              </div>
              <p className="text-[11px] font-medium text-white mt-1">{stat.label}</p>
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hackathons & Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-text-muted mb-6">
            Hackathons &amp; Competitions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {hackathons.map((h, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/[0.07] bg-card relative overflow-hidden group hover:border-white/[0.13] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                {/* Orange accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-accent/50 to-transparent z-10" />

                {/* Text body */}
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-base font-bold font-display text-white leading-snug">
                        {h.name}
                      </h4>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block w-fit bg-accent/08 border border-accent/20 text-accent">
                        {h.role}
                      </span>
                    </div>
                    <Trophy className="h-4 w-4 shrink-0 mt-1 text-accent" />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {h.description}
                  </p>
                </div>

                {/* Photo */}
                <div className="flex flex-col mt-auto border-t border-white/[0.05]">
                  <div
                    className="relative w-full h-[200px] overflow-hidden rounded-b-2xl flex-shrink-0 cursor-zoom-in group/img bg-black/20"
                    onClick={() => openLightbox(h.photo, `${h.name} Photo`)}
                    title="Click to view full photo"
                  >
                    <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/25">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/15 backdrop-blur-sm">
                        <ZoomIn className="h-4 w-4 text-white" />
                        <span className="text-xs font-mono text-white font-medium">View photo</span>
                      </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={h.photo}
                      alt={`${h.name} Photo`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </section>
  );
}
