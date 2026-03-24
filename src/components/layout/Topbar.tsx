import * as React from "react";
import Link from "next/link";
import { Phone, Mail, User } from "lucide-react";
import { CurrencyToggle } from "@/components/ui/CurrencyToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTranslations } from "next-intl";

export function Topbar() {
  const t = useTranslations("Topbar");
  return (
    <div className="hidden w-full bg-surface-950 text-surface-400 py-1.5 text-xs md:block border-b border-surface-900 relative z-[60]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 font-medium">
        
        {/* Contact info */}
        <div className="flex items-center gap-5">
           <span className="flex items-center gap-1.5">
             <span className="text-surface-500">{t("support")}</span>
             <a href="tel:+8801234567890" className="flex items-center gap-1.5 hover:text-white transition-colors">
               <Phone size={12} className="text-primary-500" />
               <span>+880 1234 567 890</span>
             </a>
           </span>
          <a href="mailto:support@amanaflow.cloud" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={12} className="text-primary-500" />
            <span>support@amanaflow.cloud</span>
          </a>
        </div>

        {/* Right side: Controls & Auth */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CurrencyToggle />
            <div className="w-px h-3 bg-surface-800 mx-1" />
            <LanguageToggle />
            <div className="w-px h-3 bg-surface-800 mx-1" />
            <div className="flex items-center scale-90">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="w-px h-3 bg-surface-800 mx-1" />

          <div className="flex items-center gap-4">
            <Link href="/login" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              <User size={12} className="text-surface-500 group-hover:text-primary-400 transition-colors" />
              <span>{t("login")}</span>
            </Link>
            <Link href="/register" className="hover:text-white transition-colors">
              {t("register")}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
