"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Wand2, ShieldCheck, Zap, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

const aiFeatures = [
  {
    title: "AI Website Builder",
    description: "Launch your business in minutes. Our AI understands your vision and builds a responsive, SEO-optimized site instantly.",
    icon: Wand2,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "AI Business Agent",
    description: "Your personalized virtual assistant for server management. Ask questions and execute complex commands via simple chat.",
    icon: Bot,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "AI Troubleshooter",
    description: "Instantly detect and fix WordPress errors or server bottlenecks. Our AI predicts issues before they affect your traffic.",
    icon: Sparkles,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "AI Smart Firewall",
    description: "Adaptive security that learns from global attack patterns. Proactively blocks malicious traffic with zero false positives.",
    icon: ShieldCheck,
    color: "bg-emerald-500/10 text-emerald-500",
  }
];

export function AIFeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {aiFeatures.map((feature, idx) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -5 }}
          className="group relative bg-[#0F172AC0] backdrop-blur-3xl border border-white/5 p-8 rounded-[2rem] overflow-hidden"
        >
          {/* Subtle Glow Influence */}
          <div className={cn("absolute -top-10 -right-10 w-32 h-32 blur-[80px] opacity-20 transition-opacity group-hover:opacity-40", feature.color.split(' ')[0].replace('text-', 'bg-'))} />
          
          <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", feature.color)}>
            <feature.icon size={28} />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
            {feature.title}
          </h3>
          
          <p className="text-surface-400 text-sm leading-relaxed">
            {feature.description}
          </p>

          <div className="mt-8 flex items-center gap-2 text-xs font-bold text-primary-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Learn More <Zap size={12} className="fill-current" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
