import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export const metadata = {
  title: "Transfer Your Domain | AmanaFlow",
  description: "Move your domain to AmanaFlow and enjoy 24/7 support, simple management, and competitive renewal rates.",
  alternates: {
    canonical: "/domains/transfer",
    languages: generateAlternateLanguages("/domains/transfer"),
  }
};

const sections = [
  { id: "why-transfer", title: "1. Why Transfer?" },
  { id: "how-it-works", title: "2. How it Works" },
  { id: "checklist", title: "3. Transfer Checklist" },
  { id: "pricing", title: "4. Pricing & Renewals" }
];

export default function DomainTransferPage() {
  return (
    <ContentLayout
      title="Transfer Your Domain"
      subtitle="Experience seamless domain management and enterprise support. Move your digital assets to AmanaFlow today."
      lastUpdated="March 24, 2026"
      sections={sections}
    >
      <section id="why-transfer">
        <h2>1. Why Transfer to AmanaFlow?</h2>
        <p>Transferring your domain to AmanaFlow gives you access to a unified management interface, world-class L3 support, and the same industry-leading reliability we provide for our cloud and VPS hosting.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 not-prose">
          <div className="p-6 bg-surface-50 dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800">
             <Shield className="text-primary-600 mb-4" size={32} />
             <h4 className="font-bold text-surface-900 dark:text-white mb-2">Enhanced Security</h4>
             <p className="text-sm text-surface-500">Free WHOIS privacy protection and advanced DNS security controls.</p>
          </div>
          <div className="p-6 bg-surface-50 dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800">
             <Zap className="text-primary-600 mb-4" size={32} />
             <h4 className="font-bold text-surface-900 dark:text-white mb-2">Instant Setup</h4>
             <p className="text-sm text-surface-500">Automated transfer processes for the most popular TLDs.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <h2>2. How the Transfer Works</h2>
        <p>Moving a domain is a regulated process that usually takes 5-7 days for most extensions. Here's a quick overview of the journey:</p>
        <ol>
          <li><strong>Unlock your domain:</strong> Log in to your current registrar and disable "Registrar Lock".</li>
          <li><strong>Get Auth Code:</strong> Request the EPP or Authorization code for the domain.</li>
          <li><strong>Submit Transfer:</strong> Enter your domain and code in our transfer tool.</li>
          <li><strong>Approve:</strong> Respond to the confirmation email sent to the registrant address.</li>
        </ol>
      </section>

      <section id="checklist">
        <h2>3. Transfer Checklist</h2>
        <p>Ensure your domain meets these criteria before starting the transfer:</p>
        <ul>
          <li>Domain has been registered for at least 60 days.</li>
          <li>Registrar Lock is disabled.</li>
          <li>The administrative contact email is accessible.</li>
          <li>WHOIS Privacy Protection is temporarily disabled (recommended).</li>
        </ul>
      </section>

      <section id="pricing">
        <h2>4. Pricing & Renewals</h2>
        <p>Most domain transfers include a 1-year extension of the current registration period. You only pay for the renewal—the transfer process itself is free of charge at AmanaFlow.</p>
        <div className="mt-10 p-8 bg-primary-600 rounded-3xl text-white not-prose flex flex-col items-center text-center">
           <Globe size={48} className="mb-6 opacity-80" />
           <h3 className="text-2xl font-bold mb-4">Ready to move your domain?</h3>
           <p className="mb-8 opacity-90 max-w-md">Our experts are standing by to help you consolidate your digital infrastructure.</p>
           <Button variant="secondary" size="lg" className="rounded-full shadow-2xl" asChild>
             <Link href="/contact">Get Transfer Assistance <ArrowRight size={18} className="ml-2" /></Link>
           </Button>
        </div>
      </section>
    </ContentLayout>
  );
}
