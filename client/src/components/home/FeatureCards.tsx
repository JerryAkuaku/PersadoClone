import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Performs",
    description: "96% of the time Persado's Motivation AI outperforms human and other AI generated copy – improving customer engagement by over 40%.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Performance metrics visualization"
  },
  {
    title: "Insightful",
    description: "The only GenAI platform that can isolate and pinpoint precise message elements that drive impact and resonate with your unique customer segments.",
    imageUrl: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Insight dashboard visualization"
  },
  {
    title: "Relevant",
    description: "A custom built LLM just for your brand – your tone, guidelines and segments, plus over a decade of consumer response data analyzed by Persado ensures every piece of content is on-brand.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Relevance visualization"
  },
  {
    title: "Responsible & Compliant",
    description: "The only GenAI stack evaluated, audited, adopted and scaled by the world's most prominent banks and credit card issuers to generate brand, regulatory and legal compliant content.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Compliance visualization"
  }
];

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-4 gap-8 mt-16">
      {features.map((feature, index) => (
        <Card key={index} className="bg-white shadow-sm border border-gray-100">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            
            <div className="mt-6">
              <img 
                src={feature.imageUrl} 
                alt={feature.imageAlt} 
                className="w-full h-auto rounded" 
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
