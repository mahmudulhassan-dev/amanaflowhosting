"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function BlogCTA() {
  return (
    <section className="py-24">
      <div className="relative overflow-hidden bg-primary-600 rounded-[3rem] p-12 md:p-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-400)_0%,transparent_60%)] opacity-30" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-700/50 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl mx-auto flex items-center justify-center text-white border border-white/20">
             <Sparkles size={40} className="text-primary-100" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05]">
            Master the Cloud. Fast-track your hosting growth.
          </h2>
          <p className="text-xl text-primary-100 font-medium max-w-2xl mx-auto">
            Get technical deep-dives and automation tutorials delivered to your inbox. No spam, only engineering excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <div className="flex-1 max-w-md relative group">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full h-16 px-8 rounded-2xl bg-white text-surface-900 font-bold placeholder:text-surface-400 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all shadow-xl"
              />
              <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-200 group-focus-within:text-primary-600 transition-colors" size={24} />
            </div>
            <Button size="xl" className="h-16 px-12 bg-white text-primary-600 hover:bg-surface-50 font-black text-xl rounded-2xl shadow-xl active:scale-[0.98] transition-all">
               Join 5,000+ Founders <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
