import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Shield, Zap, HardDrive, Layout } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Entry-Level Starter Hosting | Reliable & Affordable | AmanaFlow",
  description: "Perfect for students, hobbyists, and personal portfolios. Professional hosting features at a price that fits any budget.",
  alternates: {
    canonical: "/starter-hosting",
    languages: generateAlternateLanguages("/starter-hosting"),
  }
};

export default function StarterHostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-950 text-white pt-20 pb-32 overflow-hidden text-center">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-6">Student Friendly</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Small Beginnings,<br/> Big Opportunities.
          </h1>
          <p className="text-lg text-surface-300 mb-10 max-w-2xl mx-auto">
            Kickstart your online presence with professional-grade infrastructure at the lowest possible cost. No hidden fees.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="primary">Start for $1.99</Button>
            <Button size="lg" variant="glass">View Features</Button>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="lg" className="-mt-16 relative z-20 bg-transparent">
        <div className="max-w-xl mx-auto">
          <Card variant="pricing" className="bg-white dark:bg-surface-950 shadow-2xl overflow-hidden border-primary-500/50">
            <div className="absolute top-0 right-0 p-4">
                <Badge variant="primary" styleType="solid">BEST VALUE</Badge>
            </div>
            <CardHeader className="pt-10">
              <CardTitle className="text-3xl text-center">Starter Cloud</CardTitle>
              <CardDescription className="text-center text-lg mt-2">Everything you need to go live today.</CardDescription>
            </CardHeader>
            <CardContent className="px-10">
              <div className="mb-8 text-center flex items-baseline justify-center">
                <PriceDisplay amount={1.99} className="text-6xl font-extrabold text-primary-600 dark:text-primary-400" />
                <span className="text-surface-500 text-xl ml-1">/mo</span>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider">Top Features:</p>
                <ul className="grid grid-cols-1 gap-4 text-sm text-surface-600 dark:text-surface-300">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> 1 Hosted Website</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> 5 GB High-Speed NVMe</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> 100 GB Monthly Bandwidth</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> 2 Email Accounts</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> Free Let&apos;s Encrypt SSL</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary-500" /> One-Click Script Installer</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="px-10 pb-10">
              <Button variant="primary" size="lg" fullWidth className="h-14 text-lg shadow-premium">Deploy My Website</Button>
            </CardFooter>
          </Card>
        </div>
      </SectionWrapper>

      {/* ─── WHY STARTER? ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Designed for simplicity" 
          description="Don't be fooled by the price. Our starter plans run on the same enterprise-grade network as our top-tier servers."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 p-6 bg-white dark:bg-surface-900 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-800">
            <Layout size={32} className="text-primary-500" />
            <h3 className="text-xl font-bold">Easy Management</h3>
            <p className="text-surface-500 leading-relaxed">Simple control panel to manage your files, emails, and databases without zero technical expertise required.</p>
          </div>
          <div className="flex flex-col gap-4 p-6 bg-white dark:bg-surface-900 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-800">
            <Zap size={32} className="text-primary-500" />
            <h3 className="text-xl font-bold">Turbo Performance</h3>
            <p className="text-surface-500 leading-relaxed">Powered by LiteSpeed Web Server and NVMe storage to ensure your small site loads at lightning speeds.</p>
          </div>
          <div className="flex flex-col gap-4 p-6 bg-white dark:bg-surface-900 rounded-2xl shadow-sm border border-surface-200 dark:border-surface-800">
            <Shield size={32} className="text-primary-500" />
            <h3 className="text-xl font-bold">Safe & Secure</h3>
            <p className="text-surface-500 leading-relaxed">DDoS protection and automatic malware scanning are standard, keeping your personal site safe 24/7.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <SectionWrapper className="bg-primary-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
              <div className="max-w-xl">
                  <h2 className="text-3xl font-bold mb-4">Start your online journey here.</h2>
                  <p className="opacity-90">Join thousands of students and hobbyists who trust AmanaFlow for their first websites.</p>
              </div>
              <Button size="lg" variant="glass" className="bg-white text-primary-600 hover:bg-surface-50">Create My Account</Button>
          </div>
      </SectionWrapper>

    </div>
  );
}
