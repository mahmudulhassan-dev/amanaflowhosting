import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Globe, Database } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Domain Extensions & TLDs | AmanaFlow",
  description: "Browse hundreds of domain extensions (TLDs) available for registration with AmanaFlow.",
  alternates: {
    canonical: "/domains/extensions",
    languages: generateAlternateLanguages("/domains/extensions"),
  }
};

export default function DomainExtensionsPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Global TLDs</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Hundreds of <span className="text-primary-400">Extensions</span> <br/>for Every Niche.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            From .com to .academy, find the perfect TLD to represent your brand on the global web.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <Globe size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">TLD Catalog Syncing</h2>
            <p className="text-surface-500">Fetching the latest registration prices from our global partners.</p>
         </div>
      </SectionWrapper>
    </>
  );
}
