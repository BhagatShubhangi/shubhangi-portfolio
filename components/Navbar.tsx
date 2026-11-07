"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, FileText, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTabs = [
    { name: "Overview", href: "/" },
    { name: "Internship", href: "/internship" },
    { name: "Projects", href: "/projects" },
    { name: "Timeline & Journey", href: "/journey" },
    { name: "Skills & Stack", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl glass-panel shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
        >
          <span className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center font-mono text-xs font-bold shadow-xs group-hover:scale-105 transition-transform">
            SB
          </span>
          <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 font-mono tracking-tight hidden sm:inline">
            shubhangi.dev
          </span>
        </Link>

        {/* Center Desktop Glass Dock Tabs */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl glass-panel shadow-sm">
          {navTabs.map((tab) => {
            const active = isActive(tab.href);
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  active
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Resume */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation"
            className="md:hidden p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl glass-panel p-4 space-y-2 shadow-lg border border-slate-200 dark:border-slate-800 animate-fade-in">
          {navTabs.map((tab) => {
            const active = isActive(tab.href);
            return (
              <Link
                key={tab.name}
                href={tab.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-xs font-mono font-medium transition-colors ${
                  active
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
            >
              <FileText className="w-4 h-4" />
              Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
