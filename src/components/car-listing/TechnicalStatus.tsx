import { Card } from "@/components/ui/card";
import { Check, X, AlertTriangle } from "lucide-react";

interface ComponentStatusProps {
  status: string;
  label: string;
  comment?: string;
}

const ComponentStatus = ({ status, label, comment }: ComponentStatusProps) => (
  <div className="flex items-center justify-between p-4 border-b border-white/10 last:border-b-0">
    <div className="flex items-center gap-3">
      {status === "ok" ? (
        <Check className="w-6 h-6 text-green-500" />
      ) : status === "warning" ? (
        <AlertTriangle className="w-6 h-6 text-yellow-500" />
      ) : (
        <X className="w-6 h-6 text-red-500" />
      )}
      <span className="font-medium text-white">{label}</span>
    </div>
    {comment && <span className="text-gray-400 text-sm">{comment}</span>}
  </div>
);

interface TechnicalStatusProps {
  components: {
    engine: { status: string; comment: string };
    brakes: { status: string; comment: string };
    techAndEquipment: { status: string; comment: string };
    body: { status: string; comment: string };
  };
}

const TechnicalStatus = ({ components }: TechnicalStatusProps) => {
  return (
    <Card className="glass-card animate-fade-in">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Teknisk Status</h2>
        <div className="divide-y divide-white/10">
          <ComponentStatus 
            status={components.engine.status} 
            label="Motor & växellåda" 
            comment={components.engine.comment} 
          />
          <ComponentStatus 
            status={components.brakes.status} 
            label="Bromsar" 
            comment={components.brakes.comment} 
          />
          <ComponentStatus 
            status={components.techAndEquipment.status} 
            label="Teknik & utrustning" 
            comment={components.techAndEquipment.comment} 
          />
          <ComponentStatus 
            status={components.body.status} 
            label="Kaross" 
            comment={components.body.comment} 
          />
        </div>
      </div>
    </Card>
  );
};

export default TechnicalStatus;