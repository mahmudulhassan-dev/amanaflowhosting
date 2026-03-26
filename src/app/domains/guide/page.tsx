import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FileText, Lightbulb } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Domain Knowledge Guide | AmanaFlow",
  description: "Everything you need to know about domain registration, transfers, and management.",
  alternates: {
    canonical: "/domains/guide",
    languages: generateAlternateLanguages("/domains/guide"),
  }
};

export default function DomainGuidePage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Domain Academy</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Master the <span className="text-primary-400">Art</span> of <br/>Domain Management.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            Learn the technicalities of WHOIS, DNSSEC, and the domain lifecycle with AmanaFlow's expert guides.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <Lightbulb size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Guide Indexing</h2>
            <p className="text-surface-500">We are currently curating our most helpful domain management tutorials.</p>
         </div>
      </SectionWrapper>
    </>
  );
}
