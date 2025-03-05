import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CostCalculatorProps {
  currentBid: number;
}

const CostCalculator = ({ currentBid }: CostCalculatorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const biddingFee = 2500;
  const deliveryFee = 3900;
  const totalCost = currentBid + biddingFee + deliveryFee;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full text-gray-400 bg-black/20 p-3 rounded-lg hover:bg-black/30 transition-colors">
        <span>Beräkna totalkostnad</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 mt-2">
        <div className="bg-black/10 p-4 rounded-lg space-y-3">
          <div className="flex justify-between text-gray-400">
            <span>Aktuellt bud:</span>
            <span className="text-white">{currentBid.toLocaleString()} kr</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Budavgift:</span>
            <span className="text-white">{biddingFee.toLocaleString()} kr</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Leveransavgift:</span>
            <span className="text-white">{deliveryFee.toLocaleString()} kr</span>
          </div>
          <div className="border-t border-gray-600 pt-2 flex justify-between">
            <span className="font-medium text-gray-300">Totalt:</span>
            <span className="font-bold text-accent">{totalCost.toLocaleString()} kr</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CostCalculator;