import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";
import { Search, Hash, Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Knowledgebase | AmanaFlow",
  description: "Find answers to frequently asked questions and learn how to optimize your hosting experience with AmanaFlow.",
  alternates: {
    canonical: "/knowledgebase",
    languages: generateAlternateLanguages("/knowledgebase"),
  }
};

const categories = [
  { name: "Account & Billing", count: 12 },
  { name: "cPanel & Control Panels", count: 45 },
  { name: "Domain Names", count: 28 },
  { name: "Email Configuration", count: 18 },
  { name: "Security & SSL", count: 15 },
  { name: "VPS & Dedicated Servers", count: 32 },
];

const popularArticles = [
  "How to point a domain to AmanaFlow",
  "Securing your WordPress installation",
  "Understanding NVMe storage benefits",
  "Setting up professional email accounts",
  "Configuring automated backups"
];

export default function KnowledgebasePage() {
  return (
    <ContentLayout
      title="Knowledgebase"
      subtitle="Step-by-step guides and expert advice for every stage of your digital journey."
      lastUpdated="March 24, 2026"
    >
      <section className="not-prose">
        <div className="relative mb-12">
          <input 
            type="text" 
            placeholder="How can we help you today?" 
            className="w-full px-12 py-5 rounded-3xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 text-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          />
          <Search size={26} className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-10">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-surface-900 dark:text-white mb-6">
                   <Star className="text-warning-500 fill-warning-500" size={20} /> Popular Articles
                </h4>
                <div className="space-y-3">
                   {popularArticles.map((article) => (
                     <Link 
                       key={article} 
                       href="#" 
                       className="flex items-center justify-between p-4 bg-white dark:bg-surface-950 border border-surface-100 dark:border-surface-800 rounded-2xl hover:border-primary-500/50 hover:shadow-premium transition-all group"
                     >
                        <span className="font-medium text-surface-700 dark:text-surface-300">{article}</span>
                        <ArrowRight size={16} className="text-surface-400 group-hover:text-primary-600 transition-colors" />
                     </Link>
                   ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-surface-900 dark:text-white mb-6 uppercase tracking-widest text-xs border-l-2 border-primary-500 pl-3">
                   Browse Categories
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {categories.map((cat) => (
                     <Link 
                       key={cat.name} 
                       href="#" 
                       className="p-5 flex items-center justify-between bg-surface-50 dark:bg-surface-900/50 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors border border-transparent hover:border-primary-100 dark:hover:border-primary-800"
                     >
                        <div className="flex items-center gap-3">
                           <Hash size={18} className="text-primary-600" />
                           <span className="font-bold text-surface-900 dark:text-white">{cat.name}</span>
                        </div>
                        <span className="text-xs font-bold bg-white dark:bg-surface-800 px-2 py-1 rounded-md text-surface-500">{cat.count}</span>
                     </Link>
                   ))}
                </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="p-8 bg-surface-950 text-white rounded-[40px] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 blur-3xl rounded-full" />
                 <h4 className="text-2xl font-bold mb-4 relative z-10">System Status</h4>
                 <div className="flex items-center gap-2 text-success-500 font-bold text-sm mb-6 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                    All Systems Operational
                 </div>
                 <p className="text-sm text-surface-400 mb-8 relative z-10 leading-relaxed">We monitor our global infrastructure 24/7/365 to ensure maximum reliability.</p>
                 <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 rounded-xl" asChild>
                   <Link href="/status">View Dashboard</Link>
                 </Button>
              </div>

              <div className="p-8 border border-surface-200 dark:border-surface-800 rounded-[40px] text-center">
                 <Clock className="mx-auto mb-4 text-primary-600" size={40} />
                 <h4 className="text-lg font-bold text-surface-900 dark:text-white mb-2">Need live help?</h4>
                 <p className="text-sm text-surface-500 mb-6">Our average response time for tickets is less than 30 minutes.</p>
                 <Button variant="primary" className="w-full rounded-xl" asChild>
                   <Link href="/contact">Contact Support</Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>
    </ContentLayout>
  );
}
