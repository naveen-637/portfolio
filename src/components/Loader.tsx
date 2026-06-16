"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1.6; // seconds
    const intervalTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        clearInterval(timer);
        setProgress(end);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 400); // allow fade out animation to finish
        }, 300);
      } else {
        setProgress(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Vercel styled loading layout */}
          <div className="flex flex-col items-center gap-6">
            {/* Pulsing initials */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl font-display font-black tracking-tighter bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent"
            >
              NP.
            </motion.div>

            {/* Percentage numeric output */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-xl font-medium text-text-primary tracking-widest">
                {progress}%
              </span>
              
              {/* Progress bar line */}
              <div className="h-[2px] w-48 bg-border rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mt-2">
              Initializing Portfolio...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
