"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type CurrencyType = "USD" | "BDT";

interface CurrencyContextType {
  currency: CurrencyType;
  setCurrency: (currency: CurrencyType) => void;
  exchangeRate: number; // 1 USD = X BDT
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyType>("USD");
  const exchangeRate = 120; // Dummy phase exchange rate for AmanaFlow

  useEffect(() => {
    const saved = localStorage.getItem("amanaflow-currency") as CurrencyType;
    if (saved && (saved === "USD" || saved === "BDT")) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (newCurrency: CurrencyType) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("amanaflow-currency", newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRate }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
