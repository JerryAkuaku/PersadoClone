import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle, Target } from "lucide-react";

export default function Telecommunications() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Telecommunications</h1>
              <p className="text-xl text-gray-700 mb-8">
                Maximize customer acquisition, reduce churn, and drive brand loyalty with AI-powered messaging that resonates across all digital touchpoints.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-[#FF0033] text-[#FF0033]">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner Section */}
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                4 of the 10 largest Telecommunications brands rely on Persado to
                connect with and engage customers throughout their digital journeys
              </h2>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/vodafone.com" alt="Vodafone" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/comcast.com" alt="Comcast" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/sky.com" alt="Sky" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/orange.com" alt="Orange" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/freedom.com" alt="Freedom" className="max-w-full max-h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Rate Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">6 billion customer interactions generated and analyzed driving 27% average conversion rate lift for Telecommunications</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Leverage Persado's experience and knowledge base to unlock new levers of growth
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-center mb-8">Use cases for Telecommunications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-orange-400 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 20L12 10L22 20" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10L12 0L22 10" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Awareness & Consideration</h4>
                <p className="text-gray-600">
                  Optimize brand messaging to resonate with target segments and increase awareness metrics
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-yellow-400 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="#FBBF24" strokeWidth="2"/>
                    <path d="M12 7V12L15 15" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Acquisition</h4>
                <p className="text-gray-600">
                  Drive new customer acquisition with personalized messaging that converts
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-blue-400 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="#60A5FA" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 10" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Onboarding</h4>
                <p className="text-gray-600">
                  Increase activation and initial usage with tailored guidance and educational content
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-purple-400 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12V22H4V12" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7H2V12H22V7Z" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7H16.5C17.8807 7 19 5.88071 19 4.5V4.5C19 3.11929 17.8807 2 16.5 2H7.5C6.11929 2 5 3.11929 5 4.5V4.5C5 5.88071 6.11929 7 7.5 7H12Z" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Upsell & Cross-sell</h4>
                <p className="text-gray-600">
                  Increase ARPU with targeted offers for upgrades, add-ons and premium services
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-green-400 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Engagement & Usage</h4>
                <p className="text-gray-600">
                  Promote service utilization and digital channel adoption with targeted messaging
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-red-400 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8401 5.10999C20.3294 4.599 19.7229 4.19364 19.0555 3.92708C18.388 3.66051 17.6726 3.53817 16.9501 3.56999C16.2276 3.54459 15.5086 3.67347 14.8382 3.94577C14.1678 4.21806 13.5587 4.62911 13.0451 5.15999C12.5314 4.62911 11.9224 4.21806 11.2519 3.94577C10.5815 3.67347 9.86255 3.54459 9.14006 3.56999C8.41749 3.53817 7.70211 3.66051 7.03463 3.92708C6.36714 4.19364 5.7607 4.599 5.24999 5.10999C4.14293 6.22097 3.51353 7.715 3.51353 9.27C3.51353 10.825 4.14293 12.319 5.24999 13.43L12 20.17L18.75 13.43C19.857 12.319 20.4864 10.825 20.4864 9.27C20.4864 7.715 19.857 6.22097 18.75 5.10999H20.8401Z" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Retention</h4>
                <p className="text-gray-600">
                  Reduce churn with proactive, personalized communications that build loyalty
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Challenges Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10">Industry Challenges</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">High Customer Churn</h3>
                <p className="text-gray-700">
                  Combat industry-high customer turnover rates with personalized communications that build loyalty and increase retention.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Service Commoditization</h3>
                <p className="text-gray-700">
                  Differentiate your brand in a crowded market through unique, emotionally resonant messaging that builds deeper customer connections.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Digital Transformation</h3>
                <p className="text-gray-700">
                  Drive adoption of digital channels and self-service capabilities with messaging that increases customer engagement and reduces costs.
                </p>
              </div>
            </div>
          </div>
        </section>
          
        {/* Persado Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10">Persado Solutions</h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Churn Reduction</h3>
                  <p className="text-gray-700 mb-6">
                    Keep your valuable customers with AI-powered retention messaging that identifies at-risk subscribers and delivers the right message at the right time to prevent disconnections.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>15-25% reduction in voluntary churn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Retention offer optimization across segments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Win-back campaign performance improvement</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="flex justify-center mb-6">
                    <Target className="h-16 w-16 text-[#FF0033]" />
                  </div>
                  <h4 className="text-xl font-medium text-center mb-4">Result Highlights</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-center font-medium">
                      Leading telecommunications provider reduced customer churn by 18% with AI-optimized customer communications
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Customer Acquisition</h3>
                  <p className="text-gray-700 mb-6">
                    Attract new customers with personalized messaging that highlights your unique service value propositions. Our AI identifies the most effective language patterns that drive conversions for different audience segments.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>20-30% increase in conversion rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Improved cost per acquisition metrics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cross-channel campaign consistency</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="flex justify-center mb-6">
                    <BarChart3 className="h-16 w-16 text-[#FF0033]" />
                  </div>
                  <h4 className="text-xl font-medium text-center mb-4">Result Highlights</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-center font-medium">
                      Global telecommunications company increased new customer acquisition by 32% for premium service plans
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Digital Engagement</h3>
                  <p className="text-gray-700 mb-6">
                    Drive adoption of self-service channels and digital experiences with messaging that resonates with different customer segments. Our platform adapts language based on behavioral insights to increase app usage and online engagement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>25-35% increase in app engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Higher digital self-service adoption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reduced call center volume</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="flex justify-center mb-6">
                    <BarChart3 className="h-16 w-16 text-[#FF0033]" />
                  </div>
                  <h4 className="text-xl font-medium text-center mb-4">Result Highlights</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-center font-medium">
                      Major mobile provider increased digital channel usage by 27% and reduced operational costs by 15%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your telecommunications marketing?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Join the leading telecommunications providers using Persado to drive measurable results through AI-optimized marketing language.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white">
                Request Demo
              </Button>
              <Button variant="outline" className="border-[#FF0033] text-[#FF0033]">
                Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}