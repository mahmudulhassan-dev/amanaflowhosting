import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Search, Server, Shield, Zap, Cloud, Headset, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── 1. HERO SECTION & DOMAIN SEARCH ─── */}
      <section className="relative w-full overflow-hidden bg-surface-950 text-white pt-24 pb-32 lg:pt-36 lg:pb-40">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <Badge variant="primary" styleType="soft" className="mb-8 border border-primary-500/30 backdrop-blur-md px-4 py-1.5 text-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              New: Enterprise Cloud VPS Available Now in Dhaka, BD
            </span>
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700">
            Premium Web Hosting,<br className="hidden md:block"/> Engineered for <span className="text-gradient-primary">Performance</span>.
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-surface-300 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            AmanaFlow delivers enterprise-grade infrastructure, unmetered NVMe storage, and 99.9% guaranteed uptime for businesses that refuse to compromise.
          </p>

          {/* Domain Search Box */}
          <div className="mx-auto max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-700 delay-200">
            <form className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input 
                  placeholder="Find your perfect domain name (e.g., yourcompany.com)" 
                  className="h-14 text-base bg-white text-surface-900 border-0 focus-visible:ring-4 focus-visible:ring-primary-500/30"
                  iconLeft={<Globe className="text-surface-400" size={20} />}
                />
              </div>
              <Button size="xl" variant="primary" className="md:w-auto w-full px-8 shrink-0 shadow-glow">
                Search Domain
              </Button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm font-medium text-surface-400">
              <span className="flex items-center gap-1 text-white"><strong className="font-bold">.com</strong> $9.99</span>
              <span className="flex items-center gap-1 text-white"><strong className="font-bold">.net</strong> $11.99</span>
              <span className="flex items-center gap-1"><strong className="font-bold">.org</strong> $12.99</span>
              <span className="flex items-center gap-1"><strong className="font-bold">.co</strong> $24.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. HOSTING CATEGORIES GRID ─── */}
      <SectionWrapper paddingY="xl" containerId="hosting-services">
        <SectionHeader 
          title="Hosting Built for Every Stage of Growth"
          description="From simple blogs to massive enterprise clusters, we have the perfect infrastructure customized for your exact needs."
          badge="Our Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Shared Hosting */}
          <Card variant="elevated" className="group">
            <CardHeader>
              <div className="w-14 h-14 bg-surface-100 dark:bg-surface-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                <Server size={28} className="text-surface-700 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </div>
              <CardTitle className="text-2xl">Shared Hosting</CardTitle>
              <CardDescription>Perfect for personal sites, portfolios, and small business landing pages.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-3xl font-bold text-surface-900 dark:text-white">$2.99</span>
                <span className="text-surface-500">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Unlimited NVMe SSD</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Free SSL Certificates</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Auto Backups</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth className="group-hover:bg-surface-50 dark:group-hover:bg-surface-800">
                View Plans
              </Button>
            </CardFooter>
          </Card>

          {/* WordPress Hosting (Popular) */}
          <Card variant="pricing">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center">
                  <Zap size={28} className="text-primary-600 dark:text-primary-400" />
                </div>
                <Badge variant="primary" styleType="solid">Most Popular</Badge>
              </div>
              <CardTitle className="text-2xl">WordPress</CardTitle>
              <CardDescription>LiteSpeed-powered caching for extreme WordPress performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">$5.99</span>
                <span className="text-surface-500">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> LiteSpeed Cache Plugin</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> 1-Click Installation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> Staging Environment</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> Malware Scanning</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" fullWidth className="shadow-premium hover:shadow-glow">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Cloud VPS */}
          <Card variant="elevated" className="group">
            <CardHeader>
              <div className="w-14 h-14 bg-surface-100 dark:bg-surface-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                <Cloud size={28} className="text-surface-700 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </div>
              <CardTitle className="text-2xl">Cloud VPS</CardTitle>
              <CardDescription>Dedicated resources with full root access for scaling apps.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-3xl font-bold text-surface-900 dark:text-white">$14.99</span>
                <span className="text-surface-500">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Dedicated vCPU & RAM</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Full Root Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> KVM Virtualization</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth className="group-hover:bg-surface-50 dark:group-hover:bg-surface-800">
                View Plans
              </Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

      {/* ─── 3. INFRASTRUCTURE & PERFORMANCE ─── */}
      <SectionWrapper hasBackground paddingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <Badge variant="neutral">The AmanaFlow Difference</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-surface-900 dark:text-white leading-[1.15]">
              Enterprise-grade infrastructure, without the enterprise price tag.
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              We deploy the latest generation AMD EPYC™ processors and Enterprise NVMe storage across our global datacenters to ensure your websites load instantly.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-surface-900 dark:text-white text-lg">99.9% Uptime</h4>
                  <p className="text-sm text-surface-500">Financially backed SLA.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-surface-900 dark:text-white text-lg">DDoS Protection</h4>
                  <p className="text-sm text-surface-500">In-line L3/L4/L7 mitigation.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-surface-900 dark:text-white text-lg">Litespeed Web</h4>
                  <p className="text-sm text-surface-500">Up to 20x faster than Apache.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Headset size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-surface-900 dark:text-white text-lg">24/7 Support</h4>
                  <p className="text-sm text-surface-500">Average response &lt; 15 mins.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-surface-200 bg-white p-2 shadow-xl dark:border-surface-800 dark:bg-surface-900">
            <div className="rounded-2xl border border-surface-100 bg-surface-50 p-8 dark:border-surface-800 dark:bg-surface-950 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/50 dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,0.8),transparent)]" />
              <Server size={80} className="text-surface-300 dark:text-surface-800 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold relative z-10 text-surface-900 dark:text-white">Datacenter Locations</h3>
              <p className="text-surface-500 relative z-10 mt-2">New York &bull; London &bull; Singapore &bull; Dhaka</p>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* ─── 4. BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-primary-900 py-24 text-center">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="mx-auto max-w-4xl px-4 relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to experience the flow?</h2>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of businesses who trust AmanaFlow for their critical infrastructure. Migration from your old host is 100% free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="xl" className="bg-white text-primary-900 hover:bg-surface-50 shadow-xl">
              Get Started Now <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button size="xl" variant="glass">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
