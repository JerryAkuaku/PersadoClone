import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Integrations() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Integrations</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">
            Persado seamlessly integrates with your existing marketing technology stack, enabling you to enhance your current workflows with AI-powered content generation and optimization.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Marketing Automation</h2>
              <p>
                Direct integration with leading marketing automation platforms including Salesforce Marketing Cloud, Adobe Experience Cloud, Marketo, and HubSpot.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">CMS Platforms</h2>
              <p>
                Enhance your website and landing page content with integrations for WordPress, Drupal, Sitecore, and other content management systems.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">E-commerce</h2>
              <p>
                Optimize product descriptions, category pages, and promotional content with integrations for Shopify, Magento, WooCommerce, and other e-commerce platforms.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
              <p>
                Connect performance data with Google Analytics, Adobe Analytics, and other analytics platforms to measure the impact of AI-optimized content.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Customer Data Platforms</h2>
              <p>
                Leverage customer data for personalized messaging with integrations for Segment, mParticle, and other customer data platforms.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">API Access</h2>
              <p>
                Custom integration options via our robust API for enterprises with unique technology stacks or proprietary systems.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}