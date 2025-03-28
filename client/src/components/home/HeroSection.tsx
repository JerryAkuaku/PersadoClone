import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-r from-blue-50 to-gray-100">
      {/* Dotted pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{
          backgroundImage: `radial-gradient(circle, #6B7280 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Curved wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg 
          viewBox="0 0 1440 74" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 50L48 44.2C96 38.3 192 26.7 288 32.5C384 38.3 480 61.7 576 67.5C672 73.3 768 61.7 864 44.2C960 26.7 1056 3.3 1152 3.3C1248 3.3 1344 26.7 1392 38.3L1440 50V74H1392C1344 74 1248 74 1152 74C1056 74 960 74 864 74C768 74 672 74 576 74C480 74 384 74 288 74C192 74 96 74 48 74H0V50Z" 
            fill="white"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              <span className="text-[#FF0033]">Motivation AI</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-800">
              The only Enterprise AI platform to generate, optimize and personalize marketing language at scale
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/start-conversation">
                <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white text-lg px-6 py-3 rounded-md">
                  Start a Conversation
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-400 text-gray-700 text-lg px-6 py-3 rounded-md">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 aspect-video">
            <div className="relative h-full w-full rounded overflow-hidden bg-black flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl text-white opacity-80">
                  <span className="text-[#FF0033] text-4xl font-bold">[</span> 
                  Persado Demo Video 
                  <span className="text-[#FF0033] text-4xl font-bold">]</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-black bg-opacity-70 flex items-center px-4">
                <div className="flex-1">
                  <div className="h-1 bg-gray-600 rounded-full w-full">
                    <div className="h-1 bg-[#FF0033] rounded-full w-0"></div>
                  </div>
                </div>
                <div className="text-white text-sm ml-4">0:00 / 3:33</div>
                <div className="flex items-center ml-4 space-x-4">
                  <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                  <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="22 15 22 9 16 9"></polygon>
                      <rect x="2" y="9" width="4" height="6"></rect>
                      <line x1="6" y1="15" x2="16" y2="15"></line>
                    </svg>
                  </button>
                  <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
