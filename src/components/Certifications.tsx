"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, Globe, Search } from "lucide-react";
import { cn } from "@/utils/cn";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: "programming" | "datascience";
  credentialId: string;
  verifyUrl: string;
  image: string;
  additionalDetails?: string;
}

const certificationsData: Certificate[] = [
  {
    id: 1,
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy (Instructor: Abdul Bari)",
    date: "May 19, 2025",
    category: "programming",
    credentialId: "UC-ea1f07f2-0010-4ea4-a4af-504c82e7ee06",
    verifyUrl: "https://ude.my/UC-ea1f07f2-0010-4ea4-a4af-504c82e7ee06",
    image: "/certificates/dsa_bari.jpg",
    additionalDetails: "Length: 76 total hours. Deep-dive study on dynamic programming, trees, queues, sorting, and graph structures.",
  },
  {
    id: 2,
    title: "MERN Stack Internship with Capstone Project",
    issuer: "Better Tomorrow",
    date: "December 2025",
    category: "programming",
    credentialId: "Better Tomorrow - Sri Eshwar Partner",
    verifyUrl: "#",
    image: "/certificates/mern_better_tomorrow.jpg",
    additionalDetails: "Conducted from Dec 1, 2025 to Dec 19, 2025. Focused on building complete REST APIs and single-page apps with MongoDB, React, and Express.",
  },
  {
    id: 3,
    title: "Data Visualization With Power BI",
    issuer: "Great Learning Academy",
    date: "November 2024",
    category: "datascience",
    credentialId: "HXEKPTPN",
    verifyUrl: "https://www.mygreatlearning.com/certificate/HXEKPTPN",
    image: "/certificates/powerbi_greatlearning.png",
    additionalDetails: "Practical study on dashboard layouts, loading external data files, compiling relationships, and sorting metrics in Power BI.",
  },
  {
    id: 4,
    title: "Python-Introduction to Data Science and Machine learning A-Z",
    issuer: "Udemy (Instructor: Yassin Marco MBA)",
    date: "May 5, 2025",
    category: "datascience",
    credentialId: "UC-275c7ee5-fef5-4502-9928-10e5c5fd208e",
    verifyUrl: "https://ude.my/UC-275c7ee5-fef5-4502-9928-10e5c5fd208e",
    image: "/certificates/python_udemy.png",
    additionalDetails: "Length: 7.5 total hours. Introduction to NumPy, Pandas datasets, Matplotlib visualization graphs, and Scikit-Learn linear regression structures.",
  },
  {
    id: 5,
    title: "Introduction to C",
    issuer: "Sololearn",
    date: "January 13, 2025",
    category: "programming",
    credentialId: "CC-H9MC6U3C",
    verifyUrl: "https://www.sololearn.com/",
    image: "/certificates/c_sololearn.png",
    additionalDetails: "Fundamental variables syntax, pointer logic, arrays sorting, structures compilation, and file streams.",
  },
  {
    id: 6,
    title: "Certificate for the Completion of C Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "December 20, 2024",
    category: "programming",
    credentialId: "4093608HF3",
    verifyUrl: "#",
    image: "/certificates/cert1.png",
    additionalDetails: "Score: 75.00%. Successfully completed C test organized at Sri Eshwar College of Engineering.",
  },
  {
    id: 7,
    title: "Certificate for the Completion of Cpp Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "December 20, 2024",
    category: "programming",
    credentialId: "4093608AS4",
    verifyUrl: "#",
    image: "/certificates/cert2.png",
    additionalDetails: "Score: 65.00%. Successfully completed Cpp test organized at Sri Eshwar College of Engineering.",
  },
  {
    id: 8,
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "November 5, 2025",
    category: "programming",
    credentialId: "5785A8602BF7",
    verifyUrl: "https://www.hackerrank.com/certificates/5785A8602BF7",
    image: "/certificates/cert3.png",
    additionalDetails: "Passed the HackerRank skill certification test for Intermediate SQL.",
  },
  {
    id: 9,
    title: "Design Thinking - A Primer (Elite)",
    issuer: "NPTEL Online Certification, IIT Madras",
    date: "Jan-Feb 2026",
    category: "datascience",
    credentialId: "NPTEL26MG51S465600638",
    verifyUrl: "https://nptel.ac.in/noc",
    image: "/certificates/cert4.png",
    additionalDetails: "Consolidated score of 72% (Online Assignments: 24.17/25, Proctored Exam: 48/75). 4-week course.",
  },
];

function CertificateCard({ cert, onPreview }: { cert: Certificate; onPreview: () => void }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-56 flip-card-container cursor-pointer select-none">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full bg-card border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between hover:border-white/[0.13] shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-elevated border border-white/[0.07] flex items-center justify-center text-accent shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest block mb-1">
                {cert.category === "programming" ? "Programming" : "Data Science"}
              </span>
              <h3 className="text-sm md:text-[13px] font-bold font-display text-white mb-1 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-[10px] font-mono text-text-muted">
                {cert.issuer} &bull; {cert.date}
              </p>
            </div>
          </div>
          <div className="text-[10px] font-mono text-accent flex items-center justify-end gap-1 font-semibold">
            Details &rarr;
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 w-full h-full bg-elevated border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between hover:border-white/[0.13] shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex-1 flex flex-col justify-between mt-1">
            <div>
              <span className="text-[8px] font-mono text-text-muted uppercase tracking-widest block mb-0.5">Credential ID:</span>
              <span className="text-[10px] font-mono text-accent font-semibold break-all mb-2 block">{cert.credentialId}</span>
            </div>
            {cert.additionalDetails && (
              <p className="text-[11px] text-text-secondary leading-relaxed line-clamp-3 mb-2">
                {cert.additionalDetails}
              </p>
            )}
          </div>

          <div
            className="flex items-center gap-2 mt-auto pt-3 border-t border-white/[0.06]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onPreview}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-xl bg-elevated border border-white/[0.08] hover:border-white/15 text-white font-semibold text-[11px] transition-all duration-200"
            >
              <Eye className="h-3 w-3 text-text-muted" />
              Preview
            </button>
            {cert.verifyUrl !== "#" ? (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-xl bg-accent hover:bg-accent-dim text-white font-bold text-[11px] transition-all duration-200 text-center shimmer-btn"
              >
                <Globe className="h-3 w-3" />
                Verify
              </a>
            ) : (
              <div className="flex-1 py-1.5 rounded-xl bg-elevated border border-white/[0.07] text-text-muted text-center font-bold text-[10px]">
                Internship
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "programming" | "datascience">("all");

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="certifications" className="relative py-20 md:py-28 bg-primary overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6 border-b border-white/[0.06] pb-6"
        >
          <div>
            <p className="section-label">06 / Accomplishments</p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-none">
              Certifications
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search credentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-60 bg-card border border-white/[0.08] rounded-full px-5 py-2.5 pl-10 text-xs text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/15 transition-all"
              />
              <Search className="absolute left-3.5 top-3 h-3.5 w-3.5 text-text-muted" />
            </div>

            <div className="flex items-center gap-1 p-1 rounded-full bg-card border border-white/[0.07] overflow-x-auto self-start sm:self-auto">
              {(["all", "programming", "datascience"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "text-[10px] px-4 py-2 rounded-full font-semibold transition-all duration-200 font-mono whitespace-nowrap",
                    selectedCategory === cat
                      ? "bg-accent text-white"
                      : "text-text-muted hover:text-white bg-transparent"
                  )}
                >
                  {cat === "all" ? "ALL" : cat === "programming" ? "PROGRAMMING" : "DATA SCIENCE"}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <CertificateCard
                  cert={cert}
                  onPreview={() => setSelectedCert(cert)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted text-sm font-mono">No certificates matched your criteria.</p>
          </div>
        )}
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              className="relative w-full max-w-xl bg-[#111111] border border-white/[0.09] rounded-2xl p-8 shadow-2xl z-20"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#1a1a1a] border border-white/[0.08] text-text-muted hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Certificate Image */}
              <div className="border border-white/[0.07] rounded-xl overflow-hidden bg-[#0e0e0e] mb-6 aspect-[4/3] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="mb-6">
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  {selectedCert.title}
                </h4>
                {selectedCert.additionalDetails && (
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {selectedCert.additionalDetails}
                  </p>
                )}
                <div className="flex justify-between items-center text-[10px] font-mono text-text-muted pt-3 border-t border-white/[0.06]">
                  <div>
                    <span className="block text-[8px] text-text-muted mb-0.5">ISSUER:</span>
                    <span className="text-white font-semibold">{selectedCert.issuer}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] text-text-muted mb-0.5">CREDENTIAL ID:</span>
                    <span className="text-white font-semibold">{selectedCert.credentialId}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {selectedCert.verifyUrl !== "#" ? (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent hover:bg-accent-dim text-white font-bold text-xs shadow-sm transition-all duration-200 shimmer-btn"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    Verify Credential
                  </a>
                ) : (
                  <div className="flex-1 py-3 rounded-xl bg-[#1a1a1a] border border-white/[0.07] text-text-muted text-center font-bold text-xs">
                    Internship Placement
                  </div>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex-1 py-3 rounded-xl bg-[#1a1a1a] border border-white/[0.08] hover:border-white/15 text-white font-semibold text-xs transition-all duration-200"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
