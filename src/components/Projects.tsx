"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "ai" | "fullstack";
  technologies: string[];
  problem?: string;
  keyFeatures?: string[];
  liveDemo?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "StudyMate – AI-Powered PDF Learning Assistant",
    description:
      "An intelligent PDF analysis application powered by IBM's Granite 3.2 2B Instruct model providing PDF Q&A, summarization, explanation, quiz generation, and translation.",
    category: "ai",
    technologies: ["Python", "Flask", "IBM Granite 3.2", "Hugging Face", "PyPDF", "CUDA"],
    github: "https://github.com/mukeshs2024/StudyMate-",
    problem:
      "Students and researchers struggle to digest massive PDF documents quickly and self-assess their understanding without reading page-by-page.",
    keyFeatures: [
      "PDF Q&A and summarizing using IBM Granite 3.2 2B Instruct",
      "Automated quiz generation and concept explanations",
      "PDF translation and study topic suggestions",
    ],
    liveDemo: "https://github.com/mukeshs2024/StudyMate-",
  },
  {
    id: "2",
    title: "Online Healthcare Platform & Virtual Consultation",
    description:
      "A healthcare portal for scheduling doctor slots and managing secure patient medical records with JWT authentication.",
    category: "fullstack",
    technologies: ["Spring Boot", "PostgreSQL", "REST APIs", "Hibernate", "JWT"],
    github: "https://github.com/naveen-637",
    problem:
      "Appointment coordination delays and insecure medical record handling make traditional healthcare portals unreliable for real-world use.",
    keyFeatures: [
      "Secure scheduling and role-based access",
      "JWT-protected APIs for patient and doctor workflows",
      "Reliable record storage backed by PostgreSQL",
    ],
    liveDemo: "https://github.com/naveen-637",
  },
  {
    id: "3",
    title: "ExportReady – AI Export Platform",
    description:
      "An AI analytics platform for MSMEs estimating market compliance and profitability metrics with regression modeling.",
    category: "ai",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Regression Modeling"],
    github: "https://github.com/naveen-637",
    problem:
      "MSMEs face complex compliance and shipping cost decisions, often resulting in uncalculated risk and avoidable losses.",
    keyFeatures: [
      "Predictive estimations for logistics and compliance readiness",
      "Analytics dashboards for scenario-based decisions",
      "Data pipelines built with Pandas + Scikit-Learn",
    ],
    liveDemo: "https://github.com/naveen-637",
  },
];

function CategoryBadge({ category }: { category: "ai" | "fullstack" }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border border-accent/25 bg-accent/08 text-accent">
      {category === "ai" ? "AI Project" : "Full Stack"}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-3xl border border-white/[0.07] bg-card overflow-hidden hover:border-accent/20 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full min-h-[360px]"
    >
      <div className="p-6 flex flex-col justify-between h-full flex-grow">
        <div>
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <CategoryBadge category={project.category} />
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-8 w-8 rounded-xl border border-white/[0.09] bg-elevated text-text-muted hover:text-white hover:border-white/15 transition-all duration-200"
                aria-label={`${project.title} GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-white text-lg sm:text-xl leading-[1.2] mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Footer section (tech stacks and links) */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/[0.07] text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.04]">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white/80 hover:text-white text-xs font-mono font-medium transition-all duration-200"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Case Study
            </Link>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-accent hover:bg-accent-dim text-white text-xs font-mono font-bold transition-all duration-200 shimmer-btn"
              >
                Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-elevated border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="section-label">05 / Portfolio</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-white/[0.05] pb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none">
              Featured <span className="text-accent">Projects</span>
            </h2>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-card border border-white/[0.07] self-start lg:self-auto">
              {(["all", "ai", "fullstack"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "text-[10px] px-4 py-2 rounded-full font-semibold transition-all duration-200 font-mono",
                    filter === cat
                      ? "bg-accent text-white"
                      : "text-text-muted hover:text-white bg-transparent"
                  )}
                >
                  {cat === "all" ? "ALL" : cat === "ai" ? "AI" : "FULLSTACK"}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-text-muted font-mono text-sm">No projects in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/naveen-637"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] text-text-muted hover:text-white hover:border-white/15 text-xs font-mono font-medium transition-all duration-200"
          >
            <Github className="h-4 w-4" />
            View all projects on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
