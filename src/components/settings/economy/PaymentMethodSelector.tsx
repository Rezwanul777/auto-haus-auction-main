
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentMethodSelectorProps {
  paymentMethod: string;
  onPaymentMethodChange: (value: string) => void;
}

export const PaymentMethodSelector = ({ paymentMethod, onPaymentMethodChange }: PaymentMethodSelectorProps) => {
  return (
    <div>
      <Label htmlFor="paymentMethod" className="text-white/80">Föredragen betalningsmetod</Label>
      <Select value={paymentMethod} onValueChange={onPaymentMethodChange}>
        <SelectTrigger className="bg-black/20 border-white/10 text-white mt-1">
          <SelectValue placeholder="Välj betalningsmetod" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bank">Bankbetalning</SelectItem>
          <SelectItem value="card">Kreditkort</SelectItem>
          <SelectItem value="swish">Swish</SelectItem>
          <SelectItem value="invoice">Faktura</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
