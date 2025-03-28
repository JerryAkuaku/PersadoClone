import { useState } from "react";
import CertificationIcons from "@/components/ui/CertificationIcons";
import TabNavigation from "@/components/ui/TabNavigation";
import ComplianceTab from "@/components/ui/ComplianceTab";

const tabs = [
  "Generate & Predict",
  "Generate & Experiment",
  "Generate & Personalize",
  "Comply",
  "Analyze"
];

export default function ComplianceSection() {
  const [activeTab, setActiveTab] = useState("Comply");

  return (
    <section className="py-16 md:py-20 bg-[#F0F5F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            10+ years of data to maximize outcomes, transform with insights – <span className="text-[#FF0033]">See it in action</span>
          </h2>
          <p className="text-xl font-medium mb-10">Elegant, impactful, and built to scale responsibly</p>
          
          <CertificationIcons />
        </div>
        
        <TabNavigation 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        {activeTab === "Comply" && <ComplianceTab />}
        
        {/* Other tabs would be conditionally rendered here */}
        {activeTab !== "Comply" && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">{activeTab}</h3>
            <p className="text-gray-600">
              This tab content would display information about {activeTab.toLowerCase()}.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
