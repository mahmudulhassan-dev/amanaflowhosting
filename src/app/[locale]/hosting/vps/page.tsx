import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardFooter } from "@/components/ui/Card";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CheckCircle2, Server, Shield, Zap, Cpu, Network, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud VPS Hosting - Managed & Unmanaged | AmanaFlow",
  description: "High-performance NVMe Cloud VPS with full root access, dedicated resources, and instant provisioning.",
};

const vpsPlans = [
  {
    name: "Cloud VPS 1",
    desc: "Perfect for testing and small applications.",
    price: 4.99,
    cores: "1 vCPU",
    ram: "2 GB RAM",
    storage: "40 GB NVMe SSD",
    bandwidth: "1 TB Transfer",
    popular: false,
  },
  {
    name: "Cloud VPS 2",
    desc: "Our most popular tier for growing businesses.",
    price: 9.99,
    cores: "2 vCPU",
    ram: "4 GB RAM",
    storage: "80 GB NVMe SSD",
    bandwidth: "2 TB Transfer",
    popular: true,
  },
  {
    name: "Cloud VPS 3",
    desc: "For heavy workloads and eCommerce stores.",
    price: 19.99,
    cores: "4 vCPU",
    ram: "8 GB RAM",
    storage: "160 GB NVMe SSD",
    bandwidth: "4 TB Transfer",
    popular: false,
  },
  {
    name: "Cloud VPS 4",
    desc: "Enterprise compute for demanding apps.",
    price: 39.99,
    cores: "8 vCPU",
    ram: "16 GB RAM",
    storage: "320 GB NVMe SSD",
    bandwidth: "8 TB Transfer",
    popular: false,
  }
];

export default function VPSHostingPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-surface-950 text-white">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30">
          <div className="w-[600px] h-[600px] rounded-full bg-primary-600/30 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">
            <Server size={14} className="mr-1.5" /> Next-Gen Cloud VPS
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl">
            Scale Your Workloads with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
              Blazing Fast NVMe VPS
            </span>
          </h1>
          <p className="mb-10 text-lg text-surface-300 lg:text-xl max-w-2xl mx-auto">
            Get complete control over your environment with full root access, dedicated KVM compute resources, and instant 55-second provisioning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto h-14 px-8 text-base">
              View Pricing <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base text-white border-surface-700 hover:bg-surface-800">
              Deploy Custom Server
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Grid */}
      <SectionWrapper className="bg-surface-50 dark:bg-surface-950">
        <SectionHeader
          title="Compute Resources Built to Scale"
          description="Transparent, predictable pricing with no hidden fees. Upgrade instantly as your traffic grows."
          align="center"
        />
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {vpsPlans.map((plan, idx) => (
            <Card key={idx} variant={plan.popular ? "elevated" : "default"} className={`relative overflow-hidden flex flex-col h-full bg-white dark:bg-surface-900 border ${plan.popular ? 'border-primary-500 shadow-[0_8px_30px_-5px_rgba(var(--primary-500),0.3)]' : 'border-surface-200 dark:border-surface-800'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400" />
              )}
              <div className="p-6 pb-4">
                {plan.popular && <Badge variant="primary" className="mb-4">Most Popular</Badge>}
                <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-surface-500 dark:text-surface-400 min-h-[40px]">{plan.desc}</p>
              </div>
              
              <div className="px-6 py-4 bg-surface-50 dark:bg-surface-950/50 border-y border-surface-100 dark:border-surface-800">
                <div className="flex items-baseline mb-1">
                  <PriceDisplay amount={plan.price} className="text-3xl font-extrabold text-surface-900 dark:text-white" monthly />
                </div>
                <p className="text-xs text-surface-500">Billed monthly. Save 20% on yearly.</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-4 text-sm text-surface-700 dark:text-surface-300">
                  <li className="flex items-center gap-3">
                    <Cpu size={16} className="text-surface-400" />
                    <span className="font-semibold">{plan.cores}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Server size={16} className="text-surface-400" />
                    <span className="font-semibold">{plan.ram}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={16} className="text-primary-500" />
                    <span className="font-semibold">{plan.storage}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Network size={16} className="text-surface-400" />
                    <span className="font-semibold">{plan.bandwidth}</span>
                  </li>
                </ul>
              </div>
              
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                  Deploy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Features Outline */}
      <SectionWrapper className="bg-white dark:bg-surface-900">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="neutral" className="mb-4 text-surface-600 dark:text-surface-300">Enterprise Infrastructure</Badge>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-4xl">
              Powering the Modern Web.
            </h2>
            <p className="mb-8 text-lg text-surface-600 dark:text-surface-400">
              Our Cloud VPS instances run on the latest AMD EPYC processors with enterprise-grade NVMe SSD arrays running in RAID 10. Guaranteed resources, zero noisy neighbors.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Full Root/SSH Access",
                "Dedicated IPv4 Address",
                "KVM Virtualization",
                "Custom Automated Backups",
                "Choice of Linux OS",
                "cPanel/CyberPanel Ready"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-success-500" />
                  <span className="font-medium text-surface-800 dark:text-surface-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-6">
                <div className="bg-surface-50 dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="font-bold text-surface-900 dark:text-white mb-2">Instant Setup</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Your server is online and ready in exactly 55 seconds.</p>
                </div>
                <div className="bg-surface-50 dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="font-bold text-surface-900 dark:text-white mb-2">Free DDoS Protection</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Automatic mitigation up to 1Tbps network capacity.</p>
                </div>
             </div>
             <div className="space-y-6 mt-12">
                <div className="bg-surface-50 dark:bg-surface-800 p-6 rounded-2xl border border-surface-200 dark:border-surface-700">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-4">
                    <Network className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="font-bold text-surface-900 dark:text-white mb-2">10Gbps Uplink</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-400">Blazing fast bandwidth to handle tremendous traffic spikes.</p>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
