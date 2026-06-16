"use client";

import { Download, FileText, Eye } from "lucide-react";
import { trackResumeEvent } from "@/lib/resumeAnalytics";
import { useResumeAvailability } from "@/hooks/useResumeAvailability";

const RESUME_URL = "/resume/Naveenkumar_P_Resume.pdf";
const RESUME_FILENAME = "Naveenkumar_P_Resume.pdf";

export default function ResumeActions() {
  const available = useResumeAvailability();
  const isMissing = available === false;

  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-3">
      <a
        href={isMissing ? undefined : RESUME_URL}
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => {
          if (!isMissing) trackResumeEvent("resume_view");
        }}
        className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out ${
          isMissing
            ? "cursor-not-allowed border-white/10 bg-white/5 text-gray-400"
            : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10 hover:-translate-y-0.5"
        }`}
        aria-disabled={isMissing}
      >
        <Eye className="h-4 w-4" />
        View Resume
      </a>

      <a
        href={isMissing ? undefined : RESUME_URL}
        download={RESUME_FILENAME}
        onClick={() => {
          if (!isMissing) trackResumeEvent("resume_download");
        }}
        className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 ease-out ${
          isMissing
            ? "cursor-not-allowed bg-white/10 text-gray-400"
            : "hover:-translate-y-0.5 hover:bg-white/90"
        }`}
        aria-disabled={isMissing}
      >
        <Download className="h-4 w-4" />
        Download Resume
      </a>

      {isMissing && (
        <p className="w-full text-left text-sm text-red-300 sm:w-auto">
          Resume file is unavailable right now. Please try again later.
        </p>
      )}
    </div>
  );
}
