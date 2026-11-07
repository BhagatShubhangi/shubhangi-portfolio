"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
  Send,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);

    // Subtle celebration confetti - minimal grey/navy/silver particles
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#334155", "#64748b", "#94a3b8", "#1e3250"],
        disableForReducedMotion: true,
      });
    } catch {
      // Fallback silently if confetti is blocked
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="inline-block text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 dark:text-slate-400">
            07 / Get in Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white">
            Let's build something impactful.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            I am currently open to full-time engineering opportunities across AI/ML, backend microservices,
            and full-stack software development for the graduating class of 2027.
          </p>
        </div>

        {/* Action Center Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Mailto Button */}
            <a
              href={`mailto:${personal.email}?subject=Opportunity%20Discussion`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-sm font-semibold transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Send Direct Email
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy: {personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <span className="text-slate-300 dark:text-slate-700">•</span>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <span className="text-slate-300 dark:text-slate-700">•</span>

            <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
