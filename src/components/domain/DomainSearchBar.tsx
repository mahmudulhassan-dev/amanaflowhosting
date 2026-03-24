'use client';

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, Loader2, Sparkles, AlertCircle, Globe } from 'lucide-react';
import { DomainResultCard } from './DomainResultCard';
import { DomainLookupResult } from '@/lib/whmcs';
import { useImperativeHandle, forwardRef } from 'react';

export interface DomainSearchBarHandle {
  setSearchQuery: (query: string) => void;
  triggerSearch: (query: string) => void;
}

export const DomainSearchBar = forwardRef<DomainSearchBarHandle>((_, ref) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DomainLookupResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    setSearchQuery: (q: string) => setQuery(q),
    triggerSearch: (q: string) => {
      setQuery(q);
      handleSearchInternal(q);
    }
  }));

  const handleSearch = async (e?: FormEvent) => {
     if (e) e.preventDefault();
     handleSearchInternal(query);
  };

  const handleSearchInternal = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch(`/api/domain/lookup?domain=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error('Failed to fetch domain status');
      
      const data = await response.json();
      // The original instruction had a syntactically incorrect line here.
      // Assuming the intent was to set the results, and potentially cast them.
      // The most faithful and syntactically correct interpretation that
      // includes parts of the provided snippet would be to ensure the type
      // of data.results and then set it.
      setResults((data.results || []) as DomainLookupResult[]);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input Box */}
      <div className="relative group animate-in fade-in zoom-in-95 duration-700">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-indigo-500/20 to-primary-600/20 rounded-[2rem] blur-2xl opacity-0 group-focus-within:opacity-100 transition duration-1000" />
        
        <form 
          onSubmit={handleSearch}
          className="relative bg-white dark:bg-surface-950/80 backdrop-blur-2xl border border-surface-200 dark:border-white/10 p-2 rounded-[1.75rem] shadow-2xl overflow-hidden flex flex-col sm:flex-row gap-3"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary-500 transition-colors" size={24} />
            <Input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your brand name (e.g., amanaflow)" 
              className="h-16 text-xl bg-transparent border-none text-surface-900 dark:text-white pl-12 pr-4 rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-surface-400 font-medium"
            />
          </div>
          <Button 
            disabled={isLoading || !query.trim()}
            type="submit"
            size="xl" 
            variant="primary" 
            className="md:w-auto h-16 w-full px-10 shrink-0 text-lg font-bold rounded-2xl shadow-glow active:scale-[0.98] transition-transform flex items-center gap-3"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Searching...
              </>
            ) : (
              <>
                Search Domain <Sparkles size={20} className="fill-current" />
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Results / Error / Loading States */}
      <div className="mt-12 space-y-4 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-full h-24 bg-surface-100 dark:bg-surface-900/50 animate-pulse rounded-2xl border border-surface-200 dark:border-surface-800" />
              ))}
            </motion.div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-danger-50 dark:bg-danger-900/10 border border-danger-200 dark:border-danger-900/50 text-danger-600 font-medium justify-center"
            >
              <AlertCircle size={20} /> {error}
            </motion.div>
          )}

          {results.length > 0 && !isLoading && (
            <div className="space-y-4">
               <div className="flex items-center justify-between px-2 mb-6">
                 <h3 className="text-xl font-black text-surface-900 dark:text-white tracking-tight uppercase">Search Results</h3>
                 <span className="text-xs font-bold text-surface-400 bg-surface-100 dark:bg-surface-800 px-3 py-1 rounded-full">
                   {results.filter(r => r.available).length} AVAILABLE
                 </span>
               </div>
               {results.map((res, idx) => (
                 <DomainResultCard key={res.domain} result={res} index={idx} />
               ))}
            </div>
          )}

          {!isLoading && results.length === 0 && !error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center pt-20 text-center space-y-4 opacity-40 grayscale"
            >
               <Globe size={80} className="text-surface-300 dark:text-surface-700" />
               <p className="text-lg font-medium text-surface-500">Search for a domain to see availability and pricing.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

DomainSearchBar.displayName = 'DomainSearchBar';
