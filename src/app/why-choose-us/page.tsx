import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Server, Users, Shield, MapPin } from "lucide-react";

import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Why Choose AmanaFlow? Premium Cloud & Hosting Benefits",
  description: "Learn why developers and businesses switch to AmanaFlow. We offer raw NVMe speed, unmetered DDoS protection, and 100% real L3 technical support.",
  alternates: {
    canonical: "/why-choose-us",
    languages: generateAlternateLanguages("/why-choose-us"),
  }
};

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO */}
      <section className="relative w-full bg-surface-50 dark:bg-surface-950 pt-20 pb-20 text-center border-b border-surface-200 dark:border-surface-800">
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Not just another hosting company.
          </h1>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-10 max-w-2xl mx-auto">
            We built AmanaFlow because we were tired of generic, overcrowded shared servers and unresponsive support. We engineer performance.
          </p>
        </div>
      </section>

      {/* CORE PILLARS */}
      <SectionWrapper paddingY="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <Card className="text-center p-6 border-none shadow-none bg-transparent hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors cursor-default">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Hardware</h3>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed text-sm">
                We never use desktop-grade components. Every node is powered by AMD EPYC/Ryzen processors, ECC RAM, and Datacenter NVMe SSDs in RAID arrays.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-none shadow-none bg-transparent hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors cursor-default">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Uncompromising Security</h3>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed text-sm">
                From inline algorithmic DDoS mitigation to daily off-site disaster recovery snapshots, your data is fortified at every layer of the OSI model.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-none shadow-none bg-transparent hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors cursor-default">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">L3 Engineer Support</h3>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed text-sm">
                No outsourced tier-1 bots reading scripts. When you open a ticket, it routes directly to system administrators who can actually ssh in and fix your issue.
              </p>
            </CardContent>
          </Card>

        </div>
      </SectionWrapper>
      
      {/* DATACENTERS */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Global Edge Network" 
          description="Place your applications closer to your users. Our multi-continent footprint ensures single-digit latency anywhere."
        />
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
           {['New York, USA', 'London, UK', 'Frankfurt, DE', 'Singapore, SG', 'Tokyo, JP', 'Sydney, AU'].map((loc) => (
             <div key={loc} className="flex items-center gap-2 bg-white dark:bg-surface-950 px-5 py-3 rounded-full border border-surface-200 dark:border-surface-800 shadow-sm font-medium">
                <MapPin size={16} className="text-primary-500" />
                {loc}
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* ─── FAQS ─── */}
      <SectionWrapper paddingY="xl" className="bg-surface-50 dark:bg-surface-950 border-t border-surface-200 dark:border-surface-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Common Questions" align="left" />
          <div className="grid gap-4 mt-8">
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                How do you differ from mainstream hosts?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">Most giant hosts pack thousands of clients onto obsolete servers to maximize profit. We intentionally under-provision our modern AMD EPYC nodes to ensure your site always has access to guaranteed CPU cycles during major traffic spikes.</p>
            </details>
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                Do you enforce hidden renewal price hikes?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">No. Transparency is our core value. We do not use predatory introductory pricing that quintuples upon renewal. Our pricing tiers are transparent and straightforward.</p>
            </details>
          </div>
        </div>
      </SectionWrapper>

    </div>
  );
}
