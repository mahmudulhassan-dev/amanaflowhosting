import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Server, ShieldCheck, Zap, Globe, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Create Account - AmanaFlow",
  description: "Register for a new AmanaFlow Cloud account.",
};

export default function RegisterPage() {
  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex flex-col lg:flex-row-reverse bg-surface-50 dark:bg-surface-950">
      
      {/* ─── RIGHT (Displays on Left in DOM flow due to flex-row-reverse): Marketing / Value Prop ─── */}
      <div className="hidden lg:flex w-1/2 bg-[#0f172a] text-white relative flex-col justify-center p-12 overflow-hidden items-start border-l border-surface-800">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-lg mx-auto w-full">
          <Link href="/" className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity">
            <Server size={28} className="text-primary-500" />
            <span className="text-2xl font-bold tracking-tight">AmanaFlow<span className="text-primary-500">.</span></span>
          </Link>
          
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
            Join thousands scaling with AmanaFlow.
          </h2>
          <p className="text-lg text-surface-400 mb-12">
            Set up your account in seconds. Zero hidden fees, free migrations, and ironclad security guarantees.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-900/40 border border-surface-800 backdrop-blur-sm">
              <Zap size={24} className="text-primary-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">Instant Provisioning</h4>
                <p className="text-sm text-surface-400 leading-relaxed">Your cloud instances and hosting packages are active the moment payment clears.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-900/40 border border-surface-800 backdrop-blur-sm">
              <ShieldCheck size={24} className="text-primary-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">Free Daily Backups</h4>
                <p className="text-sm text-surface-400 leading-relaxed">We automatically snapshot your data every night, keeping your business safe from disasters.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-900/40 border border-surface-800 backdrop-blur-sm">
              <Globe size={24} className="text-primary-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">Free Expert Migration</h4>
                <p className="text-sm text-surface-400 leading-relaxed">Coming from another host? Our system administrators will move your sites over completely free of charge.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* ─── LEFT: Auth Form ─── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        <div className="w-full max-w-md mx-auto">
          
          <div className="text-center mb-8 lg:text-left">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-white mb-2">Create Account</h2>
            <p className="text-surface-500">Get started by entering your primary details below.</p>
          </div>
          
          <Card className="shadow-premium border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600" />
            
            <CardContent className="pt-8 pb-6 px-6 sm:px-8">
              <form action={`${siteConfig.whmcsUrl}?rp=/login`} method="get" className="space-y-5">
                {/* Normally WHMCS uses ?rp=/signup or /register.php, but modern WHMCS routes via /register.php or /cart.php?a=checkout */}
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="block text-sm font-medium text-surface-700 dark:text-surface-300">First Name</label>
                    <input 
                      type="text" 
                      id="firstname" 
                      placeholder="John" 
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-950 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="block text-sm font-medium text-surface-700 dark:text-surface-300">Last Name</label>
                    <input 
                      type="text" 
                      id="lastname" 
                      placeholder="Doe" 
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-950 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@company.com" 
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-950 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-surface-700 dark:text-surface-300">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Create a strong password" 
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-950 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  />
                  <div className="flex gap-1 pt-1">
                    <div className="h-1.5 w-full bg-surface-200 dark:bg-surface-800 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-red-500"></div></div>
                  </div>
                  <p className="text-xs text-surface-400 pt-1">Use 8+ characters, including letters and numbers.</p>
                </div>
                
                {/* 
                  Since actual registration form logic should happen inside WHMCS to keep SSR secure & aligned with WHMCS CSRF,
                  we link them to the actual WHMCS register page via action if needed, or simply let the button redirect.
                  We use button type=button and router/Link if it's just a shell, but building an exact UI replica works best.
                */}
                <div className="pt-2">
                   <Button type="button" variant="primary" fullWidth size="lg" className="shadow-lg" asChild>
                     <Link href={`${siteConfig.whmcsUrl.replace('clientarea.php', 'register.php')}`}>Continue to Billing Setup</Link>
                   </Button>
                </div>
              </form>
              
              <div className="mt-6 pt-6 border-t border-surface-200 dark:border-surface-800 text-center text-sm text-surface-500">
                Already have an account? <Link href="/login" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline ml-1">Sign in here</Link>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center px-8 text-xs text-surface-400 leading-relaxed">
            By creating an account, you agree to our <Link href="/terms" className="underline hover:text-surface-600">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-surface-600">Privacy Policy</Link>.
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
