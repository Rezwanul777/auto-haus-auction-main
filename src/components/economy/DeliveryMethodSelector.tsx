import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface DeliveryMethodSelectorProps {
  value: 'pickup' | 'delivery';
  onChange: (value: 'pickup' | 'delivery') => void;
}

export const DeliveryMethodSelector = ({ value, onChange }: DeliveryMethodSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="font-semibold text-white">Välj leveransmetod</div>
      <RadioGroup 
        defaultValue={value}
        onValueChange={(value) => onChange(value as 'pickup' | 'delivery')}
        className="flex flex-col space-y-4"
      >
        <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
          <RadioGroupItem value="pickup" id="pickup" className="border-white data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
          <Label htmlFor="pickup" className="text-white cursor-pointer">Upphämtning</Label>
        </div>
        <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
          <RadioGroupItem value="delivery" id="delivery" className="border-white data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
          <Label htmlFor="delivery" className="text-white cursor-pointer">Hemleverans</Label>
        </div>
      </RadioGroup>
    </div>
  );
};