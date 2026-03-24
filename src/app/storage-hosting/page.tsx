import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HardDrive, Database, Shield, Radio, Cloud, Globe, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "High-Capacity Storage Servers | Reliable Big Data | AmanaFlow",
  description: "Massive storage for your backups, archives, and media. High-density storage servers with RAID protection and 10Gbps connectivity.",
  alternates: {
    canonical: "/storage-hosting",
    languages: generateAlternateLanguages("/storage-hosting"),
  }
};

export default function StorageServersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden border-b border-surface-800/50">
        <div className="absolute inset-x-0 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center text-center relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-6">Massive Data Scalability</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Storage Without <br/> <span className="text-primary-500">Boundaries.</span>
          </h1>
          <p className="text-xl text-surface-400 mb-12 max-w-3xl leading-relaxed">
            From petabyte-scale archives to high-concurrency media streaming. Our high-density storage servers provide the throughput and redundancy your data demands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="primary" className="px-10 h-16 shadow-lg shadow-primary-500/10">Configure Storage Node</Button>
            <Button size="xl" variant="outline" className="px-10 h-16 border-surface-800 text-white hover:bg-white/5">Discuss Solutions</Button>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="xl" className="-mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              
              {[
                { title: "Storage Lite", size: "2TB", price: 14.99, icon: <Cloud size={24}/> },
                { title: "Storage Pro", size: "8TB", price: 44.99, icon: <Database size={24}/> },
                { title: "Storage Elite", size: "20TB", price: 99.99, icon: <HardDrive size={24}/> },
                { title: "Petabyte Node", size: "100TB+", price: 399.99, icon: <Radio size={24}/> }
              ].map((plan, i) => (
                <Card key={i} className="bg-white dark:bg-surface-900 border-surface-200 dark:border-surface-800 hover:shadow-2xl transition-all hover:-translate-y-2">
                    <CardHeader>
                        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950 rounded-lg flex items-center justify-center text-primary-500 mb-4 tracking-tighter shadow-sm">
                            {plan.icon}
                        </div>
                        <CardTitle className="text-lg">{plan.title}</CardTitle>
                        <CardDescription className="text-primary-600 font-bold text-xl">{plan.size}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-4 flex items-baseline">
                            <PriceDisplay amount={plan.price} className="text-3xl font-bold" />
                            <span className="text-surface-500 ml-1 text-sm">/mo</span>
                        </div>
                        <ul className="space-y-3 text-xs text-surface-500 border-t border-surface-100 dark:border-surface-800 pt-4">
                            <li className="flex items-center gap-2 font-medium">RAID 10 Redundancy</li>
                            <li className="flex items-center gap-2 font-medium">10Gbps Network Uplink</li>
                            <li className="flex items-center gap-2 font-medium">Unmetered Bandwidth</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" fullWidth size="sm">Get Started</Button>
                    </CardFooter>
                </Card>
              ))}

          </div>
      </SectionWrapper>

      {/* ─── TECHNICAL ADVANTAGES ─── */}
      <SectionWrapper hasBackground paddingY="xl" className="bg-surface-50 dark:bg-surface-950">
          <SectionHeader title="Enterprise Data Integrity" description="Why companies trust AmanaFlow with their mission-critical archives." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-surface-900 rounded-[2.5rem] shadow-sm transform transition-all hover:scale-[1.02]">
                  <Shield size={48} className="text-primary-500 mb-6" />
                  <h3 className="text-xl font-bold mb-4">RAID Protection</h3>
                  <p className="text-surface-500 text-sm italic">Hardware-level redundancy ensures your data survives multiple drive failures without a single second of downtime.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-surface-900 rounded-[2.5rem] shadow-sm transform transition-all hover:scale-[1.02]">
                  <Globe size={48} className="text-primary-500 mb-6" />
                  <h3 className="text-xl font-bold mb-4">Global Peering</h3>
                  <p className="text-surface-500 text-sm italic">Direct peering with major ISPs and internet exchanges for ultra-low latency data retrieval anywhere on earth.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-surface-900 rounded-[2.5rem] shadow-sm transform transition-all hover:scale-[1.02]">
                  <RefreshCw size={48} className="text-primary-500 mb-6" />
                  <h3 className="text-xl font-bold mb-4">Hot-Swappable</h3>
                  <p className="text-surface-500 text-sm italic">All storage arrays feature hot-swappable bays, allowing us to expand or maintain hardware while your server stays live.</p>
              </div>
          </div>
      </SectionWrapper>

    </div>
  );
}
