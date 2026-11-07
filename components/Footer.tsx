"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f17] text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-semibold text-slate-900 dark:text-slate-200">
            Shubhangi Bhagat
          </p>
          <p className="font-mono text-[11px]">
            Designed & Engineered with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>

        {/* Center / Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/BhagatShubhangi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shubhangi-bhagat-21501a2ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
