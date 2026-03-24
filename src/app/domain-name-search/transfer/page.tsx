import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { RefreshCw, Shield, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Transfer Your Domain | Smooth & Secure Migration | AmanaFlow",
  description: "Move your domains to AmanaFlow and get 1 year for free. Easy 3-step transfer process with 24/7 migration support.",
  alternates: {
    canonical: "/domains/transfer",
    languages: generateAlternateLanguages("/domains/transfer"),
  }
};

export default function DomainTransferPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-600/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Badge variant="primary" styleType="soft" className="mb-6">Domain Migration Service</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Move to a <br/> <span className="text-primary-500">Better Home.</span>
            </h1>
            <p className="text-xl text-surface-400 mb-10 leading-relaxed max-w-xl">
              Tired of high renewal rates? Transfer your domains to AmanaFlow and enjoy transparent pricing, free privacy, and a free 1-year extension.
            </p>
            
            <div className="flex gap-2 max-w-md p-2 bg-white/5 rounded-2xl border border-white/10 group focus-within:bg-white focus-within:border-primary-500 transition-all">
                <Input 
                    className="border-none bg-transparent text-white placeholder:text-surface-500 focus-visible:ring-0 focus:text-surface-900" 
                    placeholder="Enter domain to transfer..."
                />
                <Button className="rounded-xl px-6 h-12 shadow-lg">Transfer</Button>
            </div>
            <p className="mt-4 text-xs text-surface-500 italic">* Includes 1-year extension on most extensions (excluding premium/unsupported)</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
              <Card className="bg-surface-900 border-surface-800 p-6">
                <RefreshCw size={32} className="text-primary-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Zero Downtime</h3>
                <p className="text-xs text-surface-500">Your website stays online during the entire migration process.</p>
              </Card>
              <Card className="bg-surface-900 border-surface-800 p-6 mt-8">
                <Clock size={32} className="text-primary-500 mb-4" />
                <h3 className="font-bold text-white mb-2">Free Extension</h3>
                <p className="text-xs text-surface-500">We add 1 full year to your current expiry date upon transfer.</p>
              </Card>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <SectionWrapper paddingY="xl">
          <SectionHeader title="How it Works" description="Transferring your domain is a simple 3-step process that takes less than 5 minutes of effort." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto relative">
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-surface-100 dark:bg-surface-800 z-0" />
              
              {[
                { step: "01", title: "Unlock & Auth", desc: "Unlock your domain at your current registrar and get the Authorization (EPP) code." },
                { step: "02", title: "Verify Transfer", desc: "Submit your domain and Auth code here. Pay the transfer fee (equal to 1yr renewal)." },
                { step: "03", title: "Confirm Email", desc: "Approve the transfer link sent to your administrative email. Done!" }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-surface-950 border-4 border-primary-500 flex items-center justify-center mb-6 shadow-xl">
                        <span className="text-2xl font-black text-primary-600">{item.step}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-surface-500">{item.desc}</p>
                </div>
              ))}
          </div>
      </SectionWrapper>

      {/* ─── INFO CARD ─── */}
      <SectionWrapper hasBackground paddingY="lg">
          <div className="bg-primary-600 rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                  <h2 className="text-4xl font-bold mb-6">Need help with a bulk transfer?</h2>
                  <p className="text-primary-100 text-lg">Moving hundreds of domains? Our Concierge Team can handle the entire process manually for you at no extra cost.</p>
              </div>
              <div className="flex flex-col gap-4 min-w-[300px]">
                  <Button variant="secondary" size="xl" className="w-full h-16 rounded-2xl bg-white text-primary-600 hover:bg-surface-100 border-none font-bold">Talk to Concierge</Button>
                  <div className="flex items-center justify-center gap-2 text-primary-100 text-sm">
                      <Shield size={16} /> Secure Migration Guaranteed
                  </div>
              </div>
          </div>
      </SectionWrapper>

    </div>
  );
}
