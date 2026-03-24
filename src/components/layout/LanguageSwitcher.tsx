"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { locales } from "@/i18n";
import { cn } from "@/lib/utils";

const languageNames: Record<string, { name: string; flag: string }> = {
  en: { name: "English", flag: "🇺🇸" },
  bn: { name: "বাংলা", flag: "🇧🇩" },
  ar: { name: "العربية", flag: "🇸🇦" },
  es: { name: "Español", flag: "🇪🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
};

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = React.useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // In a no-prefix strategy, we might need a different way to switch.
    // However, assuming route-based or cookie-based:
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 px-3 py-2 text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white transition-colors h-9 rounded-full border border-transparent hover:border-surface-200 dark:hover:border-surface-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={16} className="text-primary-500" />
        <span className="text-xs font-bold uppercase tracking-wider">{locale}</span>
        <ChevronDown size={12} className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-surface-200 bg-white p-2 shadow-premium animate-in fade-in slide-in-from-top-2 z-20 dark:border-surface-800 dark:bg-surface-950">
            <div className="px-3 py-2 text-[10px] font-black text-surface-400 uppercase tracking-widest border-b border-surface-100 dark:border-surface-800 mb-1">
              Select Language
            </div>
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => handleLocaleChange(l)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                  locale === l 
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" 
                    : "text-surface-600 hover:bg-surface-50 dark:text-surface-400 dark:hover:bg-surface-900/50 dark:hover:text-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{languageNames[l]?.flag}</span>
                  <span>{languageNames[l]?.name}</span>
                </div>
                {locale === l && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-glow" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
