import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
  {
    variants: {
      variant: {
        primary: "bg-primary-500/15 text-primary-700 dark:bg-primary-500/20 dark:text-primary-300",
        success: "bg-success-500/15 text-success-700 dark:bg-success-500/20 dark:text-success-400",
        warning: "bg-warning-500/15 text-warning-700 dark:bg-warning-500/20 dark:text-warning-400",
        error: "bg-error-500/15 text-error-700 dark:bg-error-500/20 dark:text-error-400",
        neutral: "bg-surface-200 text-surface-700 dark:bg-surface-800 dark:text-surface-300",
      },
      styleType: {
        soft: "", // default
        solid: "", // Will override via compoundVariants
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        styleType: "solid",
        className: "bg-primary-500 text-white dark:bg-primary-600 dark:text-white",
      },
      {
        variant: "success",
        styleType: "solid",
        className: "bg-success-500 text-white dark:bg-success-600 dark:text-white",
      },
      {
        variant: "neutral",
        styleType: "solid",
        className: "bg-surface-800 text-white dark:bg-surface-200 dark:text-surface-900",
      },
    ],
    defaultVariants: {
      variant: "neutral",
      styleType: "soft",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, styleType, dot, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, styleType }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "mr-1.5 h-1.5 w-1.5 rounded-full",
            variant === "primary" && "bg-primary-600 dark:bg-primary-400",
            variant === "success" && "bg-success-600 dark:bg-success-400 animate-pulse",
            variant === "warning" && "bg-warning-600 dark:bg-warning-400",
            variant === "error" && "bg-error-600 dark:bg-error-400",
            variant === "neutral" && "bg-surface-500 dark:bg-surface-400"
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
