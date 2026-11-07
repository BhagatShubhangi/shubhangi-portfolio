"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Check,
  Copy,
  ArrowDown,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background subtle radial gradient - strictly soothing greys/navy, no neon */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-slate-200/50 dark:bg-navy-900/20 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-700 dark:bg-emerald-500 animate-pulse" />
              <span>Available for Full-Time Roles • Class of 2027</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 dark:text-white">
                {personal.name}
              </h1>
              <div className="inline-block text-xl sm:text-2xl font-semibold text-navy-800 dark:text-slate-300 font-mono tracking-tight">
                {personal.role}
              </div>
            </div>

            {/* University & Degree */}
            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400">
              {personal.education.degree} •{" "}
              <span className="text-slate-900 dark:text-slate-200 font-semibold">
                {personal.education.institution}
              </span>
            </p>

            {/* Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {personal.pitch}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                {personal.location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-navy-700 dark:text-navy-300" />
                Former SDE Intern @ TruAdaptiv Systems
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-sm font-semibold transition-all shadow-sm hover:shadow"
              >
                Featured Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all shadow-sm"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors"
              >
                Internship Details
              </a>
            </div>

            {/* Socials & 1-click Email */}
            <div className="flex flex-wrap items-center gap-2.5 pt-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personal.email}</span>
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3 h-3 opacity-60" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Headshot & Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Subtle soothing backdrop border/glow */}
              <div className="absolute -inset-1 rounded-3xl bg-slate-200/80 dark:bg-slate-800/80 blur-sm -z-10 group-hover:blur transition-all" />

              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-lg">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/profile.jpg"
                    alt="Shubhangi Bhagat"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">
                      Shubhangi Bhagat
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      SDE Intern • AI/ML & Full Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm"
            >
              <div className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
