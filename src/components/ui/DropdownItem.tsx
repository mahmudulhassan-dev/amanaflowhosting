import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface DropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  isActive?: boolean;
}

const DropdownItem = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ className, href, icon, showArrow, isActive, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "group flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors outline-none hover:bg-surface-100 hover:text-surface-900 focus:bg-surface-100 dark:hover:bg-surface-800 dark:hover:text-surface-50 dark:focus:bg-surface-800",
          isActive
            ? "bg-surface-100 text-surface-900 dark:bg-surface-800 dark:text-surface-50"
            : "text-surface-600 dark:text-surface-300",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-50 group-hover:bg-primary-50 dark:bg-surface-800 dark:group-hover:bg-primary-900/20">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center text-surface-400 group-hover:text-primary-600 dark:text-surface-300 dark:group-hover:text-primary-400">
                {icon}
              </span>
            </div>
          )}
          <span>{children}</span>
        </div>
        
        {showArrow && (
          <ChevronRight 
            size={16} 
            className="text-surface-300 transition-transform group-hover:translate-x-0.5 group-hover:text-surface-500 dark:text-surface-400 dark:group-hover:text-surface-300" 
          />
        )}
      </Link>
    );
  }
);
DropdownItem.displayName = "DropdownItem";

export { DropdownItem };
