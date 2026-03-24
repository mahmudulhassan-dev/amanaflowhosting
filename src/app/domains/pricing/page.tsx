import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";
import { Check, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Domain Pricing | AmanaFlow",
  description: "View our competitive domain registration, renewal, and transfer rates for over 100+ TLDs.",
  alternates: {
    canonical: "/domains/pricing",
    languages: generateAlternateLanguages("/domains/pricing"),
  }
};

const pricingData = [
  { tld: ".com", registration: "$9.99", renewal: "$14.99", transfer: "$9.99" },
  { tld: ".net", registration: "$12.99", renewal: "$15.99", transfer: "$12.99" },
  { tld: ".org", registration: "$13.99", renewal: "$16.99", transfer: "$13.99" },
  { tld: ".co", registration: "$24.99", renewal: "$34.99", transfer: "$24.99" },
  { tld: ".io", registration: "$39.99", renewal: "$49.99", transfer: "$39.99" },
  { tld: ".cloud", registration: "$4.99", renewal: "$24.99", transfer: "$19.99" },
  { tld: ".tech", registration: "$1.99", renewal: "$39.99", transfer: "$35.99" },
  { tld: ".dev", registration: "$14.99", renewal: "$18.99", transfer: "$14.99" },
];

export default function DomainPricingPage() {
  return (
    <ContentLayout
      title="Domain Pricing"
      subtitle="Simple, transparent pricing for all your favorite domain extensions."
      lastUpdated="March 24, 2026"
    >
      <section>
        <p className="mb-8">We offer competitive rates for registration, renewal, and transfers. All domains include free WHOIS privacy protection and advanced DNS management.</p>
        
        <div className="overflow-x-auto rounded-3xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-950 shadow-premium not-prose">
          <table className="w-full text-left border-collapse">
             <thead>
                <tr className="bg-surface-50 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800">
                   <th className="px-6 py-5 text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider">TLD</th>
                   <th className="px-6 py-5 text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider">Registration</th>
                   <th className="px-6 py-5 text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider">Renewal</th>
                   <th className="px-6 py-5 text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider">Transfer</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-surface-100 dark:divide-surface-800">
                {pricingData.map((item) => (
                   <tr key={item.tld} className="hover:bg-surface-50 dark:hover:bg-surface-900/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-surface-900 dark:text-white text-lg">{item.tld}</td>
                      <td className="px-6 py-4 text-primary-600 dark:text-primary-400 font-bold">{item.registration}</td>
                      <td className="px-6 py-4 text-surface-600 dark:text-surface-400">{item.renewal}</td>
                      <td className="px-6 py-4 text-surface-600 dark:text-surface-400">{item.transfer}</td>
                   </tr>
                ))}
             </tbody>
          </table>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 p-8 bg-surface-50 dark:bg-surface-900 rounded-3xl border border-surface-200 dark:border-surface-800 not-prose">
           <div className="flex-1 flex items-start gap-4">
              <Check className="text-success-600 shrink-0 mt-1" size={24} />
              <div>
                 <h4 className="font-bold text-surface-900 dark:text-white mb-2">Free WHOIS Privacy</h4>
                 <p className="text-sm text-surface-500">Protect your personal identity from hackers and spammers at no extra cost.</p>
              </div>
           </div>
           <div className="flex-1 flex items-start gap-4">
              <Check className="text-success-600 shrink-0 mt-1" size={24} />
              <div>
                 <h4 className="font-bold text-surface-900 dark:text-white mb-2">Expert DNS Control</h4>
                 <p className="text-sm text-surface-500">Manage CNAME, A-Records, MX and more with our enterprise DNS cluster.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="mt-20 text-center not-prose">
         <h3 className="text-3xl font-extrabold text-surface-900 dark:text-white mb-6">Found your perfect domain?</h3>
         <Button size="lg" className="rounded-full px-12" asChild>
           <a href="/domain-name-search">Start Searching Now <Search size={18} className="ml-2" /></a>
         </Button>
      </section>
    </ContentLayout>
  );
}
