import { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { ProductMarketing } from "./ProductMarketing";

const TLDR = ({ children }: { children: ReactNode }) => (
  <div className="bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 p-6 rounded-2xl my-8">
    <div className="flex items-center gap-3 mb-4">
      <Badge variant="primary">TL;DR</Badge>
    </div>
    <div className="text-surface-700 dark:text-surface-300 leading-relaxed font-medium">
      {children}
    </div>
  </div>
);

const h2 = ({ children, ...props }: any) => (
  <h2 className="text-2xl font-bold mt-12 mb-6 text-surface-900 dark:text-white" {...props}>
    {children}
  </h2>
);

const h3 = ({ children, ...props }: any) => (
  <h3 className="text-xl font-bold mt-8 mb-4 text-surface-900 dark:text-white" {...props}>
    {children}
  </h3>
);

const p = ({ children, ...props }: any) => (
  <p className="text-lg leading-relaxed mb-6 text-surface-600 dark:text-surface-400" {...props}>
    {children}
  </p>
);

const ul = ({ children, ...props }: any) => (
  <ul className="list-disc pl-6 mb-6 space-y-2 text-surface-600 dark:text-surface-400" {...props}>
    {children}
  </ul>
);

const ol = ({ children, ...props }: any) => (
  <ol className="list-decimal pl-6 mb-6 space-y-2 text-surface-600 dark:text-surface-400" {...props}>
    {children}
  </ol>
);

const a = ({ href, children, ...props }: any) => (
  <a href={href} className="text-primary-600 dark:text-primary-400 underline underline-offset-4 decoration-primary-500/30 hover:decoration-primary-500 transition-all font-medium" {...props}>
    {children}
  </a>
);

export const MDXComponents = {
  TLDR,
  h2,
  h3,
  p,
  ul,
  ol,
  a,
  ProductMarketing,
};
