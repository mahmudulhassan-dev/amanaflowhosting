import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface MobileMenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  isParent?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  isActive?: boolean;
}

const MobileMenuItem = React.forwardRef<HTMLAnchorElement, MobileMenuItemProps>(
  ({ className, href, isParent, isOpen, onToggle, isActive, children, ...props }, ref) => {
    
    // If it's a parent, it acts as a button to toggle submenus.
    if (isParent) {
      return (
        <button
          className={cn(
            "flex w-full items-center justify-between border-b border-surface-100 px-4 py-4 text-left text-base font-medium transition-colors hover:bg-surface-50 dark:border-surface-800 dark:hover:bg-surface-900",
            isOpen ? "text-primary-600 dark:text-primary-400" : "text-surface-900 dark:text-surface-50",
            className
          )}
          onClick={onToggle}
          type="button"
        >
          <span>{children}</span>
          <ChevronDown
            size={18}
            className={cn(
              "transition-transform duration-200",
              isOpen ? "rotate-180 text-primary-600 dark:text-primary-400" : "text-surface-400"
            )}
          />
        </button>
      );
    }

    // Standard mobile link
    return (
      <Link
        href={href || "#"}
        ref={ref}
        className={cn(
          "block w-full border-b border-surface-100 px-4 py-4 text-base font-medium transition-colors hover:bg-surface-50 hover:text-primary-600 dark:border-surface-800 dark:hover:bg-surface-900 dark:hover:text-primary-400",
          isActive
            ? "text-primary-600 dark:text-primary-400"
            : "text-surface-600 dark:text-surface-300",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
MobileMenuItem.displayName = "MobileMenuItem";

export { MobileMenuItem };
