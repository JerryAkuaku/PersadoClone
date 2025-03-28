import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const glossaryTerms = [
    {
      term: "AI-Generated Content",
      definition: "Marketing content created by artificial intelligence systems, often using natural language processing and generation techniques to produce human-quality text."
    },
    {
      term: "Brand Safety",
      definition: "Practices and technologies that ensure brand messaging is appropriate and consistent with the brand's values and guidelines when using AI content generation."
    },
    {
      term: "Conversion Rate Optimization (CRO)",
      definition: "The systematic process of increasing the percentage of website visitors who take a desired action, often enhanced by AI-optimized messaging."
    },
    {
      term: "Emotional AI",
      definition: "AI technology that can recognize, interpret, and respond to human emotions, used in marketing to create messaging that resonates with specific emotional states."
    },
    {
      term: "Generative AI",
      definition: "AI systems that can create new content, including text, images, or ideas, based on patterns learned from training data."
    },
    {
      term: "Hyper-Personalization",
      definition: "Creating highly customized experiences for individual customers based on their data, preferences, and behaviors, often using AI to scale personalization efforts."
    },
    {
      term: "Intent Analysis",
      definition: "Using AI to determine the purpose or goal behind customer queries or behaviors to deliver more relevant messaging and experiences."
    },
    {
      term: "Language Model",
      definition: "An AI system trained to understand and generate human language, serving as the foundation for marketing content generation tools."
    },
    {
      term: "Message Optimization",
      definition: "The process of refining marketing messages to maximize effectiveness, often using AI to test and predict performance of different variations."
    },
    {
      term: "Motivational AI",
      definition: "AI systems designed to identify and leverage the psychological motivations that drive consumer behavior and decision-making."
    },
    {
      term: "Natural Language Generation (NLG)",
      definition: "A subset of AI that produces natural human language from structured data, used to create marketing content at scale."
    },
    {
      term: "Predictive Analytics",
      definition: "Using data, statistical algorithms, and machine learning techniques to identify the likelihood of future outcomes based on historical data."
    },
    {
      term: "Responsible AI",
      definition: "The practice of designing, developing, and deploying AI systems in a manner that is ethical, transparent, and accountable."
    },
    {
      term: "Semantic Analysis",
      definition: "AI techniques that examine the meaning and context of language to understand customer sentiment and intent for better marketing messaging."
    },
    {
      term: "Voice and Tone Optimization",
      definition: "Using AI to adjust marketing language to match brand voice guidelines while optimizing for effectiveness across different channels and audiences."
    }
  ];
  
  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group terms by first letter
  const groupedTerms = filteredTerms.reduce((acc: Record<string, typeof glossaryTerms>, curr) => {
    const firstLetter = curr.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(curr);
    return acc;
  }, {});
  
  // Sort the keys alphabetically
  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Marketing AI Glossary</h1>
        
        <div className="relative max-w-md mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search terms..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {sortedLetters.length > 0 ? (
          <div className="space-y-10">
            {sortedLetters.map(letter => (
              <div key={letter} id={letter} className="scroll-mt-20">
                <h2 className="text-2xl font-bold text-[#FF0033] mb-6">{letter}</h2>
                <dl className="space-y-6">
                  {groupedTerms[letter].map((item, index) => (
                    <div key={index} className="border-b pb-6">
                      <dt className="text-xl font-semibold mb-2">{item.term}</dt>
                      <dd className="text-gray-700">{item.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No terms found matching "{searchTerm}"</p>
          </div>
        )}
        
        {/* Alphabet Quick Navigation */}
        {filteredTerms.length > 10 && (
          <div className="sticky bottom-6 flex justify-center mt-12">
            <div className="bg-white shadow-lg rounded-full px-4 py-2 border">
              <div className="flex space-x-2">
                {sortedLetters.map(letter => (
                  <a 
                    key={letter}
                    href={`#${letter}`}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-[#FF0033] font-medium"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}