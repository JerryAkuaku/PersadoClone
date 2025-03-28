import { Button } from "@/components/ui/button";
import PersadoLogo from "@/components/ui/PersadoLogo";

interface CaseStudyProps {
  title: string;
  description?: string;
  quote?: string;
  imageUrl: string;
  imagePosition: "left" | "right";
  className?: string;
}

export default function CaseStudy({
  title,
  description,
  quote,
  imageUrl,
  imagePosition,
  className = ""
}: CaseStudyProps) {
  const Content = () => (
    <div>
      <div className="mb-4">
        <PersadoLogo className="uppercase text-sm font-bold tracking-wider" />
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      
      {description && (
        <p className="text-gray-700 mb-6">{description}</p>
      )}
      
      {quote && (
        <blockquote className="border-l-4 border-[#FF0033] pl-4 py-1 my-8 italic">
          "{quote}"
        </blockquote>
      )}
      
      <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white rounded-full mt-4">
        Get Case Study &gt;
      </Button>
    </div>
  );
  
  const Image = () => (
    <div>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  );
  
  return (
    <div className={`grid md:grid-cols-2 gap-12 ${className}`}>
      {imagePosition === "left" ? (
        <>
          <Image />
          <Content />
        </>
      ) : (
        <>
          <Content />
          <Image />
        </>
      )}
    </div>
  );
}
