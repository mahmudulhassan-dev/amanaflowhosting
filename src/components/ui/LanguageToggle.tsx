"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  // Close dropdown when clicked outside
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (newLocale: string) => {
    // Basic language switching logic for Next.js App Router (locale routing)
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "bn") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/") || "/");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-surface-200 bg-white text-surface-600 transition-colors hover:bg-surface-100 dark:border-surface-800 dark:bg-surface-950 dark:text-surface-400 dark:hover:bg-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        aria-label="Toggle language"
      >
        <Globe size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-36 overflow-hidden rounded-xl border border-surface-200 bg-white p-1 shadow-premium dark:border-surface-800 dark:bg-surface-950 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => switchLanguage("en")}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              locale === "en" ? "text-primary-600 dark:text-primary-400" : "text-surface-600 dark:text-surface-400"
            )}
          >
            English {locale === "en" && "✓"}
          </button>
          <button
            onClick={() => switchLanguage("bn")}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              locale === "bn" ? "text-primary-600 dark:text-primary-400" : "text-surface-600 dark:text-surface-400"
            )}
          >
            বাংলা {locale === "bn" && "✓"}
          </button>
        </div>
      )}
    </div>
  );
}
