import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Globe, Shield, Zap, CheckCircle2, Search, Mail, AlertTriangle } from "lucide-react";

export default function Epic2Showcase() {
  return (
    <main className="min-h-screen font-sans text-surface-900 dark:text-surface-50">
      
      {/* ─── SECTION WRAPPER SHOWCASE ─── */}
      <SectionWrapper hasBackground paddingY="lg">
        <SectionHeader 
          title="AmanaFlow Design System" 
          description="Epic 2: Core Components Showcase (Batch 1 & 2)"
          badge="Design Specs"
        />
        
        <div className="space-y-16">
          
          {/* --- BATCH 2 COMPONENTS --- */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-surface-200 dark:border-surface-800 pb-2">Batch 2: Layout & Forms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inputs */}
              <Card>
                <CardHeader>
                  <CardTitle>Input Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Standard Address" />
                  <Input placeholder="Search domain..." iconLeft={<Search size={18} />} />
                  <Input placeholder="Email Address" type="email" iconRight={<Mail size={18} />} />
                  <Input placeholder="Invalid domain" error defaultValue="amana" />
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>Alert Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert variant="default">
                    <AlertTitle>System Notice</AlertTitle>
                    <AlertDescription>We are upgrading our NVMe servers tonite.</AlertDescription>
                  </Alert>
                  <Alert variant="error">
                    <AlertTitle>Action Required</AlertTitle>
                    <AlertDescription>Your domain expires in 3 days. Please renew.</AlertDescription>
                  </Alert>
                  <Alert variant="warning">
                    <AlertTitle>High Traffic Detected</AlertTitle>
                    <AlertDescription>Your virtual server is utilizing 98% CPU.</AlertDescription>
                  </Alert>
                  <Alert variant="success">
                    <AlertTitle>Payment Successful</AlertTitle>
                    <AlertDescription>Invoice #2993 paid. Service activated.</AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* --- BATCH 1 COMPONENTS --- */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-surface-200 dark:border-surface-800 pb-2">Batch 1: Base UI</h2>
            
            <div className="flex flex-wrap gap-4 items-center p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>

            <div className="flex gap-4">
              <Badge variant="primary" dot>New Feature</Badge>
              <Badge variant="success" dot>Operational</Badge>
              <Badge variant="warning" dot>Maintenance</Badge>
              <Badge variant="error" dot>Outage</Badge>
              <Badge variant="neutral">Draft</Badge>
            </div>
          </section>

        </div>
      </SectionWrapper>
    </main>
  );
}
