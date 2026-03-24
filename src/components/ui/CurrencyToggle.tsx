"use client";

import * as React from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface CurrencyToggleProps {
  direction?: "up" | "down";
}

export function CurrencyToggle({ direction = "down" }: CurrencyToggleProps) {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = React.useState(false);
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 h-7 rounded-full bg-transparent text-[11px] font-bold text-surface-400 transition-colors hover:bg-surface-800 hover:text-white focus:outline-none"
      >
        <DollarSign size={12} />
        <span className="uppercase">{currency}</span>
      </button>

      {isOpen && (
        <div 
          className={cn(
            "absolute right-0 z-[70] w-32 overflow-hidden rounded-xl border border-surface-200 bg-white/95 backdrop-blur-xl p-1 shadow-premium dark:border-surface-800 dark:bg-surface-950/95 animate-in fade-in zoom-in-95 duration-200",
            direction === "up" ? "bottom-full mb-2 origin-bottom" : "top-8 origin-top"
          )}
        >
          <button
            onClick={() => { setCurrency("USD"); setIsOpen(false); }}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              currency === "USD" ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20" : "text-surface-600 dark:text-surface-400"
            )}
          >
            USD ($) {currency === "USD" && "✓"}
          </button>
          <button
            onClick={() => { setCurrency("BDT"); setIsOpen(false); }}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-100 dark:hover:bg-surface-900",
              currency === "BDT" ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20" : "text-surface-600 dark:text-surface-400"
            )}
          >
            BDT (৳) {currency === "BDT" && "✓"}
          </button>
        </div>
      )}
    </div>
  );
}
