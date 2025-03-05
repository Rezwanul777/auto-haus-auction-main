
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Car, Timer } from "lucide-react";

interface AuctionGroup {
  id: number;
  title: string;
  description: string;
  type: string;
  totalCars: number;
  image: string;
  timeLeft: string;
}

interface AuctionGroupsProps {
  groups: AuctionGroup[];
}

const AuctionGroups = ({ groups }: AuctionGroupsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {groups.map((group, index) => (
        <Card 
          key={group.id}
          className="glass-card overflow-hidden hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
          style={{
            animationDelay: `${index * 150}ms`
          }}
        >
          <div className="relative h-48">
            <img
              src={group.image}
              alt={group.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                {group.title}
              </h3>
              <p className="text-sm text-white/80">
                {group.description}
              </p>
            </div>
            <Badge className="absolute top-3 right-3 bg-accent text-white">
              {group.timeLeft}
            </Badge>
          </div>
          
          <div className="p-4 bg-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-between text-white/80">
              <div className="flex items-center gap-2">
                {group.type === "dealer" && <Building2 className="w-4 h-4" />}
                {group.type === "corporate" && <Users className="w-4 h-4" />}
                {group.type === "import" && <Car className="w-4 h-4" />}
                {group.type === "sport" && <Timer className="w-4 h-4" />}
                <span className="text-sm">{group.totalCars} bilar</span>
              </div>
              <span className="text-sm font-medium text-accent">
                Se alla →
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AuctionGroups;
