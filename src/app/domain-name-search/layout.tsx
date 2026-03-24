import { Metadata } from "next";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Register Your Perfect Domain Name | Lowest Prices | AmanaFlow",
  description: "Search and buy cheap domain names instantly. Enjoy free WHOIS privacy protection, easy DNS management, and 24/7 expert support in Bangladesh.",
  alternates: {
    canonical: "/domain-name-search",
    languages: generateAlternateLanguages("/domain-name-search"),
  }
};

export default function DomainSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
