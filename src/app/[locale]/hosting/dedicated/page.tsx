import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Server, ArrowRight, ShieldCheck, Activity, Key, Database, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Bare Metal Dedicated Servers | AmanaFlow",
  description: "Unmanaged dedicated servers providing raw maximum compute power for intense enterprise applications.",
};

const servers = [
  {
    cpu: "Intel Xeon E-2276G",
    cores: "6 Cores / 12 Threads @ 3.8GHz",
    ram: "32 GB DDR4 ECC",
    storage: "2x 512GB NVMe SSD (Soft RAID)",
    bandwidth: "500 Mbps Unmetered",
    location: "US East (New York)",
    price: 99.00
  },
  {
    cpu: "AMD Ryzen™ 9 5900X",
    cores: "12 Cores / 24 Threads @ 3.7GHz",
    ram: "64 GB DDR4 ECC",
    storage: "2x 1TB NVMe SSD (Soft RAID)",
    bandwidth: "1 Gbps Unmetered",
    location: "Europe (Germany)",
    price: 159.00
  },
  {
    cpu: "Dual Intel Xeon Silver 4214",
    cores: "24 Cores / 48 Threads @ 2.2GHz",
    ram: "128 GB DDR4 ECC",
    storage: "4x 1TB NVMe SSD (Hardware RAID)",
    bandwidth: "2 Gbps Unmetered",
    location: "US West (Los Angeles)",
    price: 299.00
  },
  {
    cpu: "AMD EPYC™ 7402P",
    cores: "24 Cores / 48 Threads @ 2.8GHz",
    ram: "256 GB DDR4 ECC",
    storage: "4x 2TB NVMe SSD (Hardware RAID)",
    bandwidth: "10 Gbps Port (50TB/m)",
    location: "US East (New York)",
    price: 499.00
  }
];

export default function DedicatedHostingPage() {
  return (
    <>
      <SectionWrapper className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-surface-950 text-white border-b border-surface-800">
        {/* Deep mesh gradient background strictly for Bare Metal page */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="neutral" className="mb-6 bg-surface-800 text-surface-200 border-surface-700">
            <Server size={14} className="mr-1.5" /> High-Performance Bare Metal
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl">
            Raw, Uncompromised <br className="hidden sm:block" />
            <span className="text-white">Compute Power.</span>
          </h1>
          <p className="mb-10 text-lg text-surface-400 lg:text-xl max-w-3xl mx-auto">
            Experience absolute control and isolation. Our unmanaged dedicated servers deliver 100% of the hardware directly to your applications.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg" className="h-14 px-8 text-base">
              Browse Inventory <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Server Inventory Wrapper */}
      <SectionWrapper className="bg-surface-50 dark:bg-surface-950">
        <SectionHeader
          title="Server Configurations"
          description="Provisioned within 4 to 24 hours depending on hardware availability. Pricing requires no commitment."
          align="center"
        />
        
        <div className="mt-12 space-y-4">
          {/* Header Row for Desktop */}
          <div className="hidden lg:grid grid-cols-6 gap-4 px-6 py-3 text-sm font-semibold text-surface-500 uppercase tracking-wider">
            <div className="col-span-2">Processor</div>
            <div>Memory</div>
            <div>Storage</div>
            <div>Network Limit</div>
            <div className="text-right">Starting At</div>
          </div>
          
          {/* Server List */}
          {servers.map((server, idx) => (
            <Card key={idx} className="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <div className="p-6 lg:grid lg:grid-cols-6 lg:items-center lg:gap-4 flex flex-col gap-6">
                
                <div className="col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center flex-shrink-0">
                      <Database className="text-surface-600 dark:text-surface-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-surface-900 dark:text-white text-lg">{server.cpu}</h4>
                      <p className="text-sm text-surface-500">{server.cores}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-surface-500 uppercase font-semibold mb-1 lg:hidden">Memory</div>
                  <p className="font-medium text-surface-800 dark:text-surface-200">{server.ram}</p>
                </div>
                
                <div>
                  <div className="text-xs text-surface-500 uppercase font-semibold mb-1 lg:hidden">Storage</div>
                  <p className="font-medium text-surface-800 dark:text-surface-200">{server.storage}</p>
                </div>
                
                <div>
                  <div className="text-xs text-surface-500 uppercase font-semibold mb-1 lg:hidden">Network Limit</div>
                  <p className="font-medium text-surface-800 dark:text-surface-200">{server.bandwidth}</p>
                  <p className="text-xs text-surface-400">{server.location}</p>
                </div>

                <div className="lg:text-right flex flex-col lg:items-end justify-center pt-4 lg:pt-0 border-t lg:border-t-0 border-surface-100 dark:border-surface-800">
                  <div className="flex items-baseline lg:mb-2">
                    <PriceDisplay amount={server.price} className="text-2xl font-extrabold text-surface-900 dark:text-white mr-1" monthly />
                  </div>
                  <Button variant="outline" size="sm" className="w-full lg:w-auto mt-4 lg:mt-0">Configure</Button>
                </div>
                
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Trust factors */}
      <SectionWrapper className="bg-white dark:bg-surface-900 border-t border-surface-200 dark:border-surface-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { i: <Key size={24} />, t: "Full Root Access", d: "Complete system control via SSH or IPMI." },
             { i: <Activity size={24} />, t: "99.99% Uptime", d: "SLA backed SLA network reliability." },
             { i: <ShieldCheck size={24} />, t: "DDoS Defended", d: "Always-on inline DDoS protection." },
             { i: <Globe size={24} />, t: "Global Network", d: "Multi-homed BGP network backbone." }
           ].map((ft, c) => (
             <div key={c} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  {ft.i}
                </div>
                <h5 className="font-bold text-surface-900 dark:text-white mb-2">{ft.t}</h5>
                <p className="text-sm text-surface-500">{ft.d}</p>
             </div>
           ))}
        </div>
      </SectionWrapper>
    </>
  );
}
