import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    company: "EY",
    logo: "EY",
    quote: "Machine learning is the path to more humanity in marketing... Persado's technology is incredibly promising. It rewrote copy and headlines that a marketer, using subjective judgment and their experience, likely wouldn't have. And they worked.",
    author: "Noam Paransky",
    title: "Chief Digital Officer",
    organization: "Tapestry Inc."
  },
  {
    company: "Tapestry",
    logo: "Tapestry",
    quote: "Persado takes something that people thought was all art – messaging and content – and provides a scientific, data-driven, test and learn element that Marketers can really sink their teeth into.",
    author: "John Smith",
    title: "VP of Digital Marketing",
    organization: "Coach | kate spade | stuart weitzman"
  },
  {
    company: "Vodafone",
    logo: "Vodafone",
    quote: "Engaging with customers in the digital age is very much about finding the right message for every campaign and every customer segment. Since we started working together in 2012, Persado has helped us land the precise message.",
    author: "Federico Panizzi",
    title: "Head of Digital Customer Marketing",
    organization: "Vodafone IT"
  }
];

const CompanyLogo = ({ company }: { company: string }) => {
  return (
    <div className="h-8 flex items-center">
      {company === "EY" && (
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H44V20H4V4Z" fill="#2E2E38" />
          <path d="M12 8H36V10H12V8Z" fill="white" />
          <path d="M12 12H36V14H12V12Z" fill="white" />
          <path d="M12 16H36V18H12V16Z" fill="white" />
        </svg>
      )}
      {company === "Tapestry" && (
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12H70" stroke="#000" strokeWidth="2" />
          <text x="40" y="16" fontFamily="Arial" fontSize="12" fill="#000" textAnchor="middle">TAPESTRY</text>
        </svg>
      )}
      {company === "Vodafone" && (
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="12" r="10" fill="#E60000" />
          <path d="M34 12C34 8.686 36.686 6 40 6C43.314 6 46 8.686 46 12C46 15.314 43.314 18 40 18" stroke="white" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
          What our customers are saying
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#F0F5F7]">
              <CardContent className="p-8">
                <div className="mb-6">
                  <CompanyLogo company={testimonial.company} />
                </div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-gray-600">{testimonial.organization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
