import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Lock, ShieldCheck, Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Secure Your Website | Premium SSL Certificates | AmanaFlow",
  description: "Protect user data and boost Google rankings with enterprise SSL certificates. Options for single domain, Wildcard, and EV with massive warranties.",
  alternates: {
    canonical: "/ssl-certificates",
    languages: generateAlternateLanguages("/ssl-certificates"),
  }
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
            <h3 className="text-xl font-bold mb-3">Avoid &apos;Not Secure&apos; Warnings</h3>
            <p className="text-surface-500 leading-relaxed">Chrome and Safari flash a massive red warning to visitors if your site lacks SSL, severely damaging conversion rates.</p>
          </div>

          <div className="bg-white dark:bg-surface-900 p-8 rounded-2xl border border-surface-200 dark:border-surface-800 shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
            <ShieldCheck size={32} className="text-emerald-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">PCI-DSS Compliance</h3>
            <p className="text-surface-500 leading-relaxed">If you accept credit cards on your store, having an active SSL certificate is a mandatory legal requirement for payment processors.</p>
          </div>

        </div>
      </SectionWrapper>

      {/* ─── WHEN DO YOU NEED SSL ─── */}
      <SectionWrapper className="bg-white dark:bg-surface-950 border-t border-surface-200 dark:border-surface-800">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">Beginner&apos;s Guide</Badge>
          <h2 className="text-3xl font-bold text-surface-900 dark:text-white mb-6">When exactly do you need an SSL Certificate?</h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
            In today&apos;s digital ecosystem, SSL is no longer optional. It is absolutely critical if your website involves any of the following:
          </p>
          <ul className="text-left space-y-4 inline-block mx-auto">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-success-500" /> <span className="text-surface-700 dark:text-surface-300">Processing credit cards or accepting payments (eCommerce).</span></li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-success-500" /> <span className="text-surface-700 dark:text-surface-300">Collecting passwords, emails, or personal user data via login forms.</span></li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-success-500" /> <span className="text-surface-700 dark:text-surface-300">Relying on Google Search traffic (HTTPS is a direct ranking signal).</span></li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-success-500" /> <span className="text-surface-700 dark:text-surface-300">Running compliance-heavy applications (Health, Finance, Legal).</span></li>
          </ul>
        </div>
      </SectionWrapper>
      
      {/* ─── TRUST BADGES ─── */}
      <SectionWrapper paddingY="md" className="bg-surface-50 dark:bg-surface-900">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-6">Recognized and Trusted By All Major Browsers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-bold text-xl"><Lock size={24} /> Google Chrome</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Lock size={24} /> Apple Safari</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Lock size={24} /> Mozilla Firefox</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Lock size={24} /> Microsoft Edge</div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── FAQS ─── */}
      <SectionWrapper paddingY="xl" className="bg-surface-50 dark:bg-surface-950 border-t border-surface-200 dark:border-surface-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="SSL Certificate FAQs" align="left" />
          <div className="grid gap-4 mt-8">
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                What is the difference between DV, OV, and EV SSL?
                <span className="text-emerald-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">DV (Domain Validated) simply confirms domain ownership. OV (Organization Validated) verifies your registered company details. EV (Extended Validation) is the highest standard, confirming exact legal company presence, providing maximum warranty levels and user trust.</p>
            </details>
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                Do I need a dedicated IP address for my SSL?
                <span className="text-emerald-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">No. Thanks to Server Name Indication (SNI) technology adopted globally by modern browsers, you can perfectly install multiple SSL certificates on a single IP address securely.</p>
            </details>
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                How long does the SSL installation process take?
                <span className="text-emerald-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">For standard DV and Wildcard certificates, verification and issuance occur within a few minutes via email or DNS validation. EV certificates take 1–3 business days for thorough manual company vetting prior to issuance.</p>
            </details>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}
