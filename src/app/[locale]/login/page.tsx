import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Server, Shield, Lock, Quote } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Login - AmanaFlow",
  description: "Sign in to your AmanaFlow Cloud account.",
};

export default function LoginPage() {
  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex flex-col lg:flex-row bg-surface-50 dark:bg-surface-950">
      
      {/* ─── LEFT: Marketing / Trust ─── */}
      <div className="hidden lg:flex w-1/2 bg-surface-950 text-white relative flex-col justify-between p-12 overflow-hidden items-start border-r border-surface-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-16 hover:opacity-80 transition-opacity">
            <Server size={28} className="text-primary-500" />
            <span className="text-2xl font-bold tracking-tight">AmanaFlow<span className="text-primary-500">.</span></span>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Welcome back to the <span className="text-primary-500">Cloud.</span>
          </h1>
          <p className="text-lg text-surface-400 max-w-md">
            Manage your infrastructure, deploy instances, and scale your applications with millimeter precision through our unified control portal.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 text-surface-300">
              <div className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center shrink-0">
                <Shield size={20} className="text-primary-400" />
              </div>
              <p className="text-sm font-medium">Enterprise-grade DDoS Protection active on all instances.</p>
            </div>
            <div className="flex items-center gap-4 text-surface-300">
              <div className="w-10 h-10 rounded-full bg-surface-800 flex items-center justify-center shrink-0">
                <Lock size={20} className="text-primary-400" />
              </div>
              <p className="text-sm font-medium">Strict ISO-certified data center compliance.</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 w-full max-w-md">
          <Card className="bg-surface-900/50 border-surface-800 backdrop-blur-sm text-surface-300 shadow-none">
            <CardContent className="p-6">
              <Quote size={32} className="text-surface-700 mb-4" />
              <p className="text-sm italic mb-4 leading-relaxed">
                "We migrated our entire e-commerce infrastructure to AmanaFlow last year. Our page speeds doubled, and our infrastructure costs dropped by 30%. Absolutely phenomenal."
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-sm">Sarah Jenkins</span>
                <span className="text-xs text-primary-400">CTO, TechRetail Inc.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ─── RIGHT: Auth Form ─── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        <div className="w-full max-w-md mx-auto">
          
          <div className="text-center mb-8 lg:text-left">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-white mb-2">Sign In</h2>
            <p className="text-surface-500">Enter your credentials to access your client area.</p>
          </div>
          
          <Card className="shadow-premium border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600" />
            
            <CardContent className="pt-8 pb-6 px-6 sm:px-8 space-y-6">
              {/* Form elements mapped to WHMCS post variables typically */}
              <form action={siteConfig.whmcsUrl} method="post" className="space-y-4">
                <input type="hidden" name="action" value="login" />
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="username" 
                    placeholder="name@company.com" 
                    required 
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm font-medium text-surface-700 dark:text-surface-300">Password</label>
                    <Link href="/forgot-password" className="text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium">Forgot Password?</Link>
                  </div>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    required 
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  />
                </div>
                
                <div className="flex items-center gap-2 pt-2 pb-4">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    name="rememberme"
                    className="w-4 h-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="remember" className="text-sm text-surface-600 dark:text-surface-400 select-none cursor-pointer">Remember me for 30 days</label>
                </div>
                
                <Button type="submit" variant="primary" fullWidth size="lg" className="shadow-lg">
                  Secure Login
                </Button>
              </form>
              
              <div className="mt-8 text-center text-sm text-surface-500">
                Don't have an account? <Link href="/register" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline ml-1">Create an account</Link>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center flex flex-col items-center justify-center text-xs text-surface-400 gap-2">
            <div className="flex items-center gap-1">
              <Lock size={12} />
              <span>TLS 256-bit Encrypted Connection</span>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
