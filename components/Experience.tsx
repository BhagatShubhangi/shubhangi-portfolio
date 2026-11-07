"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  FileCheck2,
  ExternalLink,
  CheckCircle2,
  Server,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;
  const [showAllDetails, setShowAllDetails] = useState(true);

  return (
    <section id="experience" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 dark:text-slate-400">
            02 / Industry Experience
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Software Development Internship
            </h2>
            <div className="text-sm text-slate-500 dark:text-slate-400 font-mono">
              Summer 2026
            </div>
          </div>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-navy-100 dark:bg-navy-900/60 text-navy-900 dark:text-navy-200 font-medium">
                      Live Production Systems
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-navy-800 dark:text-slate-200">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Certificate Verification Pill & Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                      Official Internship Completion Verified
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Ref: {exp.certificateRef}
                    </span>
                  </div>
                </div>

                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs"
                >
                  View Completion Certificate
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>

              {/* Summary Description */}
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Highlight Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {exp.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/30"
                  >
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {h.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold font-mono text-slate-900 dark:text-white mt-0.5">
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Contributions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold tracking-tight uppercase font-mono text-slate-900 dark:text-slate-100">
                    Core Technical Contributions & Deliverables
                  </h4>
                  <button
                    onClick={() => setShowAllDetails(!showAllDetails)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1"
                  >
                    {showAllDetails ? (
                      <>
                        Collapse <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Expand <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {showAllDetails && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.contributions.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed p-3 rounded-lg border border-slate-100 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40"
                      >
                        <CheckCircle2 className="w-4 h-4 text-navy-700 dark:text-navy-300 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Technologies Applied */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 block">
                  Technologies Deployed in Production:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
