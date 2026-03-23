import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Globe, Shield, Zap, CheckCircle2 } from "lucide-react";

export default function Epic2Showcase() {
  return (
    <main className="min-h-screen bg-surface-50 dark:bg-surface-950 p-10 font-sans text-surface-900 dark:text-surface-50">
      <div className="max-w-5xl mx-auto space-y-16">
        <div>
          <h1 className="text-4xl font-bold mb-2">AmanaFlow Design System</h1>
          <p className="text-surface-500 mb-8">Epic 2: Core Components Showcase (Batch 1)</p>
          <hr className="border-surface-200 dark:border-surface-800" />
        </div>

        {/* --- BUTTONS --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">1. Button System</h2>
          <div className="flex flex-wrap gap-4 items-center p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            
            <div className="p-4 bg-primary-900 rounded-lg flex gap-4 items-center">
               <span className="text-white text-sm mr-2">Hero context:</span>
               <Button variant="glass">Glass Button</Button>
            </div>

            <div className="w-full mt-4 flex gap-4 items-center border-t border-surface-100 pt-4 dark:border-surface-800">
              <Button variant="primary" icon={<Globe size={18} />} iconPosition="left">Left Icon</Button>
              <Button variant="outline" icon={<Zap size={18} />} iconPosition="right">Right Icon</Button>
              <Button variant="secondary" isLoading>Loading State</Button>
            </div>
          </div>
        </section>

        {/* --- BADGES --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">2. Badge System</h2>
          <div className="flex flex-col gap-6 p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
            
            <div className="flex flex-wrap gap-4 items-center">
              <span className="w-24 text-sm text-surface-500 font-medium">Soft variants</span>
              <Badge variant="primary" dot>New Feature</Badge>
              <Badge variant="success" dot>Operational</Badge>
              <Badge variant="warning" dot>Maintenance</Badge>
              <Badge variant="error" dot>Outage</Badge>
              <Badge variant="neutral">Draft</Badge>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <span className="w-24 text-sm text-surface-500 font-medium">Solid variants</span>
              <Badge variant="primary" styleType="solid">Primary</Badge>
              <Badge variant="success" styleType="solid">Uptime 99.9%</Badge>
              <Badge variant="neutral" styleType="solid">Pro</Badge>
            </div>

          </div>
        </section>

        {/* --- CARDS --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">3. Card System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Default Card */}
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>A standard bordered card.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Used for basic grouping of information.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Action</Button>
              </CardFooter>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield size={20} className="text-primary-500" /> Elevated</CardTitle>
                <CardDescription>Hover over me to see the lift effect.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Great for clickable features or important highlight boxes.</p>
              </CardContent>
            </Card>

            {/* Pricing Card */}
            <Card variant="pricing">
              <CardHeader>
                <Badge variant="primary" styleType="solid" className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-3xl text-primary-600 dark:text-primary-400">$12/mo</CardTitle>
                <CardDescription>Next-Gen Business Hosting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500"/> Unlimited NVMe</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-success-500"/> Free SSL</div>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="lg" fullWidth>Select Plan</Button>
              </CardFooter>
            </Card>

          </div>
        </section>

      </div>
    </main>
  );
}
