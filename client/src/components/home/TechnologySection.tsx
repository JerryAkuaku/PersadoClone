import { Card, CardContent } from "@/components/ui/card";

export default function TechnologySection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Securely integrates with your existing tech stack
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          Combine custom, non-PII user attributes, and Persado's award winning language generation models to more effectively communicate with every customer, in any channel at any lifecycle stage
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h3 className="font-medium mb-2 text-center">Customer Data Platforms</h3>
            <div className="flex flex-col items-center space-y-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" fill="currentColor" />
              </svg>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-800">
                <path d="M10 10H38V38H10V10Z" fill="currentColor" />
              </svg>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
                <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#FF0033] text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">MOTIVATION AI</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white text-gray-800 p-3 rounded text-sm">
                  Natural Language Discovery
                </div>
                <div className="bg-white text-gray-800 p-3 rounded text-sm">
                  Language-Trained Transformer Models
                </div>
                <div className="bg-white text-gray-800 p-3 rounded text-sm">
                  Machine Learning Experimentation
                </div>
                <div className="bg-white text-gray-800 p-3 rounded text-sm">
                  Language Personalization
                </div>
                <div className="bg-white text-gray-800 p-3 rounded text-sm">
                  Predictive Content Generation
                </div>
                <div className="bg-white text-gray-800 p-3 rounded text-sm">
                  Deep Learning Algorithms
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center space-x-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="currentColor" />
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500">
                <path d="M16 2L2 16L16 30L30 16L16 2Z" fill="currentColor" />
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
                <path d="M6 6H26V26H6V6Z" fill="currentColor" />
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                <path d="M4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4C9.373 4 4 9.373 4 16Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium mb-2 text-center">Content Distribution Platforms</h3>
            <div className="flex flex-col items-center space-y-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-500">
                <path d="M10 10H38V38H10V10Z" fill="currentColor" />
                <path d="M20 20H28V28H20V20Z" fill="white" />
              </svg>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-500">
                <path d="M24 4L4 24L24 44L44 24L24 4Z" fill="currentColor" />
              </svg>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                <path d="M8 8H40V40H8V8Z" fill="currentColor" />
                <path d="M16 16H32V32H16V16Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
