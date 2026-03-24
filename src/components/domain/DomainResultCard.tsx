'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { XCircle, ShoppingCart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DomainLookupResult } from '@/lib/whmcs';

interface DomainResultCardProps {
  result: DomainLookupResult;
  index: number;
}

export function DomainResultCard({ result, index }: DomainResultCardProps) {
  const isAvailable = result.available;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-300",
        isAvailable 
          ? "bg-white dark:bg-surface-900 border-surface-200 dark:border-surface-800 hover:border-primary-500/50 hover:shadow-lg" 
          : "bg-surface-50 dark:bg-surface-950/50 border-surface-100 dark:border-surface-900 opacity-80"
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between p-5 gap-4">
        {/* Domain Info */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            isAvailable 
              ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" 
              : "bg-surface-200 dark:bg-surface-800 text-surface-400"
          )}>
            <Globe size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-surface-900 dark:text-white flex items-center gap-2">
              {result.domain}
              {!isAvailable && <Badge variant="neutral" className="text-[10px]">TAKEN</Badge>}
            </h3>
            <p className="text-xs text-surface-500 font-medium uppercase tracking-wider">
              Registration Extension: {result.extension}
            </p>
          </div>
        </div>

        {/* Pricing & Status */}
        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
          {isAvailable ? (
            <div className="text-right">
              <span className="text-xs text-surface-400 block font-bold">STARTING AT</span>
              <PriceDisplay 
                amount={result.price || 0} 
                className="text-xl font-black text-surface-900 dark:text-white"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 text-surface-400 font-semibold italic text-sm">
              <XCircle size={16} /> Unavailable
            </div>
          )}

          <div className="shrink-0">
            {isAvailable ? (
              <Button size="lg" variant="primary" className="rounded-xl px-6 gap-2 shadow-premium hover:shadow-glow group-hover:scale-105 transition-transform">
                <ShoppingCart size={18} /> Buy Now
              </Button>
            ) : (
              <Button size="lg" variant="outline" disabled className="rounded-xl px-6 border-dashed opacity-50">
                Taken
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Subtle background glow for available items */}
      {isAvailable && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
      )}
    </motion.div>
  );
}
