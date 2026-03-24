import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Windows VPS - AmanaFlow",
  description: "High-performance RDP enabled Windows Virtual Private Servers with AMD EPYC processors.",
  alternates: {
    canonical: "/windows-vps-hosting",
    languages: generateAlternateLanguages("/windows-vps-hosting"),
  }
};

export default function WindowsVPSPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-[#0078D4] text-white pt-20 pb-32 overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Badge variant="primary" className="mb-6 bg-white/20 text-white border-none">Full Administrator RDP</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Enterprise Windows VPS.
          </h1>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Run your ASP.NET apps, Forex bots, and internal tools on lightning-fast NVMe storage with full Administrator RDP access and licensed Windows Server 2022.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-[#0078D4] hover:bg-surface-50 shadow-premium border-none">View Windows Plans</Button>
          </div>
        </div>
      </section>

      {/* ─── TIERS ─── */}
      <SectionWrapper paddingY="lg" className="-mt-16 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Card className="bg-white/95 backdrop-blur-md dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Win-Start</CardTitle>
              <CardDescription>Perfect for basic RDP tasks and small bots.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={14.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 2 vCPU Cores</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 4 GB RAM</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 60 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> Windows Server 2022/2019</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Deploy Win-Start</Button>
            </CardFooter>
          </Card>

          <Card variant="pricing" className="bg-white dark:bg-surface-950 scale-105 z-10 border-[#0078D4]/30 ring-[#0078D4]/20">
            <CardHeader className="text-center pt-8">
              <Badge className="w-fit mx-auto mb-4 tracking-wider bg-[#0078D4] text-white border-none">MOST POPULAR</Badge>
              <CardTitle className="text-2xl">Win-Pro</CardTitle>
              <CardDescription>Ideal for Forex trading and ASP.NET hosting.</CardDescription>
            </CardHeader>
            <CardContent className="px-8">
              <div className="mb-6 text-center flex items-baseline justify-center">
                <PriceDisplay amount={29.99} className="text-5xl font-bold text-[#0078D4]" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 4 vCPU Cores</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 8 GB Dedicated RAM</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 120 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 1 Gbps Unmetered Port</li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <Button size="lg" fullWidth className="bg-[#0078D4] hover:bg-[#005a9e] text-white shadow-premium">Deploy Win-Pro</Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/95 backdrop-blur-md dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl">
             <CardHeader>
              <CardTitle className="text-xl">Win-Max</CardTitle>
              <CardDescription>For heavy databases and enterprise workloads.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={49.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 8 vCPU Cores</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 16 GB Dedicated RAM</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> 300 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0078D4]" /> Daily Snapshots Included</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Deploy Win-Max</Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

    </div>
  );
}
