
import { CreditCard } from "lucide-react";

interface BankAccount {
  id: number;
  accountNumber: string;
  bankName: string;
  isDefault: boolean;
}

interface BankAccountsListProps {
  bankAccounts: BankAccount[];
}

export const BankAccountsList = ({ bankAccounts }: BankAccountsListProps) => {
  return (
    <div className="space-y-2">
      {bankAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/10"
        >
          <div className="flex items-center gap-3">
            <CreditCard className="h-4 w-4 text-white/60" />
            <div>
              <p className="text-white text-sm font-medium">{account.bankName}</p>
              <p className="text-white/60 text-sm">{account.accountNumber}</p>
            </div>
          </div>
          {account.isDefault && (
            <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">
              Standard
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
