import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Zap, BookOpen } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tutorials & Guides | AmanaFlow",
  description: "Step-by-step tutorials on hosting, domain management, and cloud infrastructure setup.",
  alternates: {
    canonical: "/tutorials",
    languages: generateAlternateLanguages("/tutorials"),
  }
};

export default function TutorialsPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Step-by-Step</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Learn how to <span className="text-primary-400">Scale</span> Your <br/>Digital Empire.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            From deploying your first VPS to advanced cPanel optimizations, our tutorials cover it all.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <BookOpen size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Tutorial Index Loading</h2>
            <p className="text-surface-500">Syncing with our engineering knowledgebase...</p>
         </div>
      </SectionWrapper>
    </>
  );
}
