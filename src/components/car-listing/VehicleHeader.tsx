
import { Car, Download } from "lucide-react";
import VehicleImages from "./VehicleImages";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface VehicleHeaderProps {
  make: string;
  model: string;
  year: number;
  images?: string[];
}

const VehicleHeader = ({ make, model, year, images = [] }: VehicleHeaderProps) => {
  const { toast } = useToast();

  const handleDownloadPDF = () => {
    // Temporär toast medan funktionaliteten implementeras
    toast({
      title: "PDF nedladdning",
      description: "PDF nedladdning kommer snart att vara tillgänglig.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <Car className="w-8 h-8 text-accent" />
          {make} {model} {year}
        </h1>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleDownloadPDF}
          className="bg-black/20 border-white/10 text-white hover:bg-black/30"
        >
          <Download className="w-4 h-4 mr-2" />
          Ladda ner PDF
        </Button>
      </div>

      <VehicleImages make={make} model={model} images={images} />
    </div>
  );
};

export default VehicleHeader;
