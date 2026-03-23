import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: string;
  align?: "left" | "center";
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, description, badge, align = "center", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-12 md:mb-16 flex flex-col gap-4",
          align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-3xl",
          className
        )}
        {...props}
      >
        {badge && (
          <Badge variant="primary" styleType="soft" className="uppercase tracking-wider">
            {badge}
          </Badge>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-surface-900 dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
