"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Cpu, HardDrive, Zap, ArrowRight, Shield, Globe, Terminal, Bot, Gauge, Activity } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { cn } from "@/lib/utils";
import { generateAlternateLanguages } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { motion } from "framer-motion";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { TrustCarousel } from "@/components/ui/TrustCarousel";
import { AppSelectionGrid } from "@/components/ui/AppSelectionGrid";

const vpsPlans = ["KVM 1", "KVM 2", "KVM 4", "KVM 8"];

const vpsCategories = [
  {
    title: "Resources",
    features: [
      { name: "vCPU Cores", values: ["1 Core", "2 Cores", "4 Cores", "8 Cores"] },
      { name: "NVMe Storage", values: ["50 GB", "100 GB", "200 GB", "400 GB"] },
      { name: "RAM", values: ["4 GB", "8 GB", "16 GB", "32 GB"] },
      { name: "Bandwidth", values: ["4 TB", "8 TB", "16 TB", "32 TB"] },
      { name: "Network Speed", values: ["1 Gbps", "1 Gbps", "1 Gbps", "1 Gbps"] },
    ]
  },
  {
    title: "AI Management",
    features: [
      { name: "AI VPS Assistant (Kodee)", values: [true, true, true, true] },
      { name: "AI Monitoring & Auto-Scaling", values: [false, true, true, true] },
      { name: "AI Threat Detection", values: [true, true, true, true] },
    ]
  },
  {
    title: "Technical Specs",
    features: [
      { name: "Full Root Access", values: [true, true, true, true] },
      { name: "Dedicated IPv4", values: [true, true, true, true] },
      { name: "AMD EPYC™ Processors", values: [true, true, true, true] },
      { name: "KVM Virtualization", values: [true, true, true, true] },
      { name: "Remote Backups", values: ["Weekly", "Weekly", "Daily", "Daily"] },
    ]
  }
];

const testimonials = [
  {
    name: "Maxim Shishkin",
    role: "Full Stack Developer",
    content: "Everything is smooth and great with AmanaFlow, the AI chat bot + human chat is just fire. No ups and downs. Rock solid performance for my n8n instance.",
    rating: 5
  },
  {
    name: "Gad Iradufasha",
    role: "DevOps Engineer",
    content: "Consistently top-notch uptime. Whenever I've needed help, their technical support team has been quick, knowledgeable, and genuinely helpful.",
    rating: 5
  }
];

export default function VPSHostingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712]">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-[#030712] text-white pt-24 pb-48 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40">
           <div className="absolute top-[-20%] right-[-10%] w-full h-full bg-primary-600/10 rounded-full blur-[180px]" />
           <div className="absolute bottom-[-20%] left-[-10%] w-full h-full bg-indigo-600/10 rounded-full blur-[180px]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" styleType="solid" className="mb-8 rounded-full px-6 py-2 bg-primary-600/20 text-primary-400 border border-primary-500/30">
              AI-MANAGED CLOUD VPS
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
              Pure Performance. <br/> <span className="text-primary-500">Managed by AI.</span>
            </h1>
            <p className="text-xl md:text-2xl text-surface-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              AMD EPYC™ processors, NVMe RAID-10, and 1Gbps networking. All managed by <span className="text-white font-bold italic">Kodee</span>, your personal AI VPS agent.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="xl" variant="primary" className="h-16 px-12 rounded-2xl shadow-glow font-black text-xl hover:scale-105 transition-transform" asChild>
                <Link href="#pricing">See VPS Plans <ArrowRight className="ml-2"/></Link>
              </Button>
              <Button size="xl" variant="glass" className="h-16 px-12 group border-white/5 bg-white/5">
                <Terminal className="mr-2 group-hover:text-primary-500 transition-colors" size={20}/> Browser Terminal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper id="pricing" paddingY="none" className="-mt-32 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4">
          
          {[
            { name: "KVM 1", price: 6.49, cpu: 1, ram: 4, ssd: 50, bw: 4, badge: "-67% OFF" },
            { name: "KVM 2", price: 8.99, cpu: 2, ram: 8, ssd: 100, bw: 8, badge: "-63% OFF", popular: true },
            { name: "KVM 4", price: 12.99, cpu: 4, ram: 16, ssd: 200, bw: 16, badge: "-70% OFF" },
            { name: "KVM 8", price: 25.99, cpu: 8, ram: 32, ssd: 400, bw: 32, badge: "-65% OFF" },
          ].map((plan) => (
            <Card key={plan.name} className={cn(
              "bg-white/90 dark:bg-surface-950/90 backdrop-blur-3xl border-surface-200 dark:border-surface-800 rounded-[2.5rem] p-4 flex flex-col group hover:shadow-premium transition-all relative overflow-hidden",
              plan.popular && "border-primary-500 shadow-glow"
            )}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-6 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">Most Popular</div>
              )}
              <CardHeader className="pt-8 text-center px-4">
                <div className="text-primary-500 text-xs font-black mb-2 uppercase tracking-widest">{plan.badge}</div>
                <CardTitle className="text-2xl font-black mb-2">{plan.name}</CardTitle>
                <CardDescription className="font-bold flex items-center justify-center gap-2">
                  <Activity size={14} className="text-primary-500" /> AMD EPYC High Performance
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 px-4">
                <div className="mb-10 text-center">
                   <div className="flex items-baseline justify-center gap-1">
                     <span className="text-2xl font-bold">$</span>
                     <PriceDisplay amount={plan.price} className="text-5xl font-black text-surface-900 dark:text-white" />
                     <span className="text-surface-500 font-bold">/mo</span>
                   </div>
                   <div className="text-[10px] font-bold text-surface-400 mt-2 uppercase tracking-wide">Renews at market price</div>
                </div>
                <div className="bg-surface-50 dark:bg-surface-900/50 rounded-3xl p-6 space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold">
                     <span className="text-surface-500">vCPU</span>
                     <span className="text-surface-900 dark:text-white">{plan.cpu} {plan.cpu === 1 ? 'Core' : 'Cores'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                     <span className="text-surface-500">RAM</span>
                     <span className="text-surface-900 dark:text-white">{plan.ram} GB</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                     <span className="text-surface-500">NVMe SSD</span>
                     <span className="text-surface-900 dark:text-white">{plan.ssd} GB</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                     <span className="text-surface-500">Bandwidth</span>
                     <span className="text-surface-900 dark:text-white">{plan.bw} TB</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pb-8 px-4">
                <Button variant={plan.popular ? "primary" : "outline"} fullWidth size="xl" className="rounded-2xl h-14 font-black active:scale-[0.98] transition-all shadow-premium" asChild>
                   <Link href={siteConfig.whmcsUrl}>Select vps</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}

        </div>
      </SectionWrapper>

      {/* ─── AI AGENT SECTION ─── */}
      <SectionWrapper paddingY="xl" className="pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="relative order-2 lg:order-1">
             <div className="absolute -inset-10 bg-primary-500/10 blur-[100px] rounded-full opacity-30" />
             <div className="relative bg-[#0F172AC0] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                   <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                      <Bot className="text-white" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold">Kodee AI Agent</h4>
                      <p className="text-xs text-primary-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" /> Online & Ready</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-surface-200">
                      Hello! I noticed your CPU usage spike to 85% on KVM 2. Should I optimize the PHP pool or suggest an auto-scale?
                   </div>
                   <div className="bg-primary-600 p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] text-sm text-white font-medium">
                      Optimize the PHP pool and show me the latest logs.
                   </div>
                   <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm text-surface-200">
                      Optimized. Log tail: [2026-03-24 15:50] Notice: Pool www scaled to 20 child processes. Load dropped to 12%.
                   </div>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex gap-4">
                   <div className="flex-1 bg-white/5 rounded-xl h-12 flex items-center px-4 text-xs text-surface-500">Ask Kodee to manage your VPS...</div>
                   <Button size="icon" variant="primary" className="rounded-xl"><ArrowRight size={18}/></Button>
                </div>
             </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <Badge variant="primary" styleType="soft">Next-Gen Management</Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-surface-900 dark:text-white leading-[1.1]">
              Meet <span className="text-primary-500">Kodee</span>. Your AI VPS Agent.
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              Forget complex SSH commands. Kodee is powered by the Model Context Protocol (MCP), allowing you to monitor health, manage firewalls, and handle backups via natural language chat.
            </p>
            <ul className="space-y-4">
              {[
                "Monitor CPU, RAM, and Disk in real-time.",
                "Set up and update firewall rules instantly.",
                "Create snapshots and restore directly from chat.",
                "Automate Docker Compose deployments with prompts."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-surface-700 dark:text-surface-200">
                  <div className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center text-[10px] font-black">{idx + 1}</div>
                  {item}
                </li>
              ))}
            </ul>
             <Button size="xl" variant="primary" className="h-16 px-10 rounded-2xl shadow-glow font-bold active:scale-[0.98] transition-transform">
               Get Started with Kodee
             </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── APP SELECTION GRID ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Ready to deploy in one click" 
          description="From popular Linux distros to specialized containers like OpenClaw and n8n. Deploy elite infrastructure in 55 seconds."
          badge="OS & Apps"
        />
        <AppSelectionGrid />
      </SectionWrapper>

      {/* ─── COMPARISON SECTION ─── */}
      <SectionWrapper paddingY="xl">
        <SectionHeader 
          title="VPS Technical Breakdown" 
          description="Everything you need to scale your high-traffic project with absolute control."
          badge="Detailed Specs"
        />
        <ComparisonTable 
          plans={vpsPlans} 
          categories={vpsCategories} 
          highlightPlanIndex={1} 
        />
      </SectionWrapper>

      {/* ─── INFRASTRUCTURE GRID ─── */}
      <SectionWrapper hasBackground paddingY="xl">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-surface-900 shadow-sm border border-surface-200 dark:border-surface-800 flex flex-col items-center text-center">
               <Cpu className="text-primary-500 mb-6" size={48} />
               <h3 className="text-2xl font-black mb-4 dark:text-white">AMD EPYC™ Power</h3>
               <p className="text-surface-500 text-sm leading-relaxed">High-performance processors specifically optimized for multi-threaded cloud workloads and AI processing.</p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-surface-900 shadow-sm border border-surface-200 dark:border-surface-800 flex flex-col items-center text-center">
               <HardDrive className="text-indigo-500 mb-6" size={48} />
               <h3 className="text-2xl font-black mb-4 dark:text-white">NVMe RAID-10</h3>
               <p className="text-surface-500 text-sm leading-relaxed">Enterprise-grade NVMe storage for extreme I/O performance and data redundancy that never sleeps.</p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-surface-900 shadow-sm border border-surface-200 dark:border-surface-800 flex flex-col items-center text-center">
               <Gauge className="text-accent-500 mb-6" size={48} />
               <h3 className="text-2xl font-black mb-4 dark:text-white">1 Gbps Network</h3>
               <p className="text-surface-500 text-sm leading-relaxed">Dedicated network ports with low-latency global routing for lag-free applications and fast deployments.</p>
            </div>
         </div>
      </SectionWrapper>

      {/* ─── TRUST CAROUSEL ─── */}
      <SectionWrapper paddingY="xl">
        <SectionHeader 
          title="Performance Trusted by the Best" 
          description="Designed for developers, scaled for business. See why top engineers choose AmanaFlow VPS."
          badge="Engineer Reviews"
        />
        <TrustCarousel testimonials={testimonials} />
      </SectionWrapper>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-surface-950 py-32 text-center">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10 space-y-10">
          <Badge variant="primary" styleType="solid" className="rounded-full bg-primary-600 text-white px-8 py-2 font-black uppercase">Start 30-Day Risk-Free</Badge>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">Scale with <span className="text-primary-500">Intelligence.</span></h2>
          <p className="text-surface-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Join thousands of developers using AI-managed VPS to save time and money. Deployment starts in under 55 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="xl" className="h-20 px-14 bg-primary-600 text-white hover:bg-primary-500 shadow-premium active:scale-[0.98] transition-all text-2xl font-black rounded-3xl">
              Choose Your Plan <ArrowRight size={24} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
