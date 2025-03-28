import { useState } from "react";
import { cn } from "@/lib/utils";
import TabNavigation from "@/components/ui/TabNavigation";
import CertificationIcons from "@/components/ui/CertificationIcons";

const tabContent = [
  {
    id: "generate-predict",
    title: "Generate & Predict",
    description: "Securely generate your message variations. Our AI predicts which ones will perform best based on your audience and channels.",
    imageUrl: "",
    platforms: ["Web", "Mobile", "Email"],
  },
  {
    id: "generate-experiment",
    title: "Generate & Experiment",
    description: "Test multiple message variations across channels to determine which performs best with your target audience.",
    imageUrl: "",
    platforms: ["Web", "Mobile", "Email"],
  },
  {
    id: "generate-personalize",
    title: "Generate & Personalize",
    description: "Securely achieve the pinnacle of personalization, in real-time – orchestrate your customer data with Persado's emotionally engaging content.",
    imageUrl: "",
    platforms: ["Web", "Mobile", "Email"],
  },
  {
    id: "comply",
    title: "Comply",
    description: "Ensure all your AI-generated marketing content is compliant with industry regulations and brand guidelines.",
    imageUrl: "",
    platforms: ["Web", "Mobile", "Email"],
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "Gain valuable insights into messaging performance and customer engagement patterns across all channels.",
    imageUrl: "",
    platforms: ["Web", "Mobile", "Email"],
  },
];

export default function CertificationTabs() {
  const [activeTab, setActiveTab] = useState("generate-personalize");
  
  const activeContent = tabContent.find(item => item.id === activeTab);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The only full-stack GenAI platform that generates and selects the precise message elements to drive behavior and growth for the world's largest banks and credit card issuers
          </h2>
          
          <div className="mt-8">
            <CertificationIcons />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <TabNavigation 
            tabs={tabContent.map(t => t.title)} 
            activeTab={activeContent?.title || ""} 
            onTabChange={(tab) => {
              const content = tabContent.find(t => t.title === tab);
              if (content) {
                setActiveTab(content.id);
              }
            }}
          />
          
          {activeContent && (
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">{activeContent.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeContent.description}
                </p>
                
                <div className="pt-8">
                  <p className="mb-4 text-gray-600 font-medium">Automated deployment to any platform:</p>
                  <div className="flex space-x-8">
                    {activeContent.platforms.map((platform) => (
                      <div key={platform} className="text-center">
                        <div className={cn(
                          "w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-lg",
                          platform === "Web" ? "bg-blue-100" : 
                          platform === "Mobile" ? "bg-yellow-100" : 
                          "bg-red-100"
                        )}>
                          {platform === "Web" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                              <line x1="8" y1="21" x2="16" y2="21"></line>
                              <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                          )}
                          {platform === "Mobile" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                              <line x1="12" y1="18" x2="12.01" y2="18"></line>
                            </svg>
                          )}
                          {platform === "Email" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 h-[400px] flex items-center justify-center">
                {activeTab === "generate-personalize" && (
                  <div className="relative w-full h-full overflow-hidden rounded-md bg-white shadow-md p-4">
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">Encourage visitors to continue an application</h4>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <div className="relative border border-gray-200 rounded-lg p-2 bg-white">
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div className="ml-2 flex-1">
                            <div className="text-sm font-medium">Are you sure?</div>
                            <p className="text-xs text-gray-500">Don't forget! You will lose the data you've already entered if you leave this page.</p>
                            <div className="mt-2 flex justify-center">
                              <div className="bg-[#FF0033] text-white text-xs px-3 py-1 rounded-full">Continue</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative border border-gray-200 rounded-lg p-2 bg-white">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <div>Step 2 of 3</div>
                          <div className="text-gray-400">1 min left</div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-5 bg-gray-100 rounded w-full"></div>
                          <div className="h-5 bg-gray-100 rounded w-full"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-8 bg-gray-200 rounded"></div>
                            <div className="h-8 bg-[#FF0033] rounded text-white flex items-center justify-center text-xs">Continue</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-10 w-px bg-gray-300 border-l border-dashed border-gray-300"></div>
                        <svg className="w-full" height="50" xmlns="http://www.w3.org/2000/svg">
                          <line x1="50%" y1="0" x2="25%" y2="100%" stroke="#FF0033" strokeWidth="2" />
                          <line x1="50%" y1="0" x2="75%" y2="100%" stroke="#FF0033" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="relative border border-gray-200 rounded-lg p-2 bg-white">
                        <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                        <div className="h-20 bg-gray-100 rounded w-full"></div>
                      </div>
                      <div className="relative border border-gray-200 rounded-lg p-2 bg-white">
                        <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                        <div className="h-20 bg-gray-100 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab !== "generate-personalize" && (
                  <div className="text-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Example visual for {activeContent.title} feature</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}