import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Shield, Zap, Users, Building, Globe } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "White-Label Agency Hosting | Reseller & Multi-Site | AmanaFlow",
  description: "Scale your agency with our high-performance white-label hosting. Manage multiple clients from a single, powerful dashboard with dedicated resources.",
  alternates: {
    canonical: "/agency-hosting",
    languages: generateAlternateLanguages("/agency-hosting"),
  }
};

export default function AgencyHostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <Badge variant="primary" styleType="soft" className="mb-6">For Professionals</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Empower Your Agency,<br/> Focus on Clients.
            </h1>
            <p className="text-lg text-surface-300 mb-10 max-w-xl">
              High-performance infrastructure with white-label management. Scale your client portfolio with guaranteed resources and priority 24/7 technical support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="primary">Explore Agency Plans</Button>
              <Button size="lg" variant="glass">Request Quote</Button>
            </div>
          </div>
          <div className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 p-8 rounded-3xl hidden md:block">
              <div className="flex items-center gap-4 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-2 text-xs text-surface-500 font-mono tracking-widest uppercase">Agency Dashboard v2.4</div>
              </div>
              <div className="space-y-6">
                  <div className="h-4 w-3/4 bg-surface-800 rounded-full animate-pulse" />
                  <div className="h-4 w-1/2 bg-surface-800 rounded-full animate-pulse" />
                  <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-20 bg-primary-600/20 border border-primary-500/30 rounded-xl flex flex-col justify-center p-4">
                          <span className="text-[10px] text-primary-400 font-bold uppercase mb-1">Total Clients</span>
                          <span className="text-2xl font-bold">142</span>
                      </div>
                      <div className="h-20 bg-surface-800/50 border border-surface-700 rounded-xl flex flex-col justify-center p-4">
                          <span className="text-[10px] text-surface-500 font-bold uppercase mb-1">Global Health</span>
                          <span className="text-2xl font-bold">99.9%</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="lg" className="-mt-16 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Agency Lite */}
          <Card className="bg-white/95 dark:bg-surface-950 border-surface-200 dark:border-surface-800">
            <CardHeader>
              <CardTitle>Agency Lite</CardTitle>
              <CardDescription>Perfect for small boutique agencies.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={29.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Up to 25 Accounts</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 100 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> White-label Branding</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Daily Remote Backups</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Get Started</Button>
            </CardFooter>
          </Card>

          {/* Agency Pro */}
          <Card variant="pricing" className="scale-105 z-10">
            <CardHeader className="text-center pt-8">
              <Badge variant="primary" styleType="solid" className="w-fit mx-auto mb-4">MOST POPULAR</Badge>
              <CardTitle className="text-2xl">Agency Pro</CardTitle>
              <CardDescription>Scale without limits.</CardDescription>
            </CardHeader>
            <CardContent className="px-8">
              <div className="mb-6 text-center flex items-baseline justify-center">
                <PriceDisplay amount={59.99} className="text-5xl font-bold text-primary-600 dark:text-primary-400" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Up to 100 Accounts</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 300 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Dedicated Account Manager</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Premium Migration Tools</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Priority Development Support</li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <Button variant="primary" size="lg" fullWidth>Deploy Pro Agency</Button>
            </CardFooter>
          </Card>

          {/* Agency Elite */}
          <Card className="bg-white/95 dark:bg-surface-950 border-surface-200 dark:border-surface-800">
            <CardHeader>
              <CardTitle>Agency Elite</CardTitle>
              <CardDescription>For enterprise-scale management.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={129.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Unlimited Accounts</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 1 TB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Custom Infrastructure</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 24/7 VIP Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Contact Sales</Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

      {/* ─── FEATURES ─── */}
      <SectionWrapper hasBackground paddingY="xl">
          <SectionHeader 
            title="Engineered for Agencies" 
            description="We built AmanaFlow Agency to solve the specific bottlenecks of managing dozens of client projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white dark:bg-surface-900 rounded-xl shadow-sm border border-surface-200 dark:border-surface-800">
                <Users size={32} className="text-primary-500 mb-4" />
                <h3 className="font-bold mb-2">Team Collaboration</h3>
                <p className="text-sm text-surface-500">Give nested permissions to your staff and developers without sharing root credentials.</p>
            </div>
            <div className="p-6 bg-white dark:bg-surface-900 rounded-xl shadow-sm border border-surface-200 dark:border-surface-800">
                <Building size={32} className="text-primary-500 mb-4" />
                <h3 className="font-bold mb-2">White-Label Panel</h3>
                <p className="text-sm text-surface-500">Add your own logo and branding to the control panel your clients see.</p>
            </div>
            <div className="p-6 bg-white dark:bg-surface-900 rounded-xl shadow-sm border border-surface-200 dark:border-surface-800">
                <Globe size={32} className="text-primary-500 mb-4" />
                <h3 className="font-bold mb-2">Global Data Centers</h3>
                <p className="text-sm text-surface-500">Deploy sites close to your clients with 12+ locations across Asia, US, and Europe.</p>
            </div>
            <div className="p-6 bg-white dark:bg-surface-900 rounded-xl shadow-sm border border-surface-200 dark:border-surface-800">
                <Shield size={32} className="text-primary-500 mb-4" />
                <h3 className="font-bold mb-2">Encrypted Staging</h3>
                <p className="text-sm text-surface-500">One-click staging sites for safe testing before pushing changes to live URLs.</p>
            </div>
          </div>
      </SectionWrapper>

    </div>
  );
}
