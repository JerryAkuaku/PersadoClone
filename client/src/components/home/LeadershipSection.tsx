import { Card, CardContent } from "@/components/ui/card";
import PersadoLogo from "@/components/ui/PersadoLogo";

export default function LeadershipSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F0F5F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <a href="#" className="text-[#FF0033] font-medium">See all Integrations &gt;</a>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-10">
            The breakaway leader in Generative AI for the Enterprise
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 max-w-5xl mx-auto">
          <Card className="relative bg-white p-4 rounded-lg">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gray-100 rounded">
                <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="0" y="0" width="300" height="200" fill="#F5F5F5" />
                  <text x="150" y="100" fontSize="16" textAnchor="middle" fill="#888">Leadership Matrix Chart</text>
                  <line x1="0" y1="100" x2="300" y2="100" stroke="#ccc" strokeWidth="1" />
                  <line x1="150" y1="0" x2="150" y2="200" stroke="#ccc" strokeWidth="1" />
                  <text x="150" y="15" fontSize="12" textAnchor="middle" fill="#333">Highflier</text>
                  <text x="150" y="195" fontSize="12" textAnchor="middle" fill="#333">Follower</text>
                  <text x="15" y="100" fontSize="12" textAnchor="middle" fill="#333" transform="rotate(-90 15,100)">Vision Strength</text>
                  <text x="290" y="100" fontSize="12" textAnchor="middle" fill="#333" transform="rotate(90 290,100)">Execution Strength</text>
                  
                  <g fill="#FF0033">
                    <circle cx="210" cy="50" r="8" />
                    <circle cx="70" cy="130" r="8" />
                    <circle cx="100" cy="80" r="8" />
                    <circle cx="170" cy="110" r="8" />
                    <circle cx="230" cy="150" r="8" />
                    <circle cx="120" cy="170" r="8" />
                    <circle cx="60" cy="60" r="8" />
                    <circle cx="250" cy="70" r="8" />
                    <circle cx="140" cy="120" r="8" />
                    <circle cx="190" cy="90" r="8" />
                  </g>
                </svg>
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div className="text-sm">
                  <div className="flex items-center">
                    <span className="block w-1 h-6 bg-blue-500 mr-2"></span>
                    <span>Execution Strength</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div>
            <div className="flex items-center mb-4">
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M10 5H110V25H10V5Z" fill="#0066CC" />
                <text x="60" y="18" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">CB INSIGHTS</text>
              </svg>
              <PersadoLogo className="text-xl" />
            </div>
            
            <p className="mb-6">
              Persado was named a <strong>leader in Generative AI text content generation</strong> landscape, outperforming 14 vendors in the Execution, Strength, and Positioning Ranking Matrix.
            </p>
            
            <div className="border-l-4 border-[#FF0033] pl-4 py-2 mb-8">
              <h3 className="text-lg font-semibold mb-4">Here's why CBInsights named Persado a leader:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">
                      Determines the most effective elements of language for optimal conversion
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">
                      Proprietary dataset trained on over 330 billion enterprise consumer conversations
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">
                      Generates relevant, engaging content across all channels
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
