import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Lock, ShieldCheck, Zap, Globe, Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "SSL Certificates - AmanaFlow",
  description: "Secure your website and boost customer trust with premium SSL Certificates.",
};

export default function SSLPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-20 pb-32 overflow-hidden text-center border-b border-surface-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Badge variant="primary" className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Up to 256-bit Encryption</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Secure Your Site.<br/>Boost Your <span className="text-emerald-400">SEO & Trust.</span>
          </h1>
          <p className="text-lg text-surface-300 mb-10 max-w-2xl mx-auto">
            Protect your customers&apos; sensitive data and increase sales with a premium SSL Certificate. Fast issuance and free expert installation.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-premium border-none">Browse Certificates</Button>
          </div>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <SectionWrapper paddingY="lg" className="-mt-16 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Domain Validated */}
          <Card className="bg-white/95 backdrop-blur-md dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl group">
            <CardHeader className="pb-4">
              <Lock className="w-10 h-10 text-surface-400 mb-4 group-hover:text-emerald-500 transition-colors" />
              <CardTitle className="text-xl">Standard SSL (DV)</CardTitle>
              <CardDescription>Domain Validated. Ideal for personal sites and blogs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={15.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/yr</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Issued in minutes</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Secures 1 Domain</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Green Padlock in Browser</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> $10K Warranty</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Buy Standard SSL</Button>
            </CardFooter>
          </Card>

          {/* Wildcard SSL */}
          <Card variant="pricing" className="bg-white dark:bg-surface-950 scale-105 z-10 border-emerald-500/30 ring-emerald-500/20 group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
            <CardHeader className="text-center pt-8">
              <Badge className="w-fit mx-auto mb-4 tracking-wider bg-emerald-500 text-white border-none">MOST POPULAR</Badge>
              <CardTitle className="text-2xl">Wildcard SSL</CardTitle>
              <CardDescription>Secure unlimited subdomains.</CardDescription>
            </CardHeader>
            <CardContent className="px-8 flex flex-col items-center">
              <div className="mb-6 text-center flex items-baseline justify-center">
                <PriceDisplay amount={45.99} className="text-5xl font-bold text-emerald-600 dark:text-emerald-400" />
                <span className="text-surface-500 ml-1">/yr</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-300 font-medium w-full">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> Issued in minutes</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> Unlimited Subdomains (*.domain.com)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> Free Auto-installation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> $50K Warranty</li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <Button size="lg" fullWidth className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-premium border-none">Buy Wildcard SSL</Button>
            </CardFooter>
          </Card>

          {/* EV SSL */}
          <Card className="bg-white/95 backdrop-blur-md dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl group">
             <CardHeader className="pb-4">
              <ShieldCheck className="w-10 h-10 text-surface-400 mb-4 group-hover:text-emerald-500 transition-colors" />
              <CardTitle className="text-xl">Extended Validation (EV)</CardTitle>
              <CardDescription>Maximum trust for eCommerce & Finance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={129.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/yr</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Thorough Company Vetting</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Displays Company Name</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> Highest Trust Indicator</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500" /> $1M+ Warranty</li>
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
          title="Why do you need an SSL Certificate?" 
          description="Beyond encrypting data, SSL is a mandatory requirement for modern browsers and search engines."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
            <Search size={32} className="text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Google SEO Boost</h3>
            <p className="text-surface-500 leading-relaxed">Google explicitly explicitly ranks HTTPS sites higher than unsecured counterparts. Don&apos;t lose organic traffic over a missing certificate.</p>
          </div>

          <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
            <Lock size={32} className="text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Avoid 'Not Secure' Warnings</h3>
            <p className="text-surface-500 leading-relaxed">Chrome and Safari flash a massive red warning to visitors if your site lacks SSL, severely damaging conversion rates.</p>
          </div>

          <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
            <ShieldCheck size={32} className="text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">PCI-DSS Compliance</h3>
            <p className="text-surface-500 leading-relaxed">If you accept credit cards on your store, having an active SSL certificate is a mandatory legal requirement for payment processors.</p>
          </div>

        </div>
      </SectionWrapper>

    </div>
  );
}
