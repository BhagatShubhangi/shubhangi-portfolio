import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 pb-12 relative overflow-hidden">
      <Navbar />

      {/* Ambient background soft glow */}
      <div className="absolute top-24 left-1/3 w-96 h-96 bg-slate-300/20 dark:bg-navy-900/15 blur-[140px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>

        <Projects />
      </div>

      <Footer />
    </main>
  );
}
