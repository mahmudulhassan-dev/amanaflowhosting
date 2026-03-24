"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  { name: "All Posts", slug: "" },
  { name: "Web Hosting", slug: "web-hosting" },
  { name: "VPS & Cloud", slug: "vps-cloud" },
  { name: "Domain & DNS", slug: "domain-dns" },
  { name: "WHMCS", slug: "whmcs" },
  { name: "WordPress", slug: "wordpress" },
  { name: "SEO & Marketing", slug: "seo-marketing" },
  { name: "Online Business", slug: "online-business" },
  { name: "Security", slug: "security" },
  { name: "AI & Automation", slug: "ai-automation" },
  { name: "Tutorials", slug: "tutorials" },
];

export function BlogCategoryRail({ activeSlug = "" }: { activeSlug?: string }) {
  return (
    <div className="w-full border-b border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-950 sticky top-[72px] z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-4 scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeSlug === cat.slug;
            return (
              <Link
                key={cat.name}
                href={cat.slug ? `/blog/category/${cat.slug}` : "/blog"}
                className={cn(
                  "whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all border",
                  isActive 
                    ? "bg-primary-600 border-primary-600 text-white shadow-md scale-105" 
                    : "bg-surface-50 dark:bg-surface-900 border-surface-200 dark:border-surface-800 text-surface-600 dark:text-surface-400 hover:border-primary-500 hover:text-primary-600"
                )}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
