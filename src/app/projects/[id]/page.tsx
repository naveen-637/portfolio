import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaChevronLeft, FaExternalLinkAlt } from "react-icons/fa";
import { Code, BookOpen, AlertTriangle, Lightbulb, Map, Milestone } from "lucide-react";
import { cn } from "@/utils/cn";

interface ProjectDetails {
  id: string;
  title: string;
  category: string;
  tech: string[];
  date: string;
  problem: string;
  architecture: string;
  challenges: string;
  solution: string;
  futureScope: string;
  learningOutcomes: string[];
  github: string;
  demo: string;
  gradient: string;
}

const projectsMap: Record<string, ProjectDetails> = {
  "1": {
    id: "1",
    title: "StudyMate: AI-Powered PDF Learning Assistant",
    category: "AI & Natural Language Processing",
    tech: ["Python", "Flask", "IBM Granite 3.2", "Hugging Face", "PyPDF", "CUDA", "NLP"],
    date: "2025",
    problem: "Students and researchers face cognitive fatigue when digesting large PDFs, generating practice questions, translating papers, and verifying conceptual details manually.",
    architecture: "Flask server orchestrates document loading via PyPDF, feeds chunks into IBM Granite 3.2 2B Instruct running locally with Hugging Face transformers, and outputs contextually accurate completions for interactive learning workflows.",
    challenges: "Running a 2B parameter LLM locally on client machines with limited memory capacity. We optimized hardware utilization by recommending PyTorch CUDA execution paths and parameter caching, lowering VRAM consumption.",
    solution: "An interactive educational dashboard offering targeted document Q&A, comprehensive summaries, multi-choice quiz generation, and in-browser translation.",
    futureScope: "Deploying model pipelines with vLLM for high-concurrency environments and adding vector store indexing (RAG) for multi-document research queries.",
    learningOutcomes: [
      "Mastered local LLM deployment using Hugging Face Transformers and Granite architectures.",
      "Designed conversational retrieval prompts and response schemas for quiz generation.",
      "Integrated PyPDF text extraction and cleaning pipelines with web dashboard state."
    ],
    github: "https://github.com/mukeshs2024/StudyMate-",
    demo: "https://github.com/mukeshs2024/StudyMate-",
    gradient: "from-accent-cyan to-accent-blue",
  },
  "2": {
    id: "2",
    title: "Online Healthcare Platform & Virtual Consultation",
    category: "Full Stack Development",
    tech: ["Spring Boot", "PostgreSQL", "REST APIs", "Hibernate", "JPA", "JWT", "Java"],
    date: "2025",
    problem: "Traditional healthcare portals suffer from appointment coordination lags and insecure medical record handling, which exposes sensitive health logs to potential leak vulnerabilities.",
    architecture: "Built as a decoupled REST backend. Client queries route through security filters to verify JSON Web Tokens (JWT). Spring JPA Hibernate abstracts queries to a secure PostgreSQL database layout, maintaining role-based directory control.",
    challenges: "Synchronizing double-booked calendar slots securely in high-traffic clinical operations. We resolved this by designing transactional row-locking properties inside PostgreSQL database schemas, preventing concurrency booking overlaps.",
    solution: "A production-grade Java enterprise portal supporting secure scheduling and Doctor consultation slot allocations. Incorporates strict security role validations to protect medical health histories.",
    futureScope: "Integrating video slots directly via WebRTC API tunnels, and automating billing audits using custom payment gateway endpoints.",
    learningOutcomes: [
      "Deep understanding of secure JWT tokens and role validations in Spring Security.",
      "Mastered PostgreSQL relational database index design and transactional locks.",
      "Developed modular REST APIs with clear endpoint response payloads."
    ],
    github: "https://github.com/naveen-637",
    demo: "https://github.com/naveen-637",
    gradient: "from-accent-blue to-accent-purple",
  },
  "3": {
    id: "3",
    title: "ExportReady: Market Intelligence Platform",
    category: "AI & Data Analytics",
    tech: ["Python", "Pandas", "Scikit-Learn", "Data Analytics", "Regression Modeling", "Market Intelligence"],
    date: "2025",
    problem: "Small and Medium Enterprises (MSMEs) face complex regulatory barriers, tariff sheets, and shipping cost structures when planning to trade products internationally, often leading to uncalculated business losses.",
    architecture: "Data pipelines ingest tariff schemas and container routes into Pandas structures. Predictive models output margin estimations, and compliance parsers dynamically format import/export document checklists depending on target country rules.",
    challenges: "Handling sparse and missing international logistics shipping logs. We designed regression models with feature-imputation algorithms to predict logistics costs with low margins of deviation.",
    solution: "An intelligence dashboard displaying shipping route calculations, compliance checklists, and demand forecasting charts to help businesses confidently evaluate cross-border target markets.",
    futureScope: "Automating customs classification classifications using generative LLMs, and adding real-time freight pricing index sync feeds.",
    learningOutcomes: [
      "Mastered data wrangling and cleaning workflows on Pandas.",
      "Designed and optimized predictive regression models on Scikit-Learn.",
      "Understood global shipping container routes and custom tax logistics."
    ],
    github: "https://github.com/naveen-637",
    demo: "https://github.com/naveen-637",
    gradient: "from-accent-blue to-accent-purple",
  }
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projectsMap[id];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary text-text-primary py-16 relative overflow-hidden">
      {/* Soft gradient accent decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-20">
        {/* Navigation Breadcrumb */}
        <div className="max-w-4xl mx-auto mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors py-2"
          >
            <FaChevronLeft className="h-3 w-3 text-accent-blue" />
            Back to Engineering Showcase
          </Link>
        </div>

        {/* Project Profile Header Box */}
        <div className="max-w-4xl mx-auto bg-white border border-border rounded-3xl p-6 md:p-10 mb-10 relative overflow-hidden shadow-sm">
          <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", project.gradient)} />
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest block mb-1">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold font-display text-text-primary tracking-tight">
                {project.title}
              </h1>
              <span className="text-xs font-mono text-text-secondary mt-2 block">
                DEVELOPMENT STAGE: COMPLETED &bull; {project.date}
              </span>
            </div>

            {/* Connection Actions */}
            <div className="flex gap-3 shrink-0 w-full md:w-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border hover:border-text-secondary text-text-primary font-semibold text-xs transition-colors shadow-sm"
              >
                <FaGithub className="h-4 w-4" />
                Repository
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-hover text-white font-extrabold text-xs shadow-sm transition-colors"
              >
                Launch Demo
                <FaExternalLinkAlt className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Spec Stack */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Details block */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Problem Statement */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-mono font-bold text-accent-blue uppercase tracking-widest flex items-center gap-2 mb-4">
                <AlertTriangle className="h-4.5 w-4.5" />
                Problem Statement
              </h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            {/* Architecture Details */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest flex items-center gap-2 mb-4">
                <Map className="h-4.5 w-4.5" />
                Solution Architecture
              </h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed font-light mb-4">
                {project.architecture}
              </p>
              
              {/* Architecture schema placeholder box */}
              <div className="p-4 rounded-xl bg-primary border border-border font-mono text-[10px] text-text-secondary shadow-inner">
                <span className="text-[9px] font-bold text-accent-purple block mb-1.5 uppercase">SYSTEM FLOW:</span>
                {project.id === "1" ? "PDF DOCUMENT -> PYPDF EXTRACTOR -> IBM GRANITE LLM -> INTERACTIVE LEARNING UI" : project.id === "2" ? "CLIENT JWT -> SECURITY FILTER -> SPRING JPA -> DB ROW LOCKS" : "EXPORTS DATA -> PANDAS PIPELINE -> REGRESSION FORECASTER -> COMPLIANCE CHECKLIST"}
              </div>
            </div>

            {/* Challenges & Solution */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-mono font-bold text-accent-blue uppercase tracking-widest flex items-center gap-2 mb-4">
                <Lightbulb className="h-4.5 w-4.5" />
                Challenges & Solutions
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[10px] font-mono text-accent-purple uppercase tracking-wider block mb-1">
                    The Challenge
                  </span>
                  <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="text-[10px] font-mono text-accent-blue uppercase tracking-wider block mb-1">
                    The Engineering Solution
                  </span>
                  <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-mono font-bold text-accent-purple uppercase tracking-widest flex items-center gap-2 mb-4">
                <BookOpen className="h-4.5 w-4.5" />
                Learning Outcomes
              </h3>
              <div className="flex flex-col gap-3">
                {project.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-text-secondary font-light">
                    <div className="h-2 w-2 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar block */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Tech Stack checklist */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h4 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
                System Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-primary border border-border text-accent-blue font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Scope */}
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-bold font-display text-text-primary mb-3 flex items-center gap-1.5">
                <Milestone className="h-4.5 w-4.5 text-accent-purple" />
                Future Scope
              </h4>
              <p className="text-text-secondary text-xs leading-relaxed font-light">
                {project.futureScope}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
