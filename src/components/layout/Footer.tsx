"use client";

import * as React from "react";
import Link from "next/link";
import { Server, Shield, CreditCard, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { CurrencyToggle } from "@/components/ui/CurrencyToggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-950 text-surface-400 border-t border-surface-900 pt-20 pb-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter & Brand Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 pb-16 border-b border-surface-900">
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-2 text-white">
              <Server size={32} className="text-primary-500" />
              <span className="text-3xl font-bold tracking-tight">AmanaFlow<span className="text-primary-500">.</span></span>
            </div>
            <p className="text-surface-400 leading-relaxed text-base">
              Enterprise-grade digital infrastructure and cloud hosting solutions. Engineered for performance, designed for reliability.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <a href={siteConfig.links.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-900 flex items-center justify-center text-surface-400 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg border border-surface-800"><Facebook size={20} /></a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-900 flex items-center justify-center text-surface-400 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg border border-surface-800"><Twitter size={20} /></a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-900 flex items-center justify-center text-surface-400 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg border border-surface-800"><Linkedin size={20} /></a>
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-900 flex items-center justify-center text-surface-400 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg border border-surface-800"><Github size={20} /></a>
            </div>
          </div>

          <div className="w-full lg:max-w-md">
            <h4 className="text-white font-bold mb-4 text-lg">Join our newsletter</h4>
            <p className="text-surface-500 text-sm mb-6">Get the latest updates, hosting tips, and exclusive offers delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-xl bg-surface-900 border border-surface-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
              />
              <button className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-primary-900/20 active:scale-95">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mb-20">
          
          {/* Hosting */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs border-l-2 border-primary-500 pl-3">Hosting</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/web-hosting" className="hover:text-primary-400 transition-colors">Shared Hosting</Link></li>
              <li><Link href="/wordpress-hosting" className="hover:text-primary-400 transition-colors">WordPress Hosting</Link></li>
              <li><Link href="/business-hosting" className="hover:text-primary-400 transition-colors">Business Hosting</Link></li>
              <li><Link href="/cloud-hosting" className="hover:text-primary-400 transition-colors">Cloud Hosting</Link></li>
              <li><Link href="/reseller-hosting" className="hover:text-primary-400 transition-colors">Reseller Hosting</Link></li>
              <li><Link href="/email-hosting" className="hover:text-primary-400 transition-colors">Email Hosting</Link></li>
            </ul>
          </div>

          {/* Servers */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs border-l-2 border-primary-500 pl-3">Servers</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/vps-hosting" className="hover:text-primary-400 transition-colors">Linux VPS</Link></li>
              <li><Link href="/windows-vps-hosting" className="hover:text-primary-400 transition-colors">Windows VPS</Link></li>
              <li><Link href="/managed-vps-hosting" className="hover:text-primary-400 transition-colors">Managed VPS</Link></li>
              <li><Link href="/bare-metal-servers" className="hover:text-primary-400 transition-colors">Dedicated Servers</Link></li>
              <li><Link href="/storage-hosting" className="hover:text-primary-400 transition-colors">Storage Servers</Link></li>
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs border-l-2 border-primary-500 pl-3">Domains</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/domain-name-search" className="hover:text-primary-400 transition-colors">Domain Search</Link></li>
              <li><Link href="/domains/pricing" className="hover:text-primary-400 transition-colors">Domain Pricing</Link></li>
              <li><Link href="/domains/transfer" className="hover:text-primary-400 transition-colors">Transfer Domain</Link></li>
              <li><Link href="/domains/whois" className="hover:text-primary-400 transition-colors">WHOIS Lookup</Link></li>
              <li><Link href="/domains/dns" className="hover:text-primary-400 transition-colors">DNS Management</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs border-l-2 border-primary-500 pl-3">Support</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/knowledgebase" className="hover:text-primary-400 transition-colors">Knowledgebase</Link></li>
              <li><Link href="/tutorials" className="hover:text-primary-400 transition-colors">Tutorials</Link></li>
              <li><Link href="/docs" className="hover:text-primary-400 transition-colors">Documentation</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Support</Link></li>
              <li><Link href="/submit-ticket" className="hover:text-primary-400 transition-colors">Submit Ticket</Link></li>
              <li><Link href="/status" className="hover:text-primary-400 transition-colors">System Status</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs border-l-2 border-primary-500 pl-3">Company</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-primary-400 transition-colors">Why Choose Us</Link></li>
              <li><Link href="/reviews" className="hover:text-primary-400 transition-colors">Client Reviews</Link></li>
              <li><Link href="/affiliate" className="hover:text-primary-400 transition-colors">Affiliate Program</Link></li>
              <li><Link href="/careers" className="hover:text-primary-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs border-l-2 border-primary-500 pl-3">Legal</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/sla" className="hover:text-primary-400 transition-colors">Network SLA</Link></li>
              <li><Link href="/aup" className="hover:text-primary-400 transition-colors">Acceptable Use</Link></li>
              <li><Link href="/cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between border-t border-surface-900 pt-10 gap-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-surface-500 text-center sm:text-left">
            <p>&copy; {currentYear} {siteConfig.name} Cloud. All rights reserved.</p>
            <div className="hidden sm:block w-px h-4 bg-surface-800" />
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-surface-900 border border-surface-800 px-3 py-1.5 rounded-lg">
                <Shield size={16} className="text-success-500" />
                <span className="text-[10px] uppercase tracking-wider font-bold text-white">Secure Payments</span>
              </div>
              <div className="flex items-center gap-4 text-surface-600">
                <CreditCard size={20} />
                <span className="text-[10px] font-bold">VISA</span>
                <span className="text-[10px] font-bold">MASTERCARD</span>
                <span className="text-[10px] font-bold">BKASH</span>
              </div>
            </div>
          </div>

          {/* Unified Controls Panel */}
          <div className="flex items-center gap-3 bg-surface-900 border border-surface-800 rounded-full px-4 py-2 shadow-2xl">
            <CurrencyToggle direction="up" />
            <div className="w-px h-4 bg-surface-700 mx-1" />
            <LanguageToggle direction="up" />
          </div>
          
        </div>

      </div>
    </footer>
  );
}
