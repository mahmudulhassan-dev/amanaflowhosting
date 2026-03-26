import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Calculator, ArrowRight } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Compare Hosting Plans | AmanaFlow",
  description: "Detailed comparison of AmanaFlow's shared, WordPress, and VPS hosting plans to help you choose the right fit.",
  alternates: {
    canonical: "/compare-hosting-plans",
    languages: generateAlternateLanguages("/compare-hosting-plans"),
  }
};

export default function ComparePlansPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Decision Guide</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Find the <span className="text-primary-400">Perfect Fit</span> for <br/>Your Digital Project.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            Our comparison guide helps you weigh performance, features, and price across our entire hosting stack.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <Calculator size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Comparison Matrix Loading</h2>
            <p className="text-surface-500">We are currently updating our feature specs for the 2026 server refresh.</p>
         </div>
      </SectionWrapper>
    </>
  );
}
