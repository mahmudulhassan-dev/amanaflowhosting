import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Shield, Settings } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Advanced DNS Management | AmanaFlow",
  description: "Manage your domain's DNS records with AmanaFlow's enterprise-grade, global Anycast DNS network.",
  alternates: {
    canonical: "/domains/dns",
    languages: generateAlternateLanguages("/domains/dns"),
  }
};

export default function DNSManagementPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Anycast DNS</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Instant <span className="text-primary-400">Propagation</span>. <br/>Enterprise Reliability.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            Manage your A, CNAME, MX, and TXT records with zero latency on our global Anycast network.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <Shield size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">DNS Console Initializing</h2>
            <p className="text-surface-500">Finalizing the integration with our high-availability DNS clusters.</p>
         </div>
      </SectionWrapper>
    </>
  );
}
