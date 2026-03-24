"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { 
  Menu, X, Server, Cloud, Shield, Database, Globe, ChevronDown, Zap, Mail,
  Search, Lock, LifeBuoy, Users, Building, FileText, ArrowRight, CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { DropdownItem } from "@/components/ui/DropdownItem";
import { MobileMenuItem } from "@/components/ui/MobileMenuItem";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const t = useTranslations("Navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-200 bg-white/90 backdrop-blur-md dark:border-surface-800 dark:bg-surface-950/90 shadow-sm transition-all">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-surface-900 dark:text-white mr-4 xl:mr-8">
          <Server size={24} className="text-primary-600 dark:text-primary-500" />
          <span className="text-xl font-bold tracking-tight">AmanaFlow<span className="text-primary-600 dark:text-primary-500">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full flex-1">
          
          {/* Services Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              {t("services")} <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-[850px] -translate-x-[200px] translate-y-2 rounded-2xl border border-surface-200 bg-white p-6 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              
              <div className="grid grid-cols-3 gap-8">
                {/* Column 1: Hosting */}
                <div className="col-span-1 space-y-4">
                  <h4 className="text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider pl-2 border-l-2 border-primary-500">Cloud Hosting</h4>
                  <div className="flex flex-col gap-1">
                     <DropdownItem href="/web-hosting" icon={<Globe size={18}/>}>Shared Hosting</DropdownItem>
                     <DropdownItem href="/wordpress-hosting" icon={<Zap size={18}/>}>WordPress Hosting</DropdownItem>
                     <DropdownItem href="/business-hosting" icon={<Building size={18}/>}>Business Hosting</DropdownItem>
                     <DropdownItem href="/cloud-hosting" icon={<Cloud size={18}/>}>Cloud Hosting</DropdownItem>
                     <DropdownItem href="/reseller-hosting" icon={<Users size={18}/>}>Reseller Hosting</DropdownItem>
                     <DropdownItem href="/email-hosting" icon={<Mail size={18}/>}>Email Hosting</DropdownItem>
                  </div>
                </div>

                {/* Column 2: Advanced / Servers */}
                <div className="col-span-1 space-y-4">
                  <h4 className="text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider pl-2 border-l-2 border-primary-500">Advanced Servers</h4>
                  <div className="flex flex-col gap-1">
                     <DropdownItem href="/vps-hosting" icon={<Server size={18}/>}>Linux VPS</DropdownItem>
                     <DropdownItem href="/windows-vps-hosting" icon={<Database size={18}/>}>Windows VPS</DropdownItem>
                     <DropdownItem href="/managed-vps-hosting" icon={<Shield size={18}/>}>Managed VPS</DropdownItem>
                     <DropdownItem href="/bare-metal-servers" icon={<Zap size={18}/>}>Dedicated Servers</DropdownItem>
                  </div>
                </div>

                {/* Column 3: Solutions & Quick Links */}
                <div className="col-span-1 space-y-4">
                   <h4 className="text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider pl-2 border-l-2 border-primary-500">Quick Links</h4>
                   <div className="flex flex-col gap-1">
                      <DropdownItem href="/starter-hosting" icon={<Zap size={18}/>}>Starter Solutions</DropdownItem>
                      <DropdownItem href="/agency-hosting" icon={<Building size={18}/>}>Agency Hosting</DropdownItem>
                      <DropdownItem href="/compare-hosting-plans" icon={<ArrowRight size={18}/>}>Compare Plans</DropdownItem>
                      <DropdownItem href="/services" icon={<Search size={18}/>}>All Services</DropdownItem>
                   </div>
                   
                   {/* Promo Card */}
                   <div className="p-4 mt-4 bg-surface-50 dark:bg-surface-900/50 rounded-xl border border-surface-100 dark:border-surface-800">
                     <p className="text-[11px] text-surface-500 uppercase font-bold mb-2">Need advice?</p>
                     <Link href="/contact" className="text-sm font-bold text-primary-600 dark:text-primary-400 flex items-center group/link">
                       Chat with an Expert <ArrowRight size={14} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                     </Link>
                   </div>
                </div>
              </div>

            </div>
          </div>

          {/* Domains Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Domains <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-64 translate-y-2 rounded-xl border border-surface-200 bg-white p-3 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <div className="mb-2 px-2 pb-2 border-b border-surface-100 dark:border-surface-800">
                <h4 className="text-[10px] font-bold text-surface-500 dark:text-surface-400 uppercase tracking-widest mb-2">Find & Manage</h4>
                <DropdownItem href="/domain-name-search" icon={<Search size={18}/>}>Domain Search</DropdownItem>
                <DropdownItem href="/domains/pricing" icon={<CreditCard size={18}/>}>Domain Pricing</DropdownItem>
                <DropdownItem href="/domains/transfer" icon={<ArrowRight size={18}/>}>Domain Transfer</DropdownItem>
              </div>
              <div className="px-2 pt-1">
                <h4 className="text-[10px] font-bold text-surface-500 dark:text-surface-400 uppercase tracking-widest mb-2 mt-2">Tools & Info</h4>
                <DropdownItem href="/domains/whois" icon={<Globe size={18}/>}>WHOIS Lookup</DropdownItem>
                <DropdownItem href="/domains/extensions" icon={<Database size={18}/>}>Domain Extensions</DropdownItem>
                <DropdownItem href="/domains/dns" icon={<Shield size={18}/>}>DNS Management</DropdownItem>
                <DropdownItem href="/domains/guide" icon={<FileText size={18}/>}>Domain Guide</DropdownItem>
              </div>
            </div>
          </div>



          {/* Resources Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Resources <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-[560px] -translate-x-[150px] translate-y-2 rounded-2xl border border-surface-200 bg-white p-6 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 space-y-4 pr-6 border-r border-surface-100 dark:border-surface-800">
                  <h4 className="text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider pl-2 border-l-2 border-primary-500">Learn</h4>
                  <div className="flex flex-col gap-1">
                    <DropdownItem href="/knowledgebase" icon={<FileText size={18}/>}>Knowledgebase</DropdownItem>
                    <DropdownItem href="/tutorials" icon={<Zap size={18}/>}>Tutorials</DropdownItem>
                    <DropdownItem href="/blog" icon={<Globe size={18}/>}>Engineering Blog</DropdownItem>
                    <DropdownItem href="/docs" icon={<Lock size={18}/>}>Documentation</DropdownItem>
                  </div>
                </div>
                <div className="col-span-1 space-y-4">
                  <h4 className="text-sm font-bold text-surface-900 dark:text-white uppercase tracking-wider pl-2 border-l-2 border-primary-500">Support</h4>
                  <div className="flex flex-col gap-1">
                    <DropdownItem href="/migration" icon={<ArrowRight size={18}/>}>Migration Help</DropdownItem>
                    <DropdownItem href="/status" icon={<Server size={18}/>}>System Status</DropdownItem>
                    <DropdownItem href="/faq" icon={<Search size={18}/>}>General FAQ</DropdownItem>
                    <DropdownItem href="/contact" icon={<Mail size={18}/>}>Contact Support</DropdownItem>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-surface-100 dark:border-surface-800">
                    <Button variant="primary" size="sm" className="w-full text-xs" asChild><Link href="/submit-ticket">Submit Ticket</Link></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              {t("company")} <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute right-0 top-16 w-56 translate-y-2 rounded-xl border border-surface-200 bg-white p-2 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <DropdownItem href="/about" icon={<Building size={18}/>}>About Us</DropdownItem>
              <DropdownItem href="/why-choose-us" icon={<Zap size={18}/>}>Why Choose Us</DropdownItem>
              <DropdownItem href="/reviews" icon={<Users size={18}/>}>Reviews</DropdownItem>
              <div className="my-1 border-t border-surface-100 dark:border-surface-800" />
              <DropdownItem href="/affiliate" icon={<Globe size={18}/>}>Affiliate Program</DropdownItem>
              <DropdownItem href="/partner" icon={<Shield size={18}/>}>Partner Program</DropdownItem>
              <DropdownItem href="/careers" icon={<LifeBuoy size={18}/>}>Careers</DropdownItem>
              <div className="my-1 border-t border-surface-100 dark:border-surface-800" />
              <DropdownItem href="/contact" icon={<Mail size={18}/>}>Contact</DropdownItem>
              <div className="my-1 border-t border-surface-100 dark:border-surface-800" />
              <DropdownItem href="/terms" icon={<FileText size={18}/>}>Terms & Conditions</DropdownItem>
              <DropdownItem href="/privacy" icon={<Shield size={18}/>}>Privacy Policy</DropdownItem>
            </div>
          </div>

        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link 
            href="/login" 
            className="text-sm font-semibold text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white transition-colors"
          >
            {t("login")}
          </Link>
          <Button size="sm" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all" asChild>
            <Link href={siteConfig.whmcsUrl}>Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white outline-none ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
           <Menu size={24} />
        </button>
      </div>

      {/* --- Mobile Drawer Overlay --- */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-surface-950/50 backdrop-blur-sm lg:hidden animate-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* --- Mobile Drawer Panel --- */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-surface-950 border-l border-surface-200 dark:border-surface-800 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-100 dark:border-surface-800">
          <Link href="/" className="flex items-center gap-2 text-surface-900 dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>
             <Server size={20} className="text-primary-600 dark:text-primary-500" />
             <span className="text-lg font-bold">AmanaFlow.</span>
          </Link>
          <button 
            className="p-2 text-surface-500 hover:text-surface-900 dark:hover:text-white bg-surface-100 dark:bg-surface-800 rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
             <X size={18} />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-2 py-4">
          <MobileMenuItem 
            isParent 
            isOpen={activeMobileDropdown === "services"} 
            onToggle={() => setActiveMobileDropdown(prev => prev === "services" ? null : "services")}
          >
            Services
          </MobileMenuItem>
          {activeMobileDropdown === "services" && (
            <div className="bg-surface-50 dark:bg-surface-900/40 rounded-lg mx-2 my-1 overflow-hidden">
               <div className="px-4 py-2 text-[10px] font-bold text-surface-400 uppercase tracking-widest border-b border-surface-100 dark:border-surface-800">Cloud Hosting</div>
               <MobileMenuItem href="/web-hosting" className="border-none py-2.5">Shared Hosting</MobileMenuItem>
               <MobileMenuItem href="/wordpress-hosting" className="border-none py-2.5">WordPress Hosting</MobileMenuItem>
               <MobileMenuItem href="/business-hosting" className="border-none py-2.5">Business Hosting</MobileMenuItem>
               <MobileMenuItem href="/reseller-hosting" className="border-none py-2.5">Reseller Hosting</MobileMenuItem>
               
               <div className="px-4 py-2 mt-2 text-[10px] font-bold text-surface-400 uppercase tracking-widest border-b border-surface-100 dark:border-surface-800">Advanced Servers</div>
               <MobileMenuItem href="/vps-hosting" className="border-none py-2.5">Linux VPS</MobileMenuItem>
               <MobileMenuItem href="/hosting/windows-vps" className="border-none py-2.5">Windows VPS</MobileMenuItem>
               <MobileMenuItem href="/hosting/managed-vps" className="border-none py-2.5">Managed VPS</MobileMenuItem>
               <MobileMenuItem href="/hosting/bare-metal" className="border-none py-2.5">Dedicated Servers</MobileMenuItem>
            </div>
          )}

          <MobileMenuItem 
            isParent 
            isOpen={activeMobileDropdown === "domains"} 
            onToggle={() => setActiveMobileDropdown(prev => prev === "domains" ? null : "domains")}
          >
            Domains
          </MobileMenuItem>
          {activeMobileDropdown === "domains" && (
            <div className="bg-surface-50 dark:bg-surface-900/40 rounded-lg mx-2 my-1 overflow-hidden">
               <MobileMenuItem href="/domain-name-search" className="border-none py-2.5">Domain Search</MobileMenuItem>
               <MobileMenuItem href="/domains/pricing" className="border-none py-2.5">Domain Pricing</MobileMenuItem>
               <MobileMenuItem href="/domains/transfer" className="border-none py-2.5">Transfer Domain</MobileMenuItem>
               <MobileMenuItem href="/domains/whois" className="border-none py-2.5">WHOIS Lookup</MobileMenuItem>
            </div>
          )}

          <MobileMenuItem 
            isParent 
            isOpen={activeMobileDropdown === "resources"} 
            onToggle={() => setActiveMobileDropdown(prev => prev === "resources" ? null : "resources")}
          >
            Resources
          </MobileMenuItem>
          {activeMobileDropdown === "resources" && (
            <div className="bg-surface-50 dark:bg-surface-900/40 rounded-lg mx-2 my-1 overflow-hidden">
               <MobileMenuItem href="/knowledgebase" className="border-none py-3">Knowledgebase</MobileMenuItem>
               <MobileMenuItem href="/tutorials" className="border-none py-3">Tutorials</MobileMenuItem>
               <MobileMenuItem href="/blog" className="border-none py-3">Our Blog</MobileMenuItem>
               <MobileMenuItem href="/contact" className="border-none py-3 text-primary-600 font-medium">Contact Support</MobileMenuItem>
            </div>
          )}

          <MobileMenuItem 
            isParent 
            isOpen={activeMobileDropdown === "company"} 
            onToggle={() => setActiveMobileDropdown(prev => prev === "company" ? null : "company")}
          >
            Company
          </MobileMenuItem>
          {activeMobileDropdown === "company" && (
            <div className="bg-surface-50 dark:bg-surface-900/40 rounded-lg mx-2 my-1 overflow-hidden">
               <MobileMenuItem href="/about" className="border-none py-2.5">About Us</MobileMenuItem>
               <MobileMenuItem href="/why-choose-us" className="border-none py-2.5">Why Choose Us</MobileMenuItem>
               <MobileMenuItem href="/reviews" className="border-none py-2.5">Reviews</MobileMenuItem>
               <MobileMenuItem href="/affiliate" className="border-none py-2.5">Affiliate Program</MobileMenuItem>
               <MobileMenuItem href="/contact" className="border-none py-2.5 text-primary-600 font-medium">Get in Touch</MobileMenuItem>
            </div>
          )}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-surface-100 dark:border-surface-800 mt-auto flex flex-col gap-3">
          <Button variant="outline" fullWidth size="lg" asChild><Link href={siteConfig.whmcsUrl}>Login to Account</Link></Button>
          <Button variant="primary" fullWidth size="lg" asChild><Link href={siteConfig.whmcsUrl}>Get Started</Link></Button>
        </div>
      </div>

    </header>
  );
}
