
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SwitchSetting {
  title: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

interface AuctionSwitchSettingsProps {
  settings: SwitchSetting[];
}

export const AuctionSwitchSettings = ({ settings }: AuctionSwitchSettingsProps) => {
  return (
    <div className="space-y-4">
      {settings.map((setting, index) => (
        <div 
          key={index} 
          className="flex items-center justify-between p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-colors"
        >
          <div className="space-y-1.5 flex-1 mr-6">
            <Label className="text-base font-medium text-white">{setting.title}</Label>
            <p className="text-sm text-white/70 leading-relaxed">{setting.description}</p>
          </div>
          <Switch
            checked={setting.checked}
            onCheckedChange={setting.onCheckedChange}
            className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
          />
        </div>
      ))}
    </div>
  );
};
