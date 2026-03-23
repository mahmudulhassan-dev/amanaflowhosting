import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CheckCircle2, ArrowRight, DollarSign, Users, TrendingUp, Handshake, Gift, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Program - AmanaFlow",
  description: "Earn recurring commissions by referring clients to AmanaFlow Premium Cloud Hosting.",
};

export default function AffiliatePage() {
  return (
    <>
      <SectionWrapper className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-surface-950 text-white">
        {/* Abstract Background Effects */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 dark:opacity-40">
          <div className="w-[600px] h-[600px] rounded-full bg-primary-600/30 blur-[120px]" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 dark:opacity-30">
          <div className="w-[800px] h-[800px] rounded-full bg-surface-600/30 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">
            <DollarSign size={14} className="mr-1.5" /> AmanaFlow Partner Program
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            Recommend Premium Cloud, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
              Earn Lifetime Commissions
            </span>
          </h1>
          <p className="mb-10 text-lg text-surface-300 lg:text-xl max-w-2xl mx-auto">
            Join the AmanaFlow Affiliate Program to earn up to <strong className="text-white">15% recurring commission</strong> on every cloud server and hosting plan you refer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto h-14 px-8 text-base">
              Become an Affiliate <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base text-white border-surface-700 hover:bg-surface-800">
              Affiliate Login
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper className="bg-white dark:bg-surface-950">
        <SectionHeader
          title="How It Works"
          description="Getting started is incredibly simple. You do the referring, we do the heavy lifting."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {[
            {
              icon: <Users size={32} className="text-primary-600 dark:text-primary-400" />,
              title: "1. Join for Free",
              desc: "Sign up instantly. Get access to your personal dashboard and unique referral links."
            },
            {
              icon: <Handshake size={32} className="text-primary-600 dark:text-primary-400" />,
              title: "2. Promote AmanaFlow",
              desc: "Share your affiliate link on your blog, YouTube, social media, or with your clients."
            },
            {
              icon: <TrendingUp size={32} className="text-primary-600 dark:text-primary-400" />,
              title: "3. Earn Commissions",
              desc: "Get paid automatically when your referrals purchase and renew their hosting plans."
            }
          ].map((step, idx) => (
            <Card key={idx} variant="default" className="bg-surface-50 dark:bg-surface-900 border-none text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-white dark:bg-surface-800 flex items-center justify-center shadow-premium mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed">{step.desc}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper className="bg-surface-50 dark:bg-surface-900 border-y border-surface-200 dark:border-surface-800">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="primary" className="mb-4">Why Partner With Us?</Badge>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-4xl">
              Industry-Leading Payouts With Exceptional Conversion Rates.
            </h2>
            <p className="mb-8 text-lg text-surface-600 dark:text-surface-400">
              We provide enterprise-grade digital infrastructure that practically sells itself. 
              Our fast NVMe disks, LiteSpeed servers, and 99.99% uptime guarantee ensure your referrals remain happy, loyal customers.
            </p>
            <ul className="space-y-4">
              {[
                "15% Recurring Commission on Hosting & VPS",
                "90-Day Long Tracking Cookies",
                "Real-time Analytics via WHMCS Dashboard",
                "Dedicated Affiliate Manager Support",
                "High-Converting Promotional Banners",
                "Fast Payouts via Bank Transfer or PayPal"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success-500/10 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-success-600 dark:text-success-400" />
                  </div>
                  <span className="text-surface-800 dark:text-surface-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-3xl blur-3xl -z-10" />
            <div className="rounded-3xl border border-surface-200 dark:border-surface-800 bg-white/50 dark:bg-surface-900/50 backdrop-blur-xl p-8 shadow-2xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                  <Gift className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-surface-900 dark:text-white">Sample Payout Estimate</h4>
                  <p className="text-sm text-surface-500">Based on Cloud VPS Tier 2</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center px-4 py-3 rounded-lg bg-surface-50 dark:bg-surface-800/50">
                  <span className="text-surface-600 dark:text-surface-300">VPS Price (Yearly)</span>
                  <span className="font-bold text-surface-900 dark:text-white">$179.88</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
                  <span className="text-primary-700 dark:text-primary-300 font-semibold">Your Commission (15%)</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400 text-lg">+$26.98</span>
                </div>
                <p className="text-xs text-center text-surface-500 mt-2">* You receive this amount every single year the client renews.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-surface-950 border-t border-surface-800">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-900 to-surface-950 border border-surface-800 px-6 py-16 text-center sm:px-12 sm:py-20 shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Zap size={400} className="text-primary-500 rotate-12" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Turn Your Traffic Into Monthly Recurring Revenue?
            </h2>
            <p className="mb-10 text-lg text-surface-300">
              Registration takes less than 2 minutes. Start sharing your referral links and earning cash today.
            </p>
            <Button variant="primary" size="lg" className="h-14 px-8 text-base shadow-[0_0_30px_-5px_var(--primary-500)]">
              Create Affiliate Account Now <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
