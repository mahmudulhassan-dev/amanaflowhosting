import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { HelpCircle, Search } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AmanaFlow",
  description: "Find answers to the most common questions about AmanaFlow's cloud hosting, billing, and support services.",
  alternates: {
    canonical: "/faq",
    languages: generateAlternateLanguages("/faq"),
  }
};

export default function FAQPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Knowledge Hub</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Common <span className="text-primary-400">Questions</span>. <br/>Straightforward Answers.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            Everything you need to know about our high-performance infrastructure, billing cycles, and enterprise-grade security.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-100 dark:bg-surface-900 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <HelpCircle size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">FAQ Portal Indexing</h2>
            <p className="text-surface-500">Our comprehensive knowledge base is being updated for the 2026 stack.</p>
         </div>
      </SectionWrapper>
    </>
  );
}
