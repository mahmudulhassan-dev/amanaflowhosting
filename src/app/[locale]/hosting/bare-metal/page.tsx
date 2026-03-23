import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Globe2, Activity } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";

export const metadata = {
  title: "Bare Metal Servers - AmanaFlow",
  description: "Raw, un-virtualized compute power with dedicated Bare Metal infrastructure.",
};

export default function BareMetalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-32 overflow-hidden text-center border-b border-surface-800">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary-900/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-6 bg-surface-900">Zero Virtualization Overhead</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-mono text-white">
            Raw Compute. <span className="text-primary-500">Bare Metal.</span>
          </h1>
          <p className="text-lg text-surface-400 mb-10 max-w-2xl mx-auto">
            Experience absolute hardware isolation, direct access to physical resources, and uncompromised performance for hyper-scale databases, AI training, and massive SaaS applications.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="primary">Deploy Bare Metal Instance</Button>
          </div>
        </div>
      </section>

      {/* ─── TIERS ─── */}
      <SectionWrapper paddingY="xl" className="relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          <Card className="bg-white dark:bg-surface-900 border-surface-200 dark:border-surface-800 shadow-xl overflow-hidden group">
            <div className="w-full h-1 bg-gradient-to-r from-surface-300 to-surface-500" />
            <CardHeader className="pt-8">
              <Badge variant="neutral" styleType="soft" className="w-fit mb-4">Intel Xeon Scalable</Badge>
              <CardTitle className="text-2xl">BM-Intel-64</CardTitle>
              <CardDescription>Raw computing capability for typical enterprise workloads.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline border-b border-surface-100 dark:border-surface-800 pb-6">
                <PriceDisplay amount={199.00} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400 font-medium font-mono">
                <li className="flex items-center gap-3"><Server size={18} className="text-primary-500" /> CPU: Dual Intel Xeon Silver 4210R (20 Cores)</li>
                <li className="flex items-center gap-3"><Activity size={18} className="text-primary-500" /> RAM: 64 GB DDR4 ECC</li>
                <li className="flex items-center gap-3"><Globe2 size={18} className="text-primary-500" /> Storage: 2 x 960GB Datacenter NVMe (RAID 1)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> Uplink: 10 Gbps Public / 10 Gbps Private</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-8">
              <Button variant="outline" size="lg" fullWidth>Customize & Deploy</Button>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-surface-900 border-surface-200 dark:border-surface-800 shadow-xl overflow-hidden group">
            <div className="w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600" />
            <CardHeader className="pt-8">
              <Badge variant="primary" className="w-fit mb-4">AMD EPYC™ Series</Badge>
              <CardTitle className="text-2xl">BM-EPYC-128</CardTitle>
              <CardDescription>Massive multi-threaded throughput for big data.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline border-b border-surface-100 dark:border-surface-800 pb-6">
                <PriceDisplay amount={349.00} className="text-4xl font-bold text-primary-600 dark:text-primary-400" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400 font-medium font-mono">
                <li className="flex items-center gap-3"><Server size={18} className="text-primary-500" /> CPU: AMD EPYC™ 7502P (32 Cores / 64 Threads)</li>
                <li className="flex items-center gap-3"><Activity size={18} className="text-primary-500" /> RAM: 128 GB DDR4 ECC Reg</li>
                <li className="flex items-center gap-3"><Globe2 size={18} className="text-primary-500" /> Storage: 4 x 1.92TB Datacenter NVMe (RAID 10)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-primary-500" /> Uplink: 25 Gbps Public / 25 Gbps Private</li>
              </ul>
            </CardContent>
            <CardFooter className="pb-8">
              <Button variant="primary" size="lg" fullWidth className="shadow-premium">Customize & Deploy</Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

    </div>
  );
}
