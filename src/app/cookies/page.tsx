import { ContentLayout } from "@/components/content";
import { generateAlternateLanguages } from "@/lib/seo";

export const metadata = {
  title: "Cookie Policy | AmanaFlow",
  description: "Learn how AmanaFlow uses cookies and similar technologies to improve your experience on our platform.",
  alternates: {
    canonical: "/cookies",
    languages: generateAlternateLanguages("/cookies"),
  }
};

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "what-are-cookies", title: "2. What are Cookies?" },
  { id: "how-we-use", title: "3. How We Use Cookies" },
  { id: "your-choices", title: "4. Your Choices" },
  { id: "updates", title: "5. Policy Updates" }
];

export default function CookiesPage() {
  return (
    <ContentLayout
      title="Cookie Policy"
      subtitle="We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic."
      lastUpdated="March 24, 2026"
      sections={sections}
    >
      <section id="introduction">
        <h2 id="introduction">1. Introduction</h2>
        <p>This Cookie Policy explains how AmanaFlow ("we", "us", or "our") uses cookies and similar technologies when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
      </section>

      <section id="what-are-cookies">
        <h2 id="what-are-cookies">2. What are Cookies?</h2>
        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      </section>

      <section id="how-we-use">
        <h2 id="how-we-use">3. How We Use Cookies</h2>
        <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies.</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., login, security).</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.</li>
        </ul>
      </section>

      <section id="your-choices">
        <h2 id="your-choices">4. Your Choices</h2>
        <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to refuse cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
      </section>

      <section id="updates">
        <h2 id="updates">5. Policy Updates</h2>
        <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
      </section>
    </ContentLayout>
  );
}
