import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Zap, Server, Settings, Headphones, BarChart3, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Fully Managed VPS Hosting | Peace of Mind | AmanaFlow",
  description: "Focus on your business, we handle the server. Fully managed VPS hosting with 24/7 monitoring, security patches, and expert optimization.",
  alternates: {
    canonical: "/managed-vps-hosting",
    languages: generateAlternateLanguages("/managed-vps-hosting"),
  }
};

export default function ManagedVPSPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Badge variant="primary" styleType="soft" className="mb-6">Hands-Free Infrastructure</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              You Build. <br/> <span className="text-primary-500">We Manage.</span>
            </h1>
            <p className="text-xl text-surface-400 mb-10 max-w-xl leading-relaxed">
              Stop worrying about patches, updates, and server security. Our L3 engineers handle everything from migrations to proactive 24/7 monitoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="xl" variant="primary" className="px-8">View Managed Plans</Button>
              <Button size="xl" variant="glass" className="px-8 border-surface-800">Learn About Our Management</Button>
            </div>
          </div>
          <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-blue-600 rounded-3xl blur opacity-20" />
              <Card className="relative bg-surface-900 border-surface-800 p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400">
                          <ShieldCheck size={28} />
                      </div>
                      <div>
                          <h3 className="font-bold text-white">Proactive Security</h3>
                          <p className="text-xs text-surface-500">Intrusion detection active 24/7</p>
                      </div>
                  </div>
                  <div className="space-y-4">
                      {["Kernel Updates Applied", "Malware Scan Complete", "DDoS Mitigation Layer Active"].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-surface-300 bg-surface-800/50 p-3 rounded-lg border border-surface-700/50 italic">
                             <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                             {item}
                          </div>
                      ))}
                  </div>
              </Card>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="xl">
          <SectionHeader 
            title="Managed VPS Tiers" 
            description="Premium hardware meets human expertise. All plans include 24/7 proactive management and free migrations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
              
              <Card className="bg-white dark:bg-surface-950 border-surface-100 dark:border-surface-800 p-2">
                  <CardHeader>
                    <CardTitle>Business Cloud</CardTitle>
                    <CardDescription>Ideal for high-traffic WordPress & e-commerce.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 flex items-baseline">
                        <PriceDisplay amount={49.99} className="text-4xl font-bold" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                        <li className="flex items-center gap-2 font-medium text-primary-600 dark:text-primary-400 underline decoration-primary-500/30 decoration-2 underline-offset-4">Fully Managed Support</li>
                        <li className="flex items-center gap-2"><Zap size={16} className="text-primary-500" /> 4 vCPU Cores</li>
                        <li className="flex items-center gap-2"><Cpu size={16} className="text-primary-500" /> 8 GB DDR4 RAM</li>
                        <li className="flex items-center gap-2"><Server size={16} className="text-primary-500" /> 160 GB NVMe Storage</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                      <Button variant="outline" fullWidth size="lg">Configure Server</Button>
                  </CardFooter>
              </Card>

              <Card variant="pricing" className="scale-105 z-10 p-2 shadow-2xl border-primary-500">
                  <div className="bg-primary-600 text-white text-[10px] font-bold py-2 uppercase text-center tracking-widest rounded-t-lg">Powerhouse Performance</div>
                   <CardHeader className="pt-8">
                    <CardTitle className="text-2xl">Elite Managed</CardTitle>
                    <CardDescription>Built for enterprise-grade workloads.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8">
                    <div className="mb-8 flex items-baseline justify-center">
                        <PriceDisplay amount={89.99} className="text-6xl font-extrabold text-primary-600 dark:text-primary-400" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-sm text-surface-700 dark:text-surface-200 font-medium">
                        <li className="flex items-center gap-3"><ShieldCheck size={20} className="text-success-500" /> Proactive Security Patching</li>
                        <li className="flex items-center gap-3"><Zap size={20} className="text-primary-500" /> 8 vCPU Cores</li>
                        <li className="flex items-center gap-3"><Cpu size={20} className="text-primary-500" /> 16 GB DDR4 RAM</li>
                        <li className="flex items-center gap-3"><Server size={20} className="text-primary-500" /> 320 GB NVMe Storage</li>
                        <li className="flex items-center gap-3"><Headphones size={20} className="text-primary-500" /> Priority VIP Support Line</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-10 px-8">
                      <Button variant="primary" size="xl" fullWidth className="h-16 shadow-premium">Deploy Elite</Button>
                  </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-surface-950 border-surface-100 dark:border-surface-800 p-2 text-center flex flex-col justify-center border-dashed">
                <div className="p-8">
                  <Settings size={48} className="text-surface-300 mx-auto mb-4" />
                  <CardTitle className="text-2xl mb-4">Custom Cluster</CardTitle>
                  <p className="text-sm text-surface-500 mb-8">Need more than a single VPS? We architect high-availability clusters and private clouds.</p>
                  <Button variant="glass" className="border-surface-200 dark:border-surface-800" fullWidth>Contact Solutions</Button>
                </div>
              </Card>
          </div>
      </SectionWrapper>

      {/* ─── MANAGEMENT FEATURES ─── */}
      <SectionWrapper hasBackground paddingY="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-3xl font-bold mb-6 italic">What does &quot;Fully Managed&quot; actually mean?</h2>
                  <div className="space-y-8">
                      {[
                        { title: "24/7 Proactive Monitoring", desc: "We don't wait for you to tell us there's an issue. We monitor 50+ health metrics every second." },
                        { title: "Hardened Security", desc: "Custom firewall rules, brute-force protection, and regular security audits of your OS." },
                        { title: "Performance Optimization", desc: "We fine-tune PHP, MariaDB, and Nginx settings specifically for your workload." },
                        { title: "Free Disaster Recovery", desc: "Daily off-site backups with free restoration service whenever you need it." }
                      ].map((feature, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-950 flex items-center justify-center text-primary-500 shrink-0 font-bold text-sm">{i+1}</div>
                            <div>
                                <h4 className="font-bold text-surface-900 dark:text-white mb-1">{feature.title}</h4>
                                <p className="text-sm text-surface-500">{feature.desc}</p>
                            </div>
                        </div>
                      ))}
                  </div>
              </div>
              <div className="bg-white dark:bg-surface-900 p-12 rounded-[2rem] border border-surface-200 dark:border-surface-800 shadow-xl relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-2 h-full bg-primary-500" />
                  <BarChart3 size={64} className="text-primary-500/10 absolute top-8 right-8" />
                  <h3 className="text-2xl font-bold mb-8">Service Level Agreement</h3>
                  <div className="space-y-6">
                      <div className="flex justify-between border-b border-surface-100 dark:border-surface-800 pb-4">
                          <span className="text-surface-500 uppercase tracking-widest text-[10px] font-bold">Uptime Guarantee</span>
                          <span className="font-bold text-success-500">99.99%</span>
                      </div>
                      <div className="flex justify-between border-b border-surface-100 dark:border-surface-800 pb-4">
                          <span className="text-surface-500 uppercase tracking-widest text-[10px] font-bold">Support Response</span>
                          <span className="font-bold text-primary-500 underline decoration-2 underline-offset-4">Under 15 Mins</span>
                      </div>
                      <div className="flex justify-between border-b border-surface-100 dark:border-surface-800 pb-4">
                          <span className="text-surface-500 uppercase tracking-widest text-[10px] font-bold">Managed Guarantee</span>
                          <span className="font-bold">24/7 Human Oversight</span>
                      </div>
                  </div>
              </div>
          </div>
      </SectionWrapper>

    </div>
  );
}
