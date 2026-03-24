import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Database, Clock, CloudLightning, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Automated Backups - AmanaFlow",
  description: "Secure, off-site daily backups protecting your critical data.",
  alternates: {
    canonical: "/website-backups",
    languages: generateAlternateLanguages("/website-backups"),
  }
};

export default function BackupsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-surface-50 dark:bg-surface-950 pt-20 pb-28 text-center border-b border-surface-200 dark:border-surface-800">
        <div className="mx-auto max-w-3xl px-4 relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-6">JetBackup 5 Integration</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-surface-900 dark:text-white">
            Never Lose A Single Byte of Data Again.
          </h1>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-10 max-w-2xl mx-auto">
            Disasters happen. Hackers, bad updates, or human error can wipe out years of work. Our redundant off-site backups ensure you can restore everything with one click.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="primary">Add to Existing Server</Button>
          </div>
        </div>
      </section>

      {/* ─── GRID ─── */}
      <SectionWrapper paddingY="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <Card className="hover:-translate-y-1 transition-transform">
            <CardContent className="p-8">
              <Clock size={36} className="text-primary-500 mb-6" />
              <CardTitle className="mb-3">Daily Automated Snapshots</CardTitle>
              <CardDescription className="text-base text-surface-600 dark:text-surface-400">
                We silently back up your entire server—files, databases, emails, and cron jobs—every single night. No configuration required on your end. We retain up to 30 days of historical snapshots.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform">
            <CardContent className="p-8">
              <Database size={36} className="text-primary-500 mb-6" />
              <CardTitle className="mb-3">Off-site Airgapped Storage</CardTitle>
              <CardDescription className="text-base text-surface-600 dark:text-surface-400">
                Backups are stored on separate, geographically isolated storage clusters. If your primary server experiences catastrophic hardware failure, your backups are fully safe elsewhere.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform">
            <CardContent className="p-8">
              <CloudLightning size={36} className="text-primary-500 mb-6" />
              <CardTitle className="mb-3">1-Click Granular Restore</CardTitle>
              <CardDescription className="text-base text-surface-600 dark:text-surface-400">
                Need to recover a single deleted WordPress post or an accidentally wiped database table? You don&apos;t need to restore the whole server. Extract and restore exactly what you need via cPanel.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-surface-900 text-white border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-bl-full blur-[30px]" />
            <CardContent className="p-8 relative z-10">
              <ShieldAlert size={36} className="text-red-400 mb-6" />
              <CardTitle className="mb-3 text-white">Ransomware Protection</CardTitle>
              <CardDescription className="text-base text-surface-300">
                Immutable backup architectures ensure that even if ransomware infects your server, the backups cannot be encrypted or deleted by the attacker. Recover your clean state instantly.
              </CardDescription>
            </CardContent>
          </Card>

        </div>
      </SectionWrapper>

    </div>
  );
}
