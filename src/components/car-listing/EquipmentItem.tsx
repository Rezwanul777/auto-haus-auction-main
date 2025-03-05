
import { Check, Circle } from "lucide-react";

interface EquipmentItemProps {
  item: string;
}

const EquipmentItem = ({ item }: EquipmentItemProps) => {
  return (
    <div className="flex items-center gap-1 bg-black/20 p-2 rounded-lg">
      <Check className="w-5 h-5 text-green-500" />
      <Circle className="w-1.5 h-1.5 text-white/20" />
      <span className="text-white">{item}</span>
    </div>
  );
};

export default EquipmentItem;
