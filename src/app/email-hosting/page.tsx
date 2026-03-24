"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck, Lock, Smartphone, Mail, Sparkles, Send, ArrowRight, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { motion } from "framer-motion";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { TrustCarousel } from "@/components/ui/TrustCarousel";

const emailPlans = ["Starter", "Business Premium", "Enterprise"];

const emailCategories = [
  {
    title: "Mailbox Features",
    features: [
      { name: "Storage per Mailbox", values: ["10 GB", "50 GB", "100 GB"] },
      { name: "Daily Send Limit", values: ["1,000", "3,000", "5,000"] },
      { name: "Email Aliases", values: ["10", "30", "Unlimited"] },
      { name: "Forwarding Rules", values: ["10", "50", "Unlimited"] },
      { name: "Custom Domain (@brand)", values: [true, true, true] },
    ]
  },
  {
    title: "AI & Intelligence",
    features: [
      { name: "AI Smart Replies", values: [false, true, true] },
      { name: "AI Instant Summaries", values: [false, true, true] },
      { name: "AI Writing Assistant", values: [false, true, true] },
      { name: "Advanced AI Search", values: [false, true, true] },
    ]
  },
  {
    title: "Security & Compliance",
    features: [
      { name: "Spam & Virus Filter", values: ["Standard", "Enterprise", "Enterprise+"] },
      { name: "End-to-End Encryption", values: [true, true, true] },
      { name: "Audit Logs", values: [false, true, true] },
      { name: "Two-Factor Auth (2FA)", values: [true, true, true] },
    ]
  }
];

const testimonials = [
  {
    name: "Rick Miller",
    role: "CEO",
    company: "Miller Logistics",
    content: "I've been with AmanaFlow for 5 years. Their business email is rock solid. My team loves the AI summaries - saves us hours of scrolling through long threads.",
    rating: 5
  },
  {
    name: "Claudine Mayer",
    role: "Marketing Director",
    content: "Seamless experience. No outages, easy to renew, and the spam protection is actually effective. We haven't seen a phishing email in months.",
    rating: 5
  }
];

export default function BusinessEmailPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712]">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-white dark:bg-[#030712] pt-24 pb-48 overflow-hidden text-center border-b border-surface-100 dark:border-surface-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-100/50 dark:bg-primary-900/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" styleType="soft" className="mb-8 px-6 py-2 rounded-full border border-primary-200 dark:border-primary-800 text-sm font-bold">
              UP TO 88% OFF + 2 MONTHS FREE
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 text-surface-900 dark:text-white leading-[1]">
              Professional Email.<br/> <span className="text-primary-600">Powered by AI.</span>
            </h1>
            <p className="text-xl md:text-2xl text-surface-500 dark:text-surface-400 mb-14 max-w-3xl mx-auto leading-relaxed">
              Build trust with a branded business email. Experience a modern web app with integrated AI assistants, advanced security, and 24/7 priority support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="xl" variant="primary" className="h-16 px-12 rounded-2xl shadow-premium font-black text-xl hover:scale-105 transition-transform" asChild>
                <Link href="#pricing">Check Pricing <ArrowRight className="ml-2"/></Link>
              </Button>
              <Button size="xl" variant="outline" className="h-16 px-12 rounded-2xl font-bold border-2">
                 Free Migration Tool
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Floating Mail Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-[600px]">
           <Mail className="absolute top-[20%] right-[10%] text-primary-200 dark:text-primary-900/20 rotate-12" size={120} />
           <Send className="absolute bottom-[20%] left-[10%] text-indigo-200 dark:text-indigo-900/20 -rotate-12" size={80} />
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper id="pricing" paddingY="none" className="-mt-32 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          
          {/* Starter Plan */}
          <Card className="bg-white/90 dark:bg-surface-950/90 backdrop-blur-3xl border-surface-200 dark:border-surface-800 rounded-[2.5rem] p-4 flex flex-col group hover:shadow-2xl transition-all">
            <CardHeader className="pt-8 text-center px-4">
              <CardTitle className="text-2xl font-black mb-2">Starter</CardTitle>
              <CardDescription className="font-medium">Build trust with a branded email</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-4">
              <div className="mb-10 text-center">
                 <div className="text-surface-400 line-through text-lg mb-1 font-bold">$2.95</div>
                 <div className="flex items-baseline justify-center gap-1">
                   <span className="text-3xl font-bold">$</span>
                   <PriceDisplay amount={0.35} className="text-6xl font-black text-surface-900 dark:text-white" />
                   <span className="text-surface-500 font-bold">/mo</span>
                 </div>
                 <Badge variant="primary" styleType="solid" className="mt-4 bg-primary-600 rounded-full px-4 py-1.5 shadow-md">+2 Mo. Free</Badge>
              </div>
              <ul className="space-y-4 text-sm font-bold text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> 10 GB Storage / Mailbox</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> 10 Email Aliases</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> Anti-Spam & Virus</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> IMAP/POP3/SMTP</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-8 px-4">
              <Button size="xl" variant="outline" fullWidth className="rounded-2xl h-14 font-black active:scale-[0.98] transition-transform" asChild>
                <Link href={siteConfig.whmcsUrl}>Select Starter</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Business Premium (Recommended) */}
          <Card variant="pricing" className="bg-white dark:bg-surface-950/90 backdrop-blur-3xl md:scale-110 z-10 border-primary-500 shadow-premium rounded-[2.5rem] p-4 flex flex-col group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary-600 text-white px-8 py-2 text-xs font-black uppercase tracking-widest rounded-bl-3xl">Best Value</div>
            <CardHeader className="pt-10 text-center px-6">
              <CardTitle className="text-3xl font-black mb-2">Business Premium</CardTitle>
              <CardDescription className="font-bold text-primary-600 dark:text-primary-400">AI-Powered Enterprise Experience</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-8">
              <div className="mb-10 text-center">
                 <div className="text-surface-400 line-through text-lg mb-1 font-bold">$5.95</div>
                 <div className="flex items-baseline justify-center gap-1">
                   <span className="text-3xl font-bold">$</span>
                   <PriceDisplay amount={1.56} className="text-7xl font-black text-primary-600 dark:text-primary-400" />
                   <span className="text-surface-500 font-bold">/mo</span>
                 </div>
                 <Badge variant="primary" styleType="solid" className="mt-4 bg-primary-600 rounded-full px-4 py-1.5 shadow-glow">+2 Mo. Free</Badge>
              </div>
              <ul className="space-y-4 text-base font-black text-surface-900 dark:text-surface-100">
                <li className="flex items-center gap-3"><CheckCircle2 size={22} className="text-primary-500 shrink-0" /> 50 GB Storage / Mailbox</li>
                <li className="flex items-center gap-3 text-primary-600 dark:text-primary-400"><Sparkles size={22} className="shrink-0 fill-current" /> AI Mailbox Assistant</li>
                <li className="flex items-center gap-3 text-primary-600 dark:text-primary-400"><Zap size={22} className="shrink-0 fill-current" /> Smart AI Replies</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={22} className="text-primary-500 shrink-0" /> Free Domain (1 yr)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={22} className="text-primary-500 shrink-0" /> Enterprise Spam Filter</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-10 px-8">
              <Button size="xl" variant="primary" fullWidth className="rounded-2xl h-16 shadow-premium font-black text-xl active:scale-[0.98] transition-transform" asChild>
                <Link href={siteConfig.whmcsUrl}>Claim Deal Now</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-white/90 dark:bg-surface-950/90 backdrop-blur-3xl border-surface-200 dark:border-surface-800 rounded-[2.5rem] p-4 flex flex-col group hover:shadow-2xl transition-all md:translate-x-4">
            <CardHeader className="pt-8 text-center px-4">
              <CardTitle className="text-2xl font-black mb-2">Enterprise</CardTitle>
              <CardDescription className="font-medium">Maximum scale for large corps</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 px-4">
              <div className="mb-10 text-center">
                 <div className="text-surface-400 line-through text-lg mb-1 font-bold">$9.95</div>
                 <div className="flex items-baseline justify-center gap-1">
                   <span className="text-3xl font-bold">$</span>
                   <PriceDisplay amount={3.95} className="text-6xl font-black text-surface-900 dark:text-white" />
                   <span className="text-surface-500 font-bold">/mo</span>
                 </div>
                 <Badge variant="primary" styleType="solid" className="mt-4 bg-primary-600 rounded-full px-4 py-1.5">+2 Mo. Free</Badge>
              </div>
              <ul className="space-y-4 text-sm font-bold text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> 100 GB Storage / Mailbox</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> Unlimited Aliases</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> Advanced Audit Logs</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-success-500 shrink-0" /> VIP 24/7 Expert Support</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-8 px-4">
              <Button size="xl" variant="outline" fullWidth className="rounded-2xl h-14 font-black active:scale-[0.98] transition-transform" asChild>
                <Link href={siteConfig.whmcsUrl}>Select Enterprise</Link>
              </Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

      {/* ─── AI EMAIL FEATURES ─── */}
      <SectionWrapper paddingY="xl" className="pt-32">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <Badge variant="primary" styleType="soft">AI-First Webmail</Badge>
               <h2 className="text-4xl md:text-6xl font-black text-surface-900 dark:text-white leading-[1.1]">
                 The inbox that <span className="text-primary-600 underline decoration-primary-500/20 underline-offset-8">works for you.</span>
               </h2>
               <p className="text-lg text-surface-500 dark:text-surface-400 leading-relaxed font-medium">
                 AmanaFlow Business Email isn't just about sending messages. It's an intelligent workspace that summarizes your threads and drafts your replies.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    { title: "Smart Summaries", desc: "Get instant AI summaries of long email threads.", icon: Sparkles },
                    { title: "AI Ghostwriter", desc: "Draft professional replies in your own tone.", icon: Send },
                    { title: "Search Like Speech", desc: "Find any detail with natural language search.", icon: Sparkles },
                    { title: "Adaptive Inbox", desc: "Prioritizes important contacts automatically.", icon: Zap },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-3xl bg-surface-50 dark:bg-surface-900/50 border border-surface-200 dark:border-surface-800 hover:border-primary-500/50 transition-colors group">
                       <f.icon className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                       <div>
                          <h4 className="font-bold text-surface-900 dark:text-white">{f.title}</h4>
                          <p className="text-xs text-surface-500 mt-1">{f.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-10 bg-primary-500/10 blur-[100px] rounded-full opacity-30" />
               <div className="relative bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-2xl rounded-[3rem] p-4 overflow-hidden">
                  <div className="bg-surface-50 dark:bg-surface-950 rounded-[2.5rem] p-8 min-h-[400px]">
                     <div className="flex justify-between items-center mb-10">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-error-500" />
                           <div className="w-3 h-3 rounded-full bg-warning-500" />
                           <div className="w-3 h-3 rounded-full bg-success-500" />
                        </div>
                        <div className="flex gap-4">
                           <div className="w-6 h-6 rounded-full bg-surface-200 dark:bg-surface-800" />
                           <div className="w-20 h-6 rounded-full bg-surface-200 dark:bg-surface-800" />
                        </div>
                     </div>
                     <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                           <div className="w-10 h-10 rounded-full bg-primary-600 shrink-0" />
                           <div className="flex-1 space-y-2 pt-1">
                              <div className="h-4 bg-primary-100 dark:bg-primary-900/30 rounded-full w-3/4" />
                              <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full w-1/2" />
                           </div>
                        </div>
                        <div className="ml-14 p-6 bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-[2rem] rounded-tl-none space-y-4 shadow-sm">
                           <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-widest"><Sparkles size={14}/> AI Summary</div>
                           <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed font-medium italic">
                             &quot;The client is requesting the final design files by Friday and is asking about the invoice for the second phase. They specifically mentioned liking the blue variant.&quot;
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* ─── COMPARISON SECTION ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Compare our email plans" 
          description="Find the perfect fit for your business, from solo founders to global enterprises."
          badge="Detailed Comparison"
        />
        <ComparisonTable 
          plans={emailPlans} 
          categories={emailCategories} 
          highlightPlanIndex={1} 
        />
      </SectionWrapper>

      {/* ─── FEATURE GRID ─── */}
      <SectionWrapper paddingY="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="flex flex-col items-center text-center gap-6 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800 flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-950 transition-colors">
                     <ShieldCheck size={40} className="text-primary-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-black dark:text-white">Enterprise Security</h3>
                  <p className="text-sm text-surface-500 font-medium">99.9% spam & virus protection with advanced filtering algorithms.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800 flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 transition-colors">
                     <Lock size={40} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-black dark:text-white">Privacy First</h3>
                  <p className="text-sm text-surface-500 font-medium">End-to-end encryption and zero-ads policy. Your data is yours alone.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800 flex items-center justify-center group-hover:bg-accent-50 dark:group-hover:bg-accent-950 transition-colors">
                     <Smartphone size={40} className="text-accent-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-black dark:text-white">Global Access</h3>
                  <p className="text-sm text-surface-500 font-medium">Full support for Outlook, Apple Mail, and mobile via IMAP/POP3.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-6 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-surface-50 dark:bg-surface-900 border border-surface-100 dark:border-surface-800 flex items-center justify-center group-hover:bg-success-50 dark:group-hover:bg-success-950 transition-colors">
                     <Shield size={40} className="text-success-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-black dark:text-white">Free Migration</h3>
                  <p className="text-sm text-surface-500 font-medium">Our expert team migrates your existing mail for free with no downtime.</p>
              </div>
          </div>
      </SectionWrapper>

      {/* ─── TRUST CAROUSEL ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Loved by modern teams" 
          description="See why thousands of business owners have switched to AmanaFlow for their daily communication."
          badge="Success Stories"
        />
        <TrustCarousel testimonials={testimonials} />
      </SectionWrapper>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-primary-600 py-32 text-center">
        <div className="absolute inset-0 bg-primary-700/50 mix-blend-multiply opacity-50" />
        <div className="mx-auto max-w-4xl px-4 relative z-10 space-y-12">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">Win trust with every inbox.</h2>
          <p className="text-primary-100 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
            Join the elite club of businesses using custom email domains. Professional, secure, and AI-optimized.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="xl" className="h-20 px-14 bg-white text-primary-600 hover:bg-surface-50 shadow-premium font-black text-2xl rounded-3xl active:scale-[0.98] transition-all">
               Start Free Trial <ArrowRight size={24} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
