import * as React from "react";
import Link from "next/link";
import { Phone, Mail, User, ShieldCheck } from "lucide-react";

export function Topbar() {
  return (
    <div className="hidden w-full bg-surface-950 text-surface-300 py-2 text-sm md:block border-b border-surface-800">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Contact & Status */}
        <div className="flex items-center gap-6">
          <a href="tel:+880123456789" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-primary-500" />
            <span>+880 1234 567 890</span>
          </a>
          <a href="mailto:support@amanaflow.cloud" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} className="text-primary-500" />
            <span>support@amanaflow.cloud</span>
          </a>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-success-500" />
            <span className="text-success-500 font-medium">System Status: 100% Operational</span>
          </div>
        </div>

        {/* Auth Links (Future WHMCS Bridge) */}
        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="flex items-center gap-2 hover:text-white transition-colors">
            <User size={14} />
            <span>Client Login</span>
          </Link>
          <span className="text-surface-700">|</span>
          <Link href="/auth/register" className="hover:text-white transition-colors">
            Register
          </Link>
        </div>

      </div>
    </div>
  );
}
