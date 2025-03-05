
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BankDetails {
  bankName: string;
  bankAddress: string;
  iban: string;
  swift: string;
}

interface BankDetailsFormProps {
  bankDetails: BankDetails;
  onBankDetailsChange: (field: string, value: string) => void;
}

export const BankDetailsForm = ({ bankDetails, onBankDetailsChange }: BankDetailsFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-white/80">Betalningsmetod</Label>
        <RadioGroup defaultValue="account" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="account" id="account" className="border-white/10 text-white" />
            <Label htmlFor="account" className="text-white">Kontonummer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bankgiro" id="bankgiro" className="border-white/10 text-white" />
            <Label htmlFor="bankgiro" className="text-white">Bankgiro</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="iban" id="iban" className="border-white/10 text-white" />
            <Label htmlFor="iban" className="text-white">IBAN</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="bank" className="text-white/80">Bank</Label>
          <Input
            id="bank"
            placeholder="Ange bank"
            value={bankDetails.bankName}
            onChange={(e) => onBankDetailsChange('bankName', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="accountNumber" className="text-white/80">Kontonummer/Bankgiro/IBAN</Label>
          <Input
            id="accountNumber"
            placeholder="Ange ditt kontonummer"
            value={bankDetails.iban}
            onChange={(e) => onBankDetailsChange('iban', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="clearingNumber" className="text-white/80">Clearingnummer</Label>
          <Input
            id="clearingNumber"
            placeholder="xxxx"
            value={bankDetails.swift}
            onChange={(e) => onBankDetailsChange('swift', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="accountHolder" className="text-white/80">Kontoinnehavare</Label>
          <Input
            id="accountHolder"
            placeholder="Ange kontoinnehavare"
            value={bankDetails.bankAddress}
            onChange={(e) => onBankDetailsChange('bankAddress', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
      </div>
    </div>
  );
};
