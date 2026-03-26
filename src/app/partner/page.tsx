import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Handshake, Globe } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Partner Program | AmanaFlow",
  description: "Join our affiliate and partner network to grow your business with AmanaFlow's premium cloud infrastructure.",
  alternates: {
    canonical: "/partner",
    languages: generateAlternateLanguages("/partner"),
  }
};

export default function PartnerPage() {
  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Global Partnerships</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            Grow Your <span className="text-primary-400">Business</span> with <br/>Enterprise Cloud Support.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            Become a partner and leverage AmanaFlow's high-trust infrastructure to scale your operations or earn through referrals.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px] flex items-center justify-center">
         <div className="text-center space-y-4 opacity-60">
            <Handshake size={64} className="mx-auto text-primary-500/40" />
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Partner Portal Opening Soon</h2>
            <p className="text-surface-500">We are currently finalizing our rewards and tier systems for 2026.</p>
         </div>
      </SectionWrapper>
    </>
  );
}
