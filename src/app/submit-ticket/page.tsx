import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MessageSquare, LifeBuoy, Clock, ExternalLink } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Submit a Ticket | 24/7 Support | AmanaFlow",
  description: "Reach out to our experts for assistance with hosting, domains, or billing. We are here to help 24/7.",
  alternates: {
    canonical: "/submit-ticket",
    languages: generateAlternateLanguages("/submit-ticket"),
  }
};

export default function SubmitTicketPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-50 dark:bg-surface-950">
      <SectionWrapper paddingY="xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Context & Trust */}
          <div className="flex-1 lg:max-w-md">
            <Badge variant="primary" styleType="soft" className="mb-6">Direct Support</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight mb-6">Open a Support Ticket</h1>
            <p className="text-surface-500 mb-8 leading-relaxed text-lg">
                Need specialized help? Our engineering team is ready to assist you. Provide as much detail as possible to help us resolve your issue faster.
            </p>
            
            <div className="space-y-6">
                {[
                    { icon: <Clock size={20}/>, title: "15-Minute Response", desc: "Average time for first technical response." },
                    { icon: <LifeBuoy size={20}/>, title: "Proactive Experts", desc: "Our team actually dives into code to help." },
                    { icon: <MessageSquare size={20}/>, title: "Multi-Language", desc: "Support available in English and Bengali." }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800">
                        <div className="text-primary-500 shrink-0">{item.icon}</div>
                        <div>
                            <h4 className="font-bold text-sm tracking-tight">{item.title}</h4>
                            <p className="text-xs text-surface-400 mt-1">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Right Column: The Bridge to WHMCS */}
          <div className="flex-[1.5]">
            <Card className="bg-white dark:bg-surface-900 shadow-2xl overflow-hidden border-surface-200 dark:border-surface-800">
                <div className="bg-primary-600 p-8 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <h2 className="text-2xl font-bold mb-2 relative z-10 text-white">Secure Portal Bridge</h2>
                    <p className="text-white/80 text-sm relative z-10">To protect your server security, tickets must be submitted through our encrypted client area.</p>
                </div>
                <CardContent className="p-10 text-center">
                    <div className="w-24 h-24 bg-surface-50 dark:bg-surface-800 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white dark:border-surface-900 shadow-xl">
                        <ExternalLink size={40} className="text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Redirecting to Support Desk</h3>
                    <p className="text-surface-500 mb-10 max-w-sm mx-auto">
                        Clicking the button below will securely log you into the AmanaFlow Client Area where you can view existing tickets or open new departments.
                    </p>
                    <div className="flex flex-col gap-4 max-w-sm mx-auto">
                        <Button size="xl" variant="primary" className="h-16 group">
                            Continue to Client Area
                            <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                        <p className="text-[10px] text-surface-400 font-mono uppercase tracking-widest mt-2">Authenticated via WHMCS Bridge</p>
                    </div>
                </CardContent>
            </Card>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
}
