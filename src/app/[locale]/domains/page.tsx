import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Search, Globe, Shield, Lock, RotateCw, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Domain Name Search & Registration | AmanaFlow",
  description: "Search and register your perfect domain name today. Free WHOIS privacy and DNS management included.",
};

const domains = [
  { tld: ".com", type: "Popular", reg: 9.99, ren: 13.99 },
  { tld: ".net", type: "Classic", reg: 11.99, ren: 14.99 },
  { tld: ".org", type: "Entity", reg: 12.99, ren: 15.99 },
  { tld: ".io", type: "Tech", reg: 39.99, ren: 45.99 },
  { tld: ".co", type: "Business", reg: 24.99, ren: 29.99 },
  { tld: ".cloud", type: "Modern", reg: 4.99, ren: 19.99 },
];

export default function DomainSearchPage() {
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
          
          <div className="max-w-3xl mx-auto relative p-2 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-2xl">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-surface-400" />
              </div>
              <Input 
                placeholder="Find amanaflow.com..." 
                className="w-full pl-11 h-16 text-lg bg-surface-900 border-surface-700 text-white placeholder:text-surface-500 rounded-xl focus-visible:ring-primary-500"
              />
            </div>
            <Button variant="primary" size="lg" className="h-16 px-8 rounded-xl shrink-0 text-base">
              Search Domain
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-surface-400">
            {domains.slice(0,4).map((d, i) => (
              <span key={i} className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                <strong className="font-bold text-white text-base">{d.tld}</strong> 
                 <PriceDisplay amount={d.reg} className="text-surface-300" />
              </span>
            ))}
          </div>
        </div>
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
    </>
  );
}
