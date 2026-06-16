"use client";

import { useState } from "react";
import { Download, Printer, GraduationCap, Code, Briefcase, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import ResumeActions from "@/components/ResumeActions";
import { useResumeAvailability } from "@/hooks/useResumeAvailability";

export default function ResumeSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const available = useResumeAvailability();
  const isMissing = available === false;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="relative py-16 md:py-20 bg-primary overflow-hidden border-t border-white/[0.04] z-20 print:p-0 print:bg-white print:text-black">
      <div className="container mx-auto px-6 print:p-0">
        <div className="max-w-4xl mx-auto print:max-w-full">
          {/* Section heading (Hidden during printing) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 print:hidden">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-accent-cyan">
                12 / DOCUMENT
              </span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 font-display text-gradient">
                PROFESSIONAL RESUME
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-colors interactive"
              >
                <Printer className="h-4 w-4" />
                Print Resume
              </button>

              <ResumeActions />
            </div>
          </div>

          {isMissing && (
            <p className="text-sm text-red-300 mt-3 print:hidden">
              Resume file is unavailable right now. Please try again later.
            </p>
          )}

          {/* Interactive Toggle for Screen Viewer (Hidden during printing) */}
          <div className="mb-6 flex justify-center print:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold hover:text-white hover:bg-white/10 transition-colors interactive"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 text-accent-cyan" />
                  Collapse Digital Resume Sheet
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 text-accent-cyan" />
                  Expand Digital Resume Sheet
                </>
              )}
            </button>
          </div>

          {/* Resume Page Layout Container */}
          <p className="text-xs text-gray-400 mt-3 print:hidden">
            Tap the resume preview below to download the PDF.
          </p>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 md:max-h-[3000px] md:opacity-100 opacity-0"
            } print:max-h-full print:opacity-100`}
          >
            <a
              href={isMissing ? undefined : "/resume/Naveenkumar_P_Resume.pdf"}
              download="Naveenkumar_Resume.pdf"
              aria-label="Download resume PDF"
              className="group block"
            >
              <div className="bg-card border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl relative print:p-0 print:border-none print:bg-white print:text-black print:shadow-none">
              {/* Corner Watermark */}
              <div className="absolute top-8 right-8 text-[9px] font-mono text-gray-500 border border-white/10 rounded-full px-3 py-1 uppercase print:hidden">
                ENGINEERING PROFILE
              </div>

              {/* Personal Header details */}
              <div className="text-center md:text-left border-b border-white/10 pb-8 mb-8 print:border-black/10 print:pb-4 print:mb-4">
                <h3 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight print:text-black">
                  NAVEENKUMAR P
                </h3>
                <p className="text-sm text-accent-cyan font-mono mt-1 font-semibold print:text-black">
                  B.Tech Artificial Intelligence & Data Science Student
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 font-mono text-[11px] text-gray-400 mt-4 print:text-black">
                  <span>Tel: 8825568542</span>
                  <span>Email: naveenkumar.p2024aids@sece.ac.in</span>
                  <span>Location: Tamil Nadu, India</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 font-mono text-[10px] text-gray-500 mt-2 print:text-black">
                  <span>github.com/naveen-637</span>
                  <span>linkedin.com/in/naveenkumar-p-bb76a4333</span>
                  <span>leetcode.com/u/naveen63/</span>
                </div>
              </div>

              {/* Core Resume Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:gap-4">
                {/* Left Primary Column: Experience & Projects */}
                <div className="md:col-span-8 flex flex-col gap-8 print:gap-4">
                  {/* Experience */}
                  <div>
                    <h4 className="text-sm font-bold font-display text-accent-cyan uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/5 pb-2 print:text-black print:border-black/10">
                      <Briefcase className="h-4 w-4" />
                      Work Experience
                    </h4>
                    
                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold font-display text-white mb-1 print:text-black">
                          <h5>MERN Stack Developer Intern</h5>
                          <span className="font-mono text-gray-500">2025</span>
                        </div>
                        <p className="text-[10px] font-mono text-gray-400 mb-2">Remote / Hybrid Internship</p>
                        <ul className="list-disc list-inside text-xs text-gray-300 flex flex-col gap-1.5 font-light leading-relaxed print:text-black">
                          <li>Developed and maintained full-stack web applications using MongoDB, Express, React, and Node.js.</li>
                          <li>Engineered clean user interfaces and modular client-side hooks.</li>
                          <li>Constructed database routing schemas and secured JWT API slot handlers.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-sm font-bold font-display text-accent-purple uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/5 pb-2 print:text-black print:border-black/10">
                      <Code className="h-4 w-4" />
                      Key Projects
                    </h4>

                    <div className="flex flex-col gap-6 print:gap-3">
                      {/* Project 1 */}
                      <div>
                        <div className="flex justify-between text-xs font-bold font-display text-white mb-1 print:text-black">
                          <h5>StudyMate: AI-Powered PDF Learning Assistant</h5>
                          <span className="font-mono text-[10px] text-accent-cyan">Python & LLM</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-light print:text-black">
                          Developed an intelligent document analysis system utilizing Flask and local IBM Granite 3.2 2B models to execute PDF Q&A, translation, and auto-quizzes.
                        </p>
                      </div>

                      {/* Project 2 */}
                      <div>
                        <div className="flex justify-between text-xs font-bold font-display text-white mb-1 print:text-black">
                          <h5>Online Healthcare Platform & Virtual Consultation</h5>
                          <span className="font-mono text-[10px] text-accent-purple">Spring Boot & Postgres</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-light print:text-black">
                          Constructed scheduling routers and security authorization policies using JPA Hibernate. Managed patient registration directories securely.
                        </p>
                      </div>

                      {/* Project 3 */}
                      <div>
                        <div className="flex justify-between text-xs font-bold font-display text-white mb-1 print:text-black">
                          <h5>ExportReady Market Intelligence Platform</h5>
                          <span className="font-mono text-[10px] text-accent-blue">AI & Data Analytics</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed font-light print:text-black">
                          Designed logistic pricing predictors and global trade rule parsers to help local MSMEs evaluate border compliance metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Education, Skills, Achievements */}
                <div className="md:col-span-4 flex flex-col gap-8 print:gap-4">
                  {/* Education */}
                  <div>
                    <h4 className="text-sm font-bold font-display text-accent-blue uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/5 pb-2 print:text-black print:border-black/10">
                      <GraduationCap className="h-4 w-4" />
                      Education
                    </h4>
                    
                    <div className="flex flex-col gap-4 print:gap-2">
                      <div>
                        <h5 className="text-xs font-bold font-display text-white print:text-black">Sri Eshwar College of Engineering</h5>
                        <p className="text-[10px] text-gray-400 font-light mt-0.5 print:text-black">B.Tech AI & Data Science (24 - 28)</p>
                        <span className="text-[10px] font-mono text-accent-cyan mt-1 block">CGPA: 7.11</span>
                      </div>
                      <div>
                        <h5 className="text-xs font-bold font-display text-white print:text-black">PA Vidya Bhavan HSS</h5>
                        <p className="text-[10px] text-gray-400 font-light mt-0.5 print:text-black">HSC State Board (2024) &bull; 79.16%</p>
                        <p className="text-[10px] text-gray-400 font-light mt-0.5 print:text-black">SSLC State Board (2022) &bull; 92.4%</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-bold font-display text-accent-cyan uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/5 pb-2 print:text-black print:border-black/10">
                      <Code className="h-4 w-4" />
                      Skills Inventory
                    </h4>
                    
                    <div className="flex flex-col gap-3 font-mono text-[10px] text-gray-300 print:text-black">
                      <div>
                        <span className="text-gray-500 block">LANGUAGES:</span>
                        <span>C, C++, Python, Java, SQL</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">WEB TECH:</span>
                        <span>HTML, CSS, JavaScript, Spring Boot</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">DATABASES:</span>
                        <span>MySQL, MongoDB, Firebase</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">CORE DSA:</span>
                        <span>Data Structures, Algorithms, OOPS</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-bold font-display text-accent-purple uppercase tracking-widest flex items-center gap-2 mb-4 border-b border-white/5 pb-2 print:text-black print:border-black/10">
                      <Trophy className="h-4 w-4" />
                      Benchmarks
                    </h4>
                    
                    <ul className="list-disc list-inside text-[11px] text-gray-300 flex flex-col gap-2 font-light print:text-black">
                      <li>LeetCode: 150+ problems solved.</li>
                      <li>Skillrack: 1150+ problems solved.</li>
                      <li>Bronze Badges: 285+ Skillrack medals.</li>
                      <li>Hackathons: AXIOS 25, Gen AI.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
