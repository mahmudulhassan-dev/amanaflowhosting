import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Shield, Zap, Database, BarChart3, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Premium Business Hosting | Enterprise Performance | AmanaFlow",
  description: "High-performance business hosting for mission-critical websites. Featuring dedicated resources, advanced security, and priority VIP support.",
  alternates: {
    canonical: "/business-hosting",
    languages: generateAlternateLanguages("/business-hosting"),
  }
};

export default function BusinessHostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 relative z-10 text-center">
          <Badge variant="primary" styleType="soft" className="mb-8 px-6 py-1.5 text-sm">Enterprise Ready</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Powering Next-Gen<br/> Digital Enterprises.
          </h1>
          <p className="text-xl text-surface-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unleash the full potential of your business with dedicated CPU/RAM resources, isolated environments, and our highest tier of 24/7 VIP technical management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="xl" variant="primary" className="px-10 h-16 text-lg">Compare Enterprise Plans</Button>
            <Button size="xl" variant="glass" className="px-10 h-16 text-lg border-surface-700">Custom Infrastructure</Button>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <SectionWrapper paddingY="none" className="-mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                  { icon: <Clock size={20}/>, label: "99.99% SLA Guarantee" },
                  { icon: <Shield size={20}/>, label: "Advanced WAF Protection" },
                  { icon: <Database size={20}/>, label: "Daily Off-site Backups" },
                  { icon: <BarChart3 size={20}/>, label: "Dedicated IP Address" }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 p-6 rounded-2xl shadow-premium flex items-center gap-4">
                      <div className="bg-primary-50 dark:bg-primary-950/30 p-2 rounded-lg text-primary-600 dark:text-primary-400">
                        {item.icon}
                      </div>
                      <span className="font-bold text-sm tracking-tight">{item.label}</span>
                  </div>
              ))}
          </div>
      </SectionWrapper>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Pro Business */}
              <Card className="bg-white dark:bg-surface-950 border-surface-100 dark:border-surface-800 p-2">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl pt-4">Pro Business</CardTitle>
                    <CardDescription>Ideal for e-commerce stores.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 text-center">
                    <div className="mb-8 flex items-baseline justify-center">
                        <PriceDisplay amount={14.99} className="text-5xl font-bold" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-left border-t border-surface-100 dark:border-surface-800 pt-8">
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> 10 Optimized Websites</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> 50 GB NVMe Gen4 Storage</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> 2 GB Dedicated RAM</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> PHP X-Ray Performance</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-8 px-8">
                      <Button variant="outline" fullWidth size="lg">Buy Now</Button>
                  </CardFooter>
              </Card>

              {/* Business Elite */}
              <Card variant="pricing" className="scale-105 shadow-2xl overflow-hidden ring-4 ring-primary-500/20">
                  <div className="bg-primary-600 text-white text-[10px] font-bold py-1.5 uppercase text-center tracking-widest">Most Powerful</div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl pt-4">Business Elite</CardTitle>
                    <CardDescription className="text-lg">For heavy traffic mission-critical sites.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-10 text-center">
                    <div className="mb-8 flex items-baseline justify-center">
                        <PriceDisplay amount={24.99} className="text-6xl font-extrabold text-primary-600" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-left border-t border-surface-100 dark:border-surface-800 pt-8 font-medium">
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={20} className="text-primary-500" /> Unlimited Websites</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={20} className="text-primary-500" /> 100 GB NVMe Gen4 Storage</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={20} className="text-primary-500" /> 4 GB Dedicated RAM</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={20} className="text-primary-500" /> Priority VIP Support</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={20} className="text-primary-500" /> Free Private SSL</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-10 px-10">
                      <Button variant="primary" fullWidth size="xl" className="shadow-lg h-14">Claim My Resources</Button>
                  </CardFooter>
              </Card>

              {/* Scale Max */}
              <Card className="bg-white dark:bg-surface-950 border-surface-100 dark:border-surface-800 p-2">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl pt-4">Scale Max</CardTitle>
                    <CardDescription>Custom high-load performance.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 text-center">
                    <div className="mb-8 flex items-baseline justify-center">
                        <PriceDisplay amount={49.99} className="text-5xl font-bold" />
                        <span className="text-surface-500 ml-1">/mo</span>
                    </div>
                    <ul className="space-y-4 text-left border-t border-surface-100 dark:border-surface-800 pt-8">
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> Unlimited Everything</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> 250 GB NVMe Gen4 Storage</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> 8 GB Dedicated RAM</li>
                        <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={18} className="text-primary-500" /> Fully Managed Infrastructure</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-8 px-8">
                      <Button variant="outline" fullWidth size="lg">Buy Now</Button>
                  </CardFooter>
              </Card>
          </div>
      </SectionWrapper>

      {/* ─── INFRASTRUCTURE ─── */}
      <SectionWrapper hasBackground paddingY="xl">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Isolated Resources.<br/> Guaranteed Speed.</h2>
                <p className="text-surface-500 text-lg">Unlike standard shared hosting, our Business plans use LVE technology to isolate your CPU, RAM, and I/O resources. This means another user&apos;s traffic spike never affects your performance.</p>
                <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-900 bg-surface-200 dark:bg-surface-800 animate-pulse" />)}
                    </div>
                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">Trusted by over 10,000 corporate clients worldwide.</span>
                </div>
              </div>
              <div className="flex-1 bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-200 dark:border-surface-800 shadow-premium group">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <span className="text-xs font-bold uppercase text-surface-400">Memory Usage</span>
                        <span className="text-2xl font-bold text-primary-500">12%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-500 w-[12%] rounded-full transition-all duration-1000 group-hover:w-[45%]" />
                    </div>
                    <div className="flex justify-between items-end pt-4">
                        <span className="text-xs font-bold uppercase text-surface-400">CPU LOAD</span>
                        <span className="text-2xl font-bold text-success-500">0.02</span>
                    </div>
                    <div className="h-2 w-full bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                        <div className="h-full bg-success-500 w-[5%] rounded-full transition-all duration-1000 group-hover:w-[25%]" />
                    </div>
                  </div>
              </div>
          </div>
      </SectionWrapper>
    </div>
  );
}
