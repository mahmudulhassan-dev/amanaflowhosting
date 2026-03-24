"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Shield, Zap, HardDrive, ArrowRight, Gauge, Globe, Headset } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { motion } from "framer-motion";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { TrustCarousel } from "@/components/ui/TrustCarousel";
import { AIFeatureGrid } from "@/components/ui/AIFeatureGrid";

const sharedHostingPlans = ["Premium", "Business", "Cloud Startup"];

const sharedCategories = [
  {
    title: "Top Features",
    features: [
      { name: "Websites", values: ["3", "50", "100"] },
      { name: "NVMe Storage", values: ["20 GB", "50 GB", "100 GB"] },
      { name: "RAM", values: ["1 GB", "2 GB", "4 GB"] },
      { name: "Monthly Visits", values: ["~25,000", "~100,000", "~200,000"] },
      { name: "Free Domain (1 yr)", values: [false, true, true] },
      { name: "Dedicated IP", values: [false, false, true] },
    ]
  },
  {
    title: "AI Tools",
    features: [
      { name: "AI Website Builder", values: [true, true, true] },
      { name: "AI Business Agent", values: [false, true, true] },
      { name: "AI WordPress Troubleshooter", values: [false, true, true] },
      { name: "AI SEO Assistant", values: [false, false, true] },
    ]
  },
  {
    title: "Security & Backups",
    features: [
      { name: "Unlimited Free SSL", values: [true, true, true] },
      { name: "Weekly Backups", values: [true, true, true] },
      { name: "Daily Backups", values: [false, true, true] },
      { name: "Domain Privacy", values: [false, true, true] },
      { name: "DDoS Protection", values: ["1 Tbps", "1 Tbps", "1 Tbps"] },
    ]
  },
  {
    title: "Technical Specs",
    features: [
      { name: "LiteSpeed Web Server", values: [true, true, true] },
      { name: "LSCache Plugin", values: [true, true, true] },
      { name: "Node.js Support", values: ["3 Apps", "5 Apps", "10 Apps"] },
      { name: "PHP Workers", values: ["10", "50", "100"] },
      { name: "Inodes", values: ["400k", "600k", "2M"] },
    ]
  }
];

const testimonials = [
  {
    name: "Charlie Low",
    role: "Co-founder",
    company: "Nohma",
    content: "Ever since we've been with AmanaFlow, it's been amazing. We've not really had any issues at all and if we ever do have a question, their customer service is incredible.",
    rating: 5
  },
  {
    name: "Jack Bies",
    role: "Creative Director",
    content: "AmanaFlow’s Customer Success team goes above and beyond to understand my problem. The speed of the NVMe storage is unmatched.",
    rating: 5
  },
  {
    name: "Jhon Ortega",
    role: "Entrepreneur",
    content: "I was looking for a hosting company that is very intuitive for beginners and very well-configured for good performance. AmanaFlow nailed it.",
    rating: 5
  }
];

export default function SharedHostingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712]">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-[#030712] text-white pt-24 pb-48 overflow-hidden text-center">
        {/* Advanced Background Design */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-600/20 rounded-full blur-[160px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[160px]" />
        </div>
        
        <div className="mx-auto max-w-5xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge 
              variant="primary" 
              styleType="soft" 
              className="mb-8 border border-primary-500/30 bg-primary-500/5 backdrop-blur-md px-6 py-2 text-sm font-semibold"
            >
              UP TO 85% OFF + 3 MONTHS FREE
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05]">
              Cloud Hosting Powered <br className="hidden md:block" /> by <span className="text-primary-500">Amana AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-surface-400 mb-14 max-w-3xl mx-auto leading-relaxed">
              Experience the future of hosting. Pure NVMe RAID-10 storage, 10Gbps network, and AI-driven optimizations for peak performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="xl" variant="primary" className="h-16 px-10 rounded-2xl shadow-glow active:scale-[0.98] transition-transform text-lg flex items-center gap-2" asChild>
                <Link href="#pricing">Claim Deal Now <ArrowRight size={20} /></Link>
              </Button>
              <div className="flex items-center justify-center gap-6 text-sm font-medium text-surface-500">
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> 30-Day Refund</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> 24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none">
           <Zap className="absolute top-[20%] left-[10%] text-primary-500/10 animate-pulse" size={40} />
           <Shield className="absolute bottom-[20%] right-[10%] text-indigo-500/10 animate-pulse" size={40} />
           <Globe className="absolute top-[40%] right-[15%] text-accent-500/10 animate-pulse" size={40} />
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper id="pricing" paddingY="none" className="-mt-32 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Premium Plan */}
          <Card className="bg-white/80 dark:bg-surface-950/80 backdrop-blur-3xl border-surface-200 dark:border-surface-800 shadow-xl rounded-[2.5rem] p-4 flex flex-col group hover:shadow-2xl transition-all">
            <CardHeader className="pt-8 text-center">
              <CardTitle className="text-2xl font-black mb-2">Premium</CardTitle>
              <CardDescription className="font-medium">Everything you need to get started</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-6">
              <div className="mb-10 text-center">
                 <div className="text-surface-400 line-through text-lg mb-1">$12.99</div>
                 <div className="flex items-baseline justify-center gap-1">
                   <span className="text-3xl font-bold">$</span>
                   <PriceDisplay amount={1.99} className="text-6xl font-black text-surface-900 dark:text-white" />
                   <span className="text-surface-500 font-bold">/mo</span>
                 </div>
                 <Badge variant="primary" styleType="solid" className="mt-4 bg-primary-600 rounded-full px-4 py-1.5">+3 Mo. Free</Badge>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> Host 3 Websites</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> 20 GB NVMe Storage</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> Managed Node.js (3 Apps)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> Free SSL & CDN</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-8 px-6">
              <Button size="xl" variant="outline" fullWidth className="rounded-2xl h-14 font-bold active:scale-[0.98] transition-transform" asChild>
                <Link href={siteConfig.whmcsUrl}>Select Plan</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Business Plan (Recommended) */}
          <Card variant="pricing" className="bg-white dark:bg-surface-950/90 backdrop-blur-3xl lg:scale-110 z-10 rounded-[2.5rem] p-4 flex flex-col border-primary-500 shadow-premium group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary-600 text-white px-8 py-2 text-xs font-black uppercase tracking-widest rounded-bl-3xl">Most Popular</div>
            <CardHeader className="pt-10 text-center">
              <CardTitle className="text-3xl font-black mb-2">Business + AI</CardTitle>
              <CardDescription className="font-bold text-primary-600 dark:text-primary-400">More tools and power for growth</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8">
              <div className="mb-10 text-center">
                 <div className="text-surface-400 line-through text-lg mb-1">$18.99</div>
                 <div className="flex items-baseline justify-center gap-1">
                   <span className="text-3xl font-bold">$</span>
                   <PriceDisplay amount={2.99} className="text-7xl font-black text-primary-600 dark:text-primary-400" />
                   <span className="text-surface-500 font-bold">/mo</span>
                 </div>
                 <Badge variant="primary" styleType="solid" className="mt-4 bg-primary-600 rounded-full px-4 py-1.5 shadow-glow">+3 Mo. Free</Badge>
              </div>
              <ul className="space-y-4 text-base text-surface-600 dark:text-surface-200 font-semibold">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> Host 50 Websites</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> 50 GB NVMe Storage</li>
                <li className="flex items-center gap-3 text-primary-600 dark:text-primary-400 font-black"><Zap size={20} className="shrink-0 fill-current" /> AI Website Builder</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> Free Domain (1 yr)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500 shrink-0" /> Daily Auto Backups</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-10 px-8">
              <Button size="xl" variant="primary" fullWidth className="rounded-2xl h-16 shadow-premium font-black text-lg active:scale-[0.98] transition-transform" asChild>
                <Link href={siteConfig.whmcsUrl}>Claim Deal <ArrowRight className="ml-2" size={20}/></Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Cloud Startup Plan */}
          <Card className="bg-white/80 dark:bg-surface-950/80 backdrop-blur-3xl border-surface-200 dark:border-surface-800 shadow-xl rounded-[2.5rem] p-4 flex flex-col group hover:shadow-2xl transition-all lg:translate-x-4">
            <CardHeader className="pt-8 text-center">
              <CardTitle className="text-2xl font-black mb-2">Cloud Startup</CardTitle>
              <CardDescription className="font-medium">20X more power for giant sites</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-6">
              <div className="mb-10 text-center">
                 <div className="text-surface-400 line-through text-lg mb-1">$27.99</div>
                 <div className="flex items-baseline justify-center gap-1">
                   <span className="text-3xl font-bold">$</span>
                   <PriceDisplay amount={6.99} className="text-6xl font-black text-surface-900 dark:text-white" />
                   <span className="text-surface-500 font-bold">/mo</span>
                 </div>
                 <Badge variant="primary" styleType="solid" className="mt-4 bg-primary-600 rounded-full px-4 py-1.5">+3 Mo. Free</Badge>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> Host 100 Websites</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> 100 GB NVMe Storage</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> 4 GB RAM & Dedicated IP</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-success-500 shrink-0" /> Priority 24/7 Expert Support</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-8 px-6">
              <Button size="xl" variant="outline" fullWidth className="rounded-2xl h-14 font-bold active:scale-[0.98] transition-transform" asChild>
                <Link href={siteConfig.whmcsUrl}>Select Plan</Link>
              </Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

      {/* ─── AI TOOLS SECTION ─── */}
      <SectionWrapper paddingY="xl" className="pt-32">
        <SectionHeader 
          title="Supercharge your workflow with AI" 
          description="AmanaFlow AI isn't just a gimmick. It's built into your DNA, helping you build, protect, and scale with zero technical overhead."
          badge="AmanaFlow AI"
        />
        <AIFeatureGrid />
      </SectionWrapper>

      {/* ─── COMPARISON SECTION ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Compare our plans in detail" 
          description="See exactly what you get with each plan. No hidden limits, just pure performance."
          badge="Detailed Comparison"
        />
        <ComparisonTable 
          plans={sharedHostingPlans} 
          categories={sharedCategories} 
          highlightPlanIndex={1} 
        />
      </SectionWrapper>

      {/* ─── PERFORMANCE & SPECS ─── */}
      <SectionWrapper paddingY="xl" className="bg-white dark:bg-[#030712]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="primary" styleType="soft">Infrastructure</Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-surface-900 dark:text-white leading-[1.1]">
              Engineered for absolute <span className="text-primary-500 underline decoration-primary-500/30 underline-offset-8">Reliability.</span>
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              We own our hardware. No overselling, no shortcuts. Every AmanaFlow server is built with the best enterprise-grade components.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="flex gap-4 p-6 rounded-3xl bg-surface-50 dark:bg-surface-900/50 border border-surface-200 dark:border-surface-800">
                 <Gauge className="text-primary-500 shrink-0" size={32} />
                 <div>
                    <h4 className="font-bold text-lg dark:text-white">10 Gbps Networking</h4>
                    <p className="text-sm text-surface-500">Ultra-low latency globally.</p>
                 </div>
              </div>
              <div className="flex gap-4 p-6 rounded-3xl bg-surface-50 dark:bg-surface-900/50 border border-surface-200 dark:border-surface-800">
                 <HardDrive className="text-indigo-500 shrink-0" size={32} />
                 <div>
                    <h4 className="font-bold text-lg dark:text-white">NVMe RAID-10</h4>
                    <p className="text-sm text-surface-500">Unmatched data redundancy.</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-primary-500/20 blur-3xl opacity-20 rounded-full" />
             <div className="relative bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-2xl rounded-[3rem] p-10 overflow-hidden">
                <div className="flex items-center gap-2 mb-8">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-6">
                   <div className="h-4 bg-surface-100 dark:bg-surface-800 rounded-full w-3/4" />
                   <div className="h-4 bg-surface-100 dark:bg-surface-800 rounded-full w-1/2" />
                   <div className="h-32 bg-primary-50 dark:bg-primary-900/10 rounded-2xl border border-primary-500/20 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-primary-600 font-black text-xl flex items-center gap-2"
                      >
                         <Zap className="fill-current" /> 99.9% Uptime Verified
                      </motion.div>
                   </div>
                   <div className="h-4 bg-surface-100 dark:bg-surface-800 rounded-full w-2/3" />
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── TRUST CAROUSEL ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Trusted by 10,000+ Businesses" 
          description="Join the flow. Thousands of designers, developers, and entrepreneurs trust AmanaFlow for their online presence."
          badge="Success Stories"
        />
        <TrustCarousel testimonials={testimonials} />
      </SectionWrapper>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-primary-950 py-32 text-center border-t border-primary-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-600)_0%,_transparent_70%)] opacity-20" />
        <div className="mx-auto max-w-4xl px-4 relative z-10 space-y-10">
          <Badge variant="primary" styleType="solid" className="rounded-full bg-white text-primary-950 px-6 py-2 font-black">Limited Time Offer</Badge>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">Ready to experience the flow?</h2>
          <p className="text-primary-200 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Join the elite who have moved beyond slow hosting. Get started today and see the difference AI optimization makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button size="xl" className="h-16 px-12 bg-white text-primary-950 hover:bg-surface-50 shadow-premium active:scale-[0.98] transition-all text-xl font-black rounded-2xl group">
              Start Now <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="glass" className="h-16 px-12">
               Contact Support
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
