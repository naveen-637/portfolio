"use client";

import { useEffect, useRef } from "react";

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Completely disable on mobile and touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth < 768;
    if (isTouch || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, radius: 140 };
    let isInView = true;
    let animationStarted = false;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.2 + 0.5;
        
        // Premium tech color palette
        const colors = [
          "rgba(0, 212, 255, 0.3)",  // accent cyan
          "rgba(139, 92, 246, 0.2)", // accent purple
          "rgba(59, 130, 246, 0.25)",  // accent blue
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wall collisions
        if (this.x < 0 || this.x > w) this.vx = -this.vx;
        if (this.y < 0 || this.y > h) this.vy = -this.vy;

        // Hover repulsion physics
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= dx * force * 0.012;
          this.y -= dy * force * 0.012;
        }
      }
    }

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      const particleRatio = 32000;
      const count = Math.min(Math.floor((w * h) / particleRatio), 65);
      
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Stop loop if section is not visible
      if (!isInView) {
        animationStarted = false;
        return;
      }

      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Draw and link adjacent nodes
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(w, h);
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect particles within a threshold
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Dynamic transparency gradient
            const alpha = 0.06 * (1 - dist / 100);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // IntersectionObserver to watch Hero section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasInView = isInView;
          isInView = entry.isIntersecting;
          if (isInView && !wasInView && !animationStarted) {
            animationStarted = true;
            animate();
          }
        });
      },
      { threshold: 0.05 }
    );

    const heroSection = document.getElementById("home");
    if (heroSection) {
      observer.observe(heroSection);
    }

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    init();
    animationStarted = true;
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full opacity-70"
    />
  );
}
