import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import PersadoLogo from "@/components/ui/PersadoLogo";

export default function Login() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, just show a toast
    toast({
      title: "Login Success",
      description: "You have been logged in successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50">
        {/* Background pattern elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute right-0 top-20 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <g fill="none" stroke="#DDF2F9" strokeWidth="1" opacity="0.2">
                <circle cx="550" cy="100" r="450" />
                <circle cx="550" cy="100" r="400" />
                <circle cx="550" cy="100" r="350" />
                <circle cx="550" cy="100" r="300" />
                <circle cx="550" cy="100" r="250" />
                <circle cx="550" cy="100" r="200" />
                <circle cx="550" cy="100" r="150" />
                <circle cx="550" cy="100" r="100" />
                <circle cx="550" cy="100" r="50" />
              </g>
              <g fill="none" stroke="#DDF2F9" strokeWidth="1" opacity="0.2">
                <circle cx="150" cy="800" r="350" />
                <circle cx="150" cy="800" r="300" />
                <circle cx="150" cy="800" r="250" />
                <circle cx="150" cy="800" r="200" />
                <circle cx="150" cy="800" r="150" />
                <circle cx="150" cy="800" r="100" />
                <circle cx="150" cy="800" r="50" />
              </g>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <PersadoLogo className="text-3xl mx-auto" />
                <h2 className="text-2xl font-bold mt-6 mb-2">Welcome back</h2>
                <p className="text-gray-600">Login to access your account</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-[#FF0033] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#FF0033] hover:bg-[#E00029] text-white"
                >
                  Sign in
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/start-conversation" className="text-[#FF0033] hover:underline">
                    Start a conversation
                  </Link>
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-center text-gray-500">
                  By signing in, you agree to our{" "}
                  <a href="#" className="text-[#FF0033] hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-[#FF0033] hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}