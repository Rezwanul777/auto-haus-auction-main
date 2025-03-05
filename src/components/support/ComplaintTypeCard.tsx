
import { Button } from "@/components/ui/button";
import { ComplaintType } from "./ComplaintTypeSelector";

interface ComplaintTypeCardProps {
  type: ComplaintType;
  onSelect: (type: ComplaintType) => void;
}

export const ComplaintTypeCard = ({ type, onSelect }: ComplaintTypeCardProps) => {
  return (
    <Button
      variant="outline"
      className="flex flex-col items-center p-6 h-auto space-y-3 bg-black/20 border-white/20 hover:bg-black/30 w-full min-h-[180px] break-words"
      onClick={() => onSelect(type)}
    >
      {type.icon}
      <span className="text-xl font-semibold text-white">{type.label}</span>
      <span className="text-sm text-white/90 text-center leading-relaxed px-2 w-full">
        {type.description}
      </span>
    </Button>
  );
};

