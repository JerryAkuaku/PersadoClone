import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Ways AI is Transforming Marketing Language in 2025",
      excerpt: "Explore how enterprise AI is revolutionizing how brands communicate with customers across channels and touchpoints.",
      date: "March 15, 2025",
      author: "Sarah Johnson",
      category: "AI Trends",
      imageUrl: "https://via.placeholder.com/800x450"
    },
    {
      title: "The Psychology Behind Effective Marketing Messages",
      excerpt: "Understanding the emotional and motivational triggers that drive customer engagement and conversion.",
      date: "March 8, 2025",
      author: "Michael Chen",
      category: "Marketing Strategy",
      imageUrl: "https://via.placeholder.com/800x450"
    },
    {
      title: "How Financial Services Firms Are Leveraging AI for Compliance",
      excerpt: "Case studies on how leading banks and insurance companies maintain regulatory compliance while optimizing marketing content.",
      date: "February 27, 2025",
      author: "Jessica Williams",
      category: "Industry Insights",
      imageUrl: "https://via.placeholder.com/800x450"
    },
    {
      title: "Responsible AI: Ethical Considerations for Marketing Teams",
      excerpt: "Best practices for implementing AI content generation while maintaining transparency and brand integrity.",
      date: "February 19, 2025",
      author: "David Rodriguez",
      category: "AI Ethics",
      imageUrl: "https://via.placeholder.com/800x450"
    },
    {
      title: "Beyond A/B Testing: Predictive AI for Marketing Optimization",
      excerpt: "How advanced prediction models are replacing traditional testing methodologies for faster, more accurate results.",
      date: "February 10, 2025",
      author: "Emma Thompson",
      category: "Performance Marketing",
      imageUrl: "https://via.placeholder.com/800x450"
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Blog</h1>
            <p className="text-xl text-gray-700">
              Insights, research, and perspectives on AI-powered marketing language.
            </p>
          </div>
          <div className="hidden md:block">
            <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white rounded-full">
              Subscribe to Updates
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-[#FF0033]">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <a href="#" className="text-[#FF0033] font-medium hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-white text-[#FF0033] hover:bg-gray-100 border border-[#FF0033] px-8">
            Load More Articles
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}