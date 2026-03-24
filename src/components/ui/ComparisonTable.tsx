"use client";

import React from "react";
import { Check, X, Minus, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { motion } from "framer-motion";

export type ComparisonFeature = {
  name: string;
  description?: string;
  values: (boolean | string | number | null)[];
};

export type ComparisonCategory = {
  title: string;
  features: ComparisonFeature[];
};

interface ComparisonTableProps {
  plans: string[];
  categories: ComparisonCategory[];
  highlightPlanIndex?: number;
}

export function ComparisonTable({ plans, categories, highlightPlanIndex }: ComparisonTableProps) {
  return (
    <div className="w-full overflow-x-auto pb-8">
      <div className="min-w-[800px] w-full border border-surface-200 dark:border-surface-800 rounded-3xl overflow-hidden bg-white dark:bg-surface-950 shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-50 dark:bg-surface-900/50">
              <th className="py-8 px-6 text-left w-1/3 border-b border-surface-200 dark:border-surface-800">
                <span className="text-sm font-bold uppercase tracking-widest text-surface-400">Features</span>
              </th>
              {plans.map((plan, idx) => (
                <th 
                  key={plan} 
                  className={cn(
                    "py-8 px-6 text-center border-b border-surface-200 dark:border-surface-800",
                    highlightPlanIndex === idx && "bg-primary-50/30 dark:bg-primary-900/10"
                  )}
                >
                  <span className={cn(
                    "text-lg font-bold",
                    highlightPlanIndex === idx ? "text-primary-600 dark:text-primary-400" : "text-surface-900 dark:text-white"
                  )}>
                    {plan}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <React.Fragment key={category.title}>
                <tr className="bg-surface-100/50 dark:bg-surface-800/30">
                  <td 
                    colSpan={plans.length + 1} 
                    className="py-4 px-6 text-sm font-extrabold uppercase tracking-wider text-surface-500 border-y border-surface-200 dark:border-surface-800"
                  >
                    {category.title}
                  </td>
                </tr>
                {category.features.map((feature, fIdx) => (
                  <motion.tr 
                    key={feature.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fIdx * 0.05 }}
                    className="group border-b border-surface-100 dark:border-surface-800/50 hover:bg-surface-50 dark:hover:bg-surface-900/50 transition-colors"
                  >
                    <td className="py-5 px-6">
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-surface-900 dark:text-white flex items-center gap-2">
                          {feature.name}
                          {feature.description && (
                            <div className="group/info relative inline-block">
                              <Info size={14} className="text-surface-400 cursor-help" />
                              <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-surface-900 text-white text-xs rounded-lg opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all z-20">
                                {feature.description}
                              </div>
                            </div>
                          )}
                        </span>
                      </div>
                    </td>
                    {feature.values.map((val, vIdx) => (
                      <td 
                        key={vIdx} 
                        className={cn(
                          "py-5 px-6 text-center text-sm",
                          highlightPlanIndex === vIdx && "bg-primary-50/20 dark:bg-primary-900/5"
                        )}
                      >
                        {typeof val === 'boolean' ? (
                          val ? (
                            <Check className="mx-auto text-success-500" size={20} strokeWidth={3} />
                          ) : (
                            <Minus className="mx-auto text-surface-300 dark:text-surface-700" size={20} />
                          )
                        ) : val === null ? (
                            <X className="mx-auto text-error-500" size={20} strokeWidth={3} />
                        ) : (
                          <span className={cn(
                            "font-medium",
                            highlightPlanIndex === vIdx ? "text-primary-700 dark:text-primary-300 font-bold" : "text-surface-600 dark:text-surface-400"
                          )}>
                            {val}
                          </span>
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
