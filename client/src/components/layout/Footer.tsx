import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PersadoLogo from "@/components/ui/PersadoLogo";
import { 
  SiSpotify, 
  SiApplepodcasts, 
  SiLinkedin, 
  SiFacebook
} from "react-icons/si";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#F0F5F7] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <PersadoLogo className="text-2xl mb-6 md:mb-0" />
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="bg-white rounded-md shadow-sm flex-1 md:w-96">
              <form className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email to get the latest news" 
                  className="flex-1 rounded-l-md focus:outline-none border-0 border-r-0" 
                  required 
                />
                <Button type="submit" className="bg-[#FF0033] hover:bg-[#E00029] text-white rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-center md:text-left text-gray-600 mb-12">
          By submitting this form, you're consenting to the use of your personal information by Persado to receive relevant emails about our upcoming services and promotions.
        </p>
        
        <hr className="border-gray-300 mb-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Full Stack GenAI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Governance, Security & Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Capabilities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Generate & Predict</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Generate & Experiment</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Generate & Personalize</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Comply</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Analyze</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Financial Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Retail & Ecommerce</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Telecommunications</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Travel & Hospitality</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Resource Library</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Persado Academy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Glossary</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Motivation Matters Podcast</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF0033] text-sm">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Motivation AI Podcast</h3>
            <div className="flex items-center space-x-3 mb-4">
              <a href="#"><SiSpotify className="h-6 w-6 text-gray-700 hover:text-[#FF0033]" /></a>
              <a href="#"><SiApplepodcasts className="h-6 w-6 text-gray-700 hover:text-[#FF0033]" /></a>
            </div>
            
            <h3 className="font-semibold mb-4">Join Us</h3>
            <div className="flex items-center space-x-3">
              <a href="#"><SiLinkedin className="h-6 w-6 text-gray-700 hover:text-[#FF0033]" /></a>
              <a href="#"><SiFacebook className="h-6 w-6 text-gray-700 hover:text-[#FF0033]" /></a>
              <a href="#"><FaXTwitter className="h-6 w-6 text-gray-700 hover:text-[#FF0033]" /></a>
              <a href="#"><FaInstagram className="h-6 w-6 text-gray-700 hover:text-[#FF0033]" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
