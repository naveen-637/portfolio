"use client";

import { motion } from "framer-motion";
import { Hammer, Circle, ArrowUpRight, Cpu, Terminal, Sparkles, Layers } from "lucide-react";
import { cn } from "@/utils/cn";

interface BuildingItem {
  title: string;
  category: string;
  status: "In Progress" | "Alpha testing" | "Planning Phase";
  progress: number;
  icon: React.ReactNode;
  description: string;
  tech: string[];
}

const buildingData: BuildingItem[] = [
  {
    title: "Agentic AI Orchestration Loops",
    category: "AI & Decision Engineering",
    status: "In Progress",
    progress: 75,
    icon: <Cpu className="h-4 w-4 text-accent-cyan" />,
    description: "Developing logic framework layers that enable LLMs to plan reasoning paths, execute python tools, and inspect outputs dynamically.",
    tech: ["Python", "OpenAI API", "LangChain", "JSON Schemas"],
  },
  {
    title: "AI Portfolio Assistant Interface",
    category: "RAG & Language Models",
    status: "Alpha testing",
    progress: 90,
    icon: <Sparkles className="h-4 w-4 text-accent-purple" />,
    description: "Constructing retrieval systems to parse resumes and documents to serve semantic answers to recruiter queries.",
    tech: ["Next.js", "Vector DB", "Embeddings", "Node.js"],
  },
  {
    title: "Enterprise Full Stack API Gateways",
    category: "Software Engineering",
    status: "In Progress",
    progress: 60,
    icon: <Layers className="h-4 w-4 text-accent-blue" />,
    description: "Assembling secure Java routing engines using Spring Security JWT rules and Postgres database relations.",
    tech: ["Spring Boot", "Spring Security", "PostgreSQL", "REST"],
  },
];

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="relative py-16 bg-primary overflow-hidden border-t border-white/[0.04] z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="flex flex-col mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-cyan">
              09 / WORK LOG
            </span>
            <h2 className="text-2xl md:text-4xl font-black mt-2 font-display text-gradient">
              CURRENTLY BUILDING
            </h2>
          </div>

          {/* Grid stack */}
          <div className="flex flex-col gap-6">
            {buildingData.map((item, idx) => (
              <div
                key={idx}
                className="glass-premium border-white/[0.06] hover:border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  {/* Info block */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <h4 className="text-base font-bold font-display text-white mt-0.5">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] px-2.5 py-1 rounded-full bg-white/5 border border-white/[0.04] text-gray-400 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status metrics progress block */}
                  <div className="flex flex-col items-start md:items-end p-4 rounded-xl bg-white/5 border border-white/[0.04] min-w-[170px] shrink-0">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
                      <span className="text-gray-300 font-semibold">{item.status}</span>
                    </div>

                    {/* Progress slider bar */}
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-3 relative">
                      <div
                        className="h-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    
                    <span className="text-[10px] font-mono text-gray-500 mt-2 block text-left md:text-right">
                      Completion: <strong>{item.progress}%</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
