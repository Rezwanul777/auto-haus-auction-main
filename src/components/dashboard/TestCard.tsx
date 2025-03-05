import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const TestCard = () => {
  const navigate = useNavigate();

  return (
    <Card 
      className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
      onClick={() => navigate('/car-test')}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDB813] to-[#FFCD4B]" />
      <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">Test</h3>
            <p className="text-xs text-white/80 mt-1">Skapa Fordonstest</p>
          </div>
          <div className="rounded-full bg-white/20 p-1.5 group-hover:scale-110 transition-transform">
            <FileText className="h-4 w-4 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCard;