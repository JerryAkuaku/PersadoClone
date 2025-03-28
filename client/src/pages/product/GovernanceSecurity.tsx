import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GovernanceSecurity() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Governance, Security & Privacy</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">
            Enterprise-grade security, governance, and privacy protections are built into every aspect of the Persado platform, ensuring your data and AI-generated content meet the highest standards.
          </p>
          
          <div className="my-12 space-y-10">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Security Framework</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">Data Encryption</h3>
                  <p>
                    All data is encrypted in transit and at rest using industry-standard encryption protocols. We implement AES-256 encryption for data storage and TLS 1.3 for data transmission.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Authentication & Access</h3>
                  <p>
                    Multi-factor authentication, role-based access controls, and detailed audit logs ensure only authorized personnel can access your data and content.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6">AI Governance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">Responsible AI</h3>
                  <p>
                    Our governance framework ensures AI models adhere to ethical standards, with built-in bias detection and mitigation throughout the content generation process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Content Safety</h3>
                  <p>
                    Automatic screening against harmful or inappropriate content, with customizable brand safety parameters to ensure all generated content aligns with your brand guidelines.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6">Privacy Compliance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">Global Regulations</h3>
                  <p>
                    Compliant with GDPR, CCPA, HIPAA, and other regional privacy regulations, with configurable controls to meet specific industry or geographic requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Data Sovereignty</h3>
                  <p>
                    Optional data residency configurations allow you to specify where your data is stored and processed, helping you meet local regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}