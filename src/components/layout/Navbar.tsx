"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Server, Cloud, Shield, Database, Globe, ChevronDown, Zap, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { DropdownItem } from "@/components/ui/DropdownItem";
import { MegaMenuItem } from "@/components/ui/MegaMenuItem";
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
    <header className="sticky top-0 z-50 w-full border-b border-surface-200 bg-white/90 backdrop-blur-md dark:border-surface-800 dark:bg-surface-950/90 shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-surface-900 dark:text-white">
          <Server size={24} className="text-primary-600 dark:text-primary-500" />
          <span className="text-xl font-bold tracking-tight">AmanaFlow<span className="text-primary-600 dark:text-primary-500">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 h-full">
          
          <Link href="/" className="px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
            Home
          </Link>

          {/* Hosting Mega Menu */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Hosting <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-1/2 top-16 w-screen max-w-3xl -translate-x-1/2 translate-y-4 rounded-2xl border border-surface-200 bg-white p-6 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 relative">
                <MegaMenuItem href="/hosting/shared" icon={<Server size={24}/>} title="Shared Hosting" description="Cost-effective hosting for small businesses and personal projects." />
                <MegaMenuItem href="/hosting/wordpress" icon={<Zap size={24}/>} title="WordPress Hosting" description="LiteSpeed servers optimized specifically for WordPress speed." />
                <MegaMenuItem href="/hosting/business" icon={<Shield size={24}/>} title="Business Hosting" description="High-resource isolated environments for growing companies." />
                <MegaMenuItem href="/hosting/email" icon={<Mail size={24}/>} title="Email Hosting" description="Professional business email with premium spam protection." />
              </div>
            </div>
          </div>

          {/* Servers Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Servers <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-64 translate-y-2 rounded-xl border border-surface-200 bg-white p-2 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <DropdownItem href="/servers/linux-vps" icon={<Cloud size={18}/>}>Linux VPS</DropdownItem>
              <DropdownItem href="/servers/windows-vps" icon={<Server size={18}/>}>Windows VPS</DropdownItem>
              <DropdownItem href="/servers/dedicated" icon={<Shield size={18}/>}>Dedicated Servers</DropdownItem>
            </div>
          </div>

          {/* Domains Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
              Domains <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 absolute left-0 top-16 w-56 translate-y-2 rounded-xl border border-surface-200 bg-white p-2 shadow-premium transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-surface-800 dark:bg-surface-950">
              <DropdownItem href="/domains/search" icon={<Globe size={18}/>}>Domain Search</DropdownItem>
              <DropdownItem href="/domains/transfer" showArrow>Transfer Domain</DropdownItem>
              <DropdownItem href="/domains/pricing">Domain Pricing</DropdownItem>
            </div>
          </div>

          <Link href="/contact" className="px-4 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors">
            Support
          </Link>

        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <div className="w-px h-6 bg-surface-200 dark:bg-surface-800 mx-1" />
          <Button variant="primary" size="sm">Client Area</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white outline-none"
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
          <Link href="/" className="flex items-center gap-2 text-surface-900 dark:text-white">
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
          <MobileMenuItem href="/">Home</MobileMenuItem>
          
          <MobileMenuItem 
            isParent 
            isOpen={activeMobileDropdown === "hosting"} 
            onToggle={() => setActiveMobileDropdown(prev => prev === "hosting" ? null : "hosting")}
          >
            Hosting
          </MobileMenuItem>
          {activeMobileDropdown === "hosting" && (
            <div className="bg-surface-50 dark:bg-surface-900/40 rounded-lg mx-2 my-1 overflow-hidden">
              <MobileMenuItem href="/hosting/shared" className="border-none py-3">Shared Hosting</MobileMenuItem>
              <MobileMenuItem href="/hosting/wordpress" className="border-none py-3">WordPress Hosting</MobileMenuItem>
              <MobileMenuItem href="/hosting/business" className="border-none py-3">Business Hosting</MobileMenuItem>
              <MobileMenuItem href="/hosting/email" className="border-none py-3">Email Hosting</MobileMenuItem>
            </div>
          )}

          <MobileMenuItem 
            isParent 
            isOpen={activeMobileDropdown === "servers"} 
            onToggle={() => setActiveMobileDropdown(prev => prev === "servers" ? null : "servers")}
          >
            Servers
          </MobileMenuItem>
          {activeMobileDropdown === "servers" && (
            <div className="bg-surface-50 dark:bg-surface-900/40 rounded-lg mx-2 my-1 overflow-hidden">
              <MobileMenuItem href="/servers/linux-vps" className="border-none py-3">Linux VPS</MobileMenuItem>
              <MobileMenuItem href="/servers/windows-vps" className="border-none py-3">Windows VPS</MobileMenuItem>
              <MobileMenuItem href="/servers/dedicated" className="border-none py-3">Dedicated Servers</MobileMenuItem>
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
              <MobileMenuItem href="/domains/search" className="border-none py-3">Domain Search</MobileMenuItem>
              <MobileMenuItem href="/domains/transfer" className="border-none py-3">Transfer Domain</MobileMenuItem>
            </div>
          )}

          <MobileMenuItem href="/contact">Support</MobileMenuItem>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-surface-100 dark:border-surface-800 mt-auto">
          <Button variant="primary" fullWidth size="lg">Client Area Login</Button>
        </div>
      </div>

    </header>
  );
}
