import CaseStudy from "@/components/ui/CaseStudy";

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F0F5F7]">
      <div className="container mx-auto px-4">
        <CaseStudy 
          title="From Finance Pioneer to Digital Disruptor: How Ally Financial Leveraged Persado to Drive B2C Growth"
          quote="We are all charged with fostering an environment of innovation, and that comes straight from my boss's boss–the CEO of the company. There's an appetite to foster that culture. There is an expense involved, obviously, and none of us want to fail. But we also have a culture where failure is okay if you've innovated and learned along the way."
          imageUrl="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imagePosition="left"
          className="mb-20"
        />
        
        <CaseStudy 
          title="Retail Grocer Carrefour Achieves 2.5X Digital Campaign Uplift With Persado"
          description="The international retailer Carrefour challenged traditional messaging approaches with Persado's AI-powered language platform, achieving a 2.5X increase in campaign performance across multiple channels."
          imageUrl="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          imagePosition="right"
          className="mb-20"
        />
      </div>
    </section>
  );
}
