
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { NotificationFrequencySettings } from "../auction/NotificationFrequencySettings";

interface FrequencyOption {
  value: string;
  label: string;
}

interface FrequencySettings {
  title: string;
  description: string;
  value: string;
  options: FrequencyOption[];
  onValueChange: (value: string) => void;
}

interface NotificationTypeItemProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  frequencySettings?: FrequencySettings;
}

export const NotificationTypeItem = ({
  id,
  label,
  checked,
  onCheckedChange,
  isExpanded,
  onToggleExpand,
  frequencySettings
}: NotificationTypeItemProps) => {
  return (
    <div className="space-y-2">
      <div 
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-black/20 transition-colors cursor-pointer"
        onClick={onToggleExpand}
      >
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(checked) => {
            onCheckedChange(checked as boolean);
          }}
          onClick={(e) => e.stopPropagation()}
        />
        <Label htmlFor={id} className="text-white cursor-pointer flex-1">{label}</Label>
      </div>
      
      {isExpanded && frequencySettings && (
        <div className="ml-8 mt-2">
          <NotificationFrequencySettings 
            frequencies={[frequencySettings]}
          />
        </div>
      )}
    </div>
  );
};
