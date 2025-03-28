import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function FullStackGenAI() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Full Stack GenAI</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">
            Persado's Full Stack GenAI solution provides end-to-end AI capabilities for marketing language generation, optimization, and personalization at scale.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Enterprise-Grade Generation</h2>
              <p>
                Leverage advanced AI models specifically tuned for marketing content creation. Generate high-converting copy for any channel or audience, with built-in brand safety and compliance guardrails.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Predictive Optimization</h2>
              <p>
                Move beyond traditional A/B testing with AI that can predict performance before deployment. Our models learn from billions of messaging interactions to recommend language that resonates with your audience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Personalization Engine</h2>
              <p>
                Create individualized messaging experiences at scale. Our AI understands the emotional and motivational triggers that drive engagement, enabling truly personalized communication.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Comprehensive Analytics</h2>
              <p>
                Gain deep insights into message performance with detailed analytics. Understand exactly which language elements drive results and why, with full transparency into the AI's decision-making.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}