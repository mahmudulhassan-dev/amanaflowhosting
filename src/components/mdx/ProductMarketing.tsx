import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

interface ProductMarketingProps {
  title: string;
  description: string;
  cta: string;
  link: string;
  type?: "vps" | "shared" | "reseller" | "security";
}

export function ProductMarketing({ title, description, cta, link, type = "vps" }: ProductMarketingProps) {
  const icons = {
    vps: <Zap className="text-white" size={24} />,
    shared: <Globe className="text-white" size={24} />,
    reseller: <ArrowRight className="text-white" size={24} />,
    security: <ShieldCheck className="text-white" size={24} />,
  };

  return (
    <div className="my-12 p-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-[2.5rem] shadow-premium relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
      
      <div className="bg-white dark:bg-surface-950 rounded-[2.2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="w-20 h-20 rounded-3xl bg-primary-600 flex items-center justify-center shadow-glow shrink-0">
          {icons[type]}
        </div>
        
        <div className="flex-1 text-center md:text-left space-y-4">
          <h3 className="text-2xl md:text-3xl font-black text-surface-900 dark:text-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-surface-500 dark:text-surface-400 font-medium text-lg leading-relaxed">
            {description}
          </p>
        </div>
        
        <Button size="lg" className="rounded-2xl px-10 h-16 font-black text-lg shadow-xl hover:shadow-primary-500/20 transition-all gap-3" asChild>
          <Link href={link}>
            {cta}
            <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
