import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";
import { CheckCircle2, AlertCircle, Clock, Server, Globe, Zap, Database } from "lucide-react";

export const metadata = {
  title: "System Status | AmanaFlow",
  description: "Check the real-time status of AmanaFlow's global infrastructure, cloud hosting, and network services.",
  alternates: {
    canonical: "/status",
    languages: generateAlternateLanguages("/status"),
  }
};

const components = [
  { name: "Cloud Hosting (US East)", status: "Operational", uptime: "100%" },
  { name: "Cloud Hosting (Asia South)", status: "Operational", uptime: "99.99%" },
  { name: "Bare-Metal Cluster", status: "Operational", uptime: "100%" },
  { name: "Global DNS Network", status: "Operational", uptime: "100%" },
  { name: "Object Storage (S3)", status: "Operational", uptime: "99.98%" },
  { name: "Client Management API", status: "Operational", uptime: "100%" },
];

export default function StatusPage() {
  return (
    <ContentLayout
      title="System Status"
      subtitle="Real-time monitoring of our global cloud infrastructure and services."
      lastUpdated="March 24, 2026"
    >
      <section className="not-prose">
        <div className="p-8 bg-success-50 dark:bg-success-900/10 border border-success-200 dark:border-success-800 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-success-100 dark:bg-success-900/30 flex items-center justify-center text-success-600">
                 <CheckCircle2 size={32} />
              </div>
              <div>
                 <h3 className="text-2xl font-extrabold text-surface-900 dark:text-white">All Systems Operational</h3>
                 <p className="text-surface-600 dark:text-surface-400">Everything is running smoothly. No active incidents.</p>
              </div>
           </div>
           <div className="text-xs font-bold text-success-600 uppercase tracking-widest bg-success-100 dark:bg-success-900/30 px-4 py-2 rounded-full border border-success-200 dark:border-success-800">
              Uptime: 99.99%
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {components.map((comp) => (
             <div key={comp.name} className="p-6 bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-800 rounded-3xl flex items-center justify-between hover:border-primary-500/30 transition-all">
                <div className="flex items-center gap-4">
                   <div className="p-2 bg-surface-50 dark:bg-surface-900 rounded-lg text-surface-400">
                      {comp.name.includes("Hosting") ? <Cloud className="lucide-icon" size={20} /> : <Server size={20} />}
                   </div>
                   <div>
                      <h4 className="font-bold text-surface-900 dark:text-white text-sm">{comp.name}</h4>
                      <p className="text-[10px] text-surface-500 uppercase font-bold tracking-tight">Last 30 days: {comp.uptime}</p>
                   </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-success-600 uppercase tracking-wider">
                   <div className="w-1.5 h-1.5 rounded-full bg-success-500" />
                   {comp.status}
                </div>
             </div>
           ))}
        </div>
      </section>

      <section id="incident-history">
        <h2>Incident History</h2>
        <p className="text-sm text-surface-500 mb-8">All times are shown in UTC.</p>
        
        <div className="space-y-8">
           <div className="relative pl-8 border-l-2 border-surface-100 dark:border-surface-800">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-surface-200 dark:bg-surface-800 border-4 border-white dark:border-surface-950" />
              <h4 className="text-lg font-bold text-surface-900 dark:text-white mb-2">March 22, 2026</h4>
              <p className="text-sm text-surface-500 mb-4 font-medium italic">No incidents reported on this day.</p>
           </div>
           
           <div className="relative pl-8 border-l-2 border-surface-100 dark:border-surface-800">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-surface-200 dark:bg-surface-800 border-4 border-white dark:border-surface-950" />
              <h4 className="text-lg font-bold text-surface-900 dark:text-white mb-2">March 21, 2026</h4>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800 rounded-xl text-sm">
                 <p className="font-bold text-orange-800 dark:text-orange-400 mb-1">Partial Outage: Asia Network Upgrade</p>
                 <p className="text-orange-700 dark:text-orange-500">Scheduled maintenance in the Mumbai region caused transient latency for 12 minutes. Resolved.</p>
              </div>
           </div>
        </div>
      </section>
    </ContentLayout>
  );
}

const Cloud = ({ className, size }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.5h-.1c-.9-3.4-4-5-7.5-5a7 7 0 0 0-6.8 5.6C1.6 11.2 0 13.1 0 15.5 0 18 2 20 4.5 20h13" />
  </svg>
);
