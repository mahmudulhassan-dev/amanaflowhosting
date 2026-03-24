import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Topbar } from "@/components/layout/Topbar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { ChatBot } from "@/components/ai";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getCanonicalUrl, isProductionEnv } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AmanaFlow",
    default: "AmanaFlow | Premium Cloud Infrastructure & Enterprise VPS",
  },
  description: "Deploy blazing-fast NVMe servers in seconds. Enjoy 99.9% uptime, DDoS protection, and expert L3 support. Scale your business today.",
  openGraph: {
    title: "AmanaFlow Cloud",
    description: "Premium Digital Infrastructure for Growing Businesses.",
    url: getCanonicalUrl(),
    siteName: "AmanaFlow",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: isProductionEnv(),
    follow: isProductionEnv(),
    googleBot: {
      index: isProductionEnv(),
      follow: isProductionEnv(),
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AmanaFlow",
    "url": getCanonicalUrl(),
    "logo": `${getCanonicalUrl()}/favicon.ico`,
    "sameAs": [
      "https://facebook.com/amanaflow",
      "https://twitter.com/amanaflow",
      "https://linkedin.com/company/amanaflow"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-000-0000",
      "contactType": "customer support",
      "areaServed": ["US", "BD", "Global"],
      "availableLanguage": ["English", "Bengali"]
    }
  };

  return (
    <html lang={locale} className={`scroll-smooth h-full ${inter.variable} ${jetbrainsMono.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-surface-900 dark:bg-surface-950 dark:text-surface-50" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CurrencyProvider>
              <Topbar />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <ChatBot />
            </CurrencyProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
