"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Search, Globe, Shield, Lock, RotateCw, ArrowRight, CheckCircle2 } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";
import { DomainSearchBar, DomainSearchBarHandle, AIDomainGenerator } from "@/components/domain";
import { useRef } from "react";


const domains = [
  { tld: ".com", type: "Popular", reg: 9.99, ren: 13.99 },
  { tld: ".net", type: "Classic", reg: 11.99, ren: 14.99 },
  { tld: ".org", type: "Entity", reg: 12.99, ren: 15.99 },
  { tld: ".io", type: "Tech", reg: 39.99, ren: 45.99 },
  { tld: ".co", type: "Business", reg: 24.99, ren: 29.99 },
  { tld: ".cloud", type: "Modern", reg: 4.99, ren: 19.99 },
];

export default function DomainSearchPage() {
  const searchBarRef = useRef<DomainSearchBarHandle>(null);

  const handleSelectAIDomain = (domain: string) => {
    if (searchBarRef.current) {
      searchBarRef.current.triggerSearch(domain);
      // Scroll to top to see results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SectionWrapper className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary-900/10 to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Global TLD Registrar</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Domain Name.</span>
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Secure your online identity today. Over 300+ extensions available with industry-leading DNS speeds and free privacy protection.
          </p>
          
          <DomainSearchBar ref={searchBarRef} />
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-surface-400 relative z-10">
            {domains.slice(0,4).map((d, i) => (
              <span key={i} className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                <strong className="font-bold text-white text-base">{d.tld}</strong> 
                 <PriceDisplay amount={d.reg} className="text-surface-300" />
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* AI Generator Section */}
      <SectionWrapper className="bg-white dark:bg-surface-950 border-b border-surface-200 dark:border-surface-800">
        <SectionHeader 
          title="Brainstorm with AI" 
          description="Describe your business idea and let our AI suggest the most brandable, SEO-friendly domain names for you."
          align="center"
        />
        <AIDomainGenerator onSelectDomain={handleSelectAIDomain} />
      </SectionWrapper>

      {/* Pricing Table */}
      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 border-b border-surface-200 dark:border-surface-800">
        <SectionHeader 
          title="Transparent Pricing" 
          description="We believe in fair pricing without extreme renewal shocks. What you see is what you pay."
          align="center"
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="overflow-hidden bg-white dark:bg-surface-900 border-surface-200 dark:border-surface-800">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                    <th className="py-4 px-6 font-semibold text-surface-900 dark:text-white">Extension</th>
                    <th className="py-4 px-6 font-semibold text-surface-900 dark:text-white">Registration</th>
                    <th className="py-4 px-6 font-semibold text-surface-900 dark:text-white">Renewal</th>
                    <th className="py-4 px-6 font-semibold text-surface-900 dark:text-white">Transfer</th>
                    <th className="py-4 px-6 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100 dark:divide-surface-800">
                   {domains.map((dom, idx) => (
                     <tr key={idx} className="hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors">
                       <td className="py-4 px-6">
                         <div className="flex items-center gap-3">
                           <span className="text-lg font-bold text-surface-900 dark:text-white">{dom.tld}</span>
                           <Badge variant="neutral" className="text-[10px] hidden sm:inline-flex">{dom.type}</Badge>
                         </div>
                       </td>
                       <td className="py-4 px-6 font-medium text-surface-700 dark:text-surface-300"><PriceDisplay amount={dom.reg} /></td>
                       <td className="py-4 px-6 font-medium text-surface-700 dark:text-surface-300"><PriceDisplay amount={dom.ren} /></td>
                       <td className="py-4 px-6 font-medium text-surface-700 dark:text-surface-300"><PriceDisplay amount={dom.ren} /></td>
                       <td className="py-4 px-6 text-right">
                         <Button variant="outline" size="sm">Register</Button>
                       </td>
                     </tr>
                   ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Domain Features */}
      <SectionWrapper className="bg-white dark:bg-surface-900">
        <SectionHeader 
          title="Included with Every Domain" 
          description="We pack powerful features into every domain registration completely free of charge."
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {[
            { i: <Shield size={28} />, t: "Free WHOIS Privacy", d: "Keep your personal contact information hidden from public lookups and spammers forever." },
            { i: <Globe size={28} />, t: "Premium DNS Management", d: "Route your traffic globally with our fast, reliable, and geo-redundant Anycast DNS." },
            { i: <Lock size={28} />, t: "Domain Lock Protection", d: "Prevent unauthorized transfers and domain hijacking with automatic registrar locks." },
            { i: <RotateCw size={28} />, t: "Auto-Renewal Safety", d: "Never lose your domain name by accident. We automatically renew it before expiration." },
            { i: <ArrowRight size={28} />, t: "Email & Domain Forwarding", d: "Forward your domain to social profiles or route customized emails directly to your Gmail." },
            { i: <CheckCircle2 size={28} />, t: "Easy Integrations", d: "Connect seamlessly to Vercel, Shopify, Google Workspace, or your AmanaFlow hosting." }
          ].map((feat, i) => (
             <div key={i} className="flex gap-4">
               <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                 {feat.i}
               </div>
               <div>
                 <h4 className="font-bold text-lg text-surface-900 dark:text-white mb-1">{feat.t}</h4>
                 <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{feat.d}</p>
               </div>
             </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── WHY DOMAINS MATTER ─── */}
      <SectionWrapper className="bg-surface-50 dark:bg-surface-900 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Globe className="w-12 h-12 text-primary-500 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-surface-900 dark:text-white mb-6">Your Domain is Your Digital Real Estate</h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 leading-relaxed mb-8">
             In a crowded digital world, a memorable and professional domain name establishes instant authority. It&apos;s the first thing customers see, the foundation of your professional email, and the core of your brand identity and SEO strategy.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white dark:bg-surface-950 p-6 rounded-2xl border border-surface-200 dark:border-surface-800">
              <Shield className="w-6 h-6 text-success-500 mb-3" />
              <h4 className="font-bold text-surface-900 dark:text-white mb-2">Builds Trust</h4>
              <p className="text-sm text-surface-600 dark:text-surface-400">A custom domain proves you are a legitimate, serious business.</p>
            </div>
            <div className="bg-white dark:bg-surface-950 p-6 rounded-2xl border border-surface-200 dark:border-surface-800">
              <Search className="w-6 h-6 text-primary-500 mb-3" />
              <h4 className="font-bold text-surface-900 dark:text-white mb-2">SEO Value</h4>
              <p className="text-sm text-surface-600 dark:text-surface-400">Short, brandable domains index rapidly in Google searches.</p>
            </div>
            <div className="bg-white dark:bg-surface-950 p-6 rounded-2xl border border-surface-200 dark:border-surface-800">
              <Lock className="w-6 h-6 text-purple-500 mb-3" />
              <h4 className="font-bold text-surface-900 dark:text-white mb-2">Brand Protection</h4>
              <p className="text-sm text-surface-600 dark:text-surface-400">Secure your name before competitors monopolize your brand identity.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* ─── FAQS ─── */}
      <SectionWrapper paddingY="xl" className="bg-surface-50 dark:bg-surface-950 border-t border-surface-200 dark:border-surface-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Domain Name Registration FAQs" align="left" />
          <div className="grid gap-4 mt-8">
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                Is WHOIS Privacy really completely free?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">Yes! We believe privacy is a fundamental right. WHOIS proxy protection is included free for life on all eligible TLDs, keeping your name, email, and phone number safe from spammers.</p>
            </details>
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                Can I transfer an existing domain to AmanaFlow?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">Absolutely. Just unlock your domain at your current registrar and obtain the EPP auth code. The transfer usually adds a full year to your existing domain expiration date.</p>
            </details>
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                How long does domain registration take?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">In 99% of cases, domain names are registered and globally propagated within exactly 60 seconds of successful payment. You can start building your website immediately.</p>
            </details>
          </div>
        </div>
      </SectionWrapper>

    </>
  );
}
