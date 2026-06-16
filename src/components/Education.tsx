"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  metric: string;
  metricLabel: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.Tech Artificial Intelligence & Data Science",
    duration: "2024 – 2028",
    metric: "7.11 CGPA",
    metricLabel: "Current Standing",
    description: "Focusing on data structures, algorithmic workflows, database systems, and machine learning structures.",
  },
  {
    institution: "P.A. Vidya Bhavan Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "Completed 2024",
    metric: "79.16%",
    metricLabel: "State Board Examination",
    description: "Core coursework: Advanced Mathematics, Physics, Chemistry, and Computer Science.",
  },
  {
    institution: "P.A. Vidya Bhavan Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "Completed 2022",
    metric: "92.4%",
    metricLabel: "State Board Examination",
    description: "General school curriculum with specialization in Mathematics and Sciences.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28 bg-primary border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="section-label">02 / Academics</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none">
            Education Pathway
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl relative pl-6 md:pl-12 flex flex-col gap-8">
          {/* Vertical line — clean charcoal */}
          <div className="absolute left-0 top-2 bottom-2 w-[1.5px] bg-white/[0.08]" />

          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-4 h-6 w-6 rounded-full bg-elevated border-2 border-accent flex items-center justify-center z-10">
                <GraduationCap className="h-3.5 w-3.5 text-accent" />
              </div>

              {/* Card */}
              <div className="bg-card border border-white/[0.07] hover:border-white/[0.12] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted mb-2">
                    <span className="font-semibold text-accent/80 text-[13px]">
                      {item.institution}
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="flex items-center gap-1.5 font-mono">
                      <Calendar className="h-3 w-3" />
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-display text-white mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metric */}
                <div className="flex flex-col items-start md:items-end px-4 py-3 rounded-xl bg-elevated border border-white/[0.06] min-w-[140px] shrink-0">
                  <div className="flex items-center gap-1.5 text-accent font-mono font-bold text-base">
                    <Award className="h-4 w-4" />
                    {item.metric}
                  </div>
                  <span className="text-[10px] text-text-muted font-mono uppercase tracking-wider mt-0.5">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
