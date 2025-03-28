import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

// Contact form schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  inquiryType: z.string({ required_error: "Please select an inquiry type" }),
  comments: z.string().optional(),
});

// AI text generator form schema
const aiGeneratorSchema = z.object({
  prompt: z.string().min(10, { message: "Please enter at least 10 characters" }),
  industry: z.string({ required_error: "Please select an industry" }),
  audience: z.string({ required_error: "Please select a target audience" }),
  channel: z.string({ required_error: "Please select a marketing channel" }),
  tone: z.string({ required_error: "Please select a tone" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type AIGeneratorValues = z.infer<typeof aiGeneratorSchema>;

export default function StartConversation() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Contact form
  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      email: "",
      phone: "",
      inquiryType: "",
      comments: "",
    },
  });

  // AI Generator form 
  const aiGeneratorForm = useForm<AIGeneratorValues>({
    resolver: zodResolver(aiGeneratorSchema),
    defaultValues: {
      prompt: "",
      industry: "",
      audience: "",
      channel: "",
      tone: "",
    },
  });

  // Handle contact form submission
  function onContactSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Conversation Started",
      description: "Thank you for reaching out. Our team will contact you shortly.",
    });
  }

  // Handle AI generator form submission
  async function onAIGeneratorSubmit(data: AIGeneratorValues) {
    try {
      setIsGenerating(true);
      setGeneratedText(null);
      
      const response = await fetch("/api/generate-marketing-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to generate text");
      }
      
      const result = await response.json();
      
      if (result && result.text) {
        setGeneratedText(result.text);
        toast({
          title: "Text Generated",
          description: "Your marketing text has been generated successfully."
        });
      } else {
        throw new Error("No text was generated");
      }
    } catch (error) {
      console.error("Error generating text:", error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate marketing text. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50 overflow-hidden relative">
        {/* Background pattern elements */}
        <div className="absolute inset-0 overflow-hidden">
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Let's start a conversation.</h1>
              <p className="text-xl text-gray-600">Explore the impact of language AI. Reach out to our solution experts.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-10 rounded-lg shadow-sm relative overflow-hidden">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Step {step}</h2>
                  {step === 1 && (
                    <p className="text-2xl text-gray-400 font-light mt-2">
                      Upload your message into Persado's AI platform
                    </p>
                  )}
                  {step === 2 && (
                    <p className="text-2xl text-gray-400 font-light mt-2">
                      Our AI analyzes your content and audience
                    </p>
                  )}
                  {step === 3 && (
                    <p className="text-2xl text-gray-400 font-light mt-2">
                      Receive optimized messaging suggestions
                    </p>
                  )}
                </div>
                
                <div className="flex space-x-3 mb-8">
                  <div className={`w-12 h-1 rounded-full ${step >= 1 ? 'bg-[#FF0033]' : 'bg-gray-200'}`}></div>
                  <div className={`w-12 h-1 rounded-full ${step >= 2 ? 'bg-[#FF0033]' : 'bg-gray-200'}`}></div>
                  <div className={`w-12 h-1 rounded-full ${step >= 3 ? 'bg-[#FF0033]' : 'bg-gray-200'}`}></div>
                </div>
                
                <div className="flex space-x-3 mt-auto">
                  <Button 
                    variant="outline"
                    className="border-gray-300"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    disabled={step === 1}
                  >
                    Previous
                  </Button>
                  
                  <Button 
                    className="bg-[#FF0033] hover:bg-[#E00029] text-white"
                    onClick={() => setStep(Math.min(3, step + 1))}
                    disabled={step === 3}
                  >
                    Next
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-10 rounded-lg shadow-sm">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {showAIGenerator ? "AI Marketing Text Generator" : "Contact Information"}
                  </h3>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAIGenerator(!showAIGenerator)}
                    className="text-sm"
                  >
                    {showAIGenerator ? "Show Contact Form" : "Try AI Generator"}
                  </Button>
                </div>
                
                {!showAIGenerator ? (
                  // CONTACT FORM
                  <Form {...contactForm}>
                    <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={contactForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="First Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={contactForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Last Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={contactForm.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company *</FormLabel>
                            <FormControl>
                              <Input placeholder="Company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={contactForm.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="Job Title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={contactForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={contactForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Phone" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={contactForm.control}
                        name="inquiryType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Inquiry Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an inquiry type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="demo">Request a Demo</SelectItem>
                                <SelectItem value="pricing">Pricing Information</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={contactForm.control}
                        name="comments"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Comments</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your needs" 
                                className="min-h-[100px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-[#FF0033] hover:bg-[#E00029] text-white"
                      >
                        Submit
                      </Button>
                    </form>
                  </Form>
                ) : (
                  // AI MARKETING TEXT GENERATOR
                  <>
                    <div className="mb-4">
                      <p className="text-gray-600">
                        Try out Persado's AI-powered marketing text generator. Provide your context and preferences to generate optimized marketing content.
                      </p>
                    </div>
                    
                    <Form {...aiGeneratorForm}>
                      <form onSubmit={aiGeneratorForm.handleSubmit(onAIGeneratorSubmit)} className="space-y-4">
                        <FormField
                          control={aiGeneratorForm.control}
                          name="prompt"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Marketing Context *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your product, service, or marketing goal in detail" 
                                  className="min-h-[100px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={aiGeneratorForm.control}
                            name="industry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Industry *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select your industry" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="financial">Financial Services</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                    <SelectItem value="telecommunications">Telecommunications</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="technology">Technology</SelectItem>
                                    <SelectItem value="travel">Travel & Hospitality</SelectItem>
                                    <SelectItem value="education">Education</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={aiGeneratorForm.control}
                            name="audience"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Target Audience *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select target audience" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="general">General Consumers</SelectItem>
                                    <SelectItem value="millennials">Millennials</SelectItem>
                                    <SelectItem value="genZ">Gen Z</SelectItem>
                                    <SelectItem value="professionals">Business Professionals</SelectItem>
                                    <SelectItem value="executives">C-Suite Executives</SelectItem>
                                    <SelectItem value="parents">Parents</SelectItem>
                                    <SelectItem value="seniors">Seniors</SelectItem>
                                    <SelectItem value="students">Students</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={aiGeneratorForm.control}
                            name="channel"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Marketing Channel *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select marketing channel" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="email">Email</SelectItem>
                                    <SelectItem value="social">Social Media</SelectItem>
                                    <SelectItem value="sms">SMS</SelectItem>
                                    <SelectItem value="web">Website</SelectItem>
                                    <SelectItem value="push">Push Notifications</SelectItem>
                                    <SelectItem value="print">Print</SelectItem>
                                    <SelectItem value="display">Display Ads</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={aiGeneratorForm.control}
                            name="tone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message Tone *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select message tone" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="professional">Professional</SelectItem>
                                    <SelectItem value="friendly">Friendly</SelectItem>
                                    <SelectItem value="urgent">Urgent</SelectItem>
                                    <SelectItem value="informative">Informative</SelectItem>
                                    <SelectItem value="persuasive">Persuasive</SelectItem>
                                    <SelectItem value="inspirational">Inspirational</SelectItem>
                                    <SelectItem value="humorous">Humorous</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-[#FF0033] hover:bg-[#E00029] text-white"
                          disabled={isGenerating}
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Generating...
                            </>
                          ) : 'Generate Marketing Text'}
                        </Button>
                      </form>
                    </Form>
                    
                    {generatedText && (
                      <div className="mt-6 p-4 border border-blue-200 bg-blue-50 rounded-md">
                        <h4 className="font-medium mb-2 text-gray-800">Generated Marketing Text:</h4>
                        <div className="bg-white rounded p-3 shadow-sm">
                          <p className="text-gray-700 whitespace-pre-wrap">{generatedText}</p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}