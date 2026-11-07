"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Users, Award, GitPullRequest, Globe2, Sparkles } from "lucide-react";

export function Leadership() {
  const { leadership } = portfolioData;

  const roleIcons = [
    <Users className="w-5 h-5 text-navy-700 dark:text-navy-300" key="0" />,
    <GitPullRequest className="w-5 h-5 text-navy-700 dark:text-navy-300" key="1" />,
    <Globe2 className="w-5 h-5 text-navy-700 dark:text-navy-300" key="2" />,
    <Sparkles className="w-5 h-5 text-navy-700 dark:text-navy-300" key="3" />,
  ];

  return (
    <section id="leadership" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 dark:text-slate-400">
            05 / Leadership & Community
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Organizational Leadership & Open Source
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Fostering technical communities, mentoring engineering peers, and driving university initiatives.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {roleIcons[idx % roleIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs font-medium text-navy-800 dark:text-slate-300">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {item.metrics && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium">
                    {item.metrics}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
