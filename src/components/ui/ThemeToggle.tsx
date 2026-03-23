"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9 border border-surface-200 dark:border-surface-800 rounded-lg animate-pulse bg-surface-100 dark:bg-surface-800" />;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-surface-200 bg-white text-surface-600 transition-colors hover:bg-surface-100 dark:border-surface-800 dark:bg-surface-950 dark:text-surface-400 dark:hover:bg-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        aria-label="Toggle theme"
      >
        {theme === "light" && <Sun size={18} />}
        {theme === "dark" && <Moon size={18} />}
        {theme === "system" && <Monitor size={18} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-36 overflow-hidden rounded-xl border border-surface-200 bg-white p-1 shadow-premium dark:border-surface-800 dark:bg-surface-950 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => { setTheme("light"); setIsOpen(false); }}
            className={cn(
              "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              theme === "light" ? "text-primary-600 dark:text-primary-400" : "text-surface-600 dark:text-surface-400"
            )}
          >
            <Sun size={16} /> Light
          </button>
          <button
            onClick={() => { setTheme("dark"); setIsOpen(false); }}
            className={cn(
              "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              theme === "dark" ? "text-primary-600 dark:text-primary-400" : "text-surface-600 dark:text-surface-400"
            )}
          >
            <Moon size={16} /> Dark
          </button>
          <div className="my-1 border-t border-surface-100 dark:border-surface-800" />
          <button
            onClick={() => { setTheme("system"); setIsOpen(false); }}
            className={cn(
              "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              theme === "system" ? "text-primary-600 dark:text-primary-400" : "text-surface-600 dark:text-surface-400"
            )}
          >
            <Monitor size={16} /> System
          </button>
        </div>
      )}
    </div>
  );
}
