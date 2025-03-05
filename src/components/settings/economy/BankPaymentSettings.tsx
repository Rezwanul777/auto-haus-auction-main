
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BankPaymentSettingsProps {
  notifyThreshold: string;
  onNotifyThresholdChange: (value: string) => void;
}

export const BankPaymentSettings = ({
  notifyThreshold,
  onNotifyThresholdChange,
}: BankPaymentSettingsProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="notifyThreshold" className="text-white/80">Notifiera vid budgräns (kr)</Label>
        <Input
          id="notifyThreshold"
          type="number"
          value={notifyThreshold}
          onChange={(e) => onNotifyThresholdChange(e.target.value)}
          className="bg-black/20 border-white/10 text-white"
        />
      </div>
    </div>
  );
};
