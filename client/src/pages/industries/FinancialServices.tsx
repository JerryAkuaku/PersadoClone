import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle } from "lucide-react";

export default function FinancialServices() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Financial Services</h1>
              <p className="text-xl text-gray-700 mb-8">
                Transform your financial services marketing with AI-powered language that builds trust, simplifies complex products, and drives customer acquisition and engagement.
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
                8 of the 10 largest U.S. banks and 6 of the 7 top card issuers, trust Persado's
                AI to connect with and engage customers throughout their digital journeys
              </h2>
              <p className="text-xl font-medium text-gray-700 mb-8">
                Resulting in $2.5 Billion in incremental revenue for financial services customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/bankofamerica.com" alt="Bank of America" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/lendingclub.com" alt="LendingClub" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/discover.com" alt="Discover" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/americanexpress.com" alt="American Express" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/td.com" alt="TD Bank" className="max-w-full max-h-full" />
                </div>
                <div className="w-32 h-12 flex items-center justify-center">
                  <img src="https://logo.clearbit.com/huntington.com" alt="Huntington" className="max-w-full max-h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Personalization Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Personalize customer journeys with curated experiences that drive results</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Persado has generated and analyzed performance data from 120,000 campaigns and 150
                billion customer interactions for Financial Services alone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Value by Use Case – Sample Bank Customer in 2023</h3>
                
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">New Cards</span>
                      <span className="font-medium">$50M</span>
                    </div>
                    <div className="h-6 bg-purple-500 rounded-sm w-full"></div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Account Upgrades / Upsells</span>
                      <span className="font-medium">$15M</span>
                    </div>
                    <div className="h-6 bg-teal-500 rounded-sm w-3/5"></div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Awards Points / Redemption</span>
                      <span className="font-medium">$5M</span>
                    </div>
                    <div className="h-6 bg-orange-400 rounded-sm w-1/5"></div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Increased Engagement / Usage</span>
                      <span className="font-medium">$4.5M</span>
                    </div>
                    <div className="h-6 bg-yellow-400 rounded-sm w-[18%]"></div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Spending Increase</span>
                      <span className="font-medium">$2M</span>
                    </div>
                    <div className="h-6 bg-green-500 rounded-sm w-[8%]"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">New Cards</h3>
                <div className="flex justify-center mb-8">
                  <div className="w-32 h-32 flex items-center justify-center bg-yellow-400 rounded-lg">
                    <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="2"/>
                      <path d="M22 10H2" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <p className="text-center font-medium">
                  Top credit card issuer increased new card acquisition by 35% using Persado's AI-generated marketing language
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
                <h3 className="text-xl font-medium mb-3">Regulatory Compliance</h3>
                <p className="text-gray-700">
                  Navigate complex regulatory requirements while maintaining effective marketing communications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Customer Trust</h3>
                <p className="text-gray-700">
                  Build and maintain trust with customers through transparent, accurate communications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Product Complexity</h3>
                <p className="text-gray-700">
                  Communicate complex financial products and services in clear, accessible language.
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
                  <h3 className="text-2xl font-medium mb-4">Compliant Content Generation</h3>
                  <p className="text-gray-700 mb-6">
                    AI-generated marketing language with built-in compliance guardrails for banking, insurance, investment, and wealth management offerings. Our platform ensures all content adheres to industry regulations while maximizing engagement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>FINRA, SEC, and CFPB compliant messaging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Automatic disclosure and disclaimer management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Auditable content generation history</span>
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
                      Major financial institution improved compliance workflow efficiency by 40% while increasing conversion rates by 22%
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Customer Acquisition</h3>
                  <p className="text-gray-700 mb-6">
                    Optimize acquisition campaigns across channels with language that resonates with different customer segments. Our platform identifies the emotional and motivational drivers that influence financial decisions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>20-30% increase in conversion rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Segment-specific messaging optimization</span>
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
                      Leading credit card provider increased application completions by 25% and new customer acquisition by 18%
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Customer Engagement</h3>
                  <p className="text-gray-700 mb-6">
                    Build deeper relationships through personalized communications that drive engagement with digital banking, mobile apps, and financial planning tools. Our AI adapts messaging to individual customer preferences and behaviors.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>15-25% increase in digital engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Personalized financial guidance messaging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF0033] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Improved customer retention metrics</span>
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
                      Global banking leader increased mobile app engagement by 37% and digital service adoption by 22%
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
            <h2 className="text-3xl font-bold mb-6">Ready to transform your financial marketing?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Join the leading financial institutions using Persado to drive measurable results through AI-optimized marketing language.
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