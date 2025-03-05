import { Card } from "@/components/ui/card";
import { CircleDot } from "lucide-react";

interface TireInfoProps {
  tires: {
    current: {
      depth: string;
      type: string;
    };
    extra: {
      exists: boolean;
      depth: string;
      type: string;
    };
  };
}

const TireInfo = ({ tires }: TireInfoProps) => {
  return (
    <Card className="glass-card animate-fade-in">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Däckuppsättning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CircleDot className="w-5 h-5 text-accent" />
              <h3 className="font-medium text-white">
                Nuvarande däck ({tires.current.type})
              </h3>
            </div>
            <p className="text-gray-400">Mönsterdjup: {tires.current.depth} mm</p>
          </div>
          {tires.extra.exists && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CircleDot className="w-5 h-5 text-accent" />
                <h3 className="font-medium text-white">
                  Extra däck ({tires.extra.type})
                </h3>
              </div>
              <p className="text-gray-400">Mönsterdjup: {tires.extra.depth} mm</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TireInfo;