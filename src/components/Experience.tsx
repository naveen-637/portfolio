"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

interface RoleDetails {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

const experienceData: RoleDetails[] = [
  {
    company: "MERN Stack Developer Internship",
    role: "Full Stack Developer Intern",
    duration: "2025",
    location: "Remote / Hybrid",
    highlights: [
      "Designed and implemented responsive and highly interactive user interfaces using React.js, improving client-side responsiveness and engagement.",
      "Engineered high-performance RESTful APIs with Node.js and Express.js to handle secure transaction workflows and data routing.",
      "Optimized MongoDB data schemas and aggregation pipelines, ensuring low-latency search and high query throughput.",
      "Managed application deployments on cloud platforms, implementing secure routing protocols and environment pipelines.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Cloud Deployment", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 bg-primary border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="section-label">04 / Timeline</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl relative pl-6 md:pl-12 flex flex-col gap-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-[1.5px] bg-white/[0.08]" />

          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Node */}
              <div className="absolute -left-[31px] md:-left-[55px] top-6 h-6 w-6 rounded-full bg-elevated border-2 border-accent flex items-center justify-center z-10">
                <Briefcase className="h-3.5 w-3.5 text-accent" />
              </div>

              {/* Card */}
              <div className="bg-card border border-white/[0.07] hover:border-white/[0.12] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Orange top accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-accent/60 to-transparent" />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-elevated border border-white/[0.07] flex items-center justify-center text-accent shrink-0">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-display text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-text-secondary mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-text-muted">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-elevated border border-white/[0.06]">
                      <Calendar className="h-3 w-3 text-accent" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-elevated border border-white/[0.06]">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-3 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-5 border-t border-white/[0.06]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted mb-3 block">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-3 py-1 rounded-md bg-elevated border border-white/[0.06] text-white/60 font-mono hover:text-accent hover:border-accent/25 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
