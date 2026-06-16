"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Phone, Mail, Award, CheckCircle, ExternalLink, Copy, Check } from "lucide-react";
import ResumeActions from "@/components/ResumeActions";
import { cn } from "@/utils/cn";

export default function RecruiterQuickView() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("naveenkumar.p2024aids@sece.ac.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "CGPA", value: "7.11 / 10", color: "text-accent-cyan" },
    { label: "LeetCode", value: "150+ Solved", color: "text-accent-purple" },
    { label: "Skillrack", value: "1.1K+ Solved", color: "text-accent-blue" },
    { label: "Work Style", value: "Full Stack / AI", color: "text-yellow-500" },
  ];

  return (
    <section id="quickview" className="relative py-12 bg-primary overflow-hidden border-t border-white/[0.04] z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-accent-cyan">
            <div className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
            <span>RECRUITER CONTROL CENTER &bull; 30-SECOND SUMMARIES</span>
          </div>

          {/* Quick View Dashboard Box */}
          <div className="glass-premium border-white/[0.08] hover:border-white/12 rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-300">
            {/* Top border ambient glow */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Profile Block Column */}
              <div className="md:col-span-5 flex flex-col justify-between h-full gap-6">
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                    Candidate Profile
                  </span>
                  <h3 className="text-3xl font-black font-display text-white tracking-tight">
                    NAVEENKUMAR P
                  </h3>
                  <p className="text-xs text-accent-cyan font-mono mt-1 font-semibold">
                    B.Tech AI & Data Science Student
                  </p>
                  <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">
                    Sri Eshwar College of Engineering (Batch: 2024 – 2028). An engineer in progress focused on linking backend APIs with intelligent prompt systems.
                  </p>
                </div>

                {/* Connection Controls */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.04]">
                  <a
                    href="mailto:naveenkumar.p2024aids@sece.ac.in"
                    className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/5 border border-white/[0.04] hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-accent-cyan" />
                      Email Link
                    </span>
                    <span className="font-mono text-[10px] text-gray-500">naveenkumar.p2024aids@...</span>
                  </a>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 border border-white/[0.04] hover:bg-white/10 text-gray-300 text-xs transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-400" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-gray-500" />
                          Copy Email
                        </>
                      )}
                    </button>
                    <a
                      href="tel:8825568542"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 border border-white/[0.04] hover:bg-white/10 text-gray-300 text-xs transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-gray-500" />
                      Call Direct
                    </a>
                  </div>
                </div>
              </div>

              {/* Stack Details Columns */}
              <div className="md:col-span-7 flex flex-col gap-6">
                {/* Stats Panel */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/[0.04] text-center">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">
                        {s.label}
                      </span>
                      <strong className={cn("text-base md:text-lg font-bold font-mono", s.color)}>
                        {s.value}
                      </strong>
                    </div>
                  ))}
                </div>

                {/* Stack overview */}
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">
                    Technical Stack Overview
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "Spring Boot", "C++", "DSA", "Java", "SQL", "React", "MongoDB", "Figma"].map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/[0.04] text-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick actions CTAs */}
                <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.04]">
                  <ResumeActions />
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
                  >
                    Schedule Interview
                    <ExternalLink className="h-3.5 w-3.5 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
