import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TimelineView } from "@/components/TimelineView";
import { Leadership } from "@/components/Leadership";
import { ArrowLeft } from "lucide-react";

export default function JourneyPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 pb-12 relative overflow-hidden">
      <Navbar />

      {/* Ambient background soft glow */}
      <div className="absolute top-24 right-1/3 w-96 h-96 bg-slate-300/20 dark:bg-navy-900/15 blur-[140px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </Link>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-block text-xs font-mono font-semibold tracking-wider uppercase text-navy-800 dark:text-slate-400">
            Dedicated Tab / Timeline
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white">
            Education Journey & Leadership
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A chronological timeline of university milestones at Manipal University Jaipur, open-source initiatives, technical leadership, and engineering achievements.
          </p>
        </div>

        {/* Interactive Chronological Timeline */}
        <TimelineView />

        {/* Leadership Cards Section */}
        <div className="pt-8">
          <Leadership />
        </div>
      </div>

      <Footer />
    </main>
  );
}
