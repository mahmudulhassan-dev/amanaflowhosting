import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  containerId?: string;
  hasBackground?: boolean;
  paddingY?: "sm" | "md" | "lg" | "xl" | "none";
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, containerId, hasBackground = false, paddingY = "lg", children, ...props }, ref) => {
    const paddingClasses = {
      none: "py-0",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-24 md:py-32",
    };

    return (
      <section
        ref={ref}
        id={containerId}
        className={cn(
          "relative w-full",
          hasBackground ? "bg-surface-50 dark:bg-surface-950" : "bg-white dark:bg-[#030712]",
          paddingClasses[paddingY],
          className
        )}
        {...props}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </div>
      </section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
