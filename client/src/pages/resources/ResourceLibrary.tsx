import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResourceLibrary() {
  const resources = {
    whitepapers: [
      {
        title: "The ROI of AI-Generated Marketing Language",
        description: "A comprehensive analysis of the financial impact of implementing AI for marketing content optimization across industries.",
        type: "Whitepaper",
        imageUrl: "/images/resource-placeholder.svg"
      },
      {
        title: "Personalization at Scale: Beyond Rule-Based Systems",
        description: "How motivational AI enables true 1:1 personalization for enterprise marketing teams.",
        type: "Whitepaper",
        imageUrl: "/images/resource-placeholder.svg"
      },
      {
        title: "The Future of Creative AI in Marketing",
        description: "Industry trends and predictions for how generative AI will transform marketing content creation over the next decade.",
        type: "Whitepaper",
        imageUrl: "/images/resource-placeholder.svg"
      }
    ],
    casestudies: [
      {
        title: "Global Bank Increases Digital Engagement by 37%",
        description: "How a leading financial institution used AI-generated language to transform customer communications.",
        type: "Case Study",
        imageUrl: "/images/resource-placeholder.svg"
      },
      {
        title: "Retail Giant Boosts Email Conversion by 25%",
        description: "Multi-channel optimization strategy delivers millions in incremental revenue.",
        type: "Case Study",
        imageUrl: "/images/resource-placeholder.svg"
      },
      {
        title: "Telecom Provider Reduces Customer Churn by 18%",
        description: "AI-powered retention messaging revitalizes customer loyalty program.",
        type: "Case Study",
        imageUrl: "/images/resource-placeholder.svg"
      }
    ],
    webinars: [
      {
        title: "Responsible AI for Marketing Teams",
        description: "Best practices for ethical AI implementation in content creation and customer communications.",
        type: "Webinar",
        imageUrl: "/images/resource-placeholder.svg"
      },
      {
        title: "From A/B Testing to AI Prediction",
        description: "How predictive AI is revolutionizing content optimization methodologies.",
        type: "Webinar",
        imageUrl: "/images/resource-placeholder.svg"
      },
      {
        title: "Enterprise AI Implementation: Key Success Factors",
        description: "Technical and organizational considerations for successful AI adoption.",
        type: "Webinar",
        imageUrl: "/images/resource-placeholder.svg"
      }
    ]
  };

  const ResourceCard = ({ title, description, type, imageUrl }: { 
    title: string; 
    description: string; 
    type: string; 
    imageUrl: string; 
  }) => (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-[#FF0033] mb-2 block">{type}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button className="bg-white text-[#FF0033] hover:bg-gray-100 border border-[#FF0033]">
          Read More
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Resource Library</h1>
        <p className="text-xl text-gray-700 mb-8">
          Explore our collection of resources to help you maximize the impact of AI in your marketing initiatives.
        </p>
        
        <Tabs defaultValue="whitepapers" className="w-full my-6">
          <TabsList className="w-full flex justify-start mb-8 border-b">
            <TabsTrigger value="whitepapers" className="text-lg px-6 py-3">Whitepapers</TabsTrigger>
            <TabsTrigger value="casestudies" className="text-lg px-6 py-3">Case Studies</TabsTrigger>
            <TabsTrigger value="webinars" className="text-lg px-6 py-3">Webinars</TabsTrigger>
          </TabsList>
          
          <TabsContent value="whitepapers" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.whitepapers.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="casestudies" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.casestudies.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="webinars" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.webinars.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}