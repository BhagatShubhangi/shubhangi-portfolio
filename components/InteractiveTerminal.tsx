"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from "lucide-react";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "whoami",
      output: (
        <div className="text-slate-700 dark:text-slate-300 space-y-1">
          <p>
            <strong className="text-slate-900 dark:text-white font-semibold">
              Shubhangi Bhagat
            </strong>{" "}
            — AI/ML & Full Stack Developer.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Final-year CS (AI/ML) @ Manipal University Jaipur • Former SDE Intern @ TruAdaptiv Systems.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-white">Available commands:</p>
            <p className="font-mono">
              <span className="text-navy-700 dark:text-navy-300 font-bold">whoami</span> - Identity & current standing
            </p>
            <p className="font-mono">
              <span className="text-navy-700 dark:text-navy-300 font-bold">internship</span> - TruAdaptiv SDE internship details
            </p>
            <p className="font-mono">
              <span className="text-navy-700 dark:text-navy-300 font-bold">projects</span> - Top engineering case studies
            </p>
            <p className="font-mono">
              <span className="text-navy-700 dark:text-navy-300 font-bold">stack</span> - Core technical competencies
            </p>
            <p className="font-mono">
              <span className="text-navy-700 dark:text-navy-300 font-bold">contact</span> - Reach out directly
            </p>
            <p className="font-mono">
              <span className="text-navy-700 dark:text-navy-300 font-bold">clear</span> - Clear the terminal screen
            </p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p className="text-slate-900 dark:text-white font-medium">
              Shubhangi Bhagat | AI/ML & Full Stack Developer
            </p>
            <p>B.Tech CSE (AI & ML) Final Year @ Manipal University Jaipur (Class of 2027).</p>
            <p>Specialization: Async Python/FastAPI microservices, Celery/Redis, ML audio analysis.</p>
          </div>
        );
        break;

      case "internship":
      case "experience":
        output = (
          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p className="text-slate-900 dark:text-white font-medium">
              Software Development Intern @ TruAdaptiv Systems Pvt. Ltd. (Summer 2026)
            </p>
            <p>• VRAS (Voice-based Audit System) AI audio platform.</p>
            <p>• Python 3.12, FastAPI, async SQLAlchemy, Celery, Redis, PostgreSQL.</p>
            <p>• 256 regression tests @ 100% pass rate • 40% turnaround reduction.</p>
            <p>• Deployments: Production VPS systemd + AWS CloudFormation IaC.</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p className="font-medium text-slate-900 dark:text-white">Featured Projects:</p>
            <p>1. VRAS / Shruti-Sakshi AI Compliance Engine (FastAPI, Celery, Redis)</p>
            <p>2. Cognitive Load Aware Analysis (Multimodal ML Workload Classification)</p>
            <p>3. Formula 1 Telemetry & Strategy (Tyre wear modeling & FastF1)</p>
            <p>4. Digital Register for International Students (React + SFU Russia lead)</p>
          </div>
        );
        break;

      case "stack":
      case "skills":
        output = (
          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 font-mono">
            <p>Languages: Python, C/C++, JavaScript, TypeScript, SQL</p>
            <p>Backend: FastAPI, React 18, Next.js, Node.js, async SQLAlchemy, Celery</p>
            <p>AI/ML: TensorFlow, Scikit-learn, XGBoost, SMOTE, Pandas, ASR pipelines</p>
            <p>Infra: PostgreSQL, Redis, MySQL, AWS CloudFormation, VPS, Git</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <p>Email: shubhangibhagat004@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/shubhangi-bhagat-21501a2ab</p>
            <p>GitHub: github.com/BhagatShubhangi</p>
            <p>Location: Delhi, India</p>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Command not recognized: <span className="font-mono text-slate-800 dark:text-slate-200">"{cmdStr}"</span>. Type <span className="font-mono text-navy-700 dark:text-navy-300 font-semibold">help</span> to view available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const shortcuts = ["whoami", "internship", "projects", "stack", "contact", "clear"];

  return (
    <div className="glass-panel rounded-2xl overflow-hidden shadow-md border border-slate-200/80 dark:border-slate-800">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 ml-2 font-medium">
            shubhangi@terminal ~ (bash)
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <Sparkles className="w-3 h-3 text-navy-700 dark:text-navy-300" />
          <span>interactive</span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-5 font-mono text-xs max-h-64 sm:max-h-72 overflow-y-auto space-y-3">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <span className="text-navy-800 dark:text-slate-300 font-bold">$</span>
              <span className="text-slate-900 dark:text-slate-100">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-navy-800 dark:text-slate-300 font-bold">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help' or click a chip below..."
            className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs font-mono"
            aria-label="Interactive terminal input"
          />
          <button
            type="submit"
            className="p-1 rounded text-slate-400 hover:text-slate-800 dark:hover:text-white"
            aria-label="Submit command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

        <div ref={bottomRef} />
      </div>

      {/* Quick Action Chips Bar */}
      <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mr-1">
          Quick Chips:
        </span>
        {shortcuts.map((chip) => (
          <button
            key={chip}
            onClick={() => executeCommand(chip)}
            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-xs"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
