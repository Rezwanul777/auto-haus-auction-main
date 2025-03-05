import { Card } from "@/components/ui/card";
import { AlertCircle, Image } from "lucide-react";

interface DamageInfoProps {
  damage: {
    hasWindshieldDamage: boolean;
    hasAccidentReport: boolean;
    description: string;
    images: string[];
  };
}

const DamageInfo = ({ damage }: DamageInfoProps) => {
  return (
    <Card className="glass-card animate-fade-in">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Skador och Skick</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent mt-1" />
              <div>
                <h3 className="font-medium text-white mb-1">Vindruta</h3>
                <p className="text-gray-400">
                  {damage.hasWindshieldDamage ? "Skadad" : "Oskadd"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent mt-1" />
              <div>
                <h3 className="font-medium text-white mb-1">Skadeanmälan</h3>
                <p className="text-gray-400">
                  {damage.hasAccidentReport ? "Finns" : "Finns ej"}
                </p>
              </div>
            </div>
          </div>

          {damage.description && (
            <div>
              <h3 className="font-medium text-white mb-2">Beskrivning av skador</h3>
              <p className="text-gray-400">{damage.description}</p>
            </div>
          )}

          {damage.images.length > 0 && (
            <div>
              <h3 className="font-medium text-white mb-4">Bilder på skador</h3>
              <div className="grid grid-cols-2 gap-4">
                {damage.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden group hover-scale">
                    <Image className="w-6 h-6 absolute top-2 right-2 text-white z-10" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <img
                      src={`/path/to/${image}`}
                      alt={`Skada ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DamageInfo;