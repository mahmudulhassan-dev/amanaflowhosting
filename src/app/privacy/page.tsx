import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Privacy Policy | AmanaFlow",
  description: "Learn how AmanaFlow collects, uses, and protects your personal data in accordance with global privacy standards.",
  alternates: {
    canonical: "/privacy",
    languages: generateAlternateLanguages("/privacy"),
  }
};

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "data-collection", title: "2. Data We Collect" },
  { id: "data-usage", title: "3. How We Use Data" },
  { id: "security", title: "4. Data Security" },
  { id: "rights", title: "5. Your Rights" }
];

export default function PrivacyPage() {
  return (
    <ContentLayout
      title="Privacy Policy"
      subtitle="Your privacy is critically important to us. This policy explains how we handle your personal information."
      lastUpdated="March 24, 2026"
      sections={sections}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>Welcome to AmanaFlow. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
      </section>

      <section id="data-collection">
        <h2>2. The Data We Collect</h2>
        <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you:</p>
        <ul>
          <li><strong>Identity Data:</strong> includes first name, last name, username.</li>
          <li><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes IP address, login data, browser type and version.</li>
          <li><strong>Usage Data:</strong> includes info about how you use our website and services.</li>
        </ul>
      </section>

      <section id="data-usage">
        <h2>3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>To provide and maintain our Service.</li>
          <li>To notify you about changes to our Service.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our Service.</li>
        </ul>
      </section>

      <section id="security">
        <h2>4. Data Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We use enterprise-grade encryption for all data at rest and in transit.</p>
      </section>

      <section id="rights">
        <h2>5. Your Rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.</p>
      </section>
    </ContentLayout>
  );
}
