import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Careers - AmanaFlow",
  description: "Join the team building the next generation of cloud infrastructure.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO */}
      <section className="relative w-full bg-surface-950 text-white pt-24 pb-20 overflow-hidden text-center border-b border-surface-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Help us build the <span className="text-primary-500">future</span> of hosting.
          </h1>
          <p className="text-lg text-surface-400 mb-10 max-w-2xl mx-auto">
            We are a remote-first team of engineers, designers, and support specialists obsessed with performance and customer success. Come do the best work of your life.
          </p>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <SectionWrapper paddingY="xl">
        <SectionHeader 
          title="Open Roles" 
          description="Don't see a perfect match? Send your resume to careers@amanaflow.cloud anyway."
        />
        <div className="max-w-4xl mx-auto space-y-4">
          
          <Card className="hover:-translate-y-1 transition-transform group border-surface-200 dark:border-surface-800">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Senior L3 Linux Server Administrator</h3>
                <div className="flex flex-wrap gap-3 text-sm text-surface-500 font-medium">
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Remote (Global)</span>
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Full-Time</span>
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Engineering</span>
                </div>
              </div>
              <Button variant="outline" className="shrink-0" asChild>
                <Link href="/contact">Apply Now <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform group border-surface-200 dark:border-surface-800">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Frontend React Developer</h3>
                <div className="flex flex-wrap gap-3 text-sm text-surface-500 font-medium">
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Remote (APAC)</span>
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Full-Time</span>
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Product</span>
                </div>
              </div>
              <Button variant="outline" className="shrink-0" asChild>
                <Link href="/contact">Apply Now <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:-translate-y-1 transition-transform group border-surface-200 dark:border-surface-800">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">Technical Support Specialist (L1/L2)</h3>
                <div className="flex flex-wrap gap-3 text-sm text-surface-500 font-medium">
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Remote (EU/US)</span>
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Full-Time</span>
                  <span className="flex items-center gap-1 bg-surface-100 dark:bg-surface-800 px-2.5 py-1 rounded-md">Support</span>
                </div>
              </div>
              <Button variant="outline" className="shrink-0" asChild>
                <Link href="/contact">Apply Now <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </SectionWrapper>

    </div>
  );
}
