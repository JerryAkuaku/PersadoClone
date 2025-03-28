import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import PersadoLogo from "@/components/ui/PersadoLogo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const productLinks = [
  { title: "Full Stack GenAI", href: "/product/full-stack-genai" },
  { title: "Integrations", href: "/product/integrations" },
  { title: "Governance, Security & Privacy", href: "/product/governance-security" },
];

const capabilitiesLinks = [
  { title: "Generate & Predict", href: "/capabilities/generate-predict" },
  { title: "Generate & Experiment", href: "#" },
  { title: "Generate & Personalize", href: "#" },
  { title: "Comply", href: "#" },
  { title: "Analyze", href: "#" },
];

const industriesLinks = [
  { title: "Financial Services", href: "/industries/financial-services" },
  { title: "Retail & Ecommerce", href: "#" },
  { title: "Telecommunications", href: "#" },
  { title: "Travel & Hospitality", href: "#" },
];

const resourcesLinks = [
  { title: "Resource Library", href: "/resources/resource-library" },
  { title: "Persado Academy", href: "/resources/persado-academy" },
  { title: "Glossary", href: "/resources/glossary" },
  { title: "Blog", href: "/resources/blog" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white shadow-md h-16" 
          : location === "/" 
            ? "bg-gradient-to-r from-blue-50 to-gray-50 h-20" 
            : "bg-white h-16"
      )}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link href="/">
              <PersadoLogo className="text-2xl" />
            </Link>
          </div>

          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-normal">Product</NavigationMenuTrigger>
                  <NavigationMenuContent className="origin-top">
                    <ul className="grid w-[250px] gap-2 p-4">
                      {productLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block py-2 hover:text-[#FF0033]",
                                location === link.href && "text-[#FF0033] font-medium"
                              )}
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-normal">Capabilities</NavigationMenuTrigger>
                  <NavigationMenuContent className="origin-top">
                    <ul className="grid w-[250px] gap-2 p-4">
                      {capabilitiesLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block py-2 hover:text-[#FF0033]",
                                location === link.href && "text-[#FF0033] font-medium"
                              )}
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-normal">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent className="origin-top">
                    <ul className="grid w-[250px] gap-2 p-4">
                      {industriesLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block py-2 hover:text-[#FF0033]",
                                location === link.href && "text-[#FF0033] font-medium"
                              )}
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-normal">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent className="origin-top">
                    <ul className="grid w-[250px] gap-2 p-4">
                      {resourcesLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block py-2 hover:text-[#FF0033]",
                                location === link.href && "text-[#FF0033] font-medium"
                              )}
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="hidden md:block text-gray-700 hover:text-[#FF0033]">
              Login
            </Link>
            <Link href="/start-conversation">
              <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white rounded-full">
                Start a Conversation
              </Button>
            </Link>

            <Sheet>
              <div className="flex items-center space-x-2 md:hidden">
                <Link href="/login">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User size={20} />
                  </Button>
                </Link>
                <SheetTrigger className="md:hidden">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
              </div>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold mb-2">Product</h3>
                    {productLinks.map((link) => (
                      <Link 
                        key={link.title} 
                        href={link.href} 
                        className={cn(
                          "text-gray-700 hover:text-[#FF0033]",
                          location === link.href && "text-[#FF0033] font-medium"
                        )}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold mb-2">Capabilities</h3>
                    {capabilitiesLinks.map((link) => (
                      <Link 
                        key={link.title} 
                        href={link.href} 
                        className={cn(
                          "text-gray-700 hover:text-[#FF0033]",
                          location === link.href && "text-[#FF0033] font-medium"
                        )}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold mb-2">Industries</h3>
                    {industriesLinks.map((link) => (
                      <Link 
                        key={link.title} 
                        href={link.href} 
                        className={cn(
                          "text-gray-700 hover:text-[#FF0033]",
                          location === link.href && "text-[#FF0033] font-medium"
                        )}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold mb-2">Resources</h3>
                    {resourcesLinks.map((link) => (
                      <Link 
                        key={link.title} 
                        href={link.href} 
                        className={cn(
                          "text-gray-700 hover:text-[#FF0033]",
                          location === link.href && "text-[#FF0033] font-medium"
                        )}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href="/login" className="text-gray-700 hover:text-[#FF0033]">
                    Login
                  </Link>
                  
                  <Link href="/start-conversation">
                    <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white rounded-full w-full">
                      Start a Conversation
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
