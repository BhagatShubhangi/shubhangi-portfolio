"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Trophy, Award, CheckCircle2, ShieldCheck, Code2 } from "lucide-react";

export function Achievements() {
  const { achievements, certifications } = portfolioData;

  const issuerColors: Record<string, string> = {
    Cisco: "border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/60",
    Oracle: "border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/60",
    NPTEL: "border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/60",
    CodeChef: "border-slate-300 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-800/60",
  };

  return (
    <section id="certifications" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 dark:text-slate-400">
            06 / Honors & Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Recognitions from hackathons, university awards, competitive programming, and verified industry credentials.
          </p>
        </div>

        {/* Top Part: Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-100 dark:bg-navy-900/60 text-navy-900 dark:text-navy-200 font-semibold">
                  {item.badge}
                </span>
                <Trophy className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.organization}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Part: Verified Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            <ShieldCheck className="w-5 h-5 text-navy-700 dark:text-navy-300" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Verified Industry Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">
                    {cert.category}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
