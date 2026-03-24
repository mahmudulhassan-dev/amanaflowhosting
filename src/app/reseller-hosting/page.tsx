import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Users, Layout, Shield, Wallet, Settings, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Professional Reseller Hosting | White-Label & WHM | AmanaFlow",
  description: "Start your own hosting business today. Reliable white-label reseller plans with WHM/cPanel access and free billing software integration.",
  alternates: {
    canonical: "/reseller-hosting",
    languages: generateAlternateLanguages("/reseller-hosting"),
  }
};

export default function ResellerHostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center text-center relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-6">Start Your Business</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Your Brand. <br/> Our Infrastructure. 
          </h1>
          <p className="text-xl text-surface-400 mb-12 max-w-3xl leading-relaxed">
            Everything you need to run your own hosting company. High-margin white-label reseller plans with industry-standard control panels and 24/7 technical support for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="primary" className="px-10 h-16 shadow-lg shadow-primary-500/20">View Reseller Plans</Button>
            <Button size="xl" variant="glass" className="px-10 h-16 border-surface-800">Request WHM Demo</Button>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="xl" className="-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              <Card className="bg-white dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl p-2">
                <CardHeader>
                  <CardTitle>Entrepreneur</CardTitle>
                  <CardDescription>Perfect for freelancers and small labs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-8 flex items-baseline">
                    <PriceDisplay amount={19.99} className="text-4xl font-bold" />
                    <span className="text-surface-500 ml-1">/mo</span>
                  </div>
                  <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> 20 cPanel Accounts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> 50 GB NVMe Storage</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> WHM Access Included</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> White-Label Nameservers</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" fullWidth size="lg">Get Started</Button>
                </CardFooter>
              </Card>

              <Card variant="pricing" className="scale-105 z-10 p-2 shadow-2xl">
                <div className="bg-primary-600 text-white text-[10px] font-bold py-1.5 uppercase text-center tracking-widest rounded-t-lg">Best for Growth</div>
                <CardHeader>
                  <CardTitle className="text-2xl pt-4">Professional</CardTitle>
                  <CardDescription>Our most popular plan for agencies.</CardDescription>
                </CardHeader>
                <CardContent className="px-8">
                  <div className="mb-8 text-center flex items-baseline justify-center">
                    <PriceDisplay amount={39.99} className="text-6xl font-extrabold text-primary-600 dark:text-primary-400" />
                    <span className="text-surface-500 ml-1">/mo</span>
                  </div>
                  <ul className="space-y-4 text-sm text-surface-700 dark:text-surface-300 font-medium">
                    <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> 60 cPanel Accounts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> 150 GB NVMe Storage</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> Free Billing Software (WHMCS)</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> Unlimited Domain Hosting</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> Priority Reseller Support</li>
                  </ul>
                </CardContent>
                <CardFooter className="pb-8 px-8">
                  <Button variant="primary" size="xl" fullWidth className="h-14 shadow-premium">Launch Business</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl p-2">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Scale to thousands of clients.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-8 flex items-baseline">
                    <PriceDisplay amount={79.99} className="text-4xl font-bold" />
                    <span className="text-surface-500 ml-1">/mo</span>
                  </div>
                  <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> 150 cPanel Accounts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> 500 GB NVMe Storage</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> Dedicated WHMCS Support</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> Custom Infrastructure</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" fullWidth size="lg">Contact Sales</Button>
                </CardFooter>
              </Card>

          </div>
      </SectionWrapper>

      {/* ─── TOOLS OF THE TRADE ─── */}
      <SectionWrapper hasBackground paddingY="xl">
          <SectionHeader 
            title="White-Label Mastery" 
            description="We provide the tools, you provide the brand. Complete control over your pricing and client relationships."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-white dark:bg-surface-900 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-sm transition-transform hover:-translate-y-2">
                  <Layout size={32} className="text-primary-500" />
                  <h3 className="text-xl font-bold">WHM Panel</h3>
                  <p className="text-sm text-surface-500">The industry standard for reseller management. Create, suspend, and manage cPanel accounts effortlessly.</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white dark:bg-surface-900 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-sm transition-transform hover:-translate-y-2">
                  <Wallet size={32} className="text-primary-500" />
                  <h3 className="text-xl font-bold">Free WHMCS</h3>
                  <p className="text-sm text-surface-500">Professional billing and automation software included with selected plans to automate your sales funnel.</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white dark:bg-surface-900 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-sm transition-transform hover:-translate-y-2">
                  <Terminal size={32} className="text-primary-500" />
                  <h3 className="text-xl font-bold">Overselling Enabled</h3>
                  <p className="text-sm text-surface-500">Maximize your margins by allocating only what your clients really need. Full control over resource limits.</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-white dark:bg-surface-900 rounded-3xl border border-surface-100 dark:border-surface-800 shadow-sm transition-transform hover:-translate-y-2">
                  <Shield size={32} className="text-primary-500" />
                  <h3 className="text-xl font-bold">Client Isolation</h3>
                  <p className="text-sm text-surface-500">Every single client account is isolated using CloudLinux LVE to ensure security and stability.</p>
              </div>
          </div>
      </SectionWrapper>

    </div>
  );
}
