import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { portfolioData } from "@/data/portfolioData";
import {
  FileText,
  Github,
  Linkedin,
  MapPin,
  ArrowRight,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const { personal, experience, projects } = portfolioData;
  const primaryExp = experience[0];

  return (
    <main className="min-h-screen flex flex-col pt-24 pb-12 relative overflow-hidden">
      <Navbar />

      {/* Ambient background soft glow orbs - strictly soothing slate/navy, no neon */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-slate-300/30 dark:bg-navy-900/15 blur-[140px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-slate-200/40 dark:bg-slate-800/15 blur-[160px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-16">
        {/* ================= 1. HERO SECTION (Basic Intro & Pitch) ================= */}
        <section className="pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                <span>Available for Full-Time Roles • Class of 2027</span>
              </div>

              {/* Identity & Main Title */}
              <div className="space-y-1.5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {personal.name}
                </h1>
                <div className="text-xl sm:text-2xl font-bold font-mono text-navy-800 dark:text-slate-200">
                  {personal.role}
                </div>
              </div>

              {/* Education Subtitle */}
              <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400">
                {personal.education.degree} •{" "}
                <span className="text-slate-900 dark:text-slate-200 font-semibold">
                  {personal.education.institution}
                </span>
              </p>

              {/* Crisp High-Signal Pitch */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {personal.pitch}
              </p>

              {/* Location & Quick Credential */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {personal.location}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300 font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-navy-700 dark:text-navy-300" />
                  Former SDE Intern @ TruAdaptiv Systems
                </span>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-mono font-semibold transition-all shadow-sm"
                >
                  Explore Projects
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-semibold transition-all shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Resume PDF
                </a>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-xl glass-card hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-xl glass-card hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Headshot in Frosted Glass Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="glass-panel p-3.5 rounded-3xl shadow-xl border border-slate-200/90 dark:border-white/10">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/profile.jpg"
                      alt="Shubhangi Bhagat - AI/ML & Full Stack Developer"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                      className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel border border-white/20 dark:border-slate-700/60">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        Shubhangi Bhagat
                      </p>
                      <p className="text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        AI/ML & Full Stack Developer • 2027
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. FUN FEATURE: INTERACTIVE DEVELOPER TERMINAL ================= */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              ⚡ Interactive Dev Terminal
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Type or click chips to query profile facts
            </span>
          </div>
          <InteractiveTerminal />
        </section>

        {/* ================= 3. FOUR SUMMARIZING BENTO CARDS ================= */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-navy-800 dark:text-slate-400">
              Summary Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Core Profiles & Deep-Dive Tabs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Internship Preview (Cleaned & De-saturated) */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-navy-100 dark:bg-navy-900/60 text-navy-900 dark:text-navy-200 font-semibold">
                    Industry Experience
                  </span>
                  <span className="text-xs font-mono text-slate-500">Summer 2026</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    {primaryExp.company}
                  </h3>
                  <p className="text-xs font-mono text-navy-800 dark:text-slate-300 font-medium mt-0.5">
                    {primaryExp.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Owned the VRAS (Shruti-Sakshi) AI audio compliance platform. Delivered FastAPI async
                  microservices, 256-test regression suite at 100% pass, and dual on-premise VPS + AWS deployments.
                </p>

                {/* 3 Crisp Highlights */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Pass Rate</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">100%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Speed</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">+40%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Deploy</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">VPS & AWS</span>
                  </div>
                </div>
              </div>

              <Link
                href="/internship"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono font-semibold text-slate-900 dark:text-white transition-colors"
              >
                <span>Explore Full Internship & Certificate Tab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Featured Projects Preview */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold">
                    Case Studies
                  </span>
                  <span className="text-xs font-mono text-slate-500">6 Projects</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Applied AI & Scalable Systems
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Problem-Approach-Impact Case Studies
                  </p>
                </div>

                <div className="space-y-2.5">
                  {projects.slice(0, 3).map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">{proj.title}</span>
                        <span className="text-[10px] font-mono text-slate-500">{proj.category}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-1">
                        {proj.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono font-semibold text-slate-900 dark:text-white transition-colors"
              >
                <span>Open Full Projects Case-Study Tab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Education & Leadership Timeline Preview */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold">
                    Journey & Standing
                  </span>
                  <span className="text-xs font-mono text-slate-500">2023 – 2027</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Education & Leadership
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Manipal University Jaipur • Community Roles
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
                    <GraduationCap className="w-4 h-4 text-navy-800 dark:text-slate-300 shrink-0" />
                    <span>B.Tech in CSE (AI & ML) — Final Year Standing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Student Placement Coordinator @ MUJ</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800">
                    <Sparkles className="w-4 h-4 text-navy-800 dark:text-slate-300 shrink-0" />
                    <span>Former Head of Tech Projects @ IEEE WIE (500+ visitors/mo)</span>
                  </div>
                </div>
              </div>

              <Link
                href="/journey"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono font-semibold text-slate-900 dark:text-white transition-colors"
              >
                <span>View Full Interactive Timeline Tab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 4: Technical Stack & Problem Solving */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold">
                    Core Toolkit
                  </span>
                  <span className="text-xs font-mono text-slate-500">250+ LeetCode</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Languages, Systems & Certs
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Cisco, Oracle, NPTEL, CodeChef
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "Python 3.12",
                    "FastAPI",
                    "React 18",
                    "Celery",
                    "Redis",
                    "PostgreSQL",
                    "C/C++",
                    "Scikit-learn",
                    "AWS IaC",
                    "SQLAlchemy",
                    "DSA (250+ LC)",
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/skills"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono font-semibold text-slate-900 dark:text-white transition-colors"
              >
                <span>Explore Full Skills & Certifications Tab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 4. SUMMARY CONTACT CTA ================= */}
        <section className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">
            Interested in connecting?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Open to full-time AI/ML and software engineering positions for the graduating batch of 2027.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-mono font-semibold transition-all shadow-sm"
            >
              Go to Contact Hub
            </Link>
            <a
              href={`mailto:${personal.email}`}
              className="px-5 py-2.5 rounded-xl glass-card text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 transition-all shadow-xs"
            >
              Direct Email
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
