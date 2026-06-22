"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/naveen-637",
      label: "GitHub",
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: "https://www.linkedin.com/in/naveenkumar-p-bb76a4333",
      label: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      href: "https://leetcode.com/u/naveen63/",
      label: "LeetCode",
      icon: <SiLeetcode className="h-4 w-4" />,
    },
    {
      href: "http://www.skillrack.com/profile/514484/9953f1a59e3dd5e61a16d277294d7a18f0da277c",
      label: "SkillRack",
      icon: <FaCode className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-primary-dark/50 py-8 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        {/* Contact/Social profiles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
