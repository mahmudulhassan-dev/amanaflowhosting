"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  direction?: "up" | "down";
}

export function LanguageToggle({ direction = "down" }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
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
    // Set cookie for next-intl (expires in 1 year)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Refresh to apply changes
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-7 h-7 rounded-full bg-transparent text-surface-400 transition-colors hover:bg-surface-800 hover:text-white focus:outline-none"
        aria-label="Toggle language"
      >
        <Globe size={16} />
      </button>

      {isOpen && (
        <div 
          className={cn(
            "absolute right-0 z-[70] w-36 overflow-hidden rounded-xl border border-surface-200 bg-white/95 backdrop-blur-xl p-1 shadow-premium dark:border-surface-800 dark:bg-surface-950/95 animate-in fade-in zoom-in-95 duration-200",
            direction === "up" ? "bottom-full mb-2 origin-bottom" : "top-8 origin-top"
          )}
        >
          <button
            onClick={() => switchLanguage("en")}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              locale === "en" ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20" : "text-surface-600 dark:text-surface-400"
            )}
          >
            English {locale === "en" && "✓"}
          </button>
          <button
            onClick={() => switchLanguage("bn")}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              locale === "bn" ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20" : "text-surface-600 dark:text-surface-400"
            )}
          >
            বাংলা {locale === "bn" && "✓"}
          </button>
        </div>
      )}
    </div>
  );
}
