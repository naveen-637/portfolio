"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Zap, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-primary border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="section-label">01 / Story</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Left — Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="p-8 rounded-2xl bg-card border border-white/[0.07] flex-1 flex flex-col justify-between hover:border-white/[0.12] shadow-card hover:shadow-card-hover transition-all duration-300">
              <div className="space-y-5">
                <h3 className="text-xl font-bold font-display text-white leading-snug">
                  Building at the intersection of AI and Software
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I&apos;m a final-year B.Tech student in Artificial Intelligence &amp; Data Science at Sri Eshwar College of Engineering. I build software that&apos;s actually useful — combining machine learning workflows with full-stack development to solve real problems.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  From NLP pipelines to Spring Boot backends, I focus on shipping clean, maintainable code. I&apos;m drawn to projects where the hard problem is the product decision, not just the implementation.
                </p>
              </div>

              {/* College Info */}
              <div className="space-y-3 pt-6 border-t border-white/[0.06] mt-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">College</span>
                  <a
                    href="https://sece.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent hover:text-accent-dim transition-colors"
                  >
                    Sri Eshwar College of Engineering
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Degree</span>
                  <span className="text-sm font-semibold text-white">
                    B.Tech Artificial Intelligence &amp; Data Science
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">CGPA</span>
                  <span className="text-sm font-bold text-accent">7.11 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="space-y-4"
          >
            {/* Machine Learning */}
            <div className="p-5 rounded-2xl bg-card border border-white/[0.07] hover:border-accent/20 hover:bg-elevated shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4 group cursor-default">
              <div className="p-2.5 bg-elevated border border-white/[0.07] rounded-xl shrink-0 group-hover:border-accent/25 transition-all">
                <Brain className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold font-display text-white mb-1.5 group-hover:text-accent transition-colors text-[15px]">
                  Machine Learning &amp; AI
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Building ML pipelines, NLP systems, and data analytics workflows using Python, Scikit-Learn, and Pandas.
                </p>
              </div>
            </div>

            {/* Full Stack */}
            <div className="p-5 rounded-2xl bg-card border border-white/[0.07] hover:border-accent/20 hover:bg-elevated shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4 group cursor-default">
              <div className="p-2.5 bg-elevated border border-white/[0.07] rounded-xl shrink-0 group-hover:border-accent/25 transition-all">
                <Code2 className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold font-display text-white mb-1.5 group-hover:text-accent transition-colors text-[15px]">
                  Full Stack Development
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Designing and building end-to-end web applications with Spring Boot, PostgreSQL, REST APIs, and modern frontend stacks.
                </p>
              </div>
            </div>

            {/* DSA */}
            <div className="p-5 rounded-2xl bg-card border border-white/[0.07] hover:border-accent/20 hover:bg-elevated shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4 group cursor-default">
              <div className="p-2.5 bg-elevated border border-white/[0.07] rounded-xl shrink-0 group-hover:border-accent/25 transition-all">
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold font-display text-white mb-1.5 group-hover:text-accent transition-colors text-[15px]">
                  DSA &amp; Problem Solving
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  1150+ problems on Skillrack, 150+ on LeetCode. Comfortable with complex algorithms, optimization, and competitive-style challenges.
                </p>
              </div>
            </div>

            {/* Learning */}
            <div className="p-5 rounded-2xl bg-card border border-white/[0.07] hover:border-accent/20 hover:bg-elevated shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4 group cursor-default">
              <div className="p-2.5 bg-elevated border border-white/[0.07] rounded-xl shrink-0 group-hover:border-accent/25 transition-all">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold font-display text-white mb-1.5 group-hover:text-accent transition-colors text-[15px]">
                  Always Learning
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Currently exploring LLM application development, prompt engineering, and the intersection of AI with product design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
