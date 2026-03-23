import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface MegaMenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

const MegaMenuItem = React.forwardRef<HTMLAnchorElement, MegaMenuItemProps>(
  ({ className, href, icon, title, description, isActive, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "group flex items-start gap-4 rounded-xl p-4 transition-all hover:bg-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:hover:bg-surface-800/50",
          isActive ? "bg-surface-100 dark:bg-surface-800/50" : "bg-transparent",
          className
        )}
        {...props}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-surface-200 transition-colors group-hover:bg-primary-50 group-hover:ring-primary-100 dark:bg-surface-900 dark:ring-surface-800 dark:group-hover:bg-primary-950/30 dark:group-hover:ring-primary-900">
          <span className="text-surface-500 transition-colors group-hover:text-primary-600 dark:text-surface-400 dark:group-hover:text-primary-400">
            {icon}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold text-surface-900 transition-colors group-hover:text-primary-700 dark:text-surface-50 dark:group-hover:text-primary-400">
            {title}
          </h4>
          <p className="text-sm text-surface-500 dark:text-surface-400 leading-snug">
            {description}
          </p>
        </div>
      </Link>
    );
  }
);
MegaMenuItem.displayName = "MegaMenuItem";

export { MegaMenuItem };
