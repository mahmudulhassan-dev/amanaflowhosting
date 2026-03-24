import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Cloud, Zap, Shield, Globe, Cpu, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "High-Performance Cloud Hosting | Scalable & Reliable | AmanaFlow",
  description: "Experience the power of true cloud hosting. Fully redundant, ultra-fast NVMe storage, and instant scaling for your growing applications.",
  alternates: {
    canonical: "/cloud-hosting",
    languages: generateAlternateLanguages("/cloud-hosting"),
  }
};

export default function CloudHostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Badge variant="primary" styleType="soft" className="mb-6">Pure Cloud Architecture</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              The Cloud,<br/> <span className="text-primary-500">Accelerated.</span>
            </h1>
            <p className="text-xl text-surface-400 mb-10 max-w-xl leading-relaxed">
              Don&apos;t settle for legacy shared hosting. Move to a fully redundant cloud environment with 100% NVMe storage and instant auto-scaling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="xl" variant="primary" className="px-8">Deploy My Cloud</Button>
              <Button size="xl" variant="glass" className="px-8 border-surface-800">Why AmanaFlow Cloud?</Button>
            </div>
          </div>
          <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-3xl blur opacity-20 transition duration-1000 group-hover:opacity-40" />
              <div className="relative bg-surface-900 border border-surface-800 p-8 rounded-3xl overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                             <Cloud size={24} />
                          </div>
                          <span className="font-bold tracking-tight">Active Nodes: 12/12</span>
                      </div>
                      <Badge variant="success" styleType="soft">Global Health: 100%</Badge>
                  </div>
                  <div className="space-y-4">
                      {[
                        { label: "US East (Virginia)", latency: "12ms" },
                        { label: "EU West (London)", latency: "24ms" },
                        { label: "Asia (Singapore)", latency: "18ms" }
                      ].map((loc, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-surface-800/50 rounded-xl border border-surface-700/50">
                            <span className="text-sm font-medium">{loc.label}</span>
                            <span className="text-xs font-mono text-primary-400">{loc.latency}</span>
                        </div>
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="xl">
          <SectionHeader 
            title="Cloud Hosting Plans" 
            description="Scalable resources that grow with your ambitions. Pay for what you need today, upgrade instantly tomorrow."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
              
              <Card className="bg-white dark:bg-surface-950 border-surface-100 dark:border-surface-800">
                  <CardHeader>
                    <CardTitle>Cloud Startup</CardTitle>
                    <CardDescription>Perfect for high-traffic blogs.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 flex items-baseline">
                        <PriceDisplay amount={9.99} className="text-4xl font-bold" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 100% Cloud Architecture</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 20 GB NVMe Storage</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 2 GB Dedicated RAM</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Free Daily Backups</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                      <Button variant="outline" fullWidth>Select Plan</Button>
                  </CardFooter>
              </Card>

              <Card variant="pricing" className="scale-105 shadow-2xl overflow-hidden ring-4 ring-primary-500/10">
                  <div className="bg-primary-600 text-white text-[10px] font-bold py-1.5 uppercase text-center tracking-widest">Most Scalable</div>
                  <CardHeader>
                    <CardTitle className="text-2xl pt-4">Cloud Professional</CardTitle>
                    <CardDescription>Built for growing web applications.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8">
                    <div className="mb-6 flex items-baseline justify-center">
                        <PriceDisplay amount={19.99} className="text-5xl font-bold text-primary-600 dark:text-primary-400" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-300 font-medium">
                        <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> Unlimited Websites</li>
                        <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> 50 GB NVMe Storage</li>
                        <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> 4 GB Dedicated RAM</li>
                        <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> Optimized for Litespeed</li>
                        <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> Global CDN Included</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="px-8 pb-8">
                      <Button variant="primary" size="lg" fullWidth>Deploy Professional</Button>
                  </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-surface-950 border-surface-100 dark:border-surface-800">
                  <CardHeader>
                    <CardTitle>Cloud Enterprise</CardTitle>
                    <CardDescription>Maximum power for your platform.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 flex items-baseline">
                        <PriceDisplay amount={34.99} className="text-4xl font-bold" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> High Availability Infrastructure</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 100 GB NVMe Storage</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 8 GB Dedicated RAM</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Priority VIP Support</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                      <Button variant="outline" fullWidth>Select Plan</Button>
                  </CardFooter>
              </Card>
          </div>
      </SectionWrapper>

      {/* ─── TECHNICAL ADVANTAGES ─── */}
      <SectionWrapper hasBackground paddingY="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Cpu size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Dedicated Resources</h3>
                  <p className="text-surface-500">Unlike traditional hosting, our cloud platform ensures your CPU and RAM are never shared with other users.</p>
              </div>
              <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <RefreshCw size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Automated Healing</h3>
                  <p className="text-surface-500">If a hardware node fails, your instance is automatically migrated to another healthy node with zero downtime.</p>
              </div>
              <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Globe size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Global Data Replication</h3>
                  <p className="text-surface-500">Your data is replicated across multiple storage arrays to ensure absolute data persistence and disaster recovery.</p>
              </div>
          </div>
      </SectionWrapper>

    </div>
  );
}
