import * as React from "react";
import Link from "next/link";
import { Server, Globe, Shield, CreditCard, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-950 text-surface-400 border-t border-surface-900 pt-16 pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Server size={28} className="text-primary-500" />
              <span className="text-2xl font-bold tracking-tight">AmanaFlow<span className="text-primary-500">.</span></span>
            </div>
            <p className="max-w-xs text-surface-400 leading-relaxed">
              Premium digital infrastructure and cloud hosting solutions for businesses outgrowing generic providers.
            </p>
            <div className="flex items-center gap-4 pt-2 text-surface-500">
              <span className="flex items-center gap-1"><Shield size={16}/> DDoS Protected</span>
              <span className="flex items-center gap-1"><Globe size={16}/> 99.9% Uptime</span>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hosting</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/hosting/shared" className="hover:text-primary-400 transition-colors">Shared Hosting</Link></li>
              <li><Link href="/hosting/wordpress" className="hover:text-primary-400 transition-colors">WordPress Hosting</Link></li>
              <li><Link href="/servers/linux-vps" className="hover:text-primary-400 transition-colors">Linux VPS</Link></li>
              <li><Link href="/servers/dedicated" className="hover:text-primary-400 transition-colors">Dedicated Servers</Link></li>
              <li><Link href="/hosting/reseller" className="hover:text-primary-400 transition-colors">Reseller Partner</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Domains & Security</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/domains/search" className="hover:text-primary-400 transition-colors">Domain Search</Link></li>
              <li><Link href="/domains/transfer" className="hover:text-primary-400 transition-colors">Transfer Domain</Link></li>
              <li><Link href="/security/ssl" className="hover:text-primary-400 transition-colors">SSL Certificates</Link></li>
              <li><Link href="/security/backup" className="hover:text-primary-400 transition-colors">Daily Backups</Link></li>
              <li><Link href="/security/ddos" className="hover:text-primary-400 transition-colors">DDoS Mitigation <Badge variant="primary" className="ml-2 px-1.5 py-0 text-[10px]">NEW</Badge></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Support</Link></li>
              <li><Link href="/knowledgebase" className="hover:text-primary-400 transition-colors">Knowledgebase</Link></li>
              <li><Link href="/system-status" className="hover:text-primary-400 transition-colors">System Status</Link></li>
              <li><Link href="/affiliate" className="hover:text-primary-400 transition-colors">Affiliates</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-surface-800 pt-8 text-sm">
          <div className="flex items-center gap-4 text-surface-500 mb-4 md:mb-0">
            <p>&copy; {currentYear} AmanaFlow Cloud & IT. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-4 text-surface-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/sla" className="hover:text-white transition-colors">SLA</Link>
            </div>
            
            <div className="flex items-center gap-3 text-surface-500">
              <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Github size={18} /></a>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-surface-600">
              <CreditCard size={20} />
              <span className="text-xs uppercase tracking-wider font-semibold">Secure SSL Payment</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
