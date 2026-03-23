"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Server, Cloud, Shield, Database, Globe, ChevronDown, Zap, Mail,
  Search, Lock, LifeBuoy, Users, Building, FileText, ArrowRight, CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { CurrencyToggle } from "@/components/ui/CurrencyToggle";
import { DropdownItem } from "@/components/ui/DropdownItem";
import { MobileMenuItem } from "@/components/ui/MobileMenuItem";

export function Navbar() {
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
              Services <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-[480px] -translate-x-12 translate-y-2 rounded-2xl border border-surface-200 bg-white p-4 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <div className="grid grid-cols-2 gap-2">
                <DropdownItem href="/hosting/shared" icon={<Server size={18}/>}>Shared Hosting</DropdownItem>
                <DropdownItem href="/hosting/wordpress" icon={<Zap size={18}/>}>WordPress Hosting</DropdownItem>
                <DropdownItem href="/hosting/business" icon={<Building size={18}/>}>Business Hosting</DropdownItem>
                <DropdownItem href="/hosting/cloud" icon={<Cloud size={18}/>}>Cloud Hosting</DropdownItem>
                <DropdownItem href="/hosting/reseller" icon={<Users size={18}/>}>Reseller Hosting</DropdownItem>
                <DropdownItem href="/hosting/email" icon={<Mail size={18}/>}>Email Hosting</DropdownItem>
                <DropdownItem href="/hosting/managed" icon={<Shield size={18}/>}>Managed Hosting</DropdownItem>
                <DropdownItem href="/hosting/starter" icon={<Globe size={18}/>}>Starter Hosting</DropdownItem>
              </div>
              <div className="mt-4 pt-4 border-t border-surface-100 dark:border-surface-800 flex justify-between px-2">
                <Link href="/hosting/compare" className="text-sm font-medium text-surface-500 hover:text-primary-600 dark:hover:text-primary-400">Compare Plans</Link>
                <Link href="/services" className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center group/link">
                  All Services <ArrowRight size={14} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Domains Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Domains <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-60 translate-y-2 rounded-xl border border-surface-200 bg-white p-2 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <DropdownItem href="/domains" icon={<Search size={18}/>}>Domain Search</DropdownItem>
              <DropdownItem href="/domains/pricing" icon={<CreditCard size={18}/>}>Domain Pricing</DropdownItem>
              <DropdownItem href="/domains/transfer" icon={<ArrowRight size={18}/>}>Domain Transfer</DropdownItem>
              <div className="my-1 border-t border-surface-100 dark:border-surface-800" />
              <DropdownItem href="/domains/whois" icon={<Globe size={18}/>}>WHOIS Lookup</DropdownItem>
              <DropdownItem href="/domains/extensions" icon={<Database size={18}/>}>Domain Extensions</DropdownItem>
              <DropdownItem href="/domains/guide" icon={<FileText size={18}/>}>Domain Guide</DropdownItem>
            </div>
          </div>

          {/* Servers Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Servers <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-56 translate-y-2 rounded-xl border border-surface-200 bg-white p-2 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <DropdownItem href="/hosting/vps" icon={<Cloud size={18}/>}>Linux VPS</DropdownItem>
              <DropdownItem href="/hosting/windows-vps" icon={<Database size={18}/>}>Windows VPS</DropdownItem>
              <DropdownItem href="/hosting/dedicated" icon={<Server size={18}/>}>Dedicated Servers</DropdownItem>
              <DropdownItem href="/hosting/bare-metal" icon={<Zap size={18}/>}>Bare Metal</DropdownItem>
            </div>
          </div>

          {/* Security Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Security <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-56 translate-y-2 rounded-xl border border-surface-200 bg-white p-2 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <DropdownItem href="/security/ssl" icon={<Lock size={18}/>}>SSL Certificates</DropdownItem>
              <DropdownItem href="/security/ddos" icon={<Shield size={18}/>}>DDoS Protection</DropdownItem>
              <DropdownItem href="/security/backups" icon={<Database size={18}/>}>Automated Backups</DropdownItem>
              <DropdownItem href="/security/sitelock" icon={<Search size={18}/>}>Malware Scanner</DropdownItem>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Resources <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-[400px] -translate-x-12 translate-y-2 rounded-2xl border border-surface-200 bg-white p-4 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <div className="grid grid-cols-2 gap-2">
                <DropdownItem href="/knowledgebase" icon={<FileText size={18}/>}>Knowledgebase</DropdownItem>
                <DropdownItem href="/tutorials" icon={<Zap size={18}/>}>Tutorials</DropdownItem>
                <DropdownItem href="/blog" icon={<Globe size={18}/>}>Blog</DropdownItem>
                <DropdownItem href="/docs" icon={<Lock size={18}/>}>Documentation</DropdownItem>
                <DropdownItem href="/migration" icon={<ArrowRight size={18}/>}>Migration Help</DropdownItem>
                <DropdownItem href="/status" icon={<Server size={18}/>}>System Status</DropdownItem>
              </div>
              <div className="mt-4 pt-4 border-t border-surface-100 dark:border-surface-800 flex gap-2">
                <Button variant="outline" size="sm" className="w-full text-xs" asChild><Link href="/contact">Contact Support</Link></Button>
                <Button variant="primary" size="sm" className="w-full text-xs" asChild><Link href="/submit-ticket">Submit Ticket</Link></Button>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Company <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
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
            </div>
          </div>

        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <CurrencyToggle />
          <LanguageToggle />
          <ThemeToggle />
          <div className="w-px h-6 bg-surface-200 dark:bg-surface-800 mx-2" />
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
            Login
          </Link>
          <Button variant="primary" size="sm" className="hidden xl:inline-flex">Get Started</Button>
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
               <MobileMenuItem href="/hosting/shared" className="border-none py-3">Shared Hosting</MobileMenuItem>
               <MobileMenuItem href="/hosting/wordpress" className="border-none py-3">WordPress Hosting</MobileMenuItem>
               <MobileMenuItem href="/hosting/business" className="border-none py-3">Business Hosting</MobileMenuItem>
               <MobileMenuItem href="/hosting/cloud" className="border-none py-3">Cloud Hosting</MobileMenuItem>
               <MobileMenuItem href="/hosting/vps" className="border-none py-3">Virtual Private Servers</MobileMenuItem>
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
               <MobileMenuItem href="/domains" className="border-none py-3">Domain Search</MobileMenuItem>
               <MobileMenuItem href="/domains/pricing" className="border-none py-3">Domain Pricing</MobileMenuItem>
               <MobileMenuItem href="/domains/transfer" className="border-none py-3">Transfer Domain</MobileMenuItem>
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
               <MobileMenuItem href="/about" className="border-none py-3">About Us</MobileMenuItem>
               <MobileMenuItem href="/affiliate" className="border-none py-3">Affiliate Program</MobileMenuItem>
               <MobileMenuItem href="/contact" className="border-none py-3">Contact</MobileMenuItem>
            </div>
          )}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-surface-100 dark:border-surface-800 mt-auto flex flex-col gap-3">
          <Button variant="outline" fullWidth size="lg" asChild><Link href="/login">Login to Account</Link></Button>
          <Button variant="primary" fullWidth size="lg">Get Started</Button>
        </div>
      </div>

    </header>
  );
}
