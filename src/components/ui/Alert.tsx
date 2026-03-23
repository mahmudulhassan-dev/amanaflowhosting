import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Info, AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-surface-50 text-surface-900 border-surface-200 dark:bg-surface-900/50 dark:text-surface-50 dark:border-surface-800",
        primary: "bg-primary-50 text-primary-900 border-primary-200 dark:bg-primary-950/50 dark:text-primary-200 dark:border-primary-900",
        error: "bg-error-50 text-error-900 border-error-200 dark:bg-error-950/50 dark:text-error-200 dark:border-error-900",
        warning: "bg-warning-50 text-warning-900 border-warning-200 dark:bg-warning-950/50 dark:text-warning-200 dark:border-warning-900",
        success: "bg-success-50 text-success-900 border-success-200 dark:bg-success-950/50 dark:text-success-200 dark:border-success-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  hideIcon?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, hideIcon, children, ...props }, ref) => {
    
    // Auto-select icon based on variant if not hidden and not explicitly provided
    let DefaultIcon = Info;
    if (!icon && !hideIcon) {
      if (variant === "error") DefaultIcon = XCircle;
      else if (variant === "warning") DefaultIcon = AlertTriangle;
      else if (variant === "success") DefaultIcon = CheckCircle2;
      icon = <DefaultIcon size={20} />;
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {!hideIcon && icon}
        {children}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm opacity-90 leading-relaxed", className)}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
