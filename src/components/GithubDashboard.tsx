"use client";

import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { Terminal, FolderGit2, Calendar, GitCommit } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  color: string;
}

const topRepos: Repository[] = [
  {
    name: "StudyMate-",
    description: "AI-Powered PDF Learning Assistant providing Q&A, translation, and auto-quizzes using local IBM Granite models.",
    language: "Python",
    stars: 20,
    forks: 6,
    url: "https://github.com/mukeshs2024/StudyMate-",
    color: "bg-[#3572A5]",
  },
  {
    name: "virtual-healthcare-consultation",
    description: "Spring Boot server supporting schedule bookings and role-based record checks.",
    language: "Java",
    stars: 8,
    forks: 2,
    url: "https://github.com/naveen-637",
    color: "bg-[#b07219]",
  },
  {
    name: "ExportReady",
    description: "AI platform helping MSMEs estimate trade tariffs and profitability index models.",
    language: "Python",
    stars: 15,
    forks: 5,
    url: "https://github.com/naveen-637",
    color: "bg-[#3572A5]",
  },
];

export default function GithubDashboard() {
  // Generate random data for contribution grid calendar mapping
  const gridCells = Array.from({ length: 154 }).map((_, idx) => {
    const weights = [
      "bg-white/[0.02]", // none
      "bg-emerald-950",   // minimal
      "bg-emerald-800",   // medium
      "bg-emerald-600",   // high
      "bg-emerald-400"    // intense
    ];
    // Create logical contribution spikes
    let weightIndex = 0;
    if (idx % 3 === 0) weightIndex = 1;
    if (idx % 7 === 0) weightIndex = 2;
    if (idx % 11 === 0) weightIndex = 3;
    if (idx % 19 === 0) weightIndex = 4;
    return weights[weightIndex];
  });

  return (
    <section id="github" className="relative py-24 bg-primary overflow-hidden border-t border-white/[0.04] z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-accent-cyan">
                10 / SYNC LOG
              </span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 font-display text-gradient">
                GITHUB DEVELOPER PORTAL
              </h2>
            </div>
            <a
              href="https://github.com/naveen-637"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full glass border border-white/10 hover:border-white/20 text-white font-mono text-xs hover:bg-white/5 transition-all duration-300 interactive"
            >
              <FaGithub className="h-4 w-4" />
              github/naveen-637
            </a>
          </div>

          {/* GitHub Header Analytics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-premium border-white/[0.06] rounded-2xl p-5 text-center">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">
                Public Repositories
              </span>
              <strong className="text-2xl font-bold font-mono text-accent-cyan">18</strong>
            </div>
            <div className="glass-premium border-white/[0.06] rounded-2xl p-5 text-center">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">
                Total Commits (YTD)
              </span>
              <strong className="text-2xl font-bold font-mono text-accent-purple">540+</strong>
            </div>
            <div className="glass-premium border-white/[0.06] rounded-2xl p-5 text-center">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">
                Starred Projects
              </span>
              <strong className="text-2xl font-bold font-mono text-accent-blue">35</strong>
            </div>
            <div className="glass-premium border-white/[0.06] rounded-2xl p-5 text-center">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-1">
                Contributions
              </span>
              <strong className="text-2xl font-bold font-mono text-yellow-500">100% Active</strong>
            </div>
          </div>

          {/* Grid: Commit Calendar map and Repository list */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-8">
            {/* Contribution Graph Calendar Box */}
            <div className="md:col-span-8 glass-premium border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-4">
                  Contribution Calendar Graph
                </span>
                
                {/* SVG/Div grid simulating contributions calendar */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="grid grid-flow-col grid-rows-7 gap-1 shadow-inner overflow-x-auto">
                    {gridCells.map((cellClass, idx) => (
                      <div key={idx} className={`h-[9px] w-[9px] rounded-sm transition-colors duration-300 ${cellClass}`} />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 mt-3 px-1">
                    <span>Less commits</span>
                    <div className="flex items-center gap-1">
                      <div className="h-[9px] w-[9px] rounded-sm bg-white/[0.02]" />
                      <div className="h-[9px] w-[9px] rounded-sm bg-emerald-950" />
                      <div className="h-[9px] w-[9px] rounded-sm bg-emerald-800" />
                      <div className="h-[9px] w-[9px] rounded-sm bg-emerald-600" />
                      <div className="h-[9px] w-[9px] rounded-sm bg-emerald-400" />
                      <span>More commits</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 mt-6 pt-4 border-t border-white/[0.04]">
                <Calendar className="h-3.5 w-3.5" />
                <span>Continuous deployments synchronized successfully.</span>
              </div>
            </div>

            {/* Language distribution indicators */}
            <div className="md:col-span-4 glass-premium border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-5">
                  Language Contributions
                </span>

                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#3572A5]" />
                        Python
                      </span>
                      <span>45%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#3572A5]" style={{ width: "45%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#b07219]" />
                        Java
                      </span>
                      <span>30%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#b07219]" style={{ width: "30%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-gray-400 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#f1e05a]" />
                        JavaScript
                      </span>
                      <span>15%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f1e05a]" style={{ width: "15%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.04]">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  Verified Language Index
                </span>
              </div>
            </div>
          </div>

          {/* Repos list block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-premium border-white/[0.06] hover:border-white/12 rounded-2xl p-5 flex flex-col justify-between group interactive"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FolderGit2 className="h-4 w-4 text-accent-cyan" />
                    <h4 className="text-xs md:text-sm font-bold font-mono text-white group-hover:text-accent-cyan transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal font-light mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-gray-500 pt-3 border-t border-white/[0.04]">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${repo.color}`} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <FaStar className="h-3 w-3" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="h-3 w-3" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
