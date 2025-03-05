
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gavel } from "lucide-react";

interface AuctionHeaderProps {
  onBackClick: () => void;
}

const AuctionHeader = ({ onBackClick }: AuctionHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
      <Button 
        variant="ghost" 
        className="gap-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        onClick={onBackClick}
      >
        <ArrowLeft className="w-4 h-4" />
        Tillbaka till Dashboard
      </Button>
      <div className="flex items-center gap-2">
        <Gavel className="w-6 h-6 text-accent" />
        <h1 className="text-3xl font-bold text-white">Försäljningar</h1>
      </div>
    </div>
  );
};

export default AuctionHeader;
