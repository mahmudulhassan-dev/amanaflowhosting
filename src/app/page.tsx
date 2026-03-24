import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ArrowRight, CheckCircle2, Server, Shield, Zap, Cloud, Globe, Headset } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";
import { useTranslations } from 'next-intl';
import { ComparisonTable } from "@/components/hosting/ComparisonTable";

export const metadata = {
  title: "Premium NVMe Hosting & Domain Services in Bangladesh | AmanaFlow",
  description: "Deploy enterprise-grade cloud servers in 55 seconds. Guaranteed 99.9% uptime, Free SSL, and L3 engineer support in Bangladesh. Scale your business today.",
  alternates: {
    canonical: "/",
    languages: generateAlternateLanguages(""),
  }
};

export default function Home() {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── 1. HERO SECTION & DOMAIN SEARCH ─── */}
      <section className="relative w-full overflow-hidden bg-[#030712] text-white pt-24 pb-32 lg:pt-40 lg:pb-48">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-600/20 rounded-full blur-[160px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[160px]" />
           <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent-500/10 rounded-full blur-[120px]" />
           <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-surface-800 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge 
            variant="primary" 
            styleType="soft" 
            className="mb-8 border border-primary-500/30 bg-primary-500/5 backdrop-blur-md px-5 py-2 text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <span className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              {t('Hero.badge')}
            </span>
          </Badge>

          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000"
            dangerouslySetInnerHTML={{ __html: t.raw('Hero.title') }}
          />
          
          <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl text-surface-400 mb-14 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            {t('Hero.description')}
          </p>

          <div className="mx-auto max-w-4xl group relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-indigo-500/20 to-primary-600/20 rounded-[2rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative bg-[#0F172AC0] backdrop-blur-3xl border border-white/10 p-5 rounded-[1.75rem] shadow-2xl overflow-hidden">
              <form className="flex flex-col md:flex-row gap-4 relative z-10">
                <div className="flex-1 relative">
                  <Input 
                    placeholder={t('Hero.searchPlaceholder')}
                    className="h-16 text-lg bg-surface-950/50 border-surface-800 text-white pl-12 rounded-2xl focus-visible:ring-primary-500 focus-visible:border-primary-500 transition-all font-medium placeholder:text-surface-600"
                  />
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-500" size={24} />
                </div>
                <Button size="xl" variant="primary" className="md:w-auto h-16 w-full px-10 shrink-0 text-lg font-bold rounded-2xl shadow-glow active:scale-[0.98] transition-transform">
                  {t('Hero.searchButton')}
                </Button>
              </form>
              
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-5 text-sm font-semibold tracking-wide px-4 relative z-10">
                <span className="flex items-center gap-2 text-white shrink-0">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                   <strong>.com</strong> <PriceDisplay amount={9.99} />
                </span>
                <span className="flex items-center gap-2 text-surface-400 shrink-0">
                   <strong>.net</strong> <PriceDisplay amount={11.99} />
                </span>
                <span className="flex items-center gap-2 text-surface-400 shrink-0">
                   <strong>.org</strong> <PriceDisplay amount={12.99} />
                </span>
                <span className="flex items-center gap-2 text-surface-400 shrink-0">
                   <strong>.co.bd</strong> <PriceDisplay amount={19.99} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1.5 TRUST STRIP (TECHNOLOGY PARTNERS) ─── */}
      <div className="w-full bg-white dark:bg-[#030712] py-12 border-b border-surface-100 dark:border-surface-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-surface-400 uppercase tracking-widest mb-10">{t('Sections.trust.title')}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 font-bold text-xl text-surface-600 dark:text-surface-400 tracking-tighter">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs">cP</div> cPanel
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-surface-600 dark:text-surface-400 tracking-tighter">
                <Zap className="text-green-500" size={24} fill="currentColor" /> LiteSpeed
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-surface-600 dark:text-surface-400 tracking-tighter">
                <Cloud className="text-blue-500" size={24} /> CloudLinux
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-surface-600 dark:text-surface-400 tracking-tighter">
                <Shield className="text-primary-500" size={24} /> Imunify360
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-surface-600 dark:text-surface-400 tracking-tighter">
                <Server className="text-surface-900 dark:text-white" size={24} /> AMD EPYC™
             </div>
             <div className="flex items-center gap-2 font-bold text-xl text-surface-600 dark:text-surface-400 tracking-tighter italic">
                <Zap className="text-orange-400" size={20} /> NVMe
             </div>
          </div>
        </div>
      </div>

      {/* ─── 2. HOSTING CATEGORIES GRID ─── */}
      <SectionWrapper paddingY="xl" containerId="hosting-services">
        <SectionHeader 
          title={t('Sections.hosting.title')}
          description={t('Sections.hosting.description')}
          badge={t('Sections.hosting.badge')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card variant="elevated" className="group">
            <CardHeader>
              <div className="w-14 h-14 bg-surface-100 dark:bg-surface-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                <Server size={28} className="text-surface-700 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </div>
              <CardTitle className="text-2xl">Shared Hosting</CardTitle>
              <CardDescription>Perfect for personal sites, portfolios, and small business landing pages.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={2.99} className="text-3xl font-bold text-surface-900 dark:text-white" monthly />
              </div>
              <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Unlimited NVMe SSD</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Free SSL Certificates</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Auto Backups</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth asChild className="group-hover:bg-surface-50 dark:group-hover:bg-surface-800">
                <Link href="/web-hosting">View Plans</Link>
              </Button>
            </CardFooter>
          </Card>

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
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={5.99} className="text-3xl font-bold text-primary-600 dark:text-primary-400" monthly />
              </div>
              <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> LiteSpeed Cache Plugin</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> 1-Click Installation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> Staging Environment</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary-500" /> Malware Scanning</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" fullWidth asChild className="shadow-premium hover:shadow-glow">
                <Link href="/wordpress-hosting">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" className="group">
            <CardHeader>
              <div className="w-14 h-14 bg-surface-100 dark:bg-surface-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                <Cloud size={28} className="text-surface-700 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </div>
              <CardTitle className="text-2xl">Cloud VPS</CardTitle>
              <CardDescription>Dedicated resources with full root access for scaling apps.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={14.99} className="text-3xl font-bold text-surface-900 dark:text-white" monthly />
              </div>
              <ul className="space-y-3 text-sm text-surface-600 dark:text-surface-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Dedicated vCPU & RAM</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> Full Root Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500" /> KVM Virtualization</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth asChild className="group-hover:bg-surface-50 dark:group-hover:bg-surface-800">
                <Link href="/vps-hosting">View Plans</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </SectionWrapper>

      {/* ─── 3. INFRASTRUCTURE & PERFORMANCE ─── */}
      <SectionWrapper hasBackground paddingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="neutral">{t('Sections.infrastructure.badge')}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-surface-900 dark:text-white leading-[1.15]">
              {t('Sections.infrastructure.title')}
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              {t('Sections.infrastructure.description')}
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
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
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
                  <p className="text-sm text-surface-500">Average response {"<"} 15 mins.</p>
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

      {/* ─── 3.5 KEY FEATURES COMPARISON ─── */}
      <SectionWrapper className="bg-white dark:bg-surface-900 text-surface-900 dark:text-white" paddingY="xl">
        <SectionHeader 
          title={t('Sections.comparison.title')}
          description={t('Sections.comparison.description')}
          badge={t('Sections.comparison.badge')}
        />
        <ComparisonTable />
      </SectionWrapper>

      {/* ─── 4. FREQUENTLY ASKED QUESTIONS ─── */}
      <SectionWrapper paddingY="xl" className="bg-surface-50 dark:bg-surface-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Frequently Asked Questions" 
            description="Quick answers about our premium cloud infrastructure and services."
            align="left"
          />
          <div className="grid gap-6 mt-8 md:grid-cols-2">
            <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-800">
              <h3 className="font-bold text-lg mb-2 text-surface-900 dark:text-white">How do I migrate my existing website?</h3>
              <p className="text-surface-600 dark:text-surface-400">Our L3 engineering team provides 100% free migration assistance from any cPanel or custom control panel to AmanaFlow with zero downtime.</p>
            </div>
            <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-800">
              <h3 className="font-bold text-lg mb-2 text-surface-900 dark:text-white">Is enterprise NVMe storage included in all plans?</h3>
              <p className="text-surface-600 dark:text-surface-400">Yes, every single server, from our cheapest Shared Hosting to Enterprise Bare Metal, natively utilizes NVMe SSD arrays running on RAID 10 configuration.</p>
            </div>
            <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-800">
              <h3 className="font-bold text-lg mb-2 text-surface-900 dark:text-white">Do you offer refunds?</h3>
              <p className="text-surface-600 dark:text-surface-400">We offer a strict 30-day money-back guarantee for all shared and reseller hosting plans. If you are not satisfied with the speed, we will refund you without questions.</p>
            </div>
            <div className="bg-white dark:bg-surface-900 p-6 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-800">
              <h3 className="font-bold text-lg mb-2 text-surface-900 dark:text-white">Do you provide 24/7 technical support?</h3>
              <p className="text-surface-600 dark:text-surface-400">Absolutely. Our support desk operates 24/7/365 with highly trained engineers. You are never left alone during critical server issues.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── 5. BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-primary-900 py-24 text-center">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="mx-auto max-w-4xl px-4 relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to experience the flow?</h2>
          <p className="text-primary-200 text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of businesses who trust AmanaFlow for their critical infrastructure. Migration from your old host is 100% free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="xl" className="bg-white text-primary-900 hover:bg-surface-50 shadow-xl" asChild>
              <Link href="/register">
                Get Started Now <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="text-white border-white/20 hover:bg-white/10">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
