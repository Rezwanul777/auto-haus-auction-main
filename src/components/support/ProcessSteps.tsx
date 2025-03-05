
import { Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProcessSteps = () => {
  return (
    <div className="space-y-6 text-white/90">
      <div className="flex items-start gap-4 group">
        <div className="bg-accent/20 p-3 rounded-full transition-all duration-300 group-hover:bg-accent/40">
          <span className="font-bold text-lg">1</span>
        </div>
        <p className="pt-1">Fyll i registreringsnummer på bilen som reklamationen gäller</p>
      </div>
      
      <div className="flex items-start gap-4 group">
        <div className="bg-accent/20 p-3 rounded-full transition-all duration-300 group-hover:bg-accent/40">
          <span className="font-bold text-lg">2</span>
        </div>
        <p className="pt-1">Välj vilken typ av problem du vill rapportera</p>
      </div>
      
      <div className="flex items-start gap-4 group">
        <div className="bg-accent/20 p-3 rounded-full transition-all duration-300 group-hover:bg-accent/40">
          <span className="font-bold text-lg">3</span>
        </div>
        <p className="pt-1">Beskriv problemet och ladda upp bilder som visar felet</p>
      </div>
      
      <div className="flex items-start gap-4 group">
        <div className="bg-accent/20 p-3 rounded-full transition-all duration-300 group-hover:bg-accent/40">
          <span className="font-bold text-lg">4</span>
        </div>
        <p className="pt-1">Vi återkommer inom 24-48 timmar med nästa steg</p>
      </div>

      <Button 
        variant="outline" 
        className="w-full mt-6 bg-black/20 border-white/20 text-white hover:bg-black/30
          transition-all duration-300 group"
        onClick={() => window.open('/policy', '_blank')}
      >
        <Info className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
        Läs mer om vår reklamationspolicy
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  );
};
