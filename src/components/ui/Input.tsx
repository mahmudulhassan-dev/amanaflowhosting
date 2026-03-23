import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconLeft, iconRight, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {iconLeft && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-500 dark:text-surface-400">
            {iconLeft}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border bg-white px-4 py-2 text-sm text-surface-900 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-surface-400 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-950 dark:text-surface-50 dark:placeholder:text-surface-500",
            error
              ? "border-error-500 focus-visible:ring-error-500/20 dark:border-error-500/50"
              : "border-surface-200 focus-visible:border-primary-500 focus-visible:ring-primary-500/20 dark:border-surface-800 dark:focus-visible:border-primary-500",
            iconLeft && "pl-10",
            iconRight && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {iconRight && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500 dark:text-surface-400">
            {iconRight}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
