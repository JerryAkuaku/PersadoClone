import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function GetCaseStudy() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("financial");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "Thanks for your interest! We'll send your case study shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Discover How Industry Leaders Succeed with Persado</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get access to in-depth case studies showcasing how top organizations use AI-powered language to transform their marketing results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Case Study Categories */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Featured Case Studies</h2>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 mb-8">
                    <TabsTrigger value="financial" className="text-base">Financial Services</TabsTrigger>
                    <TabsTrigger value="telecom" className="text-base">Telecommunications</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="financial" className="mt-2">
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <h3 className="text-xl font-semibold mb-4">Financial Services Success Stories</h3>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-[#FF0033] pl-4 py-1">
                          <h4 className="font-medium">Major U.S. Bank Increases Digital Engagement by 37%</h4>
                          <p className="text-gray-600 mt-1">How AI-generated messaging transformed customer communications across channels.</p>
                        </div>
                        
                        <div className="border-l-4 border-[#FF0033] pl-4 py-1">
                          <h4 className="font-medium">Credit Card Provider Boosts Application Completions by 25%</h4>
                          <p className="text-gray-600 mt-1">Personalized messaging drives higher conversion rates in customer acquisition.</p>
                        </div>
                        
                        <div className="border-l-4 border-[#FF0033] pl-4 py-1">
                          <h4 className="font-medium">Investment Firm Increases Digital Account Opening by 43%</h4>
                          <p className="text-gray-600 mt-1">AI-optimized messaging strategy drives significant growth for wealth management services.</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-medium mb-2">Key Results</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-[#FF0033] mr-2">✓</span>
                            <span>$2.5 billion in incremental revenue for financial services customers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#FF0033] mr-2">✓</span>
                            <span>8 of 10 largest U.S. banks trust Persado's AI</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#FF0033] mr-2">✓</span>
                            <span>120,000 campaigns and 150 billion customer interactions analyzed</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-20 h-10 flex items-center justify-center bg-gray-100 rounded">
                          <span className="font-semibold text-gray-500">LOGO</span>
                        </div>
                        <div>
                          <h4 className="font-medium">JPMorgan Chase</h4>
                          <p className="text-sm text-gray-500">Case Study Preview</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm italic mb-4">
                        "With Persado, we've been able to create meaningful, targeted messaging that resonates with our customers. The platform's AI capabilities have transformed our digital marketing approach."
                      </p>
                      <p className="text-sm text-gray-500 mb-2">— Marketing Executive, Global Financial Institution</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="telecom" className="mt-2">
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <h3 className="text-xl font-semibold mb-4">Telecommunications Success Stories</h3>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-[#FF0033] pl-4 py-1">
                          <h4 className="font-medium">Major Telecom Reduces Customer Churn by 18%</h4>
                          <p className="text-gray-600 mt-1">AI-powered retention messaging strategy revitalizes customer loyalty program.</p>
                        </div>
                        
                        <div className="border-l-4 border-[#FF0033] pl-4 py-1">
                          <h4 className="font-medium">Mobile Provider Increases Plan Upgrades by 32%</h4>
                          <p className="text-gray-600 mt-1">Personalized communications strategy drives premium service adoption.</p>
                        </div>
                        
                        <div className="border-l-4 border-[#FF0033] pl-4 py-1">
                          <h4 className="font-medium">Internet Service Provider Boosts Digital Engagement by 27%</h4>
                          <p className="text-gray-600 mt-1">AI-optimized messaging strategy increases customer satisfaction and service utilization.</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-medium mb-2">Key Results</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-[#FF0033] mr-2">✓</span>
                            <span>4 of 10 largest telecommunications brands rely on Persado</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#FF0033] mr-2">✓</span>
                            <span>6 billion customer interactions generated and analyzed</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#FF0033] mr-2">✓</span>
                            <span>27% average conversion rate lift for telecommunications clients</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-20 h-10 flex items-center justify-center bg-gray-100 rounded">
                          <span className="font-semibold text-gray-500">LOGO</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Vodafone</h4>
                          <p className="text-sm text-gray-500">Case Study Preview</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm italic mb-4">
                        "Persado has helped us connect with our customers in a more meaningful way. The AI-driven personalization has significantly improved our customer engagement metrics."
                      </p>
                      <p className="text-sm text-gray-500 mb-2">— Digital Marketing Director, Leading Telecom Company</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Request Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Request a Case Study</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select defaultValue="financial">
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial Services</SelectItem>
                        <SelectItem value="telecom">Telecommunications</SelectItem>
                        <SelectItem value="retail">Retail & E-commerce</SelectItem>
                        <SelectItem value="travel">Travel & Hospitality</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="caseStudyType">Case Study Type *</Label>
                    <Select defaultValue="industry">
                      <SelectTrigger>
                        <SelectValue placeholder="Select case study type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="industry">Industry-specific</SelectItem>
                        <SelectItem value="channel">Channel-specific (Email, Web, etc.)</SelectItem>
                        <SelectItem value="usecase">Use Case (Acquisition, Retention, etc.)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="comments">Additional Information</Label>
                    <Textarea
                      id="comments"
                      placeholder="Tell us about your specific areas of interest"
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="marketing" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="marketing"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to receive marketing communications from Persado
                      </label>
                      <p className="text-sm text-gray-500">
                        You can unsubscribe at any time. View our Privacy Policy.
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#FF0033] hover:bg-[#E00029] text-white"
                  >
                    Request Case Study
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}