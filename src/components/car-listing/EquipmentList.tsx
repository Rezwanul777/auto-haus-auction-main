import { Card } from "@/components/ui/card";
import EquipmentItem from "./EquipmentItem";

interface EquipmentListProps {
  equipment: string[];
}

const EquipmentList = ({ equipment }: EquipmentListProps) => {
  return (
    <Card className="glass-card animate-fade-in">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Utrustning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {equipment.map((item, index) => (
            <EquipmentItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default EquipmentList;