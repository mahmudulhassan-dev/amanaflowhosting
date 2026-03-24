import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Terms of Service | AmanaFlow",
  description: "Read AmanaFlow's Terms of Service to understand your rights and responsibilities when using our cloud infrastructure and hosting platform.",
  alternates: {
    canonical: "/terms",
    languages: generateAlternateLanguages("/terms"),
  }
};

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "description", title: "2. Description of Service" },
  { id: "registration", title: "3. Registration Obligations" },
  { id: "billing", title: "4. Billing & Payments" },
  { id: "termination", title: "5. Termination" }
];

export default function TermsPage() {
  return (
    <ContentLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using AmanaFlow services."
      lastUpdated="March 24, 2026"
      sections={sections}
    >
      <section id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using any part of the AmanaFlow services, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
      </section>

      <section id="description">
        <h2>2. Description of Service</h2>
        <p>AmanaFlow provides a range of hosting services, including but not limited to, shared hosting, WordPress hosting, VPS, and bare-metal dedicated servers. We reserve the right to modify or discontinue the service with or without notice to you.</p>
      </section>

      <section id="registration">
        <h2>3. Registration Obligations</h2>
        <p>In consideration of your use of the Service, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of any applicable jurisdiction.</p>
      </section>

      <section id="billing">
        <h2>4. Billing & Payments</h2>
        <p>All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities. You are responsible for payment of all such taxes, levies, or duties. Subscription services will be billed in advance on a recurring basis.</p>
      </section>

      <section id="termination">
        <h2>5. Termination</h2>
        <p>AmanaFlow, in its sole discretion, has the right to suspend or terminate your account and refuse any and all current or future use of the Service for any reason at any time.</p>
      </section>
    </ContentLayout>
  );
}
