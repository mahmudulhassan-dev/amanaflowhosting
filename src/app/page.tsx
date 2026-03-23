import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { DropdownItem } from "@/components/ui/DropdownItem";
import { MegaMenuItem } from "@/components/ui/MegaMenuItem";
import { MobileMenuItem } from "@/components/ui/MobileMenuItem";
import { Globe, Shield, Zap, CheckCircle2, Search, Mail, Server, Cloud, Database } from "lucide-react";

export default function Epic2Showcase() {
  return (
    <main className="min-h-screen bg-surface-50 dark:bg-surface-950 font-sans text-surface-900 dark:text-surface-50">
      
      <SectionWrapper paddingY="lg">
        <SectionHeader 
          title="AmanaFlow Design System" 
          description="Epic 2: Core Components Showcase (Batch 1, 2, & 3)"
          badge="Design Specs"
        />
        
        <div className="space-y-16">
          
          {/* --- BATCH 3 COMPONENTS --- */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-surface-200 dark:border-surface-800 pb-2">Batch 3: Navigation Primitives</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Dropdown Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Standard Dropdown</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  <DropdownItem href="#" icon={<Globe size={18} />}>Domain Registration</DropdownItem>
                  <DropdownItem href="#" icon={<Shield size={18} />} showArrow isActive>SSL Certificates</DropdownItem>
                  <DropdownItem href="#" icon={<Database size={18} />}>Daily Backups</DropdownItem>
                </CardContent>
              </Card>

              {/* Mega Menu Items */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Mega Menu Grid</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MegaMenuItem 
                    href="#" 
                    icon={<Server size={24} />} 
                    title="Shared Hosting" 
                    description="Perfect for small businesses and personal blogs." 
                  />
                  <MegaMenuItem 
                    href="#" 
                    icon={<Cloud size={24} />} 
                    title="Cloud VPS" 
                    description="Dedicated resources with root access and scaling."
                    isActive
                  />
                  <MegaMenuItem 
                    href="#" 
                    icon={<Zap size={24} />} 
                    title="WordPress Hosting" 
                    description="Optimized servers specifically for WP speed." 
                  />
                </CardContent>
              </Card>

              {/* Mobile Menu */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Mobile Drawer Links</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <MobileMenuItem href="#">Home</MobileMenuItem>
                  <MobileMenuItem isParent isOpen>Hosting Plans</MobileMenuItem>
                  <div className="bg-surface-50 dark:bg-surface-900/50 pl-4 border-b border-surface-100 dark:border-surface-800">
                    <MobileMenuItem href="#" className="border-none">Shared Hosting</MobileMenuItem>
                    <MobileMenuItem href="#" className="border-none text-primary-600">Cloud VPS</MobileMenuItem>
                  </div>
                  <MobileMenuItem href="#">Contact Us</MobileMenuItem>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* --- BATCH 2 COMPONENTS --- */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-surface-200 dark:border-surface-800 pb-2">Batch 2: Layout & Forms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader><CardTitle>Form Inputs</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Search domain..." iconLeft={<Search size={18} />} />
                  <Input placeholder="Email Address" type="email" iconRight={<Mail size={18} />} />
                  <Input placeholder="Invalid domain" error defaultValue="amana" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Alert Notifications</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <Alert variant="error">
                    <AlertTitle>Action Required</AlertTitle>
                    <AlertDescription>Your domain expires in 3 days. Please renew.</AlertDescription>
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

            <div className="flex gap-4 p-6 bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
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
