import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Shield, Zap, HardDrive } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";

export default function SharedHostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-20 pb-32 overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-6">CPanel Included</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Reliable Shared Hosting,<br/> Unbeatable Price.
          </h1>
          <p className="text-lg text-surface-300 mb-10 max-w-2xl mx-auto">
            Get your business online today with pure NVMe storage, free SSL certificates, and 24/7 expert support.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="primary">View Pricing</Button>
            <Button size="lg" variant="glass">Compare Plans</Button>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="lg" className="-mt-16 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Starter Plan */}
          <Card className="bg-white/95 backdrop-blur-md dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription>For personal blogs and hobbies.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={2.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 1 Website</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 10 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Unlimited Bandwidth</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 5 Email Accounts</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Select Starter</Button>
            </CardFooter>
          </Card>

          {/* Business Plan */}
          <Card variant="pricing" className="bg-white dark:bg-surface-950 scale-105 z-10">
            <CardHeader className="text-center pt-8">
              <Badge variant="primary" styleType="solid" className="w-fit mx-auto mb-4 tracking-wider">RECOMMENDED</Badge>
              <CardTitle className="text-2xl">Business</CardTitle>
              <CardDescription>For growing businesses and agencies.</CardDescription>
            </CardHeader>
            <CardContent className="px-8">
              <div className="mb-6 text-center flex items-baseline justify-center">
                <PriceDisplay amount={5.99} className="text-5xl font-bold text-primary-600 dark:text-primary-400" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Unlimited Websites</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 50 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Free Domain (1yr)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Unlimited Emails</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Free Daily Backups</li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <Button variant="primary" size="lg" fullWidth className="shadow-premium">Select Business</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-white/95 backdrop-blur-md dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Enterprise</CardTitle>
              <CardDescription>Maximum performance for heavy traffic.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={9.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Unlimited Websites</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> 100 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Dedicated IP</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary-500" /> Priority Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Select Enterprise</Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

      {/* ─── FEATURES ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Included in all Shared Hosting Plans" 
          description="We don't nickel-and-dime you. Every hosting account includes these premium features out of the box."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm">
            <HardDrive size={32} className="text-primary-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">NVMe Storage</h3>
            <p className="text-sm text-surface-500">Read/write speeds up to 10x faster than standard SSDs. Instant load times.</p>
          </div>

          <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm">
            <Server size={32} className="text-primary-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">cPanel Control Panel</h3>
            <p className="text-sm text-surface-500">The industry standard control panel makes managing your site extremely easy.</p>
          </div>

          <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm">
            <Shield size={32} className="text-primary-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Free SSL Certificates</h3>
            <p className="text-sm text-surface-500">Auto-installing Let&apos;s Encrypt SSL keeps your visitors&apos; data highly secure.</p>
          </div>

          <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm">
            <Zap size={32} className="text-primary-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">1-Click Installer</h3>
            <p className="text-sm text-surface-500">Install WordPress, Joomla, Magento, and 400+ other apps instantly.</p>
          </div>

        </div>
      </SectionWrapper>

    </div>
  );
}
