import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Star, MessageSquare } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Customer Reviews | AmanaFlow",
  description: "Read what our customers and partners have to say about AmanaFlow's premium hosting and support.",
  alternates: {
    canonical: "/reviews",
    languages: generateAlternateLanguages("/reviews"),
  }
};

export default function ReviewsPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Customer Wall of Love</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Trusted by <span className="text-primary-400">Thousands</span> of <br/>Forward-Thinking Businesses.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            Real feedback from the agencies, developers, and entrepreneurs who power their digital empires with AmanaFlow.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <MessageSquare size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Coming Soon</h2>
            <p className="text-surface-500">We are currently curating our latest success stories. Check back soon!</p>
         </div>
      </SectionWrapper>
    </>
  );
}
