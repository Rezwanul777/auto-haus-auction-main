
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FrequencyOption {
  value: string;
  label: string;
}

interface NotificationFrequency {
  title: string;
  description: string;
  value: string;
  options: FrequencyOption[];
  onValueChange: (value: string) => void;
}

interface NotificationFrequencySettingsProps {
  frequencies: NotificationFrequency[];
}

export const NotificationFrequencySettings = ({ frequencies }: NotificationFrequencySettingsProps) => {
  return (
    <div className="space-y-4">
      {frequencies.map((freq, index) => (
        <div 
          key={index}
          className="flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
        >
          <div className="space-y-1.5 flex-1 mr-6">
            <Label className="text-base font-medium text-white">{freq.title}</Label>
            <p className="text-sm text-white/70 leading-relaxed">{freq.description}</p>
          </div>
          <Select value={freq.value} onValueChange={freq.onValueChange}>
            <SelectTrigger className="w-[180px] bg-black/20 border-white/10 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {freq.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
};
