"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on touch screens or mobile viewports
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth < 768;
    if (isTouch || isMobile) {
      setIsSupported(false);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Update global document coordinates for premium spotlight glow styling
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isSupported || !isVisible) return null;

  return (
    <>
      {/* Background Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-30 mix-blend-screen transition-opacity duration-300 md:block hidden"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.04), transparent 80%)`,
        }}
      />

      {/* Main Ring Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-accent-cyan/80 mix-blend-difference md:block hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : 20,
          height: isHovered ? 48 : 20,
          backgroundColor: isHovered ? "rgba(0, 212, 255, 0.1)" : "rgba(0, 212, 255, 0)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      
      {/* Dot center */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-1.5 w-1.5 rounded-full bg-accent-cyan mix-blend-difference md:block hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
