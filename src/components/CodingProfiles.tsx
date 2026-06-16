"use client";

import { Trophy, CheckCircle, ExternalLink, Calendar, HelpCircle, Flame } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

interface ProfileStats {
  solved: number;
  total: number;
  badges: string;
  certificates: number;
  link: string;
}

export default function CodingProfiles() {
  return (
    <section id="coding" className="relative py-24 bg-primary overflow-hidden border-t border-white/[0.04] z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="flex flex-col mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-purple">
              11 / METRICS
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 font-display text-gradient">
              CODING PROFILES ANALYTICS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-8">
            {/* LeetCode Card Block */}
            <div className="glass-premium border-white/[0.06] hover:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                      <SiLeetcode className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-display text-white">LeetCode</h4>
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">u/naveen63</span>
                    </div>
                  </div>
                  <a
                    href="https://leetcode.com/u/naveen63/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors interactive"
                    aria-label="LeetCode Profile URL"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Counter and Progress bar loops */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="h-24 w-24 rounded-full border-4 border-orange-500/20 flex flex-col items-center justify-center shrink-0">
                    <span className="text-2xl font-black font-mono text-white">150+</span>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wide">Solved</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-3">
                    {/* Easy */}
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                        <span>Easy</span>
                        <span>70 / Solved</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "50%" }} />
                      </div>
                    </div>
                    
                    {/* Medium */}
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                        <span>Medium</span>
                        <span>65 / Solved</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: "45%" }} />
                      </div>
                    </div>

                    {/* Hard */}
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                        <span>Hard</span>
                        <span>15 / Solved</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: "25%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5 text-orange-500" />
                  Active solving patterns
                </span>
                <span>Top 25% ranking</span>
              </div>
            </div>

            {/* Skillrack Card Block */}
            <div className="glass-premium border-white/[0.06] hover:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                      <FaCode className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-display text-white">Skillrack</h4>
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">u/514484</span>
                    </div>
                  </div>
                  <a
                    href="http://www.skillrack.com/profile/514484/9953f1a59e3dd5e61a16d277294d7a18f0da277c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors interactive"
                    aria-label="Skillrack Profile URL"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Stats indicators */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/[0.04]">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">Solved Problems</span>
                    <strong className="text-lg font-bold font-mono text-white mt-1 block">1,150+</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/[0.04]">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">Bronze Medals</span>
                    <strong className="text-lg font-bold font-mono text-yellow-500 mt-1 block">285 Badges</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/[0.04]">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">Certificates Earned</span>
                    <strong className="text-lg font-bold font-mono text-accent-cyan mt-1 block">4 Verified</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/[0.04]">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">Growth Rate</span>
                    <strong className="text-lg font-bold font-mono text-accent-purple mt-1 block">30% Monthly</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Trophy className="h-3.5 w-3.5 text-accent-cyan" />
                  Skillrack Certified Dev
                </span>
                <span>Silver Badges: 85+</span>
              </div>
            </div>
          </div>

          {/* Growth & Learning milestones dashboard line */}
          <div className="glass-premium border-white/[0.06] rounded-3xl p-6">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-4">
              Growth Journey Milestones
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative pl-4 border-l border-white/[0.06] sm:pl-0 sm:border-l-0 sm:flex sm:justify-between">
              {/* Year 2024 */}
              <div className="relative pl-6 sm:pl-0">
                <div className="absolute -left-[30px] sm:-left-3 top-1.5 h-2 w-2 rounded-full bg-accent-cyan" />
                <span className="text-xs font-mono font-bold text-white">Year 2024</span>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-light max-w-xs">
                  Initial coding path start. Solved 250+ introductory programming algorithms on C and C++ stacks.
                </p>
              </div>

              {/* Year 2025 */}
              <div className="relative pl-6 sm:pl-0">
                <div className="absolute -left-[30px] sm:-left-3 top-1.5 h-2 w-2 rounded-full bg-accent-purple" />
                <span className="text-xs font-mono font-bold text-white">Year 2025</span>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-light max-w-xs">
                  Explored OOP structures, Spring Boot configurations, and web API hooks. Solved 680+ problems.
                </p>
              </div>

              {/* Year 2026 */}
              <div className="relative pl-6 sm:pl-0">
                <div className="absolute -left-[30px] sm:-left-3 top-1.5 h-2 w-2 rounded-full bg-accent-blue" />
                <span className="text-xs font-mono font-bold text-white">Year 2026 (YTD)</span>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-light max-w-xs">
                  Deep dived into AI modeling frameworks, vector databases, and python pipelines. Solved 370+ problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
