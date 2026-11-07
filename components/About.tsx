"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Code2, Server, Cpu, CheckCircle2, ShieldCheck } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  const corePillars = [
    {
      icon: <Server className="w-5 h-5 text-navy-700 dark:text-navy-300" />,
      title: "Backend Microservices & Async Systems",
      description:
        "Building asynchronous REST APIs and job queues with FastAPI, Celery, and Redis. Experienced in database indexing, caching strategies, and fail-closed session management.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-navy-700 dark:text-navy-300" />,
      title: "Applied Machine Learning & AI Pipelines",
      description:
        "Developing end-to-end ML workflows: speech analysis, acoustic scoring, NLP pipelines, and fraud classifiers (XGBoost + SMOTE) deployed to live user environments.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-navy-700 dark:text-navy-300" />,
      title: "Production Rigor & Automated Testing",
      description:
        "Committed to high software reliability, maintaining extensive regression test suites (256 tests @ 100% pass at TruAdaptiv) and automated Docker/VPS/AWS deployments.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-navy-700 dark:text-navy-300" />,
      title: "Full-Stack User Interfaces",
      description:
        "Building responsive, accessible web dashboards with React 18, Next.js, and TypeScript that present complex backend telemetry simply and intuitively.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 dark:text-slate-400">
            01 / Background & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Engineering software that bridges complex systems & applied AI.
          </h2>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am a final-year Computer Science & Engineering undergraduate specializing in Artificial
              Intelligence and Machine Learning at{" "}
              <strong className="text-slate-900 dark:text-white font-medium">
                Manipal University Jaipur
              </strong>
              . My focus centers on building reliable backend architectures, asynchronous job-processing
              queues, and real-world machine learning systems.
            </p>
            <p>
              During my Software Development Internship at{" "}
              <strong className="text-slate-900 dark:text-white font-medium">
                TruAdaptiv Systems
              </strong>
              , I took end-to-end engineering ownership of an AI-driven voice compliance platform (VRAS
              / Shruti-Sakshi), shipping FastAPI microservices, speech-to-text correction layers, and
              dual production deployments across on-premise VPS and AWS CloudFormation.
            </p>
            <p>
              Beyond engineering, I actively contribute to academic and open-source communities as a
              Student Placement Coordinator at MUJ, former Head of Technical Projects at IEEE WIE, and
              contributor in the GirlScript Summer of Code.
            </p>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Formal Education
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {personal.education.period}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {personal.education.institution}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {personal.education.degree}
              </p>
              <div className="pt-1 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  Final Year Standing
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3"
            >
              <div className="p-2.5 w-fit rounded-xl bg-slate-100 dark:bg-slate-800/80">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
