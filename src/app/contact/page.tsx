import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Mail, LifeBuoy, CreditCard, MessageSquare, MapPin, Phone } from "lucide-react";

import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Support & Sales | 24/7 Hosting Support | AmanaFlow",
  description: "Get immediate help from our L3 engineering team. Contact AmanaFlow for sales, technical support, free migrations, and enterprise infrastructure consultation.",
  alternates: {
    canonical: "/contact",
    languages: generateAlternateLanguages("/contact"),
  }
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-surface-50 dark:bg-surface-950 border-b border-surface-200 dark:border-surface-800 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-surface-200/50 dark:bg-grid-surface-800/50 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <Badge variant="primary" className="mb-6">We&apos;re Here to Help</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 dark:text-white lg:text-5xl mb-6">
            Contact Our Expert Team
          </h1>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Whether you&apos;re looking for enterprise solutions, facing technical difficulties, or migrating from another host—AmanaFlow&apos;s engineers are ready 24/7.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white dark:bg-surface-950 -mt-8 relative z-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:border-primary-500 transition-colors">
            <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-bold text-xl text-surface-900 dark:text-white mb-2">Sales & Pre-Sales</h3>
            <p className="text-surface-600 dark:text-surface-400 text-sm mb-6">Need advice on which server fits your traffic? Talk to our architects.</p>
            <Button variant="outline" className="w-full">Chat with Sales</Button>
          </Card>
          
          <Card className="p-8 text-center hover:border-success-500 transition-colors border-surface-200 dark:border-surface-800 shadow-premium">
            <div className="w-14 h-14 bg-success-50 dark:bg-success-900/40 text-success-600 dark:text-success-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LifeBuoy size={24} />
            </div>
            <h3 className="font-bold text-xl text-surface-900 dark:text-white mb-2">Technical Support</h3>
            <p className="text-surface-600 dark:text-surface-400 text-sm mb-6">For existing clients facing server issues or requiring migrations.</p>
            <Button variant="primary" className="w-full bg-success-600 hover:bg-success-700 text-white border-0">Open a Ticket</Button>
          </Card>
          
          <Card className="p-8 text-center hover:border-primary-500 transition-colors">
            <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CreditCard size={24} />
            </div>
            <h3 className="font-bold text-xl text-surface-900 dark:text-white mb-2">Billing Inquiries</h3>
            <p className="text-surface-600 dark:text-surface-400 text-sm mb-6">Questions regarding invoices, payment methods, or renewals.</p>
            <Button variant="outline" className="w-full">Contact Billing</Button>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white dark:bg-surface-950 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <SectionHeader title="Send us a message" description="Fill out the form below and one of our specialists will get back to you within 15 minutes." align="left" />
            <form className="space-y-6 mt-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-900 dark:text-white">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-900 dark:text-white">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-surface-900 dark:text-white">Email Address</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-surface-900 dark:text-white">Subject</label>
                <Input placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-surface-900 dark:text-white">Message</label>
                <textarea 
                  className="flex min-h-[150px] w-full rounded-xl border border-surface-200 bg-white px-3 py-2 text-sm text-surface-900 shadow-sm transition-colors placeholder:text-surface-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-surface-800 dark:bg-surface-950 dark:text-white dark:placeholder:text-surface-500"
                  placeholder="Include as much detail as possible..."
                />
              </div>
              <Button variant="primary" size="lg" className="w-full sm:w-auto h-12 px-8">Send Message</Button>
            </form>
          </div>
          
          <div className="bg-surface-50 dark:bg-surface-900/50 rounded-3xl p-8 lg:p-12 border border-surface-200 dark:border-surface-800">
            <h3 className="font-bold text-2xl text-surface-900 dark:text-white mb-8">Corporate Headquarters</h3>
            
            <div className="space-y-8">
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white dark:bg-surface-800 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-600 dark:text-primary-400 shadow-sm border border-surface-100 dark:border-surface-700">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-surface-900 dark:text-white text-lg">Global Office</h4>
                   <p className="text-surface-600 dark:text-surface-400 mt-1">123 Cloud Avenue, Tech District<br/>Dhaka, Bangladesh 1212</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white dark:bg-surface-800 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-600 dark:text-primary-400 shadow-sm border border-surface-100 dark:border-surface-700">
                   <Mail size={20} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-surface-900 dark:text-white text-lg">Direct Email</h4>
                   <p className="text-surface-600 dark:text-surface-400 mt-1">support@amanaflow.cloud<br/>sales@amanaflow.cloud</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white dark:bg-surface-800 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-600 dark:text-primary-400 shadow-sm border border-surface-100 dark:border-surface-700">
                   <Phone size={20} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-surface-900 dark:text-white text-lg">Phone Network</h4>
                   <p className="text-surface-600 dark:text-surface-400 mt-1">Toll-Free: +1 (800) 123-4567<br/>Local: +880 1234 567890</p>
                 </div>
               </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-10 h-48 rounded-2xl bg-surface-200 dark:bg-surface-800 overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793444!2d90.33728807974395!3d23.780777744474776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1711200000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale dark:invert-[90%] dark:hue-rotate-180 dark:contrast-100"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* ─── FAQS ─── */}
      <SectionWrapper paddingY="xl" className="bg-surface-50 dark:bg-surface-950 border-t border-surface-200 dark:border-surface-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Support FAQs" align="left" />
          <div className="grid gap-4 mt-8">
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                What is your average ticket response time?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">Our L3 engineering desk maintains an average first-response time of 15 minutes or less, 24 hours a day, 7 days a week, regardless of holidays.</p>
            </details>
            <details className="group bg-white dark:bg-surface-900 p-6 rounded-2xl border border-surface-200 dark:border-surface-800 open:bg-surface-50 dark:open:bg-surface-800 transition-colors">
              <summary className="font-bold text-lg cursor-pointer text-surface-900 dark:text-white list-none flex justify-between">
                Can I request an emergency callback?
                <span className="text-primary-500 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-surface-600 dark:text-surface-400">Yes! For critical infrastructure outages on Enterprise VPS or Bare Metal servers, you can trigger an emergency P1 escalation ticket that immediately pages our on-call sysadmins.</p>
            </details>
          </div>
        </div>
      </SectionWrapper>

    </>
  );
}
