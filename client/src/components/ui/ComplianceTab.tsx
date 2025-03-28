import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ComplianceTab() {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-4">Comply</h3>
      <p className="text-gray-600 mb-8">
        Increase speed to market while minimizing legal and brand risk – a centrally managed database of industry and brand specific regulations and Persado's approval probability score ensures your messages are on brand and compliant
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-[#F5F5F5]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Brand Voice Overview</h4>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span>Empowering and Trustworthy</span>
              <Switch checked={true} />
            </div>
            <p className="text-sm text-gray-600">
              Silvertech's brand voice is empowering and trustworthy, focusing on clear, straightforward financial solutions. Ensure all communications are professional and avoid jargon.
            </p>
            <button className="text-[#FF0033] mt-4 text-sm font-medium flex items-center">
              Show More
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </CardContent>
        </Card>
        
        <Card className="bg-[#F5F5F5]">
          <CardContent className="p-6">
            <h4 className="font-medium mb-4">Control Push Notification</h4>
            <div className="mb-4">
              <label className="block text-sm mb-2">Headline</label>
              <div className="p-3 bg-white rounded border border-gray-300">No longer have to wait to get paid</div>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Body</label>
              <div className="p-3 bg-white rounded border border-gray-300">Request up to $500 of your next paycheck in the app. Details inside.</div>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Tags</label>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Emotional: Excitement</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Emotional: Encouragement</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Emotional: Curiosity</Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Descriptor: Offer Amount</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
