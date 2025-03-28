import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GeneratePredict() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Generate & Predict</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">
            Persado's Generate & Predict capability combines AI-powered content generation with predictive performance analytics, enabling marketers to create high-performing content with confidence.
          </p>
          
          <div className="my-12">
            <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">AI Content Generation</h3>
                <p>
                  Generate brand-aligned marketing messages across channels including email, social media, web, SMS, and display. Our AI understands your brand voice and creates content that resonates with your audience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Performance Prediction</h3>
                <p>
                  Move beyond guesswork with AI that accurately predicts how your content will perform. Our models analyze billions of previous interactions to forecast engagement metrics before you deploy.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Multi-Channel Optimization</h3>
                <p>
                  Automatically adapt content for different channels while maintaining message consistency. Our AI understands the nuances of each channel and optimizes accordingly.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Actionable Insights</h3>
                <p>
                  Gain clear visibility into why certain content performs better than others with detailed linguistic analysis that identifies the specific elements driving engagement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="my-12">
            <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
            <ol className="space-y-6">
              <li className="p-4 bg-white border rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">1. Input your campaign objectives</h3>
                <p>Define your target audience, desired outcomes, and brand guidelines.</p>
              </li>
              <li className="p-4 bg-white border rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">2. AI generates messaging variations</h3>
                <p>Our platform creates multiple versions of your content, each designed to appeal to different audience motivations.</p>
              </li>
              <li className="p-4 bg-white border rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">3. Predictive models forecast performance</h3>
                <p>Each message variant is analyzed and scored based on predicted engagement metrics.</p>
              </li>
              <li className="p-4 bg-white border rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">4. Review and deploy with confidence</h3>
                <p>Select the highest-performing messages or further refine based on AI recommendations.</p>
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}