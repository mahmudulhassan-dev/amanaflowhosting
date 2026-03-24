'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { cn } from '@/lib/utils';
import { Clock, Share2, Printer } from 'lucide-react';

interface ContentLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: ReactNode;
  sections?: { id: string; title: string }[];
  className?: string;
}

export function ContentLayout({
  title,
  subtitle,
  lastUpdated,
  children,
  sections,
  className
}: ContentLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-white dark:bg-surface-950", className)}>
      {/* Hero Header */}
      <SectionWrapper className="bg-surface-50 dark:bg-surface-900/30 pt-32 pb-16 border-b border-surface-200 dark:border-surface-800">
        <div className="max-w-4xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-sm uppercase tracking-widest mb-4">
              <Clock size={16} />
              Last Updated: {lastUpdated}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-surface-900 dark:text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-surface-200 dark:border-surface-800">
              <button className="flex items-center gap-2 text-sm text-surface-500 hover:text-primary-600 transition-colors">
                <Share2 size={16} /> Share
              </button>
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-sm text-surface-500 hover:text-primary-600 transition-colors"
              >
                <Printer size={16} /> Print
              </button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Main Content Area */}
      <SectionWrapper paddingY="xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
          
          {/* Side Navigation (Desktop TOC) */}
          {sections && sections.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0">
               <div className="sticky top-28 space-y-6">
                 <h4 className="text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider mb-6">In This Section</h4>
                 <nav className="flex flex-col gap-3">
                   {sections.map((section) => (
                     <a 
                       key={section.id}
                       href={`#${section.id}`}
                       className="text-sm font-medium text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-all hover:translate-x-1"
                     >
                       {section.title}
                     </a>
                   ))}
                 </nav>
               </div>
            </aside>
          )}

          {/* Body Text */}
          <div className="flex-1 max-w-4xl prose prose-surface dark:prose-invert prose-headings:font-bold prose-h2:text-3xl prose-p:text-lg prose-p:leading-relaxed text-surface-600 dark:text-surface-400">
             {children}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
