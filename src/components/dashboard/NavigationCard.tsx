import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { NavigationItem } from "./navigationData";

interface NavigationCardProps {
  item: NavigationItem;
}

const NavigationCard = ({ item }: NavigationCardProps) => {
  const navigate = useNavigate();
  const Icon = item?.icon;

  return (
    <Card 
      className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
      onClick={() => navigate(item.path)}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
      <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <div className="rounded-full bg-white/20 p-2 group-hover:scale-110 transition-transform">
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
        {/* Ensuring visibility of subtitle */}
        <p className="text-sm text-white/90 mt-2 font-medium">{item?.subtitle}</p>
        
      </CardContent>
    </Card>
  );
};

export default NavigationCard;
