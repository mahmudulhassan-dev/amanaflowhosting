import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ArrowRight, Truck } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free Expert Migration | AmanaFlow",
  description: "Move your website to AmanaFlow for free. Our expert engineers handle everything with zero downtime.",
  alternates: {
    canonical: "/migration",
    languages: generateAlternateLanguages("/migration"),
  }
};

export default function MigrationPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Free Migration</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Move to a <span className="text-primary-400">Faster</span> Host <br/>with Zero Hassle.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            Our L3 engineers will handle your entire data transfer, from files to databases, completely free of charge.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <Truck size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Migration Services Initializing</h2>
            <p className="text-surface-500">Finalizing our priority migration queue for the current month.</p>
         </div>
      </SectionWrapper>
    </>
  );
}
