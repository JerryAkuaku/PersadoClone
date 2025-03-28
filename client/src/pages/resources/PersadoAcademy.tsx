import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, PlayCircle } from "lucide-react";

export default function PersadoAcademy() {
  const courses = [
    {
      title: "AI Marketing Fundamentals",
      description: "Learn the core principles of AI-powered marketing language optimization and how it transforms customer engagement.",
      duration: "3 hours",
      modules: 5,
      image: "/images/course-placeholder.svg",
      level: "Beginner",
      status: "New"
    },
    {
      title: "Implementing Persado for Email Campaigns",
      description: "A step-by-step guide to optimizing email subject lines, body content, and CTAs with Persado's AI platform.",
      duration: "4 hours",
      modules: 8,
      image: "/images/course-placeholder.svg",
      level: "Intermediate",
      progress: 60,
      status: "In Progress"
    },
    {
      title: "Advanced Personalization Strategies",
      description: "Master the techniques for implementing 1:1 personalization at scale using emotional and motivational AI.",
      duration: "5 hours",
      modules: 10,
      image: "/images/course-placeholder.svg",
      level: "Advanced",
      status: "New"
    },
    {
      title: "Multi-Channel Content Optimization",
      description: "Strategies for maintaining consistent messaging while optimizing for different digital channels and touchpoints.",
      duration: "4 hours",
      modules: 7,
      image: "/images/course-placeholder.svg",
      level: "Intermediate",
      status: "New"
    },
    {
      title: "Measuring ROI from AI-Generated Content",
      description: "Frameworks and methodologies for quantifying the business impact of AI-optimized marketing language.",
      duration: "3 hours",
      modules: 6,
      image: "/images/course-placeholder.svg",
      level: "Intermediate",
      completed: true,
      status: "Completed"
    },
    {
      title: "Enterprise AI Governance",
      description: "Best practices for responsible AI implementation, compliance, and ethical considerations for enterprise organizations.",
      duration: "6 hours",
      modules: 12,
      image: "/images/course-placeholder.svg",
      level: "Advanced",
      status: "New"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Persado Academy</h1>
            <p className="text-xl text-gray-700 mb-8">
              Master the art and science of AI-powered marketing language optimization through our comprehensive learning platform.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#FF0033] hover:bg-[#E00029] text-white rounded-full">
                Explore Courses
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-[#FF0033] border border-[#FF0033] rounded-full">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Featured Courses</h2>
          <div className="flex space-x-4">
            <Button variant="outline" className="text-gray-700">Filter</Button>
            <Button variant="outline" className="text-gray-700">Sort</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {course.level}
                  </div>
                  {course.status === "New" && (
                    <div className="py-1 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      New
                    </div>
                  )}
                </div>
                <CardTitle className="mt-2">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div>
                    {course.modules} modules
                  </div>
                </div>
                
                {course.progress && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
                
                {course.completed && (
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Completed
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full flex items-center justify-center bg-[#FF0033] hover:bg-[#E00029] text-white">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  {course.completed ? "Review Course" : course.progress ? "Continue" : "Start Learning"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-white text-[#FF0033] hover:bg-gray-100 border border-[#FF0033] px-8">
            View All Courses
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}