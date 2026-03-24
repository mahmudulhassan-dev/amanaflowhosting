import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Service Level Agreement (SLA) | AmanaFlow",
  description: "AmanaFlow's Service Level Agreement (SLA) guarantees 99.9% uptime and reliable performance for your mission-critical applications.",
  alternates: {
    canonical: "/sla",
    languages: generateAlternateLanguages("/sla"),
  }
};

const sections = [
  { id: "uptime-guarantee", title: "1. Uptime Guarantee" },
  { id: "maintenance", title: "2. Maintenance" },
  { id: "remedies", title: "3. Service Credits" },
  { id: "exceptions", title: "4. Exceptions" }
];

export default function SLAPage() {
  return (
    <ContentLayout
      title="Service Level Agreement"
      subtitle="We are committed to providing enterprise-grade reliability and performance."
      lastUpdated="March 24, 2026"
      sections={sections}
    >
      <section id="uptime-guarantee">
        <h2>1. Uptime Guarantee</h2>
        <p>AmanaFlow guarantees that our network and servers will be available 99.9% of the time in a given month, excluding scheduled maintenance. If we fail to meet this guarantee, customers may be eligible for service credits.</p>
      </section>

      <section id="maintenance">
        <h2>2. Maintenance</h2>
        <p>AmanaFlow will perform scheduled maintenance to ensure the security, stability, and performance of our infrastructure. We will provide at least 24 hours' notice for any maintenance that may impact service availability.</p>
      </section>

      <section id="remedies">
        <h2>3. Service Credits</h2>
        <p>In the event of an unscheduled outage, service credits will be calculated as a percentage of the customer's monthly recurring fee for the affected service.</p>
        <table>
          <thead>
            <tr>
              <th>Monthly Uptime</th>
              <th>Service Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt; 99.9% but &gt; 99.0%</td>
              <td>10% Credit</td>
            </tr>
            <tr>
              <td>&lt; 99.0% but &gt; 95.0%</td>
              <td>25% Credit</td>
            </tr>
            <tr>
              <td>&lt; 95.0%</td>
              <td>50% Credit</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="exceptions">
        <h2>4. Exceptions</h2>
        <p>This SLA does not apply to interruptions caused by: (a) customer's own hardware or software; (b) circumstances beyond AmanaFlow's reasonable control (Force Majeure); (c) customer's failure to follow our Acceptable Use Policy; or (d) third-party network failures.</p>
      </section>
    </ContentLayout>
  );
}
