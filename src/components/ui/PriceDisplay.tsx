"use client";

import * as React from "react";
import { useCurrency } from "@/context/CurrencyContext";

interface PriceDisplayProps {
  amount: number; // in USD
  className?: string;
  monthly?: boolean;
}

export function PriceDisplay({ amount, className = "", monthly = false }: PriceDisplayProps) {
  const { currency, exchangeRate } = useCurrency();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // SSR Fallback Default
    return (
      <span className={className}>
        ${amount.toFixed(2)}
        {monthly && <span className="text-surface-500 font-normal text-[0.6em] ml-1">/mo</span>}
      </span>
    );
  }

  if (currency === "BDT") {
    const bdtAmount = Math.round(amount * exchangeRate);
    return (
      <span className={className}>
        ৳{bdtAmount.toLocaleString()}
        {monthly && <span className="text-surface-500 font-normal text-[0.6em] ml-1">/m</span>}
      </span>
    );
  }

  return (
    <span className={className}>
      ${amount.toFixed(2)}
      {monthly && <span className="text-surface-500 font-normal text-[0.6em] ml-1">/mo</span>}
    </span>
  );
}
