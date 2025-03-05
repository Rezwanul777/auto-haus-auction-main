import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, CarFront, Timer } from "lucide-react";

interface AuctionCardProps {
  auction: {
    id: number;
    title: string;
    description: string;
    startTime: string;
    date: string;
    totalCars: number;
    type: string;
    image: string;
    status: string;
    bgColor: string;
  };
  onAuctionClick: (type: string) => void;
}

const AuctionCard = ({ auction, onAuctionClick }: AuctionCardProps) => {
  return (
    <Card 
      className="glass-card overflow-hidden hover:shadow-lg transition-all cursor-pointer group animate-fade-in hover:scale-[1.02] transition-transform duration-300"
      onClick={() => onAuctionClick(auction.type)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={auction.image}
          alt={auction.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${auction.bgColor} mix-blend-multiply transition-opacity duration-300 group-hover:opacity-75`} />
        <Badge className="absolute top-3 right-3 bg-accent text-white animate-fade-in">
          {auction.totalCars} bilar
        </Badge>
        {auction.status === "active" && (
          <Badge className="absolute top-3 left-3 bg-green-500/80 text-white flex items-center gap-1">
            <Timer className="w-3 h-3" />
            Pågår nu
          </Badge>
        )}
      </div>
      
      <div className="p-6 bg-black/40 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors">
          {auction.title}
        </h3>
        <p className="text-sm text-white/80 mb-4">{auction.description}</p>
        
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center justify-between text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{auction.startTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{auction.date}</span>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full mt-4 bg-accent hover:bg-accent/90 text-white transform transition-all duration-300 group-hover:scale-105"
        >
          {auction.status === "active" ? "Gå till auktion" : "Visa detaljer"}
        </Button>
      </div>
    </Card>
  );
};

export default AuctionCard;