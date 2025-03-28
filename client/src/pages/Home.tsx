import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ComplianceSection from "@/components/home/ComplianceSection";
import TechnologySection from "@/components/home/TechnologySection";
import LeadershipSection from "@/components/home/LeadershipSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CertificationTabs from "@/components/home/CertificationTabs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F5F7]">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CertificationTabs />
        <ComplianceSection />
        <TechnologySection />
        <LeadershipSection />
        <TestimonialsSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
}
