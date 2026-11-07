"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, Database, Cpu, Server, CheckCheck } from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-4 h-4 text-navy-700 dark:text-navy-300" />,
      items: skills.languages,
    },
    {
      title: "Backend Frameworks & APIs",
      icon: <Server className="w-4 h-4 text-navy-700 dark:text-navy-300" />,
      items: skills.frameworks,
    },
    {
      title: "AI/ML, NLP & Audio Pipelines",
      icon: <Cpu className="w-4 h-4 text-navy-700 dark:text-navy-300" />,
      items: skills.aiml,
    },
    {
      title: "Databases, Cloud & Infrastructure",
      icon: <Database className="w-4 h-4 text-navy-700 dark:text-navy-300" />,
      items: skills.databasesCloud,
    },
    {
      title: "Core CS Systems & Methodologies",
      icon: <CheckCheck className="w-4 h-4 text-navy-700 dark:text-navy-300" />,
      items: skills.concepts,
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 dark:text-slate-400">
            04 / Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Categorized Technical Skills
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Grouped by architectural domain. No subjective percentage bars—only concrete tools and
            production competencies.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4 ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
