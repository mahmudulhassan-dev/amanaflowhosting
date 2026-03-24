import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Activity, ShieldAlert, Zap, Server } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "DDoS Protection - AmanaFlow",
  description: "Enterprise-grade DDoS mitigation to keep your infrastructure online during massive attacks.",
  alternates: {
    canonical: "/ddos-protection",
    languages: generateAlternateLanguages("/ddos-protection"),
  }
};

export default function DDoSProtectionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-20 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Badge variant="primary" className="mb-6 bg-red-500/10 text-red-500 border-red-500/20">Active on all Dedicated & VPS Nodes</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Stop volumetric attacks <br/> <span className="text-red-500">dead in their tracks.</span>
          </h1>
          <p className="text-lg text-surface-400 mb-10 max-w-2xl mx-auto">
            Our global Anycast network absorbs up to 10 Tbps of malicious traffic before it ever reaches your server. Say goodbye to downtime and extortion.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-premium border-none" asChild>
              <Link href="/dedicated-server-hosting">Deploy Protected Server</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS grid ─── */}
      <SectionWrapper paddingY="xl">
        <SectionHeader 
          title="Automated L3/L4/L7 Mitigation" 
          description="Unlike traditional scrubbing centers that cause latency, our inline mitigation filters traffic at the edge within sub-milliseconds."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Text */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-100 dark:bg-surface-800 rounded-xl flex items-center justify-center shrink-0">
                 <Activity size={24} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Behavioural Analysis</h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">AI-driven traffic profiling instantly differentiates between legitimate users and botnet floods across UDP, TCP, and ICMP vectors.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-100 dark:bg-surface-800 rounded-xl flex items-center justify-center shrink-0">
                 <ShieldAlert size={24} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Layer 7 Protection</h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">Advanced WAF rules drop sophisticated HTTP floods, Slowloris, and application-layer attacks without triggering false positives for real users.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-surface-100 dark:bg-surface-800 rounded-xl flex items-center justify-center shrink-0">
                 <Zap size={24} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Always-On Edge Subnets</h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">Mitigation is inline and always active. There&apos;s zero rerouting delay when an attack starts; packets are filtered transparently.</p>
              </div>
            </div>
          </div>
          
          {/* Right Visual Dashboard Mock */}
          <div className="relative">
             <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full" />
             <Card className="bg-surface-950 border-surface-800 overflow-hidden shadow-2xl relative z-10">
               <div className="flex items-center px-4 py-3 border-b border-surface-800 bg-surface-900">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20" />
                 </div>
                 <span className="mx-auto text-xs text-surface-500 font-mono">DDoS Dashboard</span>
               </div>
               <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-surface-500 text-sm mb-1">Incoming Traffic</p>
                      <p className="text-3xl font-bold text-white">45.2 Gbps</p>
                    </div>
                    <div>
                      <p className="text-surface-500 text-sm mb-1 text-right">Packets Dropped</p>
                      <p className="text-3xl font-bold text-red-500">12.8 Mpps</p>
                    </div>
                  </div>
                  
                  {/* Fake Graph */}
                  <div className="h-40 w-full flex items-end gap-2 border-b border-surface-800 pb-2">
                    {[30, 25, 40, 80, 95, 100, 85, 45, 30, 25, 20].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t flex flex-col justify-end relative group">
                        {h > 50 && (
                          <div className={`w-full bg-red-500/80 rounded-t`} style={{ height: `${(h-50)}%` }} />
                        )}
                        <div className={`w-full bg-primary-500/80 rounded-t border-t border-primary-400`} style={{ height: `${Math.min(h, 50)}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-surface-500 mt-2 font-mono">
                    <span>-10 mins</span>
                    <span>Attack Detected</span>
                    <span>Now</span>
                  </div>
               </CardContent>
             </Card>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}
