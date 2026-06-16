"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, BrainCircuit, Cpu, Network, Zap, Play } from "lucide-react";
import { cn } from "@/utils/cn";

interface LAB_TOPIC {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  summary: string;
  pipelineSteps: string[];
  terminalLogs: string[];
}

const topics: LAB_TOPIC[] = [
  {
    id: "agentic",
    title: "Agentic AI Concepts",
    icon: <BrainCircuit className="h-5 w-5" />,
    tagline: "Autonomous Agent Architectures",
    summary: "Researching cognitive loop systems where LLMs plan, select tools, and iterate based on execution feedback pipelines.",
    pipelineSteps: ["User Intent", "ReAct Planner Loop", "Tool Invocation", "Self-Reflection Evaluation"],
    terminalLogs: [
      "SYSTEM: Initializing agentic coordinator...",
      "AGENT: Received request: 'Evaluate trade routes for MSMEs'",
      "THOUGHT: Need to fetch export logs and compliance rules.",
      "TOOL_CALL: db_query({ target: 'tariffs', criteria: 'EU' })",
      "TOOL_RESPONSE: API status 200 returned.",
      "THOUGHT: Analyzing data against risk models...",
      "AGENT: Output finalized. Accuracy rating: 98.4%",
    ],
  },
  {
    id: "generative",
    title: "Generative AI",
    icon: <Terminal className="h-5 w-5" />,
    tagline: "Vector Embeddings & NLP Workflows",
    summary: "Exploring transformer topologies, retrieval augmented generation (RAG), and parameter efficient fine-tuning techniques.",
    pipelineSteps: ["Document Chunking", "Embedding Engine", "Vector Store Storage", "Prompt Context Injection"],
    terminalLogs: [
      "SYSTEM: Chunking document index 'notes.docx'...",
      "EMBEDDING: Generating text vectors (dimension: 1536)",
      "UPSERT: Saved 124 vectors into VectorDatabase",
      "QUERY: Searching indices matching 'MERN architecture'...",
      "RETRIEVAL: Top-K matching scores calculated [0.912, 0.884]",
      "PROMPT: Injecting context block (size: 1024 tokens)",
      "SYSTEM: Prompt construction ready.",
    ],
  },
  {
    id: "ml",
    title: "Machine Learning Interests",
    icon: <Cpu className="h-5 w-5" />,
    tagline: "Deep Neural Network Topologies",
    summary: "Studying loss optimization curves, convolutional layers, recurrent cells, and statistical regression architectures.",
    pipelineSteps: ["Dataset Prep", "Feature Weights", "Loss Optimization", "Model Convergence"],
    terminalLogs: [
      "TRAIN: Loading dataset (records: 12500, features: 12)",
      "EPOCH 1: loss: 0.8492, acc: 0.7203",
      "EPOCH 2: loss: 0.4102, acc: 0.8654",
      "EPOCH 3: loss: 0.1984, acc: 0.9412",
      "EPOCH 4: loss: 0.0892, acc: 0.9815 - validation: 0.9750",
      "SYSTEM: Converged. Saving checkpoint model.bin",
    ],
  },
  {
    id: "research",
    title: "Future Research Areas",
    icon: <Network className="h-5 w-5" />,
    tagline: "Neural-Symbolic AI Architectures",
    summary: "Investigating the unification of neural models with logical knowledge representation frameworks to solve hallucinations.",
    pipelineSteps: ["Symbolic Logic", "Ontology Graph", "Neural Layer Connection", "Logical Check"],
    terminalLogs: [
      "RESEARCH: Compiling Symbolic Ontologies...",
      "KNOWLEDGE: Root nodes defined: 'GenealogicalGraph'",
      "RELATION: Binding neural weights to logical connections",
      "VALIDATE: Rule checks: A -> B, B -> C, then A -> C...",
      "LOGIC_GATE: Verified 532 logical relations successfully.",
      "SYSTEM: Symbolic verification loops active.",
    ],
  },
];

export default function AILab() {
  const [activeTopic, setActiveTopic] = useState<LAB_TOPIC>(topics[0]);
  const [runningLog, setRunningLog] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);

  // Animate terminal output character typing/line appending simulation
  useEffect(() => {
    setRunningLog([activeTopic.terminalLogs[0]]);
    setLogIndex(1);
  }, [activeTopic]);

  useEffect(() => {
    if (logIndex >= activeTopic.terminalLogs.length) return;

    const timer = setTimeout(() => {
      setRunningLog((prev) => [...prev, activeTopic.terminalLogs[logIndex]]);
      setLogIndex((prev) => prev + 1);
    }, 1200);

    return () => clearTimeout(timer);
  }, [logIndex, activeTopic]);

  return (
    <section id="ailab" className="relative py-24 bg-primary overflow-hidden border-t border-white/[0.04]">
      <div className="container mx-auto px-6 relative z-20">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-accent-cyan">
              08 / PLAYGROUND
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 font-display text-gradient">
              AI INNOVATION LAB
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-light">
            Interactive visual showcases representing theoretical exploration, cognitive loop steps, and development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Topic Selectors Left block */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {topics.map((t) => {
              const isActive = activeTopic.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTopic(t)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 interactive",
                    isActive
                      ? "glass-premium border-accent-cyan text-white shadow-lg"
                      : "glass border-white/[0.05] text-gray-400 hover:text-white hover:border-white/10"
                  )}
                >
                  <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border", isActive ? "border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan" : "border-white/5 bg-white/5 text-gray-500")}>
                    {t.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display leading-tight">{t.title}</h4>
                    <span className="text-[10px] font-mono text-gray-500 block mt-0.5">{t.tagline}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Console Visualizer Right block */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Pipelines Flow Column */}
            <div className="md:col-span-5 glass-premium border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mb-4">
                  Lab Overview Pipeline
                </span>
                
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {activeTopic.tagline}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light mb-6">
                  {activeTopic.summary}
                </p>
              </div>

              {/* Graphical Steps */}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.04]">
                {activeTopic.pipelineSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[10px] text-accent-cyan shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-xs text-gray-300 font-mono">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Live Compiler logs output */}
            <div className="md:col-span-7 glass-premium border-white/[0.06] rounded-3xl p-6 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 border-b border-white/[0.05] pb-3 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-accent-cyan" />
                    AI_COMPILER_LOGS.log
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="flex flex-col gap-2.5 font-mono text-[11px] leading-relaxed">
                  <AnimatePresence>
                    {runningLog.map((log, idx) => {
                      const isThought = log.startsWith("THOUGHT:");
                      const isSystem = log.startsWith("SYSTEM:");
                      const isTool = log.startsWith("TOOL_");
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={cn(
                            "text-gray-300",
                            isThought && "text-accent-purple font-semibold",
                            isSystem && "text-gray-500",
                            isTool && "text-accent-cyan"
                          )}
                        >
                          {log}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] mt-6">
                <span className="text-[9px] font-mono text-gray-500">
                  REFRESH PERIOD: 1.2s &bull; SYSTEM ONLINE
                </span>
                
                <button
                  onClick={() => {
                    setRunningLog([activeTopic.terminalLogs[0]]);
                    setLogIndex(1);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan hover:text-black font-semibold text-[10px] transition-all duration-300 interactive"
                >
                  <Play className="h-3 w-3" />
                  Restart Sim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
