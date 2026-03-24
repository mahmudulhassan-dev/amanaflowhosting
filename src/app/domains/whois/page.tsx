import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";
import { Search, Info, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "WHOIS Lookup | AmanaFlow",
  description: "Check domain ownership details, registration status, and expiry dates using AmanaFlow's WHOIS Lookup tool.",
  alternates: {
    canonical: "/domains/whois",
    languages: generateAlternateLanguages("/domains/whois"),
  }
};

const sections = [
  { id: "lookup-tool", title: "1. WHOIS Tool" },
  { id: "what-is-whois", title: "2. What is WHOIS?" },
  { id: "privacy", title: "3. Privacy Protection" }
];

export default function WhoisPage() {
  return (
    <ContentLayout
      title="WHOIS Lookup"
      subtitle="Identify the owner, registrar, and expiration info for any domain name globally."
      lastUpdated="March 24, 2026"
      sections={sections}
    >
      <section id="lookup-tool">
        <h2 className="mb-8">1. Domain WHOIS Search</h2>
        <div className="bg-surface-50 dark:bg-surface-900 p-8 rounded-3xl border border-surface-200 dark:border-surface-800 not-prose">
           <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Enter domain name (e.g., amanaflow.cloud)" 
                className="flex-1 px-5 py-3 rounded-xl bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-800 text-surface-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
              <Button variant="primary" size="lg" className="rounded-xl shadow-lg">
                 Search WHOIS <Search size={18} className="ml-2" />
              </Button>
           </div>
           <div className="mt-6 flex items-start gap-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800 text-sm text-primary-800 dark:text-primary-300">
              <Info size={18} className="shrink-0 mt-0.5" />
              <p>WHOIS data is provided for informational purposes only. Some data may be redacted for privacy (GDPR compliance).</p>
           </div>
        </div>
      </section>

      <section id="what-is-whois">
        <h2>2. What is WHOIS?</h2>
        <p>WHOIS is a public database that contains information about the registered users or "assignees" of an Internet resource, such as a domain name. It allows anyone to verify who is responsible for a domain and see key registration events.</p>
        <ul>
          <li><strong>Registrar:</strong> The organization that manages the registration.</li>
          <li><strong>Creation Date:</strong> When the domain was first registered.</li>
          <li><strong>Expiry Date:</strong> When the registration will end if not renewed.</li>
          <li><strong>Nameservers:</strong> Where the domain's DNS is currently hosted.</li>
        </ul>
      </section>

      <section id="privacy">
        <h2>3. Data Privacy & WHOIS Protection</h2>
        <p>In accordance with data protection regulations such as GDPR and CCPA, many registries and registrars now redact personal information from WHOIS results. AmanaFlow provides <strong>FREE WHOIS Privacy Protection</strong> for all supported TLDs to ensure your personal contact info remains hidden from the public eye.</p>
        <div className="mt-8 flex items-center gap-4 p-6 bg-surface-50 dark:bg-surface-900 rounded-2xl border border-dashed border-surface-300 dark:border-surface-700">
           <Shield className="text-success-600 shrink-0" size={32} />
           <div>
              <h4 className="font-bold text-surface-900 dark:text-white text-sm mb-1 uppercase tracking-wider">AmanaFlow Shield Active</h4>
              <p className="text-xs text-surface-500">Your privacy is our priority. We automatically hide your identity on public WHOIS records.</p>
           </div>
        </div>
      </section>
    </ContentLayout>
  );
}
