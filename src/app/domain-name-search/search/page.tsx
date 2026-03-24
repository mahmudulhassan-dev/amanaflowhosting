import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Globe, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Domain Search | Register Your Perfect Name | AmanaFlow",
  description: "Find and register the perfect domain name for your business. Instant availability check for .com, .net, .org, and 500+ other extensions.",
  alternates: {
    canonical: "/domains/search",
    languages: generateAlternateLanguages("/domains/search"),
  }
};

export default function DomainSearchPage() {
  const tlds = [
    { ext: ".com", price: 12.99, badge: "Popular" },
    { ext: ".net", price: 10.99 },
    { ext: ".org", price: 11.99 },
    { ext: ".cloud", price: 4.99, badge: "Hot" },
    { ext: ".tech", price: 6.99 },
    { ext: ".xyz", price: 1.99, badge: "Sale" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── SEARCH HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary-600/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-6">Global Domain Registrar</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            The perfect name for <br/> your <span className="text-primary-500 underline decoration-4 decoration-primary-500/20 underline-offset-8">big idea.</span>
          </h1>
          
          <div className="max-w-3xl mx-auto relative group">
              <div className="absolute right-2 top-2 bottom-2 z-20">
                  <Button size="lg" className="h-full px-8 rounded-xl shadow-lg">Search Now</Button>
              </div>
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-surface-400 group-focus-within:text-primary-500 transition-colors">
                  <Globe size={22} />
              </div>
              <Input 
                className="h-20 pl-16 pr-44 text-xl rounded-2xl bg-white/5 border-surface-800 text-white placeholder:text-surface-500 focus:bg-white focus:text-surface-900 focus:ring-4 focus:ring-primary-500/20 transition-all shadow-2xl"
                placeholder="Type your ideal domain name..."
              />
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
              {tlds.map((tld, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      <span className="font-bold text-lg">{tld.ext}</span>
                      <span className="text-primary-400 font-medium">${tld.price}</span>
                      {tld.badge && <Badge variant="primary" className="text-[8px] h-4 px-1">{tld.badge}</Badge>}
                  </div>
              ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <SectionWrapper paddingY="xl">
          <SectionHeader title="Why Register with AmanaFlow?" description="More than just a name. We provide a complete domain management ecosystem." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Free Privacy Protection", desc: "Keep your personal information hidden from the public WHOIS database at no extra cost.", icon: <Shield size={32}/> },
                { title: "Simplified DNS", desc: "Manage your A, MX, and CNAME records with our intuitive real-time DNS management panel.", icon: <Zap size={32}/> },
                { title: "Automatic Renewals", desc: "Never lose a domain again. Our system ensures your names stay active before they expire.", icon: <CheckCircle2 size={32}/> }
              ].map((benefit, i) => (
                <div key={i} className="p-8 rounded-3xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 flex flex-col items-center text-center group hover:bg-white dark:hover:bg-surface-800 transition-colors shadow-sm hover:shadow-premium">
                    <div className="text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
          </div>
      </SectionWrapper>

      {/* ─── FAQ ─── */}
      <SectionWrapper hasBackground paddingY="xl">
          <div className="max-w-4xl mx-auto">
              <SectionHeader title="Common Domain Questions" align="left" />
              <div className="grid gap-4 mt-8">
                  <details className="group p-6 bg-white dark:bg-surface-900 rounded-2xl border border-surface-100 dark:border-surface-800">
                      <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                          How long does registration take?
                          <span className="text-primary-500">+</span>
                      </summary>
                      <p className="mt-4 text-surface-500 text-sm">Domain registration is near-instant. Most extensions are active within minutes of payment processing.</p>
                  </details>
                  <details className="group p-6 bg-white dark:bg-surface-900 rounded-2xl border border-surface-100 dark:border-surface-800">
                      <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                          Can I buy a domain without hosting?
                          <span className="text-primary-500">+</span>
                      </summary>
                      <p className="mt-4 text-surface-500 text-sm">Absolutely. Many clients park their domains with us or use them for external services like Shopify or Google Workspace.</p>
                  </details>
              </div>
          </div>
      </SectionWrapper>

    </div>
  );
}
