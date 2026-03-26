import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Cloud, Zap, ArrowRight, Shield, Database, Headset } from "lucide-react";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All Hosting Services | AmanaFlow",
  description: "Explore AmanaFlow's full range of cloud, VPS, and managed hosting solutions designed for scale and performance.",
  alternates: {
    canonical: "/services",
    languages: generateAlternateLanguages("/services"),
  }
};

export default function ServicesPage() {
  const services = [
    { title: "Shared Hosting", href: "/web-hosting", icon: <Cloud /> },
    { title: "WordPress Hosting", href: "/wordpress-hosting", icon: <Zap /> },
    { title: "Business Hosting", href: "/business-hosting", icon: <Database /> },
    { title: "VPS Hosting", href: "/vps-hosting", icon: <Server /> },
    { title: "Managed VPS", href: "/managed-vps-hosting", icon: <Shield /> },
    { title: "Reseller Hosting", href: "/reseller-hosting", icon: <Users /> }
  ];

  return (
    <>
      <SectionWrapper className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-surface-950 text-white border-b border-surface-800">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary" className="mb-6">Our Solutions</Badge>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
            High-Performance <span className="text-primary-400">Services</span> <br/>for Every Stage of Growth.
          </h1>
          <p className="text-lg text-surface-400 lg:text-xl max-w-2xl mx-auto">
            From your first landing page to global-scale enterprise applications, AmanaFlow provides the infrastructure you need to win.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-50 dark:bg-surface-950 min-h-[400px]">
         <div className="text-center py-20 opacity-60">
            <h2 className="text-2xl font-bold text-surface-900 dark:text-white">Full Service Catalog Index</h2>
            <p className="text-surface-500 mt-2">Redirecting to our most popular solutions below...</p>
         </div>
      </SectionWrapper>
    </>
  );
}

import { Server, Users } from "lucide-react";
