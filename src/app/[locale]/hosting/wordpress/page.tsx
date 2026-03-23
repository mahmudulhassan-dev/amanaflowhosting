import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Zap, LayoutDashboard, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";

export default function WordPressHostingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-[#0f172a] text-white pt-20 pb-32 overflow-hidden text-center">
        {/* WordPress Blue Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#21759b]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Badge variant="primary" styleType="solid" className="mb-6 bg-[#21759b]">LiteSpeed Powered</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Blazing Fast <span className="text-[#21759b]">WordPress</span> Hosting.
          </h1>
          <p className="text-lg text-surface-300 mb-10 max-w-2xl mx-auto">
            Experience up to 20x faster load times with our optimized LiteSpeed Enterprise servers, built-in LSCache, and Free CDN.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-[#21759b] hover:bg-[#1a5d7c] text-white shadow-premium">See WP Plans</Button>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <SectionWrapper paddingY="lg" className="-mt-16 relative z-20 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* WP Basic */}
          <Card className="bg-white/95 backdrop-blur-md dark:bg-surface-950 border-surface-200 dark:border-surface-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">WP Basic</CardTitle>
              <CardDescription>Perfect for personal blogs and portfolios.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex items-baseline">
                <PriceDisplay amount={4.99} className="text-4xl font-bold text-surface-900 dark:text-white" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-400">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> 1 WordPress Site</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> 25 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> Free SSL & CDN</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> LSCache Plugin Pre-installed</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" fullWidth>Select WP Basic</Button>
            </CardFooter>
          </Card>

          {/* WP Growth */}
          <Card variant="pricing" className="bg-white dark:bg-surface-950 scale-105 z-10 border-[#21759b]/30 ring-[#21759b]/20">
            <CardHeader className="text-center pt-8">
              <Badge variant="primary" styleType="solid" className="w-fit mx-auto mb-4 tracking-wider bg-[#21759b]">MOST POPULAR</Badge>
              <CardTitle className="text-2xl">WP Growth</CardTitle>
              <CardDescription>For heavy traffic stores and agencies.</CardDescription>
            </CardHeader>
            <CardContent className="px-8">
              <div className="mb-6 text-center flex items-baseline justify-center">
                <PriceDisplay amount={8.99} className="text-5xl font-bold text-[#21759b] dark:text-[#21759b]" />
                <span className="text-surface-500 ml-1">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-surface-600 dark:text-surface-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> Unlimited WP Sites</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> 100 GB NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> Free Domain Name</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> Free Daily Backups</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#21759b]" /> Free WP Migration</li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <Button size="lg" fullWidth className="bg-[#21759b] hover:bg-[#1a5d7c] text-white shadow-premium">Select WP Growth</Button>
            </CardFooter>
          </Card>

        </div>
      </SectionWrapper>

      {/* ─── WP FEATURES ─── */}
      <SectionWrapper hasBackground paddingY="xl">
        <SectionHeader 
          title="Engineered for WordPress Success" 
          description="We've fine-tuned every aspect of our infrastructure to make WordPress run as fast and securely as possible."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="flex gap-6 p-6">
            <div className="w-14 h-14 rounded-2xl bg-[#21759b]/10 flex items-center justify-center shrink-0">
              <Zap size={28} className="text-[#21759b]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">LiteSpeed Web Server</h3>
              <p className="text-surface-500 leading-relaxed">Replaces Apache to handle high traffic spikes seamlessly. Coupled with the LSCache plugin, your page loads will drop to milliseconds.</p>
            </div>
          </div>

          <div className="flex gap-6 p-6">
            <div className="w-14 h-14 rounded-2xl bg-[#21759b]/10 flex items-center justify-center shrink-0">
              <LayoutDashboard size={28} className="text-[#21759b]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">WP Toolkit</h3>
              <p className="text-surface-500 leading-relaxed">Manage themes, plugins, and security settings for all your WordPress installations from a single, unified dashboard.</p>
            </div>
          </div>

          <div className="flex gap-6 p-6">
            <div className="w-14 h-14 rounded-2xl bg-[#21759b]/10 flex items-center justify-center shrink-0">
              <ShieldCheck size={28} className="text-[#21759b]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Automatic Updates</h3>
              <p className="text-surface-500 leading-relaxed">Keep your site secure automatically. We can safely handle core, theme, and plugin updates in the background.</p>
            </div>
          </div>

          <div className="flex gap-6 p-6">
            <div className="w-14 h-14 rounded-2xl bg-[#21759b]/10 flex items-center justify-center shrink-0">
              <Search size={28} className="text-[#21759b]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Malware Scanning</h3>
              <p className="text-surface-500 leading-relaxed">Proactive real-time scanning and firewall blocks brute-force attacks and malicious login attempts instantly.</p>
            </div>
          </div>

        </div>
      </SectionWrapper>

    </div>
  );
}
