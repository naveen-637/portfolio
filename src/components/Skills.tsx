"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

// ─── Simple Icons (brand logos) ─────────────────────────────────────────────
import {
  SiPython,
  SiOpenjdk,        // Java
  SiCplusplus,
  SiC,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiSpringboot,
  SiJavascript,
  SiHtml5,
  SiCss,            // CSS3
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiJupyter,
  SiFigma,
  SiGnubash,        // Terminal/CLI
} from "react-icons/si";

// ─── Tabler Icons (concepts & fallbacks) ────────────────────────────────────
import {
  TbSql,
  TbBrain,
  TbChartBar,
  TbApi,
  TbCode,
  TbDatabase,
  TbCpu,
  TbNetwork,
  TbBook,
  TbPresentation,
  TbDeviceDesktopCode,
} from "react-icons/tb";

// ─── Skill type ─────────────────────────────────────────────────────────────
type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillGroup = {
  id: string;
  label: string;
  number: string;
  skills: Skill[];
  wide?: boolean;
};

// ─── Skill data with official brand colors ───────────────────────────────────
const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    number: "01",
    wide: true,
    skills: [
      { name: "Python",  icon: SiPython,   color: "#3776AB" },
      { name: "Java",    icon: SiOpenjdk,  color: "#ED8B00" },
      { name: "C++",     icon: SiCplusplus,color: "#00599C" },
      { name: "C",       icon: SiC,        color: "#A8B9CC" },
      { name: "SQL",     icon: TbSql,      color: "#F29111" },
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    number: "02",
    skills: [
      { name: "Scikit-Learn",   icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas",         icon: SiPandas,      color: "#E70488" },
      { name: "NumPy",          icon: SiNumpy,       color: "#4DABCF" },
      { name: "NLP",            icon: TbBrain,       color: "#A78BFA" },
      { name: "Data Analytics", icon: TbChartBar,    color: "#34D399" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    number: "03",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "REST APIs",   icon: TbApi,        color: "#60A5FA" },
      { name: "JavaScript",  icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML",        icon: SiHtml5,      color: "#E34F26" },
      { name: "CSS",         icon: SiCss,        color: "#1572B6" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    number: "04",
    skills: [
      { name: "MySQL",      icon: SiMysql,      color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB",    icon: SiMongodb,    color: "#47A248" },
      { name: "Firebase",   icon: SiFirebase,   color: "#FFCA28" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    number: "05",
    skills: [
      { name: "GitHub",          icon: SiGithub,        color: "#ffffff"  },
      { name: "VS Code",         icon: TbDeviceDesktopCode, color: "#007ACC" },
      { name: "Jupyter Notebook",icon: SiJupyter,       color: "#F37626"  },
      { name: "Tableau",         icon: TbPresentation,  color: "#E97627"  },
      { name: "Figma",           icon: SiFigma,         color: "#F24E1E"  },
    ],
  },
  {
    id: "concepts",
    label: "Core Concepts",
    number: "06",
    wide: true,
    skills: [
      { name: "DSA",               icon: TbCode,     color: "#FF7A00" },
      { name: "OOP",               icon: TbBook,     color: "#FF7A00" },
      { name: "DBMS",              icon: TbDatabase, color: "#FF7A00" },
      { name: "Operating Systems", icon: TbCpu,      color: "#FF7A00" },
      { name: "Computer Networks", icon: TbNetwork,  color: "#FF7A00" },
    ],
  },
];

// ─── Single Skill Chip ───────────────────────────────────────────────────────
function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.span
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.22, delay: index * 0.04, ease: "easeOut" }}
      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-md
        bg-white/[0.04] border border-white/[0.07]
        text-[13px] font-medium text-white/80
        hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white
        transition-all duration-150 cursor-default select-none"
    >
      <Icon
        className="h-[15px] w-[15px] shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ color: skill.color }}
      />
      {skill.name}
    </motion.span>
  );
}

// ─── Skill Card (bento cell) ─────────────────────────────────────────────────
function SkillCard({ group, delay }: { group: SkillGroup; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border border-white/[0.07] bg-card p-6 flex flex-col gap-4
        hover:border-white/[0.12] shadow-card hover:shadow-card-hover transition-all duration-300
        ${group.wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold font-display text-white tracking-wide">
          {group.label}
        </h3>
        <span className="text-[10px] font-mono text-white/20">{group.number}</span>
      </div>
      <div className="h-px w-full bg-white/[0.05]" />
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <SkillChip key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function Skills() {
  const total = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 bg-primary border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="section-label">03 / Skills &amp; Tools</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none">
              Technical Stack
            </h2>
            <p className="text-sm text-text-muted font-light max-w-xs sm:text-right leading-relaxed">
              {skillGroups.length} categories &middot; {total} technologies
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard group={skillGroups[0]} delay={0.00} />  {/* Languages — wide */}
          <SkillCard group={skillGroups[1]} delay={0.06} />  {/* AI & Data */}
          <SkillCard group={skillGroups[2]} delay={0.12} />  {/* Backend */}
          <SkillCard group={skillGroups[3]} delay={0.18} />  {/* Databases */}
          <SkillCard group={skillGroups[4]} delay={0.24} />  {/* Tools */}
          <SkillCard group={skillGroups[5]} delay={0.30} />  {/* Core Concepts — wide */}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-[11px] font-mono text-white/20 tracking-wide"
        >
          Continuously expanding — currently deepening expertise in Generative AI &amp; System Design
        </motion.p>
      </div>
    </section>
  );
}
