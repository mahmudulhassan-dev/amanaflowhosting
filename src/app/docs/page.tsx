import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";
import { Book, Zap, Shield, Globe, Search, ArrowRight, MessageCircle, Link2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Documentation | AmanaFlow",
  description: "Browse our comprehensive documentation for cloud hosting, VPS management, and API integration.",
  alternates: {
    canonical: "/docs",
    languages: generateAlternateLanguages("/docs"),
  }
};

const guideCards = [
  { title: "Getting Started", icon: <Zap size={24}/>, desc: "New to AmanaFlow? Start here to deploy your first server in minutes." },
  { title: "Server Management", icon: <Book size={24}/>, desc: "Learn how to manage your VPS, bare-metal, and cloud instances." },
  { title: "Security Best Practices", icon: <Shield size={24}/>, desc: "Hardening your infrastructure and managing firewalls." },
  { title: "API Reference", icon: <Link2 size={24}/>, desc: "Automate your workflows with our developer-first API endpoints." },
  { title: "Migration Guides", icon: <ArrowRight size={24}/>, desc: "Step-by-step instructions for moving to AmanaFlow." },
  { title: "Billing & Account", icon: <Globe size={24}/>, desc: "Managing subscriptions, invoices, and team members." },
];

export default function DocsPage() {
  return (
    <ContentLayout
      title="Documentation"
      subtitle="Everything you need to build, deploy, and scale on AmanaFlow."
      lastUpdated="March 24, 2026"
    >
      <section className="not-prose">
        <div className="relative mb-12">
          <input 
            type="text" 
            placeholder="Search documentation..." 
            className="w-full px-12 py-4 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          />
          <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {guideCards.map((guide) => (
             <div key={guide.title} className="group p-6 bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-800 rounded-3xl hover:border-primary-500/50 hover:shadow-premium transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                   {guide.icon}
                </div>
                <h4 className="text-xl font-bold text-surface-900 dark:text-white mb-3">{guide.title}</h4>
                <p className="text-sm text-surface-500 leading-relaxed mb-6">{guide.desc}</p>
                <Link href="#" className="inline-flex items-center text-sm font-bold text-primary-600 dark:text-primary-400 group/link">
                   View Guides <ArrowRight size={14} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
             </div>
           ))}
        </div>
      </section>

      <section className="mt-20 p-10 bg-primary-600 rounded-[40px] text-white not-prose flex flex-col items-center text-center">
         <MessageCircle size={48} className="mb-6 opacity-80" />
         <h3 className="text-3xl font-extrabold mb-4">Can&apos;t find what you&apos;re looking for?</h3>
         <p className="mb-8 opacity-90 max-w-xl text-lg">Our technical experts are available 24/7 to assist with your complex infrastructure needs.</p>
         <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="rounded-full" asChild>
               <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
               <Link href="/submit-ticket">Submit a Ticket</Link>
            </Button>
         </div>
      </section>
    </ContentLayout>
  );
}
