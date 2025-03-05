
import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BankDetailsForm } from "./BankDetailsForm";
import { BankAccountsList } from "./BankAccountsList";

interface BankDetails {
  bankName: string;
  bankAddress: string;
  iban: string;
  swift: string;
}

interface BankAccount {
  id: number;
  accountNumber: string;
  bankName: string;
  isDefault: boolean;
}

interface BankSectionProps {
  bankDetails: BankDetails;
  bankAccounts: BankAccount[];
  onBankDetailsChange: (field: string, value: string) => void;
  onAddBankAccount: () => void;
}

export const BankSection = ({
  bankDetails,
  bankAccounts,
  onBankDetailsChange,
  onAddBankAccount,
}: BankSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Building className="h-5 w-5 text-white/80" />
        <h3 className="text-lg font-medium text-white">Utbetalningsinformation</h3>
      </div>

      <BankDetailsForm 
        bankDetails={bankDetails}
        onBankDetailsChange={onBankDetailsChange}
      />

      <Button 
        onClick={onAddBankAccount}
        className="w-full md:w-auto"
        variant="outline"
      >
        Lägg till bankkonto
      </Button>

      <div className="space-y-3">
        <h4 className="text-white/80 text-sm font-medium">Registrerade bankkonton</h4>
        <BankAccountsList bankAccounts={bankAccounts} />
      </div>
    </div>
  );
};
