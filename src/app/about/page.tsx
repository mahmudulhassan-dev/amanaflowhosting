import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Globe, Server, Shield, Zap, Heart } from "lucide-react";

import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About AmanaFlow | Enterprise Hosting Company in Bangladesh",
  description: "AmanaFlow is democratizing premium cloud infrastructure. We provide 99.9% uptime, NVMe SSDs, and L3 engineer support to businesses globally.",
  alternates: {
    canonical: "/about",
    languages: generateAlternateLanguages("/about"),
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">The AmanaFlow Story</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Democratizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Premium Cloud</span> <br className="hidden md:block"/>Infrastructure.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto leading-relaxed">
            We believe that fast, reliable, and secure hosting shouldn&apos;t be a luxury reserved only for enterprise corporations. AmanaFlow was built to deliver raw performance to developers, agencies, and businesses of all sizes.
          </p>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-primary-600 dark:bg-primary-600 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-500/50">
           <div className="text-center">
             <div className="text-4xl md:text-5xl font-extrabold mb-2">99.99%</div>
             <div className="text-primary-100 font-medium">Uptime Guarantee</div>
           </div>
           <div className="text-center">
             <div className="text-4xl md:text-5xl font-extrabold mb-2">10+</div>
             <div className="text-primary-100 font-medium">Global Datacenters</div>
           </div>
           <div className="text-center">
             <div className="text-4xl md:text-5xl font-extrabold mb-2">45s</div>
             <div className="text-primary-100 font-medium">Average Response Time</div>
           </div>
           <div className="text-center">
             <div className="text-4xl md:text-5xl font-extrabold mb-2">15k+</div>
             <div className="text-primary-100 font-medium">Websites Hosted</div>
           </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper className="bg-surface-50 dark:bg-surface-950">
        <SectionHeader 
          title="Our Core Values" 
          description="Everything we do is guided by these three fundamental principles."
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
           {[
             { i: <Zap size={32} />, t: "Performance First", d: "We never oversell servers. Every bit of infrastructure uses cutting-edge NVMe drives and top-tier processors." },
             { i: <Shield size={32} />, t: "Security by Default", d: "We consider security a fundamental right, which is why Free SSL, DDoS mitigation, and daily backups are standard." },
             { i: <Heart size={32} />, t: "Human Support", d: "No scripted bots running you in circles. Only real engineers providing actual solutions within minutes." }
           ].map((v, i) => (
             <div key={i} className="bg-white dark:bg-surface-900 p-8 rounded-3xl border border-surface-200 dark:border-surface-800 shadow-sm hover:shadow-premium transition-shadow">
               <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
                 {v.i}
               </div>
               <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">{v.t}</h3>
               <p className="text-surface-600 dark:text-surface-400 leading-relaxed text-lg">{v.d}</p>
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* Global Network Section */}
      <SectionWrapper className="bg-white dark:bg-surface-900 border-t border-surface-200 dark:border-surface-800">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="neutral" className="mb-4">Global Network</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-4xl mb-6">
              Deployed Close to Your Users.
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8 leading-relaxed">
              We operate exclusively out of Tier III and Tier IV certified data centers across multiple continents, ensuring ultra-low latency and maximum redundancy for your applications.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "New York, USA", "Los Angeles, USA", "London, UK", "Frankfurt, Germany", "Singapore", "Sydney, Australia"
              ].map((loc, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Globe size={20} className="text-surface-400" />
                  <span className="font-semibold text-surface-800 dark:text-surface-200">{loc}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-10">Review Network Status</Button>
          </div>
          <div className="relative">
             <div className="aspect-square lg:aspect-auto lg:h-[500px] w-full bg-surface-100 dark:bg-surface-800 rounded-3xl overflow-hidden relative border border-surface-200 dark:border-surface-700 flex items-center justify-center">
                 {/* Visual Map Representation */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-500)_0%,transparent_70%)] opacity-10 dark:opacity-20 blend-screen" />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <Server size={120} className="text-surface-300 dark:text-surface-500 opacity-50" />
              </div>
             </div>
          </div>
        </div>
      </SectionWrapper>
      {/* ─── FAQS ─── */}
      <SectionWrapper paddingY="xl" className="bg-surface-50 dark:bg-surface-950 border-t border-surface-200 dark:border-surface-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Company FAQs" align="left" />
          <div className="grid gap-4 mt-8">
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                Where is AmanaFlow headquartered?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">Our corporate and engineering teams are located natively in Dhaka, Bangladesh, while our physical hardware operates out of Tier 3 and Tier 4 datacenters globally including USA, UK, and Singapore.</p>
            </details>
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                Do you own your own hardware?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">Yes. We completely avoid cheap reseller models. We procure our own premium bare metal servers, ECC RAM, and Enterprise NVMe drives to ensure absolute quality control over the stack.</p>
            </details>
          </div>
        </div>
      </SectionWrapper>

    </>
  );
}
