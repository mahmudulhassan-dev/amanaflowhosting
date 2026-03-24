import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Acceptable Use Policy | AmanaFlow",
  description: "Read AmanaFlow's Acceptable Use Policy (AUP) to understand the standards for using our cloud and hosting services.",
  alternates: {
    canonical: "/aup",
    languages: generateAlternateLanguages("/aup"),
  }
};

const sections = [
  { id: "purpose", title: "1. Purpose" },
  { id: "illegal-use", title: "2. Illegal Use" },
  { id: "security", title: "3. System & Network Security" },
  { id: "resource-usage", title: "4. Resource Usage" },
  { id: "enforcement", title: "5. Enforcement" }
];

export default function AUPPage() {
  return (
    <ContentLayout
      title="Acceptable Use Policy"
      subtitle="This AUP outlines the acceptable use of AmanaFlow services by our customers and users."
      lastUpdated="March 24, 2026"
      sections={sections}
    >
      <section id="purpose">
        <h2>1. Purpose</h2>
        <p>The purpose of this Acceptable Use Policy ("AUP") is to define the principles and standards that govern the use of our infrastructure, services, and network. Our goal is to ensure a secure, reliable, and high-performance environment for all customers.</p>
      </section>

      <section id="illegal-use">
        <h2>2. Illegal Use</h2>
        <p>AmanaFlow services may be used only for lawful purposes. Transmission, distribution, or storage of any material in violation of any applicable law or regulation is prohibited. This includes, without limitation:</p>
        <ul>
          <li>Intellectual property infringement (unauthorized copies of software, music, or films).</li>
          <li>Material that is obscene, defamatory, or constitutes an illegal threat.</li>
          <li>Material protected by trade secrets without authorization.</li>
        </ul>
      </section>

      <section id="security">
        <h2>3. System & Network Security</h2>
        <p>Violations of system or network security are prohibited and may result in criminal and civil liability. Examples include, but are not limited to:</p>
        <ul>
          <li>Unauthorized access to or use of data, systems, or networks.</li>
          <li>Interference with service to any user, host, or network (e.g., DDoS attacks).</li>
          <li>Forging of any TCP-IP packet header or any part of the header information in an email.</li>
        </ul>
      </section>

      <section id="resource-usage">
        <h2>4. Resource Usage</h2>
        <p>Users must not engage in activities that impose an unreasonable or disproportionately large load on our infrastructure. We reserve the right to throttle or suspend accounts that consume excessive CPU, memory, or bandwidth to the detriment of other users.</p>
      </section>

      <section id="enforcement">
        <h2>5. Enforcement</h2>
        <p>AmanaFlow reserves the right to investigate any violation of this AUP. We may take any action we deem appropriate, including but not limited to, warning the user, suspending the account, or terminating the service without notice or refund.</p>
      </section>
    </ContentLayout>
  );
}
