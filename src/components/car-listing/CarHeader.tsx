import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CarHeaderProps {
  type: string | undefined;
}

const CarHeader = ({ type }: CarHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      className="mb-6 gap-2 text-white/80 hover:text-white hover:bg-white/10"
      onClick={() => navigate(`/auctions/${type}`)}
    >
      <ArrowLeft className="w-4 h-4" />
      Tillbaka till auktionen
    </Button>
  );
};

export default CarHeader;