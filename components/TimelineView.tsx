"use client";

import React, { useState } from "react";
import { portfolioData, TimelineMilestone } from "@/data/portfolioData";
import {
  GraduationCap,
  Briefcase,
  Users,
  Trophy,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Sparkles,
} from "lucide-react";

export function TimelineView() {
  const { timeline, personal } = portfolioData;
  const [filter, setFilter] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = ["All", "Education", "Internship", "Leadership", "Honors"];

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education":
        return <GraduationCap className="w-4 h-4 text-navy-800 dark:text-navy-200" />;
      case "Internship":
        return <Briefcase className="w-4 h-4 text-navy-800 dark:text-navy-200" />;
      case "Leadership":
        return <Users className="w-4 h-4 text-navy-800 dark:text-navy-200" />;
      case "Honors":
        return <Trophy className="w-4 h-4 text-navy-800 dark:text-navy-200" />;
      default:
        return <Sparkles className="w-4 h-4 text-navy-800 dark:text-navy-200" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Education Header Hero Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                {personal.education.institution}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {personal.education.location} • {personal.education.period}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-navy-100 dark:bg-navy-900/60 text-navy-900 dark:text-navy-200 font-semibold w-fit">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            {personal.education.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">Degree Program</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block mt-0.5">
              B.Tech in Computer Science
            </span>
            <span className="text-xs text-navy-800 dark:text-slate-300 font-mono">
              Specialization: AI & ML
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">Academic Honors</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block mt-0.5">
              2x Student Excellence Award
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Academic & Leadership Merit
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 block uppercase">Campus Roles</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 block mt-0.5">
              Student Placement Coordinator
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Former IEEE WIE Tech Head
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filter === cat
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
        {filteredTimeline.map((item, idx) => {
          const isExpanded = expandedId === idx;
          return (
            <div key={idx} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 group-hover:border-navy-700 dark:group-hover:border-slate-300 flex items-center justify-center transition-colors shadow-xs">
                {getCategoryIcon(item.category)}
              </div>

              {/* Timeline Card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold uppercase">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-navy-800 dark:text-slate-400 font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {item.institution}
                    </p>
                  </div>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : idx)}
                    className="self-start sm:self-center text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        Less <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Details <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono font-semibold uppercase text-slate-400 block">
                        Milestone Highlights:
                      </span>
                      <ul className="space-y-1">
                        {item.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-navy-700 dark:text-navy-300 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
