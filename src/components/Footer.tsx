"use client";

import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary border-t border-white/[0.06] z-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="space-y-1">
            <span className="font-display font-extrabold text-sm tracking-[0.12em] text-white block">
              NAVEENKUMAR P
            </span>
            <span className="text-[11px] font-mono text-text-muted block">
              B.Tech AI &amp; Data Science · Sri Eshwar College of Engineering
            </span>
          </div>

          {/* Quick links */}
          <nav className="flex items-center gap-5 flex-wrap">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-[11px] font-mono uppercase tracking-widest text-text-muted hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/naveen-637"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-white transition-colors duration-150"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/naveenkumar-p-bb76a4333"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-white transition-colors duration-150"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href="https://leetcode.com/u/naveen63/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="text-text-muted hover:text-accent transition-colors duration-150"
            >
              <SiLeetcode className="h-4 w-4" />
            </a>
            <a
              href="http://www.skillrack.com/profile/514484/9953f1a59e3dd5e61a16d277294d7a18f0da277c"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Skillrack"
              className="text-text-muted hover:text-accent transition-colors duration-150"
            >
              <FaCode className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[10px] font-mono text-text-muted">
            © {currentYear} Naveenkumar P. All rights reserved.
          </span>
          <span className="text-[10px] font-mono text-text-muted">
            Built with Next.js · TypeScript · Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
