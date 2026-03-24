'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, Loader2, ArrowRight, Lightbulb, Zap, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AISuggestion } from '@/lib/ai';

interface AIDomainGeneratorProps {
  onSelectDomain: (domain: string) => void;
}

export function AIDomainGenerator({ onSelectDomain }: AIDomainGeneratorProps) {
  const [description, setDescription] = useState('');
  const [vibe, setVibe] = useState('professional');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    
    setIsLoading(true);
    setSuggestions([]);
    
    try {
      const response = await fetch('/api/domain/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, vibe }),
      });
      
      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error("AI Generation Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const vibes = [
    { id: 'professional', label: 'Professional', icon: <Zap size={14} />, color: 'bg-blue-500' },
    { id: 'creative', label: 'Creative', icon: <Lightbulb size={14} />, color: 'bg-purple-500' },
    { id: 'techy', label: 'Techy', icon: <Rocket size={14} />, color: 'bg-indigo-500' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 mt-16">
      <Card className="p-1 overflow-hidden bg-white/5 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-200 dark:border-white/10 rounded-[2rem]">
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
               <Sparkles size={20} />
             </div>
             <h3 className="text-xl font-bold text-surface-900 dark:text-white">AI Domain Brainstorming</h3>
          </div>

          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your project (e.g. A premium hosting provider specializing in cloud solutions for startups)"
            className="w-full h-32 bg-surface-50 dark:bg-surface-950/50 border border-surface-200 dark:border-white/5 rounded-2xl p-4 text-surface-900 dark:text-white placeholder:text-surface-500 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
          />

          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
             <div className="flex gap-2 bg-surface-100 dark:bg-surface-900 p-1 rounded-xl">
               {vibes.map((v) => (
                 <button
                   key={v.id}
                   onClick={() => setVibe(v.id)}
                   className={cn(
                     "px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all",
                     vibe === v.id 
                       ? "bg-white dark:bg-surface-800 text-surface-900 dark:text-white shadow-sm" 
                       : "text-surface-500 hover:text-surface-700 dark:hover:text-surface-300"
                   )}
                 >
                   {v.icon} {v.label}
                 </button>
               ))}
             </div>

             <Button 
               onClick={handleGenerate}
               disabled={isLoading || !description.trim()}
               variant="primary" 
               size="lg" 
               className="w-full md:w-auto px-8 rounded-xl h-14 font-bold shadow-premium"
             >
               {isLoading ? <><Loader2 className="animate-spin mr-2" /> Generating...</> : 'Magic Suggest Domain'}
             </Button>
          </div>
        </div>
      </Card>

      {/* Suggested Results */}
      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {suggestions.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 p-5 rounded-2xl hover:border-primary-500/40 transition-all hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-3">
                   <div>
                     <span className="text-sm font-bold text-primary-500 mb-1 block uppercase tracking-tighter">AI Suggestion</span>
                     <h4 className="text-lg font-black text-surface-900 dark:text-white">{s.name}<span className="text-surface-400">{s.tld}</span></h4>
                   </div>
                   <Badge variant="neutral" className="bg-surface-100 dark:bg-surface-800 text-[10px]">{vibe}</Badge>
                </div>
                <p className="text-xs text-surface-500 leading-relaxed mb-4">{s.reason}</p>
                <Button 
                   onClick={() => onSelectDomain(`${s.name}${s.tld}`)}
                   variant="outline" 
                   size="sm" 
                   className="w-full rounded-lg text-xs font-bold gap-2 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-colors"
                >
                  Check Availability <ArrowRight size={14} />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
