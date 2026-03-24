"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Server, Cpu, Globe, Rocket, Terminal, Layers, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./Input";

const apps = [
  { name: "OpenClaw", icon: Server, trending: true },
  { name: "n8n", icon: Rocket, trending: true },
  { name: "Docker", icon: Layers, trending: true },
  { name: "WordPress", icon: Globe },
  { name: "Node.js", icon: Terminal },
  { name: "Ubuntu", icon: Cpu },
  { name: "CentOS", icon: Cpu },
  { name: "Debian", icon: Cpu },
  { name: "cPanel", icon: Layers },
  { name: "CyberPanel", icon: Layers },
  { name: "HestiaCP", icon: Layers },
  { name: "OpenVPN", icon: ShieldCheck }
];

export function AppSelectionGrid() {
  const [search, setSearch] = React.useState("");

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="relative w-full max-w-md">
          <Input 
            placeholder="Search OS or App..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-14 pl-12 bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-800 rounded-2xl"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400" size={20} />
        </div>
        <div className="flex gap-4 text-sm font-bold uppercase tracking-wider text-surface-400">
          <span className="text-primary-600 border-b-2 border-primary-600 pb-1 cursor-pointer">Trending</span>
          <span className="hover:text-surface-600 transition-colors cursor-pointer">Control Panels</span>
          <span className="hover:text-surface-600 transition-colors cursor-pointer">Plain OS</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredApps.map((app, idx) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -5, borderColor: "var(--primary-500)" }}
            className="group p-6 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-3xl flex flex-col items-center justify-center text-center transition-all cursor-pointer hover:shadow-premium relative overflow-hidden"
          >
            {app.trending && (
              <div className="absolute top-0 right-0 bg-primary-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase">Top</div>
            )}
            <div className="w-12 h-12 rounded-2xl bg-surface-50 dark:bg-surface-800 flex items-center justify-center mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 transition-colors">
              <app.icon size={24} />
            </div>
            <span className="text-sm font-bold text-surface-700 dark:text-surface-300 group-hover:text-surface-900 dark:group-hover:text-white transition-colors">
              {app.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
