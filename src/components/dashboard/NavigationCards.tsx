
import NavigationCard from "./NavigationCard";
import MessageCard from "./MessageCard";
import { navigationItems } from "./navigationData";
import TestCard from "./TestCard";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

const NavigationCards = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      {/* <div className="grid grid-cols-6 gap-2 mb-2"> */     } 
      {/* modified the above code for responsive  */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">  
        {navigationItems.slice(0, 3).map((item, index) => (
          index === 1 ? (
            <MessageCard key={`nav-${index}`} item={item} />
          ) : (
            <NavigationCard key={`nav-${index}`} item={item} />
          )
        ))}
      </div>  

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">
        {navigationItems.slice(3).map((item, index) => (
          <NavigationCard key={`nav-bottom-${index}`} item={item} />
        ))}
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2  gap-2 mb-2">
        <TestCard />
        {/* this is favourite card code */}
        <Card 
          className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
          onClick={() => navigate('/favorites')}
        >
          <div className="absolute inset-0 bg-[#ea384c]" />
          <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">Favoriter</h3>
                <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
              </div>
              <div className="rounded-full bg-white/20 p-1.5 group-hover:scale-110 transition-transform">
            <Bookmark className="h-4 w-4 text-white" />
          </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NavigationCards;
