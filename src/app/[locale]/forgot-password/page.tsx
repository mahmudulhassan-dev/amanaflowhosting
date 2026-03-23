import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Server, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Password Reset - AmanaFlow",
  description: "Reset your AmanaFlow Cloud password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex flex-col items-center justify-center p-6 bg-surface-50 dark:bg-surface-950 relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Server size={28} className="text-primary-600 dark:text-primary-500" />
            <span className="text-2xl font-bold tracking-tight text-surface-900 dark:text-white">AmanaFlow<span className="text-primary-600 dark:text-primary-500">.</span></span>
          </Link>
        </div>
        
        <Card className="shadow-premium border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600" />
          
          <CardContent className="pt-10 pb-8 px-6 sm:px-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-2">Reset Password</h2>
              <p className="text-surface-500 text-sm max-w-xs mx-auto">
                Enter the email address associated with your account and we'll send you a link to reset your password.
              </p>
            </div>

            <form action={`${siteConfig.whmcsUrl.replace('clientarea.php', 'pwreset.php')}`} method="post" className="space-y-6">
              <input type="hidden" name="action" value="reset" />
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="name@company.com" 
                  required 
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-950 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                />
              </div>
              
              <Button type="submit" variant="primary" fullWidth size="lg">
                Send Reset Link
              </Button>
            </form>
            
          </CardContent>
          <div className="border-t border-surface-100 dark:border-surface-800 p-4 bg-surface-50/50 dark:bg-surface-950/50 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm font-medium text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <ArrowLeft size={14} /> Back to Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
