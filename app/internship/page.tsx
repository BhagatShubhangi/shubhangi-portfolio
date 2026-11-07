import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AudioWaveformWidget } from "@/components/AudioWaveformWidget";
import { portfolioData } from "@/data/portfolioData";
import {
  Calendar,
  MapPin,
  FileCheck2,
  ExternalLink,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export default function InternshipPage() {
  const exp = portfolioData.experience[0];

  const keyBullets = [
    "Architected the VRAS (Shruti-Sakshi) async backend on Python 3.12, FastAPI, Celery, Redis, and PostgreSQL.",
    "Built acoustic analysis modules: diarization-independent scoring and automated PDF report generation.",
    "Maintained a 256-test regression suite at 100% pass rate while cutting turnaround time by 40%.",
    "Orchestrated dual deployments: on-premise VPS systemd services and AWS CloudFormation IaC.",
    "Led live customer demonstrations and incorporated user acceptance testing (UAT) feedback.",
  ];

  return (
    <main className="min-h-screen flex flex-col pt-24 pb-12 relative overflow-hidden">
      <Navbar />

      {/* Ambient background soft glow */}
      <div className="absolute top-24 right-1/4 w-96 h-96 bg-slate-300/20 dark:bg-navy-900/15 blur-[140px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>

        {/* Header Title */}
        <div className="space-y-2">
          <div className="inline-block text-xs font-mono font-semibold tracking-wider uppercase text-navy-800 dark:text-slate-400">
            Work Experience
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Software Development Internship
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            End-to-end engineering of the VRAS (Voice-based Audit System / Shruti-Sakshi) compliance platform at TruAdaptiv Systems.
          </p>
        </div>

        {/* Main Clean Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200/60 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                {exp.company}
              </h2>
              <div className="text-sm font-semibold font-mono text-navy-800 dark:text-slate-300 mt-0.5">
                {exp.role}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Remote
              </span>
            </div>
          </div>

          {/* Verification Pill */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Official Completion Certificate Verified
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Ref: {exp.certificateRef}
                </span>
              </div>
            </div>

            <a
              href={exp.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-mono font-semibold transition-all shadow-xs shrink-0 self-start sm:self-auto"
            >
              View Certificate PDF
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* 3 Impact Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Test Coverage</span>
              <span className="text-base font-bold font-mono text-slate-950 dark:text-white block mt-0.5">
                256 Tests @ 100% Pass
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Turnaround</span>
              <span className="text-base font-bold font-mono text-slate-950 dark:text-white block mt-0.5">
                40% Faster via Celery
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Deployment</span>
              <span className="text-base font-bold font-mono text-slate-950 dark:text-white block mt-0.5">
                VPS & AWS CloudFormation
              </span>
            </div>
          </div>

          {/* Audio Engine Simulator */}
          <div className="space-y-2 pt-1">
            <AudioWaveformWidget />
          </div>

          {/* Streamlined Key Deliverables */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
              Key Engineering Deliverables
            </h3>
            <ul className="space-y-2.5">
              {keyBullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-navy-800 dark:text-navy-300 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Tech Pills */}
          <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
            <div className="flex flex-wrap gap-1.5">
              {exp.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
