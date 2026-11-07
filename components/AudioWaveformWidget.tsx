"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, ShieldCheck, Activity } from "lucide-react";

export function AudioWaveformWidget() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([
    25, 45, 70, 35, 60, 85, 40, 75, 90, 50, 65, 30, 80, 55, 40, 70, 20, 60,
  ]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setWaveformHeights((prev) =>
        prev.map(() => Math.floor(Math.random() * 75) + 15)
      );
    }, 180);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-navy-100 dark:bg-navy-900/60 text-navy-800 dark:text-navy-200">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider">
              VRAS / Shruti-Sakshi Engine
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              AI Audio Compliance Pipeline Simulation
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause audio analysis simulation" : "Play audio analysis simulation"}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Waveform Visualization Bars */}
      <div className="h-16 flex items-end justify-between gap-1 px-2 py-1 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80">
        {waveformHeights.map((h, i) => (
          <div
            key={i}
            className={`w-full rounded-full transition-all duration-150 ${
              isPlaying
                ? "bg-navy-800 dark:bg-slate-300"
                : "bg-slate-300 dark:bg-slate-700"
            }`}
            style={{ height: `${isPlaying ? h : 18}%` }}
          />
        ))}
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono border-t border-slate-100 dark:border-slate-800/80">
        <div className="space-y-0.5">
          <span className="text-[10px] text-slate-400 block uppercase">Mode</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">Diarization-Ind.</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] text-slate-400 block uppercase">Async Queue</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">Celery/Redis</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] text-slate-400 block uppercase">Regression</span>
          <span className="font-semibold text-emerald-700 dark:text-emerald-400">256/256 Pass</span>
        </div>
      </div>
    </div>
  );
}
